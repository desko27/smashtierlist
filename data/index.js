const ssb = require('./games/ssb')
const ssbm = require('./games/ssbm')
const ssbb = require('./games/ssbb')
const ssb4 = require('./games/ssb4')
const ssbu = require('./games/ssbu')

const rawGames = [ssb, ssbm, ssbb, ssb4, ssbu]

// inject automatically generated ids
const gamesWithIds = rawGames.map((g, gid) => (
  {
    id: gid,
    ...{
      ...g,
      roster: g.roster.map((c, cid) => ({ id: cid, ...c }))
    }
  }
))

module.exports = { games: gamesWithIds }
