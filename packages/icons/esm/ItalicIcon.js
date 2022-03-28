import*as o from"react";import{useUID as d}from"@twilio-paste/uid-library";import{IconWrapper as I}from"./helpers/IconWrapper";const i=({as:n,display:t,element:a="ICON",size:p,color:c,title:e,decorative:r})=>{const l=`ItalicIcon-${d()}`;if(!r&&e==null)throw new Error("[ItalicIcon]: Missing a title for non-decorative icon.");return o.createElement(I,{as:n,display:t,element:a,size:p,color:c},o.createElement("svg",{role:"img","aria-hidden":r,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":l},e?o.createElement("title",{id:l},e):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M13.16 4.069a.625.625 0 01.271.84l-5.5 10.75a.625.625 0 01-1.112-.569l5.5-10.75a.625.625 0 01.84-.271z"}),o.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M4 15.375c0-.345.28-.625.625-.625h5.75a.625.625 0 110 1.25h-5.75A.625.625 0 014 15.375zM9 4.625C9 4.28 9.28 4 9.625 4h5.75a.625.625 0 110 1.25h-5.75A.625.625 0 019 4.625z"})))};i.displayName="ItalicIcon";export{i as ItalicIcon};