"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[77008],{91862:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=r(74848),n=r(28453);const i={title:"Launch parameters"},c=void 0,d={id:"Launch_parameters",title:"Launch parameters",description:"Application server (Server)",source:"@site/docs/Launch_parameters.md",sourceDirName:".",slug:"/Launch_parameters",permalink:"/Launch_parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Launch_parameters.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"Launch parameters"},sidebar:"learn",previous:{title:"System parameters",permalink:"/System_parameters"},next:{title:"Launch events",permalink:"/Launch_events"}},a={},l=[{value:"Application server (Server)",id:"application-server-server",level:2},{value:"Java",id:"appjava",level:3},{value:"lsFusion",id:"applsfusion",level:3},{value:"Example conf/settings.properties file (section 3):",id:"filesettings",level:3},{value:"Web server (Client)",id:"web-server-client",level:2},{value:"Java",id:"webjava",level:3},{value:"lsFusion",id:"weblsfusion",level:3},{value:"Example Tomcat configuration file (section 3 in context parameters):",id:"filewebsettings",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"application-server-server",children:"Application server (Server)"}),"\n",(0,t.jsx)(s.h3,{id:"appjava",children:"Java"}),"\n",(0,t.jsxs)(s.p,{children:["Java application server startup parameters are set in the launch command (for example, for ",(0,t.jsx)(s.a,{href:"/Execution_manual#command",children:"manual"})," or ",(0,t.jsx)(s.a,{href:"/Execution_auto#settings",children:"automatic"})," installation):"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["System (starting with ",(0,t.jsx)(s.code,{children:"X"}),")"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.oracle.com/technetwork/java/javase/tech/vmoptions-jsp-140102.html",children:"Standard"})}),(0,t.jsx)(s.td,{}),(0,t.jsxs)(s.td,{children:["Standard Java parameters. It is important above all to pay attention to:",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"cp"})," - classpath, the paths in which java looks for class files and other resources (including lsFusion modules). The default is ",(0,t.jsx)(s.code,{children:"."})," - current folder (different for ",(0,t.jsx)(s.a,{href:"/Execution_auto",children:"automatic installation"}),")."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"Xmx"})," - maximum memory size. The default value is determined depending on the configuration of the computer on which the application server is running. For complex logics, it is recommended that you allocate at least 4GB. "]})]})]}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"-XX:CMSInitiatingOccupancyFraction"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"int"})}),(0,t.jsxs)(s.td,{children:["In general, this is the standard parameter responsible for the threshold after which the CMS garbage collector is turned on. At the same time, the platform uses this parameter to target the memory usage amount using LRU caches (setting more aggressive parameters for cleaning them if this goal is exceeded, and less aggressive in the opposite case). For heavily loaded servers, it is recommended that you set it in the range from ",(0,t.jsx)(s.code,{children:"40"})," to ",(0,t.jsx)(s.code,{children:"60"}),"."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"70"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["Custom (starting with ",(0,t.jsx)(s.code,{children:"D"}),")"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"-Dlsfusion.server.lightstart"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"boolean"})}),(0,t.jsxs)(s.td,{children:['"Light" start mode (usually used during development). In this mode, the server does not perform metadata synchronization operations or create ',(0,t.jsx)(s.a,{href:"/Security_policy",children:"security policy"})," settings forms, etc., and the startup time and the amount of memory consumed at startup are therefore reduced.",(0,t.jsx)("br",{}),"In the ",(0,t.jsx)(s.a,{href:"/IDE",children:"IDE"})," it is set with a checkmark in ",(0,t.jsx)(s.a,{href:"/IDE#configuration",children:"lsFusion server configuration"})," (enabled by default)."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"false"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("a",{className:"lsdoc-anchor",id:"devmode"}),(0,t.jsx)(s.code,{children:"-Dlsfusion.server.devmode"})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"boolean"})}),(0,t.jsxs)(s.td,{children:["Development mode. In this mode:",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"System tasks are not launched (so as not to interfere with the debugger)"}),(0,t.jsxs)("li",{children:["You can edit ",(0,t.jsx)(s.a,{href:"/Report_design",children:"report design"})," in ",(0,t.jsx)(s.a,{href:"/In_a_print_view_PRINT#interactive",children:"interactive print"})," view"]}),(0,t.jsxs)("li",{children:["Anonymous access to the API and UI is enabled (",(0,t.jsx)(s.a,{href:"/Working_parameters",children:"system parameters"})," enableAPI, enableUI). In addition, anonymous access in this mode is as an admin and not an anonymous user"]}),(0,t.jsx)("li",{children:"Client is automatically reconnected when connection is lost"}),(0,t.jsx)("li",{children:"The cache for reading reports from resources is turned off"})]}),"In the ",(0,t.jsx)(s.a,{href:"/IDE",children:"IDE"}),", automatically enabled when running ",(0,t.jsx)(s.a,{href:"/IDE#configuration",children:"lsFusion server configuration"}),"."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"false"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"-Dlsfusion.server.testmode"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"boolean"})}),(0,t.jsxs)(s.td,{children:["Enables some experimental features",(0,t.jsx)("br",{}),"Automatically enabled if assertions are enabled (",(0,t.jsx)(s.code,{children:"-ea"})," option)"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"false"})})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"applsfusion",children:"lsFusion"}),"\n",(0,t.jsx)(s.p,{children:"lsFusion startup parameters for server applications can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["In the resources in the ",(0,t.jsx)(s.code,{children:"lsfusion.xml"})," file in the places where these parameters are used, after: (relevant for platform forks)"]}),"\n",(0,t.jsxs)(s.li,{children:["In ",(0,t.jsx)(s.code,{children:"lsfusion.properties"})," (usually part of a project, which means it acts by default for all installations)"]}),"\n",(0,t.jsxs)(s.li,{children:["In ",(0,t.jsx)(s.code,{children:"conf/settings.properties"})," (for specific installations)"]}),"\n",(0,t.jsxs)(s.li,{children:["In the ",(0,t.jsx)(s.a,{href:"#appjava",children:"Java startup options"})," (starting with ",(0,t.jsx)(s.code,{children:"D"}),", e.g. ",(0,t.jsx)(s.code,{children:"-Dlogics.topModule=FFF"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)("a",{className:"lsdoc-anchor",id:"connectdb"}),(0,t.jsx)(s.code,{children:"db.server"}),", ",(0,t.jsx)(s.code,{children:"db.name"}),", ",(0,t.jsx)(s.code,{children:"db.user"}),", ",(0,t.jsx)(s.code,{children:"db.password"}),", ",(0,t.jsx)(s.code,{children:"db.connectTimeout"})]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"int"})]}),(0,t.jsxs)(s.td,{children:["Database server connection parameters:",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"db.server"})," - the address of the database server (plus, if necessary, the port after a colon, for example ",(0,t.jsx)(s.code,{children:"localhost:6532"}),")"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"db.name"})," - database name"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"db.user"})," - username to connect to the database server"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"db.password"})," - user password to connect to the database server"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"db.connectTimeout"})," - DBMS connection timeout"]})]})]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"localhost"}),", ",(0,t.jsx)(s.code,{children:"lsfusion"}),", ",(0,t.jsx)(s.code,{children:"postgres"}),", , ",(0,t.jsx)(s.code,{children:"1000"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)("a",{className:"lsdoc-anchor",id:"accessapp"}),(0,t.jsx)(s.code,{children:"rmi.port"}),", ",(0,t.jsx)(s.code,{children:"rmi.exportName"}),", ",(0,t.jsx)(s.code,{children:"http.port"})]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"int"}),", ",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"int"})]}),(0,t.jsxs)(s.td,{children:["Access settings for the application server:",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"rmi.port"})," - port for the application server (RMI register / objects exported)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"rmi.exportName"})," - name of the application server (the root RMI object exported by it). It makes sense to use it if you need to export several logics on one port"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"http.port"})," - port for the web server embedded in the application server (used for ",(0,t.jsx)(s.a,{href:"/Access_from_an_external_system",children:"access from external systems"}),")"]})]})]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"7652"}),", ",(0,t.jsx)(s.code,{children:"default"}),", ",(0,t.jsx)(s.code,{children:"7651"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)("a",{className:"lsdoc-anchor",id:"project"}),(0,t.jsx)(s.code,{children:"logics.includePaths"}),", ",(0,t.jsx)(s.code,{children:"logics.excludePaths"}),", ",(0,t.jsx)(s.code,{children:"logics.topModule"}),", ",(0,t.jsx)(s.code,{children:"logics.orderDependencies"})]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"string"})]}),(0,t.jsxs)(s.td,{children:["Parameters of the ",(0,t.jsx)(s.a,{href:"/Projects",children:"project"})," (which modules to load and in what order, detailed description here)"]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"logics.includePaths"})," equals ",(0,t.jsx)(s.code,{children:"*"}),", others blank"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)("a",{className:"lsdoc-anchor",id:"locale"}),(0,t.jsx)(s.code,{children:"user.country"}),", ",(0,t.jsx)(s.code,{children:"user.language"}),", ",(0,t.jsx)(s.code,{children:"user.timezone"}),", ",(0,t.jsx)(s.code,{children:"user.twoDigitYearStart"})," (",(0,t.jsx)(s.code,{children:"user.setCountry"}),", ",(0,t.jsx)(s.code,{children:"user.setLanguage"}),", ",(0,t.jsx)(s.code,{children:"user.setTimezone"}),")"]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"int"})]}),(0,t.jsxs)(s.td,{children:["Standard Java parameters defining ",(0,t.jsx)(s.a,{href:"/Internationalization#locale",children:"locale"})," parameters (regional settings - language, country, etc., detailed description here)",(0,t.jsx)("br",{}),"Due to the peculiarities of Java Spring (namely, locale parameters are considered by Java Spring to be set even if they are not explicitly specified in the start command, that is, settings of these parameters in ",(0,t.jsx)(s.code,{children:".properties"}),' files are ignored), the platform supports "clones" of these parameters that start as set: if they are specified (either in .properties files or in the launch string), they "overload" the native parameters. That is, the priority is OS, ',(0,t.jsx)(s.code,{children:"-Duser.*"}),", ",(0,t.jsx)(s.code,{children:"User.set*"})," in ",(0,t.jsx)(s.code,{children:".properties"})," files and ",(0,t.jsx)(s.code,{children:"-Duser.set*"})," (none of the above applies to ",(0,t.jsx)(s.code,{children:"user.twoDigitYearStart"}),", since it is not a standard Java parameter)"]}),(0,t.jsxs)(s.td,{children:["The first three are determined from the operating system settings, current year minus ",(0,t.jsx)(s.code,{children:"80"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)("a",{className:"lsdoc-anchor",id:"namingpolicy"}),(0,t.jsx)(s.code,{children:"db.namingPolicy"}),", ",(0,t.jsx)(s.code,{children:"db.maxIdLength"})]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"int"})]}),(0,t.jsxs)(s.td,{children:["Parameters of the ",(0,t.jsx)(s.a,{href:"/Tables#name",children:"naming policy"})," for tables and fields:",(0,t.jsx)(s.code,{children:"db.namingPolicy"})," - the name of the java class of the property (full name, with package); in the constructor, it must accept one parameter of type ",(0,t.jsx)(s.code,{children:"int"})," - the maximum size of the name.Builtin policy class names:",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["Complete with signature - ",(0,t.jsx)(s.code,{children:"lsfusion.server.physics.dev.id.name.FullDBNamingPolicy"})]}),(0,t.jsxs)("li",{children:["Complete without signature - ",(0,t.jsx)(s.code,{children:"lsfusion.server.physics.dev.id.name.NamespaceDBNamingPolicy"})]}),(0,t.jsxs)("li",{children:["Brief - ",(0,t.jsx)(s.code,{children:"lsfusion.server.physics.dev.id.name.ShortDBNamingPolicy"})]})]}),(0,t.jsx)(s.code,{children:"db.maxIdLength"})," - maximum size of a table or field name. Passed as the first parameter to the constructor of the java class of the naming policy for tables and fields."]}),(0,t.jsxs)(s.td,{children:["Complete with signature, ",(0,t.jsx)(s.code,{children:"63"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"db.denyDropModules"}),", ",(0,t.jsx)(s.code,{children:"db.denyDropTables"})]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"boolean"}),", ",(0,t.jsx)(s.code,{children:"boolean"})]}),(0,t.jsxs)(s.td,{children:["Ban on deletion at startup:",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"db.denyDropModules"})," - modules"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"db.denyDropTables"})," - tables"]})]})]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"false"}),", ",(0,t.jsx)(s.code,{children:"false"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"logics.initialAdminPassword"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Default admin password"}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsxs)(s.h3,{id:"filesettings",children:["Example conf/settings.properties file (",(0,t.jsx)(s.a,{href:"#applsfusion",children:"section 3"}),"):"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"$FUSION_DIR$/conf/settings.properties"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"db.server=localhost\r\ndb.name=lsfusion\r\ndb.user=postgres\r\ndb.password=pswrd\r\n\r\nrmi.port=7652\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["By default, it is assumed that the startup parameter files ",(0,t.jsx)(s.code,{children:"conf/settings.properties"})," and ",(0,t.jsx)(s.code,{children:"lsfusion.properties"})," are located in the application server's startup folder. However, with ",(0,t.jsx)(s.a,{href:"/Execution_auto",children:"automatic installation"})," under GNU Linux symlinks for these files (as well as for ",(0,t.jsx)(s.a,{href:"/Journals_and_logs#logs",children:"log"})," folders)  are automatically created to ",(0,t.jsx)(s.a,{href:"/Execution_auto#settings",children:"other files"})," whose layout is better aligned with Linux ideology."]})}),"\n",(0,t.jsx)(s.h2,{id:"web-server-client",children:"Web server (Client)"}),"\n",(0,t.jsx)(s.h3,{id:"webjava",children:"Java"}),"\n",(0,t.jsxs)(s.p,{children:["Java web server startup parameters are set in the Tomcat launch command, which, in turn, launches this web server (for example, for ",(0,t.jsx)(s.a,{href:"/Execution_auto#settings",children:"automatic"})," installation)."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["System (starting with ",(0,t.jsx)(s.code,{children:"X"}),")"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.oracle.com/technetwork/java/javase/tech/vmoptions-jsp-140102.html",children:"Standard"})}),(0,t.jsx)(s.td,{}),(0,t.jsxs)(s.td,{children:["Standard Java parameters. It is important above all to pay attention to:",(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"Xmx"})," - maximum memory size. For complex logics, it is recommended that you allocate at least 2GB. "]})})]})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"weblsfusion",children:"lsFusion"}),"\n",(0,t.jsx)(s.p,{children:"lsFusion startup parameters for the web server can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["In web applications' ",(0,t.jsx)(s.a,{href:"http://tomcat.apache.org/tomcat-7.0-doc/config/context.html#Defining_a_context",children:"context"})," parameters:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["in a web application in the file ",(0,t.jsx)(s.code,{children:"/WEB-INF/web.xml"}),", the ",(0,t.jsx)(s.code,{children:"context-param"})," tag (relevant for platform forks)"]}),"\n",(0,t.jsxs)(s.li,{children:["in a web application in the file ",(0,t.jsx)(s.code,{children:"/META-INF/context.xml"}),", ",(0,t.jsx)(s.code,{children:"Context"})," tag, ",(0,t.jsx)(s.code,{children:"Parameter"})," tag (relevant for platform forks)"]}),"\n",(0,t.jsxs)(s.li,{children:["in Tomcat, in the file ",(0,t.jsx)(s.code,{children:"$CATALINA_BASE/conf/[enginename]/[hostname]/[contextpath].xml"}),", tag ",(0,t.jsx)(s.code,{children:"Context"}),", tag ",(0,t.jsx)(s.code,{children:"Parameter"}),", where:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"$CATALINA_BASE$"})," is the folder where Tomcat is installed (for example, with ",(0,t.jsx)(s.a,{href:"/Execution_auto#settings",children:"automatic"})," installation, this folder is ",(0,t.jsx)(s.code,{children:"$INSTALL_DIR/Client"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"[contextpath]"})," - contextual path of the web application (for example, with ",(0,t.jsx)(s.a,{href:"/Execution_auto#settings",children:"automatic"})," installation this name is empty by default, which in Tomcat is equivalent to the name ",(0,t.jsx)(s.code,{children:"ROOT"}),"; with ",(0,t.jsx)(s.a,{href:"/Execution_manual#appservice",children:"manual"})," installation it depends on the name of the war file),"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"[enginename]"})," and ",(0,t.jsx)(s.code,{children:"[hostname]"})," are the names of the tomcat implementation mechanism and the web server computer (for example, with ",(0,t.jsx)(s.a,{href:"/Execution_auto#settings",children:"automatic"})," installation these names are ",(0,t.jsx)(s.code,{children:"catalina"})," and ",(0,t.jsx)(s.code,{children:"localhost"})," respectively)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["in Tomcat, in the file ",(0,t.jsx)(s.code,{children:"$CATALINA_BASE/conf/server.xml"}),", ",(0,t.jsx)(s.code,{children:"Context"})," tag, ",(0,t.jsx)(s.code,{children:"Parameter"})," tag (not recommended)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["In URL parameters (e.g. ",(0,t.jsx)(s.code,{children:"http://tryonline.lsfusion.org?host=3.3.3.3&port=4444"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)("a",{className:"lsdoc-anchor",id:"connectapp"}),(0,t.jsx)(s.code,{children:"host"}),", ",(0,t.jsx)(s.code,{children:"port"}),", ",(0,t.jsx)(s.code,{children:"exportName"})]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"int"}),", ",(0,t.jsx)(s.code,{children:"string"})]}),(0,t.jsxs)(s.td,{children:["Connection settings for the application server. Must match the ",(0,t.jsx)(s.a,{href:"#accessapp",children:"access parameters"})," for the application server.",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"host"})," - application server address"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"port"})," - port of the application server. Must match the parameter ",(0,t.jsx)(s.code,{children:"rmi.port"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"exportName"})," - name of the application server. Must match the parameter ",(0,t.jsx)(s.code,{children:"rmi.exportName"})]})]})]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"localhost"}),", ",(0,t.jsx)(s.code,{children:"7652"}),", ",(0,t.jsx)(s.code,{children:"default"})]})]})})]}),"\n",(0,t.jsxs)(s.h3,{id:"filewebsettings",children:["Example Tomcat configuration file (",(0,t.jsx)(s.a,{href:"#weblsfusion",children:"section 3"})," in context parameters):"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"$CATALINA_BASE/conf/[enginename]/[hostname]/ROOT.xml"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'utf-8\'?>\r\n<Context>\r\n    <Parameter name="host" value="localhost" override="false"/>\r\n    <Parameter name="port" value="7652" override="false"/>\r\n</Context>\n'})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["In addition to the launch parameters, the platform also has ",(0,t.jsx)(s.a,{href:"/Working_parameters",children:"system parameters"})," which are set a little differently and are relevant mainly for processes of various components of the platform (that is, processes that occur after they are launched)."]})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>d});var t=r(96540);const n={},i=t.createContext(n);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);