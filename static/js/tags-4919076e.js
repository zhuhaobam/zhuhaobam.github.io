import{X as g,af as n,U as a}from"./main-e332850a.js";const{toString:c}=Object.prototype;function h(t,s){return c.call(t)===`[object ${s}]`}function o(t){return h(t,"String")}const d=["/404","/:id(\\d+)","/:all(.*)*","/login","/system/user","/system/setting"],u=["/drawing/drauu/:did(\\d+)"],p=g("tags",{state:()=>({tags:[],activeTag:""}),persist:{enabled:!0,strategies:[{storage:localStorage,paths:["tags","activeTag"]}]},getters:{hasEmpty(t){return t.tags.length===0},leastTwo(t){return t.tags.length>1},getActiveTag(t){return t.activeTag},getTags(t){return t.tags}},actions:{clear(){this.activeTag="",this.tags=[]},setActiveTag(t){this.activeTag=t},setTags(t){this.tags=n(t)},addTag(t){let s="";if(u.includes(t.path)){const e=Object.fromEntries(Object.entries(t.params).map(([i,r])=>[i,r]));o(e.did)&&(s=t.path.replace(":did(\\d+)",e.did))}else s=t.path;this.setActiveTag(s),!(d.includes(t.path)||this.tags.some(e=>e.path===s))&&this.setTags([...this.tags,{...t,path:s}])},removeOtherTag(t){t!==this.activeTag&&a.push(t),this.setTags(this.tags.filter(s=>s.path===t))},removeTag(t){if(t===this.activeTag){const s=this.tags.findIndex(e=>e.path===t);s>0?a.push(this.tags[s-1].path):a.push(this.tags[s+1].path)}this.setTags(this.tags.filter(s=>s.path!==t))}}});export{p as u};
