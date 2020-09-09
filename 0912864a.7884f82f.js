(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),l=(a(0),a(317)),i={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},o={id:"Get-VSTeamApproval",isDocsHomePage:!1,title:"Get-VSTeamApproval",description:"Get-VSTeamApproval",source:"@site/modules/vsteam/Get-VSTeamApproval.md",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamApproval",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Get-VSTeamApproval.md",sidebar:"modules",previous:{title:"Get-VSTeamAPIVersion",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamAPIVersion"},next:{title:"Get-VSTeamArea",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamArea"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 2",id:"example-2",children:[]},{value:"EXAMPLE 3",id:"example-3",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-StatusFilter",id:"-statusfilter",children:[]},{value:"-ReleaseIdsFilter",id:"-releaseidsfilter",children:[]},{value:"-AssignedToFilter",id:"-assignedtofilter",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"Team.BuildDefinition",id:"teambuilddefinition",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"get-vsteamapproval"},"Get-VSTeamApproval"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Gets a list of approvals for all releases for a team project."),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamApproval [-StatusFilter <String>] [-ReleaseIdsFilter <Int32[]>] [-AssignedToFilter <String>]\n [-ProjectName] <String> [<CommonParameters>]\n")),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"The Get-VSTeamApproval function gets the approvals for all releases for a team project."),Object(l.b)("p",null,"With just a project name, this function gets all of the pending approvals for that team project."),Object(l.b)("p",null,'When using with AzD "IncludeMyGroupApprovals" will be added to the request when Assigned To Filter is not empty.'),Object(l.b)("p",null,'When using with TFS "IncludeMyGroupApprovals" will be added to the request when Assigned To Filter, Release Id Filter are not empty and Status Filter equals Pending.'),Object(l.b)("p",null,"The Team.Approval type has three custom table formats:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Pending: ID, Status, Release Name, Environment, Type, Approver Name, Release Definitions"),Object(l.b)("li",{parentName:"ul"},"Approved: Release Name, Environment, Is Automated, Approval Type, Approver Name, Release Definitions, Comments"),Object(l.b)("li",{parentName:"ul"},"Rejected: Release Name, Environment, Approval Type, Approver Name, Release Definition, Comments")),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamApproval -ProjectName Demo\n")),Object(l.b)("p",null,"This command gets a list of all pending approvals."),Object(l.b)("h3",{id:"example-2"},"EXAMPLE 2"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamApproval -ProjectName Demo -StatusFilter Approved | Format-Table -View Approved\n")),Object(l.b)("p",null,"This command gets a list of all approved approvals using a custom table format."),Object(l.b)("h3",{id:"example-3"},"EXAMPLE 3"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamApproval -ProjectName Demo -AssignedToFilter Administrator -StatusFilter Rejected | FT -View Rejected\n")),Object(l.b)("p",null,"This command gets a list of all approvals rejected by Administrator using a custom table format."),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-projectname"},"-ProjectName"),Object(l.b)("p",null,"Specifies the team project for which this function operates."),Object(l.b)("p",null,"You can tab complete from a list of available projects."),Object(l.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-statusfilter"},"-StatusFilter"),Object(l.b)("p",null,"By default the function returns Pending approvals."),Object(l.b)("p",null,"Using this filter you can return Approved, ReAssigned or Rejected approvals."),Object(l.b)("p",null,"There is a custom table view for each status."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-releaseidsfilter"},"-ReleaseIdsFilter"),Object(l.b)("p",null,"Only approvals for the release ids provided will be returned."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: (All)\nAliases: ReleaseIdFilter\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-assignedtofilter"},"-AssignedToFilter"),Object(l.b)("p",null,"Approvals are filtered to only those assigned to this user."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(l.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h3",{id:"teambuilddefinition"},"Team.BuildDefinition"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("p",null,"This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets build definitions."),Object(l.b)("p",null,"You can tab complete from a list of available projects."),Object(l.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(l.b)("p",null,"You can pipe build definition IDs to this function."),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Add-VSTeamBuildDefinition")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Remove-VSTeamBuildDefinition")))}s.isMDXComponent=!0},317:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),b=n,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||l;return a?r.a.createElement(d,o(o({ref:t},p),{},{components:a})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);