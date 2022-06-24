var copy = function(time){
    setTimeout(function () {
        $(function(){
            $("p").click(function(){
                var text = $($(this).html())["selector"];
                var input = document.getElementById("input");
                if(text != "没有分享链接"){
                    input.value = text.slice(4);
                    input.select();
                    document.execCommand("Copy");
                    if($('.spop-body').length<8){
                        spop({
                        template:'复制完成',//名称
                        position:'bottom-left',//位置
                        // group:'submit-satus',//点击消失
                        style:'success',//样式表
                        autoclose: 2500,//延时
                    });
                    }
                }else{
                    if($('.spop-body').length<8){
                        spop({
                        template:'复制无效',//名称
                        position:'bottom-left',//位置
                        style:'error',//样式表
                        autoclose: 2500,//延时
                    });
                    }
                }
            });
        });
    },time);    
}
