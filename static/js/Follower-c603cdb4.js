import{E as rt,i as $,aJ as lt,aK as it,aG as st,r as A,o as T,aF as V,b as D,aD as B,J as I,d as F,F as ut,bC as at,bD as dt,br as G,bE as _,bF as pt,bG as ht,w as M,ah as ft,U as E,ap as mt,t as X,bu as vt,aq as bt}from"./main-69cbe56a.js";import{b as ct}from"./next-frame-once-c806eabc.js";import{o as wt}from"./on-fonts-ready-cc098bbd.js";const xt=rt("n-internal-select-menu-body"),J="__disabled__";function U(n){const t=$(lt,null),e=$(it,null),i=$(st,null),u=$(xt,null),m=A();if(typeof document<"u"){m.value=document.fullscreenElement;const a=()=>{m.value=document.fullscreenElement};T(()=>{V("fullscreenchange",document,a)}),D(()=>{B("fullscreenchange",document,a)})}return I(()=>{var a;const{to:h}=n;return h!==void 0?h===!1?J:h===!0?m.value||"body":h:t!=null&&t.value?(a=t.value.$el)!==null&&a!==void 0?a:t.value:e!=null&&e.value?e.value:i!=null&&i.value?i.value:u!=null&&u.value?u.value:h!=null?h:m.value||"body"})}U.tdkey=J;U.propTo={type:[String,Object,Boolean],default:void 0};let x=null;function q(){if(x===null&&(x=document.getElementById("v-binder-view-measurer"),x===null)){x=document.createElement("div"),x.id="v-binder-view-measurer";const{style:n}=x;n.position="fixed",n.left="0",n.right="0",n.top="0",n.bottom="0",n.pointerEvents="none",n.visibility="hidden",document.body.appendChild(x)}return x.getBoundingClientRect()}function $t(n,t){const e=q();return{top:t,left:n,height:0,width:0,right:e.width-n,bottom:e.height-t}}function Y(n){const t=n.getBoundingClientRect(),e=q();return{left:t.left-e.left,top:t.top-e.top,bottom:e.height+e.top-t.bottom,right:e.width+e.left-t.right,width:t.width,height:t.height}}function yt(n){return n.nodeType===9?null:n.parentNode}function H(n){if(n===null)return null;const t=yt(n);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:e,overflowX:i,overflowY:u}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(e+u+i))return t}return H(t)}const Mt=F({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(n){var t;ut("VBinder",(t=at())===null||t===void 0?void 0:t.proxy);const e=$("VBinder",null),i=A(null),u=r=>{i.value=r,e&&n.syncTargetWithParent&&e.setTargetRef(r)};let m=[];const a=()=>{let r=i.value;for(;r=H(r),r!==null;)m.push(r);for(const b of m)V("scroll",b,c,!0)},h=()=>{for(const r of m)B("scroll",r,c,!0);m=[]},l=new Set,v=r=>{l.size===0&&a(),l.has(r)||l.add(r)},w=r=>{l.has(r)&&l.delete(r),l.size===0&&h()},c=()=>{ct(o)},o=()=>{l.forEach(r=>r())},s=new Set,p=r=>{s.size===0&&V("resize",window,f),s.has(r)||s.add(r)},d=r=>{s.has(r)&&s.delete(r),s.size===0&&B("resize",window,f)},f=()=>{s.forEach(r=>r())};return D(()=>{B("resize",window,f),h()}),{targetRef:i,setTargetRef:u,addScrollListener:v,removeScrollListener:w,addResizeListener:p,removeResizeListener:d}},render(){return dt("binder",this.$slots)}}),It=Mt,Dt=F({name:"Target",setup(){const{setTargetRef:n,syncTarget:t}=$("VBinder");return{syncTarget:t,setTargetDirective:{mounted:n,updated:n}}},render(){const{syncTarget:n,setTargetDirective:t}=this;return n?G(_("follower",this.$slots),[[t]]):_("follower",this.$slots)}}),{c:g}=pt(),gt="vueuc-style",z={top:"bottom",bottom:"top",left:"right",right:"left"},K={start:"end",center:"center",end:"start"},N={top:"height",bottom:"height",left:"width",right:"width"},zt={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Bt={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},At={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},k={top:!0,bottom:!1,left:!0,right:!1},P={top:"end",bottom:"start",left:"end",right:"start"};function Ct(n,t,e,i,u,m){if(!u||m)return{placement:n,top:0,left:0};const[a,h]=n.split("-");let l=h!=null?h:"center",v={top:0,left:0};const w=(s,p,d)=>{let f=0,r=0;const b=e[s]-t[p]-t[s];return b>0&&i&&(d?r=k[p]?b:-b:f=k[p]?b:-b),{left:f,top:r}},c=a==="left"||a==="right";if(l!=="center"){const s=At[n],p=z[s],d=N[s];if(e[d]>t[d]){if(t[s]+t[d]<e[d]){const f=(e[d]-t[d])/2;t[s]<f||t[p]<f?t[s]<t[p]?(l=K[h],v=w(d,p,c)):v=w(d,s,c):l="center"}}else e[d]<t[d]&&t[p]<0&&t[s]>t[p]&&(l=K[h])}else{const s=a==="bottom"||a==="top"?"left":"top",p=z[s],d=N[s],f=(e[d]-t[d])/2;(t[s]<f||t[p]<f)&&(t[s]>t[p]?(l=P[s],v=w(d,s,c)):(l=P[p],v=w(d,p,c)))}let o=a;return t[a]<e[N[a]]&&t[a]<t[z[a]]&&(o=z[a]),{placement:l!=="center"?`${o}-${l}`:o,left:v.left,top:v.top}}function Ot(n,t){return t?Bt[n]:zt[n]}function Et(n,t,e,i,u,m){if(m)switch(n){case"bottom-start":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left+e.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(e.top-t.top+e.height/2)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(e.top-t.top+e.height/2)}px`,left:`${Math.round(e.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left+e.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(n){case"bottom-start":return{top:`${Math.round(e.top-t.top+e.height+i)}px`,left:`${Math.round(e.left-t.left+u)}px`,transform:""};case"bottom-end":return{top:`${Math.round(e.top-t.top+e.height+i)}px`,left:`${Math.round(e.left-t.left+e.width+u)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(e.top-t.top+i)}px`,left:`${Math.round(e.left-t.left+u)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(e.top-t.top+i)}px`,left:`${Math.round(e.left-t.left+e.width+u)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(e.top-t.top+i)}px`,left:`${Math.round(e.left-t.left+e.width+u)}px`,transform:""};case"right-end":return{top:`${Math.round(e.top-t.top+e.height+i)}px`,left:`${Math.round(e.left-t.left+e.width+u)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(e.top-t.top+i)}px`,left:`${Math.round(e.left-t.left+u)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(e.top-t.top+e.height+i)}px`,left:`${Math.round(e.left-t.left+u)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(e.top-t.top+i)}px`,left:`${Math.round(e.left-t.left+e.width/2+u)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(e.top-t.top+e.height/2+i)}px`,left:`${Math.round(e.left-t.left+e.width+u)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(e.top-t.top+e.height/2+i)}px`,left:`${Math.round(e.left-t.left+u)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(e.top-t.top+e.height+i)}px`,left:`${Math.round(e.left-t.left+e.width/2+u)}px`,transform:"translateX(-50%)"}}}const Xt=g([g(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),g(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[g("> *",{pointerEvents:"all"})])]),Ft=F({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(n){const t=$("VBinder"),e=I(()=>n.enabled!==void 0?n.enabled:n.show),i=A(null),u=A(null),m=()=>{const{syncTrigger:o}=n;o.includes("scroll")&&t.addScrollListener(l),o.includes("resize")&&t.addResizeListener(l)},a=()=>{t.removeScrollListener(l),t.removeResizeListener(l)};T(()=>{e.value&&(l(),m())});const h=ht();Xt.mount({id:"vueuc/binder",head:!0,anchorMetaName:gt,ssr:h}),D(()=>{a()}),wt(()=>{e.value&&l()});const l=()=>{if(!e.value)return;const o=i.value;if(o===null)return;const s=t.targetRef,{x:p,y:d,overlap:f}=n,r=p!==void 0&&d!==void 0?$t(p,d):Y(s);o.style.setProperty("--v-target-width",`${Math.round(r.width)}px`),o.style.setProperty("--v-target-height",`${Math.round(r.height)}px`);const{width:b,minWidth:C,placement:S,internalShift:Q,flip:Z}=n;o.setAttribute("v-placement",S),f?o.setAttribute("v-overlap",""):o.removeAttribute("v-overlap");const{style:y}=o;b==="target"?y.width=`${r.width}px`:b!==void 0?y.width=b:y.width="",C==="target"?y.minWidth=`${r.width}px`:C!==void 0?y.minWidth=C:y.minWidth="";const R=Y(o),tt=Y(u.value),{left:j,top:L,placement:O}=Ct(S,r,R,Q,Z,f),W=Ot(O,f),{left:et,top:nt,transform:ot}=Et(O,tt,r,L,j,f);o.setAttribute("v-placement",O),o.style.setProperty("--v-offset-left",`${Math.round(j)}px`),o.style.setProperty("--v-offset-top",`${Math.round(L)}px`),o.style.transform=`translateX(${et}) translateY(${nt}) ${ot}`,o.style.setProperty("--v-transform-origin",W),o.style.transformOrigin=W};M(e,o=>{o?(m(),v()):a()});const v=()=>{ft().then(l).catch(o=>console.error(o))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(o=>{M(E(n,o),l)}),["teleportDisabled"].forEach(o=>{M(E(n,o),v)}),M(E(n,"syncTrigger"),o=>{o.includes("resize")?t.addResizeListener(l):t.removeResizeListener(l),o.includes("scroll")?t.addScrollListener(l):t.removeScrollListener(l)});const w=mt(),c=I(()=>{const{to:o}=n;if(o!==void 0)return o;w.value});return{VBinder:t,mergedEnabled:e,offsetContainerRef:u,followerRef:i,mergedTo:c,syncPosition:l}},render(){return X(bt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var n,t;const e=X("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[X("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n))]);return this.zindexable?G(e,[[vt,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):e}})}});export{It as V,Dt as a,Ft as b,U as u};