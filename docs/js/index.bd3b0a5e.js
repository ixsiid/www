(function(t){function e(e){for(var a,c,o=e[0],s=e[1],l=e[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},i={index:0},n=[];function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),i=r.n(a);i.a},"21eb":function(t,e,r){"use strict";var a=r("2442"),i=r.n(a);i.a},2442:function(t,e,r){},2980:function(t,e,r){"use strict";var a=r("923b"),i=r.n(a);i.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"title"}},[r("a",{attrs:{id:"logoA",href:"/"}},[r("Icon",{attrs:{id:"logo"}})],1),r("div",{attrs:{id:"title_info"}},[r("p",{attrs:{id:"title_message"}},[t._v("Halzion.net")]),r("p",[t._m(0),r("button",{on:{click:t.save_logo}},[t._v("Save")])])])]),t._m(1),"top"==t.view?r("News",{attrs:{src:"/news.md"}}):"blog"==t.view?r("Article",{attrs:{src:t.articlePath}}):r("Error",{attrs:{message:"Not found"}})],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",[r("input",{attrs:{type:"checkbox",id:"colorEdit"}}),t._v("Edit ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{attrs:{id:"navi"}},[r("li",[r("a",{attrs:{onclick:"window._move('?activity');"}},[t._v("Activity")])]),r("li",[r("a",{attrs:{onclick:"window._move('?blog');"}},[t._v("Blog")])]),r("li",[r("a",{attrs:{onclick:"window._move('?contact');"}},[t._v("Contact")])])])}],c=(r("4de4"),r("4160"),r("a15b"),r("d81d"),r("fb6a"),r("ac1f"),r("841c"),r("1276"),r("159b"),r("4f96")),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article"},[t.src?r("VueMarkdown",{attrs:{source:t.article}}):r("div",{attrs:{id:"article_list"}},[r("ul",t._l(t.list,(function(e){return r("li",{key:e.path},[r("p",[r("a",{attrs:{onclick:"window._move(`"+e.path.replace(/^\/article\//,"/?blog/")+"`);"}},[t._v(t._s(e.Title))])]),r("p",[r("span",[t._v(t._s(e.Date))])])])})),0)])],1)},s=[],l=(r("d3b7"),r("9ce6")),u=r.n(l),d={name:"Article",props:{src:String},components:{VueMarkdown:u.a},data:function(){return{article:"",list:window.$data.articles}},watch:{src:{immediate:!0,handler:function(){var t=this;fetch(this.src).then((function(t){return t.text()})).then((function(e){return t.article=e})).catch(console.error)}}}},f=d,p=(r("787a"),r("2877")),b=Object(p["a"])(f,o,s,!1,null,"1897574e",null),v=b.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error"},[r("h1",[t._v(t._s(t.message))])])},m=[],h={name:"Error",props:{message:String}},y=h,w=(r("21eb"),Object(p["a"])(y,g,m,!1,null,"0725fc96",null)),x=w.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"news-container"},t._l(t.news,(function(e,a){return r("div",{key:"_news_"+a,staticClass:"news"},[r("div",{staticClass:"date"},[r("p",[r("span",[t._v(t._s(e.date))])])]),r("h1",[t._v(t._s(e.title))]),r("p",[t._v(t._s(e.description))])])})),0)},E=[],k={title:"aaa",description:"bbb",date:"2020-07-20",tags:["tag1","tag2"],thumbnail:"./image/aaaa.png"};k||console.error("no means");var C=[{title:"aaa",description:"bbb",date:"2020-07-20"},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]},{title:"aaa",description:"bbb",date:"2020-07-20"},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]},{title:"aaa",description:"bbb",date:"2020-07-20"},{title:"aaa",description:"bbb",date:"2020-07-20"},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]},{title:"aaa",description:"bbb",date:"2020-07-20",tags:["aa","bb"]}],S={name:"News",props:{src:String},data:function(){return{items:[],news:C}},mounted:function(){var t=this;fetch(this.src).then((function(t){return t.text()})).then((function(e){return t.items=e.split(/^# /m).filter((function(t){return t})).map((function(t){return"# "+t}))})).catch(console.error)}},A=S,O=(r("7fa3"),Object(p["a"])(A,_,E,!1,null,"1cd1c972",null)),j=O.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{viewBox:"-240.0 -240.0 480.0 480.0",stroke:"none",fill:"none","xmlns:xlink":"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg"}},[r("defs",[r("mask",{attrs:{id:"outer_orbit"}},[r("circle",{attrs:{cx:"0",cy:"0",r:"203",fill:"#ffffff"}}),r("circle",{attrs:{cx:"0",cy:"0",r:"179",fill:"#000000"}}),r("circle",{attrs:{cx:"0",cy:"187.5",r:"34.8",fill:"#000000"}}),r("circle",{attrs:{cx:"0",cy:"-187.5",r:"34.8",fill:"#000000"}})]),r("mask",{attrs:{id:"inner_orbit"}},[r("circle",{attrs:{cx:"0",cy:"0",r:"142.5",fill:"#ffffff"}}),r("circle",{attrs:{cx:"0",cy:"0",r:"118.5",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(0)",cx:"0",cy:"-133.8",r:"34.8",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(72)",cx:"0",cy:"-133.8",r:"34.8",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(144)",cx:"0",cy:"-133.8",r:"34.8",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(216)",cx:"0",cy:"-133.8",r:"34.8",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(288)",cx:"0",cy:"-133.8",r:"34.8",fill:"#000000"}})]),r("mask",{attrs:{id:"positron_bottom"}},[r("rect",{attrs:{x:"-240",y:"-240",width:"480",height:"480",fill:"#ffffff"}}),r("circle",{attrs:{transform:"rotate(0)",cx:"0",cy:"-57",r:"54",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(120)",cx:"0",cy:"-57",r:"54",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(240)",cx:"0",cy:"-57",r:"54",fill:"#000000"}}),r("circle",{attrs:{cx:"0",cy:"0",r:"54",fill:"#000000"}})]),r("mask",{attrs:{id:"positron_middle"}},[r("rect",{attrs:{x:"-240",y:"-240",width:"480",height:"480",fill:"#ffffff"}}),r("circle",{attrs:{cx:"0",cy:"0",r:"54",fill:"#000000"}})])]),r("rect",{staticClass:"color",attrs:{fill:"#3d85c6",x:"-240",y:"-240",width:"240",height:"480",mask:"url(#outer_orbit)"}}),r("rect",{staticClass:"color",attrs:{fill:"#3d85c6",x:"0",y:"-240",width:"240",height:"480",mask:"url(#outer_orbit)"}}),r("circle",{staticClass:"color",attrs:{fill:"#3d85c6",cx:"0",cy:"0",r:"145",mask:"url(#inner_orbit)"}}),r("g",{attrs:{fill:"#3d85c6"}},[r("circle",{staticClass:"color",attrs:{transform:"rotate(0)",cx:"0",cy:"-133.8",r:"22.8"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(72)",cx:"0",cy:"-133.8",r:"22.8"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(144)",cx:"0",cy:"-133.8",r:"22.8"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(216)",cx:"0",cy:"-133.8",r:"22.8"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(288)",cx:"0",cy:"-133.8",r:"22.8"}})]),r("g",{attrs:{fill:"#e69138"}},[r("g",{attrs:{mask:"url(#positron_bottom)"}},[r("circle",{staticClass:"color",attrs:{transform:"rotate(60)",cx:"0",cy:"-57",r:"38"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(180)",cx:"0",cy:"-57",r:"38"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(300)",cx:"0",cy:"-57",r:"38"}})]),r("g",{attrs:{mask:"url(#positron_middle)"}},[r("circle",{staticClass:"color",attrs:{transform:"rotate(0)",cx:"0",cy:"-57",r:"38"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(120)",cx:"0",cy:"-57",r:"38"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(240)",cx:"0",cy:"-57",r:"38"}})]),r("circle",{staticClass:"color",attrs:{cx:"0",cy:"0",r:"38"}})])])},P=[],L={name:"Icon",data:function(){return{}},mounted:function(){}},M=L,$=(r("2980"),Object(p["a"])(M,q,P,!1,null,"dc1c1210",null)),R=$.exports,I={name:"App",components:{Icon:R,News:j,Article:v,Error:x},data:function(){return{view:"top",articlePath:""}},methods:{save_logo:function(){var t=document.createElement("canvas");t.setAttribute("width",512),t.setAttribute("height",512);var e=t.getContext("2d"),r=document.createElement("a"),a=new Image;a.addEventListener("load",(function(){e.drawImage(a,0,0),r.setAttribute("href",t.toDataURL("image/png")),r.setAttribute("download","logo.png"),r.click()}),{once:!0}),a.setAttribute("src","data:image/svg+xml;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent((new XMLSerializer).serializeToString(document.querySelector("#logo"))))))}},mounted:function(){var t=this;if(!window._move){window.addEventListener("popstate",(function(){var e=window.location.search.split("/").map((function(t,e){return 0==e?t.substr(1):t})).filter((function(t){return t})),r=Object(c["a"])(e),a=r[0],i=r.slice(1);a?(t.view=a,"blog"==a&&(i.length>0?t.articlePath="/article/".concat(i.join("/")):t.articlePath="")):t.view="top"}),{once:!1,passive:!0}),Object.defineProperty(window,"_move",{enumerable:!1,writable:!1,value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;history.pushState(r,e,t),dispatchEvent(new PopStateEvent("popstate",{}))}});var e={};window.addEventListener("load",(function(){e.target=document.querySelector("#navi"),e.top=document.querySelector("#title").getClientRects()[0].height,e.height=document.querySelector("#navi").getClientRects()[0].height,e.offsetX=document.querySelector("#title_info").getClientRects()[0].width,e.svg={},e.svg.target=document.querySelector("#logo"),e.svg.rect=e.svg.target.getClientRects()[0],e.svg.width=e.svg.rect.width,e.svg.height=e.svg.rect.height,document.querySelector("#title").style.height=e.top+"px",r()}),{once:!0,passive:!0});var r=function(){if(e.target){var t=e.target.getClientRects()[0].top,r=document.body.clientWidth,a=((e.top-e.height)*(t/e.top)+e.height)/e.top,i=1-(1-t/e.top)*(1-160/r),n=Math.min(a,i),c=document.querySelector("#title").getClientRects()[0].width+"px",o=Math.min(document.body.clientWidth,r*n+e.offsetX)+"px",s=document.querySelector("#title");s.animate([{width:c},{width:o}],{duration:40,iterations:1}),s.style.width=o,e.svg.target.style.width=a*e.svg.width+"px",e.svg.target.style.height=a*e.svg.height+"px",document.querySelector("#title_info").style.opacity=Math.max(5*(n-.8),0)}};window.addEventListener("scroll",r,{once:!1,passive:!0}),window.addEventListener("resize",r,{once:!1,passive:!0});var a=document.createElement("input");a.setAttribute("type","color"),a.style.position="absolute",a.style.top="0px",a.style.left="0px",a.style.zIndex="200",a.style.display="none",a.target=void 0,a.addEventListener("input",(function(){a.target&&a.target.setAttribute("fill",a.value)}),{once:!1,passive:!0}),a.addEventListener("blur",(function(){a.style.display="none",console.log("blur")}),{once:!1,passive:!0}),a.addEventListener("change",(function(){a.style.display="none",console.log("change")}),{once:!1,passive:!0}),document.body.appendChild(a),document.querySelectorAll(".color").forEach((function(t){t.addEventListener("click",(function(e){document.querySelector("#colorEdit").checked&&(a.target=t,a.style.top=e.pageY+20+"px",a.style.left=e.pageX+20+"px",a.style.display="block",a.value=t.getAttribute("fill")||t.parentElement.getAttribute("fill")||t.parentElement.parentElement.getAttribute("fill"),a.focus(),setTimeout((function(){return a.click()}),10))}),{once:!1,passive:!0})})),document.querySelector("#colorEdit").addEventListener("change",(function(t){var e=document.querySelector("#logoA");t.target.checked?e.removeAttribute("href"):e.setAttribute("href","/")}),{once:!1,passive:!0})}dispatchEvent(new PopStateEvent("popstate",{}))}},T=I,z=(r("034f"),Object(p["a"])(T,i,n,!1,null,null,null)),N=z.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(N)}}).$mount("#app")},"787a":function(t,e,r){"use strict";var a=r("c470"),i=r.n(a);i.a},"7fa3":function(t,e,r){"use strict";var a=r("cfd7"),i=r.n(a);i.a},"85ec":function(t,e,r){},"923b":function(t,e,r){},c470:function(t,e,r){},cfd7:function(t,e,r){}});
//# sourceMappingURL=index.bd3b0a5e.js.map