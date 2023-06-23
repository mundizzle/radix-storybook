import{_ as p}from"./extends-98964cd2.js";import{r as e}from"./index-ad8e37b4.js";import{$ as N}from"./index-1b3f171e.js";import{$ as O}from"./index-25542281.js";import{$ as w}from"./index-cb864916.js";import{$ as A}from"./index-de5e260d.js";import{$ as m,a as I}from"./index-b6d4726d.js";import{$ as M}from"./index-c83839f6.js";import{$ as T}from"./index-21bbdcc0.js";const P="Collapsible",[D,W]=O(P),[S,x]=D(P),k=e.forwardRef((t,r)=>{const{__scopeCollapsible:s,open:a,defaultOpen:n,disabled:i,onOpenChange:c,...$}=t,[f=!1,l]=w({prop:a,defaultProp:n,onChange:c});return e.createElement(S,{scope:s,disabled:i,contentId:T(),open:f,onOpenToggle:e.useCallback(()=>l(b=>!b),[l])},e.createElement(m.div,p({"data-state":C(f),"data-disabled":i?"":void 0},$,{ref:r})))}),F="CollapsibleTrigger",L=e.forwardRef((t,r)=>{const{__scopeCollapsible:s,...a}=t,n=x(F,s);return e.createElement(m.button,p({type:"button","aria-controls":n.contentId,"aria-expanded":n.open||!1,"data-state":C(n.open),"data-disabled":n.disabled?"":void 0,disabled:n.disabled},a,{ref:r,onClick:N(t.onClick,n.onOpenToggle)}))}),y="CollapsibleContent",B=e.forwardRef((t,r)=>{const{forceMount:s,...a}=t,n=x(y,t.__scopeCollapsible);return e.createElement(M,{present:s||n.open},({present:i})=>e.createElement(G,p({},a,{ref:r,present:i})))}),G=e.forwardRef((t,r)=>{const{__scopeCollapsible:s,present:a,children:n,...i}=t,c=x(y,s),[$,f]=e.useState(a),l=e.useRef(null),b=I(r,l),g=e.useRef(0),_=g.current,h=e.useRef(0),R=h.current,u=c.open||$,E=e.useRef(u),d=e.useRef();return e.useEffect(()=>{const o=requestAnimationFrame(()=>E.current=!1);return()=>cancelAnimationFrame(o)},[]),A(()=>{const o=l.current;if(o){d.current=d.current||{transitionDuration:o.style.transitionDuration,animationName:o.style.animationName},o.style.transitionDuration="0s",o.style.animationName="none";const v=o.getBoundingClientRect();g.current=v.height,h.current=v.width,E.current||(o.style.transitionDuration=d.current.transitionDuration,o.style.animationName=d.current.animationName),f(a)}},[c.open,a]),e.createElement(m.div,p({"data-state":C(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!u},i,{ref:b,style:{["--radix-collapsible-content-height"]:_?`${_}px`:void 0,["--radix-collapsible-content-width"]:R?`${R}px`:void 0,...t.style}}),u&&n)});function C(t){return t?"open":"closed"}const X=k,Y=L,Z=B;export{X as $,Y as a,Z as b,W as c};
//# sourceMappingURL=index-b5cb1851.js.map