export default function DataBuildRepository ({ gameImports, gameSlugs }) {
  return {
    getGameData: async gameSlug => {
      const gameImport = gameImports[gameSlug]
      const { default: gameData } = await gameImport()
      return gameData
    },
    getGameSlugs: async () => {
      return gameSlugs
    }
  }
}
