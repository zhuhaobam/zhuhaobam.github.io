import{aJ as ne,aH as re,a$ as L,b0 as Pe,b1 as ue,b2 as Ge,b3 as ge,b4 as We,b5 as pe,b6 as we,b7 as be,b8 as me,b9 as Z,ba as Ke,bb as ye,bc as Xe,bd as Me,be as Ye,bf as Je,bg as Ze,bh as ke,bi as qe,bj as xe,bk as Qe,a6 as D,Z as B,ai as te,a5 as oe,$ as Q,bl as Ve,d as Ce,a1 as je,O as fe,bm as en,r as F,a8 as nn,al as rn,G as X,bn as Se,y as tn,a9 as ae,a4 as on,aG as an,w as sn,aa as k,a2 as q,aK as ln,aQ as dn,aP as un,H as S,aL as fn,aY as Ae,bo as cn,aM as hn,x as Be,ar as ie,R as vn,aO as gn,bp as pn,ae as _e,bq as $e,br as wn,bs as bn,ah as mn,T as yn,ab as Y}from"./main-2047782f.js";import{u as V,b as Sn,a as An,V as _n}from"./Follower-ade1dcf8.js";import{u as $n}from"./use-merged-state-275eeb4f.js";import{u as Tn}from"./use-compitable-3430fdc0.js";let se;function On(){return se===void 0&&(se=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),se}const U="@@mmoContext",En={mounted(e,{value:n}){e[U]={handler:void 0},typeof n=="function"&&(e[U].handler=n,ne("mousemoveoutside",e,n))},updated(e,{value:n}){const r=e[U];typeof n=="function"?r.handler?r.handler!==n&&(re("mousemoveoutside",e,r.handler),r.handler=n,ne("mousemoveoutside",e,n)):(e[U].handler=n,ne("mousemoveoutside",e,n)):r.handler&&(re("mousemoveoutside",e,r.handler),r.handler=void 0)},unmounted(e){const{handler:n}=e[U];n&&re("mousemoveoutside",e,n),e[U].handler=void 0}},Rn=En;var Pn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Mn=/^\w*$/;function ce(e,n){if(L(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||Pe(e)?!0:Mn.test(e)||!Pn.test(e)||n!=null&&e in Object(n)}var xn="Expected a function";function he(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(xn);var r=function(){var t=arguments,a=n?n.apply(this,t):t[0],o=r.cache;if(o.has(a))return o.get(a);var s=e.apply(this,t);return r.cache=o.set(a,s)||o,s};return r.cache=new(he.Cache||ue),r}he.Cache=ue;var Cn=500;function Bn(e){var n=he(e,function(t){return r.size===Cn&&r.clear(),t}),r=n.cache;return n}var In=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dn=/\\(\\)?/g,Fn=Bn(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(In,function(r,t,a,o){n.push(a?o.replace(Dn,"$1"):t||r)}),n});const Ln=Fn;function Ie(e,n){return L(e)?e:ce(e,n)?[e]:Ln(Ge(e))}var zn=1/0;function ee(e){if(typeof e=="string"||Pe(e))return e;var n=e+"";return n=="0"&&1/e==-zn?"-0":n}function De(e,n){n=Ie(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[ee(n[r++])];return r&&r==t?e:void 0}function Nn(e,n,r){var t=e==null?void 0:De(e,n);return t===void 0?r:t}var Hn="__lodash_hash_undefined__";function Un(e){return this.__data__.set(e,Hn),this}function Gn(e){return this.__data__.has(e)}function j(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new ue;++n<r;)this.add(e[n])}j.prototype.add=j.prototype.push=Un;j.prototype.has=Gn;function Wn(e,n){for(var r=-1,t=e==null?0:e.length;++r<t;)if(n(e[r],r,e))return!0;return!1}function Kn(e,n){return e.has(n)}var Xn=1,Yn=2;function Fe(e,n,r,t,a,o){var s=r&Xn,i=e.length,l=n.length;if(i!=l&&!(s&&l>i))return!1;var u=o.get(e),f=o.get(n);if(u&&f)return u==n&&f==e;var p=-1,h=!0,m=r&Yn?new j:void 0;for(o.set(e,n),o.set(n,e);++p<i;){var y=e[p],c=n[p];if(t)var E=s?t(c,y,p,n,e,o):t(y,c,p,e,n,o);if(E!==void 0){if(E)continue;h=!1;break}if(m){if(!Wn(n,function(_,$){if(!Kn(m,$)&&(y===_||a(y,_,r,t,o)))return m.push($)})){h=!1;break}}else if(!(y===c||a(y,c,r,t,o))){h=!1;break}}return o.delete(e),o.delete(n),h}function Jn(e){var n=-1,r=Array(e.size);return e.forEach(function(t,a){r[++n]=[a,t]}),r}function Zn(e){var n=-1,r=Array(e.size);return e.forEach(function(t){r[++n]=t}),r}var kn=1,qn=2,Qn="[object Boolean]",Vn="[object Date]",jn="[object Error]",er="[object Map]",nr="[object Number]",rr="[object RegExp]",tr="[object Set]",or="[object String]",ar="[object Symbol]",ir="[object ArrayBuffer]",sr="[object DataView]",Te=ge?ge.prototype:void 0,le=Te?Te.valueOf:void 0;function lr(e,n,r,t,a,o,s){switch(r){case sr:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case ir:return!(e.byteLength!=n.byteLength||!o(new pe(e),new pe(n)));case Qn:case Vn:case nr:return We(+e,+n);case jn:return e.name==n.name&&e.message==n.message;case rr:case or:return e==n+"";case er:var i=Jn;case tr:var l=t&kn;if(i||(i=Zn),e.size!=n.size&&!l)return!1;var u=s.get(e);if(u)return u==n;t|=qn,s.set(e,n);var f=Fe(i(e),i(n),t,a,o,s);return s.delete(e),f;case ar:if(le)return le.call(e)==le.call(n)}return!1}var dr=1,ur=Object.prototype,fr=ur.hasOwnProperty;function cr(e,n,r,t,a,o){var s=r&dr,i=we(e),l=i.length,u=we(n),f=u.length;if(l!=f&&!s)return!1;for(var p=l;p--;){var h=i[p];if(!(s?h in n:fr.call(n,h)))return!1}var m=o.get(e),y=o.get(n);if(m&&y)return m==n&&y==e;var c=!0;o.set(e,n),o.set(n,e);for(var E=s;++p<l;){h=i[p];var _=e[h],$=n[h];if(t)var z=s?t($,_,h,n,e,o):t(_,$,h,e,n,o);if(!(z===void 0?_===$||a(_,$,r,t,o):z)){c=!1;break}E||(E=h=="constructor")}if(c&&!E){var M=e.constructor,P=n.constructor;M!=P&&"constructor"in e&&"constructor"in n&&!(typeof M=="function"&&M instanceof M&&typeof P=="function"&&P instanceof P)&&(c=!1)}return o.delete(e),o.delete(n),c}var hr=1,Oe="[object Arguments]",Ee="[object Array]",J="[object Object]",vr=Object.prototype,Re=vr.hasOwnProperty;function gr(e,n,r,t,a,o){var s=L(e),i=L(n),l=s?Ee:be(e),u=i?Ee:be(n);l=l==Oe?J:l,u=u==Oe?J:u;var f=l==J,p=u==J,h=l==u;if(h&&me(e)){if(!me(n))return!1;s=!0,f=!1}if(h&&!f)return o||(o=new Z),s||Ke(e)?Fe(e,n,r,t,a,o):lr(e,n,l,r,t,a,o);if(!(r&hr)){var m=f&&Re.call(e,"__wrapped__"),y=p&&Re.call(n,"__wrapped__");if(m||y){var c=m?e.value():e,E=y?n.value():n;return o||(o=new Z),a(c,E,r,t,o)}}return h?(o||(o=new Z),cr(e,n,r,t,a,o)):!1}function ve(e,n,r,t,a){return e===n?!0:e==null||n==null||!ye(e)&&!ye(n)?e!==e&&n!==n:gr(e,n,r,t,ve,a)}var pr=1,wr=2;function br(e,n,r,t){var a=r.length,o=a,s=!t;if(e==null)return!o;for(e=Object(e);a--;){var i=r[a];if(s&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<o;){i=r[a];var l=i[0],u=e[l],f=i[1];if(s&&i[2]){if(u===void 0&&!(l in e))return!1}else{var p=new Z;if(t)var h=t(u,f,l,e,n,p);if(!(h===void 0?ve(f,u,pr|wr,t,p):h))return!1}}return!0}function Le(e){return e===e&&!Xe(e)}function mr(e){for(var n=Me(e),r=n.length;r--;){var t=n[r],a=e[t];n[r]=[t,a,Le(a)]}return n}function ze(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==void 0||e in Object(r))}}function yr(e){var n=mr(e);return n.length==1&&n[0][2]?ze(n[0][0],n[0][1]):function(r){return r===e||br(r,e,n)}}function Sr(e,n){return e!=null&&n in Object(e)}function Ar(e,n,r){n=Ie(n,e);for(var t=-1,a=n.length,o=!1;++t<a;){var s=ee(n[t]);if(!(o=e!=null&&r(e,s)))break;e=e[s]}return o||++t!=a?o:(a=e==null?0:e.length,!!a&&Ye(a)&&Je(s,a)&&(L(e)||Ze(e)))}function _r(e,n){return e!=null&&Ar(e,n,Sr)}var $r=1,Tr=2;function Or(e,n){return ce(e)&&Le(n)?ze(ee(e),n):function(r){var t=Nn(r,e);return t===void 0&&t===n?_r(r,e):ve(n,t,$r|Tr)}}function Er(e){return function(n){return n==null?void 0:n[e]}}function Rr(e){return function(n){return De(n,e)}}function Pr(e){return ce(e)?Er(ee(e)):Rr(e)}function Mr(e){return typeof e=="function"?e:e==null?ke:typeof e=="object"?L(e)?Or(e[0],e[1]):yr(e):Pr(e)}function xr(e,n){return e&&qe(e,n,Me)}function Cr(e,n){return function(r,t){if(r==null)return r;if(!xe(r))return e(r,t);for(var a=r.length,o=n?a:-1,s=Object(r);(n?o--:++o<a)&&t(s[o],o,s)!==!1;);return r}}var Br=Cr(xr);const Ir=Br;function Dr(e,n){var r=-1,t=xe(e)?Array(e.length):[];return Ir(e,function(a,o,s){t[++r]=n(a,o,s)}),t}function Fr(e,n){var r=L(e)?Qe:Dr;return r(e,Mr(n))}const de={top:"bottom",bottom:"top",left:"right",right:"left"},b="var(--n-arrow-height) * 1.414",Lr=D([B("popover",`
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
 `)]),R("top-start",`
 top: calc(${b} / -2);
 left: calc(${C("top-start")} - var(--v-offset-left));
 `),R("top",`
 top: calc(${b} / -2);
 transform: translateX(calc(${b} / -2)) rotate(45deg);
 left: 50%;
 `),R("top-end",`
 top: calc(${b} / -2);
 right: calc(${C("top-end")} + var(--v-offset-left));
 `),R("bottom-start",`
 bottom: calc(${b} / -2);
 left: calc(${C("bottom-start")} - var(--v-offset-left));
 `),R("bottom",`
 bottom: calc(${b} / -2);
 transform: translateX(calc(${b} / -2)) rotate(45deg);
 left: 50%;
 `),R("bottom-end",`
 bottom: calc(${b} / -2);
 right: calc(${C("bottom-end")} + var(--v-offset-left));
 `),R("left-start",`
 left: calc(${b} / -2);
 top: calc(${C("left-start")} - var(--v-offset-top));
 `),R("left",`
 left: calc(${b} / -2);
 transform: translateY(calc(${b} / -2)) rotate(45deg);
 top: 50%;
 `),R("left-end",`
 left: calc(${b} / -2);
 bottom: calc(${C("left-end")} + var(--v-offset-top));
 `),R("right-start",`
 right: calc(${b} / -2);
 top: calc(${C("right-start")} - var(--v-offset-top));
 `),R("right",`
 right: calc(${b} / -2);
 transform: translateY(calc(${b} / -2)) rotate(45deg);
 top: 50%;
 `),R("right-end",`
 right: calc(${b} / -2);
 bottom: calc(${C("right-end")} + var(--v-offset-top));
 `),...Fr({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const r=["right","left"].includes(n),t=r?"width":"height";return e.map(a=>{const o=a.split("-")[1]==="end",i=`calc((${`var(--v-target-${t}, 0px)`} - ${b}) / 2)`,l=C(a);return D(`[v-placement="${a}"] >`,[B("popover-shared",[Q("center-arrow",[B("popover-arrow",`${n}: calc(max(${i}, ${l}) ${o?"+":"-"} var(--v-offset-${r?"left":"top"}));`)])])])})})]);function C(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function R(e,n){const r=e.split("-")[0],t=["top","bottom"].includes(r)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return D(`[v-placement="${e}"] >`,[B("popover-shared",`
 margin-${de[r]}: var(--n-space);
 `,[Q("show-arrow",`
 margin-${de[r]}: var(--n-space-arrow);
 `),Q("overlap",`
 margin: 0;
 `),Ve("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${de[r]}: auto;
 ${t}
 `,[B("popover-arrow",n)])])])}const Ne=Object.assign(Object.assign({},fe.props),{to:V.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),zr=({arrowStyle:e,clsPrefix:n})=>S("div",{key:"__popover-arrow__",class:`${n}-popover-arrow-wrapper`},S("div",{class:`${n}-popover-arrow`,style:e})),Nr=Ce({name:"PopoverBody",inheritAttrs:!1,props:Ne,setup(e,{slots:n,attrs:r}){const{namespaceRef:t,mergedClsPrefixRef:a,inlineThemeDisabled:o}=je(e),s=fe("Popover","-popover",Lr,en,e,a),i=F(null),l=nn("NPopover"),u=F(null),f=F(e.show),p=F(!1);rn(()=>{const{show:v}=e;v&&!On()&&!e.internalDeactivateImmediately&&(p.value=!0)});const h=X(()=>{const{trigger:v,onClickoutside:A}=e,T=[],{positionManuallyRef:{value:g}}=l;return g||(v==="click"&&!A&&T.push([Se,M,void 0,{capture:!0}]),v==="hover"&&T.push([Rn,z])),A&&T.push([Se,M,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&p.value)&&T.push([tn,e.show]),T}),m=X(()=>{const v=e.width==="trigger"?void 0:ae(e.width),A=[];v&&A.push({width:v});const{maxWidth:T,minWidth:g}=e;return T&&A.push({maxWidth:ae(T)}),g&&A.push({maxWidth:ae(g)}),o||A.push(y.value),A}),y=X(()=>{const{common:{cubicBezierEaseInOut:v,cubicBezierEaseIn:A,cubicBezierEaseOut:T},self:{space:g,spaceArrow:W,padding:K,fontSize:I,textColor:d,dividerColor:w,color:O,boxShadow:N,borderRadius:H,arrowHeight:x,arrowOffset:He,arrowOffsetVertical:Ue}}=s.value;return{"--n-box-shadow":N,"--n-bezier":v,"--n-bezier-ease-in":A,"--n-bezier-ease-out":T,"--n-font-size":I,"--n-text-color":d,"--n-color":O,"--n-divider-color":w,"--n-border-radius":H,"--n-arrow-height":x,"--n-arrow-offset":He,"--n-arrow-offset-vertical":Ue,"--n-padding":K,"--n-space":g,"--n-space-arrow":W}}),c=o?on("popover",void 0,y,e):void 0;l.setBodyInstance({syncPosition:E}),an(()=>{l.setBodyInstance(null)}),sn(k(e,"show"),v=>{e.animated||(v?f.value=!0:f.value=!1)});function E(){var v;(v=i.value)===null||v===void 0||v.syncPosition()}function _(v){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(v)}function $(v){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(v)}function z(v){e.trigger==="hover"&&!P().contains(v.target)&&l.handleMouseMoveOutside(v)}function M(v){(e.trigger==="click"&&!P().contains(v.target)||e.onClickoutside)&&l.handleClickOutside(v)}function P(){return l.getTriggerElement()}q(ln,u),q(dn,null),q(un,null);function G(){if(c==null||c.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&p.value))return null;let A;const T=l.internalRenderBodyRef.value,{value:g}=a;if(T)A=T([`${g}-popover-shared`,c==null?void 0:c.themeClass.value,e.overlap&&`${g}-popover-shared--overlap`,e.showArrow&&`${g}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${g}-popover-shared--center-arrow`],u,m.value,_,$);else{const{value:W}=l.extraClassRef,{internalTrapFocus:K}=e,I=!Ae(n.header)||!Ae(n.footer),d=()=>{var w;const O=I?S(vn,null,ie(n.header,x=>x?S("div",{class:`${g}-popover__header`,style:e.headerStyle},x):null),ie(n.default,x=>x?S("div",{class:`${g}-popover__content`,style:e.contentStyle},n):null),ie(n.footer,x=>x?S("div",{class:`${g}-popover__footer`,style:e.footerStyle},x):null)):e.scrollable?(w=n.default)===null||w===void 0?void 0:w.call(n):S("div",{class:`${g}-popover__content`,style:e.contentStyle},n),N=e.scrollable?S(gn,{contentClass:I?void 0:`${g}-popover__content`,contentStyle:I?void 0:e.contentStyle},{default:()=>O}):O,H=e.showArrow?zr({arrowStyle:e.arrowStyle,clsPrefix:g}):null;return[N,H]};A=S("div",hn({class:[`${g}-popover`,`${g}-popover-shared`,c==null?void 0:c.themeClass.value,W.map(w=>`${g}-${w}`),{[`${g}-popover--scrollable`]:e.scrollable,[`${g}-popover--show-header-or-footer`]:I,[`${g}-popover--raw`]:e.raw,[`${g}-popover-shared--overlap`]:e.overlap,[`${g}-popover-shared--show-arrow`]:e.showArrow,[`${g}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:u,style:m.value,onKeydown:l.handleKeydown,onMouseenter:_,onMouseleave:$},r),K?S(cn,{active:e.show,autoFocus:!0},{default:d}):d())}return Be(A,h.value)}return{displayed:p,namespace:t,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:i,adjustedTo:V(e),followerEnabled:f,renderContentNode:G}},render(){return S(Sn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===V.tdkey},{default:()=>this.animated?S(fn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Hr=Object.keys(Ne),Ur={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Gr(e,n,r){Ur[n].forEach(t=>{e.props?e.props=Object.assign({},e.props):e.props={};const a=e.props[t],o=r[t];a?e.props[t]=(...s)=>{a(...s),o(...s)}:e.props[t]=o})}const Wr=yn("").type,Kr={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:V.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Xr=Object.assign(Object.assign(Object.assign({},fe.props),Kr),{internalOnAfterLeave:Function,internalRenderBody:Function}),qr=Ce({name:"Popover",inheritAttrs:!1,props:Xr,__popover__:!0,setup(e){const n=pn(),r=F(null),t=X(()=>e.show),a=F(e.defaultShow),o=$n(t,a),s=_e(()=>e.disabled?!1:o.value),i=()=>{if(e.disabled)return!0;const{getDisabled:d}=e;return!!(d!=null&&d())},l=()=>i()?!1:o.value,u=Tn(e,["arrow","showArrow"]),f=X(()=>e.overlap?!1:u.value);let p=null;const h=F(null),m=F(null),y=_e(()=>e.x!==void 0&&e.y!==void 0);function c(d){const{"onUpdate:show":w,onUpdateShow:O,onShow:N,onHide:H}=e;a.value=d,w&&Y(w,d),O&&Y(O,d),d&&N&&Y(N,!0),d&&H&&Y(H,!1)}function E(){p&&p.syncPosition()}function _(){const{value:d}=h;d&&(window.clearTimeout(d),h.value=null)}function $(){const{value:d}=m;d&&(window.clearTimeout(d),m.value=null)}function z(){const d=i();if(e.trigger==="focus"&&!d){if(l())return;c(!0)}}function M(){const d=i();if(e.trigger==="focus"&&!d){if(!l())return;c(!1)}}function P(){const d=i();if(e.trigger==="hover"&&!d){if($(),h.value!==null||l())return;const w=()=>{c(!0),h.value=null},{delay:O}=e;O===0?w():h.value=window.setTimeout(w,O)}}function G(){const d=i();if(e.trigger==="hover"&&!d){if(_(),m.value!==null||!l())return;const w=()=>{c(!1),m.value=null},{duration:O}=e;O===0?w():m.value=window.setTimeout(w,O)}}function v(){G()}function A(d){var w;!l()||(e.trigger==="click"&&(_(),$(),c(!1)),(w=e.onClickoutside)===null||w===void 0||w.call(e,d))}function T(){if(e.trigger==="click"&&!i()){_(),$();const d=!l();c(d)}}function g(d){!e.internalTrapFocus||d.key==="Escape"&&(_(),$(),c(!1))}function W(d){a.value=d}function K(){var d;return(d=r.value)===null||d===void 0?void 0:d.targetRef}function I(d){p=d}return q("NPopover",{getTriggerElement:K,handleKeydown:g,handleMouseEnter:P,handleMouseLeave:G,handleClickOutside:A,handleMouseMoveOutside:v,setBodyInstance:I,positionManuallyRef:y,isMountedRef:n,zIndexRef:k(e,"zIndex"),extraClassRef:k(e,"internalExtraClass"),internalRenderBodyRef:k(e,"internalRenderBody")}),{binderInstRef:r,positionManually:y,mergedShowConsideringDisabledProp:s,uncontrolledShow:a,mergedShowArrow:f,getMergedShow:l,setShow:W,handleClick:T,handleMouseEnter:P,handleMouseLeave:G,handleFocus:z,handleBlur:M,syncPosition:E}},render(){var e;const{positionManually:n,$slots:r}=this;let t,a=!1;if(!n&&(r.activator?t=$e(r,"activator"):t=$e(r,"trigger"),t)){t=wn(t),t=t.type===Wr?S("span",[t]):t;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=t.type)===null||e===void 0)&&e.__popover__)a=!0,t.props||(t.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),t.props.internalSyncTargetWithParent=!0,t.props.internalInheritedEventHandlers?t.props.internalInheritedEventHandlers=[o,...t.props.internalInheritedEventHandlers]:t.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:s}=this,i=[o,...s],l={onBlur:u=>{i.forEach(f=>{f.onBlur(u)})},onFocus:u=>{i.forEach(f=>{f.onFocus(u)})},onClick:u=>{i.forEach(f=>{f.onClick(u)})},onMouseenter:u=>{i.forEach(f=>{f.onMouseenter(u)})},onMouseleave:u=>{i.forEach(f=>{f.onMouseleave(u)})}};Gr(t,s?"nested":n?"manual":this.trigger,l)}}return S(_n,{ref:"binderInstRef",syncTarget:!a,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?Be(S("div",{style:{position:"fixed",inset:0}}),[[bn,{enabled:o,zIndex:this.zIndex}]]):null,n?null:S(An,null,{default:()=>t}),S(Nr,mn(this.$props,Hr,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var s,i;return(i=(s=this.$slots).default)===null||i===void 0?void 0:i.call(s)},header:()=>{var s,i;return(i=(s=this.$slots).header)===null||i===void 0?void 0:i.call(s)},footer:()=>{var s,i;return(i=(s=this.$slots).footer)===null||i===void 0?void 0:i.call(s)}})]}})}});export{qr as N,Kr as p,zr as r};