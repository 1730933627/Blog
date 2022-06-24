if(document.cookie.search("pattern=1") != -1){
    var pattern = 1;
    } else{
    var pattern = 0;
    }
function title(){
    if (pattern) {
        document.write(`
            <span id=Links>
                <li class="list">
                    <div class="dropdown">
                        <span>Links</span>
                        <div class="dropdown-content">
                            <a href="https://space.bilibili.com/22516494" target="_blank">BiliBili</a>
                            <a href="https://ecchi.iwara.tv/users/yanlin-0" target="_blank">Iwara</a>
                        </div>
                    </div>
                </li>
            </span>
        `);
    } else {
        document.write('<a href="https://space.bilibili.com/22516494" target="_blank"><li class="list">BiliBili</li></a>');
    }
}
function sidebar(){
    if (pattern) {
        document.write(`
            <div class="f-item"><a href="https://www.patreon.com/YanLinn" target="_blank"><img src="../img/logo/PT.png"/></a></div>
            <div class="f-item"><a href="https://azz.net/yanlin" target="_blank"><img src="../img/logo/AZZ.png"/></a></div>
            <div class="f-item"><a href="https://afdian.net/@Yan-Linn" target="_blank"><img src="../img/logo/AFD.png"/></a></div>
        `);
    } else {
        document.write(`
            <div class="f-item"><a href="https://www.aplaybox.com/u/178812252" target="_blank"><img src="../img/logo/MZW.png"/></a></div>
        `);
    }
}