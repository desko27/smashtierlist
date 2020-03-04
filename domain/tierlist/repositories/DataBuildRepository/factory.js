import DataBuildRepository from './index'
import gameRoutesMap from '../../../../data-build'

const gameSlugs = Object.keys(gameRoutesMap)
const gameImports = gameSlugs.reduce(
  (acc, slug) => ({
    ...acc,
    [slug]: () => import(
      /* webpackChunkName: "data-build-[request]" */
      `../../../../data-build/${slug}`
    )
  }),
  {}
)

export default () => {
  return DataBuildRepository({ gameImports, gameSlugs, gameRoutesMap })
}
