import{o as g}from"./index-6cd90544.js";import{d as p,r as c,F as h,ax as y,o as r,j as x,g as e,b as o,e as v,c as b,f as L,bD as M,h as N,O as k,Q as l,_ as B}from"./main-93e7aa02.js";import{N as C,_ as G}from"./text-fd25832b.js";import{_ as R}from"./Code-283ece5c.js";import{_ as T}from"./Space-3c046659.js";import{b as i}from"./route-block-7ae06361.js";import"./use-compitable-2c076b28.js";const V=l("GET"),w={style:{overflow:"auto"}},E=l("JSON\u7ED3\u679C"),j=p({name:"axios-get"}),u=p({...j,setup(q){const n=c(),s=h(n);y(()=>{g().then(t=>{n.value=t}).catch(t=>{console.log("request->onLogin<MyResponse<MyLogin>>->error",t)})});const d=c(`onLogin<MyResponse<MyLogin>>()
    .then(res => {
      // ... ...
    })
    .catch((error: any) => {
      console.log('request->onLogin<MyResponse<MyLogin>>->error', error)
    })`);return(t,D)=>{const a=G,_=C,f=R,m=T;return r(),x(k,null,[e(_,{prefix:"bar","align-text":"",type:"info"},{default:o(()=>[e(a,{type:"info"},{default:o(()=>[V]),_:1})]),_:1}),v("div",w,[e(m,{vertical:"",size:16},{default:o(()=>[e(f,{code:d.value,language:"javascript","show-line-numbers":""},null,8,["code"])]),_:1})]),e(_,{prefix:"bar","align-text":"",type:"info"},{default:o(()=>[e(a,{type:"info"},{default:o(()=>[E]),_:1})]),_:1}),s?(r(),b(L(M),{key:0,value:s,expanded:!0,"expand-depth":5,theme:"light"},null,8,["value"])):N("",!0)],64)}}});typeof i=="function"&&i(u);const S=B(u,[["__scopeId","data-v-d4488b95"]]);export{S as default};