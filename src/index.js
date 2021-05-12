const toAmericanFloor = number => {

  if(number <= 0){
      return number
  } else if (0 < number < 13){
      return number = number -1
  } else if (13 <= number ){
      return number = number -2
  }
}


export default toAmericanFloor;
