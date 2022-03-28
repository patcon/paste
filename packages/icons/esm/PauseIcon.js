import*as e from"react";import{useUID as l}from"@twilio-paste/uid-library";import{IconWrapper as I}from"./helpers/IconWrapper";const i=({as:p,display:s,element:a="ICON",size:t,color:c,title:o,decorative:r})=>{const n=`PauseIcon-${l()}`;if(!r&&o==null)throw new Error("[PauseIcon]: Missing a title for non-decorative icon.");return e.createElement(I,{as:p,display:s,element:a,size:t,color:c},e.createElement("svg",{role:"img","aria-hidden":r,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":n},o?e.createElement("title",{id:n},o):null,e.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.5 4c.552 0 1 .488 1 1.09v9.82c0 .602-.448 1.09-1 1.09H7c-.552 0-1-.488-1-1.09V5.09C6 4.489 6.448 4 7 4h1.5zM13 4c.552 0 1 .488 1 1.09v9.82c0 .602-.448 1.09-1 1.09h-1.5c-.552 0-1-.488-1-1.09V5.09c0-.602.448-1.09 1-1.09H13zM8.5 5.09H7v9.82h1.5V5.09zm4.5 0h-1.5v9.82H13V5.09z"})))};i.displayName="PauseIcon";export{i as PauseIcon};