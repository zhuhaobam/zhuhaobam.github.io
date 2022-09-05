const i="data:image/png;base64,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",g="data:image/png;base64,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",t="/static/png/img_login_bg-88e461d1.png",o="data:image/png;base64,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",A="/static/webp/music-bg-c7023ebd.webp",e="/static/mp3/along-5d7dba84.mp3",a="/static/svg/bonfire-sharp-56064fb6.svg",c="/static/svg/code-branch-67675aea.svg",l="/static/svg/code-commit-3a528823.svg",n="/static/svg/code-compare-49dc29e5.svg",v="/static/svg/code-filled-03162588.svg",b="/static/svg/code-fork-d6825dd6.svg",I="/static/svg/code-merge-e050ea7b.svg",U="/static/svg/code-pull-request-6246d8bc.svg",q="/static/svg/code-5d19920e.svg",d="/static/svg/container-bf3b3d06.svg",B="/static/svg/file-markdown-filled-532541cf.svg",m="/static/svg/language-java-cb144081.svg",p="/static/svg/language-typescript-e37dce5a.svg",S="/static/svg/language-b77435c4.svg",J="/static/svg/mysql-2561b882.svg",Q="/static/svg/order-457c5ce3.svg",D="/static/svg/random-e7a98c26.svg",u="/static/svg/spring-d1048cde.svg",R="/static/svg/springboot-dc7bd1dc.svg",G="/static/svg/springsecurity-52bdad65.svg",V="/static/mp3/luckly-f70c987e.mp3",M="/static/mp3/xiao-65fa9b56.mp3",h=s=>new URL(Object.assign({"../assets/img/cafe.png":i,"../assets/img/icon.png":g,"../assets/img/img_login_bg.png":t,"../assets/img/logo.png":o,"../assets/img/music-bg.webp":A})[`../assets/img/${s}`],self.location).href,r=s=>new URL(Object.assign({"../assets/along.mp3":e,"../assets/icons/bonfire-sharp.svg":a,"../assets/icons/code-branch.svg":c,"../assets/icons/code-commit.svg":l,"../assets/icons/code-compare.svg":n,"../assets/icons/code-filled.svg":v,"../assets/icons/code-fork.svg":b,"../assets/icons/code-merge.svg":I,"../assets/icons/code-pull-request.svg":U,"../assets/icons/code.svg":q,"../assets/icons/container.svg":d,"../assets/icons/file-markdown-filled.svg":B,"../assets/icons/language-java.svg":m,"../assets/icons/language-typescript.svg":p,"../assets/icons/language.svg":S,"../assets/icons/mysql.svg":J,"../assets/icons/order.svg":Q,"../assets/icons/random.svg":D,"../assets/icons/spring.svg":u,"../assets/icons/springboot.svg":R,"../assets/icons/springsecurity.svg":G,"../assets/img/cafe.png":i,"../assets/img/icon.png":g,"../assets/img/img_login_bg.png":t,"../assets/img/logo.png":o,"../assets/img/music-bg.webp":A,"../assets/luckly.mp3":V,"../assets/xiao.mp3":M})[`../assets/${s}`],self.location).href;export{r as a,h as g};