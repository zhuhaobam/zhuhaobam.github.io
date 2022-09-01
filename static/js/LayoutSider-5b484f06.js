import{ak as q,al as G,am as J,an as F,c as a,a as y,G as Q,d as j,u as $,r as R,b as M,I as N,ao as A,e as x,f as W,h as c,ac as H,S as s,R as z,L as Z,H as ee,ap as L,X as Y,Y as P}from"./main-09b9f8d0.js";import{C as oe}from"./ChevronRight-4de706f4.js";import{p as V,l as te}from"./interface-aa6ae1c0.js";import{u as re}from"./use-merged-state-531343b5.js";const le=e=>{const{baseColor:o,textColor2:r,bodyColor:d,cardColor:f,dividerColor:b,actionColor:C,scrollbarColor:S,scrollbarColorHover:v,invertedColor:g}=e;return{textColor:r,textColorInverted:"#FFF",color:d,colorEmbedded:C,headerColor:f,headerColorInverted:g,footerColor:C,footerColorInverted:g,headerBorderColor:b,headerBorderColorInverted:g,footerBorderColor:b,footerBorderColorInverted:g,siderBorderColor:b,siderBorderColorInverted:g,siderColor:f,siderColorInverted:g,siderToggleButtonBorder:`1px solid ${b}`,siderToggleButtonColor:o,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:F(d,S),siderToggleBarColorHover:F(d,v),__invertScrollbar:"true"}},ne=q({name:"Layout",common:G,peers:{Scrollbar:J},self:le}),U=ne,se=a("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[a("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ae={embedded:Boolean,position:V,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},X=Q("n-layout");function ie(e){return j({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},$.props),ae),setup(o){const r=R(null),d=R(null),{mergedClsPrefixRef:f,inlineThemeDisabled:b}=M(o),C=$("Layout","-layout",se,U,o,f);function S(i,u){if(o.nativeScrollbar){const{value:h}=r;h&&(u===void 0?h.scrollTo(i):h.scrollTo(i,u))}else{const{value:h}=d;h&&h.scrollTo(i,u)}}N(X,o);let v=0,g=0;const O=i=>{var u;const h=i.target;v=h.scrollLeft,g=h.scrollTop,(u=o.onScroll)===null||u===void 0||u.call(o,i)};A(()=>{if(o.nativeScrollbar){const i=r.value;i&&(i.scrollTop=g,i.scrollLeft=v)}});const I={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},_={scrollTo:S},w=x(()=>{const{common:{cubicBezierEaseInOut:i},self:u}=C.value;return{"--n-bezier":i,"--n-color":o.embedded?u.colorEmbedded:u.color,"--n-text-color":u.textColor}}),p=b?W("layout",x(()=>o.embedded?"e":""),w,o):void 0;return Object.assign({mergedClsPrefix:f,scrollableElRef:r,scrollbarInstRef:d,hasSiderStyle:I,mergedTheme:C,handleNativeElScroll:O,cssVars:b?void 0:w,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender},_)},render(){var o;const{mergedClsPrefix:r,hasSider:d}=this;(o=this.onRender)===null||o===void 0||o.call(this);const f=d?this.hasSiderStyle:void 0,b=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return c("div",{class:b,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:`${r}-layout-scroll-container`,style:[this.contentStyle,f],onScroll:this.handleNativeElScroll},this.$slots):c(H,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,f]}),this.$slots))}})}const me=ie(!1),ce=a("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[y("bordered",[s("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),s("left-placement",[y("bordered",[s("border",`
 right: 0;
 `)])]),y("right-placement",`
 justify-content: flex-start;
 `,[y("bordered",[s("border",`
 left: 0;
 `)]),y("collapsed",[a("layout-toggle-button",[a("base-icon",`
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",[z("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),a("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[a("base-icon",`
 transform: rotate(0);
 `)]),a("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[z("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),y("collapsed",[a("layout-toggle-bar",[z("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),a("layout-toggle-button",[a("base-icon",`
 transform: rotate(0);
 `)])]),a("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[a("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[s("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),s("bottom",`
 position: absolute;
 top: 34px;
 `),z("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),z("&:hover",[s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),s("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),a("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),y("show-content",[a("layout-sider-scroll-container",{opacity:1})]),y("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),de=j({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(Z,{clsPrefix:e},{default:()=>c(oe,null)}))}}),ue=j({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),be={position:V,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},pe=j({name:"LayoutSider",props:Object.assign(Object.assign({},$.props),be),setup(e){const o=ee(X),r=R(null),d=R(null),f=x(()=>L(v.value?e.collapsedWidth:e.width)),b=x(()=>e.collapseMode!=="transform"?{}:{minWidth:L(e.width)}),C=x(()=>o?o.siderPlacement:"left"),S=R(e.defaultCollapsed),v=re(Y(e,"collapsed"),S);function g(n,t){if(e.nativeScrollbar){const{value:l}=r;l&&(t===void 0?l.scrollTo(n):l.scrollTo(n,t))}else{const{value:l}=d;l&&l.scrollTo(n,t)}}function O(){const{"onUpdate:collapsed":n,onUpdateCollapsed:t,onExpand:l,onCollapse:k}=e,{value:B}=v;t&&P(t,!B),n&&P(n,!B),S.value=!B,B?l&&P(l):k&&P(k)}let I=0,_=0;const w=n=>{var t;const l=n.target;I=l.scrollLeft,_=l.scrollTop,(t=e.onScroll)===null||t===void 0||t.call(e,n)};A(()=>{if(e.nativeScrollbar){const n=r.value;n&&(n.scrollTop=_,n.scrollLeft=I)}}),N(te,{collapsedRef:v,collapseModeRef:Y(e,"collapseMode")});const{mergedClsPrefixRef:p,inlineThemeDisabled:i}=M(e),u=$("Layout","-layout-sider",ce,U,e,p);function h(n){var t,l;n.propertyName==="max-width"&&(v.value?(t=e.onAfterLeave)===null||t===void 0||t.call(e):(l=e.onAfterEnter)===null||l===void 0||l.call(e))}const D={scrollTo:g},E=x(()=>{const{common:{cubicBezierEaseInOut:n},self:t}=u.value,{siderToggleButtonColor:l,siderToggleButtonBorder:k,siderToggleBarColor:B,siderToggleBarColorHover:K}=t,m={"--n-bezier":n,"--n-toggle-button-color":l,"--n-toggle-button-border":k,"--n-toggle-bar-color":B,"--n-toggle-bar-color-hover":K};return e.inverted?(m["--n-color"]=t.siderColorInverted,m["--n-text-color"]=t.textColorInverted,m["--n-border-color"]=t.siderBorderColorInverted,m["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColorInverted,m.__invertScrollbar=t.__invertScrollbar):(m["--n-color"]=t.siderColor,m["--n-text-color"]=t.textColor,m["--n-border-color"]=t.siderBorderColor,m["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColor),m}),T=i?W("layout-sider",x(()=>e.inverted?"a":"b"),E,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:d,mergedClsPrefix:p,mergedTheme:u,styleMaxWidth:f,mergedCollapsed:v,scrollContainerStyle:b,siderPlacement:C,handleNativeElScroll:w,handleTransitionend:h,handleTriggerClick:O,inlineThemeDisabled:i,cssVars:E,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender},D)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:r,showTrigger:d}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,r&&`${o}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:L(this.width)}]},this.nativeScrollbar?c("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(H,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),d?d==="bar"?c(ue,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(de,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${o}-layout-sider__border`}):null)}});export{pe as _,me as a,U as l};
