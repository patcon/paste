var x=Object.create;var l=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var I=r=>l(r,"__esModule",{value:!0});var g=(r,e)=>{for(var o in e)l(r,o,{get:e[o],enumerable:!0})},d=(r,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of f(e))!E.call(r,n)&&(o||n!=="default")&&l(r,n,{get:()=>e[n],enumerable:!(a=L(e,n))||a.enumerable});return r},k=(r,e)=>d(I(l(r!=null?x(v(r)):{},"default",!e&&r&&r.__esModule?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),u=(r=>(e,o)=>r&&r.get(e)||(o=d(I({}),e,1),r&&r.set(e,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var W={};g(W,{LinkExternalIcon:()=>p});var i=k(require("react")),m=require("@twilio-paste/uid-library"),h=require("./helpers/IconWrapper");const p=({as:r,display:e,element:o="ICON",size:a,color:n,title:t,decorative:s})=>{const c=`LinkExternalIcon-${(0,m.useUID)()}`;if(!s&&t==null)throw new Error("[LinkExternalIcon]: Missing a title for non-decorative icon.");return i.createElement(h.IconWrapper,{as:r,display:e,element:o,size:a,color:n},i.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},t?i.createElement("title",{id:c},t):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.4 4.5a.5.5 0 01.5.5v.1a.5.5 0 01-.5.5H5.6v8.8h8.8v-2.8a.5.5 0 01.41-.492l.09-.008h.1a.5.5 0 01.492.41l.008.09V15a.5.5 0 01-.41.492L15 15.5H5a.5.5 0 01-.492-.41L4.5 15V5a.5.5 0 01.41-.492L5 4.5h3.4zm6.6 0a.5.5 0 01.5.5v.1l-.001.01.001 3.29a.5.5 0 01-.5.5h-.1a.5.5 0 01-.5-.5l-.001-1.935-3.967 3.967a.611.611 0 01-.78.07l-.084-.07a.611.611 0 01-.07-.78l.07-.084L13.534 5.6H11.6a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5H15z"})))};p.displayName="LinkExternalIcon";module.exports=u(W);