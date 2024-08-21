"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[29003],{84148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(74848),r=n(28453);const o={title:"How-to: EXEC"},s=void 0,l={id:"How-to_EXEC",title:"How-to: EXEC",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_EXEC.md",sourceDirName:".",slug:"/How-to_EXEC",permalink:"/v4/How-to_EXEC",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_EXEC.md",tags:[],version:"v4",lastUpdatedAt:1619622551e3,frontMatter:{title:"How-to: EXEC"},sidebar:"learn",previous:{title:"How-to: CHANGE",permalink:"/v4/How-to_CHANGE"},next:{title:"How-to: NEW",permalink:"/v4/How-to_NEW"}},i={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(t.h3,{id:"task",children:"Task"}),"\n",(0,a.jsx)(t.p,{children:"We have a category of books for which a title, a numerical code, and a start date for sales are defined."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"CLASS Category 'Category';\r\n\r\nname 'Name' = DATA ISTRING[50] (Category);\r\nid 'Code' = DATA INTEGER (Category);\r\nsaleDate 'Sales start date' = DATA DATE (Category);\n"})}),"\n",(0,a.jsx)(t.p,{children:"We need to create an action that creates 3 new predefined categories."}),"\n",(0,a.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"createCategory 'Create category' (ISTRING[50] name, INTEGER id, DATE saleDate)  {\r\n    NEW c = Category {\r\n        name(c) <- name;\r\n        id(c) <- id;\r\n        saleDate(c) <- saleDate;\r\n    }\r\n}\r\n\r\ncreate3Categories 'Create 3 categories' ()  {\r\n    createCategory('Category 1', 1, 2010_02_14);\r\n    createCategory('Category 2', 2, 2011_03_08);\r\n    createCategory('Category 3', 3, 2014_07_01);\r\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(t.h3,{id:"task-1",children:"Task"}),"\n",(0,a.jsxs)(t.p,{children:["Similar to ",(0,a.jsx)(t.a,{href:"#example-1",children:(0,a.jsx)(t.strong,{children:"Example 1"})}),', except that each category has a "parent".']}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"parent 'Parent' = DATA Category (Category); // if the value is NULL, then there is no parent\n"})}),"\n",(0,a.jsx)(t.p,{children:"We need to create an action that fills category depth for each category."}),"\n",(0,a.jsx)(t.h3,{id:"solution-1",children:"Solution"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"depth = DATA INTEGER (Category);\r\nfillDepth (Category c, INTEGER depth)  {\r\n    FOR parent(Category i) == c DO {\r\n        depth(i) <- depth;\r\n        fillDepth(i, depth + 1);\r\n    }\r\n}\r\n\r\nrun()  {\r\n    fillDepth(NULL, 0);\r\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(96540);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);