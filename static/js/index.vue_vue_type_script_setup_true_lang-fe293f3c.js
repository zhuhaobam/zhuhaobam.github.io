import{d as E,l as B,a as L,b as N,s as I,r as i,w as d,z as j,A as F,B as U,C as W,D,E as G,F as J,G as P,g as u,H as $,o as q,k as Q,h as X,I as Y,J as Z,N as ee}from"./main-accde630.js";import{u as te}from"./tags-473db6a5.js";import{_ as ne}from"./Menu-442de7b0.js";const ie=E({__name:"index",props:{collapsedIconSize:{default:24},collapsedWidth:{default:48},iconSize:{default:20},indent:{default:32},rootIndent:{default:32}},setup(S){const s=S,{t:x}=B(),v=te(),z=L(),K=N(),{locale:w,collapsed:r}=I(K),{theme:g,menuTheme:c}=I(z),p=i({}),m=i(0);d(r,(e,t)=>{if(r.value){const n=s.collapsedIconSize<c.value.minHeight?c.value.minHeight:s.collapsedIconSize+c.value.compensate;p.value={itemHeight:n+"px"},m.value=s.collapsedIconSize}else p.value={itemHeight:c.value.minHeight+"px"},m.value=c.value.minHeight},{immediate:!0,deep:!0});const O=j.map(e=>{var n;return((n=e==null?void 0:e.meta)==null?void 0:n.layout)===!1?e:F([e])[0]}),H=U(O),R=W(H),h=i([]);d(w,(e,t)=>{h.value=D(R,x)},{immediate:!0,deep:!0});const y=i(g!==null);d(g,(e,t)=>{y.value=e!==null},{immediate:!0,deep:!0});const o=G(),f=o.matched,_=i(o.name),M=(f&&f.length?f.map(e=>e.name):[]).filter(e=>e),l=J({openKeys:M}),T=P(()=>u(_));$(()=>{const e=o.matched,t=e[e.length-1];t.path.indexOf(":")!==-1&&(t.params=o.params),v.addTag(t)}),d(()=>o.fullPath,()=>{var a;const e=o.matched;l.openKeys=e.map(A=>A.name);const t=((a=o.meta)==null?void 0:a.activeMenu)||"";_.value=t||o.name;const n=e[e.length-1];n.path.indexOf(":")!==-1&&(n.params=o.params),v.addTag(n)});function C(e,t){/http(s)?:/.test(e)&&window.open(e)}function V(e){if(!e)return;const t=e.find(a=>l.openKeys.indexOf(a)===-1),n=b(t);l.openKeys=n?t?[t]:[]:e}function b(e){if(!e)return!1;const t=[];for(const{children:n,key:a}of u(h))n&&n.length&&t.push(a);return t.includes(e)}function k(e){return Y(ee,Z(e.menuRenderIcon))}return(e,t)=>{const n=ne;return q(),Q("div",null,[X(n,{"theme-overrides":p.value,accordion:"",options:h.value,inverted:y.value,mode:"vertical",collapsed:u(r),"collapsed-width":s.collapsedWidth,"collapsed-icon-size":m.value,"icon-size":s.iconSize,indent:s.indent,"root-indent":s.rootIndent,"expanded-keys":l.openKeys,value:u(T),"render-icon":k,"onUpdate:value":C,"onUpdate:expandedKeys":V},null,8,["theme-overrides","options","inverted","collapsed","collapsed-width","collapsed-icon-size","icon-size","indent","root-indent","expanded-keys","value"])])}}});export{ie as _};
