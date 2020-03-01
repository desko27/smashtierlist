const getSquaredLetter =
  letter => {
    if (letter === '-') return '➖'
    if (letter === '+') return '✚'
    const unicode = String.fromCharCode(55356)
    const squared = String.fromCharCode(56688 + letter.charCodeAt() - 65)
    return `${unicode}${squared}`
  }
const getSquaredLetters =
  string => string.split('').map(getSquaredLetter).join('')

export const getTitle = gameData => `✅ Smash Tier List 🔥 ${gameData.shortName} 🎮`

export const getDescription = gameData => gameData.rosterGroupedByTier.slice(0, 5).map(
  ({ tier, characters }) =>
    `${getSquaredLetters(tier.name)} ${characters.slice(0, 3).map(c => c.name).join(' ')}` +
      (characters.length > 3 ? '...' : '')
).join(' ')
