if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>n(e,o),d={module:{uri:o},exports:t,require:l};s[o]=Promise.all(i.map((e=>d[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BNJfrzR3.js",revision:null},{url:"assets/index-C2OnrA70.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"dc521450814f9aadaef37e7bc499bc18"},{url:"logo192.png",revision:"b5d1e97cb00fc3bc8e673bff291d3ae6"},{url:"logo512.png",revision:"54783ab98d7e1229cc69ca2b0c54a34e"},{url:"manifest.webmanifest",revision:"c40d7e95e7fe4b507f618dd33ea7a2db"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
