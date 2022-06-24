window.onload = function() {
    var url = 'https://api.yanlinn.com/requests';
    var vm = new Vue({
        el: "#main",
        data: {
            msgs: ''
        },
        methods: {},
        mounted: function() {
			const params = new URLSearchParams();
			params.append("password", "admin");
            axios.post(url,params)
                .then((res) => {
					this.msgs = res.data.data;
				}).catch(function(err) {
                    console.log(err)
                })
        }
    })
    send_videoinfo()
}