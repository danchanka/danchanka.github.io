(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[13085],{79366:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(32611),l=n(3905),c=n(3541),o=n(571),s=n(86700);t.default=function(e){var t=e.content,n=t.frontMatter,i=t.metadata,m=n.title,u=n.description,d=n.wrapperClassName,f=n.hide_table_of_contents,v=i.permalink;return a.createElement(r.Z,{title:m,description:u,permalink:v,wrapperClassName:null!=d?d:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},a.createElement("main",null,a.createElement("div",{className:"container container--fluid"},a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--8 col--offset-2"},a.createElement("div",{className:"container"},a.createElement(l.Zo,{components:c.Z},a.createElement(t,null)))),!f&&t.toc&&a.createElement("div",{className:"col col--2"},a.createElement(o.Z,{toc:t.toc})))))))}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010);var l=function(e,t,n){var r=(0,a.useState)(void 0),l=r[0],c=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var i=s[r],m=i.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));a.id===u&&(l&&l.classList.remove(t),i.classList.add(t),c(i),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},c="tableOfContents_35-E",o="table-of-contents__link";function s(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(s,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar")},a.createElement(s,{toc:t}))}}}]);