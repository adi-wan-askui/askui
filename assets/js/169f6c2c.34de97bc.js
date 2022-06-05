"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4530],{5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(5773),o=n(808),i=(n(7378),n(5318)),a=["components"],l={displayed_sidebar:"apiSidebar",custom_edit_url:null},u="moveMouseRelativelyTo",c={unversionedId:"api/Commands/movemouserelativelyto",id:"version-0.1.6/api/Commands/movemouserelativelyto",title:"moveMouseRelativelyTo",description:"Moves the mouse relatively to an element in the direction.",source:"@site/versioned_docs/version-0.1.6/api/02-Commands/movemouserelativelyto.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/movemouserelativelyto",permalink:"/docs/api/Commands/movemouserelativelyto",draft:!1,editUrl:null,tags:[],version:"0.1.6",frontMatter:{displayed_sidebar:"apiSidebar",custom_edit_url:null},sidebar:"apiSidebar"},s={},m=[],p={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"movemouserelativelyto"},"moveMouseRelativelyTo"),(0,i.kt)("p",null,"Moves the mouse relatively to an element in the direction.\nThis can be used when the mouse should not hover over on an element anymore."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param {number} x_offset - A (positive/negative) x direction."),(0,i.kt)("li",{parentName:"ul"},"@param {number} y_offset - A (positive/negative) y direction.")))}f.isMDXComponent=!0}}]);