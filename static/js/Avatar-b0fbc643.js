import{t as V}from"./Tag-c1e2a088.js";import{U as K,S as W,bv as N,a1 as H,bw as G,a0 as $,d as U,W as q,r as y,a3 as F,H as x,V as k,bx as D,w as J,aJ as X,Z as Y,by as Z,am as Q,ag as ee,aw as te,I as R,aR as re,bz as oe}from"./main-1d570fc2.js";const ne=!1,se=(e={})=>{var a;const{root:i=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof i=="string"?document.querySelector(i):i)||document.documentElement})}},M=new WeakMap,_=new WeakMap,C=new WeakMap,ae=(e,a,i)=>{if(!e)return()=>{};const n=se(a),{root:l}=n.options;let s;const d=M.get(l);d?s=d:(s=new Map,M.set(l,s));let f,o;s.has(n.hash)?(o=s.get(n.hash),o[1].has(e)||(f=o[0],o[1].add(e),f.observe(e))):(f=new IntersectionObserver(h=>{h.forEach(c=>{if(c.isIntersecting){const g=_.get(c.target),S=C.get(c.target);g&&g(),S&&(S.value=!0)}})},n.options),f.observe(e),o=[f,new Set([e])],s.set(n.hash,o));let v=!1;const m=()=>{v||(_.delete(e),C.delete(e),v=!0,o[1].has(e)&&(o[0].unobserve(e),o[1].delete(e)),o[1].size<=0&&s.delete(n.hash),s.size||M.delete(l))};return _.set(e,m),C.set(e,i),m},ie=K("n-avatar-group"),le=W("avatar",`
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
`,[N(H("&","--n-merged-color: var(--n-color-modal);")),G(H("&","--n-merged-color: var(--n-color-popover);")),H("img",`
 width: 100%;
 height: 100%;
 `),$("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),W("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),$("text","line-height: 1.25")]),de=Object.assign(Object.assign({},k.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String}),fe=U({name:"Avatar",props:de,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:i}=q(e),n=y(!1);let l=null;const s=y(null),d=y(null),f=()=>{const{value:t}=s;if(t&&(l===null||l!==t.innerHTML)){l=t.innerHTML;const{value:r}=d;if(r){const{offsetWidth:z,offsetHeight:b}=r,{offsetWidth:u,offsetHeight:E}=t,O=.9,L=Math.min(z/u*O,b/E*O,1);t.style.transform=`translateX(-50%) translateY(-50%) scale(${L})`}}},o=F(ie,null),v=x(()=>{const{size:t}=e;if(t)return t;const{size:r}=o||{};return r||"medium"}),m=k("Avatar","-avatar",le,D,e,a),h=F(V,null),c=x(()=>{if(o)return!0;const{round:t,circle:r}=e;return t!==void 0||r!==void 0?t||r:h?h.roundRef.value:!1}),g=x(()=>o?!0:e.bordered||!1),S=t=>{if(!w.value)return;n.value=!0;const{onError:r}=e;r&&r(t)};J(()=>e.src,()=>n.value=!1);const T=x(()=>{const t=v.value,r=c.value,z=g.value,{color:b}=e,{self:{borderRadius:u,fontSize:E,color:O,border:L,colorModal:A,colorPopover:B},common:{cubicBezierEaseInOut:P}}=m.value;let j;return typeof t=="number"?j=`${t}px`:j=m.value.self[X("height",t)],{"--n-font-size":E,"--n-border":z?L:"none","--n-border-radius":r?"50%":u,"--n-color":b||O,"--n-color-modal":b||A,"--n-color-popover":b||B,"--n-bezier":P,"--n-merged-size":`var(--n-avatar-size-override, ${j})`}}),p=i?Y("avatar",x(()=>{const t=v.value,r=c.value,z=g.value,{color:b}=e;let u="";return t&&(typeof t=="number"?u+=`a${t}`:u+=t[0]),r&&(u+="b"),z&&(u+="c"),b&&(u+=Z(b)),u}),T,e):void 0,w=y(!e.lazy);Q(()=>{if(ne)return;let t;const r=ee(()=>{t==null||t(),t=void 0,e.lazy&&(t=ae(d.value,e.intersectionObserverOptions,w))});te(()=>{r(),t==null||t()})});const I=y(!e.lazy);return{textRef:s,selfRef:d,mergedRoundRef:c,mergedClsPrefix:a,fitTextTransform:f,cssVars:i?void 0:T,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,hasLoadError:n,handleError:S,shouldStartLoading:w,loaded:I,mergedOnLoad:t=>{const{onLoad:r}=e;r==null||r(t),I.value=!0}}},render(){var e,a;const{$slots:i,src:n,mergedClsPrefix:l,lazy:s,onRender:d,mergedOnLoad:f,shouldStartLoading:o,loaded:v,hasLoadError:m}=this;d==null||d();let h;const c=!v&&!m&&((a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e));return this.hasLoadError?h=R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):h=re(i.default,g=>{if(g)return R(oe,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${l}-avatar__text`},g)});if(n)return R("img",{loading:"eager",src:o||v?n:void 0,onLoad:f,"data-image-src":n,onError:this.handleError,style:[{objectFit:this.objectFit},c?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]})}),R("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},h,s&&c)}});export{fe as _};
