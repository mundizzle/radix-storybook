import{a as V,$ as M,b as Fe,j as p}from"./index-b6d4726d.js";import{r as e,b as ke}from"./index-ad8e37b4.js";import{_}from"./extends-98964cd2.js";import{$ as Ee}from"./index-6a2b73ba.js";import{$ as T}from"./index-1b3f171e.js";import{$ as Ke}from"./index-f730bee5.js";import{$ as Ue}from"./index-25542281.js";import{$ as Ge}from"./index-e5b7b6af.js";import{$ as qe}from"./index-dc32c729.js";import{h as ze,a as Ye,$ as Xe,b as Ze}from"./index-041dc4ce.js";import{$ as be}from"./index-21bbdcc0.js";import{$ as Ae,a as Je,b as Qe,c as et}from"./index-03b17e65.js";import{$ as tt}from"./index-fc7623f3.js";import{$ as ot}from"./index-a29557c5.js";import{$ as _e}from"./index-cb864916.js";import{$ as G}from"./index-de5e260d.js";import{$ as nt}from"./index-2990ac02.js";import{a as ct}from"./index-f617d252.js";import{d as rt,c as ye,g as at}from"./react-icons.esm-e665ab3e.js";import"./_commonjsHelpers-725317a4.js";import"./index-6c2c353e.js";const st=[" ","Enter","ArrowUp","ArrowDown"],lt=[" ","Enter"],ie="Select",[de,fe,it]=Ke(ie),[te,bo]=Ue(ie,[it,Ae]),we=Ae(),[dt,Y]=te(ie),[ft,ut]=te(ie),pt=n=>{const{__scopeSelect:l,children:t,open:a,defaultOpen:s,onOpenChange:f,value:c,defaultValue:o,onValueChange:r,dir:i,name:h,autoComplete:E,disabled:I,required:y}=n,m=we(l),[v,b]=e.useState(null),[$,d]=e.useState(null),[g,oe]=e.useState(!1),k=Ge(i),[ne=!1,R]=_e({prop:a,defaultProp:s,onChange:f}),[N,q]=_e({prop:c,defaultProp:o,onChange:r}),Z=e.useRef(null),z=v?!!v.closest("form"):!0,[L,F]=e.useState(new Set),K=Array.from(L).map(P=>P.props.value).join(";");return e.createElement(Je,m,e.createElement(dt,{required:y,scope:l,trigger:v,onTriggerChange:b,valueNode:$,onValueNodeChange:d,valueNodeHasChildren:g,onValueNodeHasChildrenChange:oe,contentId:be(),value:N,onValueChange:q,open:ne,onOpenChange:R,dir:k,triggerPointerDownPosRef:Z,disabled:I},e.createElement(de.Provider,{scope:l},e.createElement(ft,{scope:n.__scopeSelect,onNativeOptionAdd:e.useCallback(P=>{F(B=>new Set(B).add(P))},[]),onNativeOptionRemove:e.useCallback(P=>{F(B=>{const H=new Set(B);return H.delete(P),H})},[])},t)),z?e.createElement(Ve,{key:K,"aria-hidden":!0,required:y,tabIndex:-1,name:h,autoComplete:E,value:N,onChange:P=>q(P.target.value),disabled:I},N===void 0?e.createElement("option",{value:""}):null,Array.from(L)):null))},mt="SelectTrigger",$t=e.forwardRef((n,l)=>{const{__scopeSelect:t,disabled:a=!1,...s}=n,f=we(t),c=Y(mt,t),o=c.disabled||a,r=V(l,c.onTriggerChange),i=fe(t),[h,E,I]=He(m=>{const v=i().filter(d=>!d.disabled),b=v.find(d=>d.value===c.value),$=We(v,m,b);$!==void 0&&c.onValueChange($.value)}),y=()=>{o||(c.onOpenChange(!0),I())};return e.createElement(Qe,_({asChild:!0},f),e.createElement(M.button,_({type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:o,"data-disabled":o?"":void 0,"data-placeholder":c.value===void 0?"":void 0},s,{ref:r,onClick:T(s.onClick,m=>{m.currentTarget.focus()}),onPointerDown:T(s.onPointerDown,m=>{const v=m.target;v.hasPointerCapture(m.pointerId)&&v.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&(y(),c.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)},m.preventDefault())}),onKeyDown:T(s.onKeyDown,m=>{const v=h.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&E(m.key),!(v&&m.key===" ")&&st.includes(m.key)&&(y(),m.preventDefault())})})))}),ht="SelectValue",vt=e.forwardRef((n,l)=>{const{__scopeSelect:t,className:a,style:s,children:f,placeholder:c,...o}=n,r=Y(ht,t),{onValueNodeHasChildrenChange:i}=r,h=f!==void 0,E=V(l,r.onValueNodeChange);return G(()=>{i(h)},[i,h]),e.createElement(M.span,_({},o,{ref:E,style:{pointerEvents:"none"}}),r.value===void 0&&c!==void 0?c:f)}),gt=e.forwardRef((n,l)=>{const{__scopeSelect:t,children:a,...s}=n;return e.createElement(M.span,_({"aria-hidden":!0},s,{ref:l}),a||"▼")}),xt=n=>e.createElement(tt,_({asChild:!0},n)),ee="SelectContent",St=e.forwardRef((n,l)=>{const t=Y(ee,n.__scopeSelect),[a,s]=e.useState();if(G(()=>{s(new DocumentFragment)},[]),!t.open){const f=a;return f?ke.createPortal(e.createElement(je,{scope:n.__scopeSelect},e.createElement(de.Slot,{scope:n.__scopeSelect},e.createElement("div",null,n.children))),f):null}return e.createElement(bt,_({},n,{ref:l}))}),W=10,[je,X]=te(ee),bt=e.forwardRef((n,l)=>{const{__scopeSelect:t,position:a="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:f,onPointerDownOutside:c,side:o,sideOffset:r,align:i,alignOffset:h,arrowPadding:E,collisionBoundary:I,collisionPadding:y,sticky:m,hideWhenDetached:v,avoidCollisions:b,...$}=n,d=Y(ee,t),[g,oe]=e.useState(null),[k,ne]=e.useState(null),R=V(l,u=>oe(u)),[N,q]=e.useState(null),[Z,z]=e.useState(null),L=fe(t),[F,K]=e.useState(!1),P=e.useRef(!1);e.useEffect(()=>{if(g)return ze(g)},[g]),Ye();const B=e.useCallback(u=>{const[w,...D]=L().map(S=>S.ref.current),[C]=D.slice(-1),x=document.activeElement;for(const S of u)if(S===x||(S==null||S.scrollIntoView({block:"nearest"}),S===w&&k&&(k.scrollTop=0),S===C&&k&&(k.scrollTop=k.scrollHeight),S==null||S.focus(),document.activeElement!==x))return},[L,k]),H=e.useCallback(()=>B([N,g]),[B,N,g]);e.useEffect(()=>{F&&H()},[F,H]);const{onOpenChange:J,triggerPointerDownPosRef:U}=d;e.useEffect(()=>{if(g){let u={x:0,y:0};const w=C=>{var x,S,A,j;u={x:Math.abs(Math.round(C.pageX)-((x=(S=U.current)===null||S===void 0?void 0:S.x)!==null&&x!==void 0?x:0)),y:Math.abs(Math.round(C.pageY)-((A=(j=U.current)===null||j===void 0?void 0:j.y)!==null&&A!==void 0?A:0))}},D=C=>{u.x<=10&&u.y<=10?C.preventDefault():g.contains(C.target)||J(!1),document.removeEventListener("pointermove",w),U.current=null};return U.current!==null&&(document.addEventListener("pointermove",w),document.addEventListener("pointerup",D,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",D,{capture:!0})}}},[g,J,U]),e.useEffect(()=>{const u=()=>J(!1);return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[J]);const[ue,re]=He(u=>{const w=L().filter(x=>!x.disabled),D=w.find(x=>x.ref.current===document.activeElement),C=We(w,u,D);C&&setTimeout(()=>C.ref.current.focus())}),pe=e.useCallback((u,w,D)=>{const C=!P.current&&!D;(d.value!==void 0&&d.value===w||C)&&(q(u),C&&(P.current=!0))},[d.value]),me=e.useCallback(()=>g==null?void 0:g.focus(),[g]),Q=e.useCallback((u,w,D)=>{const C=!P.current&&!D;(d.value!==void 0&&d.value===w||C)&&z(u)},[d.value]),ae=a==="popper"?Ie:wt,ce=ae===Ie?{side:o,sideOffset:r,align:i,alignOffset:h,arrowPadding:E,collisionBoundary:I,collisionPadding:y,sticky:m,hideWhenDetached:v,avoidCollisions:b}:{};return e.createElement(je,{scope:t,content:g,viewport:k,onViewportChange:ne,itemRefCallback:pe,selectedItem:N,onItemLeave:me,itemTextRefCallback:Q,focusSelectedItem:H,selectedItemText:Z,position:a,isPositioned:F,searchRef:ue},e.createElement(Xe,{as:Fe,allowPinchZoom:!0},e.createElement(Ze,{asChild:!0,trapped:d.open,onMountAutoFocus:u=>{u.preventDefault()},onUnmountAutoFocus:T(s,u=>{var w;(w=d.trigger)===null||w===void 0||w.focus({preventScroll:!0}),u.preventDefault()})},e.createElement(qe,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:f,onPointerDownOutside:c,onFocusOutside:u=>u.preventDefault(),onDismiss:()=>d.onOpenChange(!1)},e.createElement(ae,_({role:"listbox",id:d.contentId,"data-state":d.open?"open":"closed",dir:d.dir,onContextMenu:u=>u.preventDefault()},$,ce,{onPlaced:()=>K(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...$.style},onKeyDown:T($.onKeyDown,u=>{const w=u.ctrlKey||u.altKey||u.metaKey;if(u.key==="Tab"&&u.preventDefault(),!w&&u.key.length===1&&re(u.key),["ArrowUp","ArrowDown","Home","End"].includes(u.key)){let C=L().filter(x=>!x.disabled).map(x=>x.ref.current);if(["ArrowUp","End"].includes(u.key)&&(C=C.slice().reverse()),["ArrowUp","ArrowDown"].includes(u.key)){const x=u.target,S=C.indexOf(x);C=C.slice(S+1)}setTimeout(()=>B(C)),u.preventDefault()}})}))))))}),wt=e.forwardRef((n,l)=>{const{__scopeSelect:t,onPlaced:a,...s}=n,f=Y(ee,t),c=X(ee,t),[o,r]=e.useState(null),[i,h]=e.useState(null),E=V(l,R=>h(R)),I=fe(t),y=e.useRef(!1),m=e.useRef(!0),{viewport:v,selectedItem:b,selectedItemText:$,focusSelectedItem:d}=c,g=e.useCallback(()=>{if(f.trigger&&f.valueNode&&o&&i&&v&&b&&$){const R=f.trigger.getBoundingClientRect(),N=i.getBoundingClientRect(),q=f.valueNode.getBoundingClientRect(),Z=$.getBoundingClientRect();if(f.dir!=="rtl"){const x=Z.left-N.left,S=q.left-x,A=R.left-S,j=R.width+A,$e=Math.max(j,N.width),he=window.innerWidth-W,ve=Ee(S,[W,he-$e]);o.style.minWidth=j+"px",o.style.left=ve+"px"}else{const x=N.right-Z.right,S=window.innerWidth-q.right-x,A=window.innerWidth-R.right-S,j=R.width+A,$e=Math.max(j,N.width),he=window.innerWidth-W,ve=Ee(S,[W,he-$e]);o.style.minWidth=j+"px",o.style.right=ve+"px"}const z=I(),L=window.innerHeight-W*2,F=v.scrollHeight,K=window.getComputedStyle(i),P=parseInt(K.borderTopWidth,10),B=parseInt(K.paddingTop,10),H=parseInt(K.borderBottomWidth,10),J=parseInt(K.paddingBottom,10),U=P+B+F+J+H,ue=Math.min(b.offsetHeight*5,U),re=window.getComputedStyle(v),pe=parseInt(re.paddingTop,10),me=parseInt(re.paddingBottom,10),Q=R.top+R.height/2-W,ae=L-Q,ce=b.offsetHeight/2,u=b.offsetTop+ce,w=P+B+u,D=U-w;if(w<=Q){const x=b===z[z.length-1].ref.current;o.style.bottom="0px";const S=i.clientHeight-v.offsetTop-v.offsetHeight,A=Math.max(ae,ce+(x?me:0)+S+H),j=w+A;o.style.height=j+"px"}else{const x=b===z[0].ref.current;o.style.top="0px";const A=Math.max(Q,P+v.offsetTop+(x?pe:0)+ce)+D;o.style.height=A+"px",v.scrollTop=w-Q+v.offsetTop}o.style.margin=`${W}px 0`,o.style.minHeight=ue+"px",o.style.maxHeight=L+"px",a==null||a(),requestAnimationFrame(()=>y.current=!0)}},[I,f.trigger,f.valueNode,o,i,v,b,$,f.dir,a]);G(()=>g(),[g]);const[oe,k]=e.useState();G(()=>{i&&k(window.getComputedStyle(i).zIndex)},[i]);const ne=e.useCallback(R=>{R&&m.current===!0&&(g(),d==null||d(),m.current=!1)},[g,d]);return e.createElement(Ct,{scope:t,contentWrapper:o,shouldExpandOnScrollRef:y,onScrollButtonChange:ne},e.createElement("div",{ref:r,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:oe}},e.createElement(M.div,_({},s,{ref:E,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}}))))}),Ie=e.forwardRef((n,l)=>{const{__scopeSelect:t,align:a="start",collisionPadding:s=W,...f}=n,c=we(t);return e.createElement(et,_({},c,f,{ref:l,align:a,collisionPadding:s,style:{boxSizing:"border-box",...f.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Ct,Ce]=te(ee,{}),Pe="SelectViewport",Et=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n,s=X(Pe,t),f=Ce(Pe,t),c=V(l,s.onViewportChange),o=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(de.Slot,{scope:t},e.createElement(M.div,_({"data-radix-select-viewport":"",role:"presentation"},a,{ref:c,style:{position:"relative",flex:1,overflow:"auto",...a.style},onScroll:T(a.onScroll,r=>{const i=r.currentTarget,{contentWrapper:h,shouldExpandOnScrollRef:E}=f;if(E!=null&&E.current&&h){const I=Math.abs(o.current-i.scrollTop);if(I>0){const y=window.innerHeight-W*2,m=parseFloat(h.style.minHeight),v=parseFloat(h.style.height),b=Math.max(m,v);if(b<y){const $=b+I,d=Math.min(y,$),g=$-d;h.style.height=d+"px",h.style.bottom==="0px"&&(i.scrollTop=g>0?g:0,h.style.justifyContent="flex-end")}}}o.current=i.scrollTop})}))))}),_t="SelectGroup",[yt,It]=te(_t),Pt=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n,s=be();return e.createElement(yt,{scope:t,id:s},e.createElement(M.div,_({role:"group","aria-labelledby":s},a,{ref:l})))}),Tt="SelectLabel",Rt=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n,s=It(Tt,t);return e.createElement(M.div,_({id:s.id},a,{ref:l}))}),Se="SelectItem",[Ot,Le]=te(Se),Dt=e.forwardRef((n,l)=>{const{__scopeSelect:t,value:a,disabled:s=!1,textValue:f,...c}=n,o=Y(Se,t),r=X(Se,t),i=o.value===a,[h,E]=e.useState(f??""),[I,y]=e.useState(!1),m=V(l,$=>{var d;return(d=r.itemRefCallback)===null||d===void 0?void 0:d.call(r,$,a,s)}),v=be(),b=()=>{s||(o.onValueChange(a),o.onOpenChange(!1))};return e.createElement(Ot,{scope:t,value:a,disabled:s,textId:v,isSelected:i,onItemTextChange:e.useCallback($=>{E(d=>{var g;return d||((g=$==null?void 0:$.textContent)!==null&&g!==void 0?g:"").trim()})},[])},e.createElement(de.ItemSlot,{scope:t,value:a,disabled:s,textValue:h},e.createElement(M.div,_({role:"option","aria-labelledby":v,"data-highlighted":I?"":void 0,"aria-selected":i&&I,"data-state":i?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1},c,{ref:m,onFocus:T(c.onFocus,()=>y(!0)),onBlur:T(c.onBlur,()=>y(!1)),onPointerUp:T(c.onPointerUp,b),onPointerMove:T(c.onPointerMove,$=>{if(s){var d;(d=r.onItemLeave)===null||d===void 0||d.call(r)}else $.currentTarget.focus({preventScroll:!0})}),onPointerLeave:T(c.onPointerLeave,$=>{if($.currentTarget===document.activeElement){var d;(d=r.onItemLeave)===null||d===void 0||d.call(r)}}),onKeyDown:T(c.onKeyDown,$=>{var d;((d=r.searchRef)===null||d===void 0?void 0:d.current)!==""&&$.key===" "||(lt.includes($.key)&&b(),$.key===" "&&$.preventDefault())})}))))}),se="SelectItemText",Nt=e.forwardRef((n,l)=>{const{__scopeSelect:t,className:a,style:s,...f}=n,c=Y(se,t),o=X(se,t),r=Le(se,t),i=ut(se,t),[h,E]=e.useState(null),I=V(l,$=>E($),r.onItemTextChange,$=>{var d;return(d=o.itemTextRefCallback)===null||d===void 0?void 0:d.call(o,$,r.value,r.disabled)}),y=h==null?void 0:h.textContent,m=e.useMemo(()=>e.createElement("option",{key:r.value,value:r.value,disabled:r.disabled},y),[r.disabled,r.value,y]),{onNativeOptionAdd:v,onNativeOptionRemove:b}=i;return G(()=>(v(m),()=>b(m)),[v,b,m]),e.createElement(e.Fragment,null,e.createElement(M.span,_({id:r.textId},f,{ref:I})),r.isSelected&&c.valueNode&&!c.valueNodeHasChildren?ke.createPortal(f.children,c.valueNode):null)}),Mt="SelectItemIndicator",kt=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n;return Le(Mt,t).isSelected?e.createElement(M.span,_({"aria-hidden":!0},a,{ref:l})):null}),Te="SelectScrollUpButton",At=e.forwardRef((n,l)=>{const t=X(Te,n.__scopeSelect),a=Ce(Te,n.__scopeSelect),[s,f]=e.useState(!1),c=V(l,a.onScrollButtonChange);return G(()=>{if(t.viewport&&t.isPositioned){let r=function(){const i=o.scrollTop>0;f(i)};const o=t.viewport;return r(),o.addEventListener("scroll",r),()=>o.removeEventListener("scroll",r)}},[t.viewport,t.isPositioned]),s?e.createElement(Be,_({},n,{ref:c,onAutoScroll:()=>{const{viewport:o,selectedItem:r}=t;o&&r&&(o.scrollTop=o.scrollTop-r.offsetHeight)}})):null}),Re="SelectScrollDownButton",jt=e.forwardRef((n,l)=>{const t=X(Re,n.__scopeSelect),a=Ce(Re,n.__scopeSelect),[s,f]=e.useState(!1),c=V(l,a.onScrollButtonChange);return G(()=>{if(t.viewport&&t.isPositioned){let r=function(){const i=o.scrollHeight-o.clientHeight,h=Math.ceil(o.scrollTop)<i;f(h)};const o=t.viewport;return r(),o.addEventListener("scroll",r),()=>o.removeEventListener("scroll",r)}},[t.viewport,t.isPositioned]),s?e.createElement(Be,_({},n,{ref:c,onAutoScroll:()=>{const{viewport:o,selectedItem:r}=t;o&&r&&(o.scrollTop=o.scrollTop+r.offsetHeight)}})):null}),Be=e.forwardRef((n,l)=>{const{__scopeSelect:t,onAutoScroll:a,...s}=n,f=X("SelectScrollButton",t),c=e.useRef(null),o=fe(t),r=e.useCallback(()=>{c.current!==null&&(window.clearInterval(c.current),c.current=null)},[]);return e.useEffect(()=>()=>r(),[r]),G(()=>{var i;const h=o().find(E=>E.ref.current===document.activeElement);h==null||(i=h.ref.current)===null||i===void 0||i.scrollIntoView({block:"nearest"})},[o]),e.createElement(M.div,_({"aria-hidden":!0},s,{ref:l,style:{flexShrink:0,...s.style},onPointerDown:T(s.onPointerDown,()=>{c.current===null&&(c.current=window.setInterval(a,50))}),onPointerMove:T(s.onPointerMove,()=>{var i;(i=f.onItemLeave)===null||i===void 0||i.call(f),c.current===null&&(c.current=window.setInterval(a,50))}),onPointerLeave:T(s.onPointerLeave,()=>{r()})}))}),Lt=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n;return e.createElement(M.div,_({"aria-hidden":!0},a,{ref:l}))}),Ve=e.forwardRef((n,l)=>{const{value:t,...a}=n,s=e.useRef(null),f=V(l,s),c=nt(t);return e.useEffect(()=>{const o=s.current,r=window.HTMLSelectElement.prototype,h=Object.getOwnPropertyDescriptor(r,"value").set;if(c!==t&&h){const E=new Event("change",{bubbles:!0});h.call(o,t),o.dispatchEvent(E)}},[c,t]),e.createElement(ct,{asChild:!0},e.createElement("select",_({},a,{ref:f,defaultValue:t})))});Ve.displayName="BubbleSelect";function He(n){const l=ot(n),t=e.useRef(""),a=e.useRef(0),s=e.useCallback(c=>{const o=t.current+c;l(o),function r(i){t.current=i,window.clearTimeout(a.current),i!==""&&(a.current=window.setTimeout(()=>r(""),1e3))}(o)},[l]),f=e.useCallback(()=>{t.current="",window.clearTimeout(a.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(a.current),[]),[t,s,f]}function We(n,l,t){const s=l.length>1&&Array.from(l).every(i=>i===l[0])?l[0]:l,f=t?n.indexOf(t):-1;let c=Bt(n,Math.max(f,0));s.length===1&&(c=c.filter(i=>i!==t));const r=c.find(i=>i.textValue.toLowerCase().startsWith(s.toLowerCase()));return r!==t?r:void 0}function Bt(n,l){return n.map((t,a)=>n[(l+a)%n.length])}const Vt=pt,Ht=$t,Wt=vt,Ft=gt,Kt=xt,Ut=St,Gt=Et,ge=Pt,xe=Rt,qt=Dt,zt=Nt,Yt=kt,Xt=At,Zt=jt,Oe=Lt,Jt=()=>p.jsxs(Vt,{children:[p.jsxs(Ht,{"aria-label":"Food",children:[p.jsx(Wt,{placeholder:"Select a fruit…"}),p.jsx(Ft,{children:p.jsx(ye,{})})]}),p.jsx(Kt,{children:p.jsxs(Ut,{children:[p.jsx(Xt,{children:p.jsx(at,{})}),p.jsxs(Gt,{children:[p.jsxs(ge,{children:[p.jsx(xe,{children:"Fruits"}),p.jsx(O,{value:"apple",children:"Apple"}),p.jsx(O,{value:"banana",children:"Banana"}),p.jsx(O,{value:"blueberry",children:"Blueberry"}),p.jsx(O,{value:"grapes",children:"Grapes"}),p.jsx(O,{value:"pineapple",children:"Pineapple"})]}),p.jsx(Oe,{}),p.jsxs(ge,{children:[p.jsx(xe,{children:"Vegetables"}),p.jsx(O,{value:"aubergine",children:"Aubergine"}),p.jsx(O,{value:"broccoli",children:"Broccoli"}),p.jsx(O,{value:"carrot",disabled:!0,children:"Carrot"}),p.jsx(O,{value:"courgette",children:"Courgette"}),p.jsx(O,{value:"leek",children:"Leek"})]}),p.jsx(Oe,{}),p.jsxs(ge,{children:[p.jsx(xe,{children:"Meat"}),p.jsx(O,{value:"beef",children:"Beef"}),p.jsx(O,{value:"chicken",children:"Chicken"}),p.jsx(O,{value:"lamb",children:"Lamb"}),p.jsx(O,{value:"pork",children:"Pork"})]})]}),p.jsx(Zt,{children:p.jsx(ye,{})})]})})]}),O=e.forwardRef(({children:n,...l},t)=>p.jsxs(qt,{...l,ref:t,children:[p.jsx(zt,{children:n}),p.jsx(Yt,{children:p.jsx(rt,{})})]})),wo={title:"Radix UI/Select",component:Jt},le={args:{}};var De,Ne,Me;le.parameters={...le.parameters,docs:{...(De=le.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {}
}`,...(Me=(Ne=le.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};const Co=["Default"];export{le as Default,Co as __namedExportsOrder,wo as default};
//# sourceMappingURL=index.stories-785fdd7f.js.map