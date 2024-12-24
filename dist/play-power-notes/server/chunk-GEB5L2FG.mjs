import './polyfills.server.mjs';
import{a as Rt,b as Nt,c as Ue}from"./chunk-FD53EANF.mjs";import{h as wt}from"./chunk-EBITJBPR.mjs";import{$a as Pe,Ga as _t,Ia as ke,Ja as he,Pa as Et,Vb as Ct,Wb as Dt,_ as ht,eb as C,fa as Tt,fb as D,ga as N,ha as O,hb as At,jb as x,lb as St,mb as yt,nb as bt,ob as H,ub as Lt,vb as te}from"./chunk-PWKT3LZT.mjs";import"./chunk-VVCT4QZE.mjs";var{entries:Ht,setPrototypeOf:Ot,isFrozen:Tn,getPrototypeOf:_n,getOwnPropertyDescriptor:En}=Object,{freeze:y,seal:R,create:zt}=Object,{apply:Ge,construct:Ve}=typeof Reflect<"u"&&Reflect;y||(y=function(a){return a});R||(R=function(a){return a});Ge||(Ge=function(a,t,i){return a.apply(t,i)});Ve||(Ve=function(a,t){return new a(...t)});var Te=w(Array.prototype.forEach),xt=w(Array.prototype.pop),ne=w(Array.prototype.push),Ee=w(String.prototype.toLowerCase),Fe=w(String.prototype.toString),It=w(String.prototype.match),ie=w(String.prototype.replace),An=w(String.prototype.indexOf),Sn=w(String.prototype.trim),I=w(Object.prototype.hasOwnProperty),S=w(RegExp.prototype.test),oe=yn(TypeError);function w(l){return function(a){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return Ge(l,a,i)}}function yn(l){return function(){for(var a=arguments.length,t=new Array(a),i=0;i<a;i++)t[i]=arguments[i];return Ve(l,t)}}function c(l,a){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ee;Ot&&Ot(l,null);let i=a.length;for(;i--;){let r=a[i];if(typeof r=="string"){let u=t(r);u!==r&&(Tn(a)||(a[i]=u),r=u)}l[r]=!0}return l}function bn(l){for(let a=0;a<l.length;a++)I(l,a)||(l[a]=null);return l}function W(l){let a=zt(null);for(let[t,i]of Ht(l))I(l,t)&&(Array.isArray(i)?a[t]=bn(i):i&&typeof i=="object"&&i.constructor===Object?a[t]=W(i):a[t]=i);return a}function ae(l,a){for(;l!==null;){let i=En(l,a);if(i){if(i.get)return w(i.get);if(typeof i.value=="function")return w(i.value)}l=_n(l)}function t(){return null}return t}var Mt=y(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),He=y(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ze=y(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ln=y(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Be=y(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Cn=y(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),vt=y(["#text"]),kt=y(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),We=y(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Pt=y(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),_e=y(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Dn=R(/\{\{[\w\W]*|[\w\W]*\}\}/gm),wn=R(/<%[\w\W]*|[\w\W]*%>/gm),Rn=R(/\$\{[\w\W]*}/gm),Nn=R(/^data-[\-\w.\u00B7-\uFFFF]+$/),On=R(/^aria-[\-\w]+$/),Bt=R(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),xn=R(/^(?:\w+script|data):/i),In=R(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wt=R(/^html$/i),Mn=R(/^[a-z][.\w]*(-[.\w]+)+$/i),Ut=Object.freeze({__proto__:null,ARIA_ATTR:On,ATTR_WHITESPACE:In,CUSTOM_ELEMENT:Mn,DATA_ATTR:Nn,DOCTYPE_NAME:Wt,ERB_EXPR:wn,IS_ALLOWED_URI:Bt,IS_SCRIPT_OR_DATA:xn,MUSTACHE_EXPR:Dn,TMPLIT_EXPR:Rn}),re={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},vn=function(){return typeof window>"u"?null:window},kn=function(a,t){if(typeof a!="object"||typeof a.createPolicy!="function")return null;let i=null,r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(i=t.getAttribute(r));let u="dompurify"+(i?"#"+i:"");try{return a.createPolicy(u,{createHTML(f){return f},createScriptURL(f){return f}})}catch{return console.warn("TrustedTypes policy "+u+" could not be created."),null}},Ft=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Gt(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:vn(),a=s=>Gt(s);if(a.version="3.2.3",a.removed=[],!l||!l.document||l.document.nodeType!==re.document)return a.isSupported=!1,a;let{document:t}=l,i=t,r=i.currentScript,{DocumentFragment:u,HTMLTemplateElement:f,Node:F,Element:z,NodeFilter:k,NamedNodeMap:Xt=l.NamedNodeMap||l.MozNamedAttrMap,HTMLFormElement:$t,DOMParser:qt,trustedTypes:se}=l,q=z.prototype,Kt=ae(q,"cloneNode"),Zt=ae(q,"remove"),Qt=ae(q,"nextSibling"),Jt=ae(q,"childNodes"),le=ae(q,"parentNode");if(typeof f=="function"){let s=t.createElement("template");s.content&&s.content.ownerDocument&&(t=s.content.ownerDocument)}let E,K="",{implementation:Ae,createNodeIterator:en,createDocumentFragment:tn,getElementsByTagName:nn}=t,{importNode:on}=i,L=Ft();a.isSupported=typeof Ht=="function"&&typeof le=="function"&&Ae&&Ae.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:Se,ERB_EXPR:ye,TMPLIT_EXPR:be,DATA_ATTR:an,ARIA_ATTR:rn,IS_SCRIPT_OR_DATA:sn,ATTR_WHITESPACE:Ye,CUSTOM_ELEMENT:ln}=Ut,{IS_ALLOWED_URI:je}=Ut,d=null,Xe=c({},[...Mt,...He,...ze,...Be,...vt]),h=null,$e=c({},[...kt,...We,...Pt,..._e]),m=Object.seal(zt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Z=null,Le=null,qe=!0,Ce=!0,Ke=!1,Ze=!0,G=!1,De=!0,B=!1,we=!1,Re=!1,V=!1,ce=!1,ue=!1,Qe=!0,Je=!1,cn="user-content-",Ne=!0,Q=!1,Y={},j=null,et=c({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,nt=c({},["audio","video","img","source","image","track"]),Oe=null,it=c({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),fe="http://www.w3.org/1998/Math/MathML",pe="http://www.w3.org/2000/svg",P="http://www.w3.org/1999/xhtml",X=P,xe=!1,Ie=null,un=c({},[fe,pe,P],Fe),me=c({},["mi","mo","mn","ms","mtext"]),de=c({},["annotation-xml"]),fn=c({},["title","style","font","a","script"]),J=null,pn=["application/xhtml+xml","text/html"],mn="text/html",g=null,$=null,dn=t.createElement("form"),ot=function(e){return e instanceof RegExp||e instanceof Function},Me=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!($&&$===e)){if((!e||typeof e!="object")&&(e={}),e=W(e),J=pn.indexOf(e.PARSER_MEDIA_TYPE)===-1?mn:e.PARSER_MEDIA_TYPE,g=J==="application/xhtml+xml"?Fe:Ee,d=I(e,"ALLOWED_TAGS")?c({},e.ALLOWED_TAGS,g):Xe,h=I(e,"ALLOWED_ATTR")?c({},e.ALLOWED_ATTR,g):$e,Ie=I(e,"ALLOWED_NAMESPACES")?c({},e.ALLOWED_NAMESPACES,Fe):un,Oe=I(e,"ADD_URI_SAFE_ATTR")?c(W(it),e.ADD_URI_SAFE_ATTR,g):it,tt=I(e,"ADD_DATA_URI_TAGS")?c(W(nt),e.ADD_DATA_URI_TAGS,g):nt,j=I(e,"FORBID_CONTENTS")?c({},e.FORBID_CONTENTS,g):et,Z=I(e,"FORBID_TAGS")?c({},e.FORBID_TAGS,g):{},Le=I(e,"FORBID_ATTR")?c({},e.FORBID_ATTR,g):{},Y=I(e,"USE_PROFILES")?e.USE_PROFILES:!1,qe=e.ALLOW_ARIA_ATTR!==!1,Ce=e.ALLOW_DATA_ATTR!==!1,Ke=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ze=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,G=e.SAFE_FOR_TEMPLATES||!1,De=e.SAFE_FOR_XML!==!1,B=e.WHOLE_DOCUMENT||!1,V=e.RETURN_DOM||!1,ce=e.RETURN_DOM_FRAGMENT||!1,ue=e.RETURN_TRUSTED_TYPE||!1,Re=e.FORCE_BODY||!1,Qe=e.SANITIZE_DOM!==!1,Je=e.SANITIZE_NAMED_PROPS||!1,Ne=e.KEEP_CONTENT!==!1,Q=e.IN_PLACE||!1,je=e.ALLOWED_URI_REGEXP||Bt,X=e.NAMESPACE||P,me=e.MATHML_TEXT_INTEGRATION_POINTS||me,de=e.HTML_INTEGRATION_POINTS||de,m=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(m.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(m.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(m.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),G&&(Ce=!1),ce&&(V=!0),Y&&(d=c({},vt),h=[],Y.html===!0&&(c(d,Mt),c(h,kt)),Y.svg===!0&&(c(d,He),c(h,We),c(h,_e)),Y.svgFilters===!0&&(c(d,ze),c(h,We),c(h,_e)),Y.mathMl===!0&&(c(d,Be),c(h,Pt),c(h,_e))),e.ADD_TAGS&&(d===Xe&&(d=W(d)),c(d,e.ADD_TAGS,g)),e.ADD_ATTR&&(h===$e&&(h=W(h)),c(h,e.ADD_ATTR,g)),e.ADD_URI_SAFE_ATTR&&c(Oe,e.ADD_URI_SAFE_ATTR,g),e.FORBID_CONTENTS&&(j===et&&(j=W(j)),c(j,e.FORBID_CONTENTS,g)),Ne&&(d["#text"]=!0),B&&c(d,["html","head","body"]),d.table&&(c(d,["tbody"]),delete Z.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw oe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw oe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=e.TRUSTED_TYPES_POLICY,K=E.createHTML("")}else E===void 0&&(E=kn(se,r)),E!==null&&typeof K=="string"&&(K=E.createHTML(""));y&&y(e),$=e}},at=c({},[...He,...ze,...Ln]),rt=c({},[...Be,...Cn]),gn=function(e){let n=le(e);(!n||!n.tagName)&&(n={namespaceURI:X,tagName:"template"});let o=Ee(e.tagName),p=Ee(n.tagName);return Ie[e.namespaceURI]?e.namespaceURI===pe?n.namespaceURI===P?o==="svg":n.namespaceURI===fe?o==="svg"&&(p==="annotation-xml"||me[p]):!!at[o]:e.namespaceURI===fe?n.namespaceURI===P?o==="math":n.namespaceURI===pe?o==="math"&&de[p]:!!rt[o]:e.namespaceURI===P?n.namespaceURI===pe&&!de[p]||n.namespaceURI===fe&&!me[p]?!1:!rt[o]&&(fn[o]||!at[o]):!!(J==="application/xhtml+xml"&&Ie[e.namespaceURI]):!1},M=function(e){ne(a.removed,{element:e});try{le(e).removeChild(e)}catch{Zt(e)}},ge=function(e,n){try{ne(a.removed,{attribute:n.getAttributeNode(e),from:n})}catch{ne(a.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e==="is")if(V||ce)try{M(n)}catch{}else try{n.setAttribute(e,"")}catch{}},st=function(e){let n=null,o=null;if(Re)e="<remove></remove>"+e;else{let T=It(e,/^[\r\n\t ]+/);o=T&&T[0]}J==="application/xhtml+xml"&&X===P&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");let p=E?E.createHTML(e):e;if(X===P)try{n=new qt().parseFromString(p,J)}catch{}if(!n||!n.documentElement){n=Ae.createDocument(X,"template",null);try{n.documentElement.innerHTML=xe?K:p}catch{}}let _=n.body||n.documentElement;return e&&o&&_.insertBefore(t.createTextNode(o),_.childNodes[0]||null),X===P?nn.call(n,B?"html":"body")[0]:B?n.documentElement:_},lt=function(e){return en.call(e.ownerDocument||e,e,k.SHOW_ELEMENT|k.SHOW_COMMENT|k.SHOW_TEXT|k.SHOW_PROCESSING_INSTRUCTION|k.SHOW_CDATA_SECTION,null)},ve=function(e){return e instanceof $t&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof Xt)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},ct=function(e){return typeof F=="function"&&e instanceof F};function U(s,e,n){Te(s,o=>{o.call(a,e,n,$)})}let ut=function(e){let n=null;if(U(L.beforeSanitizeElements,e,null),ve(e))return M(e),!0;let o=g(e.nodeName);if(U(L.uponSanitizeElement,e,{tagName:o,allowedTags:d}),e.hasChildNodes()&&!ct(e.firstElementChild)&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent)||e.nodeType===re.progressingInstruction||De&&e.nodeType===re.comment&&S(/<[/\w]/g,e.data))return M(e),!0;if(!d[o]||Z[o]){if(!Z[o]&&pt(o)&&(m.tagNameCheck instanceof RegExp&&S(m.tagNameCheck,o)||m.tagNameCheck instanceof Function&&m.tagNameCheck(o)))return!1;if(Ne&&!j[o]){let p=le(e)||e.parentNode,_=Jt(e)||e.childNodes;if(_&&p){let T=_.length;for(let b=T-1;b>=0;--b){let v=Kt(_[b],!0);v.__removalCount=(e.__removalCount||0)+1,p.insertBefore(v,Qt(e))}}}return M(e),!0}return e instanceof z&&!gn(e)||(o==="noscript"||o==="noembed"||o==="noframes")&&S(/<\/no(script|embed|frames)/i,e.innerHTML)?(M(e),!0):(G&&e.nodeType===re.text&&(n=e.textContent,Te([Se,ye,be],p=>{n=ie(n,p," ")}),e.textContent!==n&&(ne(a.removed,{element:e.cloneNode()}),e.textContent=n)),U(L.afterSanitizeElements,e,null),!1)},ft=function(e,n,o){if(Qe&&(n==="id"||n==="name")&&(o in t||o in dn))return!1;if(!(Ce&&!Le[n]&&S(an,n))){if(!(qe&&S(rn,n))){if(!h[n]||Le[n]){if(!(pt(e)&&(m.tagNameCheck instanceof RegExp&&S(m.tagNameCheck,e)||m.tagNameCheck instanceof Function&&m.tagNameCheck(e))&&(m.attributeNameCheck instanceof RegExp&&S(m.attributeNameCheck,n)||m.attributeNameCheck instanceof Function&&m.attributeNameCheck(n))||n==="is"&&m.allowCustomizedBuiltInElements&&(m.tagNameCheck instanceof RegExp&&S(m.tagNameCheck,o)||m.tagNameCheck instanceof Function&&m.tagNameCheck(o))))return!1}else if(!Oe[n]){if(!S(je,ie(o,Ye,""))){if(!((n==="src"||n==="xlink:href"||n==="href")&&e!=="script"&&An(o,"data:")===0&&tt[e])){if(!(Ke&&!S(sn,ie(o,Ye,"")))){if(o)return!1}}}}}}return!0},pt=function(e){return e!=="annotation-xml"&&It(e,ln)},mt=function(e){U(L.beforeSanitizeAttributes,e,null);let{attributes:n}=e;if(!n||ve(e))return;let o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:h,forceKeepAttr:void 0},p=n.length;for(;p--;){let _=n[p],{name:T,namespaceURI:b,value:v}=_,ee=g(T),A=T==="value"?v:Sn(v);if(o.attrName=ee,o.attrValue=A,o.keepAttr=!0,o.forceKeepAttr=void 0,U(L.uponSanitizeAttribute,e,o),A=o.attrValue,Je&&(ee==="id"||ee==="name")&&(ge(T,e),A=cn+A),De&&S(/((--!?|])>)|<\/(style|title)/i,A)){ge(T,e);continue}if(o.forceKeepAttr||(ge(T,e),!o.keepAttr))continue;if(!Ze&&S(/\/>/i,A)){ge(T,e);continue}G&&Te([Se,ye,be],gt=>{A=ie(A,gt," ")});let dt=g(e.nodeName);if(ft(dt,ee,A)){if(E&&typeof se=="object"&&typeof se.getAttributeType=="function"&&!b)switch(se.getAttributeType(dt,ee)){case"TrustedHTML":{A=E.createHTML(A);break}case"TrustedScriptURL":{A=E.createScriptURL(A);break}}try{b?e.setAttributeNS(b,T,A):e.setAttribute(T,A),ve(e)?M(e):xt(a.removed)}catch{}}}U(L.afterSanitizeAttributes,e,null)},hn=function s(e){let n=null,o=lt(e);for(U(L.beforeSanitizeShadowDOM,e,null);n=o.nextNode();)U(L.uponSanitizeShadowNode,n,null),ut(n),mt(n),n.content instanceof u&&s(n.content);U(L.afterSanitizeShadowDOM,e,null)};return a.sanitize=function(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,o=null,p=null,_=null;if(xe=!s,xe&&(s="<!-->"),typeof s!="string"&&!ct(s))if(typeof s.toString=="function"){if(s=s.toString(),typeof s!="string")throw oe("dirty is not a string, aborting")}else throw oe("toString is not a function");if(!a.isSupported)return s;if(we||Me(e),a.removed=[],typeof s=="string"&&(Q=!1),Q){if(s.nodeName){let v=g(s.nodeName);if(!d[v]||Z[v])throw oe("root node is forbidden and cannot be sanitized in-place")}}else if(s instanceof F)n=st("<!---->"),o=n.ownerDocument.importNode(s,!0),o.nodeType===re.element&&o.nodeName==="BODY"||o.nodeName==="HTML"?n=o:n.appendChild(o);else{if(!V&&!G&&!B&&s.indexOf("<")===-1)return E&&ue?E.createHTML(s):s;if(n=st(s),!n)return V?null:ue?K:""}n&&Re&&M(n.firstChild);let T=lt(Q?s:n);for(;p=T.nextNode();)ut(p),mt(p),p.content instanceof u&&hn(p.content);if(Q)return s;if(V){if(ce)for(_=tn.call(n.ownerDocument);n.firstChild;)_.appendChild(n.firstChild);else _=n;return(h.shadowroot||h.shadowrootmode)&&(_=on.call(i,_,!0)),_}let b=B?n.outerHTML:n.innerHTML;return B&&d["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&S(Wt,n.ownerDocument.doctype.name)&&(b="<!DOCTYPE "+n.ownerDocument.doctype.name+`>
`+b),G&&Te([Se,ye,be],v=>{b=ie(b,v," ")}),E&&ue?E.createHTML(b):b},a.setConfig=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Me(s),we=!0},a.clearConfig=function(){$=null,we=!1},a.isValidAttribute=function(s,e,n){$||Me({});let o=g(s),p=g(e);return ft(o,p,n)},a.addHook=function(s,e){typeof e=="function"&&ne(L[s],e)},a.removeHook=function(s){return xt(L[s])},a.removeHooks=function(s){L[s]=[]},a.removeAllHooks=function(){L=Ft()},a}var Vt=Gt();var Pn=["textBoxDiv"],Yt=()=>({filter:"blur(0px)"}),jt=()=>({filter:"blur(5px)"}),jn=(()=>{class l{constructor(t,i,r){this.render=t,this.sanitizer=i,this.dialog=r,this.noteListMasterData=Rt.notes,this.savedSelection=null,this.authentication=!1,this.unlockStatu=!0}ngOnInit(){console.log("SELELECTED",this.selectedNote),this.LoadNoteListData(this.selectedNote)}ngOnChanges(t){t.selectedNote&&(console.log("Current Value",t.selectedNote.currentValue),this.LoadNoteListData(t.selectedNote.currentValue))}LoadNoteListData(t){for(let i of this.noteListMasterData)i.noteId===t&&(console.log("SELECTED ITEM",i),this.noteListData=i);this.noteListData.encryptionStatus&&(this.unlockStatu=!1,this.dialog.open(Ue,{data:{id:this.noteListData.id,type:"authenticate",noteObject:this.noteListData},disableClose:!0}).afterClosed().subscribe(r=>{this.unlockStatu=r.value,console.log("UNLOCK",this.unlockStatu),r.value?(this.authentication=!1,console.log("Correct Password",this.authentication,r.value)):(this.authentication=!0,console.log("Incorrect Password",this.authentication,r.value))}),console.log("Authentication Check",this.authentication)),this.createBackup()}createBackup(){this.initialTitle=this.noteListData.noteTitle,this.initialBody=this.noteListData.noteSubject}openPasswordPopup(){this.dialog.open(Ue,{data:{id:this.noteListData.noteId,type:"password",noteObject:this.noteListData}}).afterClosed().subscribe(i=>{i&&(i.type==="passwordSet"?(this.noteListData.encryptionStatus=!0,this.noteListData.password=i.value):i.type)})}saveSelection(){let t=window.getSelection();this.selectedText=t?.toString(),t&&t.rangeCount>0&&(this.savedSelection=t.getRangeAt(0))}restoreSelection(){let t=window.getSelection();this.savedSelection&&(t?.removeAllRanges(),t?.addRange(this.savedSelection))}changeInNoteTitle(t){this.noteListData.noteTitle=t.target.value}removeStyle(t,i){switch(i.toLowerCase()){case"bold":t.style.fontWeight="";break;case"italic":t.style.fontStyle="";break;case"underline":t.style.textDecoration="";break;default:console.error(`Unsupported option for removing style: ${i}`)}if(t.getAttribute("style")===""){let r=t.parentNode;for(;t.firstChild;)r?.insertBefore(t.firstChild,t);r?.removeChild(t)}}updateText(t){this.restoreSelection(),console.log("Updated text Triggered");let i=document.getElementById("textBoxDiv"),r=window.getSelection();if(console.log("Selected Text",this.selectedText),console.log("Selected Text",r),r&&r.rangeCount>0){let u=r.getRangeAt(0),f=u.commonAncestorContainer.parentElement;if((t==="left"||t==="right"||t==="center")&&(f.nodeName==="DIV"&&(f.style.textAlign=t),f.nodeName==="SPAN")){let F=f.parentElement;F.style.textAlign=t}if(f)if(this.isStyleApplied(f,t))this.removeStyle(f,t);else{let z=this.createStyledNode(t,this.selectedText,f.id==="textBoxDiv");if(console.log("NEW NODE",z),z){u.deleteContents(),u.insertNode(z);let k=document.createRange();k.setStartAfter(z),k.collapse(!0),r.removeAllRanges(),r.addRange(k),i?console.log("Updated InnerHTML:",i.innerHTML):console.log("Element is undefined"),this.updateSelectedNote()}}}}isStyleApplied(t,i){switch(i.toLowerCase()){case"bold":return window.getComputedStyle(t).fontWeight==="700"||t.style.fontWeight==="bold";case"italic":return window.getComputedStyle(t).fontStyle==="italic"||t.style.fontStyle==="italic";case"underline":return window.getComputedStyle(t).textDecoration.includes("underline")||t.style.textDecoration==="underline";default:return!1}}createStyledNode(t,i,r){let u=document.createElement("span");switch(t){case"bold":u.style.fontWeight="bold",u.textContent=i;break;case"italic":u.style.fontStyle="italic",u.textContent=i;break;case"underline":u.style.textDecoration="underline",u.textContent=i;break;default:return console.warn(`Unsupported text manipulation option: ${t}`),null}return u}updateSelectedNote(){let t=document.getElementById("textBoxDiv")?.innerHTML}saveNoteUpdates(){console.log("Updated Note Title",this.noteListData.noteTitle);let t=document.getElementById("textBoxDiv");if(t){let i=Vt.sanitize(t.innerHTML);this.saferContent=this.sanitizer.bypassSecurityTrustHtml(i),this.noteListData.noteSubject=this.saferContent}}static{this.\u0275fac=function(i){return new(i||l)(he(Et),he(wt),he(Nt))}}static{this.\u0275cmp=ht({type:l,selectors:[["app-editor-component"]],viewQuery:function(i,r){if(i&1&&St(Pn,5),i&2){let u;yt(u=bt())&&(r.textBoxDiv=u.first)}},inputs:{selectedNote:"selectedNote"},standalone:!0,features:[Tt,Lt],decls:29,vars:11,consts:[["textBoxDiv",""],[1,"bg-[#28282B]","h-full","p-4","flex","flex-col","gap-2"],[1,"h-[10%]","flex","flex-col"],[1,"text-white"],["type","text",1,"bg-[#bfbcbc]","p-2",3,"change","value","disabled","ngStyle"],[1,"h-[80%]"],[1,"bg-[#28282B]","flex","flex-row","gap-4","items-center","p-[2px]","justify-between"],[1,"flex","flex-row","gap-4","items-center"],[1,"font-semibold","text-[1.5rem]","text-[white]","hover:cursor-pointer",3,"click"],[1,"italic","text-[1.5rem]","text-[white]","hover:cursor-pointer",3,"click"],[1,"underline","text-[1.5rem]","text-[white]","hover:cursor-pointer",3,"click"],[1,"hover:cursor-pointer"],["src","assets/mainLayout/leftAlign.svg","width","20px","height","20px",3,"click"],["src","assets/mainLayout/centerAlign.svg","width","20px","height","20px",3,"click"],["src","assets/mainLayout/rightAlign.svg","width","20px","height","20px",3,"click"],["id","textBoxDiv",1,"block","h-[90%]","bg-[#bfbcbc]","p-2",3,"mouseup","contentEditable","ngStyle","innerHTML","ariaDisabled"],[1,"h-[10%]","p-2","flex","flex-row","justify-end","gap-2"],[1,"bg-[lightblue]","rounded-lg","pl-4","pr-4",3,"click"],[1,"bg-[#2ca9bc]","rounded-lg","pl-4","pr-4","text-white",3,"click"]],template:function(i,r){if(i&1){let u=At();C(0,"div",1)(1,"div",2)(2,"label",3),H(3,"Title"),D(),C(4,"input",4),x("change",function(F){return N(u),O(r.changeInNoteTitle(F))}),D()(),C(5,"div",5)(6,"div",6)(7,"label",3),H(8,"Subject"),D(),C(9,"div",7)(10,"span",8),x("click",function(){return N(u),O(r.updateText("bold"))}),H(11,"B"),D(),C(12,"span",9),x("click",function(){return N(u),O(r.updateText("italic"))}),H(13,"I"),D(),C(14,"span",10),x("click",function(){return N(u),O(r.updateText("underline"))}),H(15,"U"),D(),C(16,"span",11)(17,"img",12),x("click",function(){return N(u),O(r.updateText("left"))}),D()(),C(18,"span",11)(19,"img",13),x("click",function(){return N(u),O(r.updateText("center"))}),D()(),C(20,"span",11)(21,"img",14),x("click",function(){return N(u),O(r.updateText("right"))}),D()()()(),C(22,"div",15,0),x("mouseup",function(){return N(u),O(r.saveSelection())}),D()(),C(24,"div",16)(25,"button",17),x("click",function(){return N(u),O(r.openPasswordPopup())}),H(26,"Add Encryption"),D(),C(27,"button",18),x("click",function(){return N(u),O(r.saveNoteUpdates())}),H(28,"Submit"),D()()()}i&2&&(ke(4),Pe("value",r.noteListData.noteTitle)("disabled",r.authentication)("ngStyle",r.unlockStatu?te(7,Yt):te(8,jt)),ke(18),Pe("contentEditable",r.noteListData.encryptionStatus?r.unlockStatu:!0)("ngStyle",r.unlockStatu?te(9,Yt):te(10,jt))("innerHTML",r.noteListData.noteSubject,_t)("ariaDisabled",r.authentication))},dependencies:[Dt,Ct]})}}return l})();export{jn as EditorComponentComponent};
