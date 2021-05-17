(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[57240],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84364:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"FORMULA operator"},s={unversionedId:"FORMULA_operator",id:"FORMULA_operator",isDocsHomePage:!1,title:"FORMULA operator",description:"The FORMULA operator creates a property that implements a custom formula.",source:"@site/docs/FORMULA_operator.md",sourceDirName:".",slug:"/FORMULA_operator",permalink:"/next/FORMULA_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/FORMULA_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"FORMULA operator"},sidebar:"learn",previous:{title:"EXCLUSIVE operator",permalink:"/next/EXCLUSIVE_operator"},next:{title:"GROUP operator",permalink:"/next/GROUP_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"FORMULA")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that implements a ",(0,o.kt)("a",{parentName:"p",href:"/next/Custom_formula_FORMULA_"},"custom formula"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FORMULA [NULL] [className] [syntaxType1] text1, ..., [syntaxTypeN] textN\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"FORMULA")," operator creates a property that executes an arbitrary formula in SQL. It is possible to specify different formulas for different SQL dialects so that these properties are portable between different DBMSs.\xa0"),(0,o.kt)("p",null,"This property operator cannot be used inside ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expressions"),"."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NULL")),(0,o.kt)("p",null,"Keyword specifying that the property being created may return ",(0,o.kt)("strong",{parentName:"p"},"NULL")," if all parameter values are non-",(0,o.kt)("strong",{parentName:"p"},"NULL"),". If not specified, then the property must be defined so that for non-",(0,o.kt)("strong",{parentName:"p"},"NULL")," parameters it will always return a non-",(0,o.kt)("strong",{parentName:"p"},"NULL")," value (failure to fulfill this condition may lead to unpredictable results)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"className")),(0,o.kt)("p",null,"The name of the ",(0,o.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"builtin class"),"\xa0of the value returned by the property. If not specified, the resulting class is considered to be the ",(0,o.kt)("a",{parentName:"p",href:"/next/Built-in_classes#commonparentclass"},"common ancestor"),"\xa0of all property operands."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"syntaxType1, ..., syntaxTypeN")),(0,o.kt)("p",null,"Keywords defining SQL dialect types. The following types are currently supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PG")," - PostgreSQL syntax"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MS")," - MS SQL Server syntax")),(0,o.kt)("p",null,"If the dialect type is not specified explicitly, then the corresponding formula text is set as the default text. Each of the types (or the lack of a type) must appear in the operator no more than once."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"text1, ..., textN")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/IDs#strliteral-broken"},"String literals"),", each of which contains a formula in SQL syntax. The notation ",(0,o.kt)("strong",{parentName:"p"},"$1"),", ",(0,o.kt)("strong",{parentName:"p"},"$2")," etc. is used to pass property parameters to the formula, where the number denotes the property parameter number. Parameter numbers start from 1. The number of parameters in the created property will be equal to the maximum parameter number specified in the description of the formula."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"round(number, digits) = FORMULA 'round(CAST(($1) as numeric),$2)';  // a property with two parameters: a rounded number and the number of decimal places\ntoString15(str) = FORMULA BPSTRING[15] 'CAST($1 AS character(15))';   // a property that converts the value passed as an argument to a 15-character string.\njumpWorkdays = FORMULA NULL DATE PG 'jumpWorkdays($1, $2, $3)', MS 'dbo.jumpWorkdays($1, $2, $3)'; // a property with two different implementations for different SQL dialects\n")))}u.isMDXComponent=!0}}]);