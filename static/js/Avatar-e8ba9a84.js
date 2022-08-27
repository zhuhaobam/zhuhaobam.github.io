import{t as G}from"./Tag-00a252c7.js";import{a3 as K,a1 as $,bB as N,a9 as C,bC as V,a8 as B,d as D,a4 as q,r as y,ab as F,G as x,O as W,bD as U,w as X,as as Y,a7 as J,at as Q,H as Z,ao as ee,az as te,I as R,au as re,bE as oe}from"./main-877f46c1.js";const ne=!1,se=(e={})=>{var a;const{root:i=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof i=="string"?document.querySelector(i):i)||document.documentElement})}},H=new WeakMap,M=new WeakMap,_=new WeakMap,ae=(e,a,i)=>{if(!e)return()=>{};const n=se(a),{root:l}=n.options;let s;const d=H.get(l);d?s=d:(s=new Map,H.set(l,s));let f,o;s.has(n.hash)?(o=s.get(n.hash),o[1].has(e)||(f=o[0],o[1].add(e),f.observe(e))):(f=new IntersectionObserver(h=>{h.forEach(c=>{if(c.isIntersecting){const b=M.get(c.target),O=_.get(c.target);b&&b(),O&&(O.value=!0)}})},n.options),f.observe(e),o=[f,new Set([e])],s.set(n.hash,o));let v=!1;const m=()=>{v||(M.delete(e),_.delete(e),v=!0,o[1].has(e)&&(o[0].unobserve(e),o[1].delete(e)),o[1].size<=0&&s.delete(n.hash),s.size||H.delete(l))};return M.set(e,m),_.set(e,i),m},ie=K("n-avatar-group"),le=$("avatar",`
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
`,[N(C("&","--n-merged-color: var(--n-color-modal);")),V(C("&","--n-merged-color: var(--n-color-popover);")),C("img",`
 width: 100%;
 height: 100%;
 `),B("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),$("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),B("text","line-height: 1.25")]),de=Object.assign(Object.assign({},W.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String}),fe=D({name:"Avatar",props:de,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:i}=q(e),n=y(!1);let l=null;const s=y(null),d=y(null),f=()=>{const{value:t}=s;if(t&&(l===null||l!==t.innerHTML)){l=t.innerHTML;const{value:r}=d;if(r){const{offsetWidth:z,offsetHeight:g}=r,{offsetWidth:u,offsetHeight:L}=t,S=.9,j=Math.min(z/u*S,g/L*S,1);t.style.transform=`translateX(-50%) translateY(-50%) scale(${j})`}}},o=F(ie,null),v=x(()=>{const{size:t}=e;if(t)return t;const{size:r}=o||{};return r||"medium"}),m=W("Avatar","-avatar",le,U,e,a),h=F(G,null),c=x(()=>{if(o)return!0;const{round:t,circle:r}=e;return t!==void 0||r!==void 0?t||r:h?h.roundRef.value:!1}),b=x(()=>o?!0:e.bordered||!1),O=t=>{if(!E.value)return;n.value=!0;const{onError:r}=e;r&&r(t)};X(()=>e.src,()=>n.value=!1);const T=x(()=>{const t=v.value,r=c.value,z=b.value,{color:g}=e,{self:{borderRadius:u,fontSize:L,color:S,border:j,colorModal:k,colorPopover:A},common:{cubicBezierEaseInOut:P}}=m.value;let w;return typeof t=="number"?w=`${t}px`:w=m.value.self[Y("height",t)],{"--n-font-size":L,"--n-border":z?j:"none","--n-border-radius":r?"50%":u,"--n-color":g||S,"--n-color-modal":g||k,"--n-color-popover":g||A,"--n-bezier":P,"--n-merged-size":`var(--n-avatar-size-override, ${w})`}}),p=i?J("avatar",x(()=>{const t=v.value,r=c.value,z=b.value,{color:g}=e;let u="";return t&&(typeof t=="number"?u+=`a${t}`:u+=t[0]),r&&(u+="b"),z&&(u+="c"),g&&(u+=Q(g)),u}),T,e):void 0,E=y(!e.lazy);Z(()=>{if(ne)return;let t;const r=ee(()=>{t==null||t(),t=void 0,e.lazy&&(t=ae(d.value,e.intersectionObserverOptions,E))});te(()=>{r(),t==null||t()})});const I=y(!e.lazy);return{textRef:s,selfRef:d,mergedRoundRef:c,mergedClsPrefix:a,fitTextTransform:f,cssVars:i?void 0:T,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,hasLoadError:n,handleError:O,shouldStartLoading:E,loaded:I,mergedOnLoad:t=>{const{onLoad:r}=e;r==null||r(t),I.value=!0}}},render(){var e,a;const{$slots:i,src:n,mergedClsPrefix:l,lazy:s,onRender:d,mergedOnLoad:f,shouldStartLoading:o,loaded:v,hasLoadError:m}=this;d==null||d();let h;const c=!v&&!m&&((a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e));return this.hasLoadError?h=R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):h=re(i.default,b=>{if(b)return R(oe,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${l}-avatar__text`},b)});if(n)return R("img",{loading:"eager",src:o||v?n:void 0,onLoad:f,"data-image-src":n,onError:this.handleError,style:[{objectFit:this.objectFit},c?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]})}),R("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},h,s&&c)}});export{fe as _};
