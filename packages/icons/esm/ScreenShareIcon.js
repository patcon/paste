import*as e from"react";import{useUID as d}from"@twilio-paste/uid-library";import{IconWrapper as s}from"./helpers/IconWrapper";const n=({as:a,display:i,element:p="ICON",size:t,color:c,title:r,decorative:o})=>{const l=`ScreenShareIcon-${d()}`;if(!o&&r==null)throw new Error("[ScreenShareIcon]: Missing a title for non-decorative icon.");return e.createElement(s,{as:a,display:i,element:p,size:t,color:c},e.createElement("svg",{role:"img","aria-hidden":o,width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":l},r?e.createElement("title",{id:l},r):null,e.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M17 4H3a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM3 3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H3z",clipRule:"evenodd"}),e.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.866 9.36a.5.5 0 01-.707 0L9.996 7.197 7.834 9.36a.5.5 0 11-.708-.707l2.517-2.517a.5.5 0 01.707 0l2.516 2.517a.5.5 0 010 .707z",clipRule:"evenodd"}),e.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.976 6.506a.5.5 0 01.5.5v6.5a.5.5 0 11-1 0v-6.5a.5.5 0 01.5-.5z",clipRule:"evenodd"})))};n.displayName="ScreenShareIcon";export{n as ScreenShareIcon};