"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15949],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(25773),a=(r(27378),r(35318));const i={custom_edit_url:null,sidebar_position:2},o="Installing askui",s={unversionedId:"general/Getting Started/getting-started",id:"version-0.2.0/general/Getting Started/getting-started",title:"Installing askui",description:"Requirements",source:"@site/versioned_docs/version-0.2.0/general/02-Getting Started/getting-started.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/getting-started",permalink:"/docs/0.2.0/general/Getting Started/getting-started",draft:!1,editUrl:null,tags:[],version:"0.2.0",sidebarPosition:2,frontMatter:{custom_edit_url:null,sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Why askui?",permalink:"/docs/0.2.0/general/Introduction/why-askui"},next:{title:"Writing Your First Test",permalink:"/docs/0.2.0/general/Getting Started/writing-your-first-test"}},l={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-askui"},"Installing askui"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node.js version 16 or above"),(0,a.kt)("li",{parentName:"ul"},"npm version 7.10 or above"),(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"li"},"Linux"),": ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.2.0/general/Troubleshooting/askui-ui-controller-starting-problems#wayland"},"Information for Wayland"),".")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"If you have not yet set up a project using npm as your package manager, you can easily do so by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm init -y")," inside the directory that you want your project to be in. This is going to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file with a description of your project, all your dependencies etc. If you already have a project that you would like to include the askui library in for writing up tests, simply navigate to that project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D askui\n")),(0,a.kt)("p",null,"While the askui library provides you with a way of controlling your OS, it does not yet provide everything you need for writing and executing a test. You also need a way of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"writing up the actual test,"),(0,a.kt)("li",{parentName:"ul"},"writing up assertions to test wether an expectation holds true and, last but not least,"),(0,a.kt)("li",{parentName:"ul"},"a way to execute the tests, i.e., a test runner.")),(0,a.kt)("p",null,"One framework which provides all of this out of the box is ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," which we are going to use in this example as it is quite easy to get started with and well-known. But feel free to use another test framework, such as ",(0,a.kt)("a",{parentName:"p",href:"https://jasmine.github.io/"},"Jasmine")," or ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha"),". How you use the askui library should be pretty much the same across these frameworks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D jest\n")),(0,a.kt)("p",null,"We are going to use ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," for writing the test instead of plain JavaScript. Run the following command to install Typescript, TS-Node for using Typescript together with Node.js and the types of Jest and Node.js."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D @types/jest ts-jest ts-node typescript\n")),(0,a.kt)("p",null,"Now, we are ready to write our first test."))}c.isMDXComponent=!0}}]);