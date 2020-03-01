import Fuse from 'fuse.js'

import GetFilteredTierlistUseCase from './index'
import DataBuildRepositoryFactory from '../../repositories/DataBuildRepository/factory'

export default function ({ config }) {
  return GetFilteredTierlistUseCase({
    config,
    dataBuildRepository: DataBuildRepositoryFactory(),
    Fuse
  })
}
