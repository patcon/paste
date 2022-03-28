import*as o from"react";import{useUID as c}from"@twilio-paste/uid-library";import{IconWrapper as d}from"./helpers/IconWrapper";const l=({as:t,display:i,element:a="ICON",size:p,color:s,title:r,decorative:e})=>{const n=`UnsortedIcon-${c()}`;if(!e&&r==null)throw new Error("[UnsortedIcon]: Missing a title for non-decorative icon.");return o.createElement(d,{as:t,display:i,element:a,size:p,color:s},o.createElement("svg",{role:"img","aria-hidden":e,width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":n},r?o.createElement("title",{id:n},r):null,o.createElement("path",{fill:"currentColor",d:"M4.088 7.135a.598.598 0 00.057.704l.069.063c.193.15.46.128.632-.063L6.5 5.914V11.5a.5.5 0 001 0V5.913l1.654 1.926.069.063c.193.15.46.128.632-.063a.596.596 0 000-.78L7.35 4.161l-.068-.063a.459.459 0 00-.632.063L4.145 7.06l-.057.076zm11.824 5.73a.598.598 0 00-.057-.704l-.069-.063a.459.459 0 00-.632.063L13.5 14.086V8.5a.5.5 0 00-1 0v5.587l-1.654-1.926-.069-.063a.459.459 0 00-.632.063.596.596 0 000 .78l2.505 2.898.068.063c.193.15.46.128.632-.063l2.505-2.898.057-.076z"})))};l.displayName="UnsortedIcon";export{l as UnsortedIcon};