import $ from"./index-1d86f57f.js";import{_ as B}from"./HeadLogo.vue_vue_type_script_setup_true_name_HeadLogo_lang-0908dcc8.js";import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-1dcf7c7a.js";import{_ as I}from"./AppMain.vue_vue_type_script_setup_true_name_appMain_lang-96ddd1f6.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-dbcca8a0.js";import{u as A}from"./full-b3859724.js";import{d as x,r as f,u as j,a as H,s as v,b as P,w as y,o as g,c as w,e as s,f as U,g as e,n as i,h as o,i as q,j as E,_ as G}from"./main-45698fd2.js";import{_ as J,a as K,b as L}from"./LayoutSider-cf546f77.js";import"./fullscreen-outlined-74ace1a3.js";import"./LightDark.vue_vue_type_script_setup_true_name_lightDark_lang-f62f4108.js";import"./Switch-d3488160.js";import"./use-merged-state-20fa75c4.js";import"./Tooltip-dae037a3.js";import"./Popover-f7a26f7d.js";import"./on-fonts-ready-0d9e822f.js";import"./use-compitable-fc605ee2.js";import"./HeadCenter-88416f20.js";import"./tags-1009618b.js";import"./assets-kit-bc859cd0.js";import"./Avatar-761a7fa5.js";import"./Tag-251ebf7f.js";import"./Ellipsis-2746c1cd.js";import"./Dropdown-3e2330df.js";import"./index.vue_vue_type_script_setup_true_name_HeadBreadcrumb_lang-5557f0db.js";import"./Menu-5479c491.js";const M={style:{position:"relative"}},O=x({name:"layoutDefault"}),Q=x({...O,setup(X){const c=f(null),{toggle:b,enter:S,isFullscreen:T}=j(c),z=A(),V=H(),{theme:m,headerTheme:k,tagTheme:C,mainTheme:F,menuTheme:t,logoTheme:a}=v(V),_=P(),{collapsed:l}=v(_),R=()=>{T.value===!0?S():b(),z.setPage("inner")};y(l,(r,d)=>{_.setToggleCollapsed(r)},{immediate:!0,deep:!0});const n=f(m!==null);return y(m,(r,d)=>{n.value=r!==null},{immediate:!0,deep:!0}),(r,d)=>{const u=J,h=K,p=L;return g(),w(p,{style:{height:"100vh"},"has-sider":""},{default:s(()=>[U("div",M,[e(a).visible?(g(),w(u,{key:0,inverted:n.value,collapsed:e(l),"collapse-mode":"width","native-scrollbar":!1,"collapsed-width":e(t).collapsedWidth,width:e(t).width,style:i("height:"+e(a).height+"px;border-bottom:1px solid  var(--n-border-color);border-right:1px solid  var(--n-border-color);")},{default:s(()=>[o(B,{style:i("height:"+(e(a).height-1)+"px;"),collapsed:e(l)},null,8,["style","collapsed"])]),_:1},8,["inverted","collapsed","collapsed-width","width","style"])):q("",!0),o(u,{inverted:n.value,collapsed:e(l),"collapse-mode":"width","collapsed-width":e(t).collapsedWidth,width:e(t).width,"native-scrollbar":!1,bordered:"",style:i("height: calc(100vh - "+(e(a).visible?e(t).top:0)+"px);")},{default:s(()=>[o(D,{"collapsed-width":e(t).collapsedWidth,"collapsed-icon-size":e(t).collapsedIconSize,"icon-size":e(t).iconSize,indent:e(t).indent,"root-indent":e(t).rootIndent,style:i("width:"+(e(l)?e(t).collapsedWidth:e(t).width)+"px;")},null,8,["collapsed-width","collapsed-icon-size","icon-size","indent","root-indent","style"])]),_:1},8,["inverted","collapsed","collapsed-width","width","style"])]),o(p,null,{default:s(()=>[o(h,{bordered:"",style:i("height:"+e(k).height+"px")},{default:s(()=>[o($,{collapsed:e(l),"onUpdate:collapsed":d[0]||(d[0]=W=>E(l)?l.value=W:null),inverted:n.value},null,8,["collapsed","inverted"])]),_:1},8,["style"]),o(h,{bordered:"",style:i("height:"+e(C).height+"px")},{default:s(()=>[o(N,{onFullScreenDo:R})]),_:1},8,["style"]),o(p,{ref_key:"amRef",ref:c,position:"absolute","content-style":"padding: 0px;",style:i("top: "+e(F).top+"px"),"native-scrollbar":!1},{default:s(()=>[o(I)]),_:1},8,["style"])]),_:1})]),_:1})}}});const Se=G(Q,[["__scopeId","data-v-700d2573"]]);export{Se as default};