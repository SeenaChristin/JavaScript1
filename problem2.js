function getLastCar(inventory){

    const length = inventory.length;
    console.log(`Last car is a ${inventory[length-1].car_make} ${inventory[length-1].car_model}`);

  }
  
  module.exports = getLastCar;