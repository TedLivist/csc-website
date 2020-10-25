(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"Highlight",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(99)),i={id:"cities-by-state-country",title:"Get the list of cities in a state",sidebar_label:"Cities By State & Country"},o={unversionedId:"api/cities-by-state-country",id:"api/cities-by-state-country",isDocsHomePage:!1,title:"Get the list of cities in a state",description:"export const Highlight = ({children, color}) => (",source:"@site/docs/api/cities-by-state-country.md",slug:"/api/cities-by-state-country",permalink:"/docs/api/cities-by-state-country",editUrl:"https://github.com/dr5hn/csc-website/edit/main/docs/api/cities-by-state-country.md",version:"current",lastUpdatedBy:"Darshan Gada",lastUpdatedAt:1602338503,sidebar_label:"Cities By State & Country",sidebar:"docs",previous:{title:"Get the state details from ISO2 Code",permalink:"/docs/api/state"},next:{title:"Contributing",permalink:"/docs/contributing"}},l=[{value:"Security",id:"security",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Response",id:"response",children:[]},{value:"Example Success Response",id:"example-success-response",children:[]},{value:"Example Error Response",id:"example-error-response",children:[]},{value:"Example Not Found Response",id:"example-not-found-response",children:[]}],b=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={rightToc:l,Highlight:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(b,{color:"#25c2a0",mdxType:"Highlight"},"GET")," /countries/[ciso]/states/[siso]/cities",Object(c.b)("h2",{id:"security"},"Security"),Object(c.b)("p",null,"This api use API KEY as an authentication method."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Name: ",Object(c.b)(b,{color:"#1877F2",mdxType:"Highlight"},"X-CSCAPI-KEY")),Object(c.b)("li",{parentName:"ul"},"In: header")),Object(c.b)("h2",{id:"request-parameters"},"Request Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Located in"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ciso"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"URL"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ISO2 Code of Country"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)(b,{color:"#d73232",mdxType:"Highlight"},"Required")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"siso"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"URL"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ISO2 Code of State"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)(b,{color:"#d73232",mdxType:"Highlight"},"Required")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("h2",{id:"response"},"Response"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Code"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"200"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Return a list of cities")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"401"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Unauthorized.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"404"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Not Found.")))),Object(c.b)("h2",{id:"example-success-response"},"Example Success Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": 133024,\n    "name": "Mumbai"\n  },\n  ...\n]\n')),Object(c.b)("h2",{id:"example-error-response"},"Example Error Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error\'": "Unauthorized. You shouldn\'t be here."\n}\n')),Object(c.b)("h2",{id:"example-not-found-response"},"Example Not Found Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error\'": "No Cities found."\n}\n')))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,O=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);