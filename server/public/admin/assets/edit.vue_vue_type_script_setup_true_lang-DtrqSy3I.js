import{_ as B,C as N,B as F,g as I,f as S,D as q}from"./element-plus-CW14IAqd.js";import{d as A,a as M,b as P,c as T}from"./department-CwLNGoR5.js";import{P as z}from"./index-Da-RjlL5.js";import{u as G}from"./useDictOptions-D4C-0InH.js";import{d as O,G as _,r as Y,b as $,a0 as j,o as b,c as H,f as o,g as d,z as t,Y as J,k as K,a as V}from"./@vue-CGao7vbS.js";const L={class:"edit-popup"},oe=O({__name:"edit",emits:["success","close"],setup(Q,{expose:g,emit:v}){const i=v,c=_(),u=_(),m=Y("add"),w=$(()=>m.value=="edit"?"编辑部门":"新增部门"),l=j({id:"",pid:"",name:"",leader:"",mobile:"",sort:0,status:1}),x={pid:[{required:!0,message:"请选择上级部门",trigger:["change"]}],name:[{required:!0,message:"请输入部门名称",trigger:["blur"]}],mobile:[{validator:(a,e,r)=>{if(e){const n=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;if(console.log(n.test(e)),n.test(e))r();else return r(new Error("请输入正确的手机号"))}else return r()},trigger:["blur"]}]},{optionsData:k}=G({dept:{api:A}}),y=async()=>{var a,e;await((a=c.value)==null?void 0:a.validate()),m.value=="edit"?await M(l):await P(l),(e=u.value)==null||e.close(),i("success")},E=(a="add")=>{var e;m.value=a,(e=u.value)==null||e.open()},f=a=>{for(const e in l)a[e]!=null&&a[e]!=null&&(l[e]=a[e])},C=async a=>{const e=await T({id:a.id});f(e)},D=()=>{i("close")};return g({open:E,setFormData:f,getDetail:C}),(a,e)=>{const r=B,n=N,p=F,h=I,R=S,U=q;return b(),H("div",L,[o(z,{ref_key:"popupRef",ref:u,title:t(w),async:!0,width:"550px",onConfirm:y,onClose:D},{default:d(()=>[o(U,{ref_key:"formRef",ref:c,model:t(l),"label-width":"84px",rules:x},{default:d(()=>[t(l).pid!==0?(b(),J(n,{key:0,label:"上级部门",prop:"pid"},{default:d(()=>[o(r,{class:"flex-1",modelValue:t(l).pid,"onUpdate:modelValue":e[0]||(e[0]=s=>t(l).pid=s),data:t(k).dept,clearable:"","node-key":"id",props:{value:"id",label:"name"},"check-strictly":"","default-expand-all":!0,placeholder:"请选择上级部门"},null,8,["modelValue","data"])]),_:1})):K("",!0),o(n,{label:"部门名称",prop:"name"},{default:d(()=>[o(p,{modelValue:t(l).name,"onUpdate:modelValue":e[1]||(e[1]=s=>t(l).name=s),placeholder:"请输入部门名称",maxlength:100},null,8,["modelValue"])]),_:1}),o(n,{label:"负责人",prop:"leader"},{default:d(()=>[o(p,{modelValue:t(l).leader,"onUpdate:modelValue":e[2]||(e[2]=s=>t(l).leader=s),placeholder:"请输入负责人姓名",maxlength:30},null,8,["modelValue"])]),_:1}),o(n,{label:"联系电话",prop:"mobile"},{default:d(()=>[o(p,{modelValue:t(l).mobile,"onUpdate:modelValue":e[3]||(e[3]=s=>t(l).mobile=s),placeholder:"请输入联系电话"},null,8,["modelValue"])]),_:1}),o(n,{label:"排序",prop:"sort"},{default:d(()=>[V("div",null,[o(h,{modelValue:t(l).sort,"onUpdate:modelValue":e[4]||(e[4]=s=>t(l).sort=s),min:0,max:9999},null,8,["modelValue"]),e[6]||(e[6]=V("div",{class:"form-tips"},"默认为0， 数值越大越排前",-1))])]),_:1}),o(n,{label:"部门状态"},{default:d(()=>[o(R,{modelValue:t(l).status,"onUpdate:modelValue":e[5]||(e[5]=s=>t(l).status=s),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{oe as _};
