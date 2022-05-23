System.register("chunks:///_virtual/Click.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var c,n,r,e,i;return{setters:[function(t){c=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,e=t.debug,i=t.Component}],execute:function(){var o;n._RF.push({},"d11b0P3nXtPq78N46Ozh0k9","Click",void 0);var u=r.ccclass;r.property,t("Click",u("Click")(o=function(t){function n(){return t.apply(this,arguments)||this}c(n,t);var r=n.prototype;return r.start=function(){},r.clickCallback=function(t,c){e("ccc")},n}(i))||o);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Click.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});