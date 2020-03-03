export default function GetNextGameRouteUseCase ({ dataBuildRepository }) {
  const getNextIndex = (array, index) => {
    return (index + 1) % array.length
  }
  const getPrevIndex = (array, index) => {
    const newIndex = index - 1
    if (newIndex < 0) return array.length - 1
    return newIndex
  }

  return {
    async execute (currentGameSlug, direction) {
      const gameSlugs = await dataBuildRepository.getGameSlugs()
      const currentIndex = gameSlugs.indexOf(currentGameSlug)
      const newIndex = direction === 'next'
        ? getNextIndex(gameSlugs, currentIndex)
        : getPrevIndex(gameSlugs, currentIndex)
      const newGameSlug = gameSlugs[newIndex]
      return dataBuildRepository.getGameRoute(newGameSlug)
    }
  }
}
