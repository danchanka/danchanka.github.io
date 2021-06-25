(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[43183],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46283:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"MESSAGE operator"},s=void 0,l={unversionedId:"MESSAGE_operator",id:"MESSAGE_operator",isDocsHomePage:!1,title:"MESSAGE operator",description:"The MESSAGE operator creates an action that shows the user a message.",source:"@site/docs/MESSAGE_operator.md",sourceDirName:".",slug:"/MESSAGE_operator",permalink:"/next/MESSAGE_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/MESSAGE_operator.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"MESSAGE operator"},sidebar:"learn",previous:{title:"INPUT operator",permalink:"/next/INPUT_operator"},next:{title:"MULTI operator",permalink:"/next/MULTI_action_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MESSAGE")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that shows the user a ",(0,o.kt)("a",{parentName:"p",href:"/next/Show_message_MESSAGE_ASK"},"message"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MESSAGE expression [syncType]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MESSAGE")," operator creates an action which shows a window with a text message to the user. The text message can be a string constant or a more complex ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," which value is or can be converted to a string."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"expression")),(0,o.kt)("p",{parentName:"li"},"  An expression which value is the message text.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"syncType")),(0,o.kt)("p",{parentName:"li"},"  Specifies when the created action should be completed:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WAIT")," - after the client completes the action (closes the message). This value is used by default."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NOWAIT")," - right after the information is ready for sending to the client (the message text is read). If several ",(0,o.kt)("inlineCode",{parentName:"li"},"MESSAGE")," ",(0,o.kt)("inlineCode",{parentName:"li"},"NOWAIT")," actions are called during the execution of some continuous action, they do not create separate messages but are concatenated with the previous messages of the same type. A single concatenated message will be shown to the user at the end of the continuous action as a result.")))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"message  { MESSAGE 'Hello World!'; }                                // plain text message\n\nisGood = DATA BOOLEAN (Item);\nstringData(Item i)   {\n    MESSAGE IF isGood(i) THEN 'Good' ELSE 'Bad';   // depending on which item will be passed to the action, a window will be shown either with the text 'Good' or with the text 'Bad'\n}\n\ntestMessage()  {                    // In this case, five text messages will be shown to the user\n    LOCAL i = INTEGER();\n    i() <- 0;\n    WHILE i() < 5 DO {\n        i() <- i() + 1;\n        MESSAGE i();\n    }\n}\n\ntestMessageNowait()  {              // In the case of NOWAIT, one text message combining messages from five MESSAGE calls will be shown to the user\n    LOCAL i = INTEGER();\n    i() <- 0;\n    WHILE i() < 5 DO {\n        i() <- i() + 1;\n        MESSAGE i() NOWAIT;\n    }\n}\n")))}u.isMDXComponent=!0}}]);