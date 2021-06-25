(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[64273],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27910:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"Examples",sidebar_label:"Overview"},l=void 0,s={unversionedId:"Examples",id:"Examples",isDocsHomePage:!1,title:"Examples",description:"Examples are intended to demonstrate the capabilities of the lsFusion platform.",source:"@site/docs/Examples.md",sourceDirName:".",slug:"/Examples",permalink:"/next/Examples",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Examples.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"Examples",sidebar_label:"Overview"},sidebar:"learn",previous:{title:"IDE",permalink:"/next/IDE"},next:{title:"Score table",permalink:"/next/Score_table"}},c=[{value:"Score table",id:"score-table",children:[]},{value:"Materials management",id:"materials-management",children:[]},{value:"Typical tasks",id:"typical-tasks",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Examples are intended to demonstrate the capabilities of the ",(0,o.kt)("strong",{parentName:"p"},"lsFusion")," platform."),(0,o.kt)("h3",{id:"score-table"},"Score table"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/next/Score_table"},"Score table")," example describes how to create a simple application that allows you to calculate the score table of a hockey tournament. It contains exactly one form, in which the user can enter game scores, based on which the score table is automatically built."),(0,o.kt)("p",null,'Using this example you can get an idea of how to quickly develop "Excel-style" applications in which form data are editable, and any changes to them will cause all dependent data on the form to be updated incrementally.'),(0,o.kt)("h3",{id:"materials-management"},"Materials management"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/next/Materials_management"},"Materials management")," example describes an example of creating a simple stock management business application. In it, the user can manage receipt and shipment operations, and also obtain item balances."),(0,o.kt)("p",null,'This example shows a way to create an application for processing documents that have headers and lines. All forms are created in "Dialog style." In this approach, for each class in the system, a form with their list is created, in which only buttons for creating, editing and deleting objects are available for editing. Clicking the corresponding button opens a separate dialog form, with which the user can create a new object or edit an existing one.'),(0,o.kt)("h3",{id:"typical-tasks"},"Typical tasks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/How-to"},"How-to")," contains examples of typical tasks, categorized."))}u.isMDXComponent=!0}}]);