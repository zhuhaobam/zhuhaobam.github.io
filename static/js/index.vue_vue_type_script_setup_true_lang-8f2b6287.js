import{d as E,m as B,a as L,b as N,s as I,r as i,w as u,A as j,B as F,C as P,D as U,E as W,F as D,G,H as J,g as d,o as $,l as q,h as Q,I as X,J as Y,N as Z}from"./main-e332850a.js";import{u as ee}from"./tags-4919076e.js";import{_ as te}from"./Menu-3282b7e0.js";const le=E({__name:"index",props:{collapsedIconSize:{default:24},collapsedWidth:{default:48},iconSize:{default:20},indent:{default:32},rootIndent:{default:32}},setup(S){const o=S,{t:x}=B(),r=ee(),K=L(),z=N(),{locale:w,collapsed:p}=I(z),{theme:g,menuTheme:l}=I(K),m=i({}),h=i(0);u(p,(e,t)=>{if(p.value){const n=o.collapsedIconSize<l.value.minHeight?l.value.minHeight:o.collapsedIconSize+l.value.compensate;m.value={itemHeight:n+"px"},h.value=o.collapsedIconSize}else m.value={itemHeight:l.value.minHeight+"px"},h.value=l.value.minHeight},{immediate:!0,deep:!0});const H=j.map(e=>{var n;return((n=e==null?void 0:e.meta)==null?void 0:n.layout)===!1?e:F([e])[0]}),O=P(H),R=U(O),f=i([]);u(w,(e,t)=>{f.value=W(R,x)},{immediate:!0,deep:!0});const y=i(g!==null);u(g,(e,t)=>{y.value=e!==null},{immediate:!0,deep:!0});const s=D(),v=s.matched,_=i(s.name),T=(v&&v.length?v.map(e=>e.name):[]).filter(e=>e),c=G({openKeys:T}),C=J(()=>d(_));u(()=>s.fullPath,()=>{var a;const e=s.matched;c.openKeys=e.map(k=>k.name);const t=((a=s.meta)==null?void 0:a.activeMenu)||"";_.value=t||s.name;const n=e[e.length-1];n.path.indexOf(":")!==-1&&(n.params=s.params),r.addTag(n),console.log("slider fullPath",r.getTags.length,r.getActiveTag)});function M(e,t){/http(s)?:/.test(e)&&window.open(e)}function V(e){if(!e)return;const t=e.find(a=>c.openKeys.indexOf(a)===-1),n=b(t);c.openKeys=n?t?[t]:[]:e}function b(e){if(!e)return!1;const t=[];for(const{children:n,key:a}of d(f))n&&n.length&&t.push(a);return t.includes(e)}function A(e){return X(Z,Y(e.menuRenderIcon))}return(e,t)=>{const n=te;return $(),q("div",null,[Q(n,{"theme-overrides":m.value,accordion:"",options:f.value,inverted:y.value,mode:"vertical",collapsed:d(p),"collapsed-width":o.collapsedWidth,"collapsed-icon-size":h.value,"icon-size":o.iconSize,indent:o.indent,"root-indent":o.rootIndent,"expanded-keys":c.openKeys,value:d(C),"render-icon":A,"onUpdate:value":M,"onUpdate:expandedKeys":V},null,8,["theme-overrides","options","inverted","collapsed","collapsed-width","collapsed-icon-size","icon-size","indent","root-indent","expanded-keys","value"])])}}});export{le as _};
