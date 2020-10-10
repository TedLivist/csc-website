(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"Highlight",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=(r(0),r(99));const o={id:"all-countries",title:"Get a list of Countries",sidebar_label:"All Countries"},c={unversionedId:"api/all-countries",id:"api/all-countries",isDocsHomePage:!1,title:"Get a list of Countries",description:"export const Highlight = ({children, color}) => (",source:"@site/docs/api/all-countries.md",slug:"/api/all-countries",permalink:"/docs/api/all-countries",editUrl:"https://github.com/dr5hn/csc-website/edit/main/docs/api/all-countries.md",version:"current",lastUpdatedBy:"Darshan Gada",lastUpdatedAt:1602338503,sidebar_label:"All Countries",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Get the country details from ISO2 Code",permalink:"/docs/api/country"}},i=[{value:"Security",id:"security",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Response",id:"response",children:[]},{value:"Example Success Response",id:"example-success-response",children:[]},{value:"Example Error Response",id:"example-error-response",children:[]}],l=({children:e,color:t})=>Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),s={rightToc:i,Highlight:l};function u({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"GET")," /countries",Object(a.b)("h2",{id:"security"},"Security"),Object(a.b)("p",null,"This api use API KEY as an authentication method."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Name: ",Object(a.b)(l,{color:"#1877F2",mdxType:"Highlight"},"X-CSCAPI-KEY")),Object(a.b)("li",{parentName:"ul"},"In: header")),Object(a.b)("h2",{id:"request-parameters"},"Request Parameters"),Object(a.b)("p",null,"No parameters"),Object(a.b)("h2",{id:"response"},"Response"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Code"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Return a list of countries")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"401"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unauthorized.")))),Object(a.b)("h2",{id:"example-success-response"},"Example Success Response"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": 101,\n    "name": "India",\n    "iso2": "IN"\n  },\n  ...\n]\n')),Object(a.b)("h2",{id:"example-error-response"},"Example Error Response"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error\'": "Unauthorized. You shouldn\'t be here."\n}\n')))}u.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},s),{},{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);