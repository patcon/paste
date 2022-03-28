import*as e from"react";import{useUID as a}from"@twilio-paste/uid-library";import{IconWrapper as I}from"./helpers/IconWrapper";const c=({as:n,display:i,element:l="ICON",size:p,color:t,title:o,decorative:r})=>{const s=`SuccessIcon-${a()}`;if(!r&&o==null)throw new Error("[SuccessIcon]: Missing a title for non-decorative icon.");return e.createElement(I,{as:n,display:i,element:l,size:p,color:t},e.createElement("svg",{role:"img","aria-hidden":r,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":s},o?e.createElement("title",{id:s},o):null,e.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 2a8 8 0 110 16 8 8 0 010-16zm2.997 5c-.266 0-.521.106-.71.294l-3.286 3.294L7.712 9.29a1.003 1.003 0 00-1.418 1.418l1.998 1.997a1 1 0 001.418 0l3.996-3.994A1.002 1.002 0 0012.996 7z"})))};c.displayName="SuccessIcon";export{c as SuccessIcon};