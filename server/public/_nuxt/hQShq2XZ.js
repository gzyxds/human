import{f as q,y as B,T as D,r as c,h as P,o as E,c as H,a as e,t as u,k as t,b as a,w as m,l as I,E as L,q as G,a9 as T,v as F,d as f,a5 as J,x as K,e as O}from"./iBiA3qHo.js";import{_ as Q}from"./DU3fwEm4.js";import{h as W}from"./BLDARQqd.js";import{d as X}from"./DxM3l_Qq.js";import{b as Y}from"./75-SRlBf.js";import{s as Z}from"./BoJhwiBp.js";import{_ as ee}from"./DxqbCNiF.js";import{u as oe}from"./BK3-fmoW.js";import{f as te}from"./DH1JQC-z.js";const se={class:"flex max-h-[calc(100vh-8rem-28px)] flex-col gap-4 sm:flex-row md:max-h-[calc(80vh-8rem-28px)]"},ne={class:"flex-1 rounded-xl bg-background-soft center"},ae=["src"],le={class:"flex flex-1 flex-col gap-4 overflow-y-auto"},ie={class:"flex flex-1 flex-col overflow-y-auto"},re={class:"flex items-end justify-between text-lg font-medium"},de={class:"text-xs text-foreground/50"},ce={class:"my-2 flex flex-1 flex-col overflow-y-auto"},ue={class:"relative flex gap-4 pr-0"},me={class:"audio-container relative m-4 mr-0 h-14 w-14 flex-shrink-0"},fe=["src"],pe=["onClick"],_e=["onClick"],xe={class:"font-medium"},ve={class:"mt-1 line-clamp-2 text-xs text-foreground/60"},ge={class:"mt-1"},be={class:"inline-flex items-center gap-0.5 rounded bg-foreground/5 px-1 py-0.5 text-xs text-foreground/60"},he={class:"flex flex-col gap-3"},ye={class:"flex flex-col justify-end gap-1 px-1"},we={class:"flex items-center justify-between gap-4"},ke={class:"center"},Ce={class:"end"},Ve={class:"text-xs text-foreground/50"},qe=q({__name:"generator",props:{data:{}},emits:["stepChange","submit"],setup($,{emit:U}){const p=$,g=U,b=B(),l=D({title:p.data.name,cover:p.data.cover,video_id:p.data.id,voice_id:"",mode:1}),r=c(),_=c(!1),d=c([]),v=c(0),x=c(!1),h=()=>{var o;const n=d.value.find(i=>i.mode===l.mode);if(n){const i=Math.ceil(Number(((o=r.value)==null?void 0:o.duration)||0)/60);v.value=n.video_power*i}},z=n=>{var o;((o=r.value)==null?void 0:o.id)===n.id?(l.voice_id="",r.value=null,v.value=0):(r.value=n,l.voice_id=n.file_id,h())},A=async()=>{x.value=!0,l.title=`${p.data.name}-${te(new Date,"yyyy-MM-dd HH:mm")}`;try{oe(async()=>{await X(l),g("submit"),x.value=!1})}catch{x.value=!1}};return P(async()=>{d.value=await Y(),d.value[0].mode&&(l.mode=d.value[0].mode)}),(n,o)=>{var w;const i=K,M=Q,N=L,y=G,S=O,R=T;return E(),H("div",se,[e("div",ne,[e("video",{src:n.data.fileUrl,controls:"",class:"max-h-52 rounded-md md:max-h-full"},null,8,ae)]),e("div",le,[e("div",ie,[e("h1",re,[o[3]||(o[3]=e("span",null," 点击选择配音 ",-1)),e("span",de," 已选："+u(((w=t(r))==null?void 0:w.title)||"未选择"),1)]),e("div",ce,[a(M,{ref:"listRef","request-instance":()=>t(W)({status:"1"}),scroll:!0,"load-mode":"auto",mode:"load",class:"flex flex-col gap-2"},{default:m(({item:s})=>{var k,C;return[e("div",{class:F(["group relative flex-1 cursor-pointer rounded-lg border border-transparent bg-background-soft shadow-none md:rounded-xl lg:block",{"!border-primary bg-primary/20":s.id===((k=t(r))==null?void 0:k.id)}])},[e("div",ue,[e("div",me,[e("img",{src:((C=s.timbre)==null?void 0:C.cover)||t(Z),class:"relative size-full rounded-full"},null,8,fe),e("div",{class:"absolute left-0 top-0 flex size-full cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 transition-opacity group-hover:opacity-100 group-active:opacity-100 md:bg-background/20 md:opacity-0 md:backdrop-blur",onClick:j=>{var V;return(V=t(b))==null?void 0:V.open({cover:s.cover,url:s.voice_url})}},[a(i,{name:"tabler:player-play-filled",size:"20",class:"text-white"})],8,pe)]),e("div",{class:"flex-1 p-4 pl-0",onClick:j=>z(s)},[e("h2",xe,u(s.title||"--"),1),e("p",ve,u(s.content||"--"),1),e("p",ge,[e("span",be,[a(i,{name:"tabler:clock"}),f(" "+u(("formatSecond"in n?n.formatSecond:t(J))(s.duration||0)),1)])])],8,_e)])],2)]}),_:1},8,["request-instance"])])]),e("div",he,[e("div",ye,[o[4]||(o[4]=e("label",{class:"text-sm text-foreground/70"},"通道选择：",-1)),a(N,{modelValue:t(l).mode,"onUpdate:modelValue":o[0]||(o[0]=s=>t(l).mode=s),"ui-menu":{width:"max-w-[70%]"},options:t(d),"value-attribute":"mode","option-attribute":"video_mode_title",onChange:h},null,8,["modelValue","options"])]),e("div",we,[a(y,{ui:{rounded:"rounded-full"},size:"md",color:"white",icon:"tabler:chevron-left",onClick:o[1]||(o[1]=s=>g("stepChange",0))},{default:m(()=>o[5]||(o[5]=[f(" 返回 ")])),_:1}),a(y,{disabled:!t(l).voice_id||!t(_),icon:"tabler:wand",size:"md",ui:{rounded:"rounded-full"},loading:t(x),onClick:A},{default:m(()=>[o[6]||(o[6]=f(" 开始合成 ")),e("span",ke,[f(" 消耗"+u(t(v)),1),a(i,{name:"heroicons:bolt-solid"})])]),_:1},8,["disabled","loading"])]),e("p",Ce,[a(R,{modelValue:t(_),"onUpdate:modelValue":o[2]||(o[2]=s=>I(_)?_.value=s:null),name:"notifications",label:"Notifications",ui:{inner:"ms-2",base:"size-3.5",wrapper:"items-center"}},{label:m(()=>[e("p",Ve,[o[8]||(o[8]=e("span",null,"请先阅读并同意",-1)),a(S,{target:"_blank",class:"mx-[1px] font-medium text-primary",to:"/agreement?type=agreement&item=use"},{default:m(()=>o[7]||(o[7]=[f(" 《使用协议》 ")])),_:1})])]),_:1},8,["modelValue"])])])]),a(ee,{ref_key:"AudioModalRef",ref:b},null,512)])}}});export{qe as _};
