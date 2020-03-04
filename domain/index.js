import config from './config'

const USE_CASES = {
  tierlist__get_tierlist_use_case: () =>
    import(
      /* webpackChunkName: "tierlist__get_tierlist_use_case" */
      './tierlist/useCases/GetTierlistUseCase/factory'
    ),
  tierlist__get_filtered_tierlist_use_case: () =>
    import(
      /* webpackChunkName: "tierlist__get_filtered_tierlist_use_case" */
      './tierlist/useCases/GetFilteredTierlistUseCase/factory'
    ),
  tierlist__get_next_game_route_use_case: () =>
    import(
      /* webpackChunkName: "tierlist__get_next_game_route_use_case" */
      './tierlist/useCases/GetNextGameRouteUseCase/factory'
    ),
  settings__get_setting_use_case: () =>
    import(
      /* webpackChunkName: "settings__get_setting_use_case" */
      './settings/useCases/GetSettingUseCase/factory'
    ),
  settings__set_setting_use_case: () =>
    import(
      /* webpackChunkName: "settings__set_setting_use_case" */
      './settings/useCases/SetSettingUseCase/factory'
    )
}

const entryPoint = {
  get: key => {
    if (key === 'config') return config
    const useCaseName = key

    return {
      async execute (...params) {
        const { default: useCaseFactory } = await USE_CASES[useCaseName]()
        return useCaseFactory({ config }).execute(...params)
      }
    }
  }
}

export default entryPoint
