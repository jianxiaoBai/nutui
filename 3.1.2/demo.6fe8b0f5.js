import{c as e}from"./mobile.8c2ebd56.js";import{m as l,r as t,o as a,e as s,j as u,k as n,g as r,l as d}from"./vendor.6333306b.js";import"./index.2429c8bf.js";const{createDemo:o}=e("swipe");var h=o({props:{},setup(){const e=l(),t=l(!1),a=l(0);return{checked:t,number:a,changSwitch:l=>{var t,a;l?null==(t=e.value)||t.open("left"):null==(a=e.value)||a.close()},refSwipe:e,open:e=>{console.log(e),t.value=!0},close:()=>{t.value=!1}}}});const i={class:"demo full"},p=r("h2",null,"基础用法",-1),c=d("删除"),f=r("h2",null,"禁止滑动",-1),g=d("删除"),m=r("h2",null,"左右滑动",-1),y=d("选择"),_=d("删除"),b=d("收藏"),v=r("h2",null,"异步控制",-1),q=d("删除"),w=r("h2",null,"自定义",-1),k=d("选择"),V=d("删除"),j=d("收藏");h.render=function(e,l,r,d,o,h){const x=t("nut-cell"),C=t("nut-button"),S=t("nut-swipe"),O=t("nut-switch"),U=t("nut-inputnumber");return a(),s("div",i,[p,u(S,null,{right:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"danger"},{default:n((()=>[c])),_:1})])),default:n((()=>[u(x,{"round-radius":"0",desc:"左滑删除"})])),_:1}),f,u(S,{disabled:""},{right:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"danger"},{default:n((()=>[g])),_:1})])),default:n((()=>[u(x,{"round-radius":"0",desc:"禁止滑动"})])),_:1}),m,u(S,null,{left:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"success"},{default:n((()=>[y])),_:1})])),right:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"danger"},{default:n((()=>[_])),_:1}),u(C,{shape:"square",style:{height:"100%"},type:"info"},{default:n((()=>[b])),_:1})])),default:n((()=>[u(x,{"round-radius":"0",desc:"左滑右滑都可以哦"})])),_:1}),v,u(S,{ref:"refSwipe",onOpen:e.open,onClose:e.close},{right:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"danger"},{default:n((()=>[q])),_:1})])),default:n((()=>[u(x,{title:"异步打开关闭"},{link:n((()=>[u(O,{modelValue:e.checked,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked=l),onChange:e.changSwitch,"active-text":"开","inactive-text":"关"},null,8,["modelValue","onChange"])])),_:1})])),_:1},8,["onOpen","onClose"]),w,u(S,null,{left:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"success"},{default:n((()=>[k])),_:1})])),right:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"danger"},{default:n((()=>[V])),_:1}),u(C,{shape:"square",style:{height:"100%"},type:"info"},{default:n((()=>[j])),_:1})])),default:n((()=>[u(x,{title:"商品描述"},{link:n((()=>[u(U,{modelValue:e.number,"onUpdate:modelValue":l[1]||(l[1]=l=>e.number=l)},null,8,["modelValue"])])),_:1})])),_:1})])};export{h as default};
