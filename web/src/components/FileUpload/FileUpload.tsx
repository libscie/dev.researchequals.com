// TODO:
// 1. Handle too large files
// 2. Handle file upload errors
// 3. Add a loading spinner while uploading

import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'

const GET_PRESIGNED_POST = gql`
  mutation GetPresignedPost($filename: String!) {
    getPresignedPost(filename: $filename) {
      url
      fields
      filename
    }
  }
`

interface FileUploadProps {
  onSuccess?: (fileUrl: string) => void
}

const FileUpload = ({ onSuccess }: FileUploadProps) => {
  const [getPresignedPost] = useMutation(GET_PRESIGNED_POST)
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setFile(event.target.files[0])
    }
  }

  const uploadFile = async () => {
    if (!file) return
    setUploading(true)

    try {
      const { data } = await getPresignedPost({
        variables: { filename: file.name },
      })

      const formData = new FormData()
      Object.entries(data.getPresignedPost.fields).forEach(([key, value]) => {
        formData.append(key, value as string)
      })

      formData.append('file', file)
      const upload = await fetch(data.getPresignedPost.url, {
        method: 'POST',
        body: formData,
      })

      if (upload.ok) {
        const location = Object.fromEntries(upload.headers.entries()).location
        onSuccess?.(location)
      }
    } catch (error) {
      console.error('Upload error:', error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <p>
        <button onClick={uploadFile} disabled={!file || uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </p>
    </div>
  )
}

export default FileUpload
