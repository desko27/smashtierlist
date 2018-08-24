import { ArgumentError } from '../errors';
import Character from './character';

export default class Game {
  constructor({ name, roster }) {
    if (typeof name !== 'string') throw new ArgumentError('Argument `name` should be a string!');
    if (!Array.isArray(roster)) throw new ArgumentError('Argument `roster` should be an array!');
    if (roster.length === 0) {
      throw new ArgumentError('Argument `roster` should be at least one element!');
    }

    this.name = name;
    this.roster = roster.map(args => new Character(args));
  }

  filterRosterByTier(tier) {
    if (typeof tier !== 'string') throw new ArgumentError('Argument `tier` should be defined!');

    return this.roster.filter(character => character.tier === tier);
  }

  filterRosterByName(search) {
    if (typeof search !== 'string') {
      throw new ArgumentError('Argument `search` should be a string!');
    }

    return this.roster.filter(character => (
      character.name.toLowerCase().includes(search.toLowerCase())
    ));
  }
}
