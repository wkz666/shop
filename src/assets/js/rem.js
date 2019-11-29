/**
* @file:      rem.js
* @author:    wkz
* @update:    2019.11.28
*/
/**
*  rem.js 解决的问题
*  移动端适配rem
*/
(function(win) {
    //获取文档对象
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    //将屏幕按设计图进行划分
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 6.4; // 将屏幕宽度分成6.4份， 1份为1rem
        docEl.style.fontSize = rem + 'px';
    }

    //进行屏幕变化的时候，改变rem的值
    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();

})(window);
