//Day 7
//https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(distanceToPump / mpg <= fuelLeft){
        return true;
    }else{
        return false;
    }
};

console.log(zeroFuel(50, 25, 2))
console.log(zeroFuel(100, 50, 1))