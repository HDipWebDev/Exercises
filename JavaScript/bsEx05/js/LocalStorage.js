// localStorage.js

window.onload = initJS;

function initJS () {

	$('#formButton').click(formInfo);


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
}


function formInfo () {

	inKey = $('#frmkey').val();
	inVal = $('#frmvalue').val();

	console.log(inKey, inVal);

	if (localStorage.getItem(inKey) === null){

		localStorage.setItem(inKey, inVal);

		$('#message').html('Data Entered');
		$('#ekey').html(inKey);
		$('#evalue').html(localStorage.getItem(inKey));

	} else{
		$('#message').html('Key Error: no data entered');
	}


}

function simpleSetRetrieve () {

	localStorage.setItem('simpleName','This is some simple data');

	$('#lsData').attr('placeholder', localStorage.getItem('simpleName'));

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

	$('#objName').attr('placeholder', obj.name);
	$('#objNumber').attr('placeholder', obj.number);

}


// The function below is to reflect the contents of the javascript file back to the HTML Page
function reflectCode(){
	$.get('js/localStorage.js', function(data) {
	   $('#codeExample').text(data);
	}, 'text');
}