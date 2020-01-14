let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*\sRoosevelt/; //
let result = myRegex.test(myString);

// use wildcard . to search for an instance or any character zero or more times
