var v=Object.create;var n=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var s=o=>n(o,"__esModule",{value:!0});var z=(o,r)=>{for(var e in r)n(o,e,{get:r[e],enumerable:!0})},m=(o,r,e,c)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of P(r))!g.call(o,i)&&(e||i!=="default")&&n(o,i,{get:()=>r[i],enumerable:!(c=f(r,i))||c.enumerable});return o},L=(o,r)=>m(s(n(o!=null?v(h(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),W=(o=>(r,e)=>o&&o.get(r)||(e=m(s({}),r,1),o&&o.set(r,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var w={};z(w,{ProductLiveIcon:()=>l});var t=L(require("react")),I=require("@twilio-paste/uid-library"),u=require("./helpers/IconWrapper");const l=({as:o,display:r,element:e="ICON",size:c,color:i,title:a,decorative:p})=>{const d=`ProductLiveIcon-${(0,I.useUID)()}`;if(!p&&a==null)throw new Error("[ProductLiveIcon]: Missing a title for non-decorative icon.");return t.createElement(u.IconWrapper,{as:o,display:r,element:e,size:c,color:i},t.createElement("svg",{role:"img","aria-hidden":p,width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":d},a?t.createElement("title",{id:d},a):null,t.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.664 4.219a.713.713 0 00-1.028 0 .746.746 0 000 1.048c2.561 2.61 2.561 6.852 0 9.462a.746.746 0 000 1.048c.135.137.32.223.505.223a.66.66 0 00.506-.223c3.135-3.194 3.135-8.38.017-11.558zm-2.41 2.44a.713.713 0 00-1.028 0 .746.746 0 000 1.047c1.23 1.254 1.247 3.314 0 4.568a.746.746 0 000 1.048c.135.137.32.223.505.223a.66.66 0 00.506-.223c1.837-1.838 1.82-4.826.017-6.664zm-7.888-2.44a.746.746 0 010 1.048c-2.561 2.61-2.561 6.852-.016 9.445a.746.746 0 010 1.048.66.66 0 01-.506.223.725.725 0 01-.506-.223c-3.117-3.177-3.117-8.363 0-11.54a.713.713 0 011.028 0zM7.76 7.706a.746.746 0 000-1.048.713.713 0 00-1.028 0c-1.803 1.838-1.803 4.826 0 6.664.135.137.32.223.506.223a.66.66 0 00.506-.223.746.746 0 000-1.048C6.53 11.021 6.53 8.96 7.76 7.706zm3.473 2.284c0 .692-.551 1.253-1.23 1.253-.68 0-1.23-.56-1.23-1.253 0-.693.55-1.254 1.23-1.254.679 0 1.23.561 1.23 1.254z",clipRule:"evenodd"})))};l.displayName="ProductLiveIcon";module.exports=W(w);