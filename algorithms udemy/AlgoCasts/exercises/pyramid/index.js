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
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'
//


function pyramid(n, row = 1) {
    if (row > n ) { return }

    let string = []
    let colL = n - row + 1
    let colR = n + row - 1
    for ( let column = 1; column <= n*2-1; column++ ){
        if (  row === 1 && column === n || 
              column >= colL && column <= colR){
            string.push('#')
        }
        else {
            string.push(' ')
        }
    }
    console.log(string.join(''))
  
    return pyramid(n, row + 1)
}

pyramid(20)

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

// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2)
//     for (let row = 0; row < n; row++) {
//         let level = "";
        
//         for (let column = 0; column < 2 * n -1; column++) {
//             if ( midpoint - row <= column && midpoint + row >= column) {
//                 level += "#"
//             } else {
//                 level += " "
//             }
//         }
//         console.log(level)
//     }
// }




module.exports = pyramid;



