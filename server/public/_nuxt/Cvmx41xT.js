import{f as b,W as v,L as p,o as a,c as d,k as e,a as s,b as u,v as x,t as c,B as h,I as g,ao as k,A as y,w,d as $}from"./iBiA3qHo.js";import{_ as z}from"./Cp6gw0qI.js";const B={class:"inline-flex"},I={key:0,class:"flex items-center"},S={key:0,class:"ml-4 flex flex-col justify-center"},C={class:"font-medium"},N={class:"text-sm text-foreground/60"},j={key:1,class:"flex items-center"},U={key:0,class:"ml-4 flex flex-col justify-center"},A={class:"font-medium"},V={class:"text-sm text-foreground/60"},L=b({__name:"user-avatar",props:{size:{default:"md"},border:{type:Boolean,default:!1},title:{type:[Boolean,String,Number],default:""},desc:{type:[Boolean,String,Number],default:""}},setup(_){const n=v(),o=_,r=p(()=>{var t;return o.title===void 0?!1:o.title===!0?(t=n.userInfo)==null?void 0:t.nickname:o.title}),f=p(()=>{var t;return o.desc===void 0?!1:o.desc===!0?`UID：${(t=n.userInfo)==null?void 0:t.sn}`:o.desc});return(t,m)=>{var i;const l=g;return a(),d("div",B,[e(n).isLogin?(a(),d("div",I,[s("div",{class:x({"flex rounded-full border border-foreground/10 dark:border-white/70":t.border})},[u(l,{src:(i=e(n).userInfo)==null?void 0:i.avatar,icon:"tabler:user",size:t.size},null,8,["src","size"])],2),e(r)!==!1&&e(r)!==void 0?(a(),d("div",S,[s("span",C,c(e(r)),1),s("span",N,c(e(f)),1)])):h("",!0)])):(a(),d("div",j,[s("div",{class:x({"flex rounded-full border border-foreground/10 dark:border-white/70":t.border})},[u(l,{icon:"tabler:user",alt:"未登录",size:t.size},null,8,["size"])],2),e(r)!==!1&&e(r)!==void 0?(a(),d("div",U,[s("span",A,c(e(r)),1),s("span",V,c(e(f)),1)])):h("",!0)]))])}}}),D=""+new URL("flash.Cj3KKBiI.png",import.meta.url).href,F={class:"flex-shrink-0"},K={class:"flex flex-wrap justify-start gap-8"},E={class:"gap-1 center"},P={class:"flex-col center"},R={class:"text-2xl font-medium text-primary"},T={class:"flex items-center text-xs"},W=["src"],H=b({__name:"user-card",setup(_){const n=v(),o=k();return(r,f)=>{const t=L,m=z;return a(),y(m,{class:"flex flex-col flex-wrap justify-between gap-4 bg-background md:flex-row md:items-center md:bg-background-soft"},{default:w(()=>{var l,i;return[s("div",F,[u(t,{size:"xl",border:"",title:"",desc:""})]),s("div",K,[s("div",E,[s("div",P,[s("span",R,c((l=e(n).userInfo)==null?void 0:l.user_money),1),s("span",T,[$(" 剩余"+c((i=e(o).siteConfig)==null?void 0:i.unit.power)+" ",1),s("img",{class:"h-4 w-4",src:e(D),alt:"电量图标"},null,8,W)])])])])]}),_:1})}}});export{D as F,H as _};
