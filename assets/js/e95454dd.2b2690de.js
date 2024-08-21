"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[64433],{56390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(74848),s=t(28453);const r={title:"ACTION+ statement"},i=void 0,o={id:"ACTION+_statement",title:"ACTION+ statement",description:"The ACTION+ statement adds an implementation (branching condition) to an abstract action.",source:"@site/versioned_docs/version-v5/ACTION+_statement.md",sourceDirName:".",slug:"/ACTION+_statement",permalink:"/v5/ACTION+_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/ACTION+_statement.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"ACTION+ statement"},sidebar:"learn",previous:{title:"+= statement",permalink:"/v5/+=_statement"},next:{title:"META statement",permalink:"/v5/META_statement"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"ACTION+"})," statement adds an implementation (branching condition) to an ",(0,a.jsx)(n.a,{href:"/v5/Action_extension",children:"abstract action"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[ACTION] actionId(param1, ..., paramN) + { implAction }\r\n[ACTION] actionId(param1, ..., paramN) + WHEN whenExpr THEN { implAction }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"ACTION+"})," statement adds an implementation to an abstract action. The syntax for adding an implementation depends on the type of abstract action. If the abstract action is of type ",(0,a.jsx)(n.code,{children:"CASE"}),", then the implementation should be described using ",(0,a.jsx)(n.code,{children:"WHEN ... THEN ..."})," otherwise, the implementation should be described simply as an action."]}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"actionId"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/v5/IDs#propertyid",children:"ID"})," of the abstract action."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"param1, ..., paramN"})}),"\n",(0,a.jsxs)(n.p,{children:["List of parameters that will be used to define the implementation. Each element is a ",(0,a.jsx)(n.a,{href:"/v5/IDs#paramid",children:"typed parameter"}),". The number of these parameters must be equal to the number of parameters of the abstract action. These parameters can then be used in the implementation operator of the abstract property and in the selection condition expression of this implementation."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"implAction"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/v5/Action_operators#contextdependent",children:"Context-dependent action operator"})," whose value determines the implementation of the abstract action."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"whenExpr"})}),"\n",(0,a.jsxs)(n.p,{children:["An ",(0,a.jsx)(n.a,{href:"/v5/Expression",children:"expression"})," whose value determines the selection condition of the implementation of an abstract property (action) that has type ",(0,a.jsx)(n.code,{children:"CASE"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT Animal;\r\nwhoAmI  ABSTRACT ( Animal);\r\n\r\nCLASS Dog : Animal;\r\nwhoAmI (Dog d) + {  MESSAGE 'I am a dog!'; }\r\n\r\nCLASS Cat : Animal;\r\nwhoAmI (Cat c) + {  MESSAGE 'I am a \u0441at!'; }\r\n\r\nask ()  {\r\n    FOR Animal a IS Animal DO\r\n        whoAmI(a); // a corresponding message will be shown for each object\r\n}\r\n\r\nonStarted  ABSTRACT LIST ( );\r\nonStarted () + {\r\n    name(Sku s) <- '1';\r\n}\r\nonStarted () + {\r\n    name(Sku s) <- '2';\r\n}\r\n// first, the 1st action is executed, then the 2nd action\r\n\r\nCLASS Human;\r\nname = DATA STRING[100] (Human);\r\n\r\ntestName  ABSTRACT CASE ( Human);\r\n\r\ntestName (Human h) + WHEN name(h) == 'John' THEN {  MESSAGE 'I am John'; }\r\ntestName (Human h) + WHEN name(h) == 'Bob' THEN {  MESSAGE 'I am Bob'; }\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);