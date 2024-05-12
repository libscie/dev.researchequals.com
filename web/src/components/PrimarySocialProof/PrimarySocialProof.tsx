const PrimarySocialProof = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-lg font-semibold leading-8 text-gray-900">
            Financially supported by
          </h2>
          <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-violet-100 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-violet-900/5">
            <span className="hidden md:inline">Make an appointment to join this list.{' '}</span>
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />Find a time{' '}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PrimarySocialProof
