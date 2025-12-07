(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/task-creator/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Documents/task-creator/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Documents/task-creator/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Documents/task-creator/node_modules/make-event-props/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// As defined on the list of supported events: https://reactjs.org/docs/events.html
__turbopack_context__.s([
    "allEvents",
    ()=>allEvents,
    "animationEvents",
    ()=>animationEvents,
    "changeEvents",
    ()=>changeEvents,
    "clipboardEvents",
    ()=>clipboardEvents,
    "compositionEvents",
    ()=>compositionEvents,
    "default",
    ()=>makeEventProps,
    "dragEvents",
    ()=>dragEvents,
    "focusEvents",
    ()=>focusEvents,
    "formEvents",
    ()=>formEvents,
    "imageEvents",
    ()=>imageEvents,
    "keyboardEvents",
    ()=>keyboardEvents,
    "mediaEvents",
    ()=>mediaEvents,
    "mouseEvents",
    ()=>mouseEvents,
    "otherEvents",
    ()=>otherEvents,
    "pointerEvents",
    ()=>pointerEvents,
    "selectionEvents",
    ()=>selectionEvents,
    "touchEvents",
    ()=>touchEvents,
    "transitionEvents",
    ()=>transitionEvents,
    "uiEvents",
    ()=>uiEvents,
    "wheelEvents",
    ()=>wheelEvents
]);
const clipboardEvents = [
    'onCopy',
    'onCut',
    'onPaste'
];
const compositionEvents = [
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate'
];
const focusEvents = [
    'onFocus',
    'onBlur'
];
const formEvents = [
    'onInput',
    'onInvalid',
    'onReset',
    'onSubmit'
];
const imageEvents = [
    'onLoad',
    'onError'
];
const keyboardEvents = [
    'onKeyDown',
    'onKeyPress',
    'onKeyUp'
];
const mediaEvents = [
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onError',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting'
];
const mouseEvents = [
    'onClick',
    'onContextMenu',
    'onDoubleClick',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp'
];
const dragEvents = [
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop'
];
const selectionEvents = [
    'onSelect'
];
const touchEvents = [
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart'
];
const pointerEvents = [
    'onPointerDown',
    'onPointerMove',
    'onPointerUp',
    'onPointerCancel',
    'onGotPointerCapture',
    'onLostPointerCapture',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerOver',
    'onPointerOut'
];
const uiEvents = [
    'onScroll'
];
const wheelEvents = [
    'onWheel'
];
const animationEvents = [
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration'
];
const transitionEvents = [
    'onTransitionEnd'
];
const otherEvents = [
    'onToggle'
];
const changeEvents = [
    'onChange'
];
const allEvents = [
    ...clipboardEvents,
    ...compositionEvents,
    ...focusEvents,
    ...formEvents,
    ...imageEvents,
    ...keyboardEvents,
    ...mediaEvents,
    ...mouseEvents,
    ...dragEvents,
    ...selectionEvents,
    ...touchEvents,
    ...pointerEvents,
    ...uiEvents,
    ...wheelEvents,
    ...animationEvents,
    ...transitionEvents,
    ...changeEvents,
    ...otherEvents
];
function makeEventProps(props, getArgs) {
    const eventProps = {};
    for (const eventName of allEvents){
        const eventHandler = props[eventName];
        if (!eventHandler) {
            continue;
        }
        if (getArgs) {
            eventProps[eventName] = (event)=>eventHandler(event, getArgs(eventName));
        } else {
            eventProps[eventName] = eventHandler;
        }
    }
    return eventProps;
}
}),
"[project]/Documents/task-creator/node_modules/mimic-function/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mimicFunction
]);
const copyProperty = (to, from, property, ignoreNonConfigurable)=>{
    // `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
    // `Function#prototype` is non-writable and non-configurable so can never be modified.
    if (property === 'length' || property === 'prototype') {
        return;
    }
    // `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.
    if (property === 'arguments' || property === 'caller') {
        return;
    }
    const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
    const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
    if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
        return;
    }
    Object.defineProperty(to, property, fromDescriptor);
};
// `Object.defineProperty()` throws if the property exists, is not configurable and either:
// - one its descriptors is changed
// - it is non-writable and its value is changed
const canCopyProperty = function(toDescriptor, fromDescriptor) {
    return toDescriptor === undefined || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
const changePrototype = (to, from)=>{
    const fromPrototype = Object.getPrototypeOf(from);
    if (fromPrototype === Object.getPrototypeOf(to)) {
        return;
    }
    Object.setPrototypeOf(to, fromPrototype);
};
const wrappedToString = (withName, fromBody)=>`/* Wrapped ${withName}*/\n${fromBody}`;
const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');
// We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
const changeToString = (to, from, name)=>{
    const withName = name === '' ? '' : `with ${name.trim()}() `;
    const newToString = wrappedToString.bind(null, withName, from.toString());
    // Ensure `to.toString.toString` is non-enumerable and has the same `same`
    Object.defineProperty(newToString, 'name', toStringName);
    const { writable, enumerable, configurable } = toStringDescriptor; // We destructue to avoid a potential `get` descriptor.
    Object.defineProperty(to, 'toString', {
        value: newToString,
        writable,
        enumerable,
        configurable
    });
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
    const { name } = to;
    for (const property of Reflect.ownKeys(from)){
        copyProperty(to, from, property, ignoreNonConfigurable);
    }
    changePrototype(to, from);
    changeToString(to, from, name);
    return to;
}
}),
"[project]/Documents/task-creator/node_modules/memoize/distribution/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoize,
    "memoizeClear",
    ()=>memoizeClear,
    "memoizeDecorator",
    ()=>memoizeDecorator,
    "memoizeIsCached",
    ()=>memoizeIsCached
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$mimic$2d$function$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/mimic-function/index.js [app-client] (ecmascript)");
;
const maxTimeoutValue = 2_147_483_647;
const cacheStore = new WeakMap();
const cacheTimerStore = new WeakMap();
const cacheKeyStore = new WeakMap();
function getValidCacheItem(cache, key) {
    const item = cache.get(key);
    if (!item) {
        return undefined;
    }
    if (item.maxAge <= Date.now()) {
        cache.delete(key);
        return undefined;
    }
    return item;
}
function memoize(function_, { cacheKey, cache = new Map(), maxAge } = {}) {
    if (maxAge === 0) {
        return function_;
    }
    if (typeof maxAge === 'number' && Number.isFinite(maxAge)) {
        if (maxAge > maxTimeoutValue) {
            throw new TypeError(`The \`maxAge\` option cannot exceed ${maxTimeoutValue}.`);
        }
        if (maxAge < 0) {
            throw new TypeError('The `maxAge` option should not be a negative number.');
        }
    }
    const memoized = function(...arguments_) {
        const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
        const cacheItem = getValidCacheItem(cache, key);
        if (cacheItem) {
            return cacheItem.data;
        }
        const result = function_.apply(this, arguments_);
        const computedMaxAge = typeof maxAge === 'function' ? maxAge(...arguments_) : maxAge;
        if (computedMaxAge !== undefined && computedMaxAge !== Number.POSITIVE_INFINITY) {
            if (!Number.isFinite(computedMaxAge)) {
                throw new TypeError('The `maxAge` function must return a finite number, `0`, or `Infinity`.');
            }
            if (computedMaxAge <= 0) {
                return result; // Do not cache
            }
            if (computedMaxAge > maxTimeoutValue) {
                throw new TypeError(`The \`maxAge\` function result cannot exceed ${maxTimeoutValue}.`);
            }
        }
        cache.set(key, {
            data: result,
            maxAge: computedMaxAge === undefined || computedMaxAge === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : Date.now() + computedMaxAge
        });
        if (computedMaxAge !== undefined && computedMaxAge !== Number.POSITIVE_INFINITY) {
            const timer = setTimeout(()=>{
                cache.delete(key);
                cacheTimerStore.get(memoized)?.delete(timer);
            }, computedMaxAge);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            timer.unref?.();
            const timers = cacheTimerStore.get(memoized) ?? new Set();
            timers.add(timer);
            cacheTimerStore.set(memoized, timers);
        }
        return result;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$mimic$2d$function$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(memoized, function_, {
        ignoreNonConfigurable: true
    });
    cacheStore.set(memoized, cache);
    cacheKeyStore.set(memoized, cacheKey ?? ((arguments_)=>arguments_[0]));
    return memoized;
}
function memoizeDecorator(options = {}) {
    const instanceMap = new WeakMap();
    return (target, propertyKey, descriptor)=>{
        const input = target[propertyKey]; // eslint-disable-line @typescript-eslint/no-unsafe-assignment
        if (typeof input !== 'function') {
            throw new TypeError('The decorated value must be a function');
        }
        delete descriptor.value;
        delete descriptor.writable;
        descriptor.get = function() {
            if (!instanceMap.has(this)) {
                const value = memoize(input, options);
                instanceMap.set(this, value);
                return value;
            }
            return instanceMap.get(this);
        };
    };
}
function memoizeClear(function_) {
    const cache = cacheStore.get(function_);
    if (!cache) {
        throw new TypeError('Can\'t clear a function that was not memoized!');
    }
    if (typeof cache.clear !== 'function') {
        throw new TypeError('The cache Map can\'t be cleared!');
    }
    cache.clear();
    for (const timer of cacheTimerStore.get(function_) ?? []){
        clearTimeout(timer);
    }
    cacheTimerStore.delete(function_);
}
function memoizeIsCached(function_, ...arguments_) {
    const cacheKey = cacheKeyStore.get(function_);
    if (!cacheKey) {
        return false;
    }
    const cache = cacheStore.get(function_);
    const key = cacheKey(arguments_);
    const item = getValidCacheItem(cache, key);
    return item !== undefined;
}
}),
"[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getUserLocale",
    ()=>getUserLocale,
    "getUserLocales",
    ()=>getUserLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/memoize/distribution/index.js [app-client] (ecmascript)");
