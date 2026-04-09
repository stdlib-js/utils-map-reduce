"use strict";var y=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var h=y(function(H,g){
var T=require('@stdlib/ndarray-base-vind2bind/dist'),p="throw";function x(r,e,a,t,s){var n,v,i,u,f,c,l,m,d,q,o;if(u=r.length,l=r.shape,n=r.data,m=r.strides,d=r.offset,v=r.order,f=r.accessors[0],c=r.ref,l.length===0)return t.call(s,e,a(f(n,d),0,c),0,c);for(i=e,o=0;o<u;o++)q=T(l,m,d,v,o,p),i=t.call(s,i,a(f(n,q),o,c),o,c);return i}g.exports=x
});var k=y(function(I,w){
function R(r,e,a,t,s){var n,v,i,u;for(n=r.data,v=r.accessors[0],i=e,u=0;u<n.length;u++)i=t.call(s,i,a(v(n,u),u,n),u,n);return i}w.exports=R
});var E=y(function(J,j){
var V=require('@stdlib/assert-is-array-like-object/dist'),L=require('@stdlib/assert-is-ndarray-like/dist'),F=require('@stdlib/assert-is-function/dist'),O=require('@stdlib/ndarray-base-ndarraylike2object/dist'),D=require('@stdlib/array-base-arraylike2object/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist'),M=h(),z=k();function B(r,e,a,t,s){if(!F(a))throw new TypeError(b('1VN3N',a));if(!F(t))throw new TypeError(b('1VN32',t));if(L(r))return M(O(r),e,a,t,s);if(V(r))return z(D(r),e,a,t,s);throw new TypeError(b('1VNBH',r))}j.exports=B
});var C=E();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
