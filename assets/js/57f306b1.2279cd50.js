"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[17339],{55389:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(74848),o=r(28453);const i={title:"How-to: Working with documents"},s=void 0,a={id:"How-to_Working_with_documents",title:"How-to: Working with documents",description:"Posting documents",source:"@site/docs/How-to_Working_with_documents.md",sourceDirName:".",slug:"/How-to_Working_with_documents",permalink:"/How-to_Working_with_documents",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Working_with_documents.md",tags:[],version:"current",lastUpdatedAt:1693907767e3,frontMatter:{title:"How-to: Working with documents"},sidebar:"learn",previous:{title:"How-to: Use Cases",permalink:"/How-to_Use_Cases"},next:{title:"How-to: Registers",permalink:"/How-to_Registers"}},d={},c=[{value:"Posting documents",id:"posting-documents",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Line selection",id:"line-selection",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Aggregated documents",id:"aggregated-documents",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"posting-documents",children:"Posting documents"}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"There is some logic for working with orders."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\r\nname 'Name' = DATA ISTRING[100] (Book) IN id;\r\n\r\nCLASS Order 'Order';\r\ndate 'Date' = DATA DATE (Order);\r\nnumber 'Number' = DATA STRING[10] (Order);\r\n\r\nCLASS OrderDetail 'Order line';\r\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\r\n\r\nbook 'Book' = DATA Book (OrderDetail) NONULL;\r\nnameBook 'Book' (OrderDetail d) = name(book(d));\r\n\r\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\r\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,t.jsx)(n.p,{children:"An order edit form has been created for orders."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM order 'Order'\r\n    OBJECTS o = Order PANEL\r\n    PROPERTIES(o) date, number\r\n\r\n    OBJECTS d = OrderDetail\r\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\r\n    FILTERS order(d) == o\r\n\r\n    EDIT Order OBJECT o\r\n;\r\n\r\n\r\nFORM orders 'Orders'\r\n    OBJECTS o = Order\r\n    PROPERTIES(o) READONLY date, number\r\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW orders;\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Besides, a ",(0,t.jsx)(n.code,{children:"posted"})," property has been added for orders. In the future, only orders with this property will take part in subsequent calculations (for example, calculation of the reserved quantity)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"posted 'Completed' = DATA BOOLEAN (Order);\r\nreserved 'Reserved' (Book b) = GROUP SUM quantity(OrderDetail d) IF posted(order(d)) BY book(d);\r\n\r\nEXTEND FORM order\r\n    PROPERTIES(o) posted\r\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We need to do so that instead of the ",(0,t.jsx)(n.code,{children:"\u041e\u041a"})," button on the order form, there is a ",(0,t.jsx)(n.code,{children:"Post"})," button that simultaneously sets the ",(0,t.jsx)(n.code,{children:"posted"})," property for the order, saves changes, and closes the form."]}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"post 'Complete' (Order o)  { posted(o) <- TRUE; }\r\n\r\nEXTEND FORM order\r\n    EVENTS ON OK post(o)\r\n;\r\nDESIGN order {\r\n    PROPERTY(formOk()) {\r\n        caption = 'Complete';\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Each time the renamed ",(0,t.jsx)(n.code,{children:"OK"})," button is pressed, the ",(0,t.jsx)(n.code,{children:"post"}),' action will be executed in a single transaction. With this scheme, if the user wants to "post" a document, they just need to go to the edit form, uncheck the ',(0,t.jsx)(n.code,{children:"Posted"})," box in the document header, then click ",(0,t.jsx)(n.code,{children:"Save"})," and ",(0,t.jsx)(n.code,{children:"Close"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"line-selection",children:"Line selection"}),"\n",(0,t.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["We have an order with an edit form similar to the ",(0,t.jsx)(n.a,{href:"#posting-documents",children:(0,t.jsx)(n.strong,{children:"Posting documents"})})," example."]}),"\n",(0,t.jsx)(n.p,{children:"We need to add a possibility to enter order lines by specifying the quantify in the table containing the list of products. Any changes in order lines and this table should be automatically synchronized with each other."}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"quantity 'Qty' (Order o, Book b) = GROUP SUM quantity(OrderDetail d) BY order(d), book(d);\r\nlastOrderDetail 'Last line' (Order o, Book b) = GROUP LAST OrderDetail d ORDER d BY order(d), book(d);\r\n\r\nchangeQuantity 'Change quantity' (Order o, Book b)  {\r\n    INPUT q = INTEGER DO { // requesting a number\r\n        IF lastOrderDetail(o, b) THEN { // checking if there is at least one row\r\n            IF q THEN // inputting a number\r\n                // writing the quantity in the last row with such a book\r\n                quantity(OrderDetail d) <- q IF d == lastOrderDetail(o, b) WHERE order(d) == o AND book(d) == b; \r\n            ELSE // the number is dropped - deleting the row\r\n                DELETE OrderDetail d WHERE order(d) == o AND book(d) == b;\r\n        } ELSE\r\n            IF q THEN\r\n                NEW d = OrderDetail { // creating a new row\r\n                    order(d) <- o;\r\n                    book(d) <- b;\r\n                    quantity(d) <- q;\r\n                }\r\n    }\r\n}\r\n\r\nEXTEND FORM order\r\n    OBJECTS b = Book\r\n    PROPERTIES name(b) READONLY, quantity(o, b) ON CHANGE changeQuantity(o, b)\r\n;\r\n\r\nDESIGN order {\r\n    OBJECTS {\r\n        NEW pane { // creating a container after the order header\r\n            fill = 1;\r\n            tabbed = TRUE;\r\n            MOVE BOX(d);\r\n            MOVE BOX(b) {\r\n                caption = 'Selection';\r\n            }\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The form will look like this:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:r(91811).A+"",width:"634",height:"298"}),(0,t.jsx)(n.img,{src:r(75965).A+"",width:"641",height:"305"})]}),"\n",(0,t.jsxs)(n.p,{children:["If the quantity changes on the ",(0,t.jsx)(n.code,{children:"Selection"})," tab, the system will automatically change order lines. If the order lines are changed, the quantity on the ",(0,t.jsx)(n.code,{children:"Selection"})," tab will change as well."]}),"\n",(0,t.jsx)(n.p,{children:"If an order has two or more lines with one book, the system will reset the quantity in the first lines and set the total in the last line. If you want the change to affect the last line only, you need to use the following action during saving:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"quantity(OrderDetail d) <- q WHERE d == lastOrderDetail(o, b);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["However, users may not understand this behavior, since after they enter a particular quantity on the ",(0,t.jsx)(n.code,{children:"Selection"})," tab, the total quantity for all lines will be shown in the same column and it will be different from the entered value."]}),"\n",(0,t.jsx)(n.h2,{id:"aggregated-documents",children:"Aggregated documents"}),"\n",(0,t.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have the order logic."}),"\n",(0,t.jsx)(n.p,{children:"We need to add some invoicing logic so that an order could automatically create a corresponding invoice."}),"\n",(0,t.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,t.jsxs)(n.p,{children:["In order to implement this logic, you need to create an abstract ",(0,t.jsx)(n.code,{children:"Invoice"})," ",(0,t.jsx)(n.a,{href:"/Classes",children:"class"})," with the necessary set of ",(0,t.jsx)(n.a,{href:"/Property_extension",children:"abstract properties"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT Invoice 'Invoice';\r\ndate 'Date' = ABSTRACT DATE (Invoice);\r\nnumber 'Number' = ABSTRACT STRING[10] (Invoice);\r\n\r\nCLASS ABSTRACT InvoiceDetail 'Invoice line';\r\ninvoice 'Invoice' = ABSTRACT Invoice (InvoiceDetail);\r\nbook 'Book' = ABSTRACT Book (InvoiceDetail);\r\n\r\nquantity 'Quantity' = ABSTRACT INTEGER (InvoiceDetail);\r\nprice 'Price' = ABSTRACT NUMERIC[14,2] (InvoiceDetail);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A form containing the list of objects of this abstract class is also created. It will contain the objects of all classes inherited from the ",(0,t.jsx)(n.code,{children:"Invoice"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM invoices 'Invoices'\r\n    OBJECTS i = Invoice\r\n    PROPERTIES(i) READONLY date, number\r\n    PROPERTIES(i) NEWSESSION edit, DELETE\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW invoices;\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"edit"})," property will call the current object's edit form defined for its class. If it's not defined for the current object's class, no action will be taken. The ",(0,t.jsx)(n.code,{children:"DELETE"})," property will delete the current object if it doesn't violate any constrains."]}),"\n",(0,t.jsxs)(n.p,{children:["An object of an abstract class cannot exist in the system. In order for the user to manually create an invoice, a separate class ",(0,t.jsx)(n.code,{children:"UserInvoice"})," is created . Also, it requires the creation of properties symmetrical to the abstract ones that are later added as their implementation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS UserInvoice 'Custom invoice' : Invoice;\r\ndate 'Date' = DATA DATE (UserInvoice);\r\nnumber 'Number' = DATA STRING[10] (UserInvoice);\r\n\r\nCLASS UserInvoiceDetail 'Custom invoice line' : InvoiceDetail;\r\nuserInvoice 'Custom invoice' = DATA UserInvoice (UserInvoiceDetail);\r\nbook 'Book' = DATA Book (UserInvoiceDetail);\r\nnameBook 'Book' (UserInvoiceDetail d) = name(book(d));\r\n\r\nquantity 'Quantity' = DATA INTEGER (UserInvoiceDetail);\r\nprice 'Price' = DATA NUMERIC[14,2] (UserInvoiceDetail);\r\n\r\n// implementing invoice properties\r\ndate(UserInvoice i) += date(i);\r\nnumber(UserInvoice i) += number(i);\r\n\r\n// implementing the properties of the invoice lines\r\ninvoice (UserInvoiceDetail d) += userInvoice(d);\r\nbook (UserInvoiceDetail d) += book(d);\r\n\r\nquantity (UserInvoiceDetail d) += quantity(d);\r\nprice (UserInvoiceDetail d) += price(d);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Let's create a form for editing a user-generated invoice. Let's add a button for adding a user-generated invoice to the form with a list of abstract invoices."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM userInvoice 'Invoice (custom)'\r\n    OBJECTS i = UserInvoice PANEL\r\n    PROPERTIES(i) date, number\r\n\r\n    OBJECTS d = UserInvoiceDetail\r\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\r\n    FILTERS userInvoice(d) == i\r\n\r\n    EDIT UserInvoice OBJECT i\r\n;\r\n\r\nEXTEND FORM invoices\r\n    PROPERTIES(i) NEWSESSION NEW[UserInvoice]\r\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For orders, let's create a ",(0,t.jsx)(n.code,{children:"createInvoice"})," option that will be used for generating an invoice. We will now need to create a ",(0,t.jsx)(n.code,{children:"OrderInvoice"})," class that will be inherited from ",(0,t.jsx)(n.code,{children:"Invoice"}),". An object of this class will be automatically created and deleted by the system for every order with the ",(0,t.jsx)(n.code,{children:"createInvoice"})," option. Therefore, this invoice is an ",(0,t.jsx)(n.a,{href:"/Aggregations",children:"aggregated object"})," for the corresponding order. Aggregation for the invoice line relative to the order line is created identically."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"createInvoice 'Create invoice' = DATA BOOLEAN (Order);\r\nEXTEND FORM order PROPERTIES(o) createInvoice;\r\n\r\n// aggregated invoice\r\nCLASS OrderInvoice 'Invoice based on order' : Invoice;\r\norderInvoice = AGGR OrderInvoice WHERE createInvoice(Order order) MATERIALIZED INDEXED;\r\ndate(OrderInvoice i) += date(order(i));\r\nnumber(OrderInvoice i) += number(order(i));\r\n\r\n// aggregated invoice lines\r\ncreateInvoiceDetail 'Create invoice line' (OrderDetail d) = createInvoice(order(d));\r\n\r\nCLASS OrderInvoiceDetail 'Invoice line based on order' : InvoiceDetail;\r\norderInvoiceDetail = AGGR OrderInvoiceDetail WHERE createInvoiceDetail(OrderDetail orderDetail) MATERIALIZED INDEXED;\r\n\r\ninvoice (OrderInvoiceDetail d) += orderInvoice(order(orderDetail(d)));\r\nbook (OrderInvoiceDetail d) += book(orderDetail(d));\r\n\r\nquantity (OrderInvoiceDetail d) += quantity(orderDetail(d));\r\nprice (OrderInvoiceDetail d) += price(orderDetail(d));\n"})}),"\n",(0,t.jsx)(n.p,{children:"We specify that an attempt to edit such an aggregated invoice will have to open the edit form for the associated order."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"edit(OrderInvoice i) + {  edit(order(i)); }\n"})}),"\n",(0,t.jsx)(n.p,{children:"When you try to delete an invoice created for an order, you will see an error message."}),"\n",(0,t.jsx)(n.p,{children:"The fundamental difference between this aggregation approach and one based on generating an invoice against an order is that the system automatically ensures synchronization between orders and invoices. When creating order-based invoices, the user has to manually modify them if corresponding orders are changed. Otherwise, it will require a separate event handling mechanism that will be responsible for it."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},91811:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/How-to_Working_with_documents_line-6fa52edb76262e3073bb441f407952dd.png"},75965:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/How-to_Working_with_documents_select-700a0f70aea96127095f971236f1e8c0.png"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(96540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);