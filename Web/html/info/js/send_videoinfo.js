var send_videoinfo = function(){
    document.getElementById('send_btm').onclick = function () {
        var name = document.getElementsByName("name")[0].value;
        var type = $("#type option:selected").val()
        var img = document.getElementsByName("img")[0].value;
        var url = document.getElementsByName("url")[0].value;
        var photo = document.getElementsByName("photo")[0].value;
        var photo_ps = document.getElementsByName("photo_ps")[0].value;
        var video = document.getElementsByName("video")[0].value;
        var video_ps = document.getElementsByName("video_ps")[0].value;

        var url = "https://api.yanlinn.com/send_videoinfo";
        if (name !== "") {
            const param = new URLSearchParams();
            param.append('name', name);
            param.append('type', type);
            param.append('img_url', img);
            param.append('video_url', url);
            param.append('bdy_photo', photo);
            param.append('photo_password', photo_ps);
            param.append('bdy_video', video);
            param.append('video_password', video_ps);
            axios.post(url, param)
                .then(function (response) {
                    console.log(response.data);
                    var err = response.data.err;
                    if (err == 0) {
                        console.log("Error")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log("Name_cannot_be_empty")
        }
    }
}