import{r as o}from"./index-ad8e37b4.js";function S(t,s){const r=o.createContext(s);function d(c){const{children:e,...n}=c,u=o.useMemo(()=>n,Object.values(n));return o.createElement(r.Provider,{value:u},e)}function i(c){const e=o.useContext(r);if(e)return e;if(s!==void 0)return s;throw new Error(`\`${c}\` must be used within \`${t}\``)}return d.displayName=t+"Provider",[d,i]}function C(t,s=[]){let r=[];function d(c,e){const n=o.createContext(e),u=r.length;r=[...r,e];function x(f){const{scope:a,children:$,...p}=f,v=(a==null?void 0:a[t][u])||n,m=o.useMemo(()=>p,Object.values(p));return o.createElement(v.Provider,{value:m},$)}function l(f,a){const $=(a==null?void 0:a[t][u])||n,p=o.useContext($);if(p)return p;if(e!==void 0)return e;throw new Error(`\`${f}\` must be used within \`${c}\``)}return x.displayName=c+"Provider",[x,l]}const i=()=>{const c=r.map(e=>o.createContext(e));return function(n){const u=(n==null?void 0:n[t])||c;return o.useMemo(()=>({[`__scope${t}`]:{...n,[t]:u}}),[n,u])}};return i.scopeName=t,[d,b(i,...s)]}function b(...t){const s=t[0];if(t.length===1)return s;const r=()=>{const d=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(c){const e=d.reduce((n,{useScope:u,scopeName:x})=>{const f=u(c)[`__scope${x}`];return{...n,...f}},{});return o.useMemo(()=>({[`__scope${s.scopeName}`]:e}),[e])}};return r.scopeName=s.scopeName,r}export{C as $,S as a};
//# sourceMappingURL=index-25542281.js.map
