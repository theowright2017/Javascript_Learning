// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

// spaces less than n will be +2 either side, as n increments
// and then -= 1 for each consecutive line
// hash will also be plus 2 for each inc. of n

// function pyramid(n) {
//     let hash = "#"
//     let space = "a"
//     let string = ""
//     let count = n
//     for (let i = 1; i <= n; i++) {
//         string = space.repeat(count-1) + hash.repeat((i*2) - 1) + space.repeat(count-1)
//         count--  
//         console.log(string)
//     }   
// }

function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2)
    for (let row = 0; row < n; row++) {
        let level = "";
        
        for (let column = 0; column < 2 * n -1; column++) {
            if ( midpoint - row <= column && midpoint + row >= column) {
                level += "#"
            } else {
                level += " "
            }
        }
        console.log(level)
    }
}

console.log(pyramid(4))
module.exports = pyramid;



