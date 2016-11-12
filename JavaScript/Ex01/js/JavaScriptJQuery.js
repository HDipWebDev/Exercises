function cngClass() {
	console.log("Changing Class");
	this.className = "";
	this.className = "alert alert-danger";
}


function cngSize() {
	console.log("Changing Font Size");

	this.style.fontSize = '2em';
}

$("#W3C").click(cngClass);
$("#W3C").click(cngSize);