function reverseString(str) {
  return str.split('').reduce((acc, val) => {
    return val + acc
  })
}

reverseString("hello");
