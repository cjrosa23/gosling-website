(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(100)),o={title:"Semantic Zoom"},l={unversionedId:"semantic-zoom",id:"semantic-zoom",isDocsHomePage:!1,title:"Semantic Zoom",description:"source code",source:"@site/gosling-docs/docs/semantic-zoom.md",slug:"/semantic-zoom",permalink:"/docs/semantic-zoom",version:"current",sidebar:"docs",previous:{title:"User Interaction",permalink:"/docs/user-interaction"},next:{title:"Public Datasets",permalink:"/docs/public-datasets"}},b=[{value:"Example: Sequence Visualization",id:"example-sequence-visualization",children:[]},{value:"Example: Cyto Band",id:"example-cyto-band",children:[]}],c={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/gosling-lang/gosling.js/blob/43626eaf21417bf36128a405dceeaa6ee00d0851/src/core/gosling.schema.ts#L278"},"\ud83d\udd17 source code")),Object(i.b)("p",null,"Advanced zooming technique, called Semantic Zooming, allows you to dynamically switch between visual representations upon zooming in and out. "),Object(i.b)("p",null,"For example, detailed information of nucleotide bases can be shown with textual labels when zoomed in while it can be switched to show the overall distribution of the bases using a stacked bar chart when zoomed out."),Object(i.b)("h2",{id:"example-sequence-visualization"},"Example: Sequence Visualization"),Object(i.b)("img",{src:"https://raw.githubusercontent.com/gosling-lang/gosling-docs/master/images/semantic_zoom_1.png",alt:"semantic_zoom_fine",width:"700"}),Object(i.b)("img",{src:"https://raw.githubusercontent.com/gosling-lang/gosling-docs/master/images/semantic_zoom_0.png",alt:"semantic_zoom_coarse",width:"700"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://gosling-lang.github.io/gosling.js/?gist=wangqianwen0418/aa231b87458369ea53d071ad59c81812"},"Try this example in the online editor")),Object(i.b)("h2",{id:"example-cyto-band"},"Example: Cyto Band"),Object(i.b)("img",{src:"https://raw.githubusercontent.com/gosling-lang/gosling-docs/master/images/semantic_zoom_2.png",alt:"semantic_zoom_coarse",height:"60",width:"700"}),Object(i.b)("img",{src:"https://raw.githubusercontent.com/gosling-lang/gosling-docs/master/images/semantic_zoom_3.png",alt:"semantic_zoom_fine",height:"60",width:"700"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Top"),": only ",Object(i.b)("inlineCode",{parentName:"p"},"rect")," marks are represented; ",Object(i.b)("strong",{parentName:"p"},"Bottom:")," ",Object(i.b)("inlineCode",{parentName:"p"},"text")," and ",Object(i.b)("inlineCode",{parentName:"p"},"triangle")," marks are presented when zooming in to show more details.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",{parentName:"p",href:"https://gosling-lang.github.io/gosling.js/?gist=wangqianwen0418/509f253bf1b815d225f593218ee13211"},"Try this example in the online editor")),Object(i.b)("p",null,"Semantic zoom is achieved by controlling ",Object(i.b)("inlineCode",{parentName:"p"},"alignment")," and ",Object(i.b)("inlineCode",{parentName:"p"},"visibility"),".\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/gosling-lang/gosling-docs/blob/master/docs/composition.md#overlaid-tracks"},Object(i.b)("inlineCode",{parentName:"a"},"alignment"))," allow users to overlap multiple marks on top of one other, thus allowing users to create different visualizations for the same data.\n",Object(i.b)("inlineCode",{parentName:"p"},"visibility")," controls the visibility of visual marks, thus allowing the switch between different visualizations based on the zoom level."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"visibility")," is an array of object with the following properties:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"properties"),Object(i.b)("th",{parentName:"tr",align:null},"type"),Object(i.b)("th",{parentName:"tr",align:null},"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"target"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"required"),', support "track" ',"|",' "mark"')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"measure"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"required"),', support "width"',"|",'"height"',"|",'"zoomLevel".')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"threshold"),Object(i.b)("td",{parentName:"tr",align:null},'"',"|","xe-x","|",'" ',"|"," number"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"required"),", when using ",Object(i.b)("inlineCode",{parentName:"td"},"number"),", the unit of a number is pixel with ",Object(i.b)("inlineCode",{parentName:"td"},"width")," and ",Object(i.b)("inlineCode",{parentName:"td"},"height")," measures while it is a base pair (bp) with ",Object(i.b)("inlineCode",{parentName:"td"},"zoomLevel"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"operation"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"required"),", specify the logical operation to conduct between ",Object(i.b)("inlineCode",{parentName:"td"},"threshold")," and the ",Object(i.b)("inlineCode",{parentName:"td"},"measure")," of ",Object(i.b)("inlineCode",{parentName:"td"},"target"),Object(i.b)("br",null),' > :"greater-than", "gt", "GT",',Object(i.b)("br",null),' < : "less-than", "lt", "LT", ',Object(i.b)("br",null),' \u2265 : "greater-than-or-equal-to", "gtet", "GTET"), ',Object(i.b)("br",null),' \u2264 : "less-than-or-equal-to", "ltet", "LTET"')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"conditionPadding"),Object(i.b)("td",{parentName:"tr",align:null},"number"),Object(i.b)("td",{parentName:"tr",align:null},"buffer px size of width or height when calculating the visibility, default = 0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"transitionPadding"),Object(i.b)("td",{parentName:"tr",align:null},"number"),Object(i.b)("td",{parentName:"tr",align:null},"buffer px size of width or height for smooth transition, default = 0")))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"visibility")," of corresponding marks are decided by whether the ",Object(i.b)("inlineCode",{parentName:"p"},"measure")," of ",Object(i.b)("inlineCode",{parentName:"p"},"target")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"threshold")," satisfy the ",Object(i.b)("inlineCode",{parentName:"p"},"operation"),"."),Object(i.b)("p",null,"For example, in the code below, text marks only show when the width (",Object(i.b)("inlineCode",{parentName:"p"},"measure"),") of the mark (",Object(i.b)("inlineCode",{parentName:"p"},"target"),") is great-than (",Object(i.b)("inlineCode",{parentName:"p"},"operation"),") 20 (",Object(i.b)("inlineCode",{parentName:"p"},"threshold"),")."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  // example of semantic zoom: show text marks when zooming in\n\n  "tracks":[{\n    "data":...,\n    "x": ...,\n    "y": ...,\n    // overlay overlaps bar marks and text marks for the same data\n    "alignment": "overlay",\n    "tracks":[\n      //bar marks always show\n      {"mark": "bar"},\n      //text marks only show when the width of mark is great than 20 \n      {\n        "mark": "text",\n        "visibility": [{\n          "operation": "greater-than",\n          "measure": "width",\n          "threshold": "20",\n          "target": "mark"\n        }] \n      }\n    ]\n  }]\n}\n')))}s.isMDXComponent=!0}}]);