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

  it("should return four for the fifth floor", () => {
    expect(toAmericanFloor(5)).toStrictEqual(4);
  });

  it("should return fifteen for the seventeeth floor", () => {
    expect(toAmericanFloor(17)).toStrictEqual(15);
  });

  it("should return an error message if a value other than a number is passed in", () => {
    expect(toAmericanFloor("Hiya")).toStrictEqual(
      "Please enter a valid number"
    );
  });
});
