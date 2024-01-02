// config/terser.config.ts

// Copyright 2023 Scape Agency BV

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

// http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// ============================================================================
// Import
// ============================================================================


// ============================================================================
// Constants
// ============================================================================

// https://terser.org/docs/api-reference/

const terserConfig = {


    parse: {
        // parse options
    },
    compress: {
        // compress options
        drop_console: true, // Remove console.log statements
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.info', 'console.debug', 'console.warn'], // Remove specific console functions

        // defaults (default: true) -- Pass false to disable most default enabled compress transforms. Useful when you only want to enable a few compress options while disabling the rest.

        // Class and object literal methods are converted will also be
        // converted to arrow expressions if the resultant code is shorter:
        // m(){return x} becomes m:()=>x. To do this to regular ES5 functions
        // which don't use this or arguments, see unsafe_arrows.
        arrows: true, // (default: true)

        // arguments (default: false) -- replace arguments[index] with function parameter name whenever possible.

        // booleans (default: true) -- various optimizations for boolean context, for example !!a ? b : c → a ? b : c

        // booleans_as_integers (default: false) -- Turn booleans into 0 and 1, also makes comparisons with booleans use == and != instead of === and !==.

        // collapse_vars (default: true) -- Collapse single-use non-constant variables, side effects permitting.

        // comparisons (default: true) -- apply certain optimizations to binary nodes, e.g. !(a <= b) → a > b (only when unsafe_comps), attempts to negate binary nodes, e.g. a = !b && !c && !d && !e → a=!(b||c||d||e) etc. Note: comparisons works best with lhs_constants enabled.

        // computed_props (default: true) -- Transforms constant computed properties into regular ones: {["computed"]: 1} is converted to {computed: 1}.

        // conditionals (default: true) -- apply optimizations for if-s and conditional expressions

        // dead_code (default: true) -- remove unreachable code

        // directives (default: true) -- remove redundant or non-standard directives

        // drop_console (default: false) -- Pass true to discard calls to console.* functions. If you only want to discard a portion of console, you can pass an array like this ['log', 'info'], which will only discard console.log、 console.info.

        // drop_debugger (default: true) -- remove debugger; statements

        // ecma (default: 5) -- Pass 2015 or greater to enable compress options that will transform ES5 code into smaller ES6+ equivalent forms.

        // evaluate (default: true) -- attempt to evaluate constant expressions

        // expression (default: false) -- Pass true to preserve completion values from terminal statements without return, e.g. in bookmarklets.

        // global_defs (default: {}) -- see conditional compilation

        // hoist_funs (default: false) -- hoist function declarations

        // hoist_props (default: true) -- hoist properties from constant object and array literals into regular variables subject to a set of constraints. For example: var o={p:1, q:2}; f(o.p, o.q); is converted to f(1, 2);. Note: hoist_props works best with mangle enabled, the compress option passes set to 2 or higher, and the compress option toplevel enabled.

        // hoist_vars (default: false) -- hoist var declarations (this is false by default because it seems to increase the size of the output in general)

        // if_return (default: true) -- optimizations for if/return and if/continue

        // inline (default: true) -- inline calls to function with simple/return statement:

        // false -- same as 0
        // 0 -- disabled inlining
        // 1 -- inline simple functions
        // 2 -- inline functions with arguments
        // 3 -- inline functions with arguments and variables
        // true -- same as 3
        // join_vars (default: true) -- join consecutive var, let and const statements

        // keep_classnames (default: false) -- Pass true to prevent the compressor from discarding class names. Pass a regular expression to only keep class names matching that regex. See also: the keep_classnames mangle option.

        // keep_fargs (default: true) -- Prevents the compressor from discarding unused function arguments. You need this for code which relies on Function.length.

        // keep_fnames (default: false) -- Pass true to prevent the compressor from discarding function names. Pass a regular expression to only keep function names matching that regex. Useful for code relying on Function.prototype.name. See also: the keep_fnames mangle option.

        // keep_infinity (default: false) -- Pass true to prevent Infinity from being compressed into 1/0, which may cause performance issues on Chrome.

        // lhs_constants (default: true) -- Moves constant values to the left-hand side of binary nodes. foo == 42 → 42 == foo

        // loops (default: true) -- optimizations for do, while and for loops when we can statically determine the condition.

        // module (default false) -- Pass true when compressing an ES6 module. Strict mode is implied and the toplevel option as well.

        // negate_iife (default: true) -- negate "Immediately-Called Function Expressions" where the return value is discarded, to avoid the parens that the code generator would insert.

        // passes (default: 1) -- The maximum number of times to run compress. In some cases more than one pass leads to further compressed code. Keep in mind more passes will take more time.

        // properties (default: true) -- rewrite property access using the dot notation, for example foo["bar"] → foo.bar

        // pure_funcs (default: null) -- You can pass an array of names and Terser will assume that those functions do not produce side effects. DANGER: will not check if the name is redefined in scope. An example case here, for instance var q = Math.floor(a/b). If variable q is not used elsewhere, Terser will drop it, but will still keep the Math.floor(a/b), not knowing what it does. You can pass pure_funcs: [ 'Math.floor' ] to let it know that this function won't produce any side effect, in which case the whole statement would get discarded. The current implementation adds some overhead (compression will be slower).

        // pure_getters (default: "strict") -- If you pass true for this, Terser will assume that object property access (e.g. foo.bar or foo["bar"]) doesn't have any side effects. Specify "strict" to treat foo.bar as side-effect-free only when foo is certain to not throw, i.e. not null or undefined.

        // pure_new (default: false) -- Set to true to assume new X() never has side effects.

        // reduce_vars (default: true) -- Improve optimization on variables assigned with and used as constant values.

        // reduce_funcs (default: true) -- Inline single-use functions when possible. Depends on reduce_vars being enabled. Disabling this option sometimes improves performance of the output code.

        // sequences (default: true) -- join consecutive simple statements using the comma operator. May be set to a positive integer to specify the maximum number of consecutive comma sequences that will be generated. If this option is set to true then the default sequences limit is 200. Set option to false or 0 to disable. The smallest sequences length is 2. A sequences value of 1 is grandfathered to be equivalent to true and as such means 200. On rare occasions the default sequences limit leads to very slow compress times in which case a value of 20 or less is recommended.

        // side_effects (default: true) -- Remove expressions which have no side effects and whose results aren't used.

        // switches (default: true) -- de-duplicate and remove unreachable switch branches

        // toplevel (default: false) -- drop unreferenced functions ("funcs") and/or variables ("vars") in the top level scope (false by default, true to drop both unreferenced functions and variables)

        // top_retain (default: null) -- prevent specific toplevel functions and variables from unused removal (can be array, comma-separated, RegExp or function. Implies toplevel)

        // typeofs (default: true) -- Transforms typeof foo == "undefined" into foo === void 0. Note: recommend to set this value to false for IE10 and earlier versions due to known issues.

        // unsafe (default: false) -- apply "unsafe" transformations (details).

        // unsafe_arrows (default: false) -- Convert ES5 style anonymous function expressions to arrow functions if the function body does not reference this. Note: it is not always safe to perform this conversion if code relies on the the function having a prototype, which arrow functions lack. This transform requires that the ecma compress option is set to 2015 or greater.

        // unsafe_comps (default: false) -- Reverse < and <= to > and >= to allow improved compression. This might be unsafe when an at least one of two operands is an object with computed values due the use of methods like get, or valueOf. This could cause change in execution order after operands in the comparison are switching. Compression only works if both comparisons and unsafe_comps are both set to true.

        // unsafe_Function (default: false) -- compress and mangle Function(args, code) when both args and code are string literals.

        // unsafe_math (default: false) -- optimize numerical expressions like 2 * x * 3 into 6 * x, which may give imprecise floating point results.

        // unsafe_symbols (default: false) -- removes keys from native Symbol declarations, e.g Symbol("kDog") becomes Symbol().

        // unsafe_methods (default: false) -- Converts { m: function(){} } to { m(){} }. ecma must be set to 6 or greater to enable this transform. If unsafe_methods is a RegExp then key/value pairs with keys matching the RegExp will be converted to concise methods. Note: if enabled there is a risk of getting a "<method name> is not a constructor" TypeError should any code try to new the former function.

        // unsafe_proto (default: false) -- optimize expressions like Array.prototype.slice.call(a) into [].slice.call(a)

        // unsafe_regexp (default: false) -- enable substitutions of variables with RegExp values the same way as if they are constants.

        // unsafe_undefined (default: false) -- substitute void 0 if there is a variable named undefined in scope (variable name will be mangled, typically reduced to a single character)

        // unused (default: true) -- drop unreferenced functions and variables (simple direct variable assignments do not count as references unless set to "keep_assign")


   },
    mangle: {
        // mangle options
        // Mangle names for obfuscation and size reduction
        // properties: true, // Mangle property names
        properties: {
            // mangle property options
            bare_returns: false, //support top level return statements
            html5_comments: true, // (default true)
            shebang: true, //(default true) -- support #!command as the first line
            spidermonkey: false, // (default false) -- accept a Spidermonkey (Mozilla) AST
        }
    },
    format: {
        // format options (can also use `output` for backwards compatibility)
        comments: false, // Remove comments to reduce file size
        beautify: false, // Disable beautification for smaller file size
    },
    sourceMap: {
        // source map options
    },
    // Define ECMAScript target version
    ecma: 5, // specify one of: 5, 2015, 2016, etc.
    enclose: false, // or specify true, or "args:values"
    keep_classnames: false, // Remove class names
    keep_fnames: false, // Remove function names
    ie8: false,
    module: false,
    nameCache: null, // or specify a name cache object
    safari10: false,
    toplevel: true, // Enable top-level variable and function name mangling

};


// ============================================================================
// Export
// ============================================================================

export default terserConfig;
