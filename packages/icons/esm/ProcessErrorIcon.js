import*as r from"react";import{useUID as a}from"@twilio-paste/uid-library";import{IconWrapper as d}from"./helpers/IconWrapper";const l=({as:s,display:i,element:p="ICON",size:c,color:t,title:o,decorative:e})=>{const n=`ProcessErrorIcon-${a()}`;if(!e&&o==null)throw new Error("[ProcessErrorIcon]: Missing a title for non-decorative icon.");return r.createElement(d,{as:s,display:i,element:p,size:c,color:t},r.createElement("svg",{role:"img","aria-hidden":e,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":n},o?r.createElement("title",{id:n},o):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M11.091 3.452l5.457 5.457c.603.602.603 1.58 0 2.182l-5.457 5.457a1.543 1.543 0 01-2.182 0l-5.457-5.457a1.543 1.543 0 010-2.182l5.457-5.457a1.543 1.543 0 012.182 0z"})))};l.displayName="ProcessErrorIcon";export{l as ProcessErrorIcon};