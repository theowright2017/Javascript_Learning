function braces(values) {
    values = values.split('')
    let map1 = {}
    let map2 = {}

   for (let i = 0; i < values.length; i++) {
    if ( values[i] === "{" || values[i] === "[" || values[i] === "(") {
        if (map1[values[i]] > 0) {
            map1[values[i]]++
        } else {
            map1[values[i]] = 1
        }
    }
    else if ( values[i] === "}" || values[i] === "]" || values[i] === ")") {
        if (map2[values[i]] > 0) {
            map2[values[i]++]
        } else {
            map2[values[i]] = 1
        }
   }

}
    // let key1 = Object.keys(map1).sort()
    // let key2 = Object.keys(map2).sort()

    let array = Object.values(map1).sort()
    let array2 =Object.values(map2).sort()

    // if ( JSON.stringify(array) == JSON.stringify(array2)) {
        if (JSON.stringify(array) == JSON.stringify(array2)) {
        return "YES"
    } else {
        return "NO"
    }

}


console.log(braces("({}[]()"))
