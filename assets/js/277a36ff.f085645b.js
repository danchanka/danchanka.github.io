(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[31376],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80119:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"REQUEST operator"},p=void 0,l={unversionedId:"REQUEST_operator",id:"version-v4/REQUEST_operator",isDocsHomePage:!1,title:"REQUEST operator",description:"The REQUEST operator creates an action that requests a value.",source:"@site/versioned_docs/version-v4/REQUEST_operator.md",sourceDirName:".",slug:"/REQUEST_operator",permalink:"/REQUEST_operator",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/REQUEST_operator.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"REQUEST operator"},sidebar:"version-v4/learn",previous:{title:"READ operator",permalink:"/READ_operator"},next:{title:"RETURN operator",permalink:"/RETURN_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"REQUEST")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"action")," that ",(0,o.kt)("a",{parentName:"p",href:"/Value_request_REQUEST"},"requests a value"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REQUEST requestAction \nDO doAction [ELSE elseAction]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"REQUEST")," operator creates an action that allows the separation of a request for a value from its handling."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"requestAction")),(0,o.kt)("p",{parentName:"li"},"  A ",(0,o.kt)("a",{parentName:"p",href:"/Action_operators#contextdependent"},"context-dependent action operator")," that requests a value.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"doAction")),(0,o.kt)("p",{parentName:"li"},"  A context-dependent action operator that is executed if the input was completed successfully.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"elseAction")),(0,o.kt)("p",{parentName:"li"},"  A context-dependent action operator that is executed if the input was ",(0,o.kt)("a",{parentName:"p",href:"/Value_input#result"},"cancelled"),"."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"requestCustomer (Order o)  {\n    LOCAL resultValue = STRING[100] ();\n    REQUEST {\n        ASK 'Choose from list?' DO\n            DIALOG customers OBJECTS c = resultValue() CHANGE;\n        ELSE\n            INPUT = resultValue() CHANGE;\n    } DO\n        customer(o) <- resultValue();\n}\n\nFORM request\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE requestCustomer(o) // for example, group adjustment will be performed\n;\n")))}s.isMDXComponent=!0}}]);