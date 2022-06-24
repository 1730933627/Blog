function getQueryString(name) {
    var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}
var iframe_url = getQueryString("url");
if(iframe_url==""){
    document.write('<div id="space"><h1 id="space_text">Null</h1></div>')
    document.getElementById("space_text").style.textAlign = "center"
    document.getElementById("space_text").style.padding = "175px 0"
    document.getElementById("space_text").style.fontSize = "75px"
    document.getElementById("space_text").style.userSelect = "none"
    document.getElementById("space_text").style.color = "#00BFFF"
    document.getElementById("space").style.width = "60%"
    document.getElementById("space").style.margin = "0 auto"
    document.getElementById("space").style.height = "500px"
    document.getElementById("space").style.backgroundColor = "aliceblue"
    document.getElementById("space").style.padding = "188px 50px 10px 50px"
    document.getElementById("space").style.opacity = "0.8"
    // window.location.href="../404"
}
else{
    var count = parseInt(iframe_url.split('.')[0])
    document.write(
        '<iframe src="article/' + iframe_url + '" id="iframe_text" name="iframe_text" frameborder="no" scrolling="no" onload="Javascript:SetCwinHeight(this)"></iframe>'
        // 
    );
    // document.getElementById("iframe_text").style.height = window.innerHeight + "px"
}
function SetCwinHeight(obj) {
    var cwin = obj;
    if (document.getElementById) {
        if (cwin && !window.opera) {
            if (cwin.contentDocument && cwin.contentDocument.body.offsetHeight)
                cwin.height = cwin.contentDocument.body.offsetHeight;
            else if (cwin.Document && cwin.Document.body.scrollHeight)
                cwin.height = cwin.Document.body.scrollHeight;
        }
    }
}