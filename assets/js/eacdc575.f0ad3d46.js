(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[70907],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21725:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i={title:"Show message (MESSAGE, ASK)"},s=void 0,l={unversionedId:"Show_message_MESSAGE_ASK",id:"Show_message_MESSAGE_ASK",isDocsHomePage:!1,title:"Show message (MESSAGE, ASK)",description:"The show message operator creates an action which shows the user a window with a text message. The message is defined as some property whose value will be used as a message.",source:"@site/docs/Show_message_MESSAGE_ASK.md",sourceDirName:".",slug:"/Show_message_MESSAGE_ASK",permalink:"/next/Show_message_MESSAGE_ASK",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Show_message_MESSAGE_ASK.md",version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Show message (MESSAGE, ASK)"},sidebar:"learn",previous:{title:"Overview",permalink:"/next/User_IS_interaction"},next:{title:"Overview",permalink:"/next/File_operators"}},p=[{value:"Flow control",id:"flow-control",children:[]},{value:"Dialog form",id:"dialog",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"show message")," operator creates an ",(0,r.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," which shows the user a window with a text message. The message is defined as some ",(0,r.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," whose value will be used as a message."),(0,r.kt)("h3",{id:"flow-control"},"Flow control"),(0,r.kt)("p",null,"By default, the created action stops the thread until the user closes the message. However, this behavior can be changed using the corresponding option \u2013 in this case, the created action is completed immediately and the message is shown to the user as soon as possible (that is, the next user interaction). The first mode shall be called ",(0,r.kt)("em",{parentName:"p"},"synchronous")," and the second ",(0,r.kt)("em",{parentName:"p"},"asynchronous"),"."),(0,r.kt)("h3",{id:"dialog"},"Dialog form"),(0,r.kt)("p",null,"It is also often necessary not only to inform the user about something, but also, for example, to request confirmation to continue an action. For such cases, the operator allows, instead of simply displaying the message (with a single ",(0,r.kt)("inlineCode",{parentName:"p"},"OK")," button), to ask a question with the option of canceling (",(0,r.kt)("inlineCode",{parentName:"p"},"OK"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Cancel"),") and thereby essentially to implement ",(0,r.kt)("a",{parentName:"p",href:"/next/Value_input"},"a value input"),". This input is considered to have been ",(0,r.kt)("a",{parentName:"p",href:"/next/Value_input#result"},"canceled")," if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cancel")," button is pressed (there is no input value in that case)."),(0,r.kt)("p",null,"In addition, a third option can be added to the question: ",(0,r.kt)("inlineCode",{parentName:"p"},"Yes")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"No")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"Cancel"),". In this case, it is considered that ",(0,r.kt)("a",{parentName:"p",href:"/next/Value_input#result"},"the input result")," will be a value of logical class (",(0,r.kt)("inlineCode",{parentName:"p"},"Yes")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"No")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"). As in the first case, the input is considered to be canceled if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cancel")," button is selected."),(0,r.kt)("p",null,"The form of the operator in which the user is asked a question shall be called the ",(0,r.kt)("em",{parentName:"p"},"dialog")," form. "),(0,r.kt)("p",null,"As with other value input operators, in the dialog form of this operator you can define ",(0,r.kt)("a",{parentName:"p",href:"/next/Value_input#result"},"main and alternative")," actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),(0,r.kt)("p",null,"The operator dialog form is available in synchronous mode only."),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"To declare an action showing a message, use the ",(0,r.kt)("a",{parentName:"p",href:"/next/MESSAGE_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"MESSAGE")," operator"),". To display the message in dialog form, use the ",(0,r.kt)("a",{parentName:"p",href:"/next/ASK_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"ASK")," operator"),"."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"message  { MESSAGE 'Hello World!'; } // plain text message\n\nisGood = DATA BOOLEAN (Item);\nstringData(Item i)   {\n    // depending on which item will be passed to the action, a window will be shown \n    // either with the text 'Good' or with the text 'Bad'\n    MESSAGE IF isGood(i) THEN 'Good' ELSE 'Bad';   \n}\n\n// In this case, five text messages will be shown to the user\ntestMessage()  { \n    LOCAL i = INTEGER();\n    i() <- 0;\n    WHILE i() < 5 DO {\n        i() <- i() + 1;\n        MESSAGE i();\n    }\n}\n\n// In the case of NOWAIT, one text message combining messages from five MESSAGE calls will be shown to the user\ntestMessageNowait()  {              \n    LOCAL i = INTEGER();\n    i() <- 0;\n    WHILE i() < 5 DO {\n        i() <- i() + 1;\n        MESSAGE i() NOWAIT;\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"testAsk ()  {\n    ASK 'Are you sure you want to continue?' DO {\n        MESSAGE 'You continued';\n    }\n\n    ASK 'Use old values?' useOld = YESNO DO {\n        IF useOld THEN\n            MESSAGE 'Using old values';\n        ELSE\n            MESSAGE 'Using new values';\n    }\n}\n")))}u.isMDXComponent=!0}}]);