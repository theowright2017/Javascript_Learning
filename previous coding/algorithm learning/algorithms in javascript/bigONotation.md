 /*
simplifying big o notation

  --  constant's dont matter

  we can compress constants down to their simlified terms as they don't affect overall performance in terms of time and n, their relation to each other will always be the same.

  O(2n)  =>   O(n)
  O(500)  =>  0(1)
  O(13^2) =>  O(n^2)


  --  smaller terms don't matter

  O(n + 10)   =>  O(n)
  O(1000 + 50)  => O(n)
  O(n^2 + 5n + 8) =>  O(n^2)


  --  big o shorthands

//
  1.  arithmetic operations are constant
  2.  variable assignment is constant
  3.  accessing array using index or object nd key is constant
  4.  in loop, complexity is the length of the loop times the complexity of whatever happens inside


    --  examples

--  as n continues to grow, what happens,
if n is 10million, the loop will run that many times

  function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
      console.log(i);
    }
  }


--

////////////////
//////big o of objects

  --  big o is always fast in objects
  --  however objects are un ordered
    big o of objects
      - insertion O(1)
      - searching O(n)
      - removal O(1)
      - access O(1)

    big o of object methods
      - Object.keys O(n)
      - Object.values O(n)
      - Object.entries O(n)
      - hasOwnProperty  O(1)





//////big o of arrays

      - insertion/removal - dependant on where
        - end O(1),  start(re index each element) O(n)

      - access O(1)
      - searching O(n)


      big o of array methods

      -  push / pop O(1)
      - shift / unshift O(n)
      - concat, slice, splice O(n)
      -sort   O(n * logn)
      - forEach, map, filter, reduce O(n)











 */
