//Day 18
//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
    let result = 0;
    for(let i = 0; i < arr1.length; i++){
        result += arr1[i];
    }

    for(let i = 0; i < arr2.length; i++){
        result += arr2[i];
    }
    return result;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));