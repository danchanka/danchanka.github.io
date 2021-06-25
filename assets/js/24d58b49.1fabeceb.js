(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[56954],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||l[d]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10543:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"META statement"},p=void 0,c={unversionedId:"META_statement",id:"version-v4/META_statement",isDocsHomePage:!1,title:"META statement",description:"The META statement creates a new metacode.",source:"@site/versioned_docs/version-v4/META_statement.md",sourceDirName:".",slug:"/META_statement",permalink:"/META_statement",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/META_statement.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"META statement"},sidebar:"version-v4/learn",previous:{title:"ACTION+ statement",permalink:"/ACTION+_statement"},next:{title:"@ statement",permalink:"/commat_statement"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],m={toc:s};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"META")," statement creates a new ",(0,o.kt)("a",{parentName:"p",href:"/Metaprogramming#metacode"},"metacode"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"META name(param1, ..., paramN)\n    statement1\n    ...\n    statementM\nEND\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"META")," statement declares a new metacode and adds it to the current ",(0,o.kt)("a",{parentName:"p",href:"/Modules"},"module"),". "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"META")," statement is an exception - it is not supposed to end with a semicolon.  "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name")),(0,o.kt)("p",{parentName:"li"},"  Metacode name. ",(0,o.kt)("a",{parentName:"p",href:"/IDs"},"Simple ID"),". Must be unique within the current namespace among metacodes with the same number of parameters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,o.kt)("p",{parentName:"li"},"  List of metacode parameters. Each parameter is defined by a simple ID. The list cannot be empty.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"statement1 ... statementM")),(0,o.kt)("p",{parentName:"li"},"  A sequence of  ",(0,o.kt)("a",{parentName:"p",href:"/Statements"},"statements")," represented by a block of code. Statements may contain ",(0,o.kt)("a",{parentName:"p",href:"/Metaprogramming#concat"},"special operators ",(0,o.kt)("inlineCode",{parentName:"a"},"##")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"###"))," used for concatenating ",(0,o.kt)("a",{parentName:"p",href:"/Tokens"},"lexemes"),". Statements cannot include another ",(0,o.kt)("inlineCode",{parentName:"p"},"META")," statement."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, type, caption)\n    object##Name 'Name'##caption = DATA BPSTRING[100](###object); // capitalizing the first letter\n    object##Type 'Type'##caption = DATA type (###object);\n    object##Value 'Cost'##caption = DATA INTEGER (###object);\nEND\n\nMETA objectProperties(object, type)\n    @objectProperties(object, type, '');\nEND\n")))}l.isMDXComponent=!0}}]);