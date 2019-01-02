import ssb from './ssb';
import ssbm from './ssbm';
import ssbb from './ssbb';
import ssb4 from './ssb4';
import ssbu from './ssbu';

const games = [ssb, ssbm, ssbb, ssb4, ssbu];

// inject automatically generated ids
const gamesWithIds = games.map((g, gid) => (
  {
    id: gid,
    ...{
      ...g,
      roster: g.roster.map((c, cid) => ({ id: cid, ...c })),
    },
  }
));

export default gamesWithIds;
