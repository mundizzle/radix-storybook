import{a as T,$ as y,j as w}from"./index-b6d4726d.js";import{_ as p}from"./extends-98964cd2.js";import{r}from"./index-ad8e37b4.js";import{$ as X}from"./index-c83839f6.js";import{$ as ce}from"./index-25542281.js";import{$ as x}from"./index-a29557c5.js";import{$ as ae}from"./index-e5b7b6af.js";import{$ as se}from"./index-de5e260d.js";import{$ as ie}from"./index-6a2b73ba.js";import{$ as P}from"./index-1b3f171e.js";import"./_commonjsHelpers-725317a4.js";function de(e,n){return r.useReducer((t,c)=>{const o=n[t][c];return o??t},e)}const K="ScrollArea",[Q,Ve]=ce(K),[fe,S]=Q(K),ue=r.forwardRef((e,n)=>{const{__scopeScrollArea:t,type:c="hover",dir:o,scrollHideDelay:l=600,...s}=e,[a,d]=r.useState(null),[u,i]=r.useState(null),[b,f]=r.useState(null),[h,$]=r.useState(null),[A,N]=r.useState(null),[E,L]=r.useState(0),[U,D]=r.useState(0),[z,_]=r.useState(!1),[W,H]=r.useState(!1),m=T(n,C=>d(C)),v=ae(o);return r.createElement(fe,{scope:t,type:c,dir:v,scrollHideDelay:l,scrollArea:a,viewport:u,onViewportChange:i,content:b,onContentChange:f,scrollbarX:h,onScrollbarXChange:$,scrollbarXEnabled:z,onScrollbarXEnabledChange:_,scrollbarY:A,onScrollbarYChange:N,scrollbarYEnabled:W,onScrollbarYEnabledChange:H,onCornerWidthChange:L,onCornerHeightChange:D},r.createElement(y.div,p({dir:v},s,{ref:m,style:{position:"relative",["--radix-scroll-area-corner-width"]:E+"px",["--radix-scroll-area-corner-height"]:U+"px",...e.style}})))}),be="ScrollAreaViewport",he=r.forwardRef((e,n)=>{const{__scopeScrollArea:t,children:c,...o}=e,l=S(be,t),s=r.useRef(null),a=T(n,s,l.onViewportChange);return r.createElement(r.Fragment,null,r.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),r.createElement(y.div,p({"data-radix-scroll-area-viewport":""},o,{ref:a,style:{overflowX:l.scrollbarXEnabled?"scroll":"hidden",overflowY:l.scrollbarYEnabled?"scroll":"hidden",...e.style}}),r.createElement("div",{ref:l.onContentChange,style:{minWidth:"100%",display:"table"}},c)))}),g="ScrollAreaScrollbar",me=r.forwardRef((e,n)=>{const{forceMount:t,...c}=e,o=S(g,e.__scopeScrollArea),{onScrollbarXEnabledChange:l,onScrollbarYEnabledChange:s}=o,a=e.orientation==="horizontal";return r.useEffect(()=>(a?l(!0):s(!0),()=>{a?l(!1):s(!1)}),[a,l,s]),o.type==="hover"?r.createElement(pe,p({},c,{ref:n,forceMount:t})):o.type==="scroll"?r.createElement($e,p({},c,{ref:n,forceMount:t})):o.type==="auto"?r.createElement(Z,p({},c,{ref:n,forceMount:t})):o.type==="always"?r.createElement(V,p({},c,{ref:n})):null}),pe=r.forwardRef((e,n)=>{const{forceMount:t,...c}=e,o=S(g,e.__scopeScrollArea),[l,s]=r.useState(!1);return r.useEffect(()=>{const a=o.scrollArea;let d=0;if(a){const u=()=>{window.clearTimeout(d),s(!0)},i=()=>{d=window.setTimeout(()=>s(!1),o.scrollHideDelay)};return a.addEventListener("pointerenter",u),a.addEventListener("pointerleave",i),()=>{window.clearTimeout(d),a.removeEventListener("pointerenter",u),a.removeEventListener("pointerleave",i)}}},[o.scrollArea,o.scrollHideDelay]),r.createElement(X,{present:t||l},r.createElement(Z,p({"data-state":l?"visible":"hidden"},c,{ref:n})))}),$e=r.forwardRef((e,n)=>{const{forceMount:t,...c}=e,o=S(g,e.__scopeScrollArea),l=e.orientation==="horizontal",s=I(()=>d("SCROLL_END"),100),[a,d]=de("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return r.useEffect(()=>{if(a==="idle"){const u=window.setTimeout(()=>d("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(u)}},[a,o.scrollHideDelay,d]),r.useEffect(()=>{const u=o.viewport,i=l?"scrollLeft":"scrollTop";if(u){let b=u[i];const f=()=>{const h=u[i];b!==h&&(d("SCROLL"),s()),b=h};return u.addEventListener("scroll",f),()=>u.removeEventListener("scroll",f)}},[o.viewport,l,d,s]),r.createElement(X,{present:t||a!=="hidden"},r.createElement(V,p({"data-state":a==="hidden"?"hidden":"visible"},c,{ref:n,onPointerEnter:P(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:P(e.onPointerLeave,()=>d("POINTER_LEAVE"))})))}),Z=r.forwardRef((e,n)=>{const t=S(g,e.__scopeScrollArea),{forceMount:c,...o}=e,[l,s]=r.useState(!1),a=e.orientation==="horizontal",d=I(()=>{if(t.viewport){const u=t.viewport.offsetWidth<t.viewport.scrollWidth,i=t.viewport.offsetHeight<t.viewport.scrollHeight;s(a?u:i)}},10);return R(t.viewport,d),R(t.content,d),r.createElement(X,{present:c||l},r.createElement(V,p({"data-state":l?"visible":"hidden"},o,{ref:n})))}),V=r.forwardRef((e,n)=>{const{orientation:t="vertical",...c}=e,o=S(g,e.__scopeScrollArea),l=r.useRef(null),s=r.useRef(0),[a,d]=r.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=oe(a.viewport,a.content),i={...c,sizes:a,onSizesChange:d,hasThumb:u>0&&u<1,onThumbChange:f=>l.current=f,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:f=>s.current=f};function b(f,h){return Ce(f,s.current,a,h)}return t==="horizontal"?r.createElement(Se,p({},i,{ref:n,onThumbPositionChange:()=>{if(o.viewport&&l.current){const f=o.viewport.scrollLeft,h=k(f,a,o.dir);l.current.style.transform=`translate3d(${h}px, 0, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollLeft=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollLeft=b(f,o.dir))}})):t==="vertical"?r.createElement(ve,p({},i,{ref:n,onThumbPositionChange:()=>{if(o.viewport&&l.current){const f=o.viewport.scrollTop,h=k(f,a);l.current.style.transform=`translate3d(0, ${h}px, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollTop=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollTop=b(f))}})):null}),Se=r.forwardRef((e,n)=>{const{sizes:t,onSizesChange:c,...o}=e,l=S(g,e.__scopeScrollArea),[s,a]=r.useState(),d=r.useRef(null),u=T(n,d,l.onScrollbarXChange);return r.useEffect(()=>{d.current&&a(getComputedStyle(d.current))},[d]),r.createElement(re,p({"data-orientation":"horizontal"},o,{ref:u,sizes:t,style:{bottom:0,left:l.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:l.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,["--radix-scroll-area-thumb-width"]:Y(t)+"px",...e.style},onThumbPointerDown:i=>e.onThumbPointerDown(i.x),onDragScroll:i=>e.onDragScroll(i.x),onWheelScroll:(i,b)=>{if(l.viewport){const f=l.viewport.scrollLeft+i.deltaX;e.onWheelScroll(f),le(f,b)&&i.preventDefault()}},onResize:()=>{d.current&&l.viewport&&s&&c({content:l.viewport.scrollWidth,viewport:l.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:O(s.paddingLeft),paddingEnd:O(s.paddingRight)}})}}))}),ve=r.forwardRef((e,n)=>{const{sizes:t,onSizesChange:c,...o}=e,l=S(g,e.__scopeScrollArea),[s,a]=r.useState(),d=r.useRef(null),u=T(n,d,l.onScrollbarYChange);return r.useEffect(()=>{d.current&&a(getComputedStyle(d.current))},[d]),r.createElement(re,p({"data-orientation":"vertical"},o,{ref:u,sizes:t,style:{top:0,right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)",["--radix-scroll-area-thumb-height"]:Y(t)+"px",...e.style},onThumbPointerDown:i=>e.onThumbPointerDown(i.y),onDragScroll:i=>e.onDragScroll(i.y),onWheelScroll:(i,b)=>{if(l.viewport){const f=l.viewport.scrollTop+i.deltaY;e.onWheelScroll(f),le(f,b)&&i.preventDefault()}},onResize:()=>{d.current&&l.viewport&&s&&c({content:l.viewport.scrollHeight,viewport:l.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:O(s.paddingTop),paddingEnd:O(s.paddingBottom)}})}}))}),[we,ee]=Q(g),re=r.forwardRef((e,n)=>{const{__scopeScrollArea:t,sizes:c,hasThumb:o,onThumbChange:l,onThumbPointerUp:s,onThumbPointerDown:a,onThumbPositionChange:d,onDragScroll:u,onWheelScroll:i,onResize:b,...f}=e,h=S(g,t),[$,A]=r.useState(null),N=T(n,m=>A(m)),E=r.useRef(null),L=r.useRef(""),U=h.viewport,D=c.content-c.viewport,z=x(i),_=x(d),W=I(b,10);function H(m){if(E.current){const v=m.clientX-E.current.left,C=m.clientY-E.current.top;u({x:v,y:C})}}return r.useEffect(()=>{const m=v=>{const C=v.target;($==null?void 0:$.contains(C))&&z(v,D)};return document.addEventListener("wheel",m,{passive:!1}),()=>document.removeEventListener("wheel",m,{passive:!1})},[U,$,D,z]),r.useEffect(_,[c,_]),R($,W),R(h.content,W),r.createElement(we,{scope:t,scrollbar:$,hasThumb:o,onThumbChange:x(l),onThumbPointerUp:x(s),onThumbPositionChange:_,onThumbPointerDown:x(a)},r.createElement(y.div,p({},f,{ref:N,style:{position:"absolute",...f.style},onPointerDown:P(e.onPointerDown,m=>{m.button===0&&(m.target.setPointerCapture(m.pointerId),E.current=$.getBoundingClientRect(),L.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",H(m))}),onPointerMove:P(e.onPointerMove,H),onPointerUp:P(e.onPointerUp,m=>{const v=m.target;v.hasPointerCapture(m.pointerId)&&v.releasePointerCapture(m.pointerId),document.body.style.webkitUserSelect=L.current,E.current=null})})))}),j="ScrollAreaThumb",ge=r.forwardRef((e,n)=>{const{forceMount:t,...c}=e,o=ee(j,e.__scopeScrollArea);return r.createElement(X,{present:t||o.hasThumb},r.createElement(Ee,p({ref:n},c)))}),Ee=r.forwardRef((e,n)=>{const{__scopeScrollArea:t,style:c,...o}=e,l=S(j,t),s=ee(j,t),{onThumbPositionChange:a}=s,d=T(n,b=>s.onThumbChange(b)),u=r.useRef(),i=I(()=>{u.current&&(u.current(),u.current=void 0)},100);return r.useEffect(()=>{const b=l.viewport;if(b){const f=()=>{if(i(),!u.current){const h=Re(b,a);u.current=h,a()}};return a(),b.addEventListener("scroll",f),()=>b.removeEventListener("scroll",f)}},[l.viewport,i,a]),r.createElement(y.div,p({"data-state":s.hasThumb?"visible":"hidden"},o,{ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...c},onPointerDownCapture:P(e.onPointerDownCapture,b=>{const h=b.target.getBoundingClientRect(),$=b.clientX-h.left,A=b.clientY-h.top;s.onThumbPointerDown({x:$,y:A})}),onPointerUp:P(e.onPointerUp,s.onThumbPointerUp)}))}),te="ScrollAreaCorner",xe=r.forwardRef((e,n)=>{const t=S(te,e.__scopeScrollArea),c=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&c?r.createElement(Pe,p({},e,{ref:n})):null}),Pe=r.forwardRef((e,n)=>{const{__scopeScrollArea:t,...c}=e,o=S(te,t),[l,s]=r.useState(0),[a,d]=r.useState(0),u=!!(l&&a);return R(o.scrollbarX,()=>{var i;const b=((i=o.scrollbarX)===null||i===void 0?void 0:i.offsetHeight)||0;o.onCornerHeightChange(b),d(b)}),R(o.scrollbarY,()=>{var i;const b=((i=o.scrollbarY)===null||i===void 0?void 0:i.offsetWidth)||0;o.onCornerWidthChange(b),s(b)}),u?r.createElement(y.div,p({},c,{ref:n,style:{width:l,height:a,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function O(e){return e?parseInt(e,10):0}function oe(e,n){const t=e/n;return isNaN(t)?0:t}function Y(e){const n=oe(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,c=(e.scrollbar.size-t)*n;return Math.max(c,18)}function Ce(e,n,t,c="ltr"){const o=Y(t),l=o/2,s=n||l,a=o-s,d=t.scrollbar.paddingStart+s,u=t.scrollbar.size-t.scrollbar.paddingEnd-a,i=t.content-t.viewport,b=c==="ltr"?[0,i]:[i*-1,0];return ne([d,u],b)(e)}function k(e,n,t="ltr"){const c=Y(n),o=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,l=n.scrollbar.size-o,s=n.content-n.viewport,a=l-c,d=t==="ltr"?[0,s]:[s*-1,0],u=ie(e,d);return ne([0,s],[0,a])(u)}function ne(e,n){return t=>{if(e[0]===e[1]||n[0]===n[1])return n[0];const c=(n[1]-n[0])/(e[1]-e[0]);return n[0]+c*(t-e[0])}}function le(e,n){return e>0&&e<n}const Re=(e,n=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},c=0;return function o(){const l={left:e.scrollLeft,top:e.scrollTop},s=t.left!==l.left,a=t.top!==l.top;(s||a)&&n(),t=l,c=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(c)};function I(e,n){const t=x(e),c=r.useRef(0);return r.useEffect(()=>()=>window.clearTimeout(c.current),[]),r.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(t,n)},[t,n])}function R(e,n){const t=x(n);se(()=>{let c=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(c),c=window.requestAnimationFrame(t)});return o.observe(e),()=>{window.cancelAnimationFrame(c),o.unobserve(e)}}},[e,t])}const Te=ue,Ae=he,F=me,B=ge,_e=xe,ye=Array.from({length:50}).map((e,n,t)=>`v1.2.0-beta.${t.length-n}`),Le=()=>w.jsxs(Te,{children:[w.jsx(Ae,{children:w.jsxs("div",{children:[w.jsx("div",{children:"Tags"}),ye.map(e=>w.jsx("div",{children:e},e))]})}),w.jsx(F,{orientation:"vertical",children:w.jsx(B,{})}),w.jsx(F,{orientation:"horizontal",children:w.jsx(B,{})}),w.jsx(_e,{})]}),ke={title:"Radix UI/ScrollAria",component:Le},M={args:{}};var q,G,J;M.parameters={...M.parameters,docs:{...(q=M.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {}
}`,...(J=(G=M.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Fe=["Default"];export{M as Default,Fe as __namedExportsOrder,ke as default};
//# sourceMappingURL=index.stories-66f1b28e.js.map