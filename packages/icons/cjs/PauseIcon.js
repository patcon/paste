var h=Object.create;var p=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var I=e=>p(e,"__esModule",{value:!0});var z=(e,o)=>{for(var r in o)p(e,r,{get:o[r],enumerable:!0})},d=(e,o,r,i)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of f(o))!g.call(e,n)&&(r||n!=="default")&&p(e,n,{get:()=>o[n],enumerable:!(i=P(o,n))||i.enumerable});return e},W=(e,o)=>d(I(p(e!=null?h(v(e)):{},"default",!o&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),w=(e=>(o,r)=>e&&e.get(o)||(r=d(I({}),o,1),e&&e.set(o,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var x={};z(x,{PauseIcon:()=>t});var s=W(require("react")),m=require("@twilio-paste/uid-library"),u=require("./helpers/IconWrapper");const t=({as:e,display:o,element:r="ICON",size:i,color:n,title:a,decorative:c})=>{const l=`PauseIcon-${(0,m.useUID)()}`;if(!c&&a==null)throw new Error("[PauseIcon]: Missing a title for non-decorative icon.");return s.createElement(u.IconWrapper,{as:e,display:o,element:r,size:i,color:n},s.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":l},a?s.createElement("title",{id:l},a):null,s.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.5 4c.552 0 1 .488 1 1.09v9.82c0 .602-.448 1.09-1 1.09H7c-.552 0-1-.488-1-1.09V5.09C6 4.489 6.448 4 7 4h1.5zM13 4c.552 0 1 .488 1 1.09v9.82c0 .602-.448 1.09-1 1.09h-1.5c-.552 0-1-.488-1-1.09V5.09c0-.602.448-1.09 1-1.09H13zM8.5 5.09H7v9.82h1.5V5.09zm4.5 0h-1.5v9.82H13V5.09z"})))};t.displayName="PauseIcon";module.exports=w(x);