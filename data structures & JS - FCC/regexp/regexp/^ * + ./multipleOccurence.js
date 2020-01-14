/////  + is one or more
////   * is zero or more



// using + will match ["ss"] or in sasa ["s", "s"]

let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);



// * matches one or more of A plus a
// Aaaaaa
// And (just matches A)
// saas (doesnt match)

let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
