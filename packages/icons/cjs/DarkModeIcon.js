var M=Object.create;var l=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var s=o=>l(o,"__esModule",{value:!0});var k=(o,r)=>{for(var e in r)l(o,e,{get:r[e],enumerable:!0})},I=(o,r,e,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of u(r))!g.call(o,n)&&(e||n!=="default")&&l(o,n,{get:()=>r[n],enumerable:!(i=h(r,n))||i.enumerable});return o},v=(o,r)=>I(s(l(o!=null?M(D(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),W=(o=>(r,e)=>o&&o.get(r)||(e=I(s({}),r,1),o&&o.set(r,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var w={};k(w,{DarkModeIcon:()=>t});var a=v(require("react")),m=require("@twilio-paste/uid-library"),f=require("./helpers/IconWrapper");const t=({as:o,display:r,element:e="ICON",size:i,color:n,title:p,decorative:d})=>{const c=`DarkModeIcon-${(0,m.useUID)()}`;if(!d&&p==null)throw new Error("[DarkModeIcon]: Missing a title for non-decorative icon.");return a.createElement(f.IconWrapper,{as:o,display:r,element:e,size:i,color:n},a.createElement("svg",{role:"img","aria-hidden":d,width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":c},p?a.createElement("title",{id:c},p):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.904 13.38A8.87 8.87 0 016.62 4.097a6.706 6.706 0 109.283 9.283zm1.053-1.212c.34-.065.645.248.51.567A7.79 7.79 0 012.5 9.712c0-3.23 1.965-6 4.765-7.18.319-.134.632.171.567.51a7.788 7.788 0 009.125 9.125z",clipRule:"evenodd"})))};t.displayName="DarkModeIcon";module.exports=W(w);