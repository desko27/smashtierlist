const FILTER_MODES = {
  NORMAL: false,
  HIGHLIGHT: true
}

const fuzzySearchCharactersArray = ({ characters, searchString, Fuse }) => {
  const fuse = new Fuse(characters, {
    id: 'slug',
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
    async execute (gameSlug, { searchString, filterMode }) {
      const gameData = await dataBuildRepository.getGameData(gameSlug)
      if (!searchString) return gameData

      const filteredRosterGroupedByTier = gameData.rosterGroupedByTier.map(
        tierGroup => {
          const foundCharacterSlugs = fuzzySearchCharactersArray({
            characters: tierGroup.characters,
            searchString,
            Fuse
          })
          return {
            ...tierGroup,
            characters: filterMode === FILTER_MODES.NORMAL
              ? tierGroup.characters.filter(({ slug }) => foundCharacterSlugs.includes(slug))
              : tierGroup.characters.map(character => ({
                ...character,
                visible: foundCharacterSlugs.includes(character.slug)
              }))
          }
        }
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
