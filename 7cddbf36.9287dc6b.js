(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(279)),c={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},o={id:"Update-VSTeamRelease",isDocsHomePage:!1,title:"Update-VSTeamRelease",description:"Update-VSTeamRelease",source:"@site/modules\\vsteam\\Update-VSTeamRelease.md",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamRelease",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Update-VSTeamRelease.md",sidebar:"modules",previous:{title:"Update-VSTeamPullRequest",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamPullRequest"},next:{title:"Update-VSTeamReleaseDefinition",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamReleaseDefinition"}},i=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 2",id:"example-2",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Id",id:"-id",children:[]},{value:"-Release",id:"-release",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"Team.Release",id:"teamrelease",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"update-vsteamrelease"},"Update-VSTeamRelease"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Allows you to update release variables for future stages to read."),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Update-VSTeamRelease -Id <Int32> -Release <PSObject> [-Force] [-ProjectName] <String> [-WhatIf] [-Confirm]\n [<CommonParameters>]\n")),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"Allows you to update release variables for future stages to read."),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Set-VSTeamAccount -Account mydemos -Token $(System.AccessToken) -UseBearerToken\nPS C:\\> $r = Get-VSTeamRelease -ProjectName project -Id 76 -Raw\nPS C:\\> $r.variables.temp.value='temp'\nPS C:\\> Update-VSTeamRelease -ProjectName project -Id 76 -release $r\n")),Object(l.b)("p",null,"Changes the variable temp on the release.\nThis can be done in one stage and read in another stage."),Object(l.b)("h3",{id:"example-2"},"EXAMPLE 2"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Set-VSTeamAccount -Account mydemos -Token $(System.AccessToken) -UseBearerToken\nPS C:\\> $r = Get-VSTeamRelease -ProjectName project -Id 76 -Raw\nPS C:\\> $r.variables | Add-Member NoteProperty temp([PSCustomObject]@{value='test'})\nPS C:\\> Update-VSTeamRelease -ProjectName project -Id 76 -release $r\n")),Object(l.b)("p",null,"Adds a variable temp to the release with a value of test."),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-projectname"},"-ProjectName"),Object(l.b)("p",null,"Specifies the team project for which this function operates."),Object(l.b)("p",null,"You can tab complete from a list of available projects."),Object(l.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-id"},"-Id"),Object(l.b)("p",null,"The id of the release to update"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-release"},"-Release"),Object(l.b)("p",null,"The updated release to save in AzD"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: PSObject\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-confirm"},"-Confirm"),Object(l.b)("p",null,"Prompts you for confirmation before running the function."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-force"},"-Force"),Object(l.b)("p",null,"Forces the function without confirmation"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-whatif"},"-WhatIf"),Object(l.b)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(l.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h3",{id:"teamrelease"},"Team.Release"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"))}p.isMDXComponent=!0},279:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return a?r.a.createElement(b,o(o({ref:t},s),{},{components:a})):r.a.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);