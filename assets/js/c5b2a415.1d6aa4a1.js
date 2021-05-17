(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[43048],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48311:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"META instruction"},c={unversionedId:"META_instruction",id:"version-v4/META_instruction",isDocsHomePage:!1,title:"META instruction",description:"The META instruction creates a new metacode.",source:"@site/versioned_docs/version-v4/META_instruction.md",sourceDirName:".",slug:"/META_instruction",permalink:"/META_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/META_instruction.md",version:"v4",lastUpdatedAt:1619102841,formattedLastUpdatedAt:"4/22/2021",frontMatter:{title:"META instruction"},sidebar:"version-v4/learn",previous:{title:"ACTION+ instruction",permalink:"/ACTION+_instruction"},next:{title:"Instruction @",permalink:"/Instruction_"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"META")," instruction creates a new ",(0,i.kt)("a",{parentName:"p",href:"/Metaprogramming#metacode"},"metacode"),"."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"META name(param1, ..., paramN)\n    statement1\n    ...\n    statementM\nEND\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"META")," instruction declares a new metacode and adds it to the current ",(0,i.kt)("a",{parentName:"p",href:"/Modules"},"module"),". "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"META")," instruction is an exception - it is not supposed to end with a semicolon.  "),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("p",{parentName:"li"},"  Metacode name. ",(0,i.kt)("a",{parentName:"p",href:"/IDs"},"Simple ID"),". Must be unique within the current namespace among metacodes with the same number of parameters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,i.kt)("p",{parentName:"li"},"  List of metacode parameters. Each parameter is defined by a simple ID. The list cannot be empty.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"statement1 ... statementM")),(0,i.kt)("p",{parentName:"li"},"  A sequence of  ",(0,i.kt)("a",{parentName:"p",href:"/Instructions"},"instructions")," represented by a block of code. Instructions may contain ",(0,i.kt)("a",{parentName:"p",href:"/Metaprogramming#concat"},"special operations ",(0,i.kt)("inlineCode",{parentName:"a"},"##")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"###"))," used for concatenating ",(0,i.kt)("a",{parentName:"p",href:"/Tokens"},"lexemes"),". Instructions cannot include another ",(0,i.kt)("inlineCode",{parentName:"p"},"META")," instruction."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, type, caption)\n    object##Name 'Name'##caption = DATA BPSTRING[100](###object-broken); // capitalizing the first letter\n    object##Type 'Type'##caption = DATA type (###object-broken);\n    object##Value 'Cost'##caption = DATA INTEGER (###object-broken);\nEND\n\nMETA objectProperties(object, type)\n    @objectProperties(object, type, '');\nEND\n")))}l.isMDXComponent=!0}}]);