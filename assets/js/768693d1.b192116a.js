"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[86503],{81838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(74848),r=n(28453);const i={title:"Loop (FOR)"},s=void 0,a={id:"Loop_FOR",title:"Loop (FOR)",description:"The loop operator creates an action that iterates all object collections for which the defined condition is met, and executes a defined action for each such object collection (let's call it the main one). You can also define an alternative action that will be executed only if no object collections have been found that meet the condition. The condition itself is defined as a certain property. Let's say that the condition is satisfied if the value of this property is not NULL.",source:"@site/docs/Loop_FOR.md",sourceDirName:".",slug:"/Loop_FOR",permalink:"/Loop_FOR",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Loop_FOR.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Loop (FOR)"},sidebar:"learn",previous:{title:"Call (EXEC)",permalink:"/Call_EXEC"},next:{title:"Branching (CASE, IF, MULTI)",permalink:"/Branching_CASE_IF_MULTI"}},c={},l=[{value:"Adding an object",id:"addobject",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"loop"})," operator creates an ",(0,o.jsx)(t.a,{href:"/Actions",children:"action"})," that iterates all object collections for which the defined ",(0,o.jsx)(t.em,{children:"condition"})," is met, and executes a defined action for each such object collection (let's call it the ",(0,o.jsx)(t.em,{children:"main one"}),"). You can also define an ",(0,o.jsx)(t.em,{children:"alternative action"})," that will be executed only if no object collections have been found that meet the condition. The condition itself is defined as a certain ",(0,o.jsx)(t.a,{href:"/Properties",children:"property"}),". Let's say that the condition is ",(0,o.jsx)(t.em,{children:"satisfied"})," if the value of this property is not ",(0,o.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"By default, object collections are iterated in arbitrary order. However, the developer can explicitly define this order, if necessary. To do this, you need to specify a list of properties with values in an ascending or descending order that will define the order of object iteration."}),"\n",(0,o.jsxs)(t.p,{children:["As for other ",(0,o.jsx)(t.a,{href:"/Set_operations",children:"set operations"}),", the condition must be such that the operation is ",(0,o.jsx)(t.a,{href:"/Set_operations#correct",children:"correct"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"addobject",children:"Adding an object"}),"\n",(0,o.jsxs)(t.p,{children:["This operator also allows you to create an object of a specified concrete ",(0,o.jsx)(t.a,{href:"/User_classes",children:"custom class"})," for each iterated object collection. This object can then be used in the main action as a parameter."]}),"\n",(0,o.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,o.jsxs)(t.p,{children:["The syntax of the loop operator is described by the ",(0,o.jsxs)(t.a,{href:"/FOR_operator",children:[(0,o.jsx)(t.code,{children:"FOR"})," operator"]}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"name = DATA STRING[100] (Store);\r\n\r\ntestFor  {\r\n    LOCAL sum = INTEGER ();\r\n    FOR iterate(i, 1, 100) DO {\r\n        sum() <- sum() (+) i;\r\n    }\r\n\r\n    FOR in(Sku s) DO {\r\n        MESSAGE 'Sku ' + id(s) + ' was selected';\r\n    }\r\n\r\n    FOR Store st IS Store DO { // iterating over all objects of the Store class\r\n        FOR in(st, Sku s) DO { // iterating over all Sku for which in is set\r\n            MESSAGE 'There is Sku ' + id(s) + ' in store ' + name(st);\r\n        }\r\n\r\n    }\r\n}\r\n\r\nnewSku ()  {\r\n    NEW s = Sku {\r\n        id(s) <- 425;\r\n        name(s) <- 'New Sku';\r\n    }\r\n}\r\n\r\ncopy (Sku old)  {\r\n    NEW new = Sku {\r\n        id(new) <- id(old);\r\n        name(new) <- name(old);\r\n    }\r\n}\r\n\r\ncreateDetails (Order o)  {\r\n    FOR in(Sku s) NEW d = OrderDetail DO {\r\n        order(d) <- o;\r\n        sku(d) <- s;\r\n    }\r\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);