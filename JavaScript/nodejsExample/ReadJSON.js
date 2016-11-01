//ReadJSON.js

var fs = require('fs');  

// Async file read
fs.readFile('myCar.json', (err, data) => {
  if (err) throw err;
  console.log('Data returned from disk:');
  console.log(data);
  console.log('Data parsed into JSON format');
  var object = JSON.parse(data)
  console.log(object, object.color, object.doors, object.velocity);
});

console.log("This will be done first!");