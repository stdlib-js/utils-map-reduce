// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).mapReduce=e()}(this,(function(){"use strict";var t=Math.floor;function e(e){return t(e)===e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,i=Object.defineProperty,o=Object.prototype,a=o.toString,f=o.__defineGetter__,s=o.__defineSetter__,u=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?i:function(t,e,r){var n,i,l,p;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((i="value"in r)&&(u.call(t,e)||c.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),l="get"in r,p="set"in r,i&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&f&&f.call(t,e,r.get),p&&s&&s.call(t,e,r.set),t};var l=n;function p(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function h(t){return"boolean"==typeof t}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return g&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;function b(t,e){return null!=t&&_.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var v=y()?function(t){var e,r,n;if(null==t)return d.call(t);r=t[m],e=b(t,m);try{t[m]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[m]=r:delete t[m],n}:function(t){return d.call(t)},w=Boolean.prototype.toString;var O=y();function E(t){return"object"==typeof t&&(t instanceof Boolean||(O?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===v(t)))}function A(t){return h(t)||E(t)}function j(){return new Function("return this;")()}p(A,"isPrimitive",h),p(A,"isObject",E);var I="object"==typeof self?self:null,x="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},S="object"==typeof U?U:null;function N(t){if(arguments.length){if(!h(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return j()}if(I)return I;if(x)return x;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}var T=N();function R(t,e,r){l(t,e,{configurable:!1,enumerable:!1,get:r})}var B={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function V(t){return Math.abs(t)}function L(t,e){return e&&(2===t||3===t)}function F(t,e){return e&&(1===t||3===t)}function C(t,e,r){var n,i,o,a,f;for(n=t.length,i=r,o=r,f=0;f<n;f++){if(0===t[f])return[r,r];(a=e[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function M(t){return t.re}function k(t){return t.im}function P(t){return"string"==typeof t}p(C,"assign",(function(t,e,r,n){var i,o,a,f,s;for(i=t.length,o=r,a=r,s=0;s<i;s++){if(0===t[s])return n[0]=r,n[1]=r,n;(f=e[s])>0?a+=f*(t[s]-1):f<0&&(o+=f*(t[s]-1))}return n[0]=o,n[1]=a,n}));var G=String.prototype.valueOf;var D=y();function Y(t){return"object"==typeof t&&(t instanceof String||(D?function(t){try{return G.call(t),!0}catch(t){return!1}}(t):"[object String]"===v(t)))}function $(t){return P(t)||Y(t)}function J(t){return"number"==typeof t}function W(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function X(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+W(i):W(i)+t,n&&(t="-"+t)),t}p($,"isPrimitive",P),p($,"isObject",Y);var Z=String.prototype.toLowerCase,H=String.prototype.toUpperCase;function z(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!J(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=X(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=X(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===H.call(t.specifier)?H.call(r):Z.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function q(t){return"string"==typeof t}var K=Math.abs,Q=String.prototype.toLowerCase,tt=String.prototype.toUpperCase,et=String.prototype.replace,rt=/e\+(\d)$/,nt=/e-(\d)$/,it=/^(\d+)$/,ot=/^(\d+)e/,at=/\.0$/,ft=/\.0*e/,st=/(\..*[^0])0*e/;function ut(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!J(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":K(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=et.call(r,st,"$1e"),r=et.call(r,ft,"e"),r=et.call(r,at,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=et.call(r,rt,"e+0$1"),r=et.call(r,nt,"e-0$1"),t.alternate&&(r=et.call(r,it,"$1."),r=et.call(r,ot,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===tt.call(t.specifier)?tt.call(r):Q.call(r)}function ct(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function lt(t,e,r){var n=e-t.length;return n<0?t:t=r?t+ct(n):ct(n)+t}var pt=String.fromCharCode,ht=isNaN,gt=Array.isArray;function yt(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function dt(t){var e,r,n,i,o,a,f,s,u;if(!gt(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",f=1,s=0;s<t.length;s++)if(q(n=t[s]))a+=n;else{if(e=void 0!==n.precision,!(n=yt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,u=0;u<r.length;u++)switch(i=r.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,ht(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,ht(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=z(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!ht(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ht(o)?String(n.arg):pt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=ut(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=X(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=lt(n.arg,n.width,n.padRight)),a+=n.arg||"",f+=1}return a}var _t=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function bt(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function mt(t){var e,r,n,i;for(r=[],i=0,n=_t.exec(t);n;)(e=t.slice(i,_t.lastIndex-n[0].length)).length&&r.push(e),r.push(bt(n)),i=_t.lastIndex,n=_t.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function vt(t){return"string"==typeof t}function wt(t){var e,r,n;if(!vt(t))throw new TypeError(wt("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=mt(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return dt.apply(null,r)}var Ot=/[-\/\\^$*+?.()|[\]{}]/g;var Et=/./,At=N(),jt=At.document&&At.document.childNodes,It=Int8Array;function xt(){return/^\s*function\s*([^(]*)/i}var Ut=/^\s*function\s*([^(]*)/i;p(xt,"REGEXP",Ut);var St=Array.isArray?Array.isArray:function(t){return"[object Array]"===v(t)};function Nt(t){return null!==t&&"object"==typeof t}function Tt(t){var e,r,n,i;if(("Object"===(r=v(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Ut.exec(n.toString()))return e[1]}return Nt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}p(Nt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!St(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Nt));var Rt="function"==typeof Et||"object"==typeof It||"function"==typeof jt?function(t){return Tt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Tt(t).toLowerCase():e};function Bt(t){return"function"===Rt(t)}var Vt=RegExp.prototype.exec;var Lt=y();function Ft(t){return"object"==typeof t&&(t instanceof RegExp||(Lt?function(t){try{return Vt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===v(t)))}function Ct(t,e,r){if(!P(t))throw new TypeError(wt("invalid argument. First argument must be a string. Value: `%s`.",t));if(P(e))e=function(t){var e,r;if(!P(t))throw new TypeError(wt("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(Ot,"\\$&"):(e=(e=t.substring(1,r)).replace(Ot,"\\$&"),t=t[0]+e+t.substring(r))}(e),e=new RegExp(e,"g");else if(!Ft(e))throw new TypeError(wt("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!P(r)&&!Bt(r))throw new TypeError(wt("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return t.replace(e,r)}var Mt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var kt="function"==typeof Uint8Array;var Pt="function"==typeof Uint8Array?Uint8Array:null;var Gt,Dt="function"==typeof Uint8Array?Uint8Array:void 0;Gt=function(){var t,e,r;if("function"!=typeof Pt)return!1;try{e=new Pt(e=[1,3.14,-3.14,256,257]),r=e,t=(kt&&r instanceof Uint8Array||"[object Uint8Array]"===v(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Dt:function(){throw new Error("not implemented")};var Yt=Gt,$t="function"==typeof Uint16Array;var Jt="function"==typeof Uint16Array?Uint16Array:null;var Wt,Xt="function"==typeof Uint16Array?Uint16Array:void 0;Wt=function(){var t,e,r;if("function"!=typeof Jt)return!1;try{e=new Jt(e=[1,3.14,-3.14,65536,65537]),r=e,t=($t&&r instanceof Uint16Array||"[object Uint16Array]"===v(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Xt:function(){throw new Error("not implemented")};var Zt,Ht={uint16:Wt,uint8:Yt};(Zt=new Ht.uint16(1))[0]=4660;var zt=52===new Ht.uint8(Zt.buffer)[0],qt="function"==typeof ArrayBuffer;var Kt="function"==typeof Float64Array;var Qt="function"==typeof Float64Array?Float64Array:null;var te,ee="function"==typeof Float64Array?Float64Array:void 0;te=function(){var t,e,r;if("function"!=typeof Qt)return!1;try{e=new Qt([1,3.14,-3.14,NaN]),r=e,t=(Kt&&r instanceof Float64Array||"[object Float64Array]"===v(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?ee:function(){throw new Error("not implemented")};var re=te,ne="function"==typeof ArrayBuffer?ArrayBuffer:null;var ie,oe="function"==typeof ArrayBuffer?ArrayBuffer:void 0;ie=function(){var t,e,r,n;if("function"!=typeof ne)return!1;try{r=new ne(16),n=r,(t=(qt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===v(n))&&"function"==typeof ne.isView)&&((e=new re(r))[0]=-3.14,e[1]=NaN,t=t&&ne.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?oe:function(){throw new Error("not implemented")};var ae=ie,fe="function"==typeof DataView;var se="function"==typeof DataView?DataView:null;var ue,ce="function"==typeof DataView?DataView:void 0;ue=function(){var t,e,r,n;if("function"!=typeof se)return!1;try{r=new ae(24),e=new se(r,8),n=e,(t=(fe&&n instanceof DataView||"[object DataView]"===v(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?ce:function(){throw new Error("not implemented")};var le=ue,pe="function"==typeof BigInt?BigInt:void 0,he=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function ge(){return he.slice()}function ye(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function de(t,e,r){l(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function _e(t){return Object.keys(Object(t))}var be,me=void 0!==Object.keys;function ve(t){return"[object Arguments]"===v(t)}be=function(){return ve(arguments)}();var we=be;function Oe(t){return"number"==typeof t}var Ee=Number,Ae=Ee.prototype.toString;var je=y();function Ie(t){return"object"==typeof t&&(t instanceof Ee||(je?function(t){try{return Ae.call(t),!0}catch(t){return!1}}(t):"[object Number]"===v(t)))}function xe(t){return Oe(t)||Ie(t)}function Ue(t){return t!=t}function Se(t){return Oe(t)&&Ue(t)}function Ne(t){return Ie(t)&&Ue(t.valueOf())}function Te(t){return Se(t)||Ne(t)}p(xe,"isPrimitive",Oe),p(xe,"isObject",Ie),p(Te,"isPrimitive",Se),p(Te,"isObject",Ne);var Re=Number.POSITIVE_INFINITY,Be=Ee.NEGATIVE_INFINITY;function Ve(t){return t<Re&&t>Be&&e(t)}function Le(t){return Oe(t)&&Ve(t)}function Fe(t){return Ie(t)&&Ve(t.valueOf())}function Ce(t){return Le(t)||Fe(t)}p(Ce,"isPrimitive",Le),p(Ce,"isObject",Fe);var Me=Object.prototype.propertyIsEnumerable;var ke=!Me.call("beep","0");function Pe(t,e){var r;return null!=t&&(!(r=Me.call(t,e))&&ke&&$(t)?!Se(e=+e)&&Le(e)&&e>=0&&e<t.length:r)}var Ge=we?ve:function(t){return null!==t&&"object"==typeof t&&!St(t)&&"number"==typeof t.length&&e(t.length)&&t.length>=0&&t.length<=4294967295&&b(t,"callee")&&!Pe(t,"callee")},De=Array.prototype.slice;var Ye=Pe((function(){}),"prototype"),$e=!Pe({toString:null},"toString");function Je(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&e(t.length)&&t.length>=0&&t.length<=9007199254740991}function We(t,e,r){var n,i;if(!Je(t)&&!P(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Le(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Te(e)){for(;i<n;i++)if(Te(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function Xe(t){return t.constructor&&t.constructor.prototype===t}var Ze=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],He="undefined"==typeof window?void 0:window;var ze=function(){var t;if("undefined"===Rt(He))return!1;for(t in He)try{-1===We(Ze,t)&&b(He,t)&&null!==He[t]&&"object"===Rt(He[t])&&Xe(He[t])}catch(t){return!0}return!1}(),qe="undefined"!=typeof window;var Ke,Qe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ke=me?function(){return 2!==(_e(arguments)||"").length}(1,2)?function(t){return Ge(t)?_e(De.call(t)):_e(t)}:_e:function(t){var e,r,n,i,o,a,f;if(i=[],Ge(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!b(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!Nt(t))return i;r=Ye&&n}for(o in t)r&&"prototype"===o||!b(t,o)||i.push(String(o));if($e)for(e=function(t){if(!1===qe&&!ze)return Xe(t);try{return Xe(t)}catch(t){return!1}}(t),f=0;f<Qe.length;f++)a=Qe[f],e&&"constructor"===a||!b(t,a)||i.push(String(a));return i};var tr=Ke;p(ge,"enum",ye),function(t,e){var r,n,i;for(r=tr(e),i=0;i<r.length;i++)de(t,n=r[i],e[n])}(ge,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var er=["row-major","column-major"];function rr(){return{"row-major":1,"column-major":2}}p((function(){return er.slice()}),"enum",rr);var nr=["throw","clamp","wrap"];function ir(){return{throw:1,clamp:2,wrap:3}}p((function(){return nr.slice()}),"enum",ir);var or={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},ar={"row-major":1,"column-major":2},fr={throw:1,clamp:2,wrap:3};var sr=new Yt(8),ur=new le(sr.buffer);function cr(e,r,n,i){var o,a,f;if(0===e){for(f=0;f<sr.length;f++)r[i]=0,i+=n;return r}for(a=(4294967295&e)>>>0,o=t(e/4294967296),zt?(ur.setUint32(0,a,zt),ur.setUint32(4,o,zt)):(ur.setUint32(0,o,zt),ur.setUint32(4,a,zt)),f=0;f<sr.length;f++)r[i]=sr[f],i+=n;return r}p((function(e){var r,n,i,o;return r=new Yt(8),0===e||(o=(4294967295&e)>>>0,i=t(e/4294967296),n=new le(r.buffer),zt?(n.setUint32(0,o,zt),n.setUint32(4,i,zt)):(n.setUint32(0,i,zt),n.setUint32(4,o,zt))),r}),"assign",cr);var lr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},pr={"row-major":1,"column-major":2},hr={throw:1,clamp:2,wrap:3};function gr(t,e,r,n,i,o){var a,f,s,u,c;if(!(this instanceof gr))return new gr(t,e,r,n,i,o);for(u=1,c=0;c<r.length;c++)u*=r[c];return f=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*u:null,this._byteLength=f,this._bytesPerElement=function(t){return B[t]||null}(t),this._buffer=e,this._dtype=t,this._length=u,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=C(e,r,n))[1]-o[0]+1}(u,r,n,i,this._iterationOrder),s=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=V(t[0]),a=1;a<r;a++){if(o=V(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:F(s,a),COLUMN_MAJOR_CONTIGUOUS:L(s,a),READONLY:!1},this.__meta_dataview__=null,this}function yr(t){var e,r,n;if(0===(e=t.length))return 0;for(r=1,n=0;n<e;n++)r*=t[n];return r}function dr(t,e){return t[e]}function _r(t,e){return t.get(e)}function br(t,e,r){t[e]=r}function mr(t,e,r){t.set(r,e)}function vr(t,e){return t[e]}function wr(t,e){return t.get(e)}function Or(t,e,r){t[e]=r}function Er(t,e,r){t.set(r,e)}function Ar(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function jr(t,e,r,n,i,o){var a,f,s,u,c;for(a=t.length,f=1,c=0;c<a;c++)f*=t[c];if("clamp"===o)i<0?i=0:i>=f&&(i=f-1);else if("wrap"===o)i<0?(i+=f)<0&&0!==(i%=f)&&(i+=f):i>=f&&(i-=f)>=f&&(i%=f);else if(i<0||i>=f)throw new RangeError("invalid argument. Linear index must not exceed array dimensions. Number of array elements: "+f+". Value: `"+i+"`.");if(s=r,"column-major"===n){for(c=0;c<a;c++)i-=u=i%t[c],i/=t[c],s+=u*e[c];return s}for(c=a-1;c>=0;c--)i-=u=i%t[c],i/=t[c],s+=u*e[c];return s}p(gr,"name","ndarray"),R(gr.prototype,"byteLength",(function(){return this._byteLength})),R(gr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),R(gr.prototype,"data",(function(){return this._buffer})),R(gr.prototype,"dtype",(function(){return this._dtype})),R(gr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),R(gr.prototype,"length",(function(){return this._length})),R(gr.prototype,"ndims",(function(){return this._ndims})),R(gr.prototype,"offset",(function(){return this._offset})),R(gr.prototype,"order",(function(){return this._order})),R(gr.prototype,"shape",(function(){return this._shape.slice()})),R(gr.prototype,"strides",(function(){return this._strides.slice()})),p(gr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),p(gr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),p(gr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),p(gr.prototype,"iset",(function(t,e){var r,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),p(gr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=M(i=this.iget(o))+", "+k(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=M(i=this.iget(o))+", "+k(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=M(i=this.iget(this._length-1-o))+", "+k(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Ct(Mt[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),p(gr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(M(r),k(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),p(gr.prototype,"__array_meta_dataview__","function"==typeof T.BigInt&&"function"==typeof BigInt&&"bigint"==typeof T.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,f,s,u,c,l,p,h;if(s=this._mode||"throw",a=this._submode||[s],r=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===r)return f;for(f=new le(new ae(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,u=0,f.setInt8(u,zt?1:0),u+=1,f.setInt16(u,or[n],zt),u+=2,f.setBigInt64(u,pe(l),zt),c=8*l,u+=8,h=0;h<l;h++)f.setBigInt64(u,pe(i[h]),zt),f.setBigInt64(u+c,pe(o[h]*t),zt),u+=8;for(u+=c,f.setBigInt64(u,pe(this._offset*t),zt),u+=8,f.setInt8(u,ar[this._order]),u+=1,f.setInt8(u,fr[s]),u+=1,f.setBigInt64(u,pe(p),zt),u+=8,h=0;h<p;h++)f.setInt8(u,fr[a[h]]),u+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(u,e,zt),this.__meta_dataview__=f,f}:function(){var t,e,r,n,i,o,a,f,s,u,c,l,p,h,g;if(u=this._mode||"throw",f=this._submode||[u],n=33+16*(p=this._ndims)+(h=f.length),(s=this.__meta_dataview__)&&s.byteLength===n)return s;for(s=new le(new ae(n)),e=new Yt(s.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,s.setInt8(c,zt?1:0),c+=1,s.setInt16(c,lr[i],zt),cr(p,e,1,c+=2),l=8*p,c+=8,g=0;g<p;g++)cr(o[g],e,1,c),cr(a[g]*t,e,1,c+l),c+=8;for(c+=l,cr(this._offset*t,e,1,c),c+=8,s.setInt8(c,pr[this._order]),c+=1,s.setInt8(c,hr[u]),cr(h,e,1,c+=1),c+=8,g=0;g<h;g++)s.setInt8(c,hr[f[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,s.setInt32(c,r,zt),this.__meta_dataview__=s,s});return function(t,r,n,i,o){if(!Bt(n))throw new TypeError(Ar("1VN3N,G4",n));if(!Bt(i))throw new TypeError(Ar("1VN32,MM",i));if((a=t)instanceof gr||null!==a&&"object"==typeof a&&"object"==typeof a.data&&"object"==typeof a.shape&&"object"==typeof a.strides&&"number"==typeof a.offset&&"string"==typeof a.order&&"number"==typeof a.ndims&&"string"==typeof a.dtype&&"number"==typeof a.length&&"object"==typeof a.flags&&"function"==typeof a.get&&"function"==typeof a.set)return function(t,e,r,n,i){var o,a,f,s,u,c,l,p,h,g,y;if(s=t.length,l=t.shape,o=t.data,p=t.strides,h=t.offset,a=t.order,u=t.accessors[0],c=t.ref,0===l.length)return n.call(i,e,r(u(o,h),0,c),0,c);for(f=e,y=0;y<s;y++)g=jr(l,p,h,a,y,"throw"),f=n.call(i,f,r(u(o,g),y,c),y,c);return f}(function(t){var e,r,n;return e=t.data,n=t.shape,r=Boolean(e.get&&e.set),{ref:t,dtype:t.dtype,data:e,length:yr(n),shape:n,strides:t.strides,offset:t.offset,order:t.order,accessors:r,getter:r?_r:dr,setter:r?mr:br}}(t),r,n,i,o);var a,f;if("object"==typeof(f=t)&&null!==f&&"number"==typeof f.length&&e(f.length)&&f.length>=0&&f.length<=4294967295)return function(t,e,r,n,i){var o,a,f,s;for(o=t.data,a=t.accessors[0],f=e,s=0;s<o.length;s++)f=n.call(i,f,r(a(o,s),s,o),s,o);return f}(function(t){var e=Boolean(t.get&&t.set);return{data:t,accessors:e,getter:e?wr:vr,setter:e?Er:Or}}(t),r,n,i,o);throw new TypeError(Ar("1VNBH,O9",t))}}));
//# sourceMappingURL=browser.js.map
