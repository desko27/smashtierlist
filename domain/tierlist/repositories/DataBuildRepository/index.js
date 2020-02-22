export default function DataBuildRepository ({ gameImports }) {
  return {
    getGameData: async gameSlug => {
      const gameImport = gameImports[gameSlug]
      const { default: gameData } = await gameImport()
      return gameData
    }
  }
}
