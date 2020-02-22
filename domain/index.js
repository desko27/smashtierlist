const USE_CASES = {
  get_tierlist_use_case: () => import('./tierlist/useCases/GetTierlistUseCase/factory')
}

const entryPoint = {
  get: async useCaseName => {
    const { default: useCaseFactory } = await USE_CASES[useCaseName]()
    return useCaseFactory()
  }
}

export default entryPoint
