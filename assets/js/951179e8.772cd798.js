"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[16496],{69353:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=s(74848),o=s(28453);const i={title:"JSON operator"},t=void 0,c={id:"JSON_operator",title:"JSON operator",description:"The JSON operator is property that creates JSON from specified properties or, in common case, from form.",source:"@site/docs/JSON_operator.md",sourceDirName:".",slug:"/JSON_operator",permalink:"/JSON_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/JSON_operator.md",tags:[],version:"current",lastUpdatedAt:1708549459e3,frontMatter:{title:"JSON operator"}},d={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Source of export",id:"source-of-export",level:3},{value:"Examples",id:"examples",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"JSON"})," operator is property that creates JSON from ",(0,n.jsx)(r.a,{href:"/Data_export_EXPORT",children:"specified properties"})," or, in common case, from ",(0,n.jsx)(r.a,{href:"/In_a_structured_view_EXPORT_IMPORT",children:"form"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"JSON ( FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]] )\r\nJSON ( formName [OBJECTS objName1 = expr1, ..., objNameK = exprK]\n"})}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"JSON"})," operator is property that creates JSON from the specified properties or form."]}),"\n",(0,n.jsxs)(r.p,{children:["When exporting a form in an ",(0,n.jsx)(r.code,{children:"OBJECTS"})," block, it is possible to add extra filters to check for the equality of the objects on the form with ",(0,n.jsx)(r.a,{href:"/Open_form#params",children:"the values passed"}),". These objects ",(0,n.jsx)(r.a,{href:"/Structured_view#objects",children:"will not participate"})," in building the object group hierarchy."]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(r.h3,{id:"source-of-export",children:"Source of export"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"formName"})}),"\n",(0,n.jsxs)(r.p,{children:["The name of the form from which you want to export data. ",(0,n.jsx)(r.a,{href:"/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"objName1 ... objNameK"})}),"\n",(0,n.jsxs)(r.p,{children:["Names of form objects for which filtered (fixed) values are specified. ",(0,n.jsx)(r.a,{href:"/IDs#id",children:"Simple IDs"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"expr1 ... exprK"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/Expression",children:"Expressions"})," whose values determine the filtered (fixed) values for form objects."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"propertyExpr1, ..., propertyExprN"})}),"\n",(0,n.jsxs)(r.p,{children:["List of ",(0,n.jsx)(r.a,{href:"/Expression",children:"expressions"})," from whose values the data is exported"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"columnId1, ..., columnIdN"})}),"\n",(0,n.jsxs)(r.p,{children:["A list of column IDs in the resulting JSON into which data from the corresponding property will be exported. Each list element is either ",(0,n.jsx)(r.a,{href:"/IDs#id",children:"a simple ID"})," or a ",(0,n.jsx)(r.a,{href:"/Literals#strliteral",children:"string literal"}),". If no ID is specified, it is considered equal to ",(0,n.jsx)(r.code,{children:"expr<Column number>"})," by default."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"whereExpr"})}),"\n",(0,n.jsxs)(r.p,{children:["An expression whose value is a condition for the export. If not specified, it is considered equal to the ",(0,n.jsx)(r.a,{href:"/Logical_operators_AND_OR_NOT_XOR",children:"disjunction"})," of all exported properties (that is, at least one of the properties must be non-",(0,n.jsx)(r.code,{children:"NULL"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"orderExpr1, ..., orderExprL"})}),"\n",(0,n.jsxs)(r.p,{children:["List of ",(0,n.jsx)(r.a,{href:"/Expression",children:"expressions"})," by which the exported data is sorted. Only properties present in the list ",(0,n.jsx)(r.code,{children:"propertyExpr1, ..., propertyExprN"})," can be used"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"DESC"})}),"\n",(0,n.jsx)(r.p,{children:"Keyword. Specifies reverse sort order. By default, ascending sort is used."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lsf",children:"FORM testF \r\n      OBJECTS j = INTEGER\r\n      PROPERTIES ab='34'\r\n      OBJECTS i = INTEGER\r\n      PROPERTIES name = 'Name ' + (i AS INTEGER)\r\n;\r\n\r\nrun() {\r\n\tMESSAGE JSON (testF OBJECTS j=4 FILTERS mod(i,2) = 0);\r\n}\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lsf",children:"MESSAGE JSON (FROM code = '1', message = 'OK');\n"})})]})}function a(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>c});var n=s(96540);const o={},i=n.createContext(o);function t(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);