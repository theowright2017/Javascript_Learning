function twoSum(numbers, target) {
  var tmp, hash = {};
  numbers.forEach(function(a, i){ hash[a] = i; })

  for (var i = 0; i < numbers.length; i++){
    tmp = target - numbers[i];
    if (typeof hash[tmp] !== 'undefined') return [i, hash[tmp]]
  }
}
