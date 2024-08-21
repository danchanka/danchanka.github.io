"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[42105],{22099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(74848),o=r(28453);const i={title:"Recursive loop (WHILE)"},s=void 0,a={id:"Recursive_loop_WHILE",title:"Recursive loop (WHILE)",description:"The recursive loop operator is similar to a regular loop operator, with the only difference being that iteration is performed recursively until at a certain point the set of objects collections satisfying the condition becomes empty. As a result, there is no sense in defining alternative actions with this operator.",source:"@site/versioned_docs/version-v4/Recursive_loop_WHILE.md",sourceDirName:".",slug:"/Recursive_loop_WHILE",permalink:"/v4/Recursive_loop_WHILE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Recursive_loop_WHILE.md",tags:[],version:"v4",lastUpdatedAt:1623249583e3,frontMatter:{title:"Recursive loop (WHILE)"},sidebar:"learn",previous:{title:"Branching (CASE, IF, MULTI)",permalink:"/v4/Branching_CASE_IF_MULTI"},next:{title:"Interruption (BREAK)",permalink:"/v4/Interruption_BREAK"}},l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"recursive loop operator"})," is similar to a regular ",(0,n.jsx)(t.a,{href:"/v4/Loop_FOR",children:"loop"})," operator, with the only difference being that iteration is performed recursively until at a certain point the set of objects collections satisfying the condition becomes empty. As a result, there is no sense in defining ",(0,n.jsx)(t.em,{children:"alternative"})," actions with this operator."]}),"\n",(0,n.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(t.p,{children:["The syntax of the recursive loop operator is described by the ",(0,n.jsxs)(t.a,{href:"/v4/WHILE_operator",children:[(0,n.jsx)(t.code,{children:"WHILE"})," operator"]}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"iterateDates (DATE dateFrom, DATE dateTo)  {\r\n    LOCAL dateCur = DATE();\r\n\r\n    dateCur() <- dateFrom;\r\n    WHILE dateCur() <= dateTo DO {\r\n        MESSAGE 'I have a date ' + dateCur();\r\n        dateCur() <- sum(dateCur(), 1);\r\n    }\r\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);