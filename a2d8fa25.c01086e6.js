(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{214:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var r=a(2),n=a(6),l=(a(0),a(279)),i={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},o={id:"Show-VSTeamRelease",isDocsHomePage:!1,title:"Show-VSTeamRelease",description:"Show-VSTeamRelease",source:"@site/modules\\vsteam\\Show-VSTeamRelease.md",permalink:"/vsteam-docs/modules/vsteam/Show-VSTeamRelease",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Show-VSTeamRelease.md",sidebar:"modules",previous:{title:"Show-VSTeamPullRequest",permalink:"/vsteam-docs/modules/vsteam/Show-VSTeamPullRequest"},next:{title:"Show-VSTeamReleaseDefinition",permalink:"/vsteam-docs/modules/vsteam/Show-VSTeamReleaseDefinition"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ById (Default)",id:"byid-default",children:[]},{value:"ByID",id:"byid",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-id",id:"-id",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"Team.Release",id:"teamrelease",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:c};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"show-vsteamrelease"},"Show-VSTeamRelease"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Opens the release summary in the default browser."),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("h3",{id:"byid-default"},"ById (Default)"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"Show-VSTeamRelease -ProjectName <String> [<CommonParameters>]\n")),Object(l.b)("h3",{id:"byid"},"ByID"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"Show-VSTeamRelease -id <Int32> -ProjectName <String> [<CommonParameters>]\n")),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"Opens the release summary in the default browser."),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"PS C:\\> Show-VSTeamRelease -ProjectName Demo -Id 3\n")),Object(l.b)("p",null,"This command will open a web browser with the summary of release 3."),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-id"},"-id"),Object(l.b)("p",null,"Specifies release by ID."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: ByID\nAliases: ReleaseID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-projectname"},"-ProjectName"),Object(l.b)("p",null,"{{ Fill ProjectName Description }}"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(l.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h3",{id:"teamrelease"},"Team.Release"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("p",null,"You can pipe the release ID to this function."),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Add-VSTeamRelease")),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Remove-VSTeamRelease")))}m.isMDXComponent=!0},279:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),m=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(a),p=r,d=u["".concat(i,".").concat(p)]||u[p]||b[p]||l;return a?n.a.createElement(d,o(o({ref:t},s),{},{components:a})):n.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);