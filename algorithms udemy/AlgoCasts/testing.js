
function findOutlier(integers){
  let map = {}
  let type = ""
  integers = integers.filter(x => {
    return Math.sign(x) !== -1})
  for (let i = 0; i <= 2; i++) {
    if ( integers[i] % 2 === 0) {
      if( map["even"] >=1) { map["even"]++}
      else {map["even"] = 1}
    }
    else {
      if (map["odd"] >=1) {map["odd"]++}
      else {map["odd"] =1}
    }
  }
  let keyArr = Object.keys(map).sort()
  if( keyArr[0] === "even" && map[keyArr[0]] === 3) {
    keyArr.push("odd")
    map["odd"] = 0
  } else if(keyArr[0] === "odd" && map[keyArr[0]] === 3) {
    keyArr.push("even")
    map["even"] = 0
  }
  keyArr = keyArr.sort()




  if ( map[keyArr[0]] > map[keyArr[1]]) {
    type = "even"
  } else { type = "odd"}
  console.log(map)
  console.log(type)

  return Number(integers.filter(x => {
    if (type === "even") {
      return x % 2 !== 0
    }
    else if ( type === "odd"){
      return x % 2 === 0
    }
  }))
}

console.log(findOutlier([-134982625,-141390721,134983919,-171361667,5043803,101133237,42896255,-1804085,-117535083,-120322107,-81752773,-6635411,-22517931,163744597,164840817,70918859,49636311,168662501,158371184,188899375,-35266561,74550355,171856345,-160002379,-98292257,117247599,-141950349,47967519,95103205,-90551097,10903789,-118123403]))
// console.log([-134982625],[-141390721],[134983919],[-171361667],[5043803],[101133237],[42896255],[-1804085],[-117535083],[-120322107],[-81752773],[-6635411],[-22517931],[163744597],[164840817],[70918859],[49636311],[168662501],[158371184],[188899375],[-35266561],[74550355],[171856345],[-160002379],[-98292257],[117247599],[-141950349],[47967519],[95103205],[-90551097],[10903789],[-118123403])
