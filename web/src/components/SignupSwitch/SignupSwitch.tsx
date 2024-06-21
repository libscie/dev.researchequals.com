import { Checkmark, Close } from '@carbon/icons-react'
import { Switch } from '@headlessui/react'

import { classNames } from 'src/utils'

const SignupSwitch = ({ state, stateUpdateFn, label, children }) => {
  return (
    <div className="m-4 flex">
      <Switch
        checked={state}
        onChange={stateUpdateFn}
        className={classNames(
          state ? 'bg-violet-950' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-0'
        )}
      >
        <span className="sr-only">{label}</span>
        <span
          className={classNames(
            state ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        >
          <span
            className={classNames(
              state
                ? 'opacity-0 duration-100 ease-out'
                : 'opacity-100 duration-200 ease-in',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <Close
              size={32}
              className="h-3 w-3 stroke-current stroke-2 text-gray-400"
            />
          </span>
          <span
            className={classNames(
              state
                ? 'opacity-100 duration-200 ease-in'
                : 'opacity-0 duration-100 ease-out',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <Checkmark
              size={32}
              className="h-3 w-3 stroke-current stroke-2 text-violet-950"
            />
          </span>
        </span>
      </Switch>
      <p className="mx-2 text-base font-normal text-gray-500">{children}</p>
    </div>
  )
}

export default SignupSwitch
