"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[71611],{51045:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=r(74848),a=r(28453);const s={title:"Language"},t=void 0,l={id:"Language",title:"Language",description:"lsFusion is a programming language that describes lsFusion modules.",source:"@site/versioned_docs/version-v5/Language.md",sourceDirName:".",slug:"/Language",permalink:"/v5/Language",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Language.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"Language"},sidebar:"learn",previous:{title:"Chat",permalink:"/v5/Chat"},next:{title:"Tokens",permalink:"/v5/Tokens"}},i={},d=[{value:"Example",id:"example",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"lsFusion"})," is a programming language that describes lsFusion ",(0,o.jsx)(n.a,{href:"/v5/Modules",children:"modules"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Each module consists of a sequence of ",(0,o.jsx)(n.a,{href:"/v5/Statements",children:"statements"})," divided into module ",(0,o.jsx)(n.a,{href:"/v5/Module_header",children:(0,o.jsx)(n.em,{children:"header"})})," and ",(0,o.jsx)(n.em,{children:"body"}),". The header may include four special statements: ",(0,o.jsx)(n.code,{children:"MODULE"}),", ",(0,o.jsx)(n.code,{children:"REQUIRE"}),", ",(0,o.jsx)(n.code,{children:"PRIORITY"})," and ",(0,o.jsx)(n.code,{children:"NAMESPACE"}),", which define module parameters. The header is followed by the module body which consists of the remaining statements and describes the logic of this module."]}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"// Module header\r\nMODULE LanguageExample;\r\n\r\nREQUIRE System;\r\n\r\nNAMESPACE Example;\r\n\r\n// Module body\r\n\r\n// Classes declaration\r\nCLASS Employee;\r\nCLASS Company;\r\n\r\n// Properties declaration\r\nname(employee) = DATA BPSTRING[100](Employee);\r\nage(employee) = DATA INTEGER(Employee);\r\ncompany(employee) = DATA Company(Employee);\r\n\r\nname(company) = DATA BPSTRING[100](Company);\r\n\r\n// Form declaration\r\nFORM employeeForm\r\n    OBJECTS e = Employee\r\n    PROPERTIES(e) name, age, company\r\n;\r\n\r\n// Adding a form to the navigator\r\nNAVIGATOR {\r\n    NEW employeeForm;\r\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var o=r(96540);const a={},s=o.createContext(a);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);