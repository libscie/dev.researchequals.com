import { Metadata } from '@redwoodjs/web'
import { RoughNotation } from 'react-rough-notation'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <main>
        {/* Hero */}
        <div className="grid w-full gap-8 lg:mx-auto lg:grid-cols-2">
          <div className="p-2 text-center lg:text-right">
            <h1 className="text-5xl leading-[4rem] lg:text-7xl lg:leading-[8rem]">
              Solid research{' '}
              <RoughNotation
                type="highlight"
                show={true}
                color="#fef08a"
                animate={false}
              >
                requires
              </RoughNotation>
              <br />a solid workflow
            </h1>
            <p>
              Upgrade how you read, publish, and curate with ResearchEquals.
            </p>
          </div>
          <div className="flex w-auto max-w-full items-center p-8">
            <img
              src="https://placeholder.pics/svg/600x300"
              className="max-h-2xl mx-auto w-auto max-w-full lg:mx-0"
            />
          </div>
        </div>
        <hr />
      </main>
    </>
  )
}

export default HomePage
