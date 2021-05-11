const toAmericanFloor = (number) => {
  if (number <= 0) {
    return number;
  } else if (number < 13) {
    return number - 1;
  }
};

export default toAmericanFloor;
