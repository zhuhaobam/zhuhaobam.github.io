import{ai as t}from"./main-2bbc1e4d.js";const a=t("full",{state:()=>({page:"init"}),getters:{getPage(e){return e.page},inner(e){return e.page.startsWith("inner")},innerTrue(e){return e.page.startsWith("inner:true")},all(e){return e.page.startsWith("all")}},actions:{setPage(e){this.page=e}}});export{a as u};