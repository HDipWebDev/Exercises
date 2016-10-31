//closure.js

function car(color, doors, velocity){
		
	var _wheels = 4;  // underscore is a convention for private variables

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

console.log(myCar);
console.log("NOTE THAT WHEELS IS NOT LISTED ABOVE");
// Wheels is a private variable, so we need to access by the getter function.
console.log("The Number of wheels is: " + myCar.getWheels());