;
function isString(el) {
    return typeof el === 'string';
}
function isUnique(el, index, arr) {
    return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
    return el.toLowerCase() === el;
}
function fixCommas(el) {
    return el.indexOf(',') === -1 ? el : el.split(',');
}
function normalizeLocale(locale) {
    if (!locale) {
        return locale;
    }
    if (locale === 'C' || locale === 'posix' || locale === 'POSIX') {
        return 'en-US';
    }
    // If there's a dot (.) in the locale, it's likely in the format of "en-US.UTF-8", so we only take the first part
    if (locale.indexOf('.') !== -1) {
        var _a = locale.split('.')[0], actualLocale = _a === void 0 ? '' : _a;
        return normalizeLocale(actualLocale);
    }
    // If there's an at sign (@) in the locale, it's likely in the format of "en-US@posix", so we only take the first part
    if (locale.indexOf('@') !== -1) {
        var _b = locale.split('@')[0], actualLocale = _b === void 0 ? '' : _b;
        return normalizeLocale(actualLocale);
    }
    // If there's a dash (-) in the locale and it's not all lower case, it's already in the format of "en-US", so we return it
    if (locale.indexOf('-') === -1 || !isAllLowerCase(locale)) {
        return locale;
    }
    var _c = locale.split('-'), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? '' : _d;
    return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? 'en-US' : _d;
    var languageList = [];
    if (typeof navigator !== 'undefined') {
        var rawLanguages = navigator.languages || [];
        var languages = [];
        for(var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++){
            var rawLanguagesItem = rawLanguages_1[_i];
            languages = languages.concat(fixCommas(rawLanguagesItem));
        }
        var rawLanguage = navigator.language;
        var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
        languageList = languageList.concat(languages, language);
    }
    if (useFallbackLocale) {
        languageList.push(fallbackLocale);
    }
    return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(getUserLocalesInternal, {
    cacheKey: JSON.stringify
});
function getUserLocaleInternal(options) {
    return getUserLocales(options)[0] || null;
}
var getUserLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(getUserLocaleInternal, {
    cacheKey: JSON.stringify
});
const __TURBOPACK__default__export__ = getUserLocale;
}),
"[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utils
 */ __turbopack_context__.s([
    "getCenturyEnd",
    ()=>getCenturyEnd,
    "getCenturyRange",
    ()=>getCenturyRange,
    "getCenturyStart",
    ()=>getCenturyStart,
    "getDate",
    ()=>getDate,
    "getDayEnd",
    ()=>getDayEnd,
    "getDayRange",
    ()=>getDayRange,
    "getDayStart",
    ()=>getDayStart,
    "getDaysInMonth",
    ()=>getDaysInMonth,
    "getDecadeEnd",
    ()=>getDecadeEnd,
    "getDecadeRange",
    ()=>getDecadeRange,
    "getDecadeStart",
    ()=>getDecadeStart,
    "getHours",
    ()=>getHours,
    "getHoursMinutes",
    ()=>getHoursMinutes,
    "getHoursMinutesSeconds",
    ()=>getHoursMinutesSeconds,
    "getISOLocalDate",
    ()=>getISOLocalDate,
    "getISOLocalDateTime",
    ()=>getISOLocalDateTime,
    "getISOLocalMonth",
    ()=>getISOLocalMonth,
    "getMilliseconds",
    ()=>getMilliseconds,
    "getMinutes",
    ()=>getMinutes,
    "getMonth",
    ()=>getMonth,
    "getMonthEnd",
    ()=>getMonthEnd,
    "getMonthHuman",
    ()=>getMonthHuman,
    "getMonthRange",
    ()=>getMonthRange,
    "getMonthStart",
    ()=>getMonthStart,
    "getNextCenturyEnd",
    ()=>getNextCenturyEnd,
    "getNextCenturyStart",
    ()=>getNextCenturyStart,
    "getNextDayEnd",
    ()=>getNextDayEnd,
    "getNextDayStart",
    ()=>getNextDayStart,
    "getNextDecadeEnd",
    ()=>getNextDecadeEnd,
    "getNextDecadeStart",
    ()=>getNextDecadeStart,
    "getNextMonthEnd",
    ()=>getNextMonthEnd,
    "getNextMonthStart",
    ()=>getNextMonthStart,
    "getNextYearEnd",
    ()=>getNextYearEnd,
    "getNextYearStart",
    ()=>getNextYearStart,
    "getPreviousCenturyEnd",
    ()=>getPreviousCenturyEnd,
    "getPreviousCenturyStart",
    ()=>getPreviousCenturyStart,
    "getPreviousDayEnd",
    ()=>getPreviousDayEnd,
    "getPreviousDayStart",
    ()=>getPreviousDayStart,
    "getPreviousDecadeEnd",
    ()=>getPreviousDecadeEnd,
    "getPreviousDecadeStart",
    ()=>getPreviousDecadeStart,
    "getPreviousMonthEnd",
    ()=>getPreviousMonthEnd,
    "getPreviousMonthStart",
    ()=>getPreviousMonthStart,
    "getPreviousYearEnd",
    ()=>getPreviousYearEnd,
    "getPreviousYearStart",
    ()=>getPreviousYearStart,
    "getSeconds",
    ()=>getSeconds,
    "getYear",
    ()=>getYear,
    "getYearEnd",
    ()=>getYearEnd,
    "getYearRange",
    ()=>getYearRange,
    "getYearStart",
    ()=>getYearStart
]);
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborInternal(date, offset = defaultOffset) {
        const previousPeriod = getPeriod(date) + offset;
        return getEdgeOfPeriod(previousPeriod);
    };
}
function makeGetEnd(getBeginOfNextPeriod) {
    return function makeGetEndInternal(date) {
        return new Date(getBeginOfNextPeriod(date).getTime() - 1);
    };
}
function makeGetRange(getStart, getEnd) {
    return function makeGetRangeInternal(date) {
        return [
            getStart(date),
            getEnd(date)
        ];
    };
}
function getYear(date) {
    if (date instanceof Date) {
        return date.getFullYear();
    }
    if (typeof date === 'number') {
        return date;
    }
    const year = Number.parseInt(date, 10);
    if (typeof date === 'string' && !Number.isNaN(year)) {
        return year;
    }
    throw new Error(`Failed to get year from date: ${date}.`);
}
function getMonth(date) {
    if (date instanceof Date) {
        return date.getMonth();
    }
    throw new Error(`Failed to get month from date: ${date}.`);
}
function getMonthHuman(date) {
    if (date instanceof Date) {
        return date.getMonth() + 1;
    }
    throw new Error(`Failed to get human-readable month from date: ${date}.`);
}
function getDate(date) {
    if (date instanceof Date) {
        return date.getDate();
    }
    throw new Error(`Failed to get year from date: ${date}.`);
}
function getHours(date) {
    if (date instanceof Date) {
        return date.getHours();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const hoursString = datePieces[0];
            if (hoursString) {
                const hours = Number.parseInt(hoursString, 10);
                if (!Number.isNaN(hours)) {
                    return hours;
                }
            }
        }
    }
    throw new Error(`Failed to get hours from date: ${date}.`);
}
function getMinutes(date) {
    if (date instanceof Date) {
        return date.getMinutes();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const minutesString = datePieces[1] || '0';
            const minutes = Number.parseInt(minutesString, 10);
            if (!Number.isNaN(minutes)) {
                return minutes;
            }
        }
    }
    throw new Error(`Failed to get minutes from date: ${date}.`);
}
function getSeconds(date) {
    if (date instanceof Date) {
        return date.getSeconds();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const secondsWithMillisecondsString = datePieces[2] || '0';
            const seconds = Number.parseInt(secondsWithMillisecondsString, 10);
            if (!Number.isNaN(seconds)) {
                return seconds;
            }
        }
    }
    throw new Error(`Failed to get seconds from date: ${date}.`);
}
function getMilliseconds(date) {
    if (date instanceof Date) {
        return date.getMilliseconds();
    }
    if (typeof date === 'string') {
        const datePieces = date.split(':');
        if (datePieces.length >= 2) {
            const secondsWithMillisecondsString = datePieces[2] || '0';
            const millisecondsString = secondsWithMillisecondsString.split('.')[1] || '0';
            const milliseconds = Number.parseInt(millisecondsString, 10);
            if (!Number.isNaN(milliseconds)) {
                return milliseconds;
            }
        }
    }
    throw new Error(`Failed to get seconds from date: ${date}.`);
}
function getCenturyStart(date) {
    const year = getYear(date);
    const centuryStartYear = year + (-year + 1) % 100;
    const centuryStartDate = new Date();
    centuryStartDate.setFullYear(centuryStartYear, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);
    return centuryStartDate;
}
const getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
const getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
const getCenturyEnd = makeGetEnd(getNextCenturyStart);
const getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
const getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
const getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
function getDecadeStart(date) {
    const year = getYear(date);
    const decadeStartYear = year + (-year + 1) % 10;
    const decadeStartDate = new Date();
    decadeStartDate.setFullYear(decadeStartYear, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);
    return decadeStartDate;
}
const getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
const getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
const getDecadeEnd = makeGetEnd(getNextDecadeStart);
const getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
const getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
const getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
function getYearStart(date) {
    const year = getYear(date);
    const yearStartDate = new Date();
    yearStartDate.setFullYear(year, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    return yearStartDate;
}
const getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
const getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
const getYearEnd = makeGetEnd(getNextYearStart);
const getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
const getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
const getYearRange = makeGetRange(getYearStart, getYearEnd);
/**
 * Month
 */ function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborMonthInternal(date, offset = defaultOffset) {
        const year = getYear(date);
        const month = getMonth(date) + offset;
        const previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, 1);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getMonthStart(date) {
    const year = getYear(date);
    const month = getMonth(date);
    const monthStartDate = new Date();
    monthStartDate.setFullYear(year, month, 1);
    monthStartDate.setHours(0, 0, 0, 0);
    return monthStartDate;
}
const getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
const getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
const getMonthEnd = makeGetEnd(getNextMonthStart);
const getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
const getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
const getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
/**
 * Day
 */ function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborDayInternal(date, offset = defaultOffset) {
        const year = getYear(date);
        const month = getMonth(date);
        const day = getDate(date) + offset;
        const previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, day);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getDayStart(date) {
    const year = getYear(date);
    const month = getMonth(date);
    const day = getDate(date);
    const dayStartDate = new Date();
    dayStartDate.setFullYear(year, month, day);
    dayStartDate.setHours(0, 0, 0, 0);
    return dayStartDate;
}
const getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
const getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
const getDayEnd = makeGetEnd(getNextDayStart);
const getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
const getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
const getDayRange = makeGetRange(getDayStart, getDayEnd);
function getDaysInMonth(date) {
    return getDate(getMonthEnd(date));
}
function padStart(num, val = 2) {
    const numStr = `${num}`;
    if (numStr.length >= val) {
        return num;
    }
    return `0000${numStr}`.slice(-val);
}
function getHoursMinutes(date) {
    const hours = padStart(getHours(date));
    const minutes = padStart(getMinutes(date));
    return `${hours}:${minutes}`;
}
function getHoursMinutesSeconds(date) {
    const hours = padStart(getHours(date));
    const minutes = padStart(getMinutes(date));
    const seconds = padStart(getSeconds(date));
    return `${hours}:${minutes}:${seconds}`;
}
function getISOLocalMonth(date) {
    const year = padStart(getYear(date), 4);
    const month = padStart(getMonthHuman(date));
    return `${year}-${month}`;
}
function getISOLocalDate(date) {
    const year = padStart(getYear(date), 4);
    const month = padStart(getMonthHuman(date));
    const day = padStart(getDate(date));
    return `${year}-${month}-${day}`;
}
function getISOLocalDateTime(date) {
    return `${getISOLocalDate(date)}T${getHoursMinutesSeconds(date)}`;
}
}),
"[project]/Documents/task-creator/node_modules/react-clock/dist/Hand.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
function Hand(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, name = _a.name, _c = _a.length, length = _c === void 0 ? 100 : _c, _d = _a.oppositeLength, oppositeLength = _d === void 0 ? 10 : _d, _e = _a.width, width = _e === void 0 ? 1 : _e;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-clock__hand react-clock__".concat(name, "-hand"),
        style: {
            transform: "rotate(".concat(angle, "deg)")
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "react-clock__hand__body react-clock__".concat(name, "-hand__body"),
            style: {
                width: "".concat(width, "px"),
                top: "".concat(50 - length / 2, "%"),
                bottom: "".concat(50 - oppositeLength / 2, "%")
            }
        })
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-clock/dist/Mark.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var Mark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function Mark(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, _c = _a.length, length = _c === void 0 ? 10 : _c, name = _a.name, _d = _a.width, width = _d === void 0 ? 1 : _d;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-clock__mark react-clock__".concat(name, "-mark"),
        style: {
            transform: "rotate(".concat(angle, "deg)")
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "react-clock__mark__body react-clock__".concat(name, "-mark__body"),
            style: {
                width: "".concat(width, "px"),
                top: 0,
                bottom: "".concat(100 - length / 2, "%")
            }
        })
    });
});
const __TURBOPACK__default__export__ = Mark;
}),
"[project]/Documents/task-creator/node_modules/react-clock/dist/MarkNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var MarkNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function MarkNumber(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, _c = _a.length, length = _c === void 0 ? 10 : _c, name = _a.name, number = _a.number;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-clock__mark react-clock__".concat(name, "-mark"),
        style: {
            transform: "rotate(".concat(angle, "deg)")
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "react-clock__mark__number",
            style: {
                transform: "rotate(-".concat(angle, "deg)"),
                top: "".concat(length / 2, "%")
            },
            children: number
        })
    });
});
const __TURBOPACK__default__export__ = MarkNumber;
}),
"[project]/Documents/task-creator/node_modules/react-clock/dist/shared/hourFormatter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatHour",
    ()=>formatHour
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-client] (ecmascript)");
;
function formatHour(locale, hour) {
    return hour.toLocaleString(locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])() || undefined);
}
}),
"[project]/Documents/task-creator/node_modules/react-clock/dist/shared/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safeMax",
    ()=>safeMax
]);
function isValidNumber(num) {
    return num !== null && num !== false && !Number.isNaN(Number(num));
}
function safeMax() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return Math.max.apply(Math, args.filter(isValidNumber));
}
}),
"[project]/Documents/task-creator/node_modules/react-clock/dist/Clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/Hand.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/Mark.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$MarkNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/MarkNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$shared$2f$hourFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/shared/hourFormatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/shared/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function Clock(_a) {
    var className = _a.className, _b = _a.formatHour, formatHour = _b === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$shared$2f$hourFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatHour"] : _b, _c = _a.hourHandLength, hourHandLength = _c === void 0 ? 50 : _c, hourHandOppositeLength = _a.hourHandOppositeLength, _d = _a.hourHandWidth, hourHandWidth = _d === void 0 ? 4 : _d, _e = _a.hourMarksLength, hourMarksLength = _e === void 0 ? 10 : _e, _f = _a.hourMarksWidth, hourMarksWidth = _f === void 0 ? 3 : _f, locale = _a.locale, _g = _a.minuteHandLength, minuteHandLength = _g === void 0 ? 70 : _g, minuteHandOppositeLength = _a.minuteHandOppositeLength, _h = _a.minuteHandWidth, minuteHandWidth = _h === void 0 ? 2 : _h, _j = _a.minuteMarksLength, minuteMarksLength = _j === void 0 ? 6 : _j, _k = _a.minuteMarksWidth, minuteMarksWidth = _k === void 0 ? 1 : _k, _l = _a.renderHourMarks, renderHourMarks = _l === void 0 ? true : _l, _m = _a.renderMinuteHand, renderMinuteHand = _m === void 0 ? true : _m, _o = _a.renderMinuteMarks, renderMinuteMarks = _o === void 0 ? true : _o, renderNumbers = _a.renderNumbers, _p = _a.renderSecondHand, renderSecondHand = _p === void 0 ? true : _p, _q = _a.secondHandLength, secondHandLength = _q === void 0 ? 90 : _q, secondHandOppositeLength = _a.secondHandOppositeLength, _r = _a.secondHandWidth, secondHandWidth = _r === void 0 ? 1 : _r, _s = _a.size, size = _s === void 0 ? 150 : _s, useMillisecondPrecision = _a.useMillisecondPrecision, value = _a.value;
    function renderMinuteMarksFn() {
        if (!renderMinuteMarks) {
            return null;
        }
        var minuteMarks = [];
        for(var i = 1; i <= 60; i += 1){
            var isHourMark = renderHourMarks && !(i % 5);
            if (!isHourMark) {
                minuteMarks.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    angle: i * 6,
                    length: minuteMarksLength,
                    name: "minute",
                    width: minuteMarksWidth
                }, "minute_".concat(i)));
            }
        }
        return minuteMarks;
    }
    function renderHourMarksFn() {
        if (!renderHourMarks) {
            return null;
        }
        var hourMarks = [];
        for(var i = 1; i <= 12; i += 1){
            hourMarks.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                angle: i * 30,
                length: hourMarksLength,
                name: "hour",
                width: hourMarksWidth
            }, "hour_".concat(i)));
        }
        return hourMarks;
    }
    function renderNumbersFn() {
        if (!renderNumbers) {
            return null;
        }
        var numbers = [];
        for(var i = 1; i <= 12; i += 1){
            numbers.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$MarkNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                angle: i * 30,
                length: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMax"])(renderHourMarks && hourMarksLength, renderMinuteMarks && minuteMarksLength, 0),
                name: "number",
                number: formatHour(locale, i)
            }, "number_".concat(i)));
        }
        return numbers;
    }
    function renderFace() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: "react-clock__face",
            children: [
                renderMinuteMarksFn(),
                renderHourMarksFn(),
                renderNumbersFn()
            ]
        });
    }
    function renderHourHandFn() {
        var angle = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(value) * 30 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(value) / 2 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(value) / 120 + (useMillisecondPrecision ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMilliseconds"])(value) / 120000 : 0) : 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            angle: angle,
            length: hourHandLength,
            name: "hour",
            oppositeLength: hourHandOppositeLength,
            width: hourHandWidth
        });
    }
    function renderMinuteHandFn() {
        if (!renderMinuteHand) {
            return null;
        }
        var angle = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(value) * 360 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(value) * 6 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(value) / 10 + (useMillisecondPrecision ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMilliseconds"])(value) / 10000 : 0) : 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            angle: angle,
            length: minuteHandLength,
            name: "minute",
            oppositeLength: minuteHandOppositeLength,
            width: minuteHandWidth
        });
    }
    function renderSecondHandFn() {
        if (!renderSecondHand) {
            return null;
        }
        var angle = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(value) * 360 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(value) * 6 + (useMillisecondPrecision ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMilliseconds"])(value) * 0.006 : 0) : 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            angle: angle,
            length: secondHandLength,
            name: "second",
            oppositeLength: secondHandOppositeLength,
            width: secondHandWidth
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("time", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('react-clock', className),
        dateTime: value instanceof Date ? value.toLocaleTimeString('en', {
            hourCycle: 'h23',
            hour: '2-digit',
            minute: renderMinuteHand ? '2-digit' : undefined,
            second: renderSecondHand ? '2-digit' : undefined
        }) : value || undefined,
        style: {
            width: size,
            height: size
        },
        children: [
            renderFace(),
            renderHourHandFn(),
            renderMinuteHandFn(),
            renderSecondHandFn()
        ]
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-clock/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/Clock.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/task-creator/node_modules/detect-element-overflow/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>detectElementOverflow
]);
function getRect(element) {
    return element.getBoundingClientRect();
}
function detectElementOverflow(element, container) {
    return {
        get collidedTop () {
            return getRect(element).top < getRect(container).top;
        },
        get collidedBottom () {
            return getRect(element).bottom > getRect(container).bottom;
        },
        get collidedLeft () {
            return getRect(element).left < getRect(container).left;
        },
        get collidedRight () {
            return getRect(element).right > getRect(container).right;
        },
        get overflowTop () {
            return getRect(container).top - getRect(element).top;
        },
        get overflowBottom () {
            return getRect(element).bottom - getRect(container).bottom;
        },
        get overflowLeft () {
            return getRect(container).left - getRect(element).left;
        },
        get overflowRight () {
            return getRect(element).right - getRect(container).right;
        }
    };
}
}),
"[project]/Documents/task-creator/node_modules/warning/warning.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
var warning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++){
            args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++){
            args[key - 2] = arguments[key];
        }
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
            printWarning.apply(null, [
                format
            ].concat(args));
        }
    };
}
module.exports = warning;
}),
"[project]/Documents/task-creator/node_modules/react-fit/dist/Fit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$detect$2d$element$2d$overflow$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/detect-element-overflow/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/warning/warning.js [app-client] (ecmascript)");
'use client';
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
const isBrowser = typeof window !== 'undefined';
const isMutationObserverSupported = isBrowser && 'MutationObserver' in window;
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function findScrollContainer(element) {
    let parent = element.parentElement;
    while(parent){
        const { overflow } = window.getComputedStyle(parent);
        if (overflow.split(' ').every((o)=>o === 'auto' || o === 'scroll')) {
            return parent;
        }
        parent = parent.parentElement;
    }
    return document.documentElement;
}
function alignAxis({ axis, container, element, invertAxis, scrollContainer, secondary, spacing }) {
    const style = window.getComputedStyle(element);
    const parent = container.parentElement;
    if (!parent) {
        return;
    }
    const scrollContainerCollisions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$detect$2d$element$2d$overflow$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(parent, scrollContainer);
    const documentCollisions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$detect$2d$element$2d$overflow$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(parent, document.documentElement);
    const isX = axis === 'x';
    const startProperty = isX ? 'left' : 'top';
    const endProperty = isX ? 'right' : 'bottom';
    const sizeProperty = isX ? 'width' : 'height';
    const overflowStartProperty = `overflow${capitalize(startProperty)}`;
    const overflowEndProperty = `overflow${capitalize(endProperty)}`;
    const scrollProperty = `scroll${capitalize(startProperty)}`;
    const uppercasedSizeProperty = capitalize(sizeProperty);
    const offsetSizeProperty = `offset${uppercasedSizeProperty}`;
    const clientSizeProperty = `client${uppercasedSizeProperty}`;
    const minSizeProperty = `min-${sizeProperty}`;
    const scrollbarWidth = scrollContainer[offsetSizeProperty] - scrollContainer[clientSizeProperty];
    const startSpacing = typeof spacing === 'object' ? spacing[startProperty] : spacing;
    let availableStartSpace = -Math.max(scrollContainerCollisions[overflowStartProperty], documentCollisions[overflowStartProperty] + document.documentElement[scrollProperty]) - startSpacing;
    const endSpacing = typeof spacing === 'object' ? spacing[endProperty] : spacing;
    let availableEndSpace = -Math.max(scrollContainerCollisions[overflowEndProperty], documentCollisions[overflowEndProperty] - document.documentElement[scrollProperty]) - endSpacing - scrollbarWidth;
    if (secondary) {
        availableStartSpace += parent[clientSizeProperty];
        availableEndSpace += parent[clientSizeProperty];
    }
    const offsetSize = element[offsetSizeProperty];
    function displayStart() {
        element.style[startProperty] = 'auto';
        element.style[endProperty] = secondary ? '0' : '100%';
    }
    function displayEnd() {
        element.style[startProperty] = secondary ? '0' : '100%';
        element.style[endProperty] = 'auto';
    }
    function displayIfFits(availableSpace, display) {
        const fits = offsetSize <= availableSpace;
        if (fits) {
            display();
        }
        return fits;
    }
    function displayStartIfFits() {
        return displayIfFits(availableStartSpace, displayStart);
    }
    function displayEndIfFits() {
        return displayIfFits(availableEndSpace, displayEnd);
    }
    function displayWhereverShrinkedFits() {
        const moreSpaceStart = availableStartSpace > availableEndSpace;
        const rawMinSize = style.getPropertyValue(minSizeProperty);
        const minSize = rawMinSize ? Number.parseInt(rawMinSize, 10) : null;
        function shrinkToSize(size) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!minSize || size >= minSize, `<Fit />'s child will not fit anywhere with its current ${minSizeProperty} of ${minSize}px.`);
            const newSize = Math.max(size, minSize || 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, `<Fit />'s child needed to have its ${sizeProperty} decreased to ${newSize}px.`);
            element.style[sizeProperty] = `${newSize}px`;
        }
        if (moreSpaceStart) {
            shrinkToSize(availableStartSpace);
            displayStart();
        } else {
            shrinkToSize(availableEndSpace);
            displayEnd();
        }
    }
    let fits;
    if (invertAxis) {
        fits = displayStartIfFits() || displayEndIfFits();
    } else {
        fits = displayEndIfFits() || displayStartIfFits();
    }
    if (!fits) {
        displayWhereverShrinkedFits();
    }
}
function alignMainAxis(args) {
    alignAxis(args);
}
function alignSecondaryAxis(args) {
    alignAxis(Object.assign(Object.assign({}, args), {
        axis: args.axis === 'x' ? 'y' : 'x',
        secondary: true
    }));
}
function alignBothAxis(args) {
    const { invertAxis, invertSecondaryAxis } = args, commonArgs = __rest(args, [
        "invertAxis",
        "invertSecondaryAxis"
    ]);
    alignMainAxis(Object.assign(Object.assign({}, commonArgs), {
        invertAxis
    }));
    alignSecondaryAxis(Object.assign(Object.assign({}, commonArgs), {
        invertAxis: invertSecondaryAxis
    }));
}
function Fit({ children, invertAxis, invertSecondaryAxis, mainAxis = 'y', spacing = 8 }) {
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const elementWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const elementHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const scrollContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const fit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Fit.useCallback[fit]": ()=>{
            if (!scrollContainer.current || !container.current || !element.current) {
                return;
            }
            const currentElementWidth = element.current.clientWidth;
            const currentElementHeight = element.current.clientHeight;
            // No need to recalculate - already did that for current dimensions
            if (elementWidth.current === currentElementWidth && elementHeight.current === currentElementHeight) {
                return;
            }
            // Save the dimensions so that we know we don't need to repeat the function if unchanged
            elementWidth.current = currentElementWidth;
            elementHeight.current = currentElementHeight;
            const parent = container.current.parentElement;
            // Container was unmounted
            if (!parent) {
                return;
            }
            /**
         * We need to ensure that <Fit />'s child has a absolute position. Otherwise,
         * we wouldn't be able to place the child in the correct position.
         */ const style = window.getComputedStyle(element.current);
            const { position } = style;
            if (position !== 'absolute') {
                element.current.style.position = 'absolute';
            }
            /**
         * We need to ensure that <Fit />'s parent has a relative or absolute position. Otherwise,
         * we wouldn't be able to place the child in the correct position.
         */ const parentStyle = window.getComputedStyle(parent);
            const { position: parentPosition } = parentStyle;
            if (parentPosition !== 'relative' && parentPosition !== 'absolute') {
                parent.style.position = 'relative';
            }
            alignBothAxis({
                axis: mainAxis,
                container: container.current,
                element: element.current,
                invertAxis,
                invertSecondaryAxis,
                scrollContainer: scrollContainer.current,
                spacing
            });
        }
    }["Fit.useCallback[fit]"], [
        invertAxis,
        invertSecondaryAxis,
        mainAxis,
        spacing
    ]);
    const child = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Fit.useEffect": ()=>{
            fit();
            function onMutation() {
                fit();
            }
            if (isMutationObserverSupported && element.current) {
                const mutationObserver = new MutationObserver(onMutation);
                mutationObserver.observe(element.current, {
                    attributes: true,
                    attributeFilter: [
                        'class',
                        'style'
                    ]
                });
            }
        }
    }["Fit.useEffect"], [
        fit
    ]);
    function assignRefs(domElement) {
        if (!domElement || !(domElement instanceof HTMLElement)) {
            return;
        }
        element.current = domElement;
        scrollContainer.current = findScrollContainer(domElement);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        ref: (domContainer)=>{
            if (!domContainer) {
                return;
            }
            container.current = domContainer;
            const domElement = domContainer === null || domContainer === void 0 ? void 0 : domContainer.firstElementChild;
            assignRefs(domElement);
        },
        style: {
            display: 'contents'
        },
        children: child
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-fit/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$fit$2f$dist$2f$Fit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-fit/dist/Fit.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$fit$2f$dist$2f$Fit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/task-creator/node_modules/update-input-width/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getFontShorthand",
    ()=>getFontShorthand,
    "measureText",
    ()=>measureText,
    "updateInputWidth",
    ()=>updateInputWidth
]);
var allowedVariants = [
    'normal',
    'small-caps'
];
function getFontShorthand(element) {
    if (!element) {
        return '';
    }
    var style = window.getComputedStyle(element);
    if (style.font) {
        return style.font;
    }
    var isFontDefined = style.fontFamily !== '';
    if (!isFontDefined) {
        return '';
    }
    var fontVariant = allowedVariants.includes(style.fontVariant) ? style.fontVariant : 'normal';
    return "".concat(style.fontStyle, " ").concat(fontVariant, " ").concat(style.fontWeight, " ").concat(style.fontSize, " / ").concat(style.lineHeight, " ").concat(style.fontFamily);
}
var cachedCanvas;
function measureText(text, font) {
    var canvas = cachedCanvas || (cachedCanvas = document.createElement('canvas'));
    var context = canvas.getContext('2d');
    // Context type not supported
    if (!context) {
        return null;
    }
    context.font = font;
    var width = context.measureText(text).width;
    return Math.ceil(width);
}
function updateInputWidth(element) {
    if (typeof document === 'undefined' || !element) {
        return null;
    }
    var font = getFontShorthand(element);
    var text = element.value || element.placeholder;
    var width = measureText(text, font);
    if (width === null) {
        return null;
    }
    element.style.width = "".concat(width, "px");
    return width;
}
const __TURBOPACK__default__export__ = updateInputWidth;
}),
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/update-input-width/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
;
const isBrowser = typeof window !== 'undefined';
const useIsomorphicLayoutEffect = isBrowser ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
const isIEOrEdgeLegacy = isBrowser && /(MSIE|Trident\/|Edge\/)/.test(navigator.userAgent);
const isFirefox = isBrowser && /Firefox/.test(navigator.userAgent);
function onFocus(event) {
    const { target } = event;
    if (isIEOrEdgeLegacy) {
        requestAnimationFrame(()=>target.select());
    } else {
        target.select();
    }
}
function updateInputWidthOnLoad(element) {
    if (document.readyState === 'complete') {
        return;
    }
    function onLoad() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    }
    window.addEventListener('load', onLoad);
}
function updateInputWidthOnFontLoad(element) {
    if (!document.fonts) {
        return;
    }
    const font = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontShorthand"])(element);
    if (!font) {
        return;
    }
    const isFontLoaded = document.fonts.check(font);
    if (isFontLoaded) {
        return;
    }
    function onLoadingDone() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    }
    document.fonts.addEventListener('loadingdone', onLoadingDone);
}
function getSelectionString(input) {
    /**
     * window.getSelection().toString() returns empty string in IE11 and Firefox,
     * so alternatives come first.
     */ if (input && 'selectionStart' in input && input.selectionStart !== null && 'selectionEnd' in input && input.selectionEnd !== null) {
        return input.value.slice(input.selectionStart, input.selectionEnd);
    }
    if ('getSelection' in window) {
        const selection = window.getSelection();
        return selection === null || selection === void 0 ? void 0 : selection.toString();
    }
    return null;
}
function makeOnKeyPress(maxLength) {
    if (maxLength === null) {
        return undefined;
    }
    /**
     * Prevents keystrokes that would not produce a number or when value after keystroke would
     * exceed maxLength.
     */ return function onKeyPress(event) {
        if (isFirefox) {
            // See https://github.com/wojtekmaj/react-time-picker/issues/92
            return;
        }
        const { key, target: input } = event;
        const { value } = input;
        const isNumberKey = key.length === 1 && /\d/.test(key);
        const selection = getSelectionString(input);
        if (!isNumberKey || !(selection || value.length < maxLength)) {
            event.preventDefault();
        }
    };
}
function Input({ ariaLabel, autoFocus, className, disabled, inputRef, max, min, name, nameForClass, onChange, onKeyDown, onKeyUp, placeholder = '--', required, showLeadingZeros, step, value }) {
    useIsomorphicLayoutEffect({
        "Input.useIsomorphicLayoutEffect": ()=>{
            if (!inputRef || !inputRef.current) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputRef.current);
            updateInputWidthOnLoad(inputRef.current);
            updateInputWidthOnFontLoad(inputRef.current);
        }
    }["Input.useIsomorphicLayoutEffect"], [
        inputRef,
        value
    ]);
    const hasLeadingZero = showLeadingZeros && value && Number(value) < 10 && (value === '0' || !value.toString().startsWith('0'));
    const maxLength = max ? max.toString().length : null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            hasLeadingZero ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: `${className}__leadingZero`,
                children: "0"
            }) : null,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                "aria-label": ariaLabel,
                autoComplete: "off",
                // biome-ignore lint/a11y/noAutofocus: This is up to developers' decision
                autoFocus: autoFocus,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${className}__input`, `${className}__${nameForClass || name}`, hasLeadingZero && `${className}__input--hasLeadingZero`),
                "data-input": "true",
                disabled: disabled,
                inputMode: "numeric",
                max: max,
                min: min,
                name: name,
                onChange: onChange,
                onFocus: onFocus,
                onKeyDown: onKeyDown,
                onKeyPress: makeOnKeyPress(maxLength),
                onKeyUp: (event)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event.target);
                    if (onKeyUp) {
                        onKeyUp(event);
                    }
                },
                placeholder: placeholder,
                // Assertion is needed for React 18 compatibility
                ref: inputRef,
                required: required,
                step: step,
                type: "number",
                value: value !== null ? value : ''
            })
        ]
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {Date} value Value to return.
 * @param {Date} min Minimum return value.
 * @param {Date} max Maximum return value.
 * @returns {Date} Value between min and max.
 */ __turbopack_context__.s([
    "between",
    ()=>between,
    "safeMax",
    ()=>safeMax,
    "safeMin",
    ()=>safeMin
]);
function between(value, min, max) {
    if (min && min > value) {
        return min;
    }
    if (max && max < value) {
        return max;
    }
    return value;
}
function isValidNumber(num) {
    return num !== null && num !== false && !Number.isNaN(Number(num));
}
function safeMin(...args) {
    return Math.min(...args.filter(isValidNumber));
}
function safeMax(...args) {
    return Math.max(...args.filter(isValidNumber));
}
}),
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/DayInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DayInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/utils.js [app-client] (ecmascript)");
;
;
;
;
function DayInput({ maxDate, minDate, month, year, ...otherProps }) {
    const currentMonthMaxDays = (()=>{
        if (!month) {
            return 31;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaysInMonth"])(new Date(Number(year), Number(month) - 1, 1));
    })();
    function isSameMonth(date) {
        return year === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date).toString() && month === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthHuman"])(date).toString();
    }
    const maxDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMin"])(currentMonthMaxDays, maxDate && isSameMonth(maxDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDate"])(maxDate));
    const minDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMax"])(1, minDate && isSameMonth(minDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDate"])(minDate));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        max: maxDay,
        min: minDay,
        name: "day",
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/MonthInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonthInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/utils.js [app-client] (ecmascript)");
;
;
;
;
function MonthInput({ maxDate, minDate, year, ...otherProps }) {
    function isSameYear(date) {
        return date && year === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date).toString();
    }
    const maxMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMin"])(12, maxDate && isSameYear(maxDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthHuman"])(maxDate));
    const minMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMax"])(1, minDate && isSameYear(minDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthHuman"])(minDate));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        max: maxMonth,
        min: minMonth,
        name: "month",
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/dateFormatter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatMonth",
    ()=>formatMonth,
    "formatShortMonth",
    ()=>formatShortMonth,
    "getFormatter",
    ()=>getFormatter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-client] (ecmascript)");
;
const formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        const localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        if (!formatterCache.has(localeWithDefault)) {
            formatterCache.set(localeWithDefault, new Map());
        }
        const formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) {
            formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
        }
        return formatterCacheLocale.get(options)(date);
    };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 * @returns {Date} Date with hour set to 12.
 */ function toSafeHour(date) {
    const safeDate = new Date(date);
    return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
    return (locale, date)=>getFormatter(options)(locale, toSafeHour(date));
}
const formatMonthOptions = {
    month: 'long'
};
const formatShortMonthOptions = {
    month: 'short'
};
const formatMonth = getSafeFormatter(formatMonthOptions);
const formatShortMonth = getSafeFormatter(formatShortMonthOptions);
}),
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/MonthSelect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonthSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/dateFormatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/utils.js [app-client] (ecmascript)");
;
;
;
;
;
function MonthSelect({ ariaLabel, autoFocus, className, disabled, inputRef, locale, maxDate, minDate, onChange, onKeyDown, placeholder = '--', required, short, value, year }) {
    function isSameYear(date) {
        return date && year === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date).toString();
    }
    const maxMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMin"])(12, maxDate && isSameYear(maxDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthHuman"])(maxDate));
    const minMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMax"])(1, minDate && isSameYear(minDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthHuman"])(minDate));
    const dates = [
        ...Array(12)
    ].map((_el, index)=>new Date(2019, index, 1));
    const name = 'month';
    const formatter = short ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatShortMonth"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMonth"];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("select", {
        "aria-label": ariaLabel,
        // biome-ignore lint/a11y/noAutofocus: This is up to developers' decision
        autoFocus: autoFocus,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${className}__input`, `${className}__${name}`),
        "data-input": "true",
        "data-select": "true",
        disabled: disabled,
        name: name,
        onChange: onChange,
        onKeyDown: onKeyDown,
        // Assertion is needed for React 18 compatibility
        ref: inputRef,
        required: required,
        value: value !== null ? value : '',
        children: [
            !value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("option", {
                value: "",
                children: placeholder
            }),
            dates.map((date)=>{
                const month = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthHuman"])(date);
                const disabled = month < minMonth || month > maxMonth;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("option", {
                    disabled: disabled,
                    value: month,
                    children: formatter(locale, date)
                }, month);
            })
        ]
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/YearInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>YearInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/utils.js [app-client] (ecmascript)");
;
;
;
;
function YearInput({ maxDate, minDate, placeholder = '----', valueType, ...otherProps }) {
    const maxYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMin"])(275760, maxDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(maxDate));
    const minYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMax"])(1, minDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(minDate));
    const yearStep = (()=>{
        if (valueType === 'century') {
            return 10;
        }
        return 1;
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        max: maxYear,
        min: minYear,
        name: "year",
        placeholder: placeholder,
        step: yearStep,
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/dates.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convert12to24",
    ()=>convert12to24,
    "convert24to12",
    ()=>convert24to12
]);
function convert12to24(hour12, amPm) {
    let hour24 = Number(hour12);
    if (amPm === 'am' && hour24 === 12) {
        hour24 = 0;
    } else if (amPm === 'pm' && hour24 < 12) {
        hour24 += 12;
    }
    return hour24;
}
function convert24to12(hour24) {
    const hour12 = Number(hour24) % 12 || 12;
    return [
        hour12,
        Number(hour24) < 12 ? 'am' : 'pm'
    ];
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/dateFormatter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFormatter",
    ()=>getFormatter,
    "getNumberFormatter",
    ()=>getNumberFormatter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-client] (ecmascript)");
;
const formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        const localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        if (!formatterCache.has(localeWithDefault)) {
            formatterCache.set(localeWithDefault, new Map());
        }
        const formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) {
            formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
        }
        return formatterCacheLocale.get(options)(date);
    };
}
const numberFormatterCache = new Map();
function getNumberFormatter(options) {
    return (locale, number)=>{
        const localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        if (!numberFormatterCache.has(localeWithDefault)) {
            numberFormatterCache.set(localeWithDefault, new Map());
        }
        const numberFormatterCacheLocale = numberFormatterCache.get(localeWithDefault);
        if (!numberFormatterCacheLocale.has(options)) {
            numberFormatterCacheLocale.set(options, new Intl.NumberFormat(localeWithDefault || undefined, options).format);
        }
        return numberFormatterCacheLocale.get(options)(number);
    };
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAmPmLabels",
    ()=>getAmPmLabels,
    "safeMax",
    ()=>safeMax,
    "safeMin",
    ()=>safeMin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/dateFormatter.js [app-client] (ecmascript)");
;
const nines = [
    '9',
    '٩'
];
const ninesRegExp = new RegExp(`[${nines.join('')}]`);
const amPmFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFormatter"])({
    hour: 'numeric'
});
function getAmPmLabels(locale) {
    const amString = amPmFormatter(locale, new Date(2017, 0, 1, 9));
    const pmString = amPmFormatter(locale, new Date(2017, 0, 1, 21));
    const [am1, am2] = amString.split(ninesRegExp);
    const [pm1, pm2] = pmString.split(ninesRegExp);
    if (pm2 !== undefined) {
        // If pm2 is undefined, nine was not found in pmString - this locale is not using 12-hour time
        if (am1 !== pm1) {
            return [
                am1,
                pm1
            ].map((el)=>el.trim());
        }
        if (am2 !== pm2) {
            return [
                am2,
                pm2
            ].map((el)=>el.trim());
        }
    }
    // Fallback
    return [
        'AM',
        'PM'
    ];
}
function isValidNumber(num) {
    return num !== null && num !== false && !Number.isNaN(Number(num));
}
function safeMin(...args) {
    return Math.min(...args.filter(isValidNumber));
}
function safeMax(...args) {
    return Math.max(...args.filter(isValidNumber));
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/AmPm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AmPm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/dates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-client] (ecmascript)");
;
;
;
;
;
function AmPm({ ariaLabel, autoFocus, className, disabled, inputRef, locale, maxTime, minTime, onChange, onKeyDown, required, value }) {
    const amDisabled = minTime ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convert24to12"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(minTime))[1] === 'pm' : false;
    const pmDisabled = maxTime ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convert24to12"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(maxTime))[1] === 'am' : false;
    const name = 'amPm';
    const [amLabel, pmLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAmPmLabels"])(locale);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("select", {
        "aria-label": ariaLabel,
        // biome-ignore lint/a11y/noAutofocus: This is up to developers' decision
        autoFocus: autoFocus,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${className}__input`, `${className}__${name}`),
        "data-input": "true",
        "data-select": "true",
        disabled: disabled,
        name: name,
        onChange: onChange,
        onKeyDown: onKeyDown,
        // Assertion is needed for React 18 compatibility
        ref: inputRef,
        required: required,
        value: value !== null ? value : '',
        children: [
            !value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("option", {
                value: "",
                children: "--"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("option", {
                disabled: amDisabled,
                value: "am",
                children: amLabel
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("option", {
                disabled: pmDisabled,
                value: "pm",
                children: pmLabel
            })
        ]
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/update-input-width/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
;
const isBrowser = typeof window !== 'undefined';
const useIsomorphicLayoutEffect = isBrowser ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
const isIEOrEdgeLegacy = isBrowser && /(MSIE|Trident\/|Edge\/)/.test(navigator.userAgent);
const isFirefox = isBrowser && /Firefox/.test(navigator.userAgent);
function onFocus(event) {
    const { target } = event;
    if (isIEOrEdgeLegacy) {
        requestAnimationFrame(()=>target.select());
    } else {
        target.select();
    }
}
function updateInputWidthOnLoad(element) {
    if (document.readyState === 'complete') {
        return;
    }
    function onLoad() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    }
    window.addEventListener('load', onLoad);
}
function updateInputWidthOnFontLoad(element) {
    if (!document.fonts) {
        return;
    }
    const font = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontShorthand"])(element);
    if (!font) {
        return;
    }
    const isFontLoaded = document.fonts.check(font);
    if (isFontLoaded) {
        return;
    }
    function onLoadingDone() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    }
    document.fonts.addEventListener('loadingdone', onLoadingDone);
}
function getSelectionString(input) {
    /**
     * window.getSelection().toString() returns empty string in IE11 and Firefox,
     * so alternatives come first.
     */ if (input && 'selectionStart' in input && input.selectionStart !== null && 'selectionEnd' in input && input.selectionEnd !== null) {
        return input.value.slice(input.selectionStart, input.selectionEnd);
    }
    if ('getSelection' in window) {
        const selection = window.getSelection();
        return selection === null || selection === void 0 ? void 0 : selection.toString();
    }
    return null;
}
function makeOnKeyPress(maxLength) {
    if (maxLength === null) {
        return undefined;
    }
    /**
     * Prevents keystrokes that would not produce a number or when value after keystroke would
     * exceed maxLength.
     */ return function onKeyPress(event) {
        if (isFirefox) {
            // See https://github.com/wojtekmaj/react-time-picker/issues/92
            return;
        }
        const { key, target: input } = event;
        const { value } = input;
        const isNumberKey = key.length === 1 && /\d/.test(key);
        const selection = getSelectionString(input);
        if (!isNumberKey || !(selection || value.length < maxLength)) {
            event.preventDefault();
        }
    };
}
function Input({ ariaLabel, autoFocus, className, disabled, inputRef, max, min, name, nameForClass, onChange, onKeyDown, onKeyUp, placeholder = '--', required, showLeadingZeros, step, value }) {
    useIsomorphicLayoutEffect({
        "Input.useIsomorphicLayoutEffect": ()=>{
            if (!inputRef || !inputRef.current) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputRef.current);
            updateInputWidthOnLoad(inputRef.current);
            updateInputWidthOnFontLoad(inputRef.current);
        }
    }["Input.useIsomorphicLayoutEffect"], [
        inputRef,
        value
    ]);
    const hasLeadingZero = showLeadingZeros && value && Number(value) < 10 && (value === '0' || !value.toString().startsWith('0'));
    const maxLength = max ? max.toString().length : null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            hasLeadingZero ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: `${className}__leadingZero`,
                children: "0"
            }) : null,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                "aria-label": ariaLabel,
                autoComplete: "off",
                // biome-ignore lint/a11y/noAutofocus: This is up to developers' decision
                autoFocus: autoFocus,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${className}__input`, `${className}__${nameForClass || name}`, hasLeadingZero && `${className}__input--hasLeadingZero`),
                "data-input": "true",
                disabled: disabled,
                inputMode: "numeric",
                max: max,
                min: min,
                name: name,
                onChange: onChange,
                onFocus: onFocus,
                onKeyDown: onKeyDown,
                onKeyPress: makeOnKeyPress(maxLength),
                onKeyUp: (event)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event.target);
                    if (onKeyUp) {
                        onKeyUp(event);
                    }
                },
                placeholder: placeholder,
                // Assertion is needed for React 18 compatibility
                ref: inputRef,
                required: required,
                step: step,
                type: "number",
                value: value !== null ? value : ''
            })
        ]
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Hour12Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hour12Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/dates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-client] (ecmascript)");
;
;
;
;
;
function Hour12Input({ amPm, maxTime, minTime, value, ...otherProps }) {
    const maxHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMin"])(12, maxTime && (()=>{
        const [maxHourResult, maxAmPm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convert24to12"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(maxTime));
        if (maxAmPm !== amPm) {
            // pm is always after am, so we should ignore validation
            return null;
        }
        return maxHourResult;
    })());
    const minHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMax"])(1, minTime && (()=>{
        const [minHourResult, minAmPm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convert24to12"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(minTime));
        if (// pm is always after am, so we should ignore validation
        minAmPm !== amPm || // If minHour is 12 am/pm, user should be able to enter 12, 1, ..., 11.
        minHourResult === 12) {
            return null;
        }
        return minHourResult;
    })());
    const value12 = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convert24to12"])(value)[0].toString() : '';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        max: maxHour,
        min: minHour,
        name: "hour12",
        nameForClass: "hour",
        value: value12,
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Hour24Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hour24Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-client] (ecmascript)");
;
;
;
;
function Hour24Input({ maxTime, minTime, ...otherProps }) {
    const maxHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMin"])(23, maxTime && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(maxTime));
    const minHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMax"])(0, minTime && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(minTime));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        max: maxHour,
        min: minHour,
        name: "hour24",
        nameForClass: "hour",
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/MinuteInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MinuteInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-client] (ecmascript)");
;
;
;
;
function MinuteInput({ hour, maxTime, minTime, showLeadingZeros = true, ...otherProps }) {
    function isSameHour(date) {
        return hour === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(date).toString();
    }
    const maxMinute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMin"])(59, maxTime && isSameHour(maxTime) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(maxTime));
    const minMinute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMax"])(0, minTime && isSameHour(minTime) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(minTime));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        max: maxMinute,
        min: minMinute,
        name: "minute",
        showLeadingZeros: showLeadingZeros,
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/SecondInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SecondInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-client] (ecmascript)");
;
;
;
;
function SecondInput({ hour, maxTime, minTime, minute, showLeadingZeros = true, ...otherProps }) {
    function isSameMinute(date) {
        return hour === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(date).toString() && minute === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(date).toString();
    }
    const maxSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMin"])(59, maxTime && isSameMinute(maxTime) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(maxTime));
    const minSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMax"])(0, minTime && isSameMinute(minTime) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(minTime));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        max: maxSecond,
        min: minSecond,
        name: "second",
        showLeadingZeros: showLeadingZeros,
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimeInput/NativeInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NativeInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
;
;
function NativeInput({ ariaLabel, disabled, maxDate, minDate, name, onChange, required, value, valueType }) {
    const nativeValueParser = (()=>{
        switch(valueType){
            case 'hour':
                return (receivedValue)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOLocalDate"])(receivedValue)}T${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(receivedValue)}:00`;
            case 'minute':
                return (receivedValue)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOLocalDate"])(receivedValue)}T${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHoursMinutes"])(receivedValue)}`;
            case 'second':
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOLocalDateTime"];
            default:
                throw new Error('Invalid valueType');
        }
    })();
    const step = (()=>{
        switch(valueType){
            case 'hour':
                return 3600;
            case 'minute':
                return 60;
            case 'second':
                return 1;
            default:
                throw new Error('Invalid valueType');
        }
    })();
    function stopPropagation(event) {
        event.stopPropagation();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
        "aria-label": ariaLabel,
        disabled: disabled,
        hidden: true,
        max: maxDate ? nativeValueParser(maxDate) : undefined,
        min: minDate ? nativeValueParser(minDate) : undefined,
        name: name,
        onChange: onChange,
        onFocus: stopPropagation,
        required: required,
        step: step,
        style: {
            visibility: 'hidden',
            position: 'absolute',
            zIndex: '-999'
        },
        type: "datetime-local",
        value: value ? nativeValueParser(value) : ''
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/Divider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Divider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
function Divider({ children }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: "react-datetime-picker__inputGroup__divider",
        children: children
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/dateFormatter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "getFormatter",
    ()=>getFormatter,
    "getNumberFormatter",
    ()=>getNumberFormatter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-client] (ecmascript)");
;
const formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        const localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        if (!formatterCache.has(localeWithDefault)) {
            formatterCache.set(localeWithDefault, new Map());
        }
        const formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) {
            formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
        }
        return formatterCacheLocale.get(options)(date);
    };
}
const numberFormatterCache = new Map();
function getNumberFormatter(options) {
    return (locale, number)=>{
        const localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        if (!numberFormatterCache.has(localeWithDefault)) {
            numberFormatterCache.set(localeWithDefault, new Map());
        }
        const numberFormatterCacheLocale = numberFormatterCache.get(localeWithDefault);
        if (!numberFormatterCacheLocale.has(options)) {
            numberFormatterCacheLocale.set(options, new Intl.NumberFormat(localeWithDefault || undefined, options).format);
        }
        return numberFormatterCacheLocale.get(options)(number);
    };
}
const formatDateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};
const formatDate = getFormatter(formatDateOptions);
}),
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/dates.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convert12to24",
    ()=>convert12to24,
    "convert24to12",
    ()=>convert24to12
]);
function convert12to24(hour12, amPm) {
    let hour24 = Number(hour12);
    if (amPm === 'am' && hour24 === 12) {
        hour24 = 0;
    } else if (amPm === 'pm' && hour24 < 12) {
        hour24 += 12;
    }
    return hour24;
}
function convert24to12(hour24) {
    const hour12 = Number(hour24) % 12 || 12;
    return [
        hour12,
        Number(hour24) < 12 ? 'am' : 'pm'
    ];
}
}),
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "between",
    ()=>between,
    "getAmPmLabels",
    ()=>getAmPmLabels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/dateFormatter.js [app-client] (ecmascript)");
;
function between(value, min, max) {
    if (min && min > value) {
        return min;
    }
    if (max && max < value) {
        return max;
    }
    return value;
}
const nines = [
    '9',
    '٩'
];
const ninesRegExp = new RegExp(`[${nines.join('')}]`);
const amPmFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFormatter"])({
    hour: 'numeric'
});
function getAmPmLabels(locale) {
    const amString = amPmFormatter(locale, new Date(2017, 0, 1, 9));
    const pmString = amPmFormatter(locale, new Date(2017, 0, 1, 21));
    const [am1, am2] = amString.split(ninesRegExp);
    const [pm1, pm2] = pmString.split(ninesRegExp);
    if (pm2 !== undefined) {
        // If pm2 is undefined, nine was not found in pmString - this locale is not using 12-hour time
        if (am1 !== pm1) {
            return [
                am1,
                pm1
            ].map((el)=>el.trim());
        }
        if (am2 !== pm2) {
            return [
                am2,
                pm2
            ].map((el)=>el.trim());
        }
    }
    // Fallback
    return [
        'AM',
        'PM'
    ];
}
}),
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimeInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DateTimeInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$DayInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/DayInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$MonthInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/MonthInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$MonthSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/MonthSelect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$YearInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/YearInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$AmPm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/AmPm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Hour12Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Hour12Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Hour24Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Hour24Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$MinuteInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/MinuteInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$SecondInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/SecondInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimeInput$2f$NativeInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimeInput/NativeInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/dateFormatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/dates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/utils.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const getFormatterOptionsCache = {};
const defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
const defaultMaxDate = new Date(8.64e15);
const allViews = [
    'hour',
    'minute',
    'second'
];
function toDate(value) {
    if (value instanceof Date) {
        return value;
    }
    return new Date(value);
}
function isSameDate(date, year, month, day) {
    return year === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date).toString() && month === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthHuman"])(date).toString() && day === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDate"])(date).toString();
}
function getValue(value, index) {
    const rawValue = Array.isArray(value) ? value[index] : value;
    if (!rawValue) {
        return null;
    }
    const valueDate = toDate(rawValue);
    if (Number.isNaN(valueDate.getTime())) {
        throw new Error(`Invalid date: ${value}`);
    }
    return valueDate;
}
function getDetailValue({ value, minDate, maxDate }, index) {
    const valuePiece = getValue(value, index);
    if (!valuePiece) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["between"])(valuePiece, minDate, maxDate);
}
const getDetailValueFrom = (args)=>getDetailValue(args, 0);
function isInternalInput(element) {
    return element.dataset.input === 'true';
}
function findInput(element, property) {
    let nextElement = element;
    do {
        nextElement = nextElement[property];
    }while (nextElement && !isInternalInput(nextElement))
    return nextElement;
}
function focus(element) {
    if (element) {
        element.focus();
    }
}
function renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances) {
    const usedFunctions = [];
    const pattern = new RegExp(Object.keys(elementFunctions).map((el)=>`${el}+`).join('|'), 'g');
    const matches = placeholder.match(pattern);
    return placeholder.split(pattern).reduce((arr, element, index)=>{
        const divider = element && // biome-ignore lint/suspicious/noArrayIndexKey: index is stable here
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: element
        }, `separator_${index}`);
        arr.push(divider);
        const currentMatch = matches === null || matches === void 0 ? void 0 : matches[index];
        if (currentMatch) {
            const renderFunction = elementFunctions[currentMatch] || elementFunctions[Object.keys(elementFunctions).find((elementFunction)=>currentMatch.match(elementFunction))];
            if (!renderFunction) {
                return arr;
            }
            if (!allowMultipleInstances && usedFunctions.includes(renderFunction)) {
                arr.push(currentMatch);
            } else {
                arr.push(renderFunction(currentMatch, index));
                usedFunctions.push(renderFunction);
            }
        }
        return arr;
    }, []);
}
const formatNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumberFormatter"])({
    useGrouping: false
});
function DateTimeInput({ amPmAriaLabel, autoFocus, className, dayAriaLabel, dayPlaceholder, disabled, format, hourAriaLabel, hourPlaceholder, isWidgetOpen: isWidgetOpenProps, locale, maxDate, maxDetail = 'minute', minDate, minuteAriaLabel, minutePlaceholder, monthAriaLabel, monthPlaceholder, name = 'datetime', nativeInputAriaLabel, onChange: onChangeProps, onInvalidChange, required, secondAriaLabel, secondPlaceholder, showLeadingZeros, value: valueProps, yearAriaLabel, yearPlaceholder }) {
    const [amPm, setAmPm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [day, setDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hour, setHour] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [minute, setMinute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [second, setSecond] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const amPmInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const yearInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const monthInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const monthSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dayInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hour12Input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hour24Input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const minuteInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const secondInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isWidgetOpen, setIsWidgetOpenOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isWidgetOpenProps);
    const lastPressedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateTimeInput.useEffect": ()=>{
            setIsWidgetOpenOpen(isWidgetOpenProps);
        }
    }["DateTimeInput.useEffect"], [
        isWidgetOpenProps
    ]);
    // biome-ignore lint/correctness/useExhaustiveDependencies: useEffect intentionally triggered on props change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateTimeInput.useEffect": ()=>{
            const nextValue = getDetailValueFrom({
                value: valueProps,
                minDate,
                maxDate
            });
            if (nextValue) {
                setAmPm((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convert24to12"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(nextValue))[1]);
                setYear((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(nextValue).toString());
                setMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthHuman"])(nextValue).toString());
                setDay((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDate"])(nextValue).toString());
                setHour((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(nextValue).toString());
                setMinute((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(nextValue).toString());
                setSecond((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(nextValue).toString());
                setValue(toDate(nextValue));
            } else {
                setAmPm(null);
                setYear(null);
                setMonth(null);
                setDay(null);
                setHour(null);
                setMinute(null);
                setSecond(null);
                setValue(null);
            }
        }
    }["DateTimeInput.useEffect"], [
        valueProps,
        minDate,
        maxDate,
        // Toggling widget visibility resets values
        isWidgetOpen
    ]);
    const valueType = maxDetail;
    const formatTime = (()=>{
        const level = allViews.indexOf(maxDetail);
        const formatterOptions = getFormatterOptionsCache[level] || (()=>{
            const options = {
                hour: 'numeric'
            };
            if (level >= 1) {
                options.minute = 'numeric';
            }
            if (level >= 2) {
                options.second = 'numeric';
            }
            getFormatterOptionsCache[level] = options;
            return options;
        })();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFormatter"])(formatterOptions);
    })();
    const datePlaceholder = (()=>{
        const year = 2017;
        const monthIndex = 11;
        const day = 11;
        const date = new Date(year, monthIndex, day);
        const formattedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(locale, date);
        const datePieces = [
            'year',
            'month',
            'day'
        ];
        const datePieceReplacements = [
            'y',
            'M',
            'd'
        ];
        function formatDatePiece(name, dateToFormat) {
            const formatterOptions = getFormatterOptionsCache[name] || (()=>{
                const options = {
                    [name]: 'numeric'
                };
                getFormatterOptionsCache[name] = options;
                return options;
            })();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFormatter"])(formatterOptions)(locale, dateToFormat).match(/\d{1,}/);
        }
        let placeholder = formattedDate;
        datePieces.forEach((datePiece, index)=>{
            const match = formatDatePiece(datePiece, date);
            if (match) {
                const formattedDatePiece = match[0];
                const datePieceReplacement = datePieceReplacements[index];
                placeholder = placeholder.replace(formattedDatePiece, datePieceReplacement);
            }
        });
        // See https://github.com/wojtekmaj/react-date-picker/issues/396
        placeholder = placeholder.replace('17', 'y');
        return placeholder;
    })();
    const timePlaceholder = (()=>{
        const hour24 = 21;
        const hour12 = 9;
        const minute = 13;
        const second = 14;
        const date = new Date(2017, 0, 1, hour24, minute, second);
        return formatTime(locale, date).replace(formatNumber(locale, hour12), 'h').replace(formatNumber(locale, hour24), 'H').replace(formatNumber(locale, minute), 'mm').replace(formatNumber(locale, second), 'ss').replace(new RegExp((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAmPmLabels"])(locale).join('|')), 'a');
    })();
    const placeholder = format || `${datePlaceholder}\u00a0${timePlaceholder}`;
    const dateDivider = (()=>{
        const dividers = datePlaceholder.match(/[^0-9a-z]/i);
        return dividers ? dividers[0] : null;
    })();
    const timeDivider = (()=>{
        const dividers = timePlaceholder.match(/[^0-9a-z]/i);
        return dividers ? dividers[0] : null;
    })();
    const maxTime = (()=>{
        if (!maxDate) {
            return undefined;
        }
        if (!isSameDate(maxDate, year, month, day)) {
            return undefined;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHoursMinutesSeconds"])(maxDate || defaultMaxDate);
    })();
    const minTime = (()=>{
        if (!minDate) {
            return undefined;
        }
        if (!isSameDate(minDate, year, month, day)) {
            return undefined;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHoursMinutesSeconds"])(minDate || defaultMinDate);
    })();
    function onClick(event) {
        if (event.target === event.currentTarget) {
            // Wrapper was directly clicked
            const firstInput = event.target.children[1];
            focus(firstInput);
        }
    }
    function onKeyDown(event) {
        lastPressedKey.current = event.key;
        switch(event.key){
            case 'ArrowLeft':
            case 'ArrowRight':
            case dateDivider:
            case timeDivider:
                {
                    event.preventDefault();
                    const { target: input } = event;
                    const property = event.key === 'ArrowLeft' ? 'previousElementSibling' : 'nextElementSibling';
                    const nextInput = findInput(input, property);
                    focus(nextInput);
                    break;
                }
            default:
        }
    }
    function onKeyUp(event) {
        const { key, target: input } = event;
        const isLastPressedKey = lastPressedKey.current === key;
        if (!isLastPressedKey) {
            return;
        }
        const isNumberKey = !Number.isNaN(Number(key));
        if (!isNumberKey) {
            return;
        }
        const max = input.getAttribute('max');
        if (!max) {
            return;
        }
        const { value } = input;
        /**
         * Given 1, the smallest possible number the user could type by adding another digit is 10.
         * 10 would be a valid value given max = 12, so we won't jump to the next input.
         * However, given 2, smallers possible number would be 20, and thus keeping the focus in
         * this field doesn't make sense.
         */ if (Number(value) * 10 > Number(max) || value.length >= max.length) {
            const property = 'nextElementSibling';
            const nextInput = findInput(input, property);
            focus(nextInput);
        }
    }
    /**
     * Called after internal onChange. Checks input validity. If all fields are valid,
     * calls props.onChange.
     */ function onChangeExternal() {
        if (!onChangeProps) {
            return;
        }
        function filterBoolean(value) {
            return Boolean(value);
        }
        const formElements = [
            amPmInput.current,
            dayInput.current,
            monthInput.current,
            monthSelect.current,
            yearInput.current,
            hour12Input.current,
            hour24Input.current,
            minuteInput.current,
            secondInput.current
        ].filter(filterBoolean);
        const formElementsWithoutSelect = formElements.slice(1);
        const values = {};
        for (const formElement of formElements){
            values[formElement.name] = formElement.type === 'number' ? formElement.valueAsNumber : formElement.value;
        }
        const isEveryValueEmpty = formElementsWithoutSelect.every((formElement)=>!formElement.value);
        if (isEveryValueEmpty) {
            onChangeProps(null, false);
            return;
        }
        const isEveryValueFilled = formElements.every((formElement)=>formElement.value);
        const isEveryValueValid = formElements.every((formElement)=>formElement.validity.valid);
        if (isEveryValueFilled && isEveryValueValid) {
            const year = Number(values.year || new Date().getFullYear());
            const monthIndex = Number(values.month || 1) - 1;
            const day = Number(values.day || 1);
            const hour = Number(values.hour24 || values.hour12 && values.amPm && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convert12to24"])(values.hour12, values.amPm) || 0);
            const minute = Number(values.minute || 0);
            const second = Number(values.second || 0);
            const proposedValue = new Date();
            proposedValue.setFullYear(year, monthIndex, day);
            proposedValue.setHours(hour, minute, second, 0);
            onChangeProps(proposedValue, false);
            return;
        }
        if (!onInvalidChange) {
            return;
        }
        onInvalidChange();
    }
    /**
     * Called when non-native date input is changed.
     */ function onChange(event) {
        const { name, value } = event.target;
        switch(name){
            case 'amPm':
                setAmPm(value);
                break;
            case 'year':
                setYear(value);
                break;
            case 'month':
                setMonth(value);
                break;
            case 'day':
                setDay(value);
                break;
            case 'hour12':
                setHour(value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convert12to24"])(value, amPm || 'am').toString() : '');
                break;
            case 'hour24':
                setHour(value);
                break;
            case 'minute':
                setMinute(value);
                break;
            case 'second':
                setSecond(value);
                break;
        }
        onChangeExternal();
    }
    /**
     * Called when native date input is changed.
     */ function onChangeNative(event) {
        const { value } = event.target;
        if (!onChangeProps) {
            return;
        }
        const processedValue = (()=>{
            if (!value) {
                return null;
            }
            const [valueDate, valueTime] = value.split('T');
            const [yearString, monthString, dayString] = valueDate.split('-');
            const year = Number(yearString);
            const monthIndex = Number(monthString) - 1 || 0;
            const day = Number(dayString) || 1;
            const [hourString, minuteString, secondString] = valueTime.split(':');
            const hour = Number(hourString) || 0;
            const minute = Number(minuteString) || 0;
            const second = Number(secondString) || 0;
            const proposedValue = new Date();
            proposedValue.setFullYear(year, monthIndex, day);
            proposedValue.setHours(hour, minute, second, 0);
            return proposedValue;
        })();
        onChangeProps(processedValue, false);
    }
    const commonInputProps = {
        className,
        disabled,
        maxDate: maxDate || defaultMaxDate,
        minDate: minDate || defaultMinDate,
        onChange,
        onKeyDown,
        onKeyUp,
        // This is only for showing validity when editing
        required: Boolean(required || isWidgetOpen)
    };
    const commonTimeInputProps = {
        maxTime,
        minTime
    };
    function renderDay(currentMatch, index) {
        if (currentMatch && currentMatch.length > 2) {
            throw new Error(`Unsupported token: ${currentMatch}`);
        }
        const showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$DayInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...commonInputProps,
            ariaLabel: dayAriaLabel,
            autoFocus: index === 0 && autoFocus,
            inputRef: dayInput,
            month: month,
            placeholder: dayPlaceholder,
            showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
            value: day,
            year: year
        }, "day");
    }
    function renderMonth(currentMatch, index) {
        if (currentMatch && currentMatch.length > 4) {
            throw new Error(`Unsupported token: ${currentMatch}`);
        }
        if (currentMatch.length > 2) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$MonthSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...commonInputProps,
                ariaLabel: monthAriaLabel,
                autoFocus: index === 0 && autoFocus,
                inputRef: monthSelect,
                locale: locale,
                placeholder: monthPlaceholder,
                short: currentMatch.length === 3,
                value: month,
                year: year
            }, "month");
        }
        const showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$MonthInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...commonInputProps,
            ariaLabel: monthAriaLabel,
            autoFocus: index === 0 && autoFocus,
            inputRef: monthInput,
            placeholder: monthPlaceholder,
            showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
            value: month,
            year: year
        }, "month");
    }
    function renderYear(_currentMatch, index) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$YearInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...commonInputProps,
            ariaLabel: yearAriaLabel,
            autoFocus: index === 0 && autoFocus,
            inputRef: yearInput,
            placeholder: yearPlaceholder,
            value: year,
            valueType: "day"
        }, "year");
    }
    function renderHour12(currentMatch, index) {
        if (currentMatch && currentMatch.length > 2) {
            throw new Error(`Unsupported token: ${currentMatch}`);
        }
        const showLeadingZeros = currentMatch ? currentMatch.length === 2 : false;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Hour12Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...commonInputProps,
            ...commonTimeInputProps,
            amPm: amPm,
            ariaLabel: hourAriaLabel,
            autoFocus: index === 0 && autoFocus,
            inputRef: hour12Input,
            placeholder: hourPlaceholder,
            showLeadingZeros: showLeadingZeros,
            value: hour
        }, "hour12");
    }
    function renderHour24(currentMatch, index) {
        if (currentMatch && currentMatch.length > 2) {
            throw new Error(`Unsupported token: ${currentMatch}`);
        }
        const showLeadingZeros = currentMatch ? currentMatch.length === 2 : false;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Hour24Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...commonInputProps,
            ...commonTimeInputProps,
            ariaLabel: hourAriaLabel,
            autoFocus: index === 0 && autoFocus,
            inputRef: hour24Input,
            placeholder: hourPlaceholder,
            showLeadingZeros: showLeadingZeros,
            value: hour
        }, "hour24");
    }
    function renderHour(currentMatch, index) {
        if (/h/.test(currentMatch)) {
            return renderHour12(currentMatch, index);
        }
        return renderHour24(currentMatch, index);
    }
    function renderMinute(currentMatch, index) {
        if (currentMatch && currentMatch.length > 2) {
            throw new Error(`Unsupported token: ${currentMatch}`);
        }
        const showLeadingZeros = currentMatch ? currentMatch.length === 2 : false;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$MinuteInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...commonInputProps,
            ...commonTimeInputProps,
            ariaLabel: minuteAriaLabel,
            autoFocus: index === 0 && autoFocus,
            hour: hour,
            inputRef: minuteInput,
            placeholder: minutePlaceholder,
            showLeadingZeros: showLeadingZeros,
            value: minute
        }, "minute");
    }
    function renderSecond(currentMatch, index) {
        if (currentMatch && currentMatch.length > 2) {
            throw new Error(`Unsupported token: ${currentMatch}`);
        }
        const showLeadingZeros = currentMatch ? currentMatch.length === 2 : true;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$SecondInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...commonInputProps,
            ...commonTimeInputProps,
            ariaLabel: secondAriaLabel,
            autoFocus: index === 0 && autoFocus,
            hour: hour,
            inputRef: secondInput,
            minute: minute,
            placeholder: secondPlaceholder,
            showLeadingZeros: showLeadingZeros,
            value: second
        }, "second");
    }
    function renderAmPm(_currentMatch, index) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$AmPm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...commonInputProps,
            ...commonTimeInputProps,
            ariaLabel: amPmAriaLabel,
            autoFocus: index === 0 && autoFocus,
            inputRef: amPmInput,
            locale: locale,
            onChange: onChange,
            value: amPm
        }, "ampm");
    }
    function renderCustomInputsInternal() {
        const elementFunctions = {
            d: renderDay,
            M: renderMonth,
            y: renderYear,
            h: renderHour,
            H: renderHour,
            m: renderMinute,
            s: renderSecond,
            a: renderAmPm
        };
        const allowMultipleInstances = typeof format !== 'undefined';
        return renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances);
    }
    function renderNativeInput() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimeInput$2f$NativeInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ariaLabel: nativeInputAriaLabel,
            disabled: disabled,
            maxDate: maxDate || defaultMaxDate,
            minDate: minDate || defaultMinDate,
            name: name,
            onChange: onChangeNative,
            required: required,
            value: value,
            valueType: valueType
        }, "datetime");
    }
    return(// biome-ignore lint/a11y/useKeyWithClickEvents: This interaction is designed for mouse users only
    // biome-ignore lint/a11y/noStaticElementInteractions: This interaction is designed for mouse users only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: className,
        onClick: onClick,
        children: [
            renderNativeInput(),
            renderCustomInputsInternal()
        ]
    }));
}
}),
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimePicker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DateTimePicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$make$2d$event$2d$props$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/make-event-props/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$fit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-fit/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimeInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimeInput.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const baseClassName = 'react-datetime-picker';
const outsideActionEvents = [
    'mousedown',
    'focusin',
    'touchstart'
];
const allViews = [
    'hour',
    'minute',
    'second'
];
const iconProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 19,
    height: 19,
    viewBox: '0 0 19 19',
    stroke: 'black',
    strokeWidth: 2
};
const CalendarIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
    ...iconProps,
    "aria-hidden": "true",
    className: `${baseClassName}__calendar-button__icon ${baseClassName}__button__icon`,
    children: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("rect", {
            fill: "none",
            height: "15",
            width: "15",
            x: "2",
            y: "2"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("line", {
            x1: "6",
            x2: "6",
            y1: "0",
            y2: "4"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("line", {
            x1: "13",
            x2: "13",
            y1: "0",
            y2: "4"
        })
    ]
});
const ClearIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
    ...iconProps,
    "aria-hidden": "true",
    className: `${baseClassName}__clear-button__icon ${baseClassName}__button__icon`,
    children: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("line", {
            x1: "4",
            x2: "15",
            y1: "4",
            y2: "15"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("line", {
            x1: "15",
            x2: "4",
            y1: "4",
            y2: "15"
        })
    ]
});
function DateTimePicker(props) {
    const { amPmAriaLabel, autoFocus, calendarAriaLabel, calendarIcon = CalendarIcon, className, clearAriaLabel, clearIcon = ClearIcon, closeWidgets: shouldCloseWidgetsOnSelect = true, 'data-testid': dataTestid, dayAriaLabel, dayPlaceholder, disableCalendar, disableClock, disabled, format, hourAriaLabel, hourPlaceholder, id, isCalendarOpen: isCalendarOpenProps = null, isClockOpen: isClockOpenProps = null, locale, maxDate, maxDetail = 'minute', minDate, minuteAriaLabel, minutePlaceholder, monthAriaLabel, monthPlaceholder, name = 'datetime', nativeInputAriaLabel, onCalendarClose, onCalendarOpen, onChange: onChangeProps, onClockClose, onClockOpen, onFocus: onFocusProps, onInvalidChange, openWidgetsOnFocus = true, required, secondAriaLabel, secondPlaceholder, shouldCloseWidgets, shouldOpenWidgets, showLeadingZeros, value, yearAriaLabel, yearPlaceholder, ...otherProps } = props;
    const [isCalendarOpen, setIsCalendarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isCalendarOpenProps);
    const [isClockOpen, setIsClockOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isClockOpenProps);
    const wrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const calendarWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clockWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateTimePicker.useEffect": ()=>{
            setIsCalendarOpen(isCalendarOpenProps);
        }
    }["DateTimePicker.useEffect"], [
        isCalendarOpenProps
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateTimePicker.useEffect": ()=>{
            setIsClockOpen(isClockOpenProps);
        }
    }["DateTimePicker.useEffect"], [
        isClockOpenProps
    ]);
    function openCalendar({ reason }) {
        if (shouldOpenWidgets) {
            if (!shouldOpenWidgets({
                reason,
                widget: 'calendar'
            })) {
                return;
            }
        }
        setIsClockOpen(isClockOpen ? false : isClockOpen);
        setIsCalendarOpen(true);
        if (onCalendarOpen) {
            onCalendarOpen();
        }
    }
    const closeCalendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DateTimePicker.useCallback[closeCalendar]": ({ reason })=>{
            if (shouldCloseWidgets) {
                if (!shouldCloseWidgets({
                    reason,
                    widget: 'calendar'
                })) {
                    return;
                }
            }
            setIsCalendarOpen(false);
            if (onCalendarClose) {
                onCalendarClose();
            }
        }
    }["DateTimePicker.useCallback[closeCalendar]"], [
        onCalendarClose,
        shouldCloseWidgets
    ]);
    function toggleCalendar() {
        if (isCalendarOpen) {
            closeCalendar({
                reason: 'buttonClick'
            });
        } else {
            openCalendar({
                reason: 'buttonClick'
            });
        }
    }
    function openClock({ reason }) {
        if (shouldOpenWidgets) {
            if (!shouldOpenWidgets({
                reason,
                widget: 'clock'
            })) {
                return;
            }
        }
        setIsCalendarOpen(isCalendarOpen ? false : isCalendarOpen);
        setIsClockOpen(true);
        if (onClockOpen) {
            onClockOpen();
        }
    }
    const closeClock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DateTimePicker.useCallback[closeClock]": ({ reason })=>{
            if (shouldCloseWidgets) {
                if (!shouldCloseWidgets({
                    reason,
                    widget: 'clock'
                })) {
                    return;
                }
            }
            setIsClockOpen(false);
            if (onClockClose) {
                onClockClose();
            }
        }
    }["DateTimePicker.useCallback[closeClock]"], [
        onClockClose,
        shouldCloseWidgets
    ]);
    const closeWidgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DateTimePicker.useCallback[closeWidgets]": ({ reason })=>{
            closeCalendar({
                reason
            });
            closeClock({
                reason
            });
        }
    }["DateTimePicker.useCallback[closeWidgets]"], [
        closeCalendar,
        closeClock
    ]);
    function onChange(value, shouldCloseWidgets = shouldCloseWidgetsOnSelect) {
        if (shouldCloseWidgets) {
            closeWidgets({
                reason: 'select'
            });
        }
        if (onChangeProps) {
            onChangeProps(value);
        }
    }
    function onDateChange(nextValue, shouldCloseWidgets) {
        // React-Calendar passes an array of values when selectRange is enabled
        const [nextValueFrom] = Array.isArray(nextValue) ? nextValue : [
            nextValue
        ];
        const [valueFrom] = Array.isArray(value) ? value : [
            value
        ];
        if (valueFrom && nextValueFrom) {
            const valueFromDate = new Date(valueFrom);
            const nextValueFromWithHour = new Date(nextValueFrom);
            nextValueFromWithHour.setHours(valueFromDate.getHours(), valueFromDate.getMinutes(), valueFromDate.getSeconds(), valueFromDate.getMilliseconds());
            onChange(nextValueFromWithHour, shouldCloseWidgets);
        } else {
            onChange(nextValueFrom, shouldCloseWidgets);
        }
    }
    function onFocus(event) {
        if (onFocusProps) {
            onFocusProps(event);
        }
        if (// Internet Explorer still fires onFocus on disabled elements
        disabled || !openWidgetsOnFocus || event.target.dataset.select === 'true') {
            return;
        }
        switch(event.target.name){
            case 'day':
            case 'month':
            case 'year':
                {
                    if (isCalendarOpen) {
                        return;
                    }
                    openCalendar({
                        reason: 'focus'
                    });
                    break;
                }
            case 'hour12':
            case 'hour24':
            case 'minute':
            case 'second':
                {
                    if (isClockOpen) {
                        return;
                    }
                    openClock({
                        reason: 'focus'
                    });
                    break;
                }
            default:
        }
    }
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DateTimePicker.useCallback[onKeyDown]": (event)=>{
            if (event.key === 'Escape') {
                closeWidgets({
                    reason: 'escape'
                });
            }
        }
    }["DateTimePicker.useCallback[onKeyDown]"], [
        closeWidgets
    ]);
    function clear() {
        onChange(null);
    }
    function stopPropagation(event) {
        event.stopPropagation();
    }
    const onOutsideAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DateTimePicker.useCallback[onOutsideAction]": (event)=>{
            const { current: wrapperEl } = wrapper;
            const { current: calendarWrapperEl } = calendarWrapper;
            const { current: clockWrapperEl } = clockWrapper;
            // Try event.composedPath first to handle clicks inside a Shadow DOM.
            const target = 'composedPath' in event ? event.composedPath()[0] : event.target;
            if (target && wrapperEl && !wrapperEl.contains(target) && (!calendarWrapperEl || !calendarWrapperEl.contains(target)) && (!clockWrapperEl || !clockWrapperEl.contains(target))) {
                closeWidgets({
                    reason: 'outsideAction'
                });
            }
        }
    }["DateTimePicker.useCallback[onOutsideAction]"], [
        closeWidgets
    ]);
    const handleOutsideActionListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DateTimePicker.useCallback[handleOutsideActionListeners]": (shouldListen = isCalendarOpen || isClockOpen)=>{
            for (const event of outsideActionEvents){
                if (shouldListen) {
                    document.addEventListener(event, onOutsideAction);
                } else {
                    document.removeEventListener(event, onOutsideAction);
                }
            }
            if (shouldListen) {
                document.addEventListener('keydown', onKeyDown);
            } else {
                document.removeEventListener('keydown', onKeyDown);
            }
        }
    }["DateTimePicker.useCallback[handleOutsideActionListeners]"], [
        isCalendarOpen,
        isClockOpen,
        onOutsideAction,
        onKeyDown
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateTimePicker.useEffect": ()=>{
            handleOutsideActionListeners();
            return ({
                "DateTimePicker.useEffect": ()=>{
                    handleOutsideActionListeners(false);
                }
            })["DateTimePicker.useEffect"];
        }
    }["DateTimePicker.useEffect"], [
        handleOutsideActionListeners
    ]);
    function renderInputs() {
        const [valueFrom] = Array.isArray(value) ? value : [
            value
        ];
        const ariaLabelProps = {
            amPmAriaLabel,
            dayAriaLabel,
            hourAriaLabel,
            minuteAriaLabel,
            monthAriaLabel,
            nativeInputAriaLabel,
            secondAriaLabel,
            yearAriaLabel
        };
        const placeholderProps = {
            dayPlaceholder,
            hourPlaceholder,
            minutePlaceholder,
            monthPlaceholder,
            secondPlaceholder,
            yearPlaceholder
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: `${baseClassName}__wrapper`,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimeInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...ariaLabelProps,
                    ...placeholderProps,
                    autoFocus: autoFocus,
                    className: `${baseClassName}__inputGroup`,
                    disabled: disabled,
                    format: format,
                    isWidgetOpen: isCalendarOpen || isClockOpen,
                    locale: locale,
                    maxDate: maxDate,
                    maxDetail: maxDetail,
                    minDate: minDate,
                    name: name,
                    onChange: onChange,
                    onInvalidChange: onInvalidChange,
                    required: required,
                    showLeadingZeros: showLeadingZeros,
                    value: valueFrom
                }),
                clearIcon !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    "aria-label": clearAriaLabel,
                    className: `${baseClassName}__clear-button ${baseClassName}__button`,
                    disabled: disabled,
                    onClick: clear,
                    onFocus: stopPropagation,
                    type: "button",
                    children: typeof clearIcon === 'function' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(clearIcon) : clearIcon
                }),
                calendarIcon !== null && !disableCalendar && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    "aria-expanded": isCalendarOpen || false,
                    "aria-label": calendarAriaLabel,
                    className: `${baseClassName}__calendar-button ${baseClassName}__button`,
                    disabled: disabled,
                    onClick: toggleCalendar,
                    onFocus: stopPropagation,
                    type: "button",
                    children: typeof calendarIcon === 'function' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(calendarIcon) : calendarIcon
                })
            ]
        });
    }
    function renderCalendar() {
        if (isCalendarOpen === null || disableCalendar) {
            return null;
        }
        const { calendarProps, portalContainer, value } = props;
        const className = `${baseClassName}__calendar`;
        const classNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, `${className}--${isCalendarOpen ? 'open' : 'closed'}`);
        const calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            onChange: (value)=>onDateChange(value),
            value: value,
            ...calendarProps
        });
        return portalContainer ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: calendarWrapper,
            className: classNames,
            children: calendar
        }), portalContainer) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$fit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ref: (ref)=>{
                    if (ref && !isCalendarOpen) {
                        ref.removeAttribute('style');
                    }
                },
                className: classNames,
                children: calendar
            })
        });
    }
    function renderClock() {
        if (isClockOpen === null || disableClock) {
            return null;
        }
        const { clockProps, maxDetail = 'minute', portalContainer, value } = props;
        const className = `${baseClassName}__clock`;
        const classNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, `${className}--${isClockOpen ? 'open' : 'closed'}`);
        const [valueFrom] = Array.isArray(value) ? value : [
            value
        ];
        const maxDetailIndex = allViews.indexOf(maxDetail);
        const clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            locale: locale,
            renderMinuteHand: maxDetailIndex > 0,
            renderSecondHand: maxDetailIndex > 1,
            value: valueFrom,
            ...clockProps
        });
        return portalContainer ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: clockWrapper,
            className: classNames,
            children: clock
        }), portalContainer) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$fit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ref: (ref)=>{
                    if (ref && !isClockOpen) {
                        ref.removeAttribute('style');
                    }
                },
                className: classNames,
                children: clock
            })
        });
    }
    const eventProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DateTimePicker.useMemo[eventProps]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$make$2d$event$2d$props$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(otherProps)
    }["DateTimePicker.useMemo[eventProps]"], // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [
        otherProps
    ]);
    return(// biome-ignore lint/a11y/noStaticElementInteractions: False positive caused by non interactive wrapper listening for bubbling events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(baseClassName, `${baseClassName}--${isCalendarOpen || isClockOpen ? 'open' : 'closed'}`, `${baseClassName}--${disabled ? 'disabled' : 'enabled'}`, className),
        "data-testid": dataTestid,
        id: id,
        ...eventProps,
        onFocus: onFocus,
        ref: wrapper,
        children: [
            renderInputs(),
            renderCalendar(),
            renderClock()
        ]
    }));
}
}),
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimePicker.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveFetch",
    ()=>resolveFetch
]);
const resolveFetch = (customFetch)=>{
    if (customFetch) {
        return (...args)=>customFetch(...args);
    }
    return (...args)=>fetch(...args);
}; //# sourceMappingURL=helper.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Base error for Supabase Edge Function invocations.
 *
 * @example
 * ```ts
 * import { FunctionsError } from '@supabase/functions-js'
 *
 * throw new FunctionsError('Unexpected error invoking function', 'FunctionsError', {
 *   requestId: 'abc123',
 * })
 * ```
 */ __turbopack_context__.s([
    "FunctionRegion",
    ()=>FunctionRegion,
    "FunctionsError",
    ()=>FunctionsError,
    "FunctionsFetchError",
    ()=>FunctionsFetchError,
    "FunctionsHttpError",
    ()=>FunctionsHttpError,
    "FunctionsRelayError",
    ()=>FunctionsRelayError
]);
class FunctionsError extends Error {
    constructor(message, name = 'FunctionsError', context){
        super(message);
        this.name = name;
        this.context = context;
    }
}
class FunctionsFetchError extends FunctionsError {
    constructor(context){
        super('Failed to send a request to the Edge Function', 'FunctionsFetchError', context);
    }
}
class FunctionsRelayError extends FunctionsError {
    constructor(context){
        super('Relay Error invoking the Edge Function', 'FunctionsRelayError', context);
    }
}
class FunctionsHttpError extends FunctionsError {
    constructor(context){
        super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', context);
    }
}
var FunctionRegion;
(function(FunctionRegion) {
    FunctionRegion["Any"] = "any";
    FunctionRegion["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion["ApSouth1"] = "ap-south-1";
    FunctionRegion["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion["CaCentral1"] = "ca-central-1";
    FunctionRegion["EuCentral1"] = "eu-central-1";
    FunctionRegion["EuWest1"] = "eu-west-1";
    FunctionRegion["EuWest2"] = "eu-west-2";
    FunctionRegion["EuWest3"] = "eu-west-3";
    FunctionRegion["SaEast1"] = "sa-east-1";
    FunctionRegion["UsEast1"] = "us-east-1";
    FunctionRegion["UsWest1"] = "us-west-1";
    FunctionRegion["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {})); //# sourceMappingURL=types.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionsClient",
    ()=>FunctionsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/types.js [app-client] (ecmascript)");
;
;
;
class FunctionsClient {
    /**
     * Creates a new Functions client bound to an Edge Functions URL.
     *
     * @example
     * ```ts
     * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
     *
     * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
     *   headers: { apikey: 'public-anon-key' },
     *   region: FunctionRegion.UsEast1,
     * })
     * ```
     */ constructor(url, { headers = {}, customFetch, region = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionRegion"].Any } = {}){
        this.url = url;
        this.headers = headers;
        this.region = region;
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFetch"])(customFetch);
    }
    /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     * @example
     * ```ts
     * functions.setAuth(session.access_token)
     * ```
     */ setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     * @example
     * ```ts
     * const { data, error } = await functions.invoke('hello-world', {
     *   body: { name: 'Ada' },
     * })
     * ```
     */ invoke(functionName_1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*(functionName, options = {}) {
            var _a;
            let timeoutId;
            let timeoutController;
            try {
                const { headers, method, body: functionArgs, signal, timeout } = options;
                let _headers = {};
                let { region } = options;
                if (!region) {
                    region = this.region;
                }
                // Add region as query parameter using URL API
                const url = new URL(`${this.url}/${functionName}`);
                if (region && region !== 'any') {
                    _headers['x-region'] = region;
                    url.searchParams.set('forceFunctionRegion', region);
                }
                let body;
                if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, 'Content-Type') || !headers)) {
                    if (typeof Blob !== 'undefined' && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
                        // will work for File as File inherits Blob
                        // also works for ArrayBuffer as it is the same underlying structure as a Blob
                        _headers['Content-Type'] = 'application/octet-stream';
                        body = functionArgs;
                    } else if (typeof functionArgs === 'string') {
                        // plain string
                        _headers['Content-Type'] = 'text/plain';
                        body = functionArgs;
                    } else if (typeof FormData !== 'undefined' && functionArgs instanceof FormData) {
                        // don't set content-type headers
                        // Request will automatically add the right boundary value
                        body = functionArgs;
                    } else {
                        // default, assume this is JSON
                        _headers['Content-Type'] = 'application/json';
                        body = JSON.stringify(functionArgs);
                    }
                } else {
                    // if the Content-Type was supplied, simply set the body
                    body = functionArgs;
                }
                // Handle timeout by creating an AbortController
                let effectiveSignal = signal;
                if (timeout) {
                    timeoutController = new AbortController();
                    timeoutId = setTimeout(()=>timeoutController.abort(), timeout);
                    // If user provided their own signal, we need to respect both
                    if (signal) {
                        effectiveSignal = timeoutController.signal;
                        // If the user's signal is aborted, abort our timeout controller too
                        signal.addEventListener('abort', ()=>timeoutController.abort());
                    } else {
                        effectiveSignal = timeoutController.signal;
                    }
                }
                const response = yield this.fetch(url.toString(), {
                    method: method || 'POST',
                    // headers priority is (high to low):
                    // 1. invoke-level headers
                    // 2. client-level headers
                    // 3. default Content-Type header
                    headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                    body,
                    signal: effectiveSignal
                }).catch((fetchError)=>{
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsFetchError"](fetchError);
                });
                const isRelayError = response.headers.get('x-relay-error');
                if (isRelayError && isRelayError === 'true') {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsRelayError"](response);
                }
                if (!response.ok) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsHttpError"](response);
                }
                let responseType = ((_a = response.headers.get('Content-Type')) !== null && _a !== void 0 ? _a : 'text/plain').split(';')[0].trim();
                let data;
                if (responseType === 'application/json') {
                    data = yield response.json();
                } else if (responseType === 'application/octet-stream' || responseType === 'application/pdf') {
                    data = yield response.blob();
                } else if (responseType === 'text/event-stream') {
                    data = response;
                } else if (responseType === 'multipart/form-data') {
                    data = yield response.formData();
                } else {
                    // default to text
                    data = yield response.text();
                }
                return {
                    data,
                    error: null,
                    response
                };
            } catch (error) {
                return {
                    data: null,
                    error,
                    response: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsHttpError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsRelayError"] ? error.context : undefined
                };
            } finally{
                // Clear the timeout if it was set
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            }
        });
    }
} //# sourceMappingURL=FunctionsClient.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionRegion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionRegion"],
    "FunctionsClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsClient"],
    "FunctionsError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsError"],
    "FunctionsFetchError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsFetchError"],
    "FunctionsHttpError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsHttpError"],
    "FunctionsRelayError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsRelayError"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/types.js [app-client] (ecmascript)");
}),
"[project]/Documents/task-creator/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Error format
 *
 * {@link https://postgrest.org/en/stable/api.html?highlight=options#errors-and-http-status-codes}
 */ class PostgrestError extends Error {
    /**
     * @example
     * ```ts
     * import PostgrestError from '@supabase/postgrest-js'
     *
     * throw new PostgrestError({
     *   message: 'Row level security prevented the request',
     *   details: 'RLS denied the insert',
     *   hint: 'Check your policies',
     *   code: 'PGRST301',
     * })
     * ```
     */ constructor(context){
        super(context.message);
        this.name = 'PostgrestError';
        this.details = context.details;
        this.hint = context.hint;
        this.code = context.code;
    }
}
exports.default = PostgrestError; //# sourceMappingURL=PostgrestError.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
const PostgrestError_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-client] (ecmascript)"));
class PostgrestBuilder {
    /**
     * Creates a builder configured for a specific PostgREST request.
     *
     * @example
     * ```ts
     * import PostgrestQueryBuilder from '@supabase/postgrest-js'
     *
     * const builder = new PostgrestQueryBuilder(
     *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
     *   { headers: new Headers({ apikey: 'public-anon-key' }) }
     * )
     * ```
     */ constructor(builder){
        var _a, _b;
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = new Headers(builder.headers);
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = (_a = builder.shouldThrowOnError) !== null && _a !== void 0 ? _a : false;
        this.signal = builder.signal;
        this.isMaybeSingle = (_b = builder.isMaybeSingle) !== null && _b !== void 0 ? _b : false;
        if (builder.fetch) {
            this.fetch = builder.fetch;
        } else {
            this.fetch = fetch;
        }
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
     * Set an HTTP header for the request.
     */ setHeader(name, value) {
        this.headers = new Headers(this.headers);
        this.headers.set(name, value);
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (this.schema === undefined) {
        // skip
        } else if ([
            'GET',
            'HEAD'
        ].includes(this.method)) {
            this.headers.set('Accept-Profile', this.schema);
        } else {
            this.headers.set('Content-Profile', this.schema);
        }
        if (this.method !== 'GET' && this.method !== 'HEAD') {
            this.headers.set('Content-Type', 'application/json');
        }
        // NOTE: Invoke w/o `this` to avoid illegal invocation error.
        // https://github.com/supabase/postgrest-js/pull/247
        const _fetch = this.fetch;
        let res = _fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async (res)=>{
            var _a, _b, _c, _d;
            let error = null;
            let data = null;
            let count = null;
            let status = res.status;
            let statusText = res.statusText;
            if (res.ok) {
                if (this.method !== 'HEAD') {
                    const body = await res.text();
                    if (body === '') {
                    // Prefer: return=minimal
                    } else if (this.headers.get('Accept') === 'text/csv') {
                        data = body;
                    } else if (this.headers.get('Accept') && ((_a = this.headers.get('Accept')) === null || _a === void 0 ? void 0 : _a.includes('application/vnd.pgrst.plan+text'))) {
                        data = body;
                    } else {
                        data = JSON.parse(body);
                    }
                }
                const countHeader = (_b = this.headers.get('Prefer')) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
                const contentRange = (_c = res.headers.get('content-range')) === null || _c === void 0 ? void 0 : _c.split('/');
                if (countHeader && contentRange && contentRange.length > 1) {
                    count = parseInt(contentRange[1]);
                }
                // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
                // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
                if (this.isMaybeSingle && this.method === 'GET' && Array.isArray(data)) {
                    if (data.length > 1) {
                        error = {
                            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                            code: 'PGRST116',
                            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: 'JSON object requested, multiple (or no) rows returned'
                        };
                        data = null;
                        count = null;
                        status = 406;
                        statusText = 'Not Acceptable';
                    } else if (data.length === 1) {
                        data = data[0];
                    } else {
                        data = null;
                    }
                }
            } else {
                const body = await res.text();
                try {
                    error = JSON.parse(body);
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (Array.isArray(error) && res.status === 404) {
                        data = [];
                        error = null;
                        status = 200;
                        statusText = 'OK';
                    }
                } catch (_e) {
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (res.status === 404 && body === '') {
                        status = 204;
                        statusText = 'No Content';
                    } else {
                        error = {
                            message: body
                        };
                    }
                }
                if (error && this.isMaybeSingle && ((_d = error === null || error === void 0 ? void 0 : error.details) === null || _d === void 0 ? void 0 : _d.includes('0 rows'))) {
                    error = null;
                    status = 200;
                    statusText = 'OK';
                }
                if (error && this.shouldThrowOnError) {
                    throw new PostgrestError_1.default(error);
                }
            }
            const postgrestResponse = {
                error,
                data,
                count,
                status,
                statusText
            };
            return postgrestResponse;
        });
        if (!this.shouldThrowOnError) {
            res = res.catch((fetchError)=>{
                var _a, _b, _c, _d, _e, _f;
                // Build detailed error information including cause if available
                // Note: We don't populate code/hint for client-side network errors since those
                // fields are meant for upstream service errors (PostgREST/PostgreSQL)
                let errorDetails = '';
                // Add cause information if available (e.g., DNS errors, network failures)
                const cause = fetchError === null || fetchError === void 0 ? void 0 : fetchError.cause;
                if (cause) {
                    const causeMessage = (_a = cause === null || cause === void 0 ? void 0 : cause.message) !== null && _a !== void 0 ? _a : '';
                    const causeCode = (_b = cause === null || cause === void 0 ? void 0 : cause.code) !== null && _b !== void 0 ? _b : '';
                    errorDetails = `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _c !== void 0 ? _c : 'FetchError'}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`;
                    errorDetails += `\n\nCaused by: ${(_d = cause === null || cause === void 0 ? void 0 : cause.name) !== null && _d !== void 0 ? _d : 'Error'}: ${causeMessage}`;
                    if (causeCode) {
                        errorDetails += ` (${causeCode})`;
                    }
                    if (cause === null || cause === void 0 ? void 0 : cause.stack) {
                        errorDetails += `\n${cause.stack}`;
                    }
                } else {
                    // No cause available, just include the error stack
                    errorDetails = (_e = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _e !== void 0 ? _e : '';
                }
                return {
                    error: {
                        message: `${(_f = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _f !== void 0 ? _f : 'FetchError'}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                        details: errorDetails,
                        hint: '',
                        code: ''
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: ''
                };
            });
        }
        return res.then(onfulfilled, onrejected);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        /* istanbul ignore next */ return this;
    }
    /**
     * Override the type of the returned `data` field in the response.
     *
     * @typeParam NewResult - The new type to cast the response data to
     * @typeParam Options - Optional type configuration (defaults to { merge: true })
     * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
     * @example
     * ```typescript
     * // Merge with existing types (default behavior)
     * const query = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ custom_field: string }>()
     *
     * // Replace existing types completely
     * const replaceQuery = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
     * ```
     * @returns A PostgrestBuilder instance with the new type
     */ overrideTypes() {
        return this;
    }
}
exports.default = PostgrestBuilder; //# sourceMappingURL=PostgrestBuilder.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
const PostgrestBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-client] (ecmascript)"));
class PostgrestTransformBuilder extends PostgrestBuilder_1.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */ select(columns) {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        this.headers.append('Prefer', 'return=representation');
        return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.order` : 'order';
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ''}${column}.${ascending ? 'asc' : 'desc'}${nullsFirst === undefined ? '' : nullsFirst ? '.nullsfirst' : '.nullslast'}`);
        return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
        const keyOffset = typeof referencedTable === 'undefined' ? 'offset' : `${referencedTable}.offset`;
        const keyLimit = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */ single() {
        this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */ maybeSingle() {
        // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
        // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
        if (this.method === 'GET') {
            this.headers.set('Accept', 'application/json');
        } else {
            this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        }
        this.isMaybeSingle = true;
        return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */ csv() {
        this.headers.set('Accept', 'text/csv');
        return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */ geojson() {
        this.headers.set('Accept', 'application/geo+json');
        return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */ explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = 'text' } = {}) {
        var _a;
        const options = [
            analyze ? 'analyze' : null,
            verbose ? 'verbose' : null,
            settings ? 'settings' : null,
            buffers ? 'buffers' : null,
            wal ? 'wal' : null
        ].filter(Boolean).join('|');
        // An Accept header can carry multiple media types but postgrest-js always sends one
        const forMediatype = (_a = this.headers.get('Accept')) !== null && _a !== void 0 ? _a : 'application/json';
        this.headers.set('Accept', `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
        if (format === 'json') {
            return this;
        } else {
            return this;
        }
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */ rollback() {
        this.headers.append('Prefer', 'tx=rollback');
        return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        return this;
    }
    /**
     * Set the maximum number of rows that can be affected by the query.
     * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
     *
     * @param value - The maximum number of rows that can be affected
     */ maxAffected(value) {
        this.headers.append('Prefer', 'handling=strict');
        this.headers.append('Prefer', `max-affected=${value}`);
        return this;
    }
}
exports.default = PostgrestTransformBuilder; //# sourceMappingURL=PostgrestTransformBuilder.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
const PostgrestTransformBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-client] (ecmascript)"));
const PostgrestReservedCharsRegexp = new RegExp('[,()]');
class PostgrestFilterBuilder extends PostgrestTransformBuilder_1.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ eq(column, value) {
        this.url.searchParams.append(column, `eq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ neq(column, value) {
        this.url.searchParams.append(column, `neq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gt(column, value) {
        this.url.searchParams.append(column, `gt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gte(column, value) {
        this.url.searchParams.append(column, `gte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lt(column, value) {
        this.url.searchParams.append(column, `lt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lte(column, value) {
        this.url.searchParams.append(column, `lte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ like(column, pattern) {
        this.url.searchParams.append(column, `like.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAllOf(column, patterns) {
        this.url.searchParams.append(column, `like(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `like(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ ilike(column, pattern) {
        this.url.searchParams.append(column, `ilike.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAllOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches the PostgreSQL regex `pattern`
     * case-sensitively (using the `~` operator).
     *
     * @param column - The column to filter on
     * @param pattern - The PostgreSQL regular expression pattern to match with
     */ regexMatch(column, pattern) {
        this.url.searchParams.append(column, `match.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches the PostgreSQL regex `pattern`
     * case-insensitively (using the `~*` operator).
     *
     * @param column - The column to filter on
     * @param pattern - The PostgreSQL regular expression pattern to match with
     */ regexIMatch(column, pattern) {
        this.url.searchParams.append(column, `imatch.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ is(column, value) {
        this.url.searchParams.append(column, `is.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` IS DISTINCT FROM `value`.
     *
     * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
     * are considered equal (not distinct), and comparing `NULL` with any non-NULL
     * value returns true (distinct).
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ isDistinct(column, value) {
        this.url.searchParams.append(column, `isdistinct.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */ in(column, values) {
        const cleanedValues = Array.from(new Set(values)).map((s)=>{
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === 'string' && PostgrestReservedCharsRegexp.test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(',');
        this.url.searchParams.append(column, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ contains(column, value) {
        if (typeof value === 'string') {
            // range types can be inclusive '[', ']' or exclusive '(', ')' so just
            // keep it simple and accept a string
            this.url.searchParams.append(column, `cs.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cs.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ containedBy(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `cd.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cd.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGt(column, range) {
        this.url.searchParams.append(column, `sr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGte(column, range) {
        this.url.searchParams.append(column, `nxl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLt(column, range) {
        this.url.searchParams.append(column, `sl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLte(column, range) {
        this.url.searchParams.append(column, `nxr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeAdjacent(column, range) {
        this.url.searchParams.append(column, `adj.${range}`);
        return this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */ overlaps(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `ov.${value}`);
        } else {
            // array
            this.url.searchParams.append(column, `ov.{${value.join(',')}}`);
        }
        return this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */ textSearch(column, query, { config, type } = {}) {
        let typePart = '';
        if (type === 'plain') {
            typePart = 'pl';
        } else if (type === 'phrase') {
            typePart = 'ph';
        } else if (type === 'websearch') {
            typePart = 'w';
        }
        const configPart = config === undefined ? '' : `(${config})`;
        this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */ match(query) {
        Object.entries(query).forEach(([column, value])=>{
            this.url.searchParams.append(column, `eq.${value}`);
        });
        return this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ not(column, operator, value) {
        this.url.searchParams.append(column, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */ or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.or` : 'or';
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ filter(column, operator, value) {
        this.url.searchParams.append(column, `${operator}.${value}`);
        return this;
    }
}
exports.default = PostgrestFilterBuilder; //# sourceMappingURL=PostgrestFilterBuilder.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
const PostgrestFilterBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)"));
class PostgrestQueryBuilder {
    /**
     * Creates a query builder scoped to a Postgres table or view.
     *
     * @example
     * ```ts
     * import PostgrestQueryBuilder from '@supabase/postgrest-js'
     *
     * const query = new PostgrestQueryBuilder(
     *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
     *   { headers: { apikey: 'public-anon-key' } }
     * )
     * ```
     */ constructor(url, { headers = {}, schema, fetch: fetch1 }){
        this.url = url;
        this.headers = new Headers(headers);
        this.schema = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ select(columns, options) {
        const { head = false, count } = options !== null && options !== void 0 ? options : {};
        const method = head ? 'HEAD' : 'GET';
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */ insert(values, { count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', `missing=default`);
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
   * Perform an UPSERT on the table or view. Depending on the column(s) passed
   * to `onConflict`, `.upsert()` allows you to perform the equivalent of
   * `.insert()` if a row with the corresponding `onConflict` columns doesn't
   * exist, or if it does exist, perform an alternative action depending on
   * `ignoreDuplicates`.
   *
   * By default, upserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to upsert with. Pass an object to upsert a
   * single row or an array to upsert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
   * duplicate rows are determined. Two rows are duplicates if all the
   * `onConflict` columns are equal.
   *
   * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
   * `false`, duplicate rows are merged with existing rows.
   *
   * @param options.count - Count algorithm to use to count upserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. This only applies when
   * inserting new rows, not when merging with existing rows under
   * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
   *
   * @example Upsert a single row using a unique key
   * ```ts
   * // Upserting a single row, overwriting based on the 'username' unique column
   * const { data, error } = await supabase
   *   .from('users')
   *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
   *
   * // Example response:
   * // {
   * //   data: [
   * //     { id: 4, message: 'bar', username: 'supabot' }
   * //   ],
   * //   error: null
   * // }
   * ```
   *
   * @example Upsert with conflict resolution and exact row counting
   * ```ts
   * // Upserting and returning exact count
   * const { data, error, count } = await supabase
   *   .from('users')
   *   .upsert(
   *     {
   *       id: 3,
   *       message: 'foo',
   *       username: 'supabot'
   *     },
   *     {
   *       onConflict: 'username',
   *       count: 'exact'
   *     }
   *   )
   *
   * // Example response:
   * // {
   * //   data: [
   * //     {
   * //       id: 42,
   * //       handle: "saoirse",
   * //       display_name: "Saoirse"
   * //     }
   * //   ],
   * //   count: 1,
   * //   error: null
   * // }
   * ```
   */ upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        this.headers.append('Prefer', `resolution=${ignoreDuplicates ? 'ignore' : 'merge'}-duplicates`);
        if (onConflict !== undefined) this.url.searchParams.set('on_conflict', onConflict);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', 'missing=default');
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ update(values, { count } = {}) {
        var _a;
        const method = 'PATCH';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ delete({ count } = {}) {
        var _a;
        const method = 'DELETE';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestQueryBuilder; //# sourceMappingURL=PostgrestQueryBuilder.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
const PostgrestQueryBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-client] (ecmascript)"));
const PostgrestFilterBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)"));
/**
 * PostgREST client.
 *
 * @typeParam Database - Types for the schema from the [type
 * generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
 *
 * @typeParam SchemaName - Postgres schema to switch to. Must be a string
 * literal, the same one passed to the constructor. If the schema is not
 * `"public"`, this must be supplied manually.
 */ class PostgrestClient {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     * @example
     * ```ts
     * import PostgrestClient from '@supabase/postgrest-js'
     *
     * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
     *   headers: { apikey: 'public-anon-key' },
     *   schema: 'public',
     * })
     * ```
     */ constructor(url, { headers = {}, schema, fetch: fetch1 } = {}){
        this.url = url;
        this.headers = new Headers(headers);
        this.schemaName = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        if (!relation || typeof relation !== 'string' || relation.trim() === '') {
            throw new Error('Invalid relation name: relation must be a non-empty string.');
        }
        const url = new URL(`${this.url}/${relation}`);
        return new PostgrestQueryBuilder_1.default(url, {
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return new PostgrestClient(this.url, {
            headers: this.headers,
            schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @example
     * ```ts
     * // For cross-schema functions where type inference fails, use overrideTypes:
     * const { data } = await supabase
     *   .schema('schema_b')
     *   .rpc('function_a', {})
     *   .overrideTypes<{ id: string; user_id: string }[]>()
     * ```
     */ rpc(fn, args = {}, { head = false, get = false, count } = {}) {
        var _a;
        let method;
        const url = new URL(`${this.url}/rpc/${fn}`);
        let body;
        if (head || get) {
            method = head ? 'HEAD' : 'GET';
            Object.entries(args)// params with undefined value needs to be filtered out, otherwise it'll
            // show up as `?param=undefined`
            .filter(([_, value])=>value !== undefined)// array values need special syntax
            .map(([name, value])=>[
                    name,
                    Array.isArray(value) ? `{${value.join(',')}}` : `${value}`
                ]).forEach(([name, value])=>{
                url.searchParams.append(name, value);
            });
        } else {
            method = 'POST';
            body = args;
        }
        const headers = new Headers(this.headers);
        if (count) {
            headers.set('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url,
            headers,
            schema: this.schemaName,
            body,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestClient; //# sourceMappingURL=PostgrestClient.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostgrestError = exports.PostgrestBuilder = exports.PostgrestTransformBuilder = exports.PostgrestFilterBuilder = exports.PostgrestQueryBuilder = exports.PostgrestClient = void 0;
const tslib_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
// Always update wrapper.mjs when updating this file.
const PostgrestClient_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-client] (ecmascript)"));
exports.PostgrestClient = PostgrestClient_1.default;
const PostgrestQueryBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-client] (ecmascript)"));
exports.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
const PostgrestFilterBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)"));
exports.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
const PostgrestTransformBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-client] (ecmascript)"));
exports.PostgrestTransformBuilder = PostgrestTransformBuilder_1.default;
const PostgrestBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-client] (ecmascript)"));
exports.PostgrestBuilder = PostgrestBuilder_1.default;
const PostgrestError_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-client] (ecmascript)"));
exports.PostgrestError = PostgrestError_1.default;
exports.default = {
    PostgrestClient: PostgrestClient_1.default,
    PostgrestQueryBuilder: PostgrestQueryBuilder_1.default,
    PostgrestFilterBuilder: PostgrestFilterBuilder_1.default,
    PostgrestTransformBuilder: PostgrestTransformBuilder_1.default,
    PostgrestBuilder: PostgrestBuilder_1.default,
    PostgrestError: PostgrestError_1.default
}; //# sourceMappingURL=index.js.map
}),
"[project]/Documents/task-creator/node_modules/iceberg-js/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/errors/IcebergError.ts
__turbopack_context__.s([
    "IcebergError",
    ()=>IcebergError,
    "IcebergRestCatalog",
    ()=>IcebergRestCatalog,
    "getCurrentSchema",
    ()=>getCurrentSchema,
    "isDecimalType",
    ()=>isDecimalType,
    "isFixedType",
    ()=>isFixedType,
    "parseDecimalType",
    ()=>parseDecimalType,
    "parseFixedType",
    ()=>parseFixedType,
    "typesEqual",
    ()=>typesEqual
]);
var IcebergError = class extends Error {
    constructor(message, opts){
        super(message);
        this.name = "IcebergError";
        this.status = opts.status;
        this.icebergType = opts.icebergType;
        this.icebergCode = opts.icebergCode;
        this.details = opts.details;
        this.isCommitStateUnknown = opts.icebergType === "CommitStateUnknownException" || [
            500,
            502,
            504
        ].includes(opts.status) && opts.icebergType?.includes("CommitState") === true;
    }
    /**
   * Returns true if the error is a 404 Not Found error.
   */ isNotFound() {
        return this.status === 404;
    }
    /**
   * Returns true if the error is a 409 Conflict error.
   */ isConflict() {
        return this.status === 409;
    }
    /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */ isAuthenticationTimeout() {
        return this.status === 419;
    }
};
// src/utils/url.ts
function buildUrl(baseUrl, path, query) {
    const url = new URL(path, baseUrl);
    if (query) {
        for (const [key, value] of Object.entries(query)){
            if (value !== void 0) {
                url.searchParams.set(key, value);
            }
        }
    }
    return url.toString();
}
// src/http/createFetchClient.ts
async function buildAuthHeaders(auth) {
    if (!auth || auth.type === "none") {
        return {};
    }
    if (auth.type === "bearer") {
        return {
            Authorization: `Bearer ${auth.token}`
        };
    }
    if (auth.type === "header") {
        return {
            [auth.name]: auth.value
        };
    }
    if (auth.type === "custom") {
        return await auth.getHeaders();
    }
    return {};
}
function createFetchClient(options) {
    const fetchFn = options.fetchImpl ?? globalThis.fetch;
    return {
        async request ({ method, path, query, body, headers }) {
            const url = buildUrl(options.baseUrl, path, query);
            const authHeaders = await buildAuthHeaders(options.auth);
            const res = await fetchFn(url, {
                method,
                headers: {
                    ...body ? {
                        "Content-Type": "application/json"
                    } : {},
                    ...authHeaders,
                    ...headers
                },
                body: body ? JSON.stringify(body) : void 0
            });
            const text = await res.text();
            const isJson = (res.headers.get("content-type") || "").includes("application/json");
            const data = isJson && text ? JSON.parse(text) : text;
            if (!res.ok) {
                const errBody = isJson ? data : void 0;
                const errorDetail = errBody?.error;
                throw new IcebergError(errorDetail?.message ?? `Request failed with status ${res.status}`, {
                    status: res.status,
                    icebergType: errorDetail?.type,
                    icebergCode: errorDetail?.code,
                    details: errBody
                });
            }
            return {
                status: res.status,
                headers: res.headers,
                data
            };
        }
    };
}
// src/catalog/namespaces.ts
function namespaceToPath(namespace) {
    return namespace.join("");
}
var NamespaceOperations = class {
    constructor(client, prefix = ""){
        this.client = client;
        this.prefix = prefix;
    }
    async listNamespaces(parent) {
        const query = parent ? {
            parent: namespaceToPath(parent.namespace)
        } : void 0;
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces`,
            query
        });
        return response.data.namespaces.map((ns)=>({
                namespace: ns
            }));
    }
    async createNamespace(id, metadata) {
        const request = {
            namespace: id.namespace,
            properties: metadata?.properties
        };
        const response = await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces`,
            body: request
        });
        return response.data;
    }
    async dropNamespace(id) {
        await this.client.request({
            method: "DELETE",
            path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
        });
    }
    async loadNamespaceMetadata(id) {
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
        });
        return {
            properties: response.data.properties
        };
    }
    async namespaceExists(id) {
        try {
            await this.client.request({
                method: "HEAD",
                path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
            });
            return true;
        } catch (error) {
            if (error instanceof IcebergError && error.status === 404) {
                return false;
            }
            throw error;
        }
    }
    async createNamespaceIfNotExists(id, metadata) {
        try {
            return await this.createNamespace(id, metadata);
        } catch (error) {
            if (error instanceof IcebergError && error.status === 409) {
                return;
            }
            throw error;
        }
    }
};
// src/catalog/tables.ts
function namespaceToPath2(namespace) {
    return namespace.join("");
}
var TableOperations = class {
    constructor(client, prefix = "", accessDelegation){
        this.client = client;
        this.prefix = prefix;
        this.accessDelegation = accessDelegation;
    }
    async listTables(namespace) {
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`
        });
        return response.data.identifiers;
    }
    async createTable(namespace, request) {
        const headers = {};
        if (this.accessDelegation) {
            headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
        }
        const response = await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`,
            body: request,
            headers
        });
        return response.data.metadata;
    }
    async updateTable(id, request) {
        const response = await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
            body: request
        });
        return {
            "metadata-location": response.data["metadata-location"],
            metadata: response.data.metadata
        };
    }
    async dropTable(id, options) {
        await this.client.request({
            method: "DELETE",
            path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
            query: {
                purgeRequested: String(options?.purge ?? false)
            }
        });
    }
    async loadTable(id) {
        const headers = {};
        if (this.accessDelegation) {
            headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
        }
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
            headers
        });
        return response.data.metadata;
    }
    async tableExists(id) {
        const headers = {};
        if (this.accessDelegation) {
            headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
        }
        try {
            await this.client.request({
                method: "HEAD",
                path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
                headers
            });
            return true;
        } catch (error) {
            if (error instanceof IcebergError && error.status === 404) {
                return false;
            }
            throw error;
        }
    }
    async createTableIfNotExists(namespace, request) {
        try {
            return await this.createTable(namespace, request);
        } catch (error) {
            if (error instanceof IcebergError && error.status === 409) {
                return await this.loadTable({
                    namespace: namespace.namespace,
                    name: request.name
                });
            }
            throw error;
        }
    }
};
// src/catalog/IcebergRestCatalog.ts
var IcebergRestCatalog = class {
    /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */ constructor(options){
        let prefix = "v1";
        if (options.catalogName) {
            prefix += `/${options.catalogName}`;
        }
        const baseUrl = options.baseUrl.endsWith("/") ? options.baseUrl : `${options.baseUrl}/`;
        this.client = createFetchClient({
            baseUrl,
            auth: options.auth,
            fetchImpl: options.fetch
        });
        this.accessDelegation = options.accessDelegation?.join(",");
        this.namespaceOps = new NamespaceOperations(this.client, prefix);
        this.tableOps = new TableOperations(this.client, prefix, this.accessDelegation);
    }
    /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */ async listNamespaces(parent) {
        return this.namespaceOps.listNamespaces(parent);
    }
    /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */ async createNamespace(id, metadata) {
        return this.namespaceOps.createNamespace(id, metadata);
    }
    /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */ async dropNamespace(id) {
        await this.namespaceOps.dropNamespace(id);
    }
    /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */ async loadNamespaceMetadata(id) {
        return this.namespaceOps.loadNamespaceMetadata(id);
    }
    /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */ async listTables(namespace) {
        return this.tableOps.listTables(namespace);
    }
    /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */ async createTable(namespace, request) {
        return this.tableOps.createTable(namespace, request);
    }
    /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */ async updateTable(id, request) {
        return this.tableOps.updateTable(id, request);
    }
    /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */ async dropTable(id, options) {
        await this.tableOps.dropTable(id, options);
    }
    /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */ async loadTable(id) {
        return this.tableOps.loadTable(id);
    }
    /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */ async namespaceExists(id) {
        return this.namespaceOps.namespaceExists(id);
    }
    /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */ async tableExists(id) {
        return this.tableOps.tableExists(id);
    }
    /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */ async createNamespaceIfNotExists(id, metadata) {
        return this.namespaceOps.createNamespaceIfNotExists(id, metadata);
    }
    /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */ async createTableIfNotExists(namespace, request) {
        return this.tableOps.createTableIfNotExists(namespace, request);
    }
};
// src/catalog/types.ts
var DECIMAL_REGEX = /^decimal\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)$/;
var FIXED_REGEX = /^fixed\s*\[\s*(\d+)\s*\]$/;
function parseDecimalType(type) {
    const match = type.match(DECIMAL_REGEX);
    if (!match) return null;
    return {
        precision: parseInt(match[1], 10),
        scale: parseInt(match[2], 10)
    };
}
function parseFixedType(type) {
    const match = type.match(FIXED_REGEX);
    if (!match) return null;
    return {
        length: parseInt(match[1], 10)
    };
}
function isDecimalType(type) {
    return DECIMAL_REGEX.test(type);
}
function isFixedType(type) {
    return FIXED_REGEX.test(type);
}
function typesEqual(a, b) {
    const decimalA = parseDecimalType(a);
    const decimalB = parseDecimalType(b);
    if (decimalA && decimalB) {
        return decimalA.precision === decimalB.precision && decimalA.scale === decimalB.scale;
    }
    const fixedA = parseFixedType(a);
    const fixedB = parseFixedType(b);
    if (fixedA && fixedB) {
        return fixedA.length === fixedB.length;
    }
    return a === b;
}
function getCurrentSchema(metadata) {
    return metadata.schemas.find((s)=>s["schema-id"] === metadata["current-schema-id"]);
}
;
 //# sourceMappingURL=index.mjs.map
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/lib/version.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.version = void 0;
// Generated automatically during releases by scripts/update-version-files.ts
// This file provides runtime access to the package version for:
// - HTTP request headers (e.g., X-Client-Info header for API requests)
// - Debugging and support (identifying which version is running)
// - Telemetry and logging (version reporting in errors/analytics)
// - Ensuring build artifacts match the published package version
exports.version = '2.86.2'; //# sourceMappingURL=version.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_REALTIME_OPTIONS = exports.DEFAULT_AUTH_OPTIONS = exports.DEFAULT_DB_OPTIONS = exports.DEFAULT_GLOBAL_OPTIONS = exports.DEFAULT_HEADERS = void 0;
const version_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/lib/version.js [app-client] (ecmascript)");
let JS_ENV = '';
// @ts-ignore
if (typeof Deno !== 'undefined') {
    JS_ENV = 'deno';
} else if (typeof document !== 'undefined') {
    JS_ENV = 'web';
} else if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    JS_ENV = 'react-native';
} else {
    JS_ENV = 'node';
}
exports.DEFAULT_HEADERS = {
    'X-Client-Info': `supabase-js-${JS_ENV}/${version_1.version}`
};
exports.DEFAULT_GLOBAL_OPTIONS = {
    headers: exports.DEFAULT_HEADERS
};
exports.DEFAULT_DB_OPTIONS = {
    schema: 'public'
};
exports.DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'implicit'
};
exports.DEFAULT_REALTIME_OPTIONS = {}; //# sourceMappingURL=constants.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/lib/fetch.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchWithAuth = exports.resolveHeadersConstructor = exports.resolveFetch = void 0;
const resolveFetch = (customFetch)=>{
    if (customFetch) {
        return (...args)=>customFetch(...args);
    }
    return (...args)=>fetch(...args);
};
exports.resolveFetch = resolveFetch;
const resolveHeadersConstructor = ()=>{
    return Headers;
};
exports.resolveHeadersConstructor = resolveHeadersConstructor;
const fetchWithAuth = (supabaseKey, getAccessToken, customFetch)=>{
    const fetch1 = (0, exports.resolveFetch)(customFetch);
    const HeadersConstructor = (0, exports.resolveHeadersConstructor)();
    return async (input, init)=>{
        var _a;
        const accessToken = (_a = await getAccessToken()) !== null && _a !== void 0 ? _a : supabaseKey;
        let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
        if (!headers.has('apikey')) {
            headers.set('apikey', supabaseKey);
        }
        if (!headers.has('Authorization')) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return fetch1(input, Object.assign(Object.assign({}, init), {
            headers
        }));
    };
};
exports.fetchWithAuth = fetchWithAuth; //# sourceMappingURL=fetch.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/lib/helpers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBrowser = void 0;
exports.uuid = uuid;
exports.ensureTrailingSlash = ensureTrailingSlash;
exports.applySettingDefaults = applySettingDefaults;
exports.validateSupabaseUrl = validateSupabaseUrl;
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
function ensureTrailingSlash(url) {
    return url.endsWith('/') ? url : url + '/';
}
const isBrowser = ()=>typeof window !== 'undefined';
exports.isBrowser = isBrowser;
function applySettingDefaults(options, defaults) {
    var _a, _b;
    const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
    const { db: DEFAULT_DB_OPTIONS, auth: DEFAULT_AUTH_OPTIONS, realtime: DEFAULT_REALTIME_OPTIONS, global: DEFAULT_GLOBAL_OPTIONS } = defaults;
    const result = {
        db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS), dbOptions),
        auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), authOptions),
        realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS), realtimeOptions),
        storage: {},
        global: Object.assign(Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS), globalOptions), {
            headers: Object.assign(Object.assign({}, (_a = DEFAULT_GLOBAL_OPTIONS === null || DEFAULT_GLOBAL_OPTIONS === void 0 ? void 0 : DEFAULT_GLOBAL_OPTIONS.headers) !== null && _a !== void 0 ? _a : {}), (_b = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.headers) !== null && _b !== void 0 ? _b : {})
        }),
        accessToken: async ()=>''
    };
    if (options.accessToken) {
        result.accessToken = options.accessToken;
    } else {
        // hack around Required<>
        delete result.accessToken;
    }
    return result;
}
/**
 * Validates a Supabase client URL
 *
 * @param {string} supabaseUrl - The Supabase client URL string.
 * @returns {URL} - The validated base URL.
 * @throws {Error}
 */ function validateSupabaseUrl(supabaseUrl) {
    const trimmedUrl = supabaseUrl === null || supabaseUrl === void 0 ? void 0 : supabaseUrl.trim();
    if (!trimmedUrl) {
        throw new Error('supabaseUrl is required.');
    }
    if (!trimmedUrl.match(/^https?:\/\//i)) {
        throw new Error('Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.');
    }
    try {
        return new URL(ensureTrailingSlash(trimmedUrl));
    } catch (_a) {
        throw Error('Invalid supabaseUrl: Provided URL is malformed.');
    }
} //# sourceMappingURL=helpers.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/lib/SupabaseAuthClient.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SupabaseAuthClient = void 0;
const auth_js_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/auth-js/dist/module/index.js [app-client] (ecmascript)");
class SupabaseAuthClient extends auth_js_1.AuthClient {
    constructor(options){
        super(options);
    }
}
exports.SupabaseAuthClient = SupabaseAuthClient; //# sourceMappingURL=SupabaseAuthClient.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/SupabaseClient.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const functions_js_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/index.js [app-client] (ecmascript)");
const postgrest_js_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-client] (ecmascript)");
const realtime_js_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/realtime-js/dist/module/index.js [app-client] (ecmascript)");
const storage_js_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/storage-js/dist/module/index.js [app-client] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/lib/constants.js [app-client] (ecmascript)");
const fetch_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/lib/fetch.js [app-client] (ecmascript)");
const helpers_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/lib/helpers.js [app-client] (ecmascript)");
const SupabaseAuthClient_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/lib/SupabaseAuthClient.js [app-client] (ecmascript)");
/**
 * Supabase Client.
 *
 * An isomorphic Javascript client for interacting with Postgres.
 */ class SupabaseClient {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.storage Options passed along to the storage-js constructor.
     * @param options.global.fetch A custom fetch implementation.
     * @param options.global.headers Any additional headers to send with each network request.
     * @example
     * ```ts
     * import { createClient } from '@supabase/supabase-js'
     *
     * const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
     * const { data } = await supabase.from('profiles').select('*')
     * ```
     */ constructor(supabaseUrl, supabaseKey, options){
        var _a, _b, _c;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        const baseUrl = (0, helpers_1.validateSupabaseUrl)(supabaseUrl);
        if (!supabaseKey) throw new Error('supabaseKey is required.');
        this.realtimeUrl = new URL('realtime/v1', baseUrl);
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace('http', 'ws');
        this.authUrl = new URL('auth/v1', baseUrl);
        this.storageUrl = new URL('storage/v1', baseUrl);
        this.functionsUrl = new URL('functions/v1', baseUrl);
        // default storage key uses the supabase project ref as a namespace
        const defaultStorageKey = `sb-${baseUrl.hostname.split('.')[0]}-auth-token`;
        const DEFAULTS = {
            db: constants_1.DEFAULT_DB_OPTIONS,
            realtime: constants_1.DEFAULT_REALTIME_OPTIONS,
            auth: Object.assign(Object.assign({}, constants_1.DEFAULT_AUTH_OPTIONS), {
                storageKey: defaultStorageKey
            }),
            global: constants_1.DEFAULT_GLOBAL_OPTIONS
        };
        const settings = (0, helpers_1.applySettingDefaults)(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_a = settings.auth.storageKey) !== null && _a !== void 0 ? _a : '';
        this.headers = (_b = settings.global.headers) !== null && _b !== void 0 ? _b : {};
        if (!settings.accessToken) {
            this.auth = this._initSupabaseAuthClient((_c = settings.auth) !== null && _c !== void 0 ? _c : {}, this.headers, settings.global.fetch);
        } else {
            this.accessToken = settings.accessToken;
            this.auth = new Proxy({}, {
                get: (_, prop)=>{
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(prop)} is not possible`);
                }
            });
        }
        this.fetch = (0, fetch_1.fetchWithAuth)(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, settings.realtime));
        if (this.accessToken) {
            // Start auth immediately to avoid race condition with channel subscriptions
            this.accessToken().then((token)=>this.realtime.setAuth(token)).catch((e)=>console.warn('Failed to set initial Realtime auth token:', e));
        }
        this.rest = new postgrest_js_1.PostgrestClient(new URL('rest/v1', baseUrl).href, {
            headers: this.headers,
            schema: settings.db.schema,
            fetch: this.fetch
        });
        this.storage = new storage_js_1.StorageClient(this.storageUrl.href, this.headers, this.fetch, options === null || options === void 0 ? void 0 : options.storage);
        if (!settings.accessToken) {
            this._listenForAuthEvents();
        }
    }
    /**
     * Supabase Functions allows you to deploy and invoke edge functions.
     */ get functions() {
        return new functions_js_1.FunctionsClient(this.functionsUrl.href, {
            headers: this.headers,
            customFetch: this.fetch
        });
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        return this.rest.from(relation);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.schema
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return this.rest.schema(schema);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.rpc
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, options = {
        head: false,
        get: false,
        count: undefined
    }) {
        return this.rest.rpc(fn, args, options);
    }
    /**
     * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
     *
     * @param {string} name - The name of the Realtime channel.
     * @param {Object} opts - The options to pass to the Realtime channel.
     *
     */ channel(name, opts = {
        config: {}
    }) {
        return this.realtime.channel(name, opts);
    }
    /**
     * Returns all Realtime channels.
     */ getChannels() {
        return this.realtime.getChannels();
    }
    /**
     * Unsubscribes and removes Realtime channel from Realtime client.
     *
     * @param {RealtimeChannel} channel - The name of the Realtime channel.
     *
     */ removeChannel(channel) {
        return this.realtime.removeChannel(channel);
    }
    /**
     * Unsubscribes and removes all Realtime channels from Realtime client.
     */ removeAllChannels() {
        return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
        var _a, _b;
        if (this.accessToken) {
            return await this.accessToken();
        }
        const { data } = await this.auth.getSession();
        return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : this.supabaseKey;
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, userStorage, storageKey, flowType, lock, debug, throwOnError }, headers, fetch) {
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new SupabaseAuthClient_1.SupabaseAuthClient({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, authHeaders), headers),
            storageKey: storageKey,
            autoRefreshToken,
            persistSession,
            detectSessionInUrl,
            storage,
            userStorage,
            flowType,
            lock,
            debug,
            throwOnError,
            fetch,
            // auth checks if there is a custom authorizaiton header using this flag
            // so it knows whether to return an error when getUser is called with no session
            hasCustomAuthorizationHeader: Object.keys(this.headers).some((key)=>key.toLowerCase() === 'authorization')
        });
    }
    _initRealtimeClient(options) {
        return new realtime_js_1.RealtimeClient(this.realtimeUrl.href, Object.assign(Object.assign({}, options), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, options === null || options === void 0 ? void 0 : options.params)
        }));
    }
    _listenForAuthEvents() {
        const data = this.auth.onAuthStateChange((event, session)=>{
            this._handleTokenChanged(event, 'CLIENT', session === null || session === void 0 ? void 0 : session.access_token);
        });
        return data;
    }
    _handleTokenChanged(event, source, token) {
        if ((event === 'TOKEN_REFRESHED' || event === 'SIGNED_IN') && this.changedAccessToken !== token) {
            this.changedAccessToken = token;
            this.realtime.setAuth(token);
        } else if (event === 'SIGNED_OUT') {
            this.realtime.setAuth();
            if (source == 'STORAGE') this.auth.signOut();
            this.changedAccessToken = undefined;
        }
    }
}
exports.default = SupabaseClient; //# sourceMappingURL=SupabaseClient.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createClient = exports.SupabaseClient = exports.FunctionRegion = exports.FunctionsError = exports.FunctionsRelayError = exports.FunctionsFetchError = exports.FunctionsHttpError = exports.PostgrestError = void 0;
const SupabaseClient_1 = __importDefault(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/SupabaseClient.js [app-client] (ecmascript)"));
__exportStar(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/auth-js/dist/module/index.js [app-client] (ecmascript)"), exports);
var postgrest_js_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "PostgrestError", {
    enumerable: true,
    get: function() {
        return postgrest_js_1.PostgrestError;
    }
});
var functions_js_1 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/functions-js/dist/module/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FunctionsHttpError", {
    enumerable: true,
    get: function() {
        return functions_js_1.FunctionsHttpError;
    }
});
Object.defineProperty(exports, "FunctionsFetchError", {
    enumerable: true,
    get: function() {
        return functions_js_1.FunctionsFetchError;
    }
});
Object.defineProperty(exports, "FunctionsRelayError", {
    enumerable: true,
    get: function() {
        return functions_js_1.FunctionsRelayError;
    }
});
Object.defineProperty(exports, "FunctionsError", {
    enumerable: true,
    get: function() {
        return functions_js_1.FunctionsError;
    }
});
Object.defineProperty(exports, "FunctionRegion", {
    enumerable: true,
    get: function() {
        return functions_js_1.FunctionRegion;
    }
});
__exportStar(__turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/realtime-js/dist/module/index.js [app-client] (ecmascript)"), exports);
var SupabaseClient_2 = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/SupabaseClient.js [app-client] (ecmascript)");
Object.defineProperty(exports, "SupabaseClient", {
    enumerable: true,
    get: function() {
        return __importDefault(SupabaseClient_2).default;
    }
});
/**
 * Creates a new Supabase Client.
 *
 * @example
 * ```ts
 * import { createClient } from '@supabase/supabase-js'
 *
 * const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
 * const { data, error } = await supabase.from('profiles').select('*')
 * ```
 */ const createClient = (supabaseUrl, supabaseKey, options)=>{
    return new SupabaseClient_1.default(supabaseUrl, supabaseKey, options);
};
exports.createClient = createClient;
// Check for Node.js <= 18 deprecation
function shouldShowDeprecationWarning() {
    // Skip in browser environments
    if (typeof window !== 'undefined') {
        return false;
    }
    // Skip if process is not available (e.g., Edge Runtime)
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === 'undefined') {
        return false;
    }
    // Use dynamic property access to avoid Next.js Edge Runtime static analysis warnings
    const processVersion = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['version'];
    if (processVersion === undefined || processVersion === null) {
        return false;
    }
    const versionMatch = processVersion.match(/^v(\d+)\./);
    if (!versionMatch) {
        return false;
    }
    const majorVersion = parseInt(versionMatch[1], 10);
    return majorVersion <= 18;
}
if (shouldShowDeprecationWarning()) {
    console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. ` + `Please upgrade to Node.js 20 or later. ` + `For more information, visit: https://github.com/orgs/supabase/discussions/37217`);
} //# sourceMappingURL=index.js.map
}),
"[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthAdminApi",
    ()=>AuthAdminApi,
    "AuthApiError",
    ()=>AuthApiError,
    "AuthClient",
    ()=>AuthClient,
    "AuthError",
    ()=>AuthError,
    "AuthImplicitGrantRedirectError",
    ()=>AuthImplicitGrantRedirectError,
    "AuthInvalidCredentialsError",
    ()=>AuthInvalidCredentialsError,
    "AuthInvalidJwtError",
    ()=>AuthInvalidJwtError,
    "AuthInvalidTokenResponseError",
    ()=>AuthInvalidTokenResponseError,
    "AuthPKCEGrantCodeExchangeError",
    ()=>AuthPKCEGrantCodeExchangeError,
    "AuthRetryableFetchError",
    ()=>AuthRetryableFetchError,
    "AuthSessionMissingError",
    ()=>AuthSessionMissingError,
    "AuthUnknownError",
    ()=>AuthUnknownError,
    "AuthWeakPasswordError",
    ()=>AuthWeakPasswordError,
    "CustomAuthError",
    ()=>CustomAuthError,
    "FunctionRegion",
    ()=>FunctionRegion,
    "FunctionsError",
    ()=>FunctionsError,
    "FunctionsFetchError",
    ()=>FunctionsFetchError,
    "FunctionsHttpError",
    ()=>FunctionsHttpError,
    "FunctionsRelayError",
    ()=>FunctionsRelayError,
    "GoTrueAdminApi",
    ()=>GoTrueAdminApi,
    "GoTrueClient",
    ()=>GoTrueClient,
    "NavigatorLockAcquireTimeoutError",
    ()=>NavigatorLockAcquireTimeoutError,
    "PostgrestError",
    ()=>PostgrestError,
    "REALTIME_CHANNEL_STATES",
    ()=>REALTIME_CHANNEL_STATES,
    "REALTIME_LISTEN_TYPES",
    ()=>REALTIME_LISTEN_TYPES,
    "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT",
    ()=>REALTIME_POSTGRES_CHANGES_LISTEN_EVENT,
    "REALTIME_PRESENCE_LISTEN_EVENTS",
    ()=>REALTIME_PRESENCE_LISTEN_EVENTS,
    "REALTIME_SUBSCRIBE_STATES",
    ()=>REALTIME_SUBSCRIBE_STATES,
    "RealtimeChannel",
    ()=>RealtimeChannel,
    "RealtimeClient",
    ()=>RealtimeClient,
    "RealtimePresence",
    ()=>RealtimePresence,
    "SIGN_OUT_SCOPES",
    ()=>SIGN_OUT_SCOPES,
    "SupabaseClient",
    ()=>SupabaseClient,
    "createClient",
    ()=>createClient,
    "default",
    ()=>__TURBOPACK__default__export__,
    "isAuthApiError",
    ()=>isAuthApiError,
    "isAuthError",
    ()=>isAuthError,
    "isAuthImplicitGrantRedirectError",
    ()=>isAuthImplicitGrantRedirectError,
    "isAuthRetryableFetchError",
    ()=>isAuthRetryableFetchError,
    "isAuthSessionMissingError",
    ()=>isAuthSessionMissingError,
    "isAuthWeakPasswordError",
    ()=>isAuthWeakPasswordError,
    "lockInternals",
    ()=>lockInternals,
    "navigatorLock",
    ()=>navigatorLock,
    "processLock",
    ()=>processLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$main$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@supabase/supabase-js/dist/main/index.js [app-client] (ecmascript)");
;
const { PostgrestError, FunctionsHttpError, FunctionsFetchError, FunctionsRelayError, FunctionsError, FunctionRegion, SupabaseClient, createClient, GoTrueAdminApi, GoTrueClient, AuthAdminApi, AuthClient, navigatorLock, NavigatorLockAcquireTimeoutError, lockInternals, processLock, SIGN_OUT_SCOPES, AuthError, AuthApiError, AuthUnknownError, CustomAuthError, AuthSessionMissingError, AuthInvalidTokenResponseError, AuthInvalidCredentialsError, AuthImplicitGrantRedirectError, AuthPKCEGrantCodeExchangeError, AuthRetryableFetchError, AuthWeakPasswordError, AuthInvalidJwtError, isAuthError, isAuthApiError, isAuthSessionMissingError, isAuthImplicitGrantRedirectError, isAuthRetryableFetchError, isAuthWeakPasswordError, RealtimePresence, RealtimeChannel, RealtimeClient, REALTIME_LISTEN_TYPES, REALTIME_POSTGRES_CHANGES_LISTEN_EVENT, REALTIME_PRESENCE_LISTEN_EVENTS, REALTIME_SUBSCRIBE_STATES, REALTIME_CHANNEL_STATES } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$main$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.default || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$main$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$main$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.default || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$main$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
}),
]);

//# sourceMappingURL=02e7e_98d39c95._.js.map