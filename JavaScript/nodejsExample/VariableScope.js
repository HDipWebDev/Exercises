//VariableScope.js

function myLoop(count){
	b = 'Global from Function!';
	var c = 0;
	console.log("Function variable c: " + c);
	for (var i = count; i > 0; i--){
		console.log("Function variable c: " + c);
		c += i;
	}
	return c;
};
var a = 'Global-a';
var d = myLoop(5);
console.log("Variable a: " + a);
console.log("Variable b: " + b);

try{

	console.log("Variable c: " + c);

}
catch(err) {
	console.log(err);
}

console.log("Variable d: " + d);