import{q as ne,s as re,u as G,x as K,y as H,r as O,z as le,A as oe,B as Q,C as ie,D as q,w as D,b as C,E as se,G as ue}from"./@vue-CGao7vbS.js";function j(e){return ne()?(re(e),!0):!1}function M(e){return typeof e=="function"?e():le(e)}const U=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ae=e=>typeof e<"u",ce=Object.prototype.toString,fe=e=>ce.call(e)==="[object Object]",I=()=>{};function Y(e,n){function t(...i){return new Promise((r,l)=>{Promise.resolve(e(()=>n.apply(this,i),{fn:n,thisArg:this,args:i})).then(r).catch(l)})}return t}const X=e=>e();function de(...e){let n=0,t,i=!0,r=I,l,u,o,a,v;!G(e[0])&&typeof e[0]=="object"?{delay:u,trailing:o=!0,leading:a=!0,rejectOnCancel:v=!1}=e[0]:[u,o=!0,a=!0,v=!1]=e;const m=()=>{t&&(clearTimeout(t),t=void 0,r(),r=I)};return h=>{const f=M(u),g=Date.now()-n,p=()=>l=h();return m(),f<=0?(n=Date.now(),p()):(g>f&&(a||!i)?(n=Date.now(),p()):o&&(l=new Promise((S,c)=>{r=v?c:S,t=setTimeout(()=>{n=Date.now(),i=!0,S(p()),m()},Math.max(0,f-g))})),!a&&!t&&(t=setTimeout(()=>i=!0,f)),i=!1,l)}}function ve(e=X){const n=O(!0);function t(){n.value=!1}function i(){n.value=!0}const r=(...l)=>{n.value&&e(...l)};return{isActive:Q(n),pause:t,resume:i,eventFilter:r}}function me(e){return q()}function he(...e){if(e.length!==1)return oe(...e);const n=e[0];return typeof n=="function"?Q(ie(()=>({get:n,set:I}))):O(n)}function Te(e,n=200,t=!1,i=!0,r=!1){return Y(de(n,t,i,r),e)}function pe(e,n,t={}){const{eventFilter:i=X,...r}=t;return D(e,Y(i,n),r)}function ge(e,n,t={}){const{eventFilter:i,...r}=t,{eventFilter:l,pause:u,resume:o,isActive:a}=ve(i);return{stop:pe(e,n,{...r,eventFilter:l}),pause:u,resume:o,isActive:a}}function B(e,n=!0,t){me()?K(e,t):n?e():H(e)}function De(e=!1,n={}){const{truthyValue:t=!0,falsyValue:i=!1}=n,r=G(e),l=O(e);function u(o){if(arguments.length)return l.value=o,l.value;{const a=M(t);return l.value=l.value===a?M(i):a,l.value}}return r?u:[l,u]}function A(e){var n;const t=M(e);return(n=t==null?void 0:t.$el)!=null?n:t}const _=U?window:void 0,we=U?window.document:void 0;function V(...e){let n,t,i,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,i,r]=e,n=_):[n,t,i,r]=e,!n)return I;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const l=[],u=()=>{l.forEach(m=>m()),l.length=0},o=(m,s,h,f)=>(m.addEventListener(s,h,f),()=>m.removeEventListener(s,h,f)),a=D(()=>[A(n),M(r)],([m,s])=>{if(u(),!m)return;const h=fe(s)?{...s}:s;l.push(...t.flatMap(f=>i.map(g=>o(m,f,g,h))))},{immediate:!0,flush:"post"}),v=()=>{a(),u()};return j(v),v}function ye(){const e=O(!1),n=q();return n&&K(()=>{e.value=!0},n),e}function J(e){const n=ye();return C(()=>(n.value,!!e()))}function Z(e,n={}){const{window:t=_}=n,i=J(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const l=O(!1),u=v=>{l.value=v.matches},o=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",u):r.removeListener(u))},a=se(()=>{i.value&&(o(),r=t.matchMedia(M(e)),"addEventListener"in r?r.addEventListener("change",u):r.addListener(u),l.value=r.matches)});return j(()=>{a(),o(),r=void 0}),l}function Se(e){return JSON.parse(JSON.stringify(e))}const W=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__",be=Ee();function Ee(){return L in W||(W[L]=W[L]||{}),W[L]}function ee(e,n){return be[e]||n}function Fe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Ce={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},P="vueuse-storage";function Oe(e,n,t,i={}){var r;const{flush:l="pre",deep:u=!0,listenToStorageChanges:o=!0,writeDefaults:a=!0,mergeDefaults:v=!1,shallow:m,window:s=_,eventFilter:h,onError:f=d=>{console.error(d)},initOnMounted:g}=i,p=(m?ue:O)(typeof n=="function"?n():n);if(!t)try{t=ee("getDefaultStorage",()=>{var d;return(d=_)==null?void 0:d.localStorage})()}catch(d){f(d)}if(!t)return p;const S=M(n),c=Fe(S),k=(r=i.serializer)!=null?r:Ce[c],{pause:E,resume:y}=ge(p,()=>x(p.value),{flush:l,deep:u,eventFilter:h});s&&o&&B(()=>{t instanceof Storage?V(s,"storage",T):V(s,P,R),g&&T()}),g||T();function F(d,w){if(s){const b={key:e,oldValue:d,newValue:w,storageArea:t};s.dispatchEvent(t instanceof Storage?new StorageEvent("storage",b):new CustomEvent(P,{detail:b}))}}function x(d){try{const w=t.getItem(e);if(d==null)F(w,null),t.removeItem(e);else{const b=k.write(d);w!==b&&(t.setItem(e,b),F(w,b))}}catch(w){f(w)}}function N(d){const w=d?d.newValue:t.getItem(e);if(w==null)return a&&S!=null&&t.setItem(e,k.write(S)),S;if(!d&&v){const b=k.read(w);return typeof v=="function"?v(b,S):c==="object"&&!Array.isArray(b)?{...S,...b}:b}else return typeof w!="string"?w:k.read(w)}function T(d){if(!(d&&d.storageArea!==t)){if(d&&d.key==null){p.value=S;return}if(!(d&&d.key!==e)){E();try{(d==null?void 0:d.newValue)!==k.write(p.value)&&(p.value=N(d))}catch(w){f(w)}finally{d?H(y):y()}}}}function R(d){T(d.detail)}return p}function te(e){return Z("(prefers-color-scheme: dark)",e)}const ke="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Ae(e={}){const{selector:n="html",attribute:t="class",initialValue:i="auto",window:r=_,storage:l,storageKey:u="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:a,emitAuto:v,disableTransition:m=!0}=e,s={auto:"",light:"light",dark:"dark",...e.modes||{}},h=te({window:r}),f=C(()=>h.value?"dark":"light"),g=a||(u==null?he(i):Oe(u,i,l,{window:r,listenToStorageChanges:o})),p=C(()=>g.value==="auto"?f.value:g.value),S=ee("updateHTMLAttrs",(y,F,x)=>{const N=typeof y=="string"?r==null?void 0:r.document.querySelector(y):A(y);if(!N)return;const T=new Set,R=new Set;let d=null;if(F==="class"){const b=x.split(/\s/g);Object.values(s).flatMap(z=>(z||"").split(/\s/g)).filter(Boolean).forEach(z=>{b.includes(z)?T.add(z):R.add(z)})}else d={key:F,value:x};if(T.size===0&&R.size===0&&d===null)return;let w;m&&(w=r.document.createElement("style"),w.appendChild(document.createTextNode(ke)),r.document.head.appendChild(w));for(const b of T)N.classList.add(b);for(const b of R)N.classList.remove(b);d&&N.setAttribute(d.key,d.value),m&&(r.getComputedStyle(w).opacity,document.head.removeChild(w))});function c(y){var F;S(n,t,(F=s[y])!=null?F:y)}function k(y){e.onChanged?e.onChanged(y,c):c(y)}D(p,k,{flush:"post",immediate:!0}),B(()=>k(p.value));const E=C({get(){return v?g.value:p.value},set(y){g.value=y}});try{return Object.assign(E,{store:g,system:f,state:p})}catch{return E}}function Me(e={}){const{valueDark:n="dark",valueLight:t="",window:i=_}=e,r=Ae({...e,onChanged:(o,a)=>{var v;e.onChanged?(v=e.onChanged)==null||v.call(e,o==="dark",a,o):a(o)},modes:{dark:n,light:t}}),l=C(()=>r.system?r.system.value:te({window:i}).value?"dark":"light");return C({get(){return r.value==="dark"},set(o){const a=o?"dark":"light";l.value===a?r.value="auto":r.value=a}})}function xe(e,n,t={}){const{window:i=_,...r}=t;let l;const u=J(()=>i&&"ResizeObserver"in i),o=()=>{l&&(l.disconnect(),l=void 0)},a=C(()=>{const s=M(e);return Array.isArray(s)?s.map(h=>A(h)):[A(s)]}),v=D(a,s=>{if(o(),u.value&&i){l=new ResizeObserver(n);for(const h of s)h&&l.observe(h,r)}},{immediate:!0,flush:"post"}),m=()=>{o(),v()};return j(m),{isSupported:u,stop:m}}function Ne(e,n={width:0,height:0},t={}){const{window:i=_,box:r="content-box"}=t,l=C(()=>{var s,h;return(h=(s=A(e))==null?void 0:s.namespaceURI)==null?void 0:h.includes("svg")}),u=O(n.width),o=O(n.height),{stop:a}=xe(e,([s])=>{const h=r==="border-box"?s.borderBoxSize:r==="content-box"?s.contentBoxSize:s.devicePixelContentBoxSize;if(i&&l.value){const f=A(e);if(f){const g=f.getBoundingClientRect();u.value=g.width,o.value=g.height}}else if(h){const f=Array.isArray(h)?h:[h];u.value=f.reduce((g,{inlineSize:p})=>g+p,0),o.value=f.reduce((g,{blockSize:p})=>g+p,0)}else u.value=s.contentRect.width,o.value=s.contentRect.height},t);B(()=>{const s=A(e);s&&(u.value="offsetWidth"in s?s.offsetWidth:n.width,o.value="offsetHeight"in s?s.offsetHeight:n.height)});const v=D(()=>A(e),s=>{u.value=s?n.width:0,o.value=s?n.height:0});function m(){a(),v()}return{width:u,height:o,stop:m}}const $=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Re(e,n={}){const{document:t=we,autoExit:i=!1}=n,r=C(()=>{var c;return(c=A(e))!=null?c:t==null?void 0:t.querySelector("html")}),l=O(!1),u=C(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(c=>t&&c in t||r.value&&c in r.value)),o=C(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(c=>t&&c in t||r.value&&c in r.value)),a=C(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(c=>t&&c in t||r.value&&c in r.value)),v=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(c=>t&&c in t),m=J(()=>r.value&&t&&u.value!==void 0&&o.value!==void 0&&a.value!==void 0),s=()=>v?(t==null?void 0:t[v])===r.value:!1,h=()=>{if(a.value){if(t&&t[a.value]!=null)return t[a.value];{const c=r.value;if((c==null?void 0:c[a.value])!=null)return!!c[a.value]}}return!1};async function f(){if(!(!m.value||!l.value)){if(o.value)if((t==null?void 0:t[o.value])!=null)await t[o.value]();else{const c=r.value;(c==null?void 0:c[o.value])!=null&&await c[o.value]()}l.value=!1}}async function g(){if(!m.value||l.value)return;h()&&await f();const c=r.value;u.value&&(c==null?void 0:c[u.value])!=null&&(await c[u.value](),l.value=!0)}async function p(){await(l.value?f():g())}const S=()=>{const c=h();(!c||c&&s())&&(l.value=c)};return V(t,$,S,!1),V(()=>A(r),$,S,!1),i&&j(f),{isSupported:m,isFullscreen:l,enter:g,exit:f,toggle:p}}function ze(e,n,t,i={}){var r,l,u;const{clone:o=!1,passive:a=!1,eventName:v,deep:m=!1,defaultValue:s,shouldEmit:h}=i,f=q(),g=t||(f==null?void 0:f.emit)||((r=f==null?void 0:f.$emit)==null?void 0:r.bind(f))||((u=(l=f==null?void 0:f.proxy)==null?void 0:l.$emit)==null?void 0:u.bind(f==null?void 0:f.proxy));let p=v;n||(n="modelValue"),p=p||`update:${n.toString()}`;const S=E=>o?typeof o=="function"?o(E):Se(E):E,c=()=>ae(e[n])?S(e[n]):s,k=E=>{h?h(E)&&g(p,E):g(p,E)};if(a){const E=c(),y=O(E);let F=!1;return D(()=>e[n],x=>{F||(F=!0,y.value=S(x),H(()=>F=!1))}),D(y,x=>{!F&&(x!==e[n]||m)&&k(x)},{deep:m}),y}else return C({get(){return c()},set(E){k(E)}})}function Ve(e={}){const{window:n=_,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:l=!0,type:u="inner"}=e,o=O(t),a=O(i),v=()=>{n&&(u==="outer"?(o.value=n.outerWidth,a.value=n.outerHeight):l?(o.value=n.innerWidth,a.value=n.innerHeight):(o.value=n.document.documentElement.clientWidth,a.value=n.document.documentElement.clientHeight))};if(v(),B(v),V("resize",v,{passive:!0}),r){const m=Z("(orientation: portrait)");D(m,()=>v())}return{width:o,height:a}}export{De as a,Re as b,V as c,Ve as d,Te as e,ze as f,Ne as g,Me as u};
