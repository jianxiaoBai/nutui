import{c as e}from"./mobile.6c29d76a.js";import{r as l,o as r,c as o,f as t,i as a,j as n}from"./vendor.cc24f590.js";import"./index.176c141b.js";const{createDemo:u}=e("uploader");var i=u({setup(){return{onOversize:e=>{console.log("oversize 触发 文件大小不能超过 50kb",e)},beforeUpload:e=>{return l=this,r=null,o=function*(){const l=document.createElement("canvas"),r=l.getContext("2d"),o=yield(e=>new Promise((l=>{const r=new FileReader;r.onloadend=e=>l(e.target.result),r.readAsDataURL(e)})))(e[0]),t=yield(a=o,new Promise((e=>{const l=new Image;l.onload=()=>e(l),l.src=a})));var a;l.width=t.width,l.height=t.height,r.clearRect(0,0,t.width,t.height),r.drawImage(t,0,0,t.width,t.height);let n=yield((e,l,r)=>new Promise((o=>e.toBlob((e=>o(e)),l,r))))(l,"image/jpeg",.5);return[yield new File([n],e[0].name)]},new Promise(((e,t)=>{var a=e=>{try{u(o.next(e))}catch(l){t(l)}},n=e=>{try{u(o.throw(e))}catch(l){t(l)}},u=l=>l.done?e(l.value):Promise.resolve(l.value).then(a,n);u((o=o.apply(l,r)).next())}));var l,r,o},onDelete:(e,l)=>{console.log("delete 事件触发",e,l)},uploadUrl:"https://my-json-server.typicode.com/linrufeng/demo/posts",formData:{custom:"test"}}}});const d={class:"demo bg-w"},s=t("h2",null,"基础用法",-1),m=t("h2",null,"自定义上传样式",-1),c=n("上传文件"),p=t("h2",null,"直接调起摄像头（移动端生效）",-1),h=t("h2",null,"上传状态",-1),v=t("h2",null,"限制上传数量5个",-1),f=t("h2",null,"限制上传大小（每个文件最大不超过 50kb）",-1),w=t("h2",null,"限制上传大小（在beforeupload钩子中处理）",-1),g=t("h2",null,"自定义数据 FormData 、 headers ",-1),b=t("h2",null,"禁用状态",-1);i.render=function(e,n,u,i,y,U){const z=l("nut-uploader"),D=l("nut-button");return r(),o("div",d,[s,t(z,{url:e.uploadUrl,onStart:e.start},null,8,["url","onStart"]),m,t(z,{url:e.uploadUrl},{default:a((()=>[t(D,{type:"primary",icon:"uploader"},{default:a((()=>[c])),_:1})])),_:1},8,["url"]),p,t(z,{capture:""}),h,t(z,{url:e.uploadUrl,multiple:"",onDelete:e.onDelete},null,8,["url","onDelete"]),v,t(z,{url:e.uploadUrl,multiple:"",maximum:"5"},null,8,["url"]),f,t(z,{url:e.uploadUrl,multiple:"",maximize:51200,onOversize:e.onOversize},null,8,["url","onOversize"]),w,t(z,{url:e.uploadUrl,multiple:"","before-upload":e.beforeUpload,maximize:51200,onOversize:e.onOversize},null,8,["url","before-upload","onOversize"]),g,t(z,{url:e.uploadUrl,data:e.formData,headers:e.formData,"with-credentials":!0},null,8,["url","data","headers"]),b,t(z,{disabled:""})])};export default i;
