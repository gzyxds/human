"use strict";const e=require("../../../common/vendor.js");if(!Array){e.resolveComponent("layout-default-uni")()}Math||n();const n=()=>"./components/HashrateLogList.js",t=e.defineComponent({__name:"index",setup(n){const t=e.ref(""),r=[{name:"全部",type:""},{name:"消耗",type:2},{name:"获得",type:1}];return(n,p)=>({a:e.f(r,((n,r,p)=>({a:e.t(n.name),b:e.n({"text-foreground_a_70":e.unref(t)!==n.type}),c:e.n({"bg-primary":e.unref(t)===n.type}),d:n.type,e:e.o((e=>t.value=n.type),n.type)}))),b:!e.unref(t),c:e.p({type:e.unref(t)}),d:1===Number(e.unref(t)),e:e.p({type:e.unref(t)}),f:2===Number(e.unref(t)),g:e.p({type:e.unref(t)})})}});wx.createPage(t);
