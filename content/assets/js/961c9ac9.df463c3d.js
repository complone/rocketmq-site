"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4508],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),k=s,h=p["".concat(i,".").concat(k)]||p[k]||u[k]||o;return r?a.createElement(h,n(n({ref:t},m),{},{components:r})):a.createElement(h,n({ref:t},m))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,n=new Array(o);n[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:s,n[1]=c;for(var l=2;l<o;l++)n[l]=r[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},48416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(87462),s=(r(67294),r(3905));const o={title:"Release Notes - Apache RocketMQ Streams - Version 1.1.0",categories:["Release_Notes"],tags:["RocketMQ_Streams"]},n=void 0,c={permalink:"/release-notes/2023/01/06/release-notes-rocketmq-streams-all-1.1.0",source:"@site/release-notes/2023-01-06-release-notes-rocketmq-streams-all-1.1.0.md",title:"Release Notes - Apache RocketMQ Streams - Version 1.1.0",description:"* Source: rocketmq-streams-all-1.1.0-source-release.zip [PGP] [SHA512]",date:"2023-01-06T00:00:00.000Z",formattedDate:"January 6, 2023",tags:[{label:"RocketMQ_Streams",permalink:"/release-notes/tags/rocket-mq-streams"}],readingTime:.78,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Streams - Version 1.1.0",categories:["Release_Notes"],tags:["RocketMQ_Streams"]},nextItem:{title:"Release Notes - Apache RocketMQ Schema Registry - Version 0.1.0",permalink:"/release-notes/2022/10/17/release-notes-rocketmq-schema-registry-all-0.1.0"}},i={authorsImageUrls:[]},l=[],m={toc:l};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Download",type:"tip"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Source: ",(0,s.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/rocketmq-streams/1.1.0/rocketmq-streams-all-1.1.0-source-release.zip"},"rocketmq-streams-all-1.1.0-source-release.zip")," [",(0,s.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/rocketmq-streams/1.1.0/rocketmq-streams-all-1.1.0-source-release.zip.asc"},"PGP"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/rocketmq-streams/1.1.0/rocketmq-streams-all-1.1.0-source-release.zip.sha512"},"SHA512"),"]\n:::")),(0,s.kt)("p",{parentName:"admonition"},"Below is a summary of the issues addressed in the 1.1.0 release of RocketMQ Streams. For full documentation of the release, a guide to get started, please refer to ",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams"},"Quick Start"),"."),(0,s.kt)("h2",{parentName:"admonition",id:"improvement"},"Improvement"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/pull/229"},"RIP-229"),"] - [RIP-229] - RocketMQ Streams improvement"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/232"},"ISSUE-232"),"] - [ISSUE-232] - add operator in groupByStream"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/"},"ISSUE-234"),"] - [ISSUE-234] - Add quick start"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/"},"ISSUE-235"),"] - [ISSUE-235] - modify quick start"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/"},"ISSUE-236"),"] - [ISSUE-236] - modify quick start"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/"},"ISSUE-237"),"] - [ISSUE-237] - modify quick start"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/"},"ISSUE-238"),"] - [ISSUE-238] - modify version to 1.1.0-SNAPSHOT"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/"},"ISSUE-239"),"] - [ISSUE-239] - modify quick start"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/"},"ISSUE-240"),"] - [ISSUE-240] - modify quick start"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/"},"ISSUE-241"),"] - [ISSUE-241] - remove useless class"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/"},"ISSUE-242"),"] - [ISSUE-242] - add exception"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/"},"ISSUE-244"),"] - [ISSUE-244] - Add flatmap, add tostring, modify the key of sink topic"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq-streams/issues/"},"ISSUE-245"),"] - [ISSUE-245] - add example"))))}p.isMDXComponent=!0}}]);