var W=Object.create;var l=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var d=r=>l(r,"__esModule",{value:!0});var C=(r,n)=>{for(var o in n)l(r,o,{get:n[o],enumerable:!0})},I=(r,n,o,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let e of h(n))!v.call(r,e)&&(o||e!=="default")&&l(r,e,{get:()=>n[e],enumerable:!(i=f(n,e))||i.enumerable});return r},w=(r,n)=>I(d(l(r!=null?W(u(r)):{},"default",!n&&r&&r.__esModule?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),x=(r=>(n,o)=>r&&r.get(n)||(o=I(d({}),n,1),r&&r.set(n,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var y={};C(y,{WarningIcon:()=>t});var p=w(require("react")),g=require("@twilio-paste/uid-library"),m=require("./helpers/IconWrapper");const t=({as:r,display:n,element:o="ICON",size:i,color:e,title:a,decorative:c})=>{const s=`WarningIcon-${(0,g.useUID)()}`;if(!c&&a==null)throw new Error("[WarningIcon]: Missing a title for non-decorative icon.");return p.createElement(m.IconWrapper,{as:r,display:n,element:o,size:i,color:e},p.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":s},a?p.createElement("title",{id:s},a):null,p.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M17.798 14.791L11.316 3.744c-.582-.992-2.05-.992-2.632 0L2.202 14.79C1.625 15.776 2.354 17 3.518 17h12.964c1.164 0 1.893-1.224 1.316-2.209zM9.99 8h.02c.611.007 1.073.592.978 1.244l-.428 2.238c-.04.296-.278.518-.557.518h-.006c-.279 0-.516-.222-.557-.518l-.428-2.238C8.917 8.592 9.386 8 9.99 8zm.01 7a1 1 0 100-2 1 1 0 000 2z"})))};t.displayName="WarningIcon";module.exports=x(y);