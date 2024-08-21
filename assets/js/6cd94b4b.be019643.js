"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[66815],{76222:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=n(74848),o=n(28453);const a={title:"ACTIVATE operator"},i=void 0,s={id:"ACTIVATE_operator",title:"ACTIVATE operator",description:"The ACTIVATE operator creates an action that activates a specified form, tab, property, or action on a form",source:"@site/versioned_docs/version-v4/ACTIVATE_operator.md",sourceDirName:".",slug:"/ACTIVATE_operator",permalink:"/v4/ACTIVATE_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/ACTIVATE_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"ACTIVATE operator"},sidebar:"learn",previous:{title:"ABSTRACT operator",permalink:"/v4/ABSTRACT_action_operator"},next:{title:"ACTIVE FORM operator",permalink:"/v4/ACTIVE_FORM_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"ACTIVATE"})," operator creates an ",(0,t.jsx)(r.a,{href:"/v4/Actions",children:"action"})," that ",(0,t.jsx)(r.a,{href:"/v4/Activation_ACTIVATE",children:"activates"})," a specified ",(0,t.jsx)(r.a,{href:"/v4/Forms",children:"form"}),", tab, property, or action on a form"]}),"\n",(0,t.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"ACTIVATE FORM formName\r\nACTIVATE TAB formName.componentSelector\r\nACTIVATE PROPERTY formPropertyId\n"})}),"\n",(0,t.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"ACTIVATE"})," operator creates an action that activates a form, a tab, a property or an action on a form."]}),"\n",(0,t.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"formName"})}),"\n",(0,t.jsxs)(r.p,{children:["Form name. ",(0,t.jsx)(r.a,{href:"/v4/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"componentSelector"})}),"\n",(0,t.jsxs)(r.p,{children:["Design component ",(0,t.jsx)(r.a,{href:"/v4/DESIGN_statement#selector",children:"selector"}),". The component must be a tab in the tab panel."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"formPropertyId"})}),"\n",(0,t.jsxs)(r.p,{children:["The global ",(0,t.jsx)(r.a,{href:"/v4/IDs#formpropertyid",children:"ID of a property or action on a form"})," which should get focus."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"//Form with two tabs\r\nFORM myForm 'My form'\r\n    OBJECTS u = CustomUser\r\n    PROPERTIES(u) name\r\n\r\n    OBJECTS c = Chat\r\n    PROPERTIES(c) name\r\n;\r\n\r\nDESIGN myForm {\r\n    NEW tabbedPane FIRST {\r\n        type = TABBED;\r\n        NEW contacts {\r\n            caption = 'Contacts';\r\n            MOVE BOX(u);\r\n        }\r\n        NEW recent {\r\n            caption = 'Recent';\r\n            MOVE BOX(c);\r\n        }\r\n    }\r\n}\r\n\r\ntestAction()  {\r\n    ACTIVATE FORM myForm;\r\n    ACTIVATE TAB myForm.recent;\r\n}\r\n\r\nCLASS ReceiptDetail;\r\nbarcode = DATA STRING[30] (ReceiptDetail);\r\nquantity = DATA STRING[30] (ReceiptDetail);\r\n\r\nFORM POS\r\n    OBJECTS d = ReceiptDetail\r\n    PROPERTIES(d) barcode, quantityGrid = quantity\r\n;\r\n\r\ncreateReceiptDetail 'Add sales line'(STRING[30] barcode)  {\r\n    NEW d = ReceiptDetail {\r\n        barcode(d) <- barcode;\r\n        ACTIVATE PROPERTY POS.quantityGrid;\r\n    }\r\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>s});var t=n(96540);const o={},a=t.createContext(o);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);