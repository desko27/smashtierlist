const USE_CASES = {
  get_tierlist_use_case: () =>
    import(
      /* webpackChunkName: "get_tierlist_use_case" */
      './tierlist/useCases/GetTierlistUseCase/factory'
    ),
  get_filtered_tierlist_use_case: () =>
    import(
      /* webpackChunkName: "get_filtered_tierlist_use_case" */
      './tierlist/useCases/GetFilteredTierlistUseCase/factory'
    ),
  get_next_game_slug_use_case: () =>
    import(
      /* webpackChunkName: "get_next_game_slug_use_case" */
      './tierlist/useCases/GetNextGameSlugUseCase/factory'
    )
}

const entryPoint = {
  get: useCaseName => {
    return {
      async execute (...params) {
        const { default: useCaseFactory } = await USE_CASES[useCaseName]()
        return useCaseFactory().execute(...params)
      }
    }
  }
}

export default entryPoint