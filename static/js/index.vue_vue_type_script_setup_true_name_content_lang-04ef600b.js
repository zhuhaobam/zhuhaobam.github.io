import{d as v,u as N,c as f,i as R,a6 as b,a7 as E,e as l,v as P,h as r,g as d,a8 as V,x as h,C as j,j as n,f as g,a9 as F,l as L,aa as z,I as D,ab as I}from"./main-a43f7d35.js";import{u as K}from"./full-2deca632.js";import{_ as T}from"./BackTop-0d14b779.js";const q={id:"body-main"},G=v({name:"content"}),U=v({...G,emits:["hide-main-overflow"],setup(H,{emit:p}){const x=N(),w=K(),u=f(()=>w.getPage),t=R("provide-screen"),c=(e,o)=>{var s,i;return((s=e==null?void 0:e.padding)!=null?s:"0px")+" - "+((i=e==null?void 0:e.padding)!=null?i:"0px")+" - "+(o-6)+"px"},S=b().getRoutes(),k=f(()=>S.filter(e=>{var o;return(o=e.meta)==null?void 0:o.keepAlive}).map(e=>e.name));function y(){p("hide-main-overflow",!0)}function C(){p("hide-main-overflow",!1)}return(e,o)=>{const s=I,i=E("router-view"),B=T;return l(),P(D,null,[r(i,null,{default:d(({Component:A,route:a})=>[r(V,{name:"fade-slide",mode:"out-in",appear:!0,onBeforeLeave:y,onAfterEnter:C},{default:d(()=>[h("div",q,[r(s,{"content-style":"padding:  0px;"},{default:d(()=>{var _,m;return[h("div",{id:"app-main",style:j((n(u)==="inner:true"?"min-height: calc(100vh - "+c(a.meta,n(t)!=="xs"&&n(t)!=="s"?56:32)+");":n(u)==="init"?"min-height: calc(100vh - "+c(a.meta,n(t)!=="xs"&&n(t)!=="s"?170:146)+");":"min-height: calc(100vh - "+c(a.meta,n(t)!=="xs"&&n(t)!=="s"?170:146)+");")+"padding:"+((m=(_=a.meta)==null?void 0:_.padding)!=null?m:0+"px"))},[(l(),g(z,{include:n(k)},[n(x).headerSetting.mReload?(l(),g(F(A),{key:a.fullPath})):L("",!0)],1032,["include"]))],4)]}),_:2},1024)])]),_:2},1024)]),_:1}),r(B,{"visibility-height":300})],64)}}});export{U as _};