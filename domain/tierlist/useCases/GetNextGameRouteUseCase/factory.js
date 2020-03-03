import DataBuildRepositoryFactory from '../../repositories/DataBuildRepository/factory'
import GetNextGameRouteUseCase from './index'

export default function () {
  return GetNextGameRouteUseCase({ dataBuildRepository: DataBuildRepositoryFactory() })
}
