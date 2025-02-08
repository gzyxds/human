import{D as C,E as m,F as A,_ as E}from"./index-B_OJBac2.js";import{g as D,G as T}from"./element-plus-CSiqOtzA.js";import{u as z}from"./@vueuse-DE_336rM.js";import{H as y}from"./vue-echarts-5qAlUj9S.js";import{u as h}from"./getExposeType-C5XerQxt.js";import{d as g,r as B,w as V,Z as N,f as R,ah as F,o as x,c as _,a as t,V as n,M as l,T as r,u as s,S as G,a0 as M,U as W,aa as H}from"./@vue-TMcuEboY.js";import"./nprogress-Cgf5DU8x.js";import"./balanced-match-mNcR6oh4.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./@element-plus-C2WBhajb.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./dayjs-CMfar2R3.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./resize-detector-G6vbKCU7.js";const L={class:"workbench"},U={class:"lg:flex"},Z={class:"flex leading-9"},$={class:"flex leading-9"},j={class:"flex leading-9"},q=["href"],I=["href"],J={class:"text-tx-secondary text-xs ml-4"},K={class:"flex flex-wrap"},P={class:"w-1/2 md:w-1/4"},Q={class:"text-6xl"},X={class:"text-tx-secondary text-xs"},Y={class:"w-1/2 md:w-1/4"},tt={class:"text-6xl"},ot={class:"text-tx-secondary text-xs"},et={class:"w-1/2 md:w-1/4"},st={class:"text-6xl"},at={class:"text-tx-secondary text-xs"},it={class:"w-1/2 md:w-1/4"},lt={class:"text-6xl"},rt={class:"text-tx-secondary text-xs"},nt={class:"function mb-4"},dt={class:"flex flex-wrap"},pt={class:"mt-2"},ct={class:"lg:flex gap-4"},ut=g({name:"workbench"}),Jt=g({...ut,setup(vt){const c=C(),v=h(),f=h(),w=z(),i=B(w.value?"#ffffff":c.subTheme);V(()=>c.mode,a=>{i.value=a==="light"?c.subTheme:"#ffffff",O()});const e=N({version:{version:"",website:"",based:"",channel:{gitee:"",website:""}},support:[],today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value"},legend:{data:["访问量"]},tooltip:{trigger:"axis"},series:[{name:"访问量",data:[],type:"line",smooth:!0,color:i.value,lineStyle:{color:i.value,width:2},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:i.value},{offset:1,color:i.value}]},opacity:.1}}]},saleOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value",name:"单位（万）"},tooltip:{trigger:"axis"},series:[{name:"销售量",data:[],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderRadius:[10,10,0,0]},barWidth:"40%",itemStyle:{borderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:m(i.value,.7)},{offset:1,color:i.value}]}}}]}}),b=()=>{A().then(a=>{e.version=a.version,e.today=a.today,e.menu=a.menu,e.visitor=a.visitor,e.support=a.support,e.visitorOption.xAxis.data=[],e.visitorOption.series[0].data=[],e.saleOption.xAxis.data=[],e.saleOption.series[0].data=[],a.visitor.date.reverse().forEach(o=>{e.visitorOption.xAxis.data.push(o)}),a.visitor.list[0].data.forEach(o=>{e.visitorOption.series[0].data.push(o)}),a.sale.date.reverse().forEach(o=>{e.saleOption.xAxis.data.push(o)}),a.sale.list[0].data.forEach(o=>{o<=50&&(o={value:o,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:m("#ff8729",.7)},{offset:1,color:"#ff8729"}]}}}),e.saleOption.series[0].data.push(o)})}).catch(a=>{console.log("err",a)})},O=()=>{var a,o,u,d;e.visitorOption.series[0].color=i.value,e.visitorOption.series[0].lineStyle.color=i.value,e.visitorOption.series[0].areaStyle.color.colorStops=[{offset:0,color:i.value},{offset:1,color:i.value}],e.saleOption.series[0].itemStyle.color.colorStops=[{offset:0,color:m(i.value,.7)},{offset:1,color:i.value}],(a=v.value)==null||a.clear(),(o=f.value)==null||o.clear(),(u=v.value)==null||u.setOption(e.saleOption),(d=f.value)==null||d.setOption(e.visitorOption)};return R(()=>{b()}),(a,o)=>{const u=D,d=T,S=E,k=F("router-link");return x(),_("div",L,[t("div",U,[n(d,{class:"!border-none mb-4 lg:mr-4 lg:w-[350px]",shadow:"never"},{header:l(()=>o[0]||(o[0]=[t("span",{class:"card-title"},"版本信息",-1)])),default:l(()=>[t("div",null,[t("div",Z,[o[1]||(o[1]=t("div",{class:"w-20"},"平台名称",-1)),t("span",null,r(s(e).version.name),1)]),t("div",$,[o[2]||(o[2]=t("div",{class:"w-20"},"当前版本",-1)),t("span",null,r(s(e).version.version),1)]),t("div",j,[o[4]||(o[4]=t("div",{class:"w-20"},"获取渠道",-1)),t("div",null,[t("a",{href:s(e).version.channel.website,target:"_blank"},[n(u,{type:"info",size:"small",color:s(c).subTheme},{default:l(()=>o[3]||(o[3]=[G(" 官网 ")])),_:1},8,["color"])],8,q),t("a",{class:"ml-3",href:s(e).version.channel.gitee,target:"_blank"},[n(u,{type:"primary",size:"small"},{default:l(()=>[t("span",{style:M(`color: ${s(c).subTheme}`)},"Gitee",4)]),_:1})],8,I)])])])]),_:1}),n(d,{class:"!border-none mb-4 flex-1",shadow:"never"},{header:l(()=>[t("div",null,[o[5]||(o[5]=t("span",{class:"card-title"},"今日数据",-1)),t("span",J," 更新时间："+r(s(e).today.time),1)])]),default:l(()=>[t("div",K,[t("div",P,[o[6]||(o[6]=t("div",{class:"leading-10"},"销售额",-1)),t("div",Q,r(s(e).today.today_sales),1),t("div",X," 总："+r(s(e).today.total_sales),1)]),t("div",Y,[o[7]||(o[7]=t("div",{class:"leading-10"},"成交订单",-1)),t("div",tt,r(s(e).today.order_num),1),t("div",ot," 总："+r(s(e).today.order_sum),1)]),t("div",et,[o[8]||(o[8]=t("div",{class:"leading-10"},"新增租户",-1)),t("div",st,r(s(e).today.today_new_user),1),t("div",at," 总："+r(s(e).today.total_new_user),1)]),t("div",it,[o[9]||(o[9]=t("div",{class:"leading-10"},"新增访问量",-1)),t("div",lt,r(s(e).today.today_visitor),1),t("div",rt," 总："+r(s(e).today.total_visitor),1)])])]),_:1})]),t("div",nt,[n(d,{class:"flex-1 !border-none",shadow:"never"},{header:l(()=>o[10]||(o[10]=[t("span",null,"常用功能",-1)])),default:l(()=>[t("div",dt,[(x(!0),_(W,null,H(s(e).menu,p=>(x(),_("div",{class:"md:w-[12.5%] w-1/4 flex flex-col items-center",key:p},[n(k,{to:p.url,class:"mb-3 flex flex-col items-center"},{default:l(()=>[n(S,{width:"40px",height:"40px",src:p==null?void 0:p.image},null,8,["src"]),t("div",pt,r(p.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),t("div",ct,[n(d,{class:"!border-none mb-4 lg:mb-0 w-full lg:w-2/3",shadow:"never"},{header:l(()=>o[11]||(o[11]=[t("span",null,"访问量趋势图",-1)])),default:l(()=>[t("div",null,[n(s(y),{ref_key:"visitorChart",ref:f,style:{height:"350px"},option:s(e).visitorOption,autoresize:!0},null,8,["option"])])]),_:1}),n(d,{class:"!border-none w-full lg:w-1/3",shadow:"never"},{header:l(()=>o[12]||(o[12]=[t("span",null,"销售额趋势图",-1)])),default:l(()=>[t("div",null,[n(s(y),{ref_key:"saleChart",ref:v,style:{height:"350px"},option:s(e).saleOption,autoresize:!0},null,8,["option"])])]),_:1})])])}}});export{Jt as default};
