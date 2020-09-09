(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{249:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(9),c=(r(0),r(317)),o={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},i={id:"Get-VSTeamPolicyType",isDocsHomePage:!1,title:"Get-VSTeamPolicyType",description:"Get-VSTeamPolicyType",source:"@site/modules/vsteam/Get-VSTeamPolicyType.md",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamPolicyType",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Get-VSTeamPolicyType.md",sidebar:"modules",previous:{title:"Get-VSTeamPolicy",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamPolicy"},next:{title:"Get-VSTeamPool",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamPool"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 3",id:"example-3",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Id",id:"-id",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:l};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"get-vsteampolicytype"},"Get-VSTeamPolicyType"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Get the policy types in the specified Azure DevOps or Team Foundation Server project."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamPolicyType [-Id <Guid[]>] [-ProjectName] <String> [<CommonParameters>]\n")),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Get the policy types in the specified Azure DevOps or Team Foundation Server project."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamPolicyType -ProjectName Demo\n")),Object(c.b)("p",null,"This command returns all the policy types for the Demo project."),Object(c.b)("h3",{id:"example-3"},"EXAMPLE 3"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamPolicyType -ProjectName Demo -Id 73da726a-8ff9-44d7-8caa-cbb581eac991\n")),Object(c.b)("p",null,"This command gets the policy type by the specified id within the Demo project."),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-id"},"-Id"),Object(c.b)("p",null,"Specifies one policy type by id."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid[]\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(c.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Add-VSTeamPolicy")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Remove-VSTeamPolicy")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Get-VSTeamPolicy")))}m.isMDXComponent=!0},317:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),m=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),b=n,d=u["".concat(o,".").concat(b)]||u[b]||s[b]||c;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);