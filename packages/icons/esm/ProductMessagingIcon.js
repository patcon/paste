import*as o from"react";import{useUID as p}from"@twilio-paste/uid-library";import{IconWrapper as d}from"./helpers/IconWrapper";const i=({as:s,display:a,element:t="ICON",size:c,color:l,title:r,decorative:e})=>{const n=`ProductMessagingIcon-${p()}`;if(!e&&r==null)throw new Error("[ProductMessagingIcon]: Missing a title for non-decorative icon.");return o.createElement(d,{as:s,display:a,element:t,size:c,color:l},o.createElement("svg",{role:"img","aria-hidden":e,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":n},r?o.createElement("title",{id:n},r):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.885 17A.867.867 0 015 16.123v-2.158H3.25c-.69 0-1.25-.557-1.25-1.245V5.246C2 4.558 2.56 4 3.25 4h13.5c.69 0 1.25.558 1.25 1.246v7.474c0 .688-.56 1.245-1.25 1.245H9.69l-3.235 2.82a.882.882 0 01-.57.215zM3.25 4.997a.25.25 0 00-.25.249v7.474c0 .137.112.249.25.249H5.5a.497.497 0 01.5.498v2.377l3.165-2.756a.501.501 0 01.335-.12h7.25a.25.25 0 00.25-.248V5.246a.25.25 0 00-.25-.25H3.25z"})))};i.displayName="ProductMessagingIcon";export{i as ProductMessagingIcon};