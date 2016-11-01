//JSON.js

var fs = require('fs');  


function car(color, doors, velocity){
	var _wheels = 4;
	this.color = color;
	this.doors = doors;
	this.velocity = velocity;
	this.faster = function(){
		return this.velocity += 10;
	};

	this.getWheels = function(){
		return _wheels;
	}
};

myCar = new car("black", 2, 100);

myCarJSON = JSON.stringify(myCar);
console.log(myCar);
console.log(myCarJSON); // note no functions or private variables

fs.writeFile("myCar.json", myCarJSON, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("JSON Car was saved to myCar.json!");
});
