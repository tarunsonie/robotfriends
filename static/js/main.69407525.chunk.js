(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(2),i=t.n(r),c=(t(12),t(3)),s=t(4),l=t(6),u=t(5),h=function(e){var n=e.name,t=e.email,o=e.id;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200*200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t)))},d=function(e){var n=e.Robot;return a.a.createElement("div",null,n.map((function(e,t){return a.a.createElement(h,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},f=function(e){e.searchfield;var n=e.searchchange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa2 ba bg b--green bg-lightest-blue",type:"Search",placeholder:"search robots",onChange:n}))},m=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"53.4em"}},e.children)},v=(t(13),function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).OnSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={Robot:[],searchfield:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({Robot:n})}))}},{key:"render",value:function(){var e=this,n=this.state.Robot.filter((function(n){return n.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return a.a.createElement("div",{className:"tc"},a.a.createElement("header",{className:"f2"},"Robofrineds"),a.a.createElement(f,{searchchange:this.OnSearchChange}),a.a.createElement(m,null,a.a.createElement(d,{Robot:n})))}}]),t}(o.Component)),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(14);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Robotfriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Robotfriends","/service-worker.js");g?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(n,e)}))}}()},7:function(e,n,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.69407525.chunk.js.map