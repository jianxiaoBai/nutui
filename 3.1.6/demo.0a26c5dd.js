import{c as t}from"./mobile.a7fe37c1.js";import{_ as e}from"./index.ccbbeb9f.js";import{m as l,r as i,e as s,j as c,k as d,g as o,o as n}from"./vendor.9cc7b6f2.js";const{createDemo:a}=t("cell"),u=a({setup:()=>({testClick:t=>{console.log("点击事件")},switchChecked:l(!0)})}),m={class:"demo"},r=o("h2",null,"基本用法",-1),f=o("h2",null,"直接使用插槽(slot)",-1),h=o("div",null,"自定义内容",-1),k=o("img",{class:"nut-icon",src:"https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"},null,-1),p=o("h2",null,"展示图标",-1),g=o("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);var b=e(u,[["render",function(t,e,l,o,a,u){const b=i("nut-cell"),j=i("nut-cell-group"),C=i("nut-switch");return n(),s("div",m,[r,c(b,{title:"我是标题",desc:"描述文字"}),c(b,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),c(b,{title:"点击测试",onClick:t.testClick},null,8,["onClick"]),c(b,{title:"圆角设置 0","round-radius":"0"}),f,c(b,{title:"我是标题",desc:"描述文字"},{default:d((()=>[h])),_:1}),c(j,{title:"链接 | 分组用法"},{default:d((()=>[c(b,{title:"链接","is-link":""}),c(b,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),c(b,{title:"路由跳转 ’/‘ ",to:"/"})])),_:1}),c(j,{title:"自定义右侧箭头区域"},{default:d((()=>[c(b,{title:"Switch"},{link:d((()=>[c(C,{modelValue:t.switchChecked,"onUpdate:modelValue":e[0]||(e[0]=e=>t.switchChecked=e)},null,8,["modelValue"])])),_:1})])),_:1}),c(j,{title:"自定义左侧 Icon 区域"},{default:d((()=>[c(b,{title:"图片"},{icon:d((()=>[k])),_:1})])),_:1}),p,c(b,{title:"姓名",icon:"my",desc:"张三",isLink:""}),g,c(b,{"desc-text-align":"left",desc:"张三"})])}]]);export{b as default};
