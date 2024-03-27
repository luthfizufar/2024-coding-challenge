//Day 20
//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

// Numerical Score	    Letter Grade
// 90 <= score <= 100	    'A'
// 80 <= score < 90	        'B'
// 70 <= score < 80	        'C'
// 60 <= score < 70	        'D'
// 0 <= score < 60	        'F'

function getGrade (s1, s2, s3) {
    const score = (s1 + s2 +s3) / 3;
    if (score >= 90) {
        return 'A';
    }else if(score >= 80){
        return 'B';
    }else if(score >= 70){
        return 'C';
    }else if(score >= 60){
        return 'D';
    }else{
        return 'F';
    }
}

console.log(getGrade(95,90,93));
console.log(getGrade(100,85,96));
console.log(getGrade(70,70,100));
console.log(getGrade(82,85,87));
console.log(getGrade(70,70,70));
console.log(getGrade(75,70,79));
console.log(getGrade(65,70,59));
console.log(getGrade(66,62,68));
console.log(getGrade(44,55,52));
console.log(getGrade(48,55,52));