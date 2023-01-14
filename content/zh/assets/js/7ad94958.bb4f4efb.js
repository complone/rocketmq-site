"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7742],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),k=o,h=m["".concat(c,".").concat(k)]||m[k]||u[k]||n;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},45380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={title:"Release Notes - Apache RocketMQ Streams - Version 1.0.1-preview",categories:["Release_Notes"],tags:["RocketMQ_Streams"]},s=void 0,i={permalink:"/zh/release-notes/2022/04/18/release-notes-rocketmq-streams-1.0.1-preview",source:"@site/release-notes/2022-04-18-release-notes-rocketmq-streams-1.0.1-preview.md",title:"Release Notes - Apache RocketMQ Streams - Version 1.0.1-preview",description:"* Source: rocketmq-streams-1.0.1-preview.zip [PGP] [SHA512]",date:"2022-04-18T00:00:00.000Z",formattedDate:"2022\u5e744\u670818\u65e5",tags:[{label:"RocketMQ_Streams",permalink:"/zh/release-notes/tags/rocket-mq-streams"}],readingTime:.515,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Streams - Version 1.0.1-preview",categories:["Release_Notes"],tags:["RocketMQ_Streams"]},prevItem:{title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.1",permalink:"/zh/release-notes/2022/07/25/release-notes-rocketmq-client-go-2.1.1"},nextItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.2.2",permalink:"/zh/release-notes/2022/04/05/release-notes-rocketmq-spring-2.2.2"}},c={authorsImageUrls:[]},l=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Download",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/rocketmq-streams/1.0.1-Preview-rc1/rocketmq-streams-1.0.1-preview.zip"},"rocketmq-streams-1.0.1-preview.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/rocketmq-streams/1.0.1-Preview-rc1/rocketmq-streams-1.0.1-preview.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/rocketmq-streams/1.0.1-Preview-rc1/rocketmq-streams-1.0.1-preview.zip.sha512"},"SHA512"),"]"))),(0,o.kt)("p",null,"Below is a summary of the issues addressed in the 1.0.1-preview release of RocketMQ Streams. For full documentation of the release, a guide to get started, please refer to ",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-streams"},"Quick Start"),"."),(0,o.kt)("h2",{id:"improvement"},"Improvement"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/129"},"ISSUE-129"),"] - [ISSUE-129] - add design documentation"),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/133"},"ISSUE-133"),"] - [ISSUE-133] - Add design doc into README-chinese.md"),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-streams/pull/138"},"PR-138"),"] - [PR-138] - add the RocketMQ word Hyperlink in readme file")),(0,o.kt)("h2",{id:"bug"},"Bug"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/127"},"ISSUE-127"),"] - [ISSUE-127] - fromFile not exist cause queue NPE"),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/135"},"ISSUE-135"),"] - [ISSUE-135] - App can not start up with RocketMQ-streams")))}m.isMDXComponent=!0}}]);