import {
  Book,
  DocumentMultiple_01,
  Events,
  Finance,
  FingerprintRecognition,
  User,
  UserAvatarFilledAlt,
} from '@carbon/icons-react'

import { routes } from '@redwoodjs/router'

export const settingsNav = [
  { name: 'General', href: routes.settings(), icon: Events },
  {
    name: 'Security',
    href: routes.settingsSecurity(),
    icon: FingerprintRecognition,
  },
  {
    name: 'Workspace',
    href: routes.settingsWorkspace(),
    icon: UserAvatarFilledAlt,
  },
  {
    name: 'Workspace',
    href: routes.settingsWorkspace(),
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg',
  },
]

export const searchNav = [
  {
    name: 'Works',
    href: routes.works(),
    icon: DocumentMultiple_01,
  },
  {
    name: 'Authors',
    href: routes.author(),
    icon: User,
  },
  {
    name: 'Organizations',
    href: routes.administration(),
    icon: Finance,
  },
  {
    name: 'Sources',
    href: routes.moderation(),
    icon: Book,
  },
]
