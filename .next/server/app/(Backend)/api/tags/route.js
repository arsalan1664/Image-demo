"use strict";(()=>{var e={};e.id=817,e.ids=[817],e.modules={53524:e=>{e.exports=require("@prisma/client")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},37859:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>v,originalPathname:()=>y,patchFetch:()=>k,requestAsyncStorage:()=>h,routeModule:()=>m,serverHooks:()=>w,staticGenerationAsyncStorage:()=>p,staticGenerationBailout:()=>j});var s={};a.r(s),a.d(s,{DELETE:()=>f,GET:()=>l,POST:()=>c,PUT:()=>g});var r=a(95419),n=a(69108),u=a(99678),i=a(59549),o=a(78070);function d(e){let t=e.headers.get("Authorization");if(!t||!t.startsWith("Bearer "))return{valid:!1,message:"Unauthorized: Bearer token missing or invalid"};let a=t.substring(7);return"uKkBUm36l8U=w2C_v!@"!==a?{valid:!1,message:"Unauthorized: Invalid Bearer token"}:{valid:!0,token:a}}async function l(e){try{let t=d(e);if(!t.valid)return o.default.json({error:t.message},{status:401});let a=await i.db.tags.findMany();return o.default.json({tags:a,success:"Tags retrieved successfully"},{status:200})}catch(e){return o.default.json({error:"Something went wrong"},{status:500})}}async function c(e){try{let t=d(e);if(!t.valid)return o.default.json({error:t?.message||"not valid token"},{status:401});let a=(await e.json()).tag;if(!a)return{error:"Tag Can Not Be Empty"};let s=await i.db.tags.create({data:{title:a}});return o.default.json({tag:s,success:"Tag created successfully"},{status:201})}catch(e){return o.default.json({error:"Something went wrong"},{status:500})}}async function g(e){try{let t=d(e);if(!t.valid)return o.default.json({message:t.message},{status:401});let a=await e.json();if(!await i.db.tags.findUnique({where:{id:a.id}}))return o.default.json({message:"ID not matched"},{status:404});let s=await i.db.tags.update({where:{id:a.id},data:{title:a.title}});return o.default.json({tag:s,message:"Tag updated successfully"},{status:200})}catch(e){return o.default.json({message:"Something went wrong"},{status:500})}}async function f(e){try{let t=d(e);if(!t.valid)return o.default.json({error:t.message},{status:401});let{id:a}=await e.json();if(!await i.db.tags.findUnique({where:{id:a}}))return o.default.json({error:"Tags not found"},{status:404});return await i.db.tags.delete({where:{id:a}}),o.default.json({success:"Item deleted successfully"},{status:200})}catch(e){return o.default.json({error:"Something went wrong"},{status:500})}}let m=new r.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/(Backend)/api/tags/route",pathname:"/api/tags",filename:"route",bundlePath:"app/(Backend)/api/tags/route"},resolvedPagePath:"/home/wn-061/Arsalan/Image-demo/src/app/(Backend)/api/tags/route.tsx",nextConfigOutput:"",userland:s}),{requestAsyncStorage:h,staticGenerationAsyncStorage:p,serverHooks:w,headerHooks:v,staticGenerationBailout:j}=m,y="/(Backend)/api/tags/route";function k(){return(0,u.patchFetch)({serverHooks:w,staticGenerationAsyncStorage:p})}},59549:(e,t,a)=>{a.d(t,{db:()=>r});var s=a(53524);let r=globalThis.prisma??new s.PrismaClient}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[638,206],()=>a(37859));module.exports=s})();