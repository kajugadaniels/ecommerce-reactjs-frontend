(()=>{var e={};e.id=416,e.ids=[416],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},1558:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>d});var r=t(260),a=t(8203),l=t(5155),i=t.n(l),n=t(7292),o={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);t.d(s,o);let d=["",{children:["(user)",{children:["unisex",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5518)),"C:\\Users\\Code Craft\\Desktop\\projects\\realtime\\enso\\client\\app\\(user)\\unisex\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,6534)),"C:\\Users\\Code Craft\\Desktop\\projects\\realtime\\enso\\client\\app\\(user)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,9611)),"C:\\Users\\Code Craft\\Desktop\\projects\\realtime\\enso\\client\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Code Craft\\Desktop\\projects\\realtime\\enso\\client\\app\\(user)\\unisex\\page.tsx"],x={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/(user)/unisex/page",pathname:"/unisex",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2992:(e,s,t)=>{Promise.resolve().then(t.bind(t,1993))},6016:(e,s,t)=>{Promise.resolve().then(t.bind(t,4485))},2661:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,6313,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},4517:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,6013,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},6200:()=>{},3048:()=>{},6487:()=>{},8335:()=>{},4485:(e,s,t)=>{"use strict";t.d(s,{default:()=>n});var r=t(5512),a=t(8009),l=t(6008),i=t(9334);let n=()=>{let[e,s]=(0,a.useState)(!1),t=(0,i.usePathname)(),n=()=>{s(!e)},o=[{name:"Our Story",route:"/"},{name:"Latest",route:"/latest"},{name:"Unisex",route:"/unisex"},{name:"Men",route:"/men"},{name:"Women",route:"/women"},{name:"Sign In",route:"/signin"}];return(0,r.jsx)("header",{className:"relative z-50 flex min-h-[80px] bg-black px-4 py-4 font-sans tracking-wide shadow-md sm:px-10",children:(0,r.jsxs)("div",{className:"flex w-full flex-wrap items-center gap-5",children:[(0,r.jsx)(l.default,{href:"/",children:(0,r.jsx)("img",{src:"/logo/white-logo.png",className:"w-40 max-lg:mr-5",alt:"Logo"})}),(0,r.jsx)("nav",{className:"hidden lg:ml-auto lg:flex",children:(0,r.jsx)("ul",{className:"flex gap-4",children:o.map(e=>(0,r.jsx)("li",{className:"px-3",children:(0,r.jsx)(l.default,{href:e.route,className:`hover:text-[#D87D4A] ${e.route===t?"text-[#D87D4A]":"text-[#fff]"} block text-[15px] font-semibold`,children:e.name})},e.name))})}),(0,r.jsxs)("div",{className:"flex items-center space-x-6 max-lg:ml-auto",children:[!e&&(0,r.jsx)("button",{id:"toggleOpen",className:"lg:hidden",onClick:n,"aria-label":"Open Menu",children:(0,r.jsx)("svg",{className:"h-7 w-7",fill:"#fff",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),e&&(0,r.jsx)("button",{id:"toggleClose",className:"fixed right-4 top-4 z-[100] rounded-full bg-white p-2 lg:hidden",onClick:n,"aria-label":"Close Menu",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 fill-black",viewBox:"0 0 320.591 320.591",children:[(0,r.jsx)("path",{d:"M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"}),(0,r.jsx)("path",{d:"M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"})]})})]}),e&&(0,r.jsx)("div",{className:"fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden",onClick:n}),(0,r.jsx)("div",{className:`fixed left-0 top-0 z-50 h-full w-3/4 max-w-xs transform bg-white ${e?"translate-x-0":"-translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden`,children:(0,r.jsx)("ul",{className:"flex flex-col space-y-4 p-6",children:o.map(e=>(0,r.jsx)("li",{className:"border-b py-3",children:(0,r.jsx)(l.default,{href:e.route,className:`hover:text-[#D87D4A] ${e.route===t?"text-[#D87D4A]":"text-[#000]"} text-lg font-semibold`,onClick:()=>s(!1),children:e.name})},e.name))})})]})})}},6534:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var r=t(2740);t(6301);let a=()=>(0,r.jsxs)("footer",{className:"bg-[#000] px-16 py-12 font-sans tracking-wide",children:[(0,r.jsx)("div",{className:"mt-12 lg:flex lg:items-center",children:(0,r.jsxs)("ul",{className:"flex flex-wrap gap-4",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Order Status"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Shipping and Delivery"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Returns"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Order Cancelation"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Payment Options"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Contact Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"About Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"News"})})]})}),(0,r.jsx)("div",{className:"mt-12 lg:flex lg:items-center",children:(0,r.jsxs)("ul",{className:"flex flex-wrap gap-4",children:[(0,r.jsx)("li",{children:(0,r.jsx)("p",{className:"text-sm text-gray-700 hover:text-gray-100",children:"\xa9 2024 Enso Inc. Alright Reserved"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Guides"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Terms of Sale"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Terms of Use"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Enso Privacy Policy"})})]})})]});var l=t(1993);function i({children:e}){return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.default,{}),(0,r.jsx)("main",{children:e}),(0,r.jsx)(a,{})]})}},5518:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(2740);t(6301);let a=()=>(0,r.jsxs)("div",{className:"flex min-h-screen flex-col bg-black text-white",children:[(0,r.jsx)("div",{className:"flex items-center p-4",children:(0,r.jsxs)("button",{className:"ml-4 flex items-center font-bold text-orange-500",children:[(0,r.jsx)("span",{className:"mr-2",children:"\uD83E\uDC14"})," BACK"]})}),(0,r.jsxs)("div",{className:"mx-auto mt-6 flex w-11/12 flex-col justify-center md:mt-12 md:flex-row md:items-start max-w-7xl lg:items-start",children:[(0,r.jsx)("div",{className:"flex w-full items-center justify-center rounded-md bg-gray-800 p-6 md:w-1/2",children:(0,r.jsx)("img",{src:"/products/product-5.png",alt:"Kimono",className:"w-3/4 md:w-2/3"})}),(0,r.jsxs)("div",{className:"mt-8 w-full bg-black text-white md:mt-0 md:w-1/2 md:ml-8",children:[(0,r.jsx)("h2",{className:"mb-4 text-xl font-bold text-orange-500 md:text-2xl",children:"Kimono Belt Unlocked By You"}),(0,r.jsx)("p",{className:"mb-6 text-sm md:text-base",children:"Customize your own kimono"}),(0,r.jsx)("p",{className:"mr-2 font-semibold",children:"Inspiration"}),(0,r.jsx)("hr",{className:"w-96"}),(0,r.jsx)("div",{className:"mt-4 flex w-10 items-center bg-white",children:(0,r.jsx)("img",{src:"/products/product-5.png",alt:"Inspiration",className:"h-10 w-10 rounded-md"})}),(0,r.jsxs)("div",{className:"p-8 bg-black text-white",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("h2",{className:"mb-4 text-xl font-bold",children:"Select Design"}),(0,r.jsx)("h2",{className:"mb-4 text-xl font-bold",children:"Size Guide"})]}),(0,r.jsx)("div",{className:"mb-4",children:"Design 1"}),(0,r.jsx)("div",{className:"mb-4",children:"Design 2"}),(0,r.jsx)("div",{className:"mb-4",children:"Design 3"}),(0,r.jsx)("div",{className:"mb-4",children:"Design 4"})]}),(0,r.jsx)("div",{className:"mb-6 flex items-center justify-between",children:(0,r.jsx)("p",{className:"text-lg font-semibold",children:"Price: $150"})}),(0,r.jsxs)("button",{className:"flex items-center space-x-2 rounded-full bg-orange-500 px-8 py-4 font-medium text-white hover:bg-orange-600 md:px-72",children:[(0,r.jsx)("span",{children:"NEXT"}),(0,r.jsx)("svg",{className:"w-4 h-4",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})})]})]})]}),(0,r.jsxs)("div",{className:"mt-10 flex items-center justify-between px-4 sm:px-12 md:px-24 lg:px-72",children:[(0,r.jsx)("div",{className:"text-xl font-bold",children:"You Might Also Like"}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"h-6 w-6 rounded-full bg-white mr-2",children:" "}),(0,r.jsx)("div",{className:"h-6 w-6 rounded-full bg-white"})]})]}),(0,r.jsx)("div",{className:"container mx-auto px-4 mt-10",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-3",children:[(0,r.jsxs)("div",{className:"overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]",children:[(0,r.jsx)("div",{className:"flex min-h-[256px] items-center justify-center",children:(0,r.jsx)("img",{src:"/products/product-5.png",alt:"Name",className:"w-[100%] object-contain"})}),(0,r.jsxs)("div",{className:"bg-white p-6",children:[(0,r.jsx)("h3",{className:"text-[#D87D4A]",children:"Customize"}),(0,r.jsx)("h3",{className:"text-gray-800",children:"Hudy Kimono"}),(0,r.jsx)("p",{className:"mt-2 text-sm text-gray-700",children:"5 Colors \xb7 3 Fabrics"}),(0,r.jsx)("div",{className:"mt-4 text-lg font-semibold text-gray-700",children:"$160"})]})]}),(0,r.jsxs)("div",{className:"overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]",children:[(0,r.jsx)("div",{className:"flex min-h-[256px] items-center justify-center",children:(0,r.jsx)("img",{src:"/products/product-5.png",alt:"Name",className:"w-[100%] object-contain"})}),(0,r.jsxs)("div",{className:"bg-white p-6",children:[(0,r.jsx)("h3",{className:"text-[#D87D4A]",children:"Customize"}),(0,r.jsx)("h3",{className:"text-gray-800",children:"Hudy Kimono"}),(0,r.jsx)("p",{className:"mt-2 text-sm text-gray-700",children:"5 Colors \xb7 3 Fabrics"}),(0,r.jsx)("div",{className:"mt-4 text-lg font-semibold text-gray-700",children:"$160"})]})]}),(0,r.jsxs)("div",{className:"overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]",children:[(0,r.jsx)("div",{className:"flex min-h-[256px] items-center justify-center",children:(0,r.jsx)("img",{src:"/products/product-5.png",alt:"Name",className:"w-[100%] object-contain"})}),(0,r.jsxs)("div",{className:"bg-white p-6",children:[(0,r.jsx)("h3",{className:"text-[#D87D4A]",children:"Customize"}),(0,r.jsx)("h3",{className:"text-gray-800",children:"Hudy Kimono"}),(0,r.jsx)("p",{className:"mt-2 text-sm text-gray-700",children:"5 Colors \xb7 3 Fabrics"}),(0,r.jsx)("div",{className:"mt-4 text-lg font-semibold text-gray-700",children:"$160"})]})]})]})})]})},9611:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>d,metadata:()=>o});var r=t(2740),a=t(9105),l=t.n(a),i=t(8716),n=t.n(i);t(2704);let o={title:"Enso",description:"enso"};function d({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${l().variable} ${n().variable} antialiased`,children:e})})}},1993:(e,s,t)=>{"use strict";t.d(s,{default:()=>r});let r=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Code Craft\\\\Desktop\\\\projects\\\\realtime\\\\enso\\\\client\\\\components\\\\Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Code Craft\\Desktop\\projects\\realtime\\enso\\client\\components\\Header.tsx","default")},6055:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},2704:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[989,881,191],()=>t(1558));module.exports=r})();