function formatInfo () {
	var bName = navigator.appName;
	var bCodeName = navigator.appCodeName;
	var bVersion = navigator.appVersion;
	var bPlatform = navigator.platform;

	var output = "<h3>Browser Information</h3>";

    output += "<p>Your Browser is " + bName + "<br>";
	output += "Your Browser Code Name is " + bCodeName + "<br>";
	output += "Your Browser Version is " + bVersion + "<br>";
	output += "Your Operating System is " + bPlatform + "</p>";
	
	console.log(output);

	return output;
}


function formatPlugIns () {
	var bPlugins = navigator.plugins;

	var output = "<h3>Browser Plug-Ins are:</h3>";
    
    if(bPlugins.length > 0){
		for (var i = 0; i < bPlugins.length; i++){
			output += (i+1) +".  " + bPlugins[i].name + "<br>";
		}

	output += "</p>";
	} else {

		output += "<p>No plugins detected</p>"
	}
	
	console.log(output);

	return output;
}


document.getElementById("binfo").innerHTML = formatInfo();
document.getElementById("bplugins").innerHTML = formatPlugIns();