var v=Object.create;var a=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var s=o=>a(o,"__esModule",{value:!0});var g=(o,e)=>{for(var r in e)a(o,r,{get:e[r],enumerable:!0})},u=(o,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of h(e))!P.call(o,l)&&(r||l!=="default")&&a(o,l,{get:()=>e[l],enumerable:!(i=I(e,l))||i.enumerable});return o},z=(o,e)=>u(s(a(o!=null?v(H(o)):{},"default",!e&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),C=(o=>(e,r)=>o&&o.get(e)||(r=u(s({}),e,1),o&&o.set(e,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var W={};g(W,{ProductHomeIcon:()=>d});var n=z(require("react")),m=require("@twilio-paste/uid-library"),f=require("./helpers/IconWrapper");const d=({as:o,display:e,element:r="ICON",size:i,color:l,title:t,decorative:p})=>{const c=`ProductHomeIcon-${(0,m.useUID)()}`;if(!p&&t==null)throw new Error("[ProductHomeIcon]: Missing a title for non-decorative icon.");return n.createElement(f.IconWrapper,{as:o,display:e,element:r,size:i,color:l},n.createElement("svg",{role:"img","aria-hidden":p,width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":c},t?n.createElement("title",{id:c},t):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.654 3.14a.5.5 0 01.692 0l8 7.681a.5.5 0 11-.692.722L10 4.193l-7.654 7.35a.5.5 0 01-.692-.722l8-7.682z",clipRule:"evenodd"}),n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.462 8.318a.5.5 0 01.5.5V16H8a.5.5 0 010 1H4.462a.5.5 0 01-.5-.5V8.818a.5.5 0 01.5-.5zm11.076 0a.5.5 0 01.5.5V16.5a.5.5 0 01-.5.5H12a.5.5 0 010-1h3.039V8.818a.5.5 0 01.5-.5z",clipRule:"evenodd"}),n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 12a.5.5 0 00-.5.5v4h-1v-4A1.5 1.5 0 019 11h2a1.5 1.5 0 011.5 1.5v4h-1v-4a.5.5 0 00-.5-.5H9z",clipRule:"evenodd"})))};d.displayName="ProductHomeIcon";module.exports=C(W);