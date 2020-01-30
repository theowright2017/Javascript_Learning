function findOutlier(integers){
   let map = {}
   for (let i = 0; i <=3; i++) {
     if ( integers[i] % 2 === 0) { map["even"]+=1 }

     else { map["odd"] += 1 }
   }
   console.log(map)
}

findOutlier([0, 1, 2])
