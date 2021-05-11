import toAmericanFloor from "./index";

describe("Converting the lift floor", () => {
  it("should return zero for the ground floor", () => {
    expect(toAmericanFloor(0)).toStrictEqual(0);
  });

  it("should return zero for the first floor", () => {
    expect(toAmericanFloor(1)).toStrictEqual(0);
  });

  it("should return the same floor if number is less than 1", () => {
    expect(toAmericanFloor(-1)).toStrictEqual(-1);
  });
});
