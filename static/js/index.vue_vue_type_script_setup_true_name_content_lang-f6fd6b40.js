import{d as g,u as A,c as f,i as N,a5 as R,a6 as E,e as l,v as P,h as r,g as p,a7 as V,x as b,f as h,j as n,a8 as j,l as F,a9 as L,B as z,H as D,aa as H}from"./main-69cbe56a.js";import{u as K}from"./full-cde75d7d.js";import{_ as T}from"./BackTop-b93d133c.js";const q=g({name:"content"}),Q=g({...q,emits:["hide-main-overflow"],setup(G,{emit:u}){const v=A(),x=K(),d=f(()=>x.getPage),t=N("provide-screen"),c=(e,o)=>{var s,i;return((s=e==null?void 0:e.padding)!=null?s:"0px")+" - "+((i=e==null?void 0:e.padding)!=null?i:"0px")+" - "+(o-6)+"px"},w=R().getRoutes(),S=f(()=>w.filter(e=>{var o;return(o=e.meta)==null?void 0:o.keepAlive}).map(e=>e.name));function k(){u("hide-main-overflow",!0)}function B(){u("hide-main-overflow",!1)}return(e,o)=>{const s=H,i=E("router-view"),y=T;return l(),P(D,null,[r(i,null,{default:p(({Component:C,route:a})=>[r(V,{name:"fade-slide",mode:"out-in",appear:!0,onBeforeLeave:k,onAfterEnter:B},{default:p(()=>[r(s,{"content-style":"padding:  0px;"},{default:p(()=>{var m,_;return[b("div",{id:"app-main",style:z((n(d)==="inner:true"?"min-height: calc(100vh - "+c(a.meta,n(t)!=="xs"&&n(t)!=="s"?56:32)+");":n(d)==="init"?"min-height: calc(100vh - "+c(a.meta,n(t)!=="xs"&&n(t)!=="s"?170:146)+");":"min-height: calc(100vh - "+c(a.meta,n(t)!=="xs"&&n(t)!=="s"?170:146)+");")+"padding:"+((_=(m=a.meta)==null?void 0:m.padding)!=null?_:0+"px"))},[(l(),h(L,{include:n(S)},[n(v).headerSetting.mReload?(l(),h(j(C),{key:a.fullPath})):F("",!0)],1032,["include"]))],4)]}),_:2},1024)]),_:2},1024)]),_:1}),r(y,{"visibility-height":300})],64)}}});export{Q as _};
