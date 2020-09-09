(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),l=(a(0),a(279)),i={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},c={id:"Invoke-VSTeamRequest",isDocsHomePage:!1,title:"Invoke-VSTeamRequest",description:"Invoke-VSTeamRequest",source:"@site/modules\\vsteam\\Invoke-VSTeamRequest.md",permalink:"/vsteam-docs/modules/vsteam/Invoke-VSTeamRequest",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Invoke-VSTeamRequest.md",sidebar:"modules",previous:{title:"Get-VSTeamWorkItemType",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamWorkItemType"},next:{title:"Remove-VSTeam",permalink:"/vsteam-docs/modules/vsteam/Remove-VSTeam"}},s=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 2",id:"example-2",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-ContentType",id:"-contenttype",children:[]},{value:"-InFile",id:"-infile",children:[]},{value:"-OutFile",id:"-outfile",children:[]},{value:"-JSON",id:"-json",children:[]},{value:"-AdditionalHeaders",id:"-additionalheaders",children:[]},{value:"-UseProjectId",id:"-useprojectid",children:[]},{value:"-area",id:"-area",children:[]},{value:"-body",id:"-body",children:[]},{value:"-id",id:"-id",children:[]},{value:"-method",id:"-method",children:[]},{value:"-NoProject",id:"-noproject",children:[]},{value:"-QueryString",id:"-querystring",children:[]},{value:"-resource",id:"-resource",children:[]},{value:"-subDomain",id:"-subdomain",children:[]},{value:"-Team",id:"-team",children:[]},{value:"-Url",id:"-url",children:[]},{value:"-version",id:"-version",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],o={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"invoke-vsteamrequest"},"Invoke-VSTeamRequest"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Allows you to call any TFS/AzD REST API.\nAll the Auth and Route Structure is taken care of for you.\nJust provide the parts of the API call you need.\nIf you need to send a non-standard URL use the -Url parameter.\nIf the -Url is used the Url is not changed but the header and UserAgent are added for you."),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Invoke-VSTeamRequest [-resource <String>] [-area <String>] [-id <String>] [-version <String>]\n [-subDomain <String>] [-method <String>] [-body <Object>] [-InFile <String>] [-OutFile <String>] [-JSON]\n [-ContentType <String>] [-Url <String>] [-AdditionalHeaders <Hashtable>] [-QueryString <Object>]\n [-Team <String>] [[-ProjectName] <String>] [-UseProjectId] [-NoProject] [<CommonParameters>]\n")),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"Invoke-VSTeamRequest allows you to call a TFS/AzD REST API much easier than using Invoke-WebRequest directly.\nThe shape of the URI and authentication is all handled for you."),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Invoke-VSTeamRequest -resource projectHistory -version '4.1-preview' -Verbose\n")),Object(l.b)("p",null,"This command will return the project history."),Object(l.b)("h3",{id:"example-2"},"EXAMPLE 2"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> ivr -area release -resource releases -version '4.1-preview' -subDomain vsrm -Verbose\n")),Object(l.b)("p",null,"This command will return the releases for a project."),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-projectname"},"-ProjectName"),Object(l.b)("p",null,"Specifies the team project for which this function operates."),Object(l.b)("p",null,"You can tab complete from a list of available projects."),Object(l.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-contenttype"},"-ContentType"),Object(l.b)("p",null,"Specifies the content type of the request."),Object(l.b)("p",null,"If this parameter is omitted and the request method is POST, the content type will be set to application/json."),Object(l.b)("p",null,"Otherwise, the content type is not specified in the call."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: Application/json\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-infile"},"-InFile"),Object(l.b)("p",null,"Path and file name to the file that contains the contents of the request.\nIf the path is omitted, the default is the current location."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-outfile"},"-OutFile"),Object(l.b)("p",null,"Specifies the output file for which this function saves the response body.\nEnter a path and file name.\nIf you omit the path, the default is the current location."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-json"},"-JSON"),Object(l.b)("p",null,"Converts the PowerShell object into JSON and displays in the console."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-additionalheaders"},"-AdditionalHeaders"),Object(l.b)("p",null,"Adds additional headers to the request"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Hashtable\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-useprojectid"},"-UseProjectId"),Object(l.b)("p",null,"Converts the project name to project id before building the URI for the REST API call."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-area"},"-area"),Object(l.b)("p",null,"The area to find the resource.\nYou can tab complete this value.\nIt can be filtered by passing -subDomain first."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-body"},"-body"),Object(l.b)("p",null,"Specifies the body of the request.\nThe body is the content of the request that follows the headers."),Object(l.b)("p",null,"You can pipe a body value to Invoke-VSTeamRequest."),Object(l.b)("p",null,"The Body parameter can be used to specify a list of query parameters or specify the content of the response."),Object(l.b)("p",null,"When the input is a GET request and the body is an IDictionary (typically, a hash table), the body is added to the URI as query parameters.\nFor other GET requests, the body is set as the value of the request body in the standard name=value format."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Object\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-id"},"-id"),Object(l.b)("p",null,"The unique value of the item you want to work with."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-method"},"-method"),Object(l.b)("p",null,"Specifies the method used for the request.\nThe acceptable values for this parameter are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Get"),Object(l.b)("li",{parentName:"ul"},"Post"),Object(l.b)("li",{parentName:"ul"},"Patch"),Object(l.b)("li",{parentName:"ul"},"Delete"),Object(l.b)("li",{parentName:"ul"},"Options"),Object(l.b)("li",{parentName:"ul"},"Put"),Object(l.b)("li",{parentName:"ul"},"Default"),Object(l.b)("li",{parentName:"ul"},"Trace"),Object(l.b)("li",{parentName:"ul"},"Head"),Object(l.b)("li",{parentName:"ul"},"Merge")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: Get\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-noproject"},"-NoProject"),Object(l.b)("p",null,"{{ Fill NoProject Description }}"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-querystring"},"-QueryString"),Object(l.b)("p",null,"{{ Fill QueryString Description }}"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Object\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-resource"},"-resource"),Object(l.b)("p",null,"The name of the feature you want to manipulate.\nYou can tab complete this value if you pass -Area before this parameter."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-subdomain"},"-subDomain"),Object(l.b)("p",null,"The SubDomain before .dev.azure.com.\nFor example, to target Release Management you must use the SubDomain vsrm."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-team"},"-Team"),Object(l.b)("p",null,"{{ Fill Team Description }}"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-url"},"-Url"),Object(l.b)("p",null,"{{ Fill Url Description }}"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-version"},"-version"),Object(l.b)("p",null,"The version of the API you wish to target."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(l.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h3",{id:"systemstring"},"System.String"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h3",{id:"systemobject"},"System.Object"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"))}u.isMDXComponent=!0},279:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||l;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);