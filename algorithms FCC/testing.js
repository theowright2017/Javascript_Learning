function reverseString(str) {
  debugger;
  return str.split('').reduce((acc, val) => {
    return val + acc
  })
}

reverseString("hello");
