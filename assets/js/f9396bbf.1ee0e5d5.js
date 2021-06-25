(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[8669],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(h,c(c({ref:n},p),{},{components:t})):r.createElement(h,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46420:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),c={title:"Cancel changes (CANCEL)"},i=void 0,s={unversionedId:"Cancel_changes_CANCEL",id:"Cancel_changes_CANCEL",isDocsHomePage:!1,title:"Cancel changes (CANCEL)",description:"The cancel changes operator completely clears the current change session.",source:"@site/docs/Cancel_changes_CANCEL.md",sourceDirName:".",slug:"/Cancel_changes_CANCEL",permalink:"/next/Cancel_changes_CANCEL",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Cancel_changes_CANCEL.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Cancel changes (CANCEL)"},sidebar:"learn",previous:{title:"Apply changes (APPLY)",permalink:"/next/Apply_changes_APPLY"},next:{title:"New session (NEWSESSION, NESTEDSESSION)",permalink:"/next/New_session_NEWSESSION_NESTEDSESSION"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"cancel changes")," operator completely clears the current ",(0,o.kt)("a",{parentName:"p",href:"/next/Change_sessions"},"change session"),"."),(0,o.kt)("p",null,"As with other session management operators, you can explicitly specify ",(0,o.kt)("a",{parentName:"p",href:"/next/Session_management#nested"},"nested local properties")," for the cancel operator."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This operator works differently if executed inside ",(0,o.kt)("a",{parentName:"p",href:"/next/Events#change"},"events")," handling: in this case, it cancels ",(0,o.kt)("a",{parentName:"p",href:"/next/Apply_changes_APPLY"},"applying the changes")," that led to this handling"))),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action that implements cancellation, use the ",(0,o.kt)("a",{parentName:"p",href:"/next/CANCEL_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"CANCEL")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"dropChanges()  {\n    CANCEL NESTED (in[Sku]); // cancel all changes except the in property\n}\n")))}u.isMDXComponent=!0}}]);