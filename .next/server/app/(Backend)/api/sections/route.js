"use strict";(()=>{var e={};e.id=696,e.ids=[696],e.modules={53524:e=>{e.exports=require("@prisma/client")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},17670:(e,t,s)=>{s.r(t),s.d(t,{headerHooks:()=>v,originalPathname:()=>k,patchFetch:()=>S,requestAsyncStorage:()=>w,routeModule:()=>h,serverHooks:()=>j,staticGenerationAsyncStorage:()=>y,staticGenerationBailout:()=>b});var a={};s.r(a),s.d(a,{DELETE:()=>g,GET:()=>l,POST:()=>p,PUT:()=>f});var n=s(95419),r=s(69108),i=s(99678),o=s(59549),u=s(78070),c=s(82196);function d(e){let t=e.headers.get("Authorization");return t&&t.startsWith("Bearer ")?"uKkBUm36l8U=w2C_v!@"!==t.substring(7)?{valid:!1,message:"Unauthorized: Invalid Bearer token"}:{valid:!0,message:"Authorized: Valid Bearer token"}:{valid:!1,message:"Unauthorized: Bearer token missing or invalid"}}async function l(e){try{let t=d(e);if(!t.valid)return u.default.json({info:t.message},{status:401});let s=await o.db.sections.findMany({include:{categories:!0},orderBy:{createdAt:"asc"}});return u.default.json({sections:s,success:"Sections retrieved successfully"},{status:200})}catch(e){return u.default.json({error:"Something went wrong"},{status:500})}}async function f(e){try{let t=d(e);if(!t.valid)return u.default.json({info:t.message},{status:401});let s=await e.formData(),a=s.get("id");if(!a)return u.default.json({info:"ID is required"},{status:404});if(!await o.db.sections.findUnique({where:{id:a}}))return u.default.json({info:"ID not matched"},{status:404});let n=await m.safeParseAsync({title:s.get("section"),description:s.get("description")});if(!n.success){let e=[];return n.error.errors.forEach(t=>{e.push(t.message)}),console.log(e),u.default.json({message:e},{status:400})}let r=await o.db.sections.update({where:{id:a},data:n.data});return u.default.json({section:r,success:"Section updated successfully"},{status:200})}catch(e){return u.default.json({error:"Something went wrong"},{status:500})}}async function g(e){try{let t=d(e);if(!t.valid)return u.default.json({info:t.message},{status:401});let{id:s}=await e.json();if(!await o.db.sections.findUnique({where:{id:s}}))return u.default.json({info:"Sections not found"},{status:404});return await o.db.sections.delete({where:{id:s}}),u.default.json({success:"Item deleted successfully"},{status:200})}catch(e){return u.default.json({error:"Something went wrong"},{status:500})}}let m=c.z.object({title:c.z.string().nonempty({message:"Section can not be empty"}),description:c.z.string().nonempty({message:"Desription can not be empty"})});async function p(e){try{let t=d(e);if(!t.valid)return u.default.json({info:t.message},{status:401});let s=await e.formData(),a=await m.safeParseAsync({title:s.get("section"),description:s.get("description")});if(!a.success){let e=[];return a.error.errors.forEach(t=>{e.push(t.message)}),console.log(e),u.default.json({message:e},{status:400})}let n=await o.db.sections.create({data:a.data});return u.default.json({section:n,success:"Section created successfully"},{status:201})}catch(e){return console.log(e),u.default.json({error:"Something went wrong"},{status:500})}}let h=new n.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/(Backend)/api/sections/route",pathname:"/api/sections",filename:"route",bundlePath:"app/(Backend)/api/sections/route"},resolvedPagePath:"/home/wn-061/Arsalan/Image-demo/src/app/(Backend)/api/sections/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:w,staticGenerationAsyncStorage:y,serverHooks:j,headerHooks:v,staticGenerationBailout:b}=h,k="/(Backend)/api/sections/route";function S(){return(0,i.patchFetch)({serverHooks:j,staticGenerationAsyncStorage:y})}},59549:(e,t,s)=>{s.d(t,{db:()=>n});var a=s(53524);let n=globalThis.prisma??new a.PrismaClient}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[638,206,196],()=>s(17670));module.exports=a})();