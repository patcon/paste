var h=Object.create;var t=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var d=o=>t(o,"__esModule",{value:!0});var C=(o,r)=>{for(var e in r)t(o,e,{get:r[e],enumerable:!0})},s=(o,r,e,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of v(r))!A.call(o,i)&&(e||i!=="default")&&t(o,i,{get:()=>r[i],enumerable:!(a=u(r,i))||a.enumerable});return o},E=(o,r)=>s(d(t(o!=null?h(f(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),g=(o=>(r,e)=>o&&o.get(r)||(e=s(d({}),r,1),o&&o.set(r,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var H={};C(H,{ProductEmailAPIIcon:()=>c});var l=E(require("react")),m=require("@twilio-paste/uid-library"),P=require("./helpers/IconWrapper");const c=({as:o,display:r,element:e="ICON",size:a,color:i,title:n,decorative:p})=>{const I=`ProductEmailAPIIcon-${(0,m.useUID)()}`;if(!p&&n==null)throw new Error("[ProductEmailAPIIcon]: Missing a title for non-decorative icon.");return l.createElement(P.IconWrapper,{as:o,display:r,element:e,size:a,color:i},l.createElement("svg",{role:"img","aria-hidden":p,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":I},n?l.createElement("title",{id:I},n):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.75 2h-8.5C7.56 2 7 2.56 7 3.25V7H3.25C2.56 7 2 7.56 2 8.25v8.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V13h3.75c.69 0 1.25-.56 1.25-1.25v-8.5C18 2.56 17.44 2 16.75 2zM12 16.75a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5A.25.25 0 013.25 8H7v3.75c0 .69.56 1.25 1.25 1.25H12v3.75zM12 12H8.25a.25.25 0 01-.25-.25V8h3.75a.25.25 0 01.25.25V12zm5-.25a.25.25 0 01-.25.25H13V8.25C13 7.56 12.44 7 11.75 7H8V3.25A.25.25 0 018.25 3h8.5a.25.25 0 01.25.25v8.5z"})))};c.displayName="ProductEmailAPIIcon";module.exports=g(H);