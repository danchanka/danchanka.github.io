"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21649],{79240:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(74848),o=t(28453);const s={title:"EXEC operator"},a=void 0,i={id:"EXEC_operator",title:"EXEC operator",description:"The EXEC operator creates an action that executes another action.",source:"@site/docs/EXEC_operator.md",sourceDirName:".",slug:"/EXEC_operator",permalink:"/EXEC_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/EXEC_operator.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"EXEC operator"},sidebar:"learn",previous:{title:"EVAL operator",permalink:"/EVAL_operator"},next:{title:"EXPAND operator",permalink:"/EXPAND_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"EXEC"})," operator creates an ",(0,n.jsx)(r.a,{href:"/Actions",children:"action"})," that ",(0,n.jsx)(r.a,{href:"/Call_EXEC",children:"executes"})," another action."]}),"\n",(0,n.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"[EXEC] actionId(expression1, ..., expressionN)\n"})}),"\n",(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"EXEC"})," operator creates an action that executes another action, passing it the values of ",(0,n.jsx)(r.a,{href:"/Expression",children:"expressions"})," as parameters."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"actionId"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/IDs#propertyid",children:"Action ID"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"expression1, ..., expressionN"})}),"\n",(0,n.jsx)(r.p,{children:"A list of expressions whose values will be passed to the action being executed as arguments. The number of expressions must be equal to the number of parameters of the action being executed."}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"operator"})}),"\n",(0,n.jsx)(r.p,{children:"An operator that creates the action being executed."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lsf",children:"// declaration of importData action with two parameters\r\nimportData(Sku sku, Order order)  {\r\n    MESSAGE 'Run import for ' + id(sku) + ' ' + customer(order);\r\n}\r\n\r\norder = DATA Order (OrderDetail) NONULL DELETE;\r\n// declaration of the action runImport that calls importData\r\nrunImport(OrderDetail d)  { importData(sku(d), order(d)); } \n"})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);