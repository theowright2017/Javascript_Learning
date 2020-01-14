// factorial is the number, with all its numbers multiplied by each other
//5! = 1 * 2 * 3 * 4 * 5 = 120


function factorialize(num, factorial = 1) {
  return num < 0 ? 1 : (
    new Array(num)
      .fill(undefined)
      .reduce((product, val, index) => product * (index + 1), 1)
  );
}
factorialize(5);
// new array with num elements;
// fill each element with undefined to make reducible;
// each iteration will be acc * (index + 1) to give value, starting at 1



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function factorialize(num) {

  for (let i = 1; num > 0; num--) {
    i *= num
  }
  return i;
}

factorialize(5);
