"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15795],{35318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(25773),a=(t(27378),t(35318));const o={custom_edit_url:null},i="askui UI Controller Docker Images",s={unversionedId:"general/Continuous Integration/askui-ui-controller-docker-images",id:"version-0.1.6/general/Continuous Integration/askui-ui-controller-docker-images",title:"askui UI Controller Docker Images",description:"We maintain Docker Images for running tests with askui inside a Docker Container, e.g., locally or in a CI/CD pipeline. The Images are based on Ubuntu (amd64) images and contain the askui UI Controller (also known as the AskuiControlServer) and a browser. Currently, we offer some of the latest versions of Chrome and Firefox. The askui library connects to the askui UI Controller inside the Docker container to execute the test steps inside it.",source:"@site/versioned_docs/version-0.1.6/general/04-Continuous Integration/askui-ui-controller-docker-images.md",sourceDirName:"general/04-Continuous Integration",slug:"/general/Continuous Integration/askui-ui-controller-docker-images",permalink:"/docs/0.1.6/general/Continuous Integration/askui-ui-controller-docker-images",draft:!1,editUrl:null,tags:[],version:"0.1.6",frontMatter:{custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"Speed Up Execution",permalink:"/docs/0.1.6/general/Best Practice/speed_up_execution"},next:{title:"Gitlab CI/CD",permalink:"/docs/0.1.6/general/Continuous Integration/gitlab-ci"}},l={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Starting Container <em>Manually</em>",id:"starting-container-manually",level:3},{value:"Starting Container from Within <code>beforeAll()</code> Using Testcontainers",id:"starting-container-from-within-beforeall-using-testcontainers",level:3},{value:"Connect via VNC",id:"connect-via-vnc",level:2}],c={toc:u};function p(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"askui-ui-controller-docker-images"},"askui UI Controller Docker Images"),(0,a.kt)("p",null,"We maintain Docker Images for running tests with askui inside a Docker Container, e.g., locally or in a CI/CD pipeline. The Images are based on Ubuntu (amd64) images and contain the askui UI Controller (also known as the ",(0,a.kt)("em",{parentName:"p"},"AskuiControlServer"),") and a browser. Currently, we offer some of the latest versions of Chrome and Firefox. The askui library connects to the askui UI Controller inside the Docker container to execute the test steps inside it."),(0,a.kt)("p",null,"You can find our images on ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/askuigmbh/askui-ui-controller"},"DockerHub"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The following environment variables can be used for configuring the Docker Container started from one of our Docker Images:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ENABLE_VNC"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")," to enable VNC so that you can connect and observe whats happening inside the container. The VNC server is bound to port ",(0,a.kt)("inlineCode",{parentName:"td"},"5900")," of the container.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SCREEN_RESOLUTION"),(0,a.kt)("td",{parentName:"tr",align:null},"1920x1080"),(0,a.kt)("td",{parentName:"tr",align:null},"The screen resolution used inside the container in the format ",(0,a.kt)("inlineCode",{parentName:"td"},"<width>x<height>"),".")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The askui UI Controller is bound to port ",(0,a.kt)("inlineCode",{parentName:"p"},"6769")," of the container so this needs to be exposed."),(0,a.kt)("h3",{id:"starting-container-manually"},"Starting Container ",(0,a.kt)("em",{parentName:"h3"},"Manually")),(0,a.kt)("p",null,"You can pull an Image using ",(0,a.kt)("inlineCode",{parentName:"p"},"docker pull"),", e.g.,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull askuigmbh/askui-ui-controller:v0.10.0-firefox-82.0.3-amd64\n")),(0,a.kt)("p",null,"and, then, start the corresponding Container using "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -e ENABLE_VNC=true -p 6769:6769 -p 5900:5900 askuigmbh/askui-ui-controller:v0.10.0-firefox-82.0.3-amd64\n")),(0,a.kt)("h3",{id:"starting-container-from-within-beforeall-using-testcontainers"},"Starting Container from Within ",(0,a.kt)("inlineCode",{parentName:"h3"},"beforeAll()")," Using Testcontainers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/testcontainers/testcontainers-node"},"Testcontainers")," is a Node.js library that supports starting Docker Containers from within tests and throwing them away afterwards."),(0,a.kt)("p",null,"To use it, first install it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D testcontainers\n")),(0,a.kt)("p",null,"After that, you can adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.setup.ts")," that is created when running ",(0,a.kt)("inlineCode",{parentName:"p"},"npx askui init")," like in the following example starting the askui UI Controller container just before all tests are run and connecting to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AskuiClient, AskuiControlServer } from 'askui';\nimport { GenericContainer, StartedTestContainer } from 'testcontainers';\n\nfunction getDockerImageName(): string {\n  const askuiUiControllerVersion = 'v0.10.0';\n    const browser = 'firefox';\n    const browserVersion = '82.0.3';\n    const osArch = 'amd64';\n    const containerPath = `askuigmbh/askui-ui-controller:${askuiUiControllerVersion}-${browser}-${browserVersion}-${osArch}`;\n}\n\nfunction startTestContainer(): StartedTestContainer {\n    container = await new GenericContainer(getDockerImageName())\n      .withEnv('ENABLE_VNC', 'true')\n      .withEnv('SCREEN_RESOLUTION', '1920x1080')\n      .withExposedPorts(6769, 5900)\n      .start();\n\n    console.log(`VNC link: ${container.getHost()}:${container.getMappedPort(5900)}`);\n\n    return container;\n}\n\nlet testContainer: StartedTestContainer\n\n// Server for controlling the operating system\nlet askuiServer: AskuiControlServer;\n\nconst controluiServerUrl = process.env.CI_JOB_ID ? 'askui-runner' : 'localhost';\n\n// Client is necessary to use the askui API\n// eslint-disable-next-line import/no-mutable-exports\nlet aui: AskuiClient;\n\njest.setTimeout(60 * 1000 * 60);\n\nbeforeAll(async () => {\n testContainer = startTestContainer();\n\n  if (!(process.env.CI_JOB_ID)) {\n    askuiServer = new AskuiControlServer();\n    await askuiServer.start();\n  }\n\n  aui = new AskuiClient({\n    controlServerUrl: `http://${controluiServerUrl}:6769`,\n  });\n\n  await aui.connect();\n});\n\nafterAll(async () => {\n  if (!(process.env.CI_JOB_ID)) {\n    await askuiServer.stop();\n  }\n\n  aui.close();\n\n  testContainer.stop();\n});\n\nexport { aui };\n")),(0,a.kt)("h2",{id:"connect-via-vnc"},"Connect via VNC"),(0,a.kt)("p",null,"To check what is happening inside a running test container, you can connect via VNC. For this, you need a VNC client like ",(0,a.kt)("a",{parentName:"p",href:"https://remmina.org/"},"Remmina"),". When starting the ",(0,a.kt)("a",{parentName:"p",href:"#starting-container-manually"},"Docker Container manually"),", you have to map the interal port ",(0,a.kt)("inlineCode",{parentName:"p"},"5900")," to a free port on your machine that you, then, can connect to. When ",(0,a.kt)("a",{parentName:"p",href:"#starting-container-from-within-beforeall-using-testcontainers"},"using the testcontainers example code"),", the VNC port to connect to is logged to the console. "),(0,a.kt)("p",null,"When connecting, enter the password ",(0,a.kt)("inlineCode",{parentName:"p"},"askui")," when asked."),(0,a.kt)("p",null,"Example of a VNC connection with a Chrome browser running inside a container:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VNC Example",src:t(12890).Z,width:"2562",height:"1415"})))}p.isMDXComponent=!0},12890:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vnc-example-9077144d46d3f03f74248609d25a18a5.png"}}]);