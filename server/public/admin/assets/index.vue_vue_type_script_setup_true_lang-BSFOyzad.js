import{S as d}from"./element-plus-CW14IAqd.js";import{d as m,b as c,o as z,c as f,f as S,p as h,z as a}from"./@vue-CGao7vbS.js";const C={class:"pagination"},V=m({__name:"index",props:{modelValue:{default:()=>({})},pageSizes:{default:()=>[15,20,30,40]},layout:{default:"total, sizes, prev, pager, next, jumper"}},emits:["change","update:modelValue"],setup(g,{emit:r}){const p=g,o=r,e=c({get(){return p.modelValue},set(t){o("update:modelValue",t)}}),i=()=>{e.value.page=1,o("change")},l=()=>{o("change")};return(t,n)=>{const u=d;return z(),f("div",C,[S(u,h(p,{"pager-count":5,currentPage:a(e).page,"onUpdate:currentPage":n[0]||(n[0]=s=>a(e).page=s),pageSize:a(e).size,"onUpdate:pageSize":n[1]||(n[1]=s=>a(e).size=s),"page-sizes":t.pageSizes,layout:t.layout,total:a(e).count,"hide-on-single-page":!1,onSizeChange:i,onCurrentChange:l}),null,16,["currentPage","pageSize","page-sizes","layout","total"])])}}});export{V as _};
