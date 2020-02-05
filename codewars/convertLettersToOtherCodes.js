// How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

// rot13("EBG13 rknzcyr.") == "ROT13 example.";
// rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"



// each letter is subbed for one 13 points above it, if letter at end, remainder
// starts from 65

function rot13(str) {


  let arr = str.split('')
  let result = []


  for (each of arr) {
    let code = each.charCodeAt(0)
    let newCode = each.charCodeAt(0) + 13

    if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
      if (code >= 65 && code <= 90) {
        if ( code + 13 >= 90){
          let num = 12 - (90 - code)
          result.push(String.fromCharCode(65 + num))
        } else { result.push(String.fromCharCode(newCode)) }
      }
      else if (code >= 97 && code <= 122) {
        if ( code + 13 >= 122){
          let num = 12 - (122 - code)
          result.push(String.fromCharCode(97 + num))
        } else { result.push(String.fromCharCode(newCode)) }
      }



    } else {
      result.push(each)
    }

  }

  return result.join('')
}







console.log(rot13("@[`{"))
