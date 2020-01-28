function narcissistic(value) {
  let numArr = value.toString(10).split('').map(x => {
    return parseInt(x)
  })
  let power = numArr.length

  let result = numArr.map(x => {
    return Math.pow(x, power)
  })
  .reduce((acc, val) => {
    return acc + val
  })

  return result === value

}
// find number that when each digit is multiplied by power of numbers length, and then all added together, makes same number
