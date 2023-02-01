// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).mapReduce=e()}(this,(function(){"use strict";var t=Math.floor;function e(e){return t(e)===e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,i=Object.defineProperty,o=Object.prototype,a=o.toString,f=o.__defineGetter__,s=o.__defineSetter__,u=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?i:function(t,e,r){var n,i,l,p;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((i="value"in r)&&(u.call(t,e)||c.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),l="get"in r,p="set"in r,i&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&f&&f.call(t,e,r.get),p&&s&&s.call(t,e,r.set),t};var l=n;function p(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function h(t){return"boolean"==typeof t}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return g&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;function b(t,e){return null!=t&&_.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var v=y()?function(t){var e,r,n;if(null==t)return d.call(t);r=t[m],e=b(t,m);try{t[m]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[m]=r:delete t[m],n}:function(t){return d.call(t)},w=Boolean.prototype.toString;var O=y();function E(t){return"object"==typeof t&&(t instanceof Boolean||(O?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===v(t)))}function A(t){return h(t)||E(t)}function j(){return new Function("return this;")()}p(A,"isPrimitive",h),p(A,"isObject",E);var I="object"==typeof self?self:null,x="object"==typeof window?window:null,U="object"==typeof global?global:null;function S(t){if(arguments.length){if(!h(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return j()}if(I)return I;if(x)return x;if(U)return U;throw new Error("unexpected error. Unable to resolve global object.")}var T=S();function N(t,e,r){l(t,e,{configurable:!1,enumerable:!1,get:r})}var R={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function B(t){return Math.abs(t)}function L(t,e){return e&&(2===t||3===t)}function V(t,e){return e&&(1===t||3===t)}function F(t,e,r){var n,i,o,a,f;for(n=t.length,i=r,o=r,f=0;f<n;f++){if(0===t[f])return[r,r];(a=e[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function C(t){return t.re}function k(t){return t.im}function M(t){return"string"==typeof t}p(F,"assign",(function(t,e,r,n){var i,o,a,f,s;for(i=t.length,o=r,a=r,s=0;s<i;s++){if(0===t[s])return n[0]=r,n[1]=r,n;(f=e[s])>0?a+=f*(t[s]-1):f<0&&(o+=f*(t[s]-1))}return n[0]=o,n[1]=a,n}));var P=String.prototype.valueOf;var G=y();function D(t){return"object"==typeof t&&(t instanceof String||(G?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object String]"===v(t)))}function Y(t){return M(t)||D(t)}function $(t){return"number"==typeof t}function J(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function W(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+J(i):J(i)+t,n&&(t="-"+t)),t}p(Y,"isPrimitive",M),p(Y,"isObject",D);var X=String.prototype.toLowerCase,Z=String.prototype.toUpperCase;function H(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!$(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=W(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=W(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===Z.call(t.specifier)?Z.call(r):X.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function z(t){return"string"==typeof t}var q=Math.abs,K=String.prototype.toLowerCase,Q=String.prototype.toUpperCase,tt=String.prototype.replace,et=/e\+(\d)$/,rt=/e-(\d)$/,nt=/^(\d+)$/,it=/^(\d+)e/,ot=/\.0$/,at=/\.0*e/,ft=/(\..*[^0])0*e/;function st(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!$(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":q(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=tt.call(r,ft,"$1e"),r=tt.call(r,at,"e"),r=tt.call(r,ot,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=tt.call(r,et,"e+0$1"),r=tt.call(r,rt,"e-0$1"),t.alternate&&(r=tt.call(r,nt,"$1."),r=tt.call(r,it,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===Q.call(t.specifier)?Q.call(r):K.call(r)}function ut(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function ct(t,e,r){var n=e-t.length;return n<0?t:t=r?t+ut(n):ut(n)+t}var lt=String.fromCharCode,pt=isNaN,ht=Array.isArray;function gt(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function yt(t){var e,r,n,i,o,a,f,s,u;if(!ht(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",f=1,s=0;s<t.length;s++)if(z(n=t[s]))a+=n;else{if(e=void 0!==n.precision,!(n=gt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,u=0;u<r.length;u++)switch(i=r.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,pt(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,pt(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=H(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!pt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=pt(o)?String(n.arg):lt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=st(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=W(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ct(n.arg,n.width,n.padRight)),a+=n.arg||"",f+=1}return a}var dt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _t(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function bt(t){var e,r,n,i;for(r=[],i=0,n=dt.exec(t);n;)(e=t.slice(i,dt.lastIndex-n[0].length)).length&&r.push(e),r.push(_t(n)),i=dt.lastIndex,n=dt.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function mt(t){return"string"==typeof t}function vt(t){var e,r,n;if(!mt(t))throw new TypeError(vt("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=bt(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return yt.apply(null,r)}var wt=/[-\/\\^$*+?.()|[\]{}]/g;var Ot=/./,Et=S(),At=Et.document&&Et.document.childNodes,jt=Int8Array;function It(){return/^\s*function\s*([^(]*)/i}var xt=/^\s*function\s*([^(]*)/i;p(It,"REGEXP",xt);var Ut=Array.isArray?Array.isArray:function(t){return"[object Array]"===v(t)};function St(t){return null!==t&&"object"==typeof t}function Tt(t){var e,r,n,i;if(("Object"===(r=v(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=xt.exec(n.toString()))return e[1]}return St(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}p(St,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!Ut(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(St));var Nt="function"==typeof Ot||"object"==typeof jt||"function"==typeof At?function(t){return Tt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Tt(t).toLowerCase():e};function Rt(t){return"function"===Nt(t)}var Bt=RegExp.prototype.exec;var Lt=y();function Vt(t){return"object"==typeof t&&(t instanceof RegExp||(Lt?function(t){try{return Bt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===v(t)))}function Ft(t,e,r){if(!M(t))throw new TypeError(vt("invalid argument. First argument must be a string. Value: `%s`.",t));if(M(e))e=function(t){var e,r;if(!M(t))throw new TypeError(vt("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(wt,"\\$&"):(e=(e=t.substring(1,r)).replace(wt,"\\$&"),t=t[0]+e+t.substring(r))}(e),e=new RegExp(e,"g");else if(!Vt(e))throw new TypeError(vt("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!M(r)&&!Rt(r))throw new TypeError(vt("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return t.replace(e,r)}var Ct={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var kt="function"==typeof Uint8Array;var Mt="function"==typeof Uint8Array?Uint8Array:null;var Pt,Gt="function"==typeof Uint8Array?Uint8Array:void 0;Pt=function(){var t,e,r;if("function"!=typeof Mt)return!1;try{e=new Mt(e=[1,3.14,-3.14,256,257]),r=e,t=(kt&&r instanceof Uint8Array||"[object Uint8Array]"===v(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Gt:function(){throw new Error("not implemented")};var Dt=Pt,Yt="function"==typeof Uint16Array;var $t="function"==typeof Uint16Array?Uint16Array:null;var Jt,Wt="function"==typeof Uint16Array?Uint16Array:void 0;Jt=function(){var t,e,r;if("function"!=typeof $t)return!1;try{e=new $t(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Yt&&r instanceof Uint16Array||"[object Uint16Array]"===v(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Wt:function(){throw new Error("not implemented")};var Xt,Zt={uint16:Jt,uint8:Dt};(Xt=new Zt.uint16(1))[0]=4660;var Ht=52===new Zt.uint8(Xt.buffer)[0],zt="function"==typeof ArrayBuffer;var qt="function"==typeof Float64Array;var Kt="function"==typeof Float64Array?Float64Array:null;var Qt,te="function"==typeof Float64Array?Float64Array:void 0;Qt=function(){var t,e,r;if("function"!=typeof Kt)return!1;try{e=new Kt([1,3.14,-3.14,NaN]),r=e,t=(qt&&r instanceof Float64Array||"[object Float64Array]"===v(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?te:function(){throw new Error("not implemented")};var ee=Qt,re="function"==typeof ArrayBuffer?ArrayBuffer:null;var ne,ie="function"==typeof ArrayBuffer?ArrayBuffer:void 0;ne=function(){var t,e,r,n;if("function"!=typeof re)return!1;try{r=new re(16),n=r,(t=(zt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===v(n))&&"function"==typeof re.isView)&&((e=new ee(r))[0]=-3.14,e[1]=NaN,t=t&&re.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?ie:function(){throw new Error("not implemented")};var oe=ne,ae="function"==typeof DataView;var fe="function"==typeof DataView?DataView:null;var se,ue="function"==typeof DataView?DataView:void 0;se=function(){var t,e,r,n;if("function"!=typeof fe)return!1;try{r=new oe(24),e=new fe(r,8),n=e,(t=(ae&&n instanceof DataView||"[object DataView]"===v(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?ue:function(){throw new Error("not implemented")};var ce=se,le="function"==typeof BigInt?BigInt:void 0,pe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function he(){return pe.slice()}function ge(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ye(t,e,r){l(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function de(t){return Object.keys(Object(t))}var _e,be=void 0!==Object.keys;function me(t){return"[object Arguments]"===v(t)}_e=function(){return me(arguments)}();var ve=_e;function we(t){return"number"==typeof t}var Oe=Number,Ee=Oe.prototype.toString;var Ae=y();function je(t){return"object"==typeof t&&(t instanceof Oe||(Ae?function(t){try{return Ee.call(t),!0}catch(t){return!1}}(t):"[object Number]"===v(t)))}function Ie(t){return we(t)||je(t)}function xe(t){return t!=t}function Ue(t){return we(t)&&xe(t)}function Se(t){return je(t)&&xe(t.valueOf())}function Te(t){return Ue(t)||Se(t)}p(Ie,"isPrimitive",we),p(Ie,"isObject",je),p(Te,"isPrimitive",Ue),p(Te,"isObject",Se);var Ne=Number.POSITIVE_INFINITY,Re=Oe.NEGATIVE_INFINITY;function Be(t){return t<Ne&&t>Re&&e(t)}function Le(t){return we(t)&&Be(t)}function Ve(t){return je(t)&&Be(t.valueOf())}function Fe(t){return Le(t)||Ve(t)}p(Fe,"isPrimitive",Le),p(Fe,"isObject",Ve);var Ce=Object.prototype.propertyIsEnumerable;var ke=!Ce.call("beep","0");function Me(t,e){var r;return null!=t&&(!(r=Ce.call(t,e))&&ke&&Y(t)?!Ue(e=+e)&&Le(e)&&e>=0&&e<t.length:r)}var Pe=ve?me:function(t){return null!==t&&"object"==typeof t&&!Ut(t)&&"number"==typeof t.length&&e(t.length)&&t.length>=0&&t.length<=4294967295&&b(t,"callee")&&!Me(t,"callee")},Ge=Array.prototype.slice;var De=Me((function(){}),"prototype"),Ye=!Me({toString:null},"toString");function $e(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&e(t.length)&&t.length>=0&&t.length<=9007199254740991}function Je(t,e,r){var n,i;if(!$e(t)&&!M(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Le(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Te(e)){for(;i<n;i++)if(Te(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function We(t){return t.constructor&&t.constructor.prototype===t}var Xe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ze="undefined"==typeof window?void 0:window;var He=function(){var t;if("undefined"===Nt(Ze))return!1;for(t in Ze)try{-1===Je(Xe,t)&&b(Ze,t)&&null!==Ze[t]&&"object"===Nt(Ze[t])&&We(Ze[t])}catch(t){return!0}return!1}(),ze="undefined"!=typeof window;var qe,Ke=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];qe=be?function(){return 2!==(de(arguments)||"").length}(1,2)?function(t){return Pe(t)?de(Ge.call(t)):de(t)}:de:function(t){var e,r,n,i,o,a,f;if(i=[],Pe(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!b(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!St(t))return i;r=De&&n}for(o in t)r&&"prototype"===o||!b(t,o)||i.push(String(o));if(Ye)for(e=function(t){if(!1===ze&&!He)return We(t);try{return We(t)}catch(t){return!1}}(t),f=0;f<Ke.length;f++)a=Ke[f],e&&"constructor"===a||!b(t,a)||i.push(String(a));return i};var Qe=qe;p(he,"enum",ge),function(t,e){var r,n,i;for(r=Qe(e),i=0;i<r.length;i++)ye(t,n=r[i],e[n])}(he,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var tr=["row-major","column-major"];function er(){return{"row-major":1,"column-major":2}}p((function(){return tr.slice()}),"enum",er);var rr=["throw","clamp","wrap"];function nr(){return{throw:1,clamp:2,wrap:3}}p((function(){return rr.slice()}),"enum",nr);var ir={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},or={"row-major":1,"column-major":2},ar={throw:1,clamp:2,wrap:3};var fr=new Dt(8),sr=new ce(fr.buffer);function ur(e,r,n,i){var o,a,f;if(0===e){for(f=0;f<fr.length;f++)r[i]=0,i+=n;return r}for(a=(4294967295&e)>>>0,o=t(e/4294967296),Ht?(sr.setUint32(0,a,Ht),sr.setUint32(4,o,Ht)):(sr.setUint32(0,o,Ht),sr.setUint32(4,a,Ht)),f=0;f<fr.length;f++)r[i]=fr[f],i+=n;return r}p((function(e){var r,n,i,o;return r=new Dt(8),0===e||(o=(4294967295&e)>>>0,i=t(e/4294967296),n=new ce(r.buffer),Ht?(n.setUint32(0,o,Ht),n.setUint32(4,i,Ht)):(n.setUint32(0,i,Ht),n.setUint32(4,o,Ht))),r}),"assign",ur);var cr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},lr={"row-major":1,"column-major":2},pr={throw:1,clamp:2,wrap:3};function hr(t,e,r,n,i,o){var a,f,s,u,c;if(!(this instanceof hr))return new hr(t,e,r,n,i,o);for(u=1,c=0;c<r.length;c++)u*=r[c];return f=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*u:null,this._byteLength=f,this._bytesPerElement=function(t){return R[t]||null}(t),this._buffer=e,this._dtype=t,this._length=u,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=F(e,r,n))[1]-o[0]+1}(u,r,n,i,this._iterationOrder),s=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=B(t[0]),a=1;a<r;a++){if(o=B(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:V(s,a),COLUMN_MAJOR_CONTIGUOUS:L(s,a),READONLY:!1},this.__meta_dataview__=null,this}function gr(t){var e,r,n;if(0===(e=t.length))return 0;for(r=1,n=0;n<e;n++)r*=t[n];return r}function yr(t,e){return t[e]}function dr(t,e){return t.get(e)}function _r(t,e,r){t[e]=r}function br(t,e,r){t.set(r,e)}function mr(t,e){return t[e]}function vr(t,e){return t.get(e)}function wr(t,e,r){t[e]=r}function Or(t,e,r){t.set(r,e)}function Er(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function Ar(t,e,r,n,i,o){var a,f,s,u,c;for(a=t.length,f=1,c=0;c<a;c++)f*=t[c];if("clamp"===o)i<0?i=0:i>=f&&(i=f-1);else if("wrap"===o)i<0?(i+=f)<0&&0!==(i%=f)&&(i+=f):i>=f&&(i-=f)>=f&&(i%=f);else if(i<0||i>=f)throw new RangeError("invalid argument. Linear index must not exceed array dimensions. Number of array elements: "+f+". Value: `"+i+"`.");if(s=r,"column-major"===n){for(c=0;c<a;c++)i-=u=i%t[c],i/=t[c],s+=u*e[c];return s}for(c=a-1;c>=0;c--)i-=u=i%t[c],i/=t[c],s+=u*e[c];return s}p(hr,"name","ndarray"),N(hr.prototype,"byteLength",(function(){return this._byteLength})),N(hr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),N(hr.prototype,"data",(function(){return this._buffer})),N(hr.prototype,"dtype",(function(){return this._dtype})),N(hr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),N(hr.prototype,"length",(function(){return this._length})),N(hr.prototype,"ndims",(function(){return this._ndims})),N(hr.prototype,"offset",(function(){return this._offset})),N(hr.prototype,"order",(function(){return this._order})),N(hr.prototype,"shape",(function(){return this._shape.slice()})),N(hr.prototype,"strides",(function(){return this._strides.slice()})),p(hr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),p(hr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),p(hr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),p(hr.prototype,"iset",(function(t,e){var r,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),p(hr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=C(i=this.iget(o))+", "+k(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=C(i=this.iget(o))+", "+k(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=C(i=this.iget(this._length-1-o))+", "+k(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Ft(Ct[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),p(hr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(C(r),k(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),p(hr.prototype,"__array_meta_dataview__","function"==typeof T.BigInt&&"function"==typeof BigInt&&"bigint"==typeof T.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,f,s,u,c,l,p,h;if(s=this._mode||"throw",a=this._submode||[s],r=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===r)return f;for(f=new ce(new oe(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,u=0,f.setInt8(u,Ht?1:0),u+=1,f.setInt16(u,ir[n],Ht),u+=2,f.setBigInt64(u,le(l),Ht),c=8*l,u+=8,h=0;h<l;h++)f.setBigInt64(u,le(i[h]),Ht),f.setBigInt64(u+c,le(o[h]*t),Ht),u+=8;for(u+=c,f.setBigInt64(u,le(this._offset*t),Ht),u+=8,f.setInt8(u,or[this._order]),u+=1,f.setInt8(u,ar[s]),u+=1,f.setBigInt64(u,le(p),Ht),u+=8,h=0;h<p;h++)f.setInt8(u,ar[a[h]]),u+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(u,e,Ht),this.__meta_dataview__=f,f}:function(){var t,e,r,n,i,o,a,f,s,u,c,l,p,h,g;if(u=this._mode||"throw",f=this._submode||[u],n=33+16*(p=this._ndims)+(h=f.length),(s=this.__meta_dataview__)&&s.byteLength===n)return s;for(s=new ce(new oe(n)),e=new Dt(s.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,s.setInt8(c,Ht?1:0),c+=1,s.setInt16(c,cr[i],Ht),ur(p,e,1,c+=2),l=8*p,c+=8,g=0;g<p;g++)ur(o[g],e,1,c),ur(a[g]*t,e,1,c+l),c+=8;for(c+=l,ur(this._offset*t,e,1,c),c+=8,s.setInt8(c,lr[this._order]),c+=1,s.setInt8(c,pr[u]),ur(h,e,1,c+=1),c+=8,g=0;g<h;g++)s.setInt8(c,pr[f[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,s.setInt32(c,r,Ht),this.__meta_dataview__=s,s});return function(t,r,n,i,o){if(!Rt(n))throw new TypeError(Er("0kX3Z",n));if(!Rt(i))throw new TypeError(Er("0kX3E",i));if((a=t)instanceof hr||null!==a&&"object"==typeof a&&"object"==typeof a.data&&"object"==typeof a.shape&&"object"==typeof a.strides&&"number"==typeof a.offset&&"string"==typeof a.order&&"number"==typeof a.ndims&&"string"==typeof a.dtype&&"number"==typeof a.length&&"object"==typeof a.flags&&"function"==typeof a.get&&"function"==typeof a.set)return function(t,e,r,n,i){var o,a,f,s,u,c,l,p,h,g,y;if(s=t.length,l=t.shape,o=t.data,p=t.strides,h=t.offset,a=t.order,u=t.accessors[0],c=t.ref,0===l.length)return n.call(i,e,r(u(o,h),0,c),0,c);for(f=e,y=0;y<s;y++)g=Ar(l,p,h,a,y,"throw"),f=n.call(i,f,r(u(o,g),y,c),y,c);return f}(function(t){var e,r,n;return e=t.data,n=t.shape,r=Boolean(e.get&&e.set),{ref:t,dtype:t.dtype,data:e,length:gr(n),shape:n,strides:t.strides,offset:t.offset,order:t.order,accessors:r,getter:r?dr:yr,setter:r?br:_r}}(t),r,n,i,o);var a,f;if("object"==typeof(f=t)&&null!==f&&"number"==typeof f.length&&e(f.length)&&f.length>=0&&f.length<=4294967295)return function(t,e,r,n,i){var o,a,f,s;for(o=t.data,a=t.accessors[0],f=e,s=0;s<o.length;s++)f=n.call(i,f,r(a(o,s),s,o),s,o);return f}(function(t){var e=Boolean(t.get&&t.set);return{data:t,accessors:e,getter:e?vr:mr,setter:e?Or:wr}}(t),r,n,i,o);throw new TypeError(Er("0kXC4",t))}}));
//# sourceMappingURL=index.js.map
