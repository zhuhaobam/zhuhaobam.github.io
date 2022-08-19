import{aA as Z,a6 as m,Z as o,ai as q,$ as I,a5 as M,bt as J,bu as Q,d as O,a1 as N,O as j,cF as U,G as w,ap as B,a4 as H,bN as X,H as c,W as Y,an as E,a9 as ee,o as te,c as oe,e as p,h as y,T as _}from"./main-2047782f.js";import{u as re}from"./use-compitable-3430fdc0.js";import{g as ne}from"./get-slot-79243e51.js";import{b as F}from"./route-block-7ae06361.js";function W(t,s="default",i=[]){const{children:n}=t;if(n!==null&&typeof n=="object"&&!Array.isArray(n)){const l=n[s];if(typeof l=="function")return l()}return i}let G=!1;function se(){if(!!Z&&!!window.CSS&&!G&&(G=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const K=Symbol("DESCRIPTION_ITEM_FLAG");function ie(t){return typeof t=="object"&&t&&!Array.isArray(t)?t.type&&t.type[K]:!1}const le=m([o("descriptions",{fontSize:"var(--n-font-size)"},[o("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[o("descriptions-table-header",{padding:"var(--n-th-padding)"}),o("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),q("bordered",[o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[m("&:last-child",[o("descriptions-table-content",{paddingBottom:0})])])])])]),I("left-label-placement",[o("descriptions-table-content",[m("> *",{verticalAlign:"top"})])]),I("left-label-align",[m("th",{textAlign:"left"})]),I("center-label-align",[m("th",{textAlign:"center"})]),I("right-label-align",[m("th",{textAlign:"right"})]),I("bordered",[o("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[o("descriptions-table",[o("descriptions-table-row",[m("&:not(:last-child)",[o("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),o("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[m("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-content",[m("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),o("descriptions-header",`
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
 `),J(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Q(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ae=Object.assign(Object.assign({},j.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),ce=O({name:"Descriptions",props:ae,setup(t){const{mergedClsPrefixRef:s,inlineThemeDisabled:i}=N(t),n=j("Descriptions","-descriptions",le,U,t,s),l=w(()=>{const{size:d,bordered:g}=t,{common:{cubicBezierEaseInOut:b},self:{titleTextColor:e,thColor:f,thColorModal:h,thColorPopover:v,thTextColor:C,thFontWeight:A,tdTextColor:V,tdColor:r,tdColorModal:z,tdColorPopover:L,borderColor:u,borderColorModal:S,borderColorPopover:$,borderRadius:P,lineHeight:x,[B("fontSize",d)]:R,[B(g?"thPaddingBordered":"thPadding",d)]:T,[B(g?"tdPaddingBordered":"tdPadding",d)]:k}}=n.value;return{"--n-title-text-color":e,"--n-th-padding":T,"--n-td-padding":k,"--n-font-size":R,"--n-bezier":b,"--n-th-font-weight":A,"--n-line-height":x,"--n-th-text-color":C,"--n-td-text-color":V,"--n-th-color":f,"--n-th-color-modal":h,"--n-th-color-popover":v,"--n-td-color":r,"--n-td-color-modal":z,"--n-td-color-popover":L,"--n-border-radius":P,"--n-border-color":u,"--n-border-color-modal":S,"--n-border-color-popover":$}}),a=i?H("descriptions",w(()=>{let d="";const{size:g,bordered:b}=t;return b&&(d+="a"),d+=g[0],d}),l,t):void 0;return{mergedClsPrefix:s,cssVars:i?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender,compitableColumn:re(t,["columns","column"]),inlineThemeDisabled:i}},render(){const t=this.$slots.default,s=t?X(t()):[];s.length;const{compitableColumn:i,labelPlacement:n,labelAlign:l,size:a,bordered:d,title:g,cssVars:b,mergedClsPrefix:e,separator:f,onRender:h}=this;h==null||h();const v=s.filter(r=>ie(r)),C={span:0,row:[],secondRow:[],rows:[]},V=v.reduce((r,z,L)=>{const u=z.props||{},S=v.length-1===L,$=["label"in u?u.label:W(z,"label")],P=[W(z)],x=u.span||1,R=r.span;r.span+=x;const T=u.labelStyle||u["label-style"]||this.labelStyle,k=u.contentStyle||u["content-style"]||this.contentStyle;if(n==="left")d?r.row.push(c("th",{class:`${e}-descriptions-table-header`,colspan:1,style:T},$),c("td",{class:`${e}-descriptions-table-content`,colspan:S?(i-R)*2+1:x*2-1,style:k},P)):r.row.push(c("td",{class:`${e}-descriptions-table-content`,colspan:S?(i-R)*2:x*2},c("span",{class:`${e}-descriptions-table-content__label`,style:T},[...$,f&&c("span",{class:`${e}-descriptions-separator`},f)]),c("span",{class:`${e}-descriptions-table-content__content`,style:k},P)));else{const D=S?(i-R)*2:x*2;r.row.push(c("th",{class:`${e}-descriptions-table-header`,colspan:D,style:T},$)),r.secondRow.push(c("td",{class:`${e}-descriptions-table-content`,colspan:D,style:k},P))}return(r.span>=i||S)&&(r.span=0,r.row.length&&(r.rows.push(r.row),r.row=[]),n!=="left"&&r.secondRow.length&&(r.rows.push(r.secondRow),r.secondRow=[])),r},C).rows.map(r=>c("tr",{class:`${e}-descriptions-table-row`},r));return c("div",{style:b,class:[`${e}-descriptions`,this.themeClass,`${e}-descriptions--${n}-label-placement`,`${e}-descriptions--${l}-label-align`,`${e}-descriptions--${a}-size`,d&&`${e}-descriptions--bordered`]},g||this.$slots.header?c("div",{class:`${e}-descriptions-header`},g||ne(this,"header")):null,c("div",{class:`${e}-descriptions-table-wrapper`},c("table",{class:`${e}-descriptions-table`},c("tbody",null,V))))}}),de={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},pe=O({name:"DescriptionsItem",[K]:!0,props:de,render(){return null}}),be=t=>{const{primaryColor:s,successColor:i,warningColor:n,errorColor:l,infoColor:a,fontWeightStrong:d}=t;return{fontWeight:d,rotate:"252deg",colorStartPrimary:E(s,{alpha:.6}),colorEndPrimary:s,colorStartInfo:E(a,{alpha:.6}),colorEndInfo:a,colorStartWarning:E(n,{alpha:.6}),colorEndWarning:n,colorStartError:E(l,{alpha:.6}),colorEndError:l,colorStartSuccess:E(i,{alpha:.6}),colorEndSuccess:i}},ge={name:"GradientText",common:Y,self:be},he=ge,ue=o("gradient-text",`
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
`),me=Object.assign(Object.assign({},j.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),fe=O({name:"GradientText",props:me,setup(t){se();const{mergedClsPrefixRef:s,inlineThemeDisabled:i}=N(t),n=w(()=>{const{type:e}=t;return e==="danger"?"error":e}),l=w(()=>{let e=t.size||t.fontSize;return e&&(e=ee(e)),e||void 0}),a=w(()=>{const e=t.color||t.gradient;if(typeof e=="string")return e;if(e){const f=e.deg||0,h=e.from,v=e.to;return`linear-gradient(${f}deg, ${h} 0%, ${v} 100%)`}}),d=j("GradientText","-gradient-text",ue,he,t,s),g=w(()=>{const{value:e}=n,{common:{cubicBezierEaseInOut:f},self:{rotate:h,[B("colorStart",e)]:v,[B("colorEnd",e)]:C,fontWeight:A}}=d.value;return{"--n-bezier":f,"--n-rotate":h,"--n-color-start":v,"--n-color-end":C,"--n-font-weight":A}}),b=i?H("gradient-text",w(()=>n.value[0]),g,t):void 0;return{mergedClsPrefix:s,compatibleType:n,styleFontSize:l,styleBgImage:a,cssVars:i?void 0:g,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){const{mergedClsPrefix:t,onRender:s}=this;return s==null||s(),c("span",{class:[`${t}-gradient-text`,`${t}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),ve=_(" xicons from '@vicons/ionicons5' "),ye=_(" https://www.xicons.org/#/ "),_e=_(" unocss from 'unocss' "),we=_("https://uno.antfu.me/"),Se=_(" naiveui from 'naive-ui' "),xe=_("https://www.naiveui.com/"),Ce=_(" vueuse from '@vueuse/core' "),ze=_("https://vueuse.org/guide/"),$e=O({name:"tool"}),Pe=O({...$e,setup(t){return(s,i)=>{const n=fe,l=pe,a=ce;return te(),oe(a,{"label-placement":"left",bordered:""},{default:p(()=>[y(l,null,{label:p(()=>[ve]),default:p(()=>[y(n,{type:"success"},{default:p(()=>[ye]),_:1})]),_:1}),y(l,null,{label:p(()=>[_e]),default:p(()=>[y(n,{type:"success"},{default:p(()=>[we]),_:1})]),_:1}),y(l,null,{label:p(()=>[Se]),default:p(()=>[y(n,{type:"success"},{default:p(()=>[xe]),_:1})]),_:1}),y(l,null,{label:p(()=>[Ce]),default:p(()=>[y(n,{type:"success"},{default:p(()=>[ze]),_:1})]),_:1})]),_:1})}}});typeof F=="function"&&F(Pe);export{Pe as default};
