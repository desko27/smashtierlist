import GetTierlistUseCase from './index'
import DataBuildRepositoryFactory from '../../repositories/DataBuildRepository/factory'

export default () => {
  return GetTierlistUseCase({ dataBuildRepository: DataBuildRepositoryFactory() })
}
