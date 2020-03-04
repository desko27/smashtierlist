import SettingsRepository from './index'
import config from '../../../config'

const getItemFromStorage =
  key => typeof window === 'undefined' ? undefined : window.localStorage.getItem(key)

export default () => {
  return SettingsRepository({ config, getItemFromStorage })
}
