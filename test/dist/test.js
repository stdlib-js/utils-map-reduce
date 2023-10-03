/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/math-base-ops-add' );
var cadd = require( '@stdlib/math-base-ops-cadd' );
var abs = require( '@stdlib/math-base-special-abs' );
var cceil = require( '@stdlib/math-base-special-cceil' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex64Array = require( '@stdlib/array-complex64' );
var array = require( '@stdlib/ndarray-array' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var Complex64 = require( '@stdlib/complex-float32' );
var realf = require( '@stdlib/complex-realf' );
var imagf = require( '@stdlib/complex-imagf' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var mapReduce = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mapReduce, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a first argument which is either an array-like object or an ndarray', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapReduce( value, 0, noop, noop );
		};
	}
});

tape( 'the function throws an error if not provided a third argument which is a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapReduce( [ 1, 2, 3 ], 0, value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a third argument which is a function (context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapReduce( [ 1, 2, 3 ], 0, value, noop, {} );
		};
	}
});

tape( 'the function throws an error if not provided a fourth argument which is a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapReduce( [ 1, 2, 3 ], 0, noop, value );
		};
	}
});

tape( 'the function throws an error if not provided a fourth argument which is a function (context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapReduce( [ 1, 2, 3 ], 0, noop, value, {} );
		};
	}
});

