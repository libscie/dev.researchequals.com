import {
  Events,
  FingerprintRecognition,
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
]
