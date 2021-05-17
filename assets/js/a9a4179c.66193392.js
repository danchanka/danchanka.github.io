(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[76401],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return N}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=u(n),N=a,k=m["".concat(s,".").concat(N)]||m[N]||p[N]||i;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64652:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Instructions",sidebar_label:"Overview"},l={unversionedId:"Instructions",id:"Instructions",isDocsHomePage:!1,title:"Instructions",description:"The code of any module\xa0in lsFusion\xa0consists of a sequence of instructions.",source:"@site/docs/Instructions.md",sourceDirName:".",slug:"/Instructions",permalink:"/next/Instructions",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Instructions.md",version:"current",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",frontMatter:{title:"Instructions",sidebar_label:"Overview"},sidebar:"learn",previous:{title:"Literals",permalink:"/next/Literals"},next:{title:"Module header",permalink:"/next/Module_header"}},s=[],u={toc:s};function c(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The code of any ",(0,i.kt)("a",{parentName:"p",href:"/next/Modules"},"module"),"\xa0in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/next/Language"},"lsFusion")),"\xa0consists of a sequence of ",(0,i.kt)("em",{parentName:"p"},"instructions.\xa0")),(0,i.kt)("p",null,"Instructions are of the following kinds:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/Module_header"},"The special ",(0,i.kt)("strong",{parentName:"a"},"MODULE"),", ",(0,i.kt)("strong",{parentName:"a"},"REQUIRE"),", ",(0,i.kt)("strong",{parentName:"a"},"PRIORITY")," and ",(0,i.kt)("strong",{parentName:"a"},"NAMESPACE")," instructions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/Instruction_="},"The = instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/ACTION_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"ACTION")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/GROUP_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"GROUP")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/ON_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"ON")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/WHEN_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"WHEN")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/Instruction_-_WHEN"},"The <-",(0,i.kt)("strong",{parentName:"a"},"WHEN")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/CONSTRAINT_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"CONSTRAINT")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/Instruction=_"},"The => instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/CLASS_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"CLASS")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/FORM_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"FORM")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/DESIGN_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"DESIGN")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/NAVIGATOR_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"NAVIGATOR")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/WINDOW_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"WINDOW")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/EXTEND_CLASS_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"EXTEND CLASS")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/EXTEND_FORM_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"EXTEND FORM")," instruction")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/next/Instruction_+="},"+=")," instruction\xa0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/ACTION+_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"ACTION+")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/META_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"META")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/Instruction_"},"Instruction**\xa0**@")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/TABLE_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"TABLE")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/INDEX_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"INDEX")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/BEFORE_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"BEFORE")," instruction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/AFTER_instruction"},"The ",(0,i.kt)("strong",{parentName:"a"},"AFTER")," instruction")),(0,i.kt)("li",{parentName:"ul"},"The LOGGABLE instruction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/Empty_instruction"},"Empty instruction"))),(0,i.kt)("p",null,"Each instruction in ",(0,i.kt)("strong",{parentName:"p"},"lsFusion"),"\xa0ends with a semicolon, with two exceptions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An instruction followed by a closing brace"),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"META")," instruction")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"}),(0,i.kt)("li",{parentName:"ul"})))}c.isMDXComponent=!0}}]);