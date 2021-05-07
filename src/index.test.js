const index = require('./index');

describe('When converting the lift floor', () => {
  it('should return zero for the ground floor', () => {
    expect(index.toAmericanFloor(0)).toStrictEqual(0);
  });
});
