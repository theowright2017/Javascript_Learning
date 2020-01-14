let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

// naturally greedy, use ? to find shortest match instead
// otherwise would match h1>Winter is coming</h1
