const ssb = require('./games/ssb')
const ssbm = require('./games/ssbm')
const ssbb = require('./games/ssbb')
const ssb4 = require('./games/ssb4')
const ssbu = require('./games/ssbu')

const rawGames = [ssb, ssbm, ssbb, ssb4, ssbu]

// inject automatically generated ids
const gamesWithIds = rawGames.map((g, gid) => {
  const rosterGroupedByTier = g.tiers.map(
    tier => {
      const roster = g.roster.map((c, cid) => ({ id: cid, ...c }))
      return {
        tier,
        characters: roster.filter(
          c => c.tier === tier.name
        )
      }
    }
  ).filter(t => t.characters.length > 0)

  return {
    id: gid,
    slug: g.slug,
    route: g.route,
    name: g.name,
    shortName: g.shortName,
    console: g.console,
    rosterGroupedByTier
  }
})

module.exports = { games: gamesWithIds }
