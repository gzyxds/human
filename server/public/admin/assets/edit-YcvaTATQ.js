import{_ as I}from"./index-Df1qeOtf.js";import{Q as $,I as j,B as G,C as O,G as T,H as A,g as H,M as L,N as M,D as S,h as P}from"./element-plus-CW14IAqd.js";import{_ as Q}from"./index.vue_vue_type_style_index_0_lang-CrHJb5Ba.js";import{_ as Y}from"./picker-WiIIA2S8.js";import{g as J,h as K,i as W,j as X}from"./article-DKWYrd8c.js";import{u as Z}from"./useDictOptions-D4C-0InH.js";import{d as ee}from"./index-DkCvA8ar.js";import{u as te,a as oe}from"./vue-router-akAgejHM.js";import{d as v,a0 as V,G as le,o as u,c as w,f as t,g as r,z as a,a as i,F as ae,j as re,Y as ie,_ as p}from"./@vue-CGao7vbS.js";import"./@liripeng-tRfXSOOZ.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-b4noGO9g.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./@wangeditor-CKN-hYDN.js";import"./index-Da-RjlL5.js";import"./index-Di-Xkxjj.js";import"./index.vue_vue_type_script_setup_true_lang-BSFOyzad.js";import"./index-BIwWuBYp.js";import"./index-BbB0tGsI.js";import"./index.vue_vue_type_script_setup_true_lang-VrWtSw6-.js";import"./@vueuse-CuqWKaqQ.js";import"./usePaging-D9QJQ_HK.js";import"./vue3-video-play-D5LEBxxj.js";import"./vuedraggable-CNVEpOcE.js";import"./vue-DGROohPF.js";import"./sortablejs-DdgKbxid.js";import"./nprogress-Cgf5DU8x.js";import"./pinia-C8SLiYOc.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-l-30Ih9A.js";const se={class:"article-edit"},ne={class:"xl:flex"},me={class:"w-80"},de={class:"w-80"},ue={class:"w-80"},pe={class:"w-80"},_e={class:"xl:ml-20"},ce=v({name:"articleListsEdit"}),ut=v({...ce,setup(fe){const d=te(),g=oe(),o=V({id:"",title:"",image:"",cid:"",desc:"",author:"",content:"",click_virtual:0,sort:0,is_show:1,abstract:""}),{removeTab:x}=ee(),_=le(),E=V({title:[{required:!0,message:"请输入文章标题",trigger:"blur"}],cid:[{required:!0,message:"请选择文章栏目",trigger:"blur"}]}),k=async()=>{const n=await J({id:d.query.id});Object.keys(o).forEach(e=>{o[e]=n[e]})},{optionsData:R}=Z({article_cate:{api:K}}),y=async()=>{var n;await((n=_.value)==null?void 0:n.validate()),d.query.id?await W(o):await X(o),x(),g.back()};return d.query.id&&k(),(n,e)=>{const U=$,c=j,m=G,s=O,h=T,B=A,q=Y,f=H,b=L,C=M,D=Q,N=S,z=P,F=I;return u(),w("div",se,[t(c,{class:"!border-none",shadow:"never"},{default:r(()=>[t(U,{content:n.$route.meta.title,onBack:e[0]||(e[0]=l=>n.$router.back())},null,8,["content"])]),_:1}),t(c,{class:"mt-4 !border-none",shadow:"never"},{default:r(()=>[t(N,{ref_key:"formRef",ref:_,class:"ls-form",model:a(o),"label-width":"85px",rules:a(E)},{default:r(()=>[i("div",ne,[i("div",null,[t(s,{label:"文章标题",prop:"title"},{default:r(()=>[i("div",me,[t(m,{modelValue:a(o).title,"onUpdate:modelValue":e[1]||(e[1]=l=>a(o).title=l),placeholder:"请输入文章标题",type:"textarea",autosize:{minRows:3,maxRows:3},maxlength:"64","show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1}),t(s,{label:"文章栏目",prop:"cid"},{default:r(()=>[t(B,{class:"w-80",modelValue:a(o).cid,"onUpdate:modelValue":e[2]||(e[2]=l=>a(o).cid=l),placeholder:"请选择文章栏目",clearable:""},{default:r(()=>[(u(!0),w(ae,null,re(a(R).article_cate,l=>(u(),ie(h,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"文章简介",prop:"desc"},{default:r(()=>[i("div",de,[t(m,{modelValue:a(o).desc,"onUpdate:modelValue":e[3]||(e[3]=l=>a(o).desc=l),placeholder:"请输入文章简介",type:"textarea",autosize:{minRows:3,maxRows:6},maxlength:200,"show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1}),t(s,{label:"摘要",prop:"abstract"},{default:r(()=>[i("div",ue,[t(m,{type:"textarea",autosize:{minRows:6,maxRows:6},modelValue:a(o).abstract,"onUpdate:modelValue":e[4]||(e[4]=l=>a(o).abstract=l),maxlength:"200","show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1}),t(s,{label:"文章封面",prop:"image"},{default:r(()=>[i("div",null,[i("div",null,[t(q,{modelValue:a(o).image,"onUpdate:modelValue":e[5]||(e[5]=l=>a(o).image=l),limit:1},null,8,["modelValue"])]),e[11]||(e[11]=i("div",{class:"form-tips"},"建议上传16:9比例的图片",-1))])]),_:1}),t(s,{label:"作者",prop:"author"},{default:r(()=>[i("div",pe,[t(m,{modelValue:a(o).author,"onUpdate:modelValue":e[6]||(e[6]=l=>a(o).author=l),placeholder:"请输入作者名称"},null,8,["modelValue"])])]),_:1}),t(s,{label:"排序",prop:"sort"},{default:r(()=>[i("div",null,[t(f,{modelValue:a(o).sort,"onUpdate:modelValue":e[7]||(e[7]=l=>a(o).sort=l),min:0,max:9999},null,8,["modelValue"]),e[12]||(e[12]=i("div",{class:"form-tips"},"默认为0， 数值越大越排前",-1))])]),_:1}),t(s,{label:"初始浏览量",prop:"click_virtual"},{default:r(()=>[i("div",null,[t(f,{modelValue:a(o).click_virtual,"onUpdate:modelValue":e[8]||(e[8]=l=>a(o).click_virtual=l),min:0},null,8,["modelValue"])])]),_:1}),t(s,{label:"文章状态",required:"",prop:"is_show"},{default:r(()=>[t(C,{modelValue:a(o).is_show,"onUpdate:modelValue":e[9]||(e[9]=l=>a(o).is_show=l)},{default:r(()=>[t(b,{value:1},{default:r(()=>e[13]||(e[13]=[p("显示")])),_:1}),t(b,{value:0},{default:r(()=>e[14]||(e[14]=[p("隐藏")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),i("div",_e,[t(s,{label:"文章内容",prop:"content"},{default:r(()=>[t(D,{modelValue:a(o).content,"onUpdate:modelValue":e[10]||(e[10]=l=>a(o).content=l),height:667,width:375},null,8,["modelValue"])]),_:1})])])]),_:1},8,["model","rules"])]),_:1}),t(F,null,{default:r(()=>[t(z,{type:"primary",onClick:y},{default:r(()=>e[15]||(e[15]=[p("保存")])),_:1})]),_:1})])}}});export{ut as default};
