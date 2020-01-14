/*
space complexity


  --  rules of thumb

        - most primitives (booleans, numbers, undefined
          , null) are constant space

        - strings require O(n) space where n is string length

        - reference types are generally O(n), where n is length of array or number of keys in object




  --    example


//one variable
// second variable dec inside loop

    function sum(arr) {
      let total = 0;
      for (let i = 0; i < arr.length; i++){
        total += arr[i];
      }
      return total;
    }

//only has two variables, so constant space O(1) space
//only ever have two items, doesn't change in proportion to input


// one variable
//second in loop
//array increases in proportion to input, storing items proportionate to n
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(2 * arr[i])
  }
  return newArr;
}

// O(n)













*/
