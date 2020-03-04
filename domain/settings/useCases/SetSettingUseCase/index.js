export default function SetSettingUseCase ({ SettingsRepository }) {
  return {
    async execute (key, value) {
      return SettingsRepository.setByKey(key, value)
    }
  }
}
