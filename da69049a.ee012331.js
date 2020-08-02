(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{281:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(9),a=(n(0),n(313)),o={},c={id:"Module/Add-VSTeamExtension",isDocsHomePage:!1,title:"Add-VSTeamExtension",description:"Add-VSTeamExtension",source:"@site/docs\\Module\\Add-VSTeamExtension.md",permalink:"/docs/Module/Add-VSTeamExtension",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Add-VSTeamExtension.md"},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[]},{value:"PARAMETERS",id:"parameters",children:[{value:"-PublisherId",id:"-publisherid",children:[]},{value:"-ExtensionId",id:"-extensionid",children:[]},{value:"-Version",id:"-version",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],d={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"add-vsteamextension"},"Add-VSTeamExtension"),Object(a.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(a.b)("p",null,"Install the specified extension into the account / project collection."),Object(a.b)("h2",{id:"syntax"},"SYNTAX"),Object(a.b)("h2",{id:"description"},"DESCRIPTION"),Object(a.b)("p",null,"Install the specified extension into the account / project collection."),Object(a.b)("h2",{id:"examples"},"EXAMPLES"),Object(a.b)("h2",{id:"parameters"},"PARAMETERS"),Object(a.b)("h3",{id:"-publisherid"},"-PublisherId"),Object(a.b)("p",null,"The id of the publisher."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\n")),Object(a.b)("h3",{id:"-extensionid"},"-ExtensionId"),Object(a.b)("p",null,"The id of the extension."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\n")),Object(a.b)("h3",{id:"-version"},"-Version"),Object(a.b)("p",null,'The version of the extension. Example: "0.1.35".'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: False\n")),Object(a.b)("h2",{id:"inputs"},"INPUTS"),Object(a.b)("h2",{id:"outputs"},"OUTPUTS"),Object(a.b)("h2",{id:"notes"},"NOTES"),Object(a.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Add-VSTeamExtension"}),"Add-VSTeamExtension")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Get-VSTeamExtension"}),"Get-VSTeamExtension")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Remove-VSTeamExtension"}),"Remove-VSTeamExtension")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Update-VSTeamExtension"}),"Update-VSTeamExtension")))}s.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),s=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,O=u["".concat(o,".").concat(b)]||u[b]||p[b]||a;return n?i.a.createElement(O,c(c({ref:t},d),{},{components:n})):i.a.createElement(O,c({ref:t},d))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);