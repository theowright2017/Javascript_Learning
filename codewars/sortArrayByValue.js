// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//


function order(words){
  // split word by space
    words = words.split(' ')
    let obj = {}
  // check what number is in word
    for ( let i = 0; i < words.length; i++) {
      let word = words[i]
      for ( let j = 0; j < word.length; j++) {
        if (Number.isInteger(word[j])) {
          obj[word] = word[j+1]
        }
      }
    }
  // add number to be new index
  console.log(obj);
  // rearrange words by new indexes
}



console.log(order("is2 Thi1s T4est 3a"))
