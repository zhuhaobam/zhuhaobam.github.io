import{W as h,a5 as u,X as N,a4 as b,d as C,$ as O,Z as S,aB as A,a0 as F,a9 as K,G as y,a2 as G,H as _,Y as J,r as T,ax as Q,aC as U,aD as X,a7 as Y,aE as Z,aF as $,J as q,E as W,l as I,w as R,o as m,c as f,b as k,j as B,M as ee,O as re,e as ne,L,h as w,Q as z,t as P}from"./main-72de468e.js";import{_ as ae}from"./Dropdown-4603c96b.js";const oe=h("breadcrumb",`
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
 `),h("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[h("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),u("&:not(:last-child)",[N("clickable",[b("link",`
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
 `,[h("icon",`
 color: var(--n-item-text-color-hover);
 `)]),u("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[h("icon",`
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
 `,[h("icon",`
 color: var(--n-item-text-color-active);
 `)]),b("separator",`
 display: none;
 `)])])]),j=J("n-breadcrumb"),te=Object.assign(Object.assign({},S.props),{separator:{type:String,default:"/"}}),se=C({name:"Breadcrumb",props:te,setup(r){const{mergedClsPrefixRef:t,inlineThemeDisabled:e}=O(r),o=S("Breadcrumb","-breadcrumb",oe,A,r,t);F(j,{separatorRef:K(r,"separator"),mergedClsPrefixRef:t});const s=y(()=>{const{common:{cubicBezierEaseInOut:i},self:{separatorColor:c,itemTextColor:l,itemTextColorHover:d,itemTextColorPressed:p,itemTextColorActive:v,fontSize:n,fontWeightActive:g,itemBorderRadius:x,itemColorHover:H,itemColorPressed:M,itemLineHeight:D}}=o.value;return{"--n-font-size":n,"--n-bezier":i,"--n-item-text-color":l,"--n-item-text-color-hover":d,"--n-item-text-color-pressed":p,"--n-item-text-color-active":v,"--n-separator-color":c,"--n-item-color-hover":H,"--n-item-color-pressed":M,"--n-item-border-radius":x,"--n-font-weight-active":g,"--n-item-line-height":D}}),a=e?G("breadcrumb",void 0,s,r):void 0;return{mergedClsPrefix:t,cssVars:e?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),_("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},_("ul",null,this.$slots))}}),ce=X?window:null,ie=(r=ce)=>{const t=()=>{const{hash:s,host:a,hostname:i,href:c,origin:l,pathname:d,port:p,protocol:v,search:n}=(r==null?void 0:r.location)||{};return{hash:s,host:a,hostname:i,href:c,origin:l,pathname:d,port:p,protocol:v,search:n}},e=()=>{o.value=t()},o=T(t());return Q(()=>{r&&(r.addEventListener("popstate",e),r.addEventListener("hashchange",e))}),U(()=>{r&&(r.removeEventListener("popstate",e),r.removeEventListener("hashchange",e))}),o},le={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},de=C({name:"BreadcrumbItem",props:le,setup(r,{slots:t}){const e=Y(j,null);if(!e)return()=>null;const{separatorRef:o,mergedClsPrefixRef:s}=e,a=ie(),i=y(()=>r.href?"a":"span"),c=y(()=>a.value.href===r.href?"location":null);return()=>{const{value:l}=s;return _("li",{class:[`${l}-breadcrumb-item`,r.clickable&&`${l}-breadcrumb-item--clickable`]},_(i.value,{class:`${l}-breadcrumb-item__link`,"aria-current":c.value,href:r.href,onClick:r.onClick},t),_("span",{class:`${l}-breadcrumb-item__separator`,"aria-hidden":"true"},Z(t.separator,()=>{var d;return[(d=r.separator)!==null&&d!==void 0?d:o.value]})))}}});function E(r,t){return r.filter(e=>e.name!==void 0).map(e=>{var s,a;const o={...e,key:e.name,props:e.props?{default:!0}:e.props};return(s=e.meta)!=null&&s.icon&&(o.icon=$(e.meta.icon)),(a=e.children)!=null&&a.length&&(o.children=V(e.children,t)),o})}function V(r,t){return r.filter(e=>e.name!==void 0).map(e=>{var s,a,i;const o={...e,key:e.name,label:t((s=e.meta)==null?void 0:s.breadcrumb)};return(a=e.meta)!=null&&a.icon&&(o.icon=$(e.meta.icon)),(i=e.children)!=null&&i.length&&(o.children=V(e.children,t)),o.props=e.props?{default:!0}:e.props,o})}const ue={flex:"","items-center":"","justify-center":""},me={key:1,flex:"","items-center":"","justify-center":""},he=C({name:"HeadBreadcrumb"}),be=C({...he,setup(r){const t=q(),e=W(),{t:o,locale:s}=I(),a=T([]);R(s,(c,l)=>{a.value=E(e.matched,o)},{immediate:!0,deep:!0}),R(()=>e.fullPath,()=>{a.value=E(e.matched,o)});const i=c=>{t.push({name:c})};return(c,l)=>{const d=ae,p=de,v=se;return m(),f(v,null,{default:k(()=>[(m(!0),B(re,null,ee(a.value,n=>(m(),f(p,{key:n.name},{default:k(()=>{var g;return[n.children.length?(m(),f(d,{key:0,options:n.children,onSelect:i},{default:k(()=>{var x;return[ne("div",ue,[n!=null&&n.icon?(m(),f(L(n==null?void 0:n.icon),{key:0})):w("",!0),z(" "+P(c.$t((x=n.meta)==null?void 0:x.breadcrumb)),1)])]}),_:2},1032,["options"])):(m(),B("div",me,[n!=null&&n.icon?(m(),f(L(n==null?void 0:n.icon),{key:0})):w("",!0),z(" "+P(c.$t((g=n.meta)==null?void 0:g.breadcrumb)),1)]))]}),_:2},1024))),128))]),_:1})}}});export{be as _};
