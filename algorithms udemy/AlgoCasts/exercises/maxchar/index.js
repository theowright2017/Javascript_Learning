// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {}
    let max = 0
    let maxChar = ""
  const char = str.split('')
  .map(x => {
    if ( obj[x] >= 1) {
      obj[x]++
    } else {
      obj[x] = 1
    }
    if (obj[x] > max) {
      max = obj[x]
      maxChar = x
    }

  })
  return maxChar


}
console.log(maxChar("hellllooooooo"));

module.exports = maxChar;
