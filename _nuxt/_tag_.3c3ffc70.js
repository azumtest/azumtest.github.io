import{_ as i}from"./nuxt-link.a1353b97.js";import{_ as p}from"./Cell.vue.a65b6de2.js";import{f as d,n as f,j as h,g as x,o as e,c as o,a as _,b as g,w as y,d as l,t as k,h as s,F as N,r as w,l as C,i as B}from"./entry.80c54835.js";import{q as V}from"./query.a15fd83b.js";import"./index.af3fd444.js";import"./preview.d49ae273.js";const q={class:"text-title mb-2em"},v={key:0,class:"text-2xl text-center"},S=d({__name:"[tag]",async setup(F){let t,n;const r=f().params.tag,a=h();return a.value=([t,n]=x(()=>V().where({tags:{$contains:r}}).find()),t=await t,n(),t),(A,D)=>{const m=i,u=p;return e(),o("div",null,[_("h1",q,[g(m,{to:"/tags",class:"hover"},{default:y(()=>[l(" Tags ")]),_:1}),l(" / "+k(s(r)),1)]),_("ul",null,[(e(!0),o(N,null,w(s(a),c=>(e(),B(u,{key:c._path,article:c},null,8,["article"]))),128)),s(a).length===0?(e(),o("h1",v," Not Found Any Document😗 ")):C("",!0)])])}}});export{S as default};