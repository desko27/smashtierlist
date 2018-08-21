import { ArgumentError } from '../errors';

export default class Character {
  constructor({ name, tier, avatarUrl }) {
    this.allowedTiers = ['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

    if (typeof name !== 'string') throw new ArgumentError('Argument `name` should be a string!');
    if (typeof tier !== 'string') throw new ArgumentError('Argument `tier` should be a string!');
    if (!this.allowedTiers.includes(tier)) {
      throw new ArgumentError('Argument `tier` should be in the `allowedTiers` list.');
    }
    if (typeof avatarUrl !== 'string' || !/(http(s?):)([/|.|\w|\s|-])*/.test(avatarUrl)) {
      throw new ArgumentError('Argument `avatarUrl` should be a valid URL.');
    }

    this.name = name;
    this.tier = tier;
    this.avatarUrl = avatarUrl;
  }

  getTierWeight() {
    return this.allowedTiers.indexOf(this.tier);
  }
}
