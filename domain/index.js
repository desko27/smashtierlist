const USE_CASES = {
  get_tierlist_use_case: () => import('./tierlist/useCases/GetTierlistUseCase/factory'),
  get_next_game_slug_use_case: () => import('./tierlist/useCases/GetNextGameSlugUseCase/factory')
}

const entryPoint = {
  get: async useCaseName => {
    const { default: useCaseFactory } = await USE_CASES[useCaseName]()
    return useCaseFactory()
  }
}

export default entryPoint
