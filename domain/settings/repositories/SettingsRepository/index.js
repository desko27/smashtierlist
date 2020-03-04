const makeGetSetting = getItemFromStorage =>
  key => getItemFromStorage(`setting:${key}`)

export default function SettingsRepository ({ config, getItemFromStorage }) {
  const getSetting = makeGetSetting(getItemFromStorage)

  return {
    async getByKey (key) {
      const defaultValue = config.settings[key].default
      const settingValue = getSetting(key)
      if (typeof settingValue === 'undefined' || settingValue === null) return defaultValue
      return JSON.parse(settingValue)
    }
  }
}
