var f=Object.create;var i=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var v=e=>i(e,"__esModule",{value:!0});var g=(e,o)=>{for(var r in o)i(e,r,{get:o[r],enumerable:!0})},s=(e,o,r,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of u(o))!L.call(e,l)&&(r||l!=="default")&&i(e,l,{get:()=>o[l],enumerable:!(n=I(o,l))||n.enumerable});return e},z=(e,o)=>s(v(i(e!=null?f(w(e)):{},"default",!o&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),H=(e=>(o,r)=>e&&e.get(o)||(r=s(v({}),o,1),e&&e.set(o,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var V={};g(V,{LowerHandIcon:()=>p});var a=z(require("react")),h=require("@twilio-paste/uid-library"),m=require("./helpers/IconWrapper");const p=({as:e,display:o,element:r="ICON",size:n,color:l,title:d,decorative:c})=>{const t=`LowerHandIcon-${(0,h.useUID)()}`;if(!c&&d==null)throw new Error("[LowerHandIcon]: Missing a title for non-decorative icon.");return a.createElement(m.IconWrapper,{as:e,display:o,element:r,size:n,color:l},a.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":t},d?a.createElement("title",{id:t},d):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.5 5h1v9h-1V5zm-1.425 11.975c.874-.656 1.425-1.632 1.425-2.975h1c0 1.657-.7 2.93-1.825 3.775-1.11.832-2.6 1.225-4.175 1.225v-.5.5h-.044l-.118-.002a17.489 17.489 0 01-1.775-.127 9.93 9.93 0 01-1.582-.314c-.491-.147-.995-.364-1.335-.703-.813-.814-1.127-1.348-1.365-1.755a6.653 6.653 0 00-.197-.322l.832-.554c.092.138.169.268.246.4.233.395.476.808 1.192 1.523.16.161.469.32.915.453.431.13.933.22 1.418.28a16.546 16.546 0 001.67.12h.108l.027.001h.007m3.576-1.025c-.89.668-2.15 1.025-3.575 1.025zM5.954 2.513A1.75 1.75 0 017.192 2v.5l.003-.5a1.75 1.75 0 011.738 1.75v4.375a.5.5 0 11-1 0V3.75A.75.75 0 007.19 3a.75.75 0 00-.748.75v8.125a.5.5 0 01-.813.39l-2.033-1.624-.001-.002a.784.784 0 00-1.145 1.042v.001l1.199 1.79a.5.5 0 01-.831.556l-1.202-1.794a1.783 1.783 0 010-1.968m0 0a1.785 1.785 0 012.605-.406l1.22.975V3.75c0-.464.185-.91.513-1.237",clipRule:"evenodd"}),a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.022.88a1.75 1.75 0 012.411 1.62v1.25a.5.5 0 11-1 0V2.5a.75.75 0 10-1.5 0v1.25a.5.5 0 11-1 0V2.5A1.75 1.75 0 019.022.88z",clipRule:"evenodd"}),a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.954 2.513A1.75 1.75 0 0112.192 2v.5l.003-.5a1.75 1.75 0 011.738 1.75.5.5 0 11-1 0A.75.75 0 0012.19 3a.75.75 0 00-.748.75v1.875a.5.5 0 01-1 0V3.75c0-.464.184-.91.512-1.237zm7.848-.36a.5.5 0 01-.014.707L1.913 19.11a.5.5 0 01-.693-.72L18.095 2.14a.5.5 0 01.707.013z",clipRule:"evenodd"})))};p.displayName="LowerHandIcon";module.exports=H(V);