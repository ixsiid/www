(function(t){function e(e){for(var i,o,c=e[0],s=e[1],l=e[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var i={},a={index:0},n=[];function o(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=i,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var i=r("85ec"),a=r.n(i);a.a},"0f9b":function(t,e,r){"use strict";var i=r("c745"),a=r.n(i);a.a},"3cb6":function(t,e,r){},"3cf9":function(t,e,r){},5507:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"title"}},[r("a",{attrs:{id:"logoA",href:t.isColorEdit?void 0:"/"}},[r("Icon",{ref:"logo",attrs:{id:"logo",colorChangeable:t.isColorEdit}})],1),r("div",{attrs:{id:"title_info"}},[r("p",{attrs:{id:"title_message"}},[t._v("Halzion.net")]),r("p",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.isColorEdit,expression:"isColorEdit"}],attrs:{type:"checkbox",id:"colorEdit"},domProps:{checked:Array.isArray(t.isColorEdit)?t._i(t.isColorEdit,null)>-1:t.isColorEdit},on:{change:function(e){var r=t.isColorEdit,i=e.target,a=!!i.checked;if(Array.isArray(r)){var n=null,o=t._i(r,n);i.checked?o<0&&(t.isColorEdit=r.concat([n])):o>-1&&(t.isColorEdit=r.slice(0,o).concat(r.slice(o+1)))}else t.isColorEdit=a}}}),t._v("Edit ")]),r("button",{on:{click:t.saveLogo}},[t._v("Save")])])])]),r("ul",{attrs:{id:"navi"}},[r("li",[r("a",{on:{click:function(e){return t.$go("?activity")}}},[t._v("Activity")])]),r("li",[r("a",{on:{click:function(e){return t.$go("?blog")}}},[t._v("Blog")])]),r("li",[r("a",{on:{click:function(e){return t.$go("?contact")}}},[t._v("Contact")])])]),"top"==t.view?r("News",{attrs:{src:"/news.md"}}):"activity"==t.view?r("Activity",{attrs:{src:"/activity/index.md"}}):"blog"==t.view?r("Article",{attrs:{src:t.articlePath}}):"contact"==t.view?r("Contact"):r("Error",{attrs:{message:"Not found"}})],1)},n=[],o=(r("a15b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article"},[t.src?r("div",{staticClass:"article-body"},[r("div",{staticClass:"article-body-left"},[r("h1",[t._v("目次")]),r("ol",{ref:"articleIndex"})]),r("VueMarkdown",{ref:"articleBody",staticClass:"markdown-body",attrs:{source:t.article,postrender:t.generateIndex}}),r("div",{staticClass:"article-body-right"})],1):r("div",{attrs:{id:"article_list"}},[r("ul",t._l(t.list,(function(e){return r("li",{key:e.path},[r("p",[r("a",{on:{click:function(r){t.$go(e.path.replace(/^\/article\//,"/?blog/"))}}},[t._v(t._s(e.Title))])]),r("p",[r("span",[t._v(t._s(e.Date))])])])})),0)])])}),c=[],s=(r("4160"),r("d3b7"),r("159b"),r("9ce6")),l=r.n(s),u={name:"Article",props:{src:String},components:{VueMarkdown:l.a},data:function(){return{article:"",list:window.$data.articles}},methods:{generateIndex:function(t){var e=this;return setTimeout((function(){var t=e.$refs.articleBody.$el.querySelectorAll("h1, h2, h3, h4, h5, h6"),r=e.$refs.articleIndex;r.textContent="";var i=1;t.forEach((function(t){var e=parseInt(t.nodeName.substr(1));console.log(i-e);for(var a=0;a<e-i;a++){var n=document.createElement("ol");r.lastChild.appendChild(n),r=n}for(var o=0;o<i-e;o++)r=r.parentElement.parentElement;i=e;var c=document.createElement("li");c.textContent=t.textContent,r.appendChild(c),console.log(c.textContent)}))}),0),t}},watch:{src:{immediate:!0,handler:function(){var t=this;fetch(this.src).then((function(t){return t.text()})).then((function(e){return t.article=e})).catch(console.error)}}}},f=u,d=(r("0f9b"),r("bb68"),r("2877")),p=Object(d["a"])(f,o,c,!1,null,"3cc424b8",null),h=p.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error"},[r("h1",[t._v(t._s(t.message))])])},v=[],g={name:"Error",props:{message:String}},y=g,w=(r("cc71"),Object(d["a"])(y,m,v,!1,null,"050c8cce",null)),b=w.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"news-container"},t._l(t.news,(function(e,i){return r("a",{key:"_news_"+i,staticClass:"news",attrs:{href:e.link}},[r("div",{staticClass:"meta"},[r("p",{staticClass:"date"},[r("span",[t._v(t._s(e.date))])]),e.tags?r("p",{staticClass:"tag"},t._l(e.tags,(function(e){return r("span",{key:"_news_"+i+"_tag_"+e,class:"tag_"+e},[t._v(t._s(e))])})),0):t._e()]),r("h1",[t._v(t._s(e.title))]),r("p",[t._v(t._s(e.description))])])})),0)},x=[],C=(r("4de4"),r("d81d"),r("ac1f"),r("1276"),[{title:"ポートフォリオサイトを公開",description:"しました",date:"2020-07-14"},{title:"F0推定VSTプラグインTrail",description:"V1.0.0をリリースしました",date:"2020-09-28"}]),E={name:"News",props:{src:String},data:function(){return{news:C}},mounted:function(){var t=this;fetch(this.src).then((function(t){return t.text()})).then((function(e){return t.items=e.split(/^# /m).filter((function(t){return t})).map((function(t){return"# "+t}))})).catch(console.error)}},k=E,P=(r("f383"),Object(d["a"])(k,_,x,!1,null,"dc4ef0aa",null)),S=P.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{viewBox:"-240.0 -240.0 480.0 480.0",stroke:"none",fill:"none","xmlns:xlink":"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg"}},[r("defs",[r("mask",{attrs:{id:"outer_orbit"}},[r("circle",{attrs:{cx:"0",cy:"0",r:"203",fill:"#ffffff"}}),r("circle",{attrs:{cx:"0",cy:"0",r:"179",fill:"#000000"}}),r("circle",{attrs:{cx:"0",cy:"187.5",r:"34.8",fill:"#000000"}}),r("circle",{attrs:{cx:"0",cy:"-187.5",r:"34.8",fill:"#000000"}})]),r("mask",{attrs:{id:"inner_orbit"}},[r("circle",{attrs:{cx:"0",cy:"0",r:"142.5",fill:"#ffffff"}}),r("circle",{attrs:{cx:"0",cy:"0",r:"118.5",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(0)",cx:"0",cy:"-133.8",r:"34.8",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(72)",cx:"0",cy:"-133.8",r:"34.8",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(144)",cx:"0",cy:"-133.8",r:"34.8",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(216)",cx:"0",cy:"-133.8",r:"34.8",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(288)",cx:"0",cy:"-133.8",r:"34.8",fill:"#000000"}})]),r("mask",{attrs:{id:"positron_bottom"}},[r("rect",{attrs:{x:"-240",y:"-240",width:"480",height:"480",fill:"#ffffff"}}),r("circle",{attrs:{transform:"rotate(0)",cx:"0",cy:"-57",r:"54",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(120)",cx:"0",cy:"-57",r:"54",fill:"#000000"}}),r("circle",{attrs:{transform:"rotate(240)",cx:"0",cy:"-57",r:"54",fill:"#000000"}}),r("circle",{attrs:{cx:"0",cy:"0",r:"54",fill:"#000000"}})]),r("mask",{attrs:{id:"positron_middle"}},[r("rect",{attrs:{x:"-240",y:"-240",width:"480",height:"480",fill:"#ffffff"}}),r("circle",{attrs:{cx:"0",cy:"0",r:"54",fill:"#000000"}})])]),r("rect",{staticClass:"color",attrs:{fill:"#3d85c6",x:"-240",y:"-240",width:"240",height:"480",mask:"url(#outer_orbit)"}}),r("rect",{staticClass:"color",attrs:{fill:"#3d85c6",x:"0",y:"-240",width:"240",height:"480",mask:"url(#outer_orbit)"}}),r("circle",{staticClass:"color",attrs:{fill:"#3d85c6",cx:"0",cy:"0",r:"145",mask:"url(#inner_orbit)"}}),r("g",{attrs:{fill:"#3d85c6"}},[r("circle",{staticClass:"color",attrs:{transform:"rotate(0)",cx:"0",cy:"-133.8",r:"22.8"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(72)",cx:"0",cy:"-133.8",r:"22.8"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(144)",cx:"0",cy:"-133.8",r:"22.8"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(216)",cx:"0",cy:"-133.8",r:"22.8"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(288)",cx:"0",cy:"-133.8",r:"22.8"}})]),r("g",{attrs:{fill:"#e69138"}},[r("g",{attrs:{mask:"url(#positron_bottom)"}},[r("circle",{staticClass:"color",attrs:{transform:"rotate(60)",cx:"0",cy:"-57",r:"38"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(180)",cx:"0",cy:"-57",r:"38"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(300)",cx:"0",cy:"-57",r:"38"}})]),r("g",{attrs:{mask:"url(#positron_middle)"}},[r("circle",{staticClass:"color",attrs:{transform:"rotate(0)",cx:"0",cy:"-57",r:"38"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(120)",cx:"0",cy:"-57",r:"38"}}),r("circle",{staticClass:"color",attrs:{transform:"rotate(240)",cx:"0",cy:"-57",r:"38"}})]),r("circle",{staticClass:"color",attrs:{cx:"0",cy:"0",r:"38"}})])])},$=[],j={name:"Icon",props:{colorChangeable:Boolean},data:function(){return{}},mounted:function(){var t=this,e=document.createElement("input");e.setAttribute("type","color"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.zIndex="200",e.style.display="none",e.target=void 0,e.addEventListener("input",(function(){e.target&&e.target.setAttribute("fill",e.value)}),{once:!1,passive:!0}),e.addEventListener("blur",(function(){e.style.display="none"}),{once:!1,passive:!0}),e.addEventListener("change",(function(){e.style.display="none"}),{once:!1,passive:!0}),document.body.appendChild(e),document.querySelectorAll(".color").forEach((function(r){r.addEventListener("click",(function(i){t.colorChangeable&&(e.target=r,e.style.top=i.pageY+20+"px",e.style.left=i.pageX+20+"px",e.style.display="block",e.value=r.getAttribute("fill")||r.parentElement.getAttribute("fill")||r.parentElement.parentElement.getAttribute("fill"),e.focus(),setTimeout((function(){return e.click()}),10))}),{once:!1,passive:!0})}))},methods:{save:function(){var t=document.createElement("canvas");t.setAttribute("width",512),t.setAttribute("height",512);var e=t.getContext("2d"),r=document.createElement("a"),i=new Image;i.addEventListener("load",(function(){e.drawImage(i,0,0),r.setAttribute("href",t.toDataURL("image/png")),r.setAttribute("download","halzion.png"),r.click()}),{once:!0}),i.setAttribute("src","data:image/svg+xml;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent((new XMLSerializer).serializeToString(this.$el)))))}}},q=j,L=(r("df64"),Object(d["a"])(q,A,$,!1,null,"9b6deb38",null)),O=L.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"activity"}},[r("VueMarkdown",{attrs:{source:t.source}})],1)},R=[],I={name:"Article",props:{src:String},data:function(){return{source:"# Loading"}},components:{VueMarkdown:l.a},mounted:function(){var t=this;fetch(this.src).then((function(t){return t.text()})).then((function(e){return t.source=e})).catch(console.error)}},M=I,T=(r("be29"),Object(d["a"])(M,z,R,!1,null,null,null)),N=T.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"profile"},[r("p",[t._v("Name")]),r("p",[t._v("~チルダ")]),r("p",[t._v("Web")]),r("p",[t._v("https://www.halzion.net")]),r("p"),r("p",[t._v("ixsiid 📧 halzion.net")])]),r("ul",{staticClass:"sites"},[r("li",[r("a",{attrs:{href:"https://twitter.com/ixsiid"}},[r("img",{attrs:{src:"/image/Twitter_Social_Icon_Square_Color.png",alt:"Twitter"}})])]),r("li",[r("a",{attrs:{href:"https://github.com/ixsiid"}},[r("img",{attrs:{src:"/image/GitHub-Mark-120px-plus.png",alt:"GitHub"}})])]),r("li",[r("a",{attrs:{href:"https://qiita.com/ixsiid"}},[r("img",{attrs:{src:"/image/qiita_favicon.png",alt:"Qiita"}})])]),r("li",[r("a",{attrs:{href:"https://www.nicovideo.jp/user/989333"}},[r("img",{attrs:{src:"/image/niconico_ogp.png",alt:"ニコニコ"}})])]),r("li",[r("a",{attrs:{href:"http://ixsi.hateblo.jp/"}},[r("img",{attrs:{src:"/image/hateblo_meta-icon-global.png",alt:"はてブロ"}})])]),r("li",[r("a",{attrs:{href:"https://steamcommunity.com/profiles/76561198364824598/"}},[r("img",{attrs:{src:"/image/steam_favicon.ico",alt:"Steam"}})])]),r("li",[r("a",{attrs:{href:"https://my.playstation.com/profile/HuukaJP"}},[r("img",{attrs:{src:"/image/PlayStation_Network_logo.png",alt:"PlayStation"}})])])])])}],H={name:"Contact"},X=H,J=(r("a300"),Object(d["a"])(X,V,B,!1,null,"685052d3",null)),W=J.exports,D={name:"App",components:{Contact:W,Activity:N,Icon:O,News:S,Article:h,Error:b},data:function(){return{view:"top",articlePath:"",isColorEdit:!1,scrollParam:{}}},methods:{saveLogo:function(){this.$refs.logo.save()},windowLoad:function(){this.scrollParam.target=document.querySelector("#navi"),this.scrollParam.top=document.querySelector("#title").getClientRects()[0].height,this.scrollParam.height=document.querySelector("#navi").getClientRects()[0].height,this.scrollParam.offsetX=document.querySelector("#title_info").getClientRects()[0].width,this.scrollParam.svg={},this.scrollParam.svg.target=document.querySelector("#logo");var t=this.scrollParam.svg.target.getClientRects()[0];this.scrollParam.svg.width=t.width,this.scrollParam.svg.height=t.height,document.querySelector("#title").style.height=this.scrollParam.top+"px",this.titleResize()},titleResize:function(){if(this.scrollParam.target){var t=this.scrollParam.target.getClientRects()[0].top,e=document.body.clientWidth,r=((this.scrollParam.top-this.scrollParam.height)*(t/this.scrollParam.top)+this.scrollParam.height)/this.scrollParam.top,i=1-(1-t/this.scrollParam.top)*(1-160/e),a=Math.min(r,i),n=document.querySelector("#title").getClientRects()[0].width+"px",o=Math.min(document.body.clientWidth,e*a+this.scrollParam.offsetX)+"px",c=document.querySelector("#title");c.animate([{width:n},{width:o}],{duration:40,iterations:1}),c.style.width=o,this.scrollParam.svg.target.style.width=r*this.scrollParam.svg.width+"px",this.scrollParam.svg.target.style.height=r*this.scrollParam.svg.height+"px";var s=Math.max(5*(a-.8),0);document.querySelector("#title_info").style.opacity=s,document.querySelector("#title").style.pointerEvents=s>.6?"auto":"none"}}},mounted:function(){var t=this;this.$queryCallback.push((function(e,r){t.view=e||"top","blog"===e&&(t.articlePath=0==r.length?"":"/article/".concat(r.join("/")))})),window.$app=this,window.addEventListener("load",this.windowLoad,{once:!0,passive:!0}),window.addEventListener("scroll",this.titleResize,{once:!1,passive:!0}),window.addEventListener("resize",this.titleResize,{once:!1,passive:!0}),dispatchEvent(new PopStateEvent("popstate",{}))},destroyed:function(){window.removeEventListener("load",this.windowLoad,{once:!0,passive:!0}),window.removeEventListener("scroll",this.titleResize,{once:!1,passive:!0}),window.removeEventListener("resize",this.titleResize,{once:!1,passive:!0})}},G=D,U=(r("034f"),Object(d["a"])(G,a,n,!1,null,null,null)),F=U.exports,Q=(r("fb6a"),r("841c"),r("4f96")),Y={install:function(t,e){window.addEventListener("popstate",(function(){var t=window.location.search.split("/").map((function(t,e){return 0==e?t.substr(1):t})).filter((function(t){return t})),r=Object(Q["a"])(t),i=r[0],a=r.slice(1);e.query.forEach((function(t){t(i,a)}))}),{once:!1,passive:!0}),t.prototype.$go=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;history.pushState(r,e,t),dispatchEvent(new PopStateEvent("popstate",{}))}}};i["a"].config.productionTip=!1;var K={query:[]};i["a"].use(Y,K),i["a"].prototype.$queryCallback=K.query,new i["a"]({render:function(t){return t(F)}}).$mount("#app")},"85ec":function(t,e,r){},a300:function(t,e,r){"use strict";var i=r("3cb6"),a=r.n(i);a.a},bb68:function(t,e,r){"use strict";var i=r("dc10"),a=r.n(i);a.a},be29:function(t,e,r){"use strict";var i=r("5507"),a=r.n(i);a.a},c714:function(t,e,r){},c745:function(t,e,r){},cc71:function(t,e,r){"use strict";var i=r("c714"),a=r.n(i);a.a},dc10:function(t,e,r){},df64:function(t,e,r){"use strict";var i=r("3cf9"),a=r.n(i);a.a},f351:function(t,e,r){},f383:function(t,e,r){"use strict";var i=r("f351"),a=r.n(i);a.a}});
//# sourceMappingURL=index.fa397b66.js.map