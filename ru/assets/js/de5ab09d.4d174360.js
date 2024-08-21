"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[80985],{24727:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>t});var s=n(74848),c=n(28453);const d={title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 SEEK"},i=void 0,l={id:"SEEK_operator",title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 SEEK",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 SEEK - \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0435\u0433\u043e \u043f\u043e\u0438\u0441\u043a \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/SEEK_operator.md",sourceDirName:".",slug:"/SEEK_operator",permalink:"/ru/v4/SEEK_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/SEEK_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 SEEK"},sidebar:"learn",previous:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 RETURN",permalink:"/ru/v4/RETURN_operator"},next:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 SHOW",permalink:"/ru/v4/SHOW_operator"}},o={},t=[{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",level:3},{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",level:3},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:3}];function h(e){const r={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,s.jsx)(r.code,{children:"SEEK"})," - \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 ",(0,s.jsx)(r.a,{href:"/ru/v4/Actions",children:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"}),", \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0435\u0433\u043e ",(0,s.jsx)(r.a,{href:"/ru/v4/Search_SEEK",children:"\u043f\u043e\u0438\u0441\u043a \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"})," \u043d\u0430 ",(0,s.jsx)(r.a,{href:"/ru/v4/Forms",children:"\u0444\u043e\u0440\u043c\u0435"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",children:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"SEEK [FIRST | LAST] formObjectId = expr\r\nSEEK [FIRST | LAST] formGroupObjectId [OBJECTS formObject1 = expr1, ..., formObjectK = exprk]\r\nSEEK NULL formGroupObjectId\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),"\n",(0,s.jsxs)(r.p,{children:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,s.jsx)(r.code,{children:"SEEK"})," \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043d\u0430 \u0444\u043e\u0440\u043c\u0435. \u0415\u0441\u0442\u044c \u0434\u0432\u0435 \u0444\u043e\u0440\u043c\u044b \u044d\u0442\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430. \u0412 \u043f\u0435\u0440\u0432\u043e\u0439 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043e\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435 (\u043f\u0440\u0438\u0447\u0435\u043c \u044d\u0442\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432), \u0432\u043e \u0432\u0442\u043e\u0440\u043e\u0439 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0438 \u0438\u0441\u043a\u043e\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u044d\u0442\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 (\u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u0445 ",(0,s.jsx)(r.em,{children:"\u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u043f\u043e\u0438\u0441\u043a\u0430"}),")"]}),"\n",(0,s.jsxs)(r.p,{children:["\u0415\u0441\u043b\u0438 \u0432 \u0433\u0440\u0443\u043f\u043f\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0438\u0441\u043a, \u0435\u0441\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u043e\u0442\u043b\u0438\u0447\u043d\u044b\u0435 \u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u0430, \u0442\u043e \u0434\u043b\u044f \u0442\u0430\u043a\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 (\u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u0445 ",(0,s.jsx)(r.em,{children:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438"}),") \u043d\u0430\u0431\u043e\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u043d \u0442\u0435\u043a\u0443\u0449\u0438\u043c, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u044f\u043c\u0438 ",(0,s.jsx)(r.code,{children:"FIRST"})," \u0438 ",(0,s.jsx)(r.code,{children:"LAST"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["\u0415\u0441\u043b\u0438 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u0430, \u0438\u0441\u043a\u043e\u043c\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d, \u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0438\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441\u0442\u0430\u043d\u0435\u0442 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u043a \u0438\u0441\u043a\u043e\u043c\u043e\u043c\u0443. \u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0438\u0449\u0435\u0442\u0441\u044f \u044d\u0442\u043e\u0442 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u043d\u0430\u0431\u043e\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0442\u0430\u043a\u0436\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u044f\u043c\u0438 ",(0,s.jsx)(r.code,{children:"FIRST"})," \u0438 ",(0,s.jsx)(r.code,{children:"LAST"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["\u0422\u0430\u043a\u0436\u0435 \u0432\u043e \u0432\u0442\u043e\u0440\u043e\u0439 \u0444\u043e\u0440\u043c\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 (\u043a\u043e\u0433\u0434\u0430 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432) \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0441\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u0432 ",(0,s.jsx)(r.code,{children:"NULL"}),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0438\u0441\u043a\u0430 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b\u0430 / \u043d\u0435 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f."]}),"\n",(0,s.jsx)(r.h3,{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"FIRST"})}),"\n",(0,s.jsx)(r.p,{children:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e. \u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0438\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0434\u043b\u044f:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u043d ",(0,s.jsx)(r.strong,{children:"\u043f\u0435\u0440\u0432\u044b\u0439"})," \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u043d\u0430\u0431\u043e\u0440 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c."]}),"\n",(0,s.jsxs)(r.li,{children:["\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0435\u0441\u043b\u0438 \u0438\u0441\u043a\u043e\u043c\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d, \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u043d ",(0,s.jsx)(r.strong,{children:"\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439"})," \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u043d\u0430\u0431\u043e\u0440 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u042f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"LAST"})}),"\n",(0,s.jsx)(r.p,{children:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e. \u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0438\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0434\u043b\u044f:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u043d ",(0,s.jsx)(r.strong,{children:"\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439"})," \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u043d\u0430\u0431\u043e\u0440 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c."]}),"\n",(0,s.jsxs)(r.li,{children:["\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0435\u0441\u043b\u0438 \u0438\u0441\u043a\u043e\u043c\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d, \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u043d ",(0,s.jsx)(r.strong,{children:"\u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439"})," \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u043d\u0430\u0431\u043e\u0440 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"NULL"})}),"\n",(0,s.jsxs)(r.p,{children:["\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e. \u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0440\u0430\u0432\u043d\u044b\u043c\u0438 ",(0,s.jsx)(r.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"formObjectId"})}),"\n",(0,s.jsxs)(r.p,{children:["\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,s.jsx)(r.a,{href:"/ru/v4/IDs#groupobjectid",children:"\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435"}),", \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043e\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"expr"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/ru/v4/Expression",children:"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),", \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043e\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"formGroupObjectId"})}),"\n",(0,s.jsxs)(r.p,{children:["\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,s.jsx)(r.a,{href:"/ru/v4/IDs#groupobjectid",children:"\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0433\u0440\u0443\u043f\u043f\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"}),", \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0438\u0441\u043a\u043e\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"formObject1 ...  formObjectK"})}),"\n",(0,s.jsxs)(r.p,{children:["\u0421\u043f\u0438\u0441\u043e\u043a \u0438\u043c\u0435\u043d \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435. \u041c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0430\u0441\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432. \u0418\u043c\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f ",(0,s.jsx)(r.a,{href:"/ru/v4/IDs#id",children:"\u043f\u0440\u043e\u0441\u0442\u044b\u043c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"expr1 ... exprk"})}),"\n",(0,s.jsx)(r.p,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0438\u0441\u043a\u043e\u043c\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"number = DATA INTEGER (Order);\r\nFORM orders\r\n    OBJECTS o = Order\r\n    PROPERTIES(o) READONLY number, currency, customer\r\n;\r\nnewOrder  {\r\n    NEW new = Order {\r\n        number(new) <- (GROUP MAX number(Order o)) (+) 1;\r\n        SEEK orders.o = new;\r\n    }\r\n}\r\nseekFirst  { SEEK FIRST orders.o; }\r\nseekLast  { SEEK LAST orders.o; }\r\n\r\nEXTEND FORM orders\r\n    PROPERTIES(o) newOrder, seekFirst, seekLast\r\n;\n"})})]})}function x(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var s=n(96540);const c={},d=s.createContext(c);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);