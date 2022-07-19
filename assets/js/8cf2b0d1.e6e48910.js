"use strict";(self.webpackChunkreact_native_sticky_parallax_header_docs=self.webpackChunkreact_native_sticky_parallax_header_docs||[]).push([[4811],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7430:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:1},s="Getting Started",c={unversionedId:"introduction/getting-started",id:"version-1.0.x/introduction/getting-started",title:"Getting Started",description:"react-native-sticky-parallax-header is a simple React Native library, enabling to create a fully custom header layout for your iOS, Android and web apps.",source:"@site/versioned_docs/version-1.0.x/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/sticky-parallax-header/docs/introduction/getting-started",draft:!1,editUrl:"https://github.com/netguru/sticky-parallax-header/tree/master/docs/versioned_docs/version-1.0.x/introduction/getting-started.md",tags:[],version:"1.0.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/sticky-parallax-header/docs/introduction/installation"}},p={},d=[{value:"Features",id:"features",level:2},{value:"Primitive components",id:"primitive-components",level:3},{value:"Predefined components",id:"predefined-components",level:3},{value:"In Use",id:"in-use",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"react-native-sticky-parallax-header")," is a simple React Native library, enabling to create a fully custom header layout for your iOS, Android and web apps."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"react-native-sticky-parallax-header")," provides two different type of components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"primitive components - components with sticky header setup"),(0,i.kt)("li",{parentName:"ul"},"predefined components - ready sticky header layouts")),(0,i.kt)("h3",{id:"primitive-components"},"Primitive components"),(0,i.kt)("p",null,"Library exports following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StickyHeaderScrollView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StickyHeaderFlatList")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StickyHeaderSectionList"))),(0,i.kt)("p",null,'There is also possibility to create its own "sticky header" component, thanks to:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withStickyHeader")," - HOC that wraps custom scroll component and sets up header & tabs layouts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useStickyHeaderScrollProps"),' - hook that sets up scroll props passed to custom "sticky header" component including "snap effect" props')),(0,i.kt)("h3",{id:"predefined-components"},"Predefined components"),(0,i.kt)("p",null,"Library offers following header layout types:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Tabbed Header"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Avatar Header"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Details Header"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Tabbed Header Gif",src:r(6040).Z,width:"350",height:"584"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Avatar Header Gif",src:r(1259).Z,width:"350",height:"584"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Details Header Gif",src:r(1015).Z,width:"350",height:"584"}))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AvatarHeader(ScrollView|FlatList|SectionList)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DetailsHeader(ScrollView|FlatList|SectionList)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TabbedHeaderPager")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TabbedHeaderList"))),(0,i.kt)("h2",{id:"in-use"},"In Use"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Check the live demo on Expo Snack ",(0,i.kt)("a",{parentName:"strong",href:"https://snack.expo.dev/@netguru_rnd/sticky-parallax-header-example"},"here"),".")),(0,i.kt)("div",{"data-snack-id":"@netguru_rnd/sticky-parallax-header-example","data-snack-platform":"web","data-snack-preview":"true","data-snack-theme":"light",className:"expo-snack"}),(0,i.kt)("p",null,"This is how you can display header in your app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\nimport { DetailsHeaderScrollView } from 'react-native-sticky-parallax-header'\n\nconst TestScreen = () => (\n  <>\n    <DetailsHeaderScrollView {...scrollProps} {...detailsHeaderProps}>\n      {/** scroll view content */}\n    </DetailsHeaderScrollView>\n  </>\n)\n\nexport default TestScreen\n")))}m.isMDXComponent=!0},1259:function(e,t,r){t.Z=r.p+"assets/images/readme_AvatarHeader-88f8da1c19b0c99629185346e6349d06.gif"},1015:function(e,t,r){t.Z=r.p+"assets/images/readme_DetailsHeader-a311fcb26fe61866e8e48468783c9d42.gif"},6040:function(e,t,r){t.Z=r.p+"assets/images/readme_TabbedHeader-81a052e020f7d6897005b25b344279eb.gif"}}]);