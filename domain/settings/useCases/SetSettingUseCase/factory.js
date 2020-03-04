import SetSettingUseCase from './index'
import SettingsRepositoryFactory from '../../repositories/SettingsRepository/factory'

export default () => {
  return SetSettingUseCase({
    SettingsRepository: SettingsRepositoryFactory()
  })
}
