export default function SettingsRepository ({
  config,
  getItemFromStorage,
  setItemFromStorage
}) {
  return {
    async getByKey (key) {
      const defaultValue = config.settings[key].default
      const settingValue = getItemFromStorage(`setting:${key}`)
      if (typeof settingValue === 'undefined' || settingValue === null) return defaultValue
      console.log(settingValue)
      return JSON.parse(settingValue)
    },
    async setByKey (key, value) {
      setItemFromStorage(`setting:${key}`, JSON.stringify(value))
    }
  }
}
