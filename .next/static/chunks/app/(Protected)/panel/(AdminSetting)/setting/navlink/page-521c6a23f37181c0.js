(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{1036:function(e,t,r){Promise.resolve().then(r.bind(r,2187))},7461:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4090),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),o=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{color:s="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d,className:c="",children:f,...m}=r;return(0,n.createElement)("svg",{ref:o,...i,width:l,height:l,stroke:s,strokeWidth:d?24*Number(u)/Number(l):u,className:["lucide","lucide-".concat(a(e)),c].join(" "),...m},[...t.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(f)?f:[f]])});return r.displayName="".concat(e),r}},8994:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(7461).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},94:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(7461).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},2235:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(7461).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},3472:function(e,t,r){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return i}});let n=r(5355);function i(e){let{createServerReference:t}=r(7355);return t(e,n.callServer)}},2187:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(3827);r(5355);var i=r(3472),a=(0,i.$)("bb4d1c719fb17fbf37aa41ea876799a59a3b7974"),o=(0,i.$)("8c5f387dc7058c5f52e59d064ea065bd94bda9b7"),s=(0,i.$)("1eda8589824c24afb65514981a46260daa17e9db"),l=r(3277),u=r(575),d=r(2782),c=r(5453),f=r(8994),m=r(94),p=r(2235),v=r(4090),h=r(9542);function g(){let[e,t]=(0,v.useState)(null),[r,i]=(0,h.useFormState)(a,null),[u,f]=(0,h.useFormState)(o,null),m=async()=>{t(await s())};(0,v.useEffect)(()=>{m()},[r,u]);let p=(0,v.useRef)(null);return(0,v.useEffect)(()=>{if((null==r?void 0:r.message)==="success"){var e;null===(e=p.current)||void 0===e||e.reset()}},[r]),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-lg font-medium",children:"Navlink"}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"Customize the navlink of the website."})]}),(0,n.jsx)(c.Separator,{}),(0,n.jsxs)("div",{className:"flex flex-col items-start gap-8",children:[(0,n.jsxs)("form",{ref:p,action:i,className:"flex gap-2",children:[(0,n.jsx)(d.I,{defaultValue:null==r?void 0:r.fieldValues.title,placeholder:"Enter Nav title",name:"title",required:!0}),(0,n.jsx)(d.I,{defaultValue:null==r?void 0:r.fieldValues.description,placeholder:"Enter Nav Link",name:"link",required:!0}),(0,n.jsx)(b,{})]}),(0,n.jsx)("div",{className:"grid grid-cols-4 md:grid-cols-8 gap-2",children:null==e?void 0:e.map((e,t)=>(0,n.jsxs)(l.C,{className:"cursor-pointer p-2 pl-4 relative group",variant:"secondary",children:[e.title,(0,n.jsxs)("form",{action:f,children:[(0,n.jsx)("input",{className:"hidden",name:"id",id:"id",value:e.id,readOnly:!0}),(0,n.jsx)(x,{})]})]},e.id))})]})]})}function b(){let{pending:e}=(0,h.useFormStatus)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.z,{className:"",type:"submit",disabled:e,children:e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Z,{className:"animate-spin h-5 w-5 mr-2"})," Loading..."]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.Z,{className:"h-4 w-4 mr-2"}),"Add"]})})})}let x=()=>{let{pending:e}=(0,h.useFormStatus)();return(0,n.jsx)(u.z,{variant:"destructive",className:e?"h-4 p-0 rounded-full  absolute -top-3 right-0 ":"h-4 p-0 rounded-full  absolute -top-3 right-0  hidden group-hover:block",type:"submit",disabled:e,children:e?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(f.Z,{className:"animate-spin h-2 w-2 m-1"})}):(0,n.jsx)(p.Z,{className:"h-3 w-4"})})}},3277:function(e,t,r){"use strict";r.d(t,{C:function(){return s}});var n=r(3827);r(4090);var i=r(7742),a=r(2169);let o=(0,i.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function s(e){let{className:t,variant:r,...i}=e;return(0,n.jsx)("div",{className:(0,a.cn)(o({variant:r}),t),...i})}},575:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return u}});var n=r(3827),i=r(4090),a=r(9143),o=r(7742),s=r(2169);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,t)=>{let{className:r,variant:i,size:o,asChild:u=!1,...d}=e,c=u?a.g7:"button";return(0,n.jsx)(c,{className:(0,s.cn)(l({variant:i,size:o,className:r})),ref:t,...d})});u.displayName="Button"},2782:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(3827),i=r(4090),a=r(2169);let o=i.forwardRef((e,t)=>{let{className:r,type:i,...o}=e;return(0,n.jsx)("input",{type:i,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},5453:function(e,t,r){"use strict";r.r(t),r.d(t,{Separator:function(){return s}});var n=r(3827),i=r(4090),a=r(1014),o=r(2169);let s=i.forwardRef((e,t)=>{let{className:r,orientation:i="horizontal",decorative:s=!0,...l}=e;return(0,n.jsx)(a.f,{ref:t,decorative:s,orientation:i,className:(0,o.cn)("shrink-0 bg-border","horizontal"===i?"h-[1px] w-full":"h-full w-[1px]",r),...l})});s.displayName=a.f.displayName},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(3167),i=r(1367);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,n.W)(t))}},9586:function(e,t,r){"use strict";r.d(t,{WV:function(){return s},jH:function(){return l}});var n=r(2110),i=r(4090),a=r(9542),o=r(9143);let s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,i.forwardRef)((e,r)=>{let{asChild:a,...s}=e,l=a?o.g7:t;return(0,i.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,i.createElement)(l,(0,n.Z)({},s,{ref:r}))});return r.displayName="Primitive.".concat(t),{...e,[t]:r}},{});function l(e,t){e&&(0,a.flushSync)(()=>e.dispatchEvent(t))}},1014:function(e,t,r){"use strict";r.d(t,{f:function(){return d}});var n=r(2110),i=r(4090),a=r(9586);let o="horizontal",s=["horizontal","vertical"],l=(0,i.forwardRef)((e,t)=>{let{decorative:r,orientation:s=o,...l}=e,d=u(s)?s:o;return(0,i.createElement)(a.WV.div,(0,n.Z)({"data-orientation":d},r?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},l,{ref:t}))});function u(e){return s.includes(e)}l.propTypes={orientation(e,t,r){let n=e[t],i=String(n);return n&&!u(n)?Error("Invalid prop `orientation` of value `".concat(i,"` supplied to `").concat(r,"`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to `").concat(o,"`.")):null}};let d=l}},function(e){e.O(0,[363,971,69,744],function(){return e(e.s=1036)}),_N_E=e.O()}]);