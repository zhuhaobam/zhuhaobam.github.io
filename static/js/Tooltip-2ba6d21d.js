import{N as p,p as i}from"./Popover-11eae654.js";import{d as n,Z as t,aG as a,r as l,G as h,H as m}from"./main-93e7aa02.js";const c=Object.assign(Object.assign({},i),t.props),O=n({name:"Tooltip",props:c,__popover__:!0,setup(e){const o=t("Tooltip","-tooltip",void 0,a,e),s=l(null);return Object.assign(Object.assign({},{syncPosition(){s.value.syncPosition()},setShow(r){s.value.setShow(r)}}),{popoverRef:s,mergedTheme:o,popoverThemeOverrides:h(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return m(p,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{O as _};