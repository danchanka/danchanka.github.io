"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[3700],{91872:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(74848),n=t(28453);const o={title:"Data import (IMPORT)"},s=void 0,a={id:"Data_import_IMPORT",title:"Data import (IMPORT)",description:"The data import operator creates an action which reads a file from the value of some property, then, depending on its format, defines the columns (fields) of data in this file, after which it writes the value of each column (field) to the corresponding property (parameter) - import assignment. The mapping of columns to properties can go in either column or name order.",source:"@site/docs/Data_import_IMPORT.md",sourceDirName:".",slug:"/Data_import_IMPORT",permalink:"/Data_import_IMPORT",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Data_import_IMPORT.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Data import (IMPORT)"},sidebar:"learn",previous:{title:"Write file (WRITE)",permalink:"/Write_file_WRITE"},next:{title:"Data export (EXPORT)",permalink:"/Data_export_EXPORT"}},l={},d=[{value:"General case",id:"general-case",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const r={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.em,{children:"data import"})," operator creates an ",(0,i.jsx)(r.a,{href:"/Actions",children:"action"})," which reads a file from the value of some ",(0,i.jsx)(r.a,{href:"/Properties",children:"property"}),", then, depending on its ",(0,i.jsx)(r.a,{href:"/Structured_view",children:"format"}),", defines the columns (fields) of data in this file, after which it ",(0,i.jsx)(r.a,{href:"/Property_change_CHANGE",children:"writes"})," the value of each column (field) to the corresponding property (parameter) - import ",(0,i.jsx)(r.em,{children:"assignment"}),". The mapping of columns to properties can go in either column or name order."]}),"\n",(0,i.jsxs)(r.p,{children:["Rows, in turn, are mapped during import to objects of specified classes (let's call these objects ",(0,i.jsx)(r.em,{children:"imported"}),"). In the current platform implementation, there can be at most one object and the specified class must be either ",(0,i.jsx)(r.a,{href:"/Built-in_classes",children:"numeric"})," or a ",(0,i.jsx)(r.a,{href:"/User_classes#abstract",children:"specific user-defined class"}),". Rows are mapped to the imported object as follows:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"for numeric classes: all imported rows are numbered in the order in which they appear in the file (starting from 0)."}),"\n",(0,i.jsxs)(r.li,{children:["for specific user-defined classes: ",(0,i.jsx)(r.a,{href:"/New_object_NEW",children:"a new object"})," of the specified class is created for each row."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["You can also define an import ",(0,i.jsx)(r.em,{children:"condition"}),": this is a property in which the ",(0,i.jsx)(r.a,{href:"/Built-in_classes",children:"default value"})," of the property value class is written for each row (as opposed to import destination in which column values are written)."]}),"\n",(0,i.jsx)(r.h3,{id:"general-case",children:"General case"}),"\n",(0,i.jsxs)(r.p,{children:["It should be noted that data import is a special case of (syntactic sugar for) ",(0,i.jsx)(r.a,{href:"/In_a_structured_view_EXPORT_IMPORT#importForm",children:"form import"}),", in which the imported form is created automatically and consists of:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["one ",(0,i.jsx)(r.a,{href:"/Form_structure#objects",children:"group of objects"})," named ",(0,i.jsx)(r.code,{children:"value"})," whose objects correspond to imported objects (not created if there are no imported objects)"]}),"\n",(0,i.jsxs)(r.li,{children:["imported properties. The ",(0,i.jsx)(r.a,{href:"/Form_structure#propertygroup",children:"property group"})," for the properties that are created on the form is the ",(0,i.jsx)(r.a,{href:"/Groups_of_properties_and_actions#builtin",children:"builtin"})," group ",(0,i.jsx)(r.code,{children:"System.private"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"a filter equal to the defined condition."}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Accordingly, the behavior of the data import operator (for example, determining the names of the resulting columns / keys, ",(0,i.jsxs)(r.a,{href:"/Structured_view#value",children:["processing of ",(0,i.jsx)(r.code,{children:"value"})]}),", etc.) is completely determined by the behavior of the form import operator (as if the above form were passed to it as a parameter)."]}),"\n",(0,i.jsx)(r.h3,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(r.p,{children:["To declare an action that imports data, use the ",(0,i.jsxs)(r.a,{href:"/IMPORT_operator",children:[(0,i.jsx)(r.code,{children:"IMPORT"})," operator"]}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lsf",children:"import()  {\r\n\r\n    LOCAL xlsFile = EXCELFILE ();\r\n\r\n    LOCAL field1 = BPSTRING[50] (INTEGER);\r\n    LOCAL field2 = BPSTRING[50] (INTEGER);\r\n    LOCAL field3 = BPSTRING[50] (INTEGER);\r\n    LOCAL field4 = BPSTRING[50] (INTEGER);\r\n\r\n    LOCAL headField1 = BPSTRING[50] ();\r\n    LOCAL headField2 = BPSTRING[50] ();\r\n\r\n    INPUT f = EXCELFILE DO {\r\n        IMPORT XLS SHEET 2 FROM f TO field1 = C, field2, field3 = F, field4 = A;\r\n        IMPORT XLS SHEET ALL FROM f TO field1 = C, field2, field3 = F, field4 = A;\r\n\r\n        FOR imported(INTEGER i) DO { // imported property - a system property for iterating data\r\n            MESSAGE 'field1 value = ' + field1(i);\r\n            MESSAGE 'field2 value = ' + field2(i);\r\n            MESSAGE 'field3 value = ' + field3(i);\r\n            MESSAGE 'field4 value = ' + field4(i);\r\n       }\r\n    }\r\n\r\n    LOCAL t = FILE ();\r\n    EXTERNAL SQL 'jdbc:postgresql://localhost/test?user=postgres&password=12345' EXEC 'SELECT x.a,x.b,x.c,x.d FROM orders x WHERE x.id = $1;' PARAMS '4553' TO t;\r\n    IMPORT FROM t() FIELDS INTEGER a, DATE b, BPSTRING[50] c, BPSTRING[50] d DO        // import with FIELDS option\r\n        NEW o = Order {\r\n            number(o) <- a;\r\n            date(o) <- b;\r\n            customer(o) <- c;\r\n            currency(o) <- GROUP MAX Currency currency IF name(currency) = d; // finding currency with this name\r\n        }\r\n\r\n\r\n    INPUT f = FILE DO\r\n        IMPORT CSV '*' HEADER CHARSET 'utf-8' FROM f TO field1 = C, field2, field3 = F, field4 = A;\r\n    INPUT f = FILE DO\r\n        IMPORT XML ATTR FROM f TO field1, field2;\r\n    INPUT f = FILE DO\r\n        IMPORT XML ROOT 'element' ATTR FROM f TO field1, field2;\r\n    INPUT f = FILE DO\r\n        IMPORT XML ATTR FROM f TO() headField1, headField2;\r\n\r\n    INPUT f = FILE DO\r\n        INPUT memo = FILE DO\r\n            IMPORT DBF MEMO memo FROM f TO field1 = 'DBFField1', field2 = 'DBFField2';\r\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var i=t(96540);const n={},o=i.createContext(n);function s(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);