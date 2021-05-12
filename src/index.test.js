import toAmericanFloor from "./index";

describe('Converting the lift floor', () => {
  it('should return zero for the ground floor', () => {
    expect(toAmericanFloor(0)).toStrictEqual(0);
  });

  it('should return zero for the first floor', () => {
    expect(toAmericanFloor(1)).toStrictEqual(0);
  });
  it('should return 15 for the 17th floor', () => {    //Not sure if this is correct way to use jest and can't figure out why it is failing.
    expect(toAmericanFloor(17)).toStrictEqual(15);
  })
});
