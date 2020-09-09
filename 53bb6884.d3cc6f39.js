(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{162:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(279)),c={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},i={id:"Get-VSTeamGroup",isDocsHomePage:!1,title:"Get-VSTeamGroup",description:"Get-VSTeamGroup",source:"@site/modules\\vsteam\\Get-VSTeamGroup.md",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamGroup",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Get-VSTeamGroup.md",sidebar:"modules",previous:{title:"Get-VSTeamGitStat",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamGitStat"},next:{title:"Get-VSTeamInfo",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamInfo"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"List (Default)",id:"list-default",children:[]},{value:"ListByProjectName",id:"listbyprojectname",children:[]},{value:"ByGroupDescriptor",id:"bygroupdescriptor",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-SubjectTypes",id:"-subjecttypes",children:[]},{value:"-ScopeDescriptor",id:"-scopedescriptor",children:[]},{value:"-Descriptor",id:"-descriptor",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"get-vsteamgroup"},"Get-VSTeamGroup"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Returns a Group or List of Groups."),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("h3",{id:"list-default"},"List (Default)"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamGroup [-SubjectTypes <String[]>] [-ScopeDescriptor <String>] [<CommonParameters>]\n")),Object(o.b)("h3",{id:"listbyprojectname"},"ListByProjectName"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamGroup [-SubjectTypes <String[]>] [-ProjectName] <String> [<CommonParameters>]\n")),Object(o.b)("h3",{id:"bygroupdescriptor"},"ByGroupDescriptor"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamGroup -Descriptor <String> [<CommonParameters>]\n")),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Returns a Group or List of Groups."),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> $group = Get-VSTeamGroup | ? DisplayName -eq 'Endpoint Administrators'\n")),Object(o.b)("p",null,"Assigns Endpoint Administrators group to $group variable."),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-projectname"},"-ProjectName"),Object(o.b)("p",null,"Specifies the team project for which this function operates."),Object(o.b)("p",null,"You can tab complete from a list of available projects."),Object(o.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ListByProjectName\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-subjecttypes"},"-SubjectTypes"),Object(o.b)("p",null,"A comma separated list of user subject subtypes to reduce the retrieved results.\nValid subject types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"vssgp (Azure DevOps Group)"),Object(o.b)("li",{parentName:"ul"},"aadgp (Azure Active Directory Group)")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String[]\nParameter Sets: List, ListByProjectName\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-scopedescriptor"},"-ScopeDescriptor"),Object(o.b)("p",null,"Specify a non-default scope (collection, project) to search for groups."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-descriptor"},"-Descriptor"),Object(o.b)("p",null,"The descriptor of the desired graph group."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByGroupDescriptor\nAliases: GroupDescriptor\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(o.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"))}s.isMDXComponent=!0},279:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);