"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[95911],{97987:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var t=r(74848),o=r(28453);const c={title:"Sequence ({...})"},a=void 0,s={id:"Sequence",title:"Sequence ({...})",description:"To create an action that performs a sequence of other actions, the {...} operator is used - a block enclosed by curly brackets. The body of this block must contain a sequence of action operators and local property declarations.",source:"@site/versioned_docs/version-v4/Sequence.md",sourceDirName:".",slug:"/Sequence",permalink:"/v4/Sequence",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Sequence.md",tags:[],version:"v4",lastUpdatedAt:162565152e4,frontMatter:{title:"Sequence ({...})"},sidebar:"learn",previous:{title:"Execution order",permalink:"/v4/Execution_order"},next:{title:"Call (EXEC)",permalink:"/v4/Call_EXEC"}},i={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function u(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To create an ",(0,t.jsx)(n.a,{href:"/v4/Actions",children:"action"})," that performs a sequence of other actions, the ",(0,t.jsxs)(n.a,{href:"/v4/Braces_operator",children:[(0,t.jsx)(n.code,{children:"{...}"})," operator"]})," is used - a block enclosed by curly brackets. The body of this block must contain a sequence of ",(0,t.jsx)(n.a,{href:"/v4/Action_operators_paradigm",children:"action operators"})," and local property declarations."]}),"\n",(0,t.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(n.p,{children:["To declare an action that executes a sequence of other actions, use the ",(0,t.jsxs)(n.a,{href:"/v4/Braces_operator",children:[(0,t.jsx)(n.code,{children:"{...}"})," operator"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Currency;\r\nname = DATA STRING[30] (Currency);\r\ncode = DATA INTEGER (Currency);\r\n\r\nCLASS Order;\r\ncurrency = DATA Currency (Order);\r\ncustomer = DATA STRING[100] (Order);\r\ncopy 'Copy' (Order old)  {\r\n    // an action is created that consists of the sequential execution of two actions\r\n    NEW new = Order {                                   \r\n        currency(new) <- currency(old); // a semicolon is put after each statement\r\n        customer(new) <- customer(old);\r\n    } // there is no semicolon in this line, because the operator ends in }\r\n}\r\n\r\nloadDefaultCurrency(ISTRING[30] name, INTEGER code)  {\r\n    NEW c = Currency {\r\n        name(c) <- name;\r\n        code(c) <- code;\r\n    }\r\n}\r\nrun ()  {\r\n    loadDefaultCurrency('USD', 866);\r\n    loadDefaultCurrency('EUR', 1251);\r\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(96540);const o={},c=t.createContext(o);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);