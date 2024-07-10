"use strict";(self.webpackChunksublime_portfolio=self.webpackChunksublime_portfolio||[]).push([[260],{697:function(e,t,r){r.r(t),r.d(t,{default:function(){return $}});var i=r.p+"static/media/leaflet.3960fc75c52f48529e8f.PNG",o=r.p+"static/media/loveesri.bfbe2c1e566f6731ebce.PNG",a=r.p+"static/media/nextjsazure.2eff4424d34232d8311c.PNG",n=r.p+"static/media/pythonanywhere.23ab651218988a84c183.PNG",s=[{id:1,type:"web",img:o,alt:"Image of Love ESRI project",title:"Love ESRI",description:"A project to showcase how I love ESRI products by utilising their JavaScript SDK APIs. It is hosting on loveesri.netlify.app as a single tier app.",git:"https://github.com/Suizer98/love-esri",demo:"https://loveesri.netlify.app/",tech:[{id:1,color:"green",tech:"Vite"},{id:2,color:"blue",tech:"TypeScript"},{id:3,color:"blue",tech:"React"},{id:4,color:"blue",tech:"TailwindCSS"},{id:5,color:"blue",tech:"CSS"},{id:6,color:"red",tech:"HTML"},{id:7,color:"blue",tech:"Docker"},{id:8,color:"orange",tech:"Ubuntu"},{id:9,color:"green",tech:"Bash"},{id:10,color:"red",tech:"NPM"},{id:11,color:"green",tech:"Netlify"}]},{id:2,type:"web",img:r.p+"static/media/weddinginv.e0d15d1b911d81866fe3.PNG",alt:"Wedding Invitation App",title:"Wedding Invitation App",description:"Simple wedding invitation ecard demonstrated by light weights full stacks development (web tier, app tier, database tier)",git:"https://github.com/Suizer98/weddinginvitation",demo:"https://suizerlyciawedding.netlify.app/",tech:[{id:1,color:"green",tech:"Vite"},{id:2,color:"blue",tech:"TypeScript"},{id:3,color:"blue",tech:"React"},{id:4,color:"blue",tech:"FastAPI"},{id:5,color:"blue",tech:"Python"},{id:6,color:"blue",tech:"Docker"},{id:7,color:"orange",tech:"Ubuntu"},{id:8,color:"green",tech:"Bash"},{id:9,color:"blue",tech:"Heroku"},{id:10,color:"green",tech:"Netlify"},{id:11,color:"blue",tech:"PostgreSQL"}]},{id:3,type:"web",img:a,alt:"Image of Next.js App for Azure project",title:"Next.js App for Azure",description:"This is a Next.js project consisting of an OpenLayer Map that shows a beautiful windy style layer. The main goal of this website is to showcase a complete workflow of auto deploy pipeline to Microsoft Azure platform using Github Action pipeline jobs, Docker login and push image to Azure Container Registry, and deploy image as web app service on Azure Web App Service, Azure Container Instance App, Azure Ubuntu VM.",git:"https://github.com/Suizer98/nextjsazure",demo:"https://nextjsazure.vercel.app/",tech:[{id:1,color:"blue",tech:"Next.js"},{id:2,color:"blue",tech:"OpenLayers"},{id:3,color:"blue",tech:"Docker"},{id:4,color:"blue",tech:"Azure"},{id:5,color:"red",tech:"SQL Server"},{id:6,color:"blue",tech:"GitHub Actions"}]},{id:4,type:"web",img:i,alt:"Image of Mapdemo project",title:"Mapdemo",description:"This is a sample repo project using leaflet library. I was required to complete this project within 24 hours for a company's interview. The website is accessible on: https://suizer98.github.io/mapdemo/",git:"https://github.com/Suizer98/mapdemo",demo:"https://suizer98.github.io/mapdemo/",tech:[{id:1,color:"green",tech:"Leafletjs"},{id:2,color:"blue",tech:"Leaflet APIs"},{id:3,color:"blue",tech:"CSS"},{id:4,color:"red",tech:"HTML"}]},{id:5,type:"web",img:n,alt:"Image of DjangoGIS project",title:"DjangoGIS",description:"The website is hosted with free on: http://tey.pythonanywhere.com/. This website is hosted on pythonanywhere free tier server. When inactive, the website shutdown automatically. The live deployment will only be triggered after you access the website. If you see this message, refresh the page again.",git:"https://github.com/Suizer98/djangogis",demo:"http://tey.pythonanywhere.com/",tech:[{id:1,color:"green",tech:"Django"},{id:2,color:"blue",tech:"Sqlite3"},{id:3,color:"blue",tech:"JS"},{id:4,color:"blue",tech:"CSS"},{id:5,color:"red",tech:"HTML"},{id:6,color:"blue",tech:"openrouteservice"}]}],c=r(439),l=r(791),h=r(671),d=r(144),u=r(136),p=r(516),f=r(762),g=r(737),m=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],b=function(e){for(var t=0,r=0;r<e.length;r++){var i=e[r];t=83*t+m.indexOf(i)}return t},v=function(e){var t=e/255;return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},w=function(e){var t=Math.max(0,Math.min(1,e));return t<=.0031308?Math.trunc(12.92*t*255+.5):Math.trunc(255*(1.055*Math.pow(t,.4166666666666667)-.055)+.5)},y=function(e,t){return function(e){return e<0?-1:1}(e)*Math.pow(Math.abs(e),t)},j=function(e){(0,u.Z)(r,e);var t=(0,p.Z)(r);function r(e){var i;return(0,h.Z)(this,r),(i=t.call(this,e)).name="ValidationError",i.message=e,i}return(0,d.Z)(r)}((0,g.Z)(Error)),x=function(e){if(!e||e.length<6)throw new j("The blurhash string must be at least 6 characters");var t=b(e[0]),r=Math.floor(t/9)+1,i=t%9+1;if(e.length!==4+2*i*r)throw new j("blurhash length mismatch: length is ".concat(e.length," but it should be ").concat(4+2*i*r))},_=function(e){var t=e>>8&255,r=255&e;return[v(e>>16),v(t),v(r)]},N=function(e,t){var r=Math.floor(e/361),i=Math.floor(e/19)%19,o=e%19;return[y((r-9)/9,2)*t,y((i-9)/9,2)*t,y((o-9)/9,2)*t]},P=function(e,t,r,i){x(e),i|=1;for(var o=b(e[0]),a=Math.floor(o/9)+1,n=o%9+1,s=(b(e[1])+1)/166,c=new Array(n*a),l=0;l<c.length;l++)if(0===l){var h=b(e.substring(2,6));c[l]=_(h)}else{var d=b(e.substring(4+2*l,6+2*l));c[l]=N(d,s*i)}for(var u=4*t,p=new Uint8ClampedArray(u*r),f=0;f<r;f++)for(var g=0;g<t;g++){for(var m=0,v=0,y=0,j=0;j<a;j++)for(var P=0;P<n;P++){var S=Math.cos(Math.PI*g*P/t)*Math.cos(Math.PI*f*j/r),I=c[P+j*n];m+=I[0]*S,v+=I[1]*S,y+=I[2]*S}var M=w(m),k=w(v),z=w(y);p[4*g+0+f*u]=M,p[4*g+1+f*u]=k,p[4*g+2+f*u]=z,p[4*g+3+f*u]=255}return p},S=Object.defineProperty,I=Object.defineProperties,M=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,Z=function(e,t,r){return t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},O=function(e,t){for(var r in t||(t={}))z.call(t,r)&&Z(e,r,t[r]);if(k){var i,o=(0,f.Z)(k(t));try{for(o.s();!(i=o.n()).done;){r=i.value;A.call(t,r)&&Z(e,r,t[r])}}catch(a){o.e(a)}finally{o.f()}}return e},T=function(e,t){return I(e,M(t))},D=function(e,t){var r={};for(var i in e)z.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&k){var o,a=(0,f.Z)(k(e));try{for(a.s();!(o=a.n()).done;){i=o.value;t.indexOf(i)<0&&A.call(e,i)&&(r[i]=e[i])}}catch(n){a.e(n)}finally{a.f()}}return r},E=function(e){(0,u.Z)(r,e);var t=(0,p.Z)(r);function r(){var e;return(0,h.Z)(this,r),(e=t.apply(this,arguments)).canvas=null,e.handleRef=function(t){e.canvas=t,e.draw()},e.draw=function(){var t=e.props,r=t.hash,i=t.height,o=t.punch,a=t.width;if(e.canvas){var n=P(r,a,i,o),s=e.canvas.getContext("2d"),c=s.createImageData(a,i);c.data.set(n),s.putImageData(c,0,0)}},e}return(0,d.Z)(r,[{key:"componentDidUpdate",value:function(){this.draw()}},{key:"render",value:function(){var e=this.props,t=(e.hash,e.height),r=e.width,i=D(e,["hash","height","width"]);return l.createElement("canvas",T(O({},i),{height:t,width:r,ref:this.handleRef}))}}]),r}(l.PureComponent);E.defaultProps={height:128,width:128};var L={position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"},C=function(e){(0,u.Z)(r,e);var t=(0,p.Z)(r);function r(){return(0,h.Z)(this,r),t.apply(this,arguments)}return(0,d.Z)(r,[{key:"componentDidUpdate",value:function(){if(this.props.resolutionX<=0)throw new Error("resolutionX must be larger than zero");if(this.props.resolutionY<=0)throw new Error("resolutionY must be larger than zero")}},{key:"render",value:function(){var e=this.props,t=e.hash,r=e.height,i=e.width,o=e.punch,a=e.resolutionX,n=e.resolutionY,s=e.style,c=D(e,["hash","height","width","punch","resolutionX","resolutionY","style"]);return l.createElement("div",T(O({},c),{style:T(O({display:"inline-block",height:r,width:i},s),{position:"relative"})}),l.createElement(E,{hash:t,height:n,width:a,punch:o,style:L}))}}]),r}(l.PureComponent);C.defaultProps={height:128,width:128,resolutionX:32,resolutionY:32};r(853);var G="Projects_projects__OWLIf",W="Projects_workItems__546JP",B="Projects_work__B8rZZ",R="Projects_header__jjoNf",U="Projects_imageWrapper__TSJn7",X="Projects_image__WWM4j",H="Projects_info__XFGqD",J="Projects_description__45hBb",Y="Projects_list__KEMu1",V="Projects_links__67o4d",q="Projects_link__B5iTJ",F=r(184);var K=function(e){var t=e.img,r=e.alt,i=e.title,o=e.software,a=e.link,n=e.description,s=(0,l.useState)(!1),h=(0,c.Z)(s,2),d=h[0],u=h[1];return(0,l.useEffect)((function(){var e=new Image;e.onload=function(){u(!0)},e.src=t}),[t]),(0,F.jsxs)("div",{className:B,children:[(0,F.jsxs)("div",{className:U,children:[!d&&(0,F.jsx)(C,{hash:"L03l5OWBofayofayj[ayayj[ayj[",width:"100%",height:"220px"}),d&&(0,F.jsx)("img",{className:X,src:t,alt:r,loading:"lazy"})]}),(0,F.jsxs)("div",{className:H,children:[(0,F.jsx)("h3",{children:i}),(0,F.jsx)("p",{className:J,children:n}),(0,F.jsx)("ul",{className:Y,children:o.map((function(e){return(0,F.jsx)("li",{className:e.color,children:e.software},e.id)}))}),(0,F.jsx)("div",{className:V,children:(0,F.jsx)("a",{className:q,href:a,target:"_blank",rel:"noreferrer","data-type":"download",children:"Behance"})})]})]})};var Q=function(e){var t=e.img,r=e.alt,i=e.title,o=e.git,a=e.demo,n=e.tech,s=e.description,h=(0,l.useState)(!1),d=(0,c.Z)(h,2),u=d[0],p=d[1];return(0,l.useEffect)((function(){var e=new Image;e.onload=function(){p(!0)},e.src=t}),[t]),(0,F.jsxs)("div",{className:B,children:[(0,F.jsxs)("div",{className:U,children:[!u&&(0,F.jsx)(C,{hash:"L03l5OWBofayofayj[ayayj[ayj[",width:"100%",height:"220px"}),u&&(0,F.jsx)("img",{className:X,src:t,alt:r,loading:"lazy"})]}),(0,F.jsxs)("div",{className:H,children:[(0,F.jsx)("h3",{children:i}),(0,F.jsx)("p",{className:J,children:s}),(0,F.jsx)("ul",{className:Y,children:n.map((function(e){return(0,F.jsx)("li",{className:e.color,children:e.tech},e.id)}))}),(0,F.jsx)("div",{className:V,children:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("a",{className:q,href:o,target:"_blank",rel:"noreferrer",children:"Github"}),(0,F.jsx)("a",{className:q,href:a,target:"_blank",rel:"noreferrer",children:"Demo"})]})})]})]})};var $=function(){return(0,F.jsxs)("section",{className:G,children:[(0,F.jsx)("h2",{className:R,children:"See my recent work"}),(0,F.jsx)("figure",{className:W,children:s.map((function(e){return"web"===e.type?(0,F.jsx)(Q,{img:e.img,alt:e.alt,title:e.title,description:e.description,git:e.git,demo:e.demo,tech:e.tech},e.id):"design"===e.type?(0,F.jsx)(K,{img:e.img,alt:e.alt,title:e.title,description:e.description,software:e.software,link:e.behance},e.id):void 0}))})]})}},853:function(){}}]);
//# sourceMappingURL=260.a681c45c.chunk.js.map