// JavaScript file to demonstrate JavaScript Cookie creation and retreival.

$('document').ready(init);

function init () {
	console.log('Running Init');
	reflectCode();
	incrementVisitCount();	
	$('#subButton').click(formToCookie);
	showInitialVals();

}

function setCookie (cookieKey, cookieValue, lifeSpan, path) {
	// Default constructor for creating a cookie.  Cookies can be simple key-value pairs, or we can add
	// some more detail, such as an expiry date, and the URL to which it applies.  This function
	// requires a value for the Cookie Key, the Cookie Value, time in months to expiry, and the URL to
	// which it applies.  The full text to be supplied is of the form:
	//                           SOMEKEY=SOMEVALUE;path=SOMEPATH;expires=SOMEDATE 

	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+lifeSpan);
	var path = ';path=' + path + ';expires=';
	
	document.cookie = cookieKey + '=' + cookieValue + ';path=/;expires=' + expireDate.toGMTString();

}


function getCookie (cookieKey) {
	
	// a cookie is really just a string with some rules on how it is to be constructed
	// so in order to test for the existence of a cookie, and/or retrive its value we 
	// need to look at some string manipulation.  The code below is adapted from W3Schools
	
	// first the existance of the cookie is checked; if the cookie does not exist, null is returned
	// As the cookie is really just a string, we simply need to select the part of the string that we
	// are interested in, by using substring, and return that.
	// to do this we need to use the substring method, which will return a string, dependent on the 
	// values for start and end.   
	
	var cookieValue = null;
	var myCookie = document.cookie;
	var subStrStart = myCookie.indexOf(" " + cookieKey + "=");
	// the above line will determine where the cookieKey value is in the cookie strings

	if (subStrStart == -1) {
		subStrStart = myCookie.indexOf(cookieKey + "=");
		// this is a second try at finding the key value by removing the blank at the start

	}

	if (subStrStart == -1) {
	    cookieValue = null;
	    console.error('Cookie Key not found!')
	  // if the key does not exist, return null
	} else {
	  	subStrStart = myCookie.indexOf("=", subStrStart) + 1;
	  	var subStrEnd = myCookie.indexOf(";", subStrStart);
	  	if (subStrEnd == -1) { 
			subStrEnd = myCookie.length;
		}
		cookieValue = unescape(myCookie.substring(subStrStart,subStrEnd));
	}
	console.log('Recovered Cookie Value is: '  + cookieValue);
	return cookieValue;
}


function formToCookie () {
	// First we get the form values from the HTML Form
	
	var name = $('#name').val();
	var email = $('#userEmail').val();

	setCookie('name', name, 12, '/');
	setCookie('email', email, 12, '/');

    var pName = createNewElement(
    	'p', 
    	'text-primary', 
    	'attachedCookieNameID', 
    	'Entered Name value is: ' + name + '.'
    );

    var pEmail = createNewElement(
    	'p', 
    	'text-primary', 
    	'attachedCookieEmailID', 
    	'Entered Email value is: ' + name + '.'
    );

    if ($('#attachedCookieNameID').length > 0){
    	console.log('name exists')
    	$('#attachedCookieNameID').text('Entered Name value is: ' + name + '.');
    } else {
     	$('#cookieVals').append(pName);   	
    }

    if ($('#attachedCookieEmailID').length > 0){
    	console.log('email exists')
    	$('#attachedCookieEmailID').text('Entered Email value is: ' + email + '.')
    } else {
     	$('#cookieVals').append(pEmail);   	
    }
}

function incrementVisitCount () {
// first check to see if the user has been to site before by checking the
// cookie value.  If it is the first visit, then create a cookie and 
// send message to page; else increment the number of visits and send message
// to page
	var numVisits = 0; // initalise variable
	
	if (getCookie('visitCount') === null){
		setCookie('visitCount', '0', 12, '/')
	    $('#cookieVals').children('h3').append('This is your first visit to this site.')
	} else {
		numVisits = getCookie('visitCount');
		numVisits ++;
		setCookie('visitCount', numVisits, 12, '/')			
	    $('#cookieVals').children('h3').append('You have been here ' + numVisits +' times before.')
	}
}



function showInitialVals () {
	
	if (getCookie('name') === null) {
	    var pName = createNewElement(
	    	'p',
	    	'text-primary',
	    	'attachedCookeNameID',
	    	'No Previous Name Cookie'
	    );
	    $('#cookieVals').append(pName);

	} else {
		var cookieName = getCookie('name');
	    var pName = createNewElement(
	    	'p',
	    	'text-primary',
	    	'attachedCookieEmailID',
	    	'Cookie Name value is: ' + cookieName + '.'
	    );
	    $('#cookieVals').append(pName);

	} 

	if (getCookie('email') === null) {
	    var pEmail = createNewElement(
	    	'p',
	    	'text-primary',
	    	'attachedCookeNameID',
	    	'No Previous Email Cookie'
	    );
	    $('#cookieVals').append(pEmail);

	} else {
		var cookieEmail = getCookie('email');
	    var pEmail = createNewElement(
	    	'p',
	    	'text-primary',
	    	'attachedCookieEmailID',
	    	'Cookie Email value is: ' + cookieEmail + '.'
	    );
	    $('#cookieVals').append(pEmail);

	} 
}

function createNewElement(tag, classname, id, text){
	var element = document.createElement(tag);
	element.className = classname;
	element.id = id;
	var text = document.createTextNode(text);
	element.appendChild(text);
	return element;
}

// The function below is to reflect the contents of the javascript file back to the HTML Page
function reflectCode(){
	$.get('js/JSCookieJQuery.js', function(data) {
	   $('#codeExample').text(data);
	}, 'text');
}