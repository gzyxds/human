import{g as V,H as E,R as B,K as D,G as L,O as N}from"./element-plus-CSiqOtzA.js";import{_ as P}from"./index.vue_vue_type_script_setup_true_lang-ggB8NA6X.js";import{g as f,f as R,x as $,b as O,y as S}from"./index-B_OJBac2.js";import{u as j}from"./usePaging-DFi_nJOG.js";import{d as h,ah as q,an as F,o as s,c as G,V as t,M as e,O as p,L as m,u as n,S as d,T as H,a as g,i as K}from"./@vue-TMcuEboY.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";const M={class:"flex"},U={class:"flex justify-end mt-4"},z=h({name:"scheduledTask"}),Et=h({...z,setup(A){const{pager:r,getLists:c}=j({fetchFun:S,params:{}}),y=async u=>{await R.confirm("确定要删除？"),await $({id:u}),c()};return c(),(u,i)=>{const v=O,l=V,b=q("router-link"),o=E,w=B,k=D,x=P,C=L,_=F("perms"),T=N;return s(),G("div",null,[t(C,{shadow:"never",class:"!border-none"},{default:e(()=>[p((s(),m(b,{to:n(f)("crontab.crontab/add:edit")},{default:e(()=>[t(l,{type:"primary",class:"mb-[16px]"},{icon:e(()=>[t(v,{name:"el-icon-Plus"})]),default:e(()=>[i[1]||(i[1]=d(" 新增 "))]),_:1})]),_:1},8,["to"])),[[_,["crontab.crontab/add","crontab.crontab/add:edit"]]]),p((s(),m(k,{ref:"paneTable",class:"m-t-24",data:n(r).lists,style:{width:"100%"}},{default:e(()=>[t(o,{prop:"name",label:"名称","min-width":"120"}),t(o,{prop:"type_desc",label:"类型","min-width":"100"}),t(o,{prop:"command",label:"命令","min-width":"100"}),t(o,{prop:"params",label:"参数","min-width":"80"}),t(o,{prop:"expression",label:"规则","min-width":"100"}),t(o,{prop:"status",label:"状态","min-width":"100"},{default:e(({row:a})=>[t(w,{type:a.status==1?"success":a.status==2?"info":"danger"},{default:e(()=>[d(H(a.status==1?"运行中":a.status==2?"已停止":"错误"),1)]),_:2},1032,["type"])]),_:1}),t(o,{prop:"error",label:"错误原因","min-width":"120"}),t(o,{prop:"last_time",label:"最后执行时间",width:"180"}),t(o,{prop:"time",label:"时长","min-width":"100"}),t(o,{prop:"max_time",label:"最大时长","min-width":"100"}),t(o,{label:"操作",width:"120",fixed:"right"},{default:e(({row:a})=>[g("div",M,[t(l,{type:"primary",link:""},{default:e(()=>[p((s(),m(b,{to:{path:n(f)("crontab.crontab/add:edit"),query:{id:a.id}}},{default:e(()=>[t(l,{type:"primary",link:""},{default:e(()=>i[2]||(i[2]=[d(" 编辑 ")])),_:1})]),_:2},1032,["to"])),[[_,["crontab.crontab/edit","crontab.crontab/add:edit"]]])]),_:2},1024),p((s(),m(l,{type:"danger",link:"",onClick:I=>y(a.id)},{default:e(()=>i[3]||(i[3]=[d(" 删除 ")])),_:2},1032,["onClick"])),[[_,["crontab.crontab/delete"]]])])]),_:1})]),_:1},8,["data"])),[[T,n(r).loading]]),g("div",U,[t(x,{modelValue:n(r),"onUpdate:modelValue":i[0]||(i[0]=a=>K(r)?r.value=a:null),onChange:n(c)},null,8,["modelValue","onChange"])])]),_:1})])}}});export{Et as default};
