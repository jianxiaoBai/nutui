import{c as s,T as t}from"./mobile.8c2ebd56.js";import{r as o,o as i,e as a,j as e,g as n}from"./vendor.6333306b.js";import"./index.2429c8bf.js";const{createDemo:l}=s("toast"),r=l({setup:()=>({textToast:s=>{t.text(s)},successToast:s=>{t.success(s)},errorToast:s=>{t.fail(s)},warningToast:s=>{t.warn(s)},loadingToast:s=>{t.loading(s)}})}),c={class:"demo"},T=n("h2",null,"基本用法",-1);r.render=function(s,t,n,l,r,d){const k=o("nut-cell");return i(),a("div",c,[T,e(k,{title:"Text 文字提示","is-link":"",onClick:t[0]||(t[0]=t=>s.textToast("网络失败，请稍后再试~"))}),e(k,{title:"Success 成功提示","is-link":"",onClick:t[1]||(t[1]=t=>s.successToast("成功提示"))}),e(k,{title:"Error 失败提示","is-link":"",onClick:t[2]||(t[2]=t=>s.errorToast("失败提示"))}),e(k,{title:"Warning 警告提示","is-link":"",onClick:t[3]||(t[3]=t=>s.warningToast("警告提示"))}),e(k,{title:"Loading 加载提示","is-link":"",onClick:t[4]||(t[4]=t=>s.loadingToast("加载中"))})])};export{r as default};
