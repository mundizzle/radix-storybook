import{a as oe,$ as G,j as a}from"./index-b6d4726d.js";import{_ as b}from"./extends-98964cd2.js";import{R as o}from"./index-ad8e37b4.js";import{$ as te}from"./index-25542281.js";import{$ as re}from"./index-f730bee5.js";import{$ as ne}from"./index-1b3f171e.js";import{$ as J}from"./index-cb864916.js";import{c as W,$ as ce,a as ae,b as ie}from"./index-b5cb1851.js";import{$ as se}from"./index-21bbdcc0.js";import{$ as le}from"./index-e5b7b6af.js";import{c as V}from"./react-icons.esm-e665ab3e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a29557c5.js";import"./index-de5e260d.js";import"./index-c83839f6.js";const p="Accordion",de=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[M,fe,be]=re(p),[g,Le]=te(p,[be,W]),T=W(),q=o.forwardRef((e,c)=>{const{type:t,...n}=e,i=n,r=n;return o.createElement(M.Provider,{scope:e.__scopeAccordion},t==="multiple"?o.createElement(me,b({},r,{ref:c})):o.createElement(ue,b({},i,{ref:c})))});q.propTypes={type(e){const c=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof c=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(c)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[B,$e]=g(p),[F,pe]=g(p,{collapsible:!1}),ue=o.forwardRef((e,c)=>{const{value:t,defaultValue:n,onValueChange:i=()=>{},collapsible:r=!1,...s}=e,[l,d]=J({prop:t,defaultProp:n,onChange:i});return o.createElement(B,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:d,onItemClose:o.useCallback(()=>r&&d(""),[r,d])},o.createElement(F,{scope:e.__scopeAccordion,collapsible:r},o.createElement(Q,b({},s,{ref:c}))))}),me=o.forwardRef((e,c)=>{const{value:t,defaultValue:n,onValueChange:i=()=>{},...r}=e,[s=[],l]=J({prop:t,defaultProp:n,onChange:i}),d=o.useCallback(m=>l(($=[])=>[...$,m]),[l]),u=o.useCallback(m=>l(($=[])=>$.filter(C=>C!==m)),[l]);return o.createElement(B,{scope:e.__scopeAccordion,value:s,onItemOpen:d,onItemClose:u},o.createElement(F,{scope:e.__scopeAccordion,collapsible:!0},o.createElement(Q,b({},r,{ref:c}))))}),[xe,h]=g(p),Q=o.forwardRef((e,c)=>{const{__scopeAccordion:t,disabled:n,dir:i,orientation:r="vertical",...s}=e,l=o.useRef(null),d=oe(l,c),u=fe(t),$=le(i)==="ltr",C=ne(e.onKeyDown,x=>{var I;if(!de.includes(x.key))return;const Z=x.target,_=u().filter(P=>{var j;return!((j=P.ref.current)!==null&&j!==void 0&&j.disabled)}),v=_.findIndex(P=>P.ref.current===Z),H=_.length;if(v===-1)return;x.preventDefault();let f=v;const E=0,w=H-1,y=()=>{f=v+1,f>w&&(f=E)},R=()=>{f=v-1,f<E&&(f=w)};switch(x.key){case"Home":f=E;break;case"End":f=w;break;case"ArrowRight":r==="horizontal"&&($?y():R());break;case"ArrowDown":r==="vertical"&&y();break;case"ArrowLeft":r==="horizontal"&&($?R():y());break;case"ArrowUp":r==="vertical"&&R();break}const ee=f%H;(I=_[ee].ref.current)===null||I===void 0||I.focus()});return o.createElement(xe,{scope:t,disabled:n,direction:i,orientation:r},o.createElement(M.Slot,{scope:t},o.createElement(G.div,b({},s,{"data-orientation":r,ref:d,onKeyDown:n?void 0:C}))))}),N="AccordionItem",[ve,Y]=g(N),Ae=o.forwardRef((e,c)=>{const{__scopeAccordion:t,value:n,...i}=e,r=h(N,t),s=$e(N,t),l=T(t),d=se(),u=n&&s.value.includes(n)||!1,m=r.disabled||e.disabled;return o.createElement(ve,{scope:t,open:u,disabled:m,triggerId:d},o.createElement(ce,b({"data-orientation":r.orientation,"data-state":X(u)},l,i,{ref:c,disabled:m,open:u,onOpenChange:$=>{$?s.onItemOpen(n):s.onItemClose(n)}})))}),ge="AccordionHeader",he=o.forwardRef((e,c)=>{const{__scopeAccordion:t,...n}=e,i=h(p,t),r=Y(ge,t);return o.createElement(G.h3,b({"data-orientation":i.orientation,"data-state":X(r.open),"data-disabled":r.disabled?"":void 0},n,{ref:c}))}),K="AccordionTrigger",Ce=o.forwardRef((e,c)=>{const{__scopeAccordion:t,...n}=e,i=h(p,t),r=Y(K,t),s=pe(K,t),l=T(t);return o.createElement(M.ItemSlot,{scope:t},o.createElement(ae,b({"aria-disabled":r.open&&!s.collapsible||void 0,"data-orientation":i.orientation,id:r.triggerId},l,n,{ref:c})))}),Ie="AccordionContent",_e=o.forwardRef((e,c)=>{const{__scopeAccordion:t,...n}=e,i=h(p,t),r=Y(Ie,t),s=T(t);return o.createElement(ie,b({role:"region","aria-labelledby":r.triggerId,"data-orientation":i.orientation},s,n,{ref:c,style:{["--radix-accordion-content-height"]:"var(--radix-collapsible-content-height)",["--radix-accordion-content-width"]:"var(--radix-collapsible-content-width)",...e.style}}))});function X(e){return e?"open":"closed"}const Ee=q,S=Ae,k=he,D=Ce,O=_e,we=()=>a.jsxs(Ee,{type:"single",defaultValue:"item-1",collapsible:!0,children:[a.jsxs(S,{value:"item-1",children:[a.jsx(k,{children:a.jsxs(D,{children:["Is it accessible?",a.jsx(V,{"aria-hidden":!0})]})}),a.jsx(O,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),a.jsxs(S,{value:"item-2",children:[a.jsx(k,{children:a.jsxs(D,{children:["Is it unstyled?",a.jsx(V,{"aria-hidden":!0})]})}),a.jsx(O,{children:"Yes. It's unstyled by default, giving you freedom over the look and feel."})]}),a.jsxs(S,{value:"item-3",children:[a.jsx(k,{children:a.jsxs(D,{children:["Can it be animated?",a.jsx(V,{"aria-hidden":!0})]})}),a.jsx(O,{children:a.jsx("div",{children:"Yes! You can animate the Accordion with CSS or JavaScript."})})]})]}),Ue={title:"Radix UI/Accordion",component:we,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},A={args:{}};var L,U,z;A.parameters={...A.parameters,docs:{...(L=A.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {}
}`,...(z=(U=A.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const ze=["Default"];export{A as Default,ze as __namedExportsOrder,Ue as default};
//# sourceMappingURL=index.stories-a773ad29.js.map