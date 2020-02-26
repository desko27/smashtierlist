const fuzzySearchCharactersArray = ({ characters, searchString, Fuse }) => {
  const fuse = new Fuse(characters, {
    shouldSort: false,
    threshold: 0.35,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['name', 'slug']
  })
  return fuse.search(searchString)
}

export default function GetFilteredTierlistUseCase ({ dataBuildRepository, Fuse }) {
  return {
    async execute (gameSlug, searchString) {
      const gameData = await dataBuildRepository.getGameData(gameSlug)
      if (!searchString) return gameData

      const filteredRosterGroupedByTier = gameData.rosterGroupedByTier.map(
        tierGroup => ({
          ...tierGroup,
          characters: fuzzySearchCharactersArray({
            characters: tierGroup.characters,
            searchString,
            Fuse
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
