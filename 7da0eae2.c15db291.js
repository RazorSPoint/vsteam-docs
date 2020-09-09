(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(9),r=(n(0),n(317)),l={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},o={id:"Update-VSTeamBuildDefinition",isDocsHomePage:!1,title:"Update-VSTeamBuildDefinition",description:"Update-VSTeamBuildDefinition",source:"@site/modules/vsteam/Update-VSTeamBuildDefinition.md",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamBuildDefinition",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Update-VSTeamBuildDefinition.md",sidebar:"modules",previous:{title:"Update-VSTeamBuild",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamBuild"},next:{title:"Update-VSTeamExtension",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamExtension"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"JSON (Default)",id:"json-default",children:[]},{value:"File",id:"file",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 2",id:"example-2",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Id",id:"-id",children:[]},{value:"-InFile",id:"-infile",children:[]},{value:"-BuildDefinition",id:"-builddefinition",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"None",id:"none",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],d={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"update-vsteambuilddefinition"},"Update-VSTeamBuildDefinition"),Object(r.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(r.b)("p",null,"Updates a build definition for a team project."),Object(r.b)("h2",{id:"syntax"},"SYNTAX"),Object(r.b)("h3",{id:"json-default"},"JSON (Default)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Update-VSTeamBuildDefinition -Id <Int32> [-BuildDefinition] <String> [-Force] [-ProjectName] <String> [-WhatIf]\n [-Confirm] [<CommonParameters>]\n")),Object(r.b)("h3",{id:"file"},"File"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Update-VSTeamBuildDefinition -Id <Int32> [-InFile] <String> [-Force] [-ProjectName] <String> [-WhatIf]\n [-Confirm] [<CommonParameters>]\n")),Object(r.b)("h2",{id:"description"},"DESCRIPTION"),Object(r.b)("p",null,"Reads a JSON file off disk or string and uses that file to update an existing build definition in the provided project."),Object(r.b)("p",null,"You must call Set-VSTeamAccount before calling this function."),Object(r.b)("h2",{id:"examples"},"EXAMPLES"),Object(r.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"PS C:\\> Update-VSTeamBuildDefinition -ProjectName Demo -Id 123 -InFile build.json\n")),Object(r.b)("p",null,"This command reads build.json and updates existing build definition with id 123 from it on the demo team project."),Object(r.b)("h3",{id:"example-2"},"EXAMPLE 2"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"PS C:\\> $b = Get-VSTeamBuildDefinition -ProjectName Demo -Id 23 -Raw\nPS C:\\> $b.variables.subscriptionId.value = 'Some New Value'\nPS C:\\> $body = $b | ConvertTo-Json -Depth 100\nPS C:\\> Update-VSTeamBuildDefinition -ProjectName Demo -Id 23 -BuildDefinition $body\n")),Object(r.b)("h2",{id:"parameters"},"PARAMETERS"),Object(r.b)("h3",{id:"-projectname"},"-ProjectName"),Object(r.b)("p",null,"Specifies the team project for which this function operates."),Object(r.b)("p",null,"You can tab complete from a list of available projects."),Object(r.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-id"},"-Id"),Object(r.b)("p",null,"Specifies the build definition to update by ID."),Object(r.b)("p",null,"To find the ID of a build definition, type Get-VSTeamBuildDefinition."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-infile"},"-InFile"),Object(r.b)("p",null,"Path and file name to the JSON file that contains the definition to be updated.\nIf the path is omitted, the default is the current location."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: File\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-builddefinition"},"-BuildDefinition"),Object(r.b)("p",null,"JSON string of build definition."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: JSON\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-confirm"},"-Confirm"),Object(r.b)("p",null,"Prompts you for confirmation before running the cmdlet."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-force"},"-Force"),Object(r.b)("p",null,"{{ Fill Force Description }}"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-whatif"},"-WhatIf"),Object(r.b)("p",null,"Shows what would happen if the cmdlet runs.\nThe cmdlet is not run."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(r.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(r.b)("h2",{id:"inputs"},"INPUTS"),Object(r.b)("h2",{id:"outputs"},"OUTPUTS"),Object(r.b)("h3",{id:"none"},"None"),Object(r.b)("h2",{id:"notes"},"NOTES"),Object(r.b)("p",null,"This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets build definitions."),Object(r.b)("p",null,"You can tab complete from a list of available projects."),Object(r.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(r.b)("h2",{id:"related-links"},"RELATED LINKS"))}u.isMDXComponent=!0},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),u=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(l,".").concat(b)]||p[b]||s[b]||r;return n?i.a.createElement(m,o(o({ref:t},d),{},{components:n})):i.a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);