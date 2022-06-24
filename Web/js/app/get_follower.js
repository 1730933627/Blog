var url = "https://api.yanlinn.com/bl-api?relation=22516494"
$.ajax({
    url: url,
    data: {},
    type: "post",
    dataType: "json",
    withCredentials: true ,
    async:false,
    success: function(data) {
        var datas = data["message"];
        var date = new Date();
        var date_list = [date.getFullYear(),date.getMonth(),date.getDate()];
        setTimeout(function(){
            document.getElementById("follower").innerText = datas[0];
            document.getElementById("year").innerText = date_list[0];
            document.getElementById("month").innerText = date_list[1]+1;
            document.getElementById("day").innerText = date_list[2];
            document.getElementById("sum_video").innerText = datas[1];
        },30)
    },
    error: function(){
        console.log("数据获取错误");
    }
});
