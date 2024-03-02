import{C as r,m as k}from"./scheduler.FGUOCI5T.js";import{w as p}from"./index.BI7v63FY.js";function z(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function S(s){const n=s-1;return n*n*n+1}function v(s,{delay:n=0,duration:a=400,easing:e=k}={}){const o=+getComputedStyle(s).opacity;return{delay:n,duration:a,easing:e,css:c=>`opacity: ${c*o}`}}function C(s,{delay:n=0,duration:a=400,easing:e=S,x:o=0,y:c=0,opacity:g=0}={}){const i=getComputedStyle(s),m=+i.opacity,d=i.transform==="none"?"":i.transform,u=m*(1-g),[y,f]=r(o),[x,h]=r(c);return{delay:n,duration:a,easing:e,css:(l,b)=>`
			transform: ${d} translate(${(1-l)*y}${f}, ${(1-l)*x}${h});
			opacity: ${m-u*b}`}}const U={},A=p([]),D=p([]),E=p({}),P=[{name:"cmyk",text:"🖨 Light"},{name:"dracula",text:"🧛 Dark"}],V={},j={nav:[{text:"Get Started",link:"/hello-world"},{text:"Elements",link:"/hello-world/elements"}]},F={nav:[{text:"Feed",link:"/atom.xml"},{text:"Sitemap",link:"/sitemap.xml"}]},G={locales:"en-US",options:{year:"numeric",weekday:"long",month:"short",day:"numeric"}},t={protocol:"https://",domain:"naniacademy.github.io",title:"NaniAcademy",subtitle:"If Apps Can Speak",lang:"en-US",description:"This blog is all about explaining programming concepts by narrating the code written.",author:{avatar:"/assets/maskable@512.png",name:"Durga Prasad",status:"🌸",bio:"Passionate Software Engineer"},themeColor:"#3D4451"},I={src:t.protocol+t.domain+"/favicon.png",sizes:"48x48",type:"image/png"},L={180:{src:t.protocol+t.domain+"/assets/any@180.png",sizes:"180x180",type:"image/png"},192:{src:t.protocol+t.domain+"/assets/any@192.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/any@512.png",sizes:"512x512",type:"image/png"}},N={192:{src:t.protocol+t.domain+"/assets/maskable@192.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/maskable@512.png",sizes:"512x512",type:"image/png"}};export{D as a,v as b,I as c,L as d,z as e,C as f,U as g,V as h,j as i,P as j,G as k,F as l,N as m,A as p,t as s,E as t};