import{_ as s}from"./extends-98964cd2.js";import{r as c}from"./index-ad8e37b4.js";import{$ as p}from"./index-b6d4726d.js";const i="horizontal",l=["horizontal","vertical"],f=c.forwardRef((r,t)=>{const{decorative:o,orientation:e=i,...n}=r,a=d(e)?e:i,$=o?{role:"none"}:{"aria-orientation":a==="vertical"?a:void 0,role:"separator"};return c.createElement(p.div,s({"data-orientation":a},$,n,{ref:t}))});f.propTypes={orientation(r,t,o){const e=r[t],n=String(e);return e&&!d(e)?new Error(u(n,o)):null}};function u(r,t){return`Invalid prop \`orientation\` of value \`${r}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`}function d(r){return l.includes(r)}const E=f;export{E as $};
//# sourceMappingURL=index-a87b8609.js.map
