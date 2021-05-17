(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[73743],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25397:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"WHEN instruction"},s={unversionedId:"WHEN_instruction",id:"WHEN_instruction",isDocsHomePage:!1,title:"WHEN instruction",description:"The\xa0WHEN\xa0instruction adds a\xa0simple event handler.",source:"@site/docs/WHEN_instruction.md",sourceDirName:".",slug:"/WHEN_instruction",permalink:"/next/WHEN_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/WHEN_instruction.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"WHEN instruction"},sidebar:"learn",previous:{title:"Event description block",permalink:"/next/Event_description_block"},next:{title:"Instruction<- WHEN",permalink:"/next/Instruction_-_WHEN"}},p=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("strong",{parentName:"p"},"WHEN"),"\xa0instruction adds a\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Simple_event"},"simple event")," handler."),(0,o.kt)("h3",{id:"syntax"},"Syntax\xa0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WHEN eventClause eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"WHEN")," instruction adds a simple event handler. In a condition expression you can implicitly declare local parameters that can then be used in the event handler."),(0,o.kt)("p",null,"Also, the\xa0",(0,o.kt)("strong",{parentName:"p"},"ORDER")," block can be\xa0used to define the order in which the handler will be called for an object collection for which the condition on the simple event has been met.\xa0"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Using the\xa0",(0,o.kt)("strong",{parentName:"p"},"WHEN"),"\xa0instruction is much like the following instruction:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"ON eventClause FOR eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),(0,o.kt)("p",{parentName:"div"},"but it also has ",(0,o.kt)("a",{parentName:"p",href:"/next/Simple_event"},"a number of advantages"),"."))),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"eventClause")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/Event_description_block"},"Event description block"),". Describes the ",(0,o.kt)("a",{parentName:"p",href:"/next/Events"},"base event"),"\xa0for the created handler."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"eventExpr")),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," whose value is used as a condition for the created simple event. If the obtained property does not contain the\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Previous_value_PREV_"},(0,o.kt)("strong",{parentName:"a"},"PREV"))," operator, the platform automatically wraps it into the\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Property_change_CHANGE_"},(0,o.kt)("strong",{parentName:"a"},"CHANGE"))," ",(0,o.kt)("strong",{parentName:"p"},"operator"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"eventAction")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operator#contextdependent"},"context-dependent operator")," that describes an action to be added as an event handler."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"DESC")),(0,o.kt)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"orderExpr1, ..., orderExprM")),(0,o.kt)("p",null,"A list of expressions that defines the order in which handlers will be called for object collections for which an event condition has been met. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc.\xa0"),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock;\nname = DATA STRING[50] (Stock);\n\nbalance = DATA INTEGER (Sku, Stock);\n\n// send an email when the balance is less than 0 as a result of applying session changes\nWHEN balance(Sku s, Stock st) < 0 DO\n      EMAIL SUBJECT 'The balance has become negative for the item ' + name(s) + ' in the warehouse ' + name(st);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndiscount = DATA NUMERIC[6,2] (OrderDetail);\n\nWHEN LOCAL CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n    discount(OrderDetail d) <- 50 WHERE order(d) == o;\n")))}l.isMDXComponent=!0}}]);