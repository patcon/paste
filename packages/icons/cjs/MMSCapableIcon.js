var h=Object.create;var p=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var M=a=>p(a,"__esModule",{value:!0});var g=(a,e)=>{for(var o in e)p(a,o,{get:e[o],enumerable:!0})},m=(a,e,o,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of b(e))!C.call(a,r)&&(o||r!=="default")&&p(a,r,{get:()=>e[r],enumerable:!(l=v(e,r))||l.enumerable});return a},u=(a,e)=>m(M(p(a!=null?h(f(a)):{},"default",!e&&a&&a.__esModule?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a),z=(a=>(e,o)=>a&&a.get(e)||(o=m(M({}),e,1),a&&a.set(e,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var S={};g(S,{MMSCapableIcon:()=>t});var n=u(require("react")),I=require("@twilio-paste/uid-library"),d=require("./helpers/IconWrapper");const t=({as:a,display:e,element:o="ICON",size:l,color:r,title:i,decorative:c})=>{const s=`MMSCapableIcon-${(0,I.useUID)()}`;if(!c&&i==null)throw new Error("[MMSCapableIcon]: Missing a title for non-decorative icon.");return n.createElement(d.IconWrapper,{as:a,display:e,element:o,size:l,color:r},n.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":s},i?n.createElement("title",{id:s},i):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.5 3A1.502 1.502 0 0118 4.5v10a1.502 1.502 0 01-1.5 1.5H9.667L5.8 18.9a.5.5 0 01-.8-.4V16H3.5A1.502 1.502 0 012 14.5v-10A1.502 1.502 0 013.5 3zm0 1h-13a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h2a.5.5 0 01.5.5v2l3.2-2.4a.5.5 0 01.3-.1h7a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5zm-4.985 2.886a1 1 0 01.82.445l2.582 3.893c.008.013.01.028.017.041.03.06.05.124.057.191.002.015.009.028.009.044l-.01.047a.484.484 0 01-.18.336c-.012.01-.02.025-.034.034l-.103.048A.497.497 0 0114.5 12h-9a.5.5 0 110-1h.746l1.55-2.323a.976.976 0 01.72-.44c.263-.03.529.046.736.213l.407.327 1.026-1.464a1 1 0 01.83-.427zm-.012.999l-1.332 1.903a.5.5 0 01-.723.102l-.821-.66L7.447 11h6.121l-2.065-3.115zM6.807 5.5a.75.75 0 110 1.5.75.75 0 010-1.5z"})))};t.displayName="MMSCapableIcon";module.exports=z(S);