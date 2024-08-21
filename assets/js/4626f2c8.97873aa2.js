"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[54804],{3393:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(74848),o=r(28453);const s={title:"New object (NEW)"},i=void 0,c={id:"New_object_NEW",title:"New object (NEW)",description:"The new object operator creates an action that creates objects of a specified custom class for object collections where the value of some property (condition) is not NULL. The condition can be omitted, in which case it is considered to be equal to TRUE.",source:"@site/docs/New_object_NEW.md",sourceDirName:".",slug:"/New_object_NEW",permalink:"/New_object_NEW",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/New_object_NEW.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"New object (NEW)"},sidebar:"learn",previous:{title:"Property change (CHANGE)",permalink:"/Property_change_CHANGE"},next:{title:"Class change (CHANGECLASS, DELETE)",permalink:"/Class_change_CHANGECLASS_DELETE"}},a={},d=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"new object"})," operator creates an ",(0,t.jsx)(n.a,{href:"/Actions",children:"action"})," that creates objects of a specified ",(0,t.jsx)(n.a,{href:"/User_classes",children:"custom class"})," for object collections where the value of some ",(0,t.jsx)(n.a,{href:"/Properties",children:"property"})," (",(0,t.jsx)(n.em,{children:"condition"}),") is not ",(0,t.jsx)(n.code,{children:"NULL"}),". The condition can be omitted, in which case it is considered to be equal to ",(0,t.jsx)(n.code,{children:"TRUE"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This operator also allows you to set a ",(0,t.jsx)(n.a,{href:"/Data_properties_DATA",children:"primary property"}),", to whose values the added objects will be written. If no condition is specified, by default this property is considered to be ",(0,t.jsx)(n.code,{children:"addedObject"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The custom class whose objects will be created by this operator must be concrete."}),"\n",(0,t.jsxs)(n.p,{children:["You can also create objects using the corresponding ",(0,t.jsx)(n.a,{href:"/Loop_FOR#addobject",children:"option"})," in the ",(0,t.jsx)(n.a,{href:"/Loop_FOR",children:"loop"})," operator."]}),"\n",(0,t.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(n.p,{children:["To declare an action that implements objects creation, use the ",(0,t.jsxs)(n.a,{href:"/NEW_operator",children:[(0,t.jsx)(n.code,{children:"NEW"})," operator"]}),". The ",(0,t.jsx)(n.code,{children:"NEW"})," option in the ",(0,t.jsxs)(n.a,{href:"/FOR_operator",children:[(0,t.jsx)(n.code,{children:"FOR"})," operator"]})," is also used to implement similar functionality."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"\r\nnewSku ()  {\r\n    LOCAL addedSkus = Sku (INTEGER);\r\n    NEW Sku WHERE iterate(i, 1, 3) TO addedSkus(i);\r\n    FOR Sku s = addedSkus(i) DO {\r\n        id(s) <- 425;\r\n        name(s) <- 'New Sku';\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"name = DATA STRING[100] (Store);\r\n\r\ntestFor  {\r\n    LOCAL sum = INTEGER ();\r\n    FOR iterate(i, 1, 100) DO {\r\n        sum() <- sum() (+) i;\r\n    }\r\n\r\n    FOR in(Sku s) DO {\r\n        MESSAGE 'Sku ' + id(s) + ' was selected';\r\n    }\r\n\r\n    FOR Store st IS Store DO { // iterating over all objects of the Store class\r\n        FOR in(st, Sku s) DO { // iterating over all Sku for which in is set\r\n            MESSAGE 'There is Sku ' + id(s) + ' in store ' + name(st);\r\n        }\r\n\r\n    }\r\n}\r\n\r\nnewSku ()  {\r\n    NEW s = Sku {\r\n        id(s) <- 425;\r\n        name(s) <- 'New Sku';\r\n    }\r\n}\r\n\r\ncopy (Sku old)  {\r\n    NEW new = Sku {\r\n        id(new) <- id(old);\r\n        name(new) <- name(old);\r\n    }\r\n}\r\n\r\ncreateDetails (Order o)  {\r\n    FOR in(Sku s) NEW d = OrderDetail DO {\r\n        order(d) <- o;\r\n        sku(d) <- s;\r\n    }\r\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(96540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);