"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[33040],{7400:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=t(74848),s=t(28453);const i={title:"MULTI operator"},o=void 0,l={id:"MULTI_operator",title:"MULTI operator",description:"The MULTI operator creates a property that implements selection of one of the values (polymorphic form).",source:"@site/versioned_docs/version-v4/MULTI_operator.md",sourceDirName:".",slug:"/MULTI_operator",permalink:"/v4/MULTI_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/MULTI_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"MULTI operator"},sidebar:"learn",previous:{title:"MIN operator",permalink:"/v4/MIN_operator"},next:{title:"OVERRIDE operator",permalink:"/v4/OVERRIDE_operator"}},c={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"MULTI"})," operator creates a ",(0,n.jsx)(r.a,{href:"/v4/Properties",children:"property"})," that implements ",(0,n.jsx)(r.a,{href:"/v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#single",children:"selection"})," of one of the values (polymorphic form)."]}),"\n",(0,n.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"MULTI expr1, ..., exprN [exclusionType]\n"})}),"\n",(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"MULTI"})," operator creates a property which value will be the value of one of the properties specified in the operator. The property selection condition is that the parameters match this property ",(0,n.jsx)(r.a,{href:"/v4/CLASS_operator",children:"signature"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"expr1, ..., exprN"})}),"\n",(0,n.jsxs)(r.p,{children:["A list of ",(0,n.jsx)(r.a,{href:"/v4/Expression",children:"expressions"})," defining the properties from which the selection is made."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"exclusionType"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#exclusive",children:"Type of mutual exclusion"}),". Determines whether several conditions for the property selection can be met simultaneously with a certain set of parameters. It is specified by one of the keywords:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"EXCLUSIVE"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"OVERRIDE"})}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"EXCLUSIVE"})," type indicates that the conditions for the property selection cannot be met simultaneously. The ",(0,n.jsx)(r.code,{children:"OVERRIDE"})," type allows several conditions to be met simultaneously, in which case the first property in the list which selection condition is met will be selected."]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"EXCLUSIVE"})," type is used by default."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lsf",children:"nameMulti (Human h) = MULTI 'Male' IF h IS Male, 'Female' IF h IS Female;\r\n\r\nCLASS Ledger;\r\nCLASS InLedger : Ledger;\r\nquantity = DATA INTEGER (InLedger);\r\n\r\nCLASS OutLedger : Ledger;\r\nquantity = DATA INTEGER (OutLedger);\r\n\r\nsignedQuantity (Ledger l) = MULTI quantity[InLedger](l), quantity[OutLedger](l);\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>l});var n=t(96540);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);