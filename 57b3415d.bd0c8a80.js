(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{200:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(9),i=(r(0),r(317)),c={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},o={id:"Remove-VSTeamMembership",isDocsHomePage:!1,title:"Remove-VSTeamMembership",description:"Remove-VSTeamMembership",source:"@site/modules/vsteam/Remove-VSTeamMembership.md",permalink:"/vsteam-docs/modules/vsteam/Remove-VSTeamMembership",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Remove-VSTeamMembership.md",sidebar:"modules",previous:{title:"Remove-VSTeamIteration",permalink:"/vsteam-docs/modules/vsteam/Remove-VSTeamIteration"},next:{title:"Remove-VSTeamPolicy",permalink:"/vsteam-docs/modules/vsteam/Remove-VSTeamPolicy"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-MemberDescriptor",id:"-memberdescriptor",children:[]},{value:"-ContainerDescriptor",id:"-containerdescriptor",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:l};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"remove-vsteammembership"},"Remove-VSTeamMembership"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Removes a membership to a container."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Remove-VSTeamMembership [-MemberDescriptor] <String> [-ContainerDescriptor] <String> [-Force] [-WhatIf]\n [-Confirm] [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Removes a membership to a container."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> $user = Get-VSTeamUser | ? DisplayName -eq 'Test User'\nPS C:\\> $group = Get-VSTeamGroup | ? DisplayName -eq 'Endpoint Administrators'\nPS C:\\> Remove-VSTeamMembership -MemberDescriptor $user.Descriptor -ContainerDescriptor $group.Descriptor\n")),Object(i.b)("p",null,"Removes Test User from the Endpoint Administrators group."),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-memberdescriptor"},"-MemberDescriptor"),Object(i.b)("p",null,"A member descriptor retrieved by Get-VsTeamUser"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-containerdescriptor"},"-ContainerDescriptor"),Object(i.b)("p",null,"A container descriptor retrieved by Get-VsTeamGroup"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-confirm"},"-Confirm"),Object(i.b)("p",null,"Prompts you for confirmation before running the cmdlet."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-force"},"-Force"),Object(i.b)("p",null,"{{ Fill Force Description }}"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-whatif"},"-WhatIf"),Object(i.b)("p",null,"Shows what would happen if the cmdlet runs.\nThe cmdlet is not run."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Get-VsTeamUser")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Get-VsTeamGroup")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Add-VsTeamMembership")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Get-VsTeamMembership")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Test-VsTeamMembership")))}m.isMDXComponent=!0},317:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(r),u=n,d=p["".concat(c,".").concat(u)]||p[u]||b[u]||i;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);