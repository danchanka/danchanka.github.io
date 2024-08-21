"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[95063],{32043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(74848),a=n(28453);const r={title:"@ statement"},i=void 0,o={id:"commat_statement",title:"@ statement",description:"The @ statement uses metacode.",source:"@site/docs/commat_statement.md",sourceDirName:".",slug:"/commat_statement",permalink:"/commat_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/commat_statement.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"@ statement"},sidebar:"learn",previous:{title:"META statement",permalink:"/META_statement"},next:{title:"TABLE statement",permalink:"/TABLE_statement"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"@"})," statement uses ",(0,s.jsx)(t.a,{href:"/Metaprogramming#metacode",children:"metacode"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"@name(param1, ..., paramN);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"@"})," statement generates code obtained from the metacode with the name ",(0,s.jsx)(t.code,{children:"name"}),", replacing metacode parameters with the values of its own parameters and executing the special ",(0,s.jsxs)(t.a,{href:"/Metaprogramming#concat",children:[(0,s.jsx)(t.code,{children:"##"})," and ",(0,s.jsx)(t.code,{children:"###"})," operations"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"name"})}),"\n",(0,s.jsxs)(t.p,{children:["The name of the metacode used. ",(0,s.jsx)(t.a,{href:"/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"param1, ..., paramN"})}),"\n",(0,s.jsxs)(t.p,{children:["The list of statement parameters that will be substituted for the parameters of the metacode used. The parameters can be a ",(0,s.jsx)(t.a,{href:"/IDs#cid",children:"composite ID"}),", a ",(0,s.jsx)(t.a,{href:"/IDs#classid",children:"class ID"}),", a ",(0,s.jsx)(t.a,{href:"/Literals",children:"literal"})," or the ",(0,s.jsx)(t.em,{children:"empty parameter"})," when nothing is passed as a parameter."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS Book;\r\n@objectProperties(book, INTEGER, 'Book');\r\n\r\nCLASS Flower;\r\n@objectProperties(flower, BPSTRING[100], ); // if the parameter is not passed, then it will be empty\r\n\r\nCLASS Table;\r\n@objectProperties(table, NUMERIC[14,2]);\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);