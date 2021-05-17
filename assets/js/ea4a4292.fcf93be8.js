(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[35633],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,c=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return r?n.createElement(c,i(i({ref:t},m),{},{components:r})):n.createElement(c,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57752:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Structured view"},p={unversionedId:"Structured_view",id:"version-v4/Structured_view",isDocsHomePage:!1,title:"Structured view",description:"All structured views (formats) can be divided into two types:",source:"@site/versioned_docs/version-v4/Structured_view.md",sourceDirName:".",slug:"/Structured_view",permalink:"/Structured_view",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Structured_view.md",version:"v4",lastUpdatedAt:1620995697,formattedLastUpdatedAt:"5/14/2021",frontMatter:{title:"Structured view"},sidebar:"version-v4/learn",previous:{title:"Report design",permalink:"/Report_design"},next:{title:"Open form",permalink:"/Open_form"}},s=[{value:"Export/import name",id:"extid",children:[]},{value:"Hierarchical view",id:"hierarchy",children:[]},{value:"Predefined value",id:"value",children:[]},{value:"XML namespaces",id:"xml-namespaces",children:[]},{value:"Flat view",id:"flat-view",children:[]},{value:"Language",id:"language",children:[]},{value:"Open form",id:"open-form",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All structured views (",(0,o.kt)("em",{parentName:"p"},"formats"),") can be divided into two types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Hierarchical")," (XML, JSON) - single text file; the information for ",(0,o.kt)("a",{parentName:"li",href:"/Form_structure#objects"},"object groups")," is put as a list inside the information for ",(0,o.kt)("a",{parentName:"li",href:"/Static_view#hierarchy"},"parent")," groups."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Flat")," (DBF, CSV, XLS, TABLE) - one table file for each object group, and each object group with more than one level of ",(0,o.kt)("a",{parentName:"li",href:"/Static_view#hierarchy"},"nesting")," should have a column in its table named ",(0,o.kt)("inlineCode",{parentName:"li"},"parent"),' which should contain the "upper" row number in the parent group table.')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Working with flat formats with a hierarchy depth greater than one is not very convenient (because in this case, the developer has to maintain an additional column), therefore, usually flat formats are used only for working with simple forms (with a hierarchy depth less than one). In other cases, hierarchical formats are usually used."))),(0,o.kt)("p",null,"Formats are also divided into:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"human-readable (text) and binary. All hierarchical formats are human-readable, flat can be either binary (DBF, TABLE, XLS), or human-readable (CSV). You can and should specify the encoding for human-readable formats (UTF-8 is used by default)."),(0,o.kt)("li",{parentName:"ul"},"standardized and internal. At the moment, only one internal format is supported: TABLE (a table of values). All the other formats are standardized. Internal format files are processed in a special way in some ",(0,o.kt)("a",{parentName:"li",href:"/Integration"},"integration")," operations (e.g., in ",(0,o.kt)("a",{parentName:"li",href:"/Access_to_an_external_system_EXTERNAL_#table-broken"},"SQL calls"),"). In addition, internal formats can be used to communicate lsFusion systems with each other.")),(0,o.kt)("p",null,"In the current implementation the ",(0,o.kt)("a",{parentName:"p",href:"/Form_structure#groupcolumns-broken"},"group-in-columns")," platforms are ignored in a structured view."),(0,o.kt)("p",null,"When building an object group ",(0,o.kt)("a",{parentName:"p",href:"/Static_view#hierarchy"},"hierarchy")," in a structured view, the object groups that have all their objects ",(0,o.kt)("a",{parentName:"p",href:"/Open_form#params"},"passed")," on the form opening are ignored (as if these object groups did not exist)."),(0,o.kt)("p",null,"If the property ",(0,o.kt)("a",{parentName:"p",href:"/Form_structure#drawgroup"},"display group")," is specified explicitly in a structured view, then this group should not be earlier than the default one (if the specified group appears earlier, then the default display group will be used anyway)."),(0,o.kt)("h3",{id:"extid"},"Export/import name"),(0,o.kt)("p",null,"The name of the property on the form that will be used during export/import can be specified explicitly using the corresponding option (",(0,o.kt)("inlineCode",{parentName:"p"},"EXTID"),"). Unless this is done, the name of the property on the form will be used as the name of the export/import. If it is also not specified, then the name of the property itself will be the name of the export/import (without adding parameter objects to its end, as it is done in the other mechanisms - ",(0,o.kt)("a",{parentName:"p",href:"/Print_view"},"reports"),", customizing interactive view ",(0,o.kt)("a",{parentName:"p",href:"/Form_design"},"design"),", etc.). The export/import names of object groups and property groups are determined similarly."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Because of the grammar nature, the option for specifying import/export name of the form (specifically, its ",(0,o.kt)("a",{parentName:"p",href:"/Static_view#empty"},"empty group")," of objects) is called ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMEXTID")," (not ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTID"),")."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Unlike property names on the form, property export/import names (",(0,o.kt)("inlineCode",{parentName:"p"},"EXTID"),") of different properties can be equal if these properties are located in different nodes of the hierarchy (i.e., different groups of objects/properties). The same applies to export/import names of object groups and property groups."))),(0,o.kt)("h3",{id:"hierarchy"},"Hierarchical view"),(0,o.kt)("p",null,"Before directly proceeding with the form export/import, the platform builds a hierarchy of properties, groups of objects/properties as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The hierarchy of objects/properties groups is built in accordance with the ",(0,o.kt)("a",{parentName:"li",href:"/Static_view"},"hierarchy")," of object groups and property ",(0,o.kt)("a",{parentName:"li",href:"/Form_structure#drawgroup"},"display groups"),": a property display group is considered the parent of this property, the hierarchy of object groups is preserved."),(0,o.kt)("li",{parentName:"ul"},"Then for each ",(0,o.kt)("inlineCode",{parentName:"li"},"X")," object group:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Groups_of_properties_and_actions"},"property groups")," that all ",(0,o.kt)("inlineCode",{parentName:"li"},"X")," descendants belong to are determined, then these property groups and their ancestors are automatically included in the hierarchy. Also:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"property groups become the parents of ",(0,o.kt)("inlineCode",{parentName:"li"},"X")," descendants that belong to those groups"),(0,o.kt)("li",{parentName:"ul"},"the hierarchy of property groups is preserved"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"X")," object group becomes the parent of the uppermost (i.e., that without parents) of the used property groups.")))))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In a hierarchical view, object groups can be included in property groups as well as properties. "))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The described algorithm is very similar to the algorithm for building property containers in the ",(0,o.kt)("a",{parentName:"p",href:"/Form_design#defaultDesign"},"default design")," (with the only difference being that it does not use the hierarchy of object groups). Like in the container building mechanism, the same property group can be included in the hierarchy several times for different groups of objects."))),(0,o.kt)("p",null,"After the hierarchy is built, the form is exported/imported recursively according to the following rules: "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"JSON"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'JSON result ::= \n    { JSON with properties, groups of objects/properties without parents }\n\nJSON with properties, groups of objects/properties ::= \n    JSON of the property 1 | JSON of the property group 1 | JSON of the object group 1\n    JSON of the property 2 | JSON of the property group 2 | JSON of the object group 2\n    ...\n    JSON of the property M | JSON of the property group M | JSON of the object group M\n\nJSON of the property ::=\n    "property name on the form" : property value\n\nJSON of the property group ::=\n    "property group name" : { JSON with child properties, groups of properties/objects }\n\nJSON of the object group ::=\n    "object group name" : [\n        { JSON with child properties, groups of properties/objects 1 }, \n        { JSON with child properties, groups of properties/objects 2 },\n        ... \n        { JSON with child properties, groups of properties/objects N },\n    ]\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"XML"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"XML result ::= \n    <form name> XML with properties, groups of properties/objects without parents </form name>\n\nXML with properties, groups of properties/objects ::= \n    XML of the property 1 | XML of the property group 1 | XML of the object group 1\n    XML of the property 2 | XML of the property group 2 | XML of the object group 2\n    ...\n    XML of the property M | XML of the property group M | XML of the object group M\n\nXML of the property ::= \n    <property name on the form> property value </property name on the form>\n\nXML of the property group ::=\n    <property group name> XML with child properties, groups of properties/objects </property group name>\n\nXML of the object group ::=\n    <object group name> XML with child properties, groups of properties/objects 1 </property group name>\n    <object group name> XML with child properties, groups of properties/objects 2 </property group name>\n    ...\n    <object group name> XML with child properties, groups of properties/objects N </property group name>\n")),(0,o.kt)("p",null,"When exporting/importing to XML, the special ",(0,o.kt)("inlineCode",{parentName:"p"},"ATTR")," option can be specified for a property on the form. Thus, when exporting/importing that property, its value will be stored not in a separate tag, but in the attribute of the parent tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<parent tag ... property name on the form = "property value" ...>\n')),(0,o.kt)("p",null,"When importing from XML, the name of the uppermost tag (in the rule) is ignored (according to the XML specification, there should be only one such tag)."),(0,o.kt)("p",null,"Properties with ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," values, as well as property groups that do not have any tags inside as a result of export, are not exported (ignored)."),(0,o.kt)("h3",{id:"value"},"Predefined value"),(0,o.kt)("p",null,"When importing JSON, if for an object group an array ( ",(0,o.kt)("inlineCode",{parentName:"p"},"[ ]")," ) of values contains not an object ( ",(0,o.kt)("inlineCode",{parentName:"p"},"{ }")," ), but a specific value (for example, a number or a string), then this value is automatically converted to an object ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "value" : value }'),". A similar conversion is performed when exporting an object group to JSON: if the object contains exactly one ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," key (i.e., it has the form ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "value" : value}'),"), then instead of it, the value for this ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),' key is substituted to the resulting JSON. In addition to "ordinary" object groups, the same conversions are also performed for the ',(0,o.kt)("a",{parentName:"p",href:"/Static_view#empty"},"empty")," root object group, i.e., for example JSON ",(0,o.kt)("inlineCode",{parentName:"p"},'["ab","vv"]')," is processed as JSON ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "value" : ["ab","vv"] }'),"."),(0,o.kt)("p",null,"When importing/exporting XML, if the property is named ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),", then the value of this property will be stored not in a separate tag, but inside (in the text) the parent tag (i.e., as if the parent tag itself was a property view). This behavior is usually used if the parent tag has other tags/attributes in it (XML specification allows this)."),(0,o.kt)("p",null,"When importing XML, if the object group is named ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),", then all tags are read (with any name). "),(0,o.kt)("h3",{id:"xml-namespaces"},"XML namespaces"),(0,o.kt)("p",null,"Unlike other formats, XML supports a concept of namespaces for tags and attributes."),(0,o.kt)("p",null,"For example, in ",(0,o.kt)("strong",{parentName:"p"},"lsFusion")," to export a property to a tag with a specified namespace, you must specify the name of this property using a special syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[namespace[=uri]:]name\n")),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"h:table")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"h=http://www.w3.org/TR/html4:table"),". The namespace name may be empty if necessary. If no URI is specified for the namespace, it is inherited from the namespace with the same name of the parent tags. If there are no namespaces with that name in the parent tags, URI is automatically considered equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://www.w3.org/<name of the namespace>"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is not possible to specify the property name described above (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"h:table"),") in the lsFusion syntax (since the name cannot contain a colon), therefore, to specify such an export name, you should use the ",(0,o.kt)("a",{parentName:"p",href:"#extid"},"described above")," ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTID")," option."))),(0,o.kt)("p",null,"If a namespace must be declared in a tag , but the tag itself should not belong to it, you must add a property marked ",(0,o.kt)("inlineCode",{parentName:"p"},"ATTR")," and named ",(0,o.kt)("inlineCode",{parentName:"p"},"xmlns:namespace")," to the export. It is assumed that the value of this property will contain the URI of the declared namespace."),(0,o.kt)("p",null,"Working with namespaces is similar when importing properties, as well as when working with object groups/property groups."),(0,o.kt)("h3",{id:"flat-view"},"Flat view"),(0,o.kt)("p",null,"Each file for an object group in flat view is a table in which:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rows are object collections of this object group."),(0,o.kt)("li",{parentName:"ul"},"Columns are properties, which ",(0,o.kt)("a",{parentName:"li",href:"/Form_structure#drawgroup"},"display groups")," are equal to this object group.")),(0,o.kt)("p",null,"In CSV format (when there is no first header line), the columns are named similarly to XLS (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," is the first, ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," is the second, etc.)"),(0,o.kt)("p",null,"If a column with the form property name is not found when importing the form, then the column next to the column of the previous property in the list of form properties is selected for import (in this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," column is considered the first)."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"All of the above options, as well as defining the form structure, can be done using the ",(0,o.kt)("a",{parentName:"p",href:"/FORM_instruction"},(0,o.kt)("inlineCode",{parentName:"a"},"FORM")," instruction"),"."),(0,o.kt)("h3",{id:"open-form"},"Open form"),(0,o.kt)("p",null,"To display the form in structured view, the corresponding ",(0,o.kt)("a",{parentName:"p",href:"/Open_form"},"open form")," in a ",(0,o.kt)("a",{parentName:"p",href:"/In_a_structured_view_EXPORT_IMPORT_"},"structured view")," operator is used."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM exportSku\n    OBJECTS st = Store\n\n    OBJECTS s = Sku\n    PROPERTIES(s) id, name, weight\n    FILTERS in(st, s)\n;\n\nexportSku (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT exportSku OBJECTS st = store DBF CHARSET 'CP866';\n    EXPORT exportSku XML;\n    EXPORT exportSku OBJECTS st = store CSV ',';\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"\ndate = DATA DATE (INTEGER);\nsku = DATA BPSTRING[50] (INTEGER);\nprice = DATA NUMERIC[14,2] (INTEGER);\norder = DATA INTEGER (INTEGER);\nFORM import\n    OBJECTS o = INTEGER // orders\n    OBJECTS od = INTEGER // order lines\n    PROPERTIES (o) dateOrder = date // importing the date from the dateOrder field\n    PROPERTIES (od) sku = sku, price = price // importing product quantity from sku and price fields\n    FILTERS order(od) = o // writing the top order to order\n\n;\n\nimportForm()  {\n    INPUT f = FILE DO {\n        IMPORT import JSON FROM f;\n        SHOW import; // showing what was imported\n\n        // creating objects in the database\n        FOR DATE date = date(INTEGER io) NEW o = Order DO {\n            date(o) <- date;\n            FOR order(INTEGER iod) = io NEW od = OrderDetail DO {\n                price(od) <- price(iod);\n                sku(od) <- GROUP MAX Sku sku IF name(sku) = sku(iod); // finding sku with this name\n            }\n        }\n    }\n}\n")))}m.isMDXComponent=!0}}]);