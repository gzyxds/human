import{A as D,B as K,g as L,C as N,p as P,H as $,R as A,K as F,O as I}from"./element-plus-CSiqOtzA.js";import{_ as M}from"./index.vue_vue_type_script_setup_true_lang-ggB8NA6X.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang-BGamiX6l.js";import{_ as S}from"./index.vue_vue_type_script_setup_true_lang-B2T1NVEp.js";import{d as j,Z as q,a4 as H,f as Z,an as G,o as p,c as J,V as e,M as l,u as t,ab as Q,S as r,O as x,L as b,T as W,a as X,i as Y}from"./@vue-TMcuEboY.js";import{h as y}from"./consumer-D7S5nCc8.js";import{u as ee}from"./usePaging-DFi_nJOG.js";import{u as te}from"./getExposeType-C5XerQxt.js";import ae from"./detail-Cp68mY2Q.js";const ne={class:"h-full flex flex-col"},le={class:"flex justify-end my-4"},ge=j({__name:"index",props:{tenant_id:{type:Number,default:0}},setup(w){const c=te(),f=w,o=q({keyword:"",channel:"",create_time_start:"",create_time_end:"",tenant_id:f.tenant_id}),{pager:i,getLists:m,resetPage:u,resetParams:k}=ee({fetchFun:y,params:o});return H(()=>{m()}),Z(()=>{m()}),(oe,a)=>{const v=D,d=K,h=S,_=L,C=O,T=N,V=P,s=$,E=A,B=F,R=M,U=G("perms"),z=I;return p(),J("div",ne,[e(T,{ref:"formRef",class:"-mb-4 mt-1 flex flex-wrap gap-x-4",model:t(o),inline:!0},{default:l(()=>[e(d,{label:"账号信息",class:"flex-1 min-w-[200px] max-w-[300px] !mr-0"},{default:l(()=>[e(v,{modelValue:t(o).keyword,"onUpdate:modelValue":a[0]||(a[0]=n=>t(o).keyword=n),placeholder:"账号/名称",clearable:"",onKeyup:Q(t(u),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(d,{label:"创建时间",class:"flex-1 min-w-[350px] max-w-full !mr-0"},{default:l(()=>[e(h,{startTime:t(o).create_time_start,"onUpdate:startTime":a[1]||(a[1]=n=>t(o).create_time_start=n),endTime:t(o).create_time_end,"onUpdate:endTime":a[2]||(a[2]=n=>t(o).create_time_end=n)},null,8,["startTime","endTime"])]),_:1}),e(d,{class:"!mr-0"},{default:l(()=>[e(_,{type:"primary",onClick:t(u)},{default:l(()=>a[4]||(a[4]=[r("查询")])),_:1},8,["onClick"]),e(_,{onClick:t(k)},{default:l(()=>a[5]||(a[5]=[r("重置")])),_:1},8,["onClick"]),e(C,{class:"ml-2.5","fetch-fun":t(y),params:t(o),"page-size":t(i).size},null,8,["fetch-fun","params","page-size"])]),_:1})]),_:1},8,["model"]),x((p(),b(B,{class:"mt-4 flex-1",data:t(i).lists,height:"100%"},{default:l(()=>[e(s,{label:"头像",width:"90",align:"center"},{default:l(({row:n})=>[e(V,{src:n.avatar,size:50},null,8,["src"])]),_:1}),e(s,{label:"昵称",prop:"nickname","min-width":"100"}),e(s,{label:"来源",prop:"channel","min-width":"80"}),e(s,{label:"性别",prop:"sex","min-width":"60"}),e(s,{label:"状态","min-width":"80"},{default:l(({row:n})=>[e(E,{type:n.is_disable===0?"primary":"danger"},{default:l(()=>[r(W(n.is_disable===0?"开启":"关闭"),1)]),_:2},1032,["type"])]),_:1}),e(s,{label:"创建时间",prop:"create_time","min-width":"120"}),e(s,{label:"操作",width:"auto","min-width":"90",fixed:"right"},{default:l(({row:n})=>[x((p(),b(_,{type:"primary",link:"",onClick:se=>{var g;return(g=t(c))==null?void 0:g.open(n.id)}},{default:l(()=>a[6]||(a[6]=[r(" 详情 ")])),_:2},1032,["onClick"])),[[U,["user.user/detail"]]])]),_:1})]),_:1},8,["data"])),[[z,t(i).loading]]),X("div",le,[e(R,{modelValue:t(i),"onUpdate:modelValue":a[3]||(a[3]=n=>Y(i)?i.value=n:null),onChange:t(m)},null,8,["modelValue","onChange"])]),e(ae,{ref_key:"detialRef",ref:c,tenant_id:f.tenant_id},null,8,["tenant_id"])])}}});export{ge as _};
