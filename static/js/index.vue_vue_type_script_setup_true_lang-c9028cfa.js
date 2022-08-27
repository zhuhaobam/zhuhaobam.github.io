import{_ as J}from"./fullscreen-outlined-87918305.js";import{P as K,d as h,r as m,J as x,Q,o as l,k as u,f as r,R as W,l as X,b as Y,s as q,h as g,e as k,g as c,N as C,t as v,S as y,T as G,U as B,c as R,i as A,V as Z,W as I,K as ee,I as oe}from"./main-aff0b780.js";import{u as ne}from"./tags-ee30ba5b.js";import{_ as te}from"./Tag-744046ea.js";import{_ as re}from"./Tooltip-f70ff5ff.js";import{_ as se}from"./Dropdown-f9d64d31.js";const le=Object.assign(Object.assign({},K.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),ae=h({name:"Scrollbar",props:le,setup(){const a=m(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var s;(s=a.value)===null||s===void 0||s.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var s;(s=a.value)===null||s===void 0||s.scrollBy(o[0],o[1])}}),{scrollbarInstRef:a})},render(){return x(Q,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),ie=ae,ce={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ue=r("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M244 400L100 256l144-144"},null,-1),de=r("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M120 256h292"},null,-1),pe=[ue,de],he=h({name:"ArrowBackOutline",render:function(d,o){return l(),u("svg",ce,pe)}}),_e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ke=r("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M112 244l144-144l144 144"},null,-1),me=r("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M256 120v292"},null,-1),we=[ke,me],fe=h({name:"ArrowUp",render:function(d,o){return l(),u("svg",_e,we)}}),ge={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ve=r("path",{d:"M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",fill:"currentColor"},null,-1),xe=[ve],be=h({name:"Close",render:function(d,o){return l(),u("svg",ge,xe)}}),Ce={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$e=W('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 320v112H320"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M421.8 421.77L304 304"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 192V80h112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M90.2 90.23L208 208"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 80h112v112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M421.77 90.2L304 208"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 432H80V320"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M90.23 421.8L208 304"></path>',8),Se=[$e],Me=h({name:"Expand",render:function(d,o){return l(),u("svg",Ce,Se)}}),je={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Te=r("path",{d:"M320 146s24.36-12-64-12a160 160 0 1 0 160 160",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),ye=r("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 58l80 80l-80 80"},null,-1),Be=[Te,ye],Re=h({name:"Refresh",render:function(d,o){return l(),u("svg",je,Be)}}),Ae={"pt-5":"",pb7:"","pl-5":"",flex:"","flex-nowrap":""},Ie={key:0},Fe=h({__name:"index",emits:["fullScreenDo"],setup(a,{emit:d}){const{t:o}=X(),s=()=>{d("fullScreenDo")},i=ne(),N=Y(),{activeTag:p,tags:b}=q(i),O=e=>{i.setActiveTag(e),B.push(e)},$=m([]),w=m(!1),S=m(0),M=m(0),j=m(),V=()=>{w.value=!1},L=e=>{w.value=!1;const n=j.value;n&&(String(e)==="tag.close.other"&&i.removeOtherTag(n.path),String(e)==="tag.close.me"&&i.removeTag(n.path),String(e)==="tag.fresh"&&N.setReload(),String(e)==="tag.open"&&(i.setActiveTag(n.path),B.push(n.path)),String(e)==="tag.full.screen"&&s())},f=e=>()=>x(C,null,{default:()=>x(e)}),D=async(e,n)=>{e.preventDefault(),w.value=!1,oe().then(()=>{w.value=!0,S.value=e.clientX,M.value=e.clientY}),j.value=n,$.value=[{label:o("tag.open"),key:"tag.open",disabled:p.value===n.path,icon:f(fe)},{label:o("tag.fresh"),key:"tag.fresh",disabled:p.value!==n.path,icon:f(Re)},{label:o("tag.close.other"),key:"tag.close.other",disabled:p.value!==n.path||!i.leastTwo,icon:f(he)},{label:o("tag.close.me"),key:"tag.close.me",disabled:p.value!==n.path||!i.leastTwo,icon:f(be)},{label:o("tag.full.screen"),key:"tag.full.screen",disabled:p.value!==n.path,icon:f(Me)}]};function E(e){return x(ee(e))}return(e,n)=>{const F=J,U=re,z=te,H=ie,P=se;return l(),u(y,null,[g(H,{"x-scrollable":""},{default:k(()=>[r("div",Ae,[g(U,{placement:"bottom"},{trigger:k(()=>[g(c(C),{size:"18","mx-3":"","my-4":"","cursor-pointer":"","hover:color-primary":"",onClick:n[0]||(n[0]=t=>s())},{default:k(()=>[g(F)]),_:1})]),default:k(()=>[r("span",null,v(e.$t("tag.full.screen")),1)]),_:1}),r("div",null,"A"+v(c(b).length)+"/",1),r("div",null,"AA"+v(c(p))+"/",1),(l(!0),u(y,null,G(c(b),t=>(l(),R(z,{key:t.path,"mx-3":"","cursor-pointer":"","hover:color-primary":"",type:c(p)===t.path?"primary":"default",closable:c(b).length>1,onClick:_=>O(t.path),onClose:I(_=>c(i).removeTag(t.path),["stop"]),onContextmenu:I(_=>D(_,t),["prevent"])},{icon:k(()=>[t.meta.icon?(l(),R(c(C),{key:0,component:E(t.meta.icon)},null,8,["component"])):A("",!0)]),default:k(()=>{var _,T;return[Z(v(e.$t((_=t.meta.breadcrumb)!=null?_:"noting"))+" ",1),t.params&&t.params.did?(l(),u("span",Ie,"("+v((T=t.params.did)!=null?T:"")+")",1)):A("",!0)]}),_:2},1032,["type","closable","onClick","onClose","onContextmenu"]))),128))])]),_:1}),g(P,{placement:"bottom-start",trigger:"manual",x:S.value,y:M.value,options:$.value,show:w.value,"on-clickoutside":V,onSelect:L},null,8,["x","y","options","show"])],64)}}});export{Fe as _};
