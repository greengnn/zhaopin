define(function(require, exports, module) {
  require('zepto');
  require('gmu');
  module.exports =  function(el, opt){
    return new gmu.Slider(el, opt);
  };
});