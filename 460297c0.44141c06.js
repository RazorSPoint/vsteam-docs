(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(317)),i={id:"explore-api",title:"Explore the API"},c={id:"contributing/explore-api",isDocsHomePage:!1,title:"Explore the API",description:"To find the right way to start and creating new cmdlets is not easy when you start. But there are basically two approaches you might want to use.",source:"@site/docs/contributing/explore-api.md",permalink:"/vsteam-docs/docs/contributing/explore-api",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/docs/contributing/explore-api.md",sidebar:"docs",previous:{title:"Introduction",permalink:"/vsteam-docs/docs/contributing/introduction"},next:{title:"Build with Docker",permalink:"/vsteam-docs/docs/contributing/build-with-docker"}},s=[{value:"Use Postman",id:"use-postman",children:[]},{value:"Use Invoke-VSTeamRequest",id:"use-invoke-vsteamrequest",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To find the right way to start and creating new cmdlets is not easy when you start. But there are basically two approaches you might want to use."),Object(a.b)("h2",{id:"use-postman"},"Use Postman"),Object(a.b)("p",null,"To access the REST API, you are going to need a Personal Access Token (PAT). You can learn how to create a PAT from the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://cda.ms/4k"}),"Authenticating with personal access tokens")," topic of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://cda.ms/4k"}),"docs.microsoft.com"),". Once you have a PAT start ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.getpostman.com"}),"Postman"),". If you do not have Postman you can download it from getPostman.com."),Object(a.b)("p",null,"I normally begin with Get-xxx function of any API. For the purpose of this document I am going to use the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://cda.ms/4m"}),"User Entitlements API"),". This function will combine the Get and List APIs.  I will begin with List. Using the sample request enter the data into Postman."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-http"}),"GET 'https://vsaex.dev.azure.com/{organization}/_apis/userentitlements?top={top}&skip={skip}&api-version=5.1-preview.2'\n")),Object(a.b)("p",null,"Replace ",Object(a.b)("inlineCode",{parentName:"p"},"{organization}"),' with just the portion of your Azure DevOps (AzD) URL after "',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://dev.azure.com%22"}),'https://dev.azure.com"')," For ",Object(a.b)("inlineCode",{parentName:"p"},"{top}")," I am going to enter 100 and for ",Object(a.b)("inlineCode",{parentName:"p"},"{skip}")," 0. Postman should look similar to the image below."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/docs/contributing/images/contributing_postmanGet.png",alt:"Postman Get Request"}))),Object(a.b)("p",null,'Now before we press Send we have to enter our PAT. Select "Basic Auth" for Type under Authorization. You can leave the Username empty. For your Password copy and paste in your PAT.'),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/docs/contributing/images/contributing_postmanAuth.png",alt:"Postman Auth"}))),Object(a.b)("p",null,"Now you can press Send. Postman will issue the request and display the results at the bottom of the user interface."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/docs/contributing/images/contributing_postmanResponse.png",alt:"Postman Auth"}))),Object(a.b)("p",null,"This confirms that we know how to build a complete request to the service. This is an opportunity to explore all the parameters of the API and make sure you know what to expect."),Object(a.b)("h2",{id:"use-invoke-vsteamrequest"},"Use Invoke-VSTeamRequest"))}u.isMDXComponent=!0},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,d=l["".concat(i,".").concat(b)]||l[b]||m[b]||a;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);