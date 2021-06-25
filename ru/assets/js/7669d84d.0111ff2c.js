(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[82621],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80846:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a={title:"How-to: \u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043b\u043e\u0433\u0438\u043a\u0430",sidebar_label:"\u041e\u0431\u0437\u043e\u0440"},c=void 0,l={unversionedId:"How-to_Declarative_logic",id:"version-v4/How-to_Declarative_logic",isDocsHomePage:!1,title:"How-to: \u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043b\u043e\u0433\u0438\u043a\u0430",description:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u043b\u0435\u043d\u0438\u044f",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_Declarative_logic.md",sourceDirName:".",slug:"/How-to_Declarative_logic",permalink:"/ru/How-to_Declarative_logic",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/How-to_Declarative_logic.md",version:"v4",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"06.04.2021",frontMatter:{title:"How-to: \u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043b\u043e\u0433\u0438\u043a\u0430",sidebar_label:"\u041e\u0431\u0437\u043e\u0440"},sidebar:"version-v4/learn",previous:{title:"How-to: \u0421\u043e\u0431\u044b\u0442\u0438\u044f",permalink:"/ru/How-to_Events"},next:{title:"How-to: \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",permalink:"/ru/How-to_Constraints"}},u=[{value:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u043b\u0435\u043d\u0438\u044f",id:"\u043f\u043e\u0440\u044f\u0434\u043e\u043a-\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u043b\u0435\u043d\u0438\u044f",children:[]}],s={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u043f\u043e\u0440\u044f\u0434\u043e\u043a-\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u043b\u0435\u043d\u0438\u044f"},"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/ru/How-to_Constraints"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"),". \u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/ru/How-to_Inheritance_and_aggregation"},"\u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438"),". \u041c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u044b \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u043e\u0434\u043d\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044e \u0438\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432.")))}p.isMDXComponent=!0}}]);