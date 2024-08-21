"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[22793],{62475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(74848),c=r(28453);const o={title:"Search (SEEK)"},s=void 0,i={id:"Search_SEEK",title:"Search (SEEK)",description:"Search operator tries to make the specified object collection current for the specified form object group. The objects from the specified object collection shall be called seek objects.",source:"@site/docs/Search_SEEK.md",sourceDirName:".",slug:"/Search_SEEK",permalink:"/Search_SEEK",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Search_SEEK.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Search (SEEK)"},sidebar:"learn",previous:{title:"Object group operators",permalink:"/Object_group_operators"},next:{title:"Object tree visibility (EXPAND, COLLAPSE)",permalink:"/Object_tree_visibility_EXPAND_COLLAPSE"}},l={},d=[{value:"Seek direction",id:"direction",level:3},{value:"Setting <code>NULL</code> Values",id:"setting-null-values",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function a(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Search"})," operator tries to make the specified object collection ",(0,n.jsx)(t.a,{href:"/Form_structure#currentObject",children:"current"})," for the specified form object group. The objects from the specified object collection shall be called ",(0,n.jsx)(t.em,{children:"seek objects"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"direction",children:"Seek direction"}),"\n",(0,n.jsxs)(t.p,{children:["If the object group for which the search is performed contains objects other than search objects, for these objects (which we will call ",(0,n.jsx)(t.em,{children:"additional"}),") the collection of objects that will be selected as current is determined by special options:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"FIRST"})," - the ",(0,n.jsx)(t.strong,{children:"first"})," matching collection according to the specified order will be selected."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"LAST"})," - the ",(0,n.jsx)(t.strong,{children:"last"})," matching collection according to the specified order will be selected."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If the required object collection is not found for the seek objects, the current object collection will be the closest to the desired one. The direction in which this closest object collection will be selected is also determined by the above options:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"FIRST"})," - the ",(0,n.jsx)(t.strong,{children:"next"})," closest collection according to the specified order will be selected."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"LAST"})," - the ",(0,n.jsx)(t.strong,{children:"previous"})," closest collection according to the specified order will be selected."]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"setting-null-values",children:["Setting ",(0,n.jsx)(t.code,{children:"NULL"})," Values"]}),"\n",(0,n.jsxs)(t.p,{children:["Also, this operator allows resetting all objects of the specified group to ",(0,n.jsx)(t.code,{children:"NULL"}),". In this case, the seek direction is not applicable/not specified."]}),"\n",(0,n.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(t.p,{children:["To declare an action that implements an object change, use the ",(0,n.jsxs)(t.a,{href:"/SEEK_operator",children:[(0,n.jsx)(t.code,{children:"SEEK"})," operator"]}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"number = DATA INTEGER (Order);\r\nFORM orders\r\n    OBJECTS o = Order\r\n    PROPERTIES(o) READONLY number, currency, customer\r\n;\r\nnewOrder  {\r\n    NEW new = Order {\r\n        number(new) <- (GROUP MAX number(Order o)) (+) 1;\r\n        SEEK orders.o = new;\r\n    }\r\n}\r\nseekFirst  { SEEK FIRST orders.o; }\r\nseekLast  { SEEK LAST orders.o; }\r\n\r\nEXTEND FORM orders\r\n    PROPERTIES(o) newOrder, seekFirst, seekLast\r\n;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const c={},o=n.createContext(c);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);