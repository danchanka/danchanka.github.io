(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[88115],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31090:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Module header"},l={unversionedId:"Module_header",id:"Module_header",isDocsHomePage:!1,title:"Module header",description:"Each module\xa0begins with a header.",source:"@site/docs/Module_header.md",sourceDirName:".",slug:"/Module_header",permalink:"/next/Module_header",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Module_header.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Module header"},sidebar:"learn",previous:{title:"Instructions",permalink:"/next/Instructions"},next:{title:"Instruction =",permalink:"/next/Instruction_="}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[{value:"<strong>Examples</strong>",id:"examples",children:[]}]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"/next/Modules"},"module"),"\xa0begins with a ",(0,o.kt)("em",{parentName:"p"},"header.")),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MODULE name;\n[REQUIRE moduleName1, ..., moduleNameN;]\n[PRIORITY namespaceName1, ..., namespaceNameM;]\n[NAMESPACE namespaceName;]\n")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The module header can consist of four special instructions, in the following order:"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"MODULE"),"\xa0 instruction defines the module name. It is required. Each module within one ",(0,o.kt)("a",{parentName:"p",href:"/next/Projects"},"project")," must have a unique name."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"REQUIRE")," instruction defines the list of modules on which the current module ",(0,o.kt)("a",{parentName:"p",href:"/next/Modules#depends"},"depends"),". If the ",(0,o.kt)("strong",{parentName:"p"},"REQUIRE")," instruction is absent, that is equivalent to depending only on the\xa0",(0,o.kt)("strong",{parentName:"p"},"System")," module."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"PRIORITY")," instruction defines the list of additional\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Naming#namespace"},"namespaces")," that will have priority\xa0in ",(0,o.kt)("a",{parentName:"p",href:"/next/Search"},"finding")," ",(0,o.kt)("a",{parentName:"p",href:"/next/Element_identification"},"system elements"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"NAMESPACE")," instruction defines the module's namespace. \xa0"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"name")),(0,o.kt)("p",null,"The name of the module. ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#id-broken"},"Simple ID"),". Module names cannot contain an underscore."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"moduleName1, ..., moduleNameN")),(0,o.kt)("p",null,"A list of the names of modules that the current module depends on. Each name is a simple ID.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"namespaceName1, ..., namespaceNameM")),(0,o.kt)("p",null,"A list of namespace names. Each name is a simple ID.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"namespaceName")),(0,o.kt)("p",null,"The name of the module namespace. A simple ID that cannot contain an underscore. If the ",(0,o.kt)("strong",{parentName:"p"},"NAMESPACE")," instruction is not used in the header, the name of the current module's namespace will be equal to the name of the module.\xa0**\xa0**"),(0,o.kt)("h3",{id:"examples"},(0,o.kt)("strong",{parentName:"h3"},"Examples")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE EmployeeExample;     // Defining the module name\n\nREQUIRE System, Utils;      // Listing the modules that the Employee module depends on\nNAMESPACE Employee;         // Setting the namespace\n\nCLASS Employee 'Employee';  // Creating a class\nCLASS Position 'Position'; // Creating another class\n\nemployeePosition(employee) = DATA Position (Employee); // Creating property\n")))}m.isMDXComponent=!0}}]);