(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[33684],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return N},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},N=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,N=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,s=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(s,i(i({ref:t},N),{},{components:n})):a.createElement(s,i({ref:t},N))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21308:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return d},default:function(){return m}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b (+, CONCAT, SUBSTRING)"},p=void 0,o={unversionedId:"String_operators_+_CONCAT_SUBSTRING",id:"String_operators_+_CONCAT_SUBSTRING",isDocsHomePage:!1,title:"\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b (+, CONCAT, SUBSTRING)",description:"\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b - \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b, \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430\u043c\u0438 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432. \u0412 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/String_operators_+_CONCAT_SUBSTRING.md",sourceDirName:".",slug:"/String_operators_+_CONCAT_SUBSTRING",permalink:"/ru/next/String_operators_+_CONCAT_SUBSTRING",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/String_operators_+_CONCAT_SUBSTRING.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"09.06.2021",frontMatter:{title:"\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b (+, CONCAT, SUBSTRING)"},sidebar:"learn",previous:{title:"\u042d\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u044b (MAX, MIN)",permalink:"/ru/next/Extremum_MAX_MIN"},next:{title:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438 (STRUCT, [])",permalink:"/ru/next/Structure_operators_STRUCT"}},d=[{value:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430",id:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043a\u043b\u0430\u0441\u0441\u0430-\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],N={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b - \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b, \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430\u043c\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/Built-in_classes"},"\u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432"),". \u0412 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043c\u0435\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"+"),", ",(0,l.kt)("a",{parentName:"td",href:"/ru/next/CONCAT_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"CONCAT"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u0432\u0430 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0430 \u043d\u0430 \u0432\u0445\u043e\u0434, \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0443\u044e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0441\u0442\u0440\u043e\u043a, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0432 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0430\u0445"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'a' + 'b'")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'ab'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SUBSTRING")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0430"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0442\u0440\u0438 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0430 \u043d\u0430 \u0432\u0445\u043e\u0434, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0443, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0443\u044e \u0438\u0437 \u0441\u0442\u0440\u043e\u043a\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u043f\u0435\u0440\u0432\u043e\u043c \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0435, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u0441\u0438\u043c\u0432\u043e\u043b\u0430, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u043e \u0432\u0442\u043e\u0440\u043e\u043c \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0435, \u0438 \u0434\u043b\u0438\u043d\u044b, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0442\u0440\u0435\u0442\u044c\u0435\u043c \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0435"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SUBSTRING('abc', 2, 2)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'bc'"))))),(0,l.kt)("p",null,"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"SUBSTRING")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),", \u0435\u0441\u043b\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),". \u0414\u043b\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"CONCAT")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u0432 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0435 \u0431\u0443\u0434\u0435\u0442 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 (\u043d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0434\u0432\u0443\u0445 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"). \u0422\u0430\u043a\u0436\u0435, \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"CONCAT"),", \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0442\u0440\u0435\u0442\u0438\u0439 \u043e\u043f\u0435\u0440\u0430\u043d\u0434 (",(0,l.kt)("em",{parentName:"p"},"\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c"),"), \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0442\u043e\u0433\u0434\u0430 \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e\u0433\u0434\u0430, \u043a\u043e\u0433\u0434\u0430 \u043e\u0431\u0430 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0430 \u043d\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"CONCAT ' ', 'John', 'Smith'")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"'John Smith'"),", \u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"CONCAT ' ', 'John', NULL")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"'John'"),"."),(0,l.kt)("h3",{id:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043a\u043b\u0430\u0441\u0441\u0430-\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430"),(0,l.kt)("p",null,"\u041a\u043b\u0430\u0441\u0441 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"+"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"CONCAT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"result = STRING[p1.blankPadded AND p2.blankPadded, p1.caseInsensitive OR p2.caseInsensitive, p1.length + p2.length]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SUBSTRING(p, from, length)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"result = STRING[p.blankPadded, p.caseInsensitive, length]"))))),(0,l.kt)("p",null,"\u0433\u0434\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"blankPadded"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"caseInsensitive")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"length")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/Built-in_classes#commonparentclass"},"\u043e\u0431\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043a\u0430")," \u0434\u043b\u044f \u0434\u0432\u0443\u0445 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 (\u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e - \u0421\u0442\u0440\u043e\u043a\u0438)."),(0,l.kt)("p",null,"\u0412 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u044b, \u043a\u043b\u0430\u0441\u0441\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u0442\u043b\u0438\u0447\u043d\u044b \u043e\u0442 \u0441\u0442\u0440\u043e\u043a, \u043f\u0440\u0438\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u043a \u0441\u0442\u0440\u043e\u043a\u0430\u043c \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u0439:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041a\u043b\u0430\u0441\u0441"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DATE"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"DATETIME"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"TIME")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"STRING[25]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NUMERIC")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"STRING[p.length]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LOGICAL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"STRING[1]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FILE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TEXT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/ru/next/User_classes"},"\u041e\u0431\u044a\u0435\u043a\u0442")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"STRING[10]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"STRING[8]"))))),(0,l.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Person;\nfirstName = DATA STRING[100] (Person);\nmiddleName = DATA STRING[100] (Person);\nlastName = DATA STRING[100] (Person);\n\nfullName(Person p) = CONCAT ' ', firstName(p), middleName(p), lastName(p);     // \u0435\u0441\u043b\u0438 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0447\u0430\u0441\u0442\u044c \u0438\u043c\u0435\u043d\u0438 \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u0430, \u0442\u043e \u044d\u0442\u0430 \u0447\u0430\u0441\u0442\u044c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u0430 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u043c\n")))}m.isMDXComponent=!0}}]);