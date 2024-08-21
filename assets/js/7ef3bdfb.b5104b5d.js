"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[14788],{57214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(74848),o=n(28453);const i={title:"Partitioning / sorting (PARTITION ... ORDER)"},s=void 0,a={id:"Partitioning_sorting_PARTITION_..._ORDER",title:"Partitioning / sorting (PARTITION ... ORDER)",description:"The partition/order operator creates a property that partitions all objects collections in the system into groups, and using the specified order calculates an aggregate function for each objects collection. Accordingly, the set on which this aggregating function is calculated is determined as following: all object collections of the group of this object collection, and the order of which is less than or equal to the order of this object collection.",source:"@site/docs/Partitioning_sorting_PARTITION_..._ORDER.md",sourceDirName:".",slug:"/Partitioning_sorting_PARTITION_..._ORDER",permalink:"/Partitioning_sorting_PARTITION_..._ORDER",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Partitioning_sorting_PARTITION_..._ORDER.md",tags:[],version:"current",lastUpdatedAt:162452922e4,frontMatter:{title:"Partitioning / sorting (PARTITION ... ORDER)"},sidebar:"learn",previous:{title:"Grouping (GROUP)",permalink:"/Grouping_GROUP"},next:{title:"Recursion (RECURSION)",permalink:"/Recursion_RECURSION"}},c={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"partition/order"})," operator creates a ",(0,r.jsx)(t.a,{href:"/Properties",children:"property"})," that partitions all objects collections in the system into ",(0,r.jsx)(t.em,{children:"groups"}),", and using the specified ",(0,r.jsx)(t.em,{children:"order"})," calculates an ",(0,r.jsx)(t.a,{href:"/Set_operations#func",children:"aggregate function"})," for each objects collection. Accordingly, the set on which this aggregating function is calculated is determined as following: all object collections of the group of this object collection, and the order of which is less than or equal to the order of this object collection."]}),"\n",(0,r.jsxs)(t.p,{children:["Groups in this operator are defined as a set of properties (",(0,r.jsx)(t.em,{children:"groupings"}),"), and the order is defined as a list of properties and a marker of increasing or decreasing. If the aggregation function is not ",(0,r.jsx)(t.a,{href:"/Set_operations#commutative",children:"commutative"}),", the order must be uniquely determined."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that the partition/order operator is very similar to the ",(0,r.jsx)(t.a,{href:"/Grouping_GROUP",children:"grouping operator"}),", but unlike the latter, it computes a result not for grouping values, but for the object collections for which calculation is taking place."]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["To declare a property that implements partition/order, use the ",(0,r.jsxs)(t.a,{href:"/PARTITION_operator",children:[(0,r.jsx)(t.code,{children:"PARTITION"})," operator"]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"// determines the place of the team in the conference\r\nCLASS Conference;\r\nconference = DATA Conference (Team);\r\npoints = DATA INTEGER (Team);\r\ngamesWon = DATA INTEGER (Team);\r\nplace 'Place' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team) BY conference(team);\r\n\r\n// building ordinal indexes of objects in the database in ascending order of their internal IDs (i.e., in the order of creation)\r\nindex 'Number' (Object o) = PARTITION SUM 1 IF o IS Object ORDER o;\r\n\r\n// finds the team next in the conference standings\r\nprevTeam (Team team) = PARTITION PREV team ORDER place(team), team BY conference(team);\r\n\r\n// proportional distribution example\r\nCLASS Order;\r\ntransportSum 'Freight costs' = DATA NUMERIC[10,2] (Order);\r\n\r\nCLASS OrderDetail;\r\norder = DATA Order (OrderDetail) NONULL DELETE;\r\nsum = DATA NUMERIC[14,2] (OrderDetail);\r\n\r\ntransportSum 'Freight costs by line' (OrderDetail d) = PARTITION UNGROUP transportSum\r\n                                    PROPORTION STRICT ROUND(2) sum(d)\r\n                                    ORDER d\r\n                                    BY order(d);\r\n\r\n// example of distribution with limits\r\ndiscountSum 'Discount' = DATA NUMERIC[10,2] (Order);\r\ndiscountSum 'Discount by line' (OrderDetail d) =\r\n    PARTITION UNGROUP discountSum\r\n                LIMIT STRICT sum(d)\r\n                ORDER sum(d), d\r\n                BY order(d);\r\n;\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);