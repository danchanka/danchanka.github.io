(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[67479],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return N}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),N=a,s=c["".concat(p,".").concat(N)]||c[N]||m[N]||i;return n?r.createElement(s,o(o({ref:t},u),{},{components:n})):r.createElement(s,o({ref:t},u))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91285:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 (SET, CHANGED, ...)"},l=void 0,p={unversionedId:"Change_operators_SET_CHANGED_etc",id:"version-v4/Change_operators_SET_CHANGED_etc",isDocsHomePage:!1,title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 (SET, CHANGED, ...)",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0438 \u043b\u0438 \u0434\u043b\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438 \u0442\u0435 \u0438\u043b\u0438 \u0438\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439. \u0412\u0441\u0435 \u044d\u0442\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043d\u044b\u043c\u0438 \u043e\u0442 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (PREV), \u043e\u0434\u043d\u0430\u043a\u043e \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0447\u0438\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u0435\u043d\u043d\u043e \u0438\u0445. \u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u0438\u0434\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0438 \u0438\u0445 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/Change_operators_SET_CHANGED_etc.md",sourceDirName:".",slug:"/Change_operators_SET_CHANGED_etc",permalink:"/ru/Change_operators_SET_CHANGED_etc",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/Change_operators_SET_CHANGED_etc.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"09.06.2021",frontMatter:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 (SET, CHANGED, ...)"},sidebar:"version-v4/learn",previous:{title:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 (PREV)",permalink:"/ru/Previous_value_PREV"},next:{title:"\u041e\u0431\u0437\u043e\u0440",permalink:"/ru/User_IS_interaction"}},d=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0438 \u043b\u0438 \u0434\u043b\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438 \u0442\u0435 \u0438\u043b\u0438 \u0438\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439. \u0412\u0441\u0435 \u044d\u0442\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043d\u044b\u043c\u0438 \u043e\u0442 ",(0,i.kt)("a",{parentName:"p",href:"/ru/Previous_value_PREV"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (",(0,i.kt)("inlineCode",{parentName:"a"},"PREV"),")"),", \u043e\u0434\u043d\u0430\u043a\u043e \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0447\u0438\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u0435\u043d\u043d\u043e \u0438\u0445. \u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u0438\u0434\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0438 \u0438\u0445 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"),(0,i.kt)("th",{parentName:"tr",align:null},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),(0,i.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SET")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"f AND NOT PREV(f)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DROPPED")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NOT f AND PREV(f)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u0421\u0431\u0440\u043e\u0448\u0435\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CHANGED")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(f OR PREV(f)) AND NOT f==PREV(f)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SETCHANGED")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"f AND NOT f==PREV(f)"),(0,i.kt)("br",null),"\u0438\u043b\u0438",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"CHANGED(f) AND NOT DROPPED(f)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e \u043d\u0430 \u043d\u0435 ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DROPCHANGED")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CHANGED(f) AND NOT SET(f)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0441\u0431\u0440\u043e\u0448\u0435\u043d\u043e, \u0438\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e \u0441 \u043e\u0434\u043d\u043e\u0433\u043e \u043d\u0435 ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL")," \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0435 \u043d\u0435 ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SETDROPPED")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SET(f) OR DROPPED(f)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0441\u0431\u0440\u043e\u0448\u0435\u043d\u043e \u0438\u043b\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0441 ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL")," \u043d\u0430 \u043d\u0435 ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL"))))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u042d\u0442\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u043e \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/Events#change"},"\u0441\u043e\u0431\u044b\u0442\u0438\u0439"),": \u0432 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u043d\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f (\u0430 \u0442\u043e\u0447\u043d\u0435\u0435, \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0435\u0433\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043e\u043a)."))),(0,i.kt)("h3",{id:"\u044f\u0437\u044b\u043a"},"\u042f\u0437\u044b\u043a"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/ru/Change_operators"},"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438"),". "),(0,i.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"quantity = DATA NUMERIC[14,2] (OrderDetail);\nprice = DATA NUMERIC[14,2] (OrderDetail);\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n\ncreatedUser = DATA CustomUser (Order);\ncreatedUser (Order o) <- currentUser() WHEN SET(o IS Order);\n\nnumerator = DATA Numerator (Order);\nnumber = DATA STRING[28] (Order);\nseries = DATA BPSTRING[2] (Order);\nWHEN SETCHANGED(numerator(Order o)) AND\n     NOT CHANGED(number(o)) AND\n     NOT CHANGED(series(o))\n     DO {\n        number(o) <- curStringValue(numerator(o));\n        series(o) <- series(numerator(o));\n        incrementValueSession(numerator(o));\n     }\n;\n")))}m.isMDXComponent=!0}}]);