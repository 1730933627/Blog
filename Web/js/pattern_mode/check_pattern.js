if(document.cookie.search("pattern=1") != -1){
    document.getElementById('xin_click').style.opacity = 0;
    document.getElementById('xin_click').onclick = function(){
        document.cookie = "pattern=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=yanlinn.com";
        document.cookie = "pattern=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=www.yanlinn.com";
        document.getElementById('xin_click').style.opacity = 1;
        setTimeout(function(){location.reload();},1000);
    }
} else{
    document.getElementById('xin_click').onclick = function(){
        document.cookie="pattern=1;path=yanlinn.com";
        document.getElementById('xin_click').style.opacity = 0;
        setTimeout(function(){document.getElementById('xin_click').style.display = "none";location.reload();},1000);
    }
}