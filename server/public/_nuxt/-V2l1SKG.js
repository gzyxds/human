import{f as O,o as s,c as l,a as t,v as Q,W as X,r as v,ao as Z,u as ee,h as te,bn as oe,am as se,b as n,w as r,F as k,m as w,k as a,A as d,B as ne,l as ae,t as p,bo as re,e as le,q as ie,d as u,bp as q,s as de,x as ce,bq as pe}from"./iBiA3qHo.js";import{_ as D,a as ue,L as _e}from"./CzDZqjNd.js";import{_ as fe,a as me}from"./ZJNN5Mea.js";import{_ as ge}from"./B8-tLZve.js";import{_ as xe}from"./UoGWXlX4.js";import"./Cp6gw0qI.js";import"./DDs9jzhK.js";import"./jEpb_vT2.js";import"./Cb4KlQxU.js";import"./DPda_AxG.js";const be={class:"overflow-hidden rounded-lg bg-gray-50/40 p-4 ring-1 ring-inset ring-gray-900/10 dark:bg-gray-900/40 dark:ring-white/10 md:rounded-xl lg:-m-4"},he=O({__name:"pro-placeholder",props:{ratio:{default:"aspect-w-16 aspect-h-9"}},setup(F){return(y,h)=>(s(),l("div",be,[t("div",{class:Q(["relative overflow-hidden rounded-lg border border-dashed border-gray-900/10 dark:border-white/10",y.ratio])},h[0]||(h[0]=[t("svg",{class:"absolute inset-0 size-full stroke-gray-900/10 dark:stroke-white/10",fill:"none"},[t("defs",null,[t("pattern",{id:"pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e",x:"0",y:"0",width:"10",height:"10",patternUnits:"userSpaceOnUse"},[t("path",{d:"M-3 13 15-5M-5 5l18-18M-1 21 17 3"})])]),t("rect",{stroke:"none",fill:"url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)",width:"100%",height:"100%"})],-1)]),2)]))}}),ve={class:"relative min-h-full"},ye={class:"z-10 mx-auto flex min-h-full flex-col items-center"},ke={class:"container flex items-center justify-between p-4"},we={class:"flex items-center gap-2"},Ce=["src"],ze={key:2,class:"font-medium"},$e=["to"],Be={class:"hidden items-center gap-4 lg:flex"},Ue={class:"flex flex-1 justify-end gap-2 lg:hidden"},Le={class:"flex items-center justify-between p-4"},Ne={class:"flex flex-1 flex-col p-4 pt-0"},Se={class:"flex justify-between p-4"},Ve={class:"container py-20 md:py-36"},Ae={class:"flex-col gap-8 center"},Ie={key:0,class:"mx-8 text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"},Me={key:2,class:"px-4 text-center"},Re={class:"flex gap-4"},Pe={id:"__demo_container__",class:"container flex-1 p-4 md:p-12"},je={class:"flex w-full flex-col border-t border-gray-900/10 center dark:border-white/10"},qe={class:"container flex flex-wrap gap-4 p-4 md:px-8 md:pb-0"},De={class:"container flex flex-wrap justify-between gap-4 p-4 md:px-8 md:pb-8"},Oe={class:"text-sm text-foreground/50"},Fe=["href"],Ze=O({__name:"index",setup(F){const y=X(),h=v(),_=v(),m=Z();ee({title:"首页"});const g=v(!1),c=v();let C;const T=i=>{const e=pe();return i.indexOf("http")?`${e.public.apiBase}/${i}`:i},E=()=>{var i;(i=document.getElementById("__demo_container__"))==null||i.scrollIntoView({behavior:"smooth"})},z=()=>{C=re(()=>{if(_.value){if(_.value.page===_.value.pages)return _.value.select(0);_.value.next()}},3e3)},$=()=>{clearInterval(C)},G=()=>{z()};return te(async()=>{document.body.classList.add("md:to-background");const i=await oe(),e=JSON.parse(i.config.data);e[1].prop.data.map(f=>f),c.value=e,z()}),se(()=>{document.body.classList.remove("md:to-background"),$()}),(i,e)=>{var L,N,S,V,A,I,M;const f=de,x=le,B=ue,U=fe,b=ie,H=ce,J=me,W=ge,Y=xe,K=he;return s(),l("div",ve,[e[9]||(e[9]=t("div",{class:"gradient h-[50vh] w-screen md:h-screen"},null,-1)),e[10]||(e[10]=t("div",{class:"landing-grid absolute inset-0 z-[-1] max-h-screen [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"},null,-1)),t("div",ye,[t("div",ke,[n(x,{to:"/",class:"transition-opacity"},{default:r(()=>{var o,R,P,j;return[t("h1",we,[(o=a(m).siteConfig)!=null&&o.website.pc_logo?(s(),l("img",{key:0,src:((R=a(m).siteConfig)==null?void 0:R.website.pc_logo)||a(_e),class:"size-8",alt:""},null,8,Ce)):(s(),d(f,{key:1,class:"size-8"})),(P=a(m).siteConfig)!=null&&P.website.pc_title?(s(),l("p",ze,p((j=a(m).siteConfig)==null?void 0:j.website.pc_title),1)):(s(),d(f,{key:3,class:"h-4 w-20"}))])]}),_:1}),t("div",{ref_key:"indexNavbarRef",ref:h,class:"fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 items-center gap-6 rounded-full border border-border/50 bg-background/60 px-8 py-2 backdrop-blur-sm lg:flex"},[(s(!0),l(k,null,w(a(q),o=>(s(),l("div",{key:o.path,to:o.path,class:"hover:text-primary"},[n(B,null,{default:r(()=>[n(x,{to:o.path},{default:r(()=>[u(p(o.title),1)]),_:2},1032,["to"])]),_:2},1024)],8,$e))),128))],512),t("div",Be,[n(U),n(D,{size:"sm"}),a(y).isLogin?(s(),d(b,{key:0,ui:{rounded:"rounded-full"},to:"/dashboard"},{default:r(()=>e[3]||(e[3]=[u("我的工作台")])),_:1})):ne("",!0)]),t("div",Ue,[n(D,{size:"sm"}),n(b,{color:"gray",variant:"ghost",icon:"tabler:menu-deep",square:"",ui:{icon:{size:{md:"size-5"}}},size:"md",padded:"",onClick:e[0]||(e[0]=o=>g.value=!0)})]),n(J,{modelValue:a(g),"onUpdate:modelValue":e[2]||(e[2]=o=>ae(g)?g.value=o:null)},{default:r(()=>[t("div",Le,[e[4]||(e[4]=t("h1",{class:"text-xl font-bold"},"页面导航",-1)),n(b,{color:"gray",variant:"ghost",size:"sm",icon:"tabler:x",square:"",padded:"",onClick:e[1]||(e[1]=o=>g.value=!1)})]),t("div",Ne,[(s(!0),l(k,null,w(a(q),o=>(s(),d(x,{key:o.path,to:o.path,class:"flex items-center gap-2 rounded-xl p-4 hover:bg-primary/5 active:bg-primary/5 active:text-primary"},{default:r(()=>[n(H,{name:o.icon,size:"18"},null,8,["name"]),u(" "+p(o.title),1)]),_:2},1032,["to"]))),128))]),t("div",Se,[n(U)])]),_:1},8,["modelValue"])]),t("div",Ve,[t("div",Ae,[(L=a(c))!=null&&L[0].prop.title?(s(),l("h1",Ie,p((N=a(c))==null?void 0:N[0].prop.title),1)):(s(),d(f,{key:1,class:"h-12 w-2/3 !bg-white/30"})),(S=a(c))!=null&&S[0].prop.subtitle?(s(),l("p",Me,p((V=a(c))==null?void 0:V[0].prop.subtitle),1)):(s(),d(f,{key:3,class:"h-6 w-full !bg-white/30"})),t("div",Re,[n(b,{ui:{rounded:"rounded-full"},size:"lg",color:"white",onClick:E},{default:r(()=>e[5]||(e[5]=[u(" 查看案例 ")])),_:1}),n(B,null,{default:r(()=>[n(b,{"trailing-icon":"tabler:arrow-right",ui:{rounded:"rounded-full"},size:"lg",to:"/avatar"},{default:r(()=>e[6]||(e[6]=[u(" 开始构建 ")])),_:1})]),_:1})])])]),t("div",Pe,[(A=a(c))!=null&&A[1].prop.data.length?(s(),d(Y,{key:0,ref_key:"carouselRef",ref:_,loop:"",items:(I=a(c))==null?void 0:I[1].prop.data,class:"overflow-hidden rounded-lg",arrows:"",ui:{item:"basis-full",wrapper:"group",container:"gap-6",default:{prevButton:{class:"!opacity-0 group-hover:!opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity !bg-black/50 dark:!bg-white/20"},nextButton:{class:"!opacity-0 group-hover:!opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity !bg-black/50 dark:!bg-white/50"}}},onMouseenter:$,onMouseleave:G},{default:r(({item:o})=>[n(W,{draggable:!1,src:T(o.image)},null,8,["src"])]),_:1},8,["items"])):(s(),d(K,{key:1}))]),t("div",je,[t("div",qe,[n(x,{class:"text-sm text-foreground/50",to:"/agreement?type=agreement&item=service",target:"_blank"},{default:r(()=>e[7]||(e[7]=[u(" 用户协议 ")])),_:1}),n(x,{class:"text-sm text-foreground/50",to:"/agreement?type=agreement&item=privacy",target:"_blank"},{default:r(()=>e[8]||(e[8]=[u(" 隐私政策 ")])),_:1})]),t("div",De,[t("div",Oe," Copyright © "+p(new Date().getFullYear())+". All rights reserved. ",1),(s(!0),l(k,null,w((M=a(m).siteConfig)==null?void 0:M.copyright,o=>(s(),l("a",{key:o.key,class:"text-sm text-foreground/50",href:o.value,target:"_blank"},p(o.key),9,Fe))),128))])])])])}}});export{Ze as default};
