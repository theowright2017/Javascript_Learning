
function solution(digits){
  let array = digits.toString().split('')
  let total = 0;
  let groupTotal = 0;
  let totalGroup = 0;
  console.log(array);
  for (i = 0; i < array.length; i++) {


    let group = array.splice([i], 5).join('')
    console.log(group);
    for (i =0; i < group.length; i++) {
      groupTotal += parseInt(group.charAt(i))
      console.log(groupTotal);
    }
    if ( groupTotal > total ) {
      total = groupTotal
      totalGroup = groupTotal;
    }

      // console.log(total);

}
  console.log(totalGroup);
  // return totalGroup;/
}


solution(1234567899998)
