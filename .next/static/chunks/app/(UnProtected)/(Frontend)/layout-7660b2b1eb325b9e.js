(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{3609:function(e,t,n){Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,1067))},7461:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4090),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),c=(e,t)=>{let n=(0,r.forwardRef)((n,c)=>{let{color:i="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:d,className:u="",children:m,...h}=n;return(0,r.createElement)("svg",{ref:c,...o,width:s,height:s,stroke:i,strokeWidth:d?24*Number(l)/Number(s):l,className:["lucide","lucide-".concat(a(e)),u].join(" "),...h},[...t.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(m)?m:[m]])});return n.displayName="".concat(e),n}},1774:function(e,t,n){"use strict";n.d(t,{F:function(){return s},f:function(){return l}});var r=n(4090);let o=["light","dark"],a="(prefers-color-scheme: dark)",c=(0,r.createContext)(void 0),i={setTheme:e=>{},themes:[]},s=()=>{var e;return null!==(e=(0,r.useContext)(c))&&void 0!==e?e:i},l=e=>(0,r.useContext)(c)?r.createElement(r.Fragment,null,e.children):r.createElement(u,e),d=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:i=!0,enableColorScheme:s=!0,storageKey:l="theme",themes:u=d,defaultTheme:g=i?"system":"light",attribute:y="data-theme",value:b,children:p,nonce:k}=e,[w,x]=(0,r.useState)(()=>h(l,g)),[C,S]=(0,r.useState)(()=>h(l)),E=b?Object.values(b):u,T=(0,r.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=v());let r=b?b[t]:t,a=n?f():null,c=document.documentElement;if("class"===y?(c.classList.remove(...E),r&&c.classList.add(r)):r?c.setAttribute(y,r):c.removeAttribute(y),s){let e=o.includes(g)?g:null,n=o.includes(t)?t:e;c.style.colorScheme=n}null==a||a()},[]),N=(0,r.useCallback)(e=>{x(e);try{localStorage.setItem(l,e)}catch(e){}},[t]),j=(0,r.useCallback)(e=>{S(v(e)),"system"===w&&i&&!t&&T("system")},[w,t]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(j),j(e),()=>e.removeListener(j)},[j]),(0,r.useEffect)(()=>{let e=e=>{e.key===l&&N(e.newValue||g)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),(0,r.useEffect)(()=>{T(null!=t?t:w)},[t,w]);let L=(0,r.useMemo)(()=>({theme:w,setTheme:N,forcedTheme:t,resolvedTheme:"system"===w?C:w,themes:i?[...u,"system"]:u,systemTheme:i?C:void 0}),[w,N,t,C,i,u]);return r.createElement(c.Provider,{value:L},r.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:i,enableColorScheme:s,storageKey:l,themes:u,defaultTheme:g,attribute:y,value:b,children:p,attrs:E,nonce:k}),p)},m=(0,r.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:c,enableSystem:i,enableColorScheme:s,defaultTheme:l,value:d,attrs:u,nonce:m}=e,h="system"===l,f="class"===c?"var d=document.documentElement,c=d.classList;c.remove(".concat(u.map(e=>"'".concat(e,"'")).join(","),");"):"var d=document.documentElement,n='".concat(c,"',s='setAttribute';"),v=s?o.includes(l)&&l?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(l,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=d?d[e]:e,a=t?e+"|| ''":"'".concat(r,"'"),i="";return s&&n&&!t&&o.includes(e)&&(i+="d.style.colorScheme = '".concat(e,"';")),"class"===c?i+=t||r?"c.add(".concat(a,")"):"null":r&&(i+="d[s](n,".concat(a,")")),i},y=t?"!function(){".concat(f).concat(g(t),"}()"):i?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"),"}else{").concat(g("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(g(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+g(l,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(g(d?"x[e]":"e",!0),"}else{").concat(g(l,!1,!1),";}").concat(v,"}catch(t){}}();");return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:y}})},()=>!0),h=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},575:function(e,t,n){"use strict";n.d(t,{d:function(){return s},z:function(){return l}});var r=n(3827),o=n(4090),a=n(9143),c=n(7742),i=n(2169);let s=(0,c.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=o.forwardRef((e,t)=>{let{className:n,variant:o,size:c,asChild:l=!1,...d}=e,u=l?a.g7:"button";return(0,r.jsx)(u,{className:(0,i.cn)(s({variant:o,size:c,className:n})),ref:t,...d})});l.displayName="Button"},1067:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeToggle:function(){return i}});var r=n(3827);n(4090);/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,n(7461).Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);var a=n(1774),c=n(575);function i(){let{theme:e,setTheme:t}=(0,a.F)();return(0,r.jsx)(c.z,{onClick:()=>{t("dark"===e?"light":"dark")},variant:"outline",children:(0,r.jsx)(o,{className:"h-4 w-4"})})}},2169:function(e,t,n){"use strict";n.d(t,{cn:function(){return a}});var r=n(3167),o=n(1367);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m6)((0,r.W)(t))}}},function(e){e.O(0,[363,250,971,69,744],function(){return e(e.s=3609)}),_N_E=e.O()}]);