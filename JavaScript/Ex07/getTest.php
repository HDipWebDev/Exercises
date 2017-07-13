<?php 

echo "<h1>php GET Test</h1>";

echo "Entered Username is: <br>";
getUsername();
echo "<br>"; 
echo "Entered Password is: <br>";
getPassword(); 

echo "<p>Note that the username and password are on visible on the URL.</p>";

echo "<h2>HTML Header</h2>";

foreach (getallheaders() as $name => $value) {
    echo "$name: $value <br>";
}



function getUsername(){
	$errors = array();
	if(isset($_GET["getuname"])){
	
		$uname = trim(htmlentities($_GET['getuname']));
	
		if(empty($uname)){
			$errors[] = "Please input a username <br>";
			echo $errors[0];
		}
	
		if(!$errors){
	
			$username = $uname;
				
		} else {
			$errors[] = "There has been an error! <br>";
			$username = "";
			echo $errors[1];
	
		}
	
	} else {
		$username = "";
	}
	echo $username;
	return $username;
}
	
function getPassword(){
	$errors = array();
	if(isset($_GET["getpword"])){

		$passw = trim(htmlentities($_GET['getpword']));

		if(empty($passw)){
			$errors[0] = "Please input a password <br>";
			echo $errors[0];
		}

		if(!$errors){

			$password = $passw;
				
		} else {
			$errors[1] = "There has been an error! <br>";
			$password = "";
			echo $errors[1];
		}

	} else {
		$password = "";
	}
	echo $password;
	return $password;
}


?>