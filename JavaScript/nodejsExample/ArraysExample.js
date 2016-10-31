// Arrays in Node

function car(color, doors, velocity){
	this.color = color;
	this.doors = doors;
	this.velocity = velocity;
	this.faster = function(){
		return this.velocity += 10;
	};
};

function printMessage(){
  var msg = "Enter some message here!"
  console.log(msg);
};

var primitive = 1024;

functionCar = new car("Green", 2, 70);

var myArray = [primitive, printMessage, functionCar];


console.log("-- Array Contents --");
console.log(myArray);
console.log();
console.log("-- Array Index 1 --");
console.log(myArray[0]);
console.log();
console.log("-- Array Index 2 --");
console.log(myArray[1]);
console.log();
console.log("-- Array Index 3 --");
console.log(myArray[2]);
