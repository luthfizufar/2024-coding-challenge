//Day 13
//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

//Fungsi countSheeps ini digunakan untuk menghitung jumlah domba yang hadir dalam array yang diberikan. Pertama-tama, fungsi tersebut mendefinisikan variabel count yang digunakan untuk menghitung jumlah domba yang ditemukan. Kemudian, fungsi tersebut melakukan iterasi melalui setiap elemen dalam array arrayOfSheep. Setiap kali menemukan nilai true, maka nilai count akan ditambahkan satu. Akhirnya, fungsi tersebut mengembalikan jumlah total domba yang ditemukan dalam array.

//Dalam contoh yang diberikan, kita memiliki sebuah array yang merepresentasikan kehadiran domba. Dengan menggunakan fungsi countSheeps pada array tersebut, kita dapat menghitung jumlah total domba yang hadir, yang dalam contoh tersebut adalah 17.

const sheepArray = [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

function countSheeps(sheep) {
    let count = 0;
    for(let i = 0; i < sheep.length; i++){
        if(sheep[i] === true){
            count++;
        }
    }
    return count;
}

console.log(countSheeps(sheepArray));