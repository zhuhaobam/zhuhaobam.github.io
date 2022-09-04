import{_ as t}from"./index.vue_vue_type_script_setup_true_name_anchorMdScript_lang-ec8758f0.js";import{d as r,a4 as B,e as E,v as a,h as i,g as C,x as u,ae as F}from"./main-291f3adb.js";import"./attribute-9ea89db2.js";import"./full-2f757101.js";import"./BackTop-45c02a4c.js";import"./use-merged-state-fed4a42a.js";import"./next-frame-once-c806eabc.js";import"./on-fonts-ready-eb3fb3d1.js";import"./LayoutSider-6151607b.js";import"./ChevronRight-5230c878.js";import"./interface-77f65408.js";import"./light-4b090e34.js";const p={class:"markdown-body"},l=u("div",{style:{display:"none"}},[u("nav",{class:"table-of-contents"},[u("ol",null,[u("li",null,[u("a",{href:"#spring-ioc-\u5BB9\u5668\u548C-bean-\u7B80\u4ECB"},"Spring IoC \u5BB9\u5668\u548C bean \u7B80\u4ECB")])])])],-1),c=u("h1",{id:"spring-ioc-\u5BB9\u5668\u548C-bean-\u7B80\u4ECB",tabindex:"-1"},"Spring IoC \u5BB9\u5668\u548C bean \u7B80\u4ECB",-1),s=u("p",null,[F("\u672C\u7AE0\u4ECB\u7ECD Spring \u6846\u67B6\u5B9E\u73B0\u63A7\u5236\u53CD\u8F6C\uFF08IoC\uFF09\u7684\u539F\u7406\u3002"),u("br"),F("IoC \u4E5F\u79F0\u4E3A\u4F9D\u8D56\u6CE8\u5165\uFF08DI\uFF09\u3002"),u("br"),F("\u5BF9\u8C61\u4EC5\u901A\u8FC7\u6784\u9020\u51FD\u6570\u53C2\u6570\u3001\u5DE5\u5382\u65B9\u6CD5\u7684\u53C2\u6570\u6216\u5728\u5BF9\u8C61\u5B9E\u4F8B\u6784\u9020\u6216\u4ECE\u5DE5\u5382\u65B9\u6CD5\u8FD4\u56DE\u540E\u5728\u5BF9\u8C61\u5B9E\u4F8B\u4E0A\u8BBE\u7F6E\u7684\u5C5E\u6027\u6765\u5B9A\u4E49\u5B83\u4EEC\u7684\u4F9D\u8D56\u5173\u7CFB\uFF08\u5373\uFF0C\u5B83\u4EEC\u4F7F\u7528\u7684\u5176\u4ED6\u5BF9\u8C61\uFF09\u3002"),u("br"),F("\u7136\u540E\uFF0C\u5BB9\u5668\u5728\u521B\u5EFA bean \u65F6\u6CE8\u5165\u8FD9\u4E9B\u4F9D\u8D56\u9879\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u57FA\u672C\u4E0A\u662F bean \u672C\u8EAB\u7684\u9006\u8FC7\u7A0B\uFF08\u56E0\u6B64\u79F0\u4E3A\u63A7\u5236\u7684\u53CD\u8F6C\uFF09\uFF0C\u901A\u8FC7\u4F7F\u7528\u7C7B\u7684\u76F4\u63A5\u6784\u9020\u6216\u670D\u52A1\u5B9A\u4F4D\u5668\u6A21\u5F0F\u7B49\u673A\u5236\u6765\u63A7\u5236\u5176\u4F9D\u8D56\u9879\u7684\u5B9E\u4F8B\u5316\u6216\u4F4D\u7F6E\u3002")],-1),A=u("p",null,[F("org.springframework.beans \u548C org.springframework.context \u5305\u662F Spring \u6846\u67B6\u7684 IoC \u5BB9\u5668\u7684\u57FA\u7840\u3002"),u("br"),u("a",{href:"https://docs.spring.io/spring-framework/docs/5.3.22/javadoc-api/org/springframework/beans/factory/BeanFactory.html",class:"external-link",target:"_blank",rel:"noreferrer noopener"},"BeanFactory"),F("\u63A5\u53E3\u63D0\u4F9B\u4E86\u4E00\u79CD\u9AD8\u7EA7\u914D\u7F6E\u673A\u5236\uFF0C\u80FD\u591F\u7BA1\u7406\u4EFB\u4F55\u7C7B\u578B\u7684\u5BF9\u8C61\u3002"),u("br"),u("a",{href:"https://docs.spring.io/spring-framework/docs/5.3.22/javadoc-api/org/springframework/context/ApplicationContext.html",class:"external-link",target:"_blank",rel:"noreferrer noopener"},"ApplicationContext"),F("\u662F BeanFactory \u7684\u5B50\u63A5\u53E3\u3002")],-1),D=u("ul",null,[u("li",null,"\u66F4\u5BB9\u6613\u4E0E Spring \u7684 AOP \u529F\u80FD\u96C6\u6210"),u("li",null,"\u6D88\u606F\u8D44\u6E90\u5904\u7406\uFF08\u7528\u4E8E\u56FD\u9645\u5316\uFF09"),u("li",null,"\u6D3B\u52A8\u53D1\u5E03"),u("li",null,"\u5E94\u7528\u5C42\u7279\u5B9A\u4E0A\u4E0B\u6587\uFF0C\u4F8B\u5982 WebApplicationContext \u7528\u4E8E Web \u5E94\u7528\u7A0B\u5E8F\u7684\u4E0A\u4E0B\u6587\u3002")],-1),d=u("p",null,"\u7B80\u800C\u8A00\u4E4B\uFF0C\u5B83 BeanFactory \u63D0\u4F9B\u4E86\u914D\u7F6E\u6846\u67B6\u548C\u57FA\u672C\u529F\u80FD\uFF0C\u5E76 ApplicationContext \u589E\u52A0\u4E86\u66F4\u591A\u7684\u4F01\u4E1A\u7279\u5B9A\u529F\u80FD\u3002\u662F\u7684 ApplicationContext \u5B8C\u6574\u8D85\u96C6\uFF0CBeanFactory \u5E76\u4E14\u5728\u672C\u7AE0\u4E2D\u4E13\u95E8\u7528\u4E8E\u63CF\u8FF0 Spring \u7684 IoC \u5BB9\u5668\u3002\u6709\u5173\u4F7F\u7528 BeanFactory \u4EE3\u66FF\u7684\u66F4\u591A\u4FE1\u606F\uFF0CApplicationContext,\u8BF7\u53C2\u9605\u6DB5\u76D6 BeanFactoryAPI \u7684\u90E8\u5206\u3002",-1),m=u("p",null,"\u5728 Spring \u4E2D\uFF0C\u6784\u6210\u5E94\u7528\u7A0B\u5E8F\u4E3B\u5E72\u5E76\u7531 Spring IoC \u5BB9\u5668\u7BA1\u7406\u7684\u5BF9\u8C61\u79F0\u4E3A bean\u3002bean \u662F\u7531 Spring IoC \u5BB9\u5668\u5B9E\u4F8B\u5316\u3001\u7EC4\u88C5\u548C\u7BA1\u7406\u7684\u5BF9\u8C61\u3002\u5426\u5219\uFF0Cbean \u53EA\u662F\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u4F17\u591A\u5BF9\u8C61\u4E4B\u4E00\u3002Bean \u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\u53CD\u6620\u5728\u5BB9\u5668\u4F7F\u7528\u7684\u914D\u7F6E\u5143\u6570\u636E\u4E2D\u3002",-1),V={title:"IOC\u5BB9\u5668",breadcrumb:"md.ioc",noi18n:"no",icon:"file-markdown-filled",sort:1,padding:"0 210px 40px 40px"},j="",P=r({__name:"ioc",setup(_,{expose:n}){n({frontmatter:{title:"IOC\u5BB9\u5668",breadcrumb:"md.ioc",noi18n:"no",icon:"file-markdown-filled",sort:1,padding:"0 210px 40px 40px"},excerpt:void 0});const o=B();return o.currentRoute.value.meta={...o.currentRoute.value.meta,title:"IOC\u5BB9\u5668",breadcrumb:"md.ioc",noi18n:"no",icon:"file-markdown-filled",sort:1,padding:"0 210px 40px 40px"},(b,g)=>{const e=t;return E(),a("div",p,[i(e,null,{default:C(()=>[l,c,s,A,D,d,m]),_:1})])}}});export{P as default,j as excerpt,V as frontmatter};
