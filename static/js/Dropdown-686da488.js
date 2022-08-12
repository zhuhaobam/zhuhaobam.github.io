import{r as _e,N as De,p as we}from"./Popover-c039ea4f.js";import{r as V,w as ue,G as Ee,ay as Te,az as X,aA as Q,aB as Fe,aC as $e,aD as Ge,d as B,I as v,a1 as ce,a9 as W,aE as me,H as R,a3 as J,ag as Y,aF as Me,aG as xe,af as ee,N as je,aH as ze,R as Be,aI as He,aJ as Ue,aK as qe,$ as F,aL as Ve,a7 as Z,ak as he,a0 as M,a6 as z,ab as j,a2 as We,O as ke,aM as Ze,ac as re,aN as q,a5 as Je,aj as Xe}from"./main-1729a148.js";import{V as Qe,a as Ye,b as en}from"./Follower-861fc24f.js";import{u as nn}from"./use-merged-state-426a68fe.js";function ve(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function tn(e){return n=>{n?e.value=n.$el:e.value=null}}function on(e,n,t){if(!n)return e;const o=V(e.value);let r=null;return ue(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function rn(e={},n){const t=Ee({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,i=d=>{switch(d.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(u=>{if(u!==d.key)return;const c=o[u];if(typeof c=="function")c(d);else{const{stop:f=!1,prevent:x=!1}=c;f&&d.stopPropagation(),x&&d.preventDefault(),c.handler(d)}})},a=d=>{switch(d.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(u=>{if(u!==d.key)return;const c=r[u];if(typeof c=="function")c(d);else{const{stop:f=!1,prevent:x=!1}=c;f&&d.stopPropagation(),x&&d.preventDefault(),c.handler(d)}})},s=()=>{(n===void 0||n.value)&&(X("keydown",document,i),X("keyup",document,a)),n!==void 0&&ue(n,d=>{d?(X("keydown",document,i),X("keyup",document,a)):(Q("keydown",document,i),Q("keyup",document,a))})};return Fe()?($e(s),Ge(()=>{(n===void 0||n.value)&&(Q("keydown",document,i),Q("keyup",document,a))})):s(),Te(t)}const an=B({name:"ChevronRight",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function ye(e){return Array.isArray(e)?e:[e]}const se={STOP:"STOP"};function Se(e,n){const t=n(e);e.children!==void 0&&t!==se.STOP&&e.children.forEach(o=>Se(o,n))}function dn(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?a=>{a.isLeaf||(o.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),i(a.children))};function i(a){a.forEach(r)}return i(e),o}function sn(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function ln(e){return e.children}function un(e){return e.key}function cn(){return!1}function fn(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function pn(e){return e.disabled===!0}function hn(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function ie(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function ae(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function vn(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function yn(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function gn(e){return(e==null?void 0:e.type)==="group"}class bn extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function wn(e,n,t,o){return ne(n.concat(e),t,o,!1)}function mn(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function xn(e,n,t,o){const r=ne(n,t,o,!1),i=ne(e,t,o,!0),a=mn(e,t),s=[];return r.forEach(d=>{(i.has(d)||a.has(d))&&s.push(d)}),s.forEach(d=>r.delete(d)),r}function de(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:i,cascade:a,leafOnly:s,checkStrategy:d,allowNotLoaded:u}=e;if(!a)return o!==void 0?{checkedKeys:vn(t,o),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:yn(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:c}=n;let f;r!==void 0?f=xn(r,t,n,u):o!==void 0?f=wn(o,t,n,u):f=ne(t,n,u,!1);const x=d==="parent",O=d==="child"||s,w=f,_=new Set,K=Math.max.apply(null,Array.from(c.keys()));for(let A=K;A>=0;A-=1){const $=A===0,E=c.get(A);for(const l of E){if(l.isLeaf)continue;const{key:p,shallowLoaded:P}=l;if(O&&P&&l.children.forEach(m=>{!m.disabled&&!m.isLeaf&&m.shallowLoaded&&w.has(m.key)&&w.delete(m.key)}),l.disabled||!P)continue;let L=!0,I=!1,C=!0;for(const m of l.children){const T=m.key;if(!m.disabled){if(C&&(C=!1),w.has(T))I=!0;else if(_.has(T)){I=!0,L=!1;break}else if(L=!1,I)break}}L&&!C?(x&&l.children.forEach(m=>{!m.disabled&&w.has(m.key)&&w.delete(m.key)}),w.add(p)):I&&_.add(p),$&&O&&w.has(p)&&w.delete(p)}}return{checkedKeys:Array.from(w),indeterminateKeys:Array.from(_)}}function ne(e,n,t,o){const{treeNodeMap:r,getChildren:i}=n,a=new Set,s=new Set(e);return e.forEach(d=>{const u=r.get(d);u!==void 0&&Se(u,c=>{if(c.disabled)return se.STOP;const{key:f}=c;if(!a.has(f)&&(a.add(f),s.add(f),hn(c.rawNode,i))){if(o)return se.STOP;if(!t)throw new bn}})}),s}function kn(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const i=o.treeNodeMap;let a=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(n||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(d=>d.key),s}function Sn(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function Nn(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function ge(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?Pn:Nn,i={reverse:n==="prev"};let a=!1,s=null;function d(u){if(u!==null){if(u===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!u.disabled||o)&&!u.ignored&&!u.isGroup){s=u;return}if(u.isGroup){const c=fe(u,i);c!==null?s=c:d(r(u,t))}else{const c=r(u,!1);if(c!==null)d(c);else{const f=Kn(u);f!=null&&f.isGroup?d(r(f,t)):t&&d(r(u,!0))}}}}return d(e),s}function Pn(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function Kn(e){return e.parent}function fe(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,i=t?r-1:0,a=t?-1:r,s=t?-1:1;for(let d=i;d!==a;d+=s){const u=o[d];if(!u.disabled&&!u.ignored)if(u.isGroup){const c=fe(u,n);if(c!==null)return c}else return u}}return null}const Cn={getChild(){return this.ignored?null:fe(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return ge(this,"next",e)},getPrev(e={}){return ge(this,"prev",e)}};function Rn(e,n){const t=n?new Set(n):void 0,o=[];function r(i){i.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&r(a.children)})}return r(e),o}function An(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Ne(e,n,t,o,r,i=null,a=0){const s=[];return e.forEach((d,u)=>{var c;const f=Object.create(o);if(f.rawNode=d,f.siblings=s,f.level=a,f.index=u,f.isFirstChild=u===0,f.isLastChild=u+1===e.length,f.parent=i,!f.ignored){const x=r(d);Array.isArray(x)&&(f.children=Ne(x,n,t,o,r,f,a+1))}s.push(f),n.set(f.key,f),t.has(a)||t.set(a,[]),(c=t.get(a))===null||c===void 0||c.push(f)}),s}function In(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:i=pn,getIgnored:a=cn,getIsGroup:s=gn,getKey:d=un}=n,u=(t=n.getChildren)!==null&&t!==void 0?t:ln,c=n.ignoreEmptyChildren?l=>{const p=u(l);return Array.isArray(p)?p.length?p:null:p}:u,f=Object.assign({get key(){return d(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return sn(this.rawNode,c)},get shallowLoaded(){return fn(this.rawNode,c)},get ignored(){return a(this.rawNode)},contains(l){return An(this,l)}},Cn),x=Ne(e,o,r,f,c);function O(l){if(l==null)return null;const p=o.get(l);return p&&!p.isGroup&&!p.ignored?p:null}function w(l){if(l==null)return null;const p=o.get(l);return p&&!p.ignored?p:null}function _(l,p){const P=w(l);return P?P.getPrev(p):null}function K(l,p){const P=w(l);return P?P.getNext(p):null}function A(l){const p=w(l);return p?p.getParent():null}function $(l){const p=w(l);return p?p.getChild():null}const E={treeNodes:x,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:c,getFlattenedNodes(l){return Rn(x,l)},getNode:O,getPrev:_,getNext:K,getParent:A,getChild:$,getFirstAvailableNode(){return Sn(x)},getPath(l,p={}){return kn(l,p,E)},getCheckedKeys(l,p={}){const{cascade:P=!0,leafOnly:L=!1,checkStrategy:I="all",allowNotLoaded:C=!1}=p;return de({checkedKeys:ie(l),indeterminateKeys:ae(l),cascade:P,leafOnly:L,checkStrategy:I,allowNotLoaded:C},E)},check(l,p,P={}){const{cascade:L=!0,leafOnly:I=!1,checkStrategy:C="all",allowNotLoaded:m=!1}=P;return de({checkedKeys:ie(p),indeterminateKeys:ae(p),keysToCheck:l==null?[]:ye(l),cascade:L,leafOnly:I,checkStrategy:C,allowNotLoaded:m},E)},uncheck(l,p,P={}){const{cascade:L=!0,leafOnly:I=!1,checkStrategy:C="all",allowNotLoaded:m=!1}=P;return de({checkedKeys:ie(p),indeterminateKeys:ae(p),keysToUncheck:l==null?[]:ye(l),cascade:L,leafOnly:I,checkStrategy:C,allowNotLoaded:m},E)},getNonLeafKeys(l={}){return dn(x,l)}};return E}const Pe=B({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return v("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),pe=ce("n-dropdown-menu"),te=ce("n-dropdown"),be=ce("n-dropdown-option");function le(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function On(e){return e.type==="group"}function Ke(e){return e.type==="divider"}function Ln(e){return e.type==="render"}const Ce=B({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=W(te),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:d,renderLabelRef:u,renderIconRef:c,labelFieldRef:f,childrenFieldRef:x,renderOptionRef:O,nodePropsRef:w,menuPropsRef:_}=n,K=W(be,null),A=W(pe),$=W(me),E=R(()=>e.tmNode.rawNode),l=R(()=>{const{value:y}=x;return le(e.tmNode.rawNode,y)}),p=R(()=>{const{disabled:y}=e.tmNode;return y}),P=R(()=>{if(!l.value)return!1;const{key:y,disabled:N}=e.tmNode;if(N)return!1;const{value:G}=t,{value:H}=o,{value:oe}=r,{value:U}=i;return G!==null?U.includes(y):H!==null?U.includes(y)&&U[U.length-1]!==y:oe!==null?U.includes(y):!1}),L=R(()=>o.value===null&&!s.value),I=on(P,300,L),C=R(()=>!!(K!=null&&K.enteringSubmenuRef.value)),m=V(!1);J(be,{enteringSubmenuRef:m});function T(){m.value=!0}function h(){m.value=!1}function S(){const{parentKey:y,tmNode:N}=e;N.disabled||!d.value||(r.value=y,o.value=null,t.value=N.key)}function b(){const{tmNode:y}=e;y.disabled||!d.value||t.value!==y.key&&S()}function g(y){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:N}=y;N&&!ve({target:N},"dropdownOption")&&!ve({target:N},"scrollbarRail")&&(t.value=null)}function D(){const{value:y}=l,{tmNode:N}=e;!d.value||!y&&!N.disabled&&(n.doSelect(N.key,N.rawNode),n.doUpdateShow(!1))}return{labelField:f,renderLabel:u,renderIcon:c,siblingHasIcon:A.showIconRef,siblingHasSubmenu:A.hasSubmenuRef,menuProps:_,popoverBody:$,animated:s,mergedShowSubmenu:R(()=>I.value&&!C.value),rawNode:E,hasSubmenu:l,pending:Y(()=>{const{value:y}=i,{key:N}=e.tmNode;return y.includes(N)}),childActive:Y(()=>{const{value:y}=a,{key:N}=e.tmNode,G=y.findIndex(H=>N===H);return G===-1?!1:G<y.length-1}),active:Y(()=>{const{value:y}=a,{key:N}=e.tmNode,G=y.findIndex(H=>N===H);return G===-1?!1:G===y.length-1}),mergedDisabled:p,renderOption:O,nodeProps:w,handleClick:D,handleMouseMove:b,handleMouseEnter:S,handleMouseLeave:g,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:h}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:d,renderIcon:u,renderOption:c,nodeProps:f,props:x,scrollable:O}=this;let w=null;if(r){const $=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);w=v(Re,Object.assign({},$,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const _={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},K=f==null?void 0:f(o),A=v("div",Object.assign({class:[`${i}-dropdown-option`,K==null?void 0:K.class],"data-dropdown-option":!0},K),v("div",xe(_,x),[v("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[u?u(o):ee(o.icon)]),v("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},d?d(o):ee((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),v("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?v(je,null,{default:()=>v(an,null)}):null)]),this.hasSubmenu?v(Qe,null,{default:()=>[v(Ye,null,{default:()=>v("div",{class:`${i}-dropdown-offset-container`},v(en,{show:this.mergedShowSubmenu,placement:this.placement,to:O&&this.popoverBody||void 0,teleportDisabled:!O},{default:()=>v("div",{class:`${i}-dropdown-menu-wrapper`},t?v(Me,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>w}):w)}))})]}):null);return c?c({node:A,option:o}):A}}),_n=B({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=W(pe),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:r,renderOptionRef:i}=W(te);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,d=v("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(s)),v("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},v("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},ee(s.icon)),v("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):ee((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),v("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:d,option:s}):d}}),Dn=B({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return v(Be,null,v(_n,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>Ke(r.rawNode)?v(Pe,{clsPrefix:t,key:r.key}):r.isGroup?(ze("dropdown","`group` node is not allowed to be put in `group` node."),null):v(Ce,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})))}}),En=B({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return v("div",n,[e==null?void 0:e()])}}),Re=B({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=W(te);J(pe,{showIconRef:R(()=>{const r=n.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>r?r(d):d.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:R(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>le(d,r));const{rawNode:s}=i;return le(s,r)})})});const o=V(null);return J(Ue,null),J(qe,null),J(me,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(r=>{const{rawNode:i}=r;return Ln(i)?v(En,{tmNode:r,key:r.key}):Ke(i)?v(Pe,{clsPrefix:n,key:r.key}):On(i)?v(Dn,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):v(Ce,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return v("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?v(He,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?_e({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),Tn=F("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ve(),F("dropdown-option",`
 position: relative;
 `,[Z("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[Z("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),F("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[Z("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),he("disabled",[M("pending",{color:"var(--n-option-text-color-hover)"},[z("prefix, suffix",{color:"var(--n-option-text-color-hover)"}),Z("&::before","background-color: var(--n-option-color-hover);")]),M("active",{color:"var(--n-option-text-color-active)"},[z("prefix, suffix",{color:"var(--n-option-text-color-active)"}),Z("&::before","background-color: var(--n-option-color-active);")]),M("child-active",{color:"var(--n-option-text-color-child-active)"},[z("prefix, suffix",{color:"var(--n-option-text-color-child-active)"})])]),M("disabled",{cursor:"not-allowed",opacity:"var(--n-option-opacity-disabled)"}),M("group",{fontSize:"calc(var(--n-font-size) - 1px)",color:"var(--n-group-header-text-color)"},[z("prefix",{width:"calc(var(--n-option-prefix-width) / 2)"},[M("show-icon",{width:"calc(var(--n-option-icon-prefix-width) / 2)"})])]),z("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 `,[M("show-icon",{width:"var(--n-option-icon-prefix-width)"}),F("icon",{fontSize:"var(--n-option-icon-size)"})]),z("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),z("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 `,[M("has-submenu",{width:"var(--n-option-icon-suffix-width)"}),F("icon",{fontSize:"var(--n-option-icon-size)"})]),F("dropdown-menu","pointer-events: all;")]),F("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),F("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),F("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),Z(">",[F("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),he("scrollable",`
 padding: var(--n-padding);
 `),M("scrollable",[z("content",`
 padding: var(--n-padding);
 `)])]),Fn={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},$n=Object.keys(we),Gn=Object.assign(Object.assign(Object.assign({},we),Fn),ke.props),Hn=B({name:"Dropdown",inheritAttrs:!1,props:Gn,setup(e){const n=V(!1),t=nn(j(e,"show"),n),o=R(()=>{const{keyField:h,childrenField:S}=e;return In(e.options,{getKey(b){return b[h]},getDisabled(b){return b.disabled===!0},getIgnored(b){return b.type==="divider"||b.type==="render"},getChildren(b){return b[S]}})}),r=R(()=>o.value.treeNodes),i=V(null),a=V(null),s=V(null),d=R(()=>{var h,S,b;return(b=(S=(h=i.value)!==null&&h!==void 0?h:a.value)!==null&&S!==void 0?S:s.value)!==null&&b!==void 0?b:null}),u=R(()=>o.value.getPath(d.value).keyPath),c=R(()=>o.value.getPath(e.value).keyPath),f=Y(()=>e.keyboard&&t.value);rn({keydown:{ArrowUp:{prevent:!0,handler:p},ArrowRight:{prevent:!0,handler:l},ArrowDown:{prevent:!0,handler:P},ArrowLeft:{prevent:!0,handler:E},Escape:$},keyup:{Enter:L}},f);const{mergedClsPrefixRef:x,inlineThemeDisabled:O}=We(e),w=ke("Dropdown","-dropdown",Tn,Ze,e,x);J(te,{labelFieldRef:j(e,"labelField"),childrenFieldRef:j(e,"childrenField"),renderLabelRef:j(e,"renderLabel"),renderIconRef:j(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:u,activeKeyPathRef:c,animatedRef:j(e,"animated"),mergedShowRef:t,nodePropsRef:j(e,"nodeProps"),renderOptionRef:j(e,"renderOption"),menuPropsRef:j(e,"menuProps"),doSelect:_,doUpdateShow:K}),ue(t,h=>{!e.animated&&!h&&A()});function _(h,S){const{onSelect:b}=e;b&&re(b,h,S)}function K(h){const{"onUpdate:show":S,onUpdateShow:b}=e;S&&re(S,h),b&&re(b,h),n.value=h}function A(){i.value=null,a.value=null,s.value=null}function $(){K(!1)}function E(){C("left")}function l(){C("right")}function p(){C("up")}function P(){C("down")}function L(){const h=I();h!=null&&h.isLeaf&&(_(h.key,h.rawNode),K(!1))}function I(){var h;const{value:S}=o,{value:b}=d;return!S||b===null?null:(h=S.getNode(b))!==null&&h!==void 0?h:null}function C(h){const{value:S}=d,{value:{getFirstAvailableNode:b}}=o;let g=null;if(S===null){const D=b();D!==null&&(g=D.key)}else{const D=I();if(D){let y;switch(h){case"down":y=D.getNext();break;case"up":y=D.getPrev();break;case"right":y=D.getChild();break;case"left":y=D.getParent();break}y&&(g=y.key)}}g!==null&&(i.value=null,a.value=g)}const m=R(()=>{const{size:h,inverted:S}=e,{common:{cubicBezierEaseInOut:b},self:g}=w.value,{padding:D,dividerColor:y,borderRadius:N,optionOpacityDisabled:G,[q("optionIconSuffixWidth",h)]:H,[q("optionSuffixWidth",h)]:oe,[q("optionIconPrefixWidth",h)]:U,[q("optionPrefixWidth",h)]:Ae,[q("fontSize",h)]:Ie,[q("optionHeight",h)]:Oe,[q("optionIconSize",h)]:Le}=g,k={"--n-bezier":b,"--n-font-size":Ie,"--n-padding":D,"--n-border-radius":N,"--n-option-height":Oe,"--n-option-prefix-width":Ae,"--n-option-icon-prefix-width":U,"--n-option-suffix-width":oe,"--n-option-icon-suffix-width":H,"--n-option-icon-size":Le,"--n-divider-color":y,"--n-option-opacity-disabled":G};return S?(k["--n-color"]=g.colorInverted,k["--n-option-color-hover"]=g.optionColorHoverInverted,k["--n-option-color-active"]=g.optionColorActiveInverted,k["--n-option-text-color"]=g.optionTextColorInverted,k["--n-option-text-color-hover"]=g.optionTextColorHoverInverted,k["--n-option-text-color-active"]=g.optionTextColorActiveInverted,k["--n-option-text-color-child-active"]=g.optionTextColorChildActiveInverted,k["--n-prefix-color"]=g.prefixColorInverted,k["--n-suffix-color"]=g.suffixColorInverted,k["--n-group-header-text-color"]=g.groupHeaderTextColorInverted):(k["--n-color"]=g.color,k["--n-option-color-hover"]=g.optionColorHover,k["--n-option-color-active"]=g.optionColorActive,k["--n-option-text-color"]=g.optionTextColor,k["--n-option-text-color-hover"]=g.optionTextColorHover,k["--n-option-text-color-active"]=g.optionTextColorActive,k["--n-option-text-color-child-active"]=g.optionTextColorChildActive,k["--n-prefix-color"]=g.prefixColor,k["--n-suffix-color"]=g.suffixColor,k["--n-group-header-text-color"]=g.groupHeaderTextColor),k}),T=O?Je("dropdown",R(()=>`${e.size[0]}${e.inverted?"i":""}`),m,e):void 0;return{mergedClsPrefix:x,mergedTheme:w,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{!e.animated||A()},doUpdateShow:K,cssVars:O?void 0:m,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(o,r,i,a,s)=>{var d;const{mergedClsPrefix:u,menuProps:c}=this;(d=this.onRender)===null||d===void 0||d.call(this);const f=(c==null?void 0:c(void 0,this.tmNodes.map(O=>O.rawNode)))||{},x={ref:tn(r),class:[o,`${u}-dropdown`,this.themeClass],clsPrefix:u,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return v(Re,xe(this.$attrs,x,f))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return v(De,Object.assign({},Xe(this.$props,$n),t),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}});export{an as C,Hn as _,In as c};
