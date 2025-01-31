import { S3Client } from '@aws-sdk/client-s3'
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'

const s3 = new S3Client({
  endpoint: process.env.S3_ENDPOINT, // MinIO/S3 URL
  region: 'us-east-1', // MinIO requires a default region
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_KEY!,
  },
  forcePathStyle: true, // Required for MinIO
})

const generateUniqueId = (filename) => {
  const timestamp = Date.now().toString(36)
  return `${timestamp}-${filename}`
}

export const getPresignedPost = async ({ filename }) => {
  const bucketName = process.env.S3_BUCKET

  const uniqueId = generateUniqueId(filename)

  const { url, fields } = await createPresignedPost(s3, {
    Bucket: bucketName,
    Key: uniqueId,
    Expires: 60, // URL expires in 60 seconds
    Fields: { acl: 'public-read' },
    Conditions: [['content-length-range', 0, 10485760 * 10]], // 10MB max
  })

  return { url, fields, filename: uniqueId }
}
