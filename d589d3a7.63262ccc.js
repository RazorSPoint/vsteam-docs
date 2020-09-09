(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{289:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),o=(r(0),r(317)),c={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},l={id:"getting-started",isDocsHomePage:!0,title:"Getting Started",description:"Introduction",source:"@site/docs/getting-started.md",permalink:"/vsteam-docs/docs/",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/docs/getting-started.md",sidebar_label:"Getting Started",sidebar:"docs",next:{title:"Code of Conduct",permalink:"/vsteam-docs/docs/code-of-conduct"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Module Dependencies",id:"module-dependencies",children:[]}],s={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"VSTeam is a PowerShell module with commands for accessing your ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cda.ms/Bf"}),"Azure DevOps Server (previously named Visual Studio Team Foundation Server) 2017/2018")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cda.ms/Bf"}),"Azure DevOps (previously named Visual Studio Team Services)"),"."),Object(o.b)("p",null,"The VSTeam module is also a provider allowing users to navigate their ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cda.ms/Bf"}),"Azure DevOps Server")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cda.ms/Bf"}),"Azure DevOps")," as a file system."),Object(o.b)("p",null,"To get started you can visit this blog ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.donovanbrown.com/post/PowerShell-I-would-like-you-to-meet-TFS-and-VSTS"}),"PowerShell I would like you to meet TFS and VSTS")),Object(o.b)("p",null,"Documentation of the cmdlets can be found in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/DarqueWarrior/vsteam/blob/master/docs/readme.md"}),"docs README")," or using ",Object(o.b)("inlineCode",{parentName:"p"},"Get-Help VSTeam")," once the module is installed."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Windows PowerShell 5.0 or newer."),Object(o.b)("li",{parentName:"ul"},"PowerShell Core.")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Install this module from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.powershellgallery.com/packages/VSTeam"}),"PowerShell Gallery")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"Install-Module -Name VSTeam -Scope CurrentUser\n")),Object(o.b)("h2",{id:"module-dependencies"},"Module Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.powershellgallery.com/packages/SHiPS/"}),"SHiPS module")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.powershellgallery.com/packages/Trackyon.Utils"}),"Trackyon.Utils module"))))}u.isMDXComponent=!0},317:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);