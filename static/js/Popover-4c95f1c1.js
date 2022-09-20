import{aX as ee,aY as ne,aZ as ze,a_ as ce,a$ as Ne,b0 as ve,b1 as he,b2 as X,b3 as ge,b4 as pe,b5 as k,b6 as He,b7 as we,b8 as Ue,b9 as Ee,ba as We,bb as Ke,bc as Ge,bd as Xe,be as qe,bf as Re,bg as Ye,P as D,m as C,R as re,Q as te,n as Z,bh as ke,d as Pe,q as Je,p as de,bi as Qe,r as F,i as Ze,U as je,c as G,bj as be,bk as Ve,ak as oe,s as en,b as nn,w as rn,V as J,bl as me,G as Q,aB as tn,aF as on,aE as an,t as S,a8 as sn,bm as ye,bn as ln,ar as dn,bo as xe,ay as ae,I as un,aD as fn,ap as cn,K as Se,bp as _e,bq as vn,br as hn,O as gn,aK as pn,W as q}from"./main-2bbc1e4d.js";import{c as wn,t as ue,i as Be,g as bn,b as mn}from"./get-595727a4.js";import{u as j,b as yn,a as Sn,V as _n}from"./Follower-24c12859.js";import{u as An}from"./use-merged-state-9f4efc58.js";import{u as $n}from"./use-compitable-bbd66888.js";let ie;function On(){return ie===void 0&&(ie=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),ie}const H="@@mmoContext",Tn={mounted(e,{value:n}){e[H]={handler:void 0},typeof n=="function"&&(e[H].handler=n,ee("mousemoveoutside",e,n))},updated(e,{value:n}){const r=e[H];typeof n=="function"?r.handler?r.handler!==n&&(ne("mousemoveoutside",e,r.handler),r.handler=n,ee("mousemoveoutside",e,n)):(e[H].handler=n,ee("mousemoveoutside",e,n)):r.handler&&(ne("mousemoveoutside",e,r.handler),r.handler=void 0)},unmounted(e){const{handler:n}=e[H];n&&ne("mousemoveoutside",e,n),e[H].handler=void 0}},En=Tn;var Rn="__lodash_hash_undefined__";function Pn(e){return this.__data__.set(e,Rn),this}function xn(e){return this.__data__.has(e)}function V(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new ze;++n<r;)this.add(e[n])}V.prototype.add=V.prototype.push=Pn;V.prototype.has=xn;function Bn(e,n){for(var r=-1,t=e==null?0:e.length;++r<t;)if(n(e[r],r,e))return!0;return!1}function Mn(e,n){return e.has(n)}var Cn=1,In=2;function Me(e,n,r,t,a,o){var s=r&Cn,i=e.length,l=n.length;if(i!=l&&!(s&&l>i))return!1;var u=o.get(e),f=o.get(n);if(u&&f)return u==n&&f==e;var p=-1,v=!0,m=r&In?new V:void 0;for(o.set(e,n),o.set(n,e);++p<i;){var y=e[p],c=n[p];if(t)var E=s?t(c,y,p,n,e,o):t(y,c,p,e,n,o);if(E!==void 0){if(E)continue;v=!1;break}if(m){if(!Bn(n,function(A,$){if(!Mn(m,$)&&(y===A||a(y,A,r,t,o)))return m.push($)})){v=!1;break}}else if(!(y===c||a(y,c,r,t,o))){v=!1;break}}return o.delete(e),o.delete(n),v}function Dn(e){var n=-1,r=Array(e.size);return e.forEach(function(t,a){r[++n]=[a,t]}),r}function Fn(e){var n=-1,r=Array(e.size);return e.forEach(function(t){r[++n]=t}),r}var Ln=1,zn=2,Nn="[object Boolean]",Hn="[object Date]",Un="[object Error]",Wn="[object Map]",Kn="[object Number]",Gn="[object RegExp]",Xn="[object Set]",qn="[object String]",Yn="[object Symbol]",kn="[object ArrayBuffer]",Jn="[object DataView]",Ae=ce?ce.prototype:void 0,se=Ae?Ae.valueOf:void 0;function Qn(e,n,r,t,a,o,s){switch(r){case Jn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case kn:return!(e.byteLength!=n.byteLength||!o(new ve(e),new ve(n)));case Nn:case Hn:case Kn:return Ne(+e,+n);case Un:return e.name==n.name&&e.message==n.message;case Gn:case qn:return e==n+"";case Wn:var i=Dn;case Xn:var l=t&Ln;if(i||(i=Fn),e.size!=n.size&&!l)return!1;var u=s.get(e);if(u)return u==n;t|=zn,s.set(e,n);var f=Me(i(e),i(n),t,a,o,s);return s.delete(e),f;case Yn:if(se)return se.call(e)==se.call(n)}return!1}var Zn=1,jn=Object.prototype,Vn=jn.hasOwnProperty;function er(e,n,r,t,a,o){var s=r&Zn,i=he(e),l=i.length,u=he(n),f=u.length;if(l!=f&&!s)return!1;for(var p=l;p--;){var v=i[p];if(!(s?v in n:Vn.call(n,v)))return!1}var m=o.get(e),y=o.get(n);if(m&&y)return m==n&&y==e;var c=!0;o.set(e,n),o.set(n,e);for(var E=s;++p<l;){v=i[p];var A=e[v],$=n[v];if(t)var L=s?t($,A,v,n,e,o):t(A,$,v,e,n,o);if(!(L===void 0?A===$||a(A,$,r,t,o):L)){c=!1;break}E||(E=v=="constructor")}if(c&&!E){var x=e.constructor,P=n.constructor;x!=P&&"constructor"in e&&"constructor"in n&&!(typeof x=="function"&&x instanceof x&&typeof P=="function"&&P instanceof P)&&(c=!1)}return o.delete(e),o.delete(n),c}var nr=1,$e="[object Arguments]",Oe="[object Array]",Y="[object Object]",rr=Object.prototype,Te=rr.hasOwnProperty;function tr(e,n,r,t,a,o){var s=X(e),i=X(n),l=s?Oe:ge(e),u=i?Oe:ge(n);l=l==$e?Y:l,u=u==$e?Y:u;var f=l==Y,p=u==Y,v=l==u;if(v&&pe(e)){if(!pe(n))return!1;s=!0,f=!1}if(v&&!f)return o||(o=new k),s||He(e)?Me(e,n,r,t,a,o):Qn(e,n,l,r,t,a,o);if(!(r&nr)){var m=f&&Te.call(e,"__wrapped__"),y=p&&Te.call(n,"__wrapped__");if(m||y){var c=m?e.value():e,E=y?n.value():n;return o||(o=new k),a(c,E,r,t,o)}}return v?(o||(o=new k),er(e,n,r,t,a,o)):!1}function fe(e,n,r,t,a){return e===n?!0:e==null||n==null||!we(e)&&!we(n)?e!==e&&n!==n:tr(e,n,r,t,fe,a)}var or=1,ar=2;function ir(e,n,r,t){var a=r.length,o=a,s=!t;if(e==null)return!o;for(e=Object(e);a--;){var i=r[a];if(s&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<o;){i=r[a];var l=i[0],u=e[l],f=i[1];if(s&&i[2]){if(u===void 0&&!(l in e))return!1}else{var p=new k;if(t)var v=t(u,f,l,e,n,p);if(!(v===void 0?fe(f,u,or|ar,t,p):v))return!1}}return!0}function Ce(e){return e===e&&!Ue(e)}function sr(e){for(var n=Ee(e),r=n.length;r--;){var t=n[r],a=e[t];n[r]=[t,a,Ce(a)]}return n}function Ie(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==void 0||e in Object(r))}}function lr(e){var n=sr(e);return n.length==1&&n[0][2]?Ie(n[0][0],n[0][1]):function(r){return r===e||ir(r,e,n)}}function dr(e,n){return e!=null&&n in Object(e)}function ur(e,n,r){n=wn(n,e);for(var t=-1,a=n.length,o=!1;++t<a;){var s=ue(n[t]);if(!(o=e!=null&&r(e,s)))break;e=e[s]}return o||++t!=a?o:(a=e==null?0:e.length,!!a&&We(a)&&Ke(s,a)&&(X(e)||Ge(e)))}function fr(e,n){return e!=null&&ur(e,n,dr)}var cr=1,vr=2;function hr(e,n){return Be(e)&&Ce(n)?Ie(ue(e),n):function(r){var t=bn(r,e);return t===void 0&&t===n?fr(r,e):fe(n,t,cr|vr)}}function gr(e){return function(n){return n==null?void 0:n[e]}}function pr(e){return function(n){return mn(n,e)}}function wr(e){return Be(e)?gr(ue(e)):pr(e)}function br(e){return typeof e=="function"?e:e==null?Xe:typeof e=="object"?X(e)?hr(e[0],e[1]):lr(e):wr(e)}function mr(e,n){return e&&qe(e,n,Ee)}function yr(e,n){return function(r,t){if(r==null)return r;if(!Re(r))return e(r,t);for(var a=r.length,o=n?a:-1,s=Object(r);(n?o--:++o<a)&&t(s[o],o,s)!==!1;);return r}}var Sr=yr(mr);const _r=Sr;function Ar(e,n){var r=-1,t=Re(e)?Array(e.length):[];return _r(e,function(a,o,s){t[++r]=n(a,o,s)}),t}function $r(e,n){var r=X(e)?Ye:Ar;return r(e,br(n))}const le={top:"bottom",bottom:"top",left:"right",right:"left"},b="var(--n-arrow-height) * 1.414",Or=D([C("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 `,[D(">",[C("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),re("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[re("scrollable",[re("show-header-or-footer","padding: var(--n-padding);")])]),te("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),te("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Z("scrollable, show-header-or-footer",[te("content",`
 padding: var(--n-padding);
 `)])]),C("popover-shared",`
 transform-origin: inherit;
 `,[C("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[C("popover-arrow",`
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
 left: calc(${M("top-start")} - var(--v-offset-left));
 `),R("top",`
 top: calc(${b} / -2);
 transform: translateX(calc(${b} / -2)) rotate(45deg);
 left: 50%;
 `),R("top-end",`
 top: calc(${b} / -2);
 right: calc(${M("top-end")} + var(--v-offset-left));
 `),R("bottom-start",`
 bottom: calc(${b} / -2);
 left: calc(${M("bottom-start")} - var(--v-offset-left));
 `),R("bottom",`
 bottom: calc(${b} / -2);
 transform: translateX(calc(${b} / -2)) rotate(45deg);
 left: 50%;
 `),R("bottom-end",`
 bottom: calc(${b} / -2);
 right: calc(${M("bottom-end")} + var(--v-offset-left));
 `),R("left-start",`
 left: calc(${b} / -2);
 top: calc(${M("left-start")} - var(--v-offset-top));
 `),R("left",`
 left: calc(${b} / -2);
 transform: translateY(calc(${b} / -2)) rotate(45deg);
 top: 50%;
 `),R("left-end",`
 left: calc(${b} / -2);
 bottom: calc(${M("left-end")} + var(--v-offset-top));
 `),R("right-start",`
 right: calc(${b} / -2);
 top: calc(${M("right-start")} - var(--v-offset-top));
 `),R("right",`
 right: calc(${b} / -2);
 transform: translateY(calc(${b} / -2)) rotate(45deg);
 top: 50%;
 `),R("right-end",`
 right: calc(${b} / -2);
 bottom: calc(${M("right-end")} + var(--v-offset-top));
 `),...$r({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const r=["right","left"].includes(n),t=r?"width":"height";return e.map(a=>{const o=a.split("-")[1]==="end",i=`calc((${`var(--v-target-${t}, 0px)`} - ${b}) / 2)`,l=M(a);return D(`[v-placement="${a}"] >`,[C("popover-shared",[Z("center-arrow",[C("popover-arrow",`${n}: calc(max(${i}, ${l}) ${o?"+":"-"} var(--v-offset-${r?"left":"top"}));`)])])])})})]);function M(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function R(e,n){const r=e.split("-")[0],t=["top","bottom"].includes(r)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return D(`[v-placement="${e}"] >`,[C("popover-shared",`
 margin-${le[r]}: var(--n-space);
 `,[Z("show-arrow",`
 margin-${le[r]}: var(--n-space-arrow);
 `),Z("overlap",`
 margin: 0;
 `),ke("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${le[r]}: auto;
 ${t}
 `,[C("popover-arrow",n)])])])}const De=Object.assign(Object.assign({},de.props),{to:j.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),Tr=({arrowStyle:e,clsPrefix:n})=>S("div",{key:"__popover-arrow__",class:`${n}-popover-arrow-wrapper`},S("div",{class:`${n}-popover-arrow`,style:e})),Er=Pe({name:"PopoverBody",inheritAttrs:!1,props:De,setup(e,{slots:n,attrs:r}){const{namespaceRef:t,mergedClsPrefixRef:a,inlineThemeDisabled:o}=Je(e),s=de("Popover","-popover",Or,Qe,e,a),i=F(null),l=Ze("NPopover"),u=F(null),f=F(e.show),p=F(!1);je(()=>{const{show:h}=e;h&&!On()&&!e.internalDeactivateImmediately&&(p.value=!0)});const v=G(()=>{const{trigger:h,onClickoutside:_}=e,O=[],{positionManuallyRef:{value:g}}=l;return g||(h==="click"&&!_&&O.push([be,x,void 0,{capture:!0}]),h==="hover"&&O.push([En,L])),_&&O.push([be,x,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&p.value)&&O.push([Ve,e.show]),O}),m=G(()=>{const h=e.width==="trigger"?void 0:oe(e.width),_=[];h&&_.push({width:h});const{maxWidth:O,minWidth:g}=e;return O&&_.push({maxWidth:oe(O)}),g&&_.push({maxWidth:oe(g)}),o||_.push(y.value),_}),y=G(()=>{const{common:{cubicBezierEaseInOut:h,cubicBezierEaseIn:_,cubicBezierEaseOut:O},self:{space:g,spaceArrow:W,padding:K,fontSize:I,textColor:d,dividerColor:w,color:T,boxShadow:z,borderRadius:N,arrowHeight:B,arrowOffset:Fe,arrowOffsetVertical:Le}}=s.value;return{"--n-box-shadow":z,"--n-bezier":h,"--n-bezier-ease-in":_,"--n-bezier-ease-out":O,"--n-font-size":I,"--n-text-color":d,"--n-color":T,"--n-divider-color":w,"--n-border-radius":N,"--n-arrow-height":B,"--n-arrow-offset":Fe,"--n-arrow-offset-vertical":Le,"--n-padding":K,"--n-space":g,"--n-space-arrow":W}}),c=o?en("popover",void 0,y,e):void 0;l.setBodyInstance({syncPosition:E}),nn(()=>{l.setBodyInstance(null)}),rn(J(e,"show"),h=>{e.animated||(h?f.value=!0:f.value=!1)});function E(){var h;(h=i.value)===null||h===void 0||h.syncPosition()}function A(h){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(h)}function $(h){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(h)}function L(h){e.trigger==="hover"&&!P().contains(me(h))&&l.handleMouseMoveOutside(h)}function x(h){(e.trigger==="click"&&!P().contains(me(h))||e.onClickoutside)&&l.handleClickOutside(h)}function P(){return l.getTriggerElement()}Q(tn,u),Q(on,null),Q(an,null);function U(){if(c==null||c.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&p.value))return null;let _;const O=l.internalRenderBodyRef.value,{value:g}=a;if(O)_=O([`${g}-popover-shared`,c==null?void 0:c.themeClass.value,e.overlap&&`${g}-popover-shared--overlap`,e.showArrow&&`${g}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${g}-popover-shared--center-arrow`],u,m.value,A,$);else{const{value:W}=l.extraClassRef,{internalTrapFocus:K}=e,I=!ye(n.header)||!ye(n.footer),d=()=>{var w;const T=I?S(un,null,ae(n.header,B=>B?S("div",{class:`${g}-popover__header`,style:e.headerStyle},B):null),ae(n.default,B=>B?S("div",{class:`${g}-popover__content`,style:e.contentStyle},n):null),ae(n.footer,B=>B?S("div",{class:`${g}-popover__footer`,style:e.footerStyle},B):null)):e.scrollable?(w=n.default)===null||w===void 0?void 0:w.call(n):S("div",{class:`${g}-popover__content`,style:e.contentStyle},n),z=e.scrollable?S(fn,{contentClass:I?void 0:`${g}-popover__content`,contentStyle:I?void 0:e.contentStyle},{default:()=>T}):T,N=e.showArrow?Tr({arrowStyle:e.arrowStyle,clsPrefix:g}):null;return[z,N]};_=S("div",dn({class:[`${g}-popover`,`${g}-popover-shared`,c==null?void 0:c.themeClass.value,W.map(w=>`${g}-${w}`),{[`${g}-popover--scrollable`]:e.scrollable,[`${g}-popover--show-header-or-footer`]:I,[`${g}-popover--raw`]:e.raw,[`${g}-popover-shared--overlap`]:e.overlap,[`${g}-popover-shared--show-arrow`]:e.showArrow,[`${g}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:u,style:m.value,onKeydown:l.handleKeydown,onMouseenter:A,onMouseleave:$},r),K?S(ln,{active:e.show,autoFocus:!0},{default:d}):d())}return xe(_,v.value)}return{displayed:p,namespace:t,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:i,adjustedTo:j(e),followerEnabled:f,renderContentNode:U}},render(){return S(yn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===j.tdkey},{default:()=>this.animated?S(sn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Rr=Object.keys(De),Pr={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function xr(e,n,r){Pr[n].forEach(t=>{e.props?e.props=Object.assign({},e.props):e.props={};const a=e.props[t],o=r[t];a?e.props[t]=(...s)=>{a(...s),o(...s)}:e.props[t]=o})}const Br=pn("").type,Mr={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:j.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Cr=Object.assign(Object.assign(Object.assign({},de.props),Mr),{internalOnAfterLeave:Function,internalRenderBody:Function}),Nr=Pe({name:"Popover",inheritAttrs:!1,props:Cr,__popover__:!0,setup(e){const n=cn(),r=F(null),t=G(()=>e.show),a=F(e.defaultShow),o=An(t,a),s=Se(()=>e.disabled?!1:o.value),i=()=>{if(e.disabled)return!0;const{getDisabled:d}=e;return!!(d!=null&&d())},l=()=>i()?!1:o.value,u=$n(e,["arrow","showArrow"]),f=G(()=>e.overlap?!1:u.value);let p=null;const v=F(null),m=F(null),y=Se(()=>e.x!==void 0&&e.y!==void 0);function c(d){const{"onUpdate:show":w,onUpdateShow:T,onShow:z,onHide:N}=e;a.value=d,w&&q(w,d),T&&q(T,d),d&&z&&q(z,!0),d&&N&&q(N,!1)}function E(){p&&p.syncPosition()}function A(){const{value:d}=v;d&&(window.clearTimeout(d),v.value=null)}function $(){const{value:d}=m;d&&(window.clearTimeout(d),m.value=null)}function L(){const d=i();if(e.trigger==="focus"&&!d){if(l())return;c(!0)}}function x(){const d=i();if(e.trigger==="focus"&&!d){if(!l())return;c(!1)}}function P(){const d=i();if(e.trigger==="hover"&&!d){if($(),v.value!==null||l())return;const w=()=>{c(!0),v.value=null},{delay:T}=e;T===0?w():v.value=window.setTimeout(w,T)}}function U(){const d=i();if(e.trigger==="hover"&&!d){if(A(),m.value!==null||!l())return;const w=()=>{c(!1),m.value=null},{duration:T}=e;T===0?w():m.value=window.setTimeout(w,T)}}function h(){U()}function _(d){var w;!l()||(e.trigger==="click"&&(A(),$(),c(!1)),(w=e.onClickoutside)===null||w===void 0||w.call(e,d))}function O(){if(e.trigger==="click"&&!i()){A(),$();const d=!l();c(d)}}function g(d){!e.internalTrapFocus||d.key==="Escape"&&(A(),$(),c(!1))}function W(d){a.value=d}function K(){var d;return(d=r.value)===null||d===void 0?void 0:d.targetRef}function I(d){p=d}return Q("NPopover",{getTriggerElement:K,handleKeydown:g,handleMouseEnter:P,handleMouseLeave:U,handleClickOutside:_,handleMouseMoveOutside:h,setBodyInstance:I,positionManuallyRef:y,isMountedRef:n,zIndexRef:J(e,"zIndex"),extraClassRef:J(e,"internalExtraClass"),internalRenderBodyRef:J(e,"internalRenderBody")}),{binderInstRef:r,positionManually:y,mergedShowConsideringDisabledProp:s,uncontrolledShow:a,mergedShowArrow:f,getMergedShow:l,setShow:W,handleClick:O,handleMouseEnter:P,handleMouseLeave:U,handleFocus:L,handleBlur:x,syncPosition:E}},render(){var e;const{positionManually:n,$slots:r}=this;let t,a=!1;if(!n&&(r.activator?t=_e(r,"activator"):t=_e(r,"trigger"),t)){t=vn(t),t=t.type===Br?S("span",[t]):t;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=t.type)===null||e===void 0)&&e.__popover__)a=!0,t.props||(t.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),t.props.internalSyncTargetWithParent=!0,t.props.internalInheritedEventHandlers?t.props.internalInheritedEventHandlers=[o,...t.props.internalInheritedEventHandlers]:t.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:s}=this,i=[o,...s],l={onBlur:u=>{i.forEach(f=>{f.onBlur(u)})},onFocus:u=>{i.forEach(f=>{f.onFocus(u)})},onClick:u=>{i.forEach(f=>{f.onClick(u)})},onMouseenter:u=>{i.forEach(f=>{f.onMouseenter(u)})},onMouseleave:u=>{i.forEach(f=>{f.onMouseleave(u)})}};xr(t,s?"nested":n?"manual":this.trigger,l)}}return S(_n,{ref:"binderInstRef",syncTarget:!a,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?xe(S("div",{style:{position:"fixed",inset:0}}),[[hn,{enabled:o,zIndex:this.zIndex}]]):null,n?null:S(Sn,null,{default:()=>t}),S(Er,gn(this.$props,Rr,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var s,i;return(i=(s=this.$slots).default)===null||i===void 0?void 0:i.call(s)},header:()=>{var s,i;return(i=(s=this.$slots).header)===null||i===void 0?void 0:i.call(s)},footer:()=>{var s,i;return(i=(s=this.$slots).footer)===null||i===void 0?void 0:i.call(s)}})]}})}});export{Nr as _,Mr as p,Tr as r};
