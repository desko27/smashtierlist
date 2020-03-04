import GetSettingUseCase from './index'
import SettingsRepositoryFactory from '../../repositories/SettingsRepository/factory'

export default () => {
  return GetSettingUseCase({
    SettingsRepository: SettingsRepositoryFactory()
  })
}
