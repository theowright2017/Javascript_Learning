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


console.log(narcissistic(1634))
