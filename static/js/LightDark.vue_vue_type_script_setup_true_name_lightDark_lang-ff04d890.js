import{d as _,a as k,at as f,au as v,r as b,o as T,k as S,h as i,e as o,T as u,t as l,f as r,av as x}from"./main-2047782f.js";import{_ as D}from"./Switch-ebb8cb07.js";import{_ as j}from"./Tooltip-3b1924a6.js";const w=r("div",{i:"carbon-sun"},null,-1),y=r("div",{i:"carbon-moon"},null,-1),B=_({name:"lightDark"}),E=_({...B,setup(C){const c=k(),a=f(),d=v(a),s=b(c.getTheme===null);function p(e){(e===!1&&a.value===!1||e===!0&&a.value===!0)&&d(),c.setTheme(e?null:x)}const m=({focused:e,checked:n})=>{const t={};return n?(t.background="gold",e&&(t.boxShadow="0 0 0 2px gold")):(t.background="#073763",e&&(t.boxShadow="0 0 0 2px #073763")),t};return(e,n)=>{const t=D,h=j;return T(),S("div",null,[i(h,{placement:"bottom"},{trigger:o(()=>[i(t,{value:s.value,"onUpdate:value":[n[0]||(n[0]=g=>s.value=g),p],"rail-style":m},{checked:o(()=>[u(l(e.$t("project.light")),1)]),unchecked:o(()=>[u(l(e.$t("project.dark")),1)]),"checked-icon":o(()=>[w]),"unchecked-icon":o(()=>[y]),_:1},8,["value"])]),default:o(()=>[r("span",null,l(e.$t(s.value?"project.light":"project.dark")),1)]),_:1})])}}});export{E as _};