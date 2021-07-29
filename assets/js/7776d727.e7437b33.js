(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[86751],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77354:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"EXTEND FORM statement"},p=void 0,l={unversionedId:"EXTEND_FORM_statement",id:"version-v4/EXTEND_FORM_statement",isDocsHomePage:!1,title:"EXTEND FORM statement",description:"The EXTEND FORM statement extends an existing form.",source:"@site/versioned_docs/version-v4/EXTEND_FORM_statement.md",sourceDirName:".",slug:"/EXTEND_FORM_statement",permalink:"/EXTEND_FORM_statement",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/EXTEND_FORM_statement.md",version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"EXTEND FORM statement"},sidebar:"version-v4/learn",previous:{title:"EXTEND CLASS statement",permalink:"/EXTEND_CLASS_statement"},next:{title:"+= statement",permalink:"/+=_statement"}},m=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],c={toc:m};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTEND FORM")," statement ",(0,a.kt)("a",{parentName:"p",href:"/Form_extension"},"extends")," an existing ",(0,a.kt)("a",{parentName:"p",href:"/Forms"},"form"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EXTEND FORM formName \n    formBlock1\n    ...\n    formBlockN\n;\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTEND FORM")," statement allows you to extend an existing form with additional ",(0,a.kt)("a",{parentName:"p",href:"/FORM_statement#blocks"},"form blocks"),"."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"formName")),(0,a.kt)("p",{parentName:"li"},"  The name of the form being extended. ",(0,a.kt)("a",{parentName:"p",href:"/IDs#cid"},"Composite ID"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"formBlock1 ... formBlockN")),(0,a.kt)("p",{parentName:"li"},"  Form blocks."))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ItemGroup;\nname = DATA ISTRING[100] (ItemGroup);\n\nitemGroup = DATA ItemGroup (Item);\n\nEXTEND FORM items\n    PROPERTIES(i) NEWSESSION DELETE // adding a delete button to the form\n\n    OBJECTS g = ItemGroup BEFORE i // adding a product group object to the form before the product\n    PROPERTIES(g) READONLY name\n    // if the object was added after the object with products, then filtering would go by the group of products, \n    // and not by products\n    FILTERS itemGroup(i) == g \n;\n")))}s.isMDXComponent=!0}}]);