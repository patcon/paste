var m=Object.create;var a=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var c=r=>a(r,"__esModule",{value:!0});var z=(r,e)=>{for(var o in e)a(r,o,{get:e[o],enumerable:!0})},C=(r,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of v(e))!g.call(r,i)&&(o||i!=="default")&&a(r,i,{get:()=>e[i],enumerable:!(n=f(e,i))||n.enumerable});return r},W=(r,e)=>C(c(a(r!=null?m(u(r)):{},"default",!e&&r&&r.__esModule?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),w=(r=>(e,o)=>r&&r.get(e)||(o=C(c({}),e,1),r&&r.set(e,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var x={};z(x,{CreditCardIcon:()=>l});var t=W(require("react")),I=require("@twilio-paste/uid-library"),h=require("./helpers/IconWrapper");const l=({as:r,display:e,element:o="ICON",size:n,color:i,title:d,decorative:p})=>{const s=`CreditCardIcon-${(0,I.useUID)()}`;if(!p&&d==null)throw new Error("[CreditCardIcon]: Missing a title for non-decorative icon.");return t.createElement(h.IconWrapper,{as:r,display:e,element:o,size:n,color:i},t.createElement("svg",{role:"img","aria-hidden":p,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":s},d?t.createElement("title",{id:s},d):null,t.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M2 6.5A1.5 1.5 0 013.5 5h13A1.5 1.5 0 0118 6.5v8a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 14.5v-8zm15 0V8H3V6.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5zM17 9H3v5.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V9zm-6.5 3a.5.5 0 000 1h4a.5.5 0 000-1h-4z"})))};l.displayName="CreditCardIcon";module.exports=w(x);