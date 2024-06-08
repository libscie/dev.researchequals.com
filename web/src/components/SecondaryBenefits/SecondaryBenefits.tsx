import { LogoDiscord } from '@carbon/icons-react'

const features = [
  {
    name: 'Group authoring',
    description:
      'You can author as individuals and as groups. This means you can choose the best format for authorship - as a group of individuals, as a team, or as an organization.',
    icon: LogoDiscord,
  },
  {
    name: 'Private',
    description: 'We do not and never will track your usage.',
    icon: LogoDiscord,
  },
  {
    name: 'Moderate Moderation',
    description:
      'Create a community around your research and moderate it as you see fit.',
    icon: LogoDiscord,
  },
  {
    name: 'Feedback > peer review',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: LogoDiscord,
  },
  {
    name: 'Email digests',
    description: 'Get a digest of the activity every day, week, or month.',
    icon: LogoDiscord,
  },
  {
    name: 'Federated',
    description:
      'You can follow authors or collections throughout the fediverse.',
    icon: LogoDiscord,
  },
  {
    name: 'Open Source',
    description:
      'All code is open source and you can inspect how things work under the hood.',
    icon: LogoDiscord,
  },
  {
    name: 'Self-hosted',
    description:
      'We provide a hosted service, but you can also run your own instance.',
    icon: LogoDiscord,
  },
]

const SecondaryBenefits = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:max-w-7xl lg:px-8 lg:py-40">
        <h2 className="text-4xl font-bold tracking-tight ">
          Secondary benefits
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 ">
          There is plenty more to discover. Here are some of the benefits we see
          and hear about.
        </p>
        <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl  bg-opacity-10">
                  <feature.icon className="h-8 w-8 " aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold leading-8 ">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base leading-7 ">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SecondaryBenefits
