let url = 'https://api.yanlinn.com/getvideoinfo';
new Vue({
    el: "#new_topics_p",
    data: {
        msgs_topics:[],
    },
    methods: {},
    mounted() {
        if(document.cookie.search("pattern=1") != -1){
            pattern = 1;
        } else{
            pattern = 0;
        }
        const params = new URLSearchParams();
        params.append("password", "admin");
        axios.post(url,params).then((res) => {
            var topics = [];
            var count = 0;
            for(var i=0;i<res.data.data.length;i++){
                if(res.data.data[i].video_url==null){
                    res.data.data[i].video_url = "/404";
                }
                if(pattern==1){
                    topics.push(res.data.data[i])
                    count += 1;
                }else{
                    if(res.data.data[i].pattern==0){
                        topics.push(res.data.data[i])
                        count += 1;
                    }
                }
                if(count==3)break;
            }
            this.msgs_topics = topics;
        }).catch(function(err) {
            console.log(err);
        })
    }
})