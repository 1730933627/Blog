<!-- <?php
  $_SESSION["admin"] = null;
  session_start();
  if (isset($_SESSION["admin"]) && $_SESSION["admin"] == true) {
  } else {
      die("你无权访问");
  }
?> -->
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
    	<link rel="icon" href="../../img/logo/favicon.ico">
		<title>数据展示</title>
		<script src="../../js/vue.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/index.js" type="text/javascript" charset="utf-8"></script>
		<script src="../../js/axios.min.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="css/data.css"/>
		<script src="../../js/jquery.min.js"></script>
	</head>
	<body>
		<div id="main">
			<div class="data" id="send_videoinfo">
				<form class="input_info" autocomplete="off">
					<div id="title">Name:</div>
						<input type="text" name="name"><br>
					<div id="title">Type:</div>
						<select class="select" id="type">
							<option class="option" value ="Video">Video</option>
							<option class="option" value ="Program">Program</option>
							<option class="option" value="Clothes">Clothes</option>
						</select><br>
					<div id="title">Img:</div>
						<input type="text" name="img"><br>
					<div id="title">Url:</div>
						<input type="text" name="url"><br>
					<div id="title">Photo:</div>
						<input type="text" name="photo"><br>
					<div id="title">Pps:</div>
						<input type="text" name="photo_ps"><br>
					<div id="title">Video:</div>
						<input type="text" name="video"><br>
					<div id="title">Vps:</div>
						<input type="text" name="video_ps"><br>
					<div class="buttom_box"><button type="button" id="send_btm">Submit</button></div>
					<script src="js/send_videoinfo.js"></script>
				</form>
		    </div>
		    <div class="data" id="music_api">
		        <h2>音乐API</h2>
    		    <ul>
    		        <a href="http://music.yanlinn.com/login/status" target="_blank"><li>检查</li></a>
    		        <a href="http://music.yanlinn.com/login/refresh" target="_blank"><li>刷新</li></a>
    		        <a href="http://music.yanlinn.com/login/cellphone?phone=15097296167&password=wh20010210" target="_blank"><li>登录</li></a>
    		        <a href="http://music.yanlinn.com/logout" target="_blank"><li>退出</li></a>
    		    </ul>
		    </div>
			<div v-for="item in msgs" class="data">
				<div id="title">id：</div>
				<div id="word"><p>{{item.id}}</p></div><br>
				<div id="title">类型：</div>
				<div id="word"><p>{{item.types}}</p></div><br>
				<div id="title">名称：</div>
				<div id="word"><p>{{item.name}}</p></div><br>
				<div id="title">邮箱：</div>
				<div id="word"><p>{{item.email}}</p></div><br>
				<div id="title">文本：</div>
				<div id="word"><p>{{item.texts}}</p></div><br>
				<div id="title">时间：</div>
				<div id="word"><p>{{item.time}}</p></div><br>
			</div>
		</div>
		<div class="exit">
			<a href="clear.php">
				<img src="../../img/info/exit.png" />
			</a>
		</div>
	</body>
</html>