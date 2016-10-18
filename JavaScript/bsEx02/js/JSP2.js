function cngClass () {
	console.log("Changing Class");
	this.className = "";
	this.className = "alert alert-danger";

}


function cngSize () {
	console.log("Changing Font Size");

	this.style.fontSize = '2em';

}

// The first step in the hardening process is to check if the DOM element exists before we attempt to assign an event listener to it. We do this by simply putting the addEventLisitener into an If statement.  document.getElementByID will return false if the element does not exist.  The element referenced below does not exist; console.log is used to send some debug information to the browser console.

var W3C = document.getElementById("W3C");

// The next problem is that older versions of Internet explorer did not implement addEventListener; they implemented attachEvent.  Using the same approach as above, we can setup a more robust checking mechanism  to allow us to check for the existance of the element, and setup a method to attach the events for older verions of IE and everything else.

if (W3C){
	if (W3C.addEventListener){
		W3C.addEventListener("click", cngClass, false);
		W3C.addEventListener("click", cngSize, false);
		console.log("Added Event Listener");
	}
	else if (W3C.attachEvent){
		W3C.attachEvent("onclick", chgClass);
		W3C.attachEvent("onclick", chgSize);
		console.log("Attached Event - Old IE");
	}
}
else {
	console.log("Element W3C not found");	
}