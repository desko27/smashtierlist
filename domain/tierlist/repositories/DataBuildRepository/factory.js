import DataBuildRepository from './index'
import gameSlugs from '../../../../data-build'

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

export default function () {
  return DataBuildRepository({ gameImports, gameSlugs })
}
