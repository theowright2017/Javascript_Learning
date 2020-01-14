  const route1 = "GE";
  const route2 = "EL";
  const route3 = "GL";
  const route4 = "LC";
  const route5 = "AE";
  const route6 = "B";



const route = (start, end) => {
  const routes = [route1, route2, route3, route4, route5, route6]

  // iterate over given routes to find a match
  routes.map(route => {
    if (route[0] === start.charAt(0) && route[1] === end.charAt(0)) {
      console.log(true, route);
      return true;
    }
    else {
      console.log(null);
      return null;
    }
  })

}



route("Aberdeen", "Edinburgh");











//
