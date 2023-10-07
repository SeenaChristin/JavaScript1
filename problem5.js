const getCarYears = require('./problem4');

function getOlderCars(inventory,year){
  let carYearsArr = getCarYears(inventory);
  let count =0;
  for(let i=0; i<carYearsArr.length; i++){
    if(carYearsArr[i]<year){
      count++;
    }
  }
  console.log(count);
}

module.exports = getOlderCars;