import{c as e}from"./mobile.a7fe37c1.js";import{_ as s}from"./index.ccbbeb9f.js";import{r as l,e as o,j as n,k as a,B as r,C as t,g as d,o as i,F as c,i as f,t as u}from"./vendor.9cc7b6f2.js";const{createDemo:h}=e("pullrefresh"),p=h({props:{},setup:()=>({refresh:e=>{console.log("上拉加载"),setTimeout((()=>{e()}),1e3)},downRefresh:e=>{console.log("下拉刷新"),setTimeout((()=>{e()}),1e3)}})}),v=e=>(r("data-v-02779db4"),e=e(),t(),e),m={class:"demo full"},R=v((()=>d("h2",null,"纵向",-1))),w={class:"vertical"},b={class:"content",id:"pull"},_={class:"main"},D=v((()=>d("h2",null,"横向",-1))),j={class:"horizontal"},H={class:"contentH",id:"pullH"},g={class:"mainH"};var k=s(p,[["render",function(e,s,r,t,h,p){const v=l("nut-pullrefresh"),k=l("nut-cell");return i(),o("div",m,[R,n(k,null,{default:a((()=>[d("div",w,[n(v,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pull"},{default:a((()=>[d("div",b,[d("div",_,[(i(),o(c,null,f([1,2,3,4,5,6,7,8,9],(e=>d("div",{class:"pull-data",key:e},"我是测试数据 "+u(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1}),D,n(k,null,{default:a((()=>[d("div",j,[n(v,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pullH",direction:"horizontal"},{default:a((()=>[d("div",H,[d("div",g,[(i(),o(c,null,f([1,2,3,4,5,6,7,8,9],(e=>d("div",{class:"pull-data",key:e},"我是测试数据 "+u(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1})])}],["__scopeId","data-v-02779db4"]]);export{k as default};
