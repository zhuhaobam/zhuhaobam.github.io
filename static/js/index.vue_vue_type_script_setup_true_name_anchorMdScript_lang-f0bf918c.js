import{i as z,w as q,b as L,o as M,a$ as fu,bb as j,cG as Eu,m as D,n as w,d as R,q as ru,bX as du,r as p,c as _,t as k,L as au,Q as K,O as S,P as U,E as hu,U as ou,J as bu,F as Fu,ab as Au,ah as vu,p as su,cH as gu,s as Cu,M as uu,cI as mu,e as O,v as pu,ad as xu,f as N,g as I,j as $,l as Y,H as Bu,a1 as Du,h as V,A as _u}from"./main-69cbe56a.js";import{g as ku}from"./attribute-9ea89db2.js";import{u as Tu}from"./full-cde75d7d.js";import{u as iu,_ as yu}from"./BackTop-b93d133c.js";import{b as Ru}from"./next-frame-once-c806eabc.js";import{o as wu}from"./on-fonts-ready-cc098bbd.js";import{a as $u,_ as Ou}from"./LayoutSider-5e162387.js";function Su(u,e,t){const n=z(u,null);n!==null&&(e in n||(n[e]=[]),n[e].push(t.value),q(t,(o,l)=>{const c=n[e],s=c.findIndex(h=>h===l);~s&&c.splice(s,1),c.push(o)}),L(()=>{const o=n[e],l=o.findIndex(c=>c===t.value);~l&&o.splice(l,1)}))}function Iu(u,e,t){const n=z(u,null);n!==null&&(e in n||(n[e]=[]),M(()=>{const o=t();!o||n[e].push(o)}),L(()=>{const o=n[e],l=t(),c=o.findIndex(s=>s===l);~c&&o.splice(c,1)}))}var Nu=/\s/;function Pu(u){for(var e=u.length;e--&&Nu.test(u.charAt(e)););return e}var Hu=/^\s+/;function ju(u){return u&&u.slice(0,Pu(u)+1).replace(Hu,"")}var eu=0/0,zu=/^[-+]0x[0-9a-f]+$/i,Lu=/^0b[01]+$/i,Mu=/^0o[0-7]+$/i,Wu=parseInt;function tu(u){if(typeof u=="number")return u;if(fu(u))return eu;if(j(u)){var e=typeof u.valueOf=="function"?u.valueOf():u;u=j(e)?e+"":e}if(typeof u!="string")return u===0?u:+u;u=ju(u);var t=Lu.test(u);return t||Mu.test(u)?Wu(u.slice(2),t?2:8):zu.test(u)?eu:+u}var Uu=function(){return Eu.Date.now()};const G=Uu;var Vu="Expected a function",Gu=Math.max,Ju=Math.min;function Xu(u,e,t){var n,o,l,c,s,h,d=0,A=!1,b=!1,v=!0;if(typeof u!="function")throw new TypeError(Vu);e=tu(e)||0,j(t)&&(A=!!t.leading,b="maxWait"in t,l=b?Gu(tu(t.maxWait)||0,e):l,v="trailing"in t?!!t.trailing:v);function g(i){var f=n,B=o;return n=o=void 0,d=i,c=u.apply(B,f),c}function F(i){return d=i,s=setTimeout(r,e),A?g(i):c}function E(i){var f=i-h,B=i-d,y=e-f;return b?Ju(y,l-B):y}function a(i){var f=i-h,B=i-d;return h===void 0||f>=e||f<0||b&&B>=l}function r(){var i=G();if(a(i))return C(i);s=setTimeout(r,E(i))}function C(i){return s=void 0,v&&n?g(i):(n=o=void 0,c)}function m(){s!==void 0&&clearTimeout(s),d=0,n=h=o=s=void 0}function T(){return s===void 0?c:C(G())}function x(){var i=G(),f=a(i);if(n=arguments,o=this,h=i,f){if(s===void 0)return F(h);if(b)return clearTimeout(s),s=setTimeout(r,e),g(h)}return s===void 0&&(s=setTimeout(r,e)),c}return x.cancel=m,x.flush=T,x}var Yu="Expected a function";function qu(u,e,t){var n=!0,o=!0;if(typeof u!="function")throw new TypeError(Yu);return j(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),Xu(u,e,{leading:n,maxWait:e,trailing:o})}function Zu(u){return u instanceof HTMLElement?u.scrollTop:window.scrollY}function Qu(u){return u instanceof HTMLElement?u.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const Ku=D("affix",[w("affixed",{position:"fixed"},[w("absolute-positioned",{position:"absolute"})])]),Z={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},ue=au(Z),ee=R({name:"Affix",props:Z,setup(u){const{mergedClsPrefixRef:e}=ru(u);du("-affix",Ku,e);let t=null;const n=p(!1),o=p(!1),l=p(null),c=p(null),s=_(()=>o.value||n.value),h=_(()=>{var a,r;return(r=(a=u.triggerTop)!==null&&a!==void 0?a:u.offsetTop)!==null&&r!==void 0?r:u.top}),d=_(()=>{var a,r;return(r=(a=u.top)!==null&&a!==void 0?a:u.triggerTop)!==null&&r!==void 0?r:u.offsetTop}),A=_(()=>{var a,r;return(r=(a=u.bottom)!==null&&a!==void 0?a:u.triggerBottom)!==null&&r!==void 0?r:u.offsetBottom}),b=_(()=>{var a,r;return(r=(a=u.triggerBottom)!==null&&a!==void 0?a:u.offsetBottom)!==null&&r!==void 0?r:u.bottom}),v=p(null),g=()=>{const{target:a,listenTo:r}=u;a?t=a():r?t=iu(r):t=document,t&&(t.addEventListener("scroll",F),F())};function F(){Ru(E)}function E(){const{value:a}=v;if(!t||!a)return;const r=Zu(t);if(s.value){r<c.value&&(n.value=!1,c.value=null),r>l.value&&(o.value=!1,l.value=null);return}const C=Qu(t),m=a.getBoundingClientRect(),T=m.top-C.top,x=C.bottom-m.bottom,i=h.value,f=b.value;i!==void 0&&T<=i?(n.value=!0,c.value=r-(i-T)):(n.value=!1,c.value=null),f!==void 0&&x<=f?(o.value=!0,l.value=r+f-x):(o.value=!1,l.value=null)}return M(()=>{g()}),L(()=>{!t||t.removeEventListener("scroll",F)}),{selfRef:v,affixed:s,mergedClsPrefix:e,mergedstyle:_(()=>{const a={};return n.value&&h.value!==void 0&&d.value!==void 0&&(a.top=`${d.value}px`),o.value&&b.value!==void 0&&A.value!==void 0&&(a.bottom=`${A.value}px`),a})}},render(){const{mergedClsPrefix:u}=this;return k("div",{ref:"selfRef",class:[`${u}-affix`,{[`${u}-affix--affixed`]:this.affixed,[`${u}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),te=D("anchor",`
 position: relative;
`,[K("block",`
 padding-left: var(--n-rail-width);
 `,[D("anchor-link",[S("+, >",[D("anchor-link",`
 margin-top: .5em;
 `)])]),D("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),K("show-rail",[S(">",[D("anchor-link","padding-left: 0;")])])]),w("block",[D("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[w("active",`
 background-color: var(--n-link-color);
 `)])]),D("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),D("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[U("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[w("active",{backgroundColor:"var(--n-rail-color-active)"})])]),D("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[w("active",[S(">",[U("title",`
 color: var(--n-link-text-color-active);
 `)])]),U("title",`
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `,[S("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),S("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),H=hu("n-anchor"),ne={title:String,href:String},re=R({name:"AnchorLink",props:ne,setup(u,{slots:e}){const t=p(null),n=z(H),o=ou(u,"href"),l=bu(()=>o.value&&o.value===n.activeHref.value);Su(H,"collectedLinkHrefs",o),Iu(H,"titleEls",()=>t.value),q(l,s=>{s&&t.value&&n.updateBarPosition(t.value)});function c(){u.href!==void 0&&n.setActiveHref(u.href)}return()=>{var s;const{value:h}=n.mergedClsPrefix;return k("div",{class:[`${h}-anchor-link`,l.value&&`${h}-anchor-link--active`]},k("a",{ref:t,class:[`${h}-anchor-link__title`],href:u.href,title:ku(u.title),onClick:c},u.title),(s=e.default)===null||s===void 0?void 0:s.call(e))}}});function ae(u,e){const{top:t,height:n}=u.getBoundingClientRect(),o=e instanceof HTMLElement?e.getBoundingClientRect().top:0;return{top:t-o,height:n}}const Q={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},oe=au(Q),se=R({name:"BaseAnchor",props:Object.assign(Object.assign({},Q),{mergedClsPrefix:{type:String,required:!0}}),setup(u){const e=[],t=[],n=p(null),o=p(null),l=p(null),c=p(null),s=_(()=>u.type==="block"),h=_(()=>!s.value&&u.showRail);function d(){const{value:F}=l,{value:E}=o;F&&(F.style.transition="none"),E&&(E.style.transition="none"),t&&t.forEach(a=>{a.style.transition="none"}),vu(()=>{const{value:a}=l,{value:r}=o;a&&(a.offsetWidth,a.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),t&&t.forEach(C=>{C.offsetWidth,C.style.transition=""})})}function A(F,E=!0){const{value:a}=l,{value:r}=o,{value:C}=c;if(!C||!a)return;E||(a.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:m,offsetWidth:T}=F,{top:x,left:i}=F.getBoundingClientRect(),{top:f,left:B}=C.getBoundingClientRect(),y=x-f,W=i-B;a.style.top=`${y}px`,a.style.height=`${m}px`,r&&(r.style.top=`${y}px`,r.style.height=`${m}px`,r.style.maxWidth=`${T+W}px`),a.offsetHeight,r&&r.offsetHeight,E||(a.style.transition="",r&&(r.style.transition=""))}function b(F,E=!0){const a=/^#([^#]+)$/.exec(F);if(!a)return;const r=document.getElementById(a[1]);!r||(n.value=F,r.scrollIntoView(),E||d(),v())}const v=qu(()=>g(!0),128);function g(F=!0){var E;const a=[],r=iu((E=u.offsetTarget)!==null&&E!==void 0?E:document);e.forEach(i=>{const f=/#([^#]+)$/.exec(i);if(!f)return;const B=document.getElementById(f[1]);if(B&&r){const{top:y,height:W}=ae(B,r);a.push({top:y,height:W,href:i})}}),a.sort((i,f)=>i.top>f.top?1:(i.top===f.top&&i.height<f.height,-1));const C=n.value,{bound:m,ignoreGap:T}=u,x=a.reduce((i,f)=>f.top+f.height<0?T?f:i:f.top<=m?i===null?f:f.top===i.top?f.href===C?f:i:f.top>i.top?f:i:i,null);F||d(),x?n.value=x.href:n.value=null}return Fu(H,{activeHref:n,mergedClsPrefix:ou(u,"mergedClsPrefix"),updateBarPosition:A,setActiveHref:b,collectedLinkHrefs:e,titleEls:t}),M(()=>{document.addEventListener("scroll",v,!0),b(window.location.hash),g(!1)}),wu(()=>{b(window.location.hash),g(!1)}),L(()=>{document.removeEventListener("scroll",v,!0)}),q(n,F=>{if(F===null){const{value:E}=o;E&&!s.value&&(E.style.maxWidth="0")}}),{selfRef:c,barRef:l,slotRef:o,setActiveHref:b,activeHref:n,isBlockType:s,mergedShowRail:h}},render(){var u;const{mergedClsPrefix:e,mergedShowRail:t,isBlockType:n,$slots:o}=this,l=k("div",{class:[`${e}-anchor`,n&&`${e}-anchor--block`,t&&`${e}-anchor--show-rail`],ref:"selfRef"},t&&this.showBackground?k("div",{ref:"slotRef",class:`${e}-anchor-link-background`}):null,t?k("div",{class:`${e}-anchor-rail`},k("div",{ref:"barRef",class:[`${e}-anchor-rail__bar`,this.activeHref!==null&&`${e}-anchor-rail__bar--active`]})):null,(u=o.default)===null||u===void 0?void 0:u.call(o));return this.internalScrollable?k(Au,null,{default:()=>l}):l}}),ie=Object.assign(Object.assign(Object.assign(Object.assign({},su.props),{affix:Boolean}),Z),Q),le=R({name:"Anchor",props:ie,setup(u,{slots:e}){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=ru(u),o=su("Anchor","-anchor",te,gu,u,t),l=p(null),c=_(()=>{const{self:{railColor:h,linkColor:d,railColorActive:A,linkTextColor:b,linkTextColorHover:v,linkTextColorPressed:g,linkTextColorActive:F,linkFontSize:E,railWidth:a,linkPadding:r,borderRadius:C},common:{cubicBezierEaseInOut:m}}=o.value;return{"--n-link-border-radius":C,"--n-link-color":d,"--n-link-font-size":E,"--n-link-text-color":b,"--n-link-text-color-hover":v,"--n-link-text-color-active":F,"--n-link-text-color-pressed":g,"--n-link-padding":r,"--n-bezier":m,"--n-rail-color":h,"--n-rail-color-active":A,"--n-rail-width":a}}),s=n?Cu("anchor",void 0,c,u):void 0;return{scrollTo(h){var d;(d=l.value)===null||d===void 0||d.setActiveHref(h)},renderAnchor:()=>(s==null||s.onRender(),k(se,Object.assign({ref:l,style:n?void 0:c.value,class:s==null?void 0:s.themeClass.value},uu(u,oe),{mergedClsPrefix:t.value}),e))}},render(){return this.affix?k(ee,Object.assign({},uu(this,ue)),{default:this.renderAnchor}):this.renderAnchor()}});var ce=fe,J=[{base:" ",chars:"\xA0"},{base:"0",chars:"\u07C0"},{base:"A",chars:"\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"},{base:"AA",chars:"\uA732"},{base:"AE",chars:"\xC6\u01FC\u01E2"},{base:"AO",chars:"\uA734"},{base:"AU",chars:"\uA736"},{base:"AV",chars:"\uA738\uA73A"},{base:"AY",chars:"\uA73C"},{base:"B",chars:"\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181"},{base:"C",chars:"\u24B8\uFF23\uA73E\u1E08\u0106C\u0108\u010A\u010C\xC7\u0187\u023B"},{base:"D",chars:"\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779"},{base:"Dh",chars:"\xD0"},{base:"DZ",chars:"\u01F1\u01C4"},{base:"Dz",chars:"\u01F2\u01C5"},{base:"E",chars:"\u025B\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07"},{base:"F",chars:"\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B"},{base:"G",chars:"\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262"},{base:"H",chars:"\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"},{base:"I",chars:"\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"},{base:"J",chars:"\u24BF\uFF2A\u0134\u0248\u0237"},{base:"K",chars:"\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"},{base:"L",chars:"\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"},{base:"LJ",chars:"\u01C7"},{base:"Lj",chars:"\u01C8"},{base:"M",chars:"\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB"},{base:"N",chars:"\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E"},{base:"NJ",chars:"\u01CA"},{base:"Nj",chars:"\u01CB"},{base:"O",chars:"\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"},{base:"OE",chars:"\u0152"},{base:"OI",chars:"\u01A2"},{base:"OO",chars:"\uA74E"},{base:"OU",chars:"\u0222"},{base:"P",chars:"\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"},{base:"Q",chars:"\u24C6\uFF31\uA756\uA758\u024A"},{base:"R",chars:"\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"},{base:"S",chars:"\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"},{base:"T",chars:"\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"},{base:"Th",chars:"\xDE"},{base:"TZ",chars:"\uA728"},{base:"U",chars:"\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"},{base:"V",chars:"\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"},{base:"VY",chars:"\uA760"},{base:"W",chars:"\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"},{base:"X",chars:"\u24CD\uFF38\u1E8A\u1E8C"},{base:"Y",chars:"\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"},{base:"Z",chars:"\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"},{base:"a",chars:"\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251"},{base:"aa",chars:"\uA733"},{base:"ae",chars:"\xE6\u01FD\u01E3"},{base:"ao",chars:"\uA735"},{base:"au",chars:"\uA737"},{base:"av",chars:"\uA739\uA73B"},{base:"ay",chars:"\uA73D"},{base:"b",chars:"\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182"},{base:"c",chars:"\uFF43\u24D2\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"},{base:"d",chars:"\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA"},{base:"dh",chars:"\xF0"},{base:"dz",chars:"\u01F3\u01C6"},{base:"e",chars:"\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD"},{base:"f",chars:"\u24D5\uFF46\u1E1F\u0192"},{base:"ff",chars:"\uFB00"},{base:"fi",chars:"\uFB01"},{base:"fl",chars:"\uFB02"},{base:"ffi",chars:"\uFB03"},{base:"ffl",chars:"\uFB04"},{base:"g",chars:"\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79"},{base:"h",chars:"\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"},{base:"hv",chars:"\u0195"},{base:"i",chars:"\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"},{base:"j",chars:"\u24D9\uFF4A\u0135\u01F0\u0249"},{base:"k",chars:"\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"},{base:"l",chars:"\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D"},{base:"lj",chars:"\u01C9"},{base:"m",chars:"\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"},{base:"n",chars:"\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509"},{base:"nj",chars:"\u01CC"},{base:"o",chars:"\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11"},{base:"oe",chars:"\u0153"},{base:"oi",chars:"\u01A3"},{base:"oo",chars:"\uA74F"},{base:"ou",chars:"\u0223"},{base:"p",chars:"\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1"},{base:"q",chars:"\u24E0\uFF51\u024B\uA757\uA759"},{base:"r",chars:"\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"},{base:"s",chars:"\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282"},{base:"ss",chars:"\xDF"},{base:"t",chars:"\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"},{base:"th",chars:"\xFE"},{base:"tz",chars:"\uA729"},{base:"u",chars:"\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"},{base:"v",chars:"\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"},{base:"vy",chars:"\uA761"},{base:"w",chars:"\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"},{base:"x",chars:"\u24E7\uFF58\u1E8B\u1E8D"},{base:"y",chars:"\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"},{base:"z",chars:"\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"}],lu={};for(var P=0;P<J.length;P+=1)for(var nu=J[P].chars,X=0;X<nu.length;X+=1)lu[nu[X]]=J[P].base;function fe(u){return u.replace(/[^\u0000-\u007e]/g,function(e){return lu[e]||e})}const cu=R({__name:"index",props:{path:{default:""},tocs:{default:()=>[]}},setup(u){const e=u,{path:t,tocs:n}=mu(e),o=/[\u0000-\u001F]/g,l=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g,c=s=>t.value+ce(s).replace(o,"").replace(l,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase();return(s,h)=>{const d=re;return O(!0),pu(Bu,null,xu($(n),(A,b)=>(O(),N(d,{key:b,title:A.text,href:c(A.href)},{default:I(()=>[A.child.length>0?(O(),N(cu,{key:0,path:$(t),tocs:A.child},null,8,["path","tocs"])):Y("",!0)]),_:2},1032,["title","href"]))),128)}}}),Ee=R({name:"anchorMdScript"}),Ce=R({...Ee,setup(u){const e=Tu(),t=_(()=>e.getPage),n=z("provide-screen"),o=p(null),l=p([]),c=Du(),s=p("#"+c.path+"#");M(()=>{const d=document.getElementsByClassName("table-of-contents");l.value=h(d[0].childNodes[0].childNodes,0),setTimeout(()=>{var b,v,g;const A=(b=l.value)!=null?b:[];A.length>0&&(c.fullPath.indexOf("#")===-1?(v=o.value)==null||v.scrollTo(A[0].href):(g=o.value)==null||g.scrollTo(c.hash))},50)});function h(d,A){var v;const b=[];if(d.length>0)for(let g=0;g<d.length;g++){const F=d[g],E=F.firstChild,a=F.lastChild;let r=[];if(a&&(r=h(a.childNodes,A+1)),(E==null?void 0:E.nodeName)==="A"){const m=E.href;b.push({i:A,href:decodeURI(m.slice(m.lastIndexOf("#"),m.length)),text:(v=E.textContent)!=null?v:"",child:r})}}return b}return(d,A)=>{const b=yu,v=$u,g=cu,F=le,E=Ou;return O(),N(v,{position:"absolute","has-sider":$(n)!=="xs",style:{"min-height":"calc(100vh - 162px)"}},{default:I(()=>[V(v,{"content-style":"padding: 0 24px;","native-scrollbar":!1},{default:I(()=>[_u(d.$slots,"default"),V(b,{right:220,"visibility-height":300})]),_:3}),$(n)!=="xs"?(O(),N(E,{key:0,width:"180px","content-style":"margin-top:"+($(t)==="inner:true"?8:18)+"px;padding-right:20px;","native-scrollbar":!1},{default:I(()=>[V(F,{ref_key:"anchorRef",ref:o,"listen-to":".markdown-body","trigger-top":24,bound:$(t)==="inner:true"?30:147,style:{"z-index":"1"},"ignore-gap":!0,"show-rail":!1,"show-background":!0,type:"block"},{default:I(()=>[l.value.length>0?(O(),N(g,{key:0,path:s.value,tocs:l.value},null,8,["path","tocs"])):Y("",!0)]),_:1},8,["bound"])]),_:1},8,["content-style"])):Y("",!0)]),_:3},8,["has-sider"])}}});export{Ce as _};
