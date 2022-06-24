document.getElementById('open_qq').onclick = function(){
    //var qq = "971348494"
    var qq = "1730933627"
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i))) {
        window.location.href = "mqqwpa://im/chat?chat_type=wpa&uin="+ qq +"&version=1&src_type=web&web_src=oicqzone.com";
    }
    else {
        window.location.href = "tencent://message/?uin="+ qq;
    }
}

        