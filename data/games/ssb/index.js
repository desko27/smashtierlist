module.exports = {
  slug: 'ssb',
  route: '64',
  name: 'Super Smash Bros.',
  shortName: '64',
  console: 'Nintendo 64',
  description: `
    <p>
      This is the latest and most widely-accepted tier list for
      <a href="https://www.ssbwiki.com/Super_Smash_Bros.">Super Smash Bros.</a>
      from Nintendo 64, produced by the Smash 64 community and last updated
      on May 12, 2015.
    </p>
    <p>
      To learn more about how these tier lists are made check out the "Tier list" article
      on <a href="https://www.ssbwiki.com/tier_list">the Smash Wiki</a>.
    </p>
  `,
  tiers: [
    {
      name: 'S',
      color: '#d0021b',
      characters: ['pikachu', 'kirby']
    },
    {
      name: 'A',
      color: '#f8e71c',
      characters: ['captain-falcon', 'fox', 'yoshi']
    },
    {
      name: 'B',
      color: '#7ed321',
      characters: ['jigglypuff', 'mario']
    },
    {
      name: 'C',
      color: '#4a90e2',
      characters: ['samus', 'donkey-kong', 'ness', 'link', 'luigi']
    }
  ]
}
