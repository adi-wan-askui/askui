"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53190],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(25773),i=(n(27378),n(35318));const o={displayed_sidebar:"apiSidebar",custom_edit_url:null},a="type",p={unversionedId:"api/Commands/type",id:"version-0.2.1/api/Commands/type",title:"type",description:"Types a text at the current position.",source:"@site/versioned_docs/version-0.2.1/api/02-Commands/type.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/type",permalink:"/docs/api/Commands/type",draft:!1,editUrl:null,tags:[],version:"0.2.1",frontMatter:{displayed_sidebar:"apiSidebar",custom_edit_url:null},sidebar:"apiSidebar"},s={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"type"},"type"),(0,i.kt)("p",null,"Types a text at the current position."),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," is included in the logs and sent over to the askui Inference server to\npredict in which context the typing has to occur. You can exclude the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," from the logs\nand the request to the askui Inference server setting ",(0,i.kt)("inlineCode",{parentName:"p"},"options.isSecret")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".\nThis should not change the quality of the prediction of the askui Inference server. In this\ncase, ",(0,i.kt)("inlineCode",{parentName:"p"},"options.secretMask")," is included in logs and sent over instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),".  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param {string} text - A text to type."),(0,i.kt)("li",{parentName:"ul"},"@param {Object} ","[options]"),(0,i.kt)("li",{parentName:"ul"},"@param {boolean} ","[options.isSecret = false]"," - If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"text")," is neither included in\nlogs of askui nor sent over to askui Inference for prediction."),(0,i.kt)("li",{parentName:"ul"},"@param {string} ","[options.secretMask = '****']"," - If ",(0,i.kt)("inlineCode",{parentName:"li"},"options.isSecret")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", this\nis included in logs and sent over to askui Inference for prediction instead of the ",(0,i.kt)("inlineCode",{parentName:"li"},"text"),".")))}u.isMDXComponent=!0}}]);