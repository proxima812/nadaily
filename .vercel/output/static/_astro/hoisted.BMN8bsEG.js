function D(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}return e}function v(e,r){return Array(r+1).join(e)}function L(e){return e.replace(/^\n*/,"")}function x(e){for(var r=e.length;r>0&&e[r-1]===`
`;)r--;return e.substring(0,r)}var P=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function y(e){return A(e,P)}var T=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function b(e){return A(e,T)}function M(e){return C(e,T)}var R=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function I(e){return A(e,R)}function H(e){return C(e,R)}function A(e,r){return r.indexOf(e.nodeName)>=0}function C(e,r){return e.getElementsByTagName&&r.some(function(t){return e.getElementsByTagName(t).length})}var o={};o.paragraph={filter:"p",replacement:function(e){return`

`+e+`

`}};o.lineBreak={filter:"br",replacement:function(e,r,t){return t.br+`
`}};o.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,r,t){var n=Number(r.nodeName.charAt(1));if(t.headingStyle==="setext"&&n<3){var i=v(n===1?"=":"-",e.length);return`

`+e+`
`+i+`

`}else return`

`+v("#",n)+" "+e+`

`}};o.blockquote={filter:"blockquote",replacement:function(e){return e=e.replace(/^\n+|\n+$/g,""),e=e.replace(/^/gm,"> "),`

`+e+`

`}};o.list={filter:["ul","ol"],replacement:function(e,r){var t=r.parentNode;return t.nodeName==="LI"&&t.lastElementChild===r?`
`+e:`

`+e+`

`}};o.listItem={filter:"li",replacement:function(e,r,t){e=e.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);var n=t.bulletListMarker+"   ",i=r.parentNode;if(i.nodeName==="OL"){var a=i.getAttribute("start"),s=Array.prototype.indexOf.call(i.children,r);n=(a?Number(a)+s:s+1)+".  "}return n+e+(r.nextSibling&&!/\n$/.test(e)?`
`:"")}};o.indentedCodeBlock={filter:function(e,r){return r.codeBlockStyle==="indented"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,r,t){return`

    `+r.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};o.fencedCodeBlock={filter:function(e,r){return r.codeBlockStyle==="fenced"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,r,t){for(var n=r.firstChild.getAttribute("class")||"",i=(n.match(/language-(\S+)/)||[null,""])[1],a=r.firstChild.textContent,s=t.fence.charAt(0),u=3,l=new RegExp("^"+s+"{3,}","gm"),c;c=l.exec(a);)c[0].length>=u&&(u=c[0].length+1);var f=v(s,u);return`

`+f+i+`
`+a.replace(/\n$/,"")+`
`+f+`

`}};o.horizontalRule={filter:"hr",replacement:function(e,r,t){return`

`+t.hr+`

`}};o.inlineLink={filter:function(e,r){return r.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,r){var t=r.getAttribute("href"),n=d(r.getAttribute("title"));return n&&(n=' "'+n+'"'),"["+e+"]("+t+n+")"}};o.referenceLink={filter:function(e,r){return r.linkStyle==="referenced"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,r,t){var n=r.getAttribute("href"),i=d(r.getAttribute("title"));i&&(i=' "'+i+'"');var a,s;switch(t.linkReferenceStyle){case"collapsed":a="["+e+"][]",s="["+e+"]: "+n+i;break;case"shortcut":a="["+e+"]",s="["+e+"]: "+n+i;break;default:var u=this.references.length+1;a="["+e+"]["+u+"]",s="["+u+"]: "+n+i}return this.references.push(s),a},references:[],append:function(e){var r="";return this.references.length&&(r=`

`+this.references.join(`
`)+`

`,this.references=[]),r}};o.emphasis={filter:["em","i"],replacement:function(e,r,t){return e.trim()?t.emDelimiter+e+t.emDelimiter:""}};o.strong={filter:["strong","b"],replacement:function(e,r,t){return e.trim()?t.strongDelimiter+e+t.strongDelimiter:""}};o.code={filter:function(e){var r=e.previousSibling||e.nextSibling,t=e.parentNode.nodeName==="PRE"&&!r;return e.nodeName==="CODE"&&!t},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var r=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",t="`",n=e.match(/`+/gm)||[];n.indexOf(t)!==-1;)t=t+"`";return t+r+e+r+t}};o.image={filter:"img",replacement:function(e,r){var t=d(r.getAttribute("alt")),n=r.getAttribute("src")||"",i=d(r.getAttribute("title")),a=i?' "'+i+'"':"";return n?"!["+t+"]("+n+a+")":""}};function d(e){return e?e.replace(/(\n+\s*)+/g,`
`):""}function S(e){this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[];for(var r in e.rules)this.array.push(e.rules[r])}S.prototype={add:function(e,r){this.array.unshift(r)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){if(e.isBlank)return this.blankRule;var r;return(r=m(this.array,e,this.options))||(r=m(this._keep,e,this.options))||(r=m(this._remove,e,this.options))?r:this.defaultRule},forEach:function(e){for(var r=0;r<this.array.length;r++)e(this.array[r],r)}};function m(e,r,t){for(var n=0;n<e.length;n++){var i=e[n];if(F(i,r,t))return i}}function F(e,r,t){var n=e.filter;if(typeof n=="string"){if(n===r.nodeName.toLowerCase())return!0}else if(Array.isArray(n)){if(n.indexOf(r.nodeName.toLowerCase())>-1)return!0}else if(typeof n=="function"){if(n.call(e,r,t))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function _(e){var r=e.element,t=e.isBlock,n=e.isVoid,i=e.isPre||function(O){return O.nodeName==="PRE"};if(!(!r.firstChild||i(r))){for(var a=null,s=!1,u=null,l=E(u,r,i);l!==r;){if(l.nodeType===3||l.nodeType===4){var c=l.data.replace(/[ \r\n\t]+/g," ");if((!a||/ $/.test(a.data))&&!s&&c[0]===" "&&(c=c.substr(1)),!c){l=g(l);continue}l.data=c,a=l}else if(l.nodeType===1)t(l)||l.nodeName==="BR"?(a&&(a.data=a.data.replace(/ $/,"")),a=null,s=!1):n(l)||i(l)?(a=null,s=!0):a&&(s=!1);else{l=g(l);continue}var f=E(u,l,i);u=l,l=f}a&&(a.data=a.data.replace(/ $/,""),a.data||g(a))}}function g(e){var r=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),r}function E(e,r,t){return e&&e.parentNode===r||t(r)?r.nextSibling||r.parentNode:r.firstChild||r.nextSibling||r.parentNode}var N=typeof window<"u"?window:{};function $(){var e=N.DOMParser,r=!1;try{new e().parseFromString("","text/html")&&(r=!0)}catch{}return r}function V(){var e=function(){};return U()?e.prototype.parseFromString=function(r){var t=new window.ActiveXObject("htmlfile");return t.designMode="on",t.open(),t.write(r),t.close(),t}:e.prototype.parseFromString=function(r){var t=document.implementation.createHTMLDocument("");return t.open(),t.write(r),t.close(),t},e}function U(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch{N.ActiveXObject&&(e=!0)}return e}var W=$()?N.DOMParser:V();function j(e,r){var t;if(typeof e=="string"){var n=G().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");t=n.getElementById("turndown-root")}else t=e.cloneNode(!0);return _({element:t,isBlock:y,isVoid:b,isPre:r.preformattedCode?X:null}),t}var p;function G(){return p=p||new W,p}function X(e){return e.nodeName==="PRE"||e.nodeName==="CODE"}function K(e,r){return e.isBlock=y(e),e.isCode=e.nodeName==="CODE"||e.parentNode.isCode,e.isBlank=Y(e),e.flankingWhitespace=q(e,r),e}function Y(e){return!b(e)&&!I(e)&&/^\s*$/i.test(e.textContent)&&!M(e)&&!H(e)}function q(e,r){if(e.isBlock||r.preformattedCode&&e.isCode)return{leading:"",trailing:""};var t=z(e.textContent);return t.leadingAscii&&k("left",e,r)&&(t.leading=t.leadingNonAscii),t.trailingAscii&&k("right",e,r)&&(t.trailing=t.trailingNonAscii),{leading:t.leading,trailing:t.trailing}}function z(e){var r=e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:r[1],leadingAscii:r[2],leadingNonAscii:r[3],trailing:r[4],trailingNonAscii:r[5],trailingAscii:r[6]}}function k(e,r,t){var n,i,a;return e==="left"?(n=r.previousSibling,i=/ $/):(n=r.nextSibling,i=/^ /),n&&(n.nodeType===3?a=i.test(n.nodeValue):t.preformattedCode&&n.nodeName==="CODE"?a=!1:n.nodeType===1&&!y(n)&&(a=i.test(n.textContent))),a}var Q=Array.prototype.reduce,J=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function h(e){if(!(this instanceof h))return new h(e);var r={rules:o,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(t,n){return n.isBlock?`

`:""},keepReplacement:function(t,n){return n.isBlock?`

`+n.outerHTML+`

`:n.outerHTML},defaultReplacement:function(t,n){return n.isBlock?`

`+t+`

`:t}};this.options=D({},r,e),this.rules=new S(this.options)}h.prototype={turndown:function(e){if(!re(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(e==="")return"";var r=w.call(this,new j(e,this.options));return Z.call(this,r)},use:function(e){if(Array.isArray(e))for(var r=0;r<e.length;r++)this.use(e[r]);else if(typeof e=="function")e(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,r){return this.rules.add(e,r),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return J.reduce(function(r,t){return r.replace(t[0],t[1])},e)}};function w(e){var r=this;return Q.call(e.childNodes,function(t,n){n=new K(n,r.options);var i="";return n.nodeType===3?i=n.isCode?n.nodeValue:r.escape(n.nodeValue):n.nodeType===1&&(i=ee.call(r,n)),B(t,i)},"")}function Z(e){var r=this;return this.rules.forEach(function(t){typeof t.append=="function"&&(e=B(e,t.append(r.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function ee(e){var r=this.rules.forNode(e),t=w.call(this,e),n=e.flankingWhitespace;return(n.leading||n.trailing)&&(t=t.trim()),n.leading+r.replacement(t,e,this.options)+n.trailing}function B(e,r){var t=x(e),n=L(r),i=Math.max(e.length-t.length,r.length-n.length),a=`

`.substring(0,i);return t+a+n}function re(e){return e!=null&&(typeof e=="string"||e.nodeType&&(e.nodeType===1||e.nodeType===9||e.nodeType===11))}document.getElementById("copyButton").addEventListener("click",function(){const e=new h({headingStyle:"atx",bulletListMarker:"-",codeBlockStyle:"fenced"});e.addRule("bold",{filter:"h2",replacement:function(t){return"🔻 **"+t+"**"}}),e.addRule("italic",{filter:["em","i"],replacement:function(t){return"__"+t+"__"}}),e.addRule("inline-code",{filter:function(t){return t.nodeName==="P"&&t.textContent.includes("**__")},replacement:function(t){return t.replace(/\n/g," ")}});const r=e.turndown(document.querySelector(".article"));navigator.clipboard.writeText(r).then(()=>{console.log("Markdown текст успешно скопирован!");const t=document.getElementById("copyButton");t.classList.add("text-blue-700","bg-blue-100","ring-blue-300"),t.classList.remove("text-green-700","bg-green-100","ring-green-300"),setTimeout(function(){t.classList.add("text-green-700","bg-green-100","ring-green-300"),t.classList.remove("text-blue-700","bg-blue-100","ring-blue-300")},1e3)}).catch(t=>{console.error("Ошибка при копировании: ",t)})});
