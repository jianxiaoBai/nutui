import{c as e}from"./mobile.a7fe37c1.js";import{_ as s}from"./index.ccbbeb9f.js";import{a,r as t,e as l,j as o,k as i,B as n,C as d,g as r,o as c,l as u}from"./vendor.9cc7b6f2.js";const{createDemo:p}=e("overlay"),v=p({props:{},setup:()=>({state:a({show:!1,show2:!1})})}),f=e=>(n("data-v-3325d30e"),e=e(),d(),e),b={class:"demo"},h=f((()=>r("h2",null,"基础用法",-1))),m=u("显示遮罩层"),w=f((()=>r("h2",null,"嵌套内容",-1))),_=u("嵌套内容"),y=f((()=>r("div",{class:"wrapper"},[r("div",{class:"content"},"这里是正文")],-1)));var j=s(v,[["render",function(e,s,a,n,d,r){const u=t("nut-button"),p=t("nut-overlay"),v=t("nut-cell");return c(),l("div",b,[h,o(v,null,{default:i((()=>[o(u,{type:"primary",onClick:s[0]||(s[0]=s=>e.state.show=!0)},{default:i((()=>[m])),_:1}),o(p,{visible:e.state.show,"onUpdate:visible":s[1]||(s[1]=s=>e.state.show=s),"z-index":2e3},null,8,["visible"])])),_:1}),w,o(v,null,{default:i((()=>[o(u,{type:"success",onClick:s[2]||(s[2]=s=>e.state.show2=!0)},{default:i((()=>[_])),_:1}),o(p,{visible:e.state.show2,"onUpdate:visible":s[3]||(s[3]=s=>e.state.show2=s),"z-index":2e3},{default:i((()=>[y])),_:1},8,["visible"])])),_:1})])}],["__scopeId","data-v-3325d30e"]]);export{j as default};
