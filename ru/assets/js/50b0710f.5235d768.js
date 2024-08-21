"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[58728],{47556:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>E,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var o=r(74848),i=r(28453);const t={title:"How-to: \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435"},d=void 0,s={id:"How-to_Using_objects_as_templates",title:"How-to: \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/How-to_Using_objects_as_templates.md",sourceDirName:".",slug:"/How-to_Using_objects_as_templates",permalink:"/ru/v5/How-to_Using_objects_as_templates",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/ru/How-to_Using_objects_as_templates.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435"},sidebar:"learn",previous:{title:"How-to: \u041d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f",permalink:"/ru/v5/How-to_Numbering"},next:{title:"How-to: \u041f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439",permalink:"/ru/v5/How-to_Overriding_values"}},c={},l=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",level:3}];function a(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1"}),"\n",(0,o.jsx)(e.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,o.jsx)(e.p,{children:"\u0415\u0441\u0442\u044c \u043a\u043d\u0438\u0433\u0430, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0437\u0430\u0434\u0430\u043d\u044b \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0446\u0435\u043d\u0430. \u0414\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u0437\u0430\u0434\u0430\u043d\u044b \u0444\u043e\u0440\u043c\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\r\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Book) IN id;\r\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (Book);\r\n\r\nFORM book '\u041a\u043d\u0438\u0433\u0430'\r\n    OBJECTS b = Book PANEL\r\n    PROPERTIES(b) name, price\r\n\r\n    EDIT Book OBJECT b\r\n;\r\n\r\nFORM books '\u041a\u043d\u0438\u0433\u0438'\r\n    OBJECTS b = Book\r\n    PROPERTIES(b) READONLY name, price\r\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\r\n;\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043a\u043d\u0438\u0433\u0438 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u043e\u0432\u0443\u044e \u0438 \u043e\u0442\u043a\u0440\u043e\u0435\u0442 \u0444\u043e\u0440\u043c\u0443 \u043f\u043e \u0435\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e."}),"\n",(0,o.jsx)(e.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"copy '\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c' (Book book)  {\r\n    NEWSESSION {\r\n        NEW newBook = Book {\r\n            name(newBook) <- name(book);\r\n            price(newBook) <- price(book);\r\n            SHOW book OBJECTS b = newBook DOCKED;\r\n        }\r\n    }\r\n}\r\n\r\nEXTEND FORM books\r\n    PROPERTIES(b) copy TOOLBAR\r\n;\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u041f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438 \u043a\u043d\u043e\u043f\u043a\u0438 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u043d\u043e\u0432\u0430\u044f ",(0,o.jsx)(e.a,{href:"/ru/v5/Change_sessions",children:"\u0441\u0435\u0441\u0441\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"}),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u043e\u0437\u0434\u0430\u0441\u0442\u0441\u044f \u043a\u043d\u0438\u0433\u0430 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u043e\u0432\u0430\u044f \u0444\u043e\u0440\u043c\u0430. \u0415\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u043a\u0440\u043e\u0435\u0442 \u0444\u043e\u0440\u043c\u0443 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u0442\u043e \u043d\u043e\u0432\u0430\u044f \u043a\u043d\u0438\u0433\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430 \u0432 \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u0430. \u0421\u043b\u043e\u0432\u043e ",(0,o.jsx)(e.code,{children:"TOOLBAR"})," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u044d\u0442\u0443 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0430\u0434\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0432 \u0442\u0443\u043b\u0431\u0430\u0440\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u0432."]}),"\n",(0,o.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2"}),"\n",(0,o.jsx)(e.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,o.jsx)(e.p,{children:"\u0412\u0432\u0435\u0434\u0435\u043d\u044b \u043f\u043e\u043d\u044f\u0442\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0437\u0430\u043a\u0430\u0437\u0430 \u0438 \u0441\u0447\u0435\u0442\u0430, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0444\u043e\u0440\u043c\u044b \u043f\u043e \u0438\u0445 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0443 \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e. \u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0437\u0430\u0434\u0430\u043d\u044b \u0441\u0442\u0440\u043e\u043a\u0438."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"// \u0417\u0430\u043a\u0430\u0437\u044b\r\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\r\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\r\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Order);\r\n\r\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\r\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\r\n\r\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (OrderDetail) NONULL;\r\nnameBook '\u041a\u043d\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\r\n\r\nquantity '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e' = DATA INTEGER (OrderDetail);\r\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (OrderDetail);\r\n\r\nFORM order '\u0417\u0430\u043a\u0430\u0437'\r\n    OBJECTS o = Order PANEL\r\n    PROPERTIES(o) date, number\r\n\r\n    OBJECTS d = OrderDetail\r\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\r\n    FILTERS order(d) == o\r\n\r\n    EDIT Order OBJECT o\r\n;\r\n\r\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b'\r\n    OBJECTS o = Order\r\n    PROPERTIES(o) READONLY date, number\r\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\r\n;\r\n// \u0421\u0447\u0435\u0442\u0430\r\nCLASS Invoice '\u0421\u0447\u0435\u0442';\r\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Invoice);\r\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Invoice);\r\n\r\nCLASS InvoiceDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0441\u0447\u0435\u0442\u0430';\r\ninvoice '\u0421\u0447\u0435\u0442' = DATA Invoice (InvoiceDetail) NONULL DELETE;\r\n\r\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (InvoiceDetail) NONULL;\r\nnameBook '\u041a\u043d\u0438\u0433\u0430' (InvoiceDetail d) = name(book(d));\r\n\r\nquantity '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e' = DATA INTEGER (InvoiceDetail);\r\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (InvoiceDetail);\r\n\r\nFORM invoice '\u0421\u0447\u0435\u0442'\r\n    OBJECTS i = Invoice PANEL\r\n    PROPERTIES(i) date, number\r\n\r\n    OBJECTS d = InvoiceDetail\r\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\r\n    FILTERS invoice(d) == i\r\n;\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u041d\u0443\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c ",(0,o.jsx)(e.a,{href:"/ru/v5/Actions",children:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"}),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u0441\u0447\u0435\u0442 \u0438 \u043e\u0442\u043a\u0440\u043e\u0435\u0442 \u0444\u043e\u0440\u043c\u0443 \u043f\u043e \u0435\u0433\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e."]}),"\n",(0,o.jsx)(e.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"createInvoice '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0447\u0435\u0442' (Order o)  {\r\n    NEWSESSION {\r\n        NEW i = Invoice {\r\n            date(i) <- date(o);\r\n            number(i) <- number(o);\r\n\r\n            FOR order(OrderDetail od) == o NEW id = InvoiceDetail DO {\r\n                invoice(id) <- i;\r\n\r\n                book(id) <- book(od);\r\n\r\n                quantity(id) <- quantity(od);\r\n                price(id) <- price(od);\r\n            }\r\n            SHOW invoice OBJECTS i = i DOCKED;\r\n        }\r\n    }\r\n}\r\n\r\nEXTEND FORM orders\r\n    PROPERTIES(o) createInvoice TOOLBAR\r\n;\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:"\u041f\u0440\u0438\u043c\u0435\u0440 3"}),"\n",(0,o.jsx)(e.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,o.jsxs)(e.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,o.jsx)(e.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-2",children:(0,o.jsx)(e.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 2"})}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["\u041d\u0443\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c ",(0,o.jsx)(e.a,{href:"/ru/v5/Actions",children:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"}),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u043b\u044f \u0441\u0447\u0435\u0442\u0430 \u0432\u044b\u0437\u043e\u0432\u0435\u0442 \u0434\u0438\u0430\u043b\u043e\u0433 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u0437 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e."]}),"\n",(0,o.jsx)(e.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"fillOrder '\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043f\u043e \u0437\u0430\u043a\u0430\u0437\u0443' (Invoice i)  {\r\n    DIALOG orders OBJECTS o INPUT DO {\r\n        date(i) <- date(o);\r\n        number(i) <- number(o);\r\n\r\n        FOR order(OrderDetail od) == o NEW id = InvoiceDetail DO {\r\n            invoice(id) <- i;\r\n\r\n            book(id) <- book(od);\r\n\r\n            quantity(id) <- quantity(od);\r\n            price(id) <- price(od);\r\n        }\r\n    }\r\n}\r\nEXTEND FORM invoice\r\n    PROPERTIES(i) fillOrder\r\n;\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u041d\u0438\u043a\u0430\u043a\u0438\u0445 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u044f \u0441 \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f, \u0442\u0430\u043a \u043a\u0430\u043a \u043a\u043d\u043e\u043f\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0438\u0437 \u0444\u043e\u0440\u043c\u044b \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0447\u0435\u0442\u0430, \u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u0435\u0435 \u0441\u0435\u0441\u0441\u0438\u0438."})]})}function E(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>d,x:()=>s});var o=r(96540);const i={},t=o.createContext(i);function d(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);