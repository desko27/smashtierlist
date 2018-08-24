import charactersReducer from './reducer';
import { ArgumentError } from '../../../errors';
import { ADD_CHARACTER } from './action-types';

const validCharacter = {
  name: 'Sonic',
  tier: 'S',
  avatarUrl: 'https://via.placeholder.com/50x50',
};

describe('characters reducer', () => {
  it('should return the initial state', () => {
    expect(charactersReducer(undefined, {})).to.deep.equal([]);
  });

  describe('has ADD_CHARACTER handler that', () => {
    it('adds a character', () => {
      expect(
        charactersReducer([], { type: ADD_CHARACTER, character: validCharacter }),
      ).to.deep.equal([validCharacter]);
    });

    describe('throws error if', () => {
      it('character.name is not a string', () => {
        expect(() => {
          charactersReducer([], {
            type: ADD_CHARACTER,
            character: { ...validCharacter, name: 7 },
          });
        }).to.throw(ArgumentError);
      });
      it('character.tier is not a string', () => {
        expect(() => {
          charactersReducer([], {
            type: ADD_CHARACTER,
            character: { ...validCharacter, tier: 7 },
          });
        }).to.throw(ArgumentError);
      });
      it('character.avatarUrl is not a valid link', () => {
        expect(() => {
          charactersReducer([], {
            type: ADD_CHARACTER,
            character: { ...validCharacter, avatarUrl: 'asd' },
          });
        }).to.throw(ArgumentError);
      });
    });
  });
});
