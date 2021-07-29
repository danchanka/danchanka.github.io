(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[46598],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=m(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44664:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"EXTEND FORM statement"},p=void 0,l={unversionedId:"EXTEND_FORM_statement",id:"EXTEND_FORM_statement",isDocsHomePage:!1,title:"EXTEND FORM statement",description:"The EXTEND FORM statement extends an existing form.",source:"@site/docs/EXTEND_FORM_statement.md",sourceDirName:".",slug:"/EXTEND_FORM_statement",permalink:"/next/EXTEND_FORM_statement",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/EXTEND_FORM_statement.md",version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"EXTEND FORM statement"},sidebar:"learn",previous:{title:"EXTEND CLASS statement",permalink:"/next/EXTEND_CLASS_statement"},next:{title:"+= statement",permalink:"/next/+=_statement"}},m=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],c={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTEND FORM")," statement ",(0,o.kt)("a",{parentName:"p",href:"/next/Form_extension"},"extends")," an existing ",(0,o.kt)("a",{parentName:"p",href:"/next/Forms"},"form"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EXTEND FORM formName \n    formBlock1\n    ...\n    formBlockN\n;\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTEND FORM")," statement allows you to extend an existing form with additional ",(0,o.kt)("a",{parentName:"p",href:"/next/FORM_statement#blocks"},"form blocks"),"."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"formName")),(0,o.kt)("p",{parentName:"li"},"  The name of the form being extended. ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#cid"},"Composite ID"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"formBlock1 ... formBlockN")),(0,o.kt)("p",{parentName:"li"},"  Form blocks."))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ItemGroup;\nname = DATA ISTRING[100] (ItemGroup);\n\nitemGroup = DATA ItemGroup (Item);\n\nEXTEND FORM items\n    PROPERTIES(i) NEWSESSION DELETE // adding a delete button to the form\n\n    OBJECTS g = ItemGroup BEFORE i // adding a product group object to the form before the product\n    PROPERTIES(g) READONLY name\n    // if the object was added after the object with products, then filtering would go by the group of products, \n    // and not by products\n    FILTERS itemGroup(i) == g \n;\n")))}s.isMDXComponent=!0}}]);