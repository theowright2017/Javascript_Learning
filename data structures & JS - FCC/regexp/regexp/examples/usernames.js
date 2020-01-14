// 1) Usernames can only use alpha-numeric characters.
//
// 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
//
// 3) Username letters can be lowercase and uppercase.
//
// 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
//



let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);

//has to start with one letter, then has EITHER:
// 0-9 two times
// OR
// one or more letters and then any numbers at end
