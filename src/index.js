const toAmericanFloor = (usFloor) => {
  if (typeof usFloor !== "number") {
    return "Please enter a valid number";
  }
  let europeanFloor = 0;
  if (usFloor < 0) {
    europeanFloor = usFloor;
  } else if (usFloor > 1 && usFloor < 13) {
    europeanFloor = usFloor - 1;
  } else if (usFloor > 13) {
    europeanFloor = usFloor - 2;
  }
  return europeanFloor;
};

export default toAmericanFloor;
