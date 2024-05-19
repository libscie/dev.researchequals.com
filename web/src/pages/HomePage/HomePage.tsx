import React from 'react'

import { Metadata } from '@redwoodjs/web'

import Hero from 'src/components/Hero/Hero'
import PrimaryBenefits from 'src/components/PrimaryBenefits/PrimaryBenefits'
import PrimaryCallToAction from 'src/components/PrimaryCallToAction/PrimaryCallToAction'
import PrimarySocialProof from 'src/components/PrimarySocialProof/PrimarySocialProof'
import SecondaryBenefits from 'src/components/SecondaryBenefits/SecondaryBenefits'
import SecondaryCallToAction from 'src/components/SecondaryCallToAction/SecondaryCallToAction'
import SecondarySocialProof from 'src/components/SecondarySocialProof/SecondarySocialProof'
import UniqueSellingPoint from 'src/components/UniqueSellingPoint/UniqueSellingPoint'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <main>
        <Hero />
        <hr />
        <UniqueSellingPoint />
        <PrimaryBenefits
          benefits={[
            {
              benefit: 'Solid workflows',
              image: 'https://placeholder.pics/svg/600x400',
              description: 'This is a test description',
            },
            {
              benefit: 'Solid (re)search',
              image: 'https://placeholder.pics/svg/600x400',
              description:
                'Search through 250 million records to find what you need.',
            },
          ]}
        />
        <hr />
        <PrimarySocialProof />
        <PrimaryCallToAction />
        <SecondaryBenefits />
        <hr />
        <SecondarySocialProof />
        <SecondaryCallToAction />
      </main>
    </>
  )
}

export default HomePage
