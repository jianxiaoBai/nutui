var o=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,t=(e,n,s)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s;import{c as p}from"./mobile.8c2ebd56.js";import{a as u,A as c,B as r,C as i,r as d,o as y,e as P,j as b,k as f,g as m,l as g}from"./vendor.6333306b.js";import"./index.2429c8bf.js";const{createDemo:j}=p("video");var v=j({props:{},setup(){const o=u({source:{src:"https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",type:"video/mp4"},source1:{src:"https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",type:"video/mp4"},options:{controls:!0},options1:{autoplay:!0,muted:!0,controls:!0},options2:{muted:!0,controls:!0},options3:{controls:!0,poster:"https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp"},options4:{controls:!0,playsinline:!0},options5:{controls:!1,autoplay:!0,disabled:!0,muted:!0,playsinline:!0,loop:!0}});return p=((o,e)=>{for(var n in e||(e={}))a.call(e,n)&&t(o,n,e[n]);if(s)for(var n of s(e))l.call(e,n)&&t(o,n,e[n]);return o})({play:o=>console.log("play",o),pause:o=>console.log("pause",o),playend:o=>console.log("playend",o)},c(o)),e(p,n({changeVideo:()=>{o.source1.src="https://vjs.zencdn.net/v/oceans.mp4"}}));var p}});r("data-v-1a1fa3ea");const h={class:"demo"},O=m("h4",null,"基础用法",-1),_=m("h4",null,"自动播放",-1),x=m("h4",null,"初始化静音",-1),V=m("h4",null,"视频封面海报设置",-1),k=m("h4",null,"行内播放",-1),w=m("h4",null,"设置视频为背景图",-1),z=m("h4",null,"视频切换",-1),B=g("切换视频");i(),v.render=function(o,e,n,s,a,l){const t=d("nut-video"),p=d("nut-cell"),u=d("nut-button");return y(),P("div",h,[O,b(p,{class:"cell"},{default:f((()=>[b(t,{source:o.source,options:o.options,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),_,b(p,{class:"cell"},{default:f((()=>[b(t,{source:o.source,options:o.options1,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),x,b(p,{class:"cell"},{default:f((()=>[b(t,{source:o.source,options:o.options2,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),V,b(p,{class:"cell"},{default:f((()=>[b(t,{source:o.source,options:o.options3,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),k,b(p,{class:"cell"},{default:f((()=>[b(t,{source:o.source,options:o.options4,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),w,b(p,{class:"cell"},{default:f((()=>[b(t,{source:o.source,options:o.options5,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),z,b(p,{class:"cell"},{default:f((()=>[b(t,{source:o.source1,options:o.options,onPlay:o.play,onPause:o.pause,onPlayend:o.playend},null,8,["source","options","onPlay","onPause","onPlayend"])])),_:1}),b(u,{type:"primary",onClick:o.changeVideo,class:"m-b"},{default:f((()=>[B])),_:1},8,["onClick"])])},v.__scopeId="data-v-1a1fa3ea";export{v as default};
