import{b as T,r as o}from"./index.DxY2ptZQ.js";var m,p,l=T;p=l.createRoot,m=l.hydrateRoot;const c=({value:t,name:r,hydrate:e=!0})=>{if(!t)return null;const a=e?"astro-slot":"astro-static-slot";return o.createElement(a,{name:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}})};c.shouldComponentUpdate=()=>!1;function v(t){for(const r in t)if(r.startsWith("__reactContainer"))return r}function y(t){let r={};for(const e of t.attributes)r[e.name]=e.value;return t.firstChild===null?o.createElement(t.localName,r):o.createElement(t.localName,r,Array.from(t.childNodes).map(e=>e.nodeType===Node.TEXT_NODE?e.data:e.nodeType===Node.ELEMENT_NODE?y(e):void 0).filter(e=>!!e))}function b(t,r){if(r&&t){let e=[],a=document.createElement("template");a.innerHTML=t;for(let u of a.content.children)e.push(y(u));return e}else return t?o.createElement(c,{value:t}):void 0}let f=new WeakMap;const E=(t,r)=>{let e=f.get(t);return e||(e=r(),f.set(t,e)),e},O=t=>(r,e,{default:a,...u},{client:h})=>{if(!t.hasAttribute("ssr"))return;const N={identifierPrefix:t.getAttribute("prefix")};for(const[s,n]of Object.entries(u))e[s]=o.createElement(c,{value:n,name:s});const i=o.createElement(r,e,b(a,t.hasAttribute("data-react-children"))),d=v(t);if(d&&delete t[d],h==="only")return o.startTransition(()=>{E(t,()=>{const n=p(t);return t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0}),n}).render(i)});o.startTransition(()=>{E(t,()=>{const n=m(t,i,N);return t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0}),n}).render(i)})};export{O as default};
