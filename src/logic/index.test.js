import SmashTierList from '.';

describe('SmashTierList', () => {
  const smash = new SmashTierList();

  it('should load just fine', () => {
    expect(smash.loaded).to.be.true;
  });
});
