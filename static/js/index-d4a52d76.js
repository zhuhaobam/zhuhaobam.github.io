import{aA as Z,a6 as f,Z as o,ai as q,$ as k,a5 as M,bt as Q,bu as U,d as O,a1 as H,O as j,cJ as X,G as w,ap as B,a4 as J,bN as Y,H as c,W as ee,an as I,a9 as te,o as oe,c as re,e as p,h as y,T as u,f as V}from"./main-6d9c20bc.js";import{u as ne}from"./use-compitable-8bdd7ecc.js";import{g as se}from"./get-slot-79243e51.js";import{b as N}from"./route-block-7ae06361.js";function W(t,s="default",i=[]){const{children:n}=t;if(n!==null&&typeof n=="object"&&!Array.isArray(n)){const l=n[s];if(typeof l=="function")return l()}return i}let G=!1;function ie(){if(!!Z&&!!window.CSS&&!G&&(G=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const K=Symbol("DESCRIPTION_ITEM_FLAG");function le(t){return typeof t=="object"&&t&&!Array.isArray(t)?t.type&&t.type[K]:!1}const ae=f([o("descriptions",{fontSize:"var(--n-font-size)"},[o("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[o("descriptions-table-header",{padding:"var(--n-th-padding)"}),o("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),q("bordered",[o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[f("&:last-child",[o("descriptions-table-content",{paddingBottom:0})])])])])]),k("left-label-placement",[o("descriptions-table-content",[f("> *",{verticalAlign:"top"})])]),k("left-label-align",[f("th",{textAlign:"left"})]),k("center-label-align",[f("th",{textAlign:"center"})]),k("right-label-align",[f("th",{textAlign:"right"})]),k("bordered",[o("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[o("descriptions-table",[o("descriptions-table-row",[f("&:not(:last-child)",[o("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),o("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[f("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-content",[f("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),o("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),o("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[o("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[o("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[o("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),o("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[M("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),M("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),Q(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),U(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ce=Object.assign(Object.assign({},j.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),de=O({name:"Descriptions",props:ce,setup(t){const{mergedClsPrefixRef:s,inlineThemeDisabled:i}=H(t),n=j("Descriptions","-descriptions",ae,X,t,s),l=w(()=>{const{size:d,bordered:g}=t,{common:{cubicBezierEaseInOut:b},self:{titleTextColor:e,thColor:v,thColorModal:h,thColorPopover:_,thTextColor:C,thFontWeight:A,tdTextColor:F,tdColor:r,tdColorModal:z,tdColorPopover:D,borderColor:m,borderColorModal:S,borderColorPopover:$,borderRadius:P,lineHeight:x,[B("fontSize",d)]:R,[B(g?"thPaddingBordered":"thPadding",d)]:T,[B(g?"tdPaddingBordered":"tdPadding",d)]:E}}=n.value;return{"--n-title-text-color":e,"--n-th-padding":T,"--n-td-padding":E,"--n-font-size":R,"--n-bezier":b,"--n-th-font-weight":A,"--n-line-height":x,"--n-th-text-color":C,"--n-td-text-color":F,"--n-th-color":v,"--n-th-color-modal":h,"--n-th-color-popover":_,"--n-td-color":r,"--n-td-color-modal":z,"--n-td-color-popover":D,"--n-border-radius":P,"--n-border-color":m,"--n-border-color-modal":S,"--n-border-color-popover":$}}),a=i?J("descriptions",w(()=>{let d="";const{size:g,bordered:b}=t;return b&&(d+="a"),d+=g[0],d}),l,t):void 0;return{mergedClsPrefix:s,cssVars:i?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender,compitableColumn:ne(t,["columns","column"]),inlineThemeDisabled:i}},render(){const t=this.$slots.default,s=t?Y(t()):[];s.length;const{compitableColumn:i,labelPlacement:n,labelAlign:l,size:a,bordered:d,title:g,cssVars:b,mergedClsPrefix:e,separator:v,onRender:h}=this;h==null||h();const _=s.filter(r=>le(r)),C={span:0,row:[],secondRow:[],rows:[]},F=_.reduce((r,z,D)=>{const m=z.props||{},S=_.length-1===D,$=["label"in m?m.label:W(z,"label")],P=[W(z)],x=m.span||1,R=r.span;r.span+=x;const T=m.labelStyle||m["label-style"]||this.labelStyle,E=m.contentStyle||m["content-style"]||this.contentStyle;if(n==="left")d?r.row.push(c("th",{class:`${e}-descriptions-table-header`,colspan:1,style:T},$),c("td",{class:`${e}-descriptions-table-content`,colspan:S?(i-R)*2+1:x*2-1,style:E},P)):r.row.push(c("td",{class:`${e}-descriptions-table-content`,colspan:S?(i-R)*2:x*2},c("span",{class:`${e}-descriptions-table-content__label`,style:T},[...$,v&&c("span",{class:`${e}-descriptions-separator`},v)]),c("span",{class:`${e}-descriptions-table-content__content`,style:E},P)));else{const L=S?(i-R)*2:x*2;r.row.push(c("th",{class:`${e}-descriptions-table-header`,colspan:L,style:T},$)),r.secondRow.push(c("td",{class:`${e}-descriptions-table-content`,colspan:L,style:E},P))}return(r.span>=i||S)&&(r.span=0,r.row.length&&(r.rows.push(r.row),r.row=[]),n!=="left"&&r.secondRow.length&&(r.rows.push(r.secondRow),r.secondRow=[])),r},C).rows.map(r=>c("tr",{class:`${e}-descriptions-table-row`},r));return c("div",{style:b,class:[`${e}-descriptions`,this.themeClass,`${e}-descriptions--${n}-label-placement`,`${e}-descriptions--${l}-label-align`,`${e}-descriptions--${a}-size`,d&&`${e}-descriptions--bordered`]},g||this.$slots.header?c("div",{class:`${e}-descriptions-header`},g||se(this,"header")):null,c("div",{class:`${e}-descriptions-table-wrapper`},c("table",{class:`${e}-descriptions-table`},c("tbody",null,F))))}}),pe={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},be=O({name:"DescriptionsItem",[K]:!0,props:pe,render(){return null}}),ue=t=>{const{primaryColor:s,successColor:i,warningColor:n,errorColor:l,infoColor:a,fontWeightStrong:d}=t;return{fontWeight:d,rotate:"252deg",colorStartPrimary:I(s,{alpha:.6}),colorEndPrimary:s,colorStartInfo:I(a,{alpha:.6}),colorEndInfo:a,colorStartWarning:I(n,{alpha:.6}),colorEndWarning:n,colorStartError:I(l,{alpha:.6}),colorEndError:l,colorStartSuccess:I(i,{alpha:.6}),colorEndSuccess:i}},ge={name:"GradientText",common:ee,self:ue},he=ge,me=o("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),fe=Object.assign(Object.assign({},j.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),ve=O({name:"GradientText",props:fe,setup(t){ie();const{mergedClsPrefixRef:s,inlineThemeDisabled:i}=H(t),n=w(()=>{const{type:e}=t;return e==="danger"?"error":e}),l=w(()=>{let e=t.size||t.fontSize;return e&&(e=te(e)),e||void 0}),a=w(()=>{const e=t.color||t.gradient;if(typeof e=="string")return e;if(e){const v=e.deg||0,h=e.from,_=e.to;return`linear-gradient(${v}deg, ${h} 0%, ${_} 100%)`}}),d=j("GradientText","-gradient-text",me,he,t,s),g=w(()=>{const{value:e}=n,{common:{cubicBezierEaseInOut:v},self:{rotate:h,[B("colorStart",e)]:_,[B("colorEnd",e)]:C,fontWeight:A}}=d.value;return{"--n-bezier":v,"--n-rotate":h,"--n-color-start":_,"--n-color-end":C,"--n-font-weight":A}}),b=i?J("gradient-text",w(()=>n.value[0]),g,t):void 0;return{mergedClsPrefix:s,compatibleType:n,styleFontSize:l,styleBgImage:a,cssVars:i?void 0:g,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){const{mergedClsPrefix:t,onRender:s}=this;return s==null||s(),c("span",{class:[`${t}-gradient-text`,`${t}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),_e=u(" xicons from '@vicons/ionicons5'"),ye=V("br",null,null,-1),we=u("naiveui\u63A8\u8350\u56FE\u6807\u5730\u5740 "),Se=u(" https://www.xicons.org/#/ "),xe=u(" unocss from 'unocss' "),Ce=V("br",null,null,-1),ze=u("\u539F\u5B50css\u641C\u7D22\u8783\u87F9 "),$e=u("https://uno.antfu.me/"),Pe=u(" naiveui from 'naive-ui' "),Re=V("br",null,null,-1),Te=u("naiveui\u8783\u87F9"),Ee=u("https://www.naiveui.com/"),ke=u(" vueuse from '@vueuse/core' "),Ie=V("br",null,null,-1),Be=u("vueuse\u5DE5\u5177\u5E93\u8783\u87F9"),Oe=u("https://vueuse.org/guide/"),Ae=O({name:"tool"}),je=O({...Ae,setup(t){return(s,i)=>{const n=ve,l=be,a=de;return oe(),re(a,{"label-placement":"left",bordered:""},{default:p(()=>[y(l,null,{label:p(()=>[_e,ye,we]),default:p(()=>[y(n,{type:"success"},{default:p(()=>[Se]),_:1})]),_:1}),y(l,null,{label:p(()=>[xe,Ce,ze]),default:p(()=>[y(n,{type:"success"},{default:p(()=>[$e]),_:1})]),_:1}),y(l,null,{label:p(()=>[Pe,Re,Te]),default:p(()=>[y(n,{type:"success"},{default:p(()=>[Ee]),_:1})]),_:1}),y(l,null,{label:p(()=>[ke,Ie,Be]),default:p(()=>[y(n,{type:"success"},{default:p(()=>[Oe]),_:1})]),_:1})]),_:1})}}});typeof N=="function"&&N(je);export{je as default};
