var M=Object.create;var p=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var I=o=>p(o,"__esModule",{value:!0});var W=(o,r)=>{for(var e in r)p(o,e,{get:r[e],enumerable:!0})},d=(o,r,e,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of g(r))!v.call(o,n)&&(e||n!=="default")&&p(o,n,{get:()=>r[n],enumerable:!(i=h(r,n))||i.enumerable});return o},w=(o,r)=>d(I(p(o!=null?M(u(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),x=(o=>(r,e)=>o&&o.get(r)||(e=d(I({}),r,1),o&&o.set(r,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var y={};W(y,{MoreIcon:()=>s});var t=w(require("react")),m=require("@twilio-paste/uid-library"),f=require("./helpers/IconWrapper");const s=({as:o,display:r,element:e="ICON",size:i,color:n,title:l,decorative:c})=>{const a=`MoreIcon-${(0,m.useUID)()}`;if(!c&&l==null)throw new Error("[MoreIcon]: Missing a title for non-decorative icon.");return t.createElement(f.IconWrapper,{as:o,display:r,element:e,size:i,color:n},t.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":a},l?t.createElement("title",{id:a},l):null,t.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 14.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-6c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-6c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S8.5 4.827 8.5 4s.673-1.5 1.5-1.5z"})))};s.displayName="MoreIcon";module.exports=x(y);