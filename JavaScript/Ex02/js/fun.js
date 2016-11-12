// Both cngColor and cngSize are attached to a specific DOM element, so there is no need to refer to them through the DOM structure; there never was..  the keyword 'this' refers to the object to which the event handler is attached.  So in this case, the event handler was attached to the div with the title W3C.  By using the 'this' keyword we can now use the same code across any number of elements.


// Toggling the color is a bit awkward as the color of the div has been inherited from the body CSS.  The element itself does not have a color at the start, so the first test is to see if the color has been set; if not (!) then the color is set to red with white background.  The next time the function is called on the object the color should be red, which fails the else if condition and process goes into the else block which sets the color to white with red background.



function cngColor () {
	if (!this.style.color) {
		console.log("Color Not Set");
		this.style.color = 'red';
		this.style.backgroundColor = 'white';		
	} else if(this.style.color == 'white'){
		console.log("to white");
		this.style.color = 'red';
		this.style.backgroundColor = 'white';	
	} else {
		console.log("from white");
		this.style.color = 'white';
		this.style.backgroundColor = 'red';
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


/*
addEvent(document.getElementById('1'), "click", cngColor);
addEvent(document.getElementById('2'), "click", cngColor);
addEvent(document.getElementById('3'), "click", cngColor);
addEvent(document.getElementById('4'), "click", cngColor);
addEvent(document.getElementById('5'), "click", cngColor);
addEvent(document.getElementById('6'), "click", cngColor);
addEvent(document.getElementById('7'), "click", cngColor);
addEvent(document.getElementById('8'), "click", cngColor);
addEvent(document.getElementById('9'), "click", cngColor);

*/

// There is a cleaner way to do the above using a for loop

for (var i = 1; i <10 ; i++){
	addEvent(document.getElementById(i), "click", cngColor);
}


