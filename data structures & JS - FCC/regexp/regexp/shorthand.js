let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;
let result = quoteSample.match(alphabetRegexV2).length;


///// capital W searches for opposite
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi;
let result = quoteSample.match(nonAlphabetRegex).length;


////// \d is just digits
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;


//// \D everything NOT digits
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/;
let result = movieName.match(noNumRegex).length;
