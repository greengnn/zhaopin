seajs.config({
  // 别名配置
  alias: {
    'zepto': 'lib/zepto.js',
    'gmu': 'lib/gmu.js',
    'validate': 'gallery/validate/validate.js'
  },
  // 调试模式
  debug: true,
  // Sea.js 的基础路径
  base: '/'
});

seajs.use(['zepto'], function(){
  $('.back__').on('click tap', function(e){
    e.preventDefault();
    window.history.back();
  });

  $('.home__').on('click tap', function(e){
    e.preventDefault();
    window.location.href = '/';
  });
});

// var rem = (function (doc, win) {
//   var docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function () {
//       var clientWidth = docEl.clientWidth;
//       if (!clientWidth) return;
//       docEl.style.fontSize = 10 * (clientWidth / 320) + 'px';
//     };

//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);