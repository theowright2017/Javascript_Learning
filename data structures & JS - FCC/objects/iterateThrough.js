function countOnline(usersObj) {

  let online = 0;
  for (let each in usersObj) {

    usersObj[each].online === true ? online++ : online
  }
  return online
}

// remember that to access nested objects we need to use bracket notation

// bracket notation is used when the parameter is dynamic, as in this case name which acts as the key changes each time


let usersObj =
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
