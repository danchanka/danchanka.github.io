"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[97588],{61082:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=n(74848),o=n(28453);const i={title:"Modules"},l=void 0,d={id:"Modules",title:"Modules",description:"A module is a functionally complete part of a project. A module consists of declarations of properties, actions, events, constraints, and other system elements.",source:"@site/versioned_docs/version-v5/Modules.md",sourceDirName:".",slug:"/Modules",permalink:"/v5/Modules",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Modules.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"Modules"},sidebar:"learn",previous:{title:"Modularity",permalink:"/v5/Modularity"},next:{title:"Projects",permalink:"/v5/Projects"}},r={},a=[{value:"Dependencies between modules",id:"depends",level:3},{value:"Namespaces",id:"namespaces",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const s={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(s.em,{children:"module"})," is a functionally complete part of a ",(0,t.jsx)(s.a,{href:"/v5/Projects",children:"project"}),". A module consists of declarations of ",(0,t.jsx)(s.a,{href:"/v5/Properties",children:"properties"}),", ",(0,t.jsx)(s.a,{href:"/v5/Actions",children:"actions"}),", ",(0,t.jsx)(s.a,{href:"/v5/Events",children:"events"}),", ",(0,t.jsx)(s.a,{href:"/v5/Constraints",children:"constraints"}),", and other ",(0,t.jsx)(s.a,{href:"/v5/Naming",children:"system elements"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Each module has a name, which must be unique within the ",(0,t.jsx)(s.a,{href:"/v5/Projects",children:"project"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"depends",children:"Dependencies between modules"}),"\n",(0,t.jsxs)(s.p,{children:["Usually modules use elements from other modules to describe part of their functionality. Accordingly, if module ",(0,t.jsx)(s.code,{children:"B"})," uses elements from module ",(0,t.jsx)(s.code,{children:"A"}),", it must be specified in module ",(0,t.jsx)(s.code,{children:"B"})," that it ",(0,t.jsx)(s.em,{children:"depends"})," on ",(0,t.jsx)(s.code,{children:"A"}),". Based on these dependencies, all modules in the project are arranged in a certain order in which they are initialized. It is guaranteed that if module ",(0,t.jsx)(s.code,{children:"B"})," depends on module ",(0,t.jsx)(s.code,{children:"A"}),", module ",(0,t.jsx)(s.code,{children:"A"})," will be initialized before module ",(0,t.jsx)(s.code,{children:"B"}),". Circular dependencies between project modules are not allowed."]}),"\n",(0,t.jsxs)(s.p,{children:["If module ",(0,t.jsx)(s.code,{children:"C"})," depends on module ",(0,t.jsx)(s.code,{children:"B"}),", and module ",(0,t.jsx)(s.code,{children:"B"})," depends on module ",(0,t.jsx)(s.code,{children:"A"}),", we will also assume that module ",(0,t.jsx)(s.code,{children:"C"})," depends on module ",(0,t.jsx)(s.code,{children:"A"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Any module always automatically depends on the system module ",(0,t.jsx)(s.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/System.lsf",children:(0,t.jsx)(s.code,{children:"System"})}),", regardless of whether or not this is specified explicitly."]}),"\n",(0,t.jsx)(s.h3,{id:"namespaces",children:"Namespaces"}),"\n",(0,t.jsxs)(s.p,{children:["In each module a ",(0,t.jsx)(s.a,{href:"/v5/Naming#namespace",children:"namespace"})," is specified, containing the names of all system elements created in this module. By default, the module creates its own namespace, the name of which is equal to the name of the module. For the module you can also specify a list of additional namespaces that will have priority when ",(0,t.jsx)(s.a,{href:"/v5/Search_",children:"finding"})," ",(0,t.jsx)(s.a,{href:"/v5/Element_identification",children:"system elements"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(s.p,{children:["Each module in the platform corresponds to exactly one file, which starts with a special ",(0,t.jsx)(s.a,{href:"/v5/Module_header",children:"header"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lsf",children:"MODULE EmployeeExample;\t \t// Defining the module name\r\n\r\nREQUIRE System, Utils;\t \t// Listing the modules that the Employee module depends on\r\nNAMESPACE Employee;\t\t \t// Setting the namespace\r\n\r\nCLASS Employee 'Employee';\t// Creating a class\r\nCLASS Position 'Position'; // Creating another class\r\n\r\nemployeePosition(employee) = DATA Position (Employee); // Creating property\n"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var t=n(96540);const o={},i=t.createContext(o);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);