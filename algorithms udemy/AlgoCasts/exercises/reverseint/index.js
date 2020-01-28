// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const num = n.toString().split('')
  .reduce((acc, val) => {
    return val + acc
  })
  if ( Math.sign(n) === -1){
    return parseInt(num) * Math.sign(n)
  } else {
    return parseInt(num)
  }

}

console.log(reverseInt(-5));

module.exports = reverseInt;
