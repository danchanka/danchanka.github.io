"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21315],{6672:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(74848),a=t(28453);const r={title:"Constraints"},i=void 0,o={id:"Constraints",title:"Constraints",description:"Constraints in the platform determine which values the data properties can have and which cannot. In general, a constraint is defined as a property which value should always be NULL.",source:"@site/versioned_docs/version-v4/Constraints.md",sourceDirName:".",slug:"/Constraints",permalink:"/v4/Constraints",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Constraints.md",tags:[],version:"v4",lastUpdatedAt:1640850738e3,frontMatter:{title:"Constraints"},sidebar:"learn",previous:{title:"Calculated events",permalink:"/v4/Calculated_events"},next:{title:"Simple constraints",permalink:"/v4/Simple_constraints"}},l={},c=[{value:"Show message",id:"message",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Constraints in the platform determine which values the ",(0,s.jsx)(n.a,{href:"/v4/Data_properties_DATA",children:"data properties"})," can have and which cannot. In general, a constraint is defined as a property which value should always be ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In fact, a constraint is a ",(0,s.jsx)(n.a,{href:"/v4/Simple_event",children:"simple event"}),", where condition is the constrained property and handling is ",(0,s.jsx)(n.a,{href:"#message",children:"showing"})," all the non-",(0,s.jsx)(n.code,{children:"NULL"})," values (in the ",(0,s.jsx)(n.a,{href:"/v4/In_a_print_view_PRINT#interactive",children:"asynchronous message"})," mode) and ",(0,s.jsx)(n.a,{href:"/v4/Cancel_changes_CANCEL",children:"canceling"})," all the changes. As well as for a simple event, you need to specify a base ",(0,s.jsx)(n.a,{href:"/v4/Events",children:"event"}),", which determines when the defined constraint is checked."]}),"\n",(0,s.jsx)(n.p,{children:"Compared to implementation via simple events, constraints have a set of additional advantages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'There is a global checking procedure upon a working database for constraints (similarly to "recalculation" technique in simple events which is not applicable here as long as the handler contains the cancel changes operator)'}),"\n",(0,s.jsx)(n.li,{children:"Constraints are more understandable and readable since, unlike simple events, they emphasize the static/declarative nature of these rules, i.e. their independence from the moment in time."}),"\n",(0,s.jsx)(n.li,{children:"You can use the created constraint when showing dialogs for changing properties used in this constraint. In this case, an additional filter will be set in the dialog so that, when the property value changes to the selected one, the constraint is not violated."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note that in some cases, instead of showing a message to the user and canceling the transaction, it is necessary, for example, to automatically resolve the violated constraint. In that case, it is recommended to use ",(0,s.jsx)(n.a,{href:"/v4/Simple_constraints",children:"simple constraints"}),", or, if it is impossible, simple events."]}),"\n",(0,s.jsx)(n.h3,{id:"message",children:"Show message"}),"\n",(0,s.jsxs)(n.p,{children:["For any non-",(0,s.jsx)(n.code,{children:"NULL"})," value ",(0,s.jsx)(n.a,{href:"/v4/In_a_print_view_PRINT",children:"output"})," the platform uses an automatically generated ",(0,s.jsx)(n.a,{href:"/v4/Forms",children:"form"}),", consisting of:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["one ",(0,s.jsx)(n.a,{href:"/v4/Form_structure#objects",children:"group of objects"})," with the objects corresponding to the parameters of the constrained property."]}),"\n",(0,s.jsxs)(n.li,{children:["properties with the matching classes belonging to the ",(0,s.jsx)(n.code,{children:"System.recognize"})," ",(0,s.jsx)(n.a,{href:"/v4/Groups_of_properties_and_actions",children:"property group"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.a,{href:"/v4/Form_structure#filters",children:"filter"})," equal to the constrained property."]}),"\n",(0,s.jsx)(n.li,{children:"a global message defined by the developer when creating the constraint."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(n.p,{children:["Constraints are created using the ",(0,s.jsxs)(n.a,{href:"/v4/CONSTRAINT_statement",children:[(0,s.jsx)(n.code,{children:"CONSTRAINT"})," statement"]}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"// balance not less than 0\r\nCONSTRAINT balance(Sku s, Stock st) < 0\r\n    MESSAGE 'The balance cannot be negative for ' + (GROUP CONCAT 'Product: ' + name(Sku ss) + ' Warehouse: ' + name(Stock sst), '\\n' IF SET(balance(ss, sst) < 0));\r\n\r\nbarcode = DATA STRING[15] (Sku);\r\n// \"emulation\" security policy\r\nCONSTRAINT DROPCHANGED(barcode(Sku s)) AND name(currentUser()) != 'admin' MESSAGE 'Only the administrator is allowed to change the barcode for an already created product';\r\n\r\nsku = DATA Sku (OrderDetail);\r\nin = DATA BOOLEAN (Sku, Customer);\r\n\r\nCONSTRAINT sku(OrderDetail d) AND NOT in(sku(d), customer(order(d)))\r\n    // a filter by available sku when selecting an item for an order line will be applied\r\n    CHECKED BY sku[OrderDetail] \r\n    MESSAGE 'In the order, a product unavailable to the user is selected for the selected customer';\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);