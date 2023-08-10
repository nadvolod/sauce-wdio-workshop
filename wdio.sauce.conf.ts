import type { Options } from '@wdio/types'

import { config as baseConfig } from './wdio.conf.js'

export const config: Options.Testrunner = {
    ...baseConfig,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    capabilities: [{
        browserName: 'chrome',
        'sauce:options': {
            build: 'build-1234'
        }
    }, {
        browserName: 'firefox',
        'sauce:options': {
            build: 'build-1234'
        }
    }, {
        browserName: 'MicrosoftEdge',
        'sauce:options': {
            build: 'build-1234'
        }
    }, {
        browserName: 'safari',
        'sauce:options': {
            build: 'build-1234'
        }
    }],

    services: ['nuxt', ['sauce', {
        sauceConnect: true,
    }]]
}
