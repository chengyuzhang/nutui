import{c as e}from"./mobile.d38b813a.js";import{r as l,o as n,c as s,f as o,i as r}from"./vendor.c4101de0.js";import"./index.8a6798b9.js";const{createDemo:t}=e("price");var a=t({props:{}});const d={class:"demo"},u=o("h2",null,"基本用法",-1),c=o("h2",null,"有人民币符号，无千位分隔",-1),i=o("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1);a.render=function(e,t,a,p,m,f){const b=l("nut-price"),h=l("nut-cell");return n(),s("div",d,[u,o(h,null,{default:r((()=>[o(b,{price:1010,"need-symbol":!1,thousands:!0})])),_:1}),c,o(h,null,{default:r((()=>[o(b,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),i,o(h,null,{default:r((()=>[o(b,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])};export default a;
