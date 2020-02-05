// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function vowels(str) {
    let match = str.match(/[aeiou]/gi)
    return match ? match.length : 0
}

// function vowels(str) {

//     let reg = /a|e|i|o|u/gi;
//     let arr = str.match(reg);
//     let obj = {};

//     if (!reg.test(str)) { return 0;}

//     for (each of arr) {
//         if (obj[each] >= 1) { obj[each]++}
//         else {obj[each] = 1}
//     }

//     return Object.values(obj).reduce((acc, val) => {
//         return acc + val
//     })
// }

    


module.exports = vowels;

console.log(vowels('why'));
// console.log(vowels('why'));
