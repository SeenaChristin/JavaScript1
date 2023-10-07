function getCarYears(inventory){
  const length = inventory.length;
  let yearsOfCars =[];
  for(let i=0; i<length; i++){
    yearsOfCars[i]=inventory[i].car_year;
  }
  console.log(yearsOfCars);
  return yearsOfCars;
}

module.exports = getCarYears;