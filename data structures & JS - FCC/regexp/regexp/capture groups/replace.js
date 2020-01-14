let huhText = "This sandwich is good.";
let fixRegex = /(good)/;
let replaceText = "okey-dokey";
let result = huhText.replace(fixRegex, replaceText);



// can also use $ as placeholder for each element

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
