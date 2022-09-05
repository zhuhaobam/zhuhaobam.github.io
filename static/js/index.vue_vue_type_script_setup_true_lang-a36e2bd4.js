import{d as O,t as p,E as W,i as L,c as C,F as j,G as _,H as fe,I as ge,r as B,J as ae,K as xe,L as Z,M as q,O as b,m as f,n as A,P as v,Q as D,R as be,q as Ce,p as ce,S as ze,T as oe,U as te,V as F,s as ye,y as Ie,u as we,W as Se,X as Re,Y as Ae,Z as He,$ as Ne,w as ne,a0 as Pe,a1 as Ke,a2 as Me,j as G,a3 as Te,e as Oe,v as Ee,h as Fe,a4 as ke,N as Le}from"./main-69cbe56a.js";import{l as _e}from"./interface-a0493333.js";import{_ as $e,c as je}from"./Dropdown-56e6b0da.js";import{_ as Be}from"./Tooltip-685f4cb4.js";import{u as re}from"./use-merged-state-142c91b3.js";import{u as Ve}from"./use-compitable-ab343649.js";const De=O({name:"ChevronDownFilled",render(){return p("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),V=W("n-menu"),J=W("n-submenu"),Q=W("n-menu-item-group"),U=8;function X(e){const r=L(V),{props:n,mergedCollapsedRef:l}=r,a=L(J,null),c=L(Q,null),u=C(()=>n.mode==="horizontal"),s=C(()=>u.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),i=C(()=>{var h;return Math.max((h=n.collapsedIconSize)!==null&&h!==void 0?h:n.iconSize,n.iconSize)}),y=C(()=>{var h;return!u.value&&e.root&&l.value&&(h=n.collapsedIconSize)!==null&&h!==void 0?h:n.iconSize}),N=C(()=>{if(u.value)return;const{collapsedWidth:h,indent:S,rootIndent:P}=n,{root:H,isGroup:M}=e,T=P===void 0?S:P;if(H)return l.value?h/2-i.value/2:T;if(c)return S/2+c.paddingLeftRef.value;if(a)return(M?S/2:S)+a.paddingLeftRef.value}),w=C(()=>{const{collapsedWidth:h,indent:S,rootIndent:P}=n,{value:H}=i,{root:M}=e;return u.value||!M||!l.value?U:(P===void 0?S:P)+H+U-(h+H)/2});return{dropdownPlacement:s,activeIconSize:y,maxIconSize:i,paddingLeft:N,iconMarginRight:w,NMenu:r,NSubmenu:a}}const Y={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},de=Object.assign(Object.assign({},Y),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ue=O({name:"MenuOptionGroup",props:de,setup(e){j(J,null);const r=X(e);j(Q,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:n,props:l}=L(V);return function(){const{value:a}=n,c=r.paddingLeft.value,{nodeProps:u}=l,s=u==null?void 0:u(e.tmNode.rawNode);return p("div",{class:`${a}-menu-item-group`,role:"group"},p("div",Object.assign({},s,{class:[`${a}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",c!==void 0?`padding-left: ${c}px;`:""]}),_(e.title),e.extra?p(fe,null," ",_(e.extra)):null),p("div",null,e.tmNodes.map(i=>ee(i,l))))}}}),se=O({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:r}=L(V);return{menuProps:r,style:C(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:C(()=>{const{maxIconSize:n,activeIconSize:l,iconMarginRight:a}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${l}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:n,renderLabel:l,renderExtra:a,expandIcon:c}}=this,u=n?n(r.rawNode):_(this.icon);return p("div",{onClick:s=>{var i;(i=this.onClick)===null||i===void 0||i.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&p("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),p("div",{class:`${e}-menu-item-content-header`,role:"none"},l?l(r.rawNode):_(this.title),this.extra||a?p("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(r.rawNode):_(this.extra)):null),this.showArrow?p(ge,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>c?c(r.rawNode):p(De,null)}):null)}}),ue=Object.assign(Object.assign({},Y),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),qe=O({name:"Submenu",props:ue,setup(e){const r=X(e),{NMenu:n,NSubmenu:l}=r,{props:a,mergedCollapsedRef:c,mergedThemeRef:u}=n,s=C(()=>{const{disabled:h}=e;return l!=null&&l.mergedDisabledRef.value||a.disabled?!0:h}),i=B(!1);j(J,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:s}),j(Q,null);function y(){const{onClick:h}=e;h&&h()}function N(){s.value||(c.value||n.toggleExpand(e.internalKey),y())}function w(h){i.value=h}return{menuProps:a,mergedTheme:u,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:i,paddingLeft:r.paddingLeft,mergedDisabled:s,mergedValue:n.mergedValueRef,childActive:ae(()=>n.activePathRef.value.includes(e.internalKey)),collapsed:C(()=>a.mode==="horizontal"?!1:c.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!s.value&&(a.mode==="horizontal"||c.value)),handlePopoverShowChange:w,handleClick:N}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:n,renderLabel:l}}=this,a=()=>{const{isHorizontal:u,paddingLeft:s,collapsed:i,mergedDisabled:y,maxIconSize:N,activeIconSize:w,title:h,childActive:S,icon:P,handleClick:H,menuProps:{nodeProps:M},dropdownShow:T,iconMarginRight:$,tmNode:E,mergedClsPrefix:d}=this,z=M==null?void 0:M(E.rawNode);return p("div",Object.assign({},z,{class:[`${d}-menu-item`,z==null?void 0:z.class],role:"menuitem"}),p(se,{tmNode:E,paddingLeft:s,collapsed:i,disabled:y,iconMarginRight:$,maxIconSize:N,activeIconSize:w,title:h,extra:this.extra,showArrow:!u,childActive:S,clsPrefix:d,icon:P,hover:T,onClick:H}))},c=()=>p(xe,null,{default:()=>{const{tmNodes:u,collapsed:s}=this;return s?null:p("div",{class:`${r}-submenu-children`,role:"menu"},u.map(i=>ee(i,this.menuProps)))}});return this.root?p($e,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:l}),{default:()=>p("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:c())}):p("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),c())}}),me=Object.assign(Object.assign({},Y),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Ge=O({name:"MenuOption",props:me,setup(e){const r=X(e),{NSubmenu:n,NMenu:l}=r,{props:a,mergedClsPrefixRef:c,mergedCollapsedRef:u}=l,s=n?n.mergedDisabledRef:{value:!1},i=C(()=>s.value||e.disabled);function y(w){const{onClick:h}=e;h&&h(w)}function N(w){i.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),y(w))}return{mergedClsPrefix:c,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:a,dropdownEnabled:ae(()=>e.root&&u.value&&a.mode!=="horizontal"&&!i.value),selected:C(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:i,handleClick:N}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:n,menuProps:{renderLabel:l,nodeProps:a}}=this,c=a==null?void 0:a(n.rawNode);return p("div",Object.assign({},c,{role:"menuitem",class:[`${e}-menu-item`,c==null?void 0:c.class]}),p(Be,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(n.rawNode):_(this.title),trigger:()=>p(se,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),We=O({name:"MenuDivider",setup(){const e=L(V),{mergedClsPrefixRef:r,isHorizontalRef:n}=e;return()=>n.value?null:p("div",{class:`${r.value}-menu-divider`})}}),Ze=Z(de),Je=Z(me),Qe=Z(ue);function Xe(e){return e.type==="divider"||e.type==="render"}function Ye(e){return e.type==="divider"}function ee(e,r){const{rawNode:n}=e,{show:l}=n;if(typeof l=="boolean"&&!l)return null;if(Xe(n))return Ye(n)?p(We,Object.assign({key:e.key},n.props)):null;const{labelField:a}=r,{key:c,level:u,isGroup:s}=e,i=Object.assign(Object.assign({},n),{title:n.title||n[a],extra:n.titleExtra||n.extra,key:c,internalKey:c,level:u,root:u===0,isGroup:s});return e.children?e.isGroup?p(Ue,q(i,Ze,{tmNode:e,tmNodes:e.children,key:c})):p(qe,q(i,Qe,{key:c,rawNodes:n[r.childrenField],tmNodes:e.children,tmNode:e})):p(Ge,q(i,Je,{key:c,tmNode:e}))}const ie=[b("&::before","background-color: var(--n-item-color-hover);"),v("arrow",`
 color: var(--n-arrow-color-hover);
 `),v("icon",`
 color: var(--n-item-icon-color-hover);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[b("a",`
 color: var(--n-item-text-color-hover);
 `),v("extra",`
 color: var(--n-item-text-color-hover);
 `)])],le=[v("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],eo=b([f("menu",`
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
 `,[f("submenu","margin: 0;"),f("menu-item","margin: 0;"),f("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[b("&::before","display: none;"),A("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),f("menu-item-content",[A("selected",[v("icon","color: var(--n-item-icon-color-active-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-horizontal);"),v("extra","color: var(--n-item-text-color-active-horizontal);")])]),A("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),v("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),D("disabled",[D("selected, child-active",[b("&:focus-within",le)]),A("selected",[k(null,[v("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),A("child-active",[k(null,[v("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),k("border-bottom: 2px solid var(--n-border-color-horizontal);",le)]),f("menu-item-content-header",[b("a","color: var(--n-item-text-color-horizontal);")])])]),A("collapsed",[f("menu-item-content",[A("selected",[b("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),f("menu-item-content-header","opacity: 0;"),v("arrow","opacity: 0;"),v("icon","color: var(--n-item-icon-color-collapsed);")])]),f("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),f("menu-item-content",`
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
 `),A("collapsed",[v("arrow","transform: rotate(0);")]),A("selected",[b("&::before","background-color: var(--n-item-color-active);"),v("arrow","color: var(--n-arrow-color-active);"),v("icon","color: var(--n-item-icon-color-active);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[b("a","color: var(--n-item-text-color-active);"),v("extra","color: var(--n-item-text-color-active);")])]),A("child-active",[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[b("a",`
 color: var(--n-item-text-color-child-active);
 `),v("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),v("arrow",`
 color: var(--n-arrow-color-child-active);
 `),v("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),D("disabled",[D("selected, child-active",[b("&:focus-within",ie)]),A("selected",[k(null,[v("arrow","color: var(--n-arrow-color-active-hover);"),v("icon","color: var(--n-item-icon-color-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[b("a","color: var(--n-item-text-color-active-hover);"),v("extra","color: var(--n-item-text-color-active-hover);")])])]),A("child-active",[k(null,[v("arrow","color: var(--n-arrow-color-child-active-hover);"),v("icon","color: var(--n-item-icon-color-child-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[b("a","color: var(--n-item-text-color-child-active-hover);"),v("extra","color: var(--n-item-text-color-child-active-hover);")])])]),A("selected",[k(null,[b("&::before","background-color: var(--n-item-color-active-hover);")])]),k(null,ie)]),v("icon",`
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
 `),v("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),f("menu-item-content-header",`
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
 `)]),v("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),f("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[f("menu-item-content",`
 height: var(--n-item-height);
 `),f("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[be({duration:".2s"})])]),f("menu-item-group",[f("menu-item-group-title",`
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
 `)])]),f("menu-tooltip",[b("a",`
 color: inherit;
 text-decoration: none;
 `)]),f("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function k(e,r){return[A("hover",e,r),b("&:hover",e,r)]}const oo=Object.assign(Object.assign({},ce.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),to=O({name:"Menu",props:oo,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=Ce(e),l=ce("Menu","-menu",eo,ze,e,r),a=L(_e,null),c=C(()=>{var m;const{collapsed:g}=e;if(g!==void 0)return g;if(a){const{collapseModeRef:o,collapsedRef:x}=a;if(o.value==="width")return(m=x.value)!==null&&m!==void 0?m:!1}return!1}),u=C(()=>{const{keyField:m,childrenField:g,disabledField:o}=e;return je(e.items||e.options,{getChildren(x){return x[g]},getDisabled(x){return x[o]},getKey(x){var I;return(I=x[m])!==null&&I!==void 0?I:x.name}})}),s=C(()=>new Set(u.value.treeNodes.map(m=>m.key))),{watchProps:i}=e,y=B(null);i!=null&&i.includes("defaultValue")?oe(()=>{y.value=e.defaultValue}):y.value=e.defaultValue;const N=te(e,"value"),w=re(N,y),h=B([]),S=()=>{h.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(w.value,{includeSelf:!1}).keyPath};i!=null&&i.includes("defaultExpandedKeys")?oe(S):S();const P=Ve(e,["expandedNames","expandedKeys"]),H=re(P,h),M=C(()=>u.value.treeNodes),T=C(()=>u.value.getPath(w.value).keyPath);j(V,{props:e,mergedCollapsedRef:c,mergedThemeRef:l,mergedValueRef:w,mergedExpandedKeysRef:H,activePathRef:T,mergedClsPrefixRef:r,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:te(e,"inverted"),doSelect:$,toggleExpand:d});function $(m,g){const{"onUpdate:value":o,onUpdateValue:x,onSelect:I}=e;x&&F(x,m,g),o&&F(o,m,g),I&&F(I,m,g),y.value=m}function E(m){const{"onUpdate:expandedKeys":g,onUpdateExpandedKeys:o,onExpandedNamesChange:x,onOpenNamesChange:I}=e;g&&F(g,m),o&&F(o,m),x&&F(x,m),I&&F(I,m),h.value=m}function d(m){const g=Array.from(H.value),o=g.findIndex(x=>x===m);if(~o)g.splice(o,1);else{if(e.accordion&&s.value.has(m)){const x=g.findIndex(I=>s.value.has(I));x>-1&&g.splice(x,1)}g.push(m)}E(g)}const z=m=>{const g=u.value.getPath(m!=null?m:w.value,{includeSelf:!1}).keyPath;if(!g.length)return;const o=Array.from(H.value),x=new Set([...o,...g]);e.accordion&&s.value.forEach(I=>{x.has(I)&&!g.includes(I)&&x.delete(I)}),E(Array.from(x))},R=C(()=>{const{inverted:m}=e,{common:{cubicBezierEaseInOut:g},self:o}=l.value,{borderRadius:x,borderColorHorizontal:I,fontSize:ve,itemHeight:he,dividerColor:pe}=o,t={"--n-divider-color":pe,"--n-bezier":g,"--n-font-size":ve,"--n-border-color-horizontal":I,"--n-border-radius":x,"--n-item-height":he};return m?(t["--n-group-text-color"]=o.groupTextColorInverted,t["--n-color"]=o.colorInverted,t["--n-item-text-color"]=o.itemTextColorInverted,t["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,t["--n-item-text-color-active"]=o.itemTextColorActiveInverted,t["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,t["--n-item-icon-color"]=o.itemIconColorInverted,t["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,t["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,t["--n-arrow-color"]=o.arrowColorInverted,t["--n-arrow-color-hover"]=o.arrowColorHoverInverted,t["--n-arrow-color-active"]=o.arrowColorActiveInverted,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,t["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,t["--n-item-color-hover"]=o.itemColorHoverInverted,t["--n-item-color-active"]=o.itemColorActiveInverted,t["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(t["--n-group-text-color"]=o.groupTextColor,t["--n-color"]=o.color,t["--n-item-text-color"]=o.itemTextColor,t["--n-item-text-color-hover"]=o.itemTextColorHover,t["--n-item-text-color-active"]=o.itemTextColorActive,t["--n-item-text-color-child-active"]=o.itemTextColorChildActive,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,t["--n-item-icon-color"]=o.itemIconColor,t["--n-item-icon-color-hover"]=o.itemIconColorHover,t["--n-item-icon-color-active"]=o.itemIconColorActive,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,t["--n-arrow-color"]=o.arrowColor,t["--n-arrow-color-hover"]=o.arrowColorHover,t["--n-arrow-color-active"]=o.arrowColorActive,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,t["--n-arrow-color-child-active"]=o.arrowColorChildActive,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,t["--n-item-color-hover"]=o.itemColorHover,t["--n-item-color-active"]=o.itemColorActive,t["--n-item-color-active-hover"]=o.itemColorActiveHover,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),t}),K=n?ye("menu",C(()=>e.inverted?"a":"b"),R,e):void 0;return{mergedClsPrefix:r,controlledExpandedKeys:P,uncontrolledExpanededKeys:h,mergedExpandedKeys:H,uncontrolledValue:y,mergedValue:w,activePath:T,tmNodes:M,mergedTheme:l,mergedCollapsed:c,cssVars:n?void 0:R,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender,showOption:z}},render(){const{mergedClsPrefix:e,mode:r,themeClass:n,onRender:l}=this;return l==null||l(),p("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${r}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>ee(a,this.$props)))}}),so=O({__name:"index",props:{collapsed:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},screen:{default:"xl"}},setup(e){const{t:r}=Ie(),n=we(),l=Se(),a=Re.map(d=>{var R;return((R=d==null?void 0:d.meta)==null?void 0:R.layout)===!1?d:Ae([d])[0]}),c=He(a),u=Ne(c),s=B([]);ne(()=>n.headerSetting.mLocal,(d,z)=>{s.value=Pe(u,r)},{immediate:!0,deep:!0});const i=Ke(),y=i.matched,N=B(i.name),h=(y&&y.length?y.map(d=>d.name):[]).filter(d=>d),S=Me({openKeys:h}),P=C(()=>G(N));ne(()=>i.fullPath,()=>{var m,g,o;const d=Te(i.matched);S.openKeys=d.map(x=>x.name);const z=((m=i.meta)==null?void 0:m.activeMenu)||"";N.value=z||i.name;const R=d[d.length-1],K={path:R.path,params:i.params,breadcrumb:(g=R.meta.breadcrumb)!=null?g:"",icon:(o=R.meta.icon)!=null?o:""};l.addTag(K)});function H(d,z){/http(s)?:/.test(d)&&window.open(d)}function M(d){if(!d)return;const z=d.find(K=>S.openKeys.indexOf(K)===-1),R=T(z);S.openKeys=R?z?[z]:[]:d}function T(d){if(!d)return!1;const z=[];for(const{children:R,key:K}of G(s))R&&R.length&&z.push(K);return z.includes(d)}function $(d){return p(Le,ke(d.menuRenderIcon))}function E(d){}return(d,z)=>{const R=to;return Oe(),Ee("div",null,[Fe(R,{accordion:"",options:s.value,inverted:e.inverted,mode:"vertical","collapsed-width":96,"collapsed-icon-size":30,collapsed:e.collapsed,"expanded-keys":S.openKeys,value:G(P),"render-extra":E,"render-icon":$,"onUpdate:value":H,"onUpdate:expandedKeys":M},null,8,["options","inverted","collapsed","expanded-keys","value"])])}}});export{so as _};
