function getBMWAudiCars(inventory){
  let BMWAndAudi = [];
  for(let i=0; i<inventory.length; i++){
    if(inventory[i].car_make==="BMW" || inventory[i].car_make==="Audi"){
      BMWAndAudi.push(inventory[i]);
    }
    console.log(JSON.stringify(BMWAndAudi));
  }

}

module.exports = getBMWAudiCars;