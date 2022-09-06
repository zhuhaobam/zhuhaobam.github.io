import{d as O,t as p,F as J,i as L,c as C,G as j,H as _,I as fe,J as ge,r as B,K as de,L as xe,M as Q,O as W,P as b,m as g,n as A,Q as m,R as U,S as be,q as Ce,p as se,T as ze,U as ne,V as re,W as F,s as ye,y as Ie,u as we,X as Se,Y as Re,Z as Ae,$ as He,a0 as Ne,w as ie,a1 as Pe,a2 as Ke,a3 as Me,j as Z,a4 as Te,e as Oe,v as Ee,h as Fe,a5 as ke,N as Le}from"./main-e0ba718d.js";import{l as _e}from"./interface-53fbbb20.js";import{_ as $e,c as je}from"./Dropdown-66dad44c.js";import{_ as Be}from"./Tooltip-d30f2c92.js";import{u as le}from"./use-merged-state-c083a3bb.js";import{u as Ve}from"./use-compitable-4c766fa2.js";const De=O({name:"ChevronDownFilled",render(){return p("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),V=J("n-menu"),X=J("n-submenu"),Y=J("n-menu-item-group"),q=8;function ee(e){const r=L(V),{props:n,mergedCollapsedRef:l}=r,a=L(X,null),c=L(Y,null),u=C(()=>n.mode==="horizontal"),s=C(()=>u.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),i=C(()=>{var v;return Math.max((v=n.collapsedIconSize)!==null&&v!==void 0?v:n.iconSize,n.iconSize)}),w=C(()=>{var v;return!u.value&&e.root&&l.value&&(v=n.collapsedIconSize)!==null&&v!==void 0?v:n.iconSize}),P=C(()=>{if(u.value)return;const{collapsedWidth:v,indent:R,rootIndent:K}=n,{root:N,isGroup:M}=e,T=K===void 0?R:K;if(N)return l.value?v/2-i.value/2:T;if(c)return R/2+c.paddingLeftRef.value;if(a)return(M?R/2:R)+a.paddingLeftRef.value}),S=C(()=>{const{collapsedWidth:v,indent:R,rootIndent:K}=n,{value:N}=i,{root:M}=e;return u.value||!M||!l.value?q:(K===void 0?R:K)+N+q-(v+N)/2});return{dropdownPlacement:s,activeIconSize:w,maxIconSize:i,paddingLeft:P,iconMarginRight:S,NMenu:r,NSubmenu:a}}const oe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ue=Object.assign(Object.assign({},oe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ue=O({name:"MenuOptionGroup",props:ue,setup(e){j(X,null);const r=ee(e);j(Y,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:n,props:l}=L(V);return function(){const{value:a}=n,c=r.paddingLeft.value,{nodeProps:u}=l,s=u==null?void 0:u(e.tmNode.rawNode);return p("div",{class:`${a}-menu-item-group`,role:"group"},p("div",Object.assign({},s,{class:[`${a}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",c!==void 0?`padding-left: ${c}px;`:""]}),_(e.title),e.extra?p(fe,null," ",_(e.extra)):null),p("div",null,e.tmNodes.map(i=>te(i,l))))}}}),me=O({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:r}=L(V);return{menuProps:r,style:C(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:C(()=>{const{maxIconSize:n,activeIconSize:l,iconMarginRight:a}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${l}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:n,renderLabel:l,renderExtra:a,expandIcon:c}}=this,u=n?n(r.rawNode):_(this.icon);return p("div",{onClick:s=>{var i;(i=this.onClick)===null||i===void 0||i.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&p("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),p("div",{class:`${e}-menu-item-content-header`,role:"none"},l?l(r.rawNode):_(this.title),this.extra||a?p("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(r.rawNode):_(this.extra)):null),this.showArrow?p(ge,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>c?c(r.rawNode):p(De,null)}):null)}}),ve=Object.assign(Object.assign({},oe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),qe=O({name:"Submenu",props:ve,setup(e){const r=ee(e),{NMenu:n,NSubmenu:l}=r,{props:a,mergedCollapsedRef:c,mergedThemeRef:u}=n,s=C(()=>{const{disabled:v}=e;return l!=null&&l.mergedDisabledRef.value||a.disabled?!0:v}),i=B(!1);j(X,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:s}),j(Y,null);function w(){const{onClick:v}=e;v&&v()}function P(){s.value||(c.value||n.toggleExpand(e.internalKey),w())}function S(v){i.value=v}return{menuProps:a,mergedTheme:u,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:i,paddingLeft:r.paddingLeft,mergedDisabled:s,mergedValue:n.mergedValueRef,childActive:de(()=>n.activePathRef.value.includes(e.internalKey)),collapsed:C(()=>a.mode==="horizontal"?!1:c.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!s.value&&(a.mode==="horizontal"||c.value)),handlePopoverShowChange:S,handleClick:P}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:n,renderLabel:l}}=this,a=()=>{const{isHorizontal:u,paddingLeft:s,collapsed:i,mergedDisabled:w,maxIconSize:P,activeIconSize:S,title:v,childActive:R,icon:K,handleClick:N,menuProps:{nodeProps:M},dropdownShow:T,iconMarginRight:$,tmNode:E,mergedClsPrefix:d}=this,z=M==null?void 0:M(E.rawNode);return p("div",Object.assign({},z,{class:[`${d}-menu-item`,z==null?void 0:z.class],role:"menuitem"}),p(me,{tmNode:E,paddingLeft:s,collapsed:i,disabled:w,iconMarginRight:$,maxIconSize:P,activeIconSize:S,title:v,extra:this.extra,showArrow:!u,childActive:R,clsPrefix:d,icon:K,hover:T,onClick:N}))},c=()=>p(xe,null,{default:()=>{const{tmNodes:u,collapsed:s}=this;return s?null:p("div",{class:`${r}-submenu-children`,role:"menu"},u.map(i=>te(i,this.menuProps)))}});return this.root?p($e,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:l}),{default:()=>p("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:c())}):p("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),c())}}),he=Object.assign(Object.assign({},oe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Ge=O({name:"MenuOption",props:he,setup(e){const r=ee(e),{NSubmenu:n,NMenu:l}=r,{props:a,mergedClsPrefixRef:c,mergedCollapsedRef:u}=l,s=n?n.mergedDisabledRef:{value:!1},i=C(()=>s.value||e.disabled);function w(S){const{onClick:v}=e;v&&v(S)}function P(S){i.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),w(S))}return{mergedClsPrefix:c,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:a,dropdownEnabled:de(()=>e.root&&u.value&&a.mode!=="horizontal"&&!i.value),selected:C(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:i,handleClick:P}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:n,menuProps:{renderLabel:l,nodeProps:a}}=this,c=a==null?void 0:a(n.rawNode);return p("div",Object.assign({},c,{role:"menuitem",class:[`${e}-menu-item`,c==null?void 0:c.class]}),p(Be,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(n.rawNode):_(this.title),trigger:()=>p(me,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),We=O({name:"MenuDivider",setup(){const e=L(V),{mergedClsPrefixRef:r,isHorizontalRef:n}=e;return()=>n.value?null:p("div",{class:`${r.value}-menu-divider`})}}),Ze=Q(ue),Je=Q(he),Qe=Q(ve);function Xe(e){return e.type==="divider"||e.type==="render"}function Ye(e){return e.type==="divider"}function te(e,r){const{rawNode:n}=e,{show:l}=n;if(typeof l=="boolean"&&!l)return null;if(Xe(n))return Ye(n)?p(We,Object.assign({key:e.key},n.props)):null;const{labelField:a}=r,{key:c,level:u,isGroup:s}=e,i=Object.assign(Object.assign({},n),{title:n.title||n[a],extra:n.titleExtra||n.extra,key:c,internalKey:c,level:u,root:u===0,isGroup:s});return e.children?e.isGroup?p(Ue,W(i,Ze,{tmNode:e,tmNodes:e.children,key:c})):p(qe,W(i,Qe,{key:c,rawNodes:n[r.childrenField],tmNodes:e.children,tmNode:e})):p(Ge,W(i,Je,{key:c,tmNode:e}))}const ae=[b("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[b("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],ce=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],eo=b([g("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[A("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[g("submenu","margin: 0;"),g("menu-item","margin: 0;"),g("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[b("&::before","display: none;"),A("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),g("menu-item-content",[A("selected",[m("icon","color: var(--n-item-icon-color-active-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-horizontal);"),m("extra","color: var(--n-item-text-color-active-horizontal);")])]),A("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),m("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),U("disabled",[U("selected, child-active",[b("&:focus-within",ce)]),A("selected",[k(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),A("child-active",[k(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),k("border-bottom: 2px solid var(--n-border-color-horizontal);",ce)]),g("menu-item-content-header",[b("a","color: var(--n-item-text-color-horizontal);")])])]),A("collapsed",[g("menu-item-content",[A("selected",[b("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),g("menu-item-content-header","opacity: 0;"),m("arrow","opacity: 0;"),m("icon","color: var(--n-item-icon-color-collapsed);")])]),g("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),g("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[b("> *","z-index: 1;"),b("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),A("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),A("collapsed",[m("arrow","transform: rotate(0);")]),A("selected",[b("&::before","background-color: var(--n-item-color-active);"),m("arrow","color: var(--n-arrow-color-active);"),m("icon","color: var(--n-item-icon-color-active);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[b("a","color: var(--n-item-text-color-active);"),m("extra","color: var(--n-item-text-color-active);")])]),A("child-active",[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[b("a",`
 color: var(--n-item-text-color-child-active);
 `),m("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),m("arrow",`
 color: var(--n-arrow-color-child-active);
 `),m("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),U("disabled",[U("selected, child-active",[b("&:focus-within",ae)]),A("selected",[k(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[b("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),A("child-active",[k(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[b("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),A("selected",[k(null,[b("&::before","background-color: var(--n-item-color-active-hover);")])]),k(null,ae)]),m("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),m("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),g("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[b("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[b("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),m("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),g("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[g("menu-item-content",`
 height: var(--n-item-height);
 `),g("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[be({duration:".2s"})])]),g("menu-item-group",[g("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),g("menu-tooltip",[b("a",`
 color: inherit;
 text-decoration: none;
 `)]),g("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function k(e,r){return[A("hover",e,r),b("&:hover",e,r)]}const oo=Object.assign(Object.assign({},se.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),to=O({name:"Menu",props:oo,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=Ce(e),l=se("Menu","-menu",eo,ze,e,r),a=L(_e,null),c=C(()=>{var h;const{collapsed:x}=e;if(x!==void 0)return x;if(a){const{collapseModeRef:o,collapsedRef:f}=a;if(o.value==="width")return(h=f.value)!==null&&h!==void 0?h:!1}return!1}),u=C(()=>{const{keyField:h,childrenField:x,disabledField:o}=e;return je(e.items||e.options,{getChildren(f){return f[x]},getDisabled(f){return f[o]},getKey(f){var y;return(y=f[h])!==null&&y!==void 0?y:f.name}})}),s=C(()=>new Set(u.value.treeNodes.map(h=>h.key))),{watchProps:i}=e,w=B(null);i!=null&&i.includes("defaultValue")?ne(()=>{w.value=e.defaultValue}):w.value=e.defaultValue;const P=re(e,"value"),S=le(P,w),v=B([]),R=()=>{v.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(S.value,{includeSelf:!1}).keyPath};i!=null&&i.includes("defaultExpandedKeys")?ne(R):R();const K=Ve(e,["expandedNames","expandedKeys"]),N=le(K,v),M=C(()=>u.value.treeNodes),T=C(()=>u.value.getPath(S.value).keyPath);j(V,{props:e,mergedCollapsedRef:c,mergedThemeRef:l,mergedValueRef:S,mergedExpandedKeysRef:N,activePathRef:T,mergedClsPrefixRef:r,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:re(e,"inverted"),doSelect:$,toggleExpand:d});function $(h,x){const{"onUpdate:value":o,onUpdateValue:f,onSelect:y}=e;f&&F(f,h,x),o&&F(o,h,x),y&&F(y,h,x),w.value=h}function E(h){const{"onUpdate:expandedKeys":x,onUpdateExpandedKeys:o,onExpandedNamesChange:f,onOpenNamesChange:y}=e;x&&F(x,h),o&&F(o,h),f&&F(f,h),y&&F(y,h),v.value=h}function d(h){const x=Array.from(N.value),o=x.findIndex(f=>f===h);if(~o)x.splice(o,1);else{if(e.accordion&&s.value.has(h)){const f=x.findIndex(y=>s.value.has(y));f>-1&&x.splice(f,1)}x.push(h)}E(x)}const z=h=>{const x=u.value.getPath(h!=null?h:S.value,{includeSelf:!1}).keyPath;if(!x.length)return;const o=Array.from(N.value),f=new Set([...o,...x]);e.accordion&&s.value.forEach(y=>{f.has(y)&&!x.includes(y)&&f.delete(y)}),E(Array.from(f))},H=C(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:x},self:o}=l.value,{borderRadius:f,borderColorHorizontal:y,fontSize:D,itemHeight:G,dividerColor:pe}=o,t={"--n-divider-color":pe,"--n-bezier":x,"--n-font-size":D,"--n-border-color-horizontal":y,"--n-border-radius":f,"--n-item-height":G};return h?(t["--n-group-text-color"]=o.groupTextColorInverted,t["--n-color"]=o.colorInverted,t["--n-item-text-color"]=o.itemTextColorInverted,t["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,t["--n-item-text-color-active"]=o.itemTextColorActiveInverted,t["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,t["--n-item-icon-color"]=o.itemIconColorInverted,t["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,t["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,t["--n-arrow-color"]=o.arrowColorInverted,t["--n-arrow-color-hover"]=o.arrowColorHoverInverted,t["--n-arrow-color-active"]=o.arrowColorActiveInverted,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,t["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,t["--n-item-color-hover"]=o.itemColorHoverInverted,t["--n-item-color-active"]=o.itemColorActiveInverted,t["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(t["--n-group-text-color"]=o.groupTextColor,t["--n-color"]=o.color,t["--n-item-text-color"]=o.itemTextColor,t["--n-item-text-color-hover"]=o.itemTextColorHover,t["--n-item-text-color-active"]=o.itemTextColorActive,t["--n-item-text-color-child-active"]=o.itemTextColorChildActive,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,t["--n-item-icon-color"]=o.itemIconColor,t["--n-item-icon-color-hover"]=o.itemIconColorHover,t["--n-item-icon-color-active"]=o.itemIconColorActive,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,t["--n-arrow-color"]=o.arrowColor,t["--n-arrow-color-hover"]=o.arrowColorHover,t["--n-arrow-color-active"]=o.arrowColorActive,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,t["--n-arrow-color-child-active"]=o.arrowColorChildActive,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,t["--n-item-color-hover"]=o.itemColorHover,t["--n-item-color-active"]=o.itemColorActive,t["--n-item-color-active-hover"]=o.itemColorActiveHover,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),t}),I=n?ye("menu",C(()=>e.inverted?"a":"b"),H,e):void 0;return{mergedClsPrefix:r,controlledExpandedKeys:K,uncontrolledExpanededKeys:v,mergedExpandedKeys:N,uncontrolledValue:w,mergedValue:S,activePath:T,tmNodes:M,mergedTheme:l,mergedCollapsed:c,cssVars:n?void 0:H,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender,showOption:z}},render(){const{mergedClsPrefix:e,mode:r,themeClass:n,onRender:l}=this;return l==null||l(),p("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${r}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>te(a,this.$props)))}}),so=O({__name:"index",props:{collapsed:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},screen:{default:"xl"}},setup(e){const{t:r}=Ie(),n=we(),l=Se(),a=Re.map(d=>{var H;return((H=d==null?void 0:d.meta)==null?void 0:H.layout)===!1?d:Ae([d])[0]}),c=He(a),u=Ne(c),s=B([]);ie(()=>n.headerSetting.mLocal,(d,z)=>{s.value=Pe(u,r)},{immediate:!0,deep:!0});const i=Ke(),w=i.matched,P=B(i.name),v=(w&&w.length?w.map(d=>d.name):[]).filter(d=>d),R=Me({openKeys:v}),K=C(()=>Z(P));ie(()=>i.fullPath,()=>{var x,o,f,y,D;const d=Te(i.matched);R.openKeys=d.map(G=>G.name);const z=((x=i.meta)==null?void 0:x.activeMenu)||"";P.value=z||i.name;const H=d[d.length-1],I=H.meta,h={path:H.path,params:i.params,breadcrumb:(o=I.breadcrumb)!=null?o:"",noi18n:(f=I==null?void 0:I.noi18n)!=null?f:"no",title:(y=I==null?void 0:I.title)!=null?y:"",icon:(D=I.icon)!=null?D:""};l.addTag(h)});function N(d,z){/http(s)?:/.test(d)&&window.open(d)}function M(d){if(!d)return;const z=d.find(I=>R.openKeys.indexOf(I)===-1),H=T(z);R.openKeys=H?z?[z]:[]:d}function T(d){if(!d)return!1;const z=[];for(const{children:H,key:I}of Z(s))H&&H.length&&z.push(I);return z.includes(d)}function $(d){return p(Le,ke(d.menuRenderIcon))}function E(d){}return(d,z)=>{const H=to;return Oe(),Ee("div",null,[Fe(H,{accordion:"",options:s.value,inverted:e.inverted,mode:"vertical","collapsed-width":96,"collapsed-icon-size":30,collapsed:e.collapsed,"expanded-keys":R.openKeys,value:Z(K),"render-extra":E,"render-icon":$,"onUpdate:value":N,"onUpdate:expandedKeys":M},null,8,["options","inverted","collapsed","expanded-keys","value"])])}}});export{so as _};
