import{d as e,aF as a,r as l,j as o,aK as u,G as s,J as i,l as n,o as d,c as t,w as r,N as m,X as c,Y as b,a as v,b as f,bi as p,aT as _,V as w,bj as y,bk as h,bl as V,y as g,i as x}from"./index-CTSv8bdf.js";const I=e({__name:"index",setup(e){const I=a(),M=l(!1),U=l({mobile:"",code:"",type:"bind"}),j=l(),k={mobile:{rules:[{required:!0,errorMessage:"请输入手机号"}]},code:{rules:[{required:!0,errorMessage:"请输入验证码"}]}},B=async()=>{await j.value.validate(),await p({...U.value}),await I.getUser(),_()},C=async()=>{if(!U.value.mobile)return w("请输入手机号");M.value=!0,await y({mobile:U.value.mobile,scene:"bind"===U.value.type?h.BIND_MOBILE:h.CHANGE_MOBILE}),console.log("发送获取验证码请求")};return o((()=>{var e,a,l;U.value.mobile=(null==(e=I.userInfo)?void 0:e.mobile)||"",U.value.type=(null==(a=I.userInfo)?void 0:a.mobile)?"change":"bind",u({title:(null==(l=I.userInfo)?void 0:l.mobile)?"更换手机号":"绑定手机号"})})),(e,a)=>{const l=s(i("uni-easyinput"),m),o=s(i("uni-forms-item"),c),u=V,p=s(i("uni-forms"),b),_=g,w=x,y=n("layout-default-uni");return d(),t(y,null,{default:r((()=>[v(w,{"px-3":"","pt-7":""},{default:r((()=>[v(p,{ref_key:"formRef",ref:j,"model-value":U.value,rules:k},{default:r((()=>[v(o,{label:"",name:"mobile"},{default:r((()=>[v(l,{modelValue:U.value.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value.mobile=e),placeholder:"请输入手机号","prefix-icon":"person"},null,8,["modelValue"])])),_:1}),v(o,{label:"",name:"code"},{default:r((()=>[v(l,{modelValue:U.value.code,"onUpdate:modelValue":a[2]||(a[2]=e=>U.value.code=e),placeholder:"请输入验证码","prefix-icon":"email"},{right:r((()=>[v(u,{"countdown-switch":M.value,"onUpdate:countdownSwitch":a[1]||(a[1]=e=>M.value=e),second:59,onHandleCode:C},null,8,["countdown-switch"])])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model-value"]),v(_,{type:"primary","mt-14":"",onClick:B},{default:r((()=>[f("确定")])),_:1})])),_:1})])),_:1})}}});export{I as default};
