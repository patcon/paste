var u=Object.create;var n=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var c=r=>n(r,"__esModule",{value:!0});var g=(r,e)=>{for(var a in e)n(r,a,{get:e[a],enumerable:!0})},d=(r,e,a,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of f(e))!E.call(r,o)&&(a||o!=="default")&&n(r,o,{get:()=>e[o],enumerable:!(t=h(e,o))||t.enumerable});return r},z=(r,e)=>d(c(n(r!=null?u(P(r)):{},"default",!e&&r&&r.__esModule?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),S=(r=>(e,a)=>r&&r.get(e)||(a=d(c({}),e,1),r&&r.set(e,a),a))(typeof WeakMap!="undefined"?new WeakMap:0);var W={};g(W,{ProductEventStreamsIcon:()=>p});var i=z(require("react")),m=require("@twilio-paste/uid-library"),I=require("./helpers/IconWrapper");const p=({as:r,display:e,element:a="ICON",size:t,color:o,title:l,decorative:s})=>{const v=`ProductEventStreamsIcon-${(0,m.useUID)()}`;if(!s&&l==null)throw new Error("[ProductEventStreamsIcon]: Missing a title for non-decorative icon.");return i.createElement(I.IconWrapper,{as:r,display:e,element:a,size:t,color:o},i.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":v},l?i.createElement("title",{id:v},l):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.496 10.562h2.791a.562.562 0 100-1.124H5.496A1.688 1.688 0 013.81 7.752V5.424a2.248 2.248 0 10-1.124 0v2.328A2.8 2.8 0 003.827 10a2.8 2.8 0 00-1.141 2.248v2.328a2.248 2.248 0 101.124 0v-2.328a1.688 1.688 0 011.686-1.686zM2.124 3.256a1.124 1.124 0 112.248 0 1.124 1.124 0 01-2.248 0zm2.248 13.488a1.124 1.124 0 11-2.248 0 1.124 1.124 0 012.248 0zm12.925-1.876v-2.62A2.798 2.798 0 0016.156 10a2.799 2.799 0 001.141-2.248v-2.62a1.967 1.967 0 10-1.124 0v2.62a1.688 1.688 0 01-1.686 1.686h-1.124V7.106a1.688 1.688 0 00-1.685-1.686H8.306A1.688 1.688 0 006.62 7.106v.646a.562.562 0 101.124 0v-.646a.563.563 0 01.562-.562h3.372a.563.563 0 01.561.562v5.704a.563.563 0 01-.562.562H8.306a.563.563 0 01-.562-.562v-.604a.562.562 0 00-1.124 0v.604a1.688 1.688 0 001.686 1.686h3.372a1.688 1.688 0 001.685-1.686v-2.248h1.124a1.687 1.687 0 011.686 1.686v2.62a1.967 1.967 0 101.124 0zm-8.533-3.476a.562.562 0 01.122-.182l1.053-1.054a.281.281 0 000-.397L8.886 8.706a.562.562 0 11.795-.795l1.053 1.053a1.404 1.404 0 010 1.987L9.68 12.004a.56.56 0 01-.796 0 .561.561 0 01-.121-.612z",clipRule:"evenodd"})))};p.displayName="ProductEventStreamsIcon";module.exports=S(W);