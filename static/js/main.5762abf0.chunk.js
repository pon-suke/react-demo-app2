(this["webpackJsonpreact-demo-app"]=this["webpackJsonpreact-demo-app"]||[]).push([[0],{31:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var n=a(7),r=a(8),c=a(10),i=a(9),s=a(0),o=a.n(s),l=a(21),d=a.n(l),h=(a(31),a(1)),j=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsx)("a",{href:"?#",children:Object(h.jsx)("div",{id:"header",children:Object(h.jsx)("h1",{className:"noDecoration",children:"pon\xa0suke\u4eba\u751f\u30ea\u30fc\u30afBlog"})})})}}]),a}(o.a.Component),u=a(12);var p=function(t){var e=function(t){return{__html:t.replace(/---/g,"<hr>")}},a=t.class+"",n=t.text.split(/---/)[0]+"...",r=a.indexOf("articleList")?e(t.text+"<hr/>"):e("<img src='"+t.img+"'>"+(n.replace(/(<br>){1,}/g,"$n$").replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,"").replace(/\$n\$/g,"<br>")+"<hr/>"));return Object(h.jsxs)("div",{className:"content "+t.class,id:t.id,onClick:function(e){void 0!=t.articleNumber&&(e.preventDefault(),window.location.search="?n="+t.articleNumber)},children:[Object(h.jsx)("h2",{className:"entry_header",children:t.title}),Object(h.jsx)("div",{className:"entry_body",dangerouslySetInnerHTML:r}),Object(h.jsx)("div",{className:"entry_footer",children:Object(h.jsxs)("div",{className:"pagetop",children:[Object(h.jsx)("p",{children:t.date}),Object(h.jsx)("a",{href:"#header",title:"\u30da\u30fc\u30b8\u306e\u30c8\u30c3\u30d7\u3078",children:"\u30da\u30fc\u30b8\u306e\u30c8\u30c3\u30d7\u3078"})]})})]})},b=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={loading:!1},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this;return fetch("https://ponsuke.microcms.io/api/v1/side",{headers:{"X-API-KEY":"9b30e206-4b28-4453-91f5-5d39d40d15a3"}}).then((function(t){return t.json()})).then((function(e){t.setState({loading:!0,data:e.contents})})).catch((function(t){console.error(t)}))}},{key:"renderContents",value:function(t){return console.log(t),Object(h.jsx)(p,{title:t.title,text:t.content,id:"profile"},t.id)}},{key:"render",value:function(){var t=this;return this.state.loading?Object(h.jsx)("div",{id:"side",children:this.state.data.map((function(e){return t.renderContents(e)}))}):Object(h.jsx)("div",{children:Object(h.jsx)("p",{})})}}]),a}(o.a.Component),O=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={loading:!1,param:t.param,data:t.data.contents,max:t.data.totalCount},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this;if(this.state.param.isDetail){var e=this.state.max-this.state.param.n;return fetch("https://ponsuke.microcms.io/api/v1/diary?offset="+e+"&limit=1",{headers:{"X-API-KEY":"9b30e206-4b28-4453-91f5-5d39d40d15a3"}}).then((function(t){return t.json()})).then((function(e){var a=t.state;t.setState(Object(u.a)(Object(u.a)({},a),{},{loading:!0,data:e})),console.log(e)})).catch((function(t){console.error(t)}))}var a=this.state;this.setState(Object(u.a)(Object(u.a)({},a),{},{loading:!0}))}},{key:"renderContents",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0;return Object(h.jsx)(p,{title:t.title,text:t.main,date:t.updatedAt,class:e+" maincontent",img:t.thumbnail.url,articleNumber:a},t.id)}},{key:"render",value:function(){var t=this;if(this.state.data&&this.state.loading){console.log(this.state);var e=Math.sign(this.state.param.p)||void 0==this.state.param.p?"articleList":"",a=this.state.data,n=this.state.max-10*(this.state.param.p-1);return Object(h.jsx)("div",{id:"main",children:this.state.param.isDetail?this.renderContents(a.contents[0]):this.state.data.map((function(a,r){return t.renderContents(a,e,n-r)}))})}return Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Loading..."})})}}]),a}(o.a.Component);function m(t){var e=t.max/10;return console.log(t),Object(h.jsxs)("p",{children:[1==t.param.p?"":Object(h.jsx)("a",{href:"?p="+(t.param.p-1),children:"\u524d\u306e\u30da\u30fc\u30b8\u3078"}),Object(h.jsx)("span",{children:"\u2003"}),Object(h.jsx)("a",{href:"?p=1",children:"\u30db\u30fc\u30e0"}),Object(h.jsx)("span",{children:"\u2003"}),t.param.p==Math.ceil(e)?"":Object(h.jsx)("a",{href:"?p="+(parseInt(t.param.p)+1),children:"\u6b21\u306e\u30da\u30fc\u30b8\u3078"})]})}var f=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={class:t.class,param:t.param,max:t.max},r}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"page_navi",className:this.state.class,children:this.state.param.isDetail?Object(h.jsx)("div",{children:"hoge"}):m(this.state)})}}]),a}(o.a.Component),v=a(15),x=function(){var t=window.location.search,e={};if(t){(t=t.substring(1)).split("&").forEach((function(t){var a=t.split("=");e=Object(u.a)(Object(u.a)({},e),{},Object(v.a)({},a[0],a[1]))})),void 0==e.p&&(e.p=1);var a=e.n,n=Math.sign(a)?a:0;return isNaN(a)&&(e.n=0),e.isDetail=n,e}return e.p=1,e.isDetail=0,e},g=a(22),y=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={loading:!1},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=10*(x().p-1);return fetch("https://ponsuke.microcms.io/api/v1/diary?offset="+e,{headers:{"X-API-KEY":"9b30e206-4b28-4453-91f5-5d39d40d15a3"}}).then((function(t){return t.json()})).then((function(e){var a=t.state;t.setState(Object(u.a)(Object(u.a)({},a),{},{loading:!0,data:e})),console.log(e)})).catch((function(t){console.error(t)}))}},{key:"render",value:function(){return console.log(x()),this.state.loading?Object(h.jsxs)("div",{id:"container",children:[Object(h.jsxs)(g.a,{children:[Object(h.jsx)("meta",{charSet:"utf-8"}),Object(h.jsx)("title",{children:"My Title"}),Object(h.jsx)("meta",{name:"twitter:card",content:"summary"})]}),Object(h.jsx)(O,{param:x(),data:this.state.data}),Object(h.jsx)(f,{class:"sp_only",param:x(),max:this.state.data.totalCount}),Object(h.jsx)(b,{}),Object(h.jsx)(f,{class:"pc_only",param:x(),max:this.state.data.totalCount})]}):Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Loading..."})})}}]),a}(o.a.Component),k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),c(t),i(t)}))},C=a(25),N=a(3),D=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsx)(C.a,{children:Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(N.a,{exact:!0,path:"/header",component:j}),Object(h.jsx)(N.a,{exact:!0,path:"/container",component:y})]})})}}]),a}(o.a.Component);d.a.render(Object(h.jsx)(D,{}),document.getElementById("root")),k()}},[[37,1,2]]]);
//# sourceMappingURL=main.5762abf0.chunk.js.map