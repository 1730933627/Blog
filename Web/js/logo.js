try{
	const p = new Promise((resolve,reject)=>{
		const xhr = new XMLHttpRequest();
		xhr.open("GET","https://api.yanlinn.com/face");
		xhr.send();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status >= 200 & xhr.status <= 300){
					resolve(xhr.response);
				}else{
					reject(xhr.status);
				}
			}
		}
	});
	p.then(value=>{
		console.log(`%c${value}`,"color:#696969;");
		console.info("%c没事多打飞机,别搞我网站。","font-size: 20px;color: #00BFFF;");
	},reason=>{
		console.log(reason);
	})
}catch(e){
    console.log("");
}