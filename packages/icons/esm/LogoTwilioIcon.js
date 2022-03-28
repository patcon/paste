import*as o from"react";import{useUID as c}from"@twilio-paste/uid-library";import{IconWrapper as m}from"./helpers/IconWrapper";const l=({as:n,display:p,element:t="ICON",size:a,color:s,title:r,decorative:i})=>{const e=`LogoTwilioIcon-${c()}`;if(!i&&r==null)throw new Error("[LogoTwilioIcon]: Missing a title for non-decorative icon.");return o.createElement(m,{as:n,display:p,element:t,size:a,color:s},o.createElement("svg",{role:"img","aria-hidden":i,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":e},r?o.createElement("title",{id:e},r):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10A10 10 0 0010 0zm0 17.333a7.333 7.333 0 110-14.666 7.333 7.333 0 010 14.666zm4.533-9.8a2.067 2.067 0 11-2.066-2.066 2.08 2.08 0 012.066 2.066zm0 4.934a2.067 2.067 0 11-2.066-2.067 2.08 2.08 0 012.066 2.067zm-4.933 0A2.067 2.067 0 117.533 10.4 2.08 2.08 0 019.6 12.467zm0-4.934a2.067 2.067 0 11-2.067-2.066A2.08 2.08 0 019.6 7.533z"})))};l.displayName="LogoTwilioIcon";export{l as LogoTwilioIcon};