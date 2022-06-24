window.onload = function() {
    var url = 'https://api.yanlinn.com/getdynamic';
    new Vue({
        el: "#history-list",
        data: {
            msgs:[]
        },
        methods: {},
        beforeMount(){
			const params = new URLSearchParams();
			params.append("password", "admin");
            axios.post(url,params).then((res) => {
                const year = {}
                for(let v of res.data.data){
                    if(year[v.year]===undefined){
                        year[v.year] = [];
                    }
                    year[v.year].push(v);
                }
                this.msgs = year;
            }).catch(function(err) {
                console.log(err)
            })
        },
        computed:{
            msgs_sort(){
                return Object.entries(this.msgs).reverse();
            }
        }
    })
}