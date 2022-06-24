new Vue({
    el:"#contact-body",
    data:{
        userInfo:{
            type:"通讯",
            name:"",
            email:"",
            text:"",
            agree:false
        },
        sendtext:"发送中···",
        button_style:"cursor:not-allowed;"
    },
    methods: {
        button(){
            $('#modal-container').removeAttr('class').addClass("five");
            $('body').addClass('modal-active');
            if(this.userInfo.name!=="" && this.userInfo.email!==""){
                let url = "https://api.yanlinn.com/insert";
                const param = new URLSearchParams();
                param.append('name', this.userInfo.name);
                param.append('types', this.userInfo.type);
                param.append('email', this.userInfo.email);
                param.append('texts', this.userInfo.text);
                axios.post(url,param).then(response=>{
                    this.sendtext = "发送成功";
                    this.userInfo = {type:"通讯",name:"",email:"",text:"",agree:false};
                }).catch(error=>{
                    this.sendtext = "发送失败请联系管理员";
                    console.warn(error);
                });
            }
            else{
                this.sendtext = "请输入称呼和邮箱";
            }
        },
        container(){
            $("#modal-container").addClass('out');
            $('body').removeClass('modal-active');
            setTimeout(()=>{
                this.sendtext = "发送中···"
            },300)
            this.userInfo.agree = false;
        }
    },
    watch:{
        "userInfo.agree":{
            immediate:true,
            handler(newvalue){
                if(newvalue)this.button_style="cursor:pointer";
                else this.button_style="cursor:not-allowed;";
            }
        }
    }
})