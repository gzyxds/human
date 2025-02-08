import{f as F,u as H,W as O,ao as R,br as E,j as J,o as l,A as W,w as _,a as e,b3 as G,k as t,b as r,t as o,d as K,bs as M,c,m as p,F as f,n as Q,B as X,D as Y,x as Z,I as ee,q as te,bt as se}from"./iBiA3qHo.js";import{_ as oe}from"./Cp6gw0qI.js";import{_ as ne}from"./DDs9jzhK.js";import{_ as re}from"./BRU1X883.js";const ae=""+new URL("profile-bg.DeJvA4Dh.png",import.meta.url).href,le=""+new URL("profile-bg-pc.BDvh3ONk.png",import.meta.url).href,ie={class:"relative hidden h-full md:block"},ce={class:"flex items-center gap-2 text-base font-medium text-white"},de={class:"px-6"},ue={class:"-mt-12 flex items-center gap-4"},_e={class:"rounded-full border-4 border-background bg-background p-0.5 center"},pe={class:"rounded-full border-[3px] border-primary/10 center"},fe={class:"pt-4"},me={class:"mb-1 text-lg font-medium"},ge={class:"mb-1 inline-block text-xs"},be={class:"mb-1 text-sm text-foreground/70"},he={class:"mt-4 flex gap-4"},xe={class:"text-lg font-semibold"},ve={class:"text-xs text-foreground/60"},ke={class:"block h-full md:hidden"},ye={class:"pointer-events-none fixed -left-[40%] -top-[13%] z-0 block max-h-screen w-[180%] overflow-hidden md:hidden"},Ie=["src"],we={class:"relative z-10"},$e={class:"flex items-center gap-1 text-xs font-medium text-foreground/80"},De={class:"flex min-h-full flex-col gap-4 md:bg-background"},Be={class:"py-8"},Ce={class:"flex-shrink-0 rounded-full border-2 border-background center dark:border-white/10"},ze={class:""},Le={key:0,class:"text-sm text-foreground/60"},Me={class:"mt-0.5 flex items-center text-xs text-foreground/60"},Se={class:"text-primary"},Ue={class:"ml-auto mr-8 text-foreground/70"},Ne={class:"text-xl font-medium text-primary"},Pe={class:"text-xs text-foreground/60"},Fe=F({__name:"index",setup(Ae){H({title:"个人信息"});const s=O(),S=R(),U=E(),N=[{icon:"tabler:battery-vertical-charging-2",title:"充值中心",path:"/profile/recharge"},{icon:"tabler:clock-record",title:"充值记录",path:"/profile/recharge-record"},{icon:"tabler:file-text",title:"账单明细",path:"/profile/power-flow"},{icon:"tabler:user-question",title:"帮助中心",path:"/help"},{icon:"tabler:book-2",title:"政策协议",path:"/agreement",target:"_blank"},{icon:"tabler:message-chatbot",title:"人工客服",path:"",target:"",click:()=>U.setCustomerModal(!0)},{icon:"tabler:logout-2",title:"退出登录",path:"",click:()=>s.logout()}],m=()=>{const n=new Date().getHours();return n>=0&&n<6?"凌晨":n>=6&&n<9?"早上":n>=9&&n<12?"上午":n>=12&&n<18?"下午":"晚上"};return(i,n)=>{const d=Z,g=ee,P=te,A=se,b=oe,T=ne,V=re,j=J("auth");return l(),W(V,{scroll:!0,breadcrumb:!1,padding:"p-4 md:p-0",rounded:!1,background:!1},{default:_(()=>{var h,x,v,k,y,I,w,$,D,B,C,z,L;return[e("div",ie,[e("div",{class:"min-h-[200px] bg-cover bg-right bg-no-repeat p-4 md:p-6",style:G(`background-image: url('${t(le)}')`)},[e("h1",ce,[r(d,{name:"tabler:sunset-2",size:"20"}),e("span",null,o(`${m()}好，${t(s).isLogin?(h=t(s).userInfo)==null?void 0:h.nickname:""}！`),1)])],4),e("div",de,[e("div",ue,[e("div",_e,[e("div",pe,[r(g,{src:(x=t(s).userInfo)==null?void 0:x.avatar,class:"bg-background-soft",icon:"tabler:user",size:"3xl",ui:{icon:{base:"text-gray-300"}}},null,8,["src"])])]),r(P,{ui:{rounded:"rounded-full"},icon:"tabler:user-edit",to:"/profile/profile-edit"},{default:_(()=>n[1]||(n[1]=[K(" 编辑资料 ")])),_:1})]),e("div",fe,[e("h2",me,o(((v=t(s).userInfo)==null?void 0:v.nickname)||"未登录"),1),e("div",ge,"UID："+o((k=t(s).userInfo)==null?void 0:k.sn),1),e("div",be,o(("dataMasking"in i?i.dataMasking:t(M))((y=t(s).userInfo)==null?void 0:y.account,6)),1)]),e("div",he,[(l(!0),c(f,null,p((I=t(s).userInfo)==null?void 0:I.static,(a,u)=>(l(),c("div",{key:`${a.label}${u}`,class:"flex items-center gap-1"},[e("span",xe,o(a.value),1),e("span",ve,o(a.label),1)]))),128))])]),r(A,{class:"py-8",ui:{border:{base:"flex border-border/40 dark:border-border/40"}}})]),e("div",ke,[e("div",ye,[e("img",{src:t(ae),alt:""},null,8,Ie)]),e("div",we,[e("h1",$e,[r(d,{name:"tabler:sunset-2",size:"16"}),e("span",null,o(`${m()}好，${t(s).isLogin?(w=t(s).userInfo)==null?void 0:w.nickname:""}！`),1)]),e("div",De,[e("div",Be,[Q((l(),c("div",{class:"flex items-center gap-4",onClick:n[0]||(n[0]=a=>("navigateTo"in i?i.navigateTo:t(Y))("/profile/profile-edit"))},[e("div",Ce,[r(g,{class:"",src:($=t(s).userInfo)==null?void 0:$.avatar,icon:"tabler:user",size:"2xl",ui:{icon:{base:"text-gray-300"}}},null,8,["src"])]),e("div",null,[e("h2",ze,o(((D=t(s).userInfo)==null?void 0:D.nickname)||"未登录"),1),t(s).isLogin?(l(),c("p",Le,o((B=t(s).userInfo)!=null&&B.mobile?("dataMasking"in i?i.dataMasking:t(M))((C=t(s).userInfo)==null?void 0:C.mobile,6):"未绑定手机号"),1)):X("",!0),e("p",Me,[e("span",Se,o((z=t(S).siteConfig)==null?void 0:z.unit.power)+": "+o((L=t(s).userInfo)==null?void 0:L.user_money),1),r(d,{name:"heroicons:bolt-16-solid text-primary "})])]),e("div",Ue,[r(d,{name:"tabler:chevron-right",size:"20"})])])),[[j]])]),r(b,{class:"flex justify-around bg-background/70 backdrop-blur-md dark:bg-background/50"},{default:_(()=>{var a;return[(l(!0),c(f,null,p((a=t(s).userInfo)==null?void 0:a.static,(u,q)=>(l(),c("div",{key:`${u.label}${q}`,class:"flex flex-col items-center gap-2"},[e("span",Ne,o(u.value),1),e("span",Pe,o(u.label),1)]))),128))]}),_:1}),r(b,{class:"flex flex-1 flex-col gap-2 bg-background/70 dark:bg-background/50",padding:"px-2 py-4"},{default:_(()=>[(l(),c(f,null,p(N,a=>r(T,{key:a.path,class:"flex items-center gap-2 rounded-lg px-4 py-2 active:bg-primary/5 active:text-primary",menu:a},{default:_(()=>[r(d,{name:a.icon},null,8,["name"]),e("span",null,o(a.title),1),r(d,{class:"ml-auto",name:"tabler:chevron-right"})]),_:2},1032,["menu"])),64))]),_:1})])])])]}),_:1})}}});export{Fe as default};
