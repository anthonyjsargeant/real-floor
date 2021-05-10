import toAmericanFloor from "./index";

describe('Converting the lift floor', () => {
  it('should return zero for the ground floor', () => {
    expect(toAmericanFloor(0)).toStrictEqual(0);
  });

  it('should return zero for the first floor', () => {
    expect(toAmericanFloor(1)).toStrictEqual(0);
  })

  it('should return floor num -2 if floor above 13', () => {
    expect(toAmericanFloor(15)).toStrictEqual(13);
  })

  it('check basement floor remains the same', () => {
    expect(toAmericanFloor(-3)).toStrictEqual(-3);
  })

});
