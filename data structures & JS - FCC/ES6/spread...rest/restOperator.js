const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6





// rest operator ...args allows us to use a placeholder for multiple function arguments that can be defined later, it creates an array that we can then apply array methods to the arguments e.g .reduce()
