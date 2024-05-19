interface Benefit {
  benefit: string
  image: string
  description: string
}

type Benefits = Benefit[]

const PrimaryBenefits = ({ benefits }: { benefits: Benefits }) => {
  return (
    <div>
      {benefits.map((benefit) => (
        <div key={benefit.benefit} className="grid gap-8 lg:grid-cols-2">
          <div className="justify-items flex items-center p-2 lg:text-right ">
            <div className="float right-0 w-full">
              <h2 className="text-4xl leading-[3.5rem] lg:text-5xl lg:leading-[5rem]">
                {benefit.benefit}
              </h2>
              <p>{benefit.description}</p>
            </div>
          </div>
          <div className="flex w-auto max-w-full items-center p-8">
            <img
              src={benefit.image}
              className="max-h-2xl mx-auto w-auto max-w-full lg:mx-0"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PrimaryBenefits
