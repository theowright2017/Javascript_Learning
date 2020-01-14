let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i;
let result = ohRegex.test(ohStr);

// match exp with 3 - 6 h's




/////// no upper limit

let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i;
let result = haRegex.test(haStr);



////////specify amount

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i; // Change this line
let result = timRegex.test(timStr);
