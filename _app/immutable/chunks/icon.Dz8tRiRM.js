import{C as l,m as k}from"./scheduler.FGUOCI5T.js";import{w as m}from"./index.BI7v63FY.js";function C(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function S(s){const n=s-1;return n*n*n+1}function v(s,{delay:n=0,duration:a=400,easing:e=k}={}){const o=+getComputedStyle(s).opacity;return{delay:n,duration:a,easing:e,css:i=>`opacity: ${i*o}`}}function w(s,{delay:n=0,duration:a=400,easing:e=S,x:o=0,y:i=0,opacity:r=0}={}){const c=getComputedStyle(s),p=+c.opacity,d=c.transform==="none"?"":c.transform,u=p*(1-r),[y,h]=l(o),[f,b]=l(i);return{delay:n,duration:a,easing:e,css:(g,x)=>`
			transform: ${d} translate(${(1-g)*y}${h}, ${(1-g)*f}${b});
			opacity: ${p-u*x}`}}const A={},D=m([]),U=m([]),N=m({}),P=[{name:"dracula",text:"🧛 Dark"},{name:"cmyk",text:"🖨 Light"}],V={},j={nav:[{text:"GitHub",ink:"https://github.com/NaniAcademy"}]},E={nav:[{text:"Feed",link:"/atom.xml"},{text:"Sitemap",link:"/sitemap.xml"},{text:"Source Code",link:"https://github.com/NaniAcademy/naniacademy.github.io"}]},F={locales:"en-US",options:{year:"numeric",weekday:"long",month:"short",day:"numeric"}},t={protocol:"https://",domain:"naniacademy.github.io",title:"NaniAcademy",subtitle:"If Apps Can Speak",lang:"en-US",description:"This blog is all about explaining programming concepts by narrating the code written.",author:{avatar:"/assets/maskable@512.png",name:"Durga Prasad",status:"🌸",bio:"Passionate Software Engineer",metadata:[{icon:"i-simple-icons-github",link:"https://github.com/DurgaPrasadReddyV"}]},themeColor:"#3D4451"},G={src:t.protocol+t.domain+"/favicon.png",sizes:"48x48",type:"image/png"},H={180:{src:t.protocol+t.domain+"/assets/any@180.png",sizes:"180x180",type:"image/png"},192:{src:t.protocol+t.domain+"/assets/any@192.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/any@512.png",sizes:"512x512",type:"image/png"}},I={192:{src:t.protocol+t.domain+"/assets/maskable@192.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/maskable@512.png",sizes:"512x512",type:"image/png"}};export{U as a,v as b,G as c,H as d,C as e,w as f,A as g,V as h,j as i,P as j,F as k,E as l,I as m,D as p,t as s,N as t};
