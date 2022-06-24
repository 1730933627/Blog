<?php 
	header('Content-type:text/html; charset=utf-8');
	session_start();
	$_SESSION['uid'] = session_id();
	$_SESSION["admin"] = null;
	$password = md5($_POST["password"]);
	$username = $_POST["username"];

	$conn = new mysqli("47.101.187.89", "myblog", "C2NTRxspBtbXkD4p", "myblog");
	if ($conn->connect_error) {
		die("数据库连接失败:".$conn->connect_error);
	}
	$sql = "SELECT username, password FROM accounts where username = '$username'";
	$result = $conn->query($sql);
	$row = $result->fetch_assoc();
	if ($row != 0){
		$name = $row["username"];
		$pass = $row["password"];
	}else{
		$name = 0;
		$pass = 0;
	}
	$conn->close();
	
	if ($password==md5($pass) && $username==$name) {
		$_SESSION["admin"] = true;
		header("Location: index.php"); 
	} else {
		die("用户名密码错误");
	}
 ?>