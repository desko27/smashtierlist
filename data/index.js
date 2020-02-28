const glob = require('glob')
const path = require('path')

const gameDirectories = [
  './games/ssb',
  './games/ssbm',
  './games/ssbb',
  './games/ssb4',
  './games/ssbu'
]

// inject automatically generated ids
const gamesWithIds = gameDirectories.map((gameDirectory, gid) => {
  const g = require(gameDirectory)
  const rosterDirectory = `${gameDirectory}/roster`
  const rosterFilenames = glob.sync(`${rosterDirectory}/*.js`.slice(1), {
    root: path.join(process.cwd(), 'data')
  })
  const rosterObject = rosterFilenames.reduce(
    (acc, characterFilename) => {
      const [characterSlug] = path.basename(characterFilename).split('.')
      const characterObject = require(characterFilename)
      return {
        ...acc,
        [characterSlug]: characterObject
      }
    },
    {}
  )
  const rosterGroupedByTier = g.tiers.map(
    tier => {
      return {
        tier,
        characters:
          tier.characters.map(characterSlug => ({
            ...rosterObject[characterSlug],
            slug: characterSlug
          }))
      }
    }
  )

  const description =
    g.description
      .replace(/\s\s+/g, ' ') // remove multiple spaces
      .replace(/\n/g, '') // remove line jumps
      .replace(/'/g, '&apos;') // TODO: use html entities package?
      .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ')

  return {
    id: gid,
    slug: g.slug,
    route: g.route,
    name: g.name,
    shortName: g.shortName,
    console: g.console,
    description,
    rosterGroupedByTier
  }
})

module.exports = { games: gamesWithIds }
