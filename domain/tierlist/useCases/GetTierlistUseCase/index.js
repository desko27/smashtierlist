export default function GetTierlistUseCase ({ gameSlug, dataBuildRepository }) {
  return dataBuildRepository.getGameData(gameSlug)
}
