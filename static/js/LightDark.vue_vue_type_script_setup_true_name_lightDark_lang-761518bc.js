import{d as u,u as h,r as g,o as k,j as f,g as c,b as t,S as i,t as l,e as s,at as b}from"./main-8d0055c3.js";import{_ as v}from"./Switch-8a1ad864.js";import{_ as S}from"./Tooltip-7d960a50.js";const j=s("div",{i:"carbon-sun"},null,-1),x=s("div",{i:"carbon-moon"},null,-1),T=u({name:"lightDark"}),N=u({...T,setup(w){const r=h(),a=g(r.getTheme===null);function _(e){r.setTheme(e?null:b)}const d=({focused:e,checked:n})=>{const o={};return n?(o.background="gold",e&&(o.boxShadow="0 0 0 2px gold")):(o.background="#073763",e&&(o.boxShadow="0 0 0 2px #073763")),o};return(e,n)=>{const o=v,p=S;return k(),f("div",null,[c(p,{placement:"bottom"},{trigger:t(()=>[c(o,{value:a.value,"onUpdate:value":[n[0]||(n[0]=m=>a.value=m),_],"rail-style":d},{checked:t(()=>[i(l(e.$t("project.light")),1)]),unchecked:t(()=>[i(l(e.$t("project.dark")),1)]),"checked-icon":t(()=>[j]),"unchecked-icon":t(()=>[x]),_:1},8,["value"])]),default:t(()=>[s("span",null,l(e.$t(a.value?"project.light":"project.dark")),1)]),_:1})])}}});export{N as _};
