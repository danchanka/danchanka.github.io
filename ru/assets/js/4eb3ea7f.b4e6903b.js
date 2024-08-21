"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[42062],{78417:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=s(74848),r=s(28453);const l={title:"\u0414\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438"},o=void 0,d={id:"Development_manual",title:"\u0414\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438",description:"\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, IDE \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 Java \u0432\u0435\u0440\u0441\u0438\u0438 \u043d\u0435 \u043d\u0438\u0436\u0435 8.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/Development_manual.md",sourceDirName:".",slug:"/Development_manual",permalink:"/ru/v5/Development_manual",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/ru/Development_manual.md",tags:[],version:"v5",lastUpdatedAt:172171171e4,frontMatter:{title:"\u0414\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438"},sidebar:"install",previous:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0432\u0440\u0443\u0447\u043d\u0443\u044e",permalink:"/ru/v5/Manual_installation"},next:{title:"\u0414\u043b\u044f \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0439 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438",permalink:"/ru/v5/Execution_manual"}},c={},a=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u043a IDE",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043f\u043b\u0430\u0433\u0438\u043d\u0430-\u043a-ide",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 IDE",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0430-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439-\u0447\u0435\u0440\u0435\u0437-ide",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u0435\u0441\u043a\u0442\u043e\u043f-\u043a\u043b\u0438\u0435\u043d\u0442\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0434\u0435\u0441\u043a\u0442\u043e\u043f-\u043a\u043b\u0438\u0435\u043d\u0442\u0430",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0435\u0431-\u043a\u043b\u0438\u0435\u043d\u0442\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0432\u0435\u0431-\u043a\u043b\u0438\u0435\u043d\u0442\u0430",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 Java-\u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0432-\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445-java-\u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 IDE",id:"existingide",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 Maven (\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f Maven \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432)",id:"maven",level:3}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, IDE \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 Java \u0432\u0435\u0440\u0441\u0438\u0438 \u043d\u0435 \u043d\u0438\u0436\u0435 8."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 PostgreSQL \u0432\u0435\u0440\u0441\u0438\u0438 \u043d\u0435 \u043d\u0438\u0436\u0435 9.6. PostgreSQL \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u043f\u043e \u043f\u0430\u0440\u043e\u043b\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u043c md5 \u0438\u043b\u0438 trust. \u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u043c\u043e\u0436\u043d\u043e, \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0432 \u0444\u0430\u0439\u043b ",(0,i.jsx)(n.code,{children:"pg_hba.conf"}),", \u043a\u0430\u043a \u044d\u0442\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 ",(0,i.jsx)(n.a,{href:"http://www.postgresql.org/docs/9.2/static/auth-pg-hba-conf.html",children:"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438"})," PostgreSQL."]})}),"\n",(0,i.jsx)(n.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043f\u043b\u0430\u0433\u0438\u043d\u0430-\u043a-ide",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u043a IDE"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 Intellij IDEA \u043d\u0435 \u043d\u0438\u0436\u0435 2022.2 \u0432\u0435\u0440\u0441\u0438\u0438."})}),"\n",(0,i.jsx)("iframe",{width:"245px",height:"48px",src:"https://plugins.jetbrains.com/embeddable/install/7601"}),"\n",(0,i.jsx)(n.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0430-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439-\u0447\u0435\u0440\u0435\u0437-ide",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 IDE"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u041f\u0440\u0438 ",(0,i.jsx)(n.a,{href:"/ru/v5/IDE#newproject",children:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0433\u043e lsFusion \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})," \u043d\u0430\u043f\u0440\u043e\u0442\u0438\u0432 ",(0,i.jsx)(n.code,{children:"lsFusion library"})," \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,i.jsx)(n.code,{children:"Download"}),": IDEA \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043a\u0430\u0447\u0430\u0435\u0442 jar-\u0444\u0430\u0439\u043b \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 (\u043d\u0435 beta) \u0432\u0435\u0440\u0441\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 lsFusion \u0441 ",(0,i.jsx)(n.a,{href:"https://download.lsfusion.org/java/",children:"\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430"})," \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (\u0430 \u0442\u043e\u0447\u043d\u0435\u0435 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0435\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f: ",(0,i.jsx)(n.code,{children:"File > Project Structure > Modules > \u0438\u043c\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 > \u0432\u043a\u043b\u0430\u0434\u043a\u0430 Dependencies"}),"). \u0422\u0430\u043a\u0436\u0435, \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438, \u043c\u043e\u0436\u043d\u043e \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0443\u044e (\u043e\u0442\u043b\u0438\u0447\u043d\u0443\u044e \u043e\u0442 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439) \u0432\u0435\u0440\u0441\u0438\u044e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0443\u0436\u0435 \u0441\u043a\u0430\u0447\u0430\u043d\u043d\u044b\u0439 jar-\u0444\u0430\u0439\u043b \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0434\u0438\u0441\u043a\u0435."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u041e\u0442\u043c\u0435\u0442\u0438\u043c, \u0447\u0442\u043e IDEA \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442 \u0441\u043a\u0430\u0447\u0430\u043d\u043d\u044b\u0439 / \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432 \u0441\u0432\u043e\u0438\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0435\u0433\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 lsFusion \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432."})}),"\n",(0,i.jsx)(n.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0434\u0435\u0441\u043a\u0442\u043e\u043f-\u043a\u043b\u0438\u0435\u043d\u0442\u0430",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u0435\u0441\u043a\u0442\u043e\u043f-\u043a\u043b\u0438\u0435\u043d\u0442\u0430"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u041f\u043e\u0441\u043b\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0432 \u043b\u043e\u0433\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u0441\u0442\u0440\u043e\u043a \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0430 \u0441 \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u043d\u0430 jnlp-\u0444\u0430\u0439\u043b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.jsx)(n.a,{href:"https://download.lsfusion.org/java/lsfusion-client-5.1.jnlp",children:"https://download.lsfusion.org/java/lsfusion-client-5.1.jnlp"}),"), \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 Java Web Start."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0432\u0435\u0431-\u043a\u043b\u0438\u0435\u043d\u0442\u0430",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0435\u0431-\u043a\u043b\u0438\u0435\u043d\u0442\u0430"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ",(0,i.jsx)(n.a,{href:"https://tomcat.apache.org/download-90.cgi",children:"Apache Tomcat"})," 9\u0439 \u0432\u0435\u0440\u0441\u0438\u0438."]}),"\n",(0,i.jsxs)(n.li,{children:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",(0,i.jsx)(n.code,{children:"--add-opens=java.base/java.util=ALL-UNNAMED"})," \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430 Apache Tomcat, \u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u0435\u0440\u0441\u0438\u044f Java \u0432\u044b\u0448\u0435 17."]}),"\n",(0,i.jsxs)(n.li,{children:["\u0421\u043a\u0430\u0447\u0430\u0442\u044c ",(0,i.jsx)(n.a,{href:"https://download.lsfusion.org/java/lsfusion-client-5.1.war",children:"\u0432\u0435\u0431-\u043a\u043b\u0438\u0435\u043d\u0442\u0430"})," \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b lsFusion."]}),"\n",(0,i.jsx)(n.li,{children:"\u041f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c war-\u0444\u0430\u0439\u043b \u0432 \u043f\u0430\u043f\u043a\u0443 webapps Apache Tomcat, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441 \u0438\u043c\u0435\u043d\u0435\u043c lsfusion.war."}),"\n",(0,i.jsxs)(n.li,{children:["\u0412\u0435\u0431-\u043a\u043b\u0438\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,i.jsx)(n.a,{href:"http://localhost:8080/lsfusion",children:"http://localhost:8080/lsfusion"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0432-\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445-java-\u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 Java-\u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445"}),"\n",(0,i.jsx)(n.h3,{id:"existingide",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 IDE"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0444\u0430\u0439\u043b ",(0,i.jsx)(n.code,{children:"lsfusion-server-<version>.jar"})," \u043d\u0443\u0436\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.jsx)(n.code,{children:"lsfusion-server-5.1.jar"}),") \u0441 ",(0,i.jsx)(n.a,{href:"https://download.lsfusion.org/java/",children:"\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430"})," \u0432 \u043f\u0430\u043f\u043a\u0443 \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (\u0434\u0430\u043b\u0435\u0435 \u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u043f\u0430\u043f\u043a\u0443 ",(0,i.jsx)(n.code,{children:"$FUSION_DIR$"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["\u0415\u0441\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u0411\u0414 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0435\u0441\u043b\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0411\u0414 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f Postgres, \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u0443 md5 \u0438 \u043f\u0430\u0440\u043e\u043b\u044c postgres \u043d\u0435 \u043f\u0443\u0441\u0442\u043e\u0439), \u0437\u0430\u0434\u0430\u0442\u044c ",(0,i.jsx)(n.a,{href:"/ru/v5/Launch_parameters#connectdb",children:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0411\u0414"})," (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043e\u0437\u0434\u0430\u0432 ",(0,i.jsx)(n.a,{href:"/ru/v5/Launch_parameters#filesettings",children:"\u0444\u0430\u0439\u043b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"})," \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0432 \u043f\u0430\u043f\u043a\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430)"]}),"\n",(0,i.jsxs)(n.li,{children:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043a\u0430\u0447\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (",(0,i.jsx)(n.code,{children:"File > Project Structure > Modules > \u0438\u043c\u044f \u043c\u043e\u0434\u0443\u043b\u044f > \u0432\u043a\u043b\u0430\u0434\u043a\u0430 Dependencies > +"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["\u0421\u043e\u0437\u0434\u0430\u0442\u044c ",(0,i.jsx)(n.a,{href:"/ru/v5/IDE#configuration",children:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0437\u0430\u043f\u0443\u0441\u043a\u0430"})," (\u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0433\u043e lsFusion \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u044d\u0442\u043e\u0442 \u0438 \u0432\u0435\u0440\u0445\u043d\u0438\u0435 \u0434\u0432\u0430 \u043f\u0443\u043d\u043a\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438). \u0415\u0441\u043b\u0438 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438, \u0432\u043c\u0435\u0441\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Spring bean c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c ",(0,i.jsx)(n.code,{children:"logicsInstance"})," \u0438\u0437 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b ",(0,i.jsx)(n.code,{children:"lsfusion.xml"}),", \u0438 \u0435\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u044b ",(0,i.jsx)(n.code,{children:"start()"})," \u0438 ",(0,i.jsx)(n.code,{children:"stop()"})," \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u0441\u0442\u0430\u0440\u0442 \u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u0414\u043b\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e maven-\u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043c\u043e\u0436\u043d\u043e (\u0438 \u043d\u0443\u0436\u043d\u043e) \u0434\u0435\u043b\u0430\u0442\u044c \u043f\u043e \u0434\u0440\u0443\u0433\u043e\u043c\u0443 (\u0441\u043c. \u043d\u0438\u0436\u0435)."})}),"\n",(0,i.jsx)(n.h3,{id:"maven",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 Maven (\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f Maven \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u041f\u0440\u043e\u043f\u0438\u0441\u0430\u0442\u044c \u0432 ",(0,i.jsx)(n.code,{children:"pom.xml"})," \u0438\u043b\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 parent ",(0,i.jsx)(n.code,{children:"lsfusion.platform.build:logics"}),", \u0438\u043b\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 dependency ",(0,i.jsx)(n.code,{children:"lsfusion.platform:server"})," (\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u044d\u0442\u0438 \u0430\u0440\u0442\u0435\u0444\u0430\u043a\u0442\u044b \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u043c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u0440\u0438\u0438, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0443\u0442\u044c \u043a lsFusion-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u0440\u0438\u044e), \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<repositories>\r\n    <repository>\r\n        <id>lsfusion</id>\r\n        <name>lsFusion Public Repository</name>\r\n        <url>https://repo.lsfusion.org</url>\r\n    </repository>\r\n</repositories>\r\n\r\n<parent>\r\n    <groupId>lsfusion.platform.build</groupId>\r\n    <artifactId>logics</artifactId>\r\n    <version>5.1</version>\r\n</parent>\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 (\u0441 parent) \u0445\u043e\u0440\u043e\u0448 \u0442\u0435\u043c, \u0447\u0442\u043e:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Maven \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442 \u0441\u0431\u043e\u0440\u043a\u0443 uber-jar (\u0442\u043e \u0435\u0441\u0442\u044c \u043e\u0434\u0438\u043d \u0444\u0430\u0439\u043b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u0432\u0441\u0435 \u0444\u0430\u0439\u043b\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0430). \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u044d\u0442\u0443 \u0441\u0431\u043e\u0440\u043a\u0443 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f maven-\u043f\u0440\u043e\u0444\u0438\u043b\u044c ",(0,i.jsx)(n.code,{children:"assemble"})," - \u043f\u0440\u0438 \u0435\u0433\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043d\u0430 \u0444\u0430\u0437\u0435 package \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442\u0441\u044f jar-\u0444\u0430\u0439\u043b \u0441 \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441\u043e\u043c ",(0,i.jsx)(n.code,{children:"assembly"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u043d\u043e \u0438 \u0444\u0430\u0439\u043b\u044b \u0432\u0441\u0435\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u0412\u043f\u0440\u043e\u0447\u0435\u043c, \u0432 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043a\u043e\u0433\u0434\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u0441\u0430\u043c\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 ",(0,i.jsx)(n.a,{href:"/ru/v5/Execution_auto",children:"\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435"}),") \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0439 uber-jar \u043d\u0435\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e. \u041f\u043e\u044d\u0442\u043e\u043c\u0443, \u043f\u043e\u043c\u0438\u043c\u043e ",(0,i.jsx)(n.code,{children:"assemble"}),", \u0432 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f maven-\u043f\u0440\u043e\u0444\u0438\u043b\u044c ",(0,i.jsx)(n.code,{children:"noserver"}),", \u043f\u0440\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e (\u0432\u043c\u0435\u0441\u0442\u0435 \u0441 ",(0,i.jsx)(n.code,{children:"assemble"}),") \u043f\u0440\u0438 \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 jar-\u0444\u0430\u0439\u043b\u0430 \u0441 \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441\u043e\u043c ",(0,i.jsx)(n.code,{children:"assembly"})," \u0442\u0443\u0434\u0430 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u0444\u0430\u0439\u043b\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 (\u043f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043c\u0430\u043d\u0434\u044b: ",(0,i.jsx)(n.code,{children:"mvn package -P assemble,noserver"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Maven \u0438 IDE \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442 source \u0438 resources \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0442\u0430\u043a\u0438\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",(0,i.jsx)(n.code,{children:"src/main/lsfusion"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Maven \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442 weav'\u0438\u043d\u0433 \u0430\u0441\u043f\u0435\u043a\u0442\u043e\u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u0412\u043f\u0440\u043e\u0447\u0435\u043c, \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0440\u0435\u0434\u043a\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445: \u0435\u0441\u043b\u0438 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0435\u0441\u0442\u044c \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u044b\u0435 rmi-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 (\u0442\u043e \u0435\u0441\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 ",(0,i.jsx)(n.code,{children:"lsfusion.interop.server.RmiServerInterface"}),", \u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e \u0447\u0435\u0440\u0435\u0437 RMI) \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0430\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.jsx)(n.code,{children:"lsfusion.server.base.caches.IdentityLazy"})," \u0434\u043b\u044f \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e \u0432\u0442\u043e\u0440\u043e\u043c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0435 \u0432\u0441\u0435 \u0432\u044b\u0448\u0435\u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443."}),"\n",(0,i.jsxs)(n.p,{children:["\u0422\u0430\u043a\u0436\u0435 \u043a\u0430\u043a \u0438 \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e lsFusion \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u0434\u043b\u044f maven-\u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0442\u044c ",(0,i.jsx)(n.a,{href:"/ru/v5/Launch_parameters#filesettings",children:"\u0444\u0430\u0439\u043b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"})," \u0438 ",(0,i.jsx)(n.a,{href:"/ru/v5/IDE#configuration",children:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0437\u0430\u043f\u0443\u0441\u043a\u0430"})," (\u0438\u043b\u0438 \u0435\u0441\u043b\u0438 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,i.jsx)(n.a,{href:"#existingide",children:"\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 Spring bean"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u0430 \u0438\u0434\u0435\u0442 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c \u0438 \u0432 \u043d\u0435\u043c \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f ",(0,i.jsx)(n.a,{href:"/ru/v5/Metaprogramming",children:"\u043c\u0435\u0442\u0430\u043a\u043e\u0434\u044b"})," (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.jsx)(n.a,{href:"https://github.com/lsfusion-solutions/erp",children:"ERP"}),"), \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 IDEA (",(0,i.jsx)(n.code,{children:"idea.exe.vmoptions"})," \u0438\u043b\u0438 ",(0,i.jsx)(n.code,{children:"idea64.exe.vmoptions"}),") \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c ",(0,i.jsx)(n.code,{children:"Xmx"})," \u0445\u043e\u0442\u044f \u0431\u044b \u0434\u043e 2gb."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(96540);const r={},l=i.createContext(r);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);