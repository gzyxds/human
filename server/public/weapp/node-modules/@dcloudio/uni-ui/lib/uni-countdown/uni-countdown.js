"use strict";const t=require("../../../../../common/vendor.js"),{t:e}=t.initVueI18n(t.messages$1),o={name:"UniCountdown",emits:["timeup"],props:{showDay:{type:Boolean,default:!0},showHour:{type:Boolean,default:!0},showMinute:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},start:{type:Boolean,default:!0},backgroundColor:{type:String,default:""},color:{type:String,default:"#333"},fontSize:{type:Number,default:14},splitorColor:{type:String,default:"#333"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0},timestamp:{type:Number,default:0},filterShow:{type:Object,default:{}}},data:()=>({timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}),computed:{dayText:()=>e("uni-countdown.day"),hourText:t=>e("uni-countdown.h"),minuteText:t=>e("uni-countdown.m"),secondText:t=>e("uni-countdown.s"),timeStyle(){const{color:t,backgroundColor:e,fontSize:o}=this;return{color:t,backgroundColor:e,fontSize:`${o}px`,width:22*o/14+"px",lineHeight:20*o/14+"px",borderRadius:3*o/14+"px"}},splitorStyle(){const{splitorColor:t,fontSize:e,backgroundColor:o}=this;return{color:t,fontSize:12*e/14+"px",margin:o?4*e/14+"px":""}}},watch:{day(t){this.changeFlag()},hour(t){this.changeFlag()},minute(t){this.changeFlag()},second(t){this.changeFlag()},start:{immediate:!0,handler(t,e){if(t)this.startData();else{if(!e)return;clearInterval(this.timer)}}}},created:function(t){this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.countDown()},unmounted(){clearInterval(this.timer)},methods:{toSeconds:(t,e,o,s,i)=>t?t-parseInt((new Date).getTime()/1e3,10):60*e*60*24+60*o*60+60*s+i,timeUp(){clearInterval(this.timer),this.$emit("timeup")},countDown(){let t=this.seconds,[e,o,s,i]=[0,0,0,0];t>0?(e=Math.floor(t/86400),o=Math.floor(t/3600)-24*e,s=Math.floor(t/60)-24*e*60-60*o,i=Math.floor(t)-24*e*60*60-60*o*60-60*s):this.timeUp(),this.d=String(e).padStart(this.validFilterShow(this.filterShow.d),"0"),this.h=String(o).padStart(this.validFilterShow(this.filterShow.h),"0"),this.i=String(s).padStart(this.validFilterShow(this.filterShow.m),"0"),this.s=String(i).padStart(this.validFilterShow(this.filterShow.s),"0")},validFilterShow:t=>t&&t>0?t:2,startData(){if(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.seconds<=0)return this.seconds=this.toSeconds(0,0,0,0,0),void this.countDown();clearInterval(this.timer),this.countDown(),this.timer=setInterval((()=>{this.seconds--,this.seconds<0?this.timeUp():this.countDown()}),1e3)},update(){this.startData()},changeFlag(){this.syncFlag||(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};const s=t._export_sfc(o,[["render",function(e,o,s,i,n,h){return t.e({a:s.showDay},s.showDay?{b:t.t(n.d),c:t.s(h.timeStyle)}:{},{d:s.showDay},s.showDay?{e:t.t(h.dayText),f:t.s(h.splitorStyle)}:{},{g:s.showHour},s.showHour?{h:t.t(n.h),i:t.s(h.timeStyle)}:{},{j:s.showHour},s.showHour?{k:t.t(s.showColon?":":h.hourText),l:t.s(h.splitorStyle)}:{},{m:s.showMinute},s.showMinute?{n:t.t(n.i),o:t.s(h.timeStyle)}:{},{p:s.showMinute},s.showMinute?{q:t.t(s.showColon?":":h.minuteText),r:t.s(h.splitorStyle)}:{},{s:t.t(n.s),t:t.s(h.timeStyle),v:!s.showColon},s.showColon?{}:{w:t.t(h.secondText),x:t.s(h.splitorStyle)})}],["__scopeId","data-v-436ff7ef"]]);wx.createComponent(s);
