"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7471],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(5773),i=n(808),a=(n(7378),n(5318)),o=["components"],l={custom_edit_url:null},s="Gitlab CI/CD",c={unversionedId:"general/Continuous Integration/gitlab-ci",id:"general/Continuous Integration/gitlab-ci",title:"Gitlab CI/CD",description:"The askui library can be integrated into a Gitlab CI/CD Pipeline.",source:"@site/docs/general/04-Continuous Integration/gitlab-ci.md",sourceDirName:"general/04-Continuous Integration",slug:"/general/Continuous Integration/gitlab-ci",permalink:"/docs/next/general/Continuous Integration/gitlab-ci",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"askui UI Controller Docker Images",permalink:"/docs/next/general/Continuous Integration/askui-ui-controller-docker-images"},next:{title:"Annotate Image",permalink:"/docs/next/general/Tooling/annotate-image"}},u={},p=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"How This Configuration Works",id:"how-this-configuration-works",level:3},{value:"Testing Inside Gitlab-CI",id:"testing-inside-gitlab-ci",level:3}],d={toc:p};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitlab-cicd"},"Gitlab CI/CD"),(0,a.kt)("p",null,"The askui library can be integrated into a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci"},"Gitlab CI/CD Pipeline"),"."),(0,a.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,a.kt)("p",null,"The example below is a basic CI/CD pipeline definition (",(0,a.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),") with one ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," stage and a ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," job within it to run tests with the askui library. It assumes you have set up a project with the askui library as described under ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/general/Getting%20Started/writing-your-first-test"},"Getting Started"),"."),(0,a.kt)("p",null,"Besides that, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<docker_image_path>")," needs to be replaced by ",(0,a.kt)("a",{parentName:"p",href:"./askui-ui-controller-docker-images"},"one of our Docker Images"),". Moreover, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<alias_name>")," should replaced by a name that will be used to access the service from the job's container (see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/services/#define-services-in-the-gitlab-ciyml-file"},"Services in Gitlab"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"stages:\n  - test\n\ntest:\n  stage: test\n  image: node:16.13\n  before_script:\n    - npm ci\n  services:\n    - name: <docker_image_path>\n      alias: <alias_name>\n  script:\n    - npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts \n")),(0,a.kt)("h3",{id:"how-this-configuration-works"},"How This Configuration Works"),(0,a.kt)("p",null,"On push to the repository on Gitlab, a Gitlab-hosted Linux instance will start and execute the stages."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The code of your project is checked out."),(0,a.kt)("li",{parentName:"ul"},"Scripts within the stages will be executed:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pull the image for the service."),(0,a.kt)("li",{parentName:"ul"},"Installs npm dependencies including askui."),(0,a.kt)("li",{parentName:"ul"},"Starts testing.")))),(0,a.kt)("h3",{id:"testing-inside-gitlab-ci"},"Testing Inside Gitlab-CI"),(0,a.kt)("p",null,"The main difference between ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/general/Getting%20Started/writing-your-first-test"},"the first test suite using askui example")," and tests inside Gitlab-CI is the askui server URL. Using Gitlab services, the askui server URL is ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<alias_name>:6769")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:6769"),". To have a test that can work locally and inside the Gitlab CI we suggest that you create the client like in the following example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const controluiServerUrl = process.env.CI_JOB_ID ? '<alias_name>' : 'localhost';\naui = new AskuiClient({\n  controlServerUrl: `http://${controluiServerUrl}:6769`,\n});\n")))}g.isMDXComponent=!0}}]);