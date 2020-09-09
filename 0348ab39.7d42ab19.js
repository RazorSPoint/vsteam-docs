(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(9),l=(a(0),a(317)),c={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},i={id:"Get-VSTeamPullRequest",isDocsHomePage:!1,title:"Get-VSTeamPullRequest",description:"Get-VSTeamPullRequest",source:"@site/modules/vsteam/Get-VSTeamPullRequest.md",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamPullRequest",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Get-VSTeamPullRequest.md",sidebar:"modules",previous:{title:"Get-VSTeamProject",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamProject"},next:{title:"Get-VSTeamQueue",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamQueue"}},s=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"SearchCriteriaWithStatus (Default)",id:"searchcriteriawithstatus-default",children:[]},{value:"IncludeCommits",id:"includecommits",children:[]},{value:"ById",id:"byid",children:[]},{value:"SearchCriteriaWithAll",id:"searchcriteriawithall",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 2",id:"example-2",children:[]},{value:"EXAMPLE 3",id:"example-3",children:[]},{value:"EXAMPLE 4",id:"example-4",children:[]},{value:"EXAMPLE 5",id:"example-5",children:[]},{value:"EXAMPLE 6",id:"example-6",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Id",id:"-id",children:[]},{value:"-RepositoryId",id:"-repositoryid",children:[]},{value:"-SourceRepositoryId",id:"-sourcerepositoryid",children:[]},{value:"-SourceBranchRef",id:"-sourcebranchref",children:[]},{value:"-TargetBranchRef",id:"-targetbranchref",children:[]},{value:"-Status",id:"-status",children:[]},{value:"-All",id:"-all",children:[]},{value:"-Top",id:"-top",children:[]},{value:"-Skip",id:"-skip",children:[]},{value:"-IncludeCommits",id:"-includecommits",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:s};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"get-vsteampullrequest"},"Get-VSTeamPullRequest"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Returns one or more open pull requests from your team, project, or Id."),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("h3",{id:"searchcriteriawithstatus-default"},"SearchCriteriaWithStatus (Default)"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"Get-VSTeamPullRequest [-RepositoryId <Guid>] [-SourceRepositoryId <Guid>] [-SourceBranchRef <String>]\n [-TargetBranchRef <String>] [-Status <String>] [-Top <Int32>] [-Skip <Int32>] [[-ProjectName] <String>]\n [<CommonParameters>]\n")),Object(l.b)("h3",{id:"includecommits"},"IncludeCommits"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"Get-VSTeamPullRequest [-Id <String>] -RepositoryId <Guid> [-IncludeCommits] [[-ProjectName] <String>]\n [<CommonParameters>]\n")),Object(l.b)("h3",{id:"byid"},"ById"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"Get-VSTeamPullRequest [-Id <String>] [-RepositoryId <Guid>] [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(l.b)("h3",{id:"searchcriteriawithall"},"SearchCriteriaWithAll"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"Get-VSTeamPullRequest [-RepositoryId <Guid>] [-SourceRepositoryId <Guid>] [-SourceBranchRef <String>]\n [-TargetBranchRef <String>] [-All] [-Top <Int32>] [-Skip <Int32>] [[-ProjectName] <String>]\n [<CommonParameters>]\n")),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"Returns one or more open pull requests from your team, project, or Id."),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamPullRequest\n")),Object(l.b)("p",null,"This command returns all the open pull requests for your TFS or Team Services account."),Object(l.b)("h3",{id:"example-2"},"EXAMPLE 2"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamPullRequest -ProjectName Demo\n")),Object(l.b)("p",null,"This command returns all the open pull requests for the Demo team project."),Object(l.b)("h3",{id:"example-3"},"EXAMPLE 3"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamPullRequest -ProjectName Demo -All\n")),Object(l.b)("p",null,"This command returns all pull requests for the Demo team project."),Object(l.b)("h3",{id:"example-4"},"EXAMPLE 4"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),'PS C:\\> Get-VSTeamPullRequest -ProjectName Demo -TargetBranchRef "refs/heads/mybranch"\n')),Object(l.b)("p",null,"This command returns all open pull requests for a specific branch"),Object(l.b)("h3",{id:"example-5"},"EXAMPLE 5"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamPullRequest -Id 123\n")),Object(l.b)("p",null,"This command gets the pull request with an Id of 123."),Object(l.b)("h3",{id:"example-6"},"EXAMPLE 6"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),'PS C:\\> Get-VSTeamPullRequest -Id 123 -RepositoryId "93BBA613-2729-4158-9217-751E952AB4AF" -IncludeCommits\n')),Object(l.b)("p",null,"This command gets the pull request with an Id of 123 and includes the commits that are part of the pull request."),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-projectname"},"-ProjectName"),Object(l.b)("p",null,"Specifies the team project for which this function operates."),Object(l.b)("p",null,"You can tab complete from a list of available projects."),Object(l.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-id"},"-Id"),Object(l.b)("p",null,"Specifies the pull request by ID."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: IncludeCommits, ById\nAliases: PullRequestId\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-repositoryid"},"-RepositoryId"),Object(l.b)("p",null,"The repository ID of the pull request's target branch."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid\nParameter Sets: SearchCriteriaWithStatus, ById, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid\nParameter Sets: IncludeCommits\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-sourcerepositoryid"},"-SourceRepositoryId"),Object(l.b)("p",null,"If set, search for pull requests whose source branch is in this repository."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid\nParameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-sourcebranchref"},"-SourceBranchRef"),Object(l.b)("p",null,"If set, search for pull requests from this branch."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-targetbranchref"},"-TargetBranchRef"),Object(l.b)("p",null,"If set, search for pull requests into this branch."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-status"},"-Status"),Object(l.b)("p",null,"If set, search for pull requests that are in this state.\nDefaults to Active if unset.\nValid values for this parameter are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"abandoned"),Object(l.b)("li",{parentName:"ul"},"active"),Object(l.b)("li",{parentName:"ul"},"all"),Object(l.b)("li",{parentName:"ul"},"completed"),Object(l.b)("li",{parentName:"ul"},"notSet")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: SearchCriteriaWithStatus\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-all"},"-All"),Object(l.b)("p",null,"@{Text=}"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-top"},"-Top"),Object(l.b)("p",null,"The number of pull requests to retrieve."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-skip"},"-Skip"),Object(l.b)("p",null,"The number of pull requests to ignore.\nFor example, to retrieve results 101-150, set top to 50 and skip to 100."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-includecommits"},"-IncludeCommits"),Object(l.b)("p",null,"If set, includes the commits that are part of the pull request.\nRequires the RepositoryId to be set."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: IncludeCommits\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(l.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Show-VSTeamPullRequest")),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Add-VSTeamPullRequest")),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Update-VSTeamPullRequest")))}o.isMDXComponent=!0},317:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),o=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(a),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||l;return a?n.a.createElement(d,i(i({ref:t},u),{},{components:a})):n.a.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<l;u++)c[u]=a[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);