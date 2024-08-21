"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[28444],{99461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(74848),r=t(28453);const a={title:"How-to: Form extension"},s=void 0,i={id:"How-to_Form_extension",title:"How-to: Form extension",description:"Let's assume there is a module that describes the Sku form that is used to edit SKU values:",source:"@site/versioned_docs/version-v4/How-to_Form_extension.md",sourceDirName:".",slug:"/How-to_Form_extension",permalink:"/v4/How-to_Form_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Form_extension.md",tags:[],version:"v4",lastUpdatedAt:162565152e4,frontMatter:{title:"How-to: Form extension"},sidebar:"learn",previous:{title:"How-to: Action extension",permalink:"/v4/How-to_Action_extension"},next:{title:"How-to: Integration",permalink:"/v4/How-to_Integration"}},d={},c=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Let's assume there is a module that describes the ",(0,o.jsx)(n.code,{children:"Sku"})," form that is used to edit SKU values:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"MODULE Sku;\r\n\r\nCLASS Sku; // declaring class Sku\r\n\r\nname 'Name' = DATA BPSTRING[100] (Sku); // creating a name property for it\r\n\r\nFORM sku 'Sku' // creating the Item form\r\n    OBJECTS s = Sku PANEL // adding a product object and making it display exactly one copy\r\n    PROPERTIES(s) name // adding the product name property to the form\r\n\r\n    EDIT Sku OBJECT s;\r\n;\r\n\r\nDESIGN sku {\r\n    // creating a new container in a standard container right after i.box\r\n    // this container will be the tab panel, where tabs with product properties can be added\r\n    NEW skuDetails AFTER BOX(s) { \r\n        type = TABBED;\r\n        fill = 1; // let it expand to the whole form\r\n    }\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We need to implement additional functionality for adding multiple barcodes to an SKU. This can be done by creating a new module that will introduce a new ",(0,o.jsx)(n.code,{children:"Barcode"})," class and extend the functionality of the Sku edit form by adding the possibility to enter barcodes:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"MODULE Barcode;\r\n\r\nREQUIRE Sku;\r\n\r\nCLASS Barcode; // declaring a barcode class\r\n\r\nid = DATA BPSTRING[13] (Barcode); // creating a property with a barcode number\r\nsku = DATA Sku (Barcode); // creating a barcode link to sku\r\n\r\nEXTEND FORM sku // creating the Item form\r\n    OBJECTS b = Barcode // adding the barcode object\r\n    PROPERTIES(b) id // adding the barcode number to the barcode table\r\n    PROPERTIES(b) NEW, DELETE // adding actions to create and delete barcodes\r\n    FILTERS sku(b) == s // making that only barcodes of this sku are displayed\r\n;\r\n\r\nDESIGN sku { // expanding the design of the Item form\r\n    skuDetails {\r\n        // making a container, which contains everything related to barcodes, by a tab in the previously\r\n        // created tab panel\r\n        MOVE BOX(b); \r\n    }\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that the ",(0,o.jsx)(n.code,{children:"Barcode"})," module assumes that there is a ",(0,o.jsx)(n.code,{children:"Sku"})," form with an ",(0,o.jsx)(n.code,{children:"s"})," object and a container called ",(0,o.jsx)(n.code,{children:"skuDetails"}),". If the form changes for some reason, the ",(0,o.jsx)(n.code,{children:"Barcode"})," module will become inoperable."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(96540);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);