export default function GetFilteredTierlistUseCase ({ dataBuildRepository }) {
  const filterCharactersArray = ({ characters, searchString }) => {
    return characters.filter(
      character => character.name.toLowerCase().includes(searchString)
    )
  }

  return {
    async execute (gameSlug, searchString) {
      const gameData = await dataBuildRepository.getGameData(gameSlug)
      if (!searchString) return gameData

      const filteredRosterGroupedByTier = gameData.rosterGroupedByTier.map(
        tierGroup => ({
          ...tierGroup,
          characters: filterCharactersArray({
            characters: tierGroup.characters,
            searchString
          })
        })
      ).filter(
        tierGroup => tierGroup.characters.length
      )

      const filteredGameData = {
        ...gameData,
        rosterGroupedByTier: filteredRosterGroupedByTier
      }

      return filteredGameData
    }
  }
}
