import{a1 as m,a9 as u,a2 as N,a8 as f,d as C,a4 as O,O as T,aQ as F,a5 as K,ad as A,G as R,a7 as U,I as _,a3 as G,r as E,H as J,aR as Q,aS as q,ab as X,aT as Y,J as V,af as Z,K as W,E as I,l as ee,w as y,o as h,c as b,e as k,k as B,S as re,R as ne,f as ae,M as w,i as z,U as L,t as S}from"./main-54bc6f8b.js";import{_ as oe}from"./Dropdown-7995447c.js";const te=m("breadcrumb",`
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
 `),u("&:not(:last-child)",[N("clickable",[f("link",`
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
 `)])])]),$=G("n-breadcrumb"),se=Object.assign(Object.assign({},T.props),{separator:{type:String,default:"/"}}),ce=C({name:"Breadcrumb",props:se,setup(r){const{mergedClsPrefixRef:t,inlineThemeDisabled:e}=O(r),n=T("Breadcrumb","-breadcrumb",te,F,r,t);K($,{separatorRef:A(r,"separator"),mergedClsPrefixRef:t});const s=R(()=>{const{common:{cubicBezierEaseInOut:i},self:{separatorColor:c,itemTextColor:l,itemTextColorHover:d,itemTextColorPressed:p,itemTextColorActive:v,fontSize:o,fontWeightActive:g,itemBorderRadius:x,itemColorHover:H,itemColorPressed:M,itemLineHeight:D}}=n.value;return{"--n-font-size":o,"--n-bezier":i,"--n-item-text-color":l,"--n-item-text-color-hover":d,"--n-item-text-color-pressed":p,"--n-item-text-color-active":v,"--n-separator-color":c,"--n-item-color-hover":H,"--n-item-color-pressed":M,"--n-item-border-radius":x,"--n-font-weight-active":g,"--n-item-line-height":D}}),a=e?U("breadcrumb",void 0,s,r):void 0;return{mergedClsPrefix:t,cssVars:e?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),_("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},_("ul",null,this.$slots))}}),ie=q?window:null,le=(r=ie)=>{const t=()=>{const{hash:s,host:a,hostname:i,href:c,origin:l,pathname:d,port:p,protocol:v,search:o}=(r==null?void 0:r.location)||{};return{hash:s,host:a,hostname:i,href:c,origin:l,pathname:d,port:p,protocol:v,search:o}},e=()=>{n.value=t()},n=E(t());return J(()=>{r&&(r.addEventListener("popstate",e),r.addEventListener("hashchange",e))}),Q(()=>{r&&(r.removeEventListener("popstate",e),r.removeEventListener("hashchange",e))}),n},de={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},ue=C({name:"BreadcrumbItem",props:de,setup(r,{slots:t}){const e=X($,null);if(!e)return()=>null;const{separatorRef:n,mergedClsPrefixRef:s}=e,a=le(),i=R(()=>r.href?"a":"span"),c=R(()=>a.value.href===r.href?"location":null);return()=>{const{value:l}=s;return _("li",{class:[`${l}-breadcrumb-item`,r.clickable&&`${l}-breadcrumb-item--clickable`]},_(i.value,{class:`${l}-breadcrumb-item__link`,"aria-current":c.value,href:r.href,onClick:r.onClick},t),_("span",{class:`${l}-breadcrumb-item__separator`,"aria-hidden":"true"},Y(t.separator,()=>{var d;return[(d=r.separator)!==null&&d!==void 0?d:n.value]})))}}});function P(r,t){return r.filter(e=>e.name!==void 0).map(e=>{var s,a;const n={...e,key:e.name,props:e.props?{default:!0}:e.props};return(s=e.meta)!=null&&s.icon&&(n.icon=V(e.meta.icon)),(a=e.children)!=null&&a.length&&(n.children=j(e.children,t)),n})}function j(r,t){return r.filter(e=>e.name!==void 0).filter(e=>{var i,c,l;const n=Z(e);return(((l=(((c=(i=n.children)==null?void 0:i.length)!=null?c:0)>0?n.children[0]:n).meta)==null?void 0:l.hidden)||!1)!==!0}).map(e=>{var s,a,i;const n={...e,key:e.name,label:t((s=e.meta)==null?void 0:s.breadcrumb)};return(a=e.meta)!=null&&a.icon&&(n.icon=V(e.meta.icon)),(i=e.children)!=null&&i.length&&(n.children=j(e.children,t)),n.props=e.props?{default:!0}:e.props,n})}const he={flex:"","items-center":"","justify-center":""},me={key:1,flex:"","items-center":"","justify-center":""},pe=C({name:"HeadBreadcrumb"}),be=C({...pe,setup(r){const t=W(),e=I(),{t:n,locale:s}=ee(),a=E([]);y(s,(c,l)=>{a.value=P(e.matched,n)},{immediate:!0,deep:!0}),y(()=>e.fullPath,()=>{a.value=P(e.matched,n)});const i=c=>{t.push({name:c})};return(c,l)=>{const d=oe,p=ue,v=ce;return h(),b(v,null,{default:k(()=>[(h(!0),B(ne,null,re(a.value,o=>(h(),b(p,{key:o.name},{default:k(()=>{var g;return[o.children.length?(h(),b(d,{key:0,options:o.children,onSelect:i},{default:k(()=>{var x;return[ae("div",he,[o!=null&&o.icon?(h(),b(w(o==null?void 0:o.icon),{key:0})):z("",!0),L(" "+S(c.$t((x=o.meta)==null?void 0:x.breadcrumb)),1)])]}),_:2},1032,["options"])):(h(),B("div",me,[o!=null&&o.icon?(h(),b(w(o==null?void 0:o.icon),{key:0})):z("",!0),L(" "+S(c.$t((g=o.meta)==null?void 0:g.breadcrumb)),1)]))]}),_:2},1024))),128))]),_:1})}}});export{be as _};
