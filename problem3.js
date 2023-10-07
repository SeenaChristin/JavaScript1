function sortAlphabetically(inventory){
  const carModelSet = new Set();
  inventory.sort((a,b)=>{ 
    return a.car_model.toUpperCase() < b.car_model.toUpperCase()? -1 : 1
  });
  for(let i=0; i<inventory.length; i++){
    if(!carModelSet.has(inventory[i].car_model)){
      console.log(inventory[i].car_model);
    }
    carModelSet.add(inventory[i].car_model);
  }
}

module.exports = sortAlphabetically;