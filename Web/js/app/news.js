const url = 'https://api.yanlinn.com/getvideoinfo';
new Vue({
    el: "#news-list",
    data:{
        msgs_news:{},
        msgs_news_sort:{}
    },
    methods: {
        sortAll() {
            this.msgs_news.dataShow = this.msgs_news.data;
        },
        sortVideo() {
            const temp = [];
            for(let i=0;i<this.msgs_news.data.length;i++){
                if(this.msgs_news.data[i].type=="Video"){
                    temp.push(this.msgs_news.data[i])
                }
                this.msgs_news.dataShow = temp;
            }
        },
        sortProgram() {
            const temp = [];
            for(let i=0;i<this.msgs_news.data.length;i++){
                if(this.msgs_news.data[i].type=="Program"){
                    temp.push(this.msgs_news.data[i])
                }
                this.msgs_news.dataShow = temp;
            }
        },
        sortclotes() {
            const temp = [];
            for(let i=0;i<this.msgs_news.data.length;i++){
                if(this.msgs_news.data[i].type=="Clothes"){
                    temp.push(this.msgs_news.data[i])
                }
                this.msgs_news.dataShow = temp;
            }
        },
        prePage() {
            if (this.$data.msgs_news.currentPage === 0)
                return;
            this.$data.msgs_news.dataShow = this.$data.msgs_news.totalPage[--this.$data.msgs_news.currentPage];
            totop();
        },
        nextPage() {
            if (this.$data.msgs_news.currentPage === this.$data.msgs_news.pageNum - 1)
                return;
            this.$data.msgs_news.dataShow = this.$data.msgs_news.totalPage[++this.$data.msgs_news.currentPage];
            totop();
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
        axios.post(url, params).then((res) => {
            const temp = [];
            for (let o = 0; o < res.data.data.length; o++) {
                if (res.data.data[o].img_url == null) {
                    res.data.data[o].img_url = "../img/封面/cb.jpg"
                }
                else {
                    if (res.data.data[o].img_url[0] == "/") {
                        res.data.data[o].img_url = "https:" + res.data.data[o].img_url
                    }
                }
                if (res.data.data[o].type == null) {
                    res.data.data[o].type = "Video"
                }
                if (res.data.data[o].video_url == null) {
                    res.data.data[o].video_url = "/404"
                }
                if (pattern == 1){
                    temp.push(res.data.data[o])
                }else{
                    if (res.data.data[o].pattern==0){
                        temp.push(res.data.data[o])
                    }
                }
            }
            function data_info(){
                data_info = {
                    data: temp,
                    totalPage: [],
                    pageSize: 30,
                    pageNum: 1,
                    dataShow: [],
                    currentPage: 0
                };
                data_info.pageNum = Math.ceil(temp.length / data_info.pageSize) || 1;
                for (let i = 0; i < data_info.pageNum; i++) {
                    data_info.totalPage[i] = data_info.data.slice(data_info.pageSize * i, data_info.pageSize * (i + 1));
                }
                data_info.dataShow = data_info.totalPage[data_info.currentPage];
                
                return data_info;
            }
            this.msgs_news = data_info();

        }).catch(function (err) {
            console.log(err)
        })
    },
    mounted: function(){
        this.$nextTick(() => {
            setTimeout(function() {
                document.getElementById("pre").style.opacity = 1;
                document.getElementById("next").style.opacity = 1;
            }, 1000);
        })
    }
})