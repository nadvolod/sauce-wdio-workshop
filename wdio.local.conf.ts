import type { Options } from '@wdio/types'

import { config as baseConfig } from './wdio.conf.js'

export const config: Options.Testrunner = {
    ...baseConfig,
    capabilities: [{
        browserName: 'chrome',
        // browserVersion: 'stable' // or '115.0.5790.170'
    }],
}
