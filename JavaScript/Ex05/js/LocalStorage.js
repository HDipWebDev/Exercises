function addEvent (obj, listener, handler) {
	if (obj){
		if (obj.addEventListener){
			obj.addEventListener(listener, handler, false);
			console.log("Added Event Listener to " + obj );
		}
		else if (obj.attachEvent){
			obj.attachEvent("on" + listener, handler);
			console.log("Attached Event - Old IE");
		}
	}
	else {
		console.error("Element " + obj + " not found");	
	}
}


function initJS () {

	addEvent(document.getElementById('formButton'), 'click', formInfo)

}


function formInfo () {

	inKey = document.getElementById('frmkey').value;
	inVal = document.getElementById('frmvalue').value;

	console.log(inKey, inVal);

	if (localStorage.getItem(inKey) === null){

		localStorage.setItem(inKey, inVal);

		document.getElementById('message').innerHTML = "Data Entered:"
		document.getElementById('ekey').innerHTML = inKey;
		document.getElementById('evalue').innerHTML = localStorage.getItem(inKey);

	} else{
		document.getElementById('message').innerHTML = "Key Error: no data entered"
	}


}

function simpleSetRetrieve () {

	localStorage.setItem('simpleName','This is some simple data');

	var output = "<h3>"
	output += localStorage.getItem('simpleName');
	output += "</h3>"

	document.getElementById('StrTestData').innerHTML = output;

}



var exObject = {

	getName: function (){
		return this.name;
	},

	setName: function (val){
		this.name = val;
	},

	getNumber: function (){
		return this.number;
	},

	setNumber: function (val){

		this.number = val;
	},
}

function showRetObj (obj) {

	console.log(obj);

	var output ='<h3>';
	output += 'The object name is: ' + obj.name;
	output += '</h3><br><h3>  ';
	output += 'The object number is: ' + obj.number;
	output += '</h3>';
	console.log(output);

	document.getElementById('ObjTestData').innerHTML = output;
}



window.onload = initJS;

exObject.setName('This is my example object to store in localStorage');
exObject.setNumber(14);

console.log(exObject.getName());
console.log(exObject.getNumber());

localStorage.setItem('myObject', JSON.stringify(exObject));

console.log(localStorage.getItem('myObject'));

var retObj = JSON.parse(localStorage.getItem('myObject'));
console.log(retObj);

showRetObj(retObj);

simpleSetRetrieve();


