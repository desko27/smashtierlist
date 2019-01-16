export default {
  slug: 'ssbb',
  route: 'brawl',
  name: 'Super Smash Bros. Brawl',
  shortName: 'Brawl',
  console: 'Wii',
  year: 2008,
  notices: [
    {
      id: '2019/01/15',
      message: `
        <p>
          This is the latest and most widely-accepted tier list for
          <a href="https://www.ssbwiki.com/Super_Smash_Bros._Brawl">Super Smash Bros. Brawl</a>
          from Nintendo Wii, produced by the Smash Back Room and last updated
          on April 25, 2013.
        </p>
        <p>
          To know more about how these tier lists are made check out the "Tier list" article
          on <a href="https://www.ssbwiki.com/tier_list">the Smash Wiki</a>.
        </p>
      `,
    },
  ],
  tiers: [
    { name: 'SS', color: '#d0021b' },
    { name: 'S', color: '#f5a623' },
    { name: 'A+', color: '#f7c720' },
    { name: 'A-', color: '#f8e71c' },
    { name: 'B', color: '#b8e986' },
    { name: 'C+', color: '#7ed321' },
    { name: 'C', color: '#50e3c2' },
    { name: 'C-', color: '#4dbad2' },
    { name: 'D', color: '#4a90e2' },
    { name: 'E', color: '#bd10e0' },
    { name: 'F', color: '#9013fe' },
  ],
  roster: [
    {
      slug: 'meta-knight',
      name: 'Meta Knight',
      color: '#2e3e76',
      tier: 'SS',
    },
    {
      slug: 'ice-climbers',
      name: 'Ice Climbers',
      color: '#f1f0e4',
      tier: 'S',
    },
    {
      slug: 'olimar',
      name: 'Olimar',
      color: '#cdefb0',
      tier: 'A+',
    },
    {
      slug: 'diddy-kong',
      name: 'Diddy Kong',
      color: '#e15951',
      tier: 'A+',
    },
    {
      slug: 'marth',
      name: 'Marth',
      color: '#5ba8c8',
      tier: 'A-',
    },
    {
      slug: 'snake',
      name: 'Snake',
      color: '#3c5270',
      tier: 'A-',
    },
    {
      slug: 'falco',
      name: 'Falco',
      color: '#69b1df',
      tier: 'A-',
    },
    {
      slug: 'pikachu',
      name: 'Pikachu',
      color: '#f7c143',
      tier: 'B',
    },
    {
      slug: 'zero-suit-samus',
      name: 'Zero Suit Samus',
      color: '#1e5ba4',
      tier: 'B',
    },
    {
      slug: 'wario',
      name: 'Wario',
      color: '#f7cc64',
      tier: 'B',
    },
    {
      slug: 'lucario',
      name: 'Lucario',
      color: '#b8e3fc',
      tier: 'C+',
    },
    {
      slug: 'king-dedede',
      name: 'King Dedede',
      color: '#fde87b',
      tier: 'C+',
    },
    {
      slug: 'toon-link',
      name: 'Toon Link',
      color: '#a6d160',
      tier: 'C+',
    },
    {
      slug: 'wolf',
      name: 'Wolf',
      color: '#363538',
      tier: 'C',
    },
    {
      slug: 'fox',
      name: 'Fox',
      color: '#266bc2',
      tier: 'C',
    },
    {
      slug: 'mr-game-watch',
      name: 'Mr. Game & Watch',
      color: '#a6a392',
      tier: 'C',
    },
    {
      slug: 'pit',
      name: 'Pit',
      color: '#7db3d4',
      tier: 'C',
    },
    {
      slug: 'rob',
      name: 'R.O.B.',
      color: '#b3b9be',
      tier: 'C-',
    },
    {
      slug: 'peach',
      name: 'Peach',
      color: '#f5c9f0',
      tier: 'C-',
    },
    {
      slug: 'kirby',
      name: 'Kirby',
      color: '#f2c1c4',
      tier: 'D',
    },
    {
      slug: 'donkey-kong',
      name: 'Donkey Kong',
      color: '#fada4a',
      tier: 'D',
    },
    {
      slug: 'sonic',
      name: 'Sonic',
      color: '#649dec',
      tier: 'D',
    },
    {
      slug: 'ike',
      name: 'Ike',
      color: '#b74f3e',
      tier: 'D',
    },
    {
      slug: 'zelda-sheik',
      name: 'Zelda/Sheik',
      color: '#a278b6',
      tier: 'D',
    },
    {
      slug: 'sheik',
      name: 'Sheik',
      color: '#746fd0',
      tier: 'D',
    },
    {
      slug: 'ness',
      name: 'Ness',
      color: '#de423d',
      tier: 'D',
    },
    {
      slug: 'yoshi',
      name: 'Yoshi',
      color: '#83cd65',
      tier: 'D',
    },
    {
      slug: 'luigi',
      name: 'Luigi',
      color: '#5ea444',
      tier: 'E',
    },
    {
      slug: 'pokemon-trainer',
      name: 'Pokémon Trainer',
      color: '#ff4443',
      tier: 'E',
    },
    {
      slug: 'lucas',
      name: 'Lucas',
      color: '#e06833',
      tier: 'E',
    },
    {
      slug: 'mario',
      name: 'Mario',
      color: '#e86c6d',
      tier: 'F',
    },
    {
      slug: 'samus',
      name: 'Samus',
      color: '#353f56',
      tier: 'F',
    },
    {
      slug: 'bowser',
      name: 'Bowser',
      color: '#44745e',
      tier: 'F',
    },
    {
      slug: 'captain-falcon',
      name: 'Captain Falcon',
      color: '#8d8bdc',
      tier: 'F',
    },
    {
      slug: 'link',
      name: 'Link',
      color: '#c2cf72',
      tier: 'F',
    },
    {
      slug: 'jigglypuff',
      name: 'Jigglypuff',
      color: '#e18ae5',
      tier: 'F',
    },
    {
      slug: 'zelda',
      name: 'Zelda',
      color: '#a278b6',
      tier: 'F',
    },
    {
      slug: 'ganondorf',
      name: 'Ganondorf',
      color: '#7d7a97',
      tier: 'F',
    },
  ],
};
