let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);


// ( ) sets the group to search for
// \s\1\s\1 states it will be followed by space, repeated once, followed by space, repeated third time
// ^ $ states it begin and end with this expression?
