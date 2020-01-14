let words = ["A great product for daily use",
"Great price. Takes about 10days for delivery",
"Excellent value - will buy again",
"Fine, I always use this, was as expected",
"Good value",
"excellent product, good value",
"good",
"does the job!",
"Thank you",
"Great it's that is easy to use",
"I hated it",
"arrived on time, excellent product, thank you",
"quick service great price.",
"good and refreshing",
"My daughter is road testing this, but so far it's refreshing",
"DO NOT BUY THIS PRODUCT",
"Avoid",
"Did not notice any difference",
"Horrible taste",
"Does its job and shows it works"]
joinedwords = words.join(' ')
console.log(joinedwords);
console.log("_____________");
// removeChars = joinedwords.replace(/[^\w]/gi, " ").toLowerCase()
// replaceApos = removeChars.replace(/it\ss\s/g, "it's ")
// replaceNum  = replaceApos.replace(/[0-9]/g, "")
// replaceWhi  = replaceNum.replace(/\s\s+/g, " ")
now = joinedwords.replace(/[!,.-]*[0-9]*/g, "").toLowerCase()

  // (/[^A-Za-z' ]/g, "")


  

// l = now.replace(/\s+/g, "")

console.log(now);
console.log("_____________");
// console.log(removeChars);
