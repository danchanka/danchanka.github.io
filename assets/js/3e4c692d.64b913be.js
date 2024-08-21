"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[20293],{72458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var a=n(74848),s=n(28453);const r={title:"Calculated events"},i=void 0,c={id:"Calculated_events",title:"Calculated events",description:"Calculated events are events that change the value of a property when the value of some other property (condition) changes to a non-NULL value. Moreover, unlike simple events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been changed in the same session, this change is considered higher priority than the change in the calculated event.",source:"@site/docs/Calculated_events.md",sourceDirName:".",slug:"/Calculated_events",permalink:"/Calculated_events",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Calculated_events.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Calculated events"},sidebar:"learn",previous:{title:"Simple event",permalink:"/Simple_event"},next:{title:"Constraints",permalink:"/Constraints"}},l={},o=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Calculated"})," events are events that change the value of a property when the value of some other property (",(0,a.jsx)(t.em,{children:"condition"}),") changes to a non-",(0,a.jsx)(t.code,{children:"NULL"})," value. Moreover, unlike ",(0,a.jsx)(t.a,{href:"/Simple_event",children:"simple"})," events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been ",(0,a.jsx)(t.a,{href:"/Property_change_CHANGE",children:"changed"})," in the same session, this change is considered higher priority than the change in the calculated event."]}),"\n",(0,a.jsx)(t.p,{children:"For each property, there can only be one calculated event that changes this property."}),"\n",(0,a.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,a.jsxs)(t.p,{children:["To define calculated events, use the ",(0,a.jsxs)(t.a,{href:"/lt-_WHEN_statement",children:[(0,a.jsx)(t.code,{children:"<- WHEN"})," statement"]}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"// when adding a client, by default, give him the specified discount\r\ndefaultDiscount = DATA NUMERIC[6,2] ();\r\ndiscount = DATA NUMERIC[6,2] (Customer);\r\ndiscount(Customer c) <- defaultDiscount() WHEN SET(c IS Customer);\r\n\r\nquantity = DATA NUMERIC[10,2] (OrderDetail);\r\nprice = DATA NUMERIC[10,2] (OrderDetail);\r\nsum = DATA NUMERIC[10,2] (OrderDetail);\r\n\r\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);