(()=>{var e={};e.id=781,e.ids=[781],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},2044:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>d});var r=t(260),a=t(8203),l=t(5155),o=t.n(l),i=t(7292),n={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);t.d(s,n);let d=["",{children:["(user)",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3245)),"/Users/telesphore/ensoapp/enso/app/(user)/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,6534)),"/Users/telesphore/ensoapp/enso/app/(user)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,9611)),"/Users/telesphore/ensoapp/enso/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/telesphore/ensoapp/enso/app/(user)/page.tsx"],x={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/(user)/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},533:(e,s,t)=>{Promise.resolve().then(t.bind(t,1993))},3685:(e,s,t)=>{Promise.resolve().then(t.bind(t,4485))},3270:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,6313,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},3006:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,6013,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},1079:()=>{},399:()=>{},6487:()=>{},8335:()=>{},4485:(e,s,t)=>{"use strict";t.d(s,{default:()=>i});var r=t(5512),a=t(8009),l=t(6008),o=t(9334);let i=()=>{let[e,s]=(0,a.useState)(!1),t=(0,o.usePathname)(),i=()=>{s(!e)},n=[{name:"Our Story",route:"/"},{name:"Latest",route:"/latest"},{name:"Unisex",route:"/unisex"},{name:"Men",route:"/men"},{name:"Women",route:"/women"},{name:"Sign In",route:"/signin"}];return(0,r.jsx)("header",{className:"relative z-50 flex min-h-[80px] bg-black px-4 py-4 font-sans tracking-wide shadow-md sm:px-10",children:(0,r.jsxs)("div",{className:"flex w-full flex-wrap items-center gap-5",children:[(0,r.jsx)(l.default,{href:"/",children:(0,r.jsx)("img",{src:"/logo/white-logo.png",className:"w-40 max-lg:mr-5",alt:"Logo"})}),(0,r.jsx)("nav",{className:"hidden lg:ml-auto lg:flex",children:(0,r.jsx)("ul",{className:"flex gap-4",children:n.map(e=>(0,r.jsx)("li",{className:"px-3",children:(0,r.jsx)(l.default,{href:e.route,className:`hover:text-[#D87D4A] ${e.route===t?"text-[#D87D4A]":"text-[#fff]"} block text-[15px] font-semibold`,children:e.name})},e.name))})}),(0,r.jsxs)("div",{className:"flex items-center space-x-6 max-lg:ml-auto",children:[!e&&(0,r.jsx)("button",{id:"toggleOpen",className:"lg:hidden",onClick:i,"aria-label":"Open Menu",children:(0,r.jsx)("svg",{className:"h-7 w-7",fill:"#fff",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),e&&(0,r.jsx)("button",{id:"toggleClose",className:"fixed right-4 top-4 z-[100] rounded-full bg-white p-2 lg:hidden",onClick:i,"aria-label":"Close Menu",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 fill-black",viewBox:"0 0 320.591 320.591",children:[(0,r.jsx)("path",{d:"M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"}),(0,r.jsx)("path",{d:"M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"})]})})]}),e&&(0,r.jsx)("div",{className:"fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden",onClick:i}),(0,r.jsx)("div",{className:`fixed left-0 top-0 z-50 h-full w-3/4 max-w-xs transform bg-white ${e?"translate-x-0":"-translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden`,children:(0,r.jsx)("ul",{className:"flex flex-col space-y-4 p-6",children:n.map(e=>(0,r.jsx)("li",{className:"border-b py-3",children:(0,r.jsx)(l.default,{href:e.route,className:`hover:text-[#D87D4A] ${e.route===t?"text-[#D87D4A]":"text-[#000]"} text-lg font-semibold`,onClick:()=>s(!1),children:e.name})},e.name))})})]})})}},6534:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var r=t(2740);t(6301);let a=()=>(0,r.jsxs)("footer",{className:"bg-[#000] px-16 py-12 font-sans tracking-wide",children:[(0,r.jsx)("div",{className:"mt-12 lg:flex lg:items-center",children:(0,r.jsxs)("ul",{className:"flex flex-wrap gap-4",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Order Status"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Shipping and Delivery"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Returns"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Order Cancelation"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Payment Options"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"Contact Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"About Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"javascript:void(0)",className:"text-sm text-gray-300 hover:text-gray-100",children:"News"})})]})}),(0,r.jsx)("div",{className:"mt-12 lg:flex lg:items-center",children:(0,r.jsxs)("ul",{className:"flex flex-wrap gap-4",children:[(0,r.jsx)("li",{children:(0,r.jsx)("p",{className:"text-sm text-gray-700 hover:text-gray-100",children:"\xa9 2024 Enso Inc. Alright Reserved"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Guides"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Terms of Sale"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Terms of Use"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"",className:"text-sm text-gray-700 hover:text-gray-100",children:"Enso Privacy Policy"})})]})})]});var l=t(1993);function o({children:e}){return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.default,{}),(0,r.jsx)("main",{children:e}),(0,r.jsx)(a,{})]})}},3245:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var r=t(2740);t(6301);let a=()=>(0,r.jsx)("div",{className:"h-[100vh] w-full bg-cover bg-center",style:{backgroundImage:"url('/hero/image.png')"}}),l=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsx)("div",{className:"bg-black pb-10 pt-10 font-sans",children:(0,r.jsxs)("div",{className:"container mx-auto px-4 lg:px-24",children:[(0,r.jsxs)("div",{className:"mb-12 text-center",children:[(0,r.jsx)("h2",{className:"text-lg font-semibold text-[#D87D4A] sm:text-xl",children:"Enso By You"}),(0,r.jsx)("h1",{className:"mb-4 text-3xl font-extrabold text-[#D87D4A] sm:text-4xl",children:"Enso Collections Wardrobe"}),(0,r.jsx)("p",{className:"mx-auto mt-2 max-w-xl text-sm text-white sm:max-w-2xl",children:"Let`s find out! Be just who you are by putting more youness in your kimononess with Enso By You, Enso co-creation service for Members. A little more of this, a little less of that—just have fun customizing a shoe that feels more like you."}),(0,r.jsx)("button",{className:"mt-4 rounded-full bg-white px-8 py-3 text-black transition hover:bg-gray-200 sm:px-16 sm:py-4",children:"Shop"}),(0,r.jsx)("h2",{className:"mt-8 text-3xl font-extrabold text-[#D87D4A] sm:text-4xl",children:"Our Product"})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:[,,,,].fill(0).map((e,s)=>(0,r.jsxs)("div",{className:"relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2",children:[(0,r.jsx)("div",{className:"aspect-w-16 aspect-h-8 mx-auto mb-4 h-[210px] w-5/6 overflow-hidden md:mb-2",children:(0,r.jsx)("img",{src:`/products/product-${s+1}.png`,alt:"Name",className:"w-full object-contain"})}),(0,r.jsx)("div",{className:"h-[80px] rounded-xl bg-white px-10",children:(0,r.jsx)("h3",{className:"pt-2 text-center text-lg font-extrabold text-gray-800",children:"Name"})})]},s))})]})}),(0,r.jsx)("div",{className:"bg-black pb-10 pt-10 font-sans",children:(0,r.jsxs)("div",{className:"container mx-auto px-4 lg:px-24",children:[(0,r.jsxs)("div",{className:"mb-12 text-center",children:[(0,r.jsx)("h1",{className:"mb-4 text-3xl font-extrabold text-white sm:text-4xl",children:"Choose a So-You Kimono"}),(0,r.jsx)("p",{className:"mx-auto mt-2 max-w-xl text-sm text-white sm:max-w-2xl",children:"Whether you`re remixing a classic into something never seen before or simplifying the latest drop into a totally neutral palette, your customization journey starts with choosing a shoe. Luckily, we`re always adding newness so you can find the just-right way to express your style."}),(0,r.jsx)("button",{className:"mt-4 rounded-full bg-white px-8 py-3 text-black transition hover:bg-gray-200 sm:px-16 sm:py-4",children:"Start Customizing"})]}),(0,r.jsxs)("div",{className:"grid gap-4 md:grid-cols-2",children:[(0,r.jsxs)("div",{className:"flex w-full flex-col rounded bg-[#000] p-6 sm:flex-row sm:px-8",children:[(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold sm:text-xl",children:"Bringing you the best KIMONO gear"}),(0,r.jsx)("p",{className:"mt-3 text-sm text-gray-400",children:"Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products."})]}),(0,r.jsx)("div",{className:"flex-shrink-0",children:(0,r.jsx)("img",{src:"/products/product-2.png",className:"h-auto w-full object-cover",alt:"Product"})})]}),(0,r.jsxs)("div",{className:"flex w-full flex-col rounded bg-[#D87D4A] p-6 sm:flex-row sm:px-8",children:[(0,r.jsx)("div",{className:"flex-shrink-0",children:(0,r.jsx)("img",{src:"/products/product-3.png",className:"h-auto w-full object-cover",alt:"Product"})}),(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold sm:text-xl",children:"Bringing you the best KIMONO gear"}),(0,r.jsx)("p",{className:"mt-3 text-sm text-white",children:"Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products."})]})]})]}),(0,r.jsxs)("div",{className:"mt-24 text-center",children:[(0,r.jsx)("h1",{className:"mb-4 text-3xl font-semibold text-white sm:text-4xl",children:"What`s your PHD?"}),(0,r.jsx)("p",{className:"mx-auto mt-2 max-w-xl text-sm text-white sm:max-w-2xl",children:"Like your shoe signature, your Personal I.D. is any combo of letters and numbers that rep you. Maybe its a nickname, a mantra, or your computer password. Pick your P.I.D., and show the world who this signature shoe belongs to."}),(0,r.jsx)("button",{className:"mt-4 rounded-full bg-white px-8 py-3 text-black transition hover:bg-gray-200 sm:px-16 sm:py-4",children:"Custom"})]}),(0,r.jsxs)("div",{className:"mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:[(0,r.jsx)("div",{className:"relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2",children:(0,r.jsx)("div",{className:"aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden",children:(0,r.jsx)("img",{src:"/products/product-6.png",className:"h-auto w-full object-cover",alt:"Product"})})}),(0,r.jsx)("div",{className:"relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2",children:(0,r.jsx)("div",{className:"aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden",children:(0,r.jsx)("img",{src:"/products/product-6.png",className:"h-auto w-full object-cover",alt:"Product"})})}),(0,r.jsx)("div",{className:"relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2",children:(0,r.jsx)("div",{className:"aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden",children:(0,r.jsx)("img",{src:"/products/product-6.png",className:"h-auto w-full object-cover",alt:"Product"})})}),(0,r.jsx)("div",{className:"relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2",children:(0,r.jsx)("div",{className:"aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden",children:(0,r.jsx)("img",{src:"/products/product-6.png",className:"h-auto w-full object-cover",alt:"Product"})})})]}),(0,r.jsx)("h2",{className:"mt-8 text-center text-2xl font-extrabold text-[#D87D4A] sm:text-3xl lg:text-4xl",children:"The Team"}),(0,r.jsx)("div",{className:"mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:[,,,].fill(0).map((e,s)=>(0,r.jsxs)("div",{className:"relative flex cursor-pointer items-end justify-center rounded-2xl bg-transparent p-5 hover:-translate-y-2",style:{height:"350px"},children:[(0,r.jsx)("div",{className:"absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 transform",children:(0,r.jsx)("img",{src:"/hero/team.png",alt:"Team Member",className:"mt-16 h-auto w-28 object-contain sm:w-36 md:w-40"})}),(0,r.jsx)("div",{className:"h-40 w-full max-w-sm rounded-xl bg-white p-4 text-center text-black shadow-lg md:h-52",children:(0,r.jsxs)("div",{className:"mt-16 md:mt-32",children:[(0,r.jsx)("p",{className:"text-lg font-semibold text-black md:text-xl",children:"Name"}),(0,r.jsx)("p",{className:"text-sm text-gray-600 md:text-xl",children:"Title"})]})})]},s))})]})})]})},9611:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>d,metadata:()=>n});var r=t(2740),a=t(7502),l=t.n(a),o=t(4311),i=t.n(o);t(2704);let n={title:"Enso",description:"enso"};function d({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${l().variable} ${i().variable} antialiased`,children:e})})}},1993:(e,s,t)=>{"use strict";t.d(s,{default:()=>r});let r=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/telesphore/ensoapp/enso/components/Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/telesphore/ensoapp/enso/components/Header.tsx","default")},6055:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},2704:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[989,755,191],()=>t(2044));module.exports=r})();