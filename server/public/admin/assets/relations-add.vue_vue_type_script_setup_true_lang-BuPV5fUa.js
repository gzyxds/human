import{G as A,H as G,C as I,B as O,D as P}from"./element-plus-CW14IAqd.js";import{a as S}from"./code-CmHtRGSa.js";import{P as $}from"./index-Da-RjlL5.js";import{u as j}from"./useDictOptions-D4C-0InH.js";import{d as z,G as g,r as H,b as L,a0 as M,o as u,c as d,f as t,g as n,z as a,F as i,j as _,Y as y}from"./@vue-CGao7vbS.js";const N={class:"edit-popup"},W=z({__name:"relations-add",props:{column:{type:Array,default:()=>[]},types:{type:Array,default:()=>[]}},emits:["add","close","edit"],setup(k,{expose:x,emit:C}){const v=C,V=g(),m=g(),p=H("add"),E=L(()=>p.value=="edit"?"编辑关联":"新增关联"),o=M({name:"",model:"",type:"",local_key:"",foreign_key:""}),R={name:[{required:!0,message:"请输入关联名称"}],type:[{required:!0,message:"请选择关联类型"}],model:[{required:!0,message:"请选择关联模型"}],local_key:[{required:!0,message:"请选择关联健"}],foreign_key:[{required:!0,message:"请输入外键"}]},{optionsData:q}=j({models:{api:S}}),w=async()=>{var r,e;await((r=V.value)==null?void 0:r.validate()),(e=m.value)==null||e.close(),v(p.value,o)},D=(r="add")=>{var e;p.value=r,(e=m.value)==null||e.open()},F=r=>{for(const e in o)r[e]!=null&&r[e]!=null&&(o[e]=r[e])},U=()=>{v("close")};return x({open:D,setFormData:F}),(r,e)=>{const f=A,c=G,s=I,b=O,B=P;return u(),d("div",N,[t($,{ref_key:"popupRef",ref:m,title:a(E),async:!0,width:"550px",onConfirm:w,onClose:U},{default:n(()=>[t(B,{ref_key:"formRef",ref:V,model:a(o),"label-width":"84px",rules:R},{default:n(()=>[t(s,{label:"关联类型",prop:"type"},{default:n(()=>[t(c,{class:"flex-1",modelValue:a(o).type,"onUpdate:modelValue":e[0]||(e[0]=l=>a(o).type=l),placeholder:"请选择关联类型"},{default:n(()=>[(u(!0),d(i,null,_(k.types,(l,h)=>(u(),y(f,{key:h,label:l.name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"关联名称",prop:"name"},{default:n(()=>[t(b,{modelValue:a(o).name,"onUpdate:modelValue":e[1]||(e[1]=l=>a(o).name=l),placeholder:"请输入关联名称"},null,8,["modelValue"])]),_:1}),t(s,{label:"关联模型",prop:"model"},{default:n(()=>[t(c,{class:"flex-1",modelValue:a(o).model,"onUpdate:modelValue":e[2]||(e[2]=l=>a(o).model=l),placeholder:"请选择关联模型"},{default:n(()=>[(u(!0),d(i,null,_(a(q).models,l=>(u(),y(f,{label:l,value:l,key:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"关联健",prop:"local_key"},{default:n(()=>[t(c,{class:"flex-1",modelValue:a(o).local_key,"onUpdate:modelValue":e[3]||(e[3]=l=>a(o).local_key=l),clearable:"",placeholder:"请选择关联健"},{default:n(()=>[(u(!0),d(i,null,_(k.column,l=>(u(),y(f,{key:l.id,value:l.column_name,label:`${l.column_name}：${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"外键",prop:"foreign_key"},{default:n(()=>[t(b,{modelValue:a(o).foreign_key,"onUpdate:modelValue":e[4]||(e[4]=l=>a(o).foreign_key=l),placeholder:"关联表外键或中间表的外键"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{W as _};