tape( 'the function performs a map-reduce operation for each element in an array (array-like object)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f1;
	var f2;

	f1 = naryFunction( abs, 1 );
	f2 = naryFunction( add, 2 );

	arr = [ -1, -2, -3 ];
	expected = 7;
	actual = mapReduce( arr, 1, f1, f2 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs a map-reduce operation for each element in an array (typed array)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f1;
	var f2;

	f1 = naryFunction( abs, 1 );
	f2 = naryFunction( add, 2 );

	arr = new Float64Array( [ -1.0, -2.0, -3.0 ] );
	expected = 7.0;
	actual = mapReduce( arr, 1.0, f1, f2 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs a map-reduce operation for each element in an array (complex number array)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f1;
	var f2;

	f1 = naryFunction( cceil, 1 );
	f2 = naryFunction( cadd, 2 );

	arr = new Complex64Array( [ 1.5, 2.5, 3.5, 4.5, 5.5, 6.5 ] );
	expected = new Complex64( 12.0, 15.0 );
	actual = mapReduce( arr, new Complex64( 0.0, 0.0 ), f1, f2 );

	t.strictEqual( realf( actual ), realf( expected ), 'returns expected value' );
	t.strictEqual( imagf( actual ), imagf( expected ), 'returns expected value' );
	t.end();
});

tape( 'the function performs a map-reduce operation for each element in an array (ndarray)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f1;
	var f2;

	f1 = naryFunction( abs, 1 );
	f2 = naryFunction( add, 2 );

	arr = array( [ -1.0, -2.0, -3.0, -4.0 ], {
		'dtype': 'generic'
	});
	expected = 11.0;
	actual = mapReduce( arr, 1.0, f1, f2 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs a map-reduce operation for each element in an array (ndarray; 0-dimensional)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f1;
	var f2;

	f1 = naryFunction( abs, 1 );
	f2 = naryFunction( add, 2 );

	arr = ndarray( 'generic', [ -10.0 ], [], [ 0 ], 0, 'row-major' );
	expected = 11.0;
	actual = mapReduce( arr, 1.0, f1, f2 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'if provided an empty array, the function returns the initial value and never performs a map-reduce operation (array-like object)', function test( t ) {
	var out = mapReduce( [], 0, foo, foo );
	t.strictEqual( out, 0, 'expected result' );
	t.end();

	function foo() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'if provided an empty array, the function returns the initial value and never performs a map-reduce operation (ndarray)', function test( t ) {
	var arr;
	var out;

	arr = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 0, 2 ], [ 0, 2, 1 ], 0, 'row-major' );
	out = mapReduce( arr, 0, foo, foo );
	t.strictEqual( out, 0, 'expected result' );

	t.end();

	function foo() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the function invokes a mapping function with three arguments (array-like object)', function test( t ) {
	var expected;
	var actual;
	var values;
	var arrays;
	var nargs;
	var idx;
	var arr;

	arr = [ -1, -2, -3, -4, -5, -6 ];

	nargs = [];
	values = [];
	idx = [];
	arrays = [];

	actual = mapReduce( arr, 0, fcn, add );

	expected = 21;
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = [ -1, -2, -3, -4, -5, -6 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [ 0, 1, 2, 3, 4, 5 ];
	t.deepEqual( idx, expected, 'returns expected value' );

	expected = [ arr, arr, arr, arr, arr, arr ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	expected = [ 3, 3, 3, 3, 3, 3 ];
	t.deepEqual( nargs, expected, 'returns expected value' );

	t.end();

	function fcn( v, i, arr ) {
		nargs.push( arguments.length );
		values.push( v );
		idx.push( i );
		arrays.push( arr );
		return abs( v );
	}
});

tape( 'the function invokes a mapping function with three arguments (ndarray)', function test( t ) {
	var expected;
	var actual;
	var values;
	var arrays;
	var nargs;
	var idx;
	var arr;

	arr = array( [ -1, -2, -3, -4, -5, -6 ], {
		'dtype': 'generic',
		'shape': [ 2, 3 ]
	});

	nargs = [];
	values = [];
	idx = [];
	arrays = [];

	actual = mapReduce( arr, 0, fcn, add );

	expected = 21;
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = [ -1, -2, -3, -4, -5, -6 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [ 0, 1, 2, 3, 4, 5 ];
	t.deepEqual( idx, expected, 'returns expected value' );

	expected = [ arr, arr, arr, arr, arr, arr ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	expected = [ 3, 3, 3, 3, 3, 3 ];
	t.deepEqual( nargs, expected, 'returns expected value' );

	t.end();

	function fcn( v, i, arr ) {
		nargs.push( arguments.length );
		values.push( v );
		idx.push( i );
		arrays.push( arr );
		return abs( v );
	}
});

tape( 'the function invokes a reducing function with four arguments (array-like object)', function test( t ) {
	var expected;
	var actual;
	var values;
	var arrays;
	var nargs;
	var idx;
	var arr;
	var acc;
	var f;

	arr = [ -1, -2, -3, -4, -5, -6 ];

	nargs = [];
	acc = [];
	values = [];
	idx = [];
	arrays = [];

	f = naryFunction( abs, 1 );
	actual = mapReduce( arr, 0, f, fcn );

	expected = 21;
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = [ 0, 1, 3, 6, 10, 15 ];
	t.deepEqual( acc, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [ 0, 1, 2, 3, 4, 5 ];
	t.deepEqual( idx, expected, 'returns expected value' );

	expected = [ arr, arr, arr, arr, arr, arr ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	expected = [ 4, 4, 4, 4, 4, 4 ];
	t.deepEqual( nargs, expected, 'returns expected value' );

	t.end();

	function fcn( accumulator, v, i, arr ) {
		nargs.push( arguments.length );
		acc.push( accumulator );
		values.push( v );
		idx.push( i );
		arrays.push( arr );
		return add( accumulator, v );
	}
});

tape( 'the function invokes a reducing function with four arguments (ndarray)', function test( t ) {
	var expected;
	var actual;
	var values;
	var arrays;
	var nargs;
	var idx;
	var arr;
	var acc;
	var f;

	arr = array( [ -1, -2, -3, -4, -5, -6 ], {
		'dtype': 'generic',
		'shape': [ 2, 3 ]
	});

	nargs = [];
	acc = [];
	values = [];
	idx = [];
	arrays = [];

	f = naryFunction( abs, 1 );
	actual = mapReduce( arr, 0, f, fcn );

	expected = 21;
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = [ 0, 1, 3, 6, 10, 15 ];
	t.deepEqual( acc, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [ 0, 1, 2, 3, 4, 5 ];
	t.deepEqual( idx, expected, 'returns expected value' );

	expected = [ arr, arr, arr, arr, arr, arr ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	expected = [ 4, 4, 4, 4, 4, 4 ];
	t.deepEqual( nargs, expected, 'returns expected value' );

	t.end();

	function fcn( accumulator, v, i, arr ) {
		nargs.push( arguments.length );
		acc.push( accumulator );
		values.push( v );
		idx.push( i );
		arrays.push( arr );
		return add( accumulator, v );
	}
});

tape( 'the function supports providing a `this` context (array-like object)', function test( t ) {
	var expected;
	var actual;
	var ctx;
	var arr;
	var f;

	arr = [ -1.0, -2.0, -3.0 ];

	ctx = {
		'count': 0
	};

	expected = 6.0;

	f = naryFunction( abs, 1 );
	actual = mapReduce( arr, 0.0, f, sum, ctx );

	t.strictEqual( actual, expected, 'expected value' );
	t.strictEqual( ctx.count, 3, 'returns expected value' );

	t.end();

	function sum( acc, value ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return acc + value;
	}
});

tape( 'the function supports providing a `this` context (ndarray)', function test( t ) {
	var expected;
	var actual;
	var ctx;
	var arr;
	var f;

	arr = array( [ -1.0, -2.0, -3.0 ], {
		'dtype': 'generic'
	});

	ctx = {
		'count': 0
	};

	expected = 6.0;

	f = naryFunction( abs, 1 );
	actual = mapReduce( arr, 0.0, f, sum, ctx );

	t.strictEqual( actual, expected, 'expected value' );
	t.strictEqual( ctx.count, 3, 'returns expected value' );

	t.end();

	function sum( acc, value ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return acc + value;
	}
});

tape( 'the function does not skip empty elements (array-like object)', function test( t ) {
	var expected;
	var actual;
	var values;
	var arr;
	var f;

	arr = [ 1, , , 4 ]; // eslint-disable-line no-sparse-arrays

	values = [];

	f = naryFunction( identity, 1 );
	actual = mapReduce( arr, 0, f, sum );

	t.strictEqual( isnan( actual ), true, 'returns expected value' );

	expected = [ 1, void 0, void 0, 4 ];
	t.deepEqual( values, expected, 'returns expected value' );

	t.end();

	function identity( value ) {
		return value;
	}

	function sum( acc, value ) {
		values.push( value );
		return acc + value;
	}
});

tape( 'the function does not skip empty elements (ndarray)', function test( t ) {
	var expected;
	var actual;
	var values;
	var arr;
	var f;

	arr = array( [ 1, , , 4 ], { // eslint-disable-line no-sparse-arrays
		'dtype': 'generic'
	});

	values = [];

	f = naryFunction( identity, 1 );
	actual = mapReduce( arr, 0, f, sum );

	t.strictEqual( isnan( actual ), true, 'returns expected value' );

	expected = [ 1, void 0, void 0, 4 ];
	t.deepEqual( values, expected, 'returns expected value' );

	t.end();

	function identity( value ) {
		return value;
	}

	function sum( acc, value ) {
		values.push( value );
		return acc + value;
	}
});
