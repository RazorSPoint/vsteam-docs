(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{251:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(9),c=(r(0),r(313)),o={},l={id:"Module/Set-VSTeamApproval",isDocsHomePage:!1,title:"Set-VSTeamApproval",description:"Set-VSTeamApproval",source:"@site/docs\\Module\\Set-VSTeamApproval.md",permalink:"/vsteam-docs/docs/Module/Set-VSTeamApproval",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Set-VSTeamApproval.md"},p=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"-------------------------- EXAMPLE 1 --------------------------",id:"---------------------------example-1---------------------------",children:[]},{value:"-------------------------- EXAMPLE 2 --------------------------",id:"---------------------------example-2---------------------------",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Id",id:"-id",children:[]},{value:"-Status",id:"-status",children:[]},{value:"-Approver",id:"-approver",children:[]},{value:"-Comment",id:"-comment",children:[]},{value:"-Force",id:"-force",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],i={rightToc:p};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"set-vsteamapproval"},"Set-VSTeamApproval"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Sets the status of approval to Approved, Rejected, Pending, or ReAssigned."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Set-VSTeamApproval sets the status of approval to Approved, Rejected, Pending, or ReAssigned."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h3",{id:"---------------------------example-1---------------------------"},"-------------------------- EXAMPLE 1 --------------------------"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Get-VSTeamApproval | Set-VSTeamApproval\n")),Object(c.b)("p",null,"This command sets all pending approvals to approved."),Object(c.b)("h3",{id:"---------------------------example-2---------------------------"},"-------------------------- EXAMPLE 2 --------------------------"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Set-VSTeamApproval -Id 1 -Status Rejected\n")),Object(c.b)("p",null,"This command rejects approval with Id of 1."),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so\nyou do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 0\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(c.b)("h3",{id:"-id"},"-Id"),Object(c.b)("p",null,"Specifies the approval IDs of the approvals to set."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(c.b)("h3",{id:"-status"},"-Status"),Object(c.b)("p",null,"Specifies the status to set for the approval. The acceptable values for this parameter are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Approved"),Object(c.b)("li",{parentName:"ul"},"Rejected"),Object(c.b)("li",{parentName:"ul"},"Pending"),Object(c.b)("li",{parentName:"ul"},"ReAssigned")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\nDefault value: Approved\n")),Object(c.b)("h3",{id:"-approver"},"-Approver"),Object(c.b)("p",null,"Specifies the user to whom the approval has been re-assigned to Alias of the user ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:chuckreinhart@outlook.com"}),"chuckreinhart@outlook.com"),", for example."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\n")),Object(c.b)("h3",{id:"-comment"},"-Comment"),Object(c.b)("p",null,"Specifies the comment to be stored with this approval."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\n")),Object(c.b)("h3",{id:"-force"},"-Force"),Object(c.b)("p",null,"Forces the function without confirmation"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nRequired: false\nPosition: Named\nAccept pipeline input: false\nParameter Sets: (All)\n")),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"))}u.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),u=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||c;return r?n.a.createElement(m,l(l({ref:t},i),{},{components:r})):n.a.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);