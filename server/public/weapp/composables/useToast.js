"use strict";const o=require("../common/vendor.js");exports.useToast=function(n,i){"string"!=typeof n&&(n=String(n));const e=(n,i,e)=>{o.index.showToast({title:n,duration:(null==e?void 0:e.duration)||1500,icon:i,image:(null==e?void 0:e.image)||"",position:(null==e?void 0:e.position)||"center",mask:(null==e?void 0:e.mask)||!1})};return n&&e(n,(null==i?void 0:i.icon)||"none",i),{success:(o,n)=>{e(o,"success",n)},error:(o,n)=>{e(o,"error",n)},exception:(o,n)=>{e(o,"exception",n)},loading:(o,n)=>{e(o,"loading",n)}}};
