// localStorage.js

function initJS () {

	$('#formButton').click(formInfo);
}


function formInfo () {

	inKey = $('#frmkey').val;
	inVal = $('#frmvalue').val;

	console.log(inKey, inVal);

	if (localStorage.getItem(inKey) === null){

		localStorage.setItem(inKey, inVal);

		$('#message').innerHTML = "Data Entered:"
		$('#ekey').innerHTML = inKey;
		$('#evalue').innerHTML = localStorage.getItem(inKey);

	} else{
		$('#message').innerHTML = "Key Error: no data entered"
	}


}

function simpleSetRetrieve () {

	localStorage.setItem('simpleName','This is some simple data');

	var output = "<h3>"
	output += localStorage.getItem('simpleName');
	output += "</h3>"

	$('#StrTestData').innerHTML = output;

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

	$('#ObjTestData').innerHTML = output;
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
reflectCode();


// The function below is to reflect the contents of the javascript file back to the HTML Page
function reflectCode(){
	$.get('js/localStorage.js', function(data) {
	   $('#codeExample').text(data);
	}, 'text');
}