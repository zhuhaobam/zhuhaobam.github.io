import{d as N,l as j,a as F,b as U,s as K,r as i,w as r,z as W,A as D,B as G,C as J,D as P,E as $,F as q,G as Q,g as u,H as X,I as Y,o as Z,k as ee,h as te,J as ne,K as ae,N as oe}from"./main-45698fd2.js";import{u as se}from"./tags-1009618b.js";import{_ as ce}from"./Menu-5479c491.js";const ue=N({__name:"index",props:{collapsedIconSize:{default:24},collapsedWidth:{default:48},iconSize:{default:20},indent:{default:32},rootIndent:{default:32}},setup(z){const s=z,{t:x}=j(),g=se(),w=F(),M=U(),{locale:R,collapsed:m}=K(M),{theme:y,menuTheme:c}=K(w),p=i({}),h=i(0);r(m,(e,t)=>{if(m.value){const n=s.collapsedIconSize<c.value.minHeight?c.value.minHeight:s.collapsedIconSize+c.value.compensate;p.value={itemHeight:n+"px"},h.value=s.collapsedIconSize}else p.value={itemHeight:c.value.minHeight+"px"},h.value=c.value.minHeight},{immediate:!0,deep:!0});const H=W.map(e=>{var n;return((n=e==null?void 0:e.meta)==null?void 0:n.layout)===!1?e:D([e])[0]}),O=G(H),T=J(O),f=i([]);r(R,(e,t)=>{f.value=P(T,x)},{immediate:!0,deep:!0});const _=i(y!==null);r(y,(e,t)=>{_.value=e!==null},{immediate:!0,deep:!0});const a=$(),v=a.matched,I=i(a.name),C=(v&&v.length?v.map(e=>e.name):[]).filter(e=>e),d=q({openKeys:C}),V=Q(()=>u(I));X(()=>{var o,l;const e=a.matched,t=e[e.length-1],n={path:t.path,params:a.params,breadcrumb:(o=t.meta.breadcrumb)!=null?o:"",icon:(l=t.meta.icon)!=null?l:""};g.addTag(n)}),r(()=>a.fullPath,()=>{var l,S,b;const e=Y(a.matched);d.openKeys=e.map(L=>L.name);const t=((l=a.meta)==null?void 0:l.activeMenu)||"";I.value=t||a.name;const n=e[e.length-1],o={path:n.path,params:a.params,breadcrumb:(S=n.meta.breadcrumb)!=null?S:"",icon:(b=n.meta.icon)!=null?b:""};g.addTag(o)});function k(e,t){/http(s)?:/.test(e)&&window.open(e)}function A(e){if(!e)return;const t=e.find(o=>d.openKeys.indexOf(o)===-1),n=E(t);d.openKeys=n?t?[t]:[]:e}function E(e){if(!e)return!1;const t=[];for(const{children:n,key:o}of u(f))n&&n.length&&t.push(o);return t.includes(e)}function B(e){return ne(oe,ae(e.menuRenderIcon))}return(e,t)=>{const n=ce;return Z(),ee("div",null,[te(n,{"theme-overrides":p.value,accordion:"",options:f.value,inverted:_.value,mode:"vertical",collapsed:u(m),"collapsed-width":s.collapsedWidth,"collapsed-icon-size":h.value,"icon-size":s.iconSize,indent:s.indent,"root-indent":s.rootIndent,"expanded-keys":d.openKeys,value:u(V),"render-icon":B,"onUpdate:value":k,"onUpdate:expandedKeys":A},null,8,["theme-overrides","options","inverted","collapsed","collapsed-width","collapsed-icon-size","icon-size","indent","root-indent","expanded-keys","value"])])}}});export{ue as _};