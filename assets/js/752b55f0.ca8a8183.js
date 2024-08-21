"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[46407],{39075:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=n(74848),t=n(28453);const s={title:"PARTITION operator"},o=void 0,d={id:"PARTITION_operator",title:"PARTITION operator",description:"The PARTITION operator creates a property that implements partition/order or simple distribution.",source:"@site/docs/PARTITION_operator.md",sourceDirName:".",slug:"/PARTITION_operator",permalink:"/PARTITION_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/PARTITION_operator.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"PARTITION operator"},sidebar:"learn",previous:{title:"OVERRIDE operator",permalink:"/OVERRIDE_operator"},next:{title:"PREV operator",permalink:"/PREV_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function a(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"PARTITION"})," operator creates a ",(0,i.jsx)(r.a,{href:"/Properties",children:"property"})," that implements ",(0,i.jsx)(r.a,{href:"/Partitioning_sorting_PARTITION_..._ORDER",children:"partition/order"})," or ",(0,i.jsx)(r.a,{href:"/Distribution_UNGROUP",children:"simple distribution"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(r.p,{children:["There are two different types of ",(0,i.jsx)(r.code,{children:"PARTITION"})," operator. The first implements partition/order:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"PARTITION \r\ntype expr\r\n[ORDER [DESC] orderExpr1, ..., orderExprK]\r\n[BY groupExpr1, ..., groupExprM]\n"})}),"\n",(0,i.jsx)(r.p,{children:"The second implements simple distribution:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"PARTITION \r\nUNGROUP propertyId distributionType expr\r\n[ORDER [DESC] orderExpr1, ..., orderExprK]\r\n[BY groupExpr1, ..., groupExprM]\n"})}),"\n",(0,i.jsxs)(r.p,{children:["where ",(0,i.jsx)(r.code,{children:"distributionType"})," can be described in several ways:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"PROPORTION [STRICT] ROUND(digits)\r\nLIMIT [STRICT]\n"})}),"\n",(0,i.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"PARTITION"})," operator creates a property that divides all object collections in the system into groups, and taking into account the specified order:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["calculates an ",(0,i.jsx)(r.a,{href:"/Set_operations",children:"aggregate function"})," for each object collection. In case of partition/order,"]}),"\n",(0,i.jsx)(r.li,{children:"it distributes a certain value among the object collections of one group in the case of distribution."}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"BY"})," block describes the groups into which numerous sets of object collections will be divided. If the ",(0,i.jsx)(r.code,{children:"BY"})," block is not specified, all object collections are considered to belong to the same group."]}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"ORDER"})," block defines the order in which the aggregate function will be calculated or the distribution will take place. If this function is ",(0,i.jsx)(r.a,{href:"/Set_operations",children:"non-commutative"}),", the specified order must be uniquely determined. If a new parameter (not used earlier in the  ",(0,i.jsx)(r.code,{children:"PARTITION"})," and ",(0,i.jsx)(r.code,{children:"BY"})," options and in the upper context) is declared in the expressions defining the order, when calculating the resulting value the condition of non-NULLness of all these expressions is automatically added."]}),"\n",(0,i.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"type"})}),"\n",(0,i.jsxs)(r.p,{children:["Type of aggregate function. Currently the aggregate function types ",(0,i.jsx)(r.code,{children:"SUM"})," and ",(0,i.jsx)(r.code,{children:"PREV"})," are supported."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"propertyId"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/IDs#propertyid",children:"ID"})," of the distributed property. The value of this property must be numeric, and the number of parameters must be equal to the number of groups in the ",(0,i.jsx)(r.code,{children:"BY"})," block. When calculating the values of group/partition expressions, objects that identify a certain group of object sets will be passed to this property as an input."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"distributionType"})}),"\n",(0,i.jsx)(r.p,{children:"Distribution type. These are of the following types:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"PROPORTION"})}),"\n",(0,i.jsxs)(r.p,{children:["Keyword specifying the use of proportional distribution. In this case, the value of the distributed property for a particular group is distributed proportionally among the object collections belonging to the group. The proportion is defined by the ",(0,i.jsx)(r.code,{children:"expr"})," expression that is specified after the distribution type."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"STRICT"})}),"\n",(0,i.jsxs)(r.p,{children:["When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder (which may also be negative), it is added to the first object collection in accordance with the order defined in the ",(0,i.jsx)(r.code,{children:"ORDER"})," block."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"ROUND(digits)"})}),"\n",(0,i.jsx)(r.p,{children:"Specifies the number of decimal places the value will be rounded to."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"digits"})," \u2013 ",(0,i.jsx)(r.a,{href:"/Literals#intliteral",children:"Integer literal"})," specifying the number of decimal places."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"LIMIT"})}),"\n",(0,i.jsxs)(r.p,{children:["A keyword specifying the use of distribution with specified limits. In this case, the value of the distributed property is initially set for the first object collection. If the limit is exceeded for this set, the limit is set to the first object collection, and the rest of the value of the distributed property is assigned to the second object collection. It is then checked for exceeding the limit for the second object collection, and so on. The limit is defined by the ",(0,i.jsx)(r.code,{children:"expr"})," expression specified after specifying the distribution type."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"STRICT"})}),"\n",(0,i.jsxs)(r.p,{children:["When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder, it is added to the last object collection in accordance with the order defined in the ",(0,i.jsx)(r.code,{children:"ORDER"})," block."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"expr"})}),"\n",(0,i.jsxs)(r.p,{children:["An ",(0,i.jsx)(r.a,{href:"/Expression",children:"expression"})," whose value is passed as an input to the aggregating function as an operand in case of partition/order. In case of distribution with type ",(0,i.jsx)(r.code,{children:"PROPORTION"})," it defines the proportion, and with type ",(0,i.jsx)(r.code,{children:"LIMIT"})," it defines the limit."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"groupExpr1, ..., groupExprM"})}),"\n",(0,i.jsx)(r.p,{children:"List of group expressions (groups)."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"DESC"})}),"\n",(0,i.jsx)(r.p,{children:"Keyword. Specifies a reverse iteration order for object collections."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"orderExpr1, ..., orderExprK"})}),"\n",(0,i.jsx)(r.p,{children:"A list of expressions that define the order in which object collections will be iterated when calculating the aggregate function or during distribution. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lsf",children:"// determines the place of the team in the conference\r\nCLASS Conference;\r\nconference = DATA Conference (Team);\r\npoints = DATA INTEGER (Team);\r\ngamesWon = DATA INTEGER (Team);\r\nplace 'Place' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team) BY conference(team);\r\n\r\n// building ordinal indexes of objects in the database in ascending order of their internal IDs (i.e., in the order of creation)\r\nindex 'Number' (Object o) = PARTITION SUM 1 IF o IS Object ORDER o;\r\n\r\n// finds the team next in the conference standings\r\nprevTeam (Team team) = PARTITION PREV team ORDER place(team), team BY conference(team);\r\n\r\n// proportional distribution example\r\nCLASS Order;\r\ntransportSum 'Freight costs' = DATA NUMERIC[10,2] (Order);\r\n\r\nCLASS OrderDetail;\r\norder = DATA Order (OrderDetail) NONULL DELETE;\r\nsum = DATA NUMERIC[14,2] (OrderDetail);\r\n\r\ntransportSum 'Freight costs by line' (OrderDetail d) = PARTITION UNGROUP transportSum\r\n                                    PROPORTION STRICT ROUND(2) sum(d)\r\n                                    ORDER d\r\n                                    BY order(d);\r\n\r\n// example of distribution with limits\r\ndiscountSum 'Discount' = DATA NUMERIC[10,2] (Order);\r\ndiscountSum 'Discount by line' (OrderDetail d) =\r\n    PARTITION UNGROUP discountSum\r\n                LIMIT STRICT sum(d)\r\n                ORDER sum(d), d\r\n                BY order(d);\r\n;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var i=n(96540);const t={},s=i.createContext(t);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);