(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[42097],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91248:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"GROUP instruction"},p={unversionedId:"GROUP_instruction",id:"GROUP_instruction",isDocsHomePage:!1,title:"GROUP instruction",description:"The\xa0GROUP\xa0instruction creates a new property group.",source:"@site/docs/GROUP_instruction.md",sourceDirName:".",slug:"/GROUP_instruction",permalink:"/next/GROUP_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/GROUP_instruction.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"GROUP instruction"},sidebar:"learn",previous:{title:"Action options",permalink:"/next/Action_options"},next:{title:"ON instruction",permalink:"/next/ON_instruction"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("strong",{parentName:"p"},"GROUP"),"\xa0instruction creates a new ",(0,o.kt)("a",{parentName:"p",href:"/next/Groups_of_properties_and_actions"},"property group"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GROUP name [caption] [EXTID extID] [: parentName];\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The \xa0",(0,o.kt)("strong",{parentName:"p"},"GROUP\xa0"),"instruction declares a new property group and adds it to the current\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Modules"},"module"),". \xa0"),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"name\xa0")),(0,o.kt)("p",null,"Group name.\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#id-broken"},"Simple ID"),".\xa0The name must be unique within the current\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Naming#namespace"},"namespace"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"caption")),(0,o.kt)("p",null,"Group caption.\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Literals#strliteral-broken"},"String literal"),". If the caption is not defined, the name of the group will be its caption. \xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"EXTID extID")),(0,o.kt)("p",null,"Specifying the name to be used\xa0to\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Structured_view#extid"},"export/import"),"\xa0this property group. Used only\xa0in\xa0the ",(0,o.kt)("a",{parentName:"p",href:"/next/Structured_view"},"structured"),"\xa0view."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"extId")),(0,o.kt)("p",null,"String\xa0literal."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"parentName")),(0,o.kt)("p",null,"Name of the parent group. ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#cid-broken"},"\u0421omposite ID"),".\xa0If the name of the parent group is not defined, the ",(0,o.kt)("strong",{parentName:"p"},"System.private")," group becomes the parent. \xa0"),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"GROUP base : root; // The caption of this group will be 'base'\nGROUP local 'Local properties'; // The parent group of local will be System.private\n")))}l.isMDXComponent=!0}}]);