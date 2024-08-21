"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[30440],{2929:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var r=s(74848),a=s(28453);const c={title:"Coding conventions"},l=void 0,o={id:"Coding_conventions",title:"Coding conventions",description:"Common",source:"@site/docs/Coding_conventions.md",sourceDirName:".",slug:"/Coding_conventions",permalink:"/Coding_conventions",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Coding_conventions.md",tags:[],version:"current",lastUpdatedAt:1622042248e3,frontMatter:{title:"Coding conventions"},sidebar:"learn",previous:{title:"Comments",permalink:"/Comments"},next:{title:"IDE",permalink:"/IDE"}},t={},i=[{value:"Common",id:"common",level:3},{value:"Actions",id:"actions",level:3},{value:"Forms",id:"forms",level:3}];function d(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"common",children:"Common"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Class names, module names, and namespace names begin with a capital letter. Other names (property, action, form, parameter, etc.) start with a lowercase letter. If the name consists of several words, then each subsequent word in the name begins with a capital letter."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"MODULE MyModule;\r\n\r\nNAMESPACE MyNamespace;\r\n\r\nCLASS MyClass 'My Class';\r\n\r\nmyProperty 'My Property' = DATA BOOLEAN (MyClass);\r\nmyAction 'My Action' (MyClass o) {\r\n    myProperty(o) <- TRUE;\r\n}\r\n\r\nFORM myForm\r\n;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Module, requirements and namespace declarations must be separated by blank lines:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"MODULE MyModule;\r\n\r\nREQUIRE MyModule2;\r\n\r\nNAMESPACE MyNamespace;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"="}),", ",(0,r.jsx)(n.code,{children:"<"}),", ",(0,r.jsx)(n.code,{children:">"}),", ",(0,r.jsx)(n.code,{children:"<="}),", ",(0,r.jsx)(n.code,{children:">="}),", ",(0,r.jsx)(n.code,{children:"+"}),", ",(0,r.jsx)(n.code,{children:"-"})," operators are separated on both sides by spaces."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"value(x) = 324\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A space is placed after the comma. There should be no space before the comma."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"f(x, y, z) = g(x, y, z) + h(x, y);\r\n\r\nFORM test\r\n    OBJECTS a = Class1, b = Class2\r\n    PROPERTIES VALUE(a), VALUE(b), name(a), name(b)\r\n;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Every new property or action declaration starts on a new line. If there is another code after the ",(0,r.jsx)(n.code,{children:";"}),", then a space is placed after the character."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"runAction1 (X x) = { f(x) <- 1; g(x) <- 1; }\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When declaring a property or action, a space is inserted between the name or type and the symbol ",(0,r.jsx)(n.code,{children:"("}),". When using a property, there is no space."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"nameProperty (MyClass o) = name(property(o));\r\nmyProperty = DATA STRING[10] (MyClass);\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"actions",children:"Actions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:['Each "logically nested" line should have an offset by exactly 4 spaces. Actions are considered nested after ',(0,r.jsx)(n.code,{children:"IF"}),", ",(0,r.jsx)(n.code,{children:"FOR"}),", ",(0,r.jsx)(n.code,{children:"WHILE"}),", as well as after the property declaration itself:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"IF x = 1 THEN\r\n    f(a) <- TRUE;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Spaces are placed before and after symbols ",(0,r.jsx)(n.code,{children:"{"})," and ",(0,r.jsx)(n.code,{children:"<-"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"FOR f(a) DO {\r\n    x(a) <- TRUE;\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"FOR f(a) DO { x(a) <- TRUE; }\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"forms",children:"Forms"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Object declarations are separated by an empty line.","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"FORM test\r\n    OBJECTS a = Object\r\n    PROPERTIES(a) VALUE\r\n\r\n    OBJECTS b = Object\r\n    PROPERTIES(b) VALUE\r\n;   \n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(96540);const a={},c=r.createContext(a);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);