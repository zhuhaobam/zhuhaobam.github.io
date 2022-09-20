import{r as _e,_ as Oe,p as ye}from"./Popover-4c95f1c1.js";import{r as q,w as ge,d as W,t as y,F as se,i as V,aB as be,c as C,G as X,K as Z,a8 as Le,ar as me,H as J,N as De,aC as Ee,I as Te,aD as Fe,aE as $e,aF as Ge,m as F,an as ze,P as Q,R as ce,n as z,Q as M,V as j,q as je,p as we,aG as Me,W as te,aw as U,s as Be,O as He}from"./main-2bbc1e4d.js";import{C as Ue}from"./ChevronRight-e29c88cc.js";import{h as fe,u as qe}from"./use-keyboard-6ee3d433.js";import{V as Ve,a as We,b as Qe}from"./Follower-24c12859.js";import{u as Xe}from"./use-merged-state-9f4efc58.js";function Ze(e){return n=>{n?e.value=n.$el:e.value=null}}function Je(e,n,t){if(!n)return e;const o=q(e.value);let r=null;return ge(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function pe(e){return Array.isArray(e)?e:[e]}const de={STOP:"STOP"};function xe(e,n){const t=n(e);e.children!==void 0&&t!==de.STOP&&e.children.forEach(o=>xe(o,n))}function Ye(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?d=>{d.isLeaf||(o.push(d.key),i(d.children))}:d=>{d.isLeaf||(d.isGroup||o.push(d.key),i(d.children))};function i(d){d.forEach(r)}return i(e),o}function en(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function nn(e){return e.children}function tn(e){return e.key}function on(){return!1}function rn(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function dn(e){return e.disabled===!0}function ln(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function oe(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function re(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function sn(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function an(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function un(e){return(e==null?void 0:e.type)==="group"}class cn extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function fn(e,n,t,o){return Y(n.concat(e),t,o,!1)}function pn(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function hn(e,n,t,o){const r=Y(n,t,o,!1),i=Y(e,t,o,!0),d=pn(e,t),l=[];return r.forEach(s=>{(i.has(s)||d.has(s))&&l.push(s)}),l.forEach(s=>r.delete(s)),r}function ie(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:i,cascade:d,leafOnly:l,checkStrategy:s,allowNotLoaded:u}=e;if(!d)return o!==void 0?{checkedKeys:sn(t,o),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:an(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:p}=n;let f;r!==void 0?f=hn(r,t,n,u):o!==void 0?f=fn(o,t,n,u):f=Y(t,n,u,!1);const k=s==="parent",_=s==="child"||l,m=f,L=new Set,K=Math.max.apply(null,Array.from(p.keys()));for(let A=K;A>=0;A-=1){const $=A===0,E=p.get(A);for(const a of E){if(a.isLeaf)continue;const{key:c,shallowLoaded:P}=a;if(_&&P&&a.children.forEach(w=>{!w.disabled&&!w.isLeaf&&w.shallowLoaded&&m.has(w.key)&&m.delete(w.key)}),a.disabled||!P)continue;let O=!0,I=!1,R=!0;for(const w of a.children){const T=w.key;if(!w.disabled){if(R&&(R=!1),m.has(T))I=!0;else if(L.has(T)){I=!0,O=!1;break}else if(O=!1,I)break}}O&&!R?(k&&a.children.forEach(w=>{!w.disabled&&m.has(w.key)&&m.delete(w.key)}),m.add(c)):I&&L.add(c),$&&_&&m.has(c)&&m.delete(c)}}return{checkedKeys:Array.from(m),indeterminateKeys:Array.from(L)}}function Y(e,n,t,o){const{treeNodeMap:r,getChildren:i}=n,d=new Set,l=new Set(e);return e.forEach(s=>{const u=r.get(s);u!==void 0&&xe(u,p=>{if(p.disabled)return de.STOP;const{key:f}=p;if(!d.has(f)&&(d.add(f),l.add(f),ln(p.rawNode,i))){if(o)return de.STOP;if(!t)throw new cn}})}),l}function vn(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const i=o.treeNodeMap;let d=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const l={keyPath:[],treeNodePath:[],treeNode:d};if(d!=null&&d.ignored)return l.treeNode=null,l;for(;d;)!d.ignored&&(n||!d.isGroup)&&l.treeNodePath.push(d),d=d.parent;return l.treeNodePath.reverse(),t||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(s=>s.key),l}function yn(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function gn(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function he(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?bn:gn,i={reverse:n==="prev"};let d=!1,l=null;function s(u){if(u!==null){if(u===e){if(!d)d=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!u.disabled||o)&&!u.ignored&&!u.isGroup){l=u;return}if(u.isGroup){const p=ae(u,i);p!==null?l=p:s(r(u,t))}else{const p=r(u,!1);if(p!==null)s(p);else{const f=mn(u);f!=null&&f.isGroup?s(r(f,t)):t&&s(r(u,!0))}}}}return s(e),l}function bn(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function mn(e){return e.parent}function ae(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,i=t?r-1:0,d=t?-1:r,l=t?-1:1;for(let s=i;s!==d;s+=l){const u=o[s];if(!u.disabled&&!u.ignored)if(u.isGroup){const p=ae(u,n);if(p!==null)return p}else return u}}return null}const wn={getChild(){return this.ignored?null:ae(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return he(this,"next",e)},getPrev(e={}){return he(this,"prev",e)}};function xn(e,n){const t=n?new Set(n):void 0,o=[];function r(i){i.forEach(d=>{o.push(d),!(d.isLeaf||!d.children||d.ignored)&&(d.isGroup||t===void 0||t.has(d.key))&&r(d.children)})}return r(e),o}function Sn(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Se(e,n,t,o,r,i=null,d=0){const l=[];return e.forEach((s,u)=>{var p;const f=Object.create(o);if(f.rawNode=s,f.siblings=l,f.level=d,f.index=u,f.isFirstChild=u===0,f.isLastChild=u+1===e.length,f.parent=i,!f.ignored){const k=r(s);Array.isArray(k)&&(f.children=Se(k,n,t,o,r,f,d+1))}l.push(f),n.set(f.key,f),t.has(d)||t.set(d,[]),(p=t.get(d))===null||p===void 0||p.push(f)}),l}function Nn(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:i=dn,getIgnored:d=on,getIsGroup:l=un,getKey:s=tn}=n,u=(t=n.getChildren)!==null&&t!==void 0?t:nn,p=n.ignoreEmptyChildren?a=>{const c=u(a);return Array.isArray(c)?c.length?c:null:c}:u,f=Object.assign({get key(){return s(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return en(this.rawNode,p)},get shallowLoaded(){return rn(this.rawNode,p)},get ignored(){return d(this.rawNode)},contains(a){return Sn(this,a)}},wn),k=Se(e,o,r,f,p);function _(a){if(a==null)return null;const c=o.get(a);return c&&!c.isGroup&&!c.ignored?c:null}function m(a){if(a==null)return null;const c=o.get(a);return c&&!c.ignored?c:null}function L(a,c){const P=m(a);return P?P.getPrev(c):null}function K(a,c){const P=m(a);return P?P.getNext(c):null}function A(a){const c=m(a);return c?c.getParent():null}function $(a){const c=m(a);return c?c.getChild():null}const E={treeNodes:k,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:p,getFlattenedNodes(a){return xn(k,a)},getNode:_,getPrev:L,getNext:K,getParent:A,getChild:$,getFirstAvailableNode(){return yn(k)},getPath(a,c={}){return vn(a,c,E)},getCheckedKeys(a,c={}){const{cascade:P=!0,leafOnly:O=!1,checkStrategy:I="all",allowNotLoaded:R=!1}=c;return ie({checkedKeys:oe(a),indeterminateKeys:re(a),cascade:P,leafOnly:O,checkStrategy:I,allowNotLoaded:R},E)},check(a,c,P={}){const{cascade:O=!0,leafOnly:I=!1,checkStrategy:R="all",allowNotLoaded:w=!1}=P;return ie({checkedKeys:oe(c),indeterminateKeys:re(c),keysToCheck:a==null?[]:pe(a),cascade:O,leafOnly:I,checkStrategy:R,allowNotLoaded:w},E)},uncheck(a,c,P={}){const{cascade:O=!0,leafOnly:I=!1,checkStrategy:R="all",allowNotLoaded:w=!1}=P;return ie({checkedKeys:oe(c),indeterminateKeys:re(c),keysToUncheck:a==null?[]:pe(a),cascade:O,leafOnly:I,checkStrategy:R,allowNotLoaded:w},E)},getNonLeafKeys(a={}){return Ye(k,a)}};return E}const Ne=W({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return y("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ue=se("n-dropdown-menu"),ee=se("n-dropdown"),ve=se("n-dropdown-option");function le(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function kn(e){return e.type==="group"}function ke(e){return e.type==="divider"}function Pn(e){return e.type==="render"}const Pe=W({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=V(ee),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:d,animatedRef:l,mergedShowRef:s,renderLabelRef:u,renderIconRef:p,labelFieldRef:f,childrenFieldRef:k,renderOptionRef:_,nodePropsRef:m,menuPropsRef:L}=n,K=V(ve,null),A=V(ue),$=V(be),E=C(()=>e.tmNode.rawNode),a=C(()=>{const{value:v}=k;return le(e.tmNode.rawNode,v)}),c=C(()=>{const{disabled:v}=e.tmNode;return v}),P=C(()=>{if(!a.value)return!1;const{key:v,disabled:N}=e.tmNode;if(N)return!1;const{value:G}=t,{value:B}=o,{value:ne}=r,{value:H}=i;return G!==null?H.includes(v):B!==null?H.includes(v)&&H[H.length-1]!==v:ne!==null?H.includes(v):!1}),O=C(()=>o.value===null&&!l.value),I=Je(P,300,O),R=C(()=>!!(K!=null&&K.enteringSubmenuRef.value)),w=q(!1);X(ve,{enteringSubmenuRef:w});function T(){w.value=!0}function h(){w.value=!1}function S(){const{parentKey:v,tmNode:N}=e;N.disabled||!s.value||(r.value=v,o.value=null,t.value=N.key)}function b(){const{tmNode:v}=e;v.disabled||!s.value||t.value!==v.key&&S()}function g(v){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:N}=v;N&&!fe({target:N},"dropdownOption")&&!fe({target:N},"scrollbarRail")&&(t.value=null)}function D(){const{value:v}=a,{tmNode:N}=e;!s.value||!v&&!N.disabled&&(n.doSelect(N.key,N.rawNode),n.doUpdateShow(!1))}return{labelField:f,renderLabel:u,renderIcon:p,siblingHasIcon:A.showIconRef,siblingHasSubmenu:A.hasSubmenuRef,menuProps:L,popoverBody:$,animated:l,mergedShowSubmenu:C(()=>I.value&&!R.value),rawNode:E,hasSubmenu:a,pending:Z(()=>{const{value:v}=i,{key:N}=e.tmNode;return v.includes(N)}),childActive:Z(()=>{const{value:v}=d,{key:N}=e.tmNode,G=v.findIndex(B=>N===B);return G===-1?!1:G<v.length-1}),active:Z(()=>{const{value:v}=d,{key:N}=e.tmNode,G=v.findIndex(B=>N===B);return G===-1?!1:G===v.length-1}),mergedDisabled:c,renderOption:_,nodeProps:m,handleClick:D,handleMouseMove:b,handleMouseEnter:S,handleMouseLeave:g,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:h}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:d,siblingHasSubmenu:l,renderLabel:s,renderIcon:u,renderOption:p,nodeProps:f,props:k,scrollable:_}=this;let m=null;if(r){const $=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);m=y(Ke,Object.assign({},$,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const L={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},K=f==null?void 0:f(o),A=y("div",Object.assign({class:[`${i}-dropdown-option`,K==null?void 0:K.class],"data-dropdown-option":!0},K),y("div",me(L,k),[y("div",{class:[`${i}-dropdown-option-body__prefix`,d&&`${i}-dropdown-option-body__prefix--show-icon`]},[u?u(o):J(o.icon)]),y("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(o):J((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),y("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,l&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?y(De,null,{default:()=>y(Ue,null)}):null)]),this.hasSubmenu?y(Ve,null,{default:()=>[y(We,null,{default:()=>y("div",{class:`${i}-dropdown-offset-container`},y(Qe,{show:this.mergedShowSubmenu,placement:this.placement,to:_&&this.popoverBody||void 0,teleportDisabled:!_},{default:()=>y("div",{class:`${i}-dropdown-menu-wrapper`},t?y(Le,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>m}):m)}))})]}):null);return p?p({node:A,option:o}):A}}),Kn=W({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=V(ue),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:r,renderOptionRef:i}=V(ee);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:r,renderLabel:i,renderOption:d}=this,{rawNode:l}=this.tmNode,s=y("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(l)),y("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},y("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},J(l.icon)),y("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(l):J((e=l.title)!==null&&e!==void 0?e:l[this.labelField])),y("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:s,option:l}):s}}),Rn=W({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return y(Te,null,y(Kn,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>ke(r.rawNode)?y(Ne,{clsPrefix:t,key:r.key}):r.isGroup?(Ee("dropdown","`group` node is not allowed to be put in `group` node."),null):y(Pe,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})))}}),Cn=W({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return y("div",n,[e==null?void 0:e()])}}),Ke=W({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=V(ee);X(ue,{showIconRef:C(()=>{const r=n.value;return e.tmNodes.some(i=>{var d;if(i.isGroup)return(d=i.children)===null||d===void 0?void 0:d.some(({rawNode:s})=>r?r(s):s.icon);const{rawNode:l}=i;return r?r(l):l.icon})}),hasSubmenuRef:C(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var d;if(i.isGroup)return(d=i.children)===null||d===void 0?void 0:d.some(({rawNode:s})=>le(s,r));const{rawNode:l}=i;return le(l,r)})})});const o=q(null);return X($e,null),X(Ge,null),X(be,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(r=>{const{rawNode:i}=r;return Pn(i)?y(Cn,{tmNode:r,key:r.key}):ke(i)?y(Ne,{clsPrefix:n,key:r.key}):kn(i)?y(Rn,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):y(Pe,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return y("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?y(Fe,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?_e({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),An=F("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ze(),F("dropdown-option",`
 position: relative;
 `,[Q("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[Q("&::before",`
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
 `,[Q("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ce("disabled",[z("pending",`
 color: var(--n-option-text-color-hover);
 `,[M("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),Q("&::before","background-color: var(--n-option-color-hover);")]),z("active",`
 color: var(--n-option-text-color-active);
 `,[M("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),Q("&::before","background-color: var(--n-option-color-active);")]),z("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[M("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),z("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),z("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[M("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[z("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),M("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[z("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),F("icon",`
 font-size: var(--n-option-icon-size);
 `)]),M("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),M("suffix",`
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
 z-index: 1;
 `,[z("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),F("icon",`
 font-size: var(--n-option-icon-size);
 `)]),F("dropdown-menu","pointer-events: all;")]),F("dropdown-offset-container",`
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
 `),Q(">",[F("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ce("scrollable",`
 padding: var(--n-padding);
 `),z("scrollable",[M("content",`
 padding: var(--n-padding);
 `)])]),In={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},_n=Object.keys(ye),On=Object.assign(Object.assign(Object.assign({},ye),In),we.props),Gn=W({name:"Dropdown",inheritAttrs:!1,props:On,setup(e){const n=q(!1),t=Xe(j(e,"show"),n),o=C(()=>{const{keyField:h,childrenField:S}=e;return Nn(e.options,{getKey(b){return b[h]},getDisabled(b){return b.disabled===!0},getIgnored(b){return b.type==="divider"||b.type==="render"},getChildren(b){return b[S]}})}),r=C(()=>o.value.treeNodes),i=q(null),d=q(null),l=q(null),s=C(()=>{var h,S,b;return(b=(S=(h=i.value)!==null&&h!==void 0?h:d.value)!==null&&S!==void 0?S:l.value)!==null&&b!==void 0?b:null}),u=C(()=>o.value.getPath(s.value).keyPath),p=C(()=>o.value.getPath(e.value).keyPath),f=Z(()=>e.keyboard&&t.value);qe({keydown:{ArrowUp:{prevent:!0,handler:c},ArrowRight:{prevent:!0,handler:a},ArrowDown:{prevent:!0,handler:P},ArrowLeft:{prevent:!0,handler:E},Escape:$},keyup:{Enter:O}},f);const{mergedClsPrefixRef:k,inlineThemeDisabled:_}=je(e),m=we("Dropdown","-dropdown",An,Me,e,k);X(ee,{labelFieldRef:j(e,"labelField"),childrenFieldRef:j(e,"childrenField"),renderLabelRef:j(e,"renderLabel"),renderIconRef:j(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:d,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:u,activeKeyPathRef:p,animatedRef:j(e,"animated"),mergedShowRef:t,nodePropsRef:j(e,"nodeProps"),renderOptionRef:j(e,"renderOption"),menuPropsRef:j(e,"menuProps"),doSelect:L,doUpdateShow:K}),ge(t,h=>{!e.animated&&!h&&A()});function L(h,S){const{onSelect:b}=e;b&&te(b,h,S)}function K(h){const{"onUpdate:show":S,onUpdateShow:b}=e;S&&te(S,h),b&&te(b,h),n.value=h}function A(){i.value=null,d.value=null,l.value=null}function $(){K(!1)}function E(){R("left")}function a(){R("right")}function c(){R("up")}function P(){R("down")}function O(){const h=I();h!=null&&h.isLeaf&&(L(h.key,h.rawNode),K(!1))}function I(){var h;const{value:S}=o,{value:b}=s;return!S||b===null?null:(h=S.getNode(b))!==null&&h!==void 0?h:null}function R(h){const{value:S}=s,{value:{getFirstAvailableNode:b}}=o;let g=null;if(S===null){const D=b();D!==null&&(g=D.key)}else{const D=I();if(D){let v;switch(h){case"down":v=D.getNext();break;case"up":v=D.getPrev();break;case"right":v=D.getChild();break;case"left":v=D.getParent();break}v&&(g=v.key)}}g!==null&&(i.value=null,d.value=g)}const w=C(()=>{const{size:h,inverted:S}=e,{common:{cubicBezierEaseInOut:b},self:g}=m.value,{padding:D,dividerColor:v,borderRadius:N,optionOpacityDisabled:G,[U("optionIconSuffixWidth",h)]:B,[U("optionSuffixWidth",h)]:ne,[U("optionIconPrefixWidth",h)]:H,[U("optionPrefixWidth",h)]:Re,[U("fontSize",h)]:Ce,[U("optionHeight",h)]:Ae,[U("optionIconSize",h)]:Ie}=g,x={"--n-bezier":b,"--n-font-size":Ce,"--n-padding":D,"--n-border-radius":N,"--n-option-height":Ae,"--n-option-prefix-width":Re,"--n-option-icon-prefix-width":H,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":B,"--n-option-icon-size":Ie,"--n-divider-color":v,"--n-option-opacity-disabled":G};return S?(x["--n-color"]=g.colorInverted,x["--n-option-color-hover"]=g.optionColorHoverInverted,x["--n-option-color-active"]=g.optionColorActiveInverted,x["--n-option-text-color"]=g.optionTextColorInverted,x["--n-option-text-color-hover"]=g.optionTextColorHoverInverted,x["--n-option-text-color-active"]=g.optionTextColorActiveInverted,x["--n-option-text-color-child-active"]=g.optionTextColorChildActiveInverted,x["--n-prefix-color"]=g.prefixColorInverted,x["--n-suffix-color"]=g.suffixColorInverted,x["--n-group-header-text-color"]=g.groupHeaderTextColorInverted):(x["--n-color"]=g.color,x["--n-option-color-hover"]=g.optionColorHover,x["--n-option-color-active"]=g.optionColorActive,x["--n-option-text-color"]=g.optionTextColor,x["--n-option-text-color-hover"]=g.optionTextColorHover,x["--n-option-text-color-active"]=g.optionTextColorActive,x["--n-option-text-color-child-active"]=g.optionTextColorChildActive,x["--n-prefix-color"]=g.prefixColor,x["--n-suffix-color"]=g.suffixColor,x["--n-group-header-text-color"]=g.groupHeaderTextColor),x}),T=_?Be("dropdown",C(()=>`${e.size[0]}${e.inverted?"i":""}`),w,e):void 0;return{mergedClsPrefix:k,mergedTheme:m,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{!e.animated||A()},doUpdateShow:K,cssVars:_?void 0:w,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(o,r,i,d,l)=>{var s;const{mergedClsPrefix:u,menuProps:p}=this;(s=this.onRender)===null||s===void 0||s.call(this);const f=(p==null?void 0:p(void 0,this.tmNodes.map(_=>_.rawNode)))||{},k={ref:Ze(r),class:[o,`${u}-dropdown`,this.themeClass],clsPrefix:u,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:d,onMouseleave:l};return y(Ke,me(this.$attrs,k,f))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return y(Oe,Object.assign({},He(this.$props,_n),t),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}});export{Gn as _,Nn as c};