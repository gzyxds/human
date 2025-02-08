import{_,bX as w,o as c,A as p,bP as $,w as n,O as b,b as i,x as T,q as B,G as S,H as y,f as A,bY as H,bZ as V,b_ as D,b$ as F,J as O,K as k,L as h,a$ as P,b2 as d,P as v,a as z,v as C,B as L,b0 as N}from"./iBiA3qHo.js";import{_ as R}from"./Cb4KlQxU.js";const j={wrapper:"fixed inset-0 flex z-50",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},base:"relative flex-1 flex flex-col w-full focus:outline-none",background:"bg-white dark:bg-gray-900",ring:"",rounded:"",padding:"",shadow:"shadow-xl",width:"w-screen max-w-md",height:"h-screen max-h-96",translate:{base:"translate-x-0",left:"-translate-x-full rtl:translate-x-full",right:"translate-x-full rtl:-translate-x-full",top:"-translate-y-full",bottom:"translate-y-full"},transition:{enter:"transform transition ease-in-out duration-300",leave:"transform transition ease-in-out duration-200"}},I={name:w,props:{placeholder:String,tag:{type:String,default:"span"}}};function U(e,o,a,u,r,f){const l=R;return c(),p(l,{placeholder:a.placeholder,"placeholder-tag":a.tag},$({default:n(()=>[b(e.$slots,"default")]),_:2},[a.placeholder?void 0:{name:"fallback",fn:n(()=>[b(e.$slots,"placeholder")]),key:"0"}]),1032,["placeholder","placeholder-tag"])}const q=_(I,[["render",U]]),G={};function M(e,o){const a=T,u=B,r=q;return c(),p(r,null,{default:n(()=>[i(u,{class:"relative",color:"gray",square:"",variant:"ghost",onClick:o[0]||(o[0]=()=>e.$colorMode.preference=e.$colorMode.value==="dark"?"light":"dark")},{default:n(()=>[i(a,{name:"tabler:sun-high",class:"h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),i(a,{name:"tabler:moon",class:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 text-xl transition-all dark:rotate-0 dark:scale-100"})]),_:1})]),_:1})}const E=_(G,[["render",M]]),Y=S(y.ui.strategy,y.ui.slideover,j),J=A({components:{HDialog:H,HDialogPanel:V,TransitionRoot:D,TransitionChild:F},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right","top","bottom"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:o}){const{ui:a,attrs:u}=O("slideover",k(e,"ui"),Y,k(e,"class")),r=h({get(){return e.modelValue},set(t){o("update:modelValue",t)}}),f=h(()=>{if(!e.transition)return{};let t,s;switch(e.side){case"left":t=a.value.translate.left,s=a.value.translate.left;break;case"right":t=a.value.translate.right,s=a.value.translate.right;break;case"top":t=a.value.translate.top,s=a.value.translate.top;break;case"bottom":t=a.value.translate.bottom,s=a.value.translate.bottom;break;default:t=a.value.translate.right,s=a.value.translate.right}return{...a.value.transition,enterFrom:t,enterTo:a.value.translate.base,leaveFrom:a.value.translate.base,leaveTo:s}}),l=h(()=>{switch(e.side){case"left":return"horizontal";case"right":return"horizontal";case"top":return"vertical";case"bottom":return"vertical";default:return"right"}});function m(t){if(e.preventClose){o("close-prevented");return}r.value=t,o("close")}const g=()=>{o("after-leave")};return P(()=>N()),{ui:a,attrs:u,isOpen:r,transitionClass:f,sideType:l,onAfterLeave:g,close:m}}});function K(e,o,a,u,r,f){const l=d("TransitionChild"),m=d("HDialogPanel"),g=d("HDialog"),t=d("TransitionRoot");return c(),p(t,{as:"template",appear:e.appear,show:e.isOpen,onAfterLeave:e.onAfterLeave},{default:n(()=>[i(g,v({class:[e.ui.wrapper,{"justify-end":e.side==="right"},{"items-end":e.side==="bottom"}]},e.attrs,{onClose:e.close}),{default:n(()=>[e.overlay?(c(),p(l,v({key:0,as:"template",appear:e.appear},e.ui.overlay.transition,{class:e.ui.overlay.transition.enterFrom}),{default:n(()=>[z("div",{class:C([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear","class"])):L("",!0),i(l,v({as:"template",appear:e.appear},e.transitionClass,{class:e.transitionClass.enterFrom}),{default:n(()=>[i(m,{class:C([e.ui.base,e.sideType==="horizontal"?[e.ui.width,"h-full"]:[e.ui.height,"w-full"],e.ui.background,e.ui.ring,e.ui.rounded,e.ui.padding,e.ui.shadow])},{default:n(()=>[b(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear","class"])]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const Q=_(J,[["render",K]]);export{E as _,Q as a};
