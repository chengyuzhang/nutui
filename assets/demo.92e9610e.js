import{c as t}from"./mobile.fee6f4de.js";import{k as i,r as a,o as e,c as o,f as c,i as n}from"./vendor.eafc828b.js";import"./index.bda1353b.js";const{createDemo:l}=t("tabbar");var b=l({props:{},setup:()=>({active:i(2),tabSwitch:function(t,i){console.log(t,i)}})});const r={class:"demo full"},f=c("h2",null,"基础用法",-1),m=c("h2",null,"自定义选中",-1),u=c("h2",null,"徽标提示",-1),d=c("h2",null,"自定义颜色",-1),h=c("h2",null,"三个icon的tabbar",-1),s=c("h2",null,"固定底部，可自由跳转",-1);b.render=function(t,i,l,b,y,v){const p=a("nut-tabbar-item"),g=a("nut-tabbar");return e(),o("div",r,[f,c(g,{onTabSwitch:t.tabSwitch},{default:n((()=>[c(p,{"tab-title":"首页",icon:"home"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"}),c(p,{"tab-title":"购物车",icon:"cart"}),c(p,{"tab-title":"我的",icon:"my"})])),_:1},8,["onTabSwitch"]),m,c(g,{show:t.active,"onUpdate:show":i[1]||(i[1]=i=>t.active=i)},{default:n((()=>[c(p,{"tab-title":"首页",icon:"home"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"}),c(p,{"tab-title":"购物车",icon:"cart"}),c(p,{"tab-title":"我的",icon:"my"})])),_:1},8,["show"]),u,c(g,null,{default:n((()=>[c(p,{"tab-title":"首页",icon:"home",num:"11"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"}),c(p,{"tab-title":"购物车",icon:"cart",num:"110"}),c(p,{"tab-title":"我的",icon:"my"})])),_:1}),d,c(g,{unactiveColor:"#7d7e80",activeColor:"#1989fa"},{default:n((()=>[c(p,{"tab-title":"首页",icon:"home"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"}),c(p,{"tab-title":"购物车",icon:"cart"}),c(p,{"tab-title":"我的",icon:"my"})])),_:1}),h,c(g,{unactiveColor:"#7d7e80",activeColor:"#1989fa"},{default:n((()=>[c(p,{"tab-title":"首页",icon:"home"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"})])),_:1}),s,c(g,{bottom:!0},{default:n((()=>[c(p,{"tab-title":"首页",href:"",icon:"home"}),c(p,{"tab-title":"分类",icon:"category"}),c(p,{"tab-title":"发现",icon:"find"}),c(p,{"tab-title":"购物车",href:"https://m.jd.com",icon:"cart"}),c(p,{"tab-title":"我的",href:"######",icon:"my"})])),_:1})])};export default b;
