var u=Object.create;var c=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var d=o=>c(o,"__esModule",{value:!0});var g=(o,r)=>{for(var e in r)c(o,e,{get:r[e],enumerable:!0})},h=(o,r,e,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of P(r))!v.call(o,t)&&(e||t!=="default")&&c(o,t,{get:()=>r[t],enumerable:!(a=C(r,t))||a.enumerable});return o},z=(o,r)=>h(d(c(o!=null?u(f(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),W=(o=>(r,e)=>o&&o.get(r)||(e=h(d({}),r,1),o&&o.set(r,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var w={};g(w,{ProductChatIcon:()=>l});var n=z(require("react")),m=require("@twilio-paste/uid-library"),I=require("./helpers/IconWrapper");const l=({as:o,display:r,element:e="ICON",size:a,color:t,title:i,decorative:p})=>{const s=`ProductChatIcon-${(0,m.useUID)()}`;if(!p&&i==null)throw new Error("[ProductChatIcon]: Missing a title for non-decorative icon.");return n.createElement(I.IconWrapper,{as:o,display:r,element:e,size:a,color:t},n.createElement("svg",{role:"img","aria-hidden":p,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":s},i?n.createElement("title",{id:s},i):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.75 4c.69 0 1.25.558 1.25 1.246v7.474c0 .688-.56 1.245-1.25 1.245H9.69l-3.235 2.82a.882.882 0 01-.57.215.867.867 0 01-.885-.877v-2.158H3.25c-.69 0-1.25-.557-1.25-1.245V5.246C2 4.558 2.56 4 3.25 4h13.5zm0 .997H3.25a.25.25 0 00-.25.249v7.474c0 .137.112.249.25.249H5.5a.497.497 0 01.5.498v2.377l3.165-2.756a.501.501 0 01.335-.12h7.25a.25.25 0 00.25-.248V5.246a.25.25 0 00-.25-.25zM6 7.987c.552 0 1 .445 1 .996 0 .55-.448.996-1 .996s-1-.446-1-.996.448-.997 1-.997zm4 0c.552 0 1 .445 1 .996 0 .55-.448.996-1 .996s-1-.446-1-.996.448-.997 1-.997zm4 0c.552 0 1 .445 1 .996 0 .55-.448.996-1 .996s-1-.446-1-.996.448-.997 1-.997z"})))};l.displayName="ProductChatIcon";module.exports=W(w);