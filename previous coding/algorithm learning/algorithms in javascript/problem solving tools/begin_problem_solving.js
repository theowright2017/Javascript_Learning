// STEP 1 understanding the problem
//
// 1. restate the question back in my own words
// 2. what are the inputs to the problem
// 3. what are the outputs that are to be returned
// 4. can the outputs be determined from the inputs
// 5. how should i label important pieces of data that are part of the problem


// STEP 2 explore examples

//coming up with examples can help you understand the problem better
// examples also provide sanity checks that your eventual solution works how it should

//1.  write down two or three simple examples
//2. progress to more complex examples
//3. examples with empty inputs
//4. examples with invalid inputs


//*****  write a function which takes in a string and returns counts of each character in the string

//1.
// charCount("aaaa"); // {a:4}
//2.
// charCount("Hello, my phone number is")
//do we need to seperate upper and lower case??
//3.
// charCount("")
//what do we want to return?
//4.
// charCount(null)
//how would we want to handle this??



// STEP 3 break it down

//  explicitly write out the most individual steps needed
// reg. above function

//return object with count for each character present

//str = "Your PIN number is 1234"

// function charCount(str){
//   //do something
//   return result;
// }

// function charCount(str){
// make object to return at end
// loop over string

//   return object at end;
// }

// function charCount(str){
// make object to return at end
// loop over string for each character
    //if char is num/letter key in object, add 1 to count
    // if char is num/letter not present, add and set val to 1
    // if char is anything else, !.#? etc do nothing
//   return object at end;
// }



// STEP 4 solve / simplify

// if you cant solve the full problem, solve a simpler version of it
// this will also give insight into the harder part of the problem

// to SIMPLIFY:
// find the core difficulty of the problem
// temporarily ignore it
// write a simplified solution
// incorporate the difficulty back in


 function charCount(str){
// make object to return at end
  var result = {};
// loop over string for each character


  for (var i = 0; i < str.length; i++){
    var char = str[i].toLowerCase();
    if(result[char] > 0) {
      //if char is num/letter key in object, add 1 to count
      result[char]++;
    } else {
      // if char is num/letter not present, add and set val to 1
      result[char] = 1;
    }
    // return result;

}
console.log(result);
}
    // if char is anything else, !.#? etc do nothing
//   return object at end;
// }

charCount("Hello World")


////
///// LOOK BACK & REFACTOR


/*
  - can you check result?
  - can you get the result differently?
  - can you understand and read it at a glance?
  - can the result or method be reused?
  - improve performance?
  - other ways to refactor
  - how have others solved it?

- doesn't necessarily have to be refactored, but good idea to go over and discuss solution with interviewer





*/
















//
