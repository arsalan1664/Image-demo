"use strict";exports.id=950,exports.ids=[950],exports.modules={63024:(e,t,r)=>{r.d(t,{Z:()=>n});/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(69224).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},35299:(e,t,r)=>{r.d(t,{Z:()=>n});/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(69224).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},16274:(e,t,r)=>{r.d(t,{default:()=>s.a});var n=r(48026),s=r.n(n)},48026:(e,t,r)=>{let{createProxy:n}=r(86843);e.exports=n("/home/wn-061/Arsalan/Image-demo/node_modules/next/dist/client/link.js")},2522:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(3729);function s(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function o(e,t){let r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&r.every(r=>{let n=e[r],u=t[r];return"function"==typeof n?`${n}`==`${u}`:s(n)&&s(u)?o(n,u):n===u})}function u(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function c(e={},t=[]){let r=(0,n.useRef)(e),s=(0,n.useRef)(t),[c,i]=(0,n.useState)(),[a,l]=(0,n.useState)(),f=(0,n.useCallback)(()=>{c&&c.reInit(r.current,s.current)},[c]);return(0,n.useEffect)(()=>{i(void 0)},[a,i]),(0,n.useEffect)(()=>{o(r.current,e)||(r.current=e,f())},[e,f]),(0,n.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let r=u(e),n=u(t);return r.every((e,t)=>o(e,n[t]))}(s.current,t)&&(s.current=t,f())},[t,f]),[l,c]}c.globalOptions=void 0}};