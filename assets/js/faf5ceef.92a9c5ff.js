"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[45902],{67415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(74848),i=t(28453);const s={title:"MULTI operator"},o=void 0,c={id:"MULTI_action_operator",title:"MULTI operator",description:"The MULTI operator creates an action that implements branching (polymorphic form).",source:"@site/docs/MULTI_action_operator.md",sourceDirName:".",slug:"/MULTI_action_operator",permalink:"/MULTI_action_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/MULTI_action_operator.md",tags:[],version:"current",lastUpdatedAt:1712785486e3,frontMatter:{title:"MULTI operator"},sidebar:"learn",previous:{title:"MESSAGE operator",permalink:"/MESSAGE_operator"},next:{title:"NEW operator",permalink:"/NEW_operator"}},a={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"MULTI"})," operator creates an ",(0,r.jsx)(n.a,{href:"/Actions",children:"action"})," that implements ",(0,r.jsx)(n.a,{href:"/Branching_CASE_IF_MULTI#poly",children:"branching"})," (polymorphic form)."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"MULTI [exclusionType] action1, ..., actionN \n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"MULTI"})," operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met. The property selection condition is that the parameters match this action ",(0,r.jsx)(n.a,{href:"/CLASS_operator",children:"signature"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"exclusionType"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/Branching_CASE_IF_MULTI#exclusive",children:"Type of mutual exclusion"}),". Determines whether several conditions for the action selection can be met simultaneously with a certain set of parameters. It is specified by one of the keywords:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"EXCLUSIVE"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"OVERRIDE"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"EXCLUSIVE"})," type indicates that the conditions for the action selection cannot be met simultaneously. The ",(0,r.jsx)(n.code,{children:"OVERRIDE"})," type allows several conditions to be met simultaneously, in which case the first action in the list which selection condition is met will be selected."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"EXCLUSIVE"})," type is used by default."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"action1, ..., actionN"})}),"\n",(0,r.jsxs)(n.p,{children:["A list of ",(0,r.jsx)(n.a,{href:"/Action_operators#contextdependent",children:"context dependent action operators"})," which define the actions from which the selection is made."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS Shape;\r\n\r\nCLASS Square : Shape;\r\nCLASS Circle : Shape;\r\n\r\nmessage (Square s)  { MESSAGE 'Square'; }\r\nmessage (Circle c)  { MESSAGE 'Circle'; }\r\n\r\nmessage (Shape s) = MULTI message[Square](s), message[Circle](s);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);