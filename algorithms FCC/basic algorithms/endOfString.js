function confirmEnding(str, target) {
  let amount = target.length
  let subStr = str.slice(-amount)
  return subStr === target
}

confirmEnding("Bastian", "n");



///////////


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));
