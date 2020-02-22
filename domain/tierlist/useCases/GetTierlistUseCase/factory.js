import GetTierlistUseCase from './index'
import DataBuildRepositoryFactory from '../../repositories/DataBuildRepository/factory'

export default function () {
  return GetTierlistUseCase({ dataBuildRepository: DataBuildRepositoryFactory() })
}
