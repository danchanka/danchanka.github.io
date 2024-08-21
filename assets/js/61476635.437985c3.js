"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[89019],{10541:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(74848),t=n(28453);const o={title:"Change operators"},i=void 0,a={id:"Change_operators",title:"Change operators",description:"Change operators - a set of operators that determine various types of property value changes.",source:"@site/versioned_docs/version-v5/Change_operators.md",sourceDirName:".",slug:"/Change_operators",permalink:"/v5/Change_operators",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Change_operators.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"Change operators"},sidebar:"learn",previous:{title:"IS, AS operators",permalink:"/v5/IS_AS_operators"},next:{title:"Comparison operators",permalink:"/v5/Comparison_operators"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Change operators - a set of operators that determine various types of ",(0,s.jsx)(r.a,{href:"/v5/Change_operators_SET_CHANGED_etc",children:"property value changes"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"typeChange(propExpr)\n"})}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["Change operators create ",(0,s.jsx)(r.a,{href:"/v5/Properties",children:"actions"})," which determine whether some types of changes have been made for a certain property in the current session."]}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"typeChange"})}),"\n",(0,s.jsx)(r.p,{children:"Type of the change operator. It is specified by one of the keywords:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"SET"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"CHANGED"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"DROPPED"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"SETCHANGED"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"DROPCHANGED"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"SETDROPPED"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"propExpr"})}),"\n",(0,s.jsxs)(r.p,{children:["An ",(0,s.jsx)(r.a,{href:"/v5/Expression",children:"expression"})," which value defines the property that should be checked for the presence of a change."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"quantity = DATA NUMERIC[14,2] (OrderDetail);\r\nprice = DATA NUMERIC[14,2] (OrderDetail);\r\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\r\n\r\ncreatedUser = DATA CustomUser (Order);\r\ncreatedUser (Order o) <- currentUser() WHEN SET(o IS Order);\r\n\r\nnumerator = DATA Numerator (Order);\r\nnumber = DATA STRING[28] (Order);\r\nseries = DATA BPSTRING[2] (Order);\r\nWHEN SETCHANGED(numerator(Order o)) AND\r\n     NOT CHANGED(number(o)) AND\r\n     NOT CHANGED(series(o))\r\n     DO {\r\n        number(o) <- curStringValue(numerator(o));\r\n        series(o) <- series(numerator(o));\r\n        incrementValueSession(numerator(o));\r\n     }\r\n;\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var s=n(96540);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);