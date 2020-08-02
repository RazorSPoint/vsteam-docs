(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{225:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),c=(a(0),a(313)),i={},o={id:"Module/Add-VSTeamClassificationNode",isDocsHomePage:!1,title:"Add-VSTeamClassificationNode",description:"Add-VSTeamClassificationNode",source:"@site/docs\\Module\\Add-VSTeamClassificationNode.md",permalink:"/vsteam-docs/docs/Module/Add-VSTeamClassificationNode",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Add-VSTeamClassificationNode.md"},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"-------------------------- EXAMPLE 1 --------------------------",id:"---------------------------example-1---------------------------",children:[]},{value:"-------------------------- EXAMPLE 2 --------------------------",id:"---------------------------example-2---------------------------",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Name",id:"-name",children:[]},{value:"-StructureGroup",id:"-structuregroup",children:[]},{value:"-Path",id:"-path",children:[]},{value:"-StartDate",id:"-startdate",children:[]},{value:"-FinishDate",id:"-finishdate",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],d={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"add-vsteamclassificationnode"},"Add-VSTeamClassificationNode"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Adds either a new iteration or area to the project"),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Adds either a new iteration or area to the project"),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h3",{id:"---------------------------example-1---------------------------"},"-------------------------- EXAMPLE 1 --------------------------"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-PowerShell"}),'PS C:\\> Add-VSTeamClassificationNode -ProjectName Demo -Name "NewIteration" -StructureGroup "iteration" -Path "MyIteration/Path"\n')),Object(c.b)("p",null,"This command adds a new iteration named NewIteration to the Demo project under the iteration path MyIteration/Path."),Object(c.b)("h3",{id:"---------------------------example-2---------------------------"},"-------------------------- EXAMPLE 2 --------------------------"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-PowerShell"}),'PS C:\\> Add-VSTeamClassificationNode -ProjectName "Demo" -FinishDate (Get-Date "31.01.2020") -StartDate (Get-Date "01.01.2020") -Name "NewIteration" -StructureGroup "iterations"\n')),Object(c.b)("p",null,"This command adds a new iteration named NewIteration to the Demo project with the start date 01.01.2020 and finish date 31.01.2020."),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so\nyou do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 0\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(c.b)("h3",{id:"-name"},"-Name"),Object(c.b)("p",null,"Name of the new classification node."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: string\n")),Object(c.b)("h3",{id:"-structuregroup"},"-StructureGroup"),Object(c.b)("p",null,"Structure group of the classification node."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: string\nAccepted values: iterations, areas\n")),Object(c.b)("h3",{id:"-path"},"-Path"),Object(c.b)("p",null,"Path of the classification node."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: string\n")),Object(c.b)("h3",{id:"-startdate"},"-StartDate"),Object(c.b)("p",null,"Start date of the classification node."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: datetime\n")),Object(c.b)("h3",{id:"-finishdate"},"-FinishDate"),Object(c.b)("p",null,"Finish date of the classification node."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: datetime\n")),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h3",{id:"systemobject"},"System.Object"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("p",null,"This function is the base function for Add-VSTeamArea and Add-VSTeamIteration."),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/vsteam-docs/docs/Module/Add-VSTeamArea"}),"Add-VSTeamArea")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/vsteam-docs/docs/Module/Add-VSTeamIteration"}),"Add-VSTeamIteration")))}s.isMDXComponent=!0},313:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),p=n,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||c;return a?r.a.createElement(m,o(o({ref:t},d),{},{components:a})):r.a.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<c;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);