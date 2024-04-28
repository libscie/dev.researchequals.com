import { Metadata } from '@redwoodjs/web'
import { RoughNotation } from 'react-rough-notation'
import React from "react";

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <main>
        {/* Hero */}
        <div className='w-full grid gap-8 lg:grid-cols-2 lg:mx-auto'>
          <div className='text-center p-2 lg:text-right'>
            <h1 className='text-5xl lg:text-7xl leading-[4rem] lg:leading-[8rem]'>Solid research <RoughNotation type='highlight' show={true} color='#fef08a' animate={false}>requires</RoughNotation><br />a solid workflow</h1>
            <p>
              Upgrade how you read, publish, and curate with ResearchEquals.
            </p>
          </div>
          <div className='w-auto p-8 flex items-center'>
              <img src='https://placeholder.pics/svg/600x300' className='max-w-2xl max-h-2xl w-auto mx-auto lg:mx-0'/>
          </div>
        </div>
        <hr/>
      </main>
    </>
  )
}

export default HomePage