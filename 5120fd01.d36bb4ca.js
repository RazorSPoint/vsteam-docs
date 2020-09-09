(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{196:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return d}));var n=t(2),o=t(9),i=(t(0),t(317)),a={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},s={id:"Add-VSTeamGitRepositoryPermission",isDocsHomePage:!1,title:"Add-VSTeamGitRepositoryPermission",description:"Add-VSTeamGitRepositoryPermission",source:"@site/modules/vsteam/Add-VSTeamGitRepositoryPermission.md",permalink:"/vsteam-docs/modules/vsteam/Add-VSTeamGitRepositoryPermission",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Add-VSTeamGitRepositoryPermission.md",sidebar:"modules",previous:{title:"Add-VSTeamGitRepository",permalink:"/vsteam-docs/modules/vsteam/Add-VSTeamGitRepository"},next:{title:"Add-VSTeamIteration",permalink:"/vsteam-docs/modules/vsteam/Add-VSTeamIteration"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ByProjectAndUser (Default)",id:"byprojectanduser-default",children:[]},{value:"ByRepositoryNameAndDescriptor",id:"byrepositorynameanddescriptor",children:[]},{value:"ByRepositoryIdAndDescriptor",id:"byrepositoryidanddescriptor",children:[]},{value:"ByRepositoryNameAndUser",id:"byrepositorynameanduser",children:[]},{value:"ByRepositoryNameAndGroup",id:"byrepositorynameandgroup",children:[]},{value:"ByRepositoryIdAndUser",id:"byrepositoryidanduser",children:[]},{value:"ByRepositoryIdAndGroup",id:"byrepositoryidandgroup",children:[]},{value:"ByProjectAndGroup",id:"byprojectandgroup",children:[]},{value:"ByProjectAndDescriptor",id:"byprojectanddescriptor",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-RepositoryId",id:"-repositoryid",children:[]},{value:"-RepositoryName",id:"-repositoryname",children:[]},{value:"-BranchName",id:"-branchname",children:[]},{value:"-Descriptor",id:"-descriptor",children:[]},{value:"-User",id:"-user",children:[]},{value:"-Group",id:"-group",children:[]},{value:"-Allow",id:"-allow",children:[]},{value:"-Deny",id:"-deny",children:[]},{value:"-Project",id:"-project",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:c};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"add-vsteamgitrepositorypermission"},"Add-VSTeamGitRepositoryPermission"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Add permissions to a git repository, all repositories in a project, or a specific branch"),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h3",{id:"byprojectanduser-default"},"ByProjectAndUser (Default)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -User <VSTeamUser>\n -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositorynameanddescriptor"},"ByRepositoryNameAndDescriptor"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryName <String> [-BranchName <String>]\n -Descriptor <String> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>\n [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositoryidanddescriptor"},"ByRepositoryIdAndDescriptor"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryId <Guid> [-BranchName <String>]\n -Descriptor <String> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>\n [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositorynameanduser"},"ByRepositoryNameAndUser"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryName <String> [-BranchName <String>]\n -User <VSTeamUser> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>\n [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositorynameandgroup"},"ByRepositoryNameAndGroup"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryName <String> [-BranchName <String>]\n -Group <VSTeamGroup> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>\n [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositoryidanduser"},"ByRepositoryIdAndUser"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryId <Guid> [-BranchName <String>]\n -User <VSTeamUser> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>\n [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositoryidandgroup"},"ByRepositoryIdAndGroup"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryId <Guid> [-BranchName <String>]\n -Group <VSTeamGroup> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>\n [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byprojectandgroup"},"ByProjectAndGroup"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -Group <VSTeamGroup>\n -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byprojectanddescriptor"},"ByProjectAndDescriptor"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -Descriptor <String>\n -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Add permissions to a git repository, all repositories in a project, or a specific branch"),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"Example 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> {{ Add example code here }}\n")),Object(i.b)("p",null,"{{ Add example description here }}"),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-repositoryid"},"-RepositoryId"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid\nParameter Sets: ByRepositoryIdAndDescriptor, ByRepositoryIdAndUser, ByRepositoryIdAndGroup\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-repositoryname"},"-RepositoryName"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByRepositoryNameAndDescriptor, ByRepositoryNameAndUser, ByRepositoryNameAndGroup\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-branchname"},"-BranchName"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByRepositoryNameAndDescriptor, ByRepositoryIdAndDescriptor, ByRepositoryNameAndUser, ByRepositoryNameAndGroup, ByRepositoryIdAndUser, ByRepositoryIdAndGroup\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-descriptor"},"-Descriptor"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByRepositoryNameAndDescriptor, ByRepositoryIdAndDescriptor, ByProjectAndDescriptor\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-user"},"-User"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamUser\nParameter Sets: ByProjectAndUser, ByRepositoryNameAndUser, ByRepositoryIdAndUser\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-group"},"-Group"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamGroup\nParameter Sets: ByRepositoryNameAndGroup, ByRepositoryIdAndGroup, ByProjectAndGroup\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-allow"},"-Allow"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamGitRepositoryPermissions\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-deny"},"-Deny"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamGitRepositoryPermissions\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-project"},"-Project"),Object(i.b)("p",null,"{{ Fill Project Description }}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamProject\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h3",{id:"systemobject"},"System.Object"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"))}d.isMDXComponent=!0},317:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return u}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),d=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=d(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(t),b=n,u=l["".concat(a,".").concat(b)]||l[b]||m[b]||i;return t?o.a.createElement(u,s(s({ref:r},p),{},{components:t})):o.a.createElement(u,s({ref:r},p))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);