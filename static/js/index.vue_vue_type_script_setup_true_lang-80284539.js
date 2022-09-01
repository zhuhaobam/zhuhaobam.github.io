import{d as k,h as p,G as X,H as V,e as C,I as U,J as B,K as Ce,L as ze,r as F,M as ve,O as ye,P as Y,Q,R as b,c as f,a as R,S as m,T as G,U as Ie,b as we,u as he,V as Se,W as ae,X as ce,Y as $,f as Re,y as Ae,i as He,j as Ne,s as de,w as W,Z as Pe,$ as Ke,a0 as Te,a1 as Me,a2 as Oe,a3 as Ee,a4 as Fe,n as Z,a5 as ke,a6 as _e,o as Le,x as $e,q as je,a7 as Ve,N as Be}from"./main-8840c7eb.js";import{u as De}from"./tags-227a7921.js";import{l as Ue}from"./interface-b58dc4c0.js";import{_ as qe,c as Ge}from"./Dropdown-1b87d144.js";import{_ as We}from"./Tooltip-7c9bce53.js";import{u as se}from"./use-merged-state-556311e1.js";import{u as Ze}from"./use-compitable-5d08eea0.js";const Je=k({name:"ChevronDownFilled",render(){return p("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),q=X("n-menu"),ee=X("n-submenu"),oe=X("n-menu-item-group"),J=8;function te(e){const r=V(q),{props:n,mergedCollapsedRef:l}=r,a=V(ee,null),d=V(oe,null),u=C(()=>n.mode==="horizontal"),s=C(()=>u.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=C(()=>{var v;return Math.max((v=n.collapsedIconSize)!==null&&v!==void 0?v:n.iconSize,n.iconSize)}),y=C(()=>{var v;return!u.value&&e.root&&l.value&&(v=n.collapsedIconSize)!==null&&v!==void 0?v:n.iconSize}),H=C(()=>{if(u.value)return;const{collapsedWidth:v,indent:N,rootIndent:P}=n,{root:A,isGroup:K}=e,S=P===void 0?N:P;if(A)return l.value?v/2-c.value/2:S;if(d)return N/2+d.paddingLeftRef.value;if(a)return(K?N/2:N)+a.paddingLeftRef.value}),I=C(()=>{const{collapsedWidth:v,indent:N,rootIndent:P}=n,{value:A}=c,{root:K}=e;return u.value||!K||!l.value?J:(P===void 0?N:P)+A+J-(v+A)/2});return{dropdownPlacement:s,activeIconSize:y,maxIconSize:c,paddingLeft:H,iconMarginRight:I,NMenu:r,NSubmenu:a}}const ne={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},pe=Object.assign(Object.assign({},ne),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Qe=k({name:"MenuOptionGroup",props:pe,setup(e){U(ee,null);const r=te(e);U(oe,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:n,props:l}=V(q);return function(){const{value:a}=n,d=r.paddingLeft.value,{nodeProps:u}=l,s=u==null?void 0:u(e.tmNode.rawNode);return p("div",{class:`${a}-menu-item-group`,role:"group"},p("div",Object.assign({},s,{class:[`${a}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",d!==void 0?`padding-left: ${d}px;`:""]}),B(e.title),e.extra?p(Ce,null," ",B(e.extra)):null),p("div",null,e.tmNodes.map(c=>re(c,l))))}}}),fe=k({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:r}=V(q);return{menuProps:r,style:C(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:C(()=>{const{maxIconSize:n,activeIconSize:l,iconMarginRight:a}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${l}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:n,renderLabel:l,renderExtra:a,expandIcon:d}}=this,u=n?n(r.rawNode):B(this.icon);return p("div",{onClick:s=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&p("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),p("div",{class:`${e}-menu-item-content-header`,role:"none"},l?l(r.rawNode):B(this.title),this.extra||a?p("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(r.rawNode):B(this.extra)):null),this.showArrow?p(ze,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>d?d(r.rawNode):p(Je,null)}):null)}}),ge=Object.assign(Object.assign({},ne),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Xe=k({name:"Submenu",props:ge,setup(e){const r=te(e),{NMenu:n,NSubmenu:l}=r,{props:a,mergedCollapsedRef:d,mergedThemeRef:u}=n,s=C(()=>{const{disabled:v}=e;return l!=null&&l.mergedDisabledRef.value||a.disabled?!0:v}),c=F(!1);U(ee,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:s}),U(oe,null);function y(){const{onClick:v}=e;v&&v()}function H(){s.value||(d.value||n.toggleExpand(e.internalKey),y())}function I(v){c.value=v}return{menuProps:a,mergedTheme:u,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:c,paddingLeft:r.paddingLeft,mergedDisabled:s,mergedValue:n.mergedValueRef,childActive:ve(()=>n.activePathRef.value.includes(e.internalKey)),collapsed:C(()=>a.mode==="horizontal"?!1:d.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!s.value&&(a.mode==="horizontal"||d.value)),handlePopoverShowChange:I,handleClick:H}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:n,renderLabel:l}}=this,a=()=>{const{isHorizontal:u,paddingLeft:s,collapsed:c,mergedDisabled:y,maxIconSize:H,activeIconSize:I,title:v,childActive:N,icon:P,handleClick:A,menuProps:{nodeProps:K},dropdownShow:S,iconMarginRight:_,tmNode:M,mergedClsPrefix:D}=this,O=K==null?void 0:K(M.rawNode);return p("div",Object.assign({},O,{class:[`${D}-menu-item`,O==null?void 0:O.class],role:"menuitem"}),p(fe,{tmNode:M,paddingLeft:s,collapsed:c,disabled:y,iconMarginRight:_,maxIconSize:H,activeIconSize:I,title:v,extra:this.extra,showArrow:!u,childActive:N,clsPrefix:D,icon:P,hover:S,onClick:A}))},d=()=>p(ye,null,{default:()=>{const{tmNodes:u,collapsed:s}=this;return s?null:p("div",{class:`${r}-submenu-children`,role:"menu"},u.map(c=>re(c,this.menuProps)))}});return this.root?p(qe,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:l}),{default:()=>p("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:d())}):p("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),d())}}),xe=Object.assign(Object.assign({},ne),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Ye=k({name:"MenuOption",props:xe,setup(e){const r=te(e),{NSubmenu:n,NMenu:l}=r,{props:a,mergedClsPrefixRef:d,mergedCollapsedRef:u}=l,s=n?n.mergedDisabledRef:{value:!1},c=C(()=>s.value||e.disabled);function y(I){const{onClick:v}=e;v&&v(I)}function H(I){c.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),y(I))}return{mergedClsPrefix:d,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:a,dropdownEnabled:ve(()=>e.root&&u.value&&a.mode!=="horizontal"&&!c.value),selected:C(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:H}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:n,menuProps:{renderLabel:l,nodeProps:a}}=this,d=a==null?void 0:a(n.rawNode);return p("div",Object.assign({},d,{role:"menuitem",class:[`${e}-menu-item`,d==null?void 0:d.class]}),p(We,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(n.rawNode):B(this.title),trigger:()=>p(fe,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),eo=k({name:"MenuDivider",setup(){const e=V(q),{mergedClsPrefixRef:r,isHorizontalRef:n}=e;return()=>n.value?null:p("div",{class:`${r.value}-menu-divider`})}}),oo=Y(pe),to=Y(xe),no=Y(ge);function ro(e){return e.type==="divider"||e.type==="render"}function io(e){return e.type==="divider"}function re(e,r){const{rawNode:n}=e,{show:l}=n;if(typeof l=="boolean"&&!l)return null;if(ro(n))return io(n)?p(eo,Object.assign({key:e.key},n.props)):null;const{labelField:a}=r,{key:d,level:u,isGroup:s}=e,c=Object.assign(Object.assign({},n),{title:n.title||n[a],extra:n.titleExtra||n.extra,key:d,internalKey:d,level:u,root:u===0,isGroup:s});return e.children?e.isGroup?p(Qe,Q(c,oo,{tmNode:e,tmNodes:e.children,key:d})):p(Xe,Q(c,no,{key:d,rawNodes:n[r.childrenField],tmNodes:e.children,tmNode:e})):p(Ye,Q(c,to,{key:d,tmNode:e}))}const ue=[b("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[b("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],me=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],lo=b([f("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[R("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[f("submenu","margin: 0;"),f("menu-item","margin: 0;"),f("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[b("&::before","display: none;"),R("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),f("menu-item-content",[R("selected",[m("icon","color: var(--n-item-icon-color-active-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-horizontal);"),m("extra","color: var(--n-item-text-color-active-horizontal);")])]),R("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),m("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),G("disabled",[G("selected, child-active",[b("&:focus-within",me)]),R("selected",[j(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),R("child-active",[j(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),j("border-bottom: 2px solid var(--n-border-color-horizontal);",me)]),f("menu-item-content-header",[b("a","color: var(--n-item-text-color-horizontal);")])])]),R("collapsed",[f("menu-item-content",[R("selected",[b("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),f("menu-item-content-header","opacity: 0;"),m("arrow","opacity: 0;"),m("icon","color: var(--n-item-icon-color-collapsed);")])]),f("menu-item",`
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
 `),R("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),R("collapsed",[m("arrow","transform: rotate(0);")]),R("selected",[b("&::before","background-color: var(--n-item-color-active);"),m("arrow","color: var(--n-arrow-color-active);"),m("icon","color: var(--n-item-icon-color-active);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[b("a","color: var(--n-item-text-color-active);"),m("extra","color: var(--n-item-text-color-active);")])]),R("child-active",[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[b("a",`
 color: var(--n-item-text-color-child-active);
 `),m("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),m("arrow",`
 color: var(--n-arrow-color-child-active);
 `),m("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),G("disabled",[G("selected, child-active",[b("&:focus-within",ue)]),R("selected",[j(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[b("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),R("child-active",[j(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[b("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),R("selected",[j(null,[b("&::before","background-color: var(--n-item-color-active-hover);")])]),j(null,ue)]),m("icon",`
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
 `)]),m("extra",`
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
 `,[Ie({duration:".2s"})])]),f("menu-item-group",[f("menu-item-group-title",`
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
 `)]);function j(e,r){return[R("hover",e,r),b("&:hover",e,r)]}const ao=Object.assign(Object.assign({},he.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),co=k({name:"Menu",props:ao,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=we(e),l=he("Menu","-menu",lo,Se,e,r),a=V(Ue,null),d=C(()=>{var h;const{collapsed:x}=e;if(x!==void 0)return x;if(a){const{collapseModeRef:o,collapsedRef:g}=a;if(o.value==="width")return(h=g.value)!==null&&h!==void 0?h:!1}return!1}),u=C(()=>{const{keyField:h,childrenField:x,disabledField:o}=e;return Ge(e.items||e.options,{getChildren(g){return g[x]},getDisabled(g){return g[o]},getKey(g){var i;return(i=g[h])!==null&&i!==void 0?i:g.name}})}),s=C(()=>new Set(u.value.treeNodes.map(h=>h.key))),{watchProps:c}=e,y=F(null);c!=null&&c.includes("defaultValue")?ae(()=>{y.value=e.defaultValue}):y.value=e.defaultValue;const H=ce(e,"value"),I=se(H,y),v=F([]),N=()=>{v.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(I.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?ae(N):N();const P=Ze(e,["expandedNames","expandedKeys"]),A=se(P,v),K=C(()=>u.value.treeNodes),S=C(()=>u.value.getPath(I.value).keyPath);U(q,{props:e,mergedCollapsedRef:d,mergedThemeRef:l,mergedValueRef:I,mergedExpandedKeysRef:A,activePathRef:S,mergedClsPrefixRef:r,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:ce(e,"inverted"),doSelect:_,toggleExpand:D});function _(h,x){const{"onUpdate:value":o,onUpdateValue:g,onSelect:i}=e;g&&$(g,h,x),o&&$(o,h,x),i&&$(i,h,x),y.value=h}function M(h){const{"onUpdate:expandedKeys":x,onUpdateExpandedKeys:o,onExpandedNamesChange:g,onOpenNamesChange:i}=e;x&&$(x,h),o&&$(o,h),g&&$(g,h),i&&$(i,h),v.value=h}function D(h){const x=Array.from(A.value),o=x.findIndex(g=>g===h);if(~o)x.splice(o,1);else{if(e.accordion&&s.value.has(h)){const g=x.findIndex(i=>s.value.has(i));g>-1&&x.splice(g,1)}x.push(h)}M(x)}const O=h=>{const x=u.value.getPath(h!=null?h:I.value,{includeSelf:!1}).keyPath;if(!x.length)return;const o=Array.from(A.value),g=new Set([...o,...x]);e.accordion&&s.value.forEach(i=>{g.has(i)&&!x.includes(i)&&g.delete(i)}),M(Array.from(g))},L=C(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:x},self:o}=l.value,{borderRadius:g,borderColorHorizontal:i,fontSize:z,itemHeight:w,dividerColor:T}=o,t={"--n-divider-color":T,"--n-bezier":x,"--n-font-size":z,"--n-border-color-horizontal":i,"--n-border-radius":g,"--n-item-height":w};return h?(t["--n-group-text-color"]=o.groupTextColorInverted,t["--n-color"]=o.colorInverted,t["--n-item-text-color"]=o.itemTextColorInverted,t["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,t["--n-item-text-color-active"]=o.itemTextColorActiveInverted,t["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,t["--n-item-icon-color"]=o.itemIconColorInverted,t["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,t["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,t["--n-arrow-color"]=o.arrowColorInverted,t["--n-arrow-color-hover"]=o.arrowColorHoverInverted,t["--n-arrow-color-active"]=o.arrowColorActiveInverted,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,t["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,t["--n-item-color-hover"]=o.itemColorHoverInverted,t["--n-item-color-active"]=o.itemColorActiveInverted,t["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(t["--n-group-text-color"]=o.groupTextColor,t["--n-color"]=o.color,t["--n-item-text-color"]=o.itemTextColor,t["--n-item-text-color-hover"]=o.itemTextColorHover,t["--n-item-text-color-active"]=o.itemTextColorActive,t["--n-item-text-color-child-active"]=o.itemTextColorChildActive,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,t["--n-item-icon-color"]=o.itemIconColor,t["--n-item-icon-color-hover"]=o.itemIconColorHover,t["--n-item-icon-color-active"]=o.itemIconColorActive,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,t["--n-arrow-color"]=o.arrowColor,t["--n-arrow-color-hover"]=o.arrowColorHover,t["--n-arrow-color-active"]=o.arrowColorActive,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,t["--n-arrow-color-child-active"]=o.arrowColorChildActive,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,t["--n-item-color-hover"]=o.itemColorHover,t["--n-item-color-active"]=o.itemColorActive,t["--n-item-color-active-hover"]=o.itemColorActiveHover,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),t}),E=n?Re("menu",C(()=>e.inverted?"a":"b"),L,e):void 0;return{mergedClsPrefix:r,controlledExpandedKeys:P,uncontrolledExpanededKeys:v,mergedExpandedKeys:A,uncontrolledValue:y,mergedValue:I,activePath:S,tmNodes:K,mergedTheme:l,mergedCollapsed:d,cssVars:n?void 0:L,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender,showOption:O}},render(){const{mergedClsPrefix:e,mode:r,themeClass:n,onRender:l}=this;return l==null||l(),p("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${r}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>re(a,this.$props)))}}),go=k({__name:"index",props:{collapsedIconSize:{default:24},collapsedWidth:{default:48},iconSize:{default:20},indent:{default:32},rootIndent:{default:32}},setup(e){const r=e,{t:n}=Ae(),l=De(),a=He(),d=Ne(),{locale:u,collapsed:s}=de(d),{theme:c,menuTheme:y}=de(a),H=F({}),I=F(0);W(s,(i,z)=>{if(s.value){const w=r.collapsedIconSize<y.value.minHeight?y.value.minHeight:r.collapsedIconSize+y.value.compensate;H.value={itemHeight:w+"px"},I.value=r.collapsedIconSize}else H.value={itemHeight:y.value.minHeight+"px"},I.value=y.value.minHeight},{immediate:!0,deep:!0});const v=Pe.map(i=>{var w;return((w=i==null?void 0:i.meta)==null?void 0:w.layout)===!1?i:Ke([i])[0]}),N=Te(v),P=Me(N),A=F([]);W(u,(i,z)=>{A.value=Oe(P,n)},{immediate:!0,deep:!0});const K=F(c!==null);W(c,(i,z)=>{K.value=i!==null},{immediate:!0,deep:!0});const S=Ee(),_=S.matched,M=F(S.name),O=(_&&_.length?_.map(i=>i.name):[]).filter(i=>i),L=Fe({openKeys:O}),E=C(()=>Z(M));ke(()=>{var T,t;const i=S.matched,z=i[i.length-1],w={path:z.path,params:S.params,breadcrumb:(T=z.meta.breadcrumb)!=null?T:"",icon:(t=z.meta.icon)!=null?t:""};l.addTag(w)}),W(()=>S.fullPath,()=>{var t,ie,le;const i=_e(S.matched);L.openKeys=i.map(be=>be.name);const z=((t=S.meta)==null?void 0:t.activeMenu)||"";M.value=z||S.name;const w=i[i.length-1],T={path:w.path,params:S.params,breadcrumb:(ie=w.meta.breadcrumb)!=null?ie:"",icon:(le=w.meta.icon)!=null?le:""};l.addTag(T)});function h(i,z){/http(s)?:/.test(i)&&window.open(i)}function x(i){if(!i)return;const z=i.find(T=>L.openKeys.indexOf(T)===-1),w=o(z);L.openKeys=w?z?[z]:[]:i}function o(i){if(!i)return!1;const z=[];for(const{children:w,key:T}of Z(A))w&&w.length&&z.push(T);return z.includes(i)}function g(i){return p(Be,Ve(i.menuRenderIcon))}return(i,z)=>{const w=co;return Le(),$e("div",null,[je(w,{"theme-overrides":H.value,accordion:"",options:A.value,inverted:K.value,mode:"vertical",collapsed:Z(s),"collapsed-width":r.collapsedWidth,"collapsed-icon-size":I.value,"icon-size":r.iconSize,indent:r.indent,"root-indent":r.rootIndent,"expanded-keys":L.openKeys,value:Z(E),"render-icon":g,"onUpdate:value":h,"onUpdate:expandedKeys":x},null,8,["theme-overrides","options","inverted","collapsed","collapsed-width","collapsed-icon-size","icon-size","indent","root-indent","expanded-keys","value"])])}}});export{go as _};
