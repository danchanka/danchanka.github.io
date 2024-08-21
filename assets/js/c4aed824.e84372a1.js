"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[95226],{77477:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453);const r={title:"NAVIGATOR statement"},a=void 0,l={id:"NAVIGATOR_statement",title:"NAVIGATOR statement",description:"The NAVIGATOR statement - managing and configuring the navigator.",source:"@site/docs/NAVIGATOR_statement.md",sourceDirName:".",slug:"/NAVIGATOR_statement",permalink:"/NAVIGATOR_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/NAVIGATOR_statement.md",tags:[],version:"current",lastUpdatedAt:1720076639e3,frontMatter:{title:"NAVIGATOR statement"},sidebar:"learn",previous:{title:"DESIGN statement",permalink:"/DESIGN_statement"},next:{title:"WINDOW statement",permalink:"/WINDOW_statement"}},o={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Options",id:"options",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"NAVIGATOR"})," statement - managing and configuring the ",(0,i.jsx)(n.a,{href:"/Navigator",children:"navigator"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(n.p,{children:["The syntax consists of nested blocks of ",(0,i.jsx)(n.em,{children:"navigator statements"}),". The outer statement block is described after the keyword ",(0,i.jsx)(n.code,{children:"NAVIGATOR"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"NAVIGATOR {\r\n    navigatorStatement1 \r\n    ...\r\n    navigatorStatementN\r\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.code,{children:"navigatorStatement"})," describes a single navigator statement, and at the end it may contain a nested block of navigator statements. There are three types of navigator statements:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"NEW elementDescription [options] [{ ... }];\r\nMOVE name [caption] [options] [{ ... }];\r\nname [caption] [options] [{ ... }];\n"})}),"\n",(0,i.jsxs)(n.p,{children:["where ",(0,i.jsx)(n.code,{children:"elementDescription"})," in the ",(0,i.jsx)(n.code,{children:"NEW"})," statement describes the type of element to be created, and can be in one of three types:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"FOLDER name [caption] \r\nFORM [[name] [caption] =] formName\r\nACTION [[name] [caption] =] actionName\r\n[[name] [caption] =] formElseActionName\n"})}),"\n",(0,i.jsx)(n.p,{children:"A navigator statement must end with a semicolon if it does not contain a nested block of additional statements."}),"\n",(0,i.jsxs)(n.p,{children:["Navigator element options (",(0,i.jsx)(n.code,{children:"options"}),") can be listed one after the other in arbitrary order. The following set of options is supported:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"WINDOW windowName [PARENT]\r\ninsertPosition\r\nimageSetting\r\nCLASS classExpr\r\nHEADER headerExpr\n"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"NAVIGATOR"})," statement allows to modify the navigator. Each navigator statement block enclosed in braces allows to change the descendants of a particular ",(0,i.jsx)(n.a,{href:"/Navigator",children:"navigator element"}),", which we will call the ",(0,i.jsx)(n.em,{children:"current element"}),". In the outer block that follows the ",(0,i.jsx)(n.code,{children:"NAVIGATOR"})," keyword, the current element is the root system folder ",(0,i.jsx)(n.code,{children:"System.root"}),". There are three types of navigator statements:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"create statement"})," (",(0,i.jsx)(n.code,{children:"NEW"}),") allows to create a new navigator element, making it a child of the current element. The created navigator elements can be of three types: folder, form element, and action element. The type of element to be created is specified by the keywords ",(0,i.jsx)(n.code,{children:"FOLDER"}),", ",(0,i.jsx)(n.code,{children:"FORM"}),", and ",(0,i.jsx)(n.code,{children:"ACTION"}),". If the type is not specified, a form with the given name is searched first. If no form is found, the action is searched. The navigator statement block contained in this statement (if any) describes the descendants of the element being created."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"move statement"})," (",(0,i.jsx)(n.code,{children:"MOVE"}),") allows to move an existing element to the current navigator element, making it a child element. Prior to this, the navigator element being moved is deleted from its previous location. The navigator statement block contained in this statement describes the descendants of the element being added."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"modify statement"})," allows to change the specified navigator element, which must be a descendant (not necessarily a child) of the current element. The navigator statement block contained in this statement describes the descendants of the specified element."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The move and modify statements allow to change the caption and options of a navigator item."}),"\n",(0,i.jsxs)(n.p,{children:["The hierarchy described within a single ",(0,i.jsx)(n.code,{children:"NAVIGATOR"})," statement can have an arbitrary nesting level and describe any number of elements at each level."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"name"})}),"\n",(0,i.jsxs)(n.p,{children:["Navigator element name. In the create statement, it is ",(0,i.jsx)(n.a,{href:"/IDs#id",children:"a simple ID"})," and must be unique within the current ",(0,i.jsx)(n.a,{href:"/Naming#namespace",children:"namespace"}),", while in the rest of the statements it is a ",(0,i.jsx)(n.a,{href:"/IDs#cid",children:"composite ID"}),". The name does not have to be specified when creating a form element or action element. Here the form name or action name is used as the element name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"caption"})}),"\n",(0,i.jsxs)(n.p,{children:["Navigator element caption. ",(0,i.jsx)(n.a,{href:"/Literals#strliteral",children:"String literal"}),". In the create statement, if the caption is not specified, the caption will be the name of the created element. In the rest of the statements it modifies the existing caption."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"actionName"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/IDs#propertyid",children:"action ID"})," for which the navigator element will be created. The action must not take any parameters."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"formName"})}),"\n",(0,i.jsx)(n.p,{children:"The form name for which the navigator element will be created. Composite ID."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"formElseActionName"})}),"\n",(0,i.jsx)(n.p,{children:"The form name or action ID for which the navigator element will be created. The platform will first attempt to find a form with that name, and if that fails, it will search for an action with that ID. The action must not take any parameters."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"WINDOW windowName [PARENT]"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying the ",(0,i.jsx)(n.a,{href:"/Navigator_design",children:"window"})," in which the descendants of this navigator element will be displayed (unless another window is specified for them), and the element itself, if the keyword ",(0,i.jsx)(n.code,{children:"PARENT"})," is specified."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"windowName"})}),"\n",(0,i.jsx)(n.p,{children:"Window name. Composite ID."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"PARENT"})}),"\n",(0,i.jsx)(n.p,{children:"Keyword indicating that the current element will also be displayed in the specified window."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"insertPosition"})}),"\n",(0,i.jsx)(n.p,{children:"Specifying the insertion position of the navigator element. It can be specified in one of the following ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BEFORE elementName"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"AFTER elementName"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying that the element must be added or moved just before (keyword ",(0,i.jsx)(n.code,{children:"BEFORE"}),") or after (keyword ",(0,i.jsx)(n.code,{children:"AFTER"}),") the specified navigator element. The specified element must be a child of the current element."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"elementName"})}),"\n",(0,i.jsx)(n.p,{children:"Navigator element name. Composite ID."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"FIRST"})}),"\n",(0,i.jsx)(n.p,{children:"Keyword indicating that the navigator element should be added or moved to the beginning of the list of child elements of the current element."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"LAST"})}),"\n",(0,i.jsxs)(n.p,{children:["Keyword indicating that the navigator element should be added or moved to the end of the list of child elements of the current element. Unlike default addition, elements inserted using ",(0,i.jsx)(n.code,{children:"LAST"})," will always be positioned after all elements added in the order of insertion."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DEFAULT"})}),"\n",(0,i.jsx)(n.p,{children:"Keyword indicating that the navigator element should be added or moved in the order of insertion to the list of child elements of the current element. This is the default value."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If the option is specified in the modify statement, then the element itself must also be a direct child of the current element. Otherwise, the ",(0,i.jsx)(n.code,{children:"MOVE"})," statement should be used."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"imageSetting"})}),"\n",(0,i.jsxs)(n.p,{children:["Configuring the display of the navigator element's icon. By default, the icon or its absence is controlled by the ",(0,i.jsx)(n.a,{href:"/Working_parameters",children:"parameters"})," ",(0,i.jsx)(n.code,{children:"settings.defaultNavigatorImageRankingThreshold"}),", ",(0,i.jsx)(n.code,{children:"settings.defaultNavigatorImage"})," and others. This option allows you to manually configure the icon display. It can have one of two forms:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"IMAGE [fileExpr]"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying the relative path to the image file that will be displayed as the navigator element's icon. If ",(0,i.jsx)(n.code,{children:"fileExpr"})," is not specified, the default icon display mode is activated."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"fileExpr"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Expression",children:"Expression"})," whose value specifies the path to the image file. The path is specified relative to the ",(0,i.jsx)(n.code,{children:"images"})," directory."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"NOIMAGE"})}),"\n",(0,i.jsx)(n.p,{children:"Keyword indicating that the navigator element should have no icon."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"CLASS cssClassExpr"})}),"\n",(0,i.jsx)(n.p,{children:"Specifying the name of the CSS class for the DOM element created for the navigator element component in HTML. This can be used to apply custom styles."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"cssClassExpr"})}),"\n",(0,i.jsx)(n.p,{children:"Expression, whose value determines the class name."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"HEADER headerExpr"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying a property that determines the dynamic header of the navigator element. If the return value of this property is ",(0,i.jsx)(n.code,{children:"NULL"}),", the title of the navigator element will be automatically hidden."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"headerExpr"})}),"\n",(0,i.jsx)(n.p,{children:"Expression whose value determines the dynamic header of the navigator element."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"FORM items;\r\nFORM stocks;\r\nFORM legalEntities;\r\nFORM shipments;\r\nhello()  { MESSAGE 'Hello world'; }\r\nhi()  { MESSAGE 'Hi'; }\r\n\r\nNAVIGATOR {\r\n    // creating a new navigator folder and making all its descendants appear in a window with a vertical toolbar\r\n    NEW FOLDER catalogs 'Directories' WINDOW toolbar { \r\n        // creating a form element for the items form in the folder, the default element name is the form name\r\n        NEW items; \r\n    }\r\n    catalogs {  // navigator element editing statement\r\n        // creating a stocksNavigator form element for the stocks form and adding the last element\r\n        // to the catalogs folder\r\n        NEW FORM stocksNavigator 'Warehouses' = stocks; \r\n        // creating a form element named legalEntities in the catalogs folder right after the items element\r\n        NEW legalEntities AFTER items; \r\n        NEW shipments;\r\n    }\r\n    // creating another folder, the elements of which will also be displayed in a window with a vertical toolbar\r\n    NEW FOLDER documents 'Documents' WINDOW toolbar { \r\n        // the folders themselves will be displayed in the root window, and when the user selects one of them\r\n        // in a window with a vertical toolbar the descendants of this particular folder will be shown\r\n        NEW ACTION hi;   // creating an action element\r\n        NEW ACTION h=hello;   // creating an action element\r\n        // the statement to move the shipments element from the catalogs folder to the document folder\r\n        // before the hello element\r\n        MOVE shipments BEFORE h; \r\n    }\r\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);