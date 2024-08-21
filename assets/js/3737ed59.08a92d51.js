"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[47302],{18647:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(74848),t=n(28453);const s={title:"How-to: CHANGE"},i=void 0,a={id:"How-to_CHANGE",title:"How-to: CHANGE",description:"Example 1",source:"@site/docs/How-to_CHANGE.md",sourceDirName:".",slug:"/How-to_CHANGE",permalink:"/How-to_CHANGE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_CHANGE.md",tags:[],version:"current",lastUpdatedAt:1622042248e3,frontMatter:{title:"How-to: CHANGE"},sidebar:"learn",previous:{title:"How-to: Actions",permalink:"/How-to_Actions"},next:{title:"How-to: EXEC",permalink:"/How-to_EXEC"}},l={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(r.h3,{id:"task",children:"Task"}),"\n",(0,o.jsx)(r.p,{children:"We have a sales order for the books."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"CLASS Order 'Order';\r\n\r\nCLASS Customer 'Customer';\r\nname = DATA ISTRING[50] (Customer);\r\n\r\ndate 'Date' = DATA DATE (Order);\r\n\r\ncustomer 'Customer' = DATA Customer (Order);\r\nnameCustomer 'Customer' (Order o) = name(customer(o));\r\n\r\ndiscount 'Discount, %' = DATA NUMERIC[5,2] (Order);\r\n\r\nFORM order\r\n    OBJECTS o = Order PANEL\r\n    PROPERTIES(o) date, nameCustomer, discount\r\n;\n"})}),"\n",(0,o.jsx)(r.p,{children:"We need to create an action to place the order on 30 days from today and apply a 5% discount."}),"\n",(0,o.jsx)(r.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"setDateDiscount 'Apply discount (late delivery)' (Order o)  {\r\n    date(o) <- sum(currentDate(), 30);\r\n    discount(o) <- 5.0;\r\n}\r\n\r\nEXTEND FORM order\r\n    PROPERTIES(o) setDateDiscount\r\n;\n"})}),"\n",(0,o.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(r.h3,{id:"task-1",children:"Task"}),"\n",(0,o.jsxs)(r.p,{children:["Similar to ",(0,o.jsx)(r.a,{href:"#example-1",children:(0,o.jsx)(r.strong,{children:"Example 1"})}),", except that a specification was added to the order. The current price for each book is also defined."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"CLASS Book 'Book';\r\nname 'Name' = DATA ISTRING[50] (Book);\r\nprice 'Current price' (Book b) = DATA NUMERIC[14,2] (Book);\r\n\r\nCLASS OrderDetail 'Order line';\r\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\r\nbook 'Book' = DATA Book (OrderDetail);\r\nnameBook 'Book' (OrderDetail d) = name(book(d));\r\n\r\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\r\n\r\nEXTEND FORM order\r\n    OBJECTS d = OrderDetail\r\n    PROPERTIES(d) nameBook, price\r\n;\n"})}),"\n",(0,o.jsx)(r.p,{children:"We need to create an action to populate all the lines in the order with current prices for the corresponding books."}),"\n",(0,o.jsx)(r.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"fillPrice 'Set current prices' (Order o)  {\r\n    price(OrderDetail d) <- price(book(d)) WHERE order(d) == o;\r\n}\r\n\r\nEXTEND FORM order\r\n    PROPERTIES(o) fillPrice\r\n;\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Make sure to use ",(0,o.jsx)(r.code,{children:"WHERE"})," in the action. Otherwise, the prices will be set for all lines of all orders in the database."]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var o=n(96540);const t={},s=o.createContext(t);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);