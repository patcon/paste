var m=Object.create;var t=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var d=r=>t(r,"__esModule",{value:!0});var h=(r,o)=>{for(var e in o)t(r,e,{get:o[e],enumerable:!0})},s=(r,o,e,p)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of f(o))!v.call(r,l)&&(e||l!=="default")&&t(r,l,{get:()=>o[l],enumerable:!(p=x(o,l))||p.enumerable});return r},E=(r,o)=>s(d(t(r!=null?m(A(r)):{},"default",!o&&r&&r.__esModule?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),g=(r=>(o,e)=>r&&r.get(o)||(e=s(d({}),o,1),r&&r.set(o,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var V={};h(V,{ProductAPIExplorerIcon:()=>c});var a=E(require("react")),P=require("@twilio-paste/uid-library"),u=require("./helpers/IconWrapper");const c=({as:r,display:o,element:e="ICON",size:p,color:l,title:n,decorative:i})=>{const I=`ProductAPIExplorerIcon-${(0,P.useUID)()}`;if(!i&&n==null)throw new Error("[ProductAPIExplorerIcon]: Missing a title for non-decorative icon.");return a.createElement(u.IconWrapper,{as:r,display:o,element:e,size:p,color:l},a.createElement("svg",{role:"img","aria-hidden":i,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":I},n?a.createElement("title",{id:I},n):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.312 4.227l-4.109-2.068a1.506 1.506 0 00-1.343-.002l-4.234 2.11a.249.249 0 01-.222 0L3.808 2.473A1.25 1.25 0 002 3.593v11.063c-.001.473.265.905.688 1.117l4.109 2.067c.422.211.92.212 1.343.002l4.233-2.11a.255.255 0 01.223 0l3.596 1.792A1.25 1.25 0 0018 16.406V5.343a1.243 1.243 0 00-.688-1.116zM17 16.407a.243.243 0 01-.118.212.247.247 0 01-.243.01l-3.597-1.792c-.018-.009-.039-.012-.058-.02V5.003a.5.5 0 10-1 0v9.814c-.018.008-.039.011-.057.02l-4.233 2.11a.498.498 0 01-.448 0l-4.108-2.068A.249.249 0 013 14.656V3.593c0-.087.044-.168.118-.213a.246.246 0 01.243-.011L6.958 5.16l.01.004V15a.5.5 0 001 0V5.2c.035-.014.072-.022.105-.039l4.233-2.11a.5.5 0 01.448.001l4.109 2.068a.249.249 0 01.137.223v11.063z"})))};c.displayName="ProductAPIExplorerIcon";module.exports=g(V);