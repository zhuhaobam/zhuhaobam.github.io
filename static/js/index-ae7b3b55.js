import{a1 as b,S as e,ad as H,T as P,a0 as O,bv as W,bw as J,d as k,W as K,V as L,cG as Z,H as M,aJ as j,Z as q,bN as Q,I as i,o as U,c as X,b as s,g as u,j as t,e as A}from"./main-219743d1.js";import{u as Y}from"./use-compitable-bcc98579.js";import{g as ee}from"./get-slot-811d317b.js";import{b as V}from"./route-block-7ae06361.js";function N(l,h="default",a=[]){const{children:r}=l;if(r!==null&&typeof r=="object"&&!Array.isArray(r)){const d=r[h];if(typeof d=="function")return d()}return a}const G=Symbol("DESCRIPTION_ITEM_FLAG");function oe(l){return typeof l=="object"&&l&&!Array.isArray(l)?l.type&&l.type[G]:!1}const te=b([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),H("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[b("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),P("left-label-placement",[e("descriptions-table-content",[b("> *",{verticalAlign:"top"})])]),P("left-label-align",[b("th",{textAlign:"left"})]),P("center-label-align",[b("th",{textAlign:"center"})]),P("right-label-align",[b("th",{textAlign:"right"})]),P("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[b("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[b("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[b("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[O("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),O("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),W(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),J(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),re=Object.assign(Object.assign({},L.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),ne=k({name:"Descriptions",props:re,setup(l){const{mergedClsPrefixRef:h,inlineThemeDisabled:a}=K(l),r=L("Descriptions","-descriptions",te,Z,l,h),d=M(()=>{const{size:c,bordered:m}=l,{common:{cubicBezierEaseInOut:v},self:{titleTextColor:n,thColor:R,thColorModal:w,thColorPopover:E,thTextColor:B,thFontWeight:D,tdTextColor:I,tdColor:o,tdColorModal:y,tdColorPopover:T,borderColor:p,borderColorModal:_,borderColorPopover:x,borderRadius:S,lineHeight:f,[j("fontSize",c)]:C,[j(m?"thPaddingBordered":"thPadding",c)]:z,[j(m?"tdPaddingBordered":"tdPadding",c)]:$}}=r.value;return{"--n-title-text-color":n,"--n-th-padding":z,"--n-td-padding":$,"--n-font-size":C,"--n-bezier":v,"--n-th-font-weight":D,"--n-line-height":f,"--n-th-text-color":B,"--n-td-text-color":I,"--n-th-color":R,"--n-th-color-modal":w,"--n-th-color-popover":E,"--n-td-color":o,"--n-td-color-modal":y,"--n-td-color-popover":T,"--n-border-radius":S,"--n-border-color":p,"--n-border-color-modal":_,"--n-border-color-popover":x}}),g=a?q("descriptions",M(()=>{let c="";const{size:m,bordered:v}=l;return v&&(c+="a"),c+=m[0],c}),d,l):void 0;return{mergedClsPrefix:h,cssVars:a?void 0:d,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,compitableColumn:Y(l,["columns","column"]),inlineThemeDisabled:a}},render(){const l=this.$slots.default,h=l?Q(l()):[];h.length;const{compitableColumn:a,labelPlacement:r,labelAlign:d,size:g,bordered:c,title:m,cssVars:v,mergedClsPrefix:n,separator:R,onRender:w}=this;w==null||w();const E=h.filter(o=>oe(o)),B={span:0,row:[],secondRow:[],rows:[]},I=E.reduce((o,y,T)=>{const p=y.props||{},_=E.length-1===T,x=["label"in p?p.label:N(y,"label")],S=[N(y)],f=p.span||1,C=o.span;o.span+=f;const z=p.labelStyle||p["label-style"]||this.labelStyle,$=p.contentStyle||p["content-style"]||this.contentStyle;if(r==="left")c?o.row.push(i("th",{class:`${n}-descriptions-table-header`,colspan:1,style:z},x),i("td",{class:`${n}-descriptions-table-content`,colspan:_?(a-C)*2+1:f*2-1,style:$},S)):o.row.push(i("td",{class:`${n}-descriptions-table-content`,colspan:_?(a-C)*2:f*2},i("span",{class:`${n}-descriptions-table-content__label`,style:z},[...x,R&&i("span",{class:`${n}-descriptions-separator`},R)]),i("span",{class:`${n}-descriptions-table-content__content`,style:$},S)));else{const F=_?(a-C)*2:f*2;o.row.push(i("th",{class:`${n}-descriptions-table-header`,colspan:F,style:z},x)),o.secondRow.push(i("td",{class:`${n}-descriptions-table-content`,colspan:F,style:$},S))}return(o.span>=a||_)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),r!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},B).rows.map(o=>i("tr",{class:`${n}-descriptions-table-row`},o));return i("div",{style:v,class:[`${n}-descriptions`,this.themeClass,`${n}-descriptions--${r}-label-placement`,`${n}-descriptions--${d}-label-align`,`${n}-descriptions--${g}-size`,c&&`${n}-descriptions--bordered`]},m||this.$slots.header?i("div",{class:`${n}-descriptions-header`},m||ee(this,"header")):null,i("div",{class:`${n}-descriptions-table-wrapper`},i("table",{class:`${n}-descriptions-table`},i("tbody",null,I))))}}),se={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},le=k({name:"DescriptionsItem",[G]:!0,props:se,render(){return null}}),ie=t(" xicons from '@vicons/ionicons5'"),ae=A("br",null,null,-1),ce=t("naiveui\u63A8\u8350\u56FE\u6807\u5730\u5740 "),de=t(" https://www.xicons.org/#/ "),pe=t(" unocss from 'unocss' "),be=A("br",null,null,-1),ue=t("\u539F\u5B50css\u641C\u7D22\u8783\u87F9 "),he=t(" https://uno.antfu.me/ "),ge=t(" naiveui from 'naive-ui' "),me=A("br",null,null,-1),_e=t("naiveui\u8783\u87F9"),fe=t(" https://www.naiveui.com/ "),ve=t(" vueuse from '@vueuse/core' "),we=A("br",null,null,-1),ye=t("vueuse\u5DE5\u5177\u5E93\u8783\u87F9"),xe=t(" https://vueuse.org/guide/ "),Se=t(" iconify\u56FE\u6807"),Ce=t(" http://icon-sets.iconify.design/ant-design/ "),ze=t(" naive-ui\u63A8\u8350vicons\u56FE\u6807"),$e=t(" https://www.xicons.org/#/zh-CN "),Pe=t(" google-closure-library "),Ae=A("br",null,null,-1),Re=t("closure-library\u5DE5\u5177\u5E93"),Ee=t(" https://github.com/google/closure-library "),ke=t(" vue3\u793E\u533A\u6587\u6863"),Be=t(" https://vue3js.cn/ "),Ie=t(" vue3\u793E\u533A\u6587\u6863"),Te=t(" http://www.liulongbin.top:8085/ "),je=k({name:"tool"}),De=k({...je,setup(l){return(h,a)=>{const r=le,d=ne;return U(),X(d,{"label-placement":"left",bordered:""},{default:s(()=>[u(r,null,{label:s(()=>[ie,ae,ce]),default:s(()=>[de]),_:1}),u(r,null,{label:s(()=>[pe,be,ue]),default:s(()=>[he]),_:1}),u(r,null,{label:s(()=>[ge,me,_e]),default:s(()=>[fe]),_:1}),u(r,null,{label:s(()=>[ve,we,ye]),default:s(()=>[xe]),_:1}),u(r,null,{label:s(()=>[Se]),default:s(()=>[Ce]),_:1}),u(r,null,{label:s(()=>[ze]),default:s(()=>[$e]),_:1}),u(r,null,{label:s(()=>[Pe,Ae,Re]),default:s(()=>[Ee]),_:1}),u(r,null,{label:s(()=>[ke]),default:s(()=>[Be]),_:1}),u(r,null,{label:s(()=>[Ie]),default:s(()=>[Te]),_:1})]),_:1})}}});typeof V=="function"&&V(De);export{De as default};