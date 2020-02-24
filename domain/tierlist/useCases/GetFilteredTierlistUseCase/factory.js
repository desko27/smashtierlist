import GetFilteredTierlistUseCase from './index'
import DataBuildRepositoryFactory from '../../repositories/DataBuildRepository/factory'

export default function () {
  return GetFilteredTierlistUseCase({ dataBuildRepository: DataBuildRepositoryFactory() })
}
