"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[36016],{11919:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(74848),t=r(28453);const i={title:"How-to: Constraints"},l=void 0,s={id:"How-to_Constraints",title:"How-to: Constraints",description:"Example 1",source:"@site/docs/How-to_Constraints.md",sourceDirName:".",slug:"/How-to_Constraints",permalink:"/How-to_Constraints",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Constraints.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"How-to: Constraints"},sidebar:"learn",previous:{title:"How-to: Declarative logic",permalink:"/How-to_Declarative_logic"},next:{title:"How-to: Inheritance and aggregation",permalink:"/How-to_Inheritance_and_aggregation"}},a={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Example 5",id:"example-5",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-4",level:3},{value:"Example 6",id:"example-6",level:2},{value:"Task",id:"task-5",level:3},{value:"Solution",id:"solution-5",level:3}];function c(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsx)(o.h3,{id:"task",children:"Task"}),"\n",(0,n.jsx)(o.p,{children:"There is a book for which a price is defined."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"CLASS Book 'Book';\r\nname 'Name' = DATA ISTRING[50] (Book) IN id;\r\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n"})}),"\n",(0,n.jsx)(o.p,{children:"We need to do so that it will be impossible to enter prices higher than 100."}),"\n",(0,n.jsx)(o.h3,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"// Option 1\r\nCONSTRAINT price(Book b) > 100\r\n    MESSAGE 'The book price cannot be more than 100 rubles';\r\n\r\n// Option 2\r\nCONSTRAINT SET(price(Book b) > 100)\r\n    MESSAGE 'The book price cannot be more than 100 rubles';\n"})}),"\n",(0,n.jsxs)(o.p,{children:["If a user tries to save a book costing over 100 on any form, the user will see a message with a corresponding text. This message will also contain all objects of the ",(0,n.jsx)(o.code,{children:"Book"})," class for which the constraint is violated. Values of properties from the ",(0,n.jsx)(o.code,{children:"id"})," group will be shown for each object."]}),"\n",(0,n.jsxs)(o.p,{children:["Both options are identical from the execution perspective. If the platform does not find any ",(0,n.jsx)(o.a,{href:"/Change_operators_SET_CHANGED_etc",children:"change operator"}),' in a constraint, the entire expression is automatically "wrapped" into a ',(0,n.jsx)(o.code,{children:"SET"})," operator."]}),"\n",(0,n.jsx)(o.h2,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(o.h3,{id:"task-1",children:"Task"}),"\n",(0,n.jsx)(o.p,{children:"We have an order with a date, ID and a posted/not posted flag."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"CLASS Order 'Order';\r\ndate 'Date' = DATA DATE (Order) IN id;\r\nnumber 'Number' = DATA INTEGER (Order) IN id;\r\nposted 'Completed' = DATA BOOLEAN (Order) IN id;\n"})}),"\n",(0,n.jsx)(o.p,{children:"You need to prohibit the change of the order date."}),"\n",(0,n.jsx)(o.h3,{id:"solution-1",children:"Solution"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"CONSTRAINT CHANGED(date(Order o)) AND posted(o)\r\n    MESSAGE 'It is forbidden to change the date of a completed order';\n"})}),"\n",(0,n.jsx)(o.h2,{id:"example-3",children:"Example 3"}),"\n",(0,n.jsx)(o.h3,{id:"task-2",children:"Task"}),"\n",(0,n.jsxs)(o.p,{children:["Identical to ",(0,n.jsx)(o.a,{href:"#example-2",children:(0,n.jsx)(o.strong,{children:"Example 2"})}),"."]}),"\n",(0,n.jsx)(o.p,{children:"You need to prohibit the deletion of a posted order."}),"\n",(0,n.jsx)(o.h3,{id:"solution-2",children:"Solution"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"CONSTRAINT DROPPED(Order o IS Order) AND PREV(date(o)) < currentDate()\r\n    MESSAGE 'It is forbidden to delete old orders';\n"})}),"\n",(0,n.jsxs)(o.p,{children:["When an order is deleted, all of its properties will be ",(0,n.jsx)(o.code,{children:"NULL"}),". That is why you need to you use the ",(0,n.jsx)(o.code,{children:"PREV"})," operator to access its property values."]}),"\n",(0,n.jsx)(o.h2,{id:"example-4",children:"Example 4"}),"\n",(0,n.jsx)(o.h3,{id:"task-3",children:"Task"}),"\n",(0,n.jsxs)(o.p,{children:["Similar to ",(0,n.jsx)(o.a,{href:"#example-1",children:(0,n.jsx)(o.strong,{children:"Example 1"})})," and ",(0,n.jsx)(o.a,{href:"#example-2",children:(0,n.jsx)(o.strong,{children:"Example 2"})}),". Also, the order contains lines with a price and a link to the book."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"CLASS OrderDetail 'Order line';\r\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\r\n\r\nbook 'Book' = DATA Book (OrderDetail) NONULL;\r\nnameBook 'Book' (OrderDetail d) = name(book(d)) IN id;\r\n\r\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,n.jsx)(o.p,{children:"You need to prohibit the entry of order price values exceeding the price of the book by 10%."}),"\n",(0,n.jsx)(o.h3,{id:"solution-3",children:"Solution"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"CONSTRAINT price(OrderDetail d) > price(book(d)) * 1.1\r\n    MESSAGE 'The price in the order cannot exceed the price of the book by 10%';\n"})}),"\n",(0,n.jsx)(o.p,{children:"Since the expression contains no change operators, this constraint will be triggered when the price changes for a line, book or book price. Therefore, the user will not be able to change the book price if there have been orders for it with a price lower by up to 10%. If such behavior is not required, you need to explicitly apply change operators to those properties that should trigger constraints upon change."}),"\n",(0,n.jsx)(o.h2,{id:"example-5",children:"Example 5"}),"\n",(0,n.jsx)(o.h3,{id:"task-4",children:"Task"}),"\n",(0,n.jsxs)(o.p,{children:["Similar to ",(0,n.jsx)(o.a,{href:"#example-4",children:(0,n.jsx)(o.strong,{children:"Example 4"})}),". Here are added the concept of a customer and the possibility to select books that will be available to the customer."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"CLASS Customer 'Customer';\r\nname 'Name' = DATA ISTRING[100] (Customer);\r\n\r\nin 'On' = DATA BOOLEAN (Customer, Book);\r\n\r\ncustomer 'Customer' = DATA Customer (OrderDetail);\n"})}),"\n",(0,n.jsx)(o.p,{children:"We need to prohibit the entry of books that are unavailable to the buyer for the order line."}),"\n",(0,n.jsx)(o.h3,{id:"solution-4",children:"Solution"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"CONSTRAINT book(OrderDetail d) AND NOT in(customer(d), book(d))\r\n    CHECKED BY book[OrderDetail]\r\n    MESSAGE 'A book is selected in the order line that is not allowed for the customer';\n"})}),"\n",(0,n.jsxs)(o.p,{children:["It is important to check that the ",(0,n.jsx)(o.code,{children:"book"})," property for the order line is set because otherwise, the constraint will be applied to all order lines with the yet unselected book. The ",(0,n.jsx)(o.code,{children:"CHECKED BY"})," block adds the filter for the order line on the book selection form in order to avoid violating the defined constraint. This way, the user will only see books available to the buyer."]}),"\n",(0,n.jsx)(o.h2,{id:"example-6",children:"Example 6"}),"\n",(0,n.jsx)(o.h3,{id:"task-5",children:"Task"}),"\n",(0,n.jsxs)(o.p,{children:["Identical to ",(0,n.jsx)(o.a,{href:"#example-4",children:(0,n.jsx)(o.strong,{children:"Example 4"})}),"."]}),"\n",(0,n.jsx)(o.p,{children:"We need to prohibit the entry of books that are unavailable to the buyer for the order line, but only for posted orders."}),"\n",(0,n.jsx)(o.h3,{id:"solution-5",children:"Solution"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"// Option 1\r\nCONSTRAINT (CHANGED(book(OrderDetail d)) OR CHANGED(price(d)) OR CHANGED(posted(order(d)))) AND posted(order(d))\r\n           AND price(d) > price(book(d)) * 1.1\r\n           MESSAGE 'The price in the order cannot exceed the price of the book by 10%';\r\n\r\n// Option 2\r\nconstraintBook (OrderDetail d) =\r\n    (CHANGED(book(d)) OR CHANGED(price(d)) OR CHANGED(posted(order(d)))) AND posted(order(d)) AND price(d) > price(book(d)) * 1.1;\r\nWHEN (GROUP MAX constraintBook(OrderDetail d)) DO {\r\n    MESSAGE 'A book is selected in the order line that is not allowed for the customer by lines: \\n' +\r\n            (GROUP CONCAT ('Date ' + date(order(OrderDetail d)) + '; Number ' + number(order(d))) IF constraintBook(d), ',') NOWAIT;\r\n    CANCEL;\r\n}\n"})}),"\n",(0,n.jsx)(o.p,{children:"The second scenario is similar to the first one, but lets you modify the message shown to the user and the logic of constraint handling."})]})}function h(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>l,x:()=>s});var n=r(96540);const t={},i=n.createContext(t);function l(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);