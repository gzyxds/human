import{b3 as t,b4 as e,b5 as r,b6 as n,b7 as o,b8 as a}from"./index-CTSv8bdf.js";import{c as i}from"./index.BEstvkTC.js";var s=Array.isArray;function u(r){if(!t(r))return!1;var n=e(r);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}var c,p=r["__core-js_shared__"],l=(c=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";var f=Function.prototype.toString;function h(t){if(null!=t){try{return f.call(t)}catch(e){}try{return t+""}catch(e){}}return""}var _=/^\[object .+?Constructor\]$/,d=Function.prototype,b=Object.prototype,y=d.toString,v=b.hasOwnProperty,g=RegExp("^"+y.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function j(e){return!(!t(e)||(r=e,l&&l in r))&&(u(e)?g:_).test(h(e));var r}function m(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return j(r)?r:void 0}var w=m(r,"WeakMap"),x=/^(?:0|[1-9]\d*)$/;function O(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&x.test(t))&&t>-1&&t%1==0&&t<e}function A(t,e){return t===e||t!=t&&e!=e}function z(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}var P=Object.prototype;function S(t){return n(t)&&"[object Arguments]"==e(t)}var E=Object.prototype,k=E.hasOwnProperty,F=E.propertyIsEnumerable,I=S(function(){return arguments}())?S:function(t){return n(t)&&k.call(t,"callee")&&!F.call(t,"callee")};var $="object"==typeof exports&&exports&&!exports.nodeType&&exports,B=$&&"object"==typeof module&&module&&!module.nodeType&&module,M=B&&B.exports===$?r.Buffer:void 0,T=(M?M.isBuffer:void 0)||function(){return!1},D={};D["[object Float32Array]"]=D["[object Float64Array]"]=D["[object Int8Array]"]=D["[object Int16Array]"]=D["[object Int32Array]"]=D["[object Uint8Array]"]=D["[object Uint8ClampedArray]"]=D["[object Uint16Array]"]=D["[object Uint32Array]"]=!0,D["[object Arguments]"]=D["[object Array]"]=D["[object ArrayBuffer]"]=D["[object Boolean]"]=D["[object DataView]"]=D["[object Date]"]=D["[object Error]"]=D["[object Function]"]=D["[object Map]"]=D["[object Number]"]=D["[object Object]"]=D["[object RegExp]"]=D["[object Set]"]=D["[object String]"]=D["[object WeakMap]"]=!1;var L,U="object"==typeof exports&&exports&&!exports.nodeType&&exports,R=U&&"object"==typeof module&&module&&!module.nodeType&&module,V=R&&R.exports===U&&o.process,W=function(){try{var t=R&&R.require&&R.require("util").types;return t||V&&V.binding&&V.binding("util")}catch(e){}}(),q=W&&W.isTypedArray,C=q?(L=q,function(t){return L(t)}):function(t){return n(t)&&z(t.length)&&!!D[e(t)]},N=Object.prototype.hasOwnProperty;function G(t,e){var r=s(t),n=!r&&I(t),o=!r&&!n&&T(t),a=!r&&!n&&!o&&C(t),i=r||n||o||a,u=i?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=u.length;for(var p in t)!N.call(t,p)||i&&("length"==p||o&&("offset"==p||"parent"==p)||a&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||O(p,c))||u.push(p);return u}var K=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),H=Object.prototype.hasOwnProperty;function J(t){if(r=(e=t)&&e.constructor,e!==("function"==typeof r&&r.prototype||P))return K(t);var e,r,n=[];for(var o in Object(t))H.call(t,o)&&"constructor"!=o&&n.push(o);return n}function Q(t){return null!=(e=t)&&z(e.length)&&!u(e)?G(t):J(t);var e}var X=m(Object,"create");var Y=Object.prototype.hasOwnProperty;var Z=Object.prototype.hasOwnProperty;function tt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t,e){for(var r=t.length;r--;)if(A(t[r][0],e))return r;return-1}tt.prototype.clear=function(){this.__data__=X?X(null):{},this.size=0},tt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},tt.prototype.get=function(t){var e=this.__data__;if(X){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Y.call(e,t)?e[t]:void 0},tt.prototype.has=function(t){var e=this.__data__;return X?void 0!==e[t]:Z.call(e,t)},tt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=X&&void 0===e?"__lodash_hash_undefined__":e,this};var rt=Array.prototype.splice;function nt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}nt.prototype.clear=function(){this.__data__=[],this.size=0},nt.prototype.delete=function(t){var e=this.__data__,r=et(e,t);return!(r<0)&&(r==e.length-1?e.pop():rt.call(e,r,1),--this.size,!0)},nt.prototype.get=function(t){var e=this.__data__,r=et(e,t);return r<0?void 0:e[r][1]},nt.prototype.has=function(t){return et(this.__data__,t)>-1},nt.prototype.set=function(t,e){var r=this.__data__,n=et(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var ot=m(r,"Map");function at(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function it(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}it.prototype.clear=function(){this.size=0,this.__data__={hash:new tt,map:new(ot||nt),string:new tt}},it.prototype.delete=function(t){var e=at(this,t).delete(t);return this.size-=e?1:0,e},it.prototype.get=function(t){return at(this,t).get(t)},it.prototype.has=function(t){return at(this,t).has(t)},it.prototype.set=function(t,e){var r=at(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function st(t){var e=this.__data__=new nt(t);this.size=e.size}st.prototype.clear=function(){this.__data__=new nt,this.size=0},st.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},st.prototype.get=function(t){return this.__data__.get(t)},st.prototype.has=function(t){return this.__data__.has(t)},st.prototype.set=function(t,e){var r=this.__data__;if(r instanceof nt){var n=r.__data__;if(!ot||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new it(n)}return r.set(t,e),this.size=r.size,this};var ut=Object.prototype.propertyIsEnumerable,ct=Object.getOwnPropertySymbols,pt=ct?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var i=t[r];e(i,r,t)&&(a[o++]=i)}return a}(ct(t),(function(e){return ut.call(t,e)})))}:function(){return[]};function lt(t){return function(t,e,r){var n=e(t);return s(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Q,pt)}var ft=m(r,"DataView"),ht=m(r,"Promise"),_t=m(r,"Set"),dt="[object Map]",bt="[object Promise]",yt="[object Set]",vt="[object WeakMap]",gt="[object DataView]",jt=h(ft),mt=h(ot),wt=h(ht),xt=h(_t),Ot=h(w),At=e;(ft&&At(new ft(new ArrayBuffer(1)))!=gt||ot&&At(new ot)!=dt||ht&&At(ht.resolve())!=bt||_t&&At(new _t)!=yt||w&&At(new w)!=vt)&&(At=function(t){var r=e(t),n="[object Object]"==r?t.constructor:void 0,o=n?h(n):"";if(o)switch(o){case jt:return gt;case mt:return dt;case wt:return bt;case xt:return yt;case Ot:return vt}return r});var zt=r.Uint8Array;function Pt(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new it;++e<r;)this.add(t[e])}function St(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}Pt.prototype.add=Pt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Pt.prototype.has=function(t){return this.__data__.has(t)};function Et(t,e,r,n,o,a){var i=1&r,s=t.length,u=e.length;if(s!=u&&!(i&&u>s))return!1;var c=a.get(t),p=a.get(e);if(c&&p)return c==e&&p==t;var l=-1,f=!0,h=2&r?new Pt:void 0;for(a.set(t,e),a.set(e,t);++l<s;){var _=t[l],d=e[l];if(n)var b=i?n(d,_,l,e,t,a):n(_,d,l,t,e,a);if(void 0!==b){if(b)continue;f=!1;break}if(h){if(!St(e,(function(t,e){if(i=e,!h.has(i)&&(_===t||o(_,t,r,n,a)))return h.push(e);var i}))){f=!1;break}}else if(_!==d&&!o(_,d,r,n,a)){f=!1;break}}return a.delete(t),a.delete(e),f}function kt(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function Ft(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var It=a?a.prototype:void 0,$t=It?It.valueOf:void 0;var Bt=Object.prototype.hasOwnProperty;var Mt="[object Arguments]",Tt="[object Array]",Dt="[object Object]",Lt=Object.prototype.hasOwnProperty;function Ut(t,e,r,n,o,a){var i=s(t),u=s(e),c=i?Tt:At(t),p=u?Tt:At(e),l=(c=c==Mt?Dt:c)==Dt,f=(p=p==Mt?Dt:p)==Dt,h=c==p;if(h&&T(t)){if(!T(e))return!1;i=!0,l=!1}if(h&&!l)return a||(a=new st),i||C(t)?Et(t,e,r,n,o,a):function(t,e,r,n,o,a,i){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new zt(t),new zt(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return A(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var s=kt;case"[object Set]":var u=1&n;if(s||(s=Ft),t.size!=e.size&&!u)return!1;var c=i.get(t);if(c)return c==e;n|=2,i.set(t,e);var p=Et(s(t),s(e),n,o,a,i);return i.delete(t),p;case"[object Symbol]":if($t)return $t.call(t)==$t.call(e)}return!1}(t,e,c,r,n,o,a);if(!(1&r)){var _=l&&Lt.call(t,"__wrapped__"),d=f&&Lt.call(e,"__wrapped__");if(_||d){var b=_?t.value():t,y=d?e.value():e;return a||(a=new st),o(b,y,r,n,a)}}return!!h&&(a||(a=new st),function(t,e,r,n,o,a){var i=1&r,s=lt(t),u=s.length;if(u!=lt(e).length&&!i)return!1;for(var c=u;c--;){var p=s[c];if(!(i?p in e:Bt.call(e,p)))return!1}var l=a.get(t),f=a.get(e);if(l&&f)return l==e&&f==t;var h=!0;a.set(t,e),a.set(e,t);for(var _=i;++c<u;){var d=t[p=s[c]],b=e[p];if(n)var y=i?n(b,d,p,e,t,a):n(d,b,p,t,e,a);if(!(void 0===y?d===b||o(d,b,r,n,a):y)){h=!1;break}_||(_="constructor"==p)}if(h&&!_){var v=t.constructor,g=e.constructor;v==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof v&&v instanceof v&&"function"==typeof g&&g instanceof g||(h=!1)}return a.delete(t),a.delete(e),h}(t,e,r,n,o,a))}function Rt(t,e,r,o,a){return t===e||(null==t||null==e||!n(t)&&!n(e)?t!=t&&e!=e:Ut(t,e,r,o,Rt,a))}function Vt(t,e){return Rt(t,e)}const Wt=i({routes:[{path:"/pages/home/index",aliasPath:"/"},{path:"/pages/demo/index"},{path:"/pages/create_profile/index"},{path:"/pages/create_sound/index"},{path:"/pages/digital_people/index"},{path:"/pages/login/bind"},{path:"/pages/login/index"},{path:"/pages/product/index"},{path:"/pages/user/index"},{path:"/pages/create_sound/components/SoundPop"},{path:"/pages/digital_people/components/SelectProfilePop"},{path:"/pages/digital_people/components/SelectTonePop"},{path:"/pages/product/components/ProductList"},{path:"/pages/user/components/KefuPop"},{path:"/pages/user/components/UserService"},{path:"/bundle/pages/agreement/index"},{path:"/bundle/pages/article/index"},{path:"/bundle/pages/article_detail/index"},{path:"/bundle/pages/hashrate/index"},{path:"/bundle/pages/hashrate_log/index"},{path:"/bundle/pages/user_set/index"},{path:"/bundle/pages/profile/index"},{path:"/bundle/pages/change_nickname/index"},{path:"/bundle/pages/change_mobile/index"},{path:"/bundle/pages/change_password/index"},{path:"/bundle/pages/play_video/index"},{path:"*",redirect:()=>({name:"404"})}],debug:!1,platform:"h5",h5:{}}),qt=(t,e)=>{let r=null;const n=t=>{r&&(clearInterval(r),r=null),null==t||t()};return Wt.beforeEach((()=>{n()})),{start:e=>{r&&n(),r=setInterval((async()=>{try{await t(n)}catch(e){throw n(),new Error(`轮询任务执行失败，错误信息：${e}`)}}),3e3),null==e||e()},clear:n}};export{Vt as i,qt as u};
