(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(279)),i={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},s={id:"Get-VSTeamAccessControlList",isDocsHomePage:!1,title:"Get-VSTeamAccessControlList",description:"Get-VSTeamAccessControlList",source:"@site/modules\\vsteam\\Get-VSTeamAccessControlList.md",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamAccessControlList",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Get-VSTeamAccessControlList.md",sidebar:"modules",previous:{title:"Get-VSTeam",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeam"},next:{title:"Get-VSTeamAgent",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeamAgent"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ByNamespace (Default)",id:"bynamespace-default",children:[]},{value:"ByNamespaceId",id:"bynamespaceid",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-SecurityNamespace",id:"-securitynamespace",children:[]},{value:"-SecurityNamespaceId",id:"-securitynamespaceid",children:[]},{value:"-Token",id:"-token",children:[]},{value:"-Descriptors",id:"-descriptors",children:[]},{value:"-IncludeExtendedInfo",id:"-includeextendedinfo",children:[]},{value:"-Recurse",id:"-recurse",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"VSTeamAccessControlList",id:"vsteamaccesscontrollist",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],o={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"get-vsteamaccesscontrollist"},"Get-VSTeamAccessControlList"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Return a list of access control lists for the specified security namespace and token.\nAll ACLs in the security namespace will be retrieved if no optional parameters are provided."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("h3",{id:"bynamespace-default"},"ByNamespace (Default)"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamAccessControlList -SecurityNamespace <VSTeamSecurityNamespace> [-Token <String>]\n [-Descriptors <String[]>] [-IncludeExtendedInfo] [-Recurse] [<CommonParameters>]\n")),Object(c.b)("h3",{id:"bynamespaceid"},"ByNamespaceId"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamAccessControlList -SecurityNamespaceId <Guid> [-Token <String>] [-Descriptors <String[]>]\n [-IncludeExtendedInfo] [-Recurse] [<CommonParameters>]\n")),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Return a list of access control lists for the specified security namespace and token.\nAll ACLs in the security namespace will be retrieved if no optional parameters are provided."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamSecurityNamespace | Select-Object -First 1 | Get-VSTeamAccessControlList\n")),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-securitynamespace"},"-SecurityNamespace"),Object(c.b)("p",null,"Security namespace identifier."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamSecurityNamespace\nParameter Sets: ByNamespace\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-securitynamespaceid"},"-SecurityNamespaceId"),Object(c.b)("p",null,"Security namespace identifier."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid\nParameter Sets: ByNamespaceId\nAliases: ID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-token"},"-Token"),Object(c.b)("p",null,"Security token"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-descriptors"},"-Descriptors"),Object(c.b)("p",null,"An optional filter string containing a list of identity descriptors whose ACEs should be retrieved.\nIf this is not set entire ACLs will be returned."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String[]\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-includeextendedinfo"},"-IncludeExtendedInfo"),Object(c.b)("p",null,"If set, populate the extended information properties for the access control entries contained in the returned lists."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-recurse"},"-Recurse"),Object(c.b)("p",null,"If true and this is a hierarchical namespace, return child ACLs of the specified token."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(c.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h3",{id:"vsteamaccesscontrollist"},"VSTeamAccessControlList"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"))}p.isMDXComponent=!0},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return n?r.a.createElement(b,s(s({ref:t},o),{},{components:n})):r.a.createElement(b,s({ref:t},o))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<c;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);