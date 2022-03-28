import*as r from"react";import{useUID as s}from"@twilio-paste/uid-library";import{IconWrapper as c}from"./helpers/IconWrapper";const a=({as:n,display:i,element:p="ICON",size:t,color:d,title:o,decorative:e})=>{const l=`ArrowForwardIcon-${s()}`;if(!e&&o==null)throw new Error("[ArrowForwardIcon]: Missing a title for non-decorative icon.");return r.createElement(c,{as:n,display:i,element:p,size:t,color:d},r.createElement("svg",{role:"img","aria-hidden":e,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":l},o?r.createElement("title",{id:l},o):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.991 9.91l.007.05v.08l-.01.07-.01.029a.489.489 0 01-.205.272l-3.832 3.444a.596.596 0 01-.78 0 .459.459 0 01-.063-.632l.063-.069 2.957-2.659H5.513A.504.504 0 015 10a.5.5 0 01.42-.488l.093-.008h7.604l-2.956-2.658a.459.459 0 01-.063-.632l.063-.069a.598.598 0 01.704-.057l.076.057 3.832 3.444c.098.064.172.16.206.272l.012.049z"})))};a.displayName="ArrowForwardIcon";export{a as ArrowForwardIcon};