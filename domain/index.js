const USE_CASES = {
  get_tierlist_use_case: () => import('./tierlist/useCases/GetTierlistUseCase/factory')
}

const entryPoint = {
  get: useCaseName => {
    return USE_CASES[useCaseName]()
  }
}

export default entryPoint
