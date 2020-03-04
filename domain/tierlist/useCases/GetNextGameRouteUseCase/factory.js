import DataBuildRepositoryFactory from '../../repositories/DataBuildRepository/factory'
import GetNextGameRouteUseCase from './index'

export default () => {
  return GetNextGameRouteUseCase({ dataBuildRepository: DataBuildRepositoryFactory() })
}
