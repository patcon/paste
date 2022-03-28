import*as o from"react";import{useUID as p}from"@twilio-paste/uid-library";import{IconWrapper as d}from"./helpers/IconWrapper";const t=({as:a,display:i,element:s="ICON",size:l,color:c,title:r,decorative:e})=>{const n=`ProductConversationsIcon-${p()}`;if(!e&&r==null)throw new Error("[ProductConversationsIcon]: Missing a title for non-decorative icon.");return o.createElement(d,{as:a,display:i,element:s,size:l,color:c},o.createElement("svg",{role:"img","aria-hidden":e,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":n},r?o.createElement("title",{id:n},r):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.885 18A.864.864 0 015 17.125v-2.152H3.25c-.69 0-1.25-.557-1.25-1.243V6.275c0-.687.56-1.243 1.25-1.243H6a3.75 3.75 0 013.5 2.306l1.935 4.926A2.79 2.79 0 0014 13.979h2.75a.25.25 0 00.25-.249V6.275a.25.25 0 00-.25-.249H14V3.153l-3.17 2.749a.502.502 0 01-.689-.059.495.495 0 01.029-.687l3.375-2.937a.88.88 0 01.944-.14.87.87 0 01.511.8v2.153h1.75c.69 0 1.25.556 1.25 1.243v7.455c0 .686-.56 1.243-1.25 1.243H14a3.8 3.8 0 01-3.5-2.336L8.57 7.71a2.755 2.755 0 00-2.54-1.685H3.25a.25.25 0 00-.25.249v7.455a.25.25 0 00.25.249h2.775v2.873l3.165-2.749a.502.502 0 01.838.268.495.495 0 01-.178.478l-3.395 2.937a.883.883 0 01-.57.214z"})))};t.displayName="ProductConversationsIcon";export{t as ProductConversationsIcon};