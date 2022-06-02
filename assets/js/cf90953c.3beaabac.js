"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7471],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(5773),a=n(808),r=(n(7378),n(5318)),o=["components"],l={custom_edit_url:null},s="Gitlab CI/CD",c={unversionedId:"general/Continuous Integration/gitlab-ci",id:"general/Continuous Integration/gitlab-ci",title:"Gitlab CI/CD",description:"The askui library can be integrated into a Gitlab CI/CD Pipeline.",source:"@site/docs/general/04-Continuous Integration/gitlab-ci.md",sourceDirName:"general/04-Continuous Integration",slug:"/general/Continuous Integration/gitlab-ci",permalink:"/askui/docs/general/Continuous Integration/gitlab-ci",editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"Speed Up Execution",permalink:"/askui/docs/general/Best Practice/speed_up_execution"},next:{title:"Local Docker",permalink:"/askui/docs/general/Continuous Integration/local-docker"}},u={},p=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"How This Configuration Works",id:"how-this-configuration-works",level:3},{value:"Testing Inside Gitlab-CI",id:"testing-inside-gitlab-ci",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gitlab-cicd"},"Gitlab CI/CD"),(0,r.kt)("p",null,"The askui library can be integrated into a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci"},"Gitlab CI/CD Pipeline"),"."),(0,r.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,r.kt)("p",null,"The example below is a basic CI/CD pipeline definition (",(0,r.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),") with one ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," stage and a ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," job within it to run  ",(0,r.kt)("a",{parentName:"p",href:"/askui/docs/general/Getting%20Started/writing-your-first-test"},"Jasmine tests")," with the askui library. It assumes the CI/CD variables ",(0,r.kt)("inlineCode",{parentName:"p"},"ASKUI_DEPLOY_TOKEN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ASKUI_USER_NAME")," to be defined as ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/variables/index.html#custom-cicd-variables"},"custom CI/CD variables"),". They should hold the deploy token and user name you received from your contact person at askui. "),(0,r.kt)("p",null,"Besides that, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<docker_image_path>")," needs to be replaced by ",(0,r.kt)("a",{parentName:"p",href:"/askui/docs/general/Continuous%20Integration/local-docker#available-images"},"one of our docker images"),". Moreover, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<alias_name>")," should replaced by a name that will be used to access the service from the job's container (see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/services/#define-services-in-the-gitlab-ciyml-file"},"Services in Gitlab"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'stages:\n  - test\n\ntest:\n  stage: test\n  image: node:16.13\n  variables:\n    DOCKER_PASSWORD: ${ASKUI_DEPLOY_TOKEN}\n    DOCKER_USER: ${ASKUI_USER_NAME}\n    NPM_TOKEN: ${ASKUI_DEPLOY_TOKEN}\n  before_script:\n    - |\n      {\n        echo "@vqa4gui:registry=https://gitlab.com/api/v4/projects/34584527/packages/npm/"\n        echo "//gitlab.com/api/v4/projects/34584527/packages/npm/:_authToken=\\${NPM_TOKEN}"\n      } | tee -a .npmrc\n    - docker login registry.gitlab.com -u ${DOCKER_USER} -p ${DOCKER_PASSWORD} \n    - npm ci\n  services:\n    - name: <docker_image_path>\n      alias: <alias_name>\n  script:\n    - npx jasmine --config=jasmine.json\n\n')),(0,r.kt)("h3",{id:"how-this-configuration-works"},"How This Configuration Works"),(0,r.kt)("p",null,"On push to the repository on Gitlab, a Gitlab-hosted Linux instance will start and execute the stages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The code of your project is checked out."),(0,r.kt)("li",{parentName:"ul"},"Scripts within the stages will be executed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creates an ",(0,r.kt)("inlineCode",{parentName:"li"},".npmrc")," file which allows you to install the askui library from our registry."),(0,r.kt)("li",{parentName:"ul"},"Authenticates and authorizes with our Docker image registry which allows you to pull the image for the service."),(0,r.kt)("li",{parentName:"ul"},"Installs npm dependencies including the askui library."),(0,r.kt)("li",{parentName:"ul"},"Starts testing.")))),(0,r.kt)("h3",{id:"testing-inside-gitlab-ci"},"Testing Inside Gitlab-CI"),(0,r.kt)("p",null,"The main difference between ",(0,r.kt)("a",{parentName:"p",href:"/askui/docs/general/Getting%20Started/writing-your-first-test"},"the first test suite using askui example")," and tests inside Gitlab-CI is the askui server URL. Using Gitlab services, the askui server URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<alias_name>:6769")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:6769"),". To have a test that can work locally and inside the Gitlab CI we suggest that you create the client like in the following example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const controluiServerUrl = process.env.CI_JOB_ID ? '<alias_name>' : 'localhost';\naui = new AskuiClient({\n  controlServerUrl: `http://${controluiServerUrl}:6769`,\n});\n")))}m.isMDXComponent=!0}}]);