//Day 10
//https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {
    let result = weight / (height * height);
    if(result > 30){
        return "Obese";
    }else if(result > 25.0){
        return "Overweight";
    }else if(result > 18.5){
        return "Normal";
    }else{
        return "Underweight";
    }
    
}

console.log(bmi(80, 1.80))
console.log(bmi(50, 1.68))


// function calculateBMI() {
//     // Mendapatkan nilai berat dan tinggi dari prompt
//     let weight = parseFloat(prompt("Masukan Berat Badan Anda dalam satuan kg:"));
//     let height = parseFloat(prompt("Masukan Tinggi Badan Anda dalam meter:"));

//     // Memanggil fungsi bmi dengan nilai berat dan tinggi
//     let result = bmi(weight, height);

//     // Menampilkan hasil menggunakan pop-up
//     alert("BMI Anda: " + result);
// }

// function bmi(weight, height) {
//     let result = weight / (height * height);
//     if (result > 30) {
//         return "Obese";
//     } else if (result > 25.0) {
//         return "Overweight";
//     } else if (result > 18.5) {
//         return "Normal";
//     } else {
//         return "Underweight";
//     }
// }

// // Panggil fungsi calculateBMI saat halaman dimuat
// calculateBMI();