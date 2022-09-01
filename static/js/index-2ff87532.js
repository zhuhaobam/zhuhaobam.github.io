import W from"./index-74112a93.js";import{_ as j}from"./HeadLogo.vue_vue_type_script_setup_true_name_HeadLogo_lang-c4972359.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-80284539.js";import{_ as L}from"./AppMain.vue_vue_type_script_setup_true_name_appMain_lang-4c031a05.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-157955a3.js";import{u as O}from"./full-5ec3a630.js";import{c as A,a as z,d as g,u as S,b as q,e as T,f as E,h as M,r as R,g as U,i as G,s as B,j as J,w as $,o as V,k,l as d,m as K,n as e,p as c,q as s,t as Q,v as X,_ as Y}from"./main-8840c7eb.js";import{l as Z,_ as ee,a as oe}from"./LayoutSider-c4e9adc5.js";import{p as te}from"./interface-b58dc4c0.js";import"./fullscreen-outlined-58542224.js";import"./LightDark.vue_vue_type_script_setup_true_name_lightDark_lang-39a1f9b8.js";import"./Switch-d901f90c.js";import"./use-merged-state-556311e1.js";import"./Tooltip-7c9bce53.js";import"./Popover-92080b5f.js";import"./Follower-a37597bf.js";import"./next-frame-once-c806eabc.js";import"./on-fonts-ready-c6e1bba8.js";import"./use-compitable-5d08eea0.js";import"./HeadCenter-b30326b0.js";import"./tags-227a7921.js";import"./assets-kit-bc859cd0.js";import"./Avatar-22bf75e4.js";import"./Tag-880e537a.js";import"./Dropdown-1b87d144.js";import"./ChevronRight-02b15f3e.js";import"./index.vue_vue_type_script_setup_true_name_HeadBreadcrumb_lang-d891b82a.js";import"./BackTop-f103f2d2.js";import"./unwrap-element-4ff717fe.js";const se=A("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[z("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),z("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),re={position:te,inverted:Boolean,bordered:{type:Boolean,default:!1}},le=g({name:"LayoutHeader",props:Object.assign(Object.assign({},S.props),re),setup(t){const{mergedClsPrefixRef:r,inlineThemeDisabled:u}=q(t),v=S("Layout","-layout-header",se,Z,t,r),p=T(()=>{const{common:{cubicBezierEaseInOut:b},self:a}=v.value,n={"--n-bezier":b};return t.inverted?(n["--n-color"]=a.headerColorInverted,n["--n-text-color"]=a.textColorInverted,n["--n-border-color"]=a.headerBorderColorInverted):(n["--n-color"]=a.headerColor,n["--n-text-color"]=a.textColor,n["--n-border-color"]=a.headerBorderColor),n}),l=u?E("layout-header",T(()=>t.inverted?"a":"b"),p,t):void 0;return{mergedClsPrefix:r,cssVars:u?void 0:p,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var t;const{mergedClsPrefix:r}=this;return(t=this.onRender)===null||t===void 0||t.call(this),M("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),ae={style:{position:"relative"}},ne=g({name:"layoutDefault"}),ie=g({...ne,setup(t){const r=R(null),{toggle:u,enter:v,isFullscreen:p}=U(r),l=O(),b=G(),{theme:a,headerTheme:n,tagTheme:I,mainTheme:P,menuTheme:o,logoTheme:h}=B(b),x=J(),{collapsed:i}=B(x),D=()=>{p.value===!0?v().then(()=>{l.setPage(p.value?"inner:true":"inner:false")}):u().then(()=>{l.setPage(p.value?"inner:true":"inner:false")})};$(i,(_,f)=>{x.setToggleCollapsed(_)},{immediate:!0,deep:!0});const m=R(a!==null);return $(a,(_,f)=>{m.value=_!==null},{immediate:!0,deep:!0}),(_,f)=>{const w=ee,C=le,y=oe;return V(),k(y,{style:{height:"100vh"},"has-sider":""},{default:d(()=>[K("div",ae,[e(h).visible?(V(),k(w,{key:0,inverted:m.value,collapsed:e(i),"collapse-mode":"width","native-scrollbar":!1,"collapsed-width":e(o).collapsedWidth,width:e(o).width,style:c("height:"+e(h).height+"px;border-bottom:1px solid  var(--n-border-color);border-right:1px solid  var(--n-border-color);")},{default:d(()=>[s(j,{style:c("height:"+(e(h).height-1)+"px;"),collapsed:e(i)},null,8,["style","collapsed"])]),_:1},8,["inverted","collapsed","collapsed-width","width","style"])):Q("",!0),s(w,{inverted:m.value,collapsed:e(i),"collapse-mode":"width","collapsed-width":e(o).collapsedWidth,width:e(o).width,"native-scrollbar":!1,bordered:"",style:c("height: calc(100vh - "+(e(h).visible?e(o).top:0)+"px);")},{default:d(()=>[s(H,{"collapsed-width":e(o).collapsedWidth,"collapsed-icon-size":e(o).collapsedIconSize,"icon-size":e(o).iconSize,indent:e(o).indent,"root-indent":e(o).rootIndent,style:c("width:"+(e(i)?e(o).collapsedWidth:e(o).width)+"px;")},null,8,["collapsed-width","collapsed-icon-size","icon-size","indent","root-indent","style"])]),_:1},8,["inverted","collapsed","collapsed-width","width","style"])]),s(y,null,{default:d(()=>[s(C,{bordered:"",style:c("height:"+e(n).height+"px")},{default:d(()=>[s(W,{collapsed:e(i),"onUpdate:collapsed":f[0]||(f[0]=F=>X(i)?i.value=F:null),inverted:m.value},null,8,["collapsed","inverted"])]),_:1},8,["style"]),s(C,{bordered:"",style:c("height:"+e(I).height+"px")},{default:d(()=>[s(N,{onFullScreenDo:D})]),_:1},8,["style"]),s(y,{ref_key:"amRef",ref:r,position:"absolute","content-style":"padding: 0px;",style:c("top: "+e(P).top+"px"),"native-scrollbar":!1},{default:d(()=>[s(L)]),_:1},8,["style"])]),_:1})]),_:1})}}});const He=Y(ie,[["__scopeId","data-v-149ee46e"]]);export{He as default};
