(()=>{var e={};e.id=85,e.ids=[85],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},9060:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>o});var r=t(260),a=t(8203),l=t(5155),n=t.n(l),i=t(7292),d={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);t.d(s,d);let o=["",{children:["(user)",{children:["track",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,113)),"/Users/telesphore/ensoapp/enso/app/(user)/track/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,6534)),"/Users/telesphore/ensoapp/enso/app/(user)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,9611)),"/Users/telesphore/ensoapp/enso/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/telesphore/ensoapp/enso/app/(user)/track/page.tsx"],x={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/(user)/track/page",pathname:"/track",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},533:(e,s,t)=>{Promise.resolve().then(t.bind(t,1993))},3685:(e,s,t)=>{Promise.resolve().then(t.bind(t,4485))},3270:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,6313,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},3006:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,6013,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},1079:()=>{},399:()=>{},6487:()=>{},8335:()=>{},4485:(e,s,t)=>{"use strict";t.d(s,{default:()=>i});var r=t(5512),a=t(8009),l=t(6008),n=t(9334);let i=()=>{let[e,s]=(0,a.useState)(!1),t=(0,n.usePathname)(),i=()=>{s(!e)},d=[{name:"Our Story",route:"/"},{name:"Latest",route:"/latest"},{name:"Unisex",route:"/unisex"},{name:"Men",route:"/men"},{name:"Women",route:"/women"},{name:"Sign In",route:"/signin"}];return(0,r.jsx)("header",{className:"relative z-50 flex min-h-[80px] bg-black px-4 py-4 font-sans tracking-wide shadow-md sm:px-10",children:(0,r.jsxs)("div",{className:"flex w-full flex-wrap items-center gap-5",children:[(0,r.jsx)(l.default,{href:"/",children:(0,r.jsx)("img",{src:"/logo/white-logo.png",className:"w-40 max-lg:mr-5",alt:"Logo"})}),(0,r.jsx)("nav",{className:"hidden lg:ml-auto lg:flex",children:(0,r.jsx)("ul",{className:"flex gap-4",children:d.map(e=>(0,r.jsx)("li",{className:"px-3",children:(0,r.jsx)(l.default,{href:e.route,className:`hover:text-[#D87D4A] ${e.route===t?"text-[#D87D4A]":"text-[#fff]"} block text-[15px] font-semibold`,children:e.name})},e.name))})}),(0,r.jsxs)("div",{className:"flex items-center space-x-6 max-lg:ml-auto",children:[!e&&(0,r.jsx)("button",{id:"toggleOpen",className:"lg:hidden",onClick:i,"aria-label":"Open Menu",children:(0,r.jsx)("svg",{className:"h-7 w-7",fill:"#fff",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),e&&(0,r.jsx)("button",{id:"toggleClose",className:"fixed right-4 top-4 z-[100] rounded-full bg-white p-2 lg:hidden",onClick:i,"aria-label":"Close Menu",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 fill-black",viewBox:"0 0 320.591 320.591",children:[(0,r.jsx)("path",{d:"M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"}),(0,r.jsx)("path",{d:"M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"})]})})]}),e&&(0,r.jsx)("div",{className:"fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden",onClick:i}),(0,r.jsx)("div",{className:`fixed left-0 top-0 z-50 h-full w-3/4 max-w-xs transform bg-white ${e?"translate-x-0":"-translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden`,children:(0,r.jsx)("ul",{className:"flex flex-col space-y-4 p-6",children:d.map(e=>(0,r.jsx)("li",{className:"border-b py-3",children:(0,r.jsx)(l.default,{href:e.route,className:`hover:text-[#D87D4A] ${e.route===t?"text-[#D87D4A]":"text-[#000]"} text-lg font-semibold`,onClick:()=>s(!1),children:e.name})},e.name))})})]})})}},6534:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var r=t(2740);t(6301);let a=()=>(0,r.jsxs)("footer",{className:"bg-[#000] px-16 py-12 font-sans tracking-wide",children:[(0,r.jsx)("div",{className:"mt-12 lg:flex lg:items-center",children:(0,r.jsxs)("ul",{className:"flex flex-wrap gap-4",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Order Status"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Shipping and Delivery"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Returns"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Order Cancelation"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Payment Options"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Contact Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"About Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"News"})})]})}),(0,r.jsx)("div",{className:"mt-12 lg:flex lg:items-center",children:(0,r.jsxs)("ul",{className:"flex flex-wrap gap-4",children:[(0,r.jsx)("li",{children:(0,r.jsx)("p",{className:"text-sm text-gray-700 hover:text-gray-100",children:"\xa9 2024 Enso Inc. Alright Reserved"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Guides"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Terms of Sale"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Terms of Use"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Enso Privacy Policy"})})]})})]});var l=t(1993);function n({children:e}){return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.default,{}),(0,r.jsx)("main",{children:e}),(0,r.jsx)(a,{})]})}},113:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(2740);t(6301);let a=()=>(0,r.jsxs)("div",{className:"min-h-screen bg-black p-32 text-white",children:[(0,r.jsxs)("button",{className:"mb-6 font-bold text-orange-500",children:[(0,r.jsx)("span",{className:"mr-2",children:"\uD83D\uDD19"})," BACK"]}),(0,r.jsx)("h2",{className:"mb-8 text-center text-xl font-semibold text-orange-500",children:"ORDER DETAILS"}),(0,r.jsxs)("div",{className:"mb-12 flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("div",{className:"font-bold text-green-500",children:"Order Placed"}),(0,r.jsx)("div",{className:"mt-2 h-4 w-4 rounded-full bg-green-500"}),(0,r.jsx)("div",{className:"mt-2 text-sm text-gray-400",children:"Wed, 11th Jan"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("div",{className:"font-bold text-green-500",children:"Order Confirmed"}),(0,r.jsx)("div",{className:"mt-2 h-4 w-4 rounded-full bg-green-500"}),(0,r.jsx)("div",{className:"mt-2 text-sm text-gray-400",children:"Wed, 11th Jan"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("div",{className:"font-bold text-gray-200",children:"Shipped"}),(0,r.jsx)("div",{className:"mt-2 h-4 w-4 rounded-full bg-gray-200"}),(0,r.jsx)("div",{className:"mt-2 text-sm text-gray-400",children:"Wed, 11th Jan"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("div",{className:"font-bold text-gray-200",children:"Out For Delivery"}),(0,r.jsx)("div",{className:"mt-2 h-4 w-4 rounded-full bg-gray-200"}),(0,r.jsx)("div",{className:"mt-2 text-sm text-gray-400",children:"Wed, 11th Jan"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("div",{className:"font-bold text-gray-200",children:"Delivered"}),(0,r.jsx)("div",{className:"mt-2 h-4 w-4 rounded-full bg-gray-200"}),(0,r.jsx)("div",{className:"mt-2 text-sm text-gray-400",children:"Expected by, Mon 16th"})]})]}),(0,r.jsx)("div",{className:"relative mb-12 h-[2px] w-full bg-gray-600",children:(0,r.jsx)("div",{className:"absolute left-0 top-0 h-[2px] bg-green-500",style:{width:"40%"}})}),(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-10 lg:grid-cols-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("h3",{className:"mb-4 text-lg font-bold",children:"PAYMENT"}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"mr-3 rounded bg-blue-500 px-3 py-1 text-white",children:"VISA"}),(0,r.jsx)("span",{className:"text-gray-400",children:"Visa **56"})]})]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("h3",{className:"mb-4 text-lg font-bold",children:"DELIVERY"}),(0,r.jsxs)("p",{className:"text-gray-400",children:["Address ",(0,r.jsx)("br",{}),"847 Lydesw, Bridge Apt. ",(0,r.jsx)("br",{}),"174 London, UK ",(0,r.jsx)("br",{}),"474-799-3919"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"mb-4 text-lg font-bold",children:"CURRENT LOCATION"}),(0,r.jsxs)("p",{className:"text-gray-400",children:["Address ",(0,r.jsx)("br",{}),"KG 56 Avenue, ",(0,r.jsx)("br",{}),"Kigali, Rwanda"]})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-6 flex justify-center",children:(0,r.jsx)("img",{src:"/products/product-5.png",alt:"Kimono",className:"h-auto w-48 object-contain"})}),(0,r.jsxs)("div",{className:"text-gray-400",children:[(0,r.jsxs)("div",{className:"mb-2 flex justify-between",children:[(0,r.jsx)("span",{children:"Number of Kimonos"}),(0,r.jsx)("span",{children:"2"})]}),(0,r.jsxs)("div",{className:"mb-2 flex justify-between",children:[(0,r.jsx)("span",{children:"AMOUNT"}),(0,r.jsx)("span",{children:"$5,396"})]}),(0,r.jsxs)("div",{className:"mb-2 flex justify-between",children:[(0,r.jsx)("span",{children:"SHIPPING"}),(0,r.jsx)("span",{children:"$50"})]}),(0,r.jsxs)("div",{className:"mt-4 flex justify-between font-bold text-white",children:[(0,r.jsx)("span",{children:"GRAND TOTAL"}),(0,r.jsx)("span",{children:"$5,446"})]})]})]})]})]})},9611:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o,metadata:()=>d});var r=t(2740),a=t(7502),l=t.n(a),n=t(4311),i=t.n(n);t(2704);let d={title:"Enso",description:"enso"};function o({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${l().variable} ${i().variable} antialiased`,children:e})})}},1993:(e,s,t)=>{"use strict";t.d(s,{default:()=>r});let r=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/telesphore/ensoapp/enso/components/Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/telesphore/ensoapp/enso/components/Header.tsx","default")},6055:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},2704:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[989,755,191],()=>t(9060));module.exports=r})();