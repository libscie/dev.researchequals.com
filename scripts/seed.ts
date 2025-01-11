// https://fakerjs.dev
import { faker } from '@faker-js/faker'
import { db } from 'api/src/lib/db'

// Manually apply seeds via the `yarn rw prisma db seed` command.
//
// Seeds automatically run the first time you run the `yarn rw prisma migrate dev`
// command and every time you run the `yarn rw prisma migrate reset` command.
//
// See https://redwoodjs.com/docs/database-seeds for more info

const createRandomWorkspace = () => {
  const givenName = faker.person.firstName()
  const name = faker.person.lastName()
  const handle = faker.internet.username(givenName, name)
  const avatar = faker.image.avatar()

  return {
    givenName,
    name,
    handle,
    avatar,
  }
}

export default async () => {
  try {
    const workspaces = Array.from({ length: 50 }, createRandomWorkspace)

    for (const workspace of workspaces) {
      await db.workspace.create({
        data: {
          handle: workspace.handle,
          givenName: workspace.givenName,
          name: workspace.name,
          avatar: workspace.avatar,
          Membership: {
            create: {
              role: 'OWNER',
              type: 'PRIMARY',
              user: {
                create: {
                  email: faker.internet.email(
                    workspace.givenName,
                    workspace.name
                  ),
                  hashedPassword: 'hashedpassword', // Replace with actual hashed password
                  salt: 'salt', // Replace with actual salt
                },
              },
            },
          },
        },
      })
    }

    console.info('50 workspaces created')
  } catch (error) {
    console.error(error)
  }
}
