import{f as M,r as c,W as F,T as I,X as z,Y as b,o as D,A as N,w as i,k as e,l as $,an as j,af as G,b as n,d as v,t as x,a as J,bI as P,U as R,bo as T,bJ as A,a7 as H,a8 as O,bt as W,q as X,a3 as Y}from"./iBiA3qHo.js";const E={class:"flex justify-end gap-2"},Q=M({__name:"bindMobile",emits:["refresh"],setup(K,{expose:g,emit:y}){const V=y,u=c(null),U=F(),r=c(!1),d=c(!1),o=I({mobile:"",code:"",type:""}),C=z({mobile:b().min(11,"手机号不能低于11位").required("请输入手机号码"),code:b().min(4,"验证码不能少于4位").max(4,"验证码不能多于4位").required("请输入验证码")}),t=c({isCounting:!1,text:"获取验证码",disabled:!1}),S=a=>{a&&(u.value=a,j(o,{mobile:"",code:"",type:""}),r.value=!0)},h=async()=>{if(t.value.isCounting!==!0){t.value.text="正在发送中",t.value.disabled=!0;try{await P({mobile:o.mobile,scene:"BGSJHM"}),R().success("验证码已发送，注意查收"),t.value.isCounting=!0,t.value.disabled=!1;let a=60;t.value.text=a+"s";const l=T(()=>{a--,t.value.text=a+"s",a===0&&(clearInterval(l),t.value.isCounting=!1,t.value.text="重新发送")},1e3)}catch{t.value.isCounting=!1,t.value.text="重新发送"}}};async function w(){var a;d.value=!0;try{(a=u.value)!=null&&a.mobile||(o.type="bind"),await A(o),U.getUser(),r.value=!1,V("refresh")}catch{d.value=!1}}return g({open:S}),(a,l)=>{var f;const m=H,p=O,B=W,_=X,k=Y,q=G;return D(),N(q,{modelValue:e(r),"onUpdate:modelValue":l[2]||(l[2]=s=>$(r)?r.value=s:null),title:(f=e(u))!=null&&f.mobile?"更换手机号":"绑定手机号"},{default:i(()=>[n(k,{state:e(o),schema:e(C),class:"my-4 space-y-4",onSubmit:w},{default:i(()=>[n(p,{label:"新的手机号",name:"mobile",size:"lg",required:""},{default:i(()=>[n(m,{ref:"mobileRef",modelValue:e(o).mobile,"onUpdate:modelValue":l[0]||(l[0]=s=>e(o).mobile=s),placeholder:"请填写手机号",color:"gray",class:"flex-1"},null,8,["modelValue"])]),_:1}),n(p,{label:"验证码",name:"code",required:""},{default:i(()=>[n(m,{id:"code",modelValue:e(o).code,"onUpdate:modelValue":l[1]||(l[1]=s=>e(o).code=s),size:"lg",color:"gray",placeholder:"请输入验证码",ui:{trailing:{padding:{"2xs":"pe-28",xs:"pe-28",sm:"pe-28",md:"pe-28",lg:"pe-28",xl:"pe-28"}},icon:{trailing:{pointer:"pointer-events-auto",wrapper:"!px-[2px]"}}}},{trailing:i(()=>[n(B,{class:"h-1/2",orientation:"vertical"}),n(_,{class:"w-[90px]",variant:"link",ui:{variant:{link:"hover:no-underline"},inline:"w-full justify-center"},onClick:h},{default:i(()=>[v(x(e(t).text),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),J("div",E,[n(_,{type:"submit",class:"px-8",size:"lg",loading:e(d),disabled:!e(o).code||!e(o).mobile},{default:i(()=>{var s;return[v(x((s=e(u))!=null&&s.mobile?"确认换绑":"确认绑定"),1)]}),_:1},8,["loading","disabled"])])]),_:1},8,["state","schema"])]),_:1},8,["modelValue","title"])}}});export{Q as _};
