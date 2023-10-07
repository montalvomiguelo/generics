import { expectType } from 'ts-expect'

/**
 * @template T
 * @param {{rawConfig: { featureFlags: { homePage: T } }}} config
 * @param {(flags: T) => T} override
 */
export function getHomePageFeatureFlags(config, override) {
  return override(config.rawConfig.featureFlags.homePage)
}

const EXAMPLE_CONFIG = {
  apiEndpoint: 'https://api.example.com',
  apiVersion: 'v1',
  apiKey: '1234567890',
  rawConfig: {
    featureFlags: {
      homePage: {
        showBanner: true,
        showLogOut: false,
      },
      loginPage: {
        showCaptcha: true,
        showConfirmPassword: false,
      },
    },
  },
}

/**
 * @template {{showBanner: boolean, showLogOut: boolean}} T
 * @param {T} flags
 */
expectType(
  getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => defaultFlags)
)

/**
 * @template {{showBanner: boolean, showLogOut: boolean}} T
 * @param {T} flags
 */
expectType(
  getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => ({
    ...defaultFlags,
    showLogOut: false,
  }))
)
