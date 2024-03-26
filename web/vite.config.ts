import dns from 'dns'

import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import mdPlugin, { Mode } from 'vite-plugin-markdown'

import redwood from '@redwoodjs/vite'

// So that Vite will load on localhost instead of `127.0.0.1`.
// See: https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder('verbatim')

const viteConfig: UserConfig = {
  plugins: [
    redwood(),
    mdPlugin({ mode: [Mode.HTML, Mode.MARKDOWN, Mode.TOC, Mode.REACT] }),
  ],
}

export default defineConfig(viteConfig)
