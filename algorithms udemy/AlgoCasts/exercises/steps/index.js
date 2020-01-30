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



// recursive
function steps(n, row = 0) {
  // let num = n
  // let count = n - (num -1)
  if ( row >= n) {return}
  let string = []

    for( let column = 0; column < n; column++) {
      if ( column <= row) {
        string.push('#')
      }
      else {
        string.push('a')
      }
    }
    console.log(string.join(''))
    string = []
    steps(4, row+1)
}

console.log(steps(4))




// function steps(n) {
//   let hash = "#"
//   let space = " "
//   let string = ""
//   for( let i = 1; i <= n; i++ ) {
//     if ( n - i >= 0) {
//       string = hash.repeat(i) + space.repeat(n - i)
//     }
//     console.log(string);
//   }
// }

// function steps(n) {
//   // let num = n
//   // let count = n - (num -1)
//   let string = []
//   // let row = 0
//   for (let row = 0; row < n; row++) {
//     for( let column = 0; column < n; column++) {
//       if ( column <= row) {
//         string.push('#')
//       }
//       else {
//         string.push('a')
//       }

//     }
//     console.log(string.join(''))
//     string = []
//   }
// }




//recursive

// function printNumber(n) {
//   //base case to get out of recursion
//   if ( n === 0 ) { return }
//   console.log(n)
//   printNumber(n-1)

// }



// console.log(printNumber(10))





// console.log(steps(4));
// module.exports = steps;
