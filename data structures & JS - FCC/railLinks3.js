const route1 = "GE";
const route2 = "EL";
const route3 = "GL";
const route4 = "LC";
const route5 = "AE";
const route6 = "B";

const route = (start, end) => {
  const routes = [route1, route2, route3, route4, route5, route6]

  let direct = false;

  routes.map(route => {
    if (route[0] === start.charAt(0) && route[1] === end.charAt(0)) {
       direct = true;
    }
  })

  let links = [];
  if ( direct === false) {
    routes.map(route => {
      if (route[0] === start.charAt(0) || route[1] === end.charAt(0)) {
        links.push(route)
      }
    })
  }

  let linkingStations = [];
  let linkingStation = ""
  links.forEach(link => {
    if (link.charAt(0) === start.charAt(0)) {
      linkingStation = link.charAt(1)

    }})

    links.forEach(link => {
    if (link.charAt(1) === end.charAt(0)) {

      // linkingStation.concat(end.charAt(0))
      linkingStation = linkingStation.concat(end.charAt(0)).slice()

    }
  })

}
route("Aberdeen", "London");


////  if i had more time there is no doubt much more efficient way to code this
// to complete, i would use .slice() to return the new string with the linking route,
// in terms of having multiple links, i would maybe push this into an array of linking stations, but how this would work from there, without more time to consider, im not sure








//
