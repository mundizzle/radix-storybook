import{_ as u}from"./extends-98964cd2.js";import{R as e}from"./index-ad8e37b4.js";import{$ as h}from"./index-25542281.js";import{$ as m}from"./index-b6d4726d.js";import{$ as b,a as I,b as V}from"./index-d225e6fb.js";import{$ as R}from"./index-fbad9f3b.js";import{$ as G}from"./index-cb864916.js";import{$ as y}from"./index-e5b7b6af.js";const $="ToggleGroup",[x,z]=h($,[b]),_=b(),F=e.forwardRef((o,r)=>{const{type:n,...a}=o;if(n==="single"){const c=a;return e.createElement(A,u({},c,{ref:r}))}if(n==="multiple"){const c=a;return e.createElement(M,u({},c,{ref:r}))}throw new Error(`Missing prop \`type\` expected on \`${$}\``)}),[T,E]=x($),A=e.forwardRef((o,r)=>{const{value:n,defaultValue:a,onValueChange:c=()=>{},...l}=o,[s,t]=G({prop:n,defaultProp:a,onChange:c});return e.createElement(T,{scope:o.__scopeToggleGroup,type:"single",value:s?[s]:[],onItemActivate:t,onItemDeactivate:e.useCallback(()=>t(""),[t])},e.createElement(C,u({},l,{ref:r})))}),M=e.forwardRef((o,r)=>{const{value:n,defaultValue:a,onValueChange:c=()=>{},...l}=o,[s=[],t]=G({prop:n,defaultProp:a,onChange:c}),p=e.useCallback(f=>t((d=[])=>[...d,f]),[t]),i=e.useCallback(f=>t((d=[])=>d.filter(P=>P!==f)),[t]);return e.createElement(T,{scope:o.__scopeToggleGroup,type:"multiple",value:s,onItemActivate:p,onItemDeactivate:i},e.createElement(C,u({},l,{ref:r})))}),[w,S]=x($),C=e.forwardRef((o,r)=>{const{__scopeToggleGroup:n,disabled:a=!1,rovingFocus:c=!0,orientation:l,dir:s,loop:t=!0,...p}=o,i=_(n),f=y(s),d={role:"group",dir:f,...p};return e.createElement(w,{scope:n,rovingFocus:c,disabled:a},c?e.createElement(I,u({asChild:!0},i,{orientation:l,dir:f,loop:t}),e.createElement(m.div,u({},d,{ref:r}))):e.createElement(m.div,u({},d,{ref:r})))}),g="ToggleGroupItem",k=e.forwardRef((o,r)=>{const n=E(g,o.__scopeToggleGroup),a=S(g,o.__scopeToggleGroup),c=_(o.__scopeToggleGroup),l=n.value.includes(o.value),s=a.disabled||o.disabled,t={...o,pressed:l,disabled:s},p=e.useRef(null);return a.rovingFocus?e.createElement(V,u({asChild:!0},c,{focusable:!s,active:l,ref:p}),e.createElement(v,u({},t,{ref:r}))):e.createElement(v,u({},t,{ref:r}))}),v=e.forwardRef((o,r)=>{const{__scopeToggleGroup:n,value:a,...c}=o,l=E(g,n),s={role:"radio","aria-checked":o.pressed,"aria-pressed":void 0},t=l.type==="single"?s:void 0;return e.createElement(R,u({},t,c,{ref:r,onPressedChange:p=>{p?l.onItemActivate(a):l.onItemDeactivate(a)}}))}),H=F,J=k;export{H as $,J as a,z as b};
//# sourceMappingURL=index-bb20b133.js.map