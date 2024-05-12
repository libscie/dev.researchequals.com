import { Metadata } from '@redwoodjs/web'
import React from 'react'
import Hero from 'src/components/Hero/Hero'
import PrimaryBenefits from 'src/components/PrimaryBenefits/PrimaryBenefits'
import PrimaryCallToAction from 'src/components/PrimaryCallToAction/PrimaryCallToAction'
import PrimarySocialProof from 'src/components/PrimarySocialProof/PrimarySocialProof'
import SecondaryBenefits from 'src/components/SecondaryBenefits/SecondaryBenefits'
import SecondaryCallToAction from 'src/components/SecondaryCallToAction/SecondaryCallToAction'
import SecondarySocialProof from 'src/components/SecondarySocialProof/SecondarySocialProof'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <main>
        {/* Hero */}
        <Hero />
        <hr />
        {/* Unique selling point */}
        {/* Primary benefits */}
        <PrimaryBenefits benefits={[{
          benefit: 'Solid workflows',
          image: 'https://placeholder.pics/svg/600x600',
        }, {
          benefit: 'Solid research',
          image: 'https://placeholder.pics/svg/600x600',

        }]}/>
        <hr />
        <PrimarySocialProof />
        <hr />
        <PrimaryCallToAction />
        <hr />
        <SecondaryBenefits />
        <hr />
        <SecondarySocialProof />
        <hr />
        <SecondaryCallToAction />
      </main>
    </>
  )
}

export default HomePage
