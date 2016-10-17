// Creating Objects in Node


// Instantiate a new bbject
var objectCar = new Object();
objectCar.color = "yellow"
objectCar.doors = 2;
objectCar.velocity = 40;
objectCar.faster = function(){
  return this.velocity += 10;
};
console.log();
console.log("-- JAVASCRIPT OBJECT -----------------------------");
console.log(objectCar);
console.log("--------------------------------------------------");
console.log("");


// use an object literal
var literalCar = {
	color: "blue",
	doors: 4,
	velocity: 60,
	faster: function(){
		return this.velocity += 10;
	}
};


console.log();
console.log("-- OBJECT LITERAL ---------------------------------");
console.log(literalCar);
console.log(literalCar.color);
console.log(literalCar.doors);
console.log("The car is travelling at " + literalCar.velocity);

literalCar.faster();

console.log("The car is now travelling at " + literalCar.velocity);
console.log("--------------------------------------------------");



// use a constructor function
console.log();
console.log("-- CONSTRUCTOR FUNCTION --------------------------");
function car(color, doors, velocity){
	this.color = color;
	this.doors = doors;
	this.velocity = velocity;
	this.faster = function(){
		return this.velocity += 10;
	};
};

functionCar = new car("Green", 2, 70);
console.log(functionCar);
