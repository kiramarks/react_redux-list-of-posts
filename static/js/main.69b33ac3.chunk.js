(this["webpackJsonpreact_redux-list-of-posts"]=this["webpackJsonpreact_redux-list-of-posts"]||[]).push([[0],{27:function(e,t,n){e.exports=n(39)},36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=n.n(c),o=n(3),l=n(25),u=(n(36),n(7)),i=n.n(u),m=n(13),p=n(5),d=n(23),f=n(24),E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return!0;case"FINISH_LOADING":return!1;default:return e}},v=n(8),h=function(e){return{type:"SET_POSTS",posts:e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return t.posts;case"DELETE_COMMENT":return e.map((function(e){return e.id===t.postId?Object(v.a)(Object(v.a)({},e),{},{comments:e.comments.filter((function(e){return e.id!==t.commentId}))}):e}));case"DELETE_POST":return e.filter((function(e){return e.id!==t.postId}));default:return e}},b=n(15),y="https://jsonplaceholder.typicode.com",O=function(){var e=Object(m.a)(i.a.mark((function e(){var t,n,a,r,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("".concat(y,"/posts")).then((function(e){return e.json()})),fetch("".concat(y,"/users")).then((function(e){return e.json()})),fetch("".concat(y,"/comments")).then((function(e){return e.json()}))]);case 2:return t=e.sent,n=Object(b.a)(t,3),a=n[0],r=n[1],c=n[2],s=a.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{user:r.find((function(t){return t.id===e.userId})),comments:c.filter((function(t){return t.postId===e.id}))})})),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){return{type:"SET_ERROR",value:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR":return t.value;default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return t.value;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return t.query;default:return e}},g=Object(p.combineReducers)({isLoading:E,posts:_,hasError:j,isInitialized:I,query:T}),w=function(e){return e.isLoading},S=function(e){return e.posts},L=function(e){return e.hasError},D=function(e){return e.isInitialized},k=function(e){return e.query},C=Object(p.createStore)(g,Object(d.composeWithDevTools)(Object(p.applyMiddleware)(f.a))),x=n(26),R=function(e){var t=e.name,n=e.email,a=e.address;return r.a.createElement("section",{className:"user post__user"},r.a.createElement("p",{className:"user__name"},t),r.a.createElement("a",{href:"mailto:".concat(n),className:"user__email"},n),r.a.createElement("address",{className:"user__address"},r.a.createElement("div",null,"".concat(a.street,", ").concat(a.suite)),r.a.createElement("div",null,a.city)))},A=function(e){var t=e.comments,n=e.postId,a=Object(o.b)();return r.a.createElement(r.a.Fragment,null,t.map((function(e){var t=e.id,c=e.name,s=e.body,o=e.email;return r.a.createElement("section",{className:"post__comment",key:t},r.a.createElement("span",{className:"comment__delete",onClick:function(){return a(function(e,t){return{type:"DELETE_COMMENT",postId:e,commentId:t}}(n,t))}},"Delete comment"),r.a.createElement("p",{className:"comment__name"},c),r.a.createElement("p",{className:"comment__body"},s),r.a.createElement("a",{href:"mailto:".concat(o),className:"comment__email"},o))})))},M=function(e){var t=e.handleSearch,n=Object(o.c)(k);return r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("textarea",{id:"textarea1",value:n,className:"materialize-textarea",onChange:function(e){return t(e)}}),r.a.createElement("label",{htmlFor:"textarea1"},"Type something to search post...")))))};var F=function(e,t){var n;return function(){for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];clearTimeout(n),n=setTimeout((function(){e.apply(void 0,r)}),t)}},P=function(e){var t=e.posts,n=Object(a.useState)(""),c=Object(b.a)(n,2),s=c[0],l=c[1],u=Object(o.b)(),i=Object(a.useMemo)((function(){return Object(x.a)(t).filter((function(e){return(e.title.toLowerCase()+e.body.toLowerCase()).includes(s.toLowerCase())}))}),[t,s]),m=Object(a.useCallback)(F(l,1e3),[]),p=Object(a.useCallback)((function(e){u({type:"SET_QUERY",query:e.target.value}),m(e.target.value)}),[u,m]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{handleSearch:p}),r.a.createElement("article",{className:"app__post-list"},i.map((function(e){var t=e.id,n=e.title,a=e.user,c=e.body,s=e.comments;return r.a.createElement("section",{className:"post",key:t},r.a.createElement("h5",{className:"post__title"},n),r.a.createElement("span",{className:"post__delete",onClick:function(){return u({type:"DELETE_POST",postId:t})}},"Delete post"),r.a.createElement("p",{className:"post__body"},c),r.a.createElement(R,a),r.a.createElement("p",{className:"comment__heading"},"Comments"),r.a.createElement(A,{comments:s,postId:t}))}))))},q=function(){var e=Object(o.c)(w),t=Object(o.c)(D),n=Object(o.c)(S),a=Object(o.c)(L),c=Object(o.b)(),s=function(){c(function(){var e=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(N(!1)),t({type:"START_LOADING"}),e.prev=2,e.next=5,O();case 5:n=e.sent,t(h(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t(N(!0));case 12:t({type:"FINISH_LOADING"}),t({type:"SET_INITIALIZED",value:!0});case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}())};return r.a.createElement("main",{className:"app"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h2",{className:"app__heading"},"Dynamic list of posts"),!e&&!t&&r.a.createElement("button",{type:"button",className:"waves-effect waves-light btn deep-purple accent-3",onClick:s},"load data"),e&&r.a.createElement("p",null,"Loading..."),a&&r.a.createElement("button",{type:"button",className:"waves-effect waves-light btn deep-purple accent-3",onClick:s},"try again")),!a&&!e&&t&&r.a.createElement(P,{posts:n}))},G=function(){return r.a.createElement(o.a,{store:C},r.a.createElement(l.a,null,r.a.createElement(q,null)))};s.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.69b33ac3.chunk.js.map