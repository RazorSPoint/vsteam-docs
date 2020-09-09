(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(9),i=(n(0),n(317)),o={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},l={id:"Get-VSTeamGitCommit",isDocsHomePage:!1,title:"Get-VSTeamGitCommit",description:"Get-VSTeamGitCommit",source:"@site/modules/vsteam/Get-VSTeamGitCommit.md",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamGitCommit",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Get-VSTeamGitCommit.md",sidebar:"modules",previous:{title:"Get-VSTeamFeed",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamFeed"},next:{title:"Get-VSTeamGitRef",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamGitRef"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"All (Default)",id:"all-default",children:[]},{value:"ItemPath",id:"itempath",children:[]},{value:"ByIds",id:"byids",children:[]},{value:"CompareVersion",id:"compareversion",children:[]},{value:"ItemVersion",id:"itemversion",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-FromDate",id:"-fromdate",children:[]},{value:"-ToDate",id:"-todate",children:[]},{value:"-ItemVersionVersionType",id:"-itemversionversiontype",children:[]},{value:"-ItemVersionVersion",id:"-itemversionversion",children:[]},{value:"-ItemVersionVersionOptions",id:"-itemversionversionoptions",children:[]},{value:"-CompareVersionVersionType",id:"-compareversionversiontype",children:[]},{value:"-CompareVersionVersion",id:"-compareversionversion",children:[]},{value:"-CompareVersionVersionOptions",id:"-compareversionversionoptions",children:[]},{value:"-FromCommitId",id:"-fromcommitid",children:[]},{value:"-ToCommitId",id:"-tocommitid",children:[]},{value:"-Author",id:"-author",children:[]},{value:"-Ids",id:"-ids",children:[]},{value:"-ItemPath",id:"-itempath",children:[]},{value:"-ExcludeDeletes",id:"-excludedeletes",children:[]},{value:"-Top",id:"-top",children:[]},{value:"-Skip",id:"-skip",children:[]},{value:"-HistoryMode",id:"-historymode",children:[]},{value:"-User",id:"-user",children:[]},{value:"-RepositoryID",id:"-repositoryid",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"get-vsteamgitcommit"},"Get-VSTeamGitCommit"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Retrieve git commits for a project"),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h3",{id:"all-default"},"All (Default)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]\n [-ItemVersionVersionType <String>] [-ItemVersionVersion <String>] [-ItemVersionVersionOptions <String>]\n [-CompareVersionVersionType <String>] [-CompareVersionVersion <String>]\n [-CompareVersionVersionOptions <String>] [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>]\n [-ItemPath <String>] [-Top <Int32>] [-Skip <Int32>] [-User <String>] [[-ProjectName] <String>]\n [<CommonParameters>]\n")),Object(i.b)("h3",{id:"itempath"},"ItemPath"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]\n [-ItemVersionVersionType <String>] [-ItemVersionVersion <String>] [-ItemVersionVersionOptions <String>]\n [-CompareVersionVersionType <String>] [-CompareVersionVersion <String>]\n [-CompareVersionVersionOptions <String>] [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>]\n -ItemPath <String> [-ExcludeDeletes] [-Top <Int32>] [-Skip <Int32>] [-HistoryMode <String>] [-User <String>]\n [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byids"},"ByIds"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamGitCommit -RepositoryID <Guid> [-Ids <String[]>] [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(i.b)("h3",{id:"compareversion"},"CompareVersion"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]\n [-ItemVersionVersionType <String>] [-ItemVersionVersion <String>] [-ItemVersionVersionOptions <String>]\n -CompareVersionVersionType <String> -CompareVersionVersion <String> [-CompareVersionVersionOptions <String>]\n [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>] [-Top <Int32>] [-Skip <Int32>]\n [-User <String>] [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(i.b)("h3",{id:"itemversion"},"ItemVersion"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]\n -ItemVersionVersionType <String> -ItemVersionVersion <String> [-ItemVersionVersionOptions <String>]\n [-CompareVersionVersionType <String>] [-CompareVersionVersion <String>]\n [-CompareVersionVersionOptions <String>] [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>]\n [-Top <Int32>] [-Skip <Int32>] [-User <String>] [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"The Get-VSTeamGitCommit function gets the commits for a git repository."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamGitCommit -ProjectName demo -RepositoryId 118C262F-0D4C-4B76-BD9B-7DD8CA12F196\n")),Object(i.b)("p",null,"This command gets a list of all commits in the demo project for a specific repository."),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-projectname"},"-ProjectName"),Object(i.b)("p",null,"Specifies the team project for which this function operates."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-fromdate"},"-FromDate"),Object(i.b)("p",null,"If provided, only include history entries created after this date (string)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: DateTime\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-todate"},"-ToDate"),Object(i.b)("p",null,"If provided, only include history entries created before this date (string)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: DateTime\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-itemversionversiontype"},"-ItemVersionVersionType"),Object(i.b)("p",null,"Version type (branch, tag, or commit).\nDetermines how Id is interpreted.\nThe acceptable values for this parameter are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"branch"),Object(i.b)("li",{parentName:"ul"},"commit"),Object(i.b)("li",{parentName:"ul"},"tag")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: All, ItemPath, CompareVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ItemVersion\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-itemversionversion"},"-ItemVersionVersion"),Object(i.b)("p",null,"Version string identifier (name of tag/branch, SHA1 of commit)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: All, ItemPath, CompareVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ItemVersion\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-itemversionversionoptions"},"-ItemVersionVersionOptions"),Object(i.b)("p",null,"Version options - Specify additional modifiers to version (e.g Previous).\nThe acceptable values for this parameter are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"firstParent"),Object(i.b)("li",{parentName:"ul"},"none"),Object(i.b)("li",{parentName:"ul"},"previousChange")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-compareversionversiontype"},"-CompareVersionVersionType"),Object(i.b)("p",null,"Version type (branch, tag, or commit).\nDetermines how Id is interpreted.\nThe acceptable values for this parameter are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"branch"),Object(i.b)("li",{parentName:"ul"},"commit"),Object(i.b)("li",{parentName:"ul"},"tag")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: All, ItemPath, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: CompareVersion\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-compareversionversion"},"-CompareVersionVersion"),Object(i.b)("p",null,"Version string identifier (name of tag/branch, SHA1 of commit).\nThe acceptable values for this parameter are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"firstParent"),Object(i.b)("li",{parentName:"ul"},"none"),Object(i.b)("li",{parentName:"ul"},"previousChange")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: All, ItemPath, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: CompareVersion\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-compareversionversionoptions"},"-CompareVersionVersionOptions"),Object(i.b)("p",null,"Version options - Specify additional modifiers to version (e.g Previous)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-fromcommitid"},"-FromCommitId"),Object(i.b)("p",null,"If provided, a lower bound for filtering commits alphabetically"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-tocommitid"},"-ToCommitId"),Object(i.b)("p",null,"If provided, an upper bound for filtering commits alphabetically"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-author"},"-Author"),Object(i.b)("p",null,"Alias or display name of the author"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-ids"},"-Ids"),Object(i.b)("p",null,"If provided, specifies the exact commit ids of the commits to fetch.\nMay not be combined with other parameters."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String[]\nParameter Sets: ByIds\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-itempath"},"-ItemPath"),Object(i.b)("p",null,"Path of item to search under"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: All\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ItemPath\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-excludedeletes"},"-ExcludeDeletes"),Object(i.b)("p",null,"Only applies when an itemPath is specified.\nThis determines whether to exclude delete entries of the specified path."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: ItemPath\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-top"},"-Top"),Object(i.b)("p",null,"Maximum number of entries to retrieve"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-skip"},"-Skip"),Object(i.b)("p",null,"Number of entries to skip"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-historymode"},"-HistoryMode"),Object(i.b)("p",null,"What Git history mode should be used.\nThis only applies to the search criteria when Ids = null and an itemPath is specified.\nThe acceptable values for this parameter are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"firstParent"),Object(i.b)("li",{parentName:"ul"},"fullHistory"),Object(i.b)("li",{parentName:"ul"},"fullHistorySimplifyMerges"),Object(i.b)("li",{parentName:"ul"},"simplifiedHistory")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ItemPath\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-user"},"-User"),Object(i.b)("p",null,"Alias or display name of the committer"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-repositoryid"},"-RepositoryID"),Object(i.b)("p",null,"The id or friendly name of the repository.\nTo use the friendly name, projectId must also be specified."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid\nParameter Sets: (All)\nAliases: Id\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("p",null,"This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets commits."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(i.b)("p",null,"You can pipe a repository ID to this function."),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"))}m.isMDXComponent=!0},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,b=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);