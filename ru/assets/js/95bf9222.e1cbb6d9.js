"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[68852],{11611:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var t=r(74848),o=r(28453);const s={title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 (TRY)"},c=void 0,i={id:"Exception_handling_TRY",title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 (TRY)",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u0438 \u0435\u0441\u043b\u0438 \u0432 \u044d\u0442\u043e\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 (\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435):",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Exception_handling_TRY.md",sourceDirName:".",slug:"/Exception_handling_TRY",permalink:"/ru/Exception_handling_TRY",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/Exception_handling_TRY.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 (TRY)"},sidebar:"learn",previous:{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u0442\u043e\u043a\u043e\u0432 (NEWTHREAD, NEWEXECUTOR)",permalink:"/ru/New_threads_NEWTHREAD_NEWEXECUTOR"},next:{title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f",permalink:"/ru/State_change"}},l={},a=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:3}];function d(n){const e={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,t.jsx)(e.em,{children:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439"})," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u0438 \u0435\u0441\u043b\u0438 \u0432 \u044d\u0442\u043e\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 (\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435):"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u043e\u0448\u0438\u0431\u043a\u0443,"}),"\n",(0,t.jsx)(e.li,{children:"\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0443\u044e \u043e\u0448\u0438\u0431\u043a\u0443 \u0432\u0435\u0440\u0445\u043d\u0435\u043c\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e (\u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u044d\u0442\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043d\u0435 \u0431\u044b\u043b\u043e)"}),"\n",(0,t.jsx)(e.li,{children:"\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e, \u0431\u044b\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0438\u043b\u0438 \u043d\u0435\u0442, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0443\u044e \u043e\u0448\u0438\u0431\u043a\u0443 \u0432\u0435\u0440\u0445\u043d\u0435\u043c\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e (\u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u044d\u0442\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043d\u0435 \u0431\u044b\u043b\u043e)"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u044f\u0437\u044b\u043a",children:"\u042f\u0437\u044b\u043a"}),"\n",(0,t.jsxs)(e.p,{children:["\u0414\u043b\u044f \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,t.jsxs)(e.a,{href:"/ru/TRY_operator",children:["\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,t.jsx)(e.code,{children:"TRY"})]}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lsf",children:"tryToImport(FILE f)  {\r\n    TRY {\r\n        LOCAL a = BPSTRING[10] (INTEGER);\r\n\r\n        IMPORT XLS FROM f TO a = A;\r\n    }\r\n}\r\n\r\nCLASS MyLock {\r\n    lock '\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430'\r\n}\r\n\r\nsingleDo ()  {\r\n    NEWSESSION {\r\n        lock(MyLock.lock);\r\n        IF lockResult() THEN\r\n        TRY {\r\n            MESSAGE 'Lock Obtained';\r\n        } CATCH {\r\n            MESSAGE messageCaughtException();\r\n        } FINALLY unlock(MyLock.lock);\r\n    }\r\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>i});var t=r(96540);const o={},s=t.createContext(o);function c(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);