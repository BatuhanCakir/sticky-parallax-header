"use strict";(self.webpackChunkreact_native_sticky_parallax_header_docs=self.webpackChunkreact_native_sticky_parallax_header_docs||[]).push([[4051],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,b=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2718:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:5},p="Web support",u={unversionedId:"introduction/web-support",id:"introduction/web-support",title:"Web support",description:"react-native-sticky-parallax-header is supported in web projects built with react-native-web with 2 limitations:",source:"@site/docs/introduction/web-support.md",sourceDirName:"introduction",slug:"/introduction/web-support",permalink:"/sticky-parallax-header/docs/next/introduction/web-support",draft:!1,editUrl:"https://github.com/netguru/sticky-parallax-header/tree/master/docs/docs/introduction/web-support.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Migration from 0.4.x to 1.x.x",permalink:"/sticky-parallax-header/docs/next/introduction/migration-guide"},next:{title:"Tabbed Header Pager",permalink:"/sticky-parallax-header/docs/next/headers/tabbed-header-pager"}},s={},l=[],d={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-support"},"Web support"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"react-native-sticky-parallax-header")," is supported in web projects built with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-web"))," with 2 limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"snap effect" props are not supported on web, because of lack support for ',(0,o.kt)("a",{parentName:"li",href:"https://github.com/necolas/react-native-web/issues/1021"},"momentum scroll events")," on ",(0,o.kt)("inlineCode",{parentName:"li"},"react-native-web")),(0,o.kt)("li",{parentName:"ul"},"using ",(0,o.kt)("inlineCode",{parentName:"li"},"RefreshControl")," on web, can break sticky header layout, because web implementation is just stubbed and doubles ScrollView's margin/padding - ",(0,o.kt)("a",{parentName:"li",href:"/sticky-parallax-header/docs/next/guides/pull-to-refresh"},"check pull-to-refresh guide"))))}f.isMDXComponent=!0}}]);