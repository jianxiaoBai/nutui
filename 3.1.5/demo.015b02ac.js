import{c as e}from"./mobile.77da4ca9.js";import{m as l,W as a,r as n,o as c,e as d,j as o,k as u,g as t}from"./vendor.92dabd7f.js";import"./index.f7d754e2.js";const{createDemo:h}=e("switch");var s=h({setup(){let{proxy:e}=a();const n=l(!0),c=l(!0);return{checked:n,checkedAsync:c,change:(l,a)=>{e.$toast.text(`触发了change事件，开关状态：${l}`)},changeAsync:(l,a)=>{e.$toast.text(`2秒后异步触发 ${l}`),setTimeout((()=>{c.value=l}),2e3)}}}});const m={class:"demo"},r=t("h2",null,"基础用法",-1),g=t("h2",null,"禁用状态",-1),i=t("h2",null,"change事件",-1),V=t("h2",null,"异步控制",-1),k=t("h2",null,"自定义颜色",-1),f=t("h2",null,"支持文字",-1);s.render=function(e,l,a,t,h,s){const p=n("nut-switch"),C=n("nut-cell");return c(),d("div",m,[r,o(C,null,{default:u((()=>[o(p,{modelValue:e.checked,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked=l)},null,8,["modelValue"])])),_:1}),g,o(C,null,{default:u((()=>[o(p,{modelValue:e.checked,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked=l),disable:""},null,8,["modelValue"])])),_:1}),i,o(C,null,{default:u((()=>[o(p,{modelValue:e.checked,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked=l),onChange:e.change},null,8,["modelValue","onChange"])])),_:1}),V,o(C,null,{default:u((()=>[o(p,{"model-value":e.checkedAsync,onChange:e.changeAsync},null,8,["model-value","onChange"])])),_:1}),k,o(C,null,{default:u((()=>[o(p,{modelValue:e.checked,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checked=l),onChange:e.switchChange,"active-color":"blue"},null,8,["modelValue","onChange"])])),_:1}),f,o(C,null,{default:u((()=>[o(p,{modelValue:e.checked,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checked=l),onChange:e.switchChange,"active-text":"开","inactive-text":"关"},null,8,["modelValue","onChange"])])),_:1})])};export{s as default};