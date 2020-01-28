// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let hash = "#"
  let space = " "
  let string = ""
  for( let i = 1; i <= n; i++ ) {
    if ( n - i >= 0) {
      string = hash.repeat(i) + space.repeat(n - i)
    }
    console.log(string);
  }
}

console.log(steps(4));
module.exports = steps;
