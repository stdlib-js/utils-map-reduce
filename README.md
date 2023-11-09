<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# mapReduce

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Perform a single-pass map-reduce operation against each element in an array and return the accumulated result.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import mapReduce from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-reduce@deno/mod.js';
```

#### mapReduce( arr, initial, mapper, reducer\[, thisArg ] )

Performs a map-reduce operation against each element in an array and returns the accumulated result.

```javascript
function square( value ) {
    return value * value;
}

function sum( accumulator, value ) {
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var out = mapReduce( arr, 0, square, sum );
// returns 30
```

The function accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

function square( value ) {
    return value * value;
}

function sum( accumulator, value ) {
    return accumulator + value;
}

var opts = {
    'dtype': 'generic'
};
var arr = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );

var out = mapReduce( arr, 0, square, sum );
// returns 91
```

The mapping function is provided the following arguments:

-   **value**: array element.
-   **index**: element index.
-   **arr**: input array.

The reducing function is provided the following arguments:

-   **accumulator**: accumulated value.
-   **value**: result of applying the mapping function to the current array element.
-   **index**: element index.
-   **arr**: input array.

To set the `this` context when invoking the reducing function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function square( value ) {
    return value * value;
}

function sum( accumulator, value ) {
    this.count += 1;
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var ctx = {
    'count': 0
};

var out = mapReduce( arr, 0, square, sum, ctx );
// returns 30

var mean = out / ctx.count;
// returns 7.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function supports array-like objects exposing getters and setters for array element access (e.g., [`Complex64Array`][@stdlib/array/complex64], [`Complex128Array`][@stdlib/array/complex128], etc).

    ```javascript
    import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
    import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@deno/mod.js';
    import cceil from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cceil@deno/mod.js';
    import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@deno/mod.js';
    import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@deno/mod.js';

    function sum( acc, z ) {
        var re1 = realf( acc );
        var im1 = imagf( acc );
        var re2 = realf( z );
        var im2 = imagf( z );
        return new Complex64( re1+re2, im1+im2 );
    }

    var x = new Complex64Array( [ 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5 ] );

    var v = mapReduce( x, new Complex64( 0.0, 0.0 ), cceil, sum );
    // returns <Complex64>

    var re = realf( v );
    // returns 20.0

    var im = imagf( v );
    // returns 24.0
    ```

-   For [`ndarray`][@stdlib/ndarray/ctor]-like objects, the function performs a single-pass map-reduce operation over the entire input [`ndarray`][@stdlib/ndarray/ctor] (i.e., higher-order [`ndarray`][@stdlib/ndarray/ctor] dimensions are flattened to a single-dimension).

-   When applying a function to [`ndarray`][@stdlib/ndarray/ctor]-like objects, performance will be best for [`ndarray`][@stdlib/ndarray/ctor]-like objects which are single-segment contiguous.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@deno/mod.js';
import abs from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';
import mapReduce from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-reduce@deno/mod.js';

function fill( i ) {
    var rand = discreteUniform( -10*(i+1), 10*(i+1) );
    return filledarrayBy( 10, 'generic', rand );
}

// Create a two-dimensional ndarray (i.e., a matrix):
var x = array( filledarrayBy( 10, 'generic', fill ), {
    'dtype': 'generic',
    'flatten': true
});

// Create an explicit unary function:
var f1 = naryFunction( abs, 1 );

// Create an explicit binary function:
var f2 = naryFunction( add, 2 );

// Compute the sum of absolute values:
var out = mapReduce( x, 0, f1, f2 );

console.log( 'x:' );
console.log( x.data );

console.log( 'sum: %d', out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-map`][@stdlib/utils/map]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array.</span>
-   <span class="package-name">[`@stdlib/utils-map-reduce-right`][@stdlib/utils/map-reduce-right]</span><span class="delimiter">: </span><span class="description">perform a single-pass map-reduce operation against each element in an array while iterating from right to left and return the accumulated result.</span>
-   <span class="package-name">[`@stdlib/utils-reduce`][@stdlib/utils/reduce]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in an array and return the accumulated result.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-map-reduce.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-map-reduce

[test-image]: https://github.com/stdlib-js/utils-map-reduce/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-map-reduce/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-map-reduce/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-map-reduce?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-map-reduce.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-map-reduce/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-map-reduce/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-map-reduce/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-map-reduce/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-map-reduce/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-map-reduce/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/deno

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/deno

<!-- <related-links> -->

[@stdlib/utils/map]: https://github.com/stdlib-js/utils-map/tree/deno

[@stdlib/utils/map-reduce-right]: https://github.com/stdlib-js/utils-map-reduce-right/tree/deno

[@stdlib/utils/reduce]: https://github.com/stdlib-js/utils-reduce/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
