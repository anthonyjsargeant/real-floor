const index = require('./index');

describe('Converting the lift floor', () => {
  it('should return zero for the ground floor', () => {
    expect(index.toAmericanFloor(0)).toStrictEqual(0);
  });

  it('should return zero for the first floor', () => {
    expect(index.toAmericanFloor(1)).toStrictEqual(0);
  })
});
