import {defineCliConfig} from 'sanity/cli'
import {createRequire} from 'node:module'

const require = createRequire(import.meta.url)

export default defineCliConfig({
  api: {
    projectId: 'mqkdg673',
    dataset: 'production',
  },
  studioHost: 'every-media',
  vite: {
    resolve: {
      alias: {
        // React 18 has no react/compiler-runtime export; Sanity Vite expects it.
        'react/compiler-runtime': require.resolve('react-compiler-runtime'),
      },
    },
  },
})
