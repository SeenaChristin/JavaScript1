function getYearMakeModel(inventory,carId){

  const length = inventory.length;
  for(let i=0;i<length;i++){
    if(inventory[i].id === carId){
      console.log(`Car ${carId} is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`);
      return;
    }
  }
}

module.exports = getYearMakeModel;