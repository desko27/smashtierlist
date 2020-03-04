export default function GetSettingUseCase ({ SettingsRepository }) {
  return {
    async execute (key) {
      return SettingsRepository.getByKey(key)
    }
  }
}
