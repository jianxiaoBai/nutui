System.register(["./mobile-legacy.2d1a7472.js","./vendor-legacy.0f70f248.js","./index-legacy.7d8e4f21.js"],(function(t){"use strict";var e,n,s,i,o,c,l;return{setters:[function(t){e=t.c,n=t.T},function(t){s=t.r,i=t.o,o=t.e,c=t.j,l=t.g},function(){}],execute:function(){const{createDemo:a}=e("toast"),r=t("default",a({setup:()=>({textToast:t=>{n.text(t)},successToast:t=>{n.success(t)},errorToast:t=>{n.fail(t)},warningToast:t=>{n.warn(t)},loadingToast:t=>{n.loading(t)}})})),u={class:"demo"},d=l("h2",null,"基本用法",-1);r.render=function(t,e,n,l,a,r){const g=s("nut-cell");return i(),o("div",u,[d,c(g,{title:"Text 文字提示","is-link":"",onClick:e[0]||(e[0]=e=>t.textToast("网络失败，请稍后再试~"))}),c(g,{title:"Success 成功提示","is-link":"",onClick:e[1]||(e[1]=e=>t.successToast("成功提示"))}),c(g,{title:"Error 失败提示","is-link":"",onClick:e[2]||(e[2]=e=>t.errorToast("失败提示"))}),c(g,{title:"Warning 警告提示","is-link":"",onClick:e[3]||(e[3]=e=>t.warningToast("警告提示"))}),c(g,{title:"Loading 加载提示","is-link":"",onClick:e[4]||(e[4]=e=>t.loadingToast("加载中"))})])}}}}));
