"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[520],{44645:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=n(74848),t=n(28453);const a={title:"How-to: \u041f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439"},s=void 0,c={id:"How-to_Overriding_values",title:"How-to: \u041f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439",description:"\u0427\u0430\u0441\u0442\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u0437\u0430\u0434\u0430\u0447\u0438, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430, \u0443\u0442\u043e\u0447\u043d\u044f\u044f \u0437\u0430\u0442\u0435\u043c \u0435\u0433\u043e \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_Overriding_values.md",sourceDirName:".",slug:"/How-to_Overriding_values",permalink:"/ru/v4/How-to_Overriding_values",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/How-to_Overriding_values.md",tags:[],version:"v4",lastUpdatedAt:1623249583e3,frontMatter:{title:"How-to: \u041f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439"},sidebar:"learn",previous:{title:"How-to: \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435",permalink:"/ru/v4/How-to_Using_objects_as_templates"},next:{title:"How-to: \u0421\u0432\u044f\u0437\u044b\u0432\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432",permalink:"/ru/v4/How-to_Binding_properties"}},l={},i=[];function d(e){const r={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"\u0427\u0430\u0441\u0442\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u0437\u0430\u0434\u0430\u0447\u0438, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430, \u0443\u0442\u043e\u0447\u043d\u044f\u044f \u0437\u0430\u0442\u0435\u043c \u0435\u0433\u043e \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430."}),"\n",(0,o.jsx)(r.p,{children:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0441\u043b\u0443\u0447\u0430\u0439, \u043a\u043e\u0433\u0434\u0430 \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u043d\u0443\u0436\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u043e\u0440\u0433\u043e\u0432\u0443\u044e \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0443. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0442 \u0434\u0435\u0440\u0435\u0432\u043e \u043f\u0443\u0442\u0435\u043c \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0434\u0430\u0442\u044c \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0443 \u043a\u0430\u043a \u0434\u043b\u044f \u0442\u043e\u0432\u0430\u0440\u0430, \u0442\u0430\u043a \u0438 \u0434\u043b\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435."}),"\n",(0,o.jsxs)(r.p,{children:["\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u043b\u043e\u0433\u0438\u043a\u0443 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u0438 ",(0,o.jsx)(r.a,{href:"/ru/v4/Data_properties_DATA",children:"\u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"})," \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"CLASS Category '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f';\r\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Category) IN id;\r\n\r\nparent '\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c' = DATA Category (Category) AUTOSET;\r\nnameParent '\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c' (Category c) = name(parent(c)) IN id;\r\n\r\nmarkup '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430' = DATA NUMERIC[8,2] (Category);\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,o.jsxs)(r.a,{href:"/ru/v4/RECURSION_operator",children:["\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,o.jsx)(r.code,{children:"RECURSION"})]})," \u0434\u043b\u044f \u043b\u044e\u0431\u044b\u0445 \u0434\u0432\u0443\u0445 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0435\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,o.jsx)(r.code,{children:"'\u0423\u0440\u043e\u0432\u0435\u043d\u044c'"}),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u043d\u043e \u0434\u0432\u043e\u0439\u043a\u0435 \u0432\u043e\u0437\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0439 \u0432 \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"level '\u0423\u0440\u043e\u0432\u0435\u043d\u044c' (Category child, Category parent) = RECURSION 1l IF child IS Category AND parent == child\r\n                                                                 STEP 2l IF parent == parent($parent) MATERIALIZED;\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0438 \u0443\u0440\u043e\u0432\u043d\u044e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"parent (Category child, LONG level) = GROUP MAX Category parent\r\n                                                       BY level(child, parent);\n"})}),"\n",(0,o.jsx)(r.p,{children:'\u041d\u0430\u0445\u043e\u0434\u0438\u043c \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0437\u0430\u0434\u0430\u043d\u0430 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430. \u041e\u043d \u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0440\u043e\u0432\u043d\u0435\u043c "\u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0439 \u0432\u0432\u0435\u0440\u0445" \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u043e\u0439.'}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"nearestGroupLevel '\u0411\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u0430\u0434\u0430\u043d\u0430 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430' (Category child) =\r\n    GROUP MIN level(child, Category parent) IF markup(parent);\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u041f\u043e \u044d\u0442\u043e\u043c\u0443 \u0443\u0440\u043e\u0432\u043d\u044e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c \u0441\u0430\u043c\u0443 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u0438 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0443 \u0434\u043b\u044f \u043d\u0435\u0435."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"nearestGroup '\u0411\u043b\u0438\u0436\u0430\u0439\u0448\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0437\u0430\u0434\u0430\u043d\u0430 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430' (Category category) = parent(category, nearestGroupLevel(category));\r\n\r\noverMarkup '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u0430\u044f' (Category category) = markup(nearestGroup(category));\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0435 ",(0,o.jsx)(r.code,{children:"overMarkup"})," \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043a\u043e\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0438\u0445 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438."]}),"\n",(0,o.jsx)(r.p,{children:"\u0422\u0435\u043f\u0435\u0440\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u043b\u043e\u0433\u0438\u043a\u0443 \u043a\u043d\u0438\u0433. \u041a\u0430\u0436\u0434\u0430\u044f \u0438\u0437 \u043d\u0438\u0445 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u0430 \u043a \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\r\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Book) IN id;\r\n\r\ncategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' = DATA Category (Book) AUTOSET;\r\nnameCategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' (Book b) = name(category(b)) IN id;\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u0417\u0430\u0434\u0430\u0434\u0438\u043c \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u0442\u043e\u0432\u0430\u0440\u0430. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u043c \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0443 \u0434\u043b\u044f \u0442\u043e\u0432\u0430\u0440\u0430, \u0435\u0441\u043b\u0438 \u043e\u043d\u043e \u043d\u0435 \u0440\u0430\u0432\u043d\u043e ",(0,o.jsx)(r.code,{children:"NULL"}),", \u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u043d\u0435\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u043e\u0439 \u0434\u043b\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"markup '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0442\u043e\u0432\u0430\u0440\u0430' = DATA NUMERIC[8,2] (Book);\r\n\r\noverMarkup '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u0430\u044f' (Book b) = OVERRIDE markup(b), overMarkup(category(b));\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u041d\u0430\u043a\u043e\u043d\u0435\u0446 \u043d\u0430\u0440\u0438\u0441\u0443\u0435\u043c \u0444\u043e\u0440\u043c\u0443, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043c\u043e\u0436\u0435\u0442 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0443 \u0434\u043b\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e. \u0418 \u0434\u043b\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438, \u0438 \u0434\u043b\u044f \u0442\u043e\u0432\u0430\u0440\u0430 \u0432\u044b\u0432\u0435\u0434\u0435\u043c \u043a\u0430\u043a \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u0443\u044e \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0443, \u0442\u0430\u043a \u0438 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0441\u0440\u0430\u0437\u0443, \u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043a\u043d\u043e\u043f\u043a\u0438."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"markup '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0442\u043e\u0432\u0430\u0440\u0430' = DATA NUMERIC[8,2] (Book);\r\n\r\noverMarkup '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u0430\u044f' (Book b) = OVERRIDE markup(b), overMarkup(category(b));\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u0412 \u0438\u0442\u043e\u0433\u0435 \u0444\u043e\u0440\u043c\u0430 \u0441 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u043c \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:n(59195).A+"",width:"919",height:"255"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},59195:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/How-to_Overriding_values-46992522ae9783dad1fc2e055f1ce3ea.png"},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var o=n(96540);const t={},a=o.createContext(t);function s(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);