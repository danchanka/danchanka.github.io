"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[36750],{70649:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=o(74848),r=o(28453);const s={title:"How-to: CRUD"},i=void 0,l={id:"How-to_CRUD",title:"How-to: CRUD",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_CRUD.md",sourceDirName:".",slug:"/How-to_CRUD",permalink:"/v4/How-to_CRUD",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_CRUD.md",tags:[],version:"v4",lastUpdatedAt:1619709222e3,frontMatter:{title:"How-to: CRUD"},sidebar:"learn",previous:{title:"How-to: Interactive forms",permalink:"/v4/How-to_Interactive_forms"},next:{title:"How-to: Documents with lines",permalink:"/v4/How-to_Documents_with_lines"}},a={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a set of predefined book types."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Type 'Type' {\r\n    novel 'Novel',\r\n    thriller 'Thriller',\r\n    fiction 'Fiction'\r\n}\r\nname 'Name' (Type g) = staticCaption(g) IF g IS Type;\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to create a form to select a type from the list."}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM types 'List of types'\r\n    OBJECTS g = Type\r\n    PROPERTIES(g) READONLY name\r\n\r\n    LIST Type OBJECT g\r\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"LIST"})," indicates that this form will be used for selecting a type from the list (e. g. when the user wants to change the book type)."]}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a set of books with given titles."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\r\nname 'Name' = DATA ISTRING[30] (Book) IN id;\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["It is recommended that you add all the ",(0,t.jsx)(n.code,{children:"name"})," properties to the ",(0,t.jsx)(n.code,{children:"id"})," group. Values of this property will help identify the object in case of the constraint violations. It will also be added to automatic forms when no edit (",(0,t.jsx)(n.code,{children:"EDIT"}),") or list (",(0,t.jsx)(n.code,{children:"LIST"}),") forms are defined for the class."]})}),"\n",(0,t.jsx)(n.p,{children:"We need to create a form with a list of books where the user can add, edit or delete them."}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM book 'Book' // form for displaying \"card' // form for displaying the book card\r\n    OBJECTS b = Book PANEL\r\n    PROPERTIES(b) name\r\n\r\n    EDIT Book OBJECT b\r\n;\r\n\r\nFORM books 'Books'\r\n    OBJECTS b = Book\r\n    PROPERTIES(b) READONLY name\r\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\r\n\r\n    LIST Book OBJECT b\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW books;\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a set of book genres with given titles."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Genre 'Genre';\r\nname 'Name' = DATA ISTRING[30] (Genre);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to create a form with a list of genres where the user can add, edit or delete them, and one more form with a list of genres but without these options."}),"\n",(0,t.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM genre 'Genre'\r\n    OBJECTS g = Genre PANEL\r\n    PROPERTIES(g) name\r\n\r\n    EDIT Genre OBJECT g\r\n;\r\n\r\nFORM genres 'Genres'\r\n    OBJECTS g = Genre\r\n    PROPERTIES(g) READONLY name\r\n    PROPERTIES(g) NEWSESSION NEW, EDIT, DELETE\r\n;\r\n\r\nFORM dialogGenre 'Genres'\r\n    OBJECTS g = Genre\r\n    PROPERTIES(g) READONLY name\r\n\r\n    LIST Genre OBJECT g\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW genres;\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Use this scheme (with three forms instead of two) when you want to allow users to select genres and prevent any accidental changes to the genre information. In this case, the user will be able to edit genres only on a dedicated form."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var t=o(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);