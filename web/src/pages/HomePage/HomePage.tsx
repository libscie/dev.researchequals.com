import { Metadata } from '@redwoodjs/web'
import React from 'react'
import Hero from 'src/components/Hero/Hero'
import PrimaryBenefits from 'src/components/PrimaryBenefits/PrimaryBenefits'

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
          image: 'https://placeholder.pics/svg/600x300',
        }, {
          benefit: 'Solid research',
          image: 'https://placeholder.pics/svg/600x300',

        }]}/>
        <hr />
        {/* Primary social proof */}
        {/* Primary call to action */}
        {/* Secondary benefits */}
        {/* Secondary social proof */}
        {/* Secondary call to action */}
      </main>
    </>
  )
}

export default HomePage
