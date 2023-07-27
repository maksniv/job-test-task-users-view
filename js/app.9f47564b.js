(function(){"use strict";var t={1097:function(t,e,n){var o=n(9242),r=n(3396);function a(t,e){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var s=n(89);const c={},u=(0,s.Z)(c,[["render",a]]);var i=u,l=n(2483);const f=[{path:"/",name:"home",component:()=>n.e(841).then(n.bind(n,5841))},{path:"/about/:userId/:postId",name:"aboutPost",component:()=>n.e(996).then(n.bind(n,9996))}],d=(0,l.p7)({history:(0,l.PO)("/job-test-task-users-view/"),routes:f,scrollBehavior(){return{top:0}}});var p=d,m=(n(7658),n(65)),h=n(4161),g=(0,m.MT)({state:{postsInfoData:{},currentDataPost:{},currentDataUser:{},commentsData:[],selectedSortValue:"",sortOptionsValue:[]},getters:{getPostsInfoData:t=>""===t.selectedSortValue?t.postsInfoData:[...t.postsInfoData].filter((e=>e.userId==t.selectedSortValue)),getCurrentDataPost:t=>t.currentDataPost,getCommentsInfo:t=>t.commentsData,getSelectedSortValue:t=>t.selectedSortValue,getSortOptionsValue:t=>t.sortOptionsValue,getCurrentDataUser:t=>t.currentDataUser},mutations:{SET_CURRENT_DATA_USER:(t,e)=>{t.currentDataUser=e},SET_COMMENTS_DATA:(t,e)=>{t.commentsData=e},ADD_COMMENT_IN_COMMENTS_DATA:(t,e)=>{console.log(t.commentsData),console.log(e),t.commentsData.push(e)},SET_POSTS_INFO_DATA:(t,e)=>{t.postsInfoData=e},SET_CURRENT_DATA_POST:(t,e)=>{t.currentDataPost=e},SET_SELECTED_SORT_VALUE:(t,e)=>{t.selectedSortValue=e},SET_SORT_OPTIONS_VALUE:(t,e)=>{t.sortOptionsValue=e}},actions:{async getAllDataPosts({commit:t}){h.Z.get("https://jsonplaceholder.typicode.com/posts").then((e=>{t("SET_POSTS_INFO_DATA",e.data)})).catch((t=>{console.log(t)}))},async getCurrentPost({commit:t},e){h.Z.get(`https://jsonplaceholder.typicode.com/posts/${e}`).then((e=>{t("SET_CURRENT_DATA_POST",e.data)})).catch((t=>{console.log(t)}))},async getComments({commit:t},e){h.Z.get(`https://jsonplaceholder.typicode.com/posts/${e}/comments`).then((e=>{t("SET_COMMENTS_DATA",e.data)})).catch((t=>{console.log(t)}))},async getAllDataUsers({commit:t}){h.Z.get("https://jsonplaceholder.typicode.com/users").then((e=>{t("SET_SORT_OPTIONS_VALUE",e.data)})).catch((t=>{console.log(t)}))},async getCurrentUser({commit:t},e){h.Z.get(`https://jsonplaceholder.typicode.com/users/${e}`).then((e=>{t("SET_CURRENT_DATA_USER",e.data)})).catch((t=>{console.log(t)}))},async createComment({commit:t},e){h.Z.post("https://jsonplaceholder.typicode.com/comments",e,{headers:{"Content-Type":"application/json; charset=UTF-8"}}).then((e=>{t("ADD_COMMENT_IN_COMMENTS_DATA",e.data)})).catch((t=>{console.log(t.response.data)}))}}});(0,o.ri)(i).use(g).use(p).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var s=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(c=!1,a<s&&(s=a));if(c){t.splice(l--,1);var i=r();void 0!==i&&(e=i)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{841:"b0a97780",996:"b9c7ec01"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{841:"6eeef0be",996:"5c4392a7"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="job-test-task-users-view:";n.l=function(o,r,a,s){if(t[o])t[o].push(r);else{var c,u;if(void 0!==a)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var f=i[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+a){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+a),c.src=o),t[o]=[r];var d=function(e,n){c.onerror=c.onload=null,clearTimeout(p);var r=t[o];if(delete t[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/job-test-task-users-view/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var s=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=c,a.parentNode&&a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=s,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=function(o){return new Promise((function(r,a){var s=n.miniCssF(o),c=n.p+s;if(e(s,c))return r();t(o,c,null,r,a)}))},r={143:0};n.f.miniCss=function(t,e){var n={841:1,996:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var s=n.p+n.u(e),c=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",c.name="ChunkLoadError",c.type=a,c.request=s,r[1](c)}};n.l(s,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,s=o[0],c=o[1],u=o[2],i=0;if(s.some((function(e){return 0!==t[e]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var l=u(n)}for(e&&e(o);i<s.length;i++)a=s[i],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkjob_test_task_users_view"]=self["webpackChunkjob_test_task_users_view"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1097)}));o=n.O(o)})();
//# sourceMappingURL=app.9f47564b.js.map