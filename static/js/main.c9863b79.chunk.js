(this.webpackJsonpsnapshot=this.webpackJsonpsnapshot||[]).push([[0],{29:function(e,t,a){e.exports=a(57)},34:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=(a(34),a(22)),u=a(23),m=a(27),i=a(28),s=a(7),h=a(24),E=a.n(h),d=Object(n.createContext)(),f=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!0),u=Object(s.a)(o,2),m=u[0],i=u[1];return r.a.createElement(d.Provider,{value:{images:l,loading:m,runSearch:function(e){E.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("636e1481b4f3c446d26b8eb6ebfe7127","&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(e){c(e.data.photos.photo),i(!1)})).catch((function(e){console.log("Encountered an error with fetching and parsing data",e)}))}}},e.children)},b=a(5),p=a(4),g=function(e){var t=e.handleSubmit,a=e.history,l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],u=c[1];return r.a.createElement("form",{className:"search-form",onSubmit:function(e){return t(e,a,o)}},r.a.createElement("input",{type:"text",name:"search",placeholder:"Search...",onChange:function(e){u(e.target.value)},value:o}),r.a.createElement("button",{type:"submit",className:"search-button ".concat(o.trim()?"active":null),disabled:!o.trim()},r.a.createElement("svg",{height:"32",width:"32"},r.a.createElement("path",{d:"M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z",fill:"#ffffff",fillRule:"evenodd"}))))},v=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(b.b,{to:"/mountain"},"Mountain")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/beach"},"Beaches")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/bird"},"Birds")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/food"},"Food"))))},S=function(e){var t=e.history,a=e.handleSubmit;return r.a.createElement("div",null,r.a.createElement("h1",null,"SnapShot "),r.a.createElement("h3",null,"\u9019\u662f\u6f14\u7df4\u6709\u6539\u52d5\u4e86\u4ee3\u78bc by Mark\u9673\u70b3\u9675 2021-02-15"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,"\u597d\u6559\u7a0b"),r.a.createElement("td",null," https://app.pluralsight.com/guides/how-to-host-your-static-webpages-on-github-pages")),r.a.createElement("tr",null," ",r.a.createElement("td",null,"\u539f\u9805\u76ee"),r.a.createElement("td",{align:"left"},"https://github.com/Yog9/SnapShot")," "),r.a.createElement("tr",null," ",r.a.createElement("td",null,"\u672c\u9805\u76ee"),r.a.createElement("td",{align:"left"},"https://github.com/twoutlook/SnapShotV2")," ")),r.a.createElement("h3",{align:"left"},"\u6280\u8853\u6897"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",{align:"right"},"Github Pages"),r.a.createElement("td",{align:"left"},"\u57fa\u790e")),r.a.createElement("tr",null,r.a.createElement("th",{align:"right"},"Github Actions"),r.a.createElement("td",{align:"left"},"\u4eca\u5929\u7684\u65b0\u91cd\u9ede")),r.a.createElement("tr",null,r.a.createElement("th",{align:"right"}," Node.js \u76f8\u95dc\u9818\u57df "),r.a.createElement("td",null,"\u53c3\u8003\u7684\u524d\u7aef\u9805\u76ee, \u5305\u62ec yarn, npm, react"))),r.a.createElement(g,{history:t,handleSubmit:a}),r.a.createElement(v,null))},y=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"No Images Found"),r.a.createElement("p",null,"Please try a different search term"))},j=function(e){var t=e.url,a=e.title;return r.a.createElement("li",null,r.a.createElement("img",{src:t,alt:a}))},w=function(e){var t,a,n=e.data;return n.length>0?t=n.map((function(e){var t=e.farm,a=e.server,n=e.id,l=e.secret,c=e.title,o="https://farm".concat(t,".staticflickr.com/").concat(a,"/").concat(n,"_").concat(l,"_m.jpg");return r.a.createElement(j,{url:o,key:n,alt:c})})):a=r.a.createElement(y,null),r.a.createElement("div",null,r.a.createElement("ul",null,t),a)},k=function(){return r.a.createElement("div",{className:"loader"})},O=function(e){var t=e.searchTerm,a=Object(n.useContext)(d),l=a.images,c=a.loading,o=a.runSearch;return Object(n.useEffect)((function(){o(t)}),[t]),r.a.createElement("div",{className:"photo-container"},c?r.a.createElement(k,null):r.a.createElement(w,{data:l}))},T=function(e){var t=e.searchTerm;return r.a.createElement("div",null,r.a.createElement("h2",null,t," Pictures"),r.a.createElement(O,{searchTerm:t}))},N=function(e){var t=e.searchTerm;return r.a.createElement("div",null,r.a.createElement("h2",null,t," Images"),r.a.createElement(O,{searchTerm:t}))},x=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h2",null,"Page Not Found"))},I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(e,t,a){e.preventDefault(),e.currentTarget.reset();var n="/search/".concat(a);t.push(n)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(f,null,r.a.createElement(b.a,{basename:"/SnapScout"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{render:function(t){return r.a.createElement(S,{handleSubmit:e.handleSubmit,history:t.history})}}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(){return r.a.createElement(p.a,{to:"/mountain"})}}),r.a.createElement(p.b,{path:"/mountain",render:function(){return r.a.createElement(T,{searchTerm:"mountain"})}}),r.a.createElement(p.b,{path:"/beach",render:function(){return r.a.createElement(T,{searchTerm:"beach"})}}),r.a.createElement(p.b,{path:"/bird",render:function(){return r.a.createElement(T,{searchTerm:"bird"})}}),r.a.createElement(p.b,{path:"/food",render:function(){return r.a.createElement(T,{searchTerm:"food"})}}),r.a.createElement(p.b,{path:"/search/:searchInput",render:function(e){return r.a.createElement(N,{searchTerm:e.match.params.searchInput})}}),r.a.createElement(p.b,{component:x})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.c9863b79.chunk.js.map