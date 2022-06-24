var open_menu = function (type) {
	if (type == "h") {
		var top_newsmS = false;
		document.getElementById('top_newsm_click').onclick = function () {
			if (top_newsmS == false) {
				document.getElementById('top_newsm').style.transform = 'translate(0px,0px)';
				top_newsmS = true;
			}
			else {
				document.getElementById('top_newsm').style.transform = 'translate(-100%,0px)';
				top_newsmS = false;
			}
		}
		var top_newsmA = false;
		document.getElementById('open_menu').onclick = function () {
			if (top_newsmA == false) {
				document.getElementById('menu_list').style.transform = "translate(0,0)";
				top_newsmA = true;
			} else {
				document.getElementById('menu_list').style.transform = "translate(-100%,0)";
				top_newsmA = false;
			}
		}
	}
	else if (type == "n") {
		var top_newsmA = false;
		document.getElementById('open_menu').onclick = function () {
			if (top_newsmA == false) {
				document.getElementById('menu_list').style.transform = "translate(0,0)";
				top_newsmA = true;
			} else {
				document.getElementById('menu_list').style.transform = "translate(100%,0)";
				top_newsmA = false;
			}
		}
	}
	else if (type == "d") {
		var top_newsmA = false;
		document.getElementById('open_menu').onclick = function () {
			if (top_newsmA == false) {
				document.getElementById('menu_list').style.transform = "translate(0,0)";
				top_newsmA = true;
			} else {
				document.getElementById('menu_list').style.transform = "translate(0,-135%)";
				top_newsmA = false;
			}
		}
	}
	else if (type == "c") {
		var top_newsmA = false;
		document.getElementById('open_menu').onclick = function () {
			if (top_newsmA == false) {
				document.getElementById('menu_list').style.transform = "translate(0,0)";
				top_newsmA = true;
			} else {
				document.getElementById('menu_list').style.transform = "translate(0,-135%)";
				top_newsmA = false;
			}
		}
	}
	else if (type == "b") {
		var top_newsmA = false;
		document.getElementById('open_menu').onclick = function () {
			if (top_newsmA == false) {
				document.getElementById('menu_list').style.transform = "translate(0,0)";
				top_newsmA = true;
			} else {
				document.getElementById('menu_list').style.transform = "translate(100%,0px)";
				top_newsmA = false;
			}
		}
	}
	else if (type == "a") {
		var top_newsmA = false;
		document.getElementById('open_menu').onclick = function () {
			if (top_newsmA == false) {
				document.getElementById('menu_list').style.transform = "translate(0,0)";
				top_newsmA = true;
			} else {
				document.getElementById('menu_list').style.transform = "translate(0,-135%)";
				top_newsmA = false;
			}
		}
	}
	else if (type == "4") {
		var top_newsmA = false;
		document.getElementById('open_menu').onclick = function () {
			if (top_newsmA == false) {
				document.getElementById('menu_list').style.transform = "translate(0,0)";
				top_newsmA = true;
			} else {
				document.getElementById('menu_list').style.transform = "translate(0,100%)";
				top_newsmA = false;
			}
		}
	}
}