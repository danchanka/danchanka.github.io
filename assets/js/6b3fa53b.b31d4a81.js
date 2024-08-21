"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[71721],{14612:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var o=n(74848),i=n(28453);const t={title:"Groups of properties and actions"},s=void 0,a={id:"Groups_of_properties_and_actions",title:"Groups of properties and actions",description:"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar).",source:"@site/versioned_docs/version-v4/Groups_of_properties_and_actions.md",sourceDirName:".",slug:"/Groups_of_properties_and_actions",permalink:"/v4/Groups_of_properties_and_actions",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Groups_of_properties_and_actions.md",tags:[],version:"v4",lastUpdatedAt:1708349708e3,frontMatter:{title:"Groups of properties and actions"},sidebar:"learn",previous:{title:"Form structure",permalink:"/v4/Form_structure"},next:{title:"Form views",permalink:"/v4/Form_views"}},c={},l=[{value:"Builtin property groups",id:"builtin",level:3},{value:"Property groups usage",id:"property-groups-usage",level:3},{value:"Language",id:"language",level:3}];function d(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsx)(r.p,{children:"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar)."})}),"\n",(0,o.jsxs)(r.p,{children:["All ",(0,o.jsx)(r.a,{href:"/v4/Properties",children:"properties"})," in the system are divided into ",(0,o.jsx)(r.em,{children:"property groups"}),". In this case, all groups form a hierarchy in which each group can contain both properties and other property groups. The root group in this hierarchy is the ",(0,o.jsx)(r.code,{children:"System.root"})," group. All other groups are contained in some ",(0,o.jsx)(r.em,{children:"parent group"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Each property or action belongs directly to exactly one group, and also belongs to all the ancestors of that group. So, for example, all properties and actions in the system belong to the ",(0,o.jsx)(r.code,{children:"System.root"})," group."]}),"\n",(0,o.jsx)(r.h3,{id:"builtin",children:"Builtin property groups"}),"\n",(0,o.jsxs)(r.p,{children:["In addition to ",(0,o.jsx)(r.code,{children:"root"})," in the ",(0,o.jsx)(r.code,{children:"System"})," module, the following groups of properties and actions are created automatically:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"root"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"public"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"base"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"id"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"private"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["All these groups (including ",(0,o.jsx)(r.code,{children:"root"}),") are not used in form display mechanisms (i.e. containers in the ",(0,o.jsx)(r.a,{href:"/v4/Form_design#defaultDesign",children:"default form design"})," and elements of the ",(0,o.jsx)(r.a,{href:"/v4/Structured_view#hierarchy",children:"hierarchical"})," import / export hierarchy are not created for them)."]})}),"\n",(0,o.jsx)(r.h3,{id:"property-groups-usage",children:"Property groups usage"}),"\n",(0,o.jsx)(r.p,{children:"Property groups are currently used in the following mechanisms:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["When displaying forms:","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["in the ",(0,o.jsx)(r.a,{href:"/v4/Interactive_view",children:"interactive"})," view: you can specify for each group that a separate container must be created in the ",(0,o.jsx)(r.a,{href:"/v4/Form_design#defaultDesign",children:"default design"}),". Accordingly, the hierarchy of containers in the default design will match the hierarchy of these property groups. That is, if it is specified for a group (or property) ",(0,o.jsx)(r.code,{children:"A"})," and property group ",(0,o.jsx)(r.code,{children:"B"})," that a container must be created, and group (or property) ",(0,o.jsx)(r.code,{children:"A"})," is a descendant of group ",(0,o.jsx)(r.code,{children:"B"}),", then the container of group (component of property) ",(0,o.jsx)(r.code,{children:"A"})," will be the descendant of the container of group ",(0,o.jsx)(r.code,{children:"B"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["in the ",(0,o.jsx)(r.a,{href:"/v4/Structured_view#hierarchy",children:"hierarchical"})," view: you can specify for each group that a separate intermediate tag must be created when the form is exported. Accordingly, the hierarchy of tags during export will match the hierarchy of property groups. That is, if it is specified for a group (or property) ",(0,o.jsx)(r.code,{children:"A"})," and property group ",(0,o.jsx)(r.code,{children:"B"})," that a tag needs to be created, and group (or property) ",(0,o.jsx)(r.code,{children:"A"})," is a descendant of group ",(0,o.jsx)(r.code,{children:"B"}),", then group (property) ",(0,o.jsx)(r.code,{children:"A"})," will be enclosed in the tag of group ",(0,o.jsx)(r.code,{children:"B"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["When automatically creating forms:","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["All properties with one argument which are included in the ",(0,o.jsx)(r.code,{children:"System.base"})," group will be displayed in the automatically generated dialog forms for ",(0,o.jsx)(r.a,{href:"/v4/Interactive_view#edtClass",children:"selecting/editing"})," objects."]}),"\n",(0,o.jsxs)(r.li,{children:["All properties with one argument which are included in the ",(0,o.jsx)(r.code,{children:"System.id"})," group will be displayed in automatically generated ",(0,o.jsx)(r.a,{href:"/v4/Constraints#message",children:"message display forms"})," on constraint violation."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["In the security policy:","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"You can set a security policy for a group as a whole (and not for each property individually)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"language",children:"Language"}),"\n",(0,o.jsxs)(r.p,{children:["To add a new property/action group to the system, use the ",(0,o.jsxs)(r.a,{href:"/v4/GROUP_statement",children:[(0,o.jsx)(r.code,{children:"GROUP"})," statement"]}),"."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"GROUP base : root; // The caption of this group will be 'base'\r\nGROUP local 'Local properties'; // The parent group of local will be System.private\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var o=n(96540);const i={},t=o.createContext(i);function s(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);