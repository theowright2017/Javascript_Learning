const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

//this
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

//becomes
const {today: highToday, tomorrow} = HIGH_TEMPERATURES;

console.log(yesterday) // should be not defined
console.log(highToday); // should be 77
console.log(tomorrow); // should be 80


// destructuring objects allows us to extract whatever info we need from an object in a clean way, it can also be used to assing new variable name


////////////////////////////
// can also be used on nested objects:

//     const LOCAL_FORECAST = {
//        today: { low: 64, high: 77 }
//     }
//  const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// use object destructuring to pass object as function parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0;

console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

// function half is now reusable with any object that contains keys max and min
