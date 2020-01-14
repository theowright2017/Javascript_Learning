function truncateString(str, num) {
  console.log(num);
  return num < str.length ?
   str.slice(0, num).concat("...")
   :
   str
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow bas".length));
