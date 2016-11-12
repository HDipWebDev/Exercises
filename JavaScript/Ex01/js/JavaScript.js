function SayHello(){

	var someText = "<p>This is some HTML that is inserted at runtime by a JavaScript function.	Note that the original text has been completely replaced by what you are reading now.  If you want to add text to the existing, you need to do some more work.  Another point of interest is viewing the page source.  If you view the page source you will see that the source is unchanged; however if you use the developer tools and inspect this element, you will find that the contents of the entire div has been replaced, including the original article tags</p>"

	document.getElementById("FindMe").innerHTML = someText;

}


function cngClass () {
	console.log("Changing Class");
	this.className = "";
	this.className = "alert alert-danger";

}


function cngSize () {
	console.log("Changing Font Size");

	this.style.fontSize = '2em';

}


// This is an exaple of an anonymous function being used to respond to an external event

document.getElementById("secondFind").onclick = function(){

		var someText = "This is an event handler that has been driven entirely by the JavaScript code.  There are no inline event listeners in the HTML"

		document.getElementById("secondFind").innerHTML = someText;

};


document.getElementById("W3C").addEventListener('click', cngClass, false);
document.getElementById("W3C").addEventListener("click", cngSize, false);