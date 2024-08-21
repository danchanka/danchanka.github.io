"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[65560],{7930:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=n(74848),a=n(28453);const t={title:"How-to: Namespaces"},o=void 0,c={id:"How-to_Namespaces",title:"How-to: Namespaces",description:"Occasionally, you will find yourself in situations where you will need to use the same name for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the NAMESPACE statement. By default, the namespace matches the name of the module.",source:"@site/versioned_docs/version-v5/How-to_Namespaces.md",sourceDirName:".",slug:"/How-to_Namespaces",permalink:"/v5/How-to_Namespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Namespaces.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: Namespaces"},sidebar:"learn",previous:{title:"How-to: Searching for elements",permalink:"/v5/How-to_Searching_for_elements"},next:{title:"How-to: Explicit typing",permalink:"/v5/How-to_Explicit_typing"}},l={},d=[];function i(e){const s={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Occasionally, you will find yourself in situations where you will need to use the same ",(0,r.jsx)(s.a,{href:"/v5/Naming",children:"name"})," for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the ",(0,r.jsxs)(s.a,{href:"/v5/Module_header",children:[(0,r.jsx)(s.code,{children:"NAMESPACE"})," statement"]}),". By default, the namespace matches the name of the module."]}),"\n",(0,r.jsxs)(s.p,{children:["Let's create two modules, ",(0,r.jsx)(s.code,{children:"UseCaseNamePurchase"})," and ",(0,r.jsx)(s.code,{children:"UseCaseNameSale"}),", that declare the logic of purchase and sell orders:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lsf",children:"MODULE UseCaseNamePurchase;\r\n\r\nNAMESPACE Purchase;\r\n\r\nCLASS Order 'Order';\r\ndate 'Date' = DATA DATE (Order);\r\nnumber 'Number' = DATA INTEGER (Order);\r\n\r\nFORM orders 'Purchase orders'\r\n    OBJECTS o = Order\r\n    PROPERTIES(o) date, number\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW orders;\r\n}\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lsf",children:"MODULE UseCaseNameSale;\r\n\r\nNAMESPACE Sale;\r\n\r\nCLASS Order 'Order';\r\ndate 'Date' = DATA DATE (Order);\r\nnumber 'Number' = DATA INTEGER (Order);\r\n\r\nFORM orders 'Sales orders'\r\n    OBJECTS o = Order\r\n    PROPERTIES(o) date, number\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW orders;\r\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Both of them have the ",(0,r.jsx)(s.code,{children:"Order"})," class declared in them, but since the modules have different namespaces, the first one's will be ",(0,r.jsx)(s.code,{children:"Purchase"}),", the second one's will be ",(0,r.jsx)(s.code,{children:"Sale"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Let's declare a test module with a ",(0,r.jsx)(s.code,{children:"Test"})," namespace that will simultaneously depend on both modules:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lsf",children:"REQUIRE UseCaseNamePurchase, UseCaseNameSale;\r\n\r\nNAMESPACE Test;\r\n\r\nmessagePurchaseCount 'Display the number of purchase orders' {\r\n    MESSAGE GROUP SUM 1 IF o IS Purchase.Order;\r\n}\r\nmessageSaleCount 'Display the number of sales orders' {\r\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\r\n}\r\n\r\nNAVIGATOR {\r\n    NEW ACTION messagePurchaseCount;\r\n    NEW ACTION messageSaleCount;\r\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you try to refer to the ",(0,r.jsx)(s.code,{children:"Order"})," class without explicitly specifying the namespace, you will see an error message:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(33532).A+"",width:"446",height:"102"})}),"\n",(0,r.jsx)(s.p,{children:"All such references require an explicit specification of the namespace."}),"\n",(0,r.jsxs)(s.p,{children:["In case the namespace of a module matches the space of the required system element (for example, ",(0,r.jsx)(s.code,{children:"Purchase"}),")"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lsf",children:"NAMESPACE Purchase;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["or the namespace priority has not been specified using the ",(0,r.jsxs)(s.a,{href:"/v5/Module_header",children:[(0,r.jsx)(s.code,{children:"PRIORITY"})," statement"]}),","]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lsf",children:"PRIORITY Purchase;\n"})}),"\n",(0,r.jsx)(s.p,{children:"you can skip the specification of the namespace"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lsf",children:"messagePurchaseCount 'Display the number of purchase orders' {\r\n    MESSAGE GROUP SUM 1 IF o IS Order;\r\n}\r\nmessageSaleCount 'Display the number of sales orders' {\r\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\r\n}\r\n\r\nNAVIGATOR {\r\n    NEW ACTION messagePurchaseCount;\r\n    NEW ACTION messageSaleCount;\r\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you don't specify the namespace, the class from ",(0,r.jsx)(s.code,{children:"Purchase"})," will be used. You still can explicitly specify the namespace (for example, ",(0,r.jsx)(s.code,{children:"Sale"}),")."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},33532:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/How-to_Namespaces-d3869b9262099eff7d50035cbade492e.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var r=n(96540);const a={},t=r.createContext(a);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);