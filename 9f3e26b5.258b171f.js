(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{248:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return o})),i.d(t,"default",(function(){return p}));var n=i(2),a=i(9),r=(i(0),i(317)),l={id:"Test-VSTeamYamlPipeline",title:"Test-VSTeamYamlPipeline",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Test-VSTeamYamlPipeline.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},c={id:"Test-VSTeamYamlPipeline",isDocsHomePage:!1,title:"Test-VSTeamYamlPipeline",description:"Test-VSTeamYamlPipeline",source:"@site/modules/vsteam/Test-VSTeamYamlPipeline.md",permalink:"/vsteam-docs/modules/vsteam/Test-VSTeamYamlPipeline",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Test-VSTeamYamlPipeline.md",sidebar:"modules",previous:{title:"Test-VSTeamMembership",permalink:"/vsteam-docs/modules/vsteam/Test-VSTeamMembership"},next:{title:"Update-VSTeam",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeam"}},o=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"WithFilePath (Default)",id:"withfilepath-default",children:[]},{value:"WithYamlOverride",id:"withyamloverride",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 2",id:"example-2",children:[]},{value:"EXAMPLE 3",id:"example-3",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-PipelineId",id:"-pipelineid",children:[]},{value:"-FilePath",id:"-filepath",children:[]},{value:"-YamlOverride",id:"-yamloverride",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]},{value:"System.Int32",id:"systemint32",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"Team.YamlPipelineResult",id:"teamyamlpipelineresult",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:o};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"test-vsteamyamlpipeline"},"Test-VSTeamYamlPipeline"),Object(r.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(r.b)("p",null,"Tests the commited YAML pipeline files to check for inconsitencies.\nNow, you can try out a YAML pipeline without committing it to a repo or running it.\nGiven an existing pipeline and an optional new YAML payload, this function will give you back the full YAML pipeline."),Object(r.b)("h2",{id:"syntax"},"SYNTAX"),Object(r.b)("h3",{id:"withfilepath-default"},"WithFilePath (Default)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Test-VSTeamYamlPipeline [-PipelineId] <Int32> [-FilePath <String>] [-ProjectName] <String> [<CommonParameters>]\n")),Object(r.b)("h3",{id:"withyamloverride"},"WithYamlOverride"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Test-VSTeamYamlPipeline [-PipelineId] <Int32> [-YamlOverride <String>] [-ProjectName] <String>\n [<CommonParameters>]\n")),Object(r.b)("h2",{id:"description"},"DESCRIPTION"),Object(r.b)("p",null,"Tests the commited YAML pipeline files to check for inconsitencies.\nNow, you can try out a YAML pipeline without committing it to a repo or running it.\nGiven an existing pipeline and an optional new YAML payload, this function will give you back the full YAML pipeline."),Object(r.b)("h2",{id:"examples"},"EXAMPLES"),Object(r.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Test-VSTeamYamlPipeline -Project DemoProject -PipelineId 24 -FilePath './azure-pipelines.yml'\n\nName Id url                                                                                           state\n---\nid: Test-VSTeamYamlPipeline\ntitle: Test-VSTeamYamlPipeline\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Test-VSTeamYamlPipeline.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---                                                                                           -----\n     -1 https://dev.azure.com/devsdb/3428bdd7-9fed-4c30-a6c9-fcb52f084ab9/_apis/pipelines/24/runs/-1 unknown\n")),Object(r.b)("p",null,"This example checks the YAML pipeline with ID 24 and the file './azure-pipelines.yml' for consistency on Azure DevOps to see if the changes still work."),Object(r.b)("h3",{id:"example-2"},"EXAMPLE 2"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> $yamlOverride = [string](Get-Content -raw $FilePath)\nPS C:\\> Test-VSTeamYamlPipeline -Project DemoProject -PipelineId 24 -YamlOverride $yamlOverride\n")),Object(r.b)("p",null,"This example checks the YAML pipeline with ID 24 and the content of a yaml file in the variable $yamlOverride for consistency on Azure DevOps to see if the changes still work."),Object(r.b)("h3",{id:"example-3"},"EXAMPLE 3"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> $yamlOverride = [string](Get-Content -raw $FilePath)\nPS C:\\> Test-VSTeamYamlPipeline -Project DemoProject -PipelineId 24\n")),Object(r.b)("p",null,"This example checks the YAML pipeline with ID 24 for consistency on Azure DevOps to see if the existing YAML of the pipeline works."),Object(r.b)("h2",{id:"parameters"},"PARAMETERS"),Object(r.b)("h3",{id:"-projectname"},"-ProjectName"),Object(r.b)("p",null,"Specifies the team project for which this function operates."),Object(r.b)("p",null,"You can tab complete from a list of available projects."),Object(r.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-pipelineid"},"-PipelineId"),Object(r.b)("p",null,"Id of the YAML pipeline to be checked"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-filepath"},"-FilePath"),Object(r.b)("p",null,"Path to the file that should be checked"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: WithFilePath\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-yamloverride"},"-YamlOverride"),Object(r.b)("p",null,"{{ Fill YamlOverride Description }}"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: WithYamlOverride\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(r.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(r.b)("h2",{id:"inputs"},"INPUTS"),Object(r.b)("h3",{id:"systemstring"},"System.String"),Object(r.b)("p",null,"FilePath"),Object(r.b)("h3",{id:"systemint32"},"System.Int32"),Object(r.b)("p",null,"PipelineId"),Object(r.b)("h2",{id:"outputs"},"OUTPUTS"),Object(r.b)("h3",{id:"teamyamlpipelineresult"},"Team.YamlPipelineResult"),Object(r.b)("h2",{id:"notes"},"NOTES"),Object(r.b)("p",null,"If you do not set the default project by called Set-VSTeamDefaultProject before calling Add-VSTeamBuild you will have to type in the names."),Object(r.b)("p",null,"Currently the API that is used by this cmdlet is only supporting YAML pipelines without template references.\nThis will be supported soon.\nsee the issue in GitHub: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/azure-pipelines-yaml/issues/34#issuecomment-591092498"}),"https://github.com/microsoft/azure-pipelines-yaml/issues/34#issuecomment-591092498")," (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/azure-pipelines-yaml/issues/34#issuecomment-591092498"}),"https://github.com/microsoft/azure-pipelines-yaml/issues/34#issuecomment-591092498"),")"),Object(r.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Get-VSTeamBuildDefinition")))}p.isMDXComponent=!0},317:function(e,t,i){"use strict";i.d(t,"a",(function(){return m})),i.d(t,"b",(function(){return b}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(i),d=n,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return i?a.a.createElement(b,c(c({ref:t},s),{},{components:i})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=i[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);