import{d as e,r as t,h as a,ac as s,l,o as n,c,w as o,a as i,b as r,t as u,e as d,i as f}from"./index-CTSv8bdf.js";import{w as y,U as g,b as p}from"./wechat.DCAr2y-k.js";const h=e({__name:"index",setup(e){const h=t(),m=t("正在处理，请稍等..."),x=async(e={getUrl:!0})=>{let t=null;const{code:a,key:s="",getUrl:l}=e;if(a)try{t=await p({code:a,key:s}),h.value=t}catch(n){m.value=n,console.log(n)}l&&await y.getUrl(g.PC_LOGIN)};return a((e=>{if(e){const{code:a,state:l,scene:n}=e;a&&l&&n&&y.setAuthData({code:a,scene:n});const c=y.getAuthData();if(c.code&&c.scene==g.PC_LOGIN)try{x({...e,...c})}catch(t){s({title:`授权失败:${t.message||JSON.stringify(t)}`,icon:"error"})}finally{y.setAuthData()}else 1==e.is_pc&&e.key&&x()}})),(e,t)=>{const a=d,s=f,y=l("layout-default-uni");return n(),c(y,null,{default:o((()=>[i(s,{style:{width:"100vw",height:"100vh","background-color":"white"}},{default:o((()=>[h.value&&h.value.token?(n(),c(s,{key:0,style:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column",padding:"80px 0"}},{default:o((()=>[i(a,{src:h.value.avatar||"/static/logo.png",style:{width:"70px",height:"70px","border-radius":"100%","background-color":"#eee"},alt:""},null,8,["src"]),i(s,{style:{padding:"0.5rem 0"}},{default:o((()=>[r(u(h.value.nickname||"昵称"),1)])),_:1}),i(s,{style:{"font-size":"14px",color:"#777"}},{default:o((()=>[r(" 微信授权成功 ")])),_:1})])),_:1})):(n(),c(s,{key:1,style:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column",padding:"80px 0"}},{default:o((()=>[r(" 正在登录，请稍等... "+u(m.value),1)])),_:1}))])),_:1})])),_:1})}}});export{h as default};
