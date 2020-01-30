// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]



var moveZeros = function (arr) {
  let arr1 = arr.filter(el => {
    return el !== 0
  })
  let arr2 = arr.filter(el => {
    return el === 0
  })
  return arr1.concat(arr2)
}


console.log(moveZeros([false, undefined, true, 1,0,1,2,0,1,3,"a"]))
