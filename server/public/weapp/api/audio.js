"use strict";const e=require("../composables/useRequest.js");exports.apiGetCloneVoiceList=function(t){return e.useGetRequest("/voice.record/lists",t)},exports.apiGetVoiceList=function(t){return e.useGetRequest("/voice.voice/lists",t)},exports.apiPostCloneVoiceDelete=function(t){return e.usePostRequest("/voice.record/delete",t)},exports.apiPostVoiceCreate=function(t){return e.usePostRequest("/voice.voice/add",t)},exports.apiPostVoiceDelete=function(t){return e.usePostRequest("/voice.voice/delete",t)};
