"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[66154],{21654:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=i(74848),s=i(28453);const t={title:"Property options"},l=void 0,d={id:"Property_options",title:"Property options",description:"When a property is declared in the = statement a set of property options can be specified at the end of the declaration",source:"@site/versioned_docs/version-v4/Property_options.md",sourceDirName:".",slug:"/Property_options",permalink:"/v4/Property_options",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Property_options.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"Property options"},sidebar:"learn",previous:{title:"Comparison operators",permalink:"/v4/Comparison_operators"},next:{title:"ACTION statement",permalink:"/v4/ACTION_statement"}},o={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Description and parameters",id:"description-and-parameters",level:2},{value:"Interactive view block",id:"interactive-view-block",level:3},{value:"<code>DESIGN</code> statement default values block",id:"design-statement-default-values-block",level:3},{value:"Examples",id:"examples",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["When a ",(0,r.jsx)(n.a,{href:"/v4/Properties",children:"property"})," is declared in the ",(0,r.jsxs)(n.a,{href:"/v4/=_statement",children:[(0,r.jsx)(n.code,{children:"="})," statement"]})," a set of ",(0,r.jsx)(n.em,{children:"property options"})," can be specified at the end of the declaration"]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"propertyOption1 ... propertyOptionN\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following set of options is supported (the syntax of each option is indicated on a separate line):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"IN groupName\r\nviewType\r\nON eventType { actionOperator }\r\nCHANGEKEY key [SHOW | HIDE]\r\nMATERIALIZED\r\nTABLE tableName\r\nINDEXED\r\nNONULL [DELETE] eventClause\r\nAUTOSET\r\nCHARWIDTH width [FLEX | NOFLEX]\r\nREGEXP rexpr [message] \r\nECHO\r\nDEFAULTCOMPARE [compare]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description-and-parameters",children:"Description and parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"IN groupName"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifying the ",(0,r.jsx)(n.a,{href:"/v4/Groups_of_properties_and_actions",children:"group of properties and actions"})," to which the property belongs. If the option is not specified, then the property will belong by default to the group ",(0,r.jsx)(n.code,{children:"System.private"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"groupName"})}),"\n",(0,r.jsxs)(n.p,{children:["Group name. ",(0,r.jsx)(n.a,{href:"/v4/IDs#cid",children:"Compound ID"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("a",{className:"lsdoc-anchor",id:"persistent"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"MATERIALIZED"})}),"\n",(0,r.jsxs)(n.p,{children:["Keyword marking the property as ",(0,r.jsx)(n.a,{href:"/v4/Materializations",children:"materialized"}),". These properties will be stored in the database's ",(0,r.jsx)(n.a,{href:"/v4/Tables",children:"table"})," fields."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"TABLE tableName"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifies the ",(0,r.jsx)(n.a,{href:"/v4/Tables",children:"table"}),' where the property will be stored. The number of table keys must be equal to the number of property arguments, and the argument classes must match the table key classes. If no table is specified, the property will automatically be placed in the "nearest" existing table in the system.']}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"tableName"})}),"\n",(0,r.jsx)(n.p,{children:"Table name. Composite ID."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("a",{className:"lsdoc-anchor",id:"indexed"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"INDEXED"})}),"\n",(0,r.jsxs)(n.p,{children:["Keyword. If specified, an ",(0,r.jsx)(n.a,{href:"/v4/Indexes",children:"index"})," by this property is created. Similar to using the ",(0,r.jsxs)(n.a,{href:"/v4/INDEX_statement",children:[(0,r.jsx)(n.code,{children:"INDEX"})," statement"]}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"NONULL [DELETE] eventClause"})}),"\n",(0,r.jsxs)(n.p,{children:["Adds a ",(0,r.jsx)(n.a,{href:"/v4/Simple_constraints",children:"definiteness"})," constraint. If this constraint is violated as a result of some changes for some objects, either the corresponding message will be displayed, or, if ",(0,r.jsx)(n.code,{children:"DELETE"})," is specified, such objects will be deleted."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DELETE"})}),"\n",(0,r.jsxs)(n.p,{children:["Keyword that, if specified, then when the property becomes ",(0,r.jsx)(n.code,{children:"NULL"}),", objects that are property arguments will be deleted."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"eventClause"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/v4/Event_description_block",children:"Event type description block"}),". Describes the event by which the property will be checked for ",(0,r.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"interactive-view-block",children:"Interactive view block"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"viewType"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifying the type of ",(0,r.jsx)(n.a,{href:"/v4/Interactive_view#property",children:"property view"})," when added to the form."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GRID"})," - table column"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TOOLBAR"})," - toolbar"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PANEL"})," - panel"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["It is similar to specifying the ",(0,r.jsx)(n.code,{children:"viewType"})," option in the ",(0,r.jsx)(n.a,{href:"/v4/Properties_and_actions_block",children:"property block"})," of the ",(0,r.jsxs)(n.a,{href:"/v4/FORM_statement",children:[(0,r.jsx)(n.code,{children:"FORM"})," statement"]}),". Thus, if this option is not specified either in the property options or in the property block directly on the form, the ",(0,r.jsx)(n.a,{href:"/v4/Interactive_view#property",children:"default view"})," of the property display group on the form is used."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ON eventType { actionOperator }"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifying an action that will be the default handler of a certain ",(0,r.jsx)(n.a,{href:"/v4/Form_events",children:"form event"})," for all the interactive views of this property. Can be overridden in the property block of the ",(0,r.jsx)(n.code,{children:"FORM"})," statement."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"eventType"})}),"\n",(0,r.jsx)(n.p,{children:"Type of form event. Specified by one of the following options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CHANGE"})," - occurs when the user tries to change the value of a property."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CHANGEWYS"})," - occurs when the user tries to change the value of the specified property using a special input mechanism."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GROUPCHANGE"})," - occurs when the user tries to change the property value for all objects in the table (group editing)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"EDIT"})," - occurs when the user tries to edit the object that is the value of the specified property."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CONTEXTMENU [caption]"})," - the user has selected the specified item in the property context menu on the form. If necessary, you can also define the ",(0,r.jsx)(n.code,{children:"caption"})," of this menu item (",(0,r.jsx)(n.a,{href:"/v4/Literals#strliteral",children:"string literal"}),"). If it is not specified, then, by default, it will be the same as the action caption."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"actionOperator"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/v4/Action_operators#contextdependent",children:"Context-dependent action operator"}),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"design-statement-default-values-block",children:[(0,r.jsx)(n.code,{children:"DESIGN"})," statement default values block"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CHARWIDTH width [FLEX | NOFLEX]"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifying the ",(0,r.jsx)(n.a,{href:"/v4/Form_design#valueWidth",children:"number of characters"})," of the property value that should be visible to the user. Sets the value for the default design, can be overridden in a ",(0,r.jsx)(n.code,{children:"DESIGN"})," statement."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"width"})}),"\n",(0,r.jsx)(n.p,{children:"Number of characters. Integer literal."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"FLEX"})}),"\n",(0,r.jsx)(n.p,{children:"Keyword. If specified, the extension coefficient of the property value is automatically set equal to its base size."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"NOFLEX"})}),"\n",(0,r.jsx)(n.p,{children:"Keyword. If specified, the extension coefficient of the property value is automatically set equal to zero."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"REGEXP rexpr [message]"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifying a regular expression to which the property value should correspond after editing. Sets the value for the default design and can be overridden in the ",(0,r.jsx)(n.code,{children:"DESIGN"})," statement."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"rexpr"})}),"\n",(0,r.jsxs)(n.p,{children:["A string literal that describes the regular expression. Rules are similar to the rules ",(0,r.jsx)(n.a,{href:"http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html",children:"accepted in Java"})," ."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"message"})}),"\n",(0,r.jsx)(n.p,{children:"String literal describing the message that will be shown to the user if they enter a value that does not match the regular expression. If not specified, a default message will be displayed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ECHO"})}),"\n",(0,r.jsxs)(n.p,{children:["A keyword that causes asterisk ",(0,r.jsx)(n.code,{children:"*"})," characters to be displayed instead of a property value. Used, for example, for passwords. Can be overridden in the ",(0,r.jsx)(n.code,{children:"DESIGN"})," statement."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CHANGEKEY key [SHOW | HIDE]"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifies a ",(0,r.jsx)(n.a,{href:"/v4/Form_events#keyboard",children:"key combination"})," which triggers editing of this property. Sets the value for the default design and can be overridden in the ",(0,r.jsx)(n.code,{children:"DESIGN"})," statement."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"key"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/v4/Literals#strliteral",children:"String literal"})," describing the key combination. The method of specifying is similar to the method of specifying a parameter in the Java class method ",(0,r.jsx)(n.a,{href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)",children:"Keystroke.getKeystroke (String)"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"SHOW"})}),"\n",(0,r.jsx)(n.p,{children:"Keyword. When specified, the key combination will be displayed in the property caption. Used by default."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"HIDE"})}),"\n",(0,r.jsx)(n.p,{children:"Keyword. When specified, the key combination will not be displayed in the property caption."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DEFAULTCOMPARE [compare]"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifies a ",(0,r.jsx)(n.a,{href:"/v4/Interactive_view#userfilters",children:"default filter"})," type for the property."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"compare"})}),"\n",(0,r.jsxs)(n.p,{children:["Default filter type. ",(0,r.jsx)(n.a,{href:"/v4/Literals#strliteral",children:"String literal"}),". Can be one the following values: ",(0,r.jsx)(n.code,{children:"="}),", ",(0,r.jsx)(n.code,{children:">"}),", ",(0,r.jsx)(n.code,{children:"<"}),", ",(0,r.jsx)(n.code,{children:">="}),", ",(0,r.jsx)(n.code,{children:"<="}),", ",(0,r.jsx)(n.code,{children:"!="}),", ",(0,r.jsx)(n.code,{children:"START_WITH"}),", ",(0,r.jsx)(n.code,{children:"CONTAINS"}),", ",(0,r.jsx)(n.code,{children:"ENDS_WITH"}),", ",(0,r.jsx)(n.code,{children:"LIKE"}),". The default value is ",(0,r.jsx)(n.code,{children:"="})," for all data types except case-insensitive string types, for which the default value is ",(0,r.jsx)(n.code,{children:"CONTAINS"}),". If ",(0,r.jsx)(n.code,{children:"System.defaultCompareForStringContains"})," is enabled, default value is ",(0,r.jsx)(n.code,{children:"CONTAINS"})," for all string data regardless of case sensitivity. Can be overridden in the ",(0,r.jsx)(n.code,{children:"DESIGN"})," statement."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"// property defined by the context-independent DATA property operator\r\ncost 'Cost' (i) = DATA NUMERIC[12,3] (Item);\r\n\r\n// property defined by expression\r\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;\r\n\r\n// the caption of this property will be 'diff' and the parameters will be (a, b)\r\ndiff = a - b;\r\n\r\n// property defined by DATA operator with additional property options\r\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; \n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var r=i(96540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);