var e=Object.defineProperty,s=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,n=(s,o,t)=>o in s?e(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t,c=(e,c)=>{for(var l in c||(c={}))s.call(c,l)&&n(e,l,c[l]);if(o)for(var l of o(c))t.call(c,l)&&n(e,l,c[l]);return e};import{c as l}from"./mobile.6c29d76a.js";import{a,k as i,A as d,x as r,y as m,r as u,o as h,c as p,f as y,s as w}from"./vendor.cc24f590.js";import"./index.176c141b.js";const{createDemo:v}=l("address");var b=v({props:{},setup(){const e=a({province:[{id:1,name:"北京"},{id:2,name:"广西"},{id:3,name:"江西"},{id:4,name:"四川"}],city:[{id:7,name:"朝阳区"},{id:8,name:"崇文区"},{id:9,name:"昌平区"},{id:6,name:"石景山区"}],country:[{id:3,name:"八里庄街道"},{id:9,name:"北苑"},{id:4,name:"常营乡"}],town:[]}),s=a({normal:!1,exist:!1,customImg:!1,other:!1}),o=a({selectedIcon:"heart-fill",defaultIcon:"heart1",closeBtnIcon:"close",backBtnIcon:"left"}),t=i([{id:1,addressDetail:"th ",cityName:"石景山区",countyName:"城区",provinceName:"北京",selectedAddress:!0,townName:""},{id:2,addressDetail:"12_ ",cityName:"电饭锅",countyName:"扶绥县",provinceName:"北京",selectedAddress:!1,townName:""},{id:3,addressDetail:"发大水比 ",cityName:"放到",countyName:"广宁街道",provinceName:"钓鱼岛全区",selectedAddress:!1,townName:""},{id:4,addressDetail:"还是想吧百度吧 ",cityName:"研发",countyName:"八里庄街道",provinceName:"北京",selectedAddress:!1,townName:""}]),n=a({one:"请选择地址",two:"请选择地址",three:"请选择地址",four:"请选择地址"});return c(c(c(c({showAddress:()=>{s.normal=!s.normal},showPopup:s,onChange:(o,t)=>{e[o.next].length<1&&(s[t]=!1)},close1:e=>{console.log(e),n.one=e.data.addressStr},showAddressExist:()=>{s.exist=!0},close2:e=>{if(console.log(e),"exist"==e.type){const{provinceName:s,cityName:o,countyName:t,townName:c,addressDetail:l}=e.data;n.two=s+o+t+c+l}else n.two=e.data.addressStr},selected:(e,s,o)=>{console.log(e),console.log(s)},existAddress:t,showAddressOther:()=>{s.other=!0},showCustomImg:()=>{s.customImg=!0},close3:e=>{if(console.log(e),"exist"==e.type){const{provinceName:s,cityName:o,countyName:t,townName:c,addressDetail:l}=e.data;n.three=s+o+t+c+l}else n.three=e.data.addressStr},close4:e=>{if(console.log(e),"exist"==e.type){const{provinceName:s,cityName:o,countyName:t,townName:c,addressDetail:l}=e.data;n.four=s+o+t+c+l}else n.four=e.data.addressStr},switchModule:e=>{"custom"==e.type?console.log("点击了“选择其他地址”按钮"):console.log("点击了自定义地址左上角的返回按钮")},closeMask:e=>{console.log("关闭弹层",e)}},d(o)),d(n)),d(s)),d(e))}});const x=w();r("data-v-635665aa");const C={class:"demo"},g=y("h2",null,"选择自定义地址",-1),N=y("h2",null,"选择已有地址",-1),f=y("h2",null,"自定义图标",-1),k=y("h2",null,"自定义地址与已有地址切换",-1);m();const I=x(((e,s,o,t,n,c)=>{const l=u("nut-cell"),a=u("nut-address");return h(),p("div",C,[g,y(l,{title:"选择地址",desc:e.one,"is-link":"",onClick:e.showAddress},null,8,["desc","onClick"]),y(a,{visible:e.normal,"onUpdate:visible":s[1]||(s[1]=s=>e.normal=s),province:e.province,city:e.city,country:e.country,town:e.town,onChange:s[2]||(s[2]=s=>e.onChange(s,"normal")),onClose:e.close1,"custom-address-title":"请选择所在地区"},null,8,["visible","province","city","country","town","onClose"]),N,y(l,{title:"选择地址",desc:e.two,"is-link":"",onClick:e.showAddressExist},null,8,["desc","onClick"]),y(a,{visible:e.exist,"onUpdate:visible":s[3]||(s[3]=s=>e.exist=s),type:"exist","exist-address":e.existAddress,onChange:s[4]||(s[4]=s=>e.onChange(s,"exist")),onClose:e.close2,"is-show-custom-address":!1,onSelected:e.selected,"exist-address-title":"配送至"},null,8,["visible","exist-address","onClose","onSelected"]),f,y(l,{title:"选择地址",desc:e.three,"is-link":"",onClick:e.showCustomImg},null,8,["desc","onClick"]),y(a,{visible:e.customImg,"onUpdate:visible":s[5]||(s[5]=s=>e.customImg=s),type:"exist","exist-address":e.existAddress,onChange:s[6]||(s[6]=s=>e.onChange(s,"customImg")),onClose:e.close3,"is-show-custom-address":!1,onSelected:e.selected,"default-icon":e.defaultIcon,"selected-icon":e.selectedIcon,"close-btn-icon":e.closeBtnIcon},null,8,["visible","exist-address","onClose","onSelected","default-icon","selected-icon","close-btn-icon"]),k,y(l,{title:"选择地址",desc:e.four,"is-link":"",onClick:e.showAddressOther},null,8,["desc","onClick"]),y(a,{visible:e.other,"onUpdate:visible":s[7]||(s[7]=s=>e.other=s),type:"exist","exist-address":e.existAddress,province:e.province,city:e.city,country:e.country,town:e.town,"back-btn-icon":e.backBtnIcon,onChange:s[8]||(s[8]=s=>e.onChange(s,"other")),onClose:e.close4,onSelected:e.selected,"custom-and-exist-title":"选择其他地址",onSwitchModule:e.switchModule,onCloseMask:e.closeMask},null,8,["visible","exist-address","province","city","country","town","back-btn-icon","onClose","onSelected","onSwitchModule","onCloseMask"])])}));b.render=I,b.__scopeId="data-v-635665aa";export default b;
