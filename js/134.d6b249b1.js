"use strict";(self["webpackChunkcsi_appstore"]=self["webpackChunkcsi_appstore"]||[]).push([[134],{6134:function(e,s,c){c.r(s),c.d(s,{default:function(){return p}});var i=c(3396),n=c(7139);const t={class:"container"},o=(0,i._)("h1",{class:"title"},"AppStore - User Device",-1),r={class:"msgBox"},u=(0,i.Uk)(" User Device System："),l={class:"userDevice"},a={key:0},g=(0,i.Uk)(" Mac Device："),h={class:"userDevice"},v={class:"msgBox"},D=(0,i._)("h2",{class:"subTitle"},"Console",-1),M=(0,i._)("br",null,null,-1),d={class:"msgLog"};function k(e,s,c,k,f,m){return(0,i.wg)(),(0,i.iD)("div",t,[o,(0,i._)("ul",r,[(0,i._)("li",null,[u,(0,i._)("span",l,(0,n.zw)(f.userDevice),1)]),"Mac OS"===f.userDevice?((0,i.wg)(),(0,i.iD)("li",a,[g,(0,i._)("span",h,(0,n.zw)(f.userMacDevice),1)])):(0,i.kq)("",!0)]),(0,i._)("div",v,[D,(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.consoleLogMsg,((e,s)=>((0,i.wg)(),(0,i.iD)("li",{key:s},[null!==e?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,n.zw)(s)+"：",1),M,(0,i._)("span",d,(0,n.zw)(e),1)],64)):(0,i.kq)("",!0)])))),128))])])])}var f=c(7273),m={data(){return{consoleLogMsg:{userAgent:null,check1:null,check2:null,check3:null,check4:null,check5:null,iosQuirkPresent:null,isTouchScreen:null,check6:null},userDevice:sessionStorage.getItem("userDevice"),userMacDevice:sessionStorage.getItem("userMacDevice")}},created(){this.getUserDeviceSys()},methods:{getUserDeviceSys(){const e=navigator.userAgent;this.consoleLogMsg.userAgent=e,null===this.userDevice&&(this.consoleLogMsg.check1="Enter user device decide function",f.s.system.forEach((s=>{const c=e.indexOf(s);c>-1&&(this.userDevice=s,this.consoleLogMsg.check2=`Succeed get user device is ${this.userDevice}`,sessionStorage.setItem("userDevice",s))}))),"Mac OS"===this.userDevice&&this.getUserMacDevice(e)},getUserMacDevice(e){if(this.consoleLogMsg.check3="Enter user Mac device decide function",f.s.macList.forEach((s=>{const c=e.indexOf(s);c>-1&&(this.userMacDevice=s,this.consoleLogMsg.check4=`Succeed get user Mac device is ${this.userMacDevice}`)})),null===this.userMacDevice){this.consoleLogMsg.check5="Enter user Mac device other decide function";const e=()=>{const e=new Audio;return e.volume=.5,1===e.volume};this.consoleLogMsg.iosQuirkPresent=e();const s=navigator.maxTouchPoints>=1;this.consoleLogMsg.isTouchScreen=s,this.userMacDevice=s||e()?"iPad":"Mac",this.consoleLogMsg.check6=`Succeed get user Mac device is ${this.userMacDevice}`}sessionStorage.setItem("userMacDevice",this.userMacDevice)}}},S=c(89);const L=(0,S.Z)(m,[["render",k]]);var p=L},7273:function(e,s,c){c.d(s,{r:function(){return n},s:function(){return i}});const i={system:["Win","Android","Mac OS"],macList:["iPhone","iPad"]},n={noName:"未有名稱",noVersion:"未有版本號",noExpirationDate:"未有憑證期限"}}}]);
//# sourceMappingURL=134.d6b249b1.js.map