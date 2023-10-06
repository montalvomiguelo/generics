/**
 * @template {{showBanner: boolean, showLogOut: boolean}} T
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

const flags = getHomePageFeatureFlags(
  EXAMPLE_CONFIG,
  (defaultFlags) => defaultFlags
)
