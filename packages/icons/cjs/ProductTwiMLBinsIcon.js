var I=Object.create;var t=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty;var d=o=>t(o,"__esModule",{value:!0});var M=(o,r)=>{for(var i in r)t(o,i,{get:r[i],enumerable:!0})},h=(o,r,i,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of w(r))!f.call(o,e)&&(i||e!=="default")&&t(o,e,{get:()=>r[e],enumerable:!(n=u(r,e))||n.enumerable});return o},B=(o,r)=>h(d(t(o!=null?I(P(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),g=(o=>(r,i)=>o&&o.get(r)||(i=h(d({}),r,1),o&&o.set(r,i),i))(typeof WeakMap!="undefined"?new WeakMap:0);var z={};M(z,{ProductTwiMLBinsIcon:()=>s});var a=B(require("react")),m=require("@twilio-paste/uid-library"),v=require("./helpers/IconWrapper");const s=({as:o,display:r,element:i="ICON",size:n,color:e,title:p,decorative:l})=>{const c=`ProductTwiMLBinsIcon-${(0,m.useUID)()}`;if(!l&&p==null)throw new Error("[ProductTwiMLBinsIcon]: Missing a title for non-decorative icon.");return a.createElement(v.IconWrapper,{as:o,display:r,element:i,size:n,color:e},a.createElement("svg",{role:"img","aria-hidden":l,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},p?a.createElement("title",{id:c},p):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.5 3a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H17v8.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V8h-.5a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h15zM16 8H4v7.999h12V8zm-3.5 1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h5zm-.5 1H8v1h4v-1zm5-6H3v3h14V4z"})))};s.displayName="ProductTwiMLBinsIcon";module.exports=g(z);