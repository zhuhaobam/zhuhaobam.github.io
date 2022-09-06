import{g as ye}from"./assets-kit-7b9ba32a.js";import{al as ge,c2 as ke,au as _e,aM as $e,m as T,Q as l,bT as be,P as i,n as w,R as re,d as Q,q as he,p as j,b_ as Ce,r as M,V as Se,c as L,aw as C,c3 as de,bO as B,s as me,br as se,t as p,ay as O,bV as Re,bW as Be,W as ce,bx as ze,by as Fe,c4 as Pe,av as Ve,aS as Ne,U as De,c5 as Oe,bQ as Te,bR as We,c6 as He,e as X,v as Ie,h as z,g as $,x as y,z as te,f as oe,j as Le,l as Me,bt as ue,aP as ne,aX as je,ab as Ee}from"./main-e0ba718d.js";import{o as Ue}from"./on-fonts-ready-a6cdcba7.js";import{u as Ae}from"./use-merged-state-c083a3bb.js";import{N as Ke}from"./headers-78b26100.js";import{_ as Ge}from"./text-410dde97.js";import{_ as Xe}from"./Input-96109ebb.js";import{b as fe}from"./route-block-7ae06361.js";import"./use-compitable-4c766fa2.js";import"./use-locale-c93ba637.js";const Ye=e=>{const{primaryColor:o,opacityDisabled:c,borderRadius:f,textColor3:s}=e,u="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},ke),{iconColor:s,textColor:"white",loadingColor:o,opacityDisabled:c,railColor:u,railColorActive:o,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:f,railBorderRadiusMedium:f,railBorderRadiusLarge:f,buttonBorderRadiusSmall:f,buttonBorderRadiusMedium:f,buttonBorderRadiusLarge:f,boxShadowFocus:`0 0 0 2px ${_e(o,{alpha:.2})}`})},Qe={name:"Switch",common:ge,self:Ye},qe=Qe,Je=$e({name:"Watermark",common:ge,self(e){const{fontFamily:o}=e;return{fontFamily:o}}}),Ze=Je,et=T("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[l("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),l("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),l("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),T("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[be({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),l("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),l("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),l("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),i("&:focus",[l("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),w("round",[l("rail","border-radius: calc(var(--n-rail-height) / 2);",[l("button","border-radius: calc(var(--n-button-height) / 2);")])]),re("disabled",[re("icon",[w("rubber-band",[w("pressed",[l("rail",[l("button","max-width: var(--n-button-width-pressed);")])]),l("rail",[i("&:active",[l("button","max-width: var(--n-button-width-pressed);")])]),w("active",[w("pressed",[l("rail",[l("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),l("rail",[i("&:active",[l("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),w("active",[l("rail",[l("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),l("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[l("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[be()]),l("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),w("active",[l("rail","background-color: var(--n-rail-color-active);")]),w("loading",[l("rail",`
 cursor: wait;
 `)]),w("disabled",[l("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),tt=Object.assign(Object.assign({},j.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let Y;const ot=Q({name:"Switch",props:tt,setup(e){Y===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?Y=CSS.supports("width","max(1px)"):Y=!1:Y=!0);const{mergedClsPrefixRef:o,inlineThemeDisabled:c}=he(e),f=j("Switch","-switch",et,qe,e,o),s=Ce(e),{mergedSizeRef:u,mergedDisabledRef:a}=s,g=M(e.defaultValue),n=Se(e,"value"),d=Ae(n,g),m=L(()=>d.value===e.checkedValue),h=M(!1),t=M(!1),v=L(()=>{const{railStyle:r}=e;if(!!r)return r({focused:t.value,checked:m.value})});function b(r){const{"onUpdate:value":S,onChange:R,onUpdateValue:P}=e,{nTriggerFormInput:D,nTriggerFormChange:V}=s;S&&ce(S,r),P&&ce(P,r),R&&ce(R,r),g.value=r,D(),V()}function F(){const{nTriggerFormFocus:r}=s;r()}function W(){const{nTriggerFormBlur:r}=s;r()}function H(){e.loading||a.value||(d.value!==e.checkedValue?b(e.checkedValue):b(e.uncheckedValue))}function E(){t.value=!0,F()}function U(){t.value=!1,W(),h.value=!1}function A(r){e.loading||a.value||r.key===" "&&(d.value!==e.checkedValue?b(e.checkedValue):b(e.uncheckedValue),h.value=!1)}function K(r){e.loading||a.value||r.key===" "&&(r.preventDefault(),h.value=!0)}const I=L(()=>{const{value:r}=u,{self:{opacityDisabled:S,railColor:R,railColorActive:P,buttonBoxShadow:D,buttonColor:V,boxShadowFocus:q,loadingColor:J,textColor:Z,iconColor:x,[C("buttonHeight",r)]:k,[C("buttonWidth",r)]:ee,[C("buttonWidthPressed",r)]:ve,[C("railHeight",r)]:N,[C("railWidth",r)]:G,[C("railBorderRadius",r)]:pe,[C("buttonBorderRadius",r)]:we},common:{cubicBezierEaseInOut:xe}}=f.value;let ae,ie,le;return Y?(ae=`calc((${N} - ${k}) / 2)`,ie=`max(${N}, ${k})`,le=`max(${G}, calc(${G} + ${k} - ${N}))`):(ae=de((B(N)-B(k))/2),ie=de(Math.max(B(N),B(k))),le=B(N)>B(k)?G:de(B(G)+B(k)-B(N))),{"--n-bezier":xe,"--n-button-border-radius":we,"--n-button-box-shadow":D,"--n-button-color":V,"--n-button-width":ee,"--n-button-width-pressed":ve,"--n-button-height":k,"--n-height":ie,"--n-offset":ae,"--n-opacity-disabled":S,"--n-rail-border-radius":pe,"--n-rail-color":R,"--n-rail-color-active":P,"--n-rail-height":N,"--n-rail-width":G,"--n-width":le,"--n-box-shadow-focus":q,"--n-loading-color":J,"--n-text-color":Z,"--n-icon-color":x}}),_=c?me("switch",L(()=>u.value[0]),I,e):void 0;return{handleClick:H,handleBlur:U,handleFocus:E,handleKeyup:A,handleKeydown:K,mergedRailStyle:v,pressed:h,mergedClsPrefix:o,mergedValue:d,checked:m,mergedDisabled:a,cssVars:c?void 0:I,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:o,checked:c,mergedRailStyle:f,onRender:s,$slots:u}=this;s==null||s();const{checked:a,unchecked:g,icon:n,"checked-icon":d,"unchecked-icon":m}=u,h=!(se(n)&&se(d)&&se(m));return p("div",{role:"switch","aria-checked":c,class:[`${e}-switch`,this.themeClass,h&&`${e}-switch--icon`,c&&`${e}-switch--active`,o&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},p("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:f},O(a,t=>O(g,v=>t||v?p("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},p("div",{class:`${e}-switch__rail-placeholder`},p("div",{class:`${e}-switch__button-placeholder`}),t),p("div",{class:`${e}-switch__rail-placeholder`},p("div",{class:`${e}-switch__button-placeholder`}),v)):null)),p("div",{class:`${e}-switch__button`},O(n,t=>O(d,v=>O(m,b=>p(Re,null,{default:()=>this.loading?p(Be,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(v||t)?p("div",{class:`${e}-switch__button-icon`,key:v?"checked-icon":"icon"},v||t):!this.checked&&(b||t)?p("div",{class:`${e}-switch__button-icon`,key:b?"unchecked-icon":"icon"},b||t):null})))),O(a,t=>t&&p("div",{key:"checked",class:`${e}-switch__checked`},t)),O(g,t=>t&&p("div",{key:"unchecked",class:`${e}-switch__unchecked`},t)))))}}),rt=i([T("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[i("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[i("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),i("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[i("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),w("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[i("tr",[i("&:last-child",[i("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),w("single-line",[i("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),i("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),w("single-column",[i("tr",[i("&:not(:last-child)",[i("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),w("striped",[i("tr:nth-of-type(even)",[i("td","background-color: var(--n-td-color-striped)")])]),re("bottom-bordered",[i("tr",[i("&:last-child",[i("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),ze(T("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[i("th",`
 background-color: var(--n-th-color-modal);
 `),i("td",`
 background-color: var(--n-td-color-modal);
 `)])),Fe(T("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[i("th",`
 background-color: var(--n-th-color-popover);
 `),i("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),nt=Object.assign(Object.assign({},j.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),at=Q({name:"Table",props:nt,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:c,mergedRtlRef:f}=he(e),s=j("Table","-table",rt,Pe,e,o),u=Ve("Table",f,o),a=L(()=>{const{size:n}=e,{self:{borderColor:d,tdColor:m,tdColorModal:h,tdColorPopover:t,thColor:v,thColorModal:b,thColorPopover:F,thTextColor:W,tdTextColor:H,borderRadius:E,thFontWeight:U,lineHeight:A,borderColorModal:K,borderColorPopover:I,tdColorStriped:_,tdColorStripedModal:r,tdColorStripedPopover:S,[C("fontSize",n)]:R,[C("tdPadding",n)]:P,[C("thPadding",n)]:D},common:{cubicBezierEaseInOut:V}}=s.value;return{"--n-bezier":V,"--n-td-color":m,"--n-td-color-modal":h,"--n-td-color-popover":t,"--n-td-text-color":H,"--n-border-color":d,"--n-border-color-modal":K,"--n-border-color-popover":I,"--n-border-radius":E,"--n-font-size":R,"--n-th-color":v,"--n-th-color-modal":b,"--n-th-color-popover":F,"--n-th-font-weight":U,"--n-th-text-color":W,"--n-line-height":A,"--n-td-padding":P,"--n-th-padding":D,"--n-td-color-striped":_,"--n-td-color-striped-modal":r,"--n-td-color-striped-popover":S}}),g=c?me("table",L(()=>e.size[0]),a,e):void 0;return{rtlEnabled:u,mergedClsPrefix:o,cssVars:c?void 0:a,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),p("table",{class:[`${o}-table`,this.themeClass,{[`${o}-table--rtl`]:this.rtlEnabled,[`${o}-table--bottom-bordered`]:this.bottomBordered,[`${o}-table--bordered`]:this.bordered,[`${o}-table--single-line`]:this.singleLine,[`${o}-table--single-column`]:this.singleColumn,[`${o}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),it=i([T("watermark-container",`
 position: relative;
 `,[re("selectable",`
 user-select: none;
 -webkit-user-select: none;
 `),w("global-rotate",`
 overflow: hidden;
 `),w("fullscreen",`
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 pointer-events: none;
 position: fixed;
 `)]),T("watermark",`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 pointer-events: none;
 background-repeat: repeat;
 `,[w("fullscreen",`
 position: fixed;
 `),w("global-rotate",`
 position: absolute;
 height: max(284vh, 284vw);
 width: max(284vh, 284vw);
 `)])]);function lt(e){if(!e)return 1;const o=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/o}const dt=Object.assign(Object.assign({},j.props),{debug:Boolean,cross:Boolean,fullscreen:Boolean,width:{type:Number,default:32},height:{type:Number,default:32},zIndex:{type:Number,default:10},xGap:{type:Number,default:0},yGap:{type:Number,default:0},yOffset:{type:Number,default:0},xOffset:{type:Number,default:0},rotate:{type:Number,default:0},image:String,imageOpacity:{type:Number,default:1},imageHeight:Number,imageWidth:Number,content:String,selectable:{type:Boolean,default:!0},fontSize:{type:Number,default:14},fontFamily:String,fontStyle:{type:String,default:"normal"},fontVariant:{type:String,default:""},fontWeight:{type:Number,default:400},fontColor:{type:String,default:"rgba(128, 128, 128, .3)"},fontStretch:{type:String,default:""},lineHeight:{type:Number,default:14},globalRotate:{type:Number,default:0}}),st=Q({name:"Watermark",props:dt,setup(e,{slots:o}){const{mergedClsPrefixRef:c}=he(e),f=j("Watermark","-watermark",it,Ze,e,c),s=M(""),u=Ne?document.createElement("canvas"):null,a=u?u.getContext("2d"):null,g=M(!1);return Ue(()=>g.value=!0),De(()=>{if(!u)return;g.value;const n=lt(a),{xGap:d,yGap:m,width:h,height:t,yOffset:v,xOffset:b,rotate:F,image:W,content:H,fontColor:E,fontStyle:U,fontVariant:A,fontStretch:K,fontWeight:I,fontFamily:_,fontSize:r,lineHeight:S,debug:R}=e,P=(d+h)*n,D=(m+t)*n,V=b*n,q=v*n;if(u.width=P,u.height=D,a){a.translate(0,0);const J=h*n,Z=t*n;if(R&&(a.strokeStyle="grey",a.strokeRect(0,0,J,Z)),a.rotate(F*(Math.PI/180)),W){const x=new Image;x.crossOrigin="anonymous",x.referrerPolicy="no-referrer",x.src=W,x.onload=()=>{a.globalAlpha=e.imageOpacity;const{imageWidth:k,imageHeight:ee}=e;a.drawImage(x,V,q,(e.imageWidth||(ee?x.width*ee/x.height:x.width))*n,(e.imageHeight||(k?x.height*k/x.width:x.height))*n),s.value=u.toDataURL()}}else H&&(R&&(a.strokeStyle="green",a.strokeRect(0,0,J,Z)),a.font=`${U} ${A} ${I} ${K} ${r*n}px/${S*n}px ${_||f.value.self.fontFamily}`,a.fillStyle=E,a.fillText(H,V,q+S*n),s.value=u.toDataURL())}else Oe("watermark","Canvas is not supported in the browser.")}),()=>{var n;const{globalRotate:d,fullscreen:m,zIndex:h}=e,t=c.value,v=d!==0&&m,b="max(142vh, 142vw)",F=p("div",{class:[`${t}-watermark`,d!==0&&`${t}-watermark--global-rotate`,m&&`${t}-watermark--fullscreen`],style:{transform:d?`translateX(-50%) translateY(-50%) rotate(${d}deg)`:void 0,zIndex:v?void 0:h,backgroundSize:`${e.xGap+e.width}px`,backgroundPosition:d===0?e.cross?`${e.width/2}px ${e.height/2}px, 0 0`:"":e.cross?`calc(${b} + ${e.width/2}px) calc(${b} + ${e.height/2}px), ${b} ${b}`:b,backgroundImage:e.cross?`url(${s.value}), url(${s.value})`:`url(${s.value})`}});return e.fullscreen&&!d?F:p("div",{class:[`${t}-watermark-container`,d!==0&&`${t}-watermark-container--global-rotate`,m&&`${t}-watermark-container--fullscreen`,e.selectable&&`${t}-watermark-container--selectable`],style:{zIndex:v?h:void 0}},(n=o.default)===null||n===void 0?void 0:n.call(o),F)}}}),ct=ne(" \u6D4B\u8BD5keep-alive\u7F13\u5B58\u529F\u80FD "),ut=y("tr",null,[y("td",null,"..."),y("td",null,"...")],-1),ht=ne("\u6709good\u6743\u9650"),bt=ne("???"),ft=ne("\u65E0xxx\u6743\u9650"),gt=Q({name:"dashboard-workbench"}),mt=Q({...gt,setup(e){const o=M(!1);return Te(()=>{console.log("\u6FC0\u6D3B\u3010workbench\u3011===keep-alive===onActivated"+new Date)}),We(()=>{console.log("\u505C\u6B62\u3010workbench\u3011===keep-alive===onDeactivated"+new Date)}),(c,f)=>{const s=Ge,u=Ke,a=Xe,g=at,n=st,d=ot,m=je,h=Ee,t=He("permission");return X(),Ie("div",null,[z(u,{prefix:"bar","align-text":"",type:"info"},{default:$(()=>[z(s,{type:"info"},{default:$(()=>[ct]),_:1})]),_:1}),z(a,{type:"text",placeholder:"\u6D4B\u8BD5keep-alive\u7F13\u5B58\u529F\u80FD"}),y("div",null,[z(n,{content:c.$t("page.dashboard.workbench-watermark"),cross:"",selectable:"","font-size":16,"line-height":16,width:192,height:128,"x-offset":12,"y-offset":28,rotate:-15},{default:$(()=>[y("div",null,[z(g,{bordered:!1,"single-line":!1},{default:$(()=>[y("thead",null,[y("tr",null,[y("th",null,te(c.$t("page.dashboard.workbench-fupan")),1),y("th",null,te(c.$t("page.dashboard.workbench-fupan")),1)])]),y("tbody",null,[y("tr",null,[y("td",null,te(c.$t("page.dashboard.workbench-fupan")),1),y("td",null,te(c.$t("page.dashboard.workbench-fupan")),1)]),ut])]),_:1})])]),_:1},8,["content"])]),o.value?(X(),oe(n,{key:0,image:Le(ye)("cafe.png"),cross:"",fullscreen:"","font-size":16,"line-height":16,width:384,height:384,"x-offset":12,"y-offset":0,"image-width":64,"image-opacity":.24},null,8,["image","image-opacity"])):Me("",!0),z(d,{value:o.value,"onUpdate:value":f[0]||(f[0]=v=>o.value=v)},null,8,["value"]),z(h,{title:"\u6709good\u6743\u9650"},{default:$(()=>[ue((X(),oe(m,null,{default:$(()=>[ht]),_:1})),[[t,{action:"good",effect:"disabled"}]])]),_:1}),z(h,{title:"\u6CA1\u6709\u6743\u9650\u79FB\u9664"},{default:$(()=>[ue((X(),oe(m,null,{default:$(()=>[bt]),_:1})),[[t,{action:"xxx"}]])]),_:1}),z(h,{title:"\u65E0xxx\u6743\u9650"},{default:$(()=>[ue((X(),oe(m,null,{default:$(()=>[ft]),_:1})),[[t,{action:"xxx",effect:"disabled"}]])]),_:1})])}}});typeof fe=="function"&&fe(mt);export{mt as default};
