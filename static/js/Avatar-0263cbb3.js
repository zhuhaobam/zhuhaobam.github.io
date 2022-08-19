import{t as G}from"./Tag-4fd7127d.js";import{a0 as K,Z as F,bt as N,a6 as H,bu as V,a5 as I,d as q,a1 as D,r as y,a8 as W,G as x,O as k,bv as U,w as X,ap as Y,a4 as Z,aq as J,ay as Q,al as ee,aG as te,H as R,ar as re,bw as oe}from"./main-993cc2a8.js";const ne=!1,se=(e={})=>{var a;const{root:i=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof i=="string"?document.querySelector(i):i)||document.documentElement})}},M=new WeakMap,_=new WeakMap,C=new WeakMap,ae=(e,a,i)=>{if(!e)return()=>{};const n=se(a),{root:l}=n.options;let s;const d=M.get(l);d?s=d:(s=new Map,M.set(l,s));let f,o;s.has(n.hash)?(o=s.get(n.hash),o[1].has(e)||(f=o[0],o[1].add(e),f.observe(e))):(f=new IntersectionObserver(h=>{h.forEach(c=>{if(c.isIntersecting){const g=_.get(c.target),O=C.get(c.target);g&&g(),O&&(O.value=!0)}})},n.options),f.observe(e),o=[f,new Set([e])],s.set(n.hash,o));let v=!1;const m=()=>{v||(_.delete(e),C.delete(e),v=!0,o[1].has(e)&&(o[0].unobserve(e),o[1].delete(e)),o[1].size<=0&&s.delete(n.hash),s.size||M.delete(l))};return _.set(e,m),C.set(e,i),m},ie=K("n-avatar-group"),le=F("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[N(H("&","--n-merged-color: var(--n-color-modal);")),V(H("&","--n-merged-color: var(--n-color-popover);")),H("img",`
 width: 100%;
 height: 100%;
 `),I("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),F("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),I("text","line-height: 1.25")]),de=Object.assign(Object.assign({},k.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String}),fe=q({name:"Avatar",props:de,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:i}=D(e),n=y(!1);let l=null;const s=y(null),d=y(null),f=()=>{const{value:t}=s;if(t&&(l===null||l!==t.innerHTML)){l=t.innerHTML;const{value:r}=d;if(r){const{offsetWidth:z,offsetHeight:b}=r,{offsetWidth:u,offsetHeight:L}=t,S=.9,j=Math.min(z/u*S,b/L*S,1);t.style.transform=`translateX(-50%) translateY(-50%) scale(${j})`}}},o=W(ie,null),v=x(()=>{const{size:t}=e;if(t)return t;const{size:r}=o||{};return r||"medium"}),m=k("Avatar","-avatar",le,U,e,a),h=W(G,null),c=x(()=>{if(o)return!0;const{round:t,circle:r}=e;return t!==void 0||r!==void 0?t||r:h?h.roundRef.value:!1}),g=x(()=>o?!0:e.bordered||!1),O=t=>{if(!E.value)return;n.value=!0;const{onError:r}=e;r&&r(t)};X(()=>e.src,()=>n.value=!1);const T=x(()=>{const t=v.value,r=c.value,z=g.value,{color:b}=e,{self:{borderRadius:u,fontSize:L,color:S,border:j,colorModal:A,colorPopover:B},common:{cubicBezierEaseInOut:P}}=m.value;let w;return typeof t=="number"?w=`${t}px`:w=m.value.self[Y("height",t)],{"--n-font-size":L,"--n-border":z?j:"none","--n-border-radius":r?"50%":u,"--n-color":b||S,"--n-color-modal":b||A,"--n-color-popover":b||B,"--n-bezier":P,"--n-merged-size":`var(--n-avatar-size-override, ${w})`}}),p=i?Z("avatar",x(()=>{const t=v.value,r=c.value,z=g.value,{color:b}=e;let u="";return t&&(typeof t=="number"?u+=`a${t}`:u+=t[0]),r&&(u+="b"),z&&(u+="c"),b&&(u+=J(b)),u}),T,e):void 0,E=y(!e.lazy);Q(()=>{if(ne)return;let t;const r=ee(()=>{t==null||t(),t=void 0,e.lazy&&(t=ae(d.value,e.intersectionObserverOptions,E))});te(()=>{r(),t==null||t()})});const $=y(!e.lazy);return{textRef:s,selfRef:d,mergedRoundRef:c,mergedClsPrefix:a,fitTextTransform:f,cssVars:i?void 0:T,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,hasLoadError:n,handleError:O,shouldStartLoading:E,loaded:$,mergedOnLoad:t=>{const{onLoad:r}=e;r==null||r(t),$.value=!0}}},render(){var e,a;const{$slots:i,src:n,mergedClsPrefix:l,lazy:s,onRender:d,mergedOnLoad:f,shouldStartLoading:o,loaded:v,hasLoadError:m}=this;d==null||d();let h;const c=!v&&!m&&((a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e));return this.hasLoadError?h=R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):h=re(i.default,g=>{if(g)return R(oe,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${l}-avatar__text`},g)});if(n)return R("img",{loading:"eager",src:o||v?n:void 0,onLoad:f,"data-image-src":n,onError:this.handleError,style:[{objectFit:this.objectFit},c?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]})}),R("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},h,s&&c)}});export{fe as _};
