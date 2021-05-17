(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[87955],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42950:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Instruction=>"},p={unversionedId:"Instruction=_",id:"Instruction=_",isDocsHomePage:!1,title:"Instruction=>",description:"The => instruction\xa0creates a\xa0consequence.",source:"@site/docs/Instruction=_.md",sourceDirName:".",slug:"/Instruction=_",permalink:"/next/Instruction=_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Instruction=_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Instruction=>"},sidebar:"learn",previous:{title:"CONSTRAINT instruction",permalink:"/next/CONSTRAINT_instruction"},next:{title:"CLASS instruction",permalink:"/next/CLASS_instruction"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"=>")," instruction\xa0creates a\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Simple_constraints"},"consequence"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"leftPropertyId(param1, ..., paramN) => eventClause rightExpr [RESOLVE resolveType];\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"=>\xa0")," instruction creates a consequence.\xa0This operator **\xa0** can declare its own local parameters when specifying the property of the consequence premise. These parameters can then be used in the expression of the consequence."),(0,o.kt)("p",null,"When creating a consequence a ",(0,o.kt)("a",{parentName:"p",href:"/next/Constraints"},"constraint")," will be created, which is pretty similar to the following instruction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CONSTRAINT eventClause leftPropertyId(param1, ..., paramN) AND NOT rightExpr MESSAGE 'Consequence violated';\n")),(0,o.kt)("p",null,"but it allows you to automatically resolve situations where this constraint is violated. So using type\xa0",(0,o.kt)("strong",{parentName:"p"},"RESOLVE LEFT"),"\xa0is similar to creating ",(0,o.kt)("a",{parentName:"p",href:"/next/Simple_event"},"a simple event"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WHEN eventClause SET(leftPropertyId(param1, ..., paramN)) DO\xa0\n    SETACTION(rightExpr);\n")),(0,o.kt)("p",null,"\xa0",(0,o.kt)("strong",{parentName:"p"},"RESOLVE RIGHT"),", similarly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WHEN eventClause DROPPED(leftPropertyId(param1, ..., paramN)) DO\n    DROPACTION(rightExpr);\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"leftPropertyId")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/IDs#propertyid-broken"},"ID of the property")," specifying the consequence premise."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"param1, ..., paramN")),(0,o.kt)("p",null,"List of ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#paramid-broken"},"parameters")," of the property that defines the premise of the consequence. The number of these parameters must be equal to the number of parameters of the property."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"rightExpr")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"Expression")," whose value determines the consequence."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"resolveType")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/Simple_event"},"Auto resolution")," type in case of violation of the consequence. Specified by one of the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LEFT"),": if the premise (the left part of the instruction) is changed to non-",(0,o.kt)("strong",{parentName:"li"},"NULL"),", then the consequence changes to non",(0,o.kt)("strong",{parentName:"li"},"NULL"),".**\xa0**"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RIGHT"),":\xa0if the consequence (the right part of the instruction) changes to ",(0,o.kt)("strong",{parentName:"li"},"NULL"),", then the premise changes to ",(0,o.kt)("strong",{parentName:"li"},"NULL"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LEFT RIGHT"),": similar to ",(0,o.kt)("strong",{parentName:"li"},"LEFT")," and ",(0,o.kt)("strong",{parentName:"li"},"RIGHT")," together.\xa0")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"eventClause")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/Event_description_block"},"Event description block"),". Describes an\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Events"},"event")," upon the occurrence of which the created consequence will be checked and automatic resolution operations will be performed."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"is(Sku s) = s IS Sku;\n// the product must have a barcode and name specified\nis(Sku s) => barcode(s);\nis(Sku s) => name(s);\n\n\nCLASS Invoice;\nCLASS InvoiceLine;\ninvoice = DATA Invoice (InvoiceLine);\nis(InvoiceLine l) = l IS InvoiceLine;\n// for a document line, a document must be specified, and when deleting a document, the lines of this document should be deleted\nis(InvoiceLine l) => invoice(l) RESOLVE RIGHT;\n// is equivalent to declaring document = DATA Invoice (InvoiceLine) NONULL DELETE;\n\n// aggregation for f(a, b) create an object of class x, whose property a(x) equals a, and property b(x) equals b\nCLASS A;\nCLASS B;\nf = DATA BOOLEAN (A, B);\n\nCLASS X;\na = DATA A(X);\nb = DATA B(X);\nis (X x) = x IS X;\n\nf(a,b) => [ GROUP AGGR X x WHERE x IS X BY a(x), b(x)](a,b) RESOLVE LEFT;\nis(X x) => f(a(x), b(x)) RESOLVE RIGHT;\n")))}l.isMDXComponent=!0}}]);