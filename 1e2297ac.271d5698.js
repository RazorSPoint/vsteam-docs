(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),c=(n(0),n(313)),i={},o={id:"Module/Get-VSTeam",isDocsHomePage:!1,title:"Get-VSTeam",description:"Get-VSTeam",source:"@site/docs\\Module\\Get-VSTeam.md",permalink:"/vsteam-docs/docs/Module/Get-VSTeam",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Get-VSTeam.md"},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Skip",id:"-skip",children:[]},{value:"-TeamId",id:"-teamid",children:[]},{value:"-Top",id:"-top",children:[]},{value:"-Name",id:"-name",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"Team.Team",id:"teamteam",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"get-vsteam"},"Get-VSTeam"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Returns a team."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Returns a team."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so\nyou do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 0\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(c.b)("h3",{id:"-skip"},"-Skip"),Object(c.b)("p",null,"The number of items to skip."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: List\n")),Object(c.b)("h3",{id:"-teamid"},"-TeamId"),Object(c.b)("p",null,"The id of the team to retrieve."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String[]\nParameter Sets: ByID\n")),Object(c.b)("h3",{id:"-top"},"-Top"),Object(c.b)("p",null,"Specifies the maximum number to return."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: List\n")),Object(c.b)("h3",{id:"-name"},"-Name"),Object(c.b)("p",null,"The name of the team to retrieve."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String[]\nParameter Sets: ByName\n")),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h3",{id:"teamteam"},"Team.Team"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"))}u.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,d=b["".concat(i,".").concat(s)]||b[s]||m[s]||c;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);