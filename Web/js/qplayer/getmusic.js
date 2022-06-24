function songlist(){
    if(document.cookie.search("music_status=1") != -1){
        var url = "https://api.yanlinn.com/music"
    } else{
        var url = "https://api.yanlinn.com/music?status=0"
        document.cookie="music_status=1;path=yanlinn.com";
    }
    var playlist = [];
    var count = 0;
    function get(){
        $.ajax({
            url: url,
            data: {},
            type: "GET",
            dataType: "json",
            withCredentials: true ,
            async:false,
            timeout:3000,
            success(data) {
                return data;
            },
            error(){
                if(count++<3){
                    setTimeout(()=>{
                        get();
                    },3000);
                }else{
                    return [];
                }
            }
        }).then(value=>{
            playlist = value;
        })
        return playlist
    }
    return get()
}