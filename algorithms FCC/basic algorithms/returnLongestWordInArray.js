function findLongestWordLength(str) {
  let newStr = str.split(' ')
  let count = 0;
  newStr.reduce((acc, val) => {
    if (val.length > count) {
      count = val.length
    }
  })
  return count;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");




// or using map and spread to pass each element.length as arg to math.max, then result will be array of word lengths

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
