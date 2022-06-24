const url = 'https://api.yanlinn.com/getvideoinfo';
new Vue({
    el: "#center",
    data:{
        msgs_download:{},
        opacity:0
    },
    methods: {
        prePage() {
            if (this.$data.msgs_download.currentPage === 0)
                return;
            this.$data.msgs_download.dataShow = this.$data.msgs_download.totalPage[--this.$data.msgs_download.currentPage];
            totop()
        },
        nextPage() {
            if (this.$data.msgs_download.currentPage === this.$data.msgs_download.pageNum - 1)
                return;
            this.$data.msgs_download.dataShow = this.$data.msgs_download.totalPage[++this.$data.msgs_download.currentPage];
            totop()
        },
    },
    beforeMount() {
        if(document.cookie.search("pattern=1") != -1){
            pattern = 1;
        } else{
            pattern = 0;
        }
        const params = new URLSearchParams();
        params.append("password", "admin");
        axios.post(url,params).then((res) => {
            const temp = [];
            for(var i=0;i<res.data.data.length;i++){
                res.data.data[i].photo = "【图片】";
                if(res.data.data[i].bdy_video != null){
                    if(res.data.data[i].img_url==null){
                        res.data.data[i].img_url = "../img/封面/cb.jpg"
                    }
                    else{
                        if(res.data.data[i].img_url[0]=="/"){
                            res.data.data[i].img_url = "https:" + res.data.data[i].img_url
                        }
                        if(res.data.data[i].photo_password==null){
                            res.data.data[i].photo_password = "没有分享链接"
                        }
                        if(res.data.data[i].video_password==null){
                            res.data.data[i].video_password = "Null"
                        }
                        if(res.data.data[i].photo_password.substring(0,3)=="解压码" || res.data.data[i].photo_password=="没有分享链接"){
                            res.data.data[i].photo = "【无】";
                        }
                        if(res.data.data[i].video_url.substring(8,22)=="ecchi.iwara.tv" && res.data.data[i].bdy_photo == null){
                            res.data.data[i].photo_password = "解压码:yanlin";
                        }
                    }
                    if(pattern == 1){
                        temp.push(res.data.data[i])
                    }else{
                        if(res.data.data[i].pattern==0){
                            temp.push(res.data.data[i])
                        }
                    }
                }
            }
            function data_info() {
                data_info = {
                    data: temp,
                    totalPage: [],
                    pageSize: 24,
                    pageNum: 1,
                    dataShow: [],
                    currentPage: 0
                };
                data_info.pageNum = Math.ceil(temp.length / data_info.pageSize) || 1;
                for (let i = 0; i < data_info.pageNum; i++) {
                    data_info.totalPage[i] = data_info.data.slice(data_info.pageSize * i, data_info.pageSize * (i + 1));
                }
                data_info.dataShow = data_info.totalPage[data_info.currentPage];
                //分更新热度
                // data_info.dataShow[1] = [];data_info.dataShow[2] = [];
                // for(let s=0;s<3;s++){
                //     data_info.dataShow[1].push(data_info.dataShow[0][s]);
                // }
                // for(let s=3;s<data_info.dataShow[0].length;i++){

                //     data_info.dataShow[2].push(data_info.dataShow[0][s]);
                // }
                return data_info;
            }
            this.msgs_download = data_info();
        }).catch(function(err) {
            console.log(err);
        })
    },
    mounted(){
        this.$nextTick(() => {
            setTimeout(()=>{
                this.opacity = 1;
            }, 500);
            copy(1000);
        })
    }
})