"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[32645],{48637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453);const a={title:"Class extension"},o=void 0,r={id:"Class_extension",title:"Class extension",description:"The class extension technique allows the developer to inherit one class from another after its creation. Also, using this mechanism you can add extra static objects to a class.",source:"@site/versioned_docs/version-v5/Class_extension.md",sourceDirName:".",slug:"/Class_extension",permalink:"/v5/Class_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Class_extension.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"Class extension"},sidebar:"learn",previous:{title:"Extensions",permalink:"/v5/Extensions"},next:{title:"Property extension",permalink:"/v5/Property_extension"}},l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The class ",(0,s.jsx)(n.a,{href:"/v5/Extensions",children:"extension"})," technique allows the developer to ",(0,s.jsx)(n.em,{children:"inherit"})," one ",(0,s.jsx)(n.a,{href:"/v5/Classes",children:"class"})," from another after its creation. Also, using this mechanism you can add extra ",(0,s.jsx)(n.a,{href:"/v5/Static_objects",children:"static objects"})," to a class."]}),"\n",(0,s.jsxs)(n.p,{children:["Class extension, together with the ",(0,s.jsx)(n.a,{href:"/v5/Property_extension",children:"property"})," and ",(0,s.jsx)(n.a,{href:"/v5/Action_extension",children:"action extension"})," technique, allows you to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Extract the relations between classes into a separate module, thereby obtaining a more modular architecture."}),"\n",(0,s.jsx)(n.li,{children:"Modify the functionality of an existing module without making any changes to it."}),"\n",(0,s.jsxs)(n.li,{children:["Declare classes in the ",(0,s.jsx)(n.a,{href:"/v5/Metaprogramming",children:"metacode"})," by defining the inheritance of a class outside its bounds."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(n.p,{children:["To extend a class, use the ",(0,s.jsxs)(n.a,{href:"/v5/EXTEND_CLASS_statement",children:[(0,s.jsx)(n.code,{children:"EXTEND CLASS"})," statement"]}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT Shape;\r\nCLASS Box : Shape;\r\n\r\nCLASS Quadrilateral;\r\nEXTEND CLASS Box : Quadrilateral; // Adding inheritance\r\n\r\nCLASS ShapeType {\r\n\tpoint 'Dot',\r\n\tsegment 'Line segment'\r\n}\r\n\r\nEXTEND CLASS ShapeType { // Adding a static object\r\n\tcircle 'Circle'\r\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);