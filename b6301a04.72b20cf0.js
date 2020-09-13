(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{266:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),c=(a(0),a(317)),i={id:"Update-VSTeamProject",title:"Update-VSTeamProject",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamProject.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},l={id:"Update-VSTeamProject",isDocsHomePage:!1,title:"Update-VSTeamProject",description:"Update-VSTeamProject",source:"@site/modules/vsteam/Update-VSTeamProject.md",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamProject",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamProject.md",sidebar:"modules",previous:{title:"Update-VSTeamProfile",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamProfile"},next:{title:"Update-VSTeamPullRequest",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamPullRequest"}},o=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ByName (Default)",id:"byname-default",children:[]},{value:"ByID",id:"byid",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-NewName",id:"-newname",children:[]},{value:"-NewDescription",id:"-newdescription",children:[]},{value:"-Id",id:"-id",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"-Name",id:"-name",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"update-vsteamproject"},"Update-VSTeamProject"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Updates the project name, description or both."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("h3",{id:"byname-default"},"ByName (Default)"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Update-VSTeamProject [-NewName <String>] [-NewDescription <String>] [-Force] [-Name <String>] [-WhatIf]\n [-Confirm] [<CommonParameters>]\n")),Object(c.b)("h3",{id:"byid"},"ByID"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Update-VSTeamProject [-NewName <String>] [-NewDescription <String>] [-Force] [-Id <String>] [-WhatIf]\n [-Confirm] [<CommonParameters>]\n")),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Updates the project name, description or both."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Update-VSTeamProject -Name Demo -NewName aspDemo\n")),Object(c.b)("p",null,"This command changes the name of your project from Demo to aspDemo."),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-newname"},"-NewName"),Object(c.b)("p",null,"The new name for the project."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-newdescription"},"-NewDescription"),Object(c.b)("p",null,"The new description for the project."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-id"},"-Id"),Object(c.b)("p",null,"The id of the project to update."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByID\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-force"},"-Force"),Object(c.b)("p",null,"Forces the function without confirmation"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-confirm"},"-Confirm"),Object(c.b)("p",null,"Prompts you for confirmation before running the cmdlet."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-name"},"-Name"),Object(c.b)("p",null,"{{ Fill Name Description }}"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByName\nAliases: ProjectName\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-whatif"},"-WhatIf"),Object(c.b)("p",null,"Shows what would happen if the cmdlet runs.\nThe cmdlet is not run."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(c.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h3",{id:"systemstring"},"System.String"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h3",{id:"systemobject"},"System.Object"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"))}s.isMDXComponent=!0},317:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||c;return a?r.a.createElement(b,l(l({ref:t},p),{},{components:a})):r.a.createElement(b,l({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<c;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);