import charactersReducer from './reducer';
import { ArgumentError } from '../../../errors';
import { ADD_CHARACTER } from './action-types';

const validCharacter = {
  name: 'Sonic',
  tier: 'S',
  avatarUrl: 'https://via.placeholder.com/50x50',
};
const validCharacterB = {
  name: 'Shadow',
  tier: 'S',
  avatarUrl: 'https://via.placeholder.com/50x50',
};


describe('characters reducer', () => {
  it('should return the initial state if no arguments provided', () => {
    expect(charactersReducer()).to.deep.equal([]);
  });

  describe('has ADD_CHARACTER handler that', () => {
    it('adds a character (when state is an empty array)', () => {
      expect(
        charactersReducer([], { type: ADD_CHARACTER, character: validCharacter }),
      ).to.deep.equal([validCharacter]);
    });
    it('adds a character (when state has already some)', () => {
      expect(
        charactersReducer([validCharacter], { type: ADD_CHARACTER, character: validCharacterB }),
      ).to.deep.equal([validCharacter, validCharacterB]);
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
