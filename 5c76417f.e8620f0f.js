(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return m}));var a=r(2),n=r(6),l=(r(0),r(279)),o={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},i={id:"Clear-VSTeamDefaultAPITimeout",isDocsHomePage:!1,title:"Clear-VSTeamDefaultAPITimeout",description:"Clear-VSTeamDefaultAPITimeout",source:"@site/modules\\vsteam\\Clear-VSTeamDefaultAPITimeout.md",permalink:"/vsteam-docs/modules/vsteam/Clear-VSTeamDefaultAPITimeout",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Clear-VSTeamDefaultAPITimeout.md",sidebar:"modules",previous:{title:"Add-VSTeamWorkItemIterationPermission",permalink:"/vsteam-docs/modules/vsteam/Add-VSTeamWorkItemIterationPermission"},next:{title:"Clear-VSTeamDefaultProject",permalink:"/vsteam-docs/modules/vsteam/Clear-VSTeamDefaultProject"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Level",id:"-level",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:c};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"clear-vsteamdefaultapitimeout"},"Clear-VSTeamDefaultAPITimeout"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Clears the value stored in the default timeout parameter value."),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"Clear-VSTeamDefaultAPITimeout [-Level <String>] [<CommonParameters>]\n")),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"Clears the value stored in the default timeout parameter value."),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"PS C:\\> Clear-VSTeamDefaultAPITimeout\n")),Object(l.b)("p",null,"This will clear the default timeout parameter value."),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-level"},"-Level"),Object(l.b)("p",null,"On Windows allows you to clear your default timeout at the Process, User or Machine levels."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(l.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")))}m.isMDXComponent=!0},279:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),m=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=m(r),d=a,b=s["".concat(o,".").concat(d)]||s[d]||p[d]||l;return r?n.a.createElement(b,i(i({ref:t},u),{},{components:r})):n.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);