// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@esm/index.mjs";function o(o,a,m,l,j){if(!e(m))throw new TypeError(n("1VN3N,G4",m));if(!e(l))throw new TypeError(n("1VN32,MM",l));if(s(o))return function(r,s,e,t,i){var n,o,a,m,l,j,f,h,c,p,b;if(m=r.length,f=r.shape,n=r.data,h=r.strides,c=r.offset,o=r.order,l=r.accessors[0],j=r.ref,0===f.length)return t.call(i,s,e(l(n,c),0,j),0,j);for(a=s,b=0;b<m;b++)p=d(f,h,c,o,b,"throw"),a=t.call(i,a,e(l(n,p),b,j),b,j);return a}(t(o),a,m,l,j);if(r(o))return function(r,s,e,t,i){var n,d,o,a;for(n=r.data,d=r.accessors[0],o=s,a=0;a<n.length;a++)o=t.call(i,o,e(d(n,a),a,n),a,n);return o}(i(o),a,m,l,j);throw new TypeError(n("1VNBH,O9",o))}export{o as default};
//# sourceMappingURL=index.mjs.map
