var f=Object.create;var n=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var c=r=>n(r,"__esModule",{value:!0});var u=(r,o)=>{for(var e in o)n(r,e,{get:o[e],enumerable:!0})},w=(r,o,e,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of A(o))!g.call(r,l)&&(e||l!=="default")&&n(r,l,{get:()=>o[l],enumerable:!(a=h(o,l))||a.enumerable});return r},v=(r,o)=>w(c(n(r!=null?f(F(r)):{},"default",!o&&r&&r.__esModule?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),W=(r=>(o,e)=>r&&r.get(o)||(e=w(c({}),o,1),r&&r.set(o,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var x={};u(x,{ArrowForwardIcon:()=>t});var i=v(require("react")),I=require("@twilio-paste/uid-library"),m=require("./helpers/IconWrapper");const t=({as:r,display:o,element:e="ICON",size:a,color:l,title:p,decorative:d})=>{const s=`ArrowForwardIcon-${(0,I.useUID)()}`;if(!d&&p==null)throw new Error("[ArrowForwardIcon]: Missing a title for non-decorative icon.");return i.createElement(m.IconWrapper,{as:r,display:o,element:e,size:a,color:l},i.createElement("svg",{role:"img","aria-hidden":d,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":s},p?i.createElement("title",{id:s},p):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.991 9.91l.007.05v.08l-.01.07-.01.029a.489.489 0 01-.205.272l-3.832 3.444a.596.596 0 01-.78 0 .459.459 0 01-.063-.632l.063-.069 2.957-2.659H5.513A.504.504 0 015 10a.5.5 0 01.42-.488l.093-.008h7.604l-2.956-2.658a.459.459 0 01-.063-.632l.063-.069a.598.598 0 01.704-.057l.076.057 3.832 3.444c.098.064.172.16.206.272l.012.049z"})))};t.displayName="ArrowForwardIcon";module.exports=W(x);