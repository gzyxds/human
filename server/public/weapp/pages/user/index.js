"use strict";const e=require("../../common/vendor.js"),n=require("../../common/assets.js"),r=require("../../stores/user.js"),o=()=>"../../components/Tabbar.js";if(!Array){(e.resolveComponent("uni-nav-bar")+o+e.resolveComponent("layout-auth-uni"))()}Math||((()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.js")+u)();const u=()=>"./components/UserService2.js",s=e.defineComponent({__name:"index",setup(o){const u=r.useUserStore(),s=n=>{e.index.navigateTo({url:n})};return e.onShow((()=>{u.getUser()})),(r,o)=>{var a,t,i,d,l,p,f;return e.e({a:e.p({title:"","status-bar":!0,border:!1,fixed:!1,"background-color":"rgba(256,256, 256, 0)"}),b:(null==(a=e.unref(u).userInfo)?void 0:a.avatar)||e.unref(n.DefaultAvatar),c:e.unref(u).isLogin},e.unref(u).isLogin?{d:e.t(null==(t=e.unref(u).userInfo)?void 0:t.nickname)}:{},{e:e.t((null==(i=e.unref(u).userInfo)?void 0:i.image_num)||0),f:e.o((e=>s("/bundle/pages/profile/index?type=0"))),g:e.t((null==(d=e.unref(u).userInfo)?void 0:d.avatar_num)||0),h:e.o((n=>{return r="/pages/product/index",void e.index.switchTab({url:r});var r})),i:e.t((null==(l=e.unref(u).userInfo)?void 0:l.timbre_num)||0),j:e.o((e=>s("/bundle/pages/profile/index?type=2"))),k:e.t((null==(p=e.unref(u).userInfo)?void 0:p.voice_num)||0),l:e.o((e=>s("/bundle/pages/profile/index?type=1"))),m:n._imports_1$3,n:e.t((null==(f=e.unref(u).userInfo)?void 0:f.user_money)||0),o:e.o((e=>s("/bundle/pages/hashrate_log/index"))),p:e.o((e=>s("/bundle/pages/hashrate/index"))),q:e.p({type:1}),r:e.p({current:2})})}}}),a=e._export_sfc(s,[["__scopeId","data-v-16a58675"]]);wx.createPage(a);
