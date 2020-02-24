export default function GetTierlistUseCase ({ dataBuildRepository }) {
  return {
    async execute (gameSlug) {
      return dataBuildRepository.getGameData(gameSlug)
    }
  }
}
