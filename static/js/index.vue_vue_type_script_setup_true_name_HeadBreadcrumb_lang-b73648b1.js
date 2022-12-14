import{m,P as u,n as D,Q as f,d as C,q as F,p as S,aL as O,G as K,V as A,c as R,s as q,t as b,F as G,r as T,o as Q,aM as U,aN as J,i as X,as as Y,a5 as $,aO as Z,a6 as W,a2 as I,y as ee,w as B,e as h,v as k,h as re,g as y,I as ne,ae,f as x,x as oe,a9 as z,l as L,aK as w,z as P}from"./main-2bbc1e4d.js";import{_ as te}from"./Dropdown-511311c2.js";const se=m("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[u("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),u("a",`
 color: inherit;
 text-decoration: inherit;
 `),m("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[m("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),u("&:not(:last-child)",[D("clickable",[f("link",`
 cursor: pointer;
 `,[u("&:hover",`
 background-color: var(--n-item-color-hover);
 `),u("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),f("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[u("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[m("icon",`
 color: var(--n-item-text-color-hover);
 `)]),u("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[m("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),f("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),u("&:last-child",[f("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[m("icon",`
 color: var(--n-item-text-color-active);
 `)]),f("separator",`
 display: none;
 `)])])]),j=G("n-breadcrumb"),ce=Object.assign(Object.assign({},S.props),{separator:{type:String,default:"/"}}),ie=C({name:"Breadcrumb",props:ce,setup(r){const{mergedClsPrefixRef:t,inlineThemeDisabled:e}=F(r),n=S("Breadcrumb","-breadcrumb",se,O,r,t);K(j,{separatorRef:A(r,"separator"),mergedClsPrefixRef:t});const s=R(()=>{const{common:{cubicBezierEaseInOut:i},self:{separatorColor:c,itemTextColor:l,itemTextColorHover:d,itemTextColorPressed:p,itemTextColorActive:v,fontSize:o,fontWeightActive:_,itemBorderRadius:g,itemColorHover:M,itemColorPressed:N,itemLineHeight:H}}=n.value;return{"--n-font-size":o,"--n-bezier":i,"--n-item-text-color":l,"--n-item-text-color-hover":d,"--n-item-text-color-pressed":p,"--n-item-text-color-active":v,"--n-separator-color":c,"--n-item-color-hover":M,"--n-item-color-pressed":N,"--n-item-border-radius":g,"--n-font-weight-active":_,"--n-item-line-height":H}}),a=e?q("breadcrumb",void 0,s,r):void 0;return{mergedClsPrefix:t,cssVars:e?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),b("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},b("ul",null,this.$slots))}}),le=J?window:null,de=(r=le)=>{const t=()=>{const{hash:s,host:a,hostname:i,href:c,origin:l,pathname:d,port:p,protocol:v,search:o}=(r==null?void 0:r.location)||{};return{hash:s,host:a,hostname:i,href:c,origin:l,pathname:d,port:p,protocol:v,search:o}},e=()=>{n.value=t()},n=T(t());return Q(()=>{r&&(r.addEventListener("popstate",e),r.addEventListener("hashchange",e))}),U(()=>{r&&(r.removeEventListener("popstate",e),r.removeEventListener("hashchange",e))}),n},ue={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},he=C({name:"BreadcrumbItem",props:ue,setup(r,{slots:t}){const e=X(j,null);if(!e)return()=>null;const{separatorRef:n,mergedClsPrefixRef:s}=e,a=de(),i=R(()=>r.href?"a":"span"),c=R(()=>a.value.href===r.href?"location":null);return()=>{const{value:l}=s;return b("li",{class:[`${l}-breadcrumb-item`,r.clickable&&`${l}-breadcrumb-item--clickable`]},b(i.value,{class:`${l}-breadcrumb-item__link`,"aria-current":c.value,href:r.href,onClick:r.onClick},t),b("span",{class:`${l}-breadcrumb-item__separator`,"aria-hidden":"true"},Y(t.separator,()=>{var d;return[(d=r.separator)!==null&&d!==void 0?d:n.value]})))}}});function V(r,t){return r.filter(e=>e.name!==void 0).map(e=>{var s,a;const n={...e,key:e.name,props:e.props?{default:!0}:e.props};return(s=e.meta)!=null&&s.icon&&(n.icon=$(e.meta.icon)),(a=e.children)!=null&&a.length&&(n.children=E(e.children,t)),n})}function E(r,t){return r.filter(e=>e.name!==void 0).filter(e=>{var i,c,l;const n=Z(e);return(((l=(((c=(i=n.children)==null?void 0:i.length)!=null?c:0)>0?n.children[0]:n).meta)==null?void 0:l.hidden)||!1)!==!0}).map(e=>{var s,a,i;const n={...e,key:e.name,label:t((s=e.meta)==null?void 0:s.breadcrumb)};return(a=e.meta)!=null&&a.icon&&(n.icon=$(e.meta.icon)),(i=e.children)!=null&&i.length&&(n.children=E(e.children,t)),n.props=e.props?{default:!0}:e.props,n})}const me={flex:"","items-center":"","justify-center":""},pe={key:1,flex:"","items-center":"","justify-center":""},ve=C({name:"HeadBreadcrumb"}),_e=C({...ve,setup(r){const t=W(),e=I(),{t:n,locale:s}=ee(),a=T([]);B(s,(c,l)=>{a.value=V(e.matched,n)},{immediate:!0,deep:!0}),B(()=>e.fullPath,()=>{a.value=V(e.matched,n)});const i=c=>{t.push({name:c})};return(c,l)=>{const d=te,p=he,v=ie;return h(),k("div",null,[re(v,null,{default:y(()=>[(h(!0),k(ne,null,ae(a.value,o=>(h(),x(p,{key:o.name},{default:y(()=>{var _;return[o.children.length?(h(),x(d,{key:0,options:o.children,onSelect:i},{default:y(()=>{var g;return[oe("div",me,[o!=null&&o.icon?(h(),x(z(o==null?void 0:o.icon),{key:0})):L("",!0),w(" "+P(c.$t((g=o.meta)==null?void 0:g.breadcrumb)),1)])]}),_:2},1032,["options"])):(h(),k("div",pe,[o!=null&&o.icon?(h(),x(z(o==null?void 0:o.icon),{key:0})):L("",!0),w(" "+P(c.$t((_=o.meta)==null?void 0:_.breadcrumb)),1)]))]}),_:2},1024))),128))]),_:1})])}}});export{_e as _};
