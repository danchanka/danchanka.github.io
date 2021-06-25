(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[5980],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=i,u=m["".concat(p,".").concat(h)]||m[h]||d[h]||a;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41630:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={title:"In a print view (PRINT)"},s=void 0,p={unversionedId:"In_a_print_view_PRINT",id:"version-v4/In_a_print_view_PRINT",isDocsHomePage:!1,title:"In a print view (PRINT)",description:"This operator creates an action that opens a form in the print view.",source:"@site/versioned_docs/version-v4/In_a_print_view_PRINT.md",sourceDirName:".",slug:"/In_a_print_view_PRINT",permalink:"/In_a_print_view_PRINT",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/In_a_print_view_PRINT.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"In a print view (PRINT)"},sidebar:"version-v4/learn",previous:{title:"In an interactive view (SHOW, DIALOG)",permalink:"/In_an_interactive_view_SHOW_DIALOG"},next:{title:"In a structured view (EXPORT, IMPORT)",permalink:"/In_a_structured_view_EXPORT_IMPORT"}},l=[{value:"Format",id:"format",children:[]},{value:"Interactive print view",id:"interactive",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This operator creates an action that ",(0,a.kt)("a",{parentName:"p",href:"/Open_form"},"opens a form")," in the ",(0,a.kt)("a",{parentName:"p",href:"/Print_view"},"print")," view."),(0,a.kt)("h3",{id:"format"},"Format"),(0,a.kt)("p",null,"In this operator, you can specify the format that form data will be converted to before being shown to the user:  ",(0,a.kt)("strong",{parentName:"p"},"DOC"),", ",(0,a.kt)("strong",{parentName:"p"},"DOCX"),", ",(0,a.kt)("strong",{parentName:"p"},"XLS"),", ",(0,a.kt)("strong",{parentName:"p"},"XLSX"),", ",(0,a.kt)("strong",{parentName:"p"},"PDF"),", ",(0,a.kt)("strong",{parentName:"p"},"HTML"),", ",(0,a.kt)("strong",{parentName:"p"},"RTF"),"."),(0,a.kt)("p",null,"By default, if the format is specified in the print view, when the client receives a file in a specified format, it attempts to open this file using standard OS means (that is, using the program associated with the specified format). If necessary, however, in addition to the format, you can specify a property that will contain a file with the generated report. In this case, no data will be sent to the client and all data processing will be done exclusively on the server."),(0,a.kt)("h3",{id:"interactive"},"Interactive print view"),(0,a.kt)("p",null,"Apart from the export in a specified format, the print view allows to display information to the user in the following ",(0,a.kt)("em",{parentName:"p"},"interactive")," modes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PREVIEW")," - the form on the client side will be shown in a new preview window, so that the user can decide on the format to export this form to or send it to the printer. This mode is used by default if other modes/formats are not defined."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOPREVIEW")," - the form will be automatically sent to the printer. In this and the previous modes, you can specify a property that will be used for to determine the printer that will be used to print the form (if you don't do it, the default printer will be used)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MESSAGE")," - the form will be shown as a message. In this case, it is assumed that the form consists of a single object group. Accordingly, the shown message consists of a header with all the properties having an ",(0,a.kt)("a",{parentName:"li",href:"/Static_view#empty"},"empty")," ",(0,a.kt)("a",{parentName:"li",href:"/Form_structure#drawgroup"},"display group"),", and a table in which rows are object collections of this only object group and columns are properties that are not displayed in the header (i.e. for which the display group exists and is equal to the only object group of the form being opened). The operator working in this mode is essentially a generalization of the ",(0,a.kt)("a",{parentName:"li",href:"/Show_message_MESSAGE_ASK"},"message display")," operator. It is worth noting that this operator mode is used in ",(0,a.kt)("a",{parentName:"li",href:"/Constraints"},"constraints")," (when the user is shown objects for which a constraint was violated).")),(0,a.kt)("p",null,"Similarly to the ",(0,a.kt)("a",{parentName:"p",href:"/In_an_interactive_view_SHOW_DIALOG"},"interactive view"),", the interactive modes of the print view enable the developer to set options for  ",(0,a.kt)("a",{parentName:"p",href:"/In_an_interactive_view_SHOW_DIALOG#flow"},"flow management")," and ",(0,a.kt)("a",{parentName:"p",href:"/In_an_interactive_view_SHOW_DIALOG#location"},"form location")," (their behavior is identical to the corresponding options in the form opening operator in the interactive view)."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u0421urrent implementation: in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MESSAGE"),' mode, the form is always shown as a window (the "asynchronous window" option is not supported in this case); in the asynchronous ',(0,a.kt)("inlineCode",{parentName:"p"},"PREVIEW")," mode the form is always shown as a tab; in the synchronous ",(0,a.kt)("inlineCode",{parentName:"p"},"PREVIEW")," mode - as a window. The ",(0,a.kt)("inlineCode",{parentName:"p"},"NOPREVIEW")," mode is always asynchronous and the form location in it does not make sense (since no forms are shown to the user directly)"))),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To open the form in the print view, ",(0,a.kt)("a",{parentName:"p",href:"/PRINT_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"PRINT")," operator")," is used."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM printOrder\n    OBJECTS o = Order\n    PROPERTIES(o) currency, customer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) idSku, price\n    FILTERS order(d) == o\n;\n\nprint (Order o)  {\n    PRINT printOrder OBJECTS o = o; // printing\n\n    LOCAL file = FILE ();\n    PRINT printOrder OBJECTS o = o DOCX TO file;\n    open(file());\n\n    //v 2.0-2.1 syntax\n    LOCAL sheetName = STRING[255]();\n    sheetName() <- 'encrypted';\n    PRINT printOrder OBJECTS o = o XLS SHEET sheetName PASSWORD 'pass';\n\n    //v 2.2 syntax\n    //PRINT printOrder OBJECTS o = o XLS SHEET 'encrypted' PASSWORD 'pass';\n}\n")))}d.isMDXComponent=!0}}]);