"use strict";const e=require("../common/vendor.js"),t=e.defineComponent({__name:"ArticleCard",props:{data:{}},setup(t){const{data:a}=t;return(t,n)=>{var d,i,r;return{a:null==(d=t.data)?void 0:d.image,b:e.t(null==(i=t.data)?void 0:i.title),c:e.t(null==(r=t.data)?void 0:r.create_time),d:e.o((t=>{e.index.navigateTo({url:"/bundle/pages/article_detail/index?id="+a.id})}))}}}});wx.createComponent(t);
