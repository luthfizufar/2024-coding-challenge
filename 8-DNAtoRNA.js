//Day 8
//https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
    let rna = '';
    for(let i=0; i < dna.length; i++){
        if(dna[i] === 'T'){
            rna = rna + 'U';
        }else{
            rna = rna + dna[i];
        }
    }
    return rna;
}

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("GACCGCCGCC"));

