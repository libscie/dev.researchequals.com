'use client'

import { useState } from 'react'

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
  ExclamationTriangleIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

import useQuickSearch from 'src/hooks/useQuickSearch'
import { classNames } from 'src/utils'

import Loader from '../Loader/Loader'

// Source: https://tailwindui.com/components/application-ui/navigation/command-palettes#component-540bdf1e4a0e2ec2f667a2c7c123ff0f
export default function QuickSearch() {
  const [rawQuery, setRawQuery] = useState('')
  const { t } = useTranslation()
  const { loading, projects, users } = useQuickSearch(rawQuery)

  const handleSelect = (value: string) => {
    // if (value.startsWith('https://')) {
    setRawQuery('')
    window.open(value, '_blank', 'noopener,noreferrer')
    // }
  }

  return (
    <div className="inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
      <Combobox onChange={handleSelect}>
        <div className="grid grid-cols-1">
          <ComboboxInput
            className="col-start-1 row-start-1 h-12 w-full rounded-t-xl bg-violet-200/50 pl-11 pr-4 text-base text-violet-950 outline-none placeholder:font-serif placeholder:text-violet-950/60 focus:outline-none focus:ring focus:ring-violet-300 sm:text-sm dark:bg-indigo-900/50 dark:text-violet-50 dark:placeholder:text-violet-50/50 dark:focus:ring-indigo-400"
            placeholder={t('QuickSearch.placeholder')}
            onChange={(event) => setRawQuery(event.target.value)}
            onBlur={() => setRawQuery('')}
          />
          <MagnifyingGlassIcon
            className="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-violet-950/80  dark:text-violet-50/80"
            aria-hidden="true"
          />
        </div>

        {(projects.length > 0 || users.length > 0) && (
          <ComboboxOptions
            static
            as="ul"
            className="max-h-80 transform-gpu scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto bg-violet-200/25 p-4 pb-2 dark:bg-indigo-900/25"
          >
            {projects.length > 0 && (
              <li>
                <h2 className="text-xs font-semibold text-gray-900 dark:text-violet-50/80">
                  {t('QuickSearch.projects')}
                </h2>
                <ul className="-mx-4 mt-2 text-sm text-gray-700 dark:text-violet-50">
                  {projects.map((project) => (
                    <ComboboxOption
                      as="a"
                      key={project.id}
                      value={`/${project.id}`}
                      href={`/${project.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex select-none items-center px-4 py-2 data-[focus]:bg-violet-900 data-[focus]:text-white dark:data-[focus]:bg-indigo-900"
                    >
                      <span className="ml-2 flex-auto truncate">
                        {project.title}
                      </span>
                    </ComboboxOption>
                  ))}
                </ul>
              </li>
            )}
            {users.length > 0 && (
              <li>
                <h2 className="text-xs font-semibold text-gray-900 dark:text-violet-50/80">
                  {t('QuickSearch.authors')}
                </h2>
                <ul className="-mx-4 mt-2 text-sm text-gray-700 dark:text-violet-50">
                  {users.map((user) => (
                    <ComboboxOption
                      as="a"
                      key={user.id}
                      value={`/${user.id}`}
                      href={`/${user.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex select-none items-center px-4 py-2 data-[focus]:bg-violet-900 data-[focus]:text-white dark:data-[focus]:bg-indigo-900"
                    >
                      <span className="ml-2 flex-auto truncate">
                        {user.display_name}
                      </span>
                    </ComboboxOption>
                  ))}
                </ul>
              </li>
            )}
          </ComboboxOptions>
        )}

        {rawQuery === '?' && (
          <ComboboxOptions
            static
            as="ul"
            className="max-h-80 transform-gpu scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto bg-violet-200/25 p-4 pb-2 dark:bg-indigo-900/25"
          >
            <div className="mx-auto max-w-sm px-6 py-14 text-center text-sm sm:px-14">
              <LifebuoyIcon
                className="mx-auto size-6 text-gray-400 dark:text-violet-50/80"
                aria-hidden="true"
              />
              <p className="mt-4 font-semibold text-gray-900 dark:text-violet-50/80">
                {t('QuickSearch.help-title')}
              </p>
              <p className="mt-2 text-gray-500 dark:text-violet-50/60">
                {t('QuickSearch.help-description')}
              </p>
            </div>
          </ComboboxOptions>
        )}

        {loading && (
          <ComboboxOptions
            static
            as="ul"
            className="max-h-80 transform-gpu scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto bg-violet-200/25 p-4 pb-2 text-gray-700 dark:bg-indigo-900/25 dark:text-violet-50"
          >
            <div className="mx-auto max-w-sm px-6 py-14 text-center text-sm sm:px-14">
              <Loader stroke="#574cfa" />
            </div>
          </ComboboxOptions>
        )}
        {rawQuery !== '' &&
          rawQuery !== '?' &&
          projects.length === 0 &&
          users.length === 0 &&
          !loading &&
          rawQuery.length > 3 && (
            <ComboboxOptions
              static
              as="ul"
              className="max-h-80 transform-gpu scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto bg-violet-200/25 p-4 pb-2 text-gray-700 dark:bg-indigo-900/25 dark:text-violet-50"
            >
              <div className="mx-auto max-w-sm px-6 py-14 text-center text-sm sm:px-14">
                <ExclamationTriangleIcon
                  className="mx-auto size-6 text-gray-400 dark:text-violet-50/80"
                  aria-hidden="true"
                />
                <p className="mt-4 font-semibold text-gray-900 dark:text-violet-50/80">
                  {t('QuickSearch.no-results-title')}
                </p>
                <p className="mt-2 text-gray-500 dark:text-violet-50/60">
                  {t('QuickSearch.no-results-description')}
                </p>
              </div>
            </ComboboxOptions>
          )}

        <div className="flex flex-wrap items-center rounded-b-xl bg-violet-200/25 px-4 py-2.5 text-xs text-gray-700 dark:bg-indigo-900/25 dark:text-violet-50 dark:text-violet-50/80">
          {t('QuickSearch.help-p1')}
          <kbd
            className={classNames(
              'mx-1 flex size-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
              rawQuery.startsWith('@')
                ? 'border-indigo-600 text-indigo-600'
                : 'border-gray-400 text-gray-900'
            )}
          >
            &#64;
          </kbd>{' '}
          {t('QuickSearch.help-p2')}
          <kbd
            className={classNames(
              'mx-1 flex size-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
              rawQuery === '?'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-gray-400 text-gray-900'
            )}
          >
            ?
          </kbd>
          {t('QuickSearch.help-p3')}
        </div>
      </Combobox>
    </div>
  )
}
