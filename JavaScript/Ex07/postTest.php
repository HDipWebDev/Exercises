<?php

echo "<h1>php POST Test</h1>";

echo "Entered Username is: <br>";
getUsername();
echo "<br>"; 
echo "Entered Password is: <br>";
getPassword(); 

echo "<p>Note the URL only shows postTest.php</p>";

echo "<h2>HTML Header</h2>";

foreach (getallheaders() as $name => $value) {
    echo "$name: $value <br>" ;
}

echo "<h2>Now the 'hidden information'</h2>";

$post = file_get_contents('php://input');

echo $post;

function getUsername(){
	$errors = array();
	if(isset($_POST["username"])){
	
		$uname = trim(htmlentities($_POST['username']));
	
		if(empty($uname)){
			$errors[0] = "Please input a username <br>";
			echo $errors[0];
		} 

		if(!$errors){
			$username = $uname;
			
		} else {
			$username = "";
			$errors[1] = "There has been an error! <br>";
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
	if(isset($_POST["pword"])){

		$passw = trim(htmlentities($_POST['pword']));

		if(empty($passw)){
			$errors[0] = "Please input a password <br>";
			echo $errors[0];
		}

		if(!$errors){

			$password = $passw;
				
		} else {
			$errors[1] = "There has been an error! <br>";
			echo $errors[1];
			$password = "";

		}

	} else {
		$password = "";
	}
	echo $password;
	return $password;
}

?>