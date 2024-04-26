let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabet_arr = [];
let tebahpla = ``
for (let i = 0; i < alphabet.length; i++) {
    let id = i+1
    let letter = alphabet[i];
    let index = i;
    alphabet_arr.push({ id:id, letter: letter, index: index, });
}

for (let i = alphabet.length - 1; i >= 0; i--) {
    tebahpla += alphabet[i];
}

console.log(alphabet_arr);
console.log(tebahpla);


