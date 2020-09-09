(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{197:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),i=(a(0),a(317)),c={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},l={id:"Get-VSTeamQueue",isDocsHomePage:!1,title:"Get-VSTeamQueue",description:"Get-VSTeamQueue",source:"@site/modules/vsteam/Get-VSTeamQueue.md",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamQueue",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Get-VSTeamQueue.md",sidebar:"modules",previous:{title:"Get-VSTeamPullRequest",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamPullRequest"},next:{title:"Get-VSTeamRelease",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamRelease"}},o=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"List (Default)",id:"list-default",children:[]},{value:"ByID",id:"byid",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-actionFilter",id:"-actionfilter",children:[]},{value:"-id",id:"-id",children:[]},{value:"-queueName",id:"-queuename",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"Team.Queue",id:"teamqueue",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"get-vsteamqueue"},"Get-VSTeamQueue"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Gets a agent queue."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h3",{id:"list-default"},"List (Default)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamQueue [-queueName <String>] [-actionFilter <String>] [-ProjectName] <String> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byid"},"ByID"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamQueue [-id <String>] [-ProjectName] <String> [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Gets a agent queue."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"Example 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> {{ Add example code here }}\n")),Object(i.b)("p",null,"{{ Add example description here }}"),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-projectname"},"-ProjectName"),Object(i.b)("p",null,"Specifies the team project for which this function operates."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-actionfilter"},"-actionFilter"),Object(i.b)("p",null,"None, Manage or Use."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-id"},"-id"),Object(i.b)("p",null,"Id of the queue to return."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByID\nAliases: QueueID\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-queuename"},"-queueName"),Object(i.b)("p",null,"Name of the queue to return."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h3",{id:"teamqueue"},"Team.Queue"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"))}s.isMDXComponent=!0},317:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return a?r.a.createElement(b,l(l({ref:t},u),{},{components:a})):r.a.createElement(b,l({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<i;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);