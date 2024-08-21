"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[80485],{12602:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(74848),i=t(28453);const s={title:"READ operator"},o=void 0,l={id:"READ_operator",title:"READ operator",description:"The READ operator creates an action that reads a file to a property from an external resource.",source:"@site/versioned_docs/version-v5/READ_operator.md",sourceDirName:".",slug:"/READ_operator",permalink:"/v5/READ_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/READ_operator.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"READ operator"},sidebar:"learn",previous:{title:"PRINT operator",permalink:"/v5/PRINT_operator"},next:{title:"REQUEST operator",permalink:"/v5/REQUEST_operator"}},a={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"READ"})," operator creates an ",(0,n.jsx)(r.a,{href:"/v5/Actions",children:"action"})," that ",(0,n.jsx)(r.a,{href:"/v5/Read_file_READ",children:"reads a file"})," to a ",(0,n.jsx)(r.a,{href:"/v5/Properties",children:"property"})," from an external resource."]}),"\n",(0,n.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"READ [CLIENT [DIALOG]] urlExpr [TO propertyId]\n"})}),"\n",(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"READ"})," operator creates an action that reads a file from an external resource at the URL specified, and then writes the result file to the specified property."]}),"\n",(0,n.jsx)(r.p,{children:"The following URL types are supported:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"[file://]path_to_file\r\n[s]ftp://username:password[;charset]@host:port[/path_to_file][?passivemode=true|false]\n"})}),"\n",(0,n.jsxs)(r.p,{children:["If the value of the property to which the file is written belongs to the ",(0,n.jsx)(r.code,{children:"FILE"})," class, the file extension from the URL is also written to its value along with the file."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"CLIENT"})}),"\n",(0,n.jsx)(r.p,{children:"Keyword. If specified, the action will be executed on the client side. By default, the action is executed on the server."}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"DIALOG"})}),"\n",(0,n.jsx)(r.p,{children:"Keyword. If specified, before writing the file a dialog will be shown in which the user can change the specified URL. This can be used only when writing to the disk (the URL type is file). By default, the dialog is not shown."}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"urlExpr"})}),"\n",(0,n.jsxs)(r.p,{children:["An ",(0,n.jsx)(r.a,{href:"/v5/Expression",children:"expression"})," whose value is the URL from which to read. The value of the expression must be a string type."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"propertyId"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"/v5/IDs#propertyid",children:"ID of the property"})," to which read data should be written. This property must not have parameters and its value must be of a file class (",(0,n.jsx)(r.code,{children:"FILE"}),", ",(0,n.jsx)(r.code,{children:"RAWFILE"}),", ",(0,n.jsx)(r.code,{children:"JSONFILE"}),", etc.). If this property is not specified, the ",(0,n.jsx)(r.code,{children:"System.exportFile"})," property is used by default."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lsf",children:"readFiles()  {\r\n\r\n    LOCAL importFile = FILE ();\r\n\r\n    //reading from FTP\r\n    READ 'ftp://ftp.lsfusion.org/file.xlsx' TO importFile;\r\n    //reading from SFTP\r\n    READ 'sftp://sftp.lsfusion.org/file.xlsx' TO importFile;\r\n    //reading from FILE\r\n    READ 'D://lsfusion/file.xlsx' TO importFile;\r\n    READ 'file://D://lsfusion/file.xlsx' TO importFile;\r\n}\r\n\r\nconnectionString = DATA STRING[100]();\r\nimportXls 'Import markups'()  {\r\n    LOCAL importFile = FILE ();\r\n    READ connectionString() + '@SELECT field1, field2 FROM myTable' TO importFile;\r\n\r\n    LOCAL field1 = INTEGER (INTEGER);\r\n    LOCAL field2 = BPSTRING[10] (INTEGER);\r\n    IMPORT TABLE FROM importFile() TO field1, field2;\r\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>l});var n=t(96540);const i={},s=n.createContext(i);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);