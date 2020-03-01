export default function DataBuildRepository ({ gameImports, gameSlugs, gameRoutesMap }) {
  return {
    async getGameData (gameSlug) {
      const gameImport = gameImports[gameSlug]
      const { default: gameData } = await gameImport()
      return gameData
    },
    async getGameSlugs () {
      return gameSlugs
    },
    async getGameRoute (gameSlug) {
      return gameRoutesMap[gameSlug]
    }
  }
}
