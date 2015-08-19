seajs.config({
  // 别名配置
  alias: {
    'zepto': 'lib/zepto.js',
    'gmu': 'lib/gmu'
  },
  // 调试模式
  debug: true,
  // Sea.js 的基础路径
  base: '/'
});


var rem = (function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 10 * (clientWidth / 320) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);