// Both cngColor and cngSize are attached to a specific DOM element, so there is no need to refer to them through the DOM structure; there never was..  the keyword 'this' refers to the object to which the event handler is attached.  So in this case, the event handler was attached to the div with the title W3C.  By using the 'this' keyword we can now use the same code across any number of elements.


function cngColor () {
	console.log("Changing Color");
	this.style.color = 'yellow';
}


function cngSize () {
	console.log("Changing Font Size");
	this.style.fontSize = '2em';
}

// This function accepts a DOM object and checks to see if it is there.  If it is, it will attach the chgColor handler to a click event.  It is included here for clarity.  It would be better to use the more robust version named addEvent 


function elementTest (obj) {
	if (obj){
		obj.addEventListener('click', cngColor, false);
		console.log("Found the element " + obj);
	}
	else {
		console.log("Element " + obj + " not found");	
	}
}




// The function below is used to add a single listener and corresponding handler to a DOM element.  It accepts the element in the form of a variable, checks to see if it is in the DOM and if so proceeds to add the listener and associated handler.

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
		console.log("Element " + obj + " not found");	
	}
}


var element = document.getElementById('W3C');

addEvent(element, "click", cngColor);
addEvent(element, "click", cngSize);
