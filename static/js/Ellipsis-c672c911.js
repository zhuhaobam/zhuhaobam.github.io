import{S,T as _,aG as $,W as j,ai as E,X as T,d as B,$ as D,Z as y,r as u,G as x,H as f,aO as N}from"./main-72de468e.js";import{_ as H}from"./Tooltip-5b1c160d.js";const I=S({name:"Ellipsis",common:_,peers:{Tooltip:$}}),M=I,P=j("ellipsis",{overflow:"hidden"},[E("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),T("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),T("cursor-pointer",`
 cursor: pointer;
 `)]);function k(i){return`${i}-ellipsis--line-clamp`}function w(i,s){return`${i}-ellipsis--cursor-${s}`}const G=Object.assign(Object.assign({},y.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),X=B({name:"Ellipsis",inheritAttrs:!1,props:G,setup(i,{slots:s,attrs:a}){const{mergedClsPrefixRef:t}=D(i),r=y("Ellipsis","-ellipsis",P,M,i,t),p=u(null),m=u(null),g=u(null),c=u(!1),v=x(()=>{const{lineClamp:e}=i,{value:n}=c;return e!==void 0?{textOverflow:"","-webkit-line-clamp":n?"":e}:{textOverflow:n?"":"ellipsis","-webkit-line-clamp":""}});function h(){let e=!1;const{value:n}=c;if(n)return!0;const{value:l}=p;if(l){const{lineClamp:o}=i;if(O(l),o!==void 0)e=l.scrollHeight<=l.offsetHeight;else{const{value:b}=m;b&&(e=b.getBoundingClientRect().width<=l.getBoundingClientRect().width)}L(l,e)}return e}const C=x(()=>i.expandTrigger==="click"?()=>{var e;const{value:n}=c;n&&((e=g.value)===null||e===void 0||e.setShow(!1)),c.value=!n}:void 0),R=()=>f("span",Object.assign({},N(a,{class:[`${t.value}-ellipsis`,i.lineClamp!==void 0?k(t.value):void 0,i.expandTrigger==="click"?w(t.value,"pointer"):void 0],style:v.value}),{ref:"triggerRef",onClick:C.value,onMouseenter:i.expandTrigger==="click"?h:void 0}),i.lineClamp?s:f("span",{ref:"triggerInnerRef"},s));function O(e){if(!e)return;const n=v.value,l=k(t.value);i.lineClamp!==void 0?d(e,l,"add"):d(e,l,"remove");for(const o in n)e.style[o]!==n[o]&&(e.style[o]=n[o])}function L(e,n){const l=w(t.value,"pointer");i.expandTrigger==="click"&&!n?d(e,l,"add"):d(e,l,"remove")}function d(e,n,l){l==="add"?e.classList.contains(n)||e.classList.add(n):e.classList.contains(n)&&e.classList.remove(n)}return{mergedTheme:r,triggerRef:p,triggerInnerRef:m,tooltipRef:g,handleClick:C,renderTrigger:R,getTooltipDisabled:h}},render(){var i;const{tooltip:s,renderTrigger:a,$slots:t}=this;if(s){const{mergedTheme:r}=this;return f(H,Object.assign({ref:"tooltipRef",placement:"top"},s,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:a,default:(i=t.tooltip)!==null&&i!==void 0?i:t.default})}else return a()}});export{X as N};