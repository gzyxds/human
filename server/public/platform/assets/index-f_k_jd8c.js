import{g as B,P as g}from"./element-plus-CSiqOtzA.js";import{d as C,r as k,H as S,n as T,o as i,c as b,a as f,I as p,V,ac as $,M as a,S as s,T as d,L as m,R as y,P as E}from"./@vue-TMcuEboY.js";import{d as w}from"./index-B_OJBac2.js";const h=C({props:{title:{type:String,default:""},content:{type:String,default:""},confirmButtonText:{type:[String,Boolean],default:"确定"},cancelButtonText:{type:[String,Boolean],default:"取消"},width:{type:String,default:"400px"},disabled:{type:Boolean,default:!1},async:{type:Boolean,default:!1},clickModalClose:{type:Boolean,default:!1},center:{type:Boolean,default:!1},customClass:{type:String,default:""},destroyOnClose:{type:Boolean,default:!1}},emits:["confirm","cancel","close","open"],setup(e,{emit:o}){const t=k(!1),c=l=>{o(l),(!e.async||l==="cancel")&&r()},r=()=>{t.value=!1,T(()=>{o("close")})},u=()=>{e.disabled||(o("open"),t.value=!0)};return S("visible",t),{visible:t,handleEvent:c,close:r,open:u}}}),N={class:"dialog"},P={class:"dialog-footer"};function M(e,o,t,c,r,u){const l=B,v=g;return i(),b("div",N,[f("div",{class:"dialog__trigger",onClick:o[0]||(o[0]=(...n)=>e.open&&e.open(...n))},[p(e.$slots,"trigger",{},void 0,!0)]),V(v,{modelValue:e.visible,"onUpdate:modelValue":o[3]||(o[3]=n=>e.visible=n),class:E(e.customClass),center:e.center,"append-to-body":!0,width:e.width,"close-on-click-modal":e.clickModalClose,"destroy-on-close":e.destroyOnClose,onClosed:e.close},$({footer:a(()=>[f("div",P,[e.cancelButtonText?(i(),m(l,{key:0,onClick:o[1]||(o[1]=n=>e.handleEvent("cancel"))},{default:a(()=>[s(d(e.cancelButtonText),1)]),_:1})):y("",!0),e.confirmButtonText?(i(),m(l,{key:1,type:"primary",onClick:o[2]||(o[2]=n=>e.handleEvent("confirm"))},{default:a(()=>[s(d(e.confirmButtonText),1)]),_:1})):y("",!0)])]),default:a(()=>[p(e.$slots,"default",{},()=>[s(d(e.content),1)],!0)]),_:2},[e.title?{name:"header",fn:a(()=>[s(d(e.title),1)]),key:"0"}:void 0]),1032,["modelValue","class","center","width","close-on-click-modal","destroy-on-close","onClosed"])])}const z=w(h,[["render",M],["__scopeId","data-v-0a521617"]]);export{z as P};
