import{d as h,u as k,i as C,c as f,r as F,a as W,o as B,w as D,b as N,e as _,f as g,g as l,h as n,j as e,k as R,l as $}from"./main-69cbe56a.js";import j from"./index-6845c6e2.js";import{_ as v}from"./index.vue_vue_type_script_setup_true_lang-a36e2bd4.js";import{_ as E}from"./index.vue_vue_type_script_setup_true_name_content_lang-f6fd6b40.js";import{_ as L}from"./index.vue_vue_type_script_setup_true_lang-08e10d59.js";import{u as U}from"./full-cde75d7d.js";import{_ as H,a as M}from"./LayoutSider-5e162387.js";import"./fullscreen-outlined-e3e39878.js";import"./index-763f194b.js";import"./assets-kit-034e87c1.js";import"./Ellipsis-f515e45e.js";import"./Tooltip-685f4cb4.js";import"./Popover-c9bc8a91.js";import"./Follower-c603cdb4.js";import"./next-frame-once-c806eabc.js";import"./on-fonts-ready-cc098bbd.js";import"./use-merged-state-142c91b3.js";import"./use-compitable-ab343649.js";import"./text-1a810086.js";import"./index.vue_vue_type_script_setup_true_name_HeadBreadcrumb_lang-54d2440d.js";import"./Dropdown-56e6b0da.js";import"./ChevronRight-ab8a1afe.js";import"./index.vue_vue_type_script_setup_true_name_lightDark_lang-e6ec78ed.js";import"./Switch-bd3cff8e.js";import"./index-ea8d8ab7.js";import"./Avatar-9d60a3b0.js";import"./Tag-ecb90497.js";import"./interface-a0493333.js";import"./light-cab7e107.js";import"./BackTop-b93d133c.js";const T=h({name:"layoutDefault"}),he=h({...T,setup(q){const p=k(),t=U(),s=C("provide-screen"),c=f(()=>p.headerSetting.mTheme!==null),o=f(()=>p.menuSetting.collapsed),d=F(null),{toggle:S,enter:x,isFullscreen:r,isSupported:y}=W(d),P=()=>{y&&(r.value===!0?x().then(()=>{t.setPage(r.value?"inner:true":"inner:false")}):S().then(()=>{t.setPage(r.value?"inner:true":"inner:false")}))};B(()=>{document.addEventListener("fullscreenchange",m)}),D(()=>r.value,(a,u)=>{t.inner&&!t.getPage.endsWith(a?"true":"false")?t.setPage(a?"inner:true":"inner:false"):t.all&&!t.getPage.endsWith(a?"true":"false")&&t.setPage(a?"all:true":"all:false")});const m=()=>{t.inner&&!t.getPage.endsWith(r.value?"true":"false")?t.setPage(r.value?"inner:true":"inner:false"):t.all&&!t.getPage.endsWith(r.value?"true":"false")&&t.setPage(r.value?"all:true":"all:false")};return N(()=>{document.removeEventListener("fullscreenchange",m)}),(a,u)=>{const b=H,i=M;return _(),g(i,{"h-screen":"","max-h-screen":""},{default:l(()=>[n(j,{collapsed:e(o),"onUpdate:collapsed":u[0]||(u[0]=w=>R(o)?o.value=w:null),inverted:e(c),screen:e(s)},{menu:l(()=>[n(v,{collapsed:!1,inverted:e(c),screen:e(s),style:{width:"220px"}},null,8,["inverted","screen"])]),_:1},8,["collapsed","inverted","screen"]),n(i,{position:"absolute",style:{top:"64px"},"has-sider":""},{default:l(()=>[e(s)!=="xs"&&e(s)!=="s"?(_(),g(b,{key:0,"collapse-mode":"width","collapsed-width":96,width:272,collapsed:e(o),inverted:e(c),"native-scrollbar":!1,bordered:""},{default:l(()=>[n(v,{collapsed:e(o),inverted:e(c),screen:e(s)},null,8,["collapsed","inverted","screen"])]),_:1},8,["collapsed","inverted"])):$("",!0),n(i,{position:"static"},{default:l(()=>[n(i,{"native-scrollbar":!1},{default:l(()=>[n(L,{screen:e(s),onFullScreenDo:P},null,8,["screen"])]),_:1}),n(i,{ref_key:"contentRef",ref:d,embedded:"","content-style":"padding:  "+(e(s)!=="xs"&&e(s)!=="s"?24:12)+"px;",style:{height:"calc(100vh - 114px)"},"native-scrollbar":!1},{default:l(()=>[n(E)]),_:1},8,["content-style"])]),_:1})]),_:1})]),_:1})}}});export{he as default};
