(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{9318:function(e,t,r){Promise.resolve().then(r.bind(r,3342)),Promise.resolve().then(r.bind(r,1326))},8994:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(7461).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},2235:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(7461).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},8676:function(e,t,r){"use strict";r(5355);var n=r(3472);t.Z=(0,n.$)("cc7009b377174257745c15f9b16c66a5bf45f773")},3342:function(e,t,r){"use strict";r.r(t);var n=r(3827),s=r(8676),a=r(575),o=r(4645),i=r(2153),d=r(703),l=r(8792),c=r(7907);r(4090);var u=r(6288);t.default=function(e){let{title:t}=e,r=(0,c.useRouter)(),f=async()=>{console.log("login");let e=await (0,s.Z)();e.success&&(console.log("login"),r.push("/login")),e.error&&u.A.error(e.error)};return(0,n.jsxs)("header",{className:"flex h-14 lg:h-[60px] items-center gap-4 border-b dark:border-b-zinc-700/30 bg-secondary px-6 dark:bg-secondary/30",children:[(0,n.jsxs)(l.default,{className:"lg:hidden",href:"#",children:[(0,n.jsx)(i.Z,{className:"h-6 w-6"}),(0,n.jsx)("span",{className:"sr-only",children:"Home"})]}),(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsx)("h1",{className:"font-semibold text-lg",children:t})}),(0,n.jsx)("div",{className:"flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4",children:(0,n.jsxs)(o.h_,{children:[(0,n.jsx)(o.$F,{asChild:!0,children:(0,n.jsx)(a.z,{className:"rounded-full",size:"icon",variant:"ghost",children:(0,n.jsx)(d.default,{alt:"Avatar",className:"rounded-full",height:"32",src:"/avatar.svg",width:"32"})})}),(0,n.jsxs)(o.AW,{align:"end",children:[(0,n.jsx)(o.Xi,{onClick:()=>r.push("/panel/setting"),children:"Settings"}),(0,n.jsx)(o.VD,{}),(0,n.jsx)(o.Xi,{onClick:()=>f(),children:"Logout"})]})]})})]})}},1326:function(e,t,r){"use strict";r.r(t),r.d(t,{Form:function(){return g},Loop:function(){return b}});var n=r(3827);r(5355);var s=r(3472),a=(0,s.$)("b3c8393de1c37c38c6b675f0da9929f578c6b2d1"),o=(0,s.$)("1087c9c4e1c3e01287d095c5ba432bfba6906b14"),i=r(3277),d=r(575),l=r(2782),c=r(8994),u=r(2235),f=r(4090),m=r(9542),p=r(6288);function g(){let[e,t]=(0,m.useFormState)(a,null);return(0,f.useEffect)(()=>{(null==e?void 0:e.error)&&p.A.error("".concat(null==e?void 0:e.error)),(null==e?void 0:e.success)&&p.A.success("".concat(null==e?void 0:e.success)),(null==e?void 0:e.info)&&p.A.info("".concat(null==e?void 0:e.info))},[e]),(0,n.jsxs)("form",{className:"flex",action:t,children:[(0,n.jsx)(l.I,{id:"tag",name:"tag",type:"text",placeholder:"New tag name",className:"flex-1 mr-2 rounded-full "}),(0,n.jsx)(x,{title:"Add Items"})]})}let x=e=>{let{title:t}=e,{pending:r}=(0,m.useFormStatus)();return(0,n.jsx)(d.z,{className:"rounded-full",type:"submit",disabled:r,children:r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{className:"animate-spin h-5 w-5 mr-2"})," Loading..."]}):t})};function b(e){let{data:t}=e,[r,s]=(0,m.useFormState)(o,null);return(0,f.useEffect)(()=>{(null==r?void 0:r.error)&&p.A.error("".concat(null==r?void 0:r.error)),(null==r?void 0:r.success)&&p.A.success("".concat(null==r?void 0:r.success)),(null==r?void 0:r.info)&&p.A.info("".concat(null==r?void 0:r.info))},[r]),(0,n.jsx)("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 ",children:null==t?void 0:t.map(e=>(0,n.jsxs)(i.C,{className:"cursor-pointer p-2 pl-4 relative group",variant:"secondary",children:[e.title,(0,n.jsxs)("form",{action:s,children:[(0,n.jsx)("input",{className:"hidden",name:"id",id:"id",value:e.id,readOnly:!0}),(0,n.jsx)(h,{})]})]},e.id))})}let h=()=>{let{pending:e}=(0,m.useFormStatus)();return(0,n.jsx)(d.z,{variant:"destructive",className:e?"h-4 p-0 rounded-full  absolute -top-3 right-0 ":"h-4 p-0 rounded-full  absolute -top-3 right-0  hidden group-hover:block",type:"submit",disabled:e,children:e?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{className:"animate-spin h-2 w-2 m-1"})}):(0,n.jsx)(u.Z,{className:"h-3 w-4"})})}},3277:function(e,t,r){"use strict";r.d(t,{C:function(){return i}});var n=r(3827);r(4090);var s=r(7742),a=r(2169);let o=(0,s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:t,variant:r,...s}=e;return(0,n.jsx)("div",{className:(0,a.cn)(o({variant:r}),t),...s})}},575:function(e,t,r){"use strict";r.d(t,{d:function(){return d},z:function(){return l}});var n=r(3827),s=r(4090),a=r(9143),o=r(7742),i=r(2169);let d=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:l=!1,...c}=e,u=l?a.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(d({variant:s,size:o,className:r})),ref:t,...c})});l.displayName="Button"},4645:function(e,t,r){"use strict";r.d(t,{$F:function(){return u},AW:function(){return f},Ju:function(){return g},VD:function(){return x},Xi:function(){return m},bO:function(){return p},h_:function(){return c}});var n=r(3827),s=r(4090),a=r(3685),o=r(7805),i=r(9259),d=r(7501),l=r(2169);let c=a.fC,u=a.xz;a.ZA,a.Uv,a.Tr,a.Ee,s.forwardRef((e,t)=>{let{className:r,inset:s,children:i,...d}=e;return(0,n.jsxs)(a.fF,{ref:t,className:(0,l.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",s&&"pl-8",r),...d,children:[i,(0,n.jsx)(o.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=a.fF.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.tu,{ref:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...s})}).displayName=a.tu.displayName;let f=s.forwardRef((e,t)=>{let{className:r,sideOffset:s=4,...o}=e;return(0,n.jsx)(a.Uv,{children:(0,n.jsx)(a.VY,{ref:t,sideOffset:s,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...o})})});f.displayName=a.VY.displayName;let m=s.forwardRef((e,t)=>{let{className:r,inset:s,...o}=e;return(0,n.jsx)(a.ck,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",r),...o})});m.displayName=a.ck.displayName;let p=s.forwardRef((e,t)=>{let{className:r,children:s,checked:o,...d}=e;return(0,n.jsxs)(a.oC,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:o,...d,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(a.wU,{children:(0,n.jsx)(i.Z,{className:"h-4 w-4"})})}),s]})});p.displayName=a.oC.displayName,s.forwardRef((e,t)=>{let{className:r,children:s,...o}=e;return(0,n.jsxs)(a.Rk,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...o,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(a.wU,{children:(0,n.jsx)(d.Z,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=a.Rk.displayName;let g=s.forwardRef((e,t)=>{let{className:r,inset:s,...o}=e;return(0,n.jsx)(a.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",r),...o})});g.displayName=a.__.displayName;let x=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",r),...s})});x.displayName=a.Z0.displayName},2782:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(3827),s=r(4090),a=r(2169);let o=s.forwardRef((e,t)=>{let{className:r,type:s,...o}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(3167),s=r(1367);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}}},function(e){e.O(0,[363,250,998,167,288,349,971,69,744],function(){return e(e.s=9318)}),_N_E=e.O()}]);