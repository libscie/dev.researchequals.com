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
              Solid workflows
              <br />
              <RoughNotation
                type="highlight"
                show={true}
                color="#fef08a"
                animate={false}
              >
                lead to
              </RoughNotation>
              <br />
              solid research
            </h1>
            <p>
              Make publishing and curating research part of your daily workflow.
            </p>
          </div>
          {/* Illustrative image */}
          <div className="flex w-auto max-w-full items-center p-8">
            <img
              src="https://placeholder.pics/svg/600x300"
              className="max-h-2xl mx-auto w-auto max-w-full lg:mx-0"
            />
          </div>
        </div>
        <hr />
        {/* Connect */}
        {/* supporting institutions */}
        {/* Testimonials */}
        {/* Collections */}
        {/* runs on */}
        {/* and much more... feature grid*/}
      </main>
    </>
  )
}

export default HomePage
