let sampleWord = "astronaut";
let pwRegex = /^[a-z](?=\w{5,})(?=\D*\d{2,})/i;
let result = pwRegex.test(sampleWord);

// starts with a-z case ignored
// check if string will include any 5 or more characters
// string will contain 0 or more non numeric
// also includes at least 2 numeric

//NOT
//banan1
//8pass99
//12abcde

//YES
////abc123
//bana12
