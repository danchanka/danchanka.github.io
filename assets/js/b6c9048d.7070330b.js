"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[89639],{53977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(74848),n=r(28453);const i={title:"Write file (WRITE)"},o=void 0,a={id:"Write_file_WRITE",title:"Write file (WRITE)",description:"The write file operator creates an action which reads a file from the value of some property and saves it to the defined source.",source:"@site/versioned_docs/version-v5/Write_file_WRITE.md",sourceDirName:".",slug:"/Write_file_WRITE",permalink:"/v5/Write_file_WRITE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Write_file_WRITE.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"Write file (WRITE)"},sidebar:"learn",previous:{title:"Read file (READ)",permalink:"/v5/Read_file_READ"},next:{title:"Data import (IMPORT)",permalink:"/v5/Data_import_IMPORT"}},l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"write file"})," operator creates an ",(0,s.jsx)(t.a,{href:"/v5/Actions",children:"action"})," which reads a file from the value of some property and saves it to the defined source."]}),"\n",(0,s.jsxs)(t.p,{children:["The source is set as a ",(0,s.jsx)(t.a,{href:"/v5/Properties",children:"property"})," whose values are instances of ",(0,s.jsx)(t.a,{href:"/v5/Built-in_classes",children:"string classes"}),". The following types of data sources (URLs) are supported: ",(0,s.jsx)(t.strong,{children:"FILE"}),", ",(0,s.jsx)(t.strong,{children:"FTP"}),", ",(0,s.jsx)(t.strong,{children:"SFTP"})]}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["To declare an action that writes a file, use the ",(0,s.jsxs)(t.a,{href:"/v5/WRITE_operator",children:[(0,s.jsx)(t.code,{children:"WRITE"})," operator"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"loadAndWrite ()  {\r\n    INPUT f = FILE DO {\r\n        WRITE f TO 'file:///home/user/loadedfile.csv' APPEND;\r\n        WRITE CLIENT f TO '/home/user/loadedfile.txt';\r\n        WRITE CLIENT DIALOG f TO 'loadedfile';\r\n    }\r\n}\n"})})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(96540);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);