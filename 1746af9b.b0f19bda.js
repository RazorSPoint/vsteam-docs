(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(279)),l={"external help file":"VSTeam-Help.xml","Module Name":"VSTeam","online version":null,schema:"2.0.0"},o={id:"Add-VSTeamWorkItem",isDocsHomePage:!1,title:"Add-VSTeamWorkItem",description:"Add-VSTeamWorkItem",source:"@site/modules\\vsteam\\Add-VSTeamWorkItem.md",permalink:"/vsteam-docs/modules/vsteam/Add-VSTeamWorkItem",editUrl:"https://github.com/MethodsAndPractices/vsteam/.docs/modules/vsteam/Add-VSTeamWorkItem.md",sidebar:"modules",previous:{title:"Add-VSTeamVariableGroup",permalink:"/vsteam-docs/modules/vsteam/Add-VSTeamVariableGroup"},next:{title:"Add-VSTeamWorkItemAreaPermission",permalink:"/vsteam-docs/modules/vsteam/Add-VSTeamWorkItemAreaPermission"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 2",id:"example-2",children:[]},{value:"EXAMPLE 3",id:"example-3",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Title",id:"-title",children:[]},{value:"-Description",id:"-description",children:[]},{value:"-IterationPath",id:"-iterationpath",children:[]},{value:"-AssignedTo",id:"-assignedto",children:[]},{value:"-WorkItemType",id:"-workitemtype",children:[]},{value:"-ParentId",id:"-parentid",children:[]},{value:"-AdditionalFields",id:"-additionalfields",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"add-vsteamworkitem"},"Add-VSTeamWorkItem"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Adds a work item to your project."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamWorkItem -Title <String> [-Description <String>] [-IterationPath <String>] [-AssignedTo <String>]\n [-ParentId <Int32>] [-AdditionalFields <Hashtable>] [[-ProjectName] <String>] -WorkItemType <String>\n [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Add-VSTeamWorkItem will add a new work item to your project."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'PS C:\\> Set-VSTeamDefaultProject Demo\nPS C:\\> Add-VSTeamWorkItem -Title "New Work Item" -WorkItemType Task\n\nID Title          Status\n-- -----          ------\n6  New Work Item  To Do\n')),Object(i.b)("h3",{id:"example-2"},"EXAMPLE 2"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'PS C:\\> Set-VSTeamDefaultProject Demo\nPS C:\\> Add-VSTeamWorkItem -Title "New Work Item" -WorkItemType Task -Description "This is a description"\n\nID Title          Status\n-- -----          ------\n6  New Work Item  To Do\n')),Object(i.b)("h3",{id:"example-3"},"EXAMPLE 3"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'PS C:\\> Set-VSTeamDefaultProject Demo\nPS C:\\> $additionalFields = @{"System.Tags"= "TestTag"; "System.AreaPath" = "Project\\\\MyPath"}\nPS C:\\> Add-VSTeamWorkItem -Title "New Work Item" -WorkItemType Task -Description "This is a description" -AdditionalFields $additionalFields\n\nID Title          Status\n-- -----          ------\n6  New Work Item  To Do\n')),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-projectname"},"-ProjectName"),Object(i.b)("p",null,"Specifies the team project for which this function operates."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-title"},"-Title"),Object(i.b)("p",null,"The title of the work item"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-description"},"-Description"),Object(i.b)("p",null,"The Description of the work item"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-iterationpath"},"-IterationPath"),Object(i.b)("p",null,"The IterationPath of the work item"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-assignedto"},"-AssignedTo"),Object(i.b)("p",null,"The email address of the user this work item will be assigned to."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-workitemtype"},"-WorkItemType"),Object(i.b)("p",null,"The type of work item to add."),Object(i.b)("p",null,"You can tab complete from a list of available work item types."),Object(i.b)("p",null,"You must use Set-VSTeamDefaultProject to set a default project to enable the tab completion."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-parentid"},"-ParentId"),Object(i.b)("p",null,"The Id of the parent work item that this work item will be related to."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-additionalfields"},"-AdditionalFields"),Object(i.b)("p",null,"Hashtable which contains a key value pair of any field that should be filled with values.\nKey is the internal name of the field and the value is the content of the field being filled.\nE.g.\nthe internal name for the area path is 'System.AreaPath'."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Hashtable\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h3",{id:"systemstring"},"System.String"),Object(i.b)("p",null,"ProjectName"),Object(i.b)("p",null,"WorkItemType"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("p",null,"WorkItemType is a dynamic parameter and use the default project value to query their validate set."),Object(i.b)("p",null,"If you do not set the default project by called Set-VSTeamDefaultProject before calling Add-VSTeamWorkItem you will have to type in the names."),Object(i.b)("p",null,"Any of the basic work item parameters defined in this method, will cause an exception if also added to the parameter AdditionalFields, since it is redundant.\nEither only use the parameter OR define them in the AdditionalFields parameter."),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"))}d.isMDXComponent=!0},279:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,b=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return a?r.a.createElement(b,o(o({ref:t},s),{},{components:a})):r.a.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);