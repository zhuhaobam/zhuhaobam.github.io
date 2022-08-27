var E=Object.defineProperty;var B=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var u=(e,t,o)=>(B(e,typeof t!="symbol"?t+"":t,o),o);import{g}from"./assets-kit-bc859cd0.js";import{d as R,r as v,o as I,k as A,e as f,f as w,n as b,a8 as M}from"./main-1d570fc2.js";import{b as x}from"./route-block-7ae06361.js";function d(e){const t=e.toString(16);return t.length===1?"0"+t:t}function j([e,t,o]){return"#"+d(e)+d(t)+d(o)}function S(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!t)throw`\`${e}\` is not a valid hex string`;return t.slice(1,4).map(o=>parseInt(o,16))}function p(e,t,o){if(t=Math.floor(t)||0,t<e.length)return String(e);o=o?String(o):" ";let n="";const s=t-e.length;let r=0;for(;n.length<s;)o[r]||(r=0),n+=o[r],r++;return n+String(e).slice(0)}function y(e){const[t,o,n]=S(e),s=t/255,r=o/255,c=n/255;let i,l,h;return s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),r<=.03928?l=r/12.92:l=Math.pow((r+.055)/1.055,2.4),c<=.03928?h=c/12.92:h=Math.pow((c+.055)/1.055,2.4),.2126*i+.7152*l+.0722*h}function D(e,t){const o=y(e)+.005,n=y(t)+.005;return Math.max(o,n)/Math.min(o,n)}function _(e){return e.contrast*e.contrast*4-e.index*e.index}function T(e){const[t,...o]=e.slice(0,8),n=[];for(let r=0;r<o.length;r++){const c=o[r],i=D(t,c);n.push({contrast:i,front:c,index:r})}n.sort((r,c)=>_(c)-_(r));const s=n[0];return[t,s.front]}const m=class{constructor(t){u(this,"children",new Array(8).fill(null));u(this,"isLeaf",!1);u(this,"r",0);u(this,"g",0);u(this,"b",0);u(this,"childrenCount",0);!t||(t.level===7?(this.isLeaf=!0,m.leafNum++):(m.toReduce[t.level].push(this),m.toReduce[t.level].sort((o,n)=>o.childrenCount-n.childrenCount)))}addColor(t,o){if(this.isLeaf)this.childrenCount++,this.r+=t[0],this.g+=t[1],this.b+=t[2];else{let n="";const s=p(t[0].toString(2),8,"0"),r=p(t[1].toString(2),8,"0"),c=p(t[2].toString(2),8,"0");n+=s[o],n+=r[o],n+=c[o];const i=parseInt(n,2);this.children[i]===null&&(this.children[i]=new m({index:i,level:o+1})),this.children[i].addColor(t,o+1)}}};let a=m;u(a,"leafNum",0),u(a,"toReduce",new Array(8).fill(0).map(()=>[]));function F(){let e=6;for(;e>=0&&a.toReduce[e].length===0;)e--;if(e<0)return;const t=a.toReduce[e].pop();t.isLeaf=!0,t.r=0,t.g=0,t.b=0,t.childrenCount=0;for(let o=0;o<8;o++){if(t.children[o]===null)continue;const n=t.children[o];t.r+=n.r,t.g+=n.g,t.b+=n.b,t.childrenCount+=n.childrenCount,a.leafNum--}a.leafNum++}function k(e,t){if(e.isLeaf){const o=j([~~(e.r/e.childrenCount),~~(e.g/e.childrenCount),~~(e.b/e.childrenCount)]);t[o]?t[o]+=e.childrenCount:t[o]=e.childrenCount;return}for(let o=0;o<8;o++)e.children[o]!==null&&k(e.children[o],t)}class G{constructor(t){u(this,"colors");u(this,"config",L);t&&this.setConfig(t)}setConfig(t){if(!t)throw"config must not be empty";if(t.compresionRate!==void 0&&t.compresionRate<0)throw"compresion rate must not be negative";if(t.timeout!==void 0&&typeof t.timeout!="number")throw"timeout must be number";Object.keys(t).forEach(o=>{const n=t[o];n!==void 0&&(this.config[o]=n)})}async extractColor(t){let o;return typeof t=="string"?o=document.createElement("img"):o=t,o.crossOrigin="Anonymous",await new Promise(n=>{o.onload=()=>{n()},this.config.timeout>=0&&setTimeout(n,this.config.timeout),typeof t=="string"&&(o.src=t)}),this._extractColor(o),this.colors}_extractColor(t){let{width:o,height:n}=t;o*=this.config.compresionRate,n*=this.config.compresionRate;const s=document.createElement("canvas");s.width=o,s.height=n;const r=s.getContext("2d");if(!r)throw"cannot get canvas context";r.drawImage(t,0,0,o,n);const c=r.getImageData(0,0,o,n).data,i=this.getMainColors(c);this.colors=i}getMainColors(t){const o=new a;a.toReduce=new Array(8).fill(0).map(()=>[]),a.leafNum=0;for(let r=0;r<t.length;r+=4)for(o.addColor([t[r],t[r+1],t[r+2]],0);a.leafNum>this.config.topColorCount*2;)F();const n={};k(o,n);const s=[];for(const r in n)s.push({color:r,count:n[r]});return s.sort((r,c)=>c.count-r.count),s.slice(0,this.config.topColorCount)}chooseReadableColor(){if(!this.colors)throw"you haven't extracted colors, please call `extractColor` first";if(this.colors.length<2)throw"cannot generete two colors because there is only one color in this image";return T(this.colors.map(t=>t.color))}}const L={compresionRate:.2,topColorCount:6,timeout:1e3*10};var N=e=>typeof e=="string"?e:e.src,P=({amount:e=3,format:t="array",group:o=20,sample:n=10}={})=>({amount:e,format:t,group:o,sample:n}),O=(e,t)=>{var o=e.map(n=>{var s=Array.isArray(n)?n:n.split(",").map(Number);return t.format==="hex"?H(s):s});return t.amount===1||o.length===1?o[0]:o},C=(e,t)=>{var o=Math.round(e/t)*t;return Math.min(o,255)},H=e=>"#"+e.map(t=>{var o=t.toString(16);return o.length===1?"0"+o:o}).join(""),$=e=>new Promise((t,o)=>{var n=document.createElement("canvas"),s=n.getContext("2d"),r=new Image;r.onload=()=>{n.height=r.height,n.width=r.width,s.drawImage(r,0,0);var c=s.getImageData(0,0,r.width,r.height).data;t(c)},r.onerror=()=>o(Error("Image loading failed.")),r.crossOrigin="",r.src=e}),V=(e,t)=>{for(var o=4*t.sample,n={},s=0;s<e.length;s+=o){var r=[C(e[s],t.group),C(e[s+1],t.group),C(e[s+2],t.group)].join();n[r]=n[r]?n[r]+1:1}return O(Object.entries(n).sort(([c,i],[l,h])=>i>h?-1:1).slice(0,t.amount).map(([c])=>c),t)},z=(e,t,o)=>new Promise((n,s)=>$(N(t)).then(r=>n(e(r,P(o)))).catch(r=>s(r))),q=(e,t)=>z(V,e,t);const J=f("div",null,"\u56FE\u7247\u989C\u8272\u4E3B\u989C\u8272\u63D0\u53D6\u8BBE\u7F6E\u4E3A\u80CC\u666F",-1),K=f("div",null,"color.js",-1),Q=["src"],U=f("div",null,"image-color-extraction",-1),W=["src"],X=R({name:"simpleColor"}),Y=R({...X,setup(e){const t=v(""),o=10;async function n(){const i=await q(g("img_login_bg.png"),{amount:o,format:"hex",group:30}),l=7;i.length>l&&l<o&&(t.value=i[l])}n();const s=v(""),r=4,c=new G({topColorCount:r});return c.extractColor(g("img_login_bg.png")).then(()=>{var h;const i=(h=c.colors)!=null?h:[],l=2;i.length>l&&l<r&&(s.value=i[l].color)}),(i,l)=>(I(),A(M,null,[J,K,f("div",{flex:"","flex-row":"","justify-center":"","items-center":"",style:b("background-color:"+t.value)},[f("img",{"object-cover":"",block:"","w-200":"","h-200":"","py-100":"",src:w(g)("img_login_bg.png")},null,8,Q)],4),U,f("div",{flex:"","flex-row":"","justify-center":"","items-center":"",style:b("background-color:"+s.value)},[f("img",{"object-cover":"",block:"","w-200":"","h-200":"","py-100":"",src:w(g)("img_login_bg.png")},null,8,W)],4)],64))}});typeof x=="function"&&x(Y);export{Y as default};
