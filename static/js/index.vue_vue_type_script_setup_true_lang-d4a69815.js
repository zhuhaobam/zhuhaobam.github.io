import{M as v,d as _,r as x,H as m,O as C,o as c,c as p,b as l,e as S,j as T,P as y,f as a,Q as k,R as u,g as B,S as j,t as I,T as M,I as N,N as O}from"./main-cd746231.js";import{u as $}from"./tags-747c585b.js";import{_ as w}from"./Tag-516ea7a2.js";const R=Object.assign(Object.assign({},v.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),V=_({name:"Scrollbar",props:R,setup(){const r=x(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var e;(e=r.value)===null||e===void 0||e.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var e;(e=r.value)===null||e===void 0||e.scrollBy(o[0],o[1])}}),{scrollbarInstRef:r})},render(){return m(C,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),A=V,F={"pt-5":"",pb7:"","pl-5":"",flex:"","flex-nowrap":""},H=_({__name:"index",setup(r){const t=$(),o=n=>{t.setActiveTag(n),M.push(n)};function e(n){return m(N(n))}async function d(n,b){}return(n,b)=>{const f=O,h=w,g=A;return c(),p(g,{"x-scrollable":""},{default:l(()=>[S("div",F,[(c(!0),T(k,null,y(a(t).tags,s=>(c(),p(h,{key:s.path,class:"mx-3 cursor-pointer hover:color-primary",type:a(t).activeTag===s.path?"primary":"default",closable:a(t).tags.length>1,onClick:i=>o(s.path),onClose:u(i=>a(t).removeTag(s.path),["stop"]),onContextmenu:u(i=>d(),["prevent"])},{icon:l(()=>[B(f,{component:e(s.meta.icon)},null,8,["component"])]),default:l(()=>[j(I(n.$t(s.meta.breadcrumb))+" ",1)]),_:2},1032,["type","closable","onClick","onClose","onContextmenu"]))),128))])]),_:1})}}});export{H as _};
