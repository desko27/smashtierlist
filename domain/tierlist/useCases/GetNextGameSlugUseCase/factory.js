import DataBuildRepositoryFactory from '../../repositories/DataBuildRepository/factory'
import GetNextGameSlugUseCase from './index'

export default function () {
  return GetNextGameSlugUseCase({ dataBuildRepository: DataBuildRepositoryFactory() })
}
