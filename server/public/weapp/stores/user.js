"use strict";const e=require("../common/vendor.js"),n=require("../api/user.js"),a=require("../enums/variableEnum.js"),r=e.defineStore("user",(()=>{const r=e.index.getStorageSync(a.VariableEnum.USER_TOKEN)||null,u=Number(e.index.getStorageSync(a.VariableEnum.LOGIN_TIME_STAMP).value||0),l=e.ref(r),o=e.ref(null),t=e.ref(u),i=e.computed((()=>null!==l.value&&void 0!==l.value)),s=()=>{l.value=null,t.value=0,e.index.removeStorageSync(a.VariableEnum.USER_TOKEN),e.index.removeStorageSync(a.VariableEnum.LOGIN_TIME_STAMP)},S=async()=>{o.value=await n.apiGetUser()},v=n=>{l.value=n,e.index.setStorageSync(a.VariableEnum.USER_TOKEN,n)};return{token:l,isLogin:i,setToken:v,clearToken:s,userInfo:o,login:async e=>{l.value=e,v(e),S()},getUser:S,logout:async()=>{s(),o.value=null},refreshToken:()=>{Date.now()-t.value>=25200&&(t.value=Date.now(),e.index.setStorageSync(a.VariableEnum.LOGIN_TIME_STAMP,t.value))}}}));exports.useUserStore=r;
