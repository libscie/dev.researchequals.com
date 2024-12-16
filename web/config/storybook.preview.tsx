import * as React from 'react'

import type { GlobalTypes } from '@storybook/csf'
import type { StoryFn, StoryContext } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'web/src/i18n'

/** @type { import("@storybook/csf").GlobalTypes } */
/** @type { import("@storybook/csf").GlobalTypes } */
export const globalTypes: GlobalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        {
          value: 'en',
          right: '🇺🇸',
          title: 'English',
        },
        // {
        //   value: 'fr',
        //   right: '🇫🇷',
        //   title: 'Français',
        // },
      ],
    },
  },
}
/**
 * An example, no-op storybook decorator. Use a function like this to create decorators.
 * @param { import("@storybook/react").StoryFn} StoryFn
 * @param { import("@storybook/react").StoryContext} context
 */
const _exampleDecorator = (StoryFn: StoryFn, _context: StoryContext) => {
  return <StoryFn />
}
/**
 * We're following Storybook's naming convention here. See for example
 * https://github.com/storybookjs/addon-kit/blob/main/src/withGlobals.ts
 * Unfortunately that will make eslint complain, so we have to disable it when
 * using a hook below
 * @param { import("@storybook/react").StoryFn} StoryFn
 * @param { import("@storybook/react").StoryContext} context
 */
const withI18n = (StoryFn: StoryFn, context: StoryContext) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    i18n.changeLanguage(context.globals.locale)
  }, [context.globals.locale])
  return (
    <I18nextProvider i18n={i18n}>
      <StoryFn />
    </I18nextProvider>
  )
}
export const decorators = [withI18n]
