import{c as e}from"./mobile.8c2ebd56.js";import{a as s,m as o,B as r,C as t,r as a,o as l,e as i,g as d,j as n,k as p,J as c,l as u}from"./vendor.6333306b.js";import"./index.2429c8bf.js";const{createDemo:v}=e("circleprogress");var g=v({props:{},setup(){const e=s({radius:50,strokeOutWidth:10,backColor:"#d9d9d9",progressColor:"red"}),r=o(50),t=o(10);return{progressOption:e,isAuto:o(!0),setAddVal:()=>{t.value=10,r.value>=100||(r.value+=10)},setReduceVal:()=>{if(r.value-10<=0)return t.value=0,void(r.value=0);r.value-=10},percent:r}}});r("data-v-57d9cb92");const m={class:"demo full"},_=d("h2",null,"基础用法",-1),f={class:"demo__piece"},k=d("h2",null,"环形进度条自定义样式",-1),b={class:"demo__piece"},h=d("h2",null,"环形进度条自定义内容",-1),C={class:"demo__piece"},j=u("自定义"),y=d("h2",null,"动态改变环形进度条的进度",-1),A={class:"demo__piece"},O={class:"demo__btn"},V=u("减少"),w=u("增加");t(),g.render=function(e,s,o,r,t,u){const v=a("nut-circleprogress"),g=a("nut-button");return l(),i("div",m,[_,d("div",f,[n(v,{progress:10})]),k,d("div",b,[n(v,{progress:50,"progress-option":e.progressOption},null,8,["progress-option"])]),h,d("div",C,[n(v,{progress:50,"is-auto":e.isAuto},{default:p((()=>[c(e.$slots,"default",{},(()=>[j]),{})])),_:3},8,["is-auto"])]),y,d("div",A,[n(v,{progress:e.percent,"progress-option":e.progressOption,"stroke-inner-width":e.strokeInnerWidth},null,8,["progress","progress-option","stroke-inner-width"])]),d("div",O,[n(g,{type:"primary",onClick:e.setReduceVal},{default:p((()=>[V])),_:1},8,["onClick"]),n(g,{type:"primary",onClick:e.setAddVal},{default:p((()=>[w])),_:1},8,["onClick"])])])},g.__scopeId="data-v-57d9cb92";export{g as default};
