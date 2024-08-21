"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[12907],{52126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(74848),s=n(28453);const o={title:"Class change (CHANGECLASS, DELETE)"},i=void 0,c={id:"Class_change_CHANGECLASS_DELETE",title:"Class change (CHANGECLASS, DELETE)",description:"The class change operator creates an action that assigns the given class to all objects where value of a particular property (condition) is not equal to NULL. The condition can be omitted, in which case it is considered to be equal to TRUE.",source:"@site/docs/Class_change_CHANGECLASS_DELETE.md",sourceDirName:".",slug:"/Class_change_CHANGECLASS_DELETE",permalink:"/Class_change_CHANGECLASS_DELETE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Class_change_CHANGECLASS_DELETE.md",tags:[],version:"current",lastUpdatedAt:162565152e4,frontMatter:{title:"Class change (CHANGECLASS, DELETE)"},sidebar:"learn",previous:{title:"New object (NEW)",permalink:"/New_object_NEW"},next:{title:"Session management",permalink:"/Session_management"}},r={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.em,{children:"class change"})," operator creates an ",(0,a.jsx)(t.a,{href:"/Actions",children:"action"})," that assigns the given ",(0,a.jsx)(t.a,{href:"/Classes",children:"class"})," to all objects where value of a particular ",(0,a.jsx)(t.a,{href:"/Properties",children:"property"})," (",(0,a.jsx)(t.em,{children:"condition"}),") is not equal to ",(0,a.jsx)(t.code,{children:"NULL"}),". The condition can be omitted, in which case it is considered to be equal to ",(0,a.jsx)(t.code,{children:"TRUE"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The platform also has a builtin ",(0,a.jsx)(t.code,{children:"changeClass"})," action with two parameters: the first defines the object for which you want to change the class, and the second defines an object of the new class. Since it is much more difficult to determine the possible values of a new class when using the builtin action than in the case of an operator (for which the new class is specified explicitly), it is recommended that you use the operator (and not the builtin action)"]})}),"\n",(0,a.jsxs)(t.p,{children:["If there is a non-",(0,a.jsx)(t.code,{children:"NULL"})," value of some ",(0,a.jsx)(t.a,{href:"/Data_properties_DATA",children:"data property"}),' for which the "changed" object is either its parameter or the value itserf, then this value is automatically changed to ',(0,a.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["This behavior is implemented by analogy with ",(0,a.jsx)(t.a,{href:"/Calculated_events",children:"computed"})," and ",(0,a.jsx)(t.a,{href:"/Simple_event",children:"simple"})," events."]})}),"\n",(0,a.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,a.jsxs)(t.p,{children:["To declare an action that implements a change of object classes, use the ",(0,a.jsxs)(t.a,{href:"/CHANGECLASS_operator",children:[(0,a.jsx)(t.code,{children:"CHANGECLASS"})," operator"]})," or the ",(0,a.jsxs)(t.a,{href:"/DELETE_operator",children:[(0,a.jsx)(t.code,{children:"DELETE"})," operator"]}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"// deleting an object\r\ndeleteObject(obj)  { DELETE obj; }\r\n\r\n// deleting all inactive products\r\nCLASS Article;\r\nactive = DATA BOOLEAN (Article);\r\ndeleteInactiveArticles()  {\r\n    // a local parameter a is added corresponding to the objects to be iterated over\r\n    DELETE Article a WHERE a IS Article AND NOT active(a); \r\n}\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"CLASS Document;\r\ndate = DATA DATE (Document);\r\n\r\nCLASS ClosedDocument : Document;\r\n// sets status to closed for all documents with a date older than 2 weeks\r\nchangeStatus()  {\r\n    CHANGECLASS Document d TO ClosedDocument WHERE sum(date(d), 14) <= currentDate();\r\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var a=n(96540);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);