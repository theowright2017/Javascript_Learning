const makeServerRequest = new Promise((resolve, reject) => {

});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const makeServerRequest = new Promise((resolve, reject) => {

  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest
.then(result => {
  console.log(result);
})
.catch((error) => {
  console.log(error)
});
