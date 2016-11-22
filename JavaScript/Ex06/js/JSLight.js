// JavaScript file to demonstrate an implementation of a lightbox.  There are many more 
// ways to achieve this functionality.

console.log('Running up JS');

window.onload = init;
var currentThumb = null; // this is a global variable used to hold the current active image.

function init () {
	console.log('Running Init');

	// need to find the current location of the site; this can be found by location.path
	// but it contains the name of the filename the script is running in, so we need to trim 
	// that off to give us the path that we are looking for.

	var siteLocation = location.href;
	// changed from location.pathname;
	// This had to be changed as it caused problems for Firefox.  Firefox expects to see an absolute
	// path provided.  Changing from pathname to href caused other problems that then had 
	// to be dealt with in the showAsLarge function.

	siteLocation = siteLocation.substring(0, (siteLocation.lastIndexOf('/') + 1));

	console.log('Site Location: ' + siteLocation);

	document.getElementById('a1').style.backgroundImage = "url(" + siteLocation + 'img/gogh.bandaged-ear.jpg)';	
	document.getElementById('a2').style.backgroundImage = "url(" + siteLocation + 'img/gogh.room-arles.jpg)';	
	document.getElementById('a3').style.backgroundImage = "url(" + siteLocation + 'img/parliament.jpg)';	
	document.getElementById('a4').style.backgroundImage = "url(" + siteLocation + 'img/mother.jpg)';	
	
	addEvent(document.getElementById('a1'), 'click', showAsLarge);
	addEvent(document.getElementById('a2'), 'click', showAsLarge);
	addEvent(document.getElementById('a3'), 'click', showAsLarge);
	addEvent(document.getElementById('a4'), 'click', showAsLarge);

	addEvent(document.getElementById('a1'), 'mouseover', showBorder);
	addEvent(document.getElementById('a2'), 'mouseover', showBorder);
	addEvent(document.getElementById('a3'), 'mouseover', showBorder);
	addEvent(document.getElementById('a4'), 'mouseover', showBorder);

	addEvent(document.getElementById('a1'), 'mouseout', hideBorder);
	addEvent(document.getElementById('a2'), 'mouseout', hideBorder);
	addEvent(document.getElementById('a3'), 'mouseout', hideBorder);
	addEvent(document.getElementById('a4'), 'mouseout', hideBorder);

	reflectCode();

}

function showAsLarge () {

	if(currentThumb === null){
		currentThumb = this;		
		this.className = 'activeThumb';
		currentThumb.className = 'activeThumb';
		console.log('currentThumb not Set');
	} else {
		currentThumb.className = 'normalThumb';
		this.className = 'activeThumb';
		console.log('currentThumb is Set');
		currentThumb = this;
	}

	var thumbSRC = this.style.backgroundImage.toString();
	thumbSRC = thumbSRC.trim();

	// The change from pathname to href causd a few issues that needed to be dealt with.
	// There are inconsistancies with how the browsers pick up the string from above.  Chrome
	// just returns the string, but the others return the string including quotation marks.
	// Also when setting the image source, most browsers are appending the data.  This means
	// that the string thumbSRC needs to be cleaned up before sending it as the large image
	// source.  The line that was replaced is below

	// var imgLocation = thumbSRC.substring(4, (thumbSRC.length-1));

	// the new functionality is implemented by a new function to determine the length of 
	// a string that represents the length of the URL.  this is then used to determine the
	// position of the last instance of '/', starting from the URL length.  This then used to 
	// substring the thumbSRC to just the portion that contains the image directory and the 
	// image name.  The resulting string still contains the double quote symbol in some 
	// browsers.   This is pulled out by using the replace method below.  The final 
	// string is then used to as the source for the main image as before.  This has been tested
	// in the latest editions of the big 5 browsers and (so far) works.



	var position = thumbSRC.indexOf('/', getLengthURL());

	var imgLocation = thumbSRC.substring((position + 1), (thumbSRC.length-1));



	imgLocation = imgLocation.replace("\"", "");
	
	//console.log(thumbSRC);
	//console.log(imgLocation);
	document.getElementById('mainImage').src = imgLocation;
}

function showBorder () {
// we need to check the current condition before changing the border
// if the border is not currently 'active', then we can change, otherwise,
// leave it alone
	if(this.className != 'activeThumb'){
		this.className = 'highlightThumb';
	}	
}


function hideBorder () {
// before hiding the border, we want to make sure that it is not the current
// selection
	if (this.className != 'activeThumb'){
		this.className = 'normalThumb';		
	}
}


function addEvent (obj, listener, handler) {
  if (obj){
    if (obj.addEventListener){
      obj.addEventListener(listener, handler, false);
    }
    else if (obj.attachEvent){
      obj.attachEvent("on" + listener, handler);
    }
  }
  else {
    console.error("Element " + obj + " not found"); 
  }
}


function getLengthURL () {
	var length
	// there is no easy way to determine the length of the URL string, so we have to 
	// build it up from its component parts.

	siteURL = location.protocol +'//'+ location.host + location.pathname.substring(0, location.pathname.lastIndexOf('/') +1 )
	//console.log('Constructed Site URL: ' + siteURL);

	return siteURL.length
}

function reflectCode(){
	$.get('js/JSLight.js', function(data) {
	   $('#codeExample').text(data);
	}, 'text');
}