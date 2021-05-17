(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[3951],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||p;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15211:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var n=r(22122),a=r(19756),p=(r(67294),r(3905)),i={title:"Property options"},o={unversionedId:"Property_options",id:"Property_options",isDocsHomePage:!1,title:"Property options",description:"When a property is declared in the = instruction a set of property options can be specified at the end of the declaration",source:"@site/docs/Property_options.md",sourceDirName:".",slug:"/Property_options",permalink:"/next/Property_options",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Property_options.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Property options"},sidebar:"learn",previous:{title:"Comparison operators",permalink:"/next/Comparison_operators"},next:{title:"ACTION instruction",permalink:"/next/ACTION_instruction"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description and parameters",id:"description-and-parameters",children:[]},{value:"<em>Interactive view block</em>",id:"interactive-view-block",children:[]},{value:"<em>DESIGN instruction default values block</em>",id:"design-instruction-default-values-block",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"When a ",(0,p.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," is declared in the ",(0,p.kt)("a",{parentName:"p",href:"/next/Instruction_="},"= instruction")," a set of ",(0,p.kt)("em",{parentName:"p"},"property options")," can be specified at the end of the declaration\xa0"),(0,p.kt)("h3",{id:"syntax"},"Syntax"),(0,p.kt)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"propertyOption1 ... propertyOptionN\n")),(0,p.kt)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"IN groupName\nviewType\nON eventType { actionOperator }\nCHANGEKEY key [SHOW | HIDE]\nMATERIALIZED\nTABLE tableName\nINDEXED\nNONULL [DELETE] eventClause\nAUTOSET\nCHARWIDTH width [FLEX | NOFLEX]\nREGEXP rexpr [message] \nECHO\nDEFAULTCOMPARE [compare]\n")),(0,p.kt)("h3",{id:"description-and-parameters"},"Description and parameters"),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"IN groupName")),(0,p.kt)("p",null,"Specifying the ",(0,p.kt)("a",{parentName:"p",href:"/next/Groups_of_properties_and_actions"},"group of properties and actions")," to which the property belongs. If the option is not specified, then the property will belong by default to the group ",(0,p.kt)("strong",{parentName:"p"},"System.private"),"."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"groupName -")," group name. ",(0,p.kt)("a",{parentName:"p",href:"/next/IDs#cid-broken"},"Compound ID"),"."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"MATERIALIZED")),(0,p.kt)("p",null,"Keyword marking the property as ",(0,p.kt)("a",{parentName:"p",href:"/next/Materializations"},"materialized"),". These properties will be stored in the database's ",(0,p.kt)("a",{parentName:"p",href:"/next/Tables"},"table")," fields."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"TABLE tableName")),(0,p.kt)("p",null,"Specifies the ",(0,p.kt)("a",{parentName:"p",href:"/next/Tables"},"table"),' where the property will be stored. The number of table keys must be equal to the number of property arguments, and the argument classes must match the table key classes. If no table is specified, the property will automatically be placed in the "nearest" existing table in the system.'),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"tableName")," - table name. Composite ID.\xa0"),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"INDEXED")),(0,p.kt)("p",null,"Keyword. If specified, an ",(0,p.kt)("a",{parentName:"p",href:"/next/Indexes"},"index")," by this property is created. Similar to using the ",(0,p.kt)("a",{parentName:"p",href:"/next/INDEX_instruction"},(0,p.kt)("strong",{parentName:"a"},"INDEX")," instruction"),".\xa0**\xa0**"),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"NONULL\xa0","[","DELETE","]"," eventClause")),(0,p.kt)("p",null,"Adds a ",(0,p.kt)("a",{parentName:"p",href:"/next/Simple_constraints"},"definiteness")," constraint. If this constraint is violated as a result of some changes for some objects, either the corresponding message will be displayed, or, if ",(0,p.kt)("strong",{parentName:"p"},"DELETE")," is specified, such objects will be deleted."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"DELETE")),(0,p.kt)("p",null,"Keyword that, if specified, then when the property becomes ",(0,p.kt)("strong",{parentName:"p"},"NULL"),", objects that are property arguments will be deleted."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"eventClause")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/next/Event_description_block"},"Event type description block"),". Describes the event by which the property will be checked for ",(0,p.kt)("strong",{parentName:"p"},"NULL"),"."),(0,p.kt)("h3",{id:"interactive-view-block"},(0,p.kt)("em",{parentName:"h3"},"Interactive view block")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"viewType")),(0,p.kt)("p",null,"Specifying the type of ",(0,p.kt)("a",{parentName:"p",href:"/next/Interactive_view#property"},"property view")," when added to the form."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"GRID"),"\xa0- table column"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"TOOLBAR"),"\xa0- toolbar"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"PANEL"),"\xa0- panel")),(0,p.kt)("p",null,"It is similar to specifying the viewType option in the ",(0,p.kt)("a",{parentName:"p",href:"/next/Properties_and_actions_block"},"property block")," of the ",(0,p.kt)("a",{parentName:"p",href:"/next/FORM_instruction"},(0,p.kt)("strong",{parentName:"a"},"FORM"),"instruction"),". Thus, if this option is not specified either in the property options or in the property block directly on the form, the ",(0,p.kt)("a",{parentName:"p",href:"/next/Interactive_view#defaultPropertyView-broken"},"default view")," of the property display group on the form is used."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"ON eventType { actionOperator\xa0}")),(0,p.kt)("p",null,"Specifying an action that will be the default handler of a certain\xa0",(0,p.kt)("a",{parentName:"p",href:"/next/Form_events"},"form event"),"\xa0for all the interactive views of this property. Can be overridden in the property block of the ",(0,p.kt)("strong",{parentName:"p"},"FORM"),"instruction."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"eventType")),(0,p.kt)("p",null,"Type of form event. Specified by one of the following options:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"CHANGE")," - occurs when the user tries to change the value of a property."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"CHANGEWYS")," -**\xa0**occurs\xa0when the user tries to change the value of the specified property using a special input mechanism.\xa0"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"GROUPCHANGE")," - occurs when the user tries to change the property value for all objects in the table (group editing). \xa0"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"EDIT")," - occurs when the user tries to edit the object that is the value of the specified property.\xa0"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"CONTEXTMENU\xa0"),"[","caption","]","\xa0- the user has selected the specified item in the property context menu on the form.\xa0If necessary, you can also define the caption of this menu item (",(0,p.kt)("a",{parentName:"li",href:"/next/Literals#strliteral-broken"},"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption.")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"actionOperator")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/next/Action_operator#contextdependent"},"Context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."),(0,p.kt)("h3",{id:"design-instruction-default-values-block"},(0,p.kt)("em",{parentName:"h3"},"DESIGN instruction default values block")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"CHARWIDTH\xa0width\xa0"),"[","FLEX | NOFLEX","]"),(0,p.kt)("p",null,"Specifying the ",(0,p.kt)("a",{parentName:"p",href:"/next/Form_design#valueWidth-broken"},"number of characters"),"\xa0of the property value that should be visible to the user.\xa0Sets the value for the default design\xa0; can be overridden in\xa0a ",(0,p.kt)("strong",{parentName:"p"},"DESIGN")," instruction."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"width")),(0,p.kt)("p",null,"Number of characters.\xa0Integer literal.\xa0"),(0,p.kt)("p",null,"*",(0,p.kt)("em",{parentName:"p"},"FLEX"),"  "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"})),(0,p.kt)("p",null,"Keyword. If specified, the extension coefficient of the property value is automatically set equal to its base size."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"NOFLEX")),(0,p.kt)("p",null,"Keyword. If specified, the extension coefficient of the property value is automatically set equal to zero."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"REGEXP rexpr\xa0","[","message","]")),(0,p.kt)("p",null,"Specifying a regular expression to which the property value should correspond after editing. Sets the value for the default design and can be overridden in the ",(0,p.kt)("strong",{parentName:"p"},"DESIGN")," instruction."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"rexpr")),(0,p.kt)("p",null,"A string literal that describes the regular expression. Rules are similar to the rules ",(0,p.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html"},"accepted in Java")," ."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"message")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"S"),"tring literal describing the message that will be shown to the user if they enter a value that does not match the regular expression. If not specified, a default message will be displayed."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"ECHO")),(0,p.kt)("p",null,"A keyword that causes asterisk (","*",") characters to be displayed instead of a property value.\xa0Used, for example, for passwords. Can be overridden in the ",(0,p.kt)("strong",{parentName:"p"},"DESIGN")," instruction.\xa0"),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"CHANGEKEY key ","[","SHOW\xa0|\xa0HIDE","]","\xa0")),(0,p.kt)("p",null,"Specifies a\xa0",(0,p.kt)("a",{parentName:"p",href:"/next/Form_events#keyboard-broken"},"key combination")," which triggers editing of this property. Sets the value for the default design and can be overridden in the ",(0,p.kt)("strong",{parentName:"p"},"DESIGN")," instruction."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"key")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/next/Literals#strliteral-broken"},"String literal")," describing the key combination ",(0,p.kt)("em",{parentName:"p"},".\xa0")," The method of specifying is similar to the method of specifying a parameter in the Java class\xa0method ",(0,p.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"},"Keystroke.getKeystroke (String)"),"."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"SHOW")),(0,p.kt)("p",null,"Keyword. When specified, the key combination will be displayed in the property caption. Used by default."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"HIDE")),(0,p.kt)("p",null,"Keyword. When specified, the key combination will not be displayed in the property caption.\xa0"),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"DEFAULTCOMPARE")),(0,p.kt)("p",null,"Specifies a ",(0,p.kt)("a",{parentName:"p",href:"/next/Interactive_view#userfilters"},"default filter")," type for the property."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"compare")),(0,p.kt)("p",null,"Default filter type. ",(0,p.kt)("a",{parentName:"p",href:"/next/Literals#strliteral-broken"},"String literal"),". Can be one the following values: '=', '",">","', '<', '",">","=',\xa0'<=',\xa0'!=', 'START","_","WITH', 'CONTAINS', 'ENDS","_","WITH', 'LIKE'. The default value is '=' **\xa0",(0,p.kt)("strong",{parentName:"p"}," for all data types except case-insensitive string types, for which the default value is 'CONTAINS'"),".\xa0",(0,p.kt)("strong",{parentName:"p"}," If "),"System.defaultCompareForStringContains\xa0",(0,p.kt)("strong",{parentName:"p"}," is enabled,\xa0default value is 'CONTAINS'"),"\xa0",(0,p.kt)("strong",{parentName:"p"},"for all string data regardless of case sensitivity.\xa0Can be overridden in the "),"DESIGN** instruction."),(0,p.kt)("h3",{id:"examples"},"Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-lsf"},"cost 'Cost' (i) = DATA NUMERIC[12,3] (Item);        // property defined by the context-independent DATA property operator\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;       // property defined by expression\ndiff = a - b;                                           // the caption of this property will be 'diff' and the parameters will be (a, b)\n\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; // property defined by DATA operator with additional property options\n")))}c.isMDXComponent=!0}}]);