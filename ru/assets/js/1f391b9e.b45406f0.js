(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[13085],{87979:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(67294),a=n(86010),c=n(65474),l=n(3905),o=n(71729),s=n(571),i=n(39306),u="mdxPageWrapper_3qD3";var m=function(e){var t=e.content,n=t.frontMatter,m=t.metadata,d=n.title,f=n.description,v=n.wrapperClassName,p=n.hide_table_of_contents,E=m.permalink;return r.createElement(c.Z,{title:d,description:f,permalink:E,wrapperClassName:null!=v?v:i.kM.wrapper.mdxPages,pageClassName:i.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",u)},r.createElement("div",{className:(0,a.Z)("col",!p&&"col--8")},r.createElement(l.Zo,{components:o.Z},r.createElement(t,null))),!p&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(s.Z,{toc:t.toc})))))}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010);var c=function(e,t,n){var a=(0,r.useState)(void 0),c=a[0],l=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,o=!1,s=document.getElementsByClassName(e);a<s.length&&!o;){var i=s[a],u=i.href,m=decodeURIComponent(u.substring(u.indexOf("#")+1));r.id===m&&(c&&c.classList.remove(t),i.classList.add(t),l(i),o=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},l="tableOfContents_35-E",o="table-of-contents__link";function s(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var t=e.toc;return c(o,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(l,"thin-scrollbar")},r.createElement(s,{toc:t}))}}}]);