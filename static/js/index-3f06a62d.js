import{P as h,m as e,R as K,n as P,Q as M,bJ as q,bK as J,d as B,q as Q,p as G,cE as U,c as V,ax as D,s as W,bU as X,t as i,i as Y,e as Z,f as ee,g as r,h as g,j as k,ag as t,x as R}from"./main-a0935eb4.js";import{u as oe}from"./use-compitable-c1e3325c.js";import{g as te}from"./get-slot-6dd27322.js";import{b as L}from"./route-block-7ae06361.js";function N(s,a="default",c=[]){const{children:d}=s;if(d!==null&&typeof d=="object"&&!Array.isArray(d)){const l=d[a];if(typeof l=="function")return l()}return c}const H=Symbol("DESCRIPTION_ITEM_FLAG");function ne(s){return typeof s=="object"&&s&&!Array.isArray(s)?s.type&&s.type[H]:!1}const re=h([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),K("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[h("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),P("left-label-placement",[e("descriptions-table-content",[h("> *",{verticalAlign:"top"})])]),P("left-label-align",[h("th",{textAlign:"left"})]),P("center-label-align",[h("th",{textAlign:"center"})]),P("right-label-align",[h("th",{textAlign:"right"})]),P("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[h("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
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
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),q(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),J(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),se=Object.assign(Object.assign({},G.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),le=B({name:"Descriptions",props:se,setup(s){const{mergedClsPrefixRef:a,inlineThemeDisabled:c}=Q(s),d=G("Descriptions","-descriptions",re,U,s,a),l=V(()=>{const{size:b,bordered:m}=s,{common:{cubicBezierEaseInOut:v},self:{titleTextColor:n,thColor:A,thColorModal:w,thColorPopover:E,thTextColor:j,thFontWeight:F,tdTextColor:I,tdColor:o,tdColorModal:y,tdColorPopover:T,borderColor:u,borderColorModal:_,borderColorPopover:x,borderRadius:C,lineHeight:f,[D("fontSize",b)]:S,[D(m?"thPaddingBordered":"thPadding",b)]:z,[D(m?"tdPaddingBordered":"tdPadding",b)]:$}}=d.value;return{"--n-title-text-color":n,"--n-th-padding":z,"--n-td-padding":$,"--n-font-size":S,"--n-bezier":v,"--n-th-font-weight":F,"--n-line-height":f,"--n-th-text-color":j,"--n-td-text-color":I,"--n-th-color":A,"--n-th-color-modal":w,"--n-th-color-popover":E,"--n-td-color":o,"--n-td-color-modal":y,"--n-td-color-popover":T,"--n-border-radius":C,"--n-border-color":u,"--n-border-color-modal":_,"--n-border-color-popover":x}}),p=c?W("descriptions",V(()=>{let b="";const{size:m,bordered:v}=s;return v&&(b+="a"),b+=m[0],b}),l,s):void 0;return{mergedClsPrefix:a,cssVars:c?void 0:l,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,compitableColumn:oe(s,["columns","column"]),inlineThemeDisabled:c}},render(){const s=this.$slots.default,a=s?X(s()):[];a.length;const{compitableColumn:c,labelPlacement:d,labelAlign:l,size:p,bordered:b,title:m,cssVars:v,mergedClsPrefix:n,separator:A,onRender:w}=this;w==null||w();const E=a.filter(o=>ne(o)),j={span:0,row:[],secondRow:[],rows:[]},I=E.reduce((o,y,T)=>{const u=y.props||{},_=E.length-1===T,x=["label"in u?u.label:N(y,"label")],C=[N(y)],f=u.span||1,S=o.span;o.span+=f;const z=u.labelStyle||u["label-style"]||this.labelStyle,$=u.contentStyle||u["content-style"]||this.contentStyle;if(d==="left")b?o.row.push(i("th",{class:`${n}-descriptions-table-header`,colspan:1,style:z},x),i("td",{class:`${n}-descriptions-table-content`,colspan:_?(c-S)*2+1:f*2-1,style:$},C)):o.row.push(i("td",{class:`${n}-descriptions-table-content`,colspan:_?(c-S)*2:f*2},i("span",{class:`${n}-descriptions-table-content__label`,style:z},[...x,A&&i("span",{class:`${n}-descriptions-separator`},A)]),i("span",{class:`${n}-descriptions-table-content__content`,style:$},C)));else{const O=_?(c-S)*2:f*2;o.row.push(i("th",{class:`${n}-descriptions-table-header`,colspan:O,style:z},x)),o.secondRow.push(i("td",{class:`${n}-descriptions-table-content`,colspan:O,style:$},C))}return(o.span>=c||_)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),d!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},j).rows.map(o=>i("tr",{class:`${n}-descriptions-table-row`},o));return i("div",{style:v,class:[`${n}-descriptions`,this.themeClass,`${n}-descriptions--${d}-label-placement`,`${n}-descriptions--${l}-label-align`,`${n}-descriptions--${p}-size`,b&&`${n}-descriptions--bordered`]},m||this.$slots.header?i("div",{class:`${n}-descriptions-header`},m||te(this,"header")):null,i("div",{class:`${n}-descriptions-table-wrapper`},i("table",{class:`${n}-descriptions-table`},i("tbody",null,I))))}}),ie={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},ae=B({name:"DescriptionsItem",[H]:!0,props:ie,render(){return null}}),ce=t(" xicons from '@vicons/ionicons5'"),de=R("br",null,null,-1),pe=t("naiveui\u63A8\u8350\u56FE\u6807\u5730\u5740 "),be=t(" https://www.xicons.org/#/ "),ue=t(" unocss from 'unocss' "),he=R("br",null,null,-1),ge=t("\u539F\u5B50css\u641C\u7D22\u8783\u87F9 "),me=t(" https://uno.antfu.me/ "),_e=t(" naiveui from 'naive-ui' "),fe=R("br",null,null,-1),ve=t("naiveui\u8783\u87F9"),we=t(" https://www.naiveui.com/ "),ye=t(" vueuse from '@vueuse/core' "),xe=R("br",null,null,-1),Ce=t("vueuse\u5DE5\u5177\u5E93\u8783\u87F9"),Se=t(" https://vueuse.org/guide/ "),ze=t(" iconify\u56FE\u6807"),$e=t(" http://icon-sets.iconify.design/ant-design/ "),Pe=t(" naive-ui\u63A8\u8350vicons\u56FE\u6807"),Re=t(" https://www.xicons.org/#/zh-CN "),Ae=t(" google-closure-library "),Ee=R("br",null,null,-1),ke=t("closure-library\u5DE5\u5177\u5E93"),Be=t(" https://github.com/google/closure-library "),je=t(" vue3\u793E\u533A\u6587\u6863"),Ie=t(" https://vue3js.cn/ "),Te=t(" vue3\u793E\u533A\u6587\u6863"),De=t(" http://www.liulongbin.top:8085/ "),Fe=B({name:"tool"}),Oe=B({...Fe,setup(s){const a=Y("provide-screen");return(c,d)=>{const l=ae,p=le;return Z(),ee(p,{"label-placement":k(a)!=="s"&&k(a)!=="xs"?"left":void 0,bordered:"",column:k(a)!=="s"&&k(a)!=="xs"?2:1},{default:r(()=>[g(l,null,{label:r(()=>[ce,de,pe]),default:r(()=>[be]),_:1}),g(l,null,{label:r(()=>[ue,he,ge]),default:r(()=>[me]),_:1}),g(l,null,{label:r(()=>[_e,fe,ve]),default:r(()=>[we]),_:1}),g(l,null,{label:r(()=>[ye,xe,Ce]),default:r(()=>[Se]),_:1}),g(l,null,{label:r(()=>[ze]),default:r(()=>[$e]),_:1}),g(l,null,{label:r(()=>[Pe]),default:r(()=>[Re]),_:1}),g(l,null,{label:r(()=>[Ae,Ee,ke]),default:r(()=>[Be]),_:1}),g(l,null,{label:r(()=>[je]),default:r(()=>[Ie]),_:1}),g(l,null,{label:r(()=>[Te]),default:r(()=>[De]),_:1})]),_:1},8,["label-placement","column"])}}});typeof L=="function"&&L(Oe);export{Oe as default};
