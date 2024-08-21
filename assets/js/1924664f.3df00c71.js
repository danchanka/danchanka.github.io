"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[70097],{39209:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=r(74848),t=r(28453);const i={title:"NEWSESSION operator"},o=void 0,c={id:"NEWSESSION_operator",title:"NEWSESSION operator",description:"The NEWSESSION operator creates an action that executes the other action in a new session.",source:"@site/docs/NEWSESSION_operator.md",sourceDirName:".",slug:"/NEWSESSION_operator",permalink:"/NEWSESSION_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/NEWSESSION_operator.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"NEWSESSION operator"},sidebar:"learn",previous:{title:"NEWEXECUTOR operator",permalink:"/NEWEXECUTOR_operator"},next:{title:"NEWTHREAD operator",permalink:"/NEWTHREAD_operator"}},l={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NEWSESSION"})," operator creates an ",(0,s.jsx)(n.a,{href:"/Actions",children:"action"})," that executes the other action in a ",(0,s.jsx)(n.a,{href:"/New_session_NEWSESSION_NESTEDSESSION",children:"new session"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"NEWSESSION [NEWSQL] [nestedBlock] action \n"})}),"\n",(0,s.jsxs)(n.p,{children:["where ",(0,s.jsx)(n.code,{children:"nestedBlock"})," has one of two possible syntaxes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"NESTED LOCAL\r\nNESTED (propertyId1, ..., propertyIdN)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NEWSESSION"})," operator creates an action which executes the other action in a new session."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"NESTED"})," keyword is specified, the changes of the ",(0,s.jsx)(n.a,{href:"/Data_properties_DATA#local",children:"local properties"})," will be visible in the new session. If the ",(0,s.jsx)(n.code,{children:"LOCAL"})," keyword is specified, changes of all the local properties will be visible, otherwise, a list of the local properties whose changes need to be visible in the new session should be specified. Also, changes to these local properties in the new session will get to the current session when applying changes in this new session."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"NEWSQL"})}),"\n",(0,s.jsxs)(n.p,{children:["If this keyword is specified, a new SQL connection will be created. In this case, the block containing the ",(0,s.jsx)(n.code,{children:"NESTED"})," keyword will be ignored."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"LOCAL"})}),"\n",(0,s.jsx)(n.p,{children:"If this keyword is specified, changes to all the local properties will be visible in the new session."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"propertyId1, ..., propertyIdN"})}),"\n",(0,s.jsxs)(n.p,{children:["A list of local properties whose changes will be visible in the new session. Each list element must be a ",(0,s.jsx)(n.a,{href:"/IDs#propertyid",children:"property ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"action"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/Action_operators#contextdependent",children:"context-dependent action operator"})," that defines an action to be executed in the new session."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"testNewSession ()  {\r\n    NEWSESSION {\r\n        NEW c = Currency {\r\n            name(c) <- 'USD';\r\n            code(c) <- 866;\r\n        }\r\n        APPLY;\r\n    }\r\n    // here a new object of class Currency is already in the database\r\n\r\n    LOCAL local = BPSTRING[10] (Currency);\r\n    local(Currency c) <- 'Local';\r\n    NEWSESSION {\r\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); // will return NULL\r\n    }\r\n    NEWSESSION NESTED (local) {\r\n        // will return the number of objects of class Currency\r\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); \r\n    }\r\n\r\n    NEWSESSION {\r\n        NEW s = Sku {\r\n            id(s) <- 1234;\r\n            name(s) <- 'New Sku';\r\n            SHOW sku OBJECTS s = s;\r\n        }\r\n    }\r\n\r\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);