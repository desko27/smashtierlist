import GetTierlistUseCase from './index'
import DataBuildRepositoryFactory from '../../repositories/DataBuildRepository/factory'

export function execute (gameSlug) {
  return new GetTierlistUseCase({ gameSlug, dataBuildRepository: DataBuildRepositoryFactory() })
}
