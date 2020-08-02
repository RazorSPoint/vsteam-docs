(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{292:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(9),o=(a(0),a(313)),c={},i={id:"Module/Get-VSTeamTaskGroup",isDocsHomePage:!1,title:"Get-VSTeamTaskGroup",description:"Get-VSTeamTaskGroup",source:"@site/docs\\Module\\Get-VSTeamTaskGroup.md",permalink:"/docs/Module/Get-VSTeamTaskGroup",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Get-VSTeamTaskGroup.md"},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"-------------------------- EXAMPLE 1 --------------------------",id:"---------------------------example-1---------------------------",children:[]},{value:"-------------------------- EXAMPLE 2 --------------------------",id:"---------------------------example-2---------------------------",children:[]},{value:"-------------------------- EXAMPLE 3 --------------------------",id:"---------------------------example-3---------------------------",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-ProjectName",id:"-projectname-1",children:[]},{value:"-Id",id:"-id",children:[]},{value:"-Name",id:"-name",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"get-vsteamtaskgroup"},"Get-VSTeamTaskGroup"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Gets a task group"),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Gets a task group"),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h3",{id:"---------------------------example-1---------------------------"},"-------------------------- EXAMPLE 1 --------------------------"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),'\n$methodParameters = @{\n   ProjectName = "some_project_name"\n}\n\nGet-VSTeamTaskGroup @methodParameters\n')),Object(o.b)("p",null,"Get all the task groups for the some_project_name project.  Here we are splatting the parameter, but it may also be directly specified.  See a non-splatting example below."),Object(o.b)("h3",{id:"---------------------------example-2---------------------------"},"-------------------------- EXAMPLE 2 --------------------------"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),'Get-VSTeamTaskGroup -ProjectName "some_project_name" -Id "Task_group_id"\n')),Object(o.b)("p",null,"Get a task group when the ID is already known."),Object(o.b)("h3",{id:"---------------------------example-3---------------------------"},"-------------------------- EXAMPLE 3 --------------------------"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),'\n$methodParameters = @{\n   ProjectName = "some_project_name"\n   Name        = "Task_group_name"\n}\n\nGet-VSTeamTaskGroup @methodParameters\n')),Object(o.b)("p",null,"Get a task group by name, when the ID is not known.  Here we are splatting the parameters, but they may also be directly specified.  Getting by ID is preferred, as it's more efficient; but getting by name is, of course, handy."),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-projectname"},"-ProjectName"),Object(o.b)("h3",{id:"-projectname-1"},"-ProjectName"),Object(o.b)("p",null,"Specifies the team project for which this function operates."),Object(o.b)("p",null,"You can tab complete from a list of available projects."),Object(o.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so\nyou do not have to pass the ProjectName with each call."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 0\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(o.b)("h3",{id:"-id"},"-Id"),Object(o.b)("p",null,"ID of the existing task group"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByID\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-name"},"-Name"),Object(o.b)("p",null,"Name of the existing task group"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByName\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(o.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorTask, -InformationAction, -InformationTask, -OutTask, -OutBuffer, -PipelineTask, -Verbose, -WarningAction, and -WarningTask.\nFor more information, see about_CommonParameters (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"http://go.microsoft.com/fwlink/?LinkID=113216"),")."),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h3",{id:"systemstring"},"System.String"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h3",{id:"systemobject"},"System.Object"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Add-VSTeamTaskGroup"}),"Add-VSTeamTaskGroup")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Update-VSTeamTaskGroup"}),"Update-VSTeamTaskGroup")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Remove-VSTeamTaskGroup"}),"Remove-VSTeamTaskGroup")))}s.isMDXComponent=!0},313:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),b=r,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return a?n.a.createElement(d,i(i({ref:t},p),{},{components:a})):n.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);