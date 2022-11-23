function setRem() {
    var clientWidht = document.clientWidht || document.body.clientWidth;
    // 如果设备宽度大于600  等于600
    clientWidht = clientWidht > 1920 ? 1920 : clientWidht;
    clientWidht = clientWidht < 1024 ? 1024 : clientWidht;
    var rem = clientWidht / 24;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = rem + 'px';

}

var timer = null;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 300);
};


// 当页面加载的时候  也要调用一下setRem 目的  默认 把html 根节点的字体大小 设置为10px

window.onload = setRem;
window.onresize = setRem;