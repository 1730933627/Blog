var imgs =[
    "../img/article/background/1.jpg",
    "../img/article/background/2.jpg",
    "../img/article/background/3.jpg",
    "../img/article/background/4.jpg",
    "../img/article/background/5.jpg",
    "../img/article/background/6.jpg",
];
var index=Math.floor(Math.random()*imgs.length);
var img = imgs[index];
function load_background(){
    document.body.style.backgroundImage="url("+img+")";
    // document.body.style.backgroundImage="url(../img/article/background/6.jpg)";
}  
document.body.onload = function(){
    load_background();
}