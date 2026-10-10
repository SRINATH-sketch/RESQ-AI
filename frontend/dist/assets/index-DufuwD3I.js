function Iu(e,t){for(var r=0;r<t.length;r++){const a=t[r];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(a,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function Mu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tc={exports:{}},Oa={},rc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn=Symbol.for("react.element"),Du=Symbol.for("react.portal"),_u=Symbol.for("react.fragment"),Ou=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),qu=Symbol.for("react.provider"),Bu=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),Fu=Symbol.for("react.suspense"),$u=Symbol.for("react.memo"),Vu=Symbol.for("react.lazy"),Dl=Symbol.iterator;function Wu(e){return e===null||typeof e!="object"?null:(e=Dl&&e[Dl]||e["@@iterator"],typeof e=="function"?e:null)}var nc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ac=Object.assign,ic={};function zr(e,t,r){this.props=e,this.context=t,this.refs=ic,this.updater=r||nc}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sc(){}sc.prototype=zr.prototype;function Ls(e,t,r){this.props=e,this.context=t,this.refs=ic,this.updater=r||nc}var Is=Ls.prototype=new sc;Is.constructor=Ls;ac(Is,zr.prototype);Is.isPureReactComponent=!0;var _l=Array.isArray,lc=Object.prototype.hasOwnProperty,Ms={current:null},oc={key:!0,ref:!0,__self:!0,__source:!0};function cc(e,t,r){var a,i={},s=null,l=null;if(t!=null)for(a in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)lc.call(t,a)&&!oc.hasOwnProperty(a)&&(i[a]=t[a]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in o=e.defaultProps,o)i[a]===void 0&&(i[a]=o[a]);return{$$typeof:zn,type:e,key:s,ref:l,props:i,_owner:Ms.current}}function Gu(e,t){return{$$typeof:zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ds(e){return typeof e=="object"&&e!==null&&e.$$typeof===zn}function Qu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ol=/\/+/g;function oi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qu(""+e.key):t.toString(36)}function ea(e,t,r,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case zn:case Du:l=!0}}if(l)return l=e,i=i(l),e=a===""?"."+oi(l,0):a,_l(i)?(r="",e!=null&&(r=e.replace(Ol,"$&/")+"/"),ea(i,t,r,"",function(d){return d})):i!=null&&(Ds(i)&&(i=Gu(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ol,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=a===""?".":a+":",_l(e))for(var o=0;o<e.length;o++){s=e[o];var c=a+oi(s,o);l+=ea(s,t,r,c,i)}else if(c=Wu(e),typeof c=="function")for(e=c.call(e),o=0;!(s=e.next()).done;)s=s.value,c=a+oi(s,o++),l+=ea(s,t,r,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function _n(e,t,r){if(e==null)return e;var a=[],i=0;return ea(e,a,"","",function(s){return t.call(r,s,i++)}),a}function Yu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},ta={transition:null},Ku={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:ta,ReactCurrentOwner:Ms};function dc(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:_n,forEach:function(e,t,r){_n(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return _n(e,function(){t++}),t},toArray:function(e){return _n(e,function(t){return t})||[]},only:function(e){if(!Ds(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=zr;L.Fragment=_u;L.Profiler=Uu;L.PureComponent=Ls;L.StrictMode=Ou;L.Suspense=Fu;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ku;L.act=dc;L.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=ac({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Ms.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)lc.call(t,c)&&!oc.hasOwnProperty(c)&&(a[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];a.children=o}return{$$typeof:zn,type:e.type,key:i,ref:s,props:a,_owner:l}};L.createContext=function(e){return e={$$typeof:Bu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qu,_context:e},e.Consumer=e};L.createElement=cc;L.createFactory=function(e){var t=cc.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Hu,render:e}};L.isValidElement=Ds;L.lazy=function(e){return{$$typeof:Vu,_payload:{_status:-1,_result:e},_init:Yu}};L.memo=function(e,t){return{$$typeof:$u,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=ta.transition;ta.transition={};try{e()}finally{ta.transition=t}};L.unstable_act=dc;L.useCallback=function(e,t){return he.current.useCallback(e,t)};L.useContext=function(e){return he.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return he.current.useDeferredValue(e)};L.useEffect=function(e,t){return he.current.useEffect(e,t)};L.useId=function(){return he.current.useId()};L.useImperativeHandle=function(e,t,r){return he.current.useImperativeHandle(e,t,r)};L.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return he.current.useMemo(e,t)};L.useReducer=function(e,t,r){return he.current.useReducer(e,t,r)};L.useRef=function(e){return he.current.useRef(e)};L.useState=function(e){return he.current.useState(e)};L.useSyncExternalStore=function(e,t,r){return he.current.useSyncExternalStore(e,t,r)};L.useTransition=function(){return he.current.useTransition()};L.version="18.3.1";rc.exports=L;var y=rc.exports;const uc=Mu(y),Zu=Iu({__proto__:null,default:uc},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu=y,Ju=Symbol.for("react.element"),ep=Symbol.for("react.fragment"),tp=Object.prototype.hasOwnProperty,rp=Xu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,np={key:!0,ref:!0,__self:!0,__source:!0};function pc(e,t,r){var a,i={},s=null,l=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(a in t)tp.call(t,a)&&!np.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:Ju,type:e,key:s,ref:l,props:i,_owner:rp.current}}Oa.Fragment=ep;Oa.jsx=pc;Oa.jsxs=pc;tc.exports=Oa;var n=tc.exports,Mi={},fc={exports:{}},Ae={},mc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,P){var R=E.length;E.push(P);e:for(;0<R;){var W=R-1>>>1,re=E[W];if(0<i(re,P))E[W]=P,E[R]=re,R=W;else break e}}function r(E){return E.length===0?null:E[0]}function a(E){if(E.length===0)return null;var P=E[0],R=E.pop();if(R!==P){E[0]=R;e:for(var W=0,re=E.length,Mn=re>>>1;W<Mn;){var Ut=2*(W+1)-1,li=E[Ut],qt=Ut+1,Dn=E[qt];if(0>i(li,R))qt<re&&0>i(Dn,li)?(E[W]=Dn,E[qt]=R,W=qt):(E[W]=li,E[Ut]=R,W=Ut);else if(qt<re&&0>i(Dn,R))E[W]=Dn,E[qt]=R,W=qt;else break e}}return P}function i(E,P){var R=E.sortIndex-P.sortIndex;return R!==0?R:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],d=[],m=1,f=null,g=3,x=!1,j=!1,v=!1,N=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var P=r(d);P!==null;){if(P.callback===null)a(d);else if(P.startTime<=E)a(d),P.sortIndex=P.expirationTime,t(c,P);else break;P=r(d)}}function b(E){if(v=!1,h(E),!j)if(r(c)!==null)j=!0,ii(k);else{var P=r(d);P!==null&&si(b,P.startTime-E)}}function k(E,P){j=!1,v&&(v=!1,u(T),T=-1),x=!0;var R=g;try{for(h(P),f=r(c);f!==null&&(!(f.expirationTime>P)||E&&!Oe());){var W=f.callback;if(typeof W=="function"){f.callback=null,g=f.priorityLevel;var re=W(f.expirationTime<=P);P=e.unstable_now(),typeof re=="function"?f.callback=re:f===r(c)&&a(c),h(P)}else a(c);f=r(c)}if(f!==null)var Mn=!0;else{var Ut=r(d);Ut!==null&&si(b,Ut.startTime-P),Mn=!1}return Mn}finally{f=null,g=R,x=!1}}var C=!1,z=null,T=-1,V=5,I=-1;function Oe(){return!(e.unstable_now()-I<V)}function _r(){if(z!==null){var E=e.unstable_now();I=E;var P=!0;try{P=z(!0,E)}finally{P?Or():(C=!1,z=null)}}else C=!1}var Or;if(typeof p=="function")Or=function(){p(_r)};else if(typeof MessageChannel<"u"){var Ml=new MessageChannel,Lu=Ml.port2;Ml.port1.onmessage=_r,Or=function(){Lu.postMessage(null)}}else Or=function(){N(_r,0)};function ii(E){z=E,C||(C=!0,Or())}function si(E,P){T=N(function(){E(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){j||x||(j=!0,ii(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var R=g;g=P;try{return E()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=g;g=E;try{return P()}finally{g=R}},e.unstable_scheduleCallback=function(E,P,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,E){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=R+re,E={id:m++,callback:P,priorityLevel:E,startTime:R,expirationTime:re,sortIndex:-1},R>W?(E.sortIndex=R,t(d,E),r(c)===null&&E===r(d)&&(v?(u(T),T=-1):v=!0,si(b,R-W))):(E.sortIndex=re,t(c,E),j||x||(j=!0,ii(k))),E},e.unstable_shouldYield=Oe,e.unstable_wrapCallback=function(E){var P=g;return function(){var R=g;g=P;try{return E.apply(this,arguments)}finally{g=R}}}})(hc);mc.exports=hc;var ap=mc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip=y,Te=ap;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gc=new Set,cn={};function Jt(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(cn[e]=t,e=0;e<t.length;e++)gc.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Di=Object.prototype.hasOwnProperty,sp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ul={},ql={};function lp(e){return Di.call(ql,e)?!0:Di.call(Ul,e)?!1:sp.test(e)?ql[e]=!0:(Ul[e]=!0,!1)}function op(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cp(e,t,r,a){if(t===null||typeof t>"u"||op(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,r,a,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var _s=/[\-:]([a-z])/g;function Os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_s,Os);le[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_s,Os);le[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_s,Os);le[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Us(e,t,r,a){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cp(t,r,i,a)&&(r=null),a||i===null?lp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,a=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var dt=ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,On=Symbol.for("react.element"),rr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),qs=Symbol.for("react.strict_mode"),_i=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),vc=Symbol.for("react.context"),Bs=Symbol.for("react.forward_ref"),Oi=Symbol.for("react.suspense"),Ui=Symbol.for("react.suspense_list"),Hs=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),yc=Symbol.for("react.offscreen"),Bl=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=Bl&&e[Bl]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,ci;function Yr(e){if(ci===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ci=t&&t[1]||""}return`
`+ci+e}var di=!1;function ui(e,t){if(!e||di)return"";di=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var a=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){a=d}e.call(t.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=a.stack.split(`
`),l=i.length-1,o=s.length-1;1<=l&&0<=o&&i[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==s[o]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{di=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Yr(e):""}function dp(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=ui(e.type,!1),e;case 11:return e=ui(e.type.render,!1),e;case 1:return e=ui(e.type,!0),e;default:return""}}function qi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case rr:return"Portal";case _i:return"Profiler";case qs:return"StrictMode";case Oi:return"Suspense";case Ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vc:return(e.displayName||"Context")+".Consumer";case xc:return(e._context.displayName||"Context")+".Provider";case Bs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hs:return t=e.displayName||null,t!==null?t:qi(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return qi(e(t))}catch{}}return null}function up(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qi(t);case 8:return t===qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pp(e){var t=bc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){a=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Un(e){e._valueTracker||(e._valueTracker=pp(e))}function jc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=bc(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bi(e,t){var r=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Hl(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=Pt(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nc(e,t){t=t.checked,t!=null&&Us(e,"checked",t,!1)}function Hi(e,t){Nc(e,t);var r=Pt(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fi(e,t.type,r):t.hasOwnProperty("defaultValue")&&Fi(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Fi(e,t,r){(t!=="number"||pa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Kr=Array.isArray;function mr(e,t,r,a){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&a&&(e[r].defaultSelected=!0)}else{for(r=""+Pt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $i(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $l(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(w(92));if(Kr(r)){if(1<r.length)throw Error(w(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Pt(r)}}function wc(e,t){var r=Pt(t.value),a=Pt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function Vl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qn,Sc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qn=qn||document.createElement("div"),qn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fp=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(e){fp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jr[t]=Jr[e]})});function Ec(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Jr.hasOwnProperty(e)&&Jr[e]?(""+t).trim():t+"px"}function Cc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,i=Ec(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,i):e[r]=i}}var mp=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wi(e,t){if(t){if(mp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Gi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=null;function Fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yi=null,hr=null,gr=null;function Wl(e){if(e=Pn(e)){if(typeof Yi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Fa(t),Yi(e.stateNode,e.type,t))}}function zc(e){hr?gr?gr.push(e):gr=[e]:hr=e}function Tc(){if(hr){var e=hr,t=gr;if(gr=hr=null,Wl(e),t)for(e=0;e<t.length;e++)Wl(t[e])}}function Ac(e,t){return e(t)}function Pc(){}var pi=!1;function Rc(e,t,r){if(pi)return e(t,r);pi=!0;try{return Ac(e,t,r)}finally{pi=!1,(hr!==null||gr!==null)&&(Pc(),Tc())}}function un(e,t){var r=e.stateNode;if(r===null)return null;var a=Fa(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(w(231,t,typeof r));return r}var Ki=!1;if(st)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){Ki=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Ki=!1}function hp(e,t,r,a,i,s,l,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(m){this.onError(m)}}var en=!1,fa=null,ma=!1,Zi=null,gp={onError:function(e){en=!0,fa=e}};function xp(e,t,r,a,i,s,l,o,c){en=!1,fa=null,hp.apply(gp,arguments)}function vp(e,t,r,a,i,s,l,o,c){if(xp.apply(this,arguments),en){if(en){var d=fa;en=!1,fa=null}else throw Error(w(198));ma||(ma=!0,Zi=d)}}function er(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gl(e){if(er(e)!==e)throw Error(w(188))}function yp(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(w(188));return t!==e?null:e}for(var r=e,a=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){r=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Gl(i),e;if(s===a)return Gl(i),t;s=s.sibling}throw Error(w(188))}if(r.return!==a.return)r=i,a=s;else{for(var l=!1,o=i.child;o;){if(o===r){l=!0,r=i,a=s;break}if(o===a){l=!0,a=i,r=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===r){l=!0,r=s,a=i;break}if(o===a){l=!0,a=s,r=i;break}o=o.sibling}if(!l)throw Error(w(189))}}if(r.alternate!==a)throw Error(w(190))}if(r.tag!==3)throw Error(w(188));return r.stateNode.current===r?e:t}function Ic(e){return e=yp(e),e!==null?Mc(e):null}function Mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mc(e);if(t!==null)return t;e=e.sibling}return null}var Dc=Te.unstable_scheduleCallback,Ql=Te.unstable_cancelCallback,bp=Te.unstable_shouldYield,jp=Te.unstable_requestPaint,G=Te.unstable_now,Np=Te.unstable_getCurrentPriorityLevel,$s=Te.unstable_ImmediatePriority,_c=Te.unstable_UserBlockingPriority,ha=Te.unstable_NormalPriority,wp=Te.unstable_LowPriority,Oc=Te.unstable_IdlePriority,Ua=null,Je=null;function kp(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Cp,Sp=Math.log,Ep=Math.LN2;function Cp(e){return e>>>=0,e===0?32:31-(Sp(e)/Ep|0)|0}var Bn=64,Hn=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ga(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,l=r&268435455;if(l!==0){var o=l&~i;o!==0?a=Zr(o):(s&=l,s!==0&&(a=Zr(s)))}else l=r&~i,l!==0?a=Zr(l):s!==0&&(a=Zr(s));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(a&4&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Fe(t),i=1<<r,a|=e[r],t&=~i;return a}function zp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tp(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Fe(s),o=1<<l,c=i[l];c===-1?(!(o&r)||o&a)&&(i[l]=zp(o,t)):c<=t&&(e.expiredLanes|=o),s&=~o}}function Xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uc(){var e=Bn;return Bn<<=1,!(Bn&4194240)&&(Bn=64),e}function fi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Tn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=r}function Ap(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Fe(r),s=1<<i;t[i]=0,a[i]=-1,e[i]=-1,r&=~s}}function Vs(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Fe(r),i=1<<a;i&t|e[a]&t&&(e[a]|=t),r&=~i}}var D=0;function qc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bc,Ws,Hc,Fc,$c,Ji=!1,Fn=[],Nt=null,wt=null,kt=null,pn=new Map,fn=new Map,gt=[],Pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yl(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(t.pointerId)}}function Br(e,t,r,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Pn(t),t!==null&&Ws(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rp(e,t,r,a,i){switch(t){case"focusin":return Nt=Br(Nt,e,t,r,a,i),!0;case"dragenter":return wt=Br(wt,e,t,r,a,i),!0;case"mouseover":return kt=Br(kt,e,t,r,a,i),!0;case"pointerover":var s=i.pointerId;return pn.set(s,Br(pn.get(s)||null,e,t,r,a,i)),!0;case"gotpointercapture":return s=i.pointerId,fn.set(s,Br(fn.get(s)||null,e,t,r,a,i)),!0}return!1}function Vc(e){var t=Ft(e.target);if(t!==null){var r=er(t);if(r!==null){if(t=r.tag,t===13){if(t=Lc(r),t!==null){e.blockedOn=t,$c(e.priority,function(){Hc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ra(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);Qi=a,r.target.dispatchEvent(a),Qi=null}else return t=Pn(r),t!==null&&Ws(t),e.blockedOn=r,!1;t.shift()}return!0}function Kl(e,t,r){ra(e)&&r.delete(t)}function Lp(){Ji=!1,Nt!==null&&ra(Nt)&&(Nt=null),wt!==null&&ra(wt)&&(wt=null),kt!==null&&ra(kt)&&(kt=null),pn.forEach(Kl),fn.forEach(Kl)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ji||(Ji=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Lp)))}function mn(e){function t(i){return Hr(i,e)}if(0<Fn.length){Hr(Fn[0],e);for(var r=1;r<Fn.length;r++){var a=Fn[r];a.blockedOn===e&&(a.blockedOn=null)}}for(Nt!==null&&Hr(Nt,e),wt!==null&&Hr(wt,e),kt!==null&&Hr(kt,e),pn.forEach(t),fn.forEach(t),r=0;r<gt.length;r++)a=gt[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<gt.length&&(r=gt[0],r.blockedOn===null);)Vc(r),r.blockedOn===null&&gt.shift()}var xr=dt.ReactCurrentBatchConfig,xa=!0;function Ip(e,t,r,a){var i=D,s=xr.transition;xr.transition=null;try{D=1,Gs(e,t,r,a)}finally{D=i,xr.transition=s}}function Mp(e,t,r,a){var i=D,s=xr.transition;xr.transition=null;try{D=4,Gs(e,t,r,a)}finally{D=i,xr.transition=s}}function Gs(e,t,r,a){if(xa){var i=es(e,t,r,a);if(i===null)wi(e,t,a,va,r),Yl(e,a);else if(Rp(i,e,t,r,a))a.stopPropagation();else if(Yl(e,a),t&4&&-1<Pp.indexOf(e)){for(;i!==null;){var s=Pn(i);if(s!==null&&Bc(s),s=es(e,t,r,a),s===null&&wi(e,t,a,va,r),s===i)break;i=s}i!==null&&a.stopPropagation()}else wi(e,t,a,null,r)}}var va=null;function es(e,t,r,a){if(va=null,e=Fs(a),e=Ft(e),e!==null)if(t=er(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Lc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return va=e,null}function Wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Np()){case $s:return 1;case _c:return 4;case ha:case wp:return 16;case Oc:return 536870912;default:return 16}default:return 16}}var vt=null,Qs=null,na=null;function Gc(){if(na)return na;var e,t=Qs,r=t.length,a,i="value"in vt?vt.value:vt.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(a=1;a<=l&&t[r-a]===i[s-a];a++);return na=i.slice(e,1<a?1-a:void 0)}function aa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $n(){return!0}function Zl(){return!1}function Pe(e){function t(r,a,i,s,l){this._reactName=r,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$n:Zl,this.isPropagationStopped=Zl,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=Pe(Tr),An=F({},Tr,{view:0,detail:0}),Dp=Pe(An),mi,hi,Fr,qa=F({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(mi=e.screenX-Fr.screenX,hi=e.screenY-Fr.screenY):hi=mi=0,Fr=e),mi)},movementY:function(e){return"movementY"in e?e.movementY:hi}}),Xl=Pe(qa),_p=F({},qa,{dataTransfer:0}),Op=Pe(_p),Up=F({},An,{relatedTarget:0}),gi=Pe(Up),qp=F({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bp=Pe(qp),Hp=F({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fp=Pe(Hp),$p=F({},Tr,{data:0}),Jl=Pe($p),Vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gp[e])?!!t[e]:!1}function Ks(){return Qp}var Yp=F({},An,{key:function(e){if(e.key){var t=Vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=aa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(e){return e.type==="keypress"?aa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?aa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=Pe(Yp),Zp=F({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eo=Pe(Zp),Xp=F({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),Jp=Pe(Xp),ef=F({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tf=Pe(ef),rf=F({},qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nf=Pe(rf),af=[9,13,27,32],Zs=st&&"CompositionEvent"in window,tn=null;st&&"documentMode"in document&&(tn=document.documentMode);var sf=st&&"TextEvent"in window&&!tn,Qc=st&&(!Zs||tn&&8<tn&&11>=tn),to=" ",ro=!1;function Yc(e,t){switch(e){case"keyup":return af.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function lf(e,t){switch(e){case"compositionend":return Kc(t);case"keypress":return t.which!==32?null:(ro=!0,to);case"textInput":return e=t.data,e===to&&ro?null:e;default:return null}}function of(e,t){if(ar)return e==="compositionend"||!Zs&&Yc(e,t)?(e=Gc(),na=Qs=vt=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qc&&t.locale!=="ko"?null:t.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cf[e.type]:t==="textarea"}function Zc(e,t,r,a){zc(a),t=ya(t,"onChange"),0<t.length&&(r=new Ys("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var rn=null,hn=null;function df(e){od(e,0)}function Ba(e){var t=lr(e);if(jc(t))return e}function uf(e,t){if(e==="change")return t}var Xc=!1;if(st){var xi;if(st){var vi="oninput"in document;if(!vi){var ao=document.createElement("div");ao.setAttribute("oninput","return;"),vi=typeof ao.oninput=="function"}xi=vi}else xi=!1;Xc=xi&&(!document.documentMode||9<document.documentMode)}function io(){rn&&(rn.detachEvent("onpropertychange",Jc),hn=rn=null)}function Jc(e){if(e.propertyName==="value"&&Ba(hn)){var t=[];Zc(t,hn,e,Fs(e)),Rc(df,t)}}function pf(e,t,r){e==="focusin"?(io(),rn=t,hn=r,rn.attachEvent("onpropertychange",Jc)):e==="focusout"&&io()}function ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ba(hn)}function mf(e,t){if(e==="click")return Ba(t)}function hf(e,t){if(e==="input"||e==="change")return Ba(t)}function gf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:gf;function gn(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var i=r[a];if(!Di.call(t,i)||!We(e[i],t[i]))return!1}return!0}function so(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lo(e,t){var r=so(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=so(r)}}function ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function td(){for(var e=window,t=pa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=pa(e.document)}return t}function Xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xf(e){var t=td(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ed(r.ownerDocument.documentElement,r)){if(a!==null&&Xs(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!e.extend&&s>a&&(i=a,a=s,s=i),i=lo(r,s);var l=lo(r,a);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>a?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vf=st&&"documentMode"in document&&11>=document.documentMode,ir=null,ts=null,nn=null,rs=!1;function oo(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;rs||ir==null||ir!==pa(a)||(a=ir,"selectionStart"in a&&Xs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),nn&&gn(nn,a)||(nn=a,a=ya(ts,"onSelect"),0<a.length&&(t=new Ys("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=ir)))}function Vn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var sr={animationend:Vn("Animation","AnimationEnd"),animationiteration:Vn("Animation","AnimationIteration"),animationstart:Vn("Animation","AnimationStart"),transitionend:Vn("Transition","TransitionEnd")},yi={},rd={};st&&(rd=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Ha(e){if(yi[e])return yi[e];if(!sr[e])return e;var t=sr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in rd)return yi[e]=t[r];return e}var nd=Ha("animationend"),ad=Ha("animationiteration"),id=Ha("animationstart"),sd=Ha("transitionend"),ld=new Map,co="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){ld.set(e,t),Jt(t,[e])}for(var bi=0;bi<co.length;bi++){var ji=co[bi],yf=ji.toLowerCase(),bf=ji[0].toUpperCase()+ji.slice(1);Lt(yf,"on"+bf)}Lt(nd,"onAnimationEnd");Lt(ad,"onAnimationIteration");Lt(id,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(sd,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function uo(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,vp(a,t,void 0,e),e.currentTarget=null}function od(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var l=a.length-1;0<=l;l--){var o=a[l],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==s&&i.isPropagationStopped())break e;uo(i,o,d),s=c}else for(l=0;l<a.length;l++){if(o=a[l],c=o.instance,d=o.currentTarget,o=o.listener,c!==s&&i.isPropagationStopped())break e;uo(i,o,d),s=c}}}if(ma)throw e=Zi,ma=!1,Zi=null,e}function O(e,t){var r=t[ls];r===void 0&&(r=t[ls]=new Set);var a=e+"__bubble";r.has(a)||(cd(t,e,2,!1),r.add(a))}function Ni(e,t,r){var a=0;t&&(a|=4),cd(r,e,a,t)}var Wn="_reactListening"+Math.random().toString(36).slice(2);function xn(e){if(!e[Wn]){e[Wn]=!0,gc.forEach(function(r){r!=="selectionchange"&&(jf.has(r)||Ni(r,!1,e),Ni(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wn]||(t[Wn]=!0,Ni("selectionchange",!1,t))}}function cd(e,t,r,a){switch(Wc(t)){case 1:var i=Ip;break;case 4:i=Mp;break;default:i=Gs}r=i.bind(null,t,r,e),i=void 0,!Ki||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function wi(e,t,r,a,i){var s=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var o=a.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=a.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=Ft(o),l===null)return;if(c=l.tag,c===5||c===6){a=s=l;continue e}o=o.parentNode}}a=a.return}Rc(function(){var d=s,m=Fs(r),f=[];e:{var g=ld.get(e);if(g!==void 0){var x=Ys,j=e;switch(e){case"keypress":if(aa(r)===0)break e;case"keydown":case"keyup":x=Kp;break;case"focusin":j="focus",x=gi;break;case"focusout":j="blur",x=gi;break;case"beforeblur":case"afterblur":x=gi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Jp;break;case nd:case ad:case id:x=Bp;break;case sd:x=tf;break;case"scroll":x=Dp;break;case"wheel":x=nf;break;case"copy":case"cut":case"paste":x=Fp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=eo}var v=(t&4)!==0,N=!v&&e==="scroll",u=v?g!==null?g+"Capture":null:g;v=[];for(var p=d,h;p!==null;){h=p;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,u!==null&&(b=un(p,u),b!=null&&v.push(vn(p,b,h)))),N)break;p=p.return}0<v.length&&(g=new x(g,j,null,r,m),f.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&r!==Qi&&(j=r.relatedTarget||r.fromElement)&&(Ft(j)||j[lt]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(j=r.relatedTarget||r.toElement,x=d,j=j?Ft(j):null,j!==null&&(N=er(j),j!==N||j.tag!==5&&j.tag!==6)&&(j=null)):(x=null,j=d),x!==j)){if(v=Xl,b="onMouseLeave",u="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=eo,b="onPointerLeave",u="onPointerEnter",p="pointer"),N=x==null?g:lr(x),h=j==null?g:lr(j),g=new v(b,p+"leave",x,r,m),g.target=N,g.relatedTarget=h,b=null,Ft(m)===d&&(v=new v(u,p+"enter",j,r,m),v.target=h,v.relatedTarget=N,b=v),N=b,x&&j)t:{for(v=x,u=j,p=0,h=v;h;h=tr(h))p++;for(h=0,b=u;b;b=tr(b))h++;for(;0<p-h;)v=tr(v),p--;for(;0<h-p;)u=tr(u),h--;for(;p--;){if(v===u||u!==null&&v===u.alternate)break t;v=tr(v),u=tr(u)}v=null}else v=null;x!==null&&po(f,g,x,v,!1),j!==null&&N!==null&&po(f,N,j,v,!0)}}e:{if(g=d?lr(d):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var k=uf;else if(no(g))if(Xc)k=hf;else{k=ff;var C=pf}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=mf);if(k&&(k=k(e,d))){Zc(f,k,r,m);break e}C&&C(e,g,d),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Fi(g,"number",g.value)}switch(C=d?lr(d):window,e){case"focusin":(no(C)||C.contentEditable==="true")&&(ir=C,ts=d,nn=null);break;case"focusout":nn=ts=ir=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,oo(f,r,m);break;case"selectionchange":if(vf)break;case"keydown":case"keyup":oo(f,r,m)}var z;if(Zs)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ar?Yc(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(Qc&&r.locale!=="ko"&&(ar||T!=="onCompositionStart"?T==="onCompositionEnd"&&ar&&(z=Gc()):(vt=m,Qs="value"in vt?vt.value:vt.textContent,ar=!0)),C=ya(d,T),0<C.length&&(T=new Jl(T,e,null,r,m),f.push({event:T,listeners:C}),z?T.data=z:(z=Kc(r),z!==null&&(T.data=z)))),(z=sf?lf(e,r):of(e,r))&&(d=ya(d,"onBeforeInput"),0<d.length&&(m=new Jl("onBeforeInput","beforeinput",null,r,m),f.push({event:m,listeners:d}),m.data=z))}od(f,t)})}function vn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ya(e,t){for(var r=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=un(e,r),s!=null&&a.unshift(vn(e,s,i)),s=un(e,t),s!=null&&a.push(vn(e,s,i))),e=e.return}return a}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function po(e,t,r,a,i){for(var s=t._reactName,l=[];r!==null&&r!==a;){var o=r,c=o.alternate,d=o.stateNode;if(c!==null&&c===a)break;o.tag===5&&d!==null&&(o=d,i?(c=un(r,s),c!=null&&l.unshift(vn(r,c,o))):i||(c=un(r,s),c!=null&&l.push(vn(r,c,o)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Nf=/\r\n?/g,wf=/\u0000|\uFFFD/g;function fo(e){return(typeof e=="string"?e:""+e).replace(Nf,`
`).replace(wf,"")}function Gn(e,t,r){if(t=fo(t),fo(e)!==t&&r)throw Error(w(425))}function ba(){}var ns=null,as=null;function is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=typeof setTimeout=="function"?setTimeout:void 0,kf=typeof clearTimeout=="function"?clearTimeout:void 0,mo=typeof Promise=="function"?Promise:void 0,Sf=typeof queueMicrotask=="function"?queueMicrotask:typeof mo<"u"?function(e){return mo.resolve(null).then(e).catch(Ef)}:ss;function Ef(e){setTimeout(function(){throw e})}function ki(e,t){var r=t,a=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(a===0){e.removeChild(i),mn(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=i}while(r);mn(t)}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ho(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Ar,yn="__reactProps$"+Ar,lt="__reactContainer$"+Ar,ls="__reactEvents$"+Ar,Cf="__reactListeners$"+Ar,zf="__reactHandles$"+Ar;function Ft(e){var t=e[Xe];if(t)return t;for(var r=e.parentNode;r;){if(t=r[lt]||r[Xe]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ho(e);e!==null;){if(r=e[Xe])return r;e=ho(e)}return t}e=r,r=e.parentNode}return null}function Pn(e){return e=e[Xe]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Fa(e){return e[yn]||null}var os=[],or=-1;function It(e){return{current:e}}function U(e){0>or||(e.current=os[or],os[or]=null,or--)}function _(e,t){or++,os[or]=e.current,e.current=t}var Rt={},ue=It(Rt),je=It(!1),Qt=Rt;function jr(e,t){var r=e.type.contextTypes;if(!r)return Rt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function ja(){U(je),U(ue)}function go(e,t,r){if(ue.current!==Rt)throw Error(w(168));_(ue,t),_(je,r)}function dd(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(w(108,up(e)||"Unknown",i));return F({},r,a)}function Na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,Qt=ue.current,_(ue,e),_(je,je.current),!0}function xo(e,t,r){var a=e.stateNode;if(!a)throw Error(w(169));r?(e=dd(e,t,Qt),a.__reactInternalMemoizedMergedChildContext=e,U(je),U(ue),_(ue,e)):U(je),_(je,r)}var rt=null,$a=!1,Si=!1;function ud(e){rt===null?rt=[e]:rt.push(e)}function Tf(e){$a=!0,ud(e)}function Mt(){if(!Si&&rt!==null){Si=!0;var e=0,t=D;try{var r=rt;for(D=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}rt=null,$a=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),Dc($s,Mt),i}finally{D=t,Si=!1}}return null}var cr=[],dr=0,wa=null,ka=0,Re=[],Le=0,Yt=null,nt=1,at="";function Bt(e,t){cr[dr++]=ka,cr[dr++]=wa,wa=e,ka=t}function pd(e,t,r){Re[Le++]=nt,Re[Le++]=at,Re[Le++]=Yt,Yt=e;var a=nt;e=at;var i=32-Fe(a)-1;a&=~(1<<i),r+=1;var s=32-Fe(t)+i;if(30<s){var l=i-i%5;s=(a&(1<<l)-1).toString(32),a>>=l,i-=l,nt=1<<32-Fe(t)+i|r<<i|a,at=s+e}else nt=1<<s|r<<i|a,at=e}function Js(e){e.return!==null&&(Bt(e,1),pd(e,1,0))}function el(e){for(;e===wa;)wa=cr[--dr],cr[dr]=null,ka=cr[--dr],cr[dr]=null;for(;e===Yt;)Yt=Re[--Le],Re[Le]=null,at=Re[--Le],Re[Le]=null,nt=Re[--Le],Re[Le]=null}var ze=null,Ee=null,q=!1,He=null;function fd(e,t){var r=Ie(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function vo(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ee=St(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Yt!==null?{id:nt,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ie(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ze=e,Ee=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ds(e){if(q){var t=Ee;if(t){var r=t;if(!vo(e,t)){if(cs(e))throw Error(w(418));t=St(r.nextSibling);var a=ze;t&&vo(e,t)?fd(a,r):(e.flags=e.flags&-4097|2,q=!1,ze=e)}}else{if(cs(e))throw Error(w(418));e.flags=e.flags&-4097|2,q=!1,ze=e}}}function yo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Qn(e){if(e!==ze)return!1;if(!q)return yo(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!is(e.type,e.memoizedProps)),t&&(t=Ee)){if(cs(e))throw md(),Error(w(418));for(;t;)fd(e,t),t=St(t.nextSibling)}if(yo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ee=St(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=ze?St(e.stateNode.nextSibling):null;return!0}function md(){for(var e=Ee;e;)e=St(e.nextSibling)}function Nr(){Ee=ze=null,q=!1}function tl(e){He===null?He=[e]:He.push(e)}var Af=dt.ReactCurrentBatchConfig;function $r(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(w(309));var a=r.stateNode}if(!a)throw Error(w(147,e));var i=a,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var o=i.refs;l===null?delete o[s]:o[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(w(284));if(!r._owner)throw Error(w(290,e))}return e}function Yn(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bo(e){var t=e._init;return t(e._payload)}function hd(e){function t(u,p){if(e){var h=u.deletions;h===null?(u.deletions=[p],u.flags|=16):h.push(p)}}function r(u,p){if(!e)return null;for(;p!==null;)t(u,p),p=p.sibling;return null}function a(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function i(u,p){return u=Tt(u,p),u.index=0,u.sibling=null,u}function s(u,p,h){return u.index=h,e?(h=u.alternate,h!==null?(h=h.index,h<p?(u.flags|=2,p):h):(u.flags|=2,p)):(u.flags|=1048576,p)}function l(u){return e&&u.alternate===null&&(u.flags|=2),u}function o(u,p,h,b){return p===null||p.tag!==6?(p=Ri(h,u.mode,b),p.return=u,p):(p=i(p,h),p.return=u,p)}function c(u,p,h,b){var k=h.type;return k===nr?m(u,p,h.props.children,b,h.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===mt&&bo(k)===p.type)?(b=i(p,h.props),b.ref=$r(u,p,h),b.return=u,b):(b=ua(h.type,h.key,h.props,null,u.mode,b),b.ref=$r(u,p,h),b.return=u,b)}function d(u,p,h,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Li(h,u.mode,b),p.return=u,p):(p=i(p,h.children||[]),p.return=u,p)}function m(u,p,h,b,k){return p===null||p.tag!==7?(p=Gt(h,u.mode,b,k),p.return=u,p):(p=i(p,h),p.return=u,p)}function f(u,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ri(""+p,u.mode,h),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case On:return h=ua(p.type,p.key,p.props,null,u.mode,h),h.ref=$r(u,null,p),h.return=u,h;case rr:return p=Li(p,u.mode,h),p.return=u,p;case mt:var b=p._init;return f(u,b(p._payload),h)}if(Kr(p)||Ur(p))return p=Gt(p,u.mode,h,null),p.return=u,p;Yn(u,p)}return null}function g(u,p,h,b){var k=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:o(u,p,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case On:return h.key===k?c(u,p,h,b):null;case rr:return h.key===k?d(u,p,h,b):null;case mt:return k=h._init,g(u,p,k(h._payload),b)}if(Kr(h)||Ur(h))return k!==null?null:m(u,p,h,b,null);Yn(u,h)}return null}function x(u,p,h,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return u=u.get(h)||null,o(p,u,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case On:return u=u.get(b.key===null?h:b.key)||null,c(p,u,b,k);case rr:return u=u.get(b.key===null?h:b.key)||null,d(p,u,b,k);case mt:var C=b._init;return x(u,p,h,C(b._payload),k)}if(Kr(b)||Ur(b))return u=u.get(h)||null,m(p,u,b,k,null);Yn(p,b)}return null}function j(u,p,h,b){for(var k=null,C=null,z=p,T=p=0,V=null;z!==null&&T<h.length;T++){z.index>T?(V=z,z=null):V=z.sibling;var I=g(u,z,h[T],b);if(I===null){z===null&&(z=V);break}e&&z&&I.alternate===null&&t(u,z),p=s(I,p,T),C===null?k=I:C.sibling=I,C=I,z=V}if(T===h.length)return r(u,z),q&&Bt(u,T),k;if(z===null){for(;T<h.length;T++)z=f(u,h[T],b),z!==null&&(p=s(z,p,T),C===null?k=z:C.sibling=z,C=z);return q&&Bt(u,T),k}for(z=a(u,z);T<h.length;T++)V=x(z,u,T,h[T],b),V!==null&&(e&&V.alternate!==null&&z.delete(V.key===null?T:V.key),p=s(V,p,T),C===null?k=V:C.sibling=V,C=V);return e&&z.forEach(function(Oe){return t(u,Oe)}),q&&Bt(u,T),k}function v(u,p,h,b){var k=Ur(h);if(typeof k!="function")throw Error(w(150));if(h=k.call(h),h==null)throw Error(w(151));for(var C=k=null,z=p,T=p=0,V=null,I=h.next();z!==null&&!I.done;T++,I=h.next()){z.index>T?(V=z,z=null):V=z.sibling;var Oe=g(u,z,I.value,b);if(Oe===null){z===null&&(z=V);break}e&&z&&Oe.alternate===null&&t(u,z),p=s(Oe,p,T),C===null?k=Oe:C.sibling=Oe,C=Oe,z=V}if(I.done)return r(u,z),q&&Bt(u,T),k;if(z===null){for(;!I.done;T++,I=h.next())I=f(u,I.value,b),I!==null&&(p=s(I,p,T),C===null?k=I:C.sibling=I,C=I);return q&&Bt(u,T),k}for(z=a(u,z);!I.done;T++,I=h.next())I=x(z,u,T,I.value,b),I!==null&&(e&&I.alternate!==null&&z.delete(I.key===null?T:I.key),p=s(I,p,T),C===null?k=I:C.sibling=I,C=I);return e&&z.forEach(function(_r){return t(u,_r)}),q&&Bt(u,T),k}function N(u,p,h,b){if(typeof h=="object"&&h!==null&&h.type===nr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case On:e:{for(var k=h.key,C=p;C!==null;){if(C.key===k){if(k=h.type,k===nr){if(C.tag===7){r(u,C.sibling),p=i(C,h.props.children),p.return=u,u=p;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===mt&&bo(k)===C.type){r(u,C.sibling),p=i(C,h.props),p.ref=$r(u,C,h),p.return=u,u=p;break e}r(u,C);break}else t(u,C);C=C.sibling}h.type===nr?(p=Gt(h.props.children,u.mode,b,h.key),p.return=u,u=p):(b=ua(h.type,h.key,h.props,null,u.mode,b),b.ref=$r(u,p,h),b.return=u,u=b)}return l(u);case rr:e:{for(C=h.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){r(u,p.sibling),p=i(p,h.children||[]),p.return=u,u=p;break e}else{r(u,p);break}else t(u,p);p=p.sibling}p=Li(h,u.mode,b),p.return=u,u=p}return l(u);case mt:return C=h._init,N(u,p,C(h._payload),b)}if(Kr(h))return j(u,p,h,b);if(Ur(h))return v(u,p,h,b);Yn(u,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(r(u,p.sibling),p=i(p,h),p.return=u,u=p):(r(u,p),p=Ri(h,u.mode,b),p.return=u,u=p),l(u)):r(u,p)}return N}var wr=hd(!0),gd=hd(!1),Sa=It(null),Ea=null,ur=null,rl=null;function nl(){rl=ur=Ea=null}function al(e){var t=Sa.current;U(Sa),e._currentValue=t}function us(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function vr(e,t){Ea=e,rl=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(rl!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Ea===null)throw Error(w(308));ur=e,Ea.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var $t=null;function il(e){$t===null?$t=[e]:$t.push(e)}function xd(e,t,r,a){var i=t.interleaved;return i===null?(r.next=r,il(t)):(r.next=i.next,i.next=r),t.interleaved=r,ot(e,a)}function ot(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ht=!1;function sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Et(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,M&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,ot(e,r)}return i=a.interleaved,i===null?(t.next=t,il(a)):(t.next=i.next,i.next=t),a.interleaved=t,ot(e,r)}function ia(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Vs(e,r)}}function jo(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=l:s=s.next=l,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ca(e,t,r,a){var i=e.updateQueue;ht=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,d=c.next;c.next=null,l===null?s=d:l.next=d,l=c;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==l&&(o===null?m.firstBaseUpdate=d:o.next=d,m.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;l=0,m=d=c=null,o=s;do{var g=o.lane,x=o.eventTime;if((a&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var j=e,v=o;switch(g=t,x=r,v.tag){case 1:if(j=v.payload,typeof j=="function"){f=j.call(x,f,g);break e}f=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=v.payload,g=typeof j=="function"?j.call(x,f,g):j,g==null)break e;f=F({},f,g);break e;case 2:ht=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[o]:g.push(o))}else x={eventTime:x,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(d=m=x,c=f):m=m.next=x,l|=g;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;g=o,o=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Zt|=l,e.lanes=l,e.memoizedState=f}}function No(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=r,typeof i!="function")throw Error(w(191,i));i.call(a)}}}var Rn={},et=It(Rn),bn=It(Rn),jn=It(Rn);function Vt(e){if(e===Rn)throw Error(w(174));return e}function ll(e,t){switch(_(jn,t),_(bn,e),_(et,Rn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vi(t,e)}U(et),_(et,t)}function kr(){U(et),U(bn),U(jn)}function yd(e){Vt(jn.current);var t=Vt(et.current),r=Vi(t,e.type);t!==r&&(_(bn,e),_(et,r))}function ol(e){bn.current===e&&(U(et),U(bn))}var B=It(0);function za(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ei=[];function cl(){for(var e=0;e<Ei.length;e++)Ei[e]._workInProgressVersionPrimary=null;Ei.length=0}var sa=dt.ReactCurrentDispatcher,Ci=dt.ReactCurrentBatchConfig,Kt=0,H=null,J=null,ne=null,Ta=!1,an=!1,Nn=0,Pf=0;function oe(){throw Error(w(321))}function dl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!We(e[r],t[r]))return!1;return!0}function ul(e,t,r,a,i,s){if(Kt=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sa.current=e===null||e.memoizedState===null?Mf:Df,e=r(a,i),an){s=0;do{if(an=!1,Nn=0,25<=s)throw Error(w(301));s+=1,ne=J=null,t.updateQueue=null,sa.current=_f,e=r(a,i)}while(an)}if(sa.current=Aa,t=J!==null&&J.next!==null,Kt=0,ne=J=H=null,Ta=!1,t)throw Error(w(300));return e}function pl(){var e=Nn!==0;return Nn=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?H.memoizedState=ne=e:ne=ne.next=e,ne}function _e(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ne===null?H.memoizedState:ne.next;if(t!==null)ne=t,J=e;else{if(e===null)throw Error(w(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ne===null?H.memoizedState=ne=e:ne=ne.next=e}return ne}function wn(e,t){return typeof t=="function"?t(e):t}function zi(e){var t=_e(),r=t.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var a=J,i=a.baseQueue,s=r.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}a.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,a=a.baseState;var o=l=null,c=null,d=s;do{var m=d.lane;if((Kt&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var f={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=f,l=a):c=c.next=f,H.lanes|=m,Zt|=m}d=d.next}while(d!==null&&d!==s);c===null?l=a:c.next=o,We(a,t.memoizedState)||(be=!0),t.memoizedState=a,t.baseState=l,t.baseQueue=c,r.lastRenderedState=a}if(e=r.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,Zt|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ti(e){var t=_e(),r=t.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var a=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);We(s,t.memoizedState)||(be=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,a]}function bd(){}function jd(e,t){var r=H,a=_e(),i=t(),s=!We(a.memoizedState,i);if(s&&(a.memoizedState=i,be=!0),a=a.queue,fl(kd.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ne!==null&&ne.memoizedState.tag&1){if(r.flags|=2048,kn(9,wd.bind(null,r,a,i,t),void 0,null),ae===null)throw Error(w(349));Kt&30||Nd(r,t,i)}return i}function Nd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wd(e,t,r,a){t.value=r,t.getSnapshot=a,Sd(t)&&Ed(e)}function kd(e,t,r){return r(function(){Sd(t)&&Ed(e)})}function Sd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!We(e,r)}catch{return!0}}function Ed(e){var t=ot(e,1);t!==null&&$e(t,e,1,-1)}function wo(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t.queue=e,e=e.dispatch=If.bind(null,H,e),[t.memoizedState,e]}function kn(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Cd(){return _e().memoizedState}function la(e,t,r,a){var i=Ze();H.flags|=e,i.memoizedState=kn(1|t,r,void 0,a===void 0?null:a)}function Va(e,t,r,a){var i=_e();a=a===void 0?null:a;var s=void 0;if(J!==null){var l=J.memoizedState;if(s=l.destroy,a!==null&&dl(a,l.deps)){i.memoizedState=kn(t,r,s,a);return}}H.flags|=e,i.memoizedState=kn(1|t,r,s,a)}function ko(e,t){return la(8390656,8,e,t)}function fl(e,t){return Va(2048,8,e,t)}function zd(e,t){return Va(4,2,e,t)}function Td(e,t){return Va(4,4,e,t)}function Ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pd(e,t,r){return r=r!=null?r.concat([e]):null,Va(4,4,Ad.bind(null,t,e),r)}function ml(){}function Rd(e,t){var r=_e();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&dl(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function Ld(e,t){var r=_e();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&dl(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function Id(e,t,r){return Kt&21?(We(r,t)||(r=Uc(),H.lanes|=r,Zt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=r)}function Rf(e,t){var r=D;D=r!==0&&4>r?r:4,e(!0);var a=Ci.transition;Ci.transition={};try{e(!1),t()}finally{D=r,Ci.transition=a}}function Md(){return _e().memoizedState}function Lf(e,t,r){var a=zt(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},Dd(e))_d(t,r);else if(r=xd(e,t,r,a),r!==null){var i=fe();$e(r,e,a,i),Od(r,t,a)}}function If(e,t,r){var a=zt(e),i={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(Dd(e))_d(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,o=s(l,r);if(i.hasEagerState=!0,i.eagerState=o,We(o,l)){var c=t.interleaved;c===null?(i.next=i,il(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=xd(e,t,i,a),r!==null&&(i=fe(),$e(r,e,a,i),Od(r,t,a))}}function Dd(e){var t=e.alternate;return e===H||t!==null&&t===H}function _d(e,t){an=Ta=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Od(e,t,r){if(r&4194240){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Vs(e,r)}}var Aa={readContext:De,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Mf={readContext:De,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:ko,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,la(4194308,4,Ad.bind(null,t,e),r)},useLayoutEffect:function(e,t){return la(4194308,4,e,t)},useInsertionEffect:function(e,t){return la(4,2,e,t)},useMemo:function(e,t){var r=Ze();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=Ze();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Lf.bind(null,H,e),[a.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:wo,useDebugValue:ml,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=wo(!1),t=e[0];return e=Rf.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=H,i=Ze();if(q){if(r===void 0)throw Error(w(407));r=r()}else{if(r=t(),ae===null)throw Error(w(349));Kt&30||Nd(a,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,ko(kd.bind(null,a,s,e),[e]),a.flags|=2048,kn(9,wd.bind(null,a,s,r,t),void 0,null),r},useId:function(){var e=Ze(),t=ae.identifierPrefix;if(q){var r=at,a=nt;r=(a&~(1<<32-Fe(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=Nn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Pf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Df={readContext:De,useCallback:Rd,useContext:De,useEffect:fl,useImperativeHandle:Pd,useInsertionEffect:zd,useLayoutEffect:Td,useMemo:Ld,useReducer:zi,useRef:Cd,useState:function(){return zi(wn)},useDebugValue:ml,useDeferredValue:function(e){var t=_e();return Id(t,J.memoizedState,e)},useTransition:function(){var e=zi(wn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:bd,useSyncExternalStore:jd,useId:Md,unstable_isNewReconciler:!1},_f={readContext:De,useCallback:Rd,useContext:De,useEffect:fl,useImperativeHandle:Pd,useInsertionEffect:zd,useLayoutEffect:Td,useMemo:Ld,useReducer:Ti,useRef:Cd,useState:function(){return Ti(wn)},useDebugValue:ml,useDeferredValue:function(e){var t=_e();return J===null?t.memoizedState=e:Id(t,J.memoizedState,e)},useTransition:function(){var e=Ti(wn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:bd,useSyncExternalStore:jd,useId:Md,unstable_isNewReconciler:!1};function qe(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ps(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:F({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Wa={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=fe(),i=zt(e),s=it(a,i);s.payload=t,r!=null&&(s.callback=r),t=Et(e,s,i),t!==null&&($e(t,e,i,a),ia(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=fe(),i=zt(e),s=it(a,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Et(e,s,i),t!==null&&($e(t,e,i,a),ia(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=fe(),a=zt(e),i=it(r,a);i.tag=2,t!=null&&(i.callback=t),t=Et(e,i,a),t!==null&&($e(t,e,a,r),ia(t,e,a))}};function So(e,t,r,a,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,l):t.prototype&&t.prototype.isPureReactComponent?!gn(r,a)||!gn(i,s):!0}function Ud(e,t,r){var a=!1,i=Rt,s=t.contextType;return typeof s=="object"&&s!==null?s=De(s):(i=Ne(t)?Qt:ue.current,a=t.contextTypes,s=(a=a!=null)?jr(e,i):Rt),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wa,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Eo(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&Wa.enqueueReplaceState(t,t.state,null)}function fs(e,t,r,a){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},sl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=De(s):(s=Ne(t)?Qt:ue.current,i.context=jr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ps(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wa.enqueueReplaceState(i,i.state,null),Ca(e,r,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t){try{var r="",a=t;do r+=dp(a),a=a.return;while(a);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ai(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ms(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Of=typeof WeakMap=="function"?WeakMap:Map;function qd(e,t,r){r=it(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){Ra||(Ra=!0,ks=a),ms(e,t)},r}function Bd(e,t,r){r=it(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;r.payload=function(){return a(i)},r.callback=function(){ms(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){ms(e,t),typeof a!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Co(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Of;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(r)||(i.add(r),e=Xf.bind(null,e,t,r),t.then(e,e))}function zo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function To(e,t,r,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=it(-1,1),t.tag=2,Et(r,t,1))),r.lanes|=1),e)}var Uf=dt.ReactCurrentOwner,be=!1;function pe(e,t,r,a){t.child=e===null?gd(t,null,r,a):wr(t,e.child,r,a)}function Ao(e,t,r,a,i){r=r.render;var s=t.ref;return vr(t,i),a=ul(e,t,r,a,s,i),r=pl(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(q&&r&&Js(t),t.flags|=1,pe(e,t,a,i),t.child)}function Po(e,t,r,a,i){if(e===null){var s=r.type;return typeof s=="function"&&!Nl(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Hd(e,t,s,a,i)):(e=ua(r.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(r=r.compare,r=r!==null?r:gn,r(l,a)&&e.ref===t.ref)return ct(e,t,i)}return t.flags|=1,e=Tt(s,a),e.ref=t.ref,e.return=t,t.child=e}function Hd(e,t,r,a,i){if(e!==null){var s=e.memoizedProps;if(gn(s,a)&&e.ref===t.ref)if(be=!1,t.pendingProps=a=s,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,ct(e,t,i)}return hs(e,t,r,a,i)}function Fd(e,t,r){var a=t.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(fr,Se),Se|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(fr,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:r,_(fr,Se),Se|=a}else s!==null?(a=s.baseLanes|r,t.memoizedState=null):a=r,_(fr,Se),Se|=a;return pe(e,t,i,r),t.child}function $d(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function hs(e,t,r,a,i){var s=Ne(r)?Qt:ue.current;return s=jr(t,s),vr(t,i),r=ul(e,t,r,a,s,i),a=pl(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(q&&a&&Js(t),t.flags|=1,pe(e,t,r,i),t.child)}function Ro(e,t,r,a,i){if(Ne(r)){var s=!0;Na(t)}else s=!1;if(vr(t,i),t.stateNode===null)oa(e,t),Ud(t,r,a),fs(t,r,a,i),a=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=De(d):(d=Ne(r)?Qt:ue.current,d=jr(t,d));var m=r.getDerivedStateFromProps,f=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==a||c!==d)&&Eo(t,l,a,d),ht=!1;var g=t.memoizedState;l.state=g,Ca(t,a,l,i),c=t.memoizedState,o!==a||g!==c||je.current||ht?(typeof m=="function"&&(ps(t,r,m,a),c=t.memoizedState),(o=ht||So(t,r,o,a,g,c,d))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=c),l.props=a,l.state=c,l.context=d,a=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{l=t.stateNode,vd(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:qe(t.type,o),l.props=d,f=t.pendingProps,g=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=De(c):(c=Ne(r)?Qt:ue.current,c=jr(t,c));var x=r.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==f||g!==c)&&Eo(t,l,a,c),ht=!1,g=t.memoizedState,l.state=g,Ca(t,a,l,i);var j=t.memoizedState;o!==f||g!==j||je.current||ht?(typeof x=="function"&&(ps(t,r,x,a),j=t.memoizedState),(d=ht||So(t,r,d,a,g,j,c)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,j,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,j,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=j),l.props=a,l.state=j,l.context=c,a=d):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),a=!1)}return gs(e,t,r,a,s,i)}function gs(e,t,r,a,i,s){$d(e,t);var l=(t.flags&128)!==0;if(!a&&!l)return i&&xo(t,r,!1),ct(e,t,s);a=t.stateNode,Uf.current=t;var o=l&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&l?(t.child=wr(t,e.child,null,s),t.child=wr(t,null,o,s)):pe(e,t,o,s),t.memoizedState=a.state,i&&xo(t,r,!0),t.child}function Vd(e){var t=e.stateNode;t.pendingContext?go(e,t.pendingContext,t.pendingContext!==t.context):t.context&&go(e,t.context,!1),ll(e,t.containerInfo)}function Lo(e,t,r,a,i){return Nr(),tl(i),t.flags|=256,pe(e,t,r,a),t.child}var xs={dehydrated:null,treeContext:null,retryLane:0};function vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wd(e,t,r){var a=t.pendingProps,i=B.current,s=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_(B,i&1),e===null)return ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=a.children,e=a.fallback,s?(a=t.mode,s=t.child,l={mode:"hidden",children:l},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ya(l,a,0,null),e=Gt(e,a,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=vs(r),t.memoizedState=xs,e):hl(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return qf(e,t,l,a,o,i,r);if(s){s=a.fallback,l=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:a.children};return!(l&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=c,t.deletions=null):(a=Tt(i,c),a.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=Tt(o,s):(s=Gt(s,l,r,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,l=e.child.memoizedState,l=l===null?vs(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=xs,a}return s=e.child,e=s.sibling,a=Tt(s,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function hl(e,t){return t=Ya({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Kn(e,t,r,a){return a!==null&&tl(a),wr(t,e.child,null,r),e=hl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qf(e,t,r,a,i,s,l){if(r)return t.flags&256?(t.flags&=-257,a=Ai(Error(w(422))),Kn(e,t,l,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=a.fallback,i=t.mode,a=Ya({mode:"visible",children:a.children},i,0,null),s=Gt(s,i,l,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,t.mode&1&&wr(t,e.child,null,l),t.child.memoizedState=vs(l),t.memoizedState=xs,s);if(!(t.mode&1))return Kn(e,t,l,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var o=a.dgst;return a=o,s=Error(w(419)),a=Ai(s,a,void 0),Kn(e,t,l,a)}if(o=(l&e.childLanes)!==0,be||o){if(a=ae,a!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ot(e,i),$e(a,e,i,-1))}return jl(),a=Ai(Error(w(421))),Kn(e,t,l,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Jf.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ee=St(i.nextSibling),ze=t,q=!0,He=null,e!==null&&(Re[Le++]=nt,Re[Le++]=at,Re[Le++]=Yt,nt=e.id,at=e.overflow,Yt=t),t=hl(t,a.children),t.flags|=4096,t)}function Io(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),us(e.return,t,r)}function Pi(e,t,r,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=r,s.tailMode=i)}function Gd(e,t,r){var a=t.pendingProps,i=a.revealOrder,s=a.tail;if(pe(e,t,a.children,r),a=B.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Io(e,r,t);else if(e.tag===19)Io(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(_(B,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&za(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Pi(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&za(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Pi(t,!0,r,null,s);break;case"together":Pi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Zt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,r=Tt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Tt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Bf(e,t,r){switch(t.tag){case 3:Vd(t),Nr();break;case 5:yd(t);break;case 1:Ne(t.type)&&Na(t);break;case 4:ll(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;_(Sa,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(_(B,B.current&1),t.flags|=128,null):r&t.child.childLanes?Wd(e,t,r):(_(B,B.current&1),e=ct(e,t,r),e!==null?e.sibling:null);_(B,B.current&1);break;case 19:if(a=(r&t.childLanes)!==0,e.flags&128){if(a)return Gd(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_(B,B.current),a)break;return null;case 22:case 23:return t.lanes=0,Fd(e,t,r)}return ct(e,t,r)}var Qd,ys,Yd,Kd;Qd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ys=function(){};Yd=function(e,t,r,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,Vt(et.current);var s=null;switch(r){case"input":i=Bi(e,i),a=Bi(e,a),s=[];break;case"select":i=F({},i,{value:void 0}),a=F({},a,{value:void 0}),s=[];break;case"textarea":i=$i(e,i),a=$i(e,a),s=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ba)}Wi(r,a);var l;r=null;for(d in i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(cn.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in a){var c=a[d];if(o=i!=null?i[d]:void 0,a.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(s||(s=[]),s.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(cn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&O("scroll",e),s||o===c||(s=[])):(s=s||[]).push(d,c))}r&&(s=s||[]).push("style",r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Kd=function(e,t,r,a){r!==a&&(t.flags|=4)};function Vr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function Hf(e,t,r){var a=t.pendingProps;switch(el(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ne(t.type)&&ja(),ce(t),null;case 3:return a=t.stateNode,kr(),U(je),U(ue),cl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(Cs(He),He=null))),ys(e,t),ce(t),null;case 5:ol(t);var i=Vt(jn.current);if(r=t.type,e!==null&&t.stateNode!=null)Yd(e,t,r,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(w(166));return ce(t),null}if(e=Vt(et.current),Qn(t)){a=t.stateNode,r=t.type;var s=t.memoizedProps;switch(a[Xe]=t,a[yn]=s,e=(t.mode&1)!==0,r){case"dialog":O("cancel",a),O("close",a);break;case"iframe":case"object":case"embed":O("load",a);break;case"video":case"audio":for(i=0;i<Xr.length;i++)O(Xr[i],a);break;case"source":O("error",a);break;case"img":case"image":case"link":O("error",a),O("load",a);break;case"details":O("toggle",a);break;case"input":Hl(a,s),O("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},O("invalid",a);break;case"textarea":$l(a,s),O("invalid",a)}Wi(r,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?a.textContent!==o&&(s.suppressHydrationWarning!==!0&&Gn(a.textContent,o,e),i=["children",o]):typeof o=="number"&&a.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Gn(a.textContent,o,e),i=["children",""+o]):cn.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&O("scroll",a)}switch(r){case"input":Un(a),Fl(a,s,!0);break;case"textarea":Un(a),Vl(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=ba)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=l.createElement(r,{is:a.is}):(e=l.createElement(r),r==="select"&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,r),e[Xe]=t,e[yn]=a,Qd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Gi(r,a),r){case"dialog":O("cancel",e),O("close",e),i=a;break;case"iframe":case"object":case"embed":O("load",e),i=a;break;case"video":case"audio":for(i=0;i<Xr.length;i++)O(Xr[i],e);i=a;break;case"source":O("error",e),i=a;break;case"img":case"image":case"link":O("error",e),O("load",e),i=a;break;case"details":O("toggle",e),i=a;break;case"input":Hl(e,a),i=Bi(e,a),O("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=F({},a,{value:void 0}),O("invalid",e);break;case"textarea":$l(e,a),i=$i(e,a),O("invalid",e);break;default:i=a}Wi(r,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Cc(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Sc(e,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&dn(e,c):typeof c=="number"&&dn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&O("scroll",e):c!=null&&Us(e,s,c,l))}switch(r){case"input":Un(e),Fl(e,a,!1);break;case"textarea":Un(e),Vl(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Pt(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?mr(e,!!a.multiple,s,!1):a.defaultValue!=null&&mr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ba)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Kd(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(w(166));if(r=Vt(jn.current),Vt(et.current),Qn(t)){if(a=t.stateNode,r=t.memoizedProps,a[Xe]=t,(s=a.nodeValue!==r)&&(e=ze,e!==null))switch(e.tag){case 3:Gn(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gn(a.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Xe]=t,t.stateNode=a}return ce(t),null;case 13:if(U(B),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Ee!==null&&t.mode&1&&!(t.flags&128))md(),Nr(),t.flags|=98560,s=!1;else if(s=Qn(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(w(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Xe]=t}else Nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),s=!1}else He!==null&&(Cs(He),He=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?te===0&&(te=3):jl())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return kr(),ys(e,t),e===null&&xn(t.stateNode.containerInfo),ce(t),null;case 10:return al(t.type._context),ce(t),null;case 17:return Ne(t.type)&&ja(),ce(t),null;case 19:if(U(B),s=t.memoizedState,s===null)return ce(t),null;if(a=(t.flags&128)!==0,l=s.rendering,l===null)if(a)Vr(s,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=za(e),l!==null){for(t.flags|=128,Vr(s,!1),a=l.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)s=r,e=a,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return _(B,B.current&1|2),t.child}e=e.sibling}s.tail!==null&&G()>Er&&(t.flags|=128,a=!0,Vr(s,!1),t.lanes=4194304)}else{if(!a)if(e=za(l),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Vr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!q)return ce(t),null}else 2*G()-s.renderingStartTime>Er&&r!==1073741824&&(t.flags|=128,a=!0,Vr(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(r=s.last,r!==null?r.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=G(),t.sibling=null,r=B.current,_(B,a?r&1|2:r&1),t):(ce(t),null);case 22:case 23:return bl(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Se&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Ff(e,t){switch(el(t),t.tag){case 1:return Ne(t.type)&&ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),U(je),U(ue),cl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ol(t),null;case 13:if(U(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(B),null;case 4:return kr(),null;case 10:return al(t.type._context),null;case 22:case 23:return bl(),null;case 24:return null;default:return null}}var Zn=!1,de=!1,$f=typeof WeakSet=="function"?WeakSet:Set,S=null;function pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){$(e,t,a)}else r.current=null}function bs(e,t,r){try{r()}catch(a){$(e,t,a)}}var Mo=!1;function Vf(e,t){if(ns=xa,e=td(),Xs(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,d=0,m=0,f=e,g=null;t:for(;;){for(var x;f!==r||i!==0&&f.nodeType!==3||(o=l+i),f!==s||a!==0&&f.nodeType!==3||(c=l+a),f.nodeType===3&&(l+=f.nodeValue.length),(x=f.firstChild)!==null;)g=f,f=x;for(;;){if(f===e)break t;if(g===r&&++d===i&&(o=l),g===s&&++m===a&&(c=l),(x=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=x}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(as={focusedElem:e,selectionRange:r},xa=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var v=j.memoizedProps,N=j.memoizedState,u=t.stateNode,p=u.getSnapshotBeforeUpdate(t.elementType===t.type?v:qe(t.type,v),N);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(b){$(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return j=Mo,Mo=!1,j}function sn(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&bs(t,r,s)}i=i.next}while(i!==a)}}function Ga(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function js(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Zd(e){var t=e.alternate;t!==null&&(e.alternate=null,Zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[yn],delete t[ls],delete t[Cf],delete t[zf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xd(e){return e.tag===5||e.tag===3||e.tag===4}function Do(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ns(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ba));else if(a!==4&&(e=e.child,e!==null))for(Ns(e,t,r),e=e.sibling;e!==null;)Ns(e,t,r),e=e.sibling}function ws(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ws(e,t,r),e=e.sibling;e!==null;)ws(e,t,r),e=e.sibling}var ie=null,Be=!1;function pt(e,t,r){for(r=r.child;r!==null;)Jd(e,t,r),r=r.sibling}function Jd(e,t,r){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Ua,r)}catch{}switch(r.tag){case 5:de||pr(r,t);case 6:var a=ie,i=Be;ie=null,pt(e,t,r),ie=a,Be=i,ie!==null&&(Be?(e=ie,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ie.removeChild(r.stateNode));break;case 18:ie!==null&&(Be?(e=ie,r=r.stateNode,e.nodeType===8?ki(e.parentNode,r):e.nodeType===1&&ki(e,r),mn(e)):ki(ie,r.stateNode));break;case 4:a=ie,i=Be,ie=r.stateNode.containerInfo,Be=!0,pt(e,t,r),ie=a,Be=i;break;case 0:case 11:case 14:case 15:if(!de&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&bs(r,t,l),i=i.next}while(i!==a)}pt(e,t,r);break;case 1:if(!de&&(pr(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(o){$(r,t,o)}pt(e,t,r);break;case 21:pt(e,t,r);break;case 22:r.mode&1?(de=(a=de)||r.memoizedState!==null,pt(e,t,r),de=a):pt(e,t,r);break;default:pt(e,t,r)}}function _o(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new $f),t.forEach(function(a){var i=em.bind(null,e,a);r.has(a)||(r.add(a),a.then(i,i))})}}function Ue(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a];try{var s=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:ie=o.stateNode,Be=!1;break e;case 3:ie=o.stateNode.containerInfo,Be=!0;break e;case 4:ie=o.stateNode.containerInfo,Be=!0;break e}o=o.return}if(ie===null)throw Error(w(160));Jd(s,l,i),ie=null,Be=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){$(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eu(t,e),t=t.sibling}function eu(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ke(e),a&4){try{sn(3,e,e.return),Ga(3,e)}catch(v){$(e,e.return,v)}try{sn(5,e,e.return)}catch(v){$(e,e.return,v)}}break;case 1:Ue(t,e),Ke(e),a&512&&r!==null&&pr(r,r.return);break;case 5:if(Ue(t,e),Ke(e),a&512&&r!==null&&pr(r,r.return),e.flags&32){var i=e.stateNode;try{dn(i,"")}catch(v){$(e,e.return,v)}}if(a&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=r!==null?r.memoizedProps:s,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Nc(i,s),Gi(o,l);var d=Gi(o,s);for(l=0;l<c.length;l+=2){var m=c[l],f=c[l+1];m==="style"?Cc(i,f):m==="dangerouslySetInnerHTML"?Sc(i,f):m==="children"?dn(i,f):Us(i,m,f,d)}switch(o){case"input":Hi(i,s);break;case"textarea":wc(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?mr(i,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?mr(i,!!s.multiple,s.defaultValue,!0):mr(i,!!s.multiple,s.multiple?[]:"",!1))}i[yn]=s}catch(v){$(e,e.return,v)}}break;case 6:if(Ue(t,e),Ke(e),a&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){$(e,e.return,v)}}break;case 3:if(Ue(t,e),Ke(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{mn(t.containerInfo)}catch(v){$(e,e.return,v)}break;case 4:Ue(t,e),Ke(e);break;case 13:Ue(t,e),Ke(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vl=G())),a&4&&_o(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(de=(d=de)||m,Ue(t,e),de=d):Ue(t,e),Ke(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(S=e,m=e.child;m!==null;){for(f=S=m;S!==null;){switch(g=S,x=g.child,g.tag){case 0:case 11:case 14:case 15:sn(4,g,g.return);break;case 1:pr(g,g.return);var j=g.stateNode;if(typeof j.componentWillUnmount=="function"){a=g,r=g.return;try{t=a,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(v){$(a,r,v)}}break;case 5:pr(g,g.return);break;case 22:if(g.memoizedState!==null){Uo(f);continue}}x!==null?(x.return=g,S=x):Uo(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Ec("display",l))}catch(v){$(e,e.return,v)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(v){$(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ue(t,e),Ke(e),a&4&&_o(e);break;case 21:break;default:Ue(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Xd(r)){var a=r;break e}r=r.return}throw Error(w(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(dn(i,""),a.flags&=-33);var s=Do(e);ws(e,s,i);break;case 3:case 4:var l=a.stateNode.containerInfo,o=Do(e);Ns(e,o,l);break;default:throw Error(w(161))}}catch(c){$(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wf(e,t,r){S=e,tu(e)}function tu(e,t,r){for(var a=(e.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&a){var l=i.memoizedState!==null||Zn;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||de;o=Zn;var d=de;if(Zn=l,(de=c)&&!d)for(S=i;S!==null;)l=S,c=l.child,l.tag===22&&l.memoizedState!==null?qo(i):c!==null?(c.return=l,S=c):qo(i);for(;s!==null;)S=s,tu(s),s=s.sibling;S=i,Zn=o,de=d}Oo(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):Oo(e)}}function Oo(e){for(;S!==null;){var t=S;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Ga(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!de)if(r===null)a.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:qe(t.type,r.memoizedProps);a.componentDidUpdate(i,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&No(t,s,a);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}No(t,l,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&mn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}de||t.flags&512&&js(t)}catch(g){$(t,t.return,g)}}if(t===e){S=null;break}if(r=t.sibling,r!==null){r.return=t.return,S=r;break}S=t.return}}function Uo(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var r=t.sibling;if(r!==null){r.return=t.return,S=r;break}S=t.return}}function qo(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ga(4,t)}catch(c){$(t,r,c)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(c){$(t,i,c)}}var s=t.return;try{js(t)}catch(c){$(t,s,c)}break;case 5:var l=t.return;try{js(t)}catch(c){$(t,l,c)}}}catch(c){$(t,t.return,c)}if(t===e){S=null;break}var o=t.sibling;if(o!==null){o.return=t.return,S=o;break}S=t.return}}var Gf=Math.ceil,Pa=dt.ReactCurrentDispatcher,gl=dt.ReactCurrentOwner,Me=dt.ReactCurrentBatchConfig,M=0,ae=null,Z=null,se=0,Se=0,fr=It(0),te=0,Sn=null,Zt=0,Qa=0,xl=0,ln=null,ye=null,vl=0,Er=1/0,tt=null,Ra=!1,ks=null,Ct=null,Xn=!1,yt=null,La=0,on=0,Ss=null,ca=-1,da=0;function fe(){return M&6?G():ca!==-1?ca:ca=G()}function zt(e){return e.mode&1?M&2&&se!==0?se&-se:Af.transition!==null?(da===0&&(da=Uc()),da):(e=D,e!==0||(e=window.event,e=e===void 0?16:Wc(e.type)),e):1}function $e(e,t,r,a){if(50<on)throw on=0,Ss=null,Error(w(185));Tn(e,r,a),(!(M&2)||e!==ae)&&(e===ae&&(!(M&2)&&(Qa|=r),te===4&&xt(e,se)),we(e,a),r===1&&M===0&&!(t.mode&1)&&(Er=G()+500,$a&&Mt()))}function we(e,t){var r=e.callbackNode;Tp(e,t);var a=ga(e,e===ae?se:0);if(a===0)r!==null&&Ql(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Ql(r),t===1)e.tag===0?Tf(Bo.bind(null,e)):ud(Bo.bind(null,e)),Sf(function(){!(M&6)&&Mt()}),r=null;else{switch(qc(a)){case 1:r=$s;break;case 4:r=_c;break;case 16:r=ha;break;case 536870912:r=Oc;break;default:r=ha}r=cu(r,ru.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ru(e,t){if(ca=-1,da=0,M&6)throw Error(w(327));var r=e.callbackNode;if(yr()&&e.callbackNode!==r)return null;var a=ga(e,e===ae?se:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Ia(e,a);else{t=a;var i=M;M|=2;var s=au();(ae!==e||se!==t)&&(tt=null,Er=G()+500,Wt(e,t));do try{Kf();break}catch(o){nu(e,o)}while(!0);nl(),Pa.current=s,M=i,Z!==null?t=0:(ae=null,se=0,t=te)}if(t!==0){if(t===2&&(i=Xi(e),i!==0&&(a=i,t=Es(e,i))),t===1)throw r=Sn,Wt(e,0),xt(e,a),we(e,G()),r;if(t===6)xt(e,a);else{if(i=e.current.alternate,!(a&30)&&!Qf(i)&&(t=Ia(e,a),t===2&&(s=Xi(e),s!==0&&(a=s,t=Es(e,s))),t===1))throw r=Sn,Wt(e,0),xt(e,a),we(e,G()),r;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(w(345));case 2:Ht(e,ye,tt);break;case 3:if(xt(e,a),(a&130023424)===a&&(t=vl+500-G(),10<t)){if(ga(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ss(Ht.bind(null,e,ye,tt),t);break}Ht(e,ye,tt);break;case 4:if(xt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var l=31-Fe(a);s=1<<l,l=t[l],l>i&&(i=l),a&=~s}if(a=i,a=G()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Gf(a/1960))-a,10<a){e.timeoutHandle=ss(Ht.bind(null,e,ye,tt),a);break}Ht(e,ye,tt);break;case 5:Ht(e,ye,tt);break;default:throw Error(w(329))}}}return we(e,G()),e.callbackNode===r?ru.bind(null,e):null}function Es(e,t){var r=ln;return e.current.memoizedState.isDehydrated&&(Wt(e,t).flags|=256),e=Ia(e,t),e!==2&&(t=ye,ye=r,t!==null&&Cs(t)),e}function Cs(e){ye===null?ye=e:ye.push.apply(ye,e)}function Qf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var i=r[a],s=i.getSnapshot;i=i.value;try{if(!We(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~xl,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Fe(t),a=1<<r;e[r]=-1,t&=~a}}function Bo(e){if(M&6)throw Error(w(327));yr();var t=ga(e,0);if(!(t&1))return we(e,G()),null;var r=Ia(e,t);if(e.tag!==0&&r===2){var a=Xi(e);a!==0&&(t=a,r=Es(e,a))}if(r===1)throw r=Sn,Wt(e,0),xt(e,t),we(e,G()),r;if(r===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,ye,tt),we(e,G()),null}function yl(e,t){var r=M;M|=1;try{return e(t)}finally{M=r,M===0&&(Er=G()+500,$a&&Mt())}}function Xt(e){yt!==null&&yt.tag===0&&!(M&6)&&yr();var t=M;M|=1;var r=Me.transition,a=D;try{if(Me.transition=null,D=1,e)return e()}finally{D=a,Me.transition=r,M=t,!(M&6)&&Mt()}}function bl(){Se=fr.current,U(fr)}function Wt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,kf(r)),Z!==null)for(r=Z.return;r!==null;){var a=r;switch(el(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ja();break;case 3:kr(),U(je),U(ue),cl();break;case 5:ol(a);break;case 4:kr();break;case 13:U(B);break;case 19:U(B);break;case 10:al(a.type._context);break;case 22:case 23:bl()}r=r.return}if(ae=e,Z=e=Tt(e.current,null),se=Se=t,te=0,Sn=null,xl=Qa=Zt=0,ye=ln=null,$t!==null){for(t=0;t<$t.length;t++)if(r=$t[t],a=r.interleaved,a!==null){r.interleaved=null;var i=a.next,s=r.pending;if(s!==null){var l=s.next;s.next=i,a.next=l}r.pending=a}$t=null}return e}function nu(e,t){do{var r=Z;try{if(nl(),sa.current=Aa,Ta){for(var a=H.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Ta=!1}if(Kt=0,ne=J=H=null,an=!1,Nn=0,gl.current=null,r===null||r.return===null){te=1,Sn=t,Z=null;break}e:{var s=e,l=r.return,o=r,c=t;if(t=se,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=o,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=zo(l);if(x!==null){x.flags&=-257,To(x,l,o,s,t),x.mode&1&&Co(s,d,t),t=x,c=d;var j=t.updateQueue;if(j===null){var v=new Set;v.add(c),t.updateQueue=v}else j.add(c);break e}else{if(!(t&1)){Co(s,d,t),jl();break e}c=Error(w(426))}}else if(q&&o.mode&1){var N=zo(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),To(N,l,o,s,t),tl(Sr(c,o));break e}}s=c=Sr(c,o),te!==4&&(te=2),ln===null?ln=[s]:ln.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var u=qd(s,c,t);jo(s,u);break e;case 1:o=c;var p=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ct===null||!Ct.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=Bd(s,o,t);jo(s,b);break e}}s=s.return}while(s!==null)}su(r)}catch(k){t=k,Z===r&&r!==null&&(Z=r=r.return);continue}break}while(!0)}function au(){var e=Pa.current;return Pa.current=Aa,e===null?Aa:e}function jl(){(te===0||te===3||te===2)&&(te=4),ae===null||!(Zt&268435455)&&!(Qa&268435455)||xt(ae,se)}function Ia(e,t){var r=M;M|=2;var a=au();(ae!==e||se!==t)&&(tt=null,Wt(e,t));do try{Yf();break}catch(i){nu(e,i)}while(!0);if(nl(),M=r,Pa.current=a,Z!==null)throw Error(w(261));return ae=null,se=0,te}function Yf(){for(;Z!==null;)iu(Z)}function Kf(){for(;Z!==null&&!bp();)iu(Z)}function iu(e){var t=ou(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?su(e):Z=t,gl.current=null}function su(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Ff(r,t),r!==null){r.flags&=32767,Z=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}else if(r=Hf(r,t,Se),r!==null){Z=r;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function Ht(e,t,r){var a=D,i=Me.transition;try{Me.transition=null,D=1,Zf(e,t,r,a)}finally{Me.transition=i,D=a}return null}function Zf(e,t,r,a){do yr();while(yt!==null);if(M&6)throw Error(w(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Ap(e,s),e===ae&&(Z=ae=null,se=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Xn||(Xn=!0,cu(ha,function(){return yr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Me.transition,Me.transition=null;var l=D;D=1;var o=M;M|=4,gl.current=null,Vf(e,r),eu(r,e),xf(as),xa=!!ns,as=ns=null,e.current=r,Wf(r),jp(),M=o,D=l,Me.transition=s}else e.current=r;if(Xn&&(Xn=!1,yt=e,La=i),s=e.pendingLanes,s===0&&(Ct=null),kp(r.stateNode),we(e,G()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],a(i.value,{componentStack:i.stack,digest:i.digest});if(Ra)throw Ra=!1,e=ks,ks=null,e;return La&1&&e.tag!==0&&yr(),s=e.pendingLanes,s&1?e===Ss?on++:(on=0,Ss=e):on=0,Mt(),null}function yr(){if(yt!==null){var e=qc(La),t=Me.transition,r=D;try{if(Me.transition=null,D=16>e?16:e,yt===null)var a=!1;else{if(e=yt,yt=null,La=0,M&6)throw Error(w(331));var i=M;for(M|=4,S=e.current;S!==null;){var s=S,l=s.child;if(S.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(S=d;S!==null;){var m=S;switch(m.tag){case 0:case 11:case 15:sn(8,m,s)}var f=m.child;if(f!==null)f.return=m,S=f;else for(;S!==null;){m=S;var g=m.sibling,x=m.return;if(Zd(m),m===d){S=null;break}if(g!==null){g.return=x,S=g;break}S=x}}}var j=s.alternate;if(j!==null){var v=j.child;if(v!==null){j.child=null;do{var N=v.sibling;v.sibling=null,v=N}while(v!==null)}}S=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,S=l;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sn(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,S=u;break e}S=s.return}}var p=e.current;for(S=p;S!==null;){l=S;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,S=h;else e:for(l=p;S!==null;){if(o=S,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ga(9,o)}}catch(k){$(o,o.return,k)}if(o===l){S=null;break e}var b=o.sibling;if(b!==null){b.return=o.return,S=b;break e}S=o.return}}if(M=i,Mt(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Ua,e)}catch{}a=!0}return a}finally{D=r,Me.transition=t}}return!1}function Ho(e,t,r){t=Sr(r,t),t=qd(e,t,1),e=Et(e,t,1),t=fe(),e!==null&&(Tn(e,1,t),we(e,t))}function $(e,t,r){if(e.tag===3)Ho(e,e,r);else for(;t!==null;){if(t.tag===3){Ho(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ct===null||!Ct.has(a))){e=Sr(r,e),e=Bd(t,e,1),t=Et(t,e,1),e=fe(),t!==null&&(Tn(t,1,e),we(t,e));break}}t=t.return}}function Xf(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&r,ae===e&&(se&r)===r&&(te===4||te===3&&(se&130023424)===se&&500>G()-vl?Wt(e,0):xl|=r),we(e,t)}function lu(e,t){t===0&&(e.mode&1?(t=Hn,Hn<<=1,!(Hn&130023424)&&(Hn=4194304)):t=1);var r=fe();e=ot(e,t),e!==null&&(Tn(e,t,r),we(e,r))}function Jf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),lu(e,r)}function em(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(w(314))}a!==null&&a.delete(t),lu(e,r)}var ou;ou=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)be=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return be=!1,Bf(e,t,r);be=!!(e.flags&131072)}else be=!1,q&&t.flags&1048576&&pd(t,ka,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;oa(e,t),e=t.pendingProps;var i=jr(t,ue.current);vr(t,r),i=ul(null,t,a,e,i,r);var s=pl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(a)?(s=!0,Na(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sl(t),i.updater=Wa,t.stateNode=i,i._reactInternals=t,fs(t,a,e,r),t=gs(null,t,a,!0,s,r)):(t.tag=0,q&&s&&Js(t),pe(null,t,i,r),t=t.child),t;case 16:a=t.elementType;e:{switch(oa(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=rm(a),e=qe(a,e),i){case 0:t=hs(null,t,a,e,r);break e;case 1:t=Ro(null,t,a,e,r);break e;case 11:t=Ao(null,t,a,e,r);break e;case 14:t=Po(null,t,a,qe(a.type,e),r);break e}throw Error(w(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:qe(a,i),hs(e,t,a,i,r);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:qe(a,i),Ro(e,t,a,i,r);case 3:e:{if(Vd(t),e===null)throw Error(w(387));a=t.pendingProps,s=t.memoizedState,i=s.element,vd(e,t),Ca(t,a,null,r);var l=t.memoizedState;if(a=l.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Sr(Error(w(423)),t),t=Lo(e,t,a,r,i);break e}else if(a!==i){i=Sr(Error(w(424)),t),t=Lo(e,t,a,r,i);break e}else for(Ee=St(t.stateNode.containerInfo.firstChild),ze=t,q=!0,He=null,r=gd(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Nr(),a===i){t=ct(e,t,r);break e}pe(e,t,a,r)}t=t.child}return t;case 5:return yd(t),e===null&&ds(t),a=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,is(a,i)?l=null:s!==null&&is(a,s)&&(t.flags|=32),$d(e,t),pe(e,t,l,r),t.child;case 6:return e===null&&ds(t),null;case 13:return Wd(e,t,r);case 4:return ll(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=wr(t,null,a,r):pe(e,t,a,r),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:qe(a,i),Ao(e,t,a,i,r);case 7:return pe(e,t,t.pendingProps,r),t.child;case 8:return pe(e,t,t.pendingProps.children,r),t.child;case 12:return pe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,_(Sa,a._currentValue),a._currentValue=l,s!==null)if(We(s.value,l)){if(s.children===i.children&&!je.current){t=ct(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var c=o.firstContext;c!==null;){if(c.context===a){if(s.tag===1){c=it(-1,r&-r),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),us(s.return,r,t),o.lanes|=r;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(w(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),us(l,r,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}pe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,vr(t,r),i=De(i),a=a(i),t.flags|=1,pe(e,t,a,r),t.child;case 14:return a=t.type,i=qe(a,t.pendingProps),i=qe(a.type,i),Po(e,t,a,i,r);case 15:return Hd(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:qe(a,i),oa(e,t),t.tag=1,Ne(a)?(e=!0,Na(t)):e=!1,vr(t,r),Ud(t,a,i),fs(t,a,i,r),gs(null,t,a,!0,e,r);case 19:return Gd(e,t,r);case 22:return Fd(e,t,r)}throw Error(w(156,t.tag))};function cu(e,t){return Dc(e,t)}function tm(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,r,a){return new tm(e,t,r,a)}function Nl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rm(e){if(typeof e=="function")return Nl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bs)return 11;if(e===Hs)return 14}return 2}function Tt(e,t){var r=e.alternate;return r===null?(r=Ie(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ua(e,t,r,a,i,s){var l=2;if(a=e,typeof e=="function")Nl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case nr:return Gt(r.children,i,s,t);case qs:l=8,i|=8;break;case _i:return e=Ie(12,r,t,i|2),e.elementType=_i,e.lanes=s,e;case Oi:return e=Ie(13,r,t,i),e.elementType=Oi,e.lanes=s,e;case Ui:return e=Ie(19,r,t,i),e.elementType=Ui,e.lanes=s,e;case yc:return Ya(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xc:l=10;break e;case vc:l=9;break e;case Bs:l=11;break e;case Hs:l=14;break e;case mt:l=16,a=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ie(l,r,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function Gt(e,t,r,a){return e=Ie(7,e,a,t),e.lanes=r,e}function Ya(e,t,r,a){return e=Ie(22,e,a,t),e.elementType=yc,e.lanes=r,e.stateNode={isHidden:!1},e}function Ri(e,t,r){return e=Ie(6,e,null,t),e.lanes=r,e}function Li(e,t,r){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nm(e,t,r,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fi(0),this.expirationTimes=fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fi(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wl(e,t,r,a,i,s,l,o,c){return e=new nm(e,t,r,o,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ie(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},sl(s),e}function am(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function du(e){if(!e)return Rt;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var r=e.type;if(Ne(r))return dd(e,r,t)}return t}function uu(e,t,r,a,i,s,l,o,c){return e=wl(r,a,!0,e,i,s,l,o,c),e.context=du(null),r=e.current,a=fe(),i=zt(r),s=it(a,i),s.callback=t??null,Et(r,s,i),e.current.lanes=i,Tn(e,i,a),we(e,a),e}function Ka(e,t,r,a){var i=t.current,s=fe(),l=zt(i);return r=du(r),t.context===null?t.context=r:t.pendingContext=r,t=it(s,l),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Et(i,t,l),e!==null&&($e(e,i,l,s),ia(e,i,l)),l}function Ma(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function kl(e,t){Fo(e,t),(e=e.alternate)&&Fo(e,t)}function im(){return null}var pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sl(e){this._internalRoot=e}Za.prototype.render=Sl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Ka(e,t,null,null)};Za.prototype.unmount=Sl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xt(function(){Ka(null,e,null,null)}),t[lt]=null}};function Za(e){this._internalRoot=e}Za.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<gt.length&&t!==0&&t<gt[r].priority;r++);gt.splice(r,0,e),r===0&&Vc(e)}};function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $o(){}function sm(e,t,r,a,i){if(i){if(typeof a=="function"){var s=a;a=function(){var d=Ma(l);s.call(d)}}var l=uu(t,a,e,0,null,!1,!1,"",$o);return e._reactRootContainer=l,e[lt]=l.current,xn(e.nodeType===8?e.parentNode:e),Xt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var o=a;a=function(){var d=Ma(c);o.call(d)}}var c=wl(e,0,!1,null,null,!1,!1,"",$o);return e._reactRootContainer=c,e[lt]=c.current,xn(e.nodeType===8?e.parentNode:e),Xt(function(){Ka(t,c,r,a)}),c}function Ja(e,t,r,a,i){var s=r._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var o=i;i=function(){var c=Ma(l);o.call(c)}}Ka(t,l,e,i)}else l=sm(r,t,e,i,a);return Ma(l)}Bc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Zr(t.pendingLanes);r!==0&&(Vs(t,r|1),we(t,G()),!(M&6)&&(Er=G()+500,Mt()))}break;case 13:Xt(function(){var a=ot(e,1);if(a!==null){var i=fe();$e(a,e,1,i)}}),kl(e,1)}};Ws=function(e){if(e.tag===13){var t=ot(e,134217728);if(t!==null){var r=fe();$e(t,e,134217728,r)}kl(e,134217728)}};Hc=function(e){if(e.tag===13){var t=zt(e),r=ot(e,t);if(r!==null){var a=fe();$e(r,e,t,a)}kl(e,t)}};Fc=function(){return D};$c=function(e,t){var r=D;try{return D=e,t()}finally{D=r}};Yi=function(e,t,r){switch(t){case"input":if(Hi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var i=Fa(a);if(!i)throw Error(w(90));jc(a),Hi(a,i)}}}break;case"textarea":wc(e,r);break;case"select":t=r.value,t!=null&&mr(e,!!r.multiple,t,!1)}};Ac=yl;Pc=Xt;var lm={usingClientEntryPoint:!1,Events:[Pn,lr,Fa,zc,Tc,yl]},Wr={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},om={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ic(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jn.isDisabled&&Jn.supportsFiber)try{Ua=Jn.inject(om),Je=Jn}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;Ae.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!El(t))throw Error(w(200));return am(e,t,null,r)};Ae.createRoot=function(e,t){if(!El(e))throw Error(w(299));var r=!1,a="",i=pu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wl(e,1,!1,null,null,r,!1,a,i),e[lt]=t.current,xn(e.nodeType===8?e.parentNode:e),new Sl(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Ic(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Xt(e)};Ae.hydrate=function(e,t,r){if(!Xa(t))throw Error(w(200));return Ja(null,e,t,!0,r)};Ae.hydrateRoot=function(e,t,r){if(!El(e))throw Error(w(405));var a=r!=null&&r.hydratedSources||null,i=!1,s="",l=pu;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=uu(t,null,e,1,r??null,i,!1,s,l),e[lt]=t.current,xn(e),a)for(e=0;e<a.length;e++)r=a[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Za(t)};Ae.render=function(e,t,r){if(!Xa(t))throw Error(w(200));return Ja(null,e,t,!1,r)};Ae.unmountComponentAtNode=function(e){if(!Xa(e))throw Error(w(40));return e._reactRootContainer?(Xt(function(){Ja(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Ae.unstable_batchedUpdates=yl;Ae.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!Xa(r))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ja(e,t,r,!1,a)};Ae.version="18.3.1-next-f1338f8080-20240426";function fu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fu)}catch(e){console.error(e)}}fu(),fc.exports=Ae;var cm=fc.exports,Vo=cm;Mi.createRoot=Vo.createRoot,Mi.hydrateRoot=Vo.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function En(){return En=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},En.apply(null,arguments)}var bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(bt||(bt={}));const Wo="popstate";function dm(e){e===void 0&&(e={});function t(a,i){let{pathname:s,search:l,hash:o}=a.location;return zs("",{pathname:s,search:l,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(a,i){return typeof i=="string"?i:Da(i)}return pm(t,r,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function um(){return Math.random().toString(36).substr(2,8)}function Go(e,t){return{usr:e.state,key:e.key,idx:t}}function zs(e,t,r,a){return r===void 0&&(r=null),En({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pr(t):t,{state:r,key:t&&t.key||a||um()})}function Da(e){let{pathname:t="/",search:r="",hash:a=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Pr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function pm(e,t,r,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:s=!1}=a,l=i.history,o=bt.Pop,c=null,d=m();d==null&&(d=0,l.replaceState(En({},l.state,{idx:d}),""));function m(){return(l.state||{idx:null}).idx}function f(){o=bt.Pop;let N=m(),u=N==null?null:N-d;d=N,c&&c({action:o,location:v.location,delta:u})}function g(N,u){o=bt.Push;let p=zs(v.location,N,u);d=m()+1;let h=Go(p,d),b=v.createHref(p);try{l.pushState(h,"",b)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(b)}s&&c&&c({action:o,location:v.location,delta:1})}function x(N,u){o=bt.Replace;let p=zs(v.location,N,u);d=m();let h=Go(p,d),b=v.createHref(p);l.replaceState(h,"",b),s&&c&&c({action:o,location:v.location,delta:0})}function j(N){let u=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof N=="string"?N:Da(N);return p=p.replace(/ $/,"%20"),Q(u,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,u)}let v={get action(){return o},get location(){return e(i,l)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Wo,f),c=N,()=>{i.removeEventListener(Wo,f),c=null}},createHref(N){return t(i,N)},createURL:j,encodeLocation(N){let u=j(N);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:g,replace:x,go(N){return l.go(N)}};return v}var Qo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qo||(Qo={}));function fm(e,t,r){return r===void 0&&(r="/"),mm(e,t,r)}function mm(e,t,r,a){let i=typeof t=="string"?Pr(t):t,s=Cl(i.pathname||"/",r);if(s==null)return null;let l=hu(e);hm(l);let o=null,c=Cm(s);for(let d=0;o==null&&d<l.length;++d)o=km(l[d],c);return o}function hu(e,t,r,a){t===void 0&&(t=[]),r===void 0&&(r=[]),a===void 0&&(a="");let i=(s,l,o)=>{let c={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(Q(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=At([a,c.relativePath]),m=r.concat(c);s.children&&s.children.length>0&&(Q(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),hu(s.children,t,m,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:Nm(d,s.index),routesMeta:m})};return e.forEach((s,l)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))i(s,l);else for(let c of gu(s.path))i(s,l,c)}),t}function gu(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(a.length===0)return i?[s,""]:[s];let l=gu(a.join("/")),o=[];return o.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function hm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:wm(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}const gm=/^:[\w-]+$/,xm=3,vm=2,ym=1,bm=10,jm=-2,Yo=e=>e==="*";function Nm(e,t){let r=e.split("/"),a=r.length;return r.some(Yo)&&(a+=jm),t&&(a+=vm),r.filter(i=>!Yo(i)).reduce((i,s)=>i+(gm.test(s)?xm:s===""?ym:bm),a)}function wm(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function km(e,t,r){let{routesMeta:a}=e,i={},s="/",l=[];for(let o=0;o<a.length;++o){let c=a[o],d=o===a.length-1,m=s==="/"?t:t.slice(s.length)||"/",f=Sm({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),g=c.route;if(!f)return null;Object.assign(i,f.params),l.push({params:i,pathname:At([s,f.pathname]),pathnameBase:Am(At([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=At([s,f.pathnameBase]))}return l}function Sm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=Em(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:a.reduce((d,m,f)=>{let{paramName:g,isOptional:x}=m;if(g==="*"){let v=o[f]||"";l=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const j=o[f];return x&&!j?d[g]=void 0:d[g]=(j||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:l,pattern:e}}function Em(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),mu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(a.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function Cm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Cl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function zm(e,t){t===void 0&&(t="/");let{pathname:r,search:a="",hash:i=""}=typeof e=="string"?Pr(e):e,s;return r?(r=xu(r),r.startsWith("/")?s=Ko(r.substring(1),"/"):s=Ko(r,t)):s=t,{pathname:s,search:Pm(a),hash:Rm(i)}}function Ko(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Ii(e,t,r,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function zl(e,t){let r=Tm(e);return t?r.map((a,i)=>i===r.length-1?a.pathname:a.pathnameBase):r.map(a=>a.pathnameBase)}function Tl(e,t,r,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=Pr(e):(i=En({},e),Q(!i.pathname||!i.pathname.includes("?"),Ii("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),Ii("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),Ii("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,o;if(l==null)o=r;else{let f=t.length-1;if(!a&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}o=f>=0?t[f]:"/"}let c=zm(i,o),d=l&&l!=="/"&&l.endsWith("/"),m=(s||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const xu=e=>e.replace(/\/\/+/g,"/"),At=e=>xu(e.join("/")),Am=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Pm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Lm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vu=["post","put","patch","delete"];new Set(vu);const Im=["get",...vu];new Set(Im);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cn(){return Cn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Cn.apply(null,arguments)}const Al=y.createContext(null),Mm=y.createContext(null),Dt=y.createContext(null),ei=y.createContext(null),_t=y.createContext({outlet:null,matches:[],isDataRoute:!1}),yu=y.createContext(null);function Dm(e,t){let{relative:r}=t===void 0?{}:t;Rr()||Q(!1);let{basename:a,navigator:i}=y.useContext(Dt),{hash:s,pathname:l,search:o}=ju(e,{relative:r}),c=l;return a!=="/"&&(c=l==="/"?a:At([a,l])),i.createHref({pathname:c,search:o,hash:s})}function Rr(){return y.useContext(ei)!=null}function Lr(){return Rr()||Q(!1),y.useContext(ei).location}function bu(e){y.useContext(Dt).static||y.useLayoutEffect(e)}function Y(){let{isDataRoute:e}=y.useContext(_t);return e?Ym():_m()}function _m(){Rr()||Q(!1);let e=y.useContext(Al),{basename:t,future:r,navigator:a}=y.useContext(Dt),{matches:i}=y.useContext(_t),{pathname:s}=Lr(),l=JSON.stringify(zl(i,r.v7_relativeSplatPath)),o=y.useRef(!1);return bu(()=>{o.current=!0}),y.useCallback(function(d,m){if(m===void 0&&(m={}),!o.current)return;if(typeof d=="number"){a.go(d);return}let f=Tl(d,JSON.parse(l),s,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:At([t,f.pathname])),(m.replace?a.replace:a.push)(f,m.state,m)},[t,a,l,s,e])}function ju(e,t){let{relative:r}=t===void 0?{}:t,{future:a}=y.useContext(Dt),{matches:i}=y.useContext(_t),{pathname:s}=Lr(),l=JSON.stringify(zl(i,a.v7_relativeSplatPath));return y.useMemo(()=>Tl(e,JSON.parse(l),s,r==="path"),[e,l,s,r])}function Om(e,t){return Um(e,t)}function Um(e,t,r,a){Rr()||Q(!1);let{navigator:i}=y.useContext(Dt),{matches:s}=y.useContext(_t),l=s[s.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Lr(),m;if(t){var f;let N=typeof t=="string"?Pr(t):t;c==="/"||(f=N.pathname)!=null&&f.startsWith(c)||Q(!1),m=N}else m=d;let g=m.pathname||"/",x=g;if(c!=="/"){let N=c.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let j=fm(e,{pathname:x}),v=$m(j&&j.map(N=>Object.assign({},N,{params:Object.assign({},o,N.params),pathname:At([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:At([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,r,a);return t&&v?y.createElement(ei.Provider,{value:{location:Cn({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:bt.Pop}},v):v}function qm(){let e=Qm(),t=Lm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),r?y.createElement("pre",{style:i},r):null,null)}const Bm=y.createElement(qm,null);class Hm extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?y.createElement(_t.Provider,{value:this.props.routeContext},y.createElement(yu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Fm(e){let{routeContext:t,match:r,children:a}=e,i=y.useContext(Al);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(_t.Provider,{value:t},a)}function $m(e,t,r,a){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=a)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,o=(i=r)==null?void 0:i.errors;if(o!=null){let m=l.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);m>=0||Q(!1),l=l.slice(0,Math.min(l.length,m+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let m=0;m<l.length;m++){let f=l[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=m),f.route.id){let{loaderData:g,errors:x}=r,j=f.route.loader&&g[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||j){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,f,g)=>{let x,j=!1,v=null,N=null;r&&(x=o&&f.route.id?o[f.route.id]:void 0,v=f.route.errorElement||Bm,c&&(d<0&&g===0?(Km("route-fallback"),j=!0,N=null):d===g&&(j=!0,N=f.route.hydrateFallbackElement||null)));let u=t.concat(l.slice(0,g+1)),p=()=>{let h;return x?h=v:j?h=N:f.route.Component?h=y.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=m,y.createElement(Fm,{match:f,routeContext:{outlet:m,matches:u,isDataRoute:r!=null},children:h})};return r&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?y.createElement(Hm,{location:r.location,revalidation:r.revalidation,component:v,error:x,children:p(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):p()},null)}var Nu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Nu||{}),wu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wu||{});function Vm(e){let t=y.useContext(Al);return t||Q(!1),t}function Wm(e){let t=y.useContext(Mm);return t||Q(!1),t}function Gm(e){let t=y.useContext(_t);return t||Q(!1),t}function ku(e){let t=Gm(),r=t.matches[t.matches.length-1];return r.route.id||Q(!1),r.route.id}function Qm(){var e;let t=y.useContext(yu),r=Wm(),a=ku();return t!==void 0?t:(e=r.errors)==null?void 0:e[a]}function Ym(){let{router:e}=Vm(Nu.UseNavigateStable),t=ku(wu.UseNavigateStable),r=y.useRef(!1);return bu(()=>{r.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Cn({fromRouteId:t},s)))},[e,t])}const Zo={};function Km(e,t,r){Zo[e]||(Zo[e]=!0)}function Zm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Xm(e){let{to:t,replace:r,state:a,relative:i}=e;Rr()||Q(!1);let{future:s,static:l}=y.useContext(Dt),{matches:o}=y.useContext(_t),{pathname:c}=Lr(),d=Y(),m=Tl(t,zl(o,s.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(m);return y.useEffect(()=>d(JSON.parse(f),{replace:r,state:a,relative:i}),[d,f,i,r,a]),null}function K(e){Q(!1)}function Jm(e){let{basename:t="/",children:r=null,location:a,navigationType:i=bt.Pop,navigator:s,static:l=!1,future:o}=e;Rr()&&Q(!1);let c=t.replace(/^\/*/,"/"),d=y.useMemo(()=>({basename:c,navigator:s,static:l,future:Cn({v7_relativeSplatPath:!1},o)}),[c,o,s,l]);typeof a=="string"&&(a=Pr(a));let{pathname:m="/",search:f="",hash:g="",state:x=null,key:j="default"}=a,v=y.useMemo(()=>{let N=Cl(m,c);return N==null?null:{location:{pathname:N,search:f,hash:g,state:x,key:j},navigationType:i}},[c,m,f,g,x,j,i]);return v==null?null:y.createElement(Dt.Provider,{value:d},y.createElement(ei.Provider,{children:r,value:v}))}function eh(e){let{children:t,location:r}=e;return Om(Ts(t),r)}new Promise(()=>{});function Ts(e,t){t===void 0&&(t=[]);let r=[];return y.Children.forEach(e,(a,i)=>{if(!y.isValidElement(a))return;let s=[...t,i];if(a.type===y.Fragment){r.push.apply(r,Ts(a.props.children,s));return}a.type!==K&&Q(!1),!a.props.index||!a.props.children||Q(!1);let l={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(l.children=Ts(a.props.children,s)),r.push(l)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function As(){return As=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},As.apply(null,arguments)}function th(e,t){if(e==null)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;r[a]=e[a]}return r}function rh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nh(e,t){return e.button===0&&(!t||t==="_self")&&!rh(e)}const ah=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ih="6";try{window.__reactRouterVersion=ih}catch{}const sh="startTransition",Xo=Zu[sh];function lh(e){let{basename:t,children:r,future:a,window:i}=e,s=y.useRef();s.current==null&&(s.current=dm({window:i,v5Compat:!0}));let l=s.current,[o,c]=y.useState({action:l.action,location:l.location}),{v7_startTransition:d}=a||{},m=y.useCallback(f=>{d&&Xo?Xo(()=>c(f)):c(f)},[c,d]);return y.useLayoutEffect(()=>l.listen(m),[l,m]),y.useEffect(()=>Zm(a),[a]),y.createElement(Jm,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:l,future:a})}const oh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X=y.forwardRef(function(t,r){let{onClick:a,relative:i,reloadDocument:s,replace:l,state:o,target:c,to:d,preventScrollReset:m,viewTransition:f}=t,g=th(t,ah),{basename:x}=y.useContext(Dt),j,v=!1;if(typeof d=="string"&&ch.test(d)&&(j=d,oh))try{let h=new URL(window.location.href),b=d.startsWith("//")?new URL(h.protocol+d):new URL(d),k=Cl(b.pathname,x);b.origin===h.origin&&k!=null?d=k+b.search+b.hash:v=!0}catch{}let N=Dm(d,{relative:i}),u=dh(d,{replace:l,state:o,target:c,preventScrollReset:m,relative:i,viewTransition:f});function p(h){a&&a(h),h.defaultPrevented||u(h)}return y.createElement("a",As({},g,{href:j||N,onClick:v||s?a:p,ref:r,target:c}))});var Jo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Jo||(Jo={}));var ec;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ec||(ec={}));function dh(e,t){let{target:r,replace:a,state:i,preventScrollReset:s,relative:l,viewTransition:o}=t===void 0?{}:t,c=Y(),d=Lr(),m=ju(e,{relative:l});return y.useCallback(f=>{if(nh(f,r)){f.preventDefault();let g=a!==void 0?a:Da(d)===Da(m);c(e,{replace:g,state:i,preventScrollReset:s,relative:l,viewTransition:o})}},[d,c,m,a,i,r,e,s,l,o])}const ee={id:"USR-8902",name:"Rajesh Sharma",phone:"+91 98765 43210",email:"rajesh.sharma@example.com",currentLocation:{address:"Plot 42, 2nd Avenue, Anna Nagar West, Chennai - 600040",lat:13.085,lng:80.21,city:"Chennai",landmark:"Near Roundtana Metro Station"},emergencyContacts:[{name:"Priya Sharma (Spouse)",phone:"+91 98765 43211",relationship:"Spouse"},{name:"Dr. S. K. Raman",phone:"+91 98400 11223",relationship:"Family Physician"}],bloodGroup:"B+",allergies:"Penicillin",medicalNotes:"Mild hypertension"},jt=[{id:"DRV-201",name:"Kumar Selvam",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",phone:"+91 94441 23456",rating:4.9,reviewsCount:382,tripsCompleted:428,experience:"6 Years Emergency Driving",status:"online",isAvailable:!0,currentLocation:{address:"Near Thirumangalam Flyover, Chennai",lat:13.0892,lng:80.1985},assignedAmbulanceId:"AMB-301",certifications:["First Responder Certified","Defibrillator Operator","Defensive Driving Gold"]},{id:"DRV-202",name:"Manoj Verma",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",phone:"+91 98882 34567",rating:4.8,reviewsCount:264,tripsCompleted:312,experience:"4.5 Years Emergency Driving",status:"online",isAvailable:!0,currentLocation:{address:"Koyambedu Junction, Chennai",lat:13.0712,lng:80.2015},assignedAmbulanceId:"AMB-302",certifications:["BLS Level 2 Certified","CPR Specialist"]},{id:"DRV-203",name:"Anand Sundaram",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",phone:"+91 97773 45678",rating:4.7,reviewsCount:172,tripsCompleted:198,experience:"3 Years Experience",status:"online",isAvailable:!0,currentLocation:{address:"Shenoy Nagar Metro, Chennai",lat:13.0784,lng:80.2241},assignedAmbulanceId:"AMB-303",certifications:["Basic EMT Certified"]}],Ve=[{id:"AMB-301",unitName:"Ambulance Unit Alpha",vehicleNumber:"TN-01-AB-1234",type:"Advanced Life Support",typeCode:"ALS",category:"Critical Care Mobile ICU",distance:"2.1 km",distanceVal:2.1,eta:"6 min",etaMinutes:6,status:"Available",driverId:"DRV-201",driverName:"Kumar Selvam",driverPhone:"+91 94441 23456",rating:4.9,baseFare:"₹1,499",estimatedCost:"₹1,850",equipment:["Transport Ventilator (Hamilton-T1)","Defibrillator / AED (Zoll X-Series)","Multiparameter ICU Monitor","Dual Oxygen Cylinders (4000L)","12-Lead ECG Telemetry","Emergency Resuscitation Drug Kit"],recommended:!0,aiMatchScore:98,aiMatchReason:"Optimal match for severe emergencies. Equipped with Mobile ICU ventilator, closest response vector (2.1 km), and fastest clear-lane ETA."},{id:"AMB-302",unitName:"Ambulance Unit Bravo",vehicleNumber:"TN-09-CD-5678",type:"Basic Life Support",typeCode:"BLS",category:"Emergency Trauma Transport",distance:"2.8 km",distanceVal:2.8,eta:"7 min",etaMinutes:7,status:"Available",driverId:"DRV-202",driverName:"Manoj Verma",driverPhone:"+91 98882 34567",rating:4.8,baseFare:"₹950",estimatedCost:"₹1,200",equipment:["High Flow Oxygen Delivery","Trauma Immobilization Spinal Board","Vacuum Splints & Neck Collars","Suction Machine & Bag-Valve-Mask","Emergency First Aid & Burn Dressing Kit"],recommended:!1,aiMatchScore:89,aiMatchReason:"Well-suited for fractures, non-invasive trauma, and stable medical transfers."},{id:"AMB-303",unitName:"Ambulance Unit Charlie",vehicleNumber:"TN-02-EF-9012",type:"Basic Life Support",typeCode:"BLS",category:"Rapid First Responder",distance:"3.5 km",distanceVal:3.5,eta:"9 min",etaMinutes:9,status:"Available",driverId:"DRV-203",driverName:"Anand Sundaram",driverPhone:"+91 97773 45678",rating:4.7,baseFare:"₹799",estimatedCost:"₹1,050",equipment:["Standard Oxygen Inhaler","Foldable Wheelchair & Stretcher","Standard Trauma Kit","Pulse Oximeter & BP Monitor"],recommended:!1,aiMatchScore:82,aiMatchReason:"Reliable unit for non-critical ambulatory patients and elderly transfers."}],Ce=[{id:"HSP-01",name:"Apollo Multi-Speciality Hospital",category:"Apex Trauma & Cardiac Emergency Care",address:"21 Greams Road, Thousand Lights, Chennai - 600006",distance:"5.4 km",eta:"12 min",phone:"+91 44 2829 0200",emergencyDept:"24/7 Level-1 Emergency & Critical Trauma Bay 4",emergencyHotline:"1066",icuBedsAvailable:7,bloodBankStatus:"O+, A+, B+, AB+ available",rating:4.9,openStatus:"Open 24/7",facilities:["24/7 Cath Lab","Level-1 Trauma Center","Dedicated Stroke Team","Pediatric ICU","Blood Bank"]},{id:"HSP-02",name:"MIOT International Hospital",category:"Comprehensive Orthopaedics & Trauma Hub",address:"4/112 Mount Poonamallee Road, Manapakkam, Chennai - 600089",distance:"7.2 km",eta:"16 min",phone:"+91 44 4200 2288",emergencyDept:"Rapid Resuscitation & Acute Trauma Suite",emergencyHotline:"+91 44 2249 2288",icuBedsAvailable:4,bloodBankStatus:"All critical groups stocked",rating:4.8,openStatus:"Open 24/7",facilities:["Emergency Ortho Care","Neurosurgical OT","Hyperbaric Oxygen Wing","24/7 Imaging"]},{id:"HSP-03",name:"Govt. Multi-Speciality Hospital (Omandurar)",category:"Government Tertiary Emergency Hospital",address:"Omandurar Estate, Anna Salai, Chennai - 600002",distance:"6.1 km",eta:"14 min",phone:"+91 44 2530 5000",emergencyDept:"State Emergency Casualty & Triage Wing",emergencyHotline:"108",icuBedsAvailable:14,bloodBankStatus:"Government Central Blood Reserve",rating:4.6,openStatus:"Open 24/7",facilities:["Govt Casualty Unit","Free Emergency Stabilization","Mass Casualty Care","24/7 Pharmacy"]}],uh=[{id:"heart",label:"Heart Emergency",icon:"HeartPulse",severity:"critical",desc:"Chest pain, cardiac arrest, palpitations, stroke signs",suggestedType:"ALS"},{id:"breathing",label:"Breathing Problem",icon:"Wind",severity:"critical",desc:"Severe shortness of breath, asthma attack, choking",suggestedType:"ALS"},{id:"accident",label:"Accident",icon:"CarFront",severity:"high",desc:"Road vehicular collision, heavy vehicle collision, fall from height",suggestedType:"ALS"},{id:"injury",label:"Injury",icon:"Bone",severity:"moderate",desc:"Bone fractures, severe cuts, head laceration, burn injury",suggestedType:"BLS"},{id:"medical",label:"Medical Emergency",icon:"Stethoscope",severity:"high",desc:"Unconsciousness, severe allergic reaction, seizures",suggestedType:"ALS"},{id:"other",label:"Other",icon:"AlertCircle",severity:"normal",desc:"Scheduled transfer, maternal emergency, general critical care",suggestedType:"BLS"}],ph=[{id:"REQ-9081",date:"Yesterday, 8:40 PM",patientName:"Kavitha Raman",emergencyType:"Breathing Problem",ambulanceNumber:"TN-01-AB-1234",driverName:"Kumar Selvam",pickupLocation:"Anna Nagar West, Chennai",destinationHospital:"Apollo Multi-Speciality Hospital",status:"COMPLETED",duration:"22 mins",distance:"5.8 km",rating:5},{id:"REQ-8742",date:"12 Sep 2026, 3:15 PM",patientName:"Rajesh Sharma (Self)",emergencyType:"Accident",ambulanceNumber:"TN-09-CD-5678",driverName:"Manoj Verma",pickupLocation:"Poonamallee High Rd, Chennai",destinationHospital:"MIOT International Hospital",status:"COMPLETED",duration:"18 mins",distance:"4.2 km",rating:5}],Gr=400,ft=e=>new Promise(t=>setTimeout(t,e));class fh{constructor(){this.baseUrl="/api",this.isMockMode=!0}async login(t){if(!this.isMockMode)return(await fetch(`${this.baseUrl}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();await ft(Gr);const{email:r,role:a}=t;if(a==="driver"){const i=jt[0];return{success:!0,user:{id:i.id,name:i.name,role:"driver",phone:i.phone,ambulanceId:i.assignedAmbulanceId,avatar:i.avatar},token:"mock-jwt-driver-token-2026"}}return{success:!0,user:{id:ee.id,name:ee.name,role:"patient",phone:ee.phone,email:r||ee.email},token:"mock-jwt-patient-token-2026"}}async getNearbyAmbulances(t,r,a="Heart Emergency"){return this.isMockMode?(await ft(Gr+300),{success:!0,count:Ve.length,ambulances:Ve.map(i=>{let s=i.aiMatchScore,l=i.recommended;return a==="Injury"&&i.typeCode==="BLS"&&(s=95,l=!0),{...i,aiMatchScore:s,recommended:l}})}):(await fetch(`${this.baseUrl}/ambulances/nearby?lat=${t}&lng=${r}&type=${encodeURIComponent(a)}`)).json()}async createAmbulanceRequest(t){return this.isMockMode?(await ft(Gr),{success:!0,request:{id:`REQ-${Math.floor(1e3+Math.random()*9e3)}`,createdAt:new Date().toISOString(),patientName:t.patientName||ee.name,patientAge:t.patientAge||45,patientGender:t.patientGender||"Male",contactNumber:t.contactNumber||ee.phone,emergencyType:t.emergencyType||"Heart Emergency",additionalNotes:t.additionalNotes||"",pickupLocation:t.pickupLocation||ee.currentLocation,destinationHospital:t.destinationHospital||Ce[0],ambulance:t.ambulance||Ve[0],driver:t.driver||jt[0],status:"REQUESTED"}}):(await fetch(`${this.baseUrl}/ambulance/request`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async acceptRequest(t,r){return this.isMockMode?(await ft(Gr),{success:!0,message:"Ambulance dispatch accepted by driver",status:"DRIVER_ACCEPTED",driver:jt.find(a=>a.id===r)||jt[0]}):(await fetch(`${this.baseUrl}/ambulance/accept`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({requestId:t,driverId:r})})).json()}async getAmbulanceStatus(t){return this.isMockMode?(await ft(200),{success:!0,requestId:t,status:"ON_THE_WAY",etaMinutes:5,distanceKm:1.8}):(await fetch(`${this.baseUrl}/ambulance/status?requestId=${t}`)).json()}async getAmbulanceLocation(t){return this.isMockMode?(await ft(150),{success:!0,ambulanceId:t,lat:13.0865,lng:80.205,heading:145,speedKmh:48,timestamp:new Date().toISOString()}):(await fetch(`${this.baseUrl}/ambulance/location?ambulanceId=${t}`)).json()}async completeTrip(t,r){return this.isMockMode?(await ft(Gr),{success:!0,message:"Trip safely completed and hospital handover recorded",status:"COMPLETED",completedAt:new Date().toISOString()}):(await fetch(`${this.baseUrl}/trip/complete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({requestId:t,...r})})).json()}async getHospitals(){return this.isMockMode?(await ft(100),{success:!0,hospitals:Ce}):(await fetch(`${this.baseUrl}/hospitals`)).json()}}const Ps=new fh,Su=y.createContext(),mh=({children:e})=>{const[t,r]=y.useState(()=>{const m=localStorage.getItem("resqai_user");if(m)try{return JSON.parse(m)}catch(f){console.error(f)}return{...ee,role:"patient",isAuthenticated:!0}}),[a,i]=y.useState(()=>{const m=localStorage.getItem("resqai_driver");if(m)try{return JSON.parse(m)}catch(f){console.error(f)}return{...jt[0],isOnline:!0,isAuthenticated:!0}});y.useEffect(()=>{t&&localStorage.setItem("resqai_user",JSON.stringify(t))},[t]),y.useEffect(()=>{a&&localStorage.setItem("resqai_driver",JSON.stringify(a))},[a]);const s=async m=>{const f=await Ps.login(m);if(f.success){const g={...ee,...f.user,isAuthenticated:!0};return r(g),g}throw new Error("Login failed")},l=async m=>{const f=await Ps.login({...m,role:"driver"});if(f.success){const g={...jt[0],...f.user,isOnline:!0,isAuthenticated:!0};return i(g),g}throw new Error("Driver login failed")},o=()=>{i(m=>({...m,isOnline:!m.isOnline}))},c=()=>{r(null),localStorage.removeItem("resqai_user")},d=()=>{i(null),localStorage.removeItem("resqai_driver")};return n.jsx(Su.Provider,{value:{currentUser:t,currentDriver:a,loginUser:s,loginDriver:l,logoutUser:c,logoutDriver:d,toggleDriverOnline:o,setCurrentUser:r,setCurrentDriver:i},children:e})},Ir=()=>y.useContext(Su),Eu=y.createContext(),hh=({children:e})=>{const[t,r]=y.useState({pickupAddress:ee.currentLocation.address,lat:ee.currentLocation.lat,lng:ee.currentLocation.lng,landmark:ee.currentLocation.landmark,destinationHospital:Ce[0]}),[a,i]=y.useState({patientName:ee.name,patientAge:"45",patientGender:"Male",emergencyType:"Heart Emergency",contactNumber:ee.phone,additionalNotes:"Patient experiencing sudden tightness in chest, conscious, 2nd floor with elevator."}),[s,l]=y.useState(Ve[0]),[o,c]=y.useState(()=>{const v=localStorage.getItem("resqai_active_request");if(v)try{return JSON.parse(v)}catch(N){console.error(N)}return null}),[d,m]=y.useState(()=>{const v=localStorage.getItem("resqai_recent_requests");if(v)try{return JSON.parse(v)}catch(N){console.error(N)}return ph});y.useEffect(()=>{o?localStorage.setItem("resqai_active_request",JSON.stringify(o)):localStorage.removeItem("resqai_active_request")},[o]),y.useEffect(()=>{localStorage.setItem("resqai_recent_requests",JSON.stringify(d))},[d]);const f=(v=null)=>{const N=v||s||Ve[0],u=jt.find(b=>b.assignedAmbulanceId===N.id)||jt[0],h={id:`REQ-${Math.floor(1e3+Math.random()*9e3)}`,createdAt:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),timestamp:Date.now(),patientName:a.patientName||"Emergency Patient",patientAge:a.patientAge||"40",patientGender:a.patientGender||"Unspecified",emergencyType:a.emergencyType||"Medical Emergency",contactNumber:a.contactNumber||"+91 98765 43210",additionalNotes:a.additionalNotes||"Immediate assistance requested",pickupLocation:{address:t.pickupAddress,lat:t.lat,lng:t.lng,landmark:t.landmark},destinationHospital:t.destinationHospital||Ce[0],ambulance:N,driver:u,status:"REQUESTED",etaMinutes:N.etaMinutes||6,distanceKm:N.distanceVal||2.1,timeline:[{stage:"REQUESTED",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),note:"Emergency request received and broadcasted to nearest ALS fleet."}]};return c(h),h},g=(v,N={})=>{c(u=>{if(!u)return null;const p={stage:v,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),note:N.note||`Status transitioned to ${v}`};return{...u,...N,status:v,timeline:[...u.timeline||[],p]}})},x=(v=5,N="")=>{if(!o)return;const u={...o,status:"COMPLETED",rating:v,feedback:N,completedAt:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),duration:"18 mins",distance:`${o.distanceKm||2.1} km`};c(u),m(p=>[{id:u.id,date:"Just now",patientName:u.patientName,emergencyType:u.emergencyType,ambulanceNumber:u.ambulance.vehicleNumber,driverName:u.driver.name,pickupLocation:u.pickupLocation.address,destinationHospital:u.destinationHospital.name,status:"COMPLETED",duration:"18 mins",distance:`${u.distanceKm||2.1} km`,rating:v},...p])},j=()=>{c(null),localStorage.removeItem("resqai_active_request")};return n.jsx(Eu.Provider,{value:{draftLocation:t,setDraftLocation:r,draftPatient:a,setDraftPatient:i,selectedAmbulance:s,setSelectedAmbulance:l,activeRequest:o,setActiveRequest:c,recentRequests:d,submitEmergencyRequest:f,updateRequestStatus:g,completeTrip:x,closeCurrentRequest:j},children:e})},xe=()=>y.useContext(Eu);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(e,t)=>{const r=y.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:o="",children:c,...d},m)=>y.createElement("svg",{ref:m,...gh,width:i,height:i,stroke:a,strokeWidth:l?Number(s)*24/Number(i):s,className:["lucide",`lucide-${xh(e)}`,o].join(" "),...d},[...t.map(([f,g])=>y.createElement(f,g)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=A("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=A("Ambulance",[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=A("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=A("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=A("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=A("Bone",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=A("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=A("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=A("CarFront",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=A("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=A("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=A("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=A("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=A("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=A("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=A("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=A("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=A("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=A("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=A("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=A("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=A("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=A("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=A("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=A("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=A("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=A("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=A("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=A("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=A("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=A("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=A("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=A("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=A("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=A("Siren",[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=A("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=A("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=A("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=A("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=A("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=A("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=A("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=A("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=A("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=A("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=A("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Bh=()=>{const[e,t]=y.useState(!1),r=Y(),a=Lr(),{currentUser:i,currentDriver:s}=Ir(),{activeRequest:l}=xe(),o=a.pathname.startsWith("/driver");return n.jsxs("header",{className:"app-header-root",children:[n.jsx("aside",{className:"emergency-top-banner",children:n.jsxs("div",{className:"banner-content",children:[n.jsxs("div",{className:"banner-left",children:[n.jsx("span",{className:"pulse-beacon","aria-hidden":"true"}),n.jsxs("span",{children:[n.jsx("strong",{children:"EMERGENCY DISPATCH HOTLINE:"})," For immediate critical life-support, dial"," ",n.jsx("strong",{style:{color:"#fff"},children:"108 / 112"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsxs("a",{href:"tel:108",className:"banner-phone-pill",children:[n.jsx(Ll,{size:13}),n.jsx("span",{children:"Dial 108 Direct"})]}),n.jsx("span",{style:{fontSize:"0.78rem",color:"#fca5a5"},children:"• Fast Response • Safe Journey • Reliable Care"})]})]})}),n.jsxs("nav",{className:"main-navbar",children:[n.jsxs("div",{className:"nav-wrapper",children:[n.jsxs(X,{to:"/",className:"brand-logo",onClick:()=>t(!1),children:[n.jsxs("div",{className:"logo-icon-box",children:[n.jsx(Cr,{className:"siren-svg",size:24}),n.jsx("span",{className:"ping-wave"})]}),n.jsxs("div",{className:"brand-text-block",children:[n.jsxs("span",{className:"brand-title",children:["ResQ",n.jsx("span",{className:"brand-ai",children:"AI"})]}),n.jsx("span",{className:"brand-tagline",children:"SMART DISPATCH"})]})]}),n.jsxs("div",{className:"nav-links-desktop",children:[n.jsx(X,{to:"/",className:`nav-link ${a.pathname==="/"?"active":""}`,children:"Home"}),n.jsx("a",{href:"/#how-it-works",className:"nav-link",children:"How It Works"}),n.jsx("a",{href:"/#ambulances",className:"nav-link",children:"Ambulance"}),n.jsx("a",{href:"/#hospitals",className:"nav-link",children:"Hospitals"}),n.jsx("a",{href:"/#about",className:"nav-link",children:"About"}),n.jsx(X,{to:"/dashboard",className:`nav-link ${a.pathname==="/dashboard"?"active":""}`,children:"Dashboard"})]}),n.jsxs("div",{className:"nav-actions-desktop",children:[n.jsxs(X,{to:o?"/dashboard":"/driver/dashboard",className:"portal-toggle-pill",title:"Toggle between Patient and Driver interface",children:[n.jsx(ti,{size:16}),n.jsx("span",{children:o?"Patient Portal":"Driver Portal"})]}),l&&n.jsxs("button",{onClick:()=>{l.status==="COMPLETED"?r("/request/completed"):l.status==="ARRIVED"?r("/request/arrived"):l.status==="PATIENT_PICKED_UP"||l.status==="AT_HOSPITAL"?r("/request/hospital"):l.status==="DRIVER_ACCEPTED"?r("/request/accepted"):l.status==="REQUESTED"||l.status==="MATCHING"?r("/request/sent"):r("/request/tracking")},className:"active-pill-btn",title:"View Active Ambulance Dispatch",children:[n.jsx("span",{className:"active-dot"}),n.jsx("span",{children:"Live Request"})]}),n.jsxs("button",{onClick:()=>r("/request/location"),className:"nav-emergency-btn",id:"headerRequestAmbulanceBtn",children:[n.jsx(Ge,{size:18}),n.jsx("span",{children:"Request Ambulance"})]}),i?n.jsx(X,{to:"/dashboard",className:"user-avatar-btn",title:i.name,children:n.jsx("div",{className:"avatar-circle",children:i.name.charAt(0)})}):n.jsx(X,{to:"/login",className:"login-link",children:"Login"})]}),n.jsx("button",{className:"mobile-hamburger-btn",onClick:()=>t(!e),"aria-label":"Toggle Navigation Menu",children:e?n.jsx(Au,{size:24}):n.jsx(Ah,{size:24})})]}),e&&n.jsxs("div",{className:"mobile-dropdown-menu",children:[n.jsx(X,{to:"/",className:"mobile-nav-link",onClick:()=>t(!1),children:"Home"}),n.jsx(X,{to:"/dashboard",className:"mobile-nav-link",onClick:()=>t(!1),children:"User Dashboard"}),n.jsx("a",{href:"/#how-it-works",className:"mobile-nav-link",onClick:()=>t(!1),children:"How It Works"}),n.jsx("a",{href:"/#ambulances",className:"mobile-nav-link",onClick:()=>t(!1),children:"Ambulance Fleet"}),n.jsx("a",{href:"/#hospitals",className:"mobile-nav-link",onClick:()=>t(!1),children:"Hospitals Network"}),n.jsx(X,{to:"/driver/dashboard",className:"mobile-nav-link",onClick:()=>t(!1),children:"Driver Dashboard"}),n.jsx("div",{style:{marginTop:"16px"},children:n.jsxs("button",{onClick:()=>{t(!1),r("/request/location")},className:"btn-emergency",style:{width:"100%"},children:[n.jsx(Ge,{size:20}),n.jsx("span",{children:"REQUEST AMBULANCE NOW"})]})})]})]}),n.jsx("style",{children:`
        .app-header-root {
          position: sticky;
          top: 0;
          z-index: 999;
          width: 100%;
        }

        .main-navbar {
          background: rgba(6, 9, 19, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
        }

        .nav-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-icon-box {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(185, 28, 28, 0.35) 100%);
          border: 1px solid rgba(239, 68, 68, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px rgba(239, 68, 68, 0.3);
        }

        .siren-svg {
          color: #ef4444;
          animation: siren-wiggle 3s ease-in-out infinite;
        }

        @keyframes siren-wiggle {
          0%, 80%, 100% { transform: rotate(0deg); }
          85% { transform: rotate(-8deg); }
          90% { transform: rotate(8deg); }
          95% { transform: rotate(-5deg); }
        }

        .ping-wave {
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          border: 1.5px solid rgba(239, 68, 68, 0.6);
          animation: pulse-ring 2.2s infinite;
          pointer-events: none;
        }

        .brand-text-block {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          line-height: 1.1;
        }

        .brand-ai {
          color: #ef4444;
          font-weight: 900;
        }

        .brand-tagline {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent-cyan);
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .nav-link {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: var(--transition);
          padding: 6px 4px;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: #ffffff;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ef4444;
          border-radius: 2px;
        }

        .nav-actions-desktop {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .portal-toggle-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 600;
          transition: var(--transition);
        }

        .portal-toggle-pill:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .active-pill-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #6ee7b7;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }

        .active-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: beacon-pulse 1.2s infinite;
        }

        .nav-emergency-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.88rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(239, 68, 68, 0.4);
          transition: var(--transition);
        }

        .nav-emergency-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 18px rgba(239, 68, 68, 0.65);
        }

        .avatar-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #1e40af);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #fff;
          font-size: 0.95rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .login-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
          padding: 8px 12px;
        }

        .mobile-hamburger-btn {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .mobile-dropdown-menu {
          display: flex;
          flex-direction: column;
          padding: 16px 24px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-subtle);
          gap: 12px;
        }

        .mobile-nav-link {
          padding: 8px 0;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-main);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 992px) {
          .nav-links-desktop {
            display: none;
          }
          .mobile-hamburger-btn {
            display: block;
          }
        }

        @media (max-width: 640px) {
          .nav-actions-desktop .portal-toggle-pill {
            display: none;
          }
          .nav-emergency-btn span {
            display: none;
          }
          .nav-emergency-btn {
            padding: 9px;
            border-radius: 50%;
          }
        }
      `})]})},Hh=()=>n.jsxs("footer",{className:"resq-footer-root",children:[n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"footer-emergency-row",children:[n.jsxs("div",{className:"helpline-card highlight",children:[n.jsx("div",{className:"helpline-icon red",children:n.jsx(Ll,{size:20})}),n.jsxs("div",{children:[n.jsx("span",{className:"helpline-title",children:"National Emergency Ambulance"}),n.jsx("a",{href:"tel:108",className:"helpline-number",children:"Dial 108"})]})]}),n.jsxs("div",{className:"helpline-card",children:[n.jsx("div",{className:"helpline-icon blue",children:n.jsx(ni,{size:20})}),n.jsxs("div",{children:[n.jsx("span",{className:"helpline-title",children:"All-in-One Emergency Services"}),n.jsx("a",{href:"tel:112",className:"helpline-number",children:"Dial 112"})]})]}),n.jsxs("div",{className:"helpline-card",children:[n.jsx("div",{className:"helpline-icon teal",children:n.jsx(Pl,{size:20})}),n.jsxs("div",{children:[n.jsx("span",{className:"helpline-title",children:"Apex Cardiac & Trauma Care"}),n.jsx("a",{href:"tel:1066",className:"helpline-number",children:"Dial 1066"})]})]})]}),n.jsxs("div",{className:"footer-main-grid",children:[n.jsxs("div",{className:"footer-brand-col",children:[n.jsxs("div",{className:"brand-logo-footer",children:[n.jsx("div",{className:"logo-icon-box-small",children:n.jsx(Cr,{size:20,color:"#ef4444"})}),n.jsxs("span",{className:"brand-name",children:["ResQ",n.jsx("span",{className:"accent-red",children:"AI"})]})]}),n.jsx("p",{className:"footer-desc",children:"AI-driven rapid emergency dispatch network linking critical patients with nearby private and advanced life support ambulances within seconds."}),n.jsxs("div",{className:"footer-status-pill",children:[n.jsx("span",{className:"operational-dot"}),n.jsx("span",{children:"All Dispatch Gateways Operational • 99.98% Uptime"})]})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h5",{className:"footer-heading",children:"Emergency Navigation"}),n.jsxs("ul",{className:"footer-links",children:[n.jsx("li",{children:n.jsx(X,{to:"/",children:"Home Overview"})}),n.jsx("li",{children:n.jsx(X,{to:"/request/location",children:"Request Ambulance"})}),n.jsx("li",{children:n.jsx(X,{to:"/dashboard",children:"User Dashboard"})}),n.jsx("li",{children:n.jsx("a",{href:"/#how-it-works",children:"How It Works"})}),n.jsx("li",{children:n.jsx("a",{href:"/#ambulances",children:"Fleet Categories"})}),n.jsx("li",{children:n.jsx("a",{href:"/#hospitals",children:"Partner Hospitals"})})]})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h5",{className:"footer-heading",children:"Fleet Capabilities"}),n.jsxs("ul",{className:"footer-links",children:[n.jsx("li",{children:n.jsx("span",{className:"text-link",children:"Advanced Life Support (ALS)"})}),n.jsx("li",{children:n.jsx("span",{className:"text-link",children:"Basic Life Support (BLS)"})}),n.jsx("li",{children:n.jsx("span",{className:"text-link",children:"Neonatal & Pediatric Mobile ICU"})}),n.jsx("li",{children:n.jsx("span",{className:"text-link",children:"Patient Transit Service (PTS)"})}),n.jsx("li",{children:n.jsx("span",{className:"text-link",children:"Critical Cardiac Mobile Units"})})]})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h5",{className:"footer-heading",children:"Portals & Access"}),n.jsxs("ul",{className:"footer-links",children:[n.jsx("li",{children:n.jsx(X,{to:"/driver/login",children:"Driver Portal Login"})}),n.jsx("li",{children:n.jsx(X,{to:"/driver/dashboard",children:"Driver Dispatch Console"})}),n.jsx("li",{children:n.jsx(X,{to:"/login",children:"Patient Account"})}),n.jsx("li",{children:n.jsx("a",{href:"#compliance",children:"Safety & AI Protocol"})}),n.jsx("li",{children:n.jsx("a",{href:"#privacy",children:"Privacy & HIPAA Security"})})]})]})]}),n.jsx("div",{className:"footer-disclaimer-box",children:n.jsxs("p",{className:"disclaimer-text",children:[n.jsx("strong",{children:"CRITICAL MEDICAL DISCLAIMER:"})," ResQAI is an emergency connectivity and intelligent routing dispatch platform. It locates, scores and alerts nearby available private ambulance fleets based on GPS proximity, ETA and required life-support equipment. ResQAI does not perform clinical diagnosis. In case of life-threatening delays, immediately dial national emergency number ",n.jsx("strong",{children:"108"}),"."]})}),n.jsxs("div",{className:"footer-bottom-bar",children:[n.jsxs("div",{className:"footer-copy",children:["© ",new Date().getFullYear()," ResQAI Emergency Health Systems Inc. All rights reserved."]}),n.jsxs("div",{className:"footer-meta-tags",children:[n.jsx("span",{children:"Fast Response"}),n.jsx("span",{children:"•"}),n.jsx("span",{children:"Safe Journey"}),n.jsx("span",{children:"•"}),n.jsx("span",{children:"Reliable Care"})]})]})]}),n.jsx("style",{children:`
        .resq-footer-root {
          background: #04060c;
          border-top: 1px solid var(--border-subtle);
          padding: 48px 0 24px;
          margin-top: auto;
          position: relative;
          z-index: 10;
        }

        .footer-emergency-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin-bottom: 40px;
        }

        .helpline-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: var(--transition);
        }

        .helpline-card.highlight {
          border-color: rgba(239, 68, 68, 0.4);
          background: rgba(239, 68, 68, 0.08);
        }

        .helpline-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .helpline-icon.red {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .helpline-icon.blue {
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
        }

        .helpline-icon.teal {
          background: rgba(20, 184, 166, 0.2);
          color: #2dd4bf;
        }

        .helpline-title {
          display: block;
          font-size: 0.76rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .helpline-number {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          transition: var(--transition);
        }

        .helpline-number:hover {
          color: #ef4444;
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 32px;
          margin-bottom: 36px;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .brand-logo-footer {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-icon-box-small {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
        }

        .accent-red {
          color: #ef4444;
        }

        .footer-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 340px;
        }

        .footer-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #6ee7b7;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .operational-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
        }

        .footer-heading {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a, .footer-links .text-link {
          font-size: 0.85rem;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: #ffffff;
          transform: translateX(3px);
          display: inline-block;
        }

        .footer-disclaimer-box {
          background: rgba(239, 68, 68, 0.04);
          border: 1px dashed rgba(239, 68, 68, 0.25);
          border-radius: var(--radius-md);
          padding: 14px 20px;
          margin-bottom: 24px;
        }

        .disclaimer-text {
          font-size: 0.78rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 20px;
          font-size: 0.8rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-meta-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94a3b8;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 580px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]}),Rs=({onClick:e,text:t="REQUEST AMBULANCE",subtext:r="AI Automated Emergency Dispatch",size:a="large",className:i="",id:s="emergencyRequestActionBtn"})=>n.jsxs("button",{id:s,onClick:e,className:`resq-emergency-btn ${a} ${i}`,"aria-label":"Emergency Request Ambulance",children:[n.jsx("span",{className:"beacon-ring"}),n.jsx("span",{className:"beacon-ring ring-delayed"}),n.jsxs("div",{className:"btn-content-inner",children:[n.jsx("div",{className:"siren-pulse-box",children:n.jsx(Cr,{className:"emergency-icon-svg",size:a==="large"?28:22})}),n.jsxs("div",{className:"text-col",children:[n.jsx("span",{className:"btn-headline",children:t}),r&&n.jsx("span",{className:"btn-subheadline",children:r})]}),n.jsx("div",{className:"action-arrow",children:n.jsx(ve,{size:a==="large"?24:18})})]}),n.jsx("style",{children:`
        .resq-emergency-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 50%, #991b1b 100%);
          border: 1px solid rgba(254, 202, 202, 0.4);
          border-radius: var(--radius-full);
          color: #ffffff;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3);
          user-select: none;
        }

        .resq-emergency-btn.large {
          padding: 16px 36px;
        }

        .resq-emergency-btn.medium {
          padding: 12px 24px;
        }

        .resq-emergency-btn:hover {
          transform: translateY(-3px) scale(1.02);
          background: linear-gradient(135deg, #f87171 0%, #dc2626 50%, #991b1b 100%);
          box-shadow: 0 0 45px rgba(239, 68, 68, 0.9), inset 0 2px 4px rgba(255, 255, 255, 0.4);
        }

        .resq-emergency-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .btn-content-inner {
          display: flex;
          align-items: center;
          gap: 16px;
          z-index: 2;
        }

        .siren-pulse-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.25);
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.4);
        }

        .emergency-icon-svg {
          animation: siren-flash 1s infinite alternate;
        }

        @keyframes siren-flash {
          0% { filter: drop-shadow(0 0 2px #fff); }
          100% { filter: drop-shadow(0 0 10px #ffedd5); }
        }

        .text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .btn-headline {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1.1;
          color: #ffffff;
        }

        .btn-subheadline {
          font-size: 0.76rem;
          font-weight: 600;
          color: #fee2e2;
          letter-spacing: 0.02em;
          opacity: 0.9;
        }

        .action-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .resq-emergency-btn:hover .action-arrow {
          transform: translateX(4px);
        }

        .beacon-ring {
          position: absolute;
          inset: -6px;
          border-radius: var(--radius-full);
          border: 2px solid rgba(239, 68, 68, 0.6);
          animation: beacon-expand 2.4s infinite cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .ring-delayed {
          animation-delay: 1.2s;
        }

        @keyframes beacon-expand {
          0% {
            transform: scale(0.96);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          .resq-emergency-btn.large {
            padding: 14px 22px;
            width: 100%;
          }
          .btn-headline {
            font-size: 1.05rem;
          }
        }
      `})]}),Fh=()=>{const e=Y(),t=()=>{e("/request/location")};return n.jsxs("div",{className:"landing-page-root",children:[n.jsx("section",{className:"hero-section",children:n.jsxs("div",{className:"container hero-grid",children:[n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"emergency-slogan-badge",children:[n.jsx("span",{className:"pulse-dot"}),n.jsx("span",{children:"Fast Response • Safe Journey • Reliable Care"})]}),n.jsxs("h1",{className:"hero-title",children:["Emergency Help, ",n.jsx("br",{}),n.jsx("span",{className:"hero-title-highlight",children:"Just a Tap Away"})]}),n.jsx("p",{className:"hero-subtitle",children:"ResQAI instantly connects critical patients with nearest available Advanced Life Support (ALS) and Basic Life Support (BLS) ambulances using intelligent algorithmic fleet routing and live GPS telemetry."}),n.jsxs("div",{className:"hero-actions-row",children:[n.jsx(Rs,{onClick:t,text:"NEED AMBULANCE",subtext:"Instant Dispatch Priority Line",size:"large",id:"heroNeedAmbulanceBtn"}),n.jsxs("a",{href:"#how-it-works",className:"btn-secondary hero-sec-btn",children:[n.jsx("span",{children:"How It Works"}),n.jsx(ve,{size:18})]})]}),n.jsxs("div",{className:"hero-metrics-ticker",children:[n.jsxs("div",{className:"ticker-item",children:[n.jsx("span",{className:"ticker-number",children:"5.8 min"}),n.jsx("span",{className:"ticker-label",children:"Avg. Response Time"})]}),n.jsx("div",{className:"ticker-separator"}),n.jsxs("div",{className:"ticker-item",children:[n.jsx("span",{className:"ticker-number",children:"420+"}),n.jsx("span",{className:"ticker-label",children:"Certified Fleet Units"})]}),n.jsx("div",{className:"ticker-separator"}),n.jsxs("div",{className:"ticker-item",children:[n.jsx("span",{className:"ticker-number",children:"99.8%"}),n.jsx("span",{className:"ticker-label",children:"Safe Triage Handover"})]})]})]}),n.jsx("div",{className:"hero-visual",children:n.jsxs("div",{className:"ambulance-graphic-card glass-panel glow-red",children:[n.jsx("div",{className:"radar-orbit-ring ring-1"}),n.jsx("div",{className:"radar-orbit-ring ring-2"}),n.jsxs("div",{className:"siren-beacon-indicator",children:[n.jsx("span",{className:"siren-light red"}),n.jsx("span",{className:"siren-light blue"})]}),n.jsx("div",{className:"illustration-wrapper",children:n.jsxs("svg",{viewBox:"0 0 500 320",className:"ambulance-hero-svg",children:[n.jsx("rect",{x:"20",y:"270",width:"460",height:"12",rx:"6",fill:"#1e293b"}),n.jsx("path",{d:"M 40 276 L 100 276 M 150 276 L 210 276 M 260 276 L 320 276 M 370 276 L 430 276",stroke:"#f59e0b",strokeWidth:"3",strokeDasharray:"16 14"}),n.jsx("ellipse",{cx:"250",cy:"265",rx:"190",ry:"16",fill:"rgba(0,0,0,0.5)"}),n.jsxs("g",{id:"ambulanceBody",children:[n.jsx("path",{d:"M 90 230 L 90 100 Q 90 85 105 85 L 310 85 L 370 140 L 415 155 Q 425 160 425 175 L 425 230 Z",fill:"#ffffff"}),n.jsx("rect",{x:"80",y:"220",width:"350",height:"15",rx:"4",fill:"#0f172a"}),n.jsx("path",{d:"M 90 170 L 330 170 L 370 190 L 425 190 L 425 210 L 90 210 Z",fill:"#ef4444"}),n.jsx("path",{d:"M 315 95 L 365 142 L 315 142 Z",fill:"#0284c7",opacity:"0.85"}),n.jsx("path",{d:"M 370 145 L 415 158 L 415 175 L 370 175 Z",fill:"#38bdf8",opacity:"0.75"}),n.jsx("rect",{x:"130",y:"105",width:"80",height:"45",rx:"6",fill:"#0ea5e9",opacity:"0.6"}),n.jsx("rect",{x:"225",y:"105",width:"70",height:"45",rx:"6",fill:"#0ea5e9",opacity:"0.6"}),n.jsxs("g",{transform:"translate(170, 190) scale(0.9)",children:[n.jsx("circle",{cx:"0",cy:"0",r:"16",fill:"#ffffff"}),n.jsx("path",{d:"M -3 -11 L 3 -11 L 3 -3 L 11 -3 L 11 3 L 3 3 L 3 11 L -3 11 L -3 3 L -11 3 L -11 -3 L -3 -3 Z",fill:"#ef4444"})]}),n.jsxs("text",{x:"210",y:"196",fill:"#ffffff",fontSize:"15",fontWeight:"900",fontFamily:"sans-serif",letterSpacing:"1",children:["ResQ",n.jsx("tspan",{fill:"#fee2e2",children:"AI"})," • ALS-01"]}),n.jsxs("g",{transform:"translate(240, 72)",children:[n.jsx("rect",{x:"-35",y:"0",width:"70",height:"14",rx:"4",fill:"#1e293b"}),n.jsx("rect",{x:"-32",y:"2",width:"28",height:"10",rx:"3",fill:"#ef4444",children:n.jsx("animate",{attributeName:"opacity",values:"1;0.2;1",dur:"0.8s",repeatCount:"indefinite"})}),n.jsx("rect",{x:"4",y:"2",width:"28",height:"10",rx:"3",fill:"#38bdf8",children:n.jsx("animate",{attributeName:"opacity",values:"0.2;1;0.2",dur:"0.8s",repeatCount:"indefinite"})})]}),n.jsxs("g",{transform:"translate(150, 235)",children:[n.jsx("circle",{r:"30",fill:"#0f172a"}),n.jsx("circle",{r:"18",fill:"#475569"}),n.jsx("circle",{r:"8",fill:"#94a3b8"})]}),n.jsxs("g",{transform:"translate(365, 235)",children:[n.jsx("circle",{r:"30",fill:"#0f172a"}),n.jsx("circle",{r:"18",fill:"#475569"}),n.jsx("circle",{r:"8",fill:"#94a3b8"})]}),n.jsx("polygon",{points:"425,180 500,160 500,240 425,210",fill:"url(#headlightBeam)",opacity:"0.35"})]}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"headlightBeam",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[n.jsx("stop",{offset:"0%",stopColor:"#fef08a",stopOpacity:"0.8"}),n.jsx("stop",{offset:"100%",stopColor:"#fef08a",stopOpacity:"0"})]})})]})}),n.jsxs("div",{className:"hero-overlay-pill",children:[n.jsx("div",{className:"pill-pulse-ring"}),n.jsxs("div",{className:"pill-text-block",children:[n.jsx("span",{className:"pill-title",children:"AI Matching Engine Active"}),n.jsx("span",{className:"pill-desc",children:"3 ALS Ambulances nearby ready to dispatch"})]})]})]})})]})}),n.jsx("section",{id:"how-it-works",className:"section-padded how-it-works-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header-center",children:[n.jsx("span",{className:"section-badge",children:"RAPID DISPATCH LIFECYCLE"}),n.jsx("h2",{className:"section-title",children:"How ResQAI Works in 4 Simple Steps"}),n.jsx("p",{className:"section-subtitle",children:"Engineered with zero latency to reduce response times during the critical Golden Hour of medical emergencies."})]}),n.jsxs("div",{className:"how-it-works-grid",children:[n.jsxs("div",{className:"hiw-card glass-panel",children:[n.jsx("div",{className:"hiw-step-num",children:"01"}),n.jsx("div",{className:"hiw-icon-box red",children:n.jsx(me,{size:24})}),n.jsx("h3",{className:"hiw-card-title",children:"Share Location"}),n.jsx("p",{className:"hiw-card-text",children:"Tap 'Use Current Location' or enter pickup landmark and preferred emergency hospital destination."})]}),n.jsxs("div",{className:"hiw-card glass-panel",children:[n.jsx("div",{className:"hiw-step-num",children:"02"}),n.jsx("div",{className:"hiw-icon-box cyan",children:n.jsx(ut,{size:24})}),n.jsx("h3",{className:"hiw-card-title",children:"Specify Condition"}),n.jsx("p",{className:"hiw-card-text",children:"Select emergency type (Heart, Accident, Breathing). Our AI determines required onboard equipment."})]}),n.jsxs("div",{className:"hiw-card glass-panel",children:[n.jsx("div",{className:"hiw-step-num",children:"03"}),n.jsx("div",{className:"hiw-icon-box purple",children:n.jsx(Rl,{size:24})}),n.jsx("h3",{className:"hiw-card-title",children:"AI Fleet Ranking"}),n.jsx("p",{className:"hiw-card-text",children:"ResQAI analyzes distance, traffic corridor, and life support tier to notify optimal nearest responders."})]}),n.jsxs("div",{className:"hiw-card glass-panel",children:[n.jsx("div",{className:"hiw-step-num",children:"04"}),n.jsx("div",{className:"hiw-icon-box green",children:n.jsx(Ye,{size:24})}),n.jsx("h3",{className:"hiw-card-title",children:"Live Tracking & Triage"}),n.jsx("p",{className:"hiw-card-text",children:"Track ambulance route live, communicate with driver, and notify the hospital emergency bay in advance."})]})]})]})}),n.jsx("section",{id:"ambulances",className:"section-padded fleet-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header-center",children:[n.jsx("span",{className:"section-badge",children:"EQUIPPED FOR ANY EMERGENCY"}),n.jsx("h2",{className:"section-title",children:"Certified Emergency Fleet Categories"}),n.jsx("p",{className:"section-subtitle",children:"Every ambulance in our network is equipped with standard or advanced life support equipment and staffed by certified EMTs."})]}),n.jsx("div",{className:"fleet-grid",children:Ve.map(r=>n.jsxs("div",{className:"fleet-card glass-panel",children:[n.jsxs("div",{className:"fleet-card-top",children:[n.jsx("span",{className:`badge ${r.typeCode==="ALS"?"badge-als":"badge-bls"}`,children:r.type}),n.jsxs("span",{className:"fleet-eta-tag",children:[r.eta," avg response"]})]}),n.jsx("h3",{className:"fleet-card-title",children:r.unitName}),n.jsx("p",{className:"fleet-card-category",children:r.category}),n.jsxs("div",{className:"fleet-equip-list",children:[n.jsx("span",{className:"equip-heading",children:"Key Clinical Equipment:"}),n.jsx("ul",{children:r.equipment.map((a,i)=>n.jsxs("li",{children:[n.jsx(ke,{size:13,color:"#10b981"}),n.jsx("span",{children:a})]},i))})]}),n.jsxs("div",{className:"fleet-card-footer",children:[n.jsxs("span",{className:"fare-tag",children:["Base Fare: ",r.baseFare]}),n.jsx("button",{onClick:()=>e("/request/location"),className:"btn-select-fleet",children:"Request This Unit"})]})]},r.id))})]})}),n.jsx("section",{id:"hospitals",className:"section-padded hospitals-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header-center",children:[n.jsx("span",{className:"section-badge",children:"Apex Healthcare Network"}),n.jsx("h2",{className:"section-title",children:"Directly Integrated Emergency Rooms"}),n.jsx("p",{className:"section-subtitle",children:"ResQAI syncs patient vitals with receiving trauma centers prior to arrival for immediate resuscitation readiness."})]}),n.jsx("div",{className:"hospitals-grid",children:Ce.map(r=>n.jsxs("div",{className:"hosp-landing-card glass-panel",children:[n.jsxs("div",{className:"hosp-top-row",children:[n.jsx("div",{className:"hosp-icon",children:n.jsx(Qe,{size:24})}),n.jsxs("div",{children:[n.jsx("span",{className:"hosp-status-pill",children:"Level 1 Emergency Care"}),n.jsx("h3",{className:"hosp-name",children:r.name})]})]}),n.jsx("p",{className:"hosp-dept",children:r.emergencyDept}),n.jsx("p",{className:"hosp-addr",children:r.address}),n.jsxs("div",{className:"hosp-stats-row",children:[n.jsxs("div",{className:"hosp-stat",children:[n.jsxs("span",{className:"val green",children:[r.icuBedsAvailable," Beds"]}),n.jsx("span",{className:"lbl",children:"ICU Resuscitation"})]}),n.jsxs("div",{className:"hosp-stat",children:[n.jsx("span",{className:"val blue",children:r.eta}),n.jsx("span",{className:"lbl",children:"Clear Corridor ETA"})]})]}),n.jsxs("a",{href:`tel:${r.phone}`,className:"hosp-call-btn",children:[n.jsx(Ll,{size:14}),n.jsxs("span",{children:["Call Emergency Dept: ",r.phone]})]})]},r.id))})]})}),n.jsx("section",{id:"about",className:"section-padded about-section",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"about-grid glass-panel",children:[n.jsxs("div",{className:"about-text-col",children:[n.jsx("span",{className:"section-badge",children:"INTELLIGENT HEALTHCARE CONNECTIVITY"}),n.jsx("h2",{className:"about-title",children:"Why ResQAI is Revolutionizing Emergency Transit"}),n.jsx("p",{className:"about-p",children:"Traditional emergency calls often suffer from dispatcher delays, vague location markers, and mismatched medical capabilities."}),n.jsx("p",{className:"about-p",children:"ResQAI replaces manual telephone dispatch with an intelligent multi-agent routing algorithm. It factors in real-time GPS telemetry, traffic choke points, patient age and symptoms, and exact vehicle equipment inventories (such as portable ventilators and pediatric kits)."}),n.jsxs("div",{className:"about-highlights-grid",children:[n.jsxs("div",{className:"about-highlight-item",children:[n.jsx(_a,{size:20,color:"#a855f7"}),n.jsxs("div",{children:[n.jsx("h4",{children:"Explainable AI Ranking"}),n.jsx("p",{children:"Transparent matching metrics ensuring the most medically suitable ambulance is chosen."})]})]}),n.jsxs("div",{className:"about-highlight-item",children:[n.jsx(ni,{size:20,color:"#10b981"}),n.jsxs("div",{children:[n.jsx("h4",{children:"Verified EMT Responders"}),n.jsx("p",{children:"All fleet drivers are vetted with mandatory advanced first-aid certifications."})]})]})]}),n.jsx("div",{style:{marginTop:"24px"},children:n.jsx(Rs,{onClick:t,text:"REQUEST AMBULANCE NOW",size:"large"})})]}),n.jsxs("div",{className:"about-stats-col",children:[n.jsxs("div",{className:"stat-card red",children:[n.jsx("h3",{children:"99.9%"}),n.jsx("p",{children:"Dispatch Gateway Reliability"})]}),n.jsxs("div",{className:"stat-card cyan",children:[n.jsx("h3",{children:"6.2 min"}),n.jsx("p",{children:"Median Urban Arrival Time"})]}),n.jsxs("div",{className:"stat-card purple",children:[n.jsx("h3",{children:"100%"}),n.jsx("p",{children:"End-to-End Encrypted Telemetry"})]}),n.jsxs("div",{className:"stat-card green",children:[n.jsx("h3",{children:"12,400+"}),n.jsx("p",{children:"Emergency Lives Reached"})]})]})]})})}),n.jsx("style",{children:`
        .landing-page-root {
          width: 100%;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          padding: 60px 0 80px;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .emergency-slogan-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #fca5a5;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: beacon-pulse 1.2s infinite;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .hero-title-highlight {
          background: linear-gradient(135deg, #ef4444 0%, #f97316 50%, #facc15 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 580px;
        }

        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .hero-sec-btn {
          padding: 16px 28px;
          border-radius: var(--radius-full);
          font-size: 1rem;
        }

        .hero-metrics-ticker {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ticker-item {
          display: flex;
          flex-direction: column;
        }

        .ticker-number {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 900;
          color: #ffffff;
        }

        .ticker-label {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        .ticker-separator {
          width: 1px;
          height: 32px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Hero Graphic */
        .hero-visual {
          position: relative;
        }

        .ambulance-graphic-card {
          position: relative;
          border-radius: var(--radius-xl);
          padding: 30px;
          background: rgba(15, 23, 42, 0.85);
          overflow: hidden;
          min-height: 360px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .radar-orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(239, 68, 68, 0.2);
          pointer-events: none;
        }

        .radar-orbit-ring.ring-1 {
          width: 280px;
          height: 280px;
          animation: spin-slow 20s linear infinite;
        }

        .radar-orbit-ring.ring-2 {
          width: 420px;
          height: 420px;
          animation: spin-slow 30s linear infinite reverse;
        }

        .illustration-wrapper {
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .ambulance-hero-svg {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.6));
        }

        .hero-overlay-pill {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: rgba(10, 15, 30, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(239, 68, 68, 0.35);
          border-radius: var(--radius-md);
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 5;
        }

        .pill-pulse-ring {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 10px #ef4444;
          animation: beacon-pulse 1.2s infinite;
          flex-shrink: 0;
        }

        .pill-text-block {
          display: flex;
          flex-direction: column;
        }

        .pill-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
        }

        .pill-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Generic Section Headings */
        .section-padded {
          padding: 80px 0;
        }

        .section-header-center {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 48px;
        }

        .section-badge {
          display: inline-block;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.25);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }

        .section-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .section-subtitle {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* How It Works Grid */
        .how-it-works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }

        .hiw-card {
          padding: 28px 24px;
          border-radius: var(--radius-lg);
          position: relative;
          transition: var(--transition);
        }

        .hiw-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .hiw-step-num {
          position: absolute;
          top: 20px;
          right: 20px;
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.06);
        }

        .hiw-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .hiw-icon-box.red { background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); }
        .hiw-icon-box.cyan { background: rgba(6, 182, 212, 0.15); color: #06b6d4; border: 1px solid rgba(6, 182, 212, 0.3); }
        .hiw-icon-box.purple { background: rgba(168, 85, 247, 0.15); color: #a855f7; border: 1px solid rgba(168, 85, 247, 0.3); }
        .hiw-icon-box.green { background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); }

        .hiw-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .hiw-card-text {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        /* Fleet Grid */
        .fleet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .fleet-card {
          padding: 26px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
        }

        .fleet-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .fleet-eta-tag {
          font-size: 0.78rem;
          font-weight: 700;
          color: #38bdf8;
        }

        .fleet-card-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
        }

        .fleet-card-category {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .fleet-equip-list {
          background: rgba(0, 0, 0, 0.2);
          border-radius: var(--radius-md);
          padding: 14px;
          margin-bottom: 20px;
          flex: 1;
        }

        .equip-heading {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .fleet-equip-list ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .fleet-equip-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #e2e8f0;
        }

        .fleet-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 16px;
        }

        .fare-tag {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .btn-select-fleet {
          padding: 8px 16px;
          border-radius: var(--radius-md);
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-select-fleet:hover {
          background: #ef4444;
          color: #fff;
        }

        /* Hospitals Grid */
        .hospitals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .hosp-landing-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
        }

        .hosp-top-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 12px;
        }

        .hosp-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(6, 182, 212, 0.15);
          color: #06b6d4;
          border: 1px solid rgba(6, 182, 212, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hosp-status-pill {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .hosp-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .hosp-dept {
          font-size: 0.82rem;
          color: #fca5a5;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .hosp-addr {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .hosp-stats-row {
          display: flex;
          gap: 16px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-md);
          padding: 12px 14px;
          margin-bottom: 16px;
        }

        .hosp-stat {
          display: flex;
          flex-direction: column;
        }

        .hosp-stat .val {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
        }

        .hosp-stat .val.green { color: #34d399; }
        .hosp-stat .val.blue { color: #38bdf8; }

        .hosp-stat .lbl {
          font-size: 0.68rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        .hosp-call-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: #e2e8f0;
          font-size: 0.82rem;
          font-weight: 600;
          transition: var(--transition);
        }

        .hosp-call-btn:hover {
          background: rgba(56, 189, 248, 0.15);
          border-color: #38bdf8;
          color: #fff;
        }

        /* About Section */
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          padding: 48px;
          border-radius: var(--radius-xl);
        }

        .about-text-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .about-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .about-p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .about-highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 12px;
        }

        .about-highlight-item {
          display: flex;
          gap: 14px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          border: 1px solid var(--border-subtle);
        }

        .about-highlight-item h4 {
          font-size: 0.95rem;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .about-highlight-item p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .about-stats-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .stat-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid var(--border-subtle);
        }

        .stat-card.red { background: rgba(239, 68, 68, 0.08); border-color: rgba(239, 68, 68, 0.25); }
        .stat-card.cyan { background: rgba(6, 182, 212, 0.08); border-color: rgba(6, 182, 212, 0.25); }
        .stat-card.purple { background: rgba(168, 85, 247, 0.08); border-color: rgba(168, 85, 247, 0.25); }
        .stat-card.green { background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.25); }

        .stat-card h3 {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
        }

        .stat-card p {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            align-items: center;
          }
          .hero-subtitle {
            margin: 0 auto;
          }
          .hero-actions-row {
            justify-content: center;
          }
          .hero-metrics-ticker {
            justify-content: center;
          }
          .about-grid {
            grid-template-columns: 1fr;
            padding: 28px;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .about-stats-col {
            grid-template-columns: 1fr;
          }
          .hero-metrics-ticker {
            flex-direction: column;
            gap: 12px;
          }
          .ticker-separator {
            display: none;
          }
        }
      `})]})},$h=()=>{const e=Y(),{loginUser:t}=Ir(),[r,a]=y.useState("rajesh.sharma@example.com"),[i,s]=y.useState("emergency2026"),[l,o]=y.useState(!1),[c,d]=y.useState(""),m=async g=>{if(g.preventDefault(),!r||!i){d("Please provide email and password");return}try{o(!0),await t({email:r,password:i}),e("/dashboard")}catch{d("Login failed. Please try again.")}finally{o(!1)}},f=async()=>{o(!0),await t({email:"rajesh.sharma@example.com",password:"demo"}),e("/dashboard")};return n.jsxs("div",{className:"login-page-root container-narrow",children:[n.jsxs("div",{className:"login-card glass-panel glow-red",children:[n.jsxs("div",{className:"login-card-header",children:[n.jsx("div",{className:"brand-badge-circle",children:n.jsx(Cr,{size:32,color:"#ef4444"})}),n.jsx("span",{className:"login-subtag",children:"PATIENT & FAMILY CITIZEN PORTAL"}),n.jsx("h1",{className:"login-title",children:"Sign In to ResQAI"}),n.jsx("p",{className:"login-text",children:"Access your saved medical vitals, past ambulance rides, and emergency family contacts."})]}),c&&n.jsxs("div",{className:"auth-error-box",children:[n.jsx(ri,{size:16}),n.jsx("span",{children:c})]}),n.jsxs("form",{onSubmit:m,className:"login-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"userEmail",children:[n.jsx("span",{children:"Email Address or Phone"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"input-wrap",children:[n.jsx(Th,{size:18,className:"field-icon"}),n.jsx("input",{id:"userEmail",type:"text",className:"form-input with-icon",placeholder:"rajesh.sharma@example.com",value:r,onChange:g=>a(g.target.value),required:!0})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"userPassword",children:[n.jsx("span",{children:"Password"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"input-wrap",children:[n.jsx(Cu,{size:18,className:"field-icon"}),n.jsx("input",{id:"userPassword",type:"password",className:"form-input with-icon",placeholder:"••••••••",value:i,onChange:g=>s(g.target.value),required:!0})]})]}),n.jsxs("button",{type:"submit",className:"btn-auth-submit",disabled:l,id:"userLoginSubmitBtn",children:[n.jsx("span",{children:l?"AUTHENTICATING...":"SIGN IN TO DASHBOARD"}),n.jsx(ve,{size:18})]}),n.jsx("div",{className:"demo-login-wrapper",children:n.jsxs("button",{type:"button",className:"btn-demo-quick",onClick:f,children:[n.jsx(ke,{size:16,color:"#10b981"}),n.jsx("span",{children:"Instant 1-Click Demo Login (Rajesh Sharma)"})]})})]}),n.jsxs("div",{className:"auth-footer-options",children:[n.jsxs("p",{className:"register-prompt",children:["Don't have an emergency profile?"," ",n.jsx(X,{to:"/register",className:"auth-link",children:"Register now"})]}),n.jsx("div",{className:"driver-portal-redirect",children:n.jsx(X,{to:"/driver/login",className:"driver-link",children:"Looking for Driver Portal? Sign in as Ambulance Driver →"})})]})]}),n.jsx("style",{children:`
        .login-page-root {
          padding: 60px 20px 80px;
        }

        .login-card {
          padding: 44px 36px;
          border-radius: var(--radius-xl);
          max-width: 520px;
          margin: 0 auto;
        }

        .login-card-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 28px;
        }

        .brand-badge-circle {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.15);
          border: 2px solid #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.4);
        }

        .login-subtag {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #fca5a5;
          margin-bottom: 6px;
        }

        .login-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .login-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .auth-error-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          font-size: 0.82rem;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
        }

        .input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .field-icon {
          position: absolute;
          left: 14px;
          color: var(--text-dim);
          pointer-events: none;
        }

        .form-input.with-icon {
          padding-left: 42px;
        }

        .btn-auth-submit {
          width: 100%;
          padding: 15px 24px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 18px rgba(37, 99, 235, 0.45);
          transition: var(--transition);
          margin-top: 10px;
        }

        .btn-auth-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(37, 99, 235, 0.7);
        }

        .demo-login-wrapper {
          margin-top: 18px;
        }

        .btn-demo-quick {
          width: 100%;
          padding: 11px 16px;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.1);
          border: 1px dashed rgba(16, 185, 129, 0.35);
          color: #6ee7b7;
          font-size: 0.82rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-demo-quick:hover {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10b981;
        }

        .auth-footer-options {
          margin-top: 26px;
          text-align: center;
          font-size: 0.82rem;
          color: var(--text-dim);
        }

        .register-prompt {
          margin-bottom: 12px;
        }

        .auth-link {
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .auth-link:hover {
          text-decoration: underline;
        }

        .driver-link {
          color: #f87171;
          font-weight: 600;
          font-size: 0.78rem;
        }

        .driver-link:hover {
          text-decoration: underline;
        }
      `})]})},Vh=()=>{const e=Y(),{setCurrentUser:t}=Ir(),[r,a]=y.useState({name:"",phone:"",email:"",bloodGroup:"O+",address:"Anna Nagar, Chennai",password:""}),i=s=>{s.preventDefault();const l={id:`USR-${Math.floor(1e3+Math.random()*9e3)}`,name:r.name||"New Patient",phone:r.phone||"+91 98765 00000",email:r.email||"patient@example.com",bloodGroup:r.bloodGroup,currentLocation:{address:r.address,lat:13.085,lng:80.21,landmark:"Main Junction"},emergencyContacts:[{name:"Family Contact",phone:r.phone,relationship:"Kin"}],role:"patient",isAuthenticated:!0};t(l),e("/dashboard")};return n.jsxs("div",{className:"register-page-root container-narrow",children:[n.jsxs("div",{className:"register-card glass-panel",children:[n.jsxs("div",{className:"card-top-icon",children:[n.jsx("div",{className:"icon-circle",children:n.jsx(ut,{size:32,color:"#ef4444"})}),n.jsx("span",{className:"sub-badge",children:"NEW CITIZEN REGISTRATION"}),n.jsx("h1",{className:"title",children:"Create ResQAI Account"}),n.jsx("p",{className:"desc",children:"Store your baseline health records and emergency contacts for instantaneous ambulance booking."})]}),n.jsxs("form",{onSubmit:i,className:"register-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"regName",children:[n.jsx("span",{children:"Full Legal Name"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{id:"regName",type:"text",className:"form-input",placeholder:"e.g. S. Kavitha Raman",value:r.name,onChange:s=>a({...r,name:s.target.value}),required:!0})]}),n.jsxs("div",{className:"form-row-2",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"regPhone",children:[n.jsx("span",{children:"Phone Number"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{id:"regPhone",type:"tel",className:"form-input",placeholder:"+91 98400 11223",value:r.phone,onChange:s=>a({...r,phone:s.target.value}),required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",htmlFor:"regBlood",children:n.jsx("span",{children:"Blood Group"})}),n.jsxs("select",{id:"regBlood",className:"form-select",value:r.bloodGroup,onChange:s=>a({...r,bloodGroup:s.target.value}),children:[n.jsx("option",{value:"A+",children:"A+"}),n.jsx("option",{value:"A-",children:"A-"}),n.jsx("option",{value:"B+",children:"B+"}),n.jsx("option",{value:"B-",children:"B-"}),n.jsx("option",{value:"O+",children:"O+"}),n.jsx("option",{value:"O-",children:"O-"}),n.jsx("option",{value:"AB+",children:"AB+"}),n.jsx("option",{value:"AB-",children:"AB-"})]})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"regEmail",children:[n.jsx("span",{children:"Email Address"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{id:"regEmail",type:"email",className:"form-input",placeholder:"kavitha@example.com",value:r.email,onChange:s=>a({...r,email:s.target.value}),required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"regAddress",children:[n.jsx("span",{children:"Primary Residence / Default Pickup Address"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{id:"regAddress",type:"text",className:"form-input",placeholder:"Door No, Street Name, Area, City",value:r.address,onChange:s=>a({...r,address:s.target.value}),required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"regPassword",children:[n.jsx("span",{children:"Account Password"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{id:"regPassword",type:"password",className:"form-input",placeholder:"••••••••",value:r.password,onChange:s=>a({...r,password:s.target.value}),required:!0})]}),n.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"15px"},children:[n.jsx("span",{children:"COMPLETE REGISTRATION"}),n.jsx(ve,{size:18})]})]}),n.jsxs("div",{className:"foot-prompt",children:["Already registered?"," ",n.jsx(X,{to:"/login",style:{color:"var(--accent-cyan)",fontWeight:"700"},children:"Sign In here"})]})]}),n.jsx("style",{children:`
        .register-page-root {
          padding: 60px 20px 80px;
        }

        .register-card {
          padding: 40px 36px;
          border-radius: var(--radius-xl);
          max-width: 560px;
          margin: 0 auto;
        }

        .card-top-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 24px;
        }

        .icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.15);
          border: 2px solid #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .sub-badge {
          font-size: 0.68rem;
          font-weight: 800;
          color: #fca5a5;
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }

        .title {
          font-size: 1.9rem;
          font-weight: 800;
          color: #ffffff;
        }

        .desc {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 16px;
        }

        .foot-prompt {
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-top: 24px;
        }

        @media (max-width: 640px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Pu=({pickupAddress:e="Plot 42, 2nd Avenue, Anna Nagar West, Chennai",landmark:t="Near Roundtana Metro Station",hospitalName:r="Apollo Multi-Speciality Hospital",hospitalAddress:a="21 Greams Road, Thousand Lights, Chennai",onEdit:i,editable:s=!0})=>n.jsxs("div",{className:"resq-location-card glass-panel",children:[n.jsxs("div",{className:"location-card-header",children:[n.jsxs("span",{className:"card-badge",children:[n.jsx(Ye,{size:13}),n.jsx("span",{children:"ROUTING VECTORS"})]}),s&&i&&n.jsxs("button",{onClick:i,className:"btn-edit-loc",title:"Change Location",children:[n.jsx(Ph,{size:14}),n.jsx("span",{children:"Edit"})]})]}),n.jsxs("div",{className:"location-points-list",children:[n.jsxs("div",{className:"loc-item",children:[n.jsxs("div",{className:"loc-pin-col",children:[n.jsx("div",{className:"pin-circle red",children:n.jsx(me,{size:16})}),n.jsx("div",{className:"loc-stem"})]}),n.jsxs("div",{className:"loc-text-col",children:[n.jsx("span",{className:"loc-role-tag red",children:"PICKUP LOCATION (PATIENT)"}),n.jsx("h4",{className:"loc-address-text",children:e}),t&&n.jsxs("span",{className:"loc-landmark-sub",children:[n.jsx("strong",{children:"Landmark:"})," ",t]})]})]}),n.jsxs("div",{className:"loc-item",children:[n.jsx("div",{className:"loc-pin-col",children:n.jsx("div",{className:"pin-circle cyan",children:n.jsx(Qe,{size:16})})}),n.jsxs("div",{className:"loc-text-col",children:[n.jsx("span",{className:"loc-role-tag cyan",children:"DESTINATION HOSPITAL (CRITICAL CARE)"}),n.jsx("h4",{className:"loc-address-text",children:r}),n.jsx("span",{className:"loc-landmark-sub",children:a})]})]})]}),n.jsx("style",{children:`
        .resq-location-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          margin-bottom: 20px;
        }

        .location-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .btn-edit-loc {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-edit-loc:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.12);
        }

        .location-points-list {
          display: flex;
          flex-direction: column;
        }

        .loc-item {
          display: flex;
          gap: 16px;
          position: relative;
        }

        .loc-pin-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pin-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .pin-circle.red {
          background: rgba(239, 68, 68, 0.2);
          border: 1.5px solid #ef4444;
          color: #ef4444;
        }

        .pin-circle.cyan {
          background: rgba(6, 182, 212, 0.2);
          border: 1.5px solid #06b6d4;
          color: #06b6d4;
        }

        .loc-stem {
          width: 2px;
          height: 32px;
          background: dashed rgba(255, 255, 255, 0.15);
          margin: 4px 0;
        }

        .loc-text-col {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding-bottom: 16px;
        }

        .loc-role-tag {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.06em;
        }

        .loc-role-tag.red {
          color: #f87171;
        }

        .loc-role-tag.cyan {
          color: #67e8f9;
        }

        .loc-address-text {
          font-size: 0.96rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
        }

        .loc-landmark-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `})]}),Ru=({hospital:e,isSelected:t=!1,onSelect:r,showSelect:a=!1})=>{const{name:i="Apollo Multi-Speciality Hospital",category:s="Apex Trauma & Cardiac Care",address:l="21 Greams Road, Thousand Lights, Chennai",distance:o="5.4 km",eta:c="12 min",phone:d="+91 44 2829 0200",emergencyDept:m="24/7 Level-1 Emergency & Critical Trauma Bay 4",icuBedsAvailable:f=7,rating:g=4.9,facilities:x=[]}=e||{};return n.jsxs("div",{className:`resq-hospital-card glass-panel ${t?"selected-hospital":""}`,onClick:r,children:[n.jsxs("div",{className:"hospital-card-top",children:[n.jsxs("div",{className:"hospital-title-wrap",children:[n.jsx("div",{className:"hospital-icon-box",children:n.jsx(Qe,{size:24})}),n.jsxs("div",{children:[n.jsx("div",{className:"hospital-type-badge",children:s}),n.jsx("h3",{className:"hospital-name",children:i}),n.jsxs("span",{className:"hospital-dept-label",children:[n.jsx(zu,{size:12,color:"#ef4444"}),n.jsx("span",{children:m})]})]})]}),n.jsxs("div",{className:"hospital-eta-badge",children:[n.jsx(Ot,{size:13}),n.jsxs("span",{children:[c," (",o,")"]})]})]}),n.jsxs("div",{className:"hospital-body",children:[n.jsxs("div",{className:"hosp-info-row",children:[n.jsx(me,{size:15,className:"info-icon"}),n.jsx("span",{className:"address-text",children:l})]}),n.jsxs("div",{className:"icu-status-bar",children:[n.jsxs("div",{className:"bed-info",children:[n.jsx(vh,{size:15,color:"#10b981"}),n.jsxs("span",{children:[n.jsxs("strong",{children:[f," ICU Resuscitation Beds"]})," Available Now"]})]}),n.jsxs("span",{className:"er-status-dot",children:[n.jsx("span",{className:"dot-green"}),"Triage Level 1 Ready"]})]}),x.length>0&&n.jsx("div",{className:"facilities-tags",children:x.map((j,v)=>n.jsx("span",{className:"fac-pill",children:j},v))}),n.jsxs("div",{className:"hospital-card-actions",children:[n.jsxs("a",{href:`tel:${d}`,className:"btn-call-hosp",onClick:j=>j.stopPropagation(),children:[n.jsx(Mr,{size:15}),n.jsxs("span",{children:["Emergency Dept: ",d]})]}),a&&n.jsx("button",{type:"button",className:`btn-select-hosp ${t?"active":""}`,onClick:r,children:t?"Selected Hospital":"Choose Hospital"})]})]}),n.jsx("style",{children:`
        .resq-hospital-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          transition: var(--transition);
          margin-bottom: 16px;
        }

        .selected-hospital {
          border-color: var(--accent-cyan) !important;
          background: rgba(6, 182, 212, 0.05);
          box-shadow: 0 0 25px -5px rgba(6, 182, 212, 0.3);
        }

        .hospital-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 16px;
        }

        .hospital-title-wrap {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .hospital-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.35);
          color: #06b6d4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hospital-type-badge {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .hospital-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
        }

        .hospital-dept-label {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: #fca5a5;
          margin-top: 4px;
          font-weight: 600;
        }

        .hospital-eta-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          border-radius: var(--radius-full);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: #67e8f9;
          font-size: 0.8rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .hosp-info-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .info-icon {
          color: var(--text-dim);
          flex-shrink: 0;
        }

        .icu-status-bar {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          margin-bottom: 14px;
        }

        .bed-info {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a7f3d0;
        }

        .er-status-dot {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #6ee7b7;
        }

        .dot-green {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
        }

        .facilities-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .fac-pill {
          font-size: 0.72rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }

        .hospital-card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-call-hosp {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          transition: var(--transition);
        }

        .btn-call-hosp:hover {
          background: rgba(56, 189, 248, 0.16);
          color: #fff;
        }

        .btn-select-hosp {
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-subtle);
          color: #ffffff;
          transition: var(--transition);
        }

        .btn-select-hosp.active {
          background: #06b6d4;
          border-color: #06b6d4;
          color: #000;
          font-weight: 700;
        }
      `})]})},Wh=({request:e,onAction:t,actionText:r="View Tracking",isCurrentActive:a=!1})=>{const{id:i,date:s="Recent",patientName:l,emergencyType:o,ambulanceNumber:c,driverName:d,pickupLocation:m,destinationHospital:f,status:g="COMPLETED",duration:x="20 mins",distance:j="5.4 km",rating:v=5}=e,N=typeof m=="object"?m.address:m,u=typeof f=="object"?f.name:f;return n.jsxs("div",{className:`resq-request-card glass-panel ${a?"active-glow":""}`,children:[n.jsxs("div",{className:"card-top-header",children:[n.jsxs("div",{className:"req-id-badge",children:[n.jsx("span",{className:"req-id-text",children:i}),n.jsx("span",{className:"req-date-text",children:s})]}),n.jsxs("div",{className:"req-type-pill",children:[n.jsx(ut,{size:13,color:"#ef4444"}),n.jsx("span",{children:o})]})]}),n.jsxs("div",{className:"req-patient-row",children:[n.jsx("div",{className:"patient-avatar-mini",children:n.jsx(ai,{size:16})}),n.jsxs("div",{children:[n.jsx("h4",{className:"patient-name-title",children:l}),n.jsxs("span",{className:"driver-sub-text",children:["Ambulance: ",n.jsx("strong",{children:c||"TN-01-AB-1234"})," • Driver: ",d||"Kumar"]})]})]}),n.jsxs("div",{className:"req-route-summary",children:[n.jsxs("div",{className:"route-point",children:[n.jsx(me,{size:14,className:"point-pin red"}),n.jsx("span",{className:"route-text",children:N})]}),n.jsxs("div",{className:"route-point",children:[n.jsx(Qe,{size:14,className:"point-pin cyan"}),n.jsx("span",{className:"route-text",children:u})]})]}),n.jsxs("div",{className:"req-footer-stats",children:[n.jsxs("div",{className:"stats-badges",children:[n.jsxs("span",{className:"stat-pill",children:[n.jsx(Ot,{size:12}),n.jsx("span",{children:x})]}),n.jsx("span",{className:"stat-pill",children:n.jsx("span",{children:j})}),v&&n.jsxs("span",{className:"rating-mini-pill",children:[n.jsx(Ln,{size:12,fill:"#f59e0b",color:"#f59e0b"}),n.jsxs("span",{children:[v,".0"]})]})]}),t&&n.jsxs("button",{onClick:()=>t(e),className:"btn-req-action",children:[n.jsx("span",{children:r}),n.jsx(ve,{size:14})]})]}),n.jsx("style",{children:`
        .resq-request-card {
          padding: 18px 20px;
          border-radius: var(--radius-lg);
          margin-bottom: 14px;
          transition: var(--transition);
        }

        .active-glow {
          border-color: rgba(239, 68, 68, 0.45);
          background: rgba(239, 68, 68, 0.05);
          box-shadow: 0 0 25px -5px rgba(239, 68, 68, 0.3);
        }

        .card-top-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .req-id-badge {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .req-id-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }

        .req-date-text {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .req-type-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.74rem;
          font-weight: 700;
          color: #f87171;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .req-patient-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .patient-avatar-mini {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          color: #60a5fa;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .patient-name-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .driver-sub-text {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .req-route-summary {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: var(--radius-md);
          padding: 10px 12px;
          margin-bottom: 12px;
        }

        .route-point {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .point-pin.red {
          color: #ef4444;
          flex-shrink: 0;
        }

        .point-pin.cyan {
          color: #06b6d4;
          flex-shrink: 0;
        }

        .route-text {
          font-size: 0.8rem;
          color: var(--text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .req-footer-stats {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        .stats-badges {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }

        .rating-mini-pill {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.1);
          padding: 3px 7px;
          border-radius: var(--radius-sm);
        }

        .btn-req-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 5px 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-req-action:hover {
          background: #ef4444;
          border-color: #ef4444;
        }
      `})]})},Gh=()=>{var m,f,g,x,j,v,N;const e=Y(),{currentUser:t}=Ir(),{activeRequest:r,recentRequests:a,draftLocation:i,setDraftLocation:s}=xe(),[l,o]=y.useState(Ce[0]),c=()=>{e("/request/location")},d=()=>{if(!r)return;const u=r.status;e(u==="REQUESTED"||u==="MATCHING"?"/request/sent":u==="DRIVER_ACCEPTED"?"/request/accepted":u==="ON_THE_WAY"?"/request/tracking":u==="ARRIVED"?"/request/arrived":u==="PATIENT_PICKED_UP"||u==="AT_HOSPITAL"?"/request/hospital":u==="COMPLETED"?"/request/completed":"/request/tracking")};return n.jsxs("div",{className:"dashboard-page-root container",children:[n.jsxs("div",{className:"dash-header-card glass-panel",children:[n.jsxs("div",{className:"dash-user-row",children:[n.jsx("div",{className:"dash-avatar-large",children:t!=null&&t.name?t.name.charAt(0):"U"}),n.jsxs("div",{className:"dash-user-text",children:[n.jsxs("div",{className:"badge-row",children:[n.jsx("span",{className:"account-type-badge",children:"CITIZEN DISPATCH ACCOUNT"}),n.jsxs("span",{className:"blood-group-badge",children:[n.jsx(ut,{size:12,color:"#ef4444"}),n.jsxs("span",{children:["Blood: ",(t==null?void 0:t.bloodGroup)||"B+"]})]})]}),n.jsx("h1",{className:"dash-user-name",children:(t==null?void 0:t.name)||"Emergency Patient"}),n.jsxs("p",{className:"dash-user-contact",children:[t==null?void 0:t.phone," • ",t==null?void 0:t.email]})]})]}),n.jsxs("div",{className:"dash-quick-contacts",children:[n.jsx("span",{className:"qc-label",children:"Primary Emergency Contact:"}),n.jsx("span",{className:"qc-name",children:"Priya Sharma (Spouse)"}),n.jsxs("a",{href:"tel:+919876543211",className:"qc-phone",children:[n.jsx(Mr,{size:13}),n.jsx("span",{children:"+91 98765 43211"})]})]})]}),n.jsxs("div",{className:"emergency-callout-banner glass-panel glow-red",children:[n.jsxs("div",{className:"callout-content",children:[n.jsxs("div",{className:"callout-pill",children:[n.jsx("span",{className:"beacon-pip"}),n.jsx("span",{children:"24/7 RAPID AMBULANCE DISPATCH"})]}),n.jsx("h2",{className:"callout-heading",children:"Need Urgent Medical Assistance?"}),n.jsx("p",{className:"callout-desc",children:"Instantly alert the closest ALS / BLS ambulances in your immediate vicinity. Location and patient triage are matched in real-time."})]}),n.jsx("div",{className:"callout-btn-wrap",children:n.jsx(Rs,{onClick:c,text:"REQUEST AMBULANCE",subtext:"Tap for Immediate Emergency Routing",size:"large",id:"dashRequestAmbulanceActionBtn"})})]}),r&&r.status!=="CLOSED"&&n.jsxs("div",{className:"active-dispatch-panel glass-panel glow-red",children:[n.jsxs("div",{className:"active-panel-top",children:[n.jsxs("div",{className:"active-tag-group",children:[n.jsx("span",{className:"live-pulse-dot"}),n.jsxs("span",{className:"active-title",children:["ACTIVE AMBULANCE REQUEST #",r.id]})]}),n.jsx("span",{className:"active-status-pill",children:r.status.replace(/_/g," ")})]}),n.jsxs("div",{className:"active-details-grid",children:[n.jsxs("div",{children:[n.jsx("span",{className:"act-lbl",children:"PATIENT"}),n.jsxs("h4",{className:"act-val",children:[r.patientName," (",r.emergencyType,")"]})]}),n.jsxs("div",{children:[n.jsx("span",{className:"act-lbl",children:"AMBULANCE"}),n.jsxs("h4",{className:"act-val",children:[((m=r.ambulance)==null?void 0:m.vehicleNumber)||"TN-01-AB-1234"," (",(f=r.ambulance)==null?void 0:f.type,")"]})]}),n.jsxs("div",{children:[n.jsx("span",{className:"act-lbl",children:"DRIVER"}),n.jsxs("h4",{className:"act-val",children:[((g=r.driver)==null?void 0:g.name)||"Kumar Selvam"," (",(x=r.driver)==null?void 0:x.phone,")"]})]}),n.jsxs("div",{children:[n.jsx("span",{className:"act-lbl",children:"DESTINATION"}),n.jsx("h4",{className:"act-val",children:((j=r.destinationHospital)==null?void 0:j.name)||"Apollo Multi-Speciality"})]})]}),n.jsx("div",{className:"active-panel-footer",children:n.jsxs("button",{onClick:d,className:"btn-resume-tracking",children:[n.jsx(Ye,{size:18}),n.jsx("span",{children:"OPEN LIVE TRACKING CONSOLE ➔"})]})})]}),n.jsxs("div",{className:"dash-main-grid",children:[n.jsxs("div",{className:"dash-col-left",children:[n.jsxs("div",{className:"section-title-strip",children:[n.jsx(me,{size:18,color:"#06b6d4"}),n.jsx("h3",{children:"Your Saved Emergency Pickup Location"})]}),n.jsx(Pu,{pickupAddress:i.pickupAddress,landmark:i.landmark,hospitalName:(v=i.destinationHospital)==null?void 0:v.name,hospitalAddress:(N=i.destinationHospital)==null?void 0:N.address,onEdit:()=>e("/request/location"),editable:!0}),n.jsxs("div",{className:"section-title-strip",style:{marginTop:"28px"},children:[n.jsx(Qe,{size:18,color:"#06b6d4"}),n.jsx("h3",{children:"Hospital Information & Trauma Centers"})]}),n.jsx("p",{className:"section-info-desc",children:"Directly mapped trauma centers with live ICU bed availability and specialized stroke/cardiac bays:"}),n.jsx("div",{className:"hospitals-preview-list",children:Ce.map(u=>{var p;return n.jsx(Ru,{hospital:u,isSelected:((p=i.destinationHospital)==null?void 0:p.id)===u.id,onSelect:()=>{s({...i,destinationHospital:u})},showSelect:!0},u.id)})})]}),n.jsxs("div",{className:"dash-col-right",children:[n.jsxs("div",{className:"section-title-strip",children:[n.jsx(Ot,{size:18,color:"#06b6d4"}),n.jsx("h3",{children:"Recent Requests History"})]}),n.jsx("div",{className:"recent-requests-container",children:a&&a.length>0?a.map(u=>n.jsx(Wh,{request:u,onAction:()=>{e("/request/location")},actionText:"Request Again"},u.id)):n.jsx("div",{className:"no-requests-box glass-panel",children:n.jsx("p",{children:"No past ambulance requests on file."})})}),n.jsxs("div",{className:"emergency-contacts-card glass-panel",children:[n.jsx("h4",{className:"contacts-card-title",children:"National Emergency Speed Dial"}),n.jsxs("div",{className:"speed-dial-list",children:[n.jsxs("a",{href:"tel:108",className:"dial-item red",children:[n.jsx("span",{className:"dial-code",children:"108"}),n.jsx("span",{className:"dial-desc",children:"Govt. Emergency Ambulance"})]}),n.jsxs("a",{href:"tel:112",className:"dial-item blue",children:[n.jsx("span",{className:"dial-code",children:"112"}),n.jsx("span",{className:"dial-desc",children:"All-in-One National Helpline"})]}),n.jsxs("a",{href:"tel:1066",className:"dial-item teal",children:[n.jsx("span",{className:"dial-code",children:"1066"}),n.jsx("span",{className:"dial-desc",children:"Apollo Emergency Line"})]})]})]})]})]}),n.jsx("style",{children:`
        .dashboard-page-root {
          padding: 36px 20px 60px;
        }

        /* Profile Header */
        .dash-header-card {
          padding: 24px 28px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 24px;
        }

        .dash-user-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .dash-avatar-large {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          border: 2px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
        }

        .badge-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .account-type-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .blood-group-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #f87171;
          background: rgba(239, 68, 68, 0.1);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .dash-user-name {
          font-size: 1.55rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .dash-user-contact {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .dash-quick-contacts {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 10px 16px;
        }

        .qc-label {
          font-size: 0.68rem;
          color: var(--text-dim);
          font-weight: 700;
        }

        .qc-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
        }

        .qc-phone {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-cyan);
        }

        /* Prominent Emergency Callout */
        .emergency-callout-banner {
          padding: 28px 32px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 30px;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%);
        }

        .callout-content {
          max-width: 620px;
        }

        .callout-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #fca5a5;
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.4);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .beacon-pip {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: beacon-pulse 1.2s infinite;
        }

        .callout-heading {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .callout-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Active Dispatch Banner */
        .active-dispatch-panel {
          padding: 22px 28px;
          border-radius: var(--radius-xl);
          margin-bottom: 30px;
          background: rgba(239, 68, 68, 0.07);
        }

        .active-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 12px;
        }

        .active-tag-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .live-pulse-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 10px #ef4444;
          animation: beacon-pulse 1s infinite;
        }

        .active-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.02em;
        }

        .active-status-pill {
          background: #ef4444;
          color: #fff;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .active-details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 18px;
        }

        .act-lbl {
          font-size: 0.68rem;
          color: var(--text-dim);
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .act-val {
          font-size: 0.95rem;
          color: #ffffff;
          font-weight: 700;
          margin-top: 2px;
        }

        .btn-resume-tracking {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.92rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.4);
          transition: var(--transition);
        }

        .btn-resume-tracking:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 22px rgba(239, 68, 68, 0.65);
        }

        /* 2-Column Grid */
        .dash-main-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
        }

        .section-title-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .section-title-strip h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .section-info-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .emergency-contacts-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          margin-top: 24px;
        }

        .contacts-card-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .speed-dial-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dial-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          transition: var(--transition);
        }

        .dial-item:hover {
          transform: translateX(4px);
        }

        .dial-code {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
        }

        .dial-item.red .dial-code { color: #ef4444; }
        .dial-item.blue .dial-code { color: #38bdf8; }
        .dial-item.teal .dial-code { color: #2dd4bf; }

        .dial-desc {
          font-size: 0.82rem;
          color: var(--text-main);
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .dash-main-grid {
            grid-template-columns: 1fr;
          }
          .emergency-callout-banner {
            flex-direction: column;
            align-items: stretch;
          }
          .dash-quick-contacts {
            align-items: flex-start;
          }
        }
      `})]})},In=({status:e="ON_THE_WAY",pickup:t={address:"Anna Nagar West, Chennai"},hospital:r={name:"Apollo Multi-Speciality Hospital"},height:a="420px",showControls:i=!0,interactive:s=!0})=>{const[l,o]=y.useState(1),[c,d]=y.useState(!0),[m,f]=y.useState(.35);y.useEffect(()=>{if(e==="ON_THE_WAY"){const v=setInterval(()=>{f(N=>N>=.85?.2:+(N+.015).toFixed(3))},700);return()=>clearInterval(v)}else if(e==="ARRIVED")f(.88);else if(e==="PATIENT_PICKED_UP"||e==="AT_HOSPITAL"){const v=setInterval(()=>{f(N=>N>=.95?.95:+(N+.01).toFixed(3))},800);return()=>clearInterval(v)}},[e]);const g=e==="PATIENT_PICKED_UP"||e==="AT_HOSPITAL",x=(v,N,u,p)=>{const h=(1-p)*(1-p)*v.x+2*(1-p)*p*N.x+p*p*u.x,b=(1-p)*(1-p)*v.y+2*(1-p)*p*N.y+p*p*u.y;return{x:h,y:b}};let j;return g?j=x({x:460,y:230},{x:620,y:310},{x:780,y:260},e==="AT_HOSPITAL"?.98:m):j=x({x:130,y:90},{x:280,y:150},{x:460,y:230},e==="ARRIVED"?1:m),n.jsxs("div",{className:"resq-mock-map-wrapper",style:{height:a},children:[n.jsxs("div",{className:"map-hud-bar",children:[n.jsxs("div",{className:"hud-left",children:[n.jsxs("span",{className:"gps-indicator",children:[n.jsx(_h,{size:13,className:"gps-live-ping"}),n.jsx("span",{children:"RTK-GPS LOCK • 11 SATS"})]}),n.jsx("span",{className:"hud-pill",children:"LAT: 13.0850° N • LNG: 80.2100° E"})]}),i&&n.jsxs("div",{className:"hud-right",children:[n.jsxs("button",{className:`map-tool-btn ${c?"active":""}`,onClick:()=>d(!c),title:"Toggle Live Traffic Layer",children:[n.jsx(Ch,{size:14}),n.jsx("span",{children:"Traffic"})]}),n.jsx("button",{className:"map-tool-btn",onClick:()=>o(v=>Math.min(v+.15,1.4)),title:"Zoom In",children:n.jsx(Uh,{size:14})}),n.jsx("button",{className:"map-tool-btn",onClick:()=>o(v=>Math.max(v-.15,.85)),title:"Zoom Out",children:n.jsx(qh,{size:14})})]})]}),n.jsx("div",{className:"map-canvas-container",style:{transform:`scale(${l})`,transformOrigin:"center center"},children:n.jsxs("svg",{viewBox:"0 0 900 450",className:"map-svg-grid",children:[n.jsxs("defs",{children:[n.jsx("pattern",{id:"cityGrid",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:n.jsx("path",{d:"M 40 0 L 0 0 0 40",fill:"none",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"})}),n.jsxs("filter",{id:"glowRoute",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[n.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),n.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]}),n.jsxs("filter",{id:"glowBeacon",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"6",result:"blur"}),n.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),n.jsx("rect",{width:"900",height:"450",fill:"#080e1c"}),n.jsx("rect",{width:"900",height:"450",fill:"url(#cityGrid)"}),n.jsxs("g",{stroke:"rgba(255,255,255,0.08)",strokeWidth:"14",fill:"none",strokeLinecap:"round",children:[n.jsx("path",{d:"M 40 70 Q 250 140 450 180 T 860 160"}),n.jsx("path",{d:"M 120 40 Q 260 220 300 410"}),n.jsx("path",{d:"M 280 140 Q 480 230 790 260"}),n.jsx("path",{d:"M 460 30 L 460 410",strokeWidth:"8"}),n.jsx("path",{d:"M 680 40 L 720 420",strokeWidth:"10"})]}),n.jsxs("g",{stroke:"rgba(255,255,255,0.04)",strokeWidth:"5",fill:"none",children:[n.jsx("path",{d:"M 80 180 L 820 180"}),n.jsx("path",{d:"M 80 290 L 820 290"}),n.jsx("path",{d:"M 200 40 L 200 400"}),n.jsx("path",{d:"M 370 40 L 370 410"}),n.jsx("path",{d:"M 580 40 L 580 410"})]}),c&&n.jsxs("g",{strokeLinecap:"round",fill:"none",children:[n.jsx("path",{d:"M 40 70 Q 250 140 450 180",stroke:"#f59e0b",strokeWidth:"3",opacity:"0.6"}),n.jsx("path",{d:"M 460 30 L 460 220",stroke:"#10b981",strokeWidth:"3",opacity:"0.5"}),n.jsx("path",{d:"M 130 90 Q 280 150 460 230",stroke:"#10b981",strokeWidth:"5",opacity:"0.85",filter:"url(#glowRoute)"}),n.jsx("path",{d:"M 460 230 Q 620 310 780 260",stroke:"#10b981",strokeWidth:"5",opacity:"0.85",filter:"url(#glowRoute)"})]}),n.jsx("text",{x:"140",y:"75",fill:"#475569",fontSize:"10",fontWeight:"600",children:"ANNA NAGAR 2ND AVE"}),n.jsx("text",{x:"320",y:"130",fill:"#475569",fontSize:"10",fontWeight:"600",children:"THIRUMANGALAM FLYOVER"}),n.jsx("text",{x:"470",y:"215",fill:"#475569",fontSize:"10",fontWeight:"600",children:"PATIENT PICKUP POINT"}),n.jsx("text",{x:"640",y:"240",fill:"#475569",fontSize:"10",fontWeight:"600",children:"POONAMALLEE ARTERIAL"}),n.jsx("text",{x:"760",y:"245",fill:"#06b6d4",fontSize:"10",fontWeight:"700",children:"APOLLO TRAUMA BAY"}),n.jsx("path",{d:"M 130 90 Q 280 150 460 230",stroke:"#ef4444",strokeWidth:"4",strokeDasharray:"8 6",fill:"none",filter:"url(#glowRoute)",opacity:g?"0.4":"1",children:n.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",repeatCount:"indefinite"})}),n.jsx("path",{d:"M 460 230 Q 620 310 780 260",stroke:"#06b6d4",strokeWidth:"4",strokeDasharray:"8 6",fill:"none",filter:"url(#glowRoute)",opacity:g?"1":"0.4",children:n.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",repeatCount:"indefinite"})}),n.jsxs("g",{transform:"translate(460, 230)",children:[n.jsxs("circle",{r:"22",fill:"none",stroke:"#ef4444",strokeWidth:"1.5",opacity:"0.7",children:[n.jsx("animate",{attributeName:"r",values:"8;28",dur:"1.8s",repeatCount:"indefinite"}),n.jsx("animate",{attributeName:"opacity",values:"0.9;0",dur:"1.8s",repeatCount:"indefinite"})]}),n.jsx("circle",{r:"12",fill:"#ef4444",filter:"url(#glowBeacon)"}),n.jsx("circle",{r:"6",fill:"#ffffff"}),n.jsxs("g",{transform:"translate(-55, -34)",children:[n.jsx("rect",{width:"110",height:"24",rx:"6",fill:"#0f172a",stroke:"#ef4444",strokeWidth:"1"}),n.jsx("text",{x:"55",y:"16",fill:"#f87171",fontSize:"10",fontWeight:"700",textAnchor:"middle",children:"PATIENT PICKUP"})]})]}),n.jsxs("g",{transform:"translate(780, 260)",children:[n.jsxs("circle",{r:"18",fill:"none",stroke:"#06b6d4",strokeWidth:"1.5",opacity:"0.6",children:[n.jsx("animate",{attributeName:"r",values:"8;24",dur:"2.2s",repeatCount:"indefinite"}),n.jsx("animate",{attributeName:"opacity",values:"0.8;0",dur:"2.2s",repeatCount:"indefinite"})]}),n.jsx("circle",{r:"14",fill:"#0e7490",stroke:"#06b6d4",strokeWidth:"2"}),n.jsx("path",{d:"M -2 -7 L 2 -7 L 2 -2 L 7 -2 L 7 2 L 2 2 L 2 7 L -2 7 L -2 2 L -7 2 L -7 -2 L -2 -2 Z",fill:"#ffffff"}),n.jsxs("g",{transform:"translate(-65, -34)",children:[n.jsx("rect",{width:"130",height:"24",rx:"6",fill:"#0f172a",stroke:"#06b6d4",strokeWidth:"1"}),n.jsx("text",{x:"65",y:"16",fill:"#67e8f9",fontSize:"10",fontWeight:"700",textAnchor:"middle",children:"APOLLO ER DEPT"})]})]}),n.jsxs("g",{transform:`translate(${j.x}, ${j.y})`,children:[n.jsx("circle",{r:"26",fill:"rgba(239, 68, 68, 0.15)",stroke:"rgba(239, 68, 68, 0.5)",strokeWidth:"1"}),n.jsx("circle",{r:"18",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"2.5",filter:"url(#glowBeacon)"}),n.jsx("circle",{cx:"0",cy:"-6",r:"3",fill:"#ef4444",children:n.jsx("animate",{attributeName:"opacity",values:"1;0.2;1",dur:"0.6s",repeatCount:"indefinite"})}),n.jsxs("g",{transform:"translate(-10, -8) scale(0.85)",children:[n.jsx("rect",{x:"2",y:"4",width:"20",height:"12",rx:"3",fill:"#ffffff"}),n.jsx("rect",{x:"15",y:"6",width:"6",height:"8",rx:"1",fill:"#38bdf8"}),n.jsx("rect",{x:"7",y:"7",width:"6",height:"6",fill:"#ef4444"})]}),n.jsxs("g",{transform:"translate(-40, 24)",children:[n.jsx("rect",{width:"80",height:"20",rx:"4",fill:"#020617",stroke:"#ef4444",strokeWidth:"1"}),n.jsx("text",{x:"40",y:"14",fill:"#ffffff",fontSize:"9",fontWeight:"800",textAnchor:"middle",children:"TN-01-AB-1234"})]})]})]})}),n.jsxs("div",{className:"map-bottom-telemetry",children:[n.jsxs("div",{className:"telem-item",children:[n.jsx("span",{className:"telem-label",children:"SPEED"}),n.jsx("span",{className:"telem-val",children:"52 km/h"})]}),n.jsx("div",{className:"telem-divider"}),n.jsxs("div",{className:"telem-item",children:[n.jsx("span",{className:"telem-label",children:"PRIORITY ROUTE"}),n.jsx("span",{className:"telem-val green",children:"GREEN WAVE ACTIVE"})]}),n.jsx("div",{className:"telem-divider"}),n.jsxs("div",{className:"telem-item",children:[n.jsx("span",{className:"telem-label",children:"NEXT TURN"}),n.jsx("span",{className:"telem-val",children:"In 350m • Right onto Greams Rd"})]})]}),n.jsx("style",{children:`
        .resq-mock-map-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #080e1c;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.7);
        }

        .map-hud-bar {
          position: absolute;
          top: 12px;
          left: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
          pointer-events: none;
        }

        .hud-left, .hud-right {
          display: flex;
          align-items: center;
          gap: 8px;
          pointer-events: auto;
        }

        .gps-indicator {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: var(--radius-full);
        }

        .gps-live-ping {
          animation: beacon-pulse 1.4s infinite;
        }

        .hud-pill {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 6px 12px;
          border-radius: var(--radius-full);
        }

        .map-tool-btn {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          color: var(--text-main);
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          font-size: 0.75rem;
          gap: 4px;
        }

        .map-tool-btn:hover, .map-tool-btn.active {
          background: #1e293b;
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .map-tool-btn.active {
          width: auto;
          padding: 0 10px;
        }

        .map-canvas-container {
          width: 100%;
          height: 100%;
          transition: transform 0.25s ease;
        }

        .map-svg-grid {
          width: 100%;
          height: 100%;
          display: block;
        }

        .map-bottom-telemetry {
          position: absolute;
          bottom: 12px;
          left: 14px;
          right: 14px;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          z-index: 10;
        }

        .telem-item {
          display: flex;
          flex-direction: column;
        }

        .telem-label {
          font-size: 0.65rem;
          color: var(--text-dim);
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .telem-val {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
        }

        .telem-val.green {
          color: #34d399;
        }

        .telem-divider {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 640px) {
          .hud-pill, .telem-item:nth-child(5) {
            display: none;
          }
        }
      `})]})},Qh=()=>{var N;const e=Y(),{draftLocation:t,setDraftLocation:r}=xe(),[a,i]=y.useState(t.pickupAddress||ee.currentLocation.address),[s,l]=y.useState(t.landmark||ee.currentLocation.landmark),[o,c]=y.useState(((N=t.destinationHospital)==null?void 0:N.id)||Ce[0].id),[d,m]=y.useState(!1),[f,g]=y.useState(!1),x=Ce.find(u=>u.id===o)||Ce[0],j=()=>{m(!0),setTimeout(()=>{i(ee.currentLocation.address),l(ee.currentLocation.landmark),m(!1),g(!0),setTimeout(()=>g(!1),3e3)},600)},v=u=>{if(u.preventDefault(),!a.trim()){alert("Please specify a pickup location address.");return}r({pickupAddress:a,landmark:s,lat:13.085,lng:80.21,destinationHospital:x}),e("/request/patient")};return n.jsxs("div",{className:"location-page-root container",children:[n.jsx("div",{className:"page-breadcrumb",children:n.jsx("span",{children:"Step 1 of 4 • Incident Location & Receiving Facility"})}),n.jsxs("div",{className:"location-layout-grid",children:[n.jsxs("div",{className:"location-form-panel glass-panel",children:[n.jsxs("div",{className:"panel-header",children:[n.jsx("div",{className:"step-pill",children:"STEP 1: LOCATION"}),n.jsx("h1",{className:"panel-title",children:"Enter or Share Patient Location"}),n.jsx("p",{className:"panel-desc",children:"Accurate landmark coordinates ensure the dispatched ambulance navigates with zero navigation lag."})]}),n.jsxs("form",{onSubmit:v,className:"loc-inputs-form",children:[n.jsx("div",{className:"gps-action-box",children:n.jsxs("button",{type:"button",className:`btn-use-gps ${d?"locating":""} ${f?"success":""}`,onClick:j,id:"useCurrentLocationBtn",children:[n.jsx(Sh,{size:18,className:d?"animate-spin-slow":""}),n.jsx("span",{children:d?"Acquiring GPS Satellite Signal...":f?"Current Location Latched (±3m precision)":"Use My Current Location"})]})}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"pickupAddressInput",children:[n.jsx("span",{children:"Pickup Address"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"input-with-prefix",children:[n.jsx(me,{size:18,color:"#ef4444",className:"input-icon"}),n.jsx("input",{id:"pickupAddressInput",type:"text",className:"form-input with-icon",placeholder:"e.g. Plot 42, 2nd Ave, Anna Nagar West, Chennai",value:a,onChange:u=>i(u.target.value),required:!0})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"landmarkInput",children:[n.jsx("span",{children:"Landmark / Gate / Apartment Floor"}),n.jsx("span",{className:"opt-tag",children:"(Crucial for driver)"})]}),n.jsx("input",{id:"landmarkInput",type:"text",className:"form-input",placeholder:"e.g. Near Roundtana Metro, Gate 2, Flat 3B",value:s,onChange:u=>l(u.target.value)})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"hospitalSelect",children:[n.jsx("span",{children:"Destination Hospital (Emergency Bay)"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"input-with-prefix",children:[n.jsx(Qe,{size:18,color:"#06b6d4",className:"input-icon"}),n.jsx("select",{id:"hospitalSelect",className:"form-select with-icon",value:o,onChange:u=>c(u.target.value),children:Ce.map(u=>n.jsxs("option",{value:u.id,children:[u.name," • ",u.eta," (",u.icuBedsAvailable," ICU beds open)"]},u.id))})]})]}),n.jsxs("div",{className:"hospital-preview-capsule",children:[n.jsxs("div",{className:"hosp-cap-top",children:[n.jsx("span",{className:"cap-label",children:x.category}),n.jsxs("span",{className:"cap-eta",children:[n.jsx(Ot,{size:12}),n.jsxs("span",{children:[x.eta," away"]})]})]}),n.jsx("h4",{className:"cap-name",children:x.name}),n.jsx("p",{className:"cap-dept",children:x.emergencyDept})]}),n.jsx("div",{className:"form-submit-row",children:n.jsxs("button",{type:"submit",className:"btn-continue",id:"locationContinueBtn",children:[n.jsx("span",{children:"CONTINUE TO PATIENT DETAILS"}),n.jsx(ve,{size:20})]})})]})]}),n.jsx("div",{className:"location-map-panel",children:n.jsxs("div",{className:"map-card-wrapper glass-panel",children:[n.jsxs("div",{className:"map-header-label",children:[n.jsxs("div",{className:"map-badge",children:[n.jsx("span",{className:"pulse-pip"}),n.jsx("span",{children:"INTERACTIVE DISPATCH MAP"})]}),n.jsx("span",{className:"map-hint",children:"Showing pickup marker and destination hospital corridor"})]}),n.jsx(In,{status:"REQUESTED",pickup:{address:a},hospital:x,height:"480px",showControls:!0}),n.jsxs("div",{className:"map-footer-notes",children:[n.jsxs("div",{className:"note-item",children:[n.jsx("span",{className:"marker-dot red"}),n.jsxs("span",{children:["Patient Pickup: ",n.jsx("strong",{children:a.split(",")[0]})]})]}),n.jsxs("div",{className:"note-item",children:[n.jsx("span",{className:"marker-dot cyan"}),n.jsxs("span",{children:["Hospital ER: ",n.jsx("strong",{children:x.name.split(" ")[0]})]})]})]})]})})]}),n.jsx("style",{children:`
        .location-page-root {
          padding: 30px 20px 60px;
        }

        .page-breadcrumb {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }

        .location-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 32px;
          align-items: start;
        }

        .location-form-panel {
          padding: 32px 28px;
          border-radius: var(--radius-xl);
        }

        .panel-header {
          margin-bottom: 24px;
        }

        .step-pill {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .panel-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .panel-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .gps-action-box {
          margin-bottom: 20px;
        }

        .btn-use-gps {
          width: 100%;
          padding: 12px 18px;
          border-radius: var(--radius-md);
          background: rgba(6, 182, 212, 0.1);
          border: 1px dashed rgba(6, 182, 212, 0.4);
          color: #67e8f9;
          font-weight: 700;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-use-gps:hover {
          background: rgba(6, 182, 212, 0.2);
          border-color: #06b6d4;
        }

        .btn-use-gps.success {
          background: rgba(16, 185, 129, 0.15);
          border-color: #10b981;
          color: #6ee7b7;
        }

        .input-with-prefix {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          pointer-events: none;
        }

        .form-input.with-icon, .form-select.with-icon {
          padding-left: 42px;
        }

        .hospital-preview-capsule {
          background: rgba(6, 182, 212, 0.05);
          border: 1px solid rgba(6, 182, 212, 0.25);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin: 16px 0 24px;
        }

        .hosp-cap-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .cap-label {
          font-size: 0.68rem;
          color: var(--accent-cyan);
          font-weight: 700;
          text-transform: uppercase;
        }

        .cap-eta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #38bdf8;
        }

        .cap-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .cap-dept {
          font-size: 0.78rem;
          color: #fca5a5;
        }

        .btn-continue {
          width: 100%;
          padding: 16px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 4px 20px rgba(239, 68, 68, 0.45);
          transition: var(--transition);
        }

        .btn-continue:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 26px rgba(239, 68, 68, 0.7);
        }

        /* Map Panel */
        .map-card-wrapper {
          padding: 20px;
          border-radius: var(--radius-xl);
        }

        .map-header-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .map-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .pulse-pip {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #06b6d4;
          box-shadow: 0 0 8px #06b6d4;
          animation: beacon-pulse 1.3s infinite;
        }

        .map-hint {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .map-footer-notes {
          display: flex;
          gap: 20px;
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .note-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .marker-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .marker-dot.red { background: #ef4444; }
        .marker-dot.cyan { background: #06b6d4; }

        @media (max-width: 992px) {
          .location-layout-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Yh={HeartPulse:ut,Wind:Oh,CarFront:ti,Bone:bh,Stethoscope:Mh,AlertCircle:ri},Kh=({initialData:e,onSubmit:t,isSubmitting:r=!1})=>{const[a,i]=y.useState({patientName:(e==null?void 0:e.patientName)||"",patientAge:(e==null?void 0:e.patientAge)||"",patientGender:(e==null?void 0:e.patientGender)||"Male",emergencyType:(e==null?void 0:e.emergencyType)||"Heart Emergency",contactNumber:(e==null?void 0:e.contactNumber)||"",additionalNotes:(e==null?void 0:e.additionalNotes)||""}),[s,l]=y.useState({}),o=()=>{const d={};return a.patientName.trim()||(d.patientName="Patient full name is required"),(!a.patientAge||isNaN(a.patientAge)||+a.patientAge<1||+a.patientAge>120)&&(d.patientAge="Please enter a valid age (1-120)"),(!a.contactNumber.trim()||a.contactNumber.replace(/\D/g,"").length<10)&&(d.contactNumber="Enter a valid 10-digit emergency contact number"),a.emergencyType||(d.emergencyType="Please select the emergency condition"),l(d),Object.keys(d).length===0},c=d=>{d.preventDefault(),o()&&t(a)};return n.jsxs("form",{className:"emergency-patient-form",onSubmit:c,noValidate:!0,children:[n.jsxs("div",{className:"form-section-block",children:[n.jsxs("label",{className:"section-label",children:[n.jsx("span",{children:"Select Emergency Nature"}),n.jsx("span",{className:"required-star",children:"*"})]}),n.jsx("p",{className:"section-subtext",children:"Our AI matching algorithm prioritizes life-support equipment (e.g. ALS Ventilator) based on this selection."}),n.jsx("div",{className:"emergency-types-grid",children:uh.map(d=>{const m=Yh[d.icon]||ri,f=a.emergencyType===d.label;return n.jsxs("div",{className:`type-tile ${f?"selected":""} severity-${d.severity}`,onClick:()=>i({...a,emergencyType:d.label}),role:"button",tabIndex:0,children:[n.jsxs("div",{className:"tile-top-row",children:[n.jsx("div",{className:"tile-icon-box",children:n.jsx(m,{size:20})}),n.jsx("span",{className:`type-badge-pill ${d.suggestedType.toLowerCase()}`,children:d.suggestedType})]}),n.jsx("h4",{className:"type-title",children:d.label}),n.jsx("p",{className:"type-desc",children:d.desc}),f&&n.jsx("div",{className:"tile-selected-mark",children:n.jsx(ke,{size:16})})]},d.id)})}),s.emergencyType&&n.jsx("span",{className:"error-text",children:s.emergencyType})]}),n.jsxs("div",{className:"form-fields-grid",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"patientName",children:[n.jsx("span",{children:"Patient Full Name"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"input-with-icon",children:[n.jsx(ai,{size:18,className:"field-icon"}),n.jsx("input",{id:"patientName",type:"text",className:`form-input with-icon ${s.patientName?"input-error":""}`,placeholder:"e.g. Rajesh Sharma",value:a.patientName,onChange:d=>i({...a,patientName:d.target.value})})]}),s.patientName&&n.jsx("span",{className:"error-text",children:s.patientName})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"contactNumber",children:[n.jsx("span",{children:"Emergency Contact Number"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"input-with-icon",children:[n.jsx(Mr,{size:18,className:"field-icon"}),n.jsx("input",{id:"contactNumber",type:"tel",className:`form-input with-icon ${s.contactNumber?"input-error":""}`,placeholder:"+91 98765 43210",value:a.contactNumber,onChange:d=>i({...a,contactNumber:d.target.value})})]}),s.contactNumber&&n.jsx("span",{className:"error-text",children:s.contactNumber})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"patientAge",children:[n.jsx("span",{children:"Patient Age"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"input-with-icon",children:[n.jsx(jh,{size:18,className:"field-icon"}),n.jsx("input",{id:"patientAge",type:"number",min:"1",max:"120",className:`form-input with-icon ${s.patientAge?"input-error":""}`,placeholder:"e.g. 45",value:a.patientAge,onChange:d=>i({...a,patientAge:d.target.value})})]}),s.patientAge&&n.jsx("span",{className:"error-text",children:s.patientAge})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"patientGender",children:[n.jsx("span",{children:"Gender"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("select",{id:"patientGender",className:"form-select",value:a.patientGender,onChange:d=>i({...a,patientGender:d.target.value}),children:[n.jsx("option",{value:"Male",children:"Male"}),n.jsx("option",{value:"Female",children:"Female"}),n.jsx("option",{value:"Other",children:"Other / Transgender"}),n.jsx("option",{value:"Prefer not to say",children:"Prefer not to say"})]})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"additionalNotes",children:[n.jsx("span",{children:"Additional Medical Condition / Pickup Landmarks"}),n.jsx("span",{className:"opt-tag",children:"(Optional)"})]}),n.jsx("textarea",{id:"additionalNotes",className:"form-textarea",rows:"3",placeholder:"e.g. Patient is conscious, complaining of acute chest pressure. 2nd floor, elevator available. Gate code #402.",value:a.additionalNotes,onChange:d=>i({...a,additionalNotes:d.target.value})})]}),n.jsxs("div",{className:"form-safety-banner",children:[n.jsx(Dh,{size:18,color:"#f59e0b",className:"warn-icon"}),n.jsx("p",{className:"safety-text",children:"By proceeding, nearby registered ambulance units within a 5 km radius will receive your emergency beacon. Please stay at the location with your phone available."})]}),n.jsx("div",{className:"form-action-row",children:n.jsxs("button",{type:"submit",className:"btn-emergency-submit",disabled:r,id:"submitPatientDetailsBtn",children:[n.jsx(Ge,{size:22}),n.jsx("span",{children:r?"FINDING AMBULANCES...":"FIND & MATCH AMBULANCES"})]})}),n.jsx("style",{children:`
        .emergency-patient-form {
          width: 100%;
        }

        .form-section-block {
          margin-bottom: 24px;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .required-star {
          color: #ef4444;
        }

        .section-subtext {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 2px;
          margin-bottom: 14px;
        }

        .emergency-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .type-tile {
          position: relative;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 14px;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          user-select: none;
        }

        .type-tile:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(23, 34, 58, 0.8);
          transform: translateY(-2px);
        }

        .type-tile.selected {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.08);
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
        }

        .tile-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .tile-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .type-badge-pill {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: var(--radius-full);
          letter-spacing: 0.04em;
        }

        .type-badge-pill.als {
          background: rgba(239, 68, 68, 0.2);
          color: #fca5a5;
          border: 1px solid rgba(239, 68, 68, 0.4);
        }

        .type-badge-pill.bls {
          background: rgba(6, 182, 212, 0.2);
          color: #67e8f9;
          border: 1px solid rgba(6, 182, 212, 0.4);
        }

        .type-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .type-desc {
          font-size: 0.72rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        .tile-selected-mark {
          position: absolute;
          top: 10px;
          right: 10px;
          color: #ef4444;
        }

        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }

        .field-icon {
          position: absolute;
          left: 14px;
          color: var(--text-dim);
          pointer-events: none;
        }

        .form-input.with-icon {
          padding-left: 42px;
        }

        .opt-tag {
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--text-dim);
        }

        .form-safety-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin: 20px 0 24px;
        }

        .warn-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .safety-text {
          font-size: 0.8rem;
          color: #fde68a;
          line-height: 1.45;
        }

        .form-action-row {
          display: flex;
          justify-content: flex-end;
        }

        .btn-emergency-submit {
          width: 100%;
          padding: 16px 28px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.5);
          transition: var(--transition);
        }

        .btn-emergency-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 0 35px rgba(239, 68, 68, 0.8);
          background: linear-gradient(135deg, #f87171 0%, #dc2626 100%);
        }

        @media (max-width: 640px) {
          .form-fields-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Zh=()=>{const e=Y(),{draftPatient:t,setDraftPatient:r,draftLocation:a}=xe(),[i,s]=y.useState(!1),l=o=>{s(!0),r(o),setTimeout(()=>{s(!1),e("/request/matching")},400)};return n.jsxs("div",{className:"patient-details-page-root container-narrow",children:[n.jsx("div",{className:"page-breadcrumb",children:n.jsx("span",{children:"Step 2 of 4 • Patient Clinical Profile & Emergency Triage"})}),n.jsxs("div",{className:"patient-card-container glass-panel",children:[n.jsxs("div",{className:"patient-header",children:[n.jsx("div",{className:"step-pill",children:"STEP 2: PATIENT TRIAGE"}),n.jsx("h1",{className:"patient-title",children:"Emergency Patient Details"}),n.jsx("p",{className:"patient-desc",children:"Provide the patient's symptoms and vital notes. This enables our AI engine to rank the most suitable Life Support equipment tier (ALS/BLS)."}),n.jsxs("div",{className:"pickup-recap-bar",children:[n.jsx(me,{size:15,color:"#ef4444"}),n.jsx("span",{className:"recap-label",children:"Pickup:"}),n.jsx("span",{className:"recap-address",children:a.pickupAddress})]})]}),n.jsx(Kh,{initialData:t,onSubmit:l,isSubmitting:i})]}),n.jsx("style",{children:`
        .patient-details-page-root {
          padding: 30px 20px 60px;
        }

        .page-breadcrumb {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }

        .patient-card-container {
          padding: 36px 32px;
          border-radius: var(--radius-xl);
        }

        .patient-header {
          margin-bottom: 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 20px;
        }

        .step-pill {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .patient-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .patient-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 16px;
        }

        .pickup-recap-bar {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 8px 14px;
          font-size: 0.82rem;
        }

        .recap-label {
          color: var(--text-dim);
          font-weight: 700;
        }

        .recap-address {
          color: #ffffff;
          font-weight: 600;
        }
      `})]})},Xh=({ambulance:e,isSelected:t=!1,onSelect:r,showAction:a=!0,actionText:i="Select This Ambulance"})=>{const{unitName:s,vehicleNumber:l,type:o,typeCode:c,distance:d,eta:m,status:f,rating:g,equipment:x=[],recommended:j,aiMatchScore:v,aiMatchReason:N,baseFare:u}=e;return n.jsxs("div",{className:`ambulance-unit-card glass-panel ${t?"selected-card":""} ${j?"ai-recommended-border":""}`,onClick:r,children:[j&&n.jsxs("div",{className:"recommended-top-strip",children:[n.jsxs("div",{className:"ai-score-pill",children:[n.jsx(_a,{size:13}),n.jsxs("span",{children:["AI MATCH SCORE: ",v,"% SUITABLE"]})]}),n.jsx("span",{className:"strip-note",children:"Recommended for Emergency Profile"})]}),n.jsxs("div",{className:"card-main-body",children:[n.jsxs("div",{className:"unit-header-row",children:[n.jsxs("div",{className:"unit-title-group",children:[n.jsx("div",{className:"unit-icon-badge",children:n.jsx(Ge,{size:22})}),n.jsxs("div",{children:[n.jsxs("div",{className:"title-and-badge",children:[n.jsx("h3",{className:"unit-name-text",children:s}),n.jsx("span",{className:`badge ${c==="ALS"?"badge-als":"badge-bls"}`,children:o})]}),n.jsx("span",{className:"vehicle-plate-text",children:l})]})]}),n.jsxs("div",{className:"unit-rate-status",children:[n.jsxs("div",{className:"rating-pill",children:[n.jsx(Ln,{size:13,fill:"#f59e0b",color:"#f59e0b"}),n.jsx("span",{children:g})]}),n.jsxs("div",{className:"status-live-pill",children:[n.jsx(wh,{size:12,color:"#10b981"}),n.jsx("span",{children:f})]})]})]}),N&&n.jsxs("div",{className:"ai-explanation-box",children:[n.jsxs("span",{className:"ai-reason-label",children:[n.jsx(_a,{size:13,color:"#a855f7"}),"AI Matching Rationale:"]}),n.jsx("p",{className:"ai-reason-text",children:N})]}),n.jsxs("div",{className:"metrics-grid",children:[n.jsxs("div",{className:"metric-box",children:[n.jsx("div",{className:"metric-icon",children:n.jsx(Ot,{size:16})}),n.jsxs("div",{children:[n.jsx("span",{className:"m-label",children:"ESTIMATED ETA"}),n.jsx("span",{className:"m-val eta",children:m})]})]}),n.jsxs("div",{className:"metric-box",children:[n.jsx("div",{className:"metric-icon",children:n.jsx(Ye,{size:16})}),n.jsxs("div",{children:[n.jsx("span",{className:"m-label",children:"PROXIMITY"}),n.jsx("span",{className:"m-val",children:d})]})]}),n.jsxs("div",{className:"metric-box",children:[n.jsx("div",{className:"metric-icon",children:n.jsx(Ih,{size:16})}),n.jsxs("div",{children:[n.jsx("span",{className:"m-label",children:"EST. FARE"}),n.jsx("span",{className:"m-val",children:u})]})]})]}),x.length>0&&n.jsxs("div",{className:"equipment-section",children:[n.jsx("span",{className:"equip-title",children:"Life Support Equipment Onboard:"}),n.jsxs("div",{className:"equip-tags-wrap",children:[x.slice(0,4).map((p,h)=>n.jsxs("span",{className:"equip-tag",children:[n.jsx(Pl,{size:11}),n.jsx("span",{children:p})]},h)),x.length>4&&n.jsxs("span",{className:"equip-tag more",children:["+",x.length-4," more"]})]})]}),a&&n.jsx("div",{className:"card-footer-action",children:n.jsx("button",{type:"button",className:`select-amb-btn ${t?"selected":""}`,onClick:p=>{p.stopPropagation(),r&&r()},children:t?n.jsxs(n.Fragment,{children:[n.jsx(Nh,{size:18}),n.jsx("span",{children:"Selected Ambulance"})]}):n.jsx("span",{children:i})})})]}),n.jsx("style",{children:`
        .ambulance-unit-card {
          position: relative;
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          margin-bottom: 16px;
        }

        .ambulance-unit-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .ai-recommended-border {
          border-color: rgba(147, 51, 234, 0.5) !important;
          box-shadow: 0 0 25px -5px rgba(147, 51, 234, 0.25);
        }

        .selected-card {
          border-color: var(--emergency-red) !important;
          background: rgba(239, 68, 68, 0.04);
          box-shadow: 0 0 30px -5px rgba(239, 68, 68, 0.35);
        }

        .recommended-top-strip {
          background: linear-gradient(90deg, #4c1d95 0%, #1e1b4b 100%);
          padding: 6px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.74rem;
          color: #e9d5ff;
          font-weight: 600;
          border-bottom: 1px solid rgba(168, 85, 247, 0.3);
        }

        .ai-score-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #f3e8ff;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .card-main-body {
          padding: 20px;
        }

        .unit-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .unit-title-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .unit-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .title-and-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .unit-name-text {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .vehicle-plate-text {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .unit-rate-status {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .rating-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.25);
          padding: 3px 8px;
          border-radius: var(--radius-full);
        }

        .status-live-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #34d399;
        }

        .ai-explanation-box {
          background: rgba(147, 51, 234, 0.08);
          border: 1px solid rgba(147, 51, 234, 0.22);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          margin-bottom: 16px;
        }

        .ai-reason-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          font-weight: 700;
          color: #c084fc;
          margin-bottom: 4px;
        }

        .ai-reason-text {
          font-size: 0.82rem;
          color: #e2e8f0;
          line-height: 1.45;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .metric-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .metric-icon {
          color: var(--accent-cyan);
        }

        .m-label {
          display: block;
          font-size: 0.65rem;
          color: var(--text-dim);
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .m-val {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .m-val.eta {
          color: #38bdf8;
        }

        .equipment-section {
          margin-bottom: 16px;
        }

        .equip-title {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .equip-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .equip-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }

        .equip-tag.more {
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
        }

        .card-footer-action {
          margin-top: 8px;
        }

        .select-amb-btn {
          width: 100%;
          padding: 10px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition);
        }

        .select-amb-btn:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .select-amb-btn.selected {
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          border-color: #ef4444;
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
        }
      `})]})},Jh=()=>{const e=Y(),{draftPatient:t,draftLocation:r,selectedAmbulance:a,setSelectedAmbulance:i,submitEmergencyRequest:s}=xe(),[l,o]=y.useState(!0),[c,d]=y.useState("Pinging nearby GPS fleet telemetry..."),[m,f]=y.useState([]);y.useEffect(()=>{const x=setTimeout(()=>{d("Analyzing distance, ETA, and emergency condition compatibility...")},700),j=setTimeout(async()=>{const v=await Ps.getNearbyAmbulances(r.lat,r.lng,t.emergencyType);if(v.success){f(v.ambulances);const N=v.ambulances.find(u=>u.recommended)||v.ambulances[0];i(N)}else f(Ve);o(!1)},1500);return()=>{clearTimeout(x),clearTimeout(j)}},[r,t,i]);const g=()=>{s(a),e("/request/sent")};return n.jsxs("div",{className:"matching-page-root container",children:[l?n.jsxs("div",{className:"scanning-container glass-panel",children:[n.jsxs("div",{className:"radar-animation-box",children:[n.jsx("div",{className:"radar-circle circle-1"}),n.jsx("div",{className:"radar-circle circle-2"}),n.jsx("div",{className:"radar-circle circle-3"}),n.jsx("div",{className:"radar-sweep-hand"}),n.jsx("div",{className:"radar-center-icon",children:n.jsx(Ge,{size:36,color:"#ef4444"})})]}),n.jsx("h2",{className:"scanning-headline",children:"Finding nearby ambulances..."}),n.jsx("p",{className:"scanning-sub",children:c}),n.jsxs("div",{className:"scanning-criteria-tags",children:[n.jsxs("span",{className:"sc-tag",children:[n.jsx(ut,{size:12,color:"#ef4444"}),n.jsxs("span",{children:["Condition: ",t.emergencyType]})]}),n.jsxs("span",{className:"sc-tag",children:[n.jsx(Ye,{size:12,color:"#06b6d4"}),n.jsx("span",{children:"Radius: 5.0 km"})]}),n.jsxs("span",{className:"sc-tag",children:[n.jsx(Rl,{size:12,color:"#a855f7"}),n.jsx("span",{children:"AI Multi-Factor Ranking"})]})]})]}):n.jsxs("div",{className:"results-wrapper",children:[n.jsx("div",{className:"page-breadcrumb",children:n.jsx("span",{children:"Step 3 of 4 • AI Fleet Ranking & Selection"})}),n.jsxs("div",{className:"matching-header",children:[n.jsx("div",{className:"step-pill",children:"STEP 3: FLEET MATCHING"}),n.jsx("h1",{className:"matching-title",children:"Available Ambulances Ranked"}),n.jsxs("p",{className:"matching-desc",children:["Found ",m.length," available ambulances near your location capable of emergency dispatch."]})]}),n.jsxs("div",{className:"ai-explainer-banner glass-panel",children:[n.jsxs("div",{className:"ai-explainer-header",children:[n.jsxs("div",{className:"ai-badge",children:[n.jsx(_a,{size:14}),n.jsx("span",{children:"AI MATCHING SYSTEM"})]}),n.jsx("span",{className:"ai-status-active",children:"Algorithmic Scoring Applied"})]}),n.jsx("p",{className:"ai-explainer-text",children:"ResQAI analyzes distance, ETA, ambulance type and availability to identify suitable ambulances."}),n.jsxs("p",{className:"ai-explainer-sub",children:["Below, the recommended ambulance is highlighted for your reported symptoms (",t.emergencyType,"), ensuring necessary life-support equipment like transport ventilators or trauma splints are ready."]})]}),n.jsx("div",{className:"ambulances-list-grid",children:m.map(x=>n.jsx(Xh,{ambulance:x,isSelected:(a==null?void 0:a.id)===x.id,onSelect:()=>i(x),showAction:!0,actionText:"Select This Ambulance"},x.id))}),n.jsxs("div",{className:"bottom-confirm-bar glass-panel glow-red",children:[n.jsxs("div",{className:"confirm-summary",children:[n.jsx("span",{className:"summary-lbl",children:"Selected for Dispatch:"}),n.jsxs("h3",{className:"summary-val",children:[(a==null?void 0:a.unitName)||"Ambulance Unit Alpha"," (",a==null?void 0:a.type,")"]}),n.jsxs("span",{className:"summary-meta",children:["ETA: ",n.jsx("strong",{children:a==null?void 0:a.eta})," • Proximity: ",a==null?void 0:a.distance," • Fare: ",a==null?void 0:a.baseFare]})]}),n.jsxs("button",{onClick:g,className:"btn-dispatch-confirm",id:"sendAmbulanceRequestBtn",children:[n.jsx(Ge,{size:20}),n.jsx("span",{children:"SEND REQUEST TO AMBULANCE"}),n.jsx(ve,{size:18})]})]})]}),n.jsx("style",{children:`
        .matching-page-root {
          padding: 30px 20px 60px;
        }

        /* Scanning Screen */
        .scanning-container {
          padding: 80px 30px;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 680px;
          margin: 40px auto;
        }

        .radar-animation-box {
          position: relative;
          width: 180px;
          height: 180px;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .radar-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(239, 68, 68, 0.4);
        }

        .circle-1 { width: 60px; height: 60px; }
        .circle-2 { width: 120px; height: 120px; }
        .circle-3 { width: 180px; height: 180px; }

        .radar-sweep-hand {
          position: absolute;
          width: 90px;
          height: 90px;
          top: 0;
          left: 0;
          transform-origin: bottom right;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.4) 0%, transparent 60%);
          border-right: 2px solid #ef4444;
          animation: spin-slow 3s linear infinite;
        }

        .radar-center-icon {
          position: relative;
          z-index: 3;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #0f172a;
          border: 2px solid #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
        }

        .scanning-headline {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .scanning-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .scanning-criteria-tags {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .sc-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          color: var(--text-main);
        }

        /* Results Screen */
        .page-breadcrumb {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }

        .matching-header {
          margin-bottom: 24px;
        }

        .step-pill {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .matching-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .matching-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        /* AI Explainer Banner */
        .ai-explainer-banner {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%);
          border: 1px solid rgba(147, 51, 234, 0.35);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          margin-bottom: 28px;
        }

        .ai-explainer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 800;
          color: #c084fc;
          letter-spacing: 0.06em;
        }

        .ai-status-active {
          font-size: 0.72rem;
          color: #a78bfa;
          font-weight: 600;
        }

        .ai-explainer-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.4;
          margin-bottom: 6px;
        }

        .ai-explainer-sub {
          font-size: 0.82rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .ambulances-list-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 30px;
        }

        /* Bottom Sticky Confirm Bar */
        .bottom-confirm-bar {
          position: sticky;
          bottom: 20px;
          padding: 18px 24px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          background: rgba(10, 15, 30, 0.95);
          z-index: 50;
        }

        .confirm-summary {
          display: flex;
          flex-direction: column;
        }

        .summary-lbl {
          font-size: 0.7rem;
          color: var(--text-dim);
          font-weight: 700;
          text-transform: uppercase;
        }

        .summary-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
        }

        .summary-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .btn-dispatch-confirm {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(239, 68, 68, 0.5);
          transition: var(--transition);
        }

        .btn-dispatch-confirm:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(239, 68, 68, 0.75);
        }

        @media (max-width: 640px) {
          .bottom-confirm-bar {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-dispatch-confirm {
            justify-content: center;
          }
        }
      `})]})},Qr=[{key:"REQUESTED",label:"Requested",icon:yh,desc:"Call logged"},{key:"MATCHING",label:"AI Matching",icon:Rl,desc:"Fleet ranking"},{key:"DRIVER_ACCEPTED",label:"Driver Accepted",icon:Tu,desc:"Driver confirmed"},{key:"ON_THE_WAY",label:"On The Way",icon:Ge,desc:"En route to you"},{key:"ARRIVED",label:"Arrived",icon:me,desc:"At pickup point"},{key:"PATIENT_PICKED_UP",label:"Picked Up",icon:ut,desc:"Vitals stable"},{key:"AT_HOSPITAL",label:"At Hospital",icon:Qe,desc:"Emergency bay"},{key:"COMPLETED",label:"Completed",icon:ke,desc:"Safe handover"}],Dr=({currentStatus:e="REQUESTED",timeline:t=[]})=>{var i;const r=Qr.findIndex(s=>s.key===e),a=r!==-1?r:0;return n.jsxs("div",{className:"status-tracker-container",children:[n.jsxs("div",{className:"tracker-header",children:[n.jsxs("div",{className:"tracker-title-row",children:[n.jsxs("span",{className:"live-badge",children:[n.jsx("span",{className:"live-pip"}),"LIVE STATUS"]}),n.jsx("h4",{className:"tracker-stage-name",children:((i=Qr[a])==null?void 0:i.label)||e})]}),n.jsxs("div",{className:"tracker-step-count",children:["Step ",a+1," of ",Qr.length]})]}),n.jsxs("div",{className:"stages-bar",children:[n.jsx("div",{className:"stages-progress-fill",style:{width:`${a/(Qr.length-1)*100}%`}}),Qr.map((s,l)=>{const o=s.icon,c=l<a,d=l===a,m=l>a;return n.jsxs("div",{className:`stage-node ${c?"done":""} ${d?"current":""} ${m?"future":""}`,children:[n.jsxs("div",{className:"node-icon-circle",children:[n.jsx(o,{size:16}),d&&n.jsx("span",{className:"node-glow-ring"})]}),n.jsx("span",{className:"node-label",children:s.label}),n.jsx("span",{className:"node-desc",children:s.desc})]},s.key)})]}),n.jsx("style",{children:`
        .status-tracker-container {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-sm);
        }

        .tracker-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 12px;
        }

        .tracker-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #f87171;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .live-pip {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: beacon-pulse 1.2s infinite;
        }

        .tracker-stage-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .tracker-step-count {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.04);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .stages-bar {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
        }

        .stages-bar::before {
          content: '';
          position: absolute;
          top: 18px;
          left: 16px;
          right: 16px;
          height: 3px;
          background: rgba(255, 255, 255, 0.08);
          z-index: 1;
        }

        .stages-progress-fill {
          position: absolute;
          top: 18px;
          left: 16px;
          height: 3px;
          background: linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #ef4444 100%);
          z-index: 2;
          transition: width 0.5s ease;
        }

        .stage-node {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 90px;
          transition: var(--transition);
        }

        .node-icon-circle {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #0f172a;
          border: 2px solid #334155;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          transition: var(--transition);
        }

        .node-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-dim);
          line-height: 1.2;
          margin-bottom: 2px;
          transition: var(--transition);
        }

        .node-desc {
          font-size: 0.65rem;
          color: var(--text-dim);
          opacity: 0.7;
        }

        /* Done Node */
        .stage-node.done .node-icon-circle {
          background: #064e3b;
          border-color: #10b981;
          color: #34d399;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
        }

        .stage-node.done .node-label {
          color: #34d399;
        }

        /* Current Node */
        .stage-node.current .node-icon-circle {
          background: #ef4444;
          border-color: #fca5a5;
          color: #ffffff;
          transform: scale(1.15);
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
        }

        .stage-node.current .node-label {
          color: #ffffff;
          font-weight: 800;
        }

        .node-glow-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1.5px solid #ef4444;
          animation: beacon-pulse 1.4s infinite;
        }

        /* Responsive horizontal scroll for small screens */
        @media (max-width: 860px) {
          .stages-bar {
            overflow-x: auto;
            padding-bottom: 10px;
            justify-content: flex-start;
            gap: 20px;
          }
          .stages-bar::before, .stages-progress-fill {
            min-width: 650px;
          }
          .stage-node {
            min-width: 80px;
          }
        }
      `})]})},eg=()=>{const e=Y(),{activeRequest:t,updateRequestStatus:r}=xe(),[a,i]=y.useState(1),[s,l]=y.useState(0);if(y.useEffect(()=>{if(!t){e("/request/location");return}const c=setInterval(()=>{l(f=>f+1)},1e3),d=setTimeout(()=>{i(2)},1200),m=setTimeout(()=>{i(3),r("DRIVER_ACCEPTED"),setTimeout(()=>{e("/request/accepted")},1400)},4e3);return()=>{clearInterval(c),clearTimeout(d),clearTimeout(m)}},[t,e,r]),!t)return null;const o=()=>{i(3),r("DRIVER_ACCEPTED"),e("/request/accepted")};return n.jsxs("div",{className:"request-sent-root container-narrow",children:[n.jsx(Dr,{currentStatus:"REQUESTED"}),n.jsxs("div",{className:"request-sent-card glass-panel glow-red",children:[n.jsxs("div",{className:"sent-top-beacon",children:[n.jsxs("div",{className:"broadcasting-radar",children:[n.jsx(Lh,{size:36,color:"#ef4444",className:"broadcast-icon"}),n.jsx("span",{className:"wave-ring w-1"}),n.jsx("span",{className:"wave-ring w-2"})]}),n.jsx("h1",{className:"sent-title",children:"Ambulance Request Sent"}),n.jsx("p",{className:"sent-subtitle",children:"Broadcasting emergency telemetry to nearest available fleet unit."})]}),n.jsxs("div",{className:"clean-status-stepper",children:[n.jsxs("div",{className:`step-item ${a>=1?"done":""}`,children:[n.jsx("div",{className:"step-circle",children:n.jsx(ke,{size:18})}),n.jsxs("div",{className:"step-info",children:[n.jsx("span",{className:"step-label",children:"Request Sent"}),n.jsx("span",{className:"step-desc",children:"Logged into dispatch queue"})]})]}),n.jsx("div",{className:"stepper-line",children:n.jsx("div",{className:`line-fill ${a>=2?"active":""}`})}),n.jsxs("div",{className:`step-item ${a===2?"active":a>2?"done":""}`,children:[n.jsxs("div",{className:"step-circle",children:[a>=3?n.jsx(ke,{size:18}):n.jsx(Ot,{size:18}),a===2&&n.jsx("span",{className:"ring-pulse"})]}),n.jsxs("div",{className:"step-info",children:[n.jsx("span",{className:"step-label",children:"Waiting for Driver"}),n.jsxs("span",{className:"step-desc",children:["Driver unit verifying dispatch (",s,"s)"]})]})]}),n.jsx("div",{className:"stepper-line",children:n.jsx("div",{className:`line-fill ${a>=3?"active":""}`})}),n.jsxs("div",{className:`step-item ${a>=3?"done":""}`,children:[n.jsx("div",{className:"step-circle",children:n.jsx(ni,{size:18})}),n.jsxs("div",{className:"step-info",children:[n.jsx("span",{className:"step-label",children:"Driver Accepted"}),n.jsx("span",{className:"step-desc",children:"Ambulance locked to route"})]})]})]}),n.jsxs("div",{className:"req-details-grid",children:[n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"d-label",children:"REQUEST ID"}),n.jsx("span",{className:"d-val id-mono",children:t.id})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"d-label",children:"PATIENT NAME"}),n.jsx("span",{className:"d-val",children:t.patientName})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"d-label",children:"EMERGENCY TYPE"}),n.jsx("span",{className:"d-val red",children:t.emergencyType})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"d-label",children:"STATUS"}),n.jsx("span",{className:"d-val status-badge",children:a===1?"REQUEST SENT":a===2?"WAITING FOR DRIVER":"DRIVER ACCEPTED"})]}),n.jsxs("div",{className:"detail-field full",children:[n.jsx("span",{className:"d-label",children:"PICKUP LOCATION"}),n.jsx("span",{className:"d-val",children:t.pickupLocation.address}),t.pickupLocation.landmark&&n.jsxs("span",{className:"d-sub",children:["Landmark: ",t.pickupLocation.landmark]})]}),n.jsxs("div",{className:"detail-field full",children:[n.jsx("span",{className:"d-label",children:"RECEIVING HOSPITAL"}),n.jsx("span",{className:"d-val",children:t.destinationHospital.name})]})]}),n.jsx("div",{className:"fast-forward-row",children:n.jsxs("button",{onClick:o,className:"btn-ff-accept",children:[n.jsx("span",{children:"Fast-Forward: Simulate Driver Acceptance"}),n.jsx(ve,{size:16})]})})]}),n.jsx("style",{children:`
        .request-sent-root {
          padding: 30px 20px 60px;
        }

        .request-sent-card {
          padding: 40px 36px;
          border-radius: var(--radius-xl);
        }

        .sent-top-beacon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 32px;
        }

        .broadcasting-radar {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .broadcast-icon {
          z-index: 2;
        }

        .wave-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1.5px solid rgba(239, 68, 68, 0.6);
          animation: beacon-expand 2s infinite;
        }

        .wave-ring.w-2 {
          animation-delay: 1s;
        }

        .sent-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .sent-subtitle {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        /* 3-Stage Stepper */
        .clean-status-stepper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 32px;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .step-circle {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #1e293b;
          border: 2px solid #475569;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: var(--transition);
        }

        .step-item.active .step-circle {
          background: #ef4444;
          border-color: #fca5a5;
          color: #ffffff;
          box-shadow: 0 0 16px rgba(239, 68, 68, 0.8);
        }

        .step-item.done .step-circle {
          background: #064e3b;
          border-color: #10b981;
          color: #34d399;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
        }

        .ring-pulse {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1.5px solid #ef4444;
          animation: beacon-pulse 1.2s infinite;
        }

        .step-info {
          display: flex;
          flex-direction: column;
        }

        .step-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
        }

        .step-desc {
          font-size: 0.72rem;
          color: var(--text-dim);
        }

        .stepper-line {
          flex: 1;
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0 16px;
          border-radius: 2px;
          overflow: hidden;
        }

        .line-fill {
          width: 0%;
          height: 100%;
          background: #ef4444;
          transition: width 0.6s ease;
        }

        .line-fill.active {
          width: 100%;
        }

        /* Details Grid */
        .req-details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 24px;
        }

        .detail-field {
          display: flex;
          flex-direction: column;
        }

        .detail-field.full {
          grid-column: span 2;
        }

        .d-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }

        .d-val {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .d-val.id-mono {
          font-family: var(--font-mono);
          color: var(--accent-cyan);
        }

        .d-val.red {
          color: #f87171;
        }

        .d-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .status-badge {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 800;
          color: #fca5a5;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .fast-forward-row {
          display: flex;
          justify-content: flex-end;
        }

        .btn-ff-accept {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px dashed rgba(255, 255, 255, 0.2);
          color: var(--text-muted);
          font-size: 0.82rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-ff-accept:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .clean-status-stepper {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .stepper-line {
            display: none;
          }
          .req-details-grid {
            grid-template-columns: 1fr;
          }
          .detail-field.full {
            grid-column: span 1;
          }
        }
      `})]})},tg=({isOpen:e,onClose:t,title:r,subtitle:a,children:i,maxWidth:s="550px"})=>(y.useEffect(()=>{const l=o=>{o.key==="Escape"&&e&&t()};return e&&(document.body.style.overflow="hidden",window.addEventListener("keydown",l)),()=>{document.body.style.overflow="",window.removeEventListener("keydown",l)}},[e,t]),e?n.jsxs("div",{className:"modal-backdrop-overlay",onClick:t,role:"dialog","aria-modal":"true",children:[n.jsxs("div",{className:"modal-window-card",style:{maxWidth:s},onClick:l=>l.stopPropagation(),children:[n.jsxs("div",{className:"modal-top-bar",children:[n.jsxs("div",{className:"modal-titles",children:[r&&n.jsx("h3",{className:"modal-title-text",children:r}),a&&n.jsx("p",{className:"modal-sub-text",children:a})]}),n.jsx("button",{className:"modal-close-icon-btn",onClick:t,"aria-label":"Close dialog",children:n.jsx(Au,{size:20})})]}),n.jsx("div",{className:"modal-body-area",children:i})]}),n.jsx("style",{children:`
        .modal-backdrop-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 7, 16, 0.78);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 10000;
          animation: fade-in 0.2s ease-out;
        }

        .modal-window-card {
          width: 100%;
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-xl);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
          overflow: hidden;
          animation: scale-up 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-top-bar {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 20px 24px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .modal-title-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
        }

        .modal-sub-text {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .modal-close-icon-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .modal-close-icon-btn:hover {
          color: #fff;
          background: rgba(239, 68, 68, 0.3);
          border-color: #ef4444;
        }

        .modal-body-area {
          padding: 20px 24px 24px;
          max-height: 80vh;
          overflow-y: auto;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-up {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `})]}):null),Il=({driver:e,ambulance:t,onCall:r,showCallModalDirect:a=!0})=>{const[i,s]=y.useState(!1),[l,o]=y.useState(!1),{name:c="Kumar Selvam",avatar:d="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",phone:m="+91 94441 23456",rating:f=4.9,tripsCompleted:g=428,experience:x="6 Years Emergency Driving"}=e||{},j=()=>{r?r():(s(!0),o(!0),setTimeout(()=>o(!1),2e3))};return n.jsxs("div",{className:"resq-driver-card glass-panel",children:[n.jsxs("div",{className:"driver-card-inner",children:[n.jsxs("div",{className:"avatar-wrapper",children:[n.jsx("img",{src:d,alt:c,className:"driver-img"}),n.jsx("div",{className:"driver-status-badge",title:"Certified Emergency Driver",children:n.jsx(ni,{size:14,color:"#10b981"})})]}),n.jsxs("div",{className:"driver-info-col",children:[n.jsxs("div",{className:"driver-meta-top",children:[n.jsx("span",{className:"driver-badge",children:"DISPATCHED RESPONDER"}),n.jsxs("div",{className:"driver-rating-row",children:[n.jsx(Ln,{size:14,fill:"#f59e0b",color:"#f59e0b"}),n.jsx("span",{className:"rating-score",children:f}),n.jsxs("span",{className:"trips-count",children:["(",g," trips)"]})]})]}),n.jsx("h3",{className:"driver-full-name",children:c}),n.jsxs("p",{className:"driver-exp-sub",children:[x," • Advanced First Responder"]}),t&&n.jsxs("div",{className:"assigned-vehicle-strip",children:[n.jsx(ti,{size:14,color:"#38bdf8"}),n.jsx("span",{className:"veh-plate",children:t.vehicleNumber}),n.jsxs("span",{className:"veh-type",children:["(",t.type,")"]})]})]}),n.jsxs("div",{className:"driver-actions-col",children:[n.jsxs("button",{onClick:j,className:"btn-call-driver",title:`Call Driver ${c}`,children:[n.jsx(Mr,{size:18}),n.jsx("span",{children:"Call Driver"})]}),n.jsx("a",{href:`tel:${m}`,className:"direct-phone-num",children:m})]})]}),n.jsx(tg,{isOpen:i,onClose:()=>s(!1),title:"Emergency Line to Ambulance Driver",subtitle:`Connecting to ${c} on priority line...`,children:n.jsxs("div",{className:"call-sim-box",children:[n.jsxs("div",{className:"call-sim-avatar",children:[n.jsx("img",{src:d,alt:c}),n.jsx("div",{className:"call-sound-wave"})]}),n.jsx("h4",{className:"call-sim-name",children:c}),n.jsx("span",{className:"call-sim-status",children:l?"Dialing Driver In-Cabin Comm...":"Connected (Priority VoIP Channel)"}),n.jsx("span",{className:"call-sim-phone",children:m}),n.jsx("div",{className:"call-tip-note",children:"Driver is navigating with sirens active. Please keep instructions brief and landmark-focused."}),n.jsx("button",{className:"btn-end-call",onClick:()=>s(!1),children:"End Call"})]})}),n.jsx("style",{children:`
        .resq-driver-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          margin-bottom: 20px;
        }

        .driver-card-inner {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .avatar-wrapper {
          position: relative;
          width: 68px;
          height: 68px;
          flex-shrink: 0;
        }

        .driver-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .driver-status-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 22px;
          height: 22px;
          background: #0f172a;
          border: 1.5px solid #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .driver-info-col {
          flex: 1;
          min-width: 200px;
        }

        .driver-meta-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .driver-badge {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .driver-rating-row {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
        }

        .rating-score {
          font-weight: 700;
          color: #fbbf24;
        }

        .trips-count {
          color: var(--text-dim);
          font-size: 0.75rem;
        }

        .driver-full-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }

        .driver-exp-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .assigned-vehicle-strip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          background: rgba(255, 255, 255, 0.04);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
        }

        .veh-plate {
          font-family: var(--font-mono);
          font-weight: 700;
          color: #ffffff;
        }

        .veh-type {
          color: var(--text-muted);
        }

        .driver-actions-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .btn-call-driver {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #10b981;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.88rem;
          border: none;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
        }

        .btn-call-driver:hover {
          background: #059669;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.5);
        }

        .direct-phone-num {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-dim);
        }

        .direct-phone-num:hover {
          color: #ffffff;
        }

        /* Call Sim Modal Styles */
        .call-sim-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px 0;
        }

        .call-sim-avatar {
          position: relative;
          width: 84px;
          height: 84px;
          margin-bottom: 16px;
        }

        .call-sim-avatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #10b981;
        }

        .call-sound-wave {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid rgba(16, 185, 129, 0.6);
          animation: beacon-expand 1.6s infinite;
        }

        .call-sim-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
        }

        .call-sim-status {
          font-size: 0.85rem;
          color: #34d399;
          font-weight: 600;
          margin-top: 4px;
        }

        .call-sim-phone {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-top: 6px;
        }

        .call-tip-note {
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          padding: 10px 16px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 20px 0;
        }

        .btn-end-call {
          background: #ef4444;
          color: #fff;
          font-weight: 700;
          padding: 12px 32px;
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-end-call:hover {
          background: #dc2626;
        }

        @media (max-width: 640px) {
          .driver-actions-col {
            width: 100%;
            align-items: stretch;
          }
          .btn-call-driver {
            justify-content: center;
          }
          .direct-phone-num {
            text-align: center;
          }
        }
      `})]})},rg=()=>{const e=Y(),{activeRequest:t,updateRequestStatus:r}=xe();if(!t)return e("/dashboard"),null;const{ambulance:a,driver:i,pickupLocation:s,destinationHospital:l,etaMinutes:o=6,distanceKm:c=2.1}=t,d=()=>{r("ON_THE_WAY"),e("/request/tracking")};return n.jsxs("div",{className:"accepted-page-root container-narrow",children:[n.jsx(Dr,{currentStatus:"DRIVER_ACCEPTED"}),n.jsxs("div",{className:"accepted-card glass-panel glow-success",children:[n.jsxs("div",{className:"confirmed-hero-header",children:[n.jsx("div",{className:"success-badge-icon",children:n.jsx(ke,{size:38,color:"#10b981"})}),n.jsx("span",{className:"dispatch-badge",children:"DISPATCH CONFIRMED"}),n.jsx("h1",{className:"confirmed-title",children:"Ambulance Confirmed"}),n.jsxs("p",{className:"confirmed-sub",children:["Driver ",n.jsx("strong",{children:i.name})," has accepted your emergency request and is en route."]})]}),n.jsx(Il,{driver:i,ambulance:a}),n.jsxs("div",{className:"ambulance-spec-grid",children:[n.jsxs("div",{className:"spec-card",children:[n.jsx("span",{className:"spec-label",children:"VEHICLE PLATE"}),n.jsx("h4",{className:"spec-val plate",children:a.vehicleNumber}),n.jsx("span",{className:"spec-sub",children:a.unitName})]}),n.jsxs("div",{className:"spec-card",children:[n.jsx("span",{className:"spec-label",children:"AMBULANCE TYPE"}),n.jsx("h4",{className:"spec-val red",children:a.type}),n.jsx("span",{className:"spec-sub",children:"Equipped with Mobile ICU"})]}),n.jsxs("div",{className:"spec-card",children:[n.jsx("span",{className:"spec-label",children:"ESTIMATED ETA"}),n.jsx("h4",{className:"spec-val cyan",children:a.eta||`${o} minutes`}),n.jsx("span",{className:"spec-sub",children:"Traffic cleared corridor"})]}),n.jsxs("div",{className:"spec-card",children:[n.jsx("span",{className:"spec-label",children:"PROXIMITY DISTANCE"}),n.jsx("h4",{className:"spec-val",children:a.distance||`${c} km`}),n.jsx("span",{className:"spec-sub",children:"Direct vector"})]})]}),n.jsx(Pu,{pickupAddress:s.address,landmark:s.landmark,hospitalName:l.name,hospitalAddress:l.address,editable:!1}),n.jsx("div",{className:"track-action-box",children:n.jsxs("button",{onClick:d,className:"btn-track-ambulance",id:"trackAmbulanceBtn",children:[n.jsx(Ye,{size:22}),n.jsx("span",{children:"TRACK AMBULANCE LIVE"}),n.jsx(ve,{size:20})]})})]}),n.jsx("style",{children:`
        .accepted-page-root {
          padding: 30px 20px 60px;
        }

        .accepted-card {
          padding: 36px 32px;
          border-radius: var(--radius-xl);
        }

        .confirmed-hero-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 28px;
        }

        .success-badge-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 2px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.4);
        }

        .dispatch-badge {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #34d399;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 3px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .confirmed-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 6px;
        }

        .confirmed-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .ambulance-spec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 14px;
          margin-bottom: 24px;
        }

        .spec-card {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
        }

        .spec-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }

        .spec-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
        }

        .spec-val.plate {
          font-family: var(--font-mono);
          color: #ffffff;
        }

        .spec-val.red {
          color: #f87171;
        }

        .spec-val.cyan {
          color: #38bdf8;
        }

        .spec-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .track-action-box {
          margin-top: 24px;
        }

        .btn-track-ambulance {
          width: 100%;
          padding: 18px 32px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.6);
          transition: var(--transition);
        }

        .btn-track-ambulance:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 45px rgba(239, 68, 68, 0.85);
          background: linear-gradient(135deg, #f87171 0%, #dc2626 100%);
        }
      `})]})},ng=({initialMinutes:e=6,distance:t="2.1 km",statusHeadline:r="Ambulance is on the way",statusSubtext:a="Driver is navigating emergency route with sirens enabled",onArriveClick:i})=>{const[s,l]=y.useState(e*60);y.useEffect(()=>{const d=setInterval(()=>{l(m=>m>10?m-1:10)},1e3);return()=>clearInterval(d)},[]);const o=Math.floor(s/60),c=s%60;return n.jsxs("div",{className:"resq-eta-card glass-panel glow-red",children:[n.jsxs("div",{className:"eta-card-grid",children:[n.jsxs("div",{className:"eta-status-col",children:[n.jsxs("div",{className:"live-siren-pill",children:[n.jsx("span",{className:"flashing-siren-dot"}),n.jsx("span",{children:"LIVE DISPATCH EN ROUTE"})]}),n.jsx("h2",{className:"eta-headline",children:r}),n.jsx("p",{className:"eta-subtext",children:a})]}),n.jsxs("div",{className:"eta-time-col",children:[n.jsx("span",{className:"eta-label",children:"ESTIMATED ARRIVAL"}),n.jsxs("div",{className:"eta-time-digits",children:[n.jsx("span",{className:"digits-num",children:o}),n.jsx("span",{className:"digits-unit",children:"m"}),n.jsx("span",{className:"digits-num",children:c<10?`0${c}`:c}),n.jsx("span",{className:"digits-unit",children:"s"})]}),n.jsxs("span",{className:"eta-proximity",children:[n.jsx(Ye,{size:13,color:"#38bdf8"}),n.jsxs("span",{children:[t," away"]})]})]}),i&&n.jsx("div",{className:"eta-quick-action-col",children:n.jsxs("button",{onClick:i,className:"btn-simulate-arrival",title:"Fast forward simulation to arrived state",children:[n.jsx(Ge,{size:16}),n.jsx("span",{children:"Simulate Arrival"})]})})]}),n.jsx("style",{children:`
        .resq-eta-card {
          padding: 22px 28px;
          border-radius: var(--radius-xl);
          margin-bottom: 22px;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(15, 23, 42, 0.9) 100%);
        }

        .eta-card-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .eta-status-col {
          flex: 1;
          min-width: 240px;
        }

        .live-siren-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .flashing-siren-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 10px #ef4444;
          animation: beacon-pulse 1s infinite;
        }

        .eta-headline {
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
        }

        .eta-subtext {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .eta-time-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 12px 24px;
        }

        .eta-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-dim);
          margin-bottom: 2px;
        }

        .eta-time-digits {
          display: flex;
          align-items: baseline;
          gap: 2px;
        }

        .digits-num {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 900;
          color: #38bdf8;
          line-height: 1;
        }

        .digits-unit {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-right: 6px;
        }

        .eta-proximity {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: #e2e8f0;
          font-weight: 600;
          margin-top: 4px;
        }

        .btn-simulate-arrival {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px dashed rgba(255, 255, 255, 0.2);
          color: var(--text-muted);
          font-size: 0.75rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-simulate-arrival:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.35);
        }

        @media (max-width: 640px) {
          .eta-card-grid {
            flex-direction: column;
            align-items: stretch;
          }
          .eta-time-col {
            width: 100%;
          }
        }
      `})]})},ag=()=>{const e=Y(),{activeRequest:t,updateRequestStatus:r}=xe();if(!t)return e("/dashboard"),null;const{ambulance:a,driver:i,pickupLocation:s,destinationHospital:l,patientName:o,emergencyType:c}=t,d=()=>{r("ARRIVED"),e("/request/arrived")};return n.jsxs("div",{className:"tracking-page-root container",children:[n.jsx(Dr,{currentStatus:"ON_THE_WAY"}),n.jsx(ng,{initialMinutes:t.etaMinutes||6,distance:(a==null?void 0:a.distance)||"2.1 km",statusHeadline:"Ambulance is on the way",statusSubtext:`Unit ${(a==null?void 0:a.unitName)||"Alpha"} en route to ${s.address}`,onArriveClick:d}),n.jsxs("div",{className:"tracking-main-layout",children:[n.jsxs("div",{className:"tracking-map-panel glass-panel",children:[n.jsxs("div",{className:"map-panel-top",children:[n.jsxs("div",{className:"map-title-tag",children:[n.jsx("span",{className:"pulsing-beacon-dot"}),n.jsx("span",{children:"LIVE AMBULANCE GPS TRACKING"})]}),n.jsx("span",{className:"telemetry-speed",children:"TELEMETRY: 52 KM/H • SIRENS ACTIVE"})]}),n.jsx(In,{status:"ON_THE_WAY",pickup:s,hospital:l,height:"520px",showControls:!0})]}),n.jsxs("div",{className:"tracking-side-column",children:[n.jsxs("div",{className:"side-card-wrap",children:[n.jsx("h3",{className:"side-section-title",children:"Emergency Driver Information"}),n.jsx(Il,{driver:i,ambulance:a})]}),n.jsxs("div",{className:"incident-summary-card glass-panel",children:[n.jsxs("div",{className:"inc-header",children:[n.jsx("span",{className:"inc-label",children:"PATIENT & HOSPITAL DISPATCH"}),n.jsx("span",{className:"inc-type-tag",children:c})]}),n.jsx("h4",{className:"inc-patient-name",children:o}),n.jsxs("div",{className:"inc-address-row",children:[n.jsx(me,{size:15,color:"#ef4444"}),n.jsx("span",{children:s.address})]}),n.jsxs("div",{className:"inc-address-row",style:{marginTop:"8px"},children:[n.jsx(Qe,{size:15,color:"#06b6d4"}),n.jsxs("span",{children:["Receiving: ",n.jsx("strong",{children:l.name})]})]})]}),n.jsx("div",{className:"advance-trigger-box",children:n.jsxs("button",{onClick:d,className:"btn-mark-arrived",id:"ambulanceArrivedBtn",children:[n.jsx(Ge,{size:20}),n.jsx("span",{children:"AMBULANCE HAS ARRIVED"}),n.jsx(ve,{size:18})]})})]})]}),n.jsx("style",{children:`
        .tracking-page-root {
          padding: 30px 20px 60px;
        }

        .tracking-main-layout {
          display: grid;
          grid-template-columns: 1.35fr 0.85fr;
          gap: 28px;
          align-items: start;
        }

        .tracking-map-panel {
          padding: 20px;
          border-radius: var(--radius-xl);
        }

        .map-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .map-title-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #f87171;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .pulsing-beacon-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: beacon-pulse 1s infinite;
        }

        .telemetry-speed {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #34d399;
          font-weight: 700;
        }

        .tracking-side-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .side-section-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .incident-summary-card {
          padding: 20px;
          border-radius: var(--radius-lg);
        }

        .inc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .inc-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
        }

        .inc-type-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: #f87171;
          background: rgba(239, 68, 68, 0.12);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .inc-patient-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .inc-address-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .btn-mark-arrived {
          width: 100%;
          padding: 16px 24px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 18px rgba(16, 185, 129, 0.4);
          transition: var(--transition);
        }

        .btn-mark-arrived:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(16, 185, 129, 0.65);
          background: linear-gradient(135deg, #34d399 0%, #059669 100%);
        }

        @media (max-width: 992px) {
          .tracking-main-layout {
            grid-template-columns: 1fr;
          }
        }
      `})]})},ig=()=>{const e=Y(),{activeRequest:t,updateRequestStatus:r}=xe();if(!t)return e("/dashboard"),null;const{ambulance:a,driver:i,pickupLocation:s,destinationHospital:l,patientName:o,patientAge:c,emergencyType:d,additionalNotes:m}=t,f=()=>{r("PATIENT_PICKED_UP",{note:"Patient safely stabilized on stretcher and boarded into mobile ICU"}),e("/request/hospital")};return n.jsxs("div",{className:"arrived-page-root container-narrow",children:[n.jsx(Dr,{currentStatus:"ARRIVED"}),n.jsxs("div",{className:"arrived-card glass-panel glow-success",children:[n.jsxs("div",{className:"arrived-hero-header",children:[n.jsx("div",{className:"arrived-icon-badge",children:n.jsx(me,{size:42,color:"#10b981"})}),n.jsx("span",{className:"arrived-pill",children:"ON-SITE VEHICLE CONTACT"}),n.jsx("h1",{className:"arrived-title",children:"Ambulance Has Arrived"}),n.jsxs("p",{className:"arrived-desc",children:["Ambulance unit ",n.jsx("strong",{children:a.vehicleNumber})," has pulled up at your designated pickup point. Emergency medical responders are attending."]})]}),n.jsx(Il,{driver:i,ambulance:a}),n.jsxs("div",{className:"arrived-details-matrix",children:[n.jsxs("div",{className:"matrix-item",children:[n.jsx("span",{className:"m-label",children:"PATIENT DETAILS"}),n.jsxs("h4",{className:"m-val",children:[o,", ",c," yrs"]}),n.jsxs("span",{className:"m-sub",children:["Condition: ",d]})]}),n.jsxs("div",{className:"matrix-item",children:[n.jsx("span",{className:"m-label",children:"AMBULANCE DETAILS"}),n.jsx("h4",{className:"m-val plate",children:a.vehicleNumber}),n.jsxs("span",{className:"m-sub",children:[a.type," • Unit Alpha"]})]}),n.jsxs("div",{className:"matrix-item full",children:[n.jsx("span",{className:"m-label",children:"PICKUP LOCATION"}),n.jsx("h4",{className:"m-val",children:s.address}),s.landmark&&n.jsxs("span",{className:"m-sub",children:["Landmark: ",s.landmark]})]}),n.jsxs("div",{className:"matrix-item full",children:[n.jsx("span",{className:"m-label",children:"TRIAGE / MEDICAL NOTES FOR EMT"}),n.jsx("p",{className:"m-notes-box",children:m||"Patient is conscious, urgent cardiac monitoring requested."})]})]}),n.jsxs("div",{className:"picked-up-action-box",children:[n.jsxs("button",{onClick:f,className:"btn-patient-picked-up",id:"patientPickedUpBtn",children:[n.jsx(Tu,{size:22}),n.jsx("span",{children:"PATIENT PICKED UP & STABILIZED"}),n.jsx(ve,{size:20})]}),n.jsx("span",{className:"picked-up-helper",children:"Confirms patient has boarded the ambulance and initiates hospital transit route navigation."})]})]}),n.jsx("style",{children:`
        .arrived-page-root {
          padding: 30px 20px 60px;
        }

        .arrived-card {
          padding: 36px 32px;
          border-radius: var(--radius-xl);
        }

        .arrived-hero-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 28px;
        }

        .arrived-icon-badge {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 2px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.45);
        }

        .arrived-pill {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #34d399;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 3px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .arrived-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 6px;
        }

        .arrived-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 580px;
        }

        .arrived-details-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 22px;
          margin-bottom: 28px;
        }

        .matrix-item {
          display: flex;
          flex-direction: column;
        }

        .matrix-item.full {
          grid-column: span 2;
        }

        .m-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }

        .m-val {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .m-val.plate {
          font-family: var(--font-mono);
          color: #38bdf8;
        }

        .m-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .m-notes-box {
          font-size: 0.88rem;
          color: #e2e8f0;
          background: rgba(255, 255, 255, 0.04);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          margin-top: 4px;
          line-height: 1.5;
        }

        .picked-up-action-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .btn-patient-picked-up {
          width: 100%;
          padding: 18px 32px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.6);
          transition: var(--transition);
        }

        .btn-patient-picked-up:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 45px rgba(16, 185, 129, 0.85);
          background: linear-gradient(135deg, #34d399 0%, #059669 100%);
        }

        .picked-up-helper {
          font-size: 0.8rem;
          color: var(--text-dim);
          text-align: center;
        }

        @media (max-width: 640px) {
          .arrived-details-matrix {
            grid-template-columns: 1fr;
          }
          .matrix-item.full {
            grid-column: span 1;
          }
        }
      `})]})},sg=()=>{const e=Y(),{activeRequest:t,updateRequestStatus:r}=xe();if(!t)return e("/dashboard"),null;const{destinationHospital:a,pickupLocation:i,ambulance:s,driver:l,patientName:o,emergencyType:c}=t,d=()=>{r("AT_HOSPITAL",{note:"Ambulance arrived at Emergency Trauma Bay 4"}),e("/request/completed")};return n.jsxs("div",{className:"hospital-nav-page-root container",children:[n.jsx(Dr,{currentStatus:"AT_HOSPITAL"}),n.jsxs("div",{className:"transit-top-strip glass-panel glow-cyan",children:[n.jsxs("div",{className:"strip-left",children:[n.jsxs("div",{className:"siren-pulse-tag",children:[n.jsx("span",{className:"cyan-beacon-dot"}),n.jsx("span",{children:"CRITICAL TRANSIT IN PROGRESS"})]}),n.jsx("h1",{className:"transit-headline",children:"On The Way to Hospital"}),n.jsxs("p",{className:"transit-sub",children:["Ambulance ",n.jsx("strong",{children:s.vehicleNumber})," is transferring patient ",n.jsx("strong",{children:o})," under continuous clinical monitoring."]})]}),n.jsxs("div",{className:"strip-right-eta",children:[n.jsx("span",{className:"er-eta-label",children:"TRAUMA BAY ETA"}),n.jsxs("div",{className:"er-eta-time",children:[n.jsx("span",{className:"er-eta-num",children:"12"}),n.jsx("span",{className:"er-eta-unit",children:"MINS"})]}),n.jsx("span",{className:"er-distance",children:"5.4 km remaining"})]})]}),n.jsxs("div",{className:"hospital-nav-grid",children:[n.jsxs("div",{className:"hospital-map-panel glass-panel",children:[n.jsxs("div",{className:"map-panel-bar",children:[n.jsxs("span",{className:"badge badge-ai",children:[n.jsx(Ye,{size:12}),n.jsx("span",{children:"EMERGENCY GREEN CORRIDOR ENGAGED"})]}),n.jsxs("span",{className:"hosp-target-tag",children:["Target: ",a.name]})]}),n.jsx(In,{status:"PATIENT_PICKED_UP",pickup:i,hospital:a,height:"480px",showControls:!0}),n.jsxs("div",{className:"transit-vitals-ticker",children:[n.jsxs("div",{className:"vital-item",children:[n.jsx(Pl,{size:14,color:"#10b981"}),n.jsx("span",{children:"ECG & SPO2 Telemetry Streaming to Hospital ER"})]}),n.jsxs("div",{className:"vital-item",children:[n.jsx(zu,{size:14,color:"#f59e0b"}),n.jsx("span",{children:"Trauma Bay 4 Prepared for Resuscitation"})]})]})]}),n.jsxs("div",{className:"hospital-side-panel",children:[n.jsx("h3",{className:"side-heading",children:"Receiving Trauma Facility"}),n.jsx(Ru,{hospital:a}),n.jsxs("div",{className:"transit-unit-capsule glass-panel",children:[n.jsx("span",{className:"capsule-label",children:"DISPATCHED CREW"}),n.jsxs("div",{className:"capsule-crew-row",children:[n.jsx("div",{className:"crew-avatar",children:l.name.charAt(0)}),n.jsxs("div",{children:[n.jsx("h4",{className:"crew-name",children:l.name}),n.jsxs("span",{className:"crew-meta",children:[s.type," • ",s.vehicleNumber]})]})]})]}),n.jsxs("div",{className:"arrived-hospital-action-box",children:[n.jsxs("button",{onClick:d,className:"btn-arrived-hospital",id:"arrivedAtHospitalBtn",children:[n.jsx(Qe,{size:22}),n.jsx("span",{children:"ARRIVED AT HOSPITAL"}),n.jsx(ve,{size:20})]}),n.jsx("span",{className:"action-hint",children:"Transitions to emergency triage handover and trip completion summary."})]})]})]}),n.jsx("style",{children:`
        .hospital-nav-page-root {
          padding: 30px 20px 60px;
        }

        .transit-top-strip {
          padding: 24px 30px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 28px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%);
        }

        .siren-pulse-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #67e8f9;
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.35);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 6px;
        }

        .cyan-beacon-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #06b6d4;
          box-shadow: 0 0 8px #06b6d4;
          animation: beacon-pulse 1s infinite;
        }

        .transit-headline {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 4px;
        }

        .transit-sub {
          font-size: 0.92rem;
          color: var(--text-muted);
        }

        .strip-right-eta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 10px 18px;
        }

        .er-eta-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.08em;
        }

        .er-eta-time {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .er-eta-num {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 900;
          color: #38bdf8;
          line-height: 1;
        }

        .er-eta-unit {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .er-distance {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .hospital-nav-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.85fr;
          gap: 28px;
          align-items: start;
        }

        .hospital-map-panel {
          padding: 20px;
          border-radius: var(--radius-xl);
        }

        .map-panel-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .hosp-target-tag {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .transit-vitals-ticker {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin-top: 14px;
        }

        .vital-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #e2e8f0;
        }

        .hospital-side-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .side-heading {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .transit-unit-capsule {
          padding: 16px;
          border-radius: var(--radius-md);
        }

        .capsule-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 8px;
        }

        .capsule-crew-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .crew-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284c7, #0e7490);
          color: #fff;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .crew-name {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .crew-meta {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .arrived-hospital-action-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .btn-arrived-hospital {
          width: 100%;
          padding: 18px 28px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 4px 20px rgba(2, 132, 199, 0.45);
          transition: var(--transition);
        }

        .btn-arrived-hospital:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 26px rgba(2, 132, 199, 0.7);
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
        }

        .action-hint {
          font-size: 0.75rem;
          color: var(--text-dim);
          text-align: center;
        }

        @media (max-width: 992px) {
          .hospital-nav-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},lg=()=>{const e=Y(),{activeRequest:t,completeTrip:r}=xe(),[a,i]=y.useState(5),[s,l]=y.useState(0),[o,c]=y.useState(""),[d,m]=y.useState(["Rapid Response","Professional EMT","Smooth Driving"]),[f,g]=y.useState(["Rapid Response","Professional EMT"]);if(!t)return e("/dashboard"),null;const{ambulance:x,driver:j,pickupLocation:v,destinationHospital:N,patientName:u}=t,p=b=>{g(k=>k.includes(b)?k.filter(C=>C!==b):[...k,b])},h=()=>{r(a,o),e("/request/closed")};return n.jsxs("div",{className:"completed-page-root container-narrow",children:[n.jsx(Dr,{currentStatus:"COMPLETED"}),n.jsxs("div",{className:"completed-card glass-panel glow-success",children:[n.jsxs("div",{className:"completed-hero-header",children:[n.jsx("div",{className:"success-circle-icon",children:n.jsx(ke,{size:44,color:"#10b981"})}),n.jsx("span",{className:"completed-badge",children:"EMERGENCY RUN SUCCESSFUL"}),n.jsx("h1",{className:"completed-title",children:"Trip Completed"}),n.jsxs("p",{className:"completed-sub",children:["Patient safely transferred into ",n.jsx("strong",{children:N.name})," Emergency Department. Triage clinical handover signed."]})]}),n.jsxs("div",{className:"trip-summary-box",children:[n.jsxs("div",{className:"summary-col",children:[n.jsx("span",{className:"s-label",children:"PATIENT NAME"}),n.jsx("h4",{className:"s-val",children:u})]}),n.jsxs("div",{className:"summary-col",children:[n.jsx("span",{className:"s-label",children:"AMBULANCE NUMBER"}),n.jsx("h4",{className:"s-val plate",children:x.vehicleNumber})]}),n.jsxs("div",{className:"summary-col",children:[n.jsx("span",{className:"s-label",children:"DISPATCHED DRIVER"}),n.jsx("h4",{className:"s-val",children:j.name})]}),n.jsxs("div",{className:"summary-col",children:[n.jsx("span",{className:"s-label",children:"TRIP DURATION"}),n.jsx("h4",{className:"s-val green",children:"18 mins (Golden Hour)"})]}),n.jsxs("div",{className:"summary-col",children:[n.jsx("span",{className:"s-label",children:"DISTANCE TRAVELLED"}),n.jsx("h4",{className:"s-val cyan",children:x.distance||"2.1 km"})]}),n.jsxs("div",{className:"summary-col",children:[n.jsx("span",{className:"s-label",children:"RECEIVING HOSPITAL"}),n.jsx("h4",{className:"s-val",children:N.name})]}),n.jsxs("div",{className:"summary-col full",children:[n.jsx("span",{className:"s-label",children:"PICKUP POINT"}),n.jsx("span",{className:"s-addr",children:v.address})]})]}),n.jsxs("div",{className:"rating-section-box",children:[n.jsxs("div",{className:"rating-header-row",children:[n.jsx("span",{className:"rate-badge",children:"CREW & DISPATCH FEEDBACK"}),n.jsx("h3",{className:"rating-heading",children:"Rate Your Experience"}),n.jsx("p",{className:"rating-desc",children:"Your rating helps maintain high clinical transport standards across our certified fleet."})]}),n.jsxs("div",{className:"star-rating-row",children:[[1,2,3,4,5].map(b=>n.jsx("button",{type:"button",className:"star-btn",onMouseEnter:()=>l(b),onMouseLeave:()=>l(0),onClick:()=>i(b),"aria-label":`Rate ${b} stars`,children:n.jsx(Ln,{size:36,fill:(s||a)>=b?"#f59e0b":"transparent",color:(s||a)>=b?"#f59e0b":"#475569"})},b)),n.jsxs("span",{className:"rating-numeric-tag",children:[a,".0 / 5.0"]})]}),n.jsx("div",{className:"tags-row",children:["Rapid Response","Professional EMT","Smooth Driving","Calm Communication","Clean Cabin"].map(b=>n.jsx("button",{type:"button",className:`tag-pill ${f.includes(b)?"active":""}`,onClick:()=>p(b),children:b},b))}),n.jsx("textarea",{className:"form-textarea",rows:"2",placeholder:"Additional comments for the ambulance crew (optional)...",value:o,onChange:b=>c(b.target.value)})]}),n.jsx("div",{className:"close-action-wrap",children:n.jsxs("button",{onClick:h,className:"btn-close-request",id:"closeRequestBtn",children:[n.jsx("span",{children:"CLOSE REQUEST & FINALIZE"}),n.jsx(ve,{size:20})]})})]}),n.jsx("style",{children:`
        .completed-page-root {
          padding: 30px 20px 60px;
        }

        .completed-card {
          padding: 40px 36px;
          border-radius: var(--radius-xl);
        }

        .completed-hero-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 30px;
        }

        .success-circle-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 2px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.45);
        }

        .completed-badge {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #34d399;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 4px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .completed-title {
          font-size: 2.3rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 6px;
        }

        .completed-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 580px;
        }

        .trip-summary-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 32px;
        }

        .summary-col {
          display: flex;
          flex-direction: column;
        }

        .summary-col.full {
          grid-column: span 3;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 12px;
          margin-top: 4px;
        }

        .s-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }

        .s-val {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .s-val.plate {
          font-family: var(--font-mono);
          color: #38bdf8;
        }

        .s-val.green {
          color: #34d399;
        }

        .s-val.cyan {
          color: #06b6d4;
        }

        .s-addr {
          font-size: 0.88rem;
          color: #cbd5e1;
        }

        /* Rating Section */
        .rating-section-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 28px;
          margin-bottom: 28px;
          text-align: center;
        }

        .rate-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #fbbf24;
          text-transform: uppercase;
        }

        .rating-heading {
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 4px 0 6px;
        }

        .rating-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .star-rating-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .star-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          transition: transform 0.15s ease;
        }

        .star-btn:hover {
          transform: scale(1.15);
        }

        .rating-numeric-tag {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 800;
          color: #fbbf24;
          margin-left: 8px;
        }

        .tags-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 18px;
        }

        .tag-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }

        .tag-pill:hover, .tag-pill.active {
          background: rgba(245, 158, 11, 0.15);
          border-color: #f59e0b;
          color: #fbbf24;
        }

        .close-action-wrap {
          margin-top: 10px;
        }

        .btn-close-request {
          width: 100%;
          padding: 18px 32px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.45);
          transition: var(--transition);
        }

        .btn-close-request:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 28px rgba(16, 185, 129, 0.7);
        }

        @media (max-width: 768px) {
          .trip-summary-box {
            grid-template-columns: 1fr;
          }
          .summary-col.full {
            grid-column: span 1;
          }
        }
      `})]})},og=()=>{const e=Y(),{closeCurrentRequest:t}=xe(),r=()=>{t(),e("/dashboard")},a=()=>{t(),e("/request/location")};return n.jsxs("div",{className:"closed-page-root container-narrow",children:[n.jsxs("div",{className:"closed-card glass-panel glow-success",children:[n.jsx("div",{className:"large-success-badge",children:n.jsx(ke,{size:54,color:"#10b981"})}),n.jsx("span",{className:"closed-status-tag",children:"LIFECYCLE RESOLVED"}),n.jsx("h1",{className:"closed-headline",children:"Emergency Request Completed"}),n.jsx("p",{className:"closed-message",children:"The ambulance trip has been successfully completed."}),n.jsx("p",{className:"closed-subtext",children:"Hospital casuality reception has logged the transfer. A digital receipt and clinical handover summary have been archived in your dashboard history."}),n.jsxs("div",{className:"closed-voucher-box",children:[n.jsxs("div",{className:"voucher-row",children:[n.jsx(Eh,{size:18,color:"#10b981"}),n.jsx("span",{className:"voucher-title",children:"Discharge Voucher #VCH-2026-904"})]}),n.jsxs("div",{className:"voucher-details",children:[n.jsxs("span",{children:["Status: ",n.jsx("strong",{children:"Signed & Handed Over"})]}),n.jsxs("span",{children:["Priority: ",n.jsx("strong",{children:"Emergency ALS Resuscitation"})]}),n.jsxs("span",{children:["Payment: ",n.jsx("strong",{children:"Direct Hospital Integrated Billing"})]})]})]}),n.jsxs("div",{className:"closed-buttons-row",children:[n.jsxs("button",{onClick:r,className:"btn-dash-return",id:"backToDashboardBtn",children:[n.jsx(zh,{size:18}),n.jsx("span",{children:"Back to Dashboard"})]}),n.jsxs("button",{onClick:a,className:"btn-request-another",id:"requestAnotherAmbulanceBtn",children:[n.jsx(Ge,{size:18}),n.jsx("span",{children:"Request Another Ambulance"})]})]})]}),n.jsx("style",{children:`
        .closed-page-root {
          padding: 60px 20px 80px;
        }

        .closed-card {
          padding: 50px 36px;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 650px;
          margin: 0 auto;
        }

        .large-success-badge {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 2px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 0 35px rgba(16, 185, 129, 0.5);
          animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .closed-status-tag {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #34d399;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 4px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }

        .closed-headline {
          font-size: 2.3rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 10px;
        }

        .closed-message {
          font-size: 1.15rem;
          font-weight: 700;
          color: #34d399;
          margin-bottom: 8px;
        }

        .closed-subtext {
          font-size: 0.9rem;
          color: var(--text-muted);
          max-width: 480px;
          line-height: 1.55;
          margin-bottom: 28px;
        }

        .closed-voucher-box {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 18px 24px;
          margin-bottom: 32px;
          text-align: left;
        }

        .voucher-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .voucher-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
        }

        .voucher-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .voucher-details strong {
          color: #ffffff;
        }

        .closed-buttons-row {
          display: flex;
          gap: 16px;
          width: 100%;
          flex-wrap: wrap;
        }

        .btn-dash-return {
          flex: 1;
          min-width: 200px;
          padding: 14px 24px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-subtle);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.92rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-dash-return:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .btn-request-another {
          flex: 1;
          min-width: 200px;
          padding: 14px 24px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(239, 68, 68, 0.4);
          transition: var(--transition);
        }

        .btn-request-another:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(239, 68, 68, 0.65);
        }

        @media (max-width: 640px) {
          .closed-buttons-row {
            flex-direction: column;
          }
          .btn-dash-return, .btn-request-another {
            width: 100%;
          }
        }
      `})]})},cg=()=>{const e=Y(),{loginDriver:t,currentDriver:r}=Ir(),[a,i]=y.useState("driver.kumar@resqai.com"),[s,l]=y.useState("emergency2026"),[o,c]=y.useState(""),[d,m]=y.useState(!1),f=async x=>{if(x.preventDefault(),!a||!s){c("Please provide phone/email and password");return}try{m(!0),await t({email:a,password:s}),e("/driver/dashboard")}catch{c("Invalid driver credentials")}finally{m(!1)}},g=async()=>{m(!0),await t({email:"kumar.selvam@resqai.org",password:"demo"}),e("/driver/dashboard")};return n.jsxs("div",{className:"driver-login-root container-narrow",children:[n.jsxs("div",{className:"driver-login-card glass-panel glow-cyan",children:[n.jsxs("div",{className:"card-top-icon",children:[n.jsx("div",{className:"driver-icon-circle",children:n.jsx(ti,{size:36,color:"#06b6d4"})}),n.jsx("span",{className:"driver-portal-tag",children:"AUTHORIZED EMT DISPATCH ONLY"}),n.jsx("h1",{className:"login-heading",children:"Ambulance Driver Portal"}),n.jsx("p",{className:"login-desc",children:"Secure login for certified emergency responders and fleet ambulance operators."})]}),o&&n.jsxs("div",{className:"login-error-banner",children:[n.jsx(ri,{size:16,color:"#ef4444"}),n.jsx("span",{children:o})]}),n.jsxs("form",{onSubmit:f,className:"driver-login-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"driverIdentifier",children:[n.jsx("span",{children:"Driver Phone or EMT ID"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"input-wrap",children:[n.jsx(Mr,{size:18,className:"field-icon"}),n.jsx("input",{id:"driverIdentifier",type:"text",className:"form-input with-icon",placeholder:"+91 94441 23456 or EMT-201",value:a,onChange:x=>i(x.target.value),required:!0})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"driverPassword",children:[n.jsx("span",{children:"Dispatcher Security PIN / Password"}),n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"input-wrap",children:[n.jsx(Cu,{size:18,className:"field-icon"}),n.jsx("input",{id:"driverPassword",type:"password",className:"form-input with-icon",placeholder:"••••••••",value:s,onChange:x=>l(x.target.value),required:!0})]})]}),n.jsxs("button",{type:"submit",className:"btn-driver-submit",disabled:d,id:"driverLoginBtn",children:[n.jsx("span",{children:d?"AUTHENTICATING DISPATCH...":"SIGN IN TO DISPATCH CONSOLE"}),n.jsx(ve,{size:18})]}),n.jsx("div",{className:"demo-fill-box",children:n.jsxs("button",{type:"button",className:"btn-quick-demo",onClick:g,children:[n.jsx(ke,{size:16,color:"#10b981"}),n.jsx("span",{children:"Instant Demo Login (Driver Kumar • Unit Alpha)"})]})})]}),n.jsxs("div",{className:"login-footer-links",children:[n.jsx(X,{to:"/dashboard",className:"back-link",children:"← Switch to Patient Portal"}),n.jsx("span",{className:"divider",children:"•"}),n.jsx("a",{href:"#support",className:"support-link",children:"Fleet Dispatch Support (108-OPS)"})]})]}),n.jsx("style",{children:`
        .driver-login-root {
          padding: 60px 20px 80px;
        }

        .driver-login-card {
          padding: 44px 36px;
          border-radius: var(--radius-xl);
          max-width: 520px;
          margin: 0 auto;
        }

        .card-top-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 28px;
        }

        .driver-icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.15);
          border: 2px solid #06b6d4;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);
        }

        .driver-portal-tag {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
          padding: 3px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .login-heading {
          font-size: 1.9rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .login-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .login-error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          font-size: 0.82rem;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
        }

        .input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .field-icon {
          position: absolute;
          left: 14px;
          color: var(--text-dim);
          pointer-events: none;
        }

        .form-input.with-icon {
          padding-left: 42px;
        }

        .btn-driver-submit {
          width: 100%;
          padding: 15px 24px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 18px rgba(2, 132, 199, 0.45);
          transition: var(--transition);
          margin-top: 10px;
        }

        .btn-driver-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(2, 132, 199, 0.7);
        }

        .demo-fill-box {
          margin-top: 18px;
        }

        .btn-quick-demo {
          width: 100%;
          padding: 11px 16px;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.1);
          border: 1px dashed rgba(16, 185, 129, 0.35);
          color: #6ee7b7;
          font-size: 0.82rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-quick-demo:hover {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10b981;
        }

        .login-footer-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .back-link:hover, .support-link:hover {
          color: #ffffff;
        }
      `})]})},dg=()=>{var c;const e=Y(),{currentDriver:t,toggleDriverOnline:r}=Ir(),{activeRequest:a}=xe(),i=Ve.find(d=>d.id===(t==null?void 0:t.assignedAmbulanceId))||Ve[0],s=(t==null?void 0:t.isOnline)!==!1,l=()=>{e("/driver/request")},o=()=>{e("/driver/trip")};return n.jsxs("div",{className:"driver-dash-root container",children:[n.jsxs("div",{className:"driver-top-card glass-panel glow-cyan",children:[n.jsxs("div",{className:"driver-profile-row",children:[n.jsxs("div",{className:"driver-avatar-box",children:[n.jsx("img",{src:t==null?void 0:t.avatar,alt:t==null?void 0:t.name,className:"d-avatar-img"}),n.jsx("span",{className:`online-pip ${s?"green":"gray"}`})]}),n.jsxs("div",{className:"driver-meta",children:[n.jsxs("div",{className:"role-strip",children:[n.jsx("span",{className:"badge badge-ai",children:"ADVANCED EMT FIRST RESPONDER"}),n.jsxs("span",{className:"rating-pill",children:[n.jsx(Ln,{size:13,fill:"#f59e0b",color:"#f59e0b"}),n.jsx("span",{children:(t==null?void 0:t.rating)||4.9})]})]}),n.jsx("h1",{className:"driver-name-headline",children:(t==null?void 0:t.name)||"Kumar Selvam"}),n.jsxs("p",{className:"driver-assigned-vehicle",children:["Assigned Vehicle: ",n.jsx("strong",{children:i.vehicleNumber})," • ",i.unitName," (",i.type,")"]})]})]}),n.jsxs("div",{className:"online-toggle-box",children:[n.jsxs("span",{className:"status-label-text",children:["STATUS: ",n.jsx("strong",{children:s?"ONLINE & BROADCASTING":"OFFLINE (STANDBY)"})]}),n.jsxs("button",{onClick:r,className:`btn-online-toggle ${s?"active-online":"active-offline"}`,children:[n.jsx(Rh,{size:18}),n.jsx("span",{children:s?"Go Offline":"Go Online"})]})]})]}),a&&a.status==="REQUESTED"&&n.jsxs("div",{className:"incoming-alert-banner glass-panel glow-red",children:[n.jsxs("div",{className:"alert-left",children:[n.jsx("div",{className:"pulse-siren-box",children:n.jsx(Ge,{size:28,color:"#ef4444"})}),n.jsxs("div",{children:[n.jsx("div",{className:"alert-badge",children:"INCOMING EMERGENCY BROADCAST"}),n.jsxs("h3",{className:"alert-title",children:[a.emergencyType," • ",a.patientName]}),n.jsxs("p",{className:"alert-loc",children:[n.jsx(me,{size:14,color:"#ef4444"}),n.jsxs("span",{children:[a.pickupLocation.address," (",a.ambulance.distance,")"]})]})]})]}),n.jsxs("button",{onClick:l,className:"btn-respond-request",children:[n.jsx("span",{children:"VIEW & ACCEPT REQUEST"}),n.jsx(ve,{size:18})]})]}),a&&a.status!=="REQUESTED"&&a.status!=="COMPLETED"&&n.jsxs("div",{className:"active-trip-banner glass-panel glow-cyan",children:[n.jsxs("div",{className:"trip-banner-left",children:[n.jsx("span",{className:"active-pip-green"}),n.jsxs("div",{children:[n.jsxs("span",{className:"trip-status-pill",children:["ACTIVE EMERGENCY RUN #",a.id]}),n.jsxs("h3",{className:"trip-patient-title",children:["Patient: ",a.patientName," • Stage: ",a.status.replace(/_/g," ")]}),n.jsxs("span",{className:"trip-hospital-target",children:["Destination: ",a.destinationHospital.name]})]})]}),n.jsxs("button",{onClick:o,className:"btn-open-trip-console",children:[n.jsx(Ye,{size:18}),n.jsx("span",{children:"OPEN TRIP NAVIGATION CONSOLE"})]})]}),n.jsxs("div",{className:"driver-grid-cols",children:[n.jsxs("div",{className:"col-location glass-panel",children:[n.jsxs("div",{className:"panel-title-row",children:[n.jsx(me,{size:18,color:"#06b6d4"}),n.jsx("h3",{children:"Current Vehicle Location & Telemetry"})]}),n.jsxs("div",{className:"loc-telemetry-box",children:[n.jsxs("div",{className:"telem-row",children:[n.jsx("span",{className:"telem-lbl",children:"CURRENT PARKING / STANDBY BASE"}),n.jsx("h4",{className:"telem-val",children:((c=t==null?void 0:t.currentLocation)==null?void 0:c.address)||"Near Thirumangalam Flyover, Chennai"})]}),n.jsxs("div",{className:"telem-sub-grid",children:[n.jsxs("div",{className:"telem-mini-card",children:[n.jsx("span",{className:"mini-lbl",children:"VEHICLE FUEL"}),n.jsx("span",{className:"mini-val green",children:"88% (Full Tank)"})]}),n.jsxs("div",{className:"telem-mini-card",children:[n.jsx("span",{className:"mini-lbl",children:"OXYGEN CYLINDER"}),n.jsx("span",{className:"mini-val green",children:"3,800 PSI (Optimal)"})]}),n.jsxs("div",{className:"telem-mini-card",children:[n.jsx("span",{className:"mini-lbl",children:"VENTILATOR BATTERY"}),n.jsx("span",{className:"mini-val cyan",children:"100% Charge"})]}),n.jsxs("div",{className:"telem-mini-card",children:[n.jsx("span",{className:"mini-lbl",children:"RADIO GATEWAY"}),n.jsx("span",{className:"mini-val",children:"Ch-4 Trauma Ops"})]})]})]})]}),n.jsxs("div",{className:"col-trips glass-panel",children:[n.jsxs("div",{className:"panel-title-row",children:[n.jsx(Ot,{size:18,color:"#06b6d4"}),n.jsx("h3",{children:"Today's Emergency Trips Log"})]}),n.jsxs("div",{className:"trips-stats-grid",children:[n.jsxs("div",{className:"trip-stat-card",children:[n.jsx("span",{className:"ts-num",children:"4"}),n.jsx("span",{className:"ts-lbl",children:"Trips Today"})]}),n.jsxs("div",{className:"trip-stat-card",children:[n.jsx("span",{className:"ts-num green",children:"100%"}),n.jsx("span",{className:"ts-lbl",children:"Acceptance Rate"})]}),n.jsxs("div",{className:"trip-stat-card",children:[n.jsx("span",{className:"ts-num cyan",children:"5.2 min"}),n.jsx("span",{className:"ts-lbl",children:"Avg Response"})]})]}),n.jsxs("div",{className:"recent-driver-trips-list",children:[n.jsxs("div",{className:"driver-trip-item",children:[n.jsx("div",{className:"dt-time",children:"14:15"}),n.jsxs("div",{className:"dt-info",children:[n.jsx("h4",{className:"dt-title",children:"Cardiac Emergency • Handover Complete"}),n.jsx("p",{className:"dt-desc",children:"Anna Nagar 2nd Ave → Apollo Multi-Speciality"})]}),n.jsx("span",{className:"badge badge-success",children:"Done"})]}),n.jsxs("div",{className:"driver-trip-item",children:[n.jsx("div",{className:"dt-time",children:"11:05"}),n.jsxs("div",{className:"dt-info",children:[n.jsx("h4",{className:"dt-title",children:"Vehicular Trauma • BLS Transfer"}),n.jsx("p",{className:"dt-desc",children:"Koyambedu Flyover → MIOT Hospital"})]}),n.jsx("span",{className:"badge badge-success",children:"Done"})]})]})]})]}),n.jsx("style",{children:`
        .driver-dash-root {
          padding: 30px 20px 60px;
        }

        .driver-top-card {
          padding: 28px 32px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 24px;
        }

        .driver-profile-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .driver-avatar-box {
          position: relative;
          width: 72px;
          height: 72px;
          flex-shrink: 0;
        }

        .d-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .online-pip {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid #0f172a;
        }

        .online-pip.green {
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
        }

        .online-pip.gray {
          background: #64748b;
        }

        .role-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .driver-name-headline {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .driver-assigned-vehicle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .online-toggle-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .status-label-text {
          font-size: 0.72rem;
          color: var(--text-dim);
          letter-spacing: 0.05em;
        }

        .btn-online-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.88rem;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-online-toggle.active-online {
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid #10b981;
          color: #34d399;
        }

        .btn-online-toggle.active-offline {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid #ef4444;
          color: #f87171;
        }

        /* Incoming Alert Banner */
        .incoming-alert-banner {
          padding: 22px 28px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%);
          border-color: #ef4444;
          animation: beacon-pulse 1.8s infinite;
        }

        .alert-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pulse-siren-box {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .alert-badge {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #fca5a5;
          margin-bottom: 2px;
        }

        .alert-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
        }

        .alert-loc {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: #e2e8f0;
          margin-top: 2px;
        }

        .btn-respond-request {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(239, 68, 68, 0.5);
          transition: var(--transition);
        }

        .btn-respond-request:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(239, 68, 68, 0.75);
        }

        /* Active Trip Banner */
        .active-trip-banner {
          padding: 20px 28px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
          background: rgba(6, 182, 212, 0.08);
          border-color: #06b6d4;
        }

        .trip-banner-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .active-pip-green {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: beacon-pulse 1s infinite;
        }

        .trip-status-pill {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--accent-cyan);
          letter-spacing: 0.06em;
        }

        .trip-patient-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
        }

        .trip-hospital-target {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .btn-open-trip-console {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: var(--radius-full);
          background: #0284c7;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.88rem;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-open-trip-console:hover {
          background: #0369a1;
          transform: translateY(-2px);
        }

        /* 2-Column Core Grid */
        .driver-grid-cols {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
        }

        .col-location, .col-trips {
          padding: 24px;
          border-radius: var(--radius-xl);
        }

        .panel-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 12px;
        }

        .panel-title-row h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .telem-row {
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          margin-bottom: 16px;
        }

        .telem-lbl {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 4px;
        }

        .telem-val {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .telem-sub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .telem-mini-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
        }

        .mini-lbl {
          font-size: 0.65rem;
          color: var(--text-dim);
          font-weight: 700;
        }

        .mini-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .mini-val.green { color: #34d399; }
        .mini-val.cyan { color: #38bdf8; }

        .trips-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }

        .trip-stat-card {
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-md);
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .ts-num {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
        }

        .ts-num.green { color: #34d399; }
        .ts-num.cyan { color: #38bdf8; }

        .ts-lbl {
          font-size: 0.72rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        .recent-driver-trips-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .driver-trip-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          padding: 12px 14px;
        }

        .dt-time {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .dt-info {
          flex: 1;
        }

        .dt-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
        }

        .dt-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .driver-grid-cols {
            grid-template-columns: 1fr;
          }
          .online-toggle-box {
            align-items: flex-start;
          }
        }
      `})]})},ug=()=>{const e=Y(),{activeRequest:t,updateRequestStatus:r,submitEmergencyRequest:a}=xe(),[i,s]=y.useState(45),l=t||{patientName:"Kavitha Raman",patientAge:52,patientGender:"Female",emergencyType:"Heart Emergency",contactNumber:"+91 98400 99887",additionalNotes:"Severe crushing chest pain, conscious, ground floor entry.",pickupLocation:{address:"Plot 42, 2nd Avenue, Anna Nagar West, Chennai",landmark:"Near Roundtana Metro"},destinationHospital:Ce[0],ambulance:Ve[0],distanceKm:2.1,etaMinutes:6};y.useEffect(()=>{const d=setInterval(()=>{s(m=>m>1?m-1:0)},1e3);return()=>clearInterval(d)},[]);const o=()=>{t||a(),r("DRIVER_ACCEPTED",{note:"Driver Kumar Selvam accepted dispatch broadcast via mobile terminal."}),e("/driver/trip")},c=()=>{e("/driver/dashboard")};return n.jsxs("div",{className:"incoming-page-root container-narrow",children:[n.jsxs("div",{className:"incoming-card glass-panel glow-red",children:[n.jsxs("div",{className:"incoming-top-strip",children:[n.jsxs("div",{className:"siren-beacon-row",children:[n.jsx("span",{className:"beacon-flashing-ring"}),n.jsx("div",{className:"siren-circle",children:n.jsx(Cr,{size:32,color:"#ef4444",className:"siren-shake"})}),n.jsxs("div",{children:[n.jsx("span",{className:"incoming-badge",children:"EMERGENCY PRIORITY BROADCAST"}),n.jsx("h1",{className:"incoming-title",children:"Incoming Ambulance Request"})]})]}),n.jsxs("div",{className:"countdown-timer-box",children:[n.jsx("span",{className:"cd-label",children:"AUTO RE-ROUTE IN"}),n.jsxs("span",{className:"cd-seconds",children:[i,"s"]})]})]}),n.jsxs("div",{className:"dispatch-details-card",children:[n.jsxs("div",{className:"details-header-row",children:[n.jsx("div",{className:"patient-avatar-box",children:n.jsx(ai,{size:24,color:"#60a5fa"})}),n.jsxs("div",{children:[n.jsxs("h3",{className:"patient-name",children:[l.patientName," (",l.patientAge,"y, ",l.patientGender,")"]}),n.jsxs("span",{className:"patient-phone",children:["Ph: ",l.contactNumber]})]}),n.jsxs("div",{className:"emergency-type-pill",children:[n.jsx(ut,{size:16,color:"#ef4444"}),n.jsx("span",{children:l.emergencyType})]})]}),n.jsxs("div",{className:"location-distance-matrix",children:[n.jsxs("div",{className:"matrix-row",children:[n.jsx("div",{className:"pin-box red",children:n.jsx(me,{size:18})}),n.jsxs("div",{className:"matrix-text",children:[n.jsx("span",{className:"mat-lbl",children:"PATIENT LOCATION (PICKUP)"}),n.jsx("h4",{className:"mat-val",children:l.pickupLocation.address}),l.pickupLocation.landmark&&n.jsxs("span",{className:"mat-sub",children:["Landmark: ",l.pickupLocation.landmark]})]})]}),n.jsxs("div",{className:"matrix-row",children:[n.jsx("div",{className:"pin-box cyan",children:n.jsx(Qe,{size:18})}),n.jsxs("div",{className:"matrix-text",children:[n.jsx("span",{className:"mat-lbl",children:"DESTINATION HOSPITAL (RECEIVING BAY)"}),n.jsx("h4",{className:"mat-val",children:l.destinationHospital.name}),n.jsx("span",{className:"mat-sub",children:l.destinationHospital.emergencyDept})]})]})]}),n.jsxs("div",{className:"metrics-triplet",children:[n.jsxs("div",{className:"m-pill",children:[n.jsx(Ye,{size:16,color:"#06b6d4"}),n.jsxs("div",{children:[n.jsx("span",{className:"p-lbl",children:"ESTIMATED DISTANCE"}),n.jsx("span",{className:"p-val",children:l.ambulance.distance||`${l.distanceKm} km`})]})]}),n.jsxs("div",{className:"m-pill",children:[n.jsx(Ot,{size:16,color:"#f59e0b"}),n.jsxs("div",{children:[n.jsx("span",{className:"p-lbl",children:"ESTIMATED ETA"}),n.jsx("span",{className:"p-val",children:l.ambulance.eta||`${l.etaMinutes} min`})]})]}),n.jsxs("div",{className:"m-pill",children:[n.jsx(Cr,{size:16,color:"#ef4444"}),n.jsxs("div",{children:[n.jsx("span",{className:"p-lbl",children:"ROUTE TYPE"}),n.jsx("span",{className:"p-val",children:"Priority Green Lane"})]})]})]}),l.additionalNotes&&n.jsxs("div",{className:"symptoms-note-box",children:[n.jsx("span",{className:"sn-title",children:"Patient Clinical Triage Note:"}),n.jsx("p",{className:"sn-text",children:l.additionalNotes})]})]}),n.jsx("div",{className:"incoming-map-wrap",children:n.jsx(In,{status:"REQUESTED",pickup:l.pickupLocation,hospital:l.destinationHospital,height:"260px",showControls:!1})}),n.jsxs("div",{className:"dispatch-action-buttons",children:[n.jsxs("button",{onClick:c,className:"btn-reject-request",id:"rejectAmbulanceRequestBtn",children:[n.jsx(kh,{size:20}),n.jsx("span",{children:"Reject Request"})]}),n.jsxs("button",{onClick:o,className:"btn-accept-request",id:"acceptAmbulanceRequestBtn",children:[n.jsx(ke,{size:22}),n.jsx("span",{children:"ACCEPT & COMMENCE RUN"})]})]})]}),n.jsx("style",{children:`
        .incoming-page-root {
          padding: 30px 20px 60px;
        }

        .incoming-card {
          padding: 36px 32px;
          border-radius: var(--radius-xl);
        }

        .incoming-top-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 18px;
        }

        .siren-beacon-row {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .siren-circle {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.2);
          border: 2px solid #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.6);
        }

        .siren-shake {
          animation: siren-wiggle 1.5s infinite;
        }

        .incoming-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #fca5a5;
        }

        .incoming-title {
          font-size: 1.8rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
        }

        .countdown-timer-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: var(--radius-md);
          padding: 8px 16px;
        }

        .cd-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-dim);
        }

        .cd-seconds {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 900;
          color: #ef4444;
          line-height: 1;
        }

        /* Dispatch details card */
        .dispatch-details-card {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 22px;
          margin-bottom: 20px;
        }

        .details-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 14px;
        }

        .patient-avatar-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.15);
          border: 1.5px solid #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .patient-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
        }

        .patient-phone {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .emergency-type-pill {
          margin-left: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #f87171;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .location-distance-matrix {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
        }

        .matrix-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .pin-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pin-box.red { background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.35); }
        .pin-box.cyan { background: rgba(6, 182, 212, 0.15); color: #06b6d4; border: 1px solid rgba(6, 182, 212, 0.35); }

        .mat-lbl {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.06em;
          display: block;
        }

        .mat-val {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .mat-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .metrics-triplet {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .m-pill {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .p-lbl {
          font-size: 0.65rem;
          color: var(--text-dim);
          font-weight: 700;
          display: block;
        }

        .p-val {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
        }

        .symptoms-note-box {
          background: rgba(255, 255, 255, 0.04);
          border-radius: var(--radius-md);
          padding: 12px 14px;
        }

        .sn-title {
          font-size: 0.72rem;
          font-weight: 700;
          color: #fca5a5;
          display: block;
          margin-bottom: 2px;
        }

        .sn-text {
          font-size: 0.85rem;
          color: #e2e8f0;
        }

        .incoming-map-wrap {
          margin-bottom: 24px;
        }

        .dispatch-action-buttons {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 16px;
        }

        .btn-reject-request {
          padding: 16px 20px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-subtle);
          color: #cbd5e1;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition);
        }

        .btn-reject-request:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          color: #ef4444;
        }

        .btn-accept-request {
          padding: 16px 28px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.5);
          transition: var(--transition);
        }

        .btn-accept-request:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 28px rgba(16, 185, 129, 0.75);
          background: linear-gradient(135deg, #34d399 0%, #059669 100%);
        }

        @media (max-width: 640px) {
          .metrics-triplet {
            grid-template-columns: 1fr;
          }
          .dispatch-action-buttons {
            grid-template-columns: 1fr;
          }
        }
      `})]})},pg=()=>{var d;const e=Y(),{activeRequest:t,updateRequestStatus:r,completeTrip:a}=xe(),i=t||{patientName:"Kavitha Raman",patientAge:52,patientGender:"Female",emergencyType:"Heart Emergency",contactNumber:"+91 98400 99887",pickupLocation:{address:"Plot 42, 2nd Avenue, Anna Nagar West, Chennai",landmark:"Near Roundtana Metro"},destinationHospital:Ce[0],ambulance:Ve[0],status:"ON_THE_WAY"},s=i.status||"ON_THE_WAY",l=()=>{r("ARRIVED",{note:"Driver confirmed arrival at patient doorstep."})},o=()=>{r("PATIENT_PICKED_UP",{note:"Patient safely boarded into ambulance. Transiting to Hospital."})},c=()=>{a(5,"Safe and rapid transit with clean clinical handover."),e("/driver/dashboard")};return n.jsxs("div",{className:"active-trip-root container",children:[n.jsxs("div",{className:"driver-nav-hud glass-panel glow-red",children:[n.jsxs("div",{className:"hud-status-col",children:[n.jsxs("span",{className:"live-gps-pill",children:[n.jsx("span",{className:"live-gps-dot"}),n.jsxs("span",{children:["ACTIVE DISPATCH CONSOLE • VEHICLE ",((d=i.ambulance)==null?void 0:d.vehicleNumber)||"TN-01-AB-1234"]})]}),n.jsx("h1",{className:"hud-heading",children:s==="ON_THE_WAY"?"En Route to Patient Pickup":s==="ARRIVED"?"Arrived at Pickup Location":s==="PATIENT_PICKED_UP"||s==="AT_HOSPITAL"?"En Route to Emergency Hospital Bay":"Emergency Run Finished"}),n.jsxs("span",{className:"current-status-tag",children:["STATUS: ",n.jsx("strong",{children:s.replace(/_/g," ")})]})]}),n.jsxs("div",{className:"nav-turn-box",children:[n.jsx(Ye,{size:22,color:"#38bdf8"}),n.jsxs("div",{children:[n.jsx("span",{className:"turn-distance",children:"IN 200 METERS"}),n.jsx("h4",{className:"turn-instruction",children:s==="PATIENT_PICKED_UP"?"Turn Left onto Greams Road Trauma Bay":"Turn Right onto 2nd Avenue Anna Nagar"})]})]})]}),n.jsxs("div",{className:"driver-trip-grid",children:[n.jsxs("div",{className:"trip-map-col glass-panel",children:[n.jsxs("div",{className:"map-col-header",children:[n.jsx("span",{className:"map-label",children:"LIVE ROAD CORRIDOR & SATELLITE TELEMETRY"}),n.jsx("span",{className:"speed-label",children:"GPS: 54 km/h • SIRENS ACTIVE"})]}),n.jsx(In,{status:s,pickup:i.pickupLocation,hospital:i.destinationHospital,height:"460px",showControls:!0})]}),n.jsxs("div",{className:"trip-actions-col",children:[n.jsxs("div",{className:"patient-spec-card glass-panel",children:[n.jsxs("div",{className:"ps-header",children:[n.jsx("span",{className:"ps-tag",children:"INCIDENT PROFILE"}),n.jsx("span",{className:"ps-condition",children:i.emergencyType})]}),n.jsxs("div",{className:"ps-patient-row",children:[n.jsx("div",{className:"ps-avatar",children:n.jsx(ai,{size:22,color:"#60a5fa"})}),n.jsxs("div",{children:[n.jsx("h3",{className:"ps-name",children:i.patientName}),n.jsxs("span",{className:"ps-age-gender",children:[i.patientAge," Years • ",i.patientGender]})]})]}),n.jsxs("div",{className:"ps-location-group",children:[n.jsxs("div",{className:"ps-loc-item",children:[n.jsx(me,{size:16,color:"#ef4444",className:"loc-pin-icon"}),n.jsxs("div",{children:[n.jsx("span",{className:"loc-sub-label",children:"PICKUP POINT"}),n.jsx("p",{className:"loc-main-addr",children:i.pickupLocation.address}),i.pickupLocation.landmark&&n.jsxs("span",{className:"loc-landmark",children:["Landmark: ",i.pickupLocation.landmark]})]})]}),n.jsxs("div",{className:"ps-loc-item",style:{marginTop:"12px"},children:[n.jsx(Qe,{size:16,color:"#06b6d4",className:"loc-pin-icon"}),n.jsxs("div",{children:[n.jsx("span",{className:"loc-sub-label",children:"RECEIVING FACILITY"}),n.jsx("p",{className:"loc-main-addr",children:i.destinationHospital.name}),n.jsx("span",{className:"loc-landmark",children:i.destinationHospital.emergencyDept})]})]})]}),n.jsxs("a",{href:`tel:${i.contactNumber}`,className:"ps-call-btn",children:[n.jsx(Mr,{size:15}),n.jsxs("span",{children:["Call Patient / Caller (",i.contactNumber,")"]})]})]}),n.jsxs("div",{className:"driver-trip-controls glass-panel",children:[n.jsx("span",{className:"controls-label",children:"DRIVER STATUS ACTIONS"}),n.jsxs("button",{onClick:l,className:`btn-driver-step ${s==="ARRIVED"?"step-current":""}`,id:"driverStepArrivedBtn",children:[n.jsx(me,{size:18}),n.jsx("span",{children:"1. ARRIVED AT PICKUP POINT"}),s==="ARRIVED"&&n.jsx(ke,{size:18,color:"#10b981"})]}),n.jsxs("button",{onClick:o,className:`btn-driver-step ${s==="PATIENT_PICKED_UP"?"step-current":""}`,id:"driverStepPickedUpBtn",children:[n.jsx(ut,{size:18}),n.jsx("span",{children:"2. PATIENT PICKED UP & STABILIZED"}),s==="PATIENT_PICKED_UP"&&n.jsx(ke,{size:18,color:"#10b981"})]}),n.jsxs("button",{onClick:c,className:"btn-driver-step step-complete",id:"driverStepTripCompletedBtn",children:[n.jsx(ke,{size:20}),n.jsx("span",{children:"3. TRIP COMPLETED (HOSPITAL HANDOVER)"})]})]})]})]}),n.jsx("style",{children:`
        .active-trip-root {
          padding: 30px 20px 60px;
        }

        .driver-nav-hud {
          padding: 22px 28px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 24px;
        }

        .hud-status-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .live-gps-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #fca5a5;
        }

        .live-gps-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: beacon-pulse 1s infinite;
        }

        .hud-heading {
          font-size: 1.8rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.2;
        }

        .current-status-tag {
          font-size: 0.75rem;
          color: var(--text-dim);
          letter-spacing: 0.05em;
        }

        .current-status-tag strong {
          color: var(--accent-cyan);
        }

        .nav-turn-box {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          padding: 12px 20px;
        }

        .turn-distance {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.08em;
          display: block;
        }

        .turn-instruction {
          font-size: 0.95rem;
          font-weight: 800;
          color: #ffffff;
        }

        /* 2-Column Grid */
        .driver-trip-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.85fr;
          gap: 28px;
          align-items: start;
        }

        .trip-map-col {
          padding: 20px;
          border-radius: var(--radius-xl);
        }

        .map-col-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 0.75rem;
        }

        .map-label {
          font-weight: 700;
          color: var(--text-dim);
        }

        .speed-label {
          font-family: var(--font-mono);
          color: #34d399;
          font-weight: 700;
        }

        .trip-actions-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .patient-spec-card {
          padding: 22px;
          border-radius: var(--radius-lg);
        }

        .ps-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 10px;
        }

        .ps-tag {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-dim);
        }

        .ps-condition {
          font-size: 0.75rem;
          font-weight: 700;
          color: #f87171;
          background: rgba(239, 68, 68, 0.15);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .ps-patient-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .ps-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ps-name {
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
        }

        .ps-age-gender {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .ps-location-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-md);
          padding: 14px;
          margin-bottom: 16px;
        }

        .ps-loc-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .loc-pin-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .loc-sub-label {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.05em;
          display: block;
        }

        .loc-main-addr {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
        }

        .loc-landmark {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .ps-call-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px;
          border-radius: var(--radius-md);
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          color: #93c5fd;
          font-size: 0.82rem;
          font-weight: 700;
          transition: var(--transition);
        }

        .ps-call-btn:hover {
          background: rgba(59, 130, 246, 0.25);
          color: #fff;
        }

        /* Status Controls Box */
        .driver-trip-controls {
          padding: 22px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .controls-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }

        .btn-driver-step {
          width: 100%;
          padding: 15px 20px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 0.92rem;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: var(--transition);
        }

        .btn-driver-step:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .btn-driver-step.step-current {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10b981;
          color: #34d399;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
        }

        .btn-driver-step.step-complete {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border: none;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
        }

        .btn-driver-step.step-complete:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 22px rgba(16, 185, 129, 0.65);
        }

        @media (max-width: 992px) {
          .driver-trip-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},fg=()=>n.jsx(lh,{children:n.jsx(mh,{children:n.jsx(hh,{children:n.jsxs("div",{className:"resq-app-container",children:[n.jsx(Bh,{}),n.jsx("main",{className:"resq-main-content",children:n.jsxs(eh,{children:[n.jsx(K,{path:"/",element:n.jsx(Fh,{})}),n.jsx(K,{path:"/login",element:n.jsx($h,{})}),n.jsx(K,{path:"/register",element:n.jsx(Vh,{})}),n.jsx(K,{path:"/dashboard",element:n.jsx(Gh,{})}),n.jsx(K,{path:"/request/location",element:n.jsx(Qh,{})}),n.jsx(K,{path:"/request/patient",element:n.jsx(Zh,{})}),n.jsx(K,{path:"/request/matching",element:n.jsx(Jh,{})}),n.jsx(K,{path:"/request/sent",element:n.jsx(eg,{})}),n.jsx(K,{path:"/request/accepted",element:n.jsx(rg,{})}),n.jsx(K,{path:"/request/tracking",element:n.jsx(ag,{})}),n.jsx(K,{path:"/request/arrived",element:n.jsx(ig,{})}),n.jsx(K,{path:"/request/hospital",element:n.jsx(sg,{})}),n.jsx(K,{path:"/request/completed",element:n.jsx(lg,{})}),n.jsx(K,{path:"/request/closed",element:n.jsx(og,{})}),n.jsx(K,{path:"/driver/login",element:n.jsx(cg,{})}),n.jsx(K,{path:"/driver/dashboard",element:n.jsx(dg,{})}),n.jsx(K,{path:"/driver/request",element:n.jsx(ug,{})}),n.jsx(K,{path:"/driver/trip",element:n.jsx(pg,{})}),n.jsx(K,{path:"*",element:n.jsx(Xm,{to:"/",replace:!0})})]})}),n.jsx(Hh,{})]})})})});Mi.createRoot(document.getElementById("root")).render(n.jsx(uc.StrictMode,{children:n.jsx(fg,{})}));
