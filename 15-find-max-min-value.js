//Day15
//https://www.codewars.com/kata/577a98a6ae28071780000989

// var min = function(list){
//     let minValue = list[0];
//     for(let i = 1; i < list.length; i++){
//         if(minValue > list[i]){
//             minValue = list[i];
//         }
//     }
//     return minValue;
// }

// var max = function(list){
//     let minValue = list[0];
//     for(let i = 1; i < list.length; i++){
//         if(minValue < list[i]){
//             minValue = list[i];
//         }
//     }
//     return minValue;
// }

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([4,6,2,1,9,63,-134,566]));
console.log(max([5]));