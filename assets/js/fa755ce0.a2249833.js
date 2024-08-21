"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[65155],{51640:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>s});var t=r(74848),o=r(28453);const d={title:"How-to: WHILE"},a=void 0,l={id:"How-to_WHILE",title:"How-to: WHILE",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_WHILE.md",sourceDirName:".",slug:"/How-to_WHILE",permalink:"/v4/How-to_WHILE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_WHILE.md",tags:[],version:"v4",lastUpdatedAt:162565152e4,frontMatter:{title:"How-to: WHILE"},sidebar:"learn",previous:{title:"How-to: IF/CASE",permalink:"/v4/How-to_IF_CASE"},next:{title:"How-to: NEWSESSION",permalink:"/v4/How-to_NEWSESSION"}},i={},s=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have an order for which a date is defined."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Order 'Order';\r\n\r\ndate 'Date' = DATA DATE (Order);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to display a message containing the number of orders for each date from a given interval."}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"countOrders (DATE date) = GROUP SUM 1 BY date(Order o);\r\n\r\nmessageCountOrders 'Count the number of orders' (DATE dFrom, DATE dTo)  {\r\n    // Option 1\r\n    LOCAL date = DATE ();\r\n    date() <- dFrom;\r\n\r\n    WHILE date() <= dTo DO {\r\n        MESSAGE 'Number of orders for ' + date () + ' : ' + OVERRIDE countOrders(date()), 0.0;\r\n        date() <- sum(date(), 1);\r\n    }\r\n\r\n    // Option 2\r\n    FOR iterate(DATE date, dFrom, dTo) DO\r\n        MESSAGE 'Number of orders for ' + date + ' : ' + OVERRIDE countOrders(date()), 0.0;\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Both these options will provide the same result."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"sum"})," property defined in the ",(0,t.jsx)(n.code,{children:"Time"})," system ",(0,t.jsx)(n.a,{href:"/v4/Modules",children:"module"})," is used to add one day to the given date."]}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),". We have also defined order lines, so that each line contains the (full) amount and the discount."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS OrderDetail 'Order line';\r\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\r\n\r\nsum 'Amount' = DATA NUMERIC[14,2] (OrderDetail);\r\ndiscountSum 'Discount amount' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,t.jsx)(n.p,{children:'We need to create an action that "distributes" given discount by line, starting from the line with the largest amount.'}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"distributeDiscount 'Distribute discount' (Order o, NUMERIC[14,2] discount)  {\r\n    LOCAL discount = NUMERIC[14,2] ();\r\n    discount() <- discount;\r\n\r\n    LOCAL leftSum = NUMERIC[14,2] (OrderDetail);\r\n    leftSum(OrderDetail d) <- sum(d) WHERE order(d) == o;\r\n\r\n    WHILE discount() > 0 DO {\r\n        // finding the row with the largest \"remaining\" amount\r\n        FOR OrderDetail d == [ GROUP LAST OrderDetail od ORDER leftSum(od), od BY order(od)](o) DO { \r\n            discountSum(d) <- MIN leftSum(d), discount();\r\n            discount() <- discount() (-) discountSum(d);\r\n        }\r\n        IF (GROUP SUM 1 IF leftSum(OrderDetail d) > 0) THEN\r\n            BREAK; // nothing left to break down\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"The logic for changing the balance for the book is defined as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\r\n\r\nCLASS Ledger 'Change balance';\r\ndate 'Date' = DATA DATE (Ledger);\r\nbook 'Book' = DATA Book (Ledger);\r\nquantity 'Qty' = DATA NUMERIC[14,2] (Ledger);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to create an action that will calculate the accumulated (integral) balance for a given time period."}),"\n",(0,t.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"calculateIntegral (DATE dFrom, DATE dTo)  {\r\n    LOCAL date = DATE();\r\n    date() <- dFrom;\r\n\r\n    LOCAL balance = NUMERIC[14,2] (Book);\r\n    balance(Book b) <- [ GROUP SUM quantity(Ledger l) IF date(l) < dFrom BY book(l)](b);\r\n\r\n    LOCAL cumBalance = NUMERIC[14,2] (Book);\r\n\r\n    WHILE date() <= dTo DO {\r\n        cumBalance(Book b) <- cumBalance(b) (+) balance(b); //\r\n        balance(Book b) <- balance(b) (+) [ GROUP SUM quantity(Ledger l) BY book(l), date(l)](b, date());\r\n        date() <- sum(date(), 1);\r\n    }\r\n\r\n    FOR cumBalance(Book b) DO {\r\n        MESSAGE 'Accumulated balance for book ' + b + ' : ' + cumBalance(b);\r\n    }\r\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(96540);const o={},d=t.createContext(o);function a(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);