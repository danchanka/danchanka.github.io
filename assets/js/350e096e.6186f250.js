(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[76226],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50890:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"In a structured view (EXPORT, IMPORT)"},s=void 0,p={unversionedId:"In_a_structured_view_EXPORT_IMPORT",id:"version-v4/In_a_structured_view_EXPORT_IMPORT",isDocsHomePage:!1,title:"In a structured view (EXPORT, IMPORT)",description:"This operator creates an action that opens a form in the structured view.",source:"@site/versioned_docs/version-v4/In_a_structured_view_EXPORT_IMPORT.md",sourceDirName:".",slug:"/In_a_structured_view_EXPORT_IMPORT",permalink:"/In_a_structured_view_EXPORT_IMPORT",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/In_a_structured_view_EXPORT_IMPORT.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"In a structured view (EXPORT, IMPORT)"},sidebar:"version-v4/learn",previous:{title:"In a print view (PRINT)",permalink:"/In_a_print_view_PRINT"},next:{title:"Overview",permalink:"/Navigator"}},u=[{value:"Format",id:"format",children:[]},{value:"Form import",id:"importForm",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This operator creates an action that ",(0,o.kt)("a",{parentName:"p",href:"/Open_form"},"opens a form")," in the ",(0,o.kt)("a",{parentName:"p",href:"/Structured_view"},"structured")," view."),(0,o.kt)("h3",{id:"format"},"Format"),(0,o.kt)("p",null,"In this operator, you can define the format that all form data will be converted to:  ",(0,o.kt)("strong",{parentName:"p"},"XML"),", ",(0,o.kt)("strong",{parentName:"p"},"JSON"),", ",(0,o.kt)("strong",{parentName:"p"},"DBF"),", ",(0,o.kt)("strong",{parentName:"p"},"CSV"),", ",(0,o.kt)("strong",{parentName:"p"},"XLS"),". The generated file(s) in this format is then written to the specified property."),(0,o.kt)("p",null,"Form export is a general case of the  ",(0,o.kt)("a",{parentName:"p",href:"/Data_export_EXPORT"},"data export operator"),"."),(0,o.kt)("h3",{id:"importForm"},"Form import"),(0,o.kt)("p",null,"Form import is an operation that is opposite to opening the form in a structured view. The import operator accepts files in a structured format, then parses them and saves the data to the properties of the set form in such a way that when this form is exported back into the imported format, it would recreate the original file."),(0,o.kt)("p",null,'Since the import operator is essentially an "input operator", the following constraints apply to the form being imported:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All form objects must belong to  ",(0,o.kt)("a",{parentName:"p",href:"/Built-in_classes#inheritance"},"numeric")," or ",(0,o.kt)("a",{parentName:"p",href:"/User_classes#abstract"},"concrete")," ",(0,o.kt)("a",{parentName:"p",href:"/User_classes"},"user")," classes. Object groups must consist of exactly one object (this constraint is caused by the fact that all the used formats are essentially lists \u2014 that is, mappings of numbers to values).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Properties and ",(0,o.kt)("a",{parentName:"p",href:"/Form_structure#filters"},"filters")," on the form should be ",(0,o.kt)("a",{parentName:"p",href:"/Property_change_CHANGE"},"changeable")," by a given value (that is, as a rule, be ",(0,o.kt)("a",{parentName:"p",href:"/Data_properties_DATA"},"primary"),"). Before importing, any existing changes to the imported properties in the current session are canceled."))),(0,o.kt)("p",null,"During import, filters change to the ",(0,o.kt)("a",{parentName:"p",href:"/Built-in_classes#defaultvalue"},"default values")," of value classes of these filters."),(0,o.kt)("p",null,"When importing data into objects of numeric classes, 0-based numbering is used. In case of ",(0,o.kt)("a",{parentName:"p",href:"/Structured_view#hierarchy"},"hierarchical"),' formats, numbering is "end-to-end" (that is, when the object group being imported is encountered for the second and subsequent times, object numbering in it starts from the position that the previous one stopped at).'),(0,o.kt)("p",null,"When importing from XLS and CSV without headers (with the ",(0,o.kt)("inlineCode",{parentName:"p"},"NOHEADER")," option), the platform automatically attempts to convert data to the necessary type. If it fails, a ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," value is written to the property. Importing from other formats requires correct types. For example, if a string is required during data import from JSON, and the JSON file contains a number (without quotes), the platform will generate an error."),(0,o.kt)("p",null,"If a property (object group) is not found during import, it is ignored (that is, its value remains equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),")."),(0,o.kt)("p",null,"Form import is a general case of the ",(0,o.kt)("a",{parentName:"p",href:"/Data_import_IMPORT"},"data import")," operator."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To open the form in the structured view, use the ",(0,o.kt)("a",{parentName:"p",href:"/EXPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EXPORT")," operator"),". To import a form, use the ",(0,o.kt)("a",{parentName:"p",href:"/IMPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"IMPORT")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM exportSku\n    OBJECTS st = Store\n\n    OBJECTS s = Sku\n    PROPERTIES(s) id, name, weight\n    FILTERS in(st, s)\n;\n\nexportSku (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT exportSku OBJECTS st = store DBF CHARSET 'CP866';\n    EXPORT exportSku XML;\n    EXPORT exportSku OBJECTS st = store CSV ',';\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"\ndate = DATA DATE (INTEGER);\nsku = DATA BPSTRING[50] (INTEGER);\nprice = DATA NUMERIC[14,2] (INTEGER);\norder = DATA INTEGER (INTEGER);\nFORM import\n    OBJECTS o = INTEGER // orders\n    OBJECTS od = INTEGER // order lines\n    PROPERTIES (o) dateOrder = date // importing the date from the dateOrder field\n    PROPERTIES (od) sku = sku, price = price // importing product quantity from sku and price fields\n    FILTERS order(od) = o // writing the top order to order\n\n;\n\nimportForm()  {\n    INPUT f = FILE DO {\n        IMPORT import JSON FROM f;\n        SHOW import; // showing what was imported\n\n        // creating objects in the database\n        FOR DATE date = date(INTEGER io) NEW o = Order DO {\n            date(o) <- date;\n            FOR order(INTEGER iod) = io NEW od = OrderDetail DO {\n                price(od) <- price(iod);\n                sku(od) <- GROUP MAX Sku sku IF name(sku) = sku(iod); // finding sku with this name\n            }\n        }\n    }\n}\n")))}c.isMDXComponent=!0}}]);