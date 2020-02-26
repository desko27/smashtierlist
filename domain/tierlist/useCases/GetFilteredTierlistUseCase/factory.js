import Fuse from 'fuse.js'

import GetFilteredTierlistUseCase from './index'
import DataBuildRepositoryFactory from '../../repositories/DataBuildRepository/factory'

export default function () {
  return GetFilteredTierlistUseCase({
    dataBuildRepository: DataBuildRepositoryFactory(),
    Fuse
  })
}
