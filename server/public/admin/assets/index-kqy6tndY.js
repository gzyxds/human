import{P as N,I as R,h as T,J as P,f as U,K as z,L as A}from"./element-plus-CW14IAqd.js";import{_ as j}from"./index.vue_vue_type_script_setup_true_lang-BSFOyzad.js";import{f as F,b as G}from"./index-DkCvA8ar.js";import{a as I,b as J,c as K}from"./article-DKWYrd8c.js";import{u as Y}from"./usePaging-D9QJQ_HK.js";import{_ as q}from"./edit.vue_vue_type_script_setup_true_name_articleColumnEdit_lang-BDp53bwT.js";import{d as k,G as H,r as M,an as O,o as n,c as Q,f as t,g as i,i as d,z as s,Y as u,a as h,_ as g,u as W,k as X,y as b}from"./@vue-CGao7vbS.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-b4noGO9g.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-akAgejHM.js";import"./pinia-C8SLiYOc.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-CuqWKaqQ.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./@liripeng-tRfXSOOZ.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-l-30Ih9A.js";import"./index-Da-RjlL5.js";const Z={class:"flex justify-end mt-4"},ee=k({name:"articleColumn"}),je=k({...ee,setup(te){const _=H(),f=M(!1),{pager:r,getLists:l}=Y({fetchFun:K}),y=async()=>{var o;f.value=!0,await b(),(o=_.value)==null||o.open("add")},V=async o=>{var e,m;f.value=!0,await b(),(e=_.value)==null||e.open("edit"),(m=_.value)==null||m.getDetail(o)},E=async o=>{await F.confirm("确定要删除？"),await I({id:o}),l()},x=async(o,e)=>{try{await J({id:e,is_show:o}),l()}catch{l()}};return l(),(o,e)=>{const m=N,w=R,$=G,C=T,c=P,S=U,B=z,D=j,v=O("perms"),L=A;return n(),Q("div",null,[t(w,{class:"!border-none",shadow:"never"},{default:i(()=>[t(m,{type:"warning",title:"温馨提示：用于管理网站的分类，只可添加到一级",closable:!1,"show-icon":""})]),_:1}),d((n(),u(w,{class:"!border-none mt-4",shadow:"never"},{default:i(()=>[h("div",null,[d((n(),u(C,{class:"mb-4",type:"primary",onClick:e[0]||(e[0]=a=>y())},{icon:i(()=>[t($,{name:"el-icon-Plus"})]),default:i(()=>[e[3]||(e[3]=g(" 新增 "))]),_:1})),[[v,["article.articleCate/add"]]])]),t(B,{size:"large",data:s(r).lists},{default:i(()=>[t(c,{label:"栏目名称",prop:"name","min-width":"120"}),t(c,{label:"文章数",prop:"article_count","min-width":"120"}),t(c,{label:"状态","min-width":"120"},{default:i(({row:a})=>[d(t(S,{modelValue:a.is_show,"onUpdate:modelValue":p=>a.is_show=p,"active-value":1,"inactive-value":0,onChange:p=>x(p,a.id)},null,8,["modelValue","onUpdate:modelValue","onChange"]),[[v,["article.articleCate/updateStatus"]]])]),_:1}),t(c,{label:"排序",prop:"sort","min-width":"120"}),t(c,{label:"操作",width:"120",fixed:"right"},{default:i(({row:a})=>[d((n(),u(C,{type:"primary",link:"",onClick:p=>V(a)},{default:i(()=>e[4]||(e[4]=[g(" 编辑 ")])),_:2},1032,["onClick"])),[[v,["article.articleCate/edit"]]]),d((n(),u(C,{type:"danger",link:"",onClick:p=>E(a.id)},{default:i(()=>e[5]||(e[5]=[g(" 删除 ")])),_:2},1032,["onClick"])),[[v,["article.articleCate/delete"]]])]),_:1})]),_:1},8,["data"]),h("div",Z,[t(D,{modelValue:s(r),"onUpdate:modelValue":e[1]||(e[1]=a=>W(r)?r.value=a:null),onChange:s(l)},null,8,["modelValue","onChange"])])]),_:1})),[[L,s(r).loading]]),s(f)?(n(),u(q,{key:0,ref_key:"editRef",ref:_,onSuccess:s(l),onClose:e[2]||(e[2]=a=>f.value=!1)},null,8,["onSuccess"])):X("",!0)])}}});export{je as default};
