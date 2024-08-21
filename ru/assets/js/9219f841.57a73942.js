"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[79543],{29098:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=e(74848),o=e(28453);const s={title:"How-to: \u0414\u0438\u0437\u0430\u0439\u043d"},d=void 0,i={id:"How-to_Design",title:"How-to: \u0414\u0438\u0437\u0430\u0439\u043d",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/How-to_Design.md",sourceDirName:".",slug:"/How-to_Design",permalink:"/ru/v5/How-to_Design",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/ru/How-to_Design.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: \u0414\u0438\u0437\u0430\u0439\u043d"},sidebar:"learn",previous:{title:"How-to: \u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",permalink:"/ru/v5/How-to_Filtering_and_ordering"},next:{title:"How-to: \u0414\u0435\u0440\u0435\u0432\u044c\u044f",permalink:"/ru/v5/How-to_Trees"}},a={},l=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3}];function c(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1"}),"\n",(0,t.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,t.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u0444\u043e\u0440\u043c\u0430 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u0432, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u0434\u0430\u043d \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043d\u0438\u0433 \u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043f\u043e \u043d\u0435\u043c\u0443 \u043e\u043f\u043b\u0430\u0442\u044b."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\r\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Book);\r\n\r\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\r\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\r\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Order);\r\n\r\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\r\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\r\n\r\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (OrderDetail) NONULL;\r\nnameBook '\u041a\u043d\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\r\n\r\nquantity '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e' = DATA INTEGER (OrderDetail);\r\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (OrderDetail);\r\n\r\nCLASS Payment '\u041e\u043f\u043b\u0430\u0442\u0430';\r\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (Payment) NONULL DELETE;\r\n\r\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Payment);\r\nsum '\u0421\u0443\u043c\u043c\u0430' = DATA NUMERIC[14,2] (Payment);\r\n\r\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b'\r\n    OBJECTS o = Order\r\n    PROPERTIES(o) READONLY date, number\r\n\r\n    OBJECTS d = OrderDetail\r\n    PROPERTIES(d) READONLY nameBook, quantity, price\r\n    FILTERS order(d) == o\r\n\r\n    OBJECTS p = Payment\r\n    PROPERTIES(p) READONLY date, sum\r\n    FILTERS order(p) == o\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW orders;\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0438\u0437\u0430\u0439\u043d \u0444\u043e\u0440\u043c\u044b \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0441\u0442\u0440\u043e\u043a\u0438 \u0438 \u043e\u043f\u043b\u0430\u0442\u044b \u0448\u043b\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0432\u043a\u043b\u0430\u0434\u043a\u0430\u043c\u0438 \u0438 \u043e\u0442\u0434\u0435\u043b\u044f\u043b\u0438\u0441\u044c \u043e\u0442 \u0441\u043f\u0438\u0441\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440\u0430."}),"\n",(0,t.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"DESIGN orders {\r\n    // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0432 \u0441\u0430\u043c\u043e\u0435 \u043d\u0430\u0447\u0430\u043b\u043e \u0444\u043e\u0440\u043c\u044b\r\n    NEW orderList FIRST {\r\n        fill = 1; // \u043f\u043e\u043c\u0435\u0447\u0430\u0435\u043c, \u0447\u0442\u043e \u044d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \"\u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0442\u044c\u0441\u044f\" \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435\r\n        type = SPLITV; // \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440 - \u0442\u043e \u0435\u0441\u0442\u044c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e 2 \u043f\u043e\u0442\u043e\u043c\u043a\u0430\r\n        MOVE BOX(o); // \u043f\u0435\u0440\u0432\u044b\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432\r\n        NEW orderDetails {\r\n            // \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c, \u0447\u0442\u043e \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c \u0432 2 \u0440\u0430\u0437\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u043c\u0435\u0441\u0442\u0430, \r\n            // \u0447\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 o.box (\u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0442\u0430\u043a\u0438\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 fill, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0440\u0430\u0432\u0435\u043d 1)\r\n            fill = 2; \r\n            type = TABBED; // \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u043f\u0430\u043d\u0435\u043b\u044c\u044e \u0441 \u0432\u043a\u043b\u0430\u0434\u043a\u0430\u043c\u0438\r\n            MOVE BOX(d) { // \u043f\u0435\u0440\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u0440\u043e\u043a \u0441 \u043a\u043d\u0438\u0433\u0430\u043c\u0438\r\n                caption = '\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430';\r\n            }\r\n            MOVE BOX(p) { // \u0432\u0442\u043e\u0440\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043e\u043f\u043b\u0430\u0442\r\n                caption = '\u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043e\u043f\u043b\u0430\u0442\u044b';\r\n            }\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u0424\u043e\u0440\u043c\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:e(54565).A+"",width:"1535",height:"911"})}),"\n",(0,t.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2"}),"\n",(0,t.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,t.jsxs)(n.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,t.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1",children:(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"})}),", \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0444\u043e\u0440\u043c\u0443 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u044b \u043f\u043e \u0434\u0430\u0442\u0435 \u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044e."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Customer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c';\r\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Customer);\r\n\r\ncustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' = DATA Customer (Order);\r\nnameCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' (Order o) = name(customer(o));\r\n\r\nfilterCustomer = DATA LOCAL Customer ();\r\nnameFilterCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' = name(filterCustomer());\r\n\r\nEXTEND FORM orders\r\n    PROPERTIES() nameFilterCustomer\r\n\r\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) BEFORE o PANEL\r\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\r\n\r\n    PROPERTIES(o) READONLY nameCustomer\r\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\r\n            customer(o) == filterCustomer() OR NOT filterCustomer()\r\n;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0434\u0438\u0437\u0430\u0439\u043d \u0440\u0430\u043d\u0435\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b."}),"\n",(0,t.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"DESIGN orders {\r\n    orderList {\r\n        // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0432 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440 \u043f\u0435\u0440\u0432\u044b\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c\r\n        NEW orderHeader FIRST { \r\n            // \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043e\u043d \"\u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u043b\u0441\u044f\" \u0432\u043d\u0443\u0442\u0440\u0438 orderList, \u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u043d\u0435\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432\r\n            fill = 1; \r\n            // \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0442\u0438\u043f \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 CONTAINERV, \u0442\u043e \u0435\u0441\u0442\u044c \u0432\u0441\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0432 \u043d\u0435\u043c \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442\u0441\u044f \u0441\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437\r\n            // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u043c \u0432\u0441\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442 \u0437\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044e\r\n            NEW filters { \r\n                caption = '\u0424\u0438\u043b\u044c\u0442\u0440\u044b';\r\n                // \u0434\u0435\u043b\u0430\u0435\u043c \u0435\u0433\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u043c, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0448\u043b\u0438 \u0441\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e\r\n                type = CONTAINERH; \r\n                MOVE PROPERTY(df) {\r\n                    caption = '\u0414\u0430\u0442\u0430 \u0441';\r\n                }\r\n                MOVE PROPERTY(dt) {\r\n                    caption = '\u0414\u0430\u0442\u0430 \u043f\u043e';\r\n                }\r\n                MOVE PROPERTY(nameFilterCustomer());\r\n            }\r\n            // \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u043c \u0432 \u043d\u0435\u0433\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0440\u043e\u0432\u043d\u043e \u0434\u0432\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\r\n            MOVE BOX(o); \r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:e(52142).A+"",width:"1532",height:"904"})})]})}function u(r={}){const{wrapper:n}={...(0,o.R)(),...r.components};return n?(0,t.jsx)(n,{...r,children:(0,t.jsx)(c,{...r})}):c(r)}},54565:(r,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/How-to_Design_ex1-e61d767b2d23f25ba4d185f7ff52153a.png"},52142:(r,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/How-to_Design_ex2-9917b884043cb4dbc2c0a5c491e51227.png"},28453:(r,n,e)=>{e.d(n,{R:()=>d,x:()=>i});var t=e(96540);const o={},s=t.createContext(o);function d(r){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function i(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(o):r.components||o:d(r.components),t.createElement(s.Provider,{value:n},r.children)}}}]);