import{B as R,C as g,g as h,D as C}from"./element-plus-CW14IAqd.js";import{a as E,b as k}from"./role-D2FxKU1H.js";import{P as D}from"./index-Da-RjlL5.js";import{d as F,G as c,r as B,b as I,a0 as U,o as z,c as N,f as l,g as n,z as a}from"./@vue-CGao7vbS.js";const P={class:"edit-popup"},J=F({__name:"edit",emits:["success","close"],setup(q,{expose:f,emit:_}){const u=_,d=c(),r=c(),m=B("add"),b=I(()=>m.value=="edit"?"编辑角色":"新增角色"),o=U({id:"",name:"",desc:"",sort:0,menu_id:[]}),w={name:[{required:!0,message:"请输入名称",trigger:["blur"]}]},v=async()=>{var t,e;await((t=d.value)==null?void 0:t.validate()),m.value=="edit"?await E(o):await k(o),(e=r.value)==null||e.close(),u("success")},x=()=>{u("close")};return f({open:(t="add")=>{var e;m.value=t,(e=r.value)==null||e.open()},setFormData:async t=>{for(const e in o)t[e]!=null&&t[e]!=null&&(o[e]=t[e])}}),(t,e)=>{const i=R,p=g,V=h,y=C;return z(),N("div",P,[l(D,{ref_key:"popupRef",ref:r,title:a(b),async:!0,width:"550px",onConfirm:v,onClose:x},{default:n(()=>[l(y,{class:"ls-form",ref_key:"formRef",ref:d,rules:w,model:a(o),"label-width":"60px"},{default:n(()=>[l(p,{label:"名称",prop:"name"},{default:n(()=>[l(i,{class:"ls-input",modelValue:a(o).name,"onUpdate:modelValue":e[0]||(e[0]=s=>a(o).name=s),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),l(p,{label:"备注",prop:"desc"},{default:n(()=>[l(i,{modelValue:a(o).desc,"onUpdate:modelValue":e[1]||(e[1]=s=>a(o).desc=s),type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"请输入备注",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(p,{label:"排序",prop:"sort"},{default:n(()=>[l(V,{modelValue:a(o).sort,"onUpdate:modelValue":e[2]||(e[2]=s=>a(o).sort=s),min:0,max:9999},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{J as _};
