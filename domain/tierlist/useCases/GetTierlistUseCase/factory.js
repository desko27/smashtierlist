import GetTierlistUseCase from './index'
import ssbu from '../../../../data-build/ssbu'

export function execute () {
  return new GetTierlistUseCase({ gameData: ssbu })
}
