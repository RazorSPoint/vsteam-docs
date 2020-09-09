(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{269:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(9),o=(r(0),r(317)),i={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},c={id:"Get-VSTeamGitRepository",isDocsHomePage:!1,title:"Get-VSTeamGitRepository",description:"Get-VSTeamGitRepository",source:"@site/modules/vsteam/Get-VSTeamGitRepository.md",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamGitRepository",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Get-VSTeamGitRepository.md",sidebar:"modules",previous:{title:"Get-VSTeamGitRef",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamGitRef"},next:{title:"Get-VSTeamGitStat",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamGitStat"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ByID (Default)",id:"byid-default",children:[]},{value:"ByName",id:"byname",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 2",id:"example-2",children:[]},{value:"EXAMPLE 3",id:"example-3",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Id",id:"-id",children:[]},{value:"-Name",id:"-name",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"get-vsteamgitrepository"},"Get-VSTeamGitRepository"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Get all the repositories in your Azure DevOps or Team Foundation Server account, or a specific project."),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("h3",{id:"byid-default"},"ByID (Default)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamGitRepository [-Id <Guid[]>] [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(o.b)("h3",{id:"byname"},"ByName"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamGitRepository [-Name <String[]>] [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Get-VSTeamGitRepository gets all the repositories in your Azure DevOps or Team Foundation Server account, or a specific project."),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamGitRepository\n")),Object(o.b)("p",null,"This command returns all the Git repositories for your TFS or Team Services account."),Object(o.b)("h3",{id:"example-2"},"EXAMPLE 2"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamGitRepository -ProjectName Demo\n")),Object(o.b)("p",null,"This command returns all the Git repositories for the Demo team project."),Object(o.b)("h3",{id:"example-3"},"EXAMPLE 3"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"PS C:\\> git clone (Get-VSTeamGitRepository | select -ExpandProperty remoteUrl)\n")),Object(o.b)("p",null,"This command gets the remote URL and passes it to git clone command."),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-projectname"},"-ProjectName"),Object(o.b)("p",null,"Specifies the team project for which this function operates."),Object(o.b)("p",null,"You can tab complete from a list of available projects."),Object(o.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-id"},"-Id"),Object(o.b)("p",null,"Specifies one or more repositories by ID."),Object(o.b)("p",null,"To specify multiple IDs, use commas to separate the IDs."),Object(o.b)("p",null,"To find the ID of a repository, type Get-VSTeamGitRepository."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid[]\nParameter Sets: ByID\nAliases: RepositoryID\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-name"},"-Name"),Object(o.b)("p",null,"Specifies one or more repositories by name."),Object(o.b)("p",null,"To specify multiple names, use commas to separate the names."),Object(o.b)("p",null,"To find the name of a repository, type Get-VSTeamGitRepository."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String[]\nParameter Sets: ByName\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(o.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"))}s.isMDXComponent=!0},317:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),b=a,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return r?n.a.createElement(d,c(c({ref:t},p),{},{components:r})):n.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);