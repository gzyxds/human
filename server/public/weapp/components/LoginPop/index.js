"use strict";const e=require("../../common/vendor.js"),n=require("../../api/user.js"),o=require("../../enums/variableEnum.js"),u=require("../../stores/app.js"),i=require("../../stores/user.js"),a=require("../../utils/helper.js"),l=require("../../composables/useToast.js"),r=()=>"../VerificationCode.js";if(!Array){(e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-forms-item")+r+e.resolveComponent("uni-forms")+e.resolveComponent("uni-popup"))()}Math||((()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-easyinput/uni-easyinput.js")+(()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-forms-item/uni-forms-item.js")+(()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.js")+m+t+c+(()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js")+s)();const s=()=>"../ConfirmModal.js",t=()=>"./BindMobile.js",m=()=>"./ForgetMobile.js",c=()=>"./Register.js",g=e.defineComponent({__name:"index",setup(r,{expose:s}){const t=u.useAppStore(),m=i.useUserStore(),c=e.ref(!1),g=a.getComponentExpose(),f=e.ref(!1),d=e.ref(!0),p=e.ref(o.LoginWayEnum.ACCOUNT),v=e.ref(),E=e.ref(),C=e.ref(),y=e.ref({mobile:"",password:"",code:""}),L={mobile:{rules:[{required:!0,errorMessage:"请输入手机号"}]},password:{rules:[{required:!0,errorMessage:"请输入密码"}]},code:{rules:[{required:!0,errorMessage:"请输入验证码"}]}};function W(e){return Number(p.value)===Number(e)}function b(e){var n,o;return(null==(n=t.siteConfig)?void 0:n.login.login_way.includes(e))||(null==(o=t.siteConfig)?void 0:o.login.login_way.includes(String(e)))}function T(e){f.value=!1,p.value=e}function A(){y.value.mobile?(f.value=!0,n.apiPostSendCode({mobile:y.value.mobile,scene:o.CodeTypeEnum.LOGIN}),console.log("发送获取验证码请求")):e.index.showToast({title:"请输入手机号",icon:"none"})}const O=()=>{c.value=!0},w=async()=>{var e;c.value?(await C.value.validate(),W(o.LoginWayEnum.MOBILE)?async function(){const e=await n.apiPostAccountLogin({account:y.value.mobile,code:y.value.code,scene:o.LoginSenceEnum.MOBILE});v.value=e,U()}():W(o.LoginWayEnum.ACCOUNT)&&async function(){const e=await n.apiPostAccountLogin({account:y.value.mobile,password:y.value.password,scene:o.LoginSenceEnum.ACCOUNT});v.value=e,U()}()):null==(e=g.value)||e.open()};async function M(){var e;c.value?await async function(){let e=await N();const o=await n.apiPostCodeBindAccount({code:e});if(console.log("根据微信小程序code获取对应账号信息",o),null==o?void 0:o.id){e=await N();const o=await n.apiPostMnpLogin({code:e});console.log("获取登录账号数据",o),v.value=o,U()}else d.value=!1}():null==(e=g.value)||e.open()}const N=async()=>{const{code:n}=await e.index.login({provider:"weixin"});return n};const I=()=>{n.apiPostCheckRegister({mobile:y.value.mobile}).then((e=>{console.log("手机号已注册, ",e),l.useToast("该微信手机号已注册，请使用手机号登录",{duration:3e3})})).catch((async e=>{console.log("手机号未注册",e);const o=await N(),u=await n.apiPostMnpLogin({code:o,mobile:y.value.mobile});console.log("获取注册账号数据",u),v.value=u,U()}))},U=async()=>{var e,n,o,u;await m.login(v.value.token),console.log(null==(n=null==(e=t.siteConfig)?void 0:e.login)?void 0:n.coerce_mobile,"appStore.siteConfig?.login?.coerce_mobile"),console.log(v.value.mobile,"loginData.value.mobile"),!(null==(u=null==(o=t.siteConfig)?void 0:o.login)?void 0:u.coerce_mobile)||v.value.mobile?E.value.close():p.value="5"};function B(n){e.index.navigateTo({url:`/bundle/pages/agreement/index?type=${n}`})}return e.onMounted((async()=>{var e,n,u,i,a,l,r;await t.getConfig(),console.log("onLoad执行"),console.log("appStore.siteConfig?.login?.default_login_way",null==(n=null==(e=t.siteConfig)?void 0:e.login)?void 0:n.default_login_way),p.value=String(null==(i=null==(u=t.siteConfig)?void 0:u.login)?void 0:i.default_login_way)||o.LoginWayEnum.ACCOUNT,m.isLogin&&(null==(l=null==(a=t.siteConfig)?void 0:a.login)?void 0:l.coerce_mobile)&&!(null==(r=m.userInfo)?void 0:r.mobile)&&(p.value="5")})),s({open:()=>{e.nextTick$1((()=>{E.value.open()}))},close:()=>{E.value.close()}}),(n,u)=>{var i,a,l,r;return e.e({a:e.t(["用户登录","微信登录","手机号登录","账号密码登录","找回密码","绑定手机号","账号注册","手机号注册"][Number(p.value)]),b:W(e.unref(o.LoginWayEnum).MOBILE)||W(e.unref(o.LoginWayEnum).ACCOUNT)},W(e.unref(o.LoginWayEnum).MOBILE)||W(e.unref(o.LoginWayEnum).ACCOUNT)?e.e({c:e.o((e=>y.value.mobile=e)),d:e.p({"prefix-icon":"person",placeholder:W(e.unref(o.LoginWayEnum).MOBILE)?"请输入手机号":"请输入账号/手机号",modelValue:y.value.mobile}),e:e.p({label:"",name:"mobile"}),f:W(e.unref(o.LoginWayEnum).ACCOUNT)},W(e.unref(o.LoginWayEnum).ACCOUNT)?{g:e.o((e=>T("4"))),h:e.o((e=>y.value.password=e)),i:e.p({type:"password","prefix-icon":"locked",placeholder:"请输入密码",modelValue:y.value.password}),j:e.p({label:"",name:"password"})}:{},{k:W(e.unref(o.LoginWayEnum).MOBILE)},W(e.unref(o.LoginWayEnum).MOBILE)?{l:e.o(A),m:e.o((e=>f.value=e)),n:e.p({second:59,"countdown-switch":f.value}),o:e.o((e=>y.value.code=e)),p:e.p({"prefix-icon":"locked",placeholder:"请输入验证码",modelValue:y.value.code}),q:e.p({label:"",name:"code"})}:{},{r:e.sr(C,"bc287fdd-1,bc287fdd-0",{k:"formRef"}),s:e.p({"model-value":y.value,rules:L})}):{},{t:W("4")},W("4")?{v:e.o((n=>T(e.unref(o.LoginWayEnum).ACCOUNT)))}:{},{w:W("5")},W("5")?{x:e.o(U)}:{},{y:W("6")},W("6")?{z:e.o((n=>T(e.unref(o.LoginWayEnum).ACCOUNT))),A:e.p({"is-agreement":c.value,"agreement-popup-ref":e.unref(g),type:"6"})}:{},{B:W("7")},W("7")?{C:e.o((n=>T(e.unref(o.LoginWayEnum).MOBILE))),D:e.p({"is-agreement":c.value,"agreement-popup-ref":e.unref(g),type:"7"})}:{},{E:W(e.unref(o.LoginWayEnum).MOBILE)||W(e.unref(o.LoginWayEnum).ACCOUNT)||W(e.unref(o.LoginWayEnum).WECHAT)},W(e.unref(o.LoginWayEnum).MOBILE)||W(e.unref(o.LoginWayEnum).ACCOUNT)||W(e.unref(o.LoginWayEnum).WECHAT)?e.e({F:W(e.unref(o.LoginWayEnum).WECHAT)&&d.value},W(e.unref(o.LoginWayEnum).WECHAT)&&d.value?{G:e.o(M)}:{},{H:W(e.unref(o.LoginWayEnum).WECHAT)&&!d.value},W(e.unref(o.LoginWayEnum).WECHAT)&&!d.value?{I:e.o((e=>y.value.mobile=e)),J:e.p({"prefix-icon":"person",placeholder:"请输入微信手机号",modelValue:y.value.mobile}),K:e.o(I)}:{},{L:!W(e.unref(o.LoginWayEnum).WECHAT)&&W(e.unref(o.LoginWayEnum).ACCOUNT)},!W(e.unref(o.LoginWayEnum).WECHAT)&&W(e.unref(o.LoginWayEnum).ACCOUNT)?{M:e.o((e=>T("6")))}:{},{N:!W(e.unref(o.LoginWayEnum).WECHAT)&&W(e.unref(o.LoginWayEnum).MOBILE)},!W(e.unref(o.LoginWayEnum).WECHAT)&&W(e.unref(o.LoginWayEnum).MOBILE)?{O:e.o((e=>T("7")))}:{},{P:!W(e.unref(o.LoginWayEnum).WECHAT)},W(e.unref(o.LoginWayEnum).WECHAT)?{}:{Q:e.o(w)}):{},{R:!W(e.unref(o.LoginWayEnum).WECHAT)&&b(e.unref(o.LoginWayEnum).WECHAT)},!W(e.unref(o.LoginWayEnum).WECHAT)&&b(e.unref(o.LoginWayEnum).WECHAT)?{S:e.o((n=>T(e.unref(o.LoginWayEnum).WECHAT)))}:{},{T:!W(e.unref(o.LoginWayEnum).ACCOUNT)&&b(e.unref(o.LoginWayEnum).ACCOUNT)},!W(e.unref(o.LoginWayEnum).ACCOUNT)&&b(e.unref(o.LoginWayEnum).ACCOUNT)?{U:e.o((n=>T(e.unref(o.LoginWayEnum).ACCOUNT)))}:{},{V:!W(e.unref(o.LoginWayEnum).MOBILE)&&b(e.unref(o.LoginWayEnum).MOBILE)},!W(e.unref(o.LoginWayEnum).MOBILE)&&b(e.unref(o.LoginWayEnum).MOBILE)?{W:e.o((n=>T(e.unref(o.LoginWayEnum).MOBILE)))}:{},{X:null==(a=null==(i=e.unref(t).siteConfig)?void 0:i.login)?void 0:a.login_agreement},(null==(r=null==(l=e.unref(t).siteConfig)?void 0:l.login)?void 0:r.login_agreement)?e.e({Y:c.value},(c.value,{}),{Z:e.n(c.value?"bg-primary":""),aa:e.o((e=>c.value=!c.value)),ab:e.o((e=>B("service"))),ac:e.o((e=>B("privacy")))}):{},{ad:e.sr(E,"bc287fdd-0",{k:"popupRef"}),ae:e.p({"border-radius":"24rpx",type:"bottom","is-mask-click":!1,"safe-area":!1}),af:e.sr(g,"bc287fdd-14",{k:"agreementPopupRef"}),ag:e.p({title:"服务协议及隐私协议","cancel-text":"取消","confirm-text":"确定","confirm-callback":O})})}}}),f=e._export_sfc(g,[["__scopeId","data-v-bc287fdd"]]);wx.createComponent(f);
