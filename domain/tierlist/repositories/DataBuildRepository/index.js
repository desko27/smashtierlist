export default function DataBuildRepository ({ gameImports, gameSlugs }) {
  return {
    async getGameData (gameSlug) {
      const gameImport = gameImports[gameSlug]
      const { default: gameData } = await gameImport()
      return gameData
    },
    async getGameSlugs () {
      return gameSlugs
    }
  }
}
