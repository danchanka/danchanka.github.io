(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[69050],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79865:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"Constraints",sidebar_label:"Overview"},s={unversionedId:"Constraints",id:"Constraints",isDocsHomePage:!1,title:"Constraints",description:"Constraints in the platform determine which values the dataproperties can have and which cannot. In general, a constraint is defined as a property which value should always be NULL.",source:"@site/docs/Constraints.md",sourceDirName:".",slug:"/Constraints",permalink:"/next/Constraints",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Constraints.md",version:"current",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",frontMatter:{title:"Constraints",sidebar_label:"Overview"},sidebar:"learn",previous:{title:"Calculated events",permalink:"/next/Calculated_events"},next:{title:"Simple constraints",permalink:"/next/Simple_constraints"}},l=[{value:"Show message",id:"message",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Constraints in the platform determine which values the ",(0,i.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA_"},"data"),(0,i.kt)("a",{parentName:"p",href:"/next/Properties"},"properties")," can have and which cannot. In general, a constraint is defined as a property which value should always be ",(0,i.kt)("strong",{parentName:"p"},"NULL"),"."),(0,i.kt)("p",null,"In fact, a constraint is a ",(0,i.kt)("a",{parentName:"p",href:"/next/Simple_event"},"simple event"),", where condition\xa0is the constrained property and handling is ",(0,i.kt)("a",{parentName:"p",href:"#message"},"showing")," all the non-",(0,i.kt)("strong",{parentName:"p"},"NULL")," values (in the ",(0,i.kt)("a",{parentName:"p",href:"/next/In_a_print_view_PRINT_#interactive"},"asynchronous message")," mode) and ",(0,i.kt)("a",{parentName:"p",href:"/next/Cancel_changes_CANCEL_"},"canceling"),"\xa0all the changes. As well as for a simple event, you need to specify a base\xa0",(0,i.kt)("a",{parentName:"p",href:"/next/Events"},"event"),", which determines when the defined constraint is checked.\xa0"),(0,i.kt)("p",null,"Compared to implementation via simple events, constraints have a set of additional advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'There is a global checking procedure upon a working database for constraints (similarly to "recalculation" technique in simple events which is not applicable here as long as the handler\xa0contains\xa0the cancel changes operator)'),(0,i.kt)("li",{parentName:"ul"},"Constraints are more understandable and readable since, unlike simple events, they emphasize the static/declarative nature of these rules, i.e. their independence from the moment in time."),(0,i.kt)("li",{parentName:"ul"},"You can use the created constraint when showing dialogs for changing properties used in this constraint. In this case, an additional filter will be set in the dialog so that, when the property value changes to the selected one, the constraint is not violated.")),(0,i.kt)("p",null,"Note that in some cases, instead of showing a message to the user and canceling the transaction, it is necessary, for example, to automatically resolve the violated constraint. In that case, it is recommended to use ",(0,i.kt)("a",{parentName:"p",href:"/next/Simple_constraints"},"simple constraints"),", or, if it is impossible, simple events."),(0,i.kt)("h3",{id:"message"},"Show message"),(0,i.kt)("p",null,"For any non-",(0,i.kt)("strong",{parentName:"p"},"NULL")," value\xa0",(0,i.kt)("a",{parentName:"p",href:"/next/In_a_print_view_PRINT_"},"output")," the platform uses an\xa0automatically generated\xa0",(0,i.kt)("a",{parentName:"p",href:"/next/Forms"},"form"),", consisting of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"one\xa0",(0,i.kt)("a",{parentName:"li",href:"/next/Form_structure#objects"},"group of objects")," with the objects corresponding to the parameters of the constrained property."),(0,i.kt)("li",{parentName:"ul"},"properties with the matching classes belonging to the ",(0,i.kt)("strong",{parentName:"li"},"System.recognize")," ",(0,i.kt)("a",{parentName:"li",href:"/next/Groups_of_properties_and_actions"},"property group"),"."),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"/next/Form_structure#filters"},"filter")," equal to the constrained property."),(0,i.kt)("li",{parentName:"ul"},"a global message defined by the developer when creating the constraint.")),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"Constraints are created using the\xa0",(0,i.kt)("a",{parentName:"p",href:"/next/CONSTRAINT_instruction"},(0,i.kt)("strong",{parentName:"a"},"CONSTRAINT")," instruction"),".\xa0"),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"// balance not less than 0\nCONSTRAINT balance(Sku s, Stock st) < 0\n    MESSAGE 'The balance cannot be negative for ' + (GROUP CONCAT 'Product: ' + name(Sku ss) + ' Warehouse: ' + name(Stock sst), '\\n' IF SET(balance(ss, sst) < 0));\n\nbarcode = DATA STRING[15] (Sku);\n// \"emulation\" security policy\nCONSTRAINT DROPCHANGED(barcode(Sku s)) AND name(currentUser()) != 'admin' MESSAGE 'Only the administrator is allowed to change the barcode for an already created product';\n\nsku = DATA Sku (OrderDetail);\nin = DATA BOOLEAN (Sku, Customer);\n\nCONSTRAINT sku(OrderDetail d) AND NOT in(sku(d), customer(order(d)))\n    CHECKED BY sku[OrderDetail] // a filter by available sku when selecting an item for an order line will be applied\n    MESSAGE 'In the order, a product unavailable to the user is selected for the selected customer';\n")))}p.isMDXComponent=!0}}]);