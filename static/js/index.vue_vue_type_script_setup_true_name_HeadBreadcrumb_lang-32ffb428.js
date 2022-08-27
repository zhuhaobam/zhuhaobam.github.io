import{S as m,a1 as u,T as F,a0 as b,d as C,W as N,V as T,al as K,X as O,a5 as A,H as y,Z as U,I as _,U as q,r as V,am as J,an as X,ao as Z,a3 as G,ap as Q,J as j,aq as Y,K as W,F as I,m as ee,w as R,o as h,c as f,b as k,k as B,ar as re,a8 as ne,e as ae,M as w,h as z,j as L,t as P}from"./main-b7c9a53e.js";import{_ as oe}from"./Dropdown-631cd0c1.js";const te=m("breadcrumb",`
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
 `),u("&:not(:last-child)",[F("clickable",[b("link",`
 cursor: pointer;
 `,[u("&:hover",`
 background-color: var(--n-item-color-hover);
 `),u("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),b("link",`
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
 `)])]),b("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),u("&:last-child",[b("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[m("icon",`
 color: var(--n-item-text-color-active);
 `)]),b("separator",`
 display: none;
 `)])])]),$=q("n-breadcrumb"),se=Object.assign(Object.assign({},T.props),{separator:{type:String,default:"/"}}),ce=C({name:"Breadcrumb",props:se,setup(r){const{mergedClsPrefixRef:t,inlineThemeDisabled:e}=N(r),n=T("Breadcrumb","-breadcrumb",te,K,r,t);O($,{separatorRef:A(r,"separator"),mergedClsPrefixRef:t});const s=y(()=>{const{common:{cubicBezierEaseInOut:i},self:{separatorColor:c,itemTextColor:l,itemTextColorHover:d,itemTextColorPressed:p,itemTextColorActive:v,fontSize:o,fontWeightActive:g,itemBorderRadius:x,itemColorHover:H,itemColorPressed:M,itemLineHeight:D}}=n.value;return{"--n-font-size":o,"--n-bezier":i,"--n-item-text-color":l,"--n-item-text-color-hover":d,"--n-item-text-color-pressed":p,"--n-item-text-color-active":v,"--n-separator-color":c,"--n-item-color-hover":H,"--n-item-color-pressed":M,"--n-item-border-radius":x,"--n-font-weight-active":g,"--n-item-line-height":D}}),a=e?U("breadcrumb",void 0,s,r):void 0;return{mergedClsPrefix:t,cssVars:e?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),_("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},_("ul",null,this.$slots))}}),ie=Z?window:null,le=(r=ie)=>{const t=()=>{const{hash:s,host:a,hostname:i,href:c,origin:l,pathname:d,port:p,protocol:v,search:o}=(r==null?void 0:r.location)||{};return{hash:s,host:a,hostname:i,href:c,origin:l,pathname:d,port:p,protocol:v,search:o}},e=()=>{n.value=t()},n=V(t());return J(()=>{r&&(r.addEventListener("popstate",e),r.addEventListener("hashchange",e))}),X(()=>{r&&(r.removeEventListener("popstate",e),r.removeEventListener("hashchange",e))}),n},de={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},ue=C({name:"BreadcrumbItem",props:de,setup(r,{slots:t}){const e=G($,null);if(!e)return()=>null;const{separatorRef:n,mergedClsPrefixRef:s}=e,a=le(),i=y(()=>r.href?"a":"span"),c=y(()=>a.value.href===r.href?"location":null);return()=>{const{value:l}=s;return _("li",{class:[`${l}-breadcrumb-item`,r.clickable&&`${l}-breadcrumb-item--clickable`]},_(i.value,{class:`${l}-breadcrumb-item__link`,"aria-current":c.value,href:r.href,onClick:r.onClick},t),_("span",{class:`${l}-breadcrumb-item__separator`,"aria-hidden":"true"},Q(t.separator,()=>{var d;return[(d=r.separator)!==null&&d!==void 0?d:n.value]})))}}});function S(r,t){return r.filter(e=>e.name!==void 0).map(e=>{var s,a;const n={...e,key:e.name,props:e.props?{default:!0}:e.props};return(s=e.meta)!=null&&s.icon&&(n.icon=j(e.meta.icon)),(a=e.children)!=null&&a.length&&(n.children=E(e.children,t)),n})}function E(r,t){return r.filter(e=>e.name!==void 0).filter(e=>{var i,c,l;const n=Y(e);return(((l=(((c=(i=n.children)==null?void 0:i.length)!=null?c:0)>0?n.children[0]:n).meta)==null?void 0:l.hidden)||!1)!==!0}).map(e=>{var s,a,i;const n={...e,key:e.name,label:t((s=e.meta)==null?void 0:s.breadcrumb)};return(a=e.meta)!=null&&a.icon&&(n.icon=j(e.meta.icon)),(i=e.children)!=null&&i.length&&(n.children=E(e.children,t)),n.props=e.props?{default:!0}:e.props,n})}const he={flex:"","items-center":"","justify-center":""},me={key:1,flex:"","items-center":"","justify-center":""},pe=C({name:"HeadBreadcrumb"}),fe=C({...pe,setup(r){const t=W(),e=I(),{t:n,locale:s}=ee(),a=V([]);R(s,(c,l)=>{a.value=S(e.matched,n)},{immediate:!0,deep:!0}),R(()=>e.fullPath,()=>{a.value=S(e.matched,n)});const i=c=>{t.push({name:c})};return(c,l)=>{const d=oe,p=ue,v=ce;return h(),f(v,null,{default:k(()=>[(h(!0),B(ne,null,re(a.value,o=>(h(),f(p,{key:o.name},{default:k(()=>{var g;return[o.children.length?(h(),f(d,{key:0,options:o.children,onSelect:i},{default:k(()=>{var x;return[ae("div",he,[o!=null&&o.icon?(h(),f(w(o==null?void 0:o.icon),{key:0})):z("",!0),L(" "+P(c.$t((x=o.meta)==null?void 0:x.breadcrumb)),1)])]}),_:2},1032,["options"])):(h(),B("div",me,[o!=null&&o.icon?(h(),f(w(o==null?void 0:o.icon),{key:0})):z("",!0),L(" "+P(c.$t((g=o.meta)==null?void 0:g.breadcrumb)),1)]))]}),_:2},1024))),128))]),_:1})}}});export{fe as _};
