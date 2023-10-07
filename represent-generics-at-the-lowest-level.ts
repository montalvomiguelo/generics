import { expectType } from 'ts-expect'

export const getHomePageFeatureFlags = <T>(
  config: { rawConfig: { featureFlags: { homePage: T } } },
  override: (flags: T) => T
) => {
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

expectType<{
  showBanner: boolean
  showLogOut: boolean
}>(getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => defaultFlags))

expectType<{
  showBanner: boolean
  showLogOut: boolean
}>(
  getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => ({
    ...defaultFlags,
    showLogOut: false,
  }))
)
