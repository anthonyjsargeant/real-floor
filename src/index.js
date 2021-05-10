const toAmericanFloor = number => {

 //if floor number is less that 0 i.e. floor number is negative don't change floor number
if(number < 0){
  return number;
}

//if floor number is greater than 13 decrease num by 2 
if(number > 13){
  return number - 2;
}

if(number == 0){ 
  return number;
}
  //if floor num is between 1 and 12 decrease num by 1
if(number >1 || number <13 ){
  return number-1
}

}

export default toAmericanFloor;
