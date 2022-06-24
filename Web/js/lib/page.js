var left = document.getElementById("left");
left.onclick = function () {
    if (count != 1) count -= 1;
    document.getElementById("iframe_text").src = "article/" + count + ".html"
}
var right = document.getElementById("right");
right.onclick = function () {
    count += 1;
    document.getElementById("iframe_text").src = "article/" + count + ".html"
}