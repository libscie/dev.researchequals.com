# ResearchEquals

[![Netlify Status](https://api.netlify.com/api/v1/badges/271af12d-2f2c-4032-b715-0adca1189116/deploy-status)](https://app.netlify.com/sites/dev-researchequals-com/deploys)

This repository contains the second iteration of ResearchEquals that we are developing.

For the in production code (`v1`), please see `libscie/ResearchEquals.com`.

## Development

The tech stack is based on [RedwoodJS](https://redwoodjs.com) ([Redwood Documentation](https://docs.redwoodjs.com)).

### Local Installation

We want to make it easy for you to get started developing. If you prefer to install everything locally, pick your OS and follow the steps. We are assuming you are starting from scratch.

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

### Docker Installation

We also supply a Docker environment to get up and running. If you are unfamiliar with Docker, you may not want to take this route.

```sh
docker compose -f docker-compose.dev.yml up

# Then, connect to the container and migrate your database:
docker compose -f ./docker-compose.dev.yml run --rm -it console /bin/bash
# From within the docker container
yarn rw prisma migrate dev
```

<!-- For more information on contributing to ResearchEquals, please see the contributing docs. -->

<!-- ## Terminology

| Old | New |
| --- | ---  |
| Workspace | Profile |
| Collection | Magazine | -->

<!-- ## Quality Assurance

We want our software to be of high quality, follow best practices, and be compliant with various regulations across the world. In short, we want ResearchEquals to be a great experience. To that end, we continuously expand our testing procedures for all the components and pages we include.

Right now we test for the following:

* 100% typed components
* [WCAG 2.1 AA standard](https://www.w3.org/TR/WCAG21/) (component level)
* Responsive design
* Support for localization
  * Support for LTR and RTL languages
* -->
