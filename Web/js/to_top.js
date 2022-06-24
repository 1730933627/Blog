var totop = function(){
	let smoothScrollToTopSetInterval = setInterval(
	() => {
		let Y_TopValve = (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop);
                if (Y_TopValve > 1) {
                    scrollTo(0, Math.floor(Y_TopValve * 0.85));
                } else {
                    scrollTo(0, 0);
                    clearInterval(smoothScrollToTopSetInterval);
                }
	}, 1000 / 60)
}
document.getElementById('to_top').onclick = totop;