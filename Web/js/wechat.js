var open_vx = function(type){
    var wxopen = false;
    var wximg = document.getElementById("wxbody")
    
    if(type=="h"){
        document.write('<link rel="stylesheet" href="css/wx.css">');
        document.getElementById('wx').onclick = function () {
            if (wxopen == false) {
                wximg.style.animation = "hl_in 0.5s ease-in-out"
                wximg.style.display = "block"
                wxopen = true;
            } else {
                wximg.style.animation = "hl_out 0.5s ease-in-out"
                setTimeout(function () {
                    wximg.style.display = "none"
                }, 475)
                wxopen = false;
            }
        }
    }
    if(type=="a"){
        document.write('<link rel="stylesheet" href="../css/wx.css">');
        document.getElementById('wx').onclick = function () {
            if (wxopen == false) {
                wximg.style.animation = "l_in 0.5s ease-in-out"
                wximg.style.display = "block"
                wxopen = true;
            } else {
                wximg.style.animation = "l_out 0.5s ease-in-out"
                setTimeout(function () {
                    wximg.style.display = "none"
                }, 475)
                wxopen = false;
            }
        }
    }
    if(type=="n"){
        document.write('<link rel="stylesheet" href="../css/wx.css">');
        document.getElementById('wx').onclick = function () {
            if (wxopen == false) {
                wximg.style.animation = "l_in 0.5s ease-in-out"
                wximg.style.display = "block"
                wxopen = true;
            } else {
                wximg.style.animation = "l_out 0.5s ease-in-out"
                setTimeout(function () {
                    wximg.style.display = "none"
                }, 475)
                wxopen = false;
            }
        }
    }
}