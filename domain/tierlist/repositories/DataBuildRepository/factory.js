import DataBuildRepository from './index'

const gameImports = {
  ssb: () => import('../../../../data-build/ssb'),
  ssbm: () => import('../../../../data-build/ssbm'),
  ssbb: () => import('../../../../data-build/ssbb'),
  ssb4: () => import('../../../../data-build/ssb4'),
  ssbu: () => import('../../../../data-build/ssbu')
}

export default function () {
  return DataBuildRepository({ gameImports })
}
