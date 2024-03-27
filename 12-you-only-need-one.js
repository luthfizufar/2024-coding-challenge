//Day 12
//https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

function check(a, x) {
    return a.includes(x);
}

console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(['t', 'e', 's', 't'], 'e'));
console.log(check(['what', 'a', 'great', 'kata'], 'kat'));