(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{272:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),i=(a(0),a(317)),c={id:"Get-VSTeamRelease",title:"Get-VSTeamRelease",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamRelease.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},l={id:"Get-VSTeamRelease",isDocsHomePage:!1,title:"Get-VSTeamRelease",description:"Get-VSTeamRelease",source:"@site/modules/vsteam/Get-VSTeamRelease.md",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamRelease",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamRelease.md",sidebar:"modules",previous:{title:"Get-VSTeamQueue",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamQueue"},next:{title:"Get-VSTeamReleaseDefinition",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamReleaseDefinition"}},s=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"List (Default)",id:"list-default",children:[]},{value:"ByID",id:"byid",children:[]},{value:"ByIdJson",id:"byidjson",children:[]},{value:"ByIdRaw",id:"byidraw",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 2",id:"example-2",children:[]},{value:"EXAMPLE 3",id:"example-3",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-JSON",id:"-json",children:[]},{value:"-continuationToken",id:"-continuationtoken",children:[]},{value:"-createdBy",id:"-createdby",children:[]},{value:"-definitionId",id:"-definitionid",children:[]},{value:"-expand",id:"-expand",children:[]},{value:"-id",id:"-id",children:[]},{value:"-maxCreatedTime",id:"-maxcreatedtime",children:[]},{value:"-minCreatedTime",id:"-mincreatedtime",children:[]},{value:"-queryOrder",id:"-queryorder",children:[]},{value:"-raw",id:"-raw",children:[]},{value:"-searchText",id:"-searchtext",children:[]},{value:"-statusFilter",id:"-statusfilter",children:[]},{value:"-top",id:"-top",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"Team.Release",id:"teamrelease",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],o={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"get-vsteamrelease"},"Get-VSTeamRelease"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Gets the releases for a team project."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h3",{id:"list-default"},"List (Default)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamRelease [-searchText <String>] [-statusFilter <String>] [-expand <String>] [-definitionId <Int32>]\n [-top <Int32>] [-createdBy <String>] [-minCreatedTime <DateTime>] [-maxCreatedTime <DateTime>]\n [-queryOrder <String>] [-continuationToken <String>] [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byid"},"ByID"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamRelease -id <Int32[]> [-expand <String>] [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byidjson"},"ByIdJson"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamRelease -id <Int32[]> [-expand <String>] [-JSON] [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byidraw"},"ByIdRaw"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamRelease -id <Int32[]> [-expand <String>] [-raw] [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"The Get-VSTeamRelease function gets the releases for a team project."),Object(i.b)("p",null,"The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory."),Object(i.b)("p",null,"With just a project name, this function gets all of the releases for that team project."),Object(i.b)("p",null,"You can also specify a particular release definition by ID."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamRelease -ProjectName demo | Format-List *\n")),Object(i.b)("p",null,"This command gets a list of all releases in the demo project."),Object(i.b)("p",null,"The pipeline operator (|) passes the data to the Format-List cmdlet, which displays all available properties (*) of the release definition objects."),Object(i.b)("h3",{id:"example-2"},"EXAMPLE 2"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamRelease -ProjectName demo -Id 10 -Raw\n")),Object(i.b)("p",null,"This command returns the raw object returned from the server."),Object(i.b)("h3",{id:"example-3"},"EXAMPLE 3"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamRelease -ProjectName demo -Id 10 -Json\n")),Object(i.b)("p",null,"This command returns the raw object returned from the server formated as JSON."),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-projectname"},"-ProjectName"),Object(i.b)("p",null,"Specifies the team project for which this function operates."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-json"},"-JSON"),Object(i.b)("p",null,"Converts the raw response into JSON and displays in the console.\nThis is required when you need to use the object to send back.\nWithout this switch the JSON produced from the returned object will not match the expected shape of the JSON for sending back to server."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: ByIdJson\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-continuationtoken"},"-continuationToken"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-createdby"},"-createdBy"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-definitionid"},"-definitionId"),Object(i.b)("p",null,"Id of the release definition"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-expand"},"-expand"),Object(i.b)("p",null,"Specifies which property should be expanded in the list of Release (environments, artifacts, none)."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-id"},"-id"),Object(i.b)("p",null,"Specifies one or more releases by ID."),Object(i.b)("p",null,"To specify multiple IDs, use commas to separate the IDs."),Object(i.b)("p",null,"To find the ID of a release definition, type Get-VSTeamRelease."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: ByID\nAliases: ReleaseID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: ByIdJson, ByIdRaw\nAliases: ReleaseID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-maxcreatedtime"},"-maxCreatedTime"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: DateTime\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-mincreatedtime"},"-minCreatedTime"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: DateTime\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-queryorder"},"-queryOrder"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-raw"},"-raw"),Object(i.b)("p",null,"Returns the raw response.\nThis is required when you need to use the object to send back.\nWithout this switch the object produced from the returned object will not match the expected shape of the JSON for sending back to server."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: ByIdRaw\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-searchtext"},"-searchText"),Object(i.b)("p",null,"{{ Fill searchText Description }}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-statusfilter"},"-statusFilter"),Object(i.b)("p",null,"Draft, Active or Abandoned."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-top"},"-top"),Object(i.b)("p",null,"Specifies the maximum number to return."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h3",{id:"teamrelease"},"Team.Release"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("p",null,"This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets releases."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(i.b)("p",null,"You can pipe release definition IDs to this function."),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Add-VSTeamRelease")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Remove-VSTeamRelease")))}p.isMDXComponent=!0},317:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||i;return a?r.a.createElement(m,l(l({ref:t},o),{},{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);