//complexity increases further down

let a = 8, b = 6;
// change code below this line
[a, b] = [b, a]
// change code above this line
console.log(a); // should be 6
console.log(b); // should be 8

///////// above uses it to swap which values are assigned to each variable


///////// can also use commas to count each element you dont want to choose

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//destructure with rest parameter

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [a,b, ...arr] = list // arr now equals source minus first two elements

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
