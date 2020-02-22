export default function GetFilteredTierlistUseCase ({ dataBuildRepository }) {
  return {
    async execute (gameSlug, searchString) {
      const filterCharactersArray = characters => {
        return characters.filter(
          character => character.name.toLowerCase().includes(searchString)
        )
      }

      const gameData = await dataBuildRepository.getGameData(gameSlug)
      const filteredRosterGroupedByTier = gameData.rosterGroupedByTier.map(
        tierGroup => ({
          ...tierGroup,
          characters: filterCharactersArray(tierGroup.characters)
        })
      )

      const filteredGameData = {
        ...gameData,
        rosterGroupedByTier: filteredRosterGroupedByTier
      }

      return filteredGameData
    }
  }
}
