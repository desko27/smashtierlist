import SettingsRepository from './index'
import config from '../../../config'

const getItemFromStorage =
  key => typeof window === 'undefined' ? undefined : window.localStorage.getItem(key)

const setItemFromStorage =
  (key, value) =>
    typeof window !== 'undefined' && window.localStorage.setItem(key, value)

export default () => {
  return SettingsRepository({
    config,
    getItemFromStorage,
    setItemFromStorage
  })
}
