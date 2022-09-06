import{m as a,n as f,F as q,d as O,p as j,r as T,q as F,G as M,aj as N,c as p,s as W,t as c,ac as A,Q as s,P as C,J as K,i as G,ak as E,V as Y,W as $}from"./main-720f94e2.js";import{C as J}from"./ChevronRight-6afc6c6e.js";import{p as V,l as Q}from"./interface-f992f6c6.js";import{l as U}from"./light-e3a2d053.js";import{u as Z}from"./use-merged-state-bff5881d.js";const ee=a("layout",`
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
 `),f("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),oe={embedded:Boolean,position:V,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},D=q("n-layout");function te(e){return O({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},j.props),oe),setup(o){const l=T(null),b=T(null),{mergedClsPrefixRef:m,inlineThemeDisabled:y}=F(o),z=j("Layout","-layout",ee,U,o,m);function R(i,d){if(o.nativeScrollbar){const{value:u}=l;u&&(d===void 0?u.scrollTo(i):u.scrollTo(i,d))}else{const{value:u}=b;u&&u.scrollTo(i,d)}}M(D,o);let v=0,w=0;const I=i=>{var d;const u=i.target;v=u.scrollLeft,w=u.scrollTop,(d=o.onScroll)===null||d===void 0||d.call(o,i)};N(()=>{if(o.nativeScrollbar){const i=l.value;i&&(i.scrollTop=w,i.scrollLeft=v)}});const _={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},P={scrollTo:R},k=p(()=>{const{common:{cubicBezierEaseInOut:i},self:d}=z.value;return{"--n-bezier":i,"--n-color":o.embedded?d.colorEmbedded:d.color,"--n-text-color":d.textColor}}),h=y?W("layout",p(()=>o.embedded?"e":""),k,o):void 0;return Object.assign({mergedClsPrefix:m,scrollableElRef:l,scrollbarInstRef:b,hasSiderStyle:_,mergedTheme:z,handleNativeElScroll:I,cssVars:y?void 0:k,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender},P)},render(){var o;const{mergedClsPrefix:l,hasSider:b}=this;(o=this.onRender)===null||o===void 0||o.call(this);const m=b?this.hasSiderStyle:void 0,y=[this.themeClass,e&&`${l}-layout-content`,`${l}-layout`,`${l}-layout--${this.position}-positioned`];return c("div",{class:y,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:`${l}-layout-scroll-container`,style:[this.contentStyle,m],onScroll:this.handleNativeElScroll},this.$slots):c(A,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,m]}),this.$slots))}})}const be=te(!1),re=a("layout-sider",`
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
`,[f("bordered",[s("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),s("left-placement",[f("bordered",[s("border",`
 right: 0;
 `)])]),f("right-placement",`
 justify-content: flex-start;
 `,[f("bordered",[s("border",`
 left: 0;
 `)]),f("collapsed",[a("layout-toggle-button",[a("base-icon",`
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",[C("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),a("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[a("base-icon",`
 transform: rotate(0);
 `)]),a("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[C("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),f("collapsed",[a("layout-toggle-bar",[C("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),a("layout-toggle-button",[a("base-icon",`
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
 `),C("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),C("&:hover",[s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),s("border",`
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
 `),f("show-content",[a("layout-sider-scroll-container",{opacity:1})]),f("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),le=O({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(K,{clsPrefix:e},{default:()=>c(J,null)}))}}),ne=O({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),se={position:V,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},ge=O({name:"LayoutSider",props:Object.assign(Object.assign({},j.props),se),setup(e){const o=G(D),l=T(null),b=T(null),m=p(()=>E(v.value?e.collapsedWidth:e.width)),y=p(()=>e.collapseMode!=="transform"?{}:{minWidth:E(e.width)}),z=p(()=>o?o.siderPlacement:"left"),R=T(e.defaultCollapsed),v=Z(Y(e,"collapsed"),R);function w(n,t){if(e.nativeScrollbar){const{value:r}=l;r&&(t===void 0?r.scrollTo(n):r.scrollTo(n,t))}else{const{value:r}=b;r&&r.scrollTo(n,t)}}function I(){const{"onUpdate:collapsed":n,onUpdateCollapsed:t,onExpand:r,onCollapse:B}=e,{value:S}=v;t&&$(t,!S),n&&$(n,!S),R.value=!S,S?r&&$(r):B&&$(B)}let _=0,P=0;const k=n=>{var t;const r=n.target;_=r.scrollLeft,P=r.scrollTop,(t=e.onScroll)===null||t===void 0||t.call(e,n)};N(()=>{if(e.nativeScrollbar){const n=l.value;n&&(n.scrollTop=P,n.scrollLeft=_)}}),M(Q,{collapsedRef:v,collapseModeRef:Y(e,"collapseMode")});const{mergedClsPrefixRef:h,inlineThemeDisabled:i}=F(e),d=j("Layout","-layout-sider",re,U,e,h);function u(n){var t,r;n.propertyName==="max-width"&&(v.value?(t=e.onAfterLeave)===null||t===void 0||t.call(e):(r=e.onAfterEnter)===null||r===void 0||r.call(e))}const H={scrollTo:w},L=p(()=>{const{common:{cubicBezierEaseInOut:n},self:t}=d.value,{siderToggleButtonColor:r,siderToggleButtonBorder:B,siderToggleBarColor:S,siderToggleBarColorHover:X}=t,g={"--n-bezier":n,"--n-toggle-button-color":r,"--n-toggle-button-border":B,"--n-toggle-bar-color":S,"--n-toggle-bar-color-hover":X};return e.inverted?(g["--n-color"]=t.siderColorInverted,g["--n-text-color"]=t.textColorInverted,g["--n-border-color"]=t.siderBorderColorInverted,g["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColorInverted,g.__invertScrollbar=t.__invertScrollbar):(g["--n-color"]=t.siderColor,g["--n-text-color"]=t.textColor,g["--n-border-color"]=t.siderBorderColor,g["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColor),g}),x=i?W("layout-sider",p(()=>e.inverted?"a":"b"),L,e):void 0;return Object.assign({scrollableElRef:l,scrollbarInstRef:b,mergedClsPrefix:h,mergedTheme:d,styleMaxWidth:m,mergedCollapsed:v,scrollContainerStyle:y,siderPlacement:z,handleNativeElScroll:k,handleTransitionend:u,handleTriggerClick:I,inlineThemeDisabled:i,cssVars:L,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender},H)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:l,showTrigger:b}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,l&&`${o}-layout-sider--collapsed`,(!l||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:E(this.width)}]},this.nativeScrollbar?c("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(A,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),b?b==="bar"?c(ne,{clsPrefix:o,style:l?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(le,{clsPrefix:o,style:l?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${o}-layout-sider__border`}):null)}});export{ge as _,be as a};
