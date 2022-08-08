"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),b=i,f=p["".concat(l,".").concat(b)]||p[b]||u[b]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={slug:"/screenshots-stabilization/data-stabilization",sidebar_position:2},o="Data Stabilization",s={unversionedId:"Screenshots stabilization/data-stabilization",id:"Screenshots stabilization/data-stabilization",title:"Data Stabilization",description:"Stabilize refreshed dates and generated seeds to avoid flaky tests.",source:"@site/docs/Screenshots stabilization/data-stabilization.mdx",sourceDirName:"Screenshots stabilization",slug:"/screenshots-stabilization/data-stabilization",permalink:"/screenshots-stabilization/data-stabilization",draft:!1,editUrl:"https://github.com/argos-ci/docs.argos-ci.com/docs/Screenshots stabilization/data-stabilization.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/screenshots-stabilization/data-stabilization",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About flaky tests",permalink:"/screenshots-stabilization/about-flaky"},next:{title:"Style injection",permalink:"/screenshots-stabilization/style-injection"}},l={},c=[{value:"Stabilize data seeds",id:"stabilize-data-seeds",level:2},{value:"Stabilize date and time",id:"stabilize-date-and-time",level:2},{value:"Hide rebellious components",id:"hide-rebellious-components",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-stabilization"},"Data Stabilization"),(0,i.kt)("p",null,"Stabilize refreshed dates and generated seeds to avoid flaky tests."),(0,i.kt)("h2",{id:"stabilize-data-seeds"},"Stabilize data seeds"),(0,i.kt)("p",null,"Data seed generators like ",(0,i.kt)("a",{parentName:"p",href:"https://chancejs.com/"},"Chance")," or ",(0,i.kt)("a",{parentName:"p",href:"https://fakerjs.dev/"},"Faker")," can cause flaky tests. But, happily, each tool provides the ability to use your data."),(0,i.kt)("p",null,"We advise you to continue using your favorite library and resolve flaky tests with fixed variables only when needed."),(0,i.kt)("h2",{id:"stabilize-date-and-time"},"Stabilize date and time"),(0,i.kt)("p",null,"When a displayed date is not a primary purpose of a test, it can be convenient to freeze it to a fixed value."),(0,i.kt)("p",null,"The easier way is to use your test framework feature like this :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/* Cypress command to freeze date to 20 May 2030 */\nconst now = new Date(2030, 4, 20);\ncy.clock(now);\n")),(0,i.kt)("p",null,"Another way is to use an external library like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/boblauer/MockDate"},"MockDate")," to mock the current date."),(0,i.kt)("h2",{id:"hide-rebellious-components"},"Hide rebellious components"),(0,i.kt)("p",null,"If none of these methods work, you can hide node DOM from the screenshots with ",(0,i.kt)("a",{parentName:"p",href:"/screenshots-stabilization/style-injection"},"style injection"),"."))}u.isMDXComponent=!0}}]);