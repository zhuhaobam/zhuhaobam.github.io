import{d as _,u as k,ah as f,ai as b,r as v,o as j,k as S,g as i,b as t,j as u,t as l,e as r,aj as T}from"./main-1d570fc2.js";import{_ as x}from"./Switch-ad319c54.js";import{_ as D}from"./Tooltip-1fa1eccb.js";const w=r("div",{i:"carbon-sun"},null,-1),y=r("div",{i:"carbon-moon"},null,-1),B=_({name:"lightDark"}),E=_({...B,setup(C){const c=k(),a=f(),d=b(a),s=v(c.getTheme===null);function p(e){(e===!1&&a.value===!1||e===!0&&a.value===!0)&&d(),c.setTheme(e?null:T)}const m=({focused:e,checked:n})=>{const o={};return n?(o.background="gold",e&&(o.boxShadow="0 0 0 2px gold")):(o.background="#073763",e&&(o.boxShadow="0 0 0 2px #073763")),o};return(e,n)=>{const o=x,h=D;return j(),S("div",null,[i(h,{placement:"bottom"},{trigger:t(()=>[i(o,{value:s.value,"onUpdate:value":[n[0]||(n[0]=g=>s.value=g),p],"rail-style":m},{checked:t(()=>[u(l(e.$t("project.light")),1)]),unchecked:t(()=>[u(l(e.$t("project.dark")),1)]),"checked-icon":t(()=>[w]),"unchecked-icon":t(()=>[y]),_:1},8,["value"])]),default:t(()=>[r("span",null,l(e.$t(s.value?"project.light":"project.dark")),1)]),_:1})])}}});export{E as _};
