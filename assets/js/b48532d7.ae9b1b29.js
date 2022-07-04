"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18518],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=i,c=d["".concat(s,".").concat(k)]||d[k]||m[k]||r;return n?l.createElement(c,a(a({ref:t},u),{},{components:n})):l.createElement(c,a({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<r;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=n(25773),i=(n(27378),n(35318));const r={custom_edit_url:null},a="askui UI Controller",o={unversionedId:"api/Configuration/askui-ui-controller",id:"version-0.2.0/api/Configuration/askui-ui-controller",title:"askui UI Controller",description:"Table of Contents",source:"@site/versioned_docs/version-0.2.0/api/06-Configuration/askui-ui-controller.md",sourceDirName:"api/06-Configuration",slug:"/api/Configuration/askui-ui-controller",permalink:"/docs/0.2.0/api/Configuration/askui-ui-controller",draft:!1,editUrl:null,tags:[],version:"0.2.0",frontMatter:{custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"askui UI Control Client",permalink:"/docs/0.2.0/api/Configuration/askui-ui-control-client"}},s={},p=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:2},{value:"binaryVersion",id:"binaryversion",level:3},{value:"display",id:"display",level:3},{value:"host",id:"host",level:3},{value:"logFilePath",id:"logfilepath",level:3},{value:"logLevel",id:"loglevel",level:3},{value:"minimize",id:"minimize",level:3},{value:"overWriteBinary",id:"overwritebinary",level:3},{value:"port",id:"port",level:3},{value:"Example",id:"example",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,l.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"askui-ui-controller"},"askui UI Controller"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#properties"},"Properties"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#binaryversion"},"binaryVersion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#display"},"display")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#host"},"host")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#logfilepath"},"logFilePath")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#loglevel"},"logLevel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#minimize"},"minimize")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overwritebinary"},"overWriteBinary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#port"},"port")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#example"},"Example"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"binaryversion"},"binaryVersion"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"binaryVersion"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"latest"))),(0,i.kt)("p",null,"There are different versions of the askui UI Controller. Not all versions are supported for all operating systems.\nYou can specify which binary version of server you want to download and use. The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," which will\ndownload the newest version."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"display"},"display"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"display"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"))),(0,i.kt)("p",null,"You can choose on which display you want to excecute all\ntests. You can only perform all tests on one display.\nThe application which you want to test should be open and selected on your chosen display."),(0,i.kt)("p",null,"The default value of display is ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," which is your main monitor. If you want to use your\nsecond monitor you can change the value to ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," (",(0,i.kt)("inlineCode",{parentName:"p"},"2")," for your third monitor etc.)."),(0,i.kt)("p",null,"There is also a possibility to detect the value of your monitors.\nAfter the start of the askui UI Controller you should see an askui icon. After clicking on this icon you can choose the option ",(0,i.kt)("inlineCode",{parentName:"p"},"Show"),".\nYou will see the same window as the following image."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select Monitor Option",src:n(88960).Z,width:"512",height:"358"})),(0,i.kt)("p",null," Now you can identify the order of your monitors and you can also select the monitor in this configuration."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"host"},"host"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"host"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1"))),(0,i.kt)("p",null,"The host the askui UI Controller is running on."),(0,i.kt)("h3",{id:"logfilepath"},"logFilePath"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"logFilePath"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"<temp-dir>/askui/askui-server.log")," ")),(0,i.kt)("p",null,"It is possible to specify a path for your log files. Per default we create the askui-server.log file and askui folder in your temp folder."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loglevel"},"logLevel"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"logLevel"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"LogLevels")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"debug"))),(0,i.kt)("p",null,"You can set the log level using the ",(0,i.kt)("inlineCode",{parentName:"p"},"LogLevels"),". The following values are available: ",(0,i.kt)("inlineCode",{parentName:"p"},'"fatal"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"error"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"warn"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"info"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"debug"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"trace"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"silent"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"verbose"'),". All log levels are defined in an ",(0,i.kt)("inlineCode",{parentName:"p"},"LogLevels")," enum."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"minimize"},"minimize"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minimize"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))),(0,i.kt)("p",null,"The default value of this property is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". This means that\naskui UI Controller will be started as minimized window. "),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"overwritebinary"},"overWriteBinary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"overWriteBinary"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("p",null,"Download the provided Version of askui UI Controller. If a version is already downloaded. This version will be overwritten."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"port"},"port"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"port"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," - Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"6769"))),(0,i.kt)("p",null,"The port the askui UI Controller is running on."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UiControlClient, UiController, LogLevels } from 'askui';\n\ndescribe('jest with askui', () => {\n  \n  // Server for controlling the operating system\n  let uiController: UiController;\n  \n  beforeAll(async () => {\n    uiController = new UiController({\n    \n    // choosing the second monitor \n    display: 1,\n\n    // download the latest version of the server\n    binaryVersion: 'latest',\n\n    // start askui UI Controller as minimized application\n    minimize: true,\n\n    // using error loglevel\n    logLevel: LogLevels.ERROR,\n\n    });\n  })\n})\n")))}m.isMDXComponent=!0},88960:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/select-monitor-7fb53b3c1759a29abc877c37097c9022.png"}}]);