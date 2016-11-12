function cngColor () {
	console.log("Changing Color");

	document.getElementById("W3C").style.color = 'yellow';

}


function cngSize () {
	console.log("Changing Font Size");

	document.getElementById("W3C").style.fontSize = '2em';

}

// The first step in the hardening process is to check if the DOM element exists before we attempt to assign an event listener to it. We do this by simply putting the addEventLisitener into an If statement.  document.getElementByID will return false if the element does not exist.  The element referenced below does not exist; console.log is used to send some debug information to the browser console.

if (document.getElementById("NotInPage")){
	document.getElementById("NotInPage").addEventListener('click', cngColor, false);
	console.log("Found the element NotInPage");
}
else {
	console.log("Element NotInPage not found");	
}

// The next problem is that older versions of Internet explorer did not implement addEventListener; they implemented attachEvent.  Using the same approach as above, we can setup a more robust checking mechanism  to allow us to check for the existance of the element, and setup a method to attach the events for older verions of IE and everything else.

if (document.getElementById("W3C")){
	if (document.getElementById("W3C").addEventListener){
		document.getElementById("W3C").addEventListener("click", cngColor, false);
		document.getElementById("W3C").addEventListener("click", cngSize, false);
		console.log("Added Event Listener");
	}
	else if (document.getElementById("W3C").attachEvent){
		document.getElementById("W3C").attachEvent("onclick", chgColor);
		document.getElementById("W3C").attachEvent("onclick", chgSize);
		console.log("Attached Event - Old IE");
	}
}
else {
	console.log("Element W3C not found");	
}
// The code above is far from pretty and could easily be improved.