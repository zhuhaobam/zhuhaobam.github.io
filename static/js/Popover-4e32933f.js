import{aF as ne,aD as re,b0 as z,b1 as Ce,b2 as ue,b3 as Ge,b4 as ge,b5 as Ke,b6 as pe,b7 as we,b8 as be,b9 as me,ba as J,bb as Xe,bc as ye,bd as ke,be as xe,bf as qe,bg as Je,bh as Ye,bi as Ze,bj as Qe,bk as Me,bl as Ve,P as D,m as B,R as te,Q as oe,n as Q,bm as je,d as Be,q as en,p as fe,bn as nn,r as F,i as rn,U as tn,c as X,bo as Se,bp as on,ak as ae,s as an,b as sn,w as ln,V as Y,bq as _e,G as Z,aG as dn,aK as un,aJ as fn,t as S,a8 as cn,br as Ae,bs as hn,ar as vn,bt as Ie,ay as ie,I as gn,aI as pn,ap as wn,K as $e,bu as Te,bv as bn,bw as mn,O as yn,aP as Sn,W as k}from"./main-720f94e2.js";import{u as V,b as _n,a as An,V as $n}from"./Follower-225eb391.js";import{u as Tn}from"./use-merged-state-bff5881d.js";import{u as On}from"./use-compitable-14777455.js";let se;function En(){return se===void 0&&(se=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),se}const U="@@mmoContext",Pn={mounted(e,{value:n}){e[U]={handler:void 0},typeof n=="function"&&(e[U].handler=n,ne("mousemoveoutside",e,n))},updated(e,{value:n}){const r=e[U];typeof n=="function"?r.handler?r.handler!==n&&(re("mousemoveoutside",e,r.handler),r.handler=n,ne("mousemoveoutside",e,n)):(e[U].handler=n,ne("mousemoveoutside",e,n)):r.handler&&(re("mousemoveoutside",e,r.handler),r.handler=void 0)},unmounted(e){const{handler:n}=e[U];n&&re("mousemoveoutside",e,n),e[U].handler=void 0}},Rn=Pn;var Cn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xn=/^\w*$/;function ce(e,n){if(z(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||Ce(e)?!0:xn.test(e)||!Cn.test(e)||n!=null&&e in Object(n)}var Mn="Expected a function";function he(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(Mn);var r=function(){var t=arguments,a=n?n.apply(this,t):t[0],o=r.cache;if(o.has(a))return o.get(a);var s=e.apply(this,t);return r.cache=o.set(a,s)||o,s};return r.cache=new(he.Cache||ue),r}he.Cache=ue;var Bn=500;function In(e){var n=he(e,function(t){return r.size===Bn&&r.clear(),t}),r=n.cache;return n}var Dn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fn=/\\(\\)?/g,zn=In(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Dn,function(r,t,a,o){n.push(a?o.replace(Fn,"$1"):t||r)}),n});const Ln=zn;function De(e,n){return z(e)?e:ce(e,n)?[e]:Ln(Ge(e))}var Nn=1/0;function ee(e){if(typeof e=="string"||Ce(e))return e;var n=e+"";return n=="0"&&1/e==-Nn?"-0":n}function Fe(e,n){n=De(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[ee(n[r++])];return r&&r==t?e:void 0}function Hn(e,n,r){var t=e==null?void 0:Fe(e,n);return t===void 0?r:t}var Un="__lodash_hash_undefined__";function Wn(e){return this.__data__.set(e,Un),this}function Gn(e){return this.__data__.has(e)}function j(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new ue;++n<r;)this.add(e[n])}j.prototype.add=j.prototype.push=Wn;j.prototype.has=Gn;function Kn(e,n){for(var r=-1,t=e==null?0:e.length;++r<t;)if(n(e[r],r,e))return!0;return!1}function Xn(e,n){return e.has(n)}var kn=1,qn=2;function ze(e,n,r,t,a,o){var s=r&kn,i=e.length,l=n.length;if(i!=l&&!(s&&l>i))return!1;var u=o.get(e),f=o.get(n);if(u&&f)return u==n&&f==e;var p=-1,h=!0,m=r&qn?new j:void 0;for(o.set(e,n),o.set(n,e);++p<i;){var y=e[p],c=n[p];if(t)var E=s?t(c,y,p,n,e,o):t(y,c,p,e,n,o);if(E!==void 0){if(E)continue;h=!1;break}if(m){if(!Kn(n,function(A,$){if(!Xn(m,$)&&(y===A||a(y,A,r,t,o)))return m.push($)})){h=!1;break}}else if(!(y===c||a(y,c,r,t,o))){h=!1;break}}return o.delete(e),o.delete(n),h}function Jn(e){var n=-1,r=Array(e.size);return e.forEach(function(t,a){r[++n]=[a,t]}),r}function Yn(e){var n=-1,r=Array(e.size);return e.forEach(function(t){r[++n]=t}),r}var Zn=1,Qn=2,Vn="[object Boolean]",jn="[object Date]",er="[object Error]",nr="[object Map]",rr="[object Number]",tr="[object RegExp]",or="[object Set]",ar="[object String]",ir="[object Symbol]",sr="[object ArrayBuffer]",lr="[object DataView]",Oe=ge?ge.prototype:void 0,le=Oe?Oe.valueOf:void 0;function dr(e,n,r,t,a,o,s){switch(r){case lr:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case sr:return!(e.byteLength!=n.byteLength||!o(new pe(e),new pe(n)));case Vn:case jn:case rr:return Ke(+e,+n);case er:return e.name==n.name&&e.message==n.message;case tr:case ar:return e==n+"";case nr:var i=Jn;case or:var l=t&Zn;if(i||(i=Yn),e.size!=n.size&&!l)return!1;var u=s.get(e);if(u)return u==n;t|=Qn,s.set(e,n);var f=ze(i(e),i(n),t,a,o,s);return s.delete(e),f;case ir:if(le)return le.call(e)==le.call(n)}return!1}var ur=1,fr=Object.prototype,cr=fr.hasOwnProperty;function hr(e,n,r,t,a,o){var s=r&ur,i=we(e),l=i.length,u=we(n),f=u.length;if(l!=f&&!s)return!1;for(var p=l;p--;){var h=i[p];if(!(s?h in n:cr.call(n,h)))return!1}var m=o.get(e),y=o.get(n);if(m&&y)return m==n&&y==e;var c=!0;o.set(e,n),o.set(n,e);for(var E=s;++p<l;){h=i[p];var A=e[h],$=n[h];if(t)var L=s?t($,A,h,n,e,o):t(A,$,h,e,n,o);if(!(L===void 0?A===$||a(A,$,r,t,o):L)){c=!1;break}E||(E=h=="constructor")}if(c&&!E){var C=e.constructor,R=n.constructor;C!=R&&"constructor"in e&&"constructor"in n&&!(typeof C=="function"&&C instanceof C&&typeof R=="function"&&R instanceof R)&&(c=!1)}return o.delete(e),o.delete(n),c}var vr=1,Ee="[object Arguments]",Pe="[object Array]",q="[object Object]",gr=Object.prototype,Re=gr.hasOwnProperty;function pr(e,n,r,t,a,o){var s=z(e),i=z(n),l=s?Pe:be(e),u=i?Pe:be(n);l=l==Ee?q:l,u=u==Ee?q:u;var f=l==q,p=u==q,h=l==u;if(h&&me(e)){if(!me(n))return!1;s=!0,f=!1}if(h&&!f)return o||(o=new J),s||Xe(e)?ze(e,n,r,t,a,o):dr(e,n,l,r,t,a,o);if(!(r&vr)){var m=f&&Re.call(e,"__wrapped__"),y=p&&Re.call(n,"__wrapped__");if(m||y){var c=m?e.value():e,E=y?n.value():n;return o||(o=new J),a(c,E,r,t,o)}}return h?(o||(o=new J),hr(e,n,r,t,a,o)):!1}function ve(e,n,r,t,a){return e===n?!0:e==null||n==null||!ye(e)&&!ye(n)?e!==e&&n!==n:pr(e,n,r,t,ve,a)}var wr=1,br=2;function mr(e,n,r,t){var a=r.length,o=a,s=!t;if(e==null)return!o;for(e=Object(e);a--;){var i=r[a];if(s&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<o;){i=r[a];var l=i[0],u=e[l],f=i[1];if(s&&i[2]){if(u===void 0&&!(l in e))return!1}else{var p=new J;if(t)var h=t(u,f,l,e,n,p);if(!(h===void 0?ve(f,u,wr|br,t,p):h))return!1}}return!0}function Le(e){return e===e&&!ke(e)}function yr(e){for(var n=xe(e),r=n.length;r--;){var t=n[r],a=e[t];n[r]=[t,a,Le(a)]}return n}function Ne(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==void 0||e in Object(r))}}function Sr(e){var n=yr(e);return n.length==1&&n[0][2]?Ne(n[0][0],n[0][1]):function(r){return r===e||mr(r,e,n)}}function _r(e,n){return e!=null&&n in Object(e)}function Ar(e,n,r){n=De(n,e);for(var t=-1,a=n.length,o=!1;++t<a;){var s=ee(n[t]);if(!(o=e!=null&&r(e,s)))break;e=e[s]}return o||++t!=a?o:(a=e==null?0:e.length,!!a&&qe(a)&&Je(s,a)&&(z(e)||Ye(e)))}function $r(e,n){return e!=null&&Ar(e,n,_r)}var Tr=1,Or=2;function Er(e,n){return ce(e)&&Le(n)?Ne(ee(e),n):function(r){var t=Hn(r,e);return t===void 0&&t===n?$r(r,e):ve(n,t,Tr|Or)}}function Pr(e){return function(n){return n==null?void 0:n[e]}}function Rr(e){return function(n){return Fe(n,e)}}function Cr(e){return ce(e)?Pr(ee(e)):Rr(e)}function xr(e){return typeof e=="function"?e:e==null?Ze:typeof e=="object"?z(e)?Er(e[0],e[1]):Sr(e):Cr(e)}function Mr(e,n){return e&&Qe(e,n,xe)}function Br(e,n){return function(r,t){if(r==null)return r;if(!Me(r))return e(r,t);for(var a=r.length,o=n?a:-1,s=Object(r);(n?o--:++o<a)&&t(s[o],o,s)!==!1;);return r}}var Ir=Br(Mr);const Dr=Ir;function Fr(e,n){var r=-1,t=Me(e)?Array(e.length):[];return Dr(e,function(a,o,s){t[++r]=n(a,o,s)}),t}function zr(e,n){var r=z(e)?Ve:Fr;return r(e,xr(n))}const de={top:"bottom",bottom:"top",left:"right",right:"left"},b="var(--n-arrow-height) * 1.414",Lr=D([B("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 `,[D(">",[B("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),te("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[te("scrollable",[te("show-header-or-footer","padding: var(--n-padding);")])]),oe("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),oe("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Q("scrollable, show-header-or-footer",[oe("content",`
 padding: var(--n-padding);
 `)])]),B("popover-shared",`
 transform-origin: inherit;
 `,[B("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[B("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${b});
 height: calc(${b});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),D("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),D("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),D("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),D("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),P("top-start",`
 top: calc(${b} / -2);
 left: calc(${M("top-start")} - var(--v-offset-left));
 `),P("top",`
 top: calc(${b} / -2);
 transform: translateX(calc(${b} / -2)) rotate(45deg);
 left: 50%;
 `),P("top-end",`
 top: calc(${b} / -2);
 right: calc(${M("top-end")} + var(--v-offset-left));
 `),P("bottom-start",`
 bottom: calc(${b} / -2);
 left: calc(${M("bottom-start")} - var(--v-offset-left));
 `),P("bottom",`
 bottom: calc(${b} / -2);
 transform: translateX(calc(${b} / -2)) rotate(45deg);
 left: 50%;
 `),P("bottom-end",`
 bottom: calc(${b} / -2);
 right: calc(${M("bottom-end")} + var(--v-offset-left));
 `),P("left-start",`
 left: calc(${b} / -2);
 top: calc(${M("left-start")} - var(--v-offset-top));
 `),P("left",`
 left: calc(${b} / -2);
 transform: translateY(calc(${b} / -2)) rotate(45deg);
 top: 50%;
 `),P("left-end",`
 left: calc(${b} / -2);
 bottom: calc(${M("left-end")} + var(--v-offset-top));
 `),P("right-start",`
 right: calc(${b} / -2);
 top: calc(${M("right-start")} - var(--v-offset-top));
 `),P("right",`
 right: calc(${b} / -2);
 transform: translateY(calc(${b} / -2)) rotate(45deg);
 top: 50%;
 `),P("right-end",`
 right: calc(${b} / -2);
 bottom: calc(${M("right-end")} + var(--v-offset-top));
 `),...zr({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const r=["right","left"].includes(n),t=r?"width":"height";return e.map(a=>{const o=a.split("-")[1]==="end",i=`calc((${`var(--v-target-${t}, 0px)`} - ${b}) / 2)`,l=M(a);return D(`[v-placement="${a}"] >`,[B("popover-shared",[Q("center-arrow",[B("popover-arrow",`${n}: calc(max(${i}, ${l}) ${o?"+":"-"} var(--v-offset-${r?"left":"top"}));`)])])])})})]);function M(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function P(e,n){const r=e.split("-")[0],t=["top","bottom"].includes(r)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return D(`[v-placement="${e}"] >`,[B("popover-shared",`
 margin-${de[r]}: var(--n-space);
 `,[Q("show-arrow",`
 margin-${de[r]}: var(--n-space-arrow);
 `),Q("overlap",`
 margin: 0;
 `),je("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${de[r]}: auto;
 ${t}
 `,[B("popover-arrow",n)])])])}const He=Object.assign(Object.assign({},fe.props),{to:V.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),Nr=({arrowStyle:e,clsPrefix:n})=>S("div",{key:"__popover-arrow__",class:`${n}-popover-arrow-wrapper`},S("div",{class:`${n}-popover-arrow`,style:e})),Hr=Be({name:"PopoverBody",inheritAttrs:!1,props:He,setup(e,{slots:n,attrs:r}){const{namespaceRef:t,mergedClsPrefixRef:a,inlineThemeDisabled:o}=en(e),s=fe("Popover","-popover",Lr,nn,e,a),i=F(null),l=rn("NPopover"),u=F(null),f=F(e.show),p=F(!1);tn(()=>{const{show:v}=e;v&&!En()&&!e.internalDeactivateImmediately&&(p.value=!0)});const h=X(()=>{const{trigger:v,onClickoutside:_}=e,T=[],{positionManuallyRef:{value:g}}=l;return g||(v==="click"&&!_&&T.push([Se,C,void 0,{capture:!0}]),v==="hover"&&T.push([Rn,L])),_&&T.push([Se,C,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&p.value)&&T.push([on,e.show]),T}),m=X(()=>{const v=e.width==="trigger"?void 0:ae(e.width),_=[];v&&_.push({width:v});const{maxWidth:T,minWidth:g}=e;return T&&_.push({maxWidth:ae(T)}),g&&_.push({maxWidth:ae(g)}),o||_.push(y.value),_}),y=X(()=>{const{common:{cubicBezierEaseInOut:v,cubicBezierEaseIn:_,cubicBezierEaseOut:T},self:{space:g,spaceArrow:G,padding:K,fontSize:I,textColor:d,dividerColor:w,color:O,boxShadow:N,borderRadius:H,arrowHeight:x,arrowOffset:Ue,arrowOffsetVertical:We}}=s.value;return{"--n-box-shadow":N,"--n-bezier":v,"--n-bezier-ease-in":_,"--n-bezier-ease-out":T,"--n-font-size":I,"--n-text-color":d,"--n-color":O,"--n-divider-color":w,"--n-border-radius":H,"--n-arrow-height":x,"--n-arrow-offset":Ue,"--n-arrow-offset-vertical":We,"--n-padding":K,"--n-space":g,"--n-space-arrow":G}}),c=o?an("popover",void 0,y,e):void 0;l.setBodyInstance({syncPosition:E}),sn(()=>{l.setBodyInstance(null)}),ln(Y(e,"show"),v=>{e.animated||(v?f.value=!0:f.value=!1)});function E(){var v;(v=i.value)===null||v===void 0||v.syncPosition()}function A(v){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(v)}function $(v){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(v)}function L(v){e.trigger==="hover"&&!R().contains(_e(v))&&l.handleMouseMoveOutside(v)}function C(v){(e.trigger==="click"&&!R().contains(_e(v))||e.onClickoutside)&&l.handleClickOutside(v)}function R(){return l.getTriggerElement()}Z(dn,u),Z(un,null),Z(fn,null);function W(){if(c==null||c.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&p.value))return null;let _;const T=l.internalRenderBodyRef.value,{value:g}=a;if(T)_=T([`${g}-popover-shared`,c==null?void 0:c.themeClass.value,e.overlap&&`${g}-popover-shared--overlap`,e.showArrow&&`${g}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${g}-popover-shared--center-arrow`],u,m.value,A,$);else{const{value:G}=l.extraClassRef,{internalTrapFocus:K}=e,I=!Ae(n.header)||!Ae(n.footer),d=()=>{var w;const O=I?S(gn,null,ie(n.header,x=>x?S("div",{class:`${g}-popover__header`,style:e.headerStyle},x):null),ie(n.default,x=>x?S("div",{class:`${g}-popover__content`,style:e.contentStyle},n):null),ie(n.footer,x=>x?S("div",{class:`${g}-popover__footer`,style:e.footerStyle},x):null)):e.scrollable?(w=n.default)===null||w===void 0?void 0:w.call(n):S("div",{class:`${g}-popover__content`,style:e.contentStyle},n),N=e.scrollable?S(pn,{contentClass:I?void 0:`${g}-popover__content`,contentStyle:I?void 0:e.contentStyle},{default:()=>O}):O,H=e.showArrow?Nr({arrowStyle:e.arrowStyle,clsPrefix:g}):null;return[N,H]};_=S("div",vn({class:[`${g}-popover`,`${g}-popover-shared`,c==null?void 0:c.themeClass.value,G.map(w=>`${g}-${w}`),{[`${g}-popover--scrollable`]:e.scrollable,[`${g}-popover--show-header-or-footer`]:I,[`${g}-popover--raw`]:e.raw,[`${g}-popover-shared--overlap`]:e.overlap,[`${g}-popover-shared--show-arrow`]:e.showArrow,[`${g}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:u,style:m.value,onKeydown:l.handleKeydown,onMouseenter:A,onMouseleave:$},r),K?S(hn,{active:e.show,autoFocus:!0},{default:d}):d())}return Ie(_,h.value)}return{displayed:p,namespace:t,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:i,adjustedTo:V(e),followerEnabled:f,renderContentNode:W}},render(){return S(_n,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===V.tdkey},{default:()=>this.animated?S(cn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Ur=Object.keys(He),Wr={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Gr(e,n,r){Wr[n].forEach(t=>{e.props?e.props=Object.assign({},e.props):e.props={};const a=e.props[t],o=r[t];a?e.props[t]=(...s)=>{a(...s),o(...s)}:e.props[t]=o})}const Kr=Sn("").type,Xr={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:V.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},kr=Object.assign(Object.assign(Object.assign({},fe.props),Xr),{internalOnAfterLeave:Function,internalRenderBody:Function}),Qr=Be({name:"Popover",inheritAttrs:!1,props:kr,__popover__:!0,setup(e){const n=wn(),r=F(null),t=X(()=>e.show),a=F(e.defaultShow),o=Tn(t,a),s=$e(()=>e.disabled?!1:o.value),i=()=>{if(e.disabled)return!0;const{getDisabled:d}=e;return!!(d!=null&&d())},l=()=>i()?!1:o.value,u=On(e,["arrow","showArrow"]),f=X(()=>e.overlap?!1:u.value);let p=null;const h=F(null),m=F(null),y=$e(()=>e.x!==void 0&&e.y!==void 0);function c(d){const{"onUpdate:show":w,onUpdateShow:O,onShow:N,onHide:H}=e;a.value=d,w&&k(w,d),O&&k(O,d),d&&N&&k(N,!0),d&&H&&k(H,!1)}function E(){p&&p.syncPosition()}function A(){const{value:d}=h;d&&(window.clearTimeout(d),h.value=null)}function $(){const{value:d}=m;d&&(window.clearTimeout(d),m.value=null)}function L(){const d=i();if(e.trigger==="focus"&&!d){if(l())return;c(!0)}}function C(){const d=i();if(e.trigger==="focus"&&!d){if(!l())return;c(!1)}}function R(){const d=i();if(e.trigger==="hover"&&!d){if($(),h.value!==null||l())return;const w=()=>{c(!0),h.value=null},{delay:O}=e;O===0?w():h.value=window.setTimeout(w,O)}}function W(){const d=i();if(e.trigger==="hover"&&!d){if(A(),m.value!==null||!l())return;const w=()=>{c(!1),m.value=null},{duration:O}=e;O===0?w():m.value=window.setTimeout(w,O)}}function v(){W()}function _(d){var w;!l()||(e.trigger==="click"&&(A(),$(),c(!1)),(w=e.onClickoutside)===null||w===void 0||w.call(e,d))}function T(){if(e.trigger==="click"&&!i()){A(),$();const d=!l();c(d)}}function g(d){!e.internalTrapFocus||d.key==="Escape"&&(A(),$(),c(!1))}function G(d){a.value=d}function K(){var d;return(d=r.value)===null||d===void 0?void 0:d.targetRef}function I(d){p=d}return Z("NPopover",{getTriggerElement:K,handleKeydown:g,handleMouseEnter:R,handleMouseLeave:W,handleClickOutside:_,handleMouseMoveOutside:v,setBodyInstance:I,positionManuallyRef:y,isMountedRef:n,zIndexRef:Y(e,"zIndex"),extraClassRef:Y(e,"internalExtraClass"),internalRenderBodyRef:Y(e,"internalRenderBody")}),{binderInstRef:r,positionManually:y,mergedShowConsideringDisabledProp:s,uncontrolledShow:a,mergedShowArrow:f,getMergedShow:l,setShow:G,handleClick:T,handleMouseEnter:R,handleMouseLeave:W,handleFocus:L,handleBlur:C,syncPosition:E}},render(){var e;const{positionManually:n,$slots:r}=this;let t,a=!1;if(!n&&(r.activator?t=Te(r,"activator"):t=Te(r,"trigger"),t)){t=bn(t),t=t.type===Kr?S("span",[t]):t;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=t.type)===null||e===void 0)&&e.__popover__)a=!0,t.props||(t.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),t.props.internalSyncTargetWithParent=!0,t.props.internalInheritedEventHandlers?t.props.internalInheritedEventHandlers=[o,...t.props.internalInheritedEventHandlers]:t.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:s}=this,i=[o,...s],l={onBlur:u=>{i.forEach(f=>{f.onBlur(u)})},onFocus:u=>{i.forEach(f=>{f.onFocus(u)})},onClick:u=>{i.forEach(f=>{f.onClick(u)})},onMouseenter:u=>{i.forEach(f=>{f.onMouseenter(u)})},onMouseleave:u=>{i.forEach(f=>{f.onMouseleave(u)})}};Gr(t,s?"nested":n?"manual":this.trigger,l)}}return S($n,{ref:"binderInstRef",syncTarget:!a,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?Ie(S("div",{style:{position:"fixed",inset:0}}),[[mn,{enabled:o,zIndex:this.zIndex}]]):null,n?null:S(An,null,{default:()=>t}),S(Hr,yn(this.$props,Ur,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var s,i;return(i=(s=this.$slots).default)===null||i===void 0?void 0:i.call(s)},header:()=>{var s,i;return(i=(s=this.$slots).header)===null||i===void 0?void 0:i.call(s)},footer:()=>{var s,i;return(i=(s=this.$slots).footer)===null||i===void 0?void 0:i.call(s)}})]}})}});export{Qr as _,Xr as p,Nr as r};