# ResearchEquals

This repository contains the second iteration of ResearchEquals that we are developing. For the in production code (`v1`), please see `libscie/ResearchEquals.com`.

## Development

<details>
  <summary>macOS installation</summary>

Ensure you have `brew` installed before following this guide.

```sh
# Install nodejs + npm
brew install nodejs

# Install corepack (required for yarn)
npm install -g corepack
# Enable yarn
corepack enable

# Install dependencies
yarn install

# Install mysql
brew install mysql
# Add local variables
cp .env.example .env
echo "DATABASE_URL=mysql://root:@localhost:3306/dev-db-researchequals" >> .env

# Apply the migrations to your database
yarn rw prisma migrate dev
```

</details>

<details>
  <summary>Linux installation</summary>

To be added - see issue #6.

</details>

<details>
  <summary>Windows installation</summary>

To be added - see issue #5.

</details>

When you have followed the above instructions for your relevant operating system, you can run the following to get started with development:

```sh
yarn rw dev
```

### Docker

We also supply Docker instructions for those who want those:

```sh
docker compose -f docker-compose.dev.yml up

# Then, connect to the container and migrate your database:
docker compose -f ./docker-compose.dev.yml run --rm -it console /bin/bash
# From within the docker container
yarn rw prisma migrate dev
```

<!-- For more information on contributing to ResearchEquals, please see the contributing docs. -->
