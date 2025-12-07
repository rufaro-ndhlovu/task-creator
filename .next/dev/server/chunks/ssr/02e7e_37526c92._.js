module.exports = [
"[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/task-creator/node_modules/make-event-props/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/task-creator/node_modules/mimic-function/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/task-creator/node_modules/memoize/distribution/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$mimic$2d$function$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/mimic-function/index.js [app-ssr] (ecmascript)");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$mimic$2d$function$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(memoized, function_, {
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
"[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getUserLocale",
    ()=>getUserLocale,
    "getUserLocales",
    ()=>getUserLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/memoize/distribution/index.js [app-ssr] (ecmascript)");
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
var getUserLocales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(getUserLocalesInternal, {
    cacheKey: JSON.stringify
});
function getUserLocaleInternal(options) {
    return getUserLocales(options)[0] || null;
}
var getUserLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$memoize$2f$distribution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(getUserLocaleInternal, {
    cacheKey: JSON.stringify
});
const __TURBOPACK__default__export__ = getUserLocale;
}),
"[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/const.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CALENDAR_TYPES",
    ()=>CALENDAR_TYPES,
    "CALENDAR_TYPE_LOCALES",
    ()=>CALENDAR_TYPE_LOCALES,
    "WEEKDAYS",
    ()=>WEEKDAYS
]);
var CALENDAR_TYPES = {
    GREGORY: 'gregory',
    HEBREW: 'hebrew',
    ISLAMIC: 'islamic',
    ISO_8601: 'iso8601'
};
var CALENDAR_TYPE_LOCALES = {
    gregory: [
        'en-CA',
        'en-US',
        'es-AR',
        'es-BO',
        'es-CL',
        'es-CO',
        'es-CR',
        'es-DO',
        'es-EC',
        'es-GT',
        'es-HN',
        'es-MX',
        'es-NI',
        'es-PA',
        'es-PE',
        'es-PR',
        'es-SV',
        'es-VE',
        'pt-BR'
    ],
    hebrew: [
        'he',
        'he-IL'
    ],
    islamic: [
        // ar-LB, ar-MA intentionally missing
        'ar',
        'ar-AE',
        'ar-BH',
        'ar-DZ',
        'ar-EG',
        'ar-IQ',
        'ar-JO',
        'ar-KW',
        'ar-LY',
        'ar-OM',
        'ar-QA',
        'ar-SA',
        'ar-SD',
        'ar-SY',
        'ar-YE',
        'dv',
        'dv-MV',
        'ps',
        'ps-AR'
    ]
};
var WEEKDAYS = [
    0,
    1,
    2,
    3,
    4,
    5,
    6
];
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "formatDay",
    ()=>formatDay,
    "formatLongDate",
    ()=>formatLongDate,
    "formatMonth",
    ()=>formatMonth,
    "formatMonthYear",
    ()=>formatMonthYear,
    "formatShortWeekday",
    ()=>formatShortWeekday,
    "formatWeekday",
    ()=>formatWeekday,
    "formatYear",
    ()=>formatYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-ssr] (ecmascript)");
;
var formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        var localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        if (!formatterCache.has(localeWithDefault)) {
            formatterCache.set(localeWithDefault, new Map());
        }
        var formatterCacheLocale = formatterCache.get(localeWithDefault);
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
    var safeDate = new Date(date);
    return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
    return function(locale, date) {
        return getFormatter(options)(locale, toSafeHour(date));
    };
}
var formatDateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};
var formatDayOptions = {
    day: 'numeric'
};
var formatLongDateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
var formatMonthOptions = {
    month: 'long'
};
var formatMonthYearOptions = {
    month: 'long',
    year: 'numeric'
};
var formatShortWeekdayOptions = {
    weekday: 'short'
};
var formatWeekdayOptions = {
    weekday: 'long'
};
var formatYearOptions = {
    year: 'numeric'
};
var formatDate = getSafeFormatter(formatDateOptions);
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBegin",
    ()=>getBegin,
    "getBeginNext",
    ()=>getBeginNext,
    "getBeginNext2",
    ()=>getBeginNext2,
    "getBeginOfCenturyYear",
    ()=>getBeginOfCenturyYear,
    "getBeginOfDecadeYear",
    ()=>getBeginOfDecadeYear,
    "getBeginOfWeek",
    ()=>getBeginOfWeek,
    "getBeginPrevious",
    ()=>getBeginPrevious,
    "getBeginPrevious2",
    ()=>getBeginPrevious2,
    "getCenturyLabel",
    ()=>getCenturyLabel,
    "getDayOfWeek",
    ()=>getDayOfWeek,
    "getDecadeLabel",
    ()=>getDecadeLabel,
    "getEnd",
    ()=>getEnd,
    "getEndPrevious",
    ()=>getEndPrevious,
    "getEndPrevious2",
    ()=>getEndPrevious2,
    "getRange",
    ()=>getRange,
    "getValueRange",
    ()=>getValueRange,
    "getWeekNumber",
    ()=>getWeekNumber,
    "isCurrentDayOfWeek",
    ()=>isCurrentDayOfWeek,
    "isWeekend",
    ()=>isWeekend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/const.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
;
;
;
var SUNDAY = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEEKDAYS"][0];
var FRIDAY = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEEKDAYS"][5];
var SATURDAY = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEEKDAYS"][6];
function getDayOfWeek(date, calendarType) {
    if (calendarType === void 0) {
        calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
    }
    var weekday = date.getDay();
    switch(calendarType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601:
            // Shifts days of the week so that Monday is 0, Sunday is 6
            return (weekday + 6) % 7;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISLAMIC:
            return (weekday + 1) % 7;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].HEBREW:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY:
            return weekday;
        default:
            throw new Error('Unsupported calendar type.');
    }
}
function getBeginOfCenturyYear(date) {
    var beginOfCentury = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyStart"])(date);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(beginOfCentury);
}
function getBeginOfDecadeYear(date) {
    var beginOfDecade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeStart"])(date);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(beginOfDecade);
}
function getBeginOfWeek(date, calendarType) {
    if (calendarType === void 0) {
        calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
    }
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(date);
    var monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonth"])(date);
    var day = date.getDate() - getDayOfWeek(date, calendarType);
    return new Date(year, monthIndex, day);
}
function getWeekNumber(date, calendarType) {
    if (calendarType === void 0) {
        calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
    }
    var calendarTypeForWeekNumber = calendarType === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
    var beginOfWeek = getBeginOfWeek(date, calendarType);
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(date) + 1;
    var dayInWeekOne;
    var beginOfFirstWeek;
    // Look for the first week one that does not come after a given date
    do {
        dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601 ? 4 : 1);
        beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
        year -= 1;
    }while (date < beginOfFirstWeek)
    return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (8.64e7 * 7)) + 1;
}
function getBegin(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyStart"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeStart"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearStart"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthStart"])(date);
        case 'day':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayStart"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginPrevious(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousCenturyStart"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousDecadeStart"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousYearStart"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMonthStart"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginNext(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextCenturyStart"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextDecadeStart"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextYearStart"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextMonthStart"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginPrevious2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousDecadeStart"])(date, -100);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousYearStart"])(date, -10);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMonthStart"])(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginNext2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextDecadeStart"])(date, 100);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextYearStart"])(date, 10);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextMonthStart"])(date, 12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEnd(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyEnd"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeEnd"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearEnd"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthEnd"])(date);
        case 'day':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayEnd"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEndPrevious(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousCenturyEnd"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousDecadeEnd"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousYearEnd"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMonthEnd"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEndPrevious2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousDecadeEnd"])(date, -100);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousYearEnd"])(date, -10);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMonthEnd"])(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getRange(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyRange"])(date);
        case 'decade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeRange"])(date);
        case 'year':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearRange"])(date);
        case 'month':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthRange"])(date);
        case 'day':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayRange"])(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getValueRange(rangeType, date1, date2) {
    var rawNextValue = [
        date1,
        date2
    ].sort(function(a, b) {
        return a.getTime() - b.getTime();
    });
    return [
        getBegin(rangeType, rawNextValue[0]),
        getEnd(rangeType, rawNextValue[1])
    ];
}
function toYearLabel(locale, formatYear, dates) {
    return dates.map(function(date) {
        return (formatYear || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatYear"])(locale, date);
    }).join(' – ');
}
function getCenturyLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyRange"])(date));
}
function getDecadeLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeRange"])(date));
}
function isCurrentDayOfWeek(date) {
    return date.getDay() === new Date().getDay();
}
function isWeekend(date, calendarType) {
    if (calendarType === void 0) {
        calendarType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
    }
    var weekday = date.getDay();
    switch(calendarType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISLAMIC:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].HEBREW:
            return weekday === FRIDAY || weekday === SATURDAY;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].GREGORY:
            return weekday === SATURDAY || weekday === SUNDAY;
        default:
            throw new Error('Unsupported calendar type.');
    }
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/Calendar/Navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
var className = 'react-calendar__navigation';
function Navigation(_a) {
    var activeStartDate = _a.activeStartDate, drillUp = _a.drillUp, _b = _a.formatMonthYear, formatMonthYear = _b === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMonthYear"] : _b, _c = _a.formatYear, formatYear = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatYear"] : _c, locale = _a.locale, maxDate = _a.maxDate, minDate = _a.minDate, _d = _a.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? '' : _d, navigationAriaLive = _a.navigationAriaLive, navigationLabel = _a.navigationLabel, _e = _a.next2AriaLabel, next2AriaLabel = _e === void 0 ? '' : _e, _f = _a.next2Label, next2Label = _f === void 0 ? '»' : _f, _g = _a.nextAriaLabel, nextAriaLabel = _g === void 0 ? '' : _g, _h = _a.nextLabel, nextLabel = _h === void 0 ? '›' : _h, _j = _a.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? '' : _j, _k = _a.prev2Label, prev2Label = _k === void 0 ? '«' : _k, _l = _a.prevAriaLabel, prevAriaLabel = _l === void 0 ? '' : _l, _m = _a.prevLabel, prevLabel = _m === void 0 ? '‹' : _m, setActiveStartDate = _a.setActiveStartDate, showDoubleView = _a.showDoubleView, view = _a.view, views = _a.views;
    var drillUpAvailable = views.indexOf(view) > 0;
    var shouldShowPrevNext2Buttons = view !== 'century';
    var previousActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginPrevious"])(view, activeStartDate);
    var previousActiveStartDate2 = shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginPrevious2"])(view, activeStartDate) : undefined;
    var nextActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginNext"])(view, activeStartDate);
    var nextActiveStartDate2 = shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginNext2"])(view, activeStartDate) : undefined;
    var prevButtonDisabled = function() {
        if (previousActiveStartDate.getFullYear() < 0) {
            return true;
        }
        var previousActiveEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEndPrevious"])(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    }();
    var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function() {
        if (previousActiveStartDate2.getFullYear() < 0) {
            return true;
        }
        var previousActiveEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEndPrevious2"])(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    }();
    var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
    var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
    function onClickPrevious() {
        setActiveStartDate(previousActiveStartDate, 'prev');
    }
    function onClickPrevious2() {
        setActiveStartDate(previousActiveStartDate2, 'prev2');
    }
    function onClickNext() {
        setActiveStartDate(nextActiveStartDate, 'next');
    }
    function onClickNext2() {
        setActiveStartDate(nextActiveStartDate2, 'next2');
    }
    function renderLabel(date) {
        var label = function() {
            switch(view){
                case 'century':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyLabel"])(locale, formatYear, date);
                case 'decade':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeLabel"])(locale, formatYear, date);
                case 'year':
                    return formatYear(locale, date);
                case 'month':
                    return formatMonthYear(locale, date);
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        }();
        return navigationLabel ? navigationLabel({
            date: date,
            label: label,
            locale: locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserLocale"])() || undefined,
            view: view
        }) : label;
    }
    function renderButton() {
        var labelClassName = "".concat(className, "__label");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
            "aria-label": navigationAriaLabel,
            "aria-live": navigationAriaLive,
            className: labelClassName,
            disabled: !drillUpAvailable,
            onClick: drillUp,
            style: {
                flexGrow: 1
            },
            type: "button",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from"),
                    children: renderLabel(activeStartDate)
                }),
                showDoubleView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: "".concat(labelClassName, "__divider"),
                            children: " \u2013 "
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to"),
                            children: renderLabel(nextActiveStartDate)
                        })
                    ]
                }) : null
            ]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: className,
        children: [
            prev2Label !== null && shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": prev2AriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__prev2-button"),
                disabled: prev2ButtonDisabled,
                onClick: onClickPrevious2,
                type: "button",
                children: prev2Label
            }) : null,
            prevLabel !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": prevAriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__prev-button"),
                disabled: prevButtonDisabled,
                onClick: onClickPrevious,
                type: "button",
                children: prevLabel
            }),
            renderButton(),
            nextLabel !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": nextAriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__next-button"),
                disabled: nextButtonDisabled,
                onClick: onClickNext,
                type: "button",
                children: nextLabel
            }),
            next2Label !== null && shouldShowPrevNext2Buttons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": next2AriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__next2-button"),
                disabled: next2ButtonDisabled,
                onClick: onClickNext2,
                type: "button",
                children: next2Label
            }) : null
        ]
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/Flex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Flex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function toPercent(num) {
    return "".concat(num, "%");
}
function Flex(_a) {
    var children = _a.children, className = _a.className, count = _a.count, direction = _a.direction, offset = _a.offset, style = _a.style, wrap = _a.wrap, otherProps = __rest(_a, [
        "children",
        "className",
        "count",
        "direction",
        "offset",
        "style",
        "wrap"
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", __assign({
        className: className,
        style: __assign({
            display: 'flex',
            flexDirection: direction,
            flexWrap: wrap ? 'wrap' : 'nowrap'
        }, style)
    }, otherProps, {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, function(child, index) {
            var marginInlineStart = offset && index === 0 ? toPercent(100 * offset / count) : null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, __assign(__assign({}, child.props), {
                style: {
                    flexBasis: toPercent(100 / count),
                    flexShrink: 0,
                    flexGrow: 0,
                    overflow: 'hidden',
                    marginLeft: marginInlineStart,
                    marginInlineStart: marginInlineStart,
                    marginInlineEnd: 0
                }
            }));
        })
    }));
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "between",
    ()=>between,
    "doRangesOverlap",
    ()=>doRangesOverlap,
    "getTileClasses",
    ()=>getTileClasses,
    "isRangeWithinRange",
    ()=>isRangeWithinRange,
    "isValueWithinRange",
    ()=>isValueWithinRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
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
function isValueWithinRange(value, range) {
    return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
    return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
    return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName) {
    var isRange = doRangesOverlap(dateRange, valueRange);
    var classes = [];
    if (isRange) {
        classes.push(baseClassName);
        var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
        var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
        if (isRangeStart) {
            classes.push("".concat(baseClassName, "Start"));
        }
        if (isRangeEnd) {
            classes.push("".concat(baseClassName, "End"));
        }
        if (isRangeStart && isRangeEnd) {
            classes.push("".concat(baseClassName, "BothEnds"));
        }
    }
    return classes;
}
function isCompleteValue(value) {
    if (Array.isArray(value)) {
        return value[0] !== null && value[1] !== null;
    }
    return value !== null;
}
function getTileClasses(args) {
    if (!args) {
        throw new Error('args is required');
    }
    var value = args.value, date = args.date, hover = args.hover;
    var className = 'react-calendar__tile';
    var classes = [
        className
    ];
    if (!date) {
        return classes;
    }
    var now = new Date();
    var dateRange = function() {
        if (Array.isArray(date)) {
            return date;
        }
        var dateType = args.dateType;
        if (!dateType) {
            throw new Error('dateType is required when date is not an array of two dates');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRange"])(dateType, date);
    }();
    if (isValueWithinRange(now, dateRange)) {
        classes.push("".concat(className, "--now"));
    }
    if (!value || !isCompleteValue(value)) {
        return classes;
    }
    var valueRange = function() {
        if (Array.isArray(value)) {
            return value;
        }
        var valueType = args.valueType;
        if (!valueType) {
            throw new Error('valueType is required when value is not an array of two dates');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRange"])(valueType, value);
    }();
    if (isRangeWithinRange(valueRange, dateRange)) {
        classes.push("".concat(className, "--active"));
    } else if (doRangesOverlap(valueRange, dateRange)) {
        classes.push("".concat(className, "--hasActive"));
    }
    var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
    classes.push.apply(classes, valueRangeClassNames);
    var valueArray = Array.isArray(value) ? value : [
        value
    ];
    if (hover && valueArray.length === 1) {
        var hoverRange = hover > valueRange[0] ? [
            valueRange[0],
            hover
        ] : [
            hover,
            valueRange[0]
        ];
        var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
        classes.push.apply(classes, hoverRangeClassNames);
    }
    return classes;
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/TileGroup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TileGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/Flex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
function TileGroup(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b, dateTransform = _a.dateTransform, dateType = _a.dateType, end = _a.end, hover = _a.hover, offset = _a.offset, renderTile = _a.renderTile, start = _a.start, _c = _a.step, step = _c === void 0 ? 1 : _c, value = _a.value, valueType = _a.valueType;
    var tiles = [];
    for(var point = start; point <= end; point += step){
        var date = dateTransform(point);
        tiles.push(renderTile({
            classes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTileClasses"])({
                date: date,
                dateType: dateType,
                hover: hover,
                value: value,
                valueType: valueType
            }),
            date: date
        }));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: className,
        count: count,
        offset: offset,
        wrap: true,
        children: tiles
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/Tile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
;
function Tile(props) {
    var activeStartDate = props.activeStartDate, children = props.children, classes = props.classes, date = props.date, formatAbbr = props.formatAbbr, locale = props.locale, maxDate = props.maxDate, maxDateTransform = props.maxDateTransform, minDate = props.minDate, minDateTransform = props.minDateTransform, onClick = props.onClick, onMouseOver = props.onMouseOver, style = props.style, tileClassNameProps = props.tileClassName, tileContentProps = props.tileContent, tileDisabled = props.tileDisabled, view = props.view;
    var tileClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var args = {
            activeStartDate: activeStartDate,
            date: date,
            view: view
        };
        return typeof tileClassNameProps === 'function' ? tileClassNameProps(args) : tileClassNameProps;
    }, [
        activeStartDate,
        date,
        tileClassNameProps,
        view
    ]);
    var tileContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var args = {
            activeStartDate: activeStartDate,
            date: date,
            view: view
        };
        return typeof tileContentProps === 'function' ? tileContentProps(args) : tileContentProps;
    }, [
        activeStartDate,
        date,
        tileContentProps,
        view
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes, tileClassName),
        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || (tileDisabled === null || tileDisabled === void 0 ? void 0 : tileDisabled({
            activeStartDate: activeStartDate,
            date: date,
            view: view
        })),
        onClick: onClick ? function(event) {
            return onClick(date, event);
        } : undefined,
        onFocus: onMouseOver ? function() {
            return onMouseOver(date);
        } : undefined,
        onMouseOver: onMouseOver ? function() {
            return onMouseOver(date);
        } : undefined,
        style: style,
        type: "button",
        children: [
            formatAbbr ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("abbr", {
                "aria-label": formatAbbr(locale, date),
                children: children
            }) : children,
            tileContent
        ]
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/CenturyView/Decade.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Decade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/Tile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
;
var className = 'react-calendar__century-view__decades__decade';
function Decade(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentCentury = _a.currentCentury, _c = _a.formatYear, formatYear = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatYear"] : _c, otherProps = __rest(_a, [
        "classes",
        "currentCentury",
        "formatYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        classesProps.push(className);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCenturyStart"])(date).getFullYear() !== currentCentury) {
        classesProps.push("".concat(className, "--neighboringCentury"));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, {
        classes: classesProps,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeStart"],
        view: "century",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeLabel"])(locale, formatYear, date)
    }));
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/CenturyView/Decades.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Decades
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/TileGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/CenturyView/Decade.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
;
function Decades(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringCentury = props.showNeighboringCentury, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "showNeighboringCentury",
        "value",
        "valueType"
    ]);
    var start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginOfCenturyYear"])(activeStartDate);
    var end = start + (showNeighboringCentury ? 119 : 99);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__century-view__decades",
        dateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeStart"],
        dateType: "decade",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                currentCentury: start,
                date: date
            }), date.getTime());
        },
        start: start,
        step: 10,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/CenturyView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CenturyView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decades$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/CenturyView/Decades.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
;
function CenturyView(props) {
    function renderDecades() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2f$Decades$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({}, props));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-calendar__century-view",
        children: renderDecades()
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/DecadeView/Year.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Year
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/Tile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var className = 'react-calendar__decade-view__years__year';
function Year(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentDecade = _a.currentDecade, _c = _a.formatYear, formatYear = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatYear"] : _c, otherProps = __rest(_a, [
        "classes",
        "currentDecade",
        "formatYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        classesProps.push(className);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDecadeStart"])(date).getFullYear() !== currentDecade) {
        classesProps.push("".concat(className, "--neighboringDecade"));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, {
        classes: classesProps,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearStart"],
        view: "decade",
        children: formatYear(locale, date)
    }));
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/DecadeView/Years.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Years
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/TileGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Year$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/DecadeView/Year.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
;
function Years(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringDecade = props.showNeighboringDecade, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "showNeighboringDecade",
        "value",
        "valueType"
    ]);
    var start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginOfDecadeYear"])(activeStartDate);
    var end = start + (showNeighboringDecade ? 11 : 9);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__decade-view__years",
        dateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearStart"],
        dateType: "year",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Year$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                currentDecade: start,
                date: date
            }), date.getTime());
        },
        start: start,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/DecadeView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecadeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Years$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/DecadeView/Years.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
;
function DecadeView(props) {
    function renderYears() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2f$Years$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({}, props));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-calendar__decade-view",
        children: renderYears()
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/YearView/Month.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Month
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/Tile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
;
;
;
var className = 'react-calendar__year-view__months__month';
function Month(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatMonth, formatMonth = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMonth"] : _c, _d = _a.formatMonthYear, formatMonthYear = _d === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMonthYear"] : _d, otherProps = __rest(_a, [
        "classes",
        "formatMonth",
        "formatMonthYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, {
        classes: __spreadArray(__spreadArray([], classes, true), [
            className
        ], false),
        formatAbbr: formatMonthYear,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthStart"],
        view: "year",
        children: formatMonth(locale, date)
    }));
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/YearView/Months.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Months
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/TileGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Month$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/YearView/Month.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function Months(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "value",
        "valueType"
    ]);
    var start = 0;
    var end = 11;
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(activeStartDate);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__year-view__months",
        dateTransform: function(monthIndex) {
            var date = new Date();
            date.setFullYear(year, monthIndex, 1);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthStart"])(date);
        },
        dateType: "month",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Month$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                date: date
            }), date.getTime());
        },
        start: start,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/YearView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>YearView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Months$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/YearView/Months.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
;
function YearView(props) {
    function renderMonths() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2f$Months$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({}, props));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-calendar__year-view",
        children: renderMonths()
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView/Day.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Day
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/Tile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
;
var className = 'react-calendar__month-view__days__day';
function Day(_a) {
    var calendarType = _a.calendarType, _b = _a.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a.currentMonthIndex, _c = _a.formatDay, formatDay = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDay"] : _c, _d = _a.formatLongDate, formatLongDate = _d === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLongDate"] : _d, otherProps = __rest(_a, [
        "calendarType",
        "classes",
        "currentMonthIndex",
        "formatDay",
        "formatLongDate"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        classesProps.push(className);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWeekend"])(date, calendarType)) {
        classesProps.push("".concat(className, "--weekend"));
    }
    if (date.getMonth() !== currentMonthIndex) {
        classesProps.push("".concat(className, "--neighboringMonth"));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, {
        classes: classesProps,
        formatAbbr: formatLongDate,
        maxDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayEnd"],
        minDateTransform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayStart"],
        view: "month",
        children: formatDay(locale, date)
    }));
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView/Days.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Days
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/TileGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Day$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView/Day.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
;
function Days(props) {
    var activeStartDate = props.activeStartDate, calendarType = props.calendarType, hover = props.hover, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, showNeighboringMonth = props.showNeighboringMonth, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "calendarType",
        "hover",
        "showFixedNumberOfWeeks",
        "showNeighboringMonth",
        "value",
        "valueType"
    ]);
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(activeStartDate);
    var monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonth"])(activeStartDate);
    var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
    var dayOfWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfWeek"])(activeStartDate, calendarType);
    var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
    /**
     * Defines on which day of the month the grid shall start. If we simply show current
     * month, we obviously start on day one, but if showNeighboringMonth is set to
     * true, we need to find the beginning of the week the first day of the month is in.
     */ var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
    /**
     * Defines on which day of the month the grid shall end. If we simply show current
     * month, we need to stop on the last day of the month, but if showNeighboringMonth
     * is set to true, we need to find the end of the week the last day of the month is in.
     */ var end = function() {
        if (showFixedNumberOfWeeks) {
            // Always show 6 weeks
            return start + 6 * 7 - 1;
        }
        var daysInMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDaysInMonth"])(activeStartDate);
        if (showNeighboringMonth) {
            var activeEndDate = new Date();
            activeEndDate.setFullYear(year, monthIndex, daysInMonth);
            activeEndDate.setHours(0, 0, 0, 0);
            var daysUntilEndOfTheWeek = 7 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfWeek"])(activeEndDate, calendarType) - 1;
            return daysInMonth + daysUntilEndOfTheWeek;
        }
        return daysInMonth;
    }();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$TileGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__month-view__days",
        count: 7,
        dateTransform: function(day) {
            var date = new Date();
            date.setFullYear(year, monthIndex, day);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayStart"])(date);
        },
        dateType: "day",
        hover: hover,
        end: end,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Day$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                calendarType: calendarType,
                currentMonthIndex: monthIndex,
                date: date
            }), date.getTime());
        },
        offset: offset,
        start: start,
        value: value,
        valueType: valueType
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView/Weekdays.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Weekdays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/Flex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var className = 'react-calendar__month-view__weekdays';
var weekdayClassName = "".concat(className, "__weekday");
function Weekdays(props) {
    var calendarType = props.calendarType, _a = props.formatShortWeekday, formatShortWeekday = _a === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatShortWeekday"] : _a, _b = props.formatWeekday, formatWeekday = _b === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatWeekday"] : _b, locale = props.locale, onMouseLeave = props.onMouseLeave;
    var anyDate = new Date();
    var beginOfMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthStart"])(anyDate);
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(beginOfMonth);
    var monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonth"])(beginOfMonth);
    var weekdays = [];
    for(var weekday = 1; weekday <= 7; weekday += 1){
        var weekdayDate = new Date(year, monthIndex, weekday - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfWeek"])(beginOfMonth, calendarType));
        var abbr = formatWeekday(locale, weekdayDate);
        weekdays.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(weekdayClassName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCurrentDayOfWeek"])(weekdayDate) && "".concat(weekdayClassName, "--current"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWeekend"])(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend")),
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("abbr", {
                "aria-label": abbr,
                title: abbr,
                children: formatShortWeekday(locale, weekdayDate).replace('.', '')
            })
        }, weekday));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: className,
        count: 7,
        onFocus: onMouseLeave,
        onMouseOver: onMouseLeave,
        children: weekdays
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView/WeekNumber.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeekNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
var className = 'react-calendar__tile';
function WeekNumber(props) {
    var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
    var children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        children: weekNumber
    });
    if (onClickWeekNumber) {
        var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest(props, [
            "date",
            "onClickWeekNumber",
            "weekNumber"
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", __assign({}, otherProps, {
            className: className,
            onClick: function(event) {
                return onClickWeekNumber_1(weekNumber_1, date_1, event);
            },
            type: "button",
            children: children
        }));
    // biome-ignore lint/style/noUselessElse: TypeScript is unhappy if we remove this else
    } else {
        var date = props.date, onClickWeekNumber_2 = props.onClickWeekNumber, weekNumber_2 = props.weekNumber, otherProps = __rest(props, [
            "date",
            "onClickWeekNumber",
            "weekNumber"
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", __assign({}, otherProps, {
            className: className,
            children: children
        }));
    }
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView/WeekNumbers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeekNumbers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView/WeekNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/Flex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
;
;
;
;
;
function WeekNumbers(props) {
    var activeStartDate = props.activeStartDate, calendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var numberOfWeeks = function() {
        if (showFixedNumberOfWeeks) {
            return 6;
        }
        var numberOfDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDaysInMonth"])(activeStartDate);
        var startWeekday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfWeek"])(activeStartDate, calendarType);
        var days = numberOfDays - (7 - startWeekday);
        return 1 + Math.ceil(days / 7);
    }();
    var dates = function() {
        var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(activeStartDate);
        var monthIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonth"])(activeStartDate);
        var day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDate"])(activeStartDate);
        var result = [];
        for(var index = 0; index < numberOfWeeks; index += 1){
            result.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginOfWeek"])(new Date(year, monthIndex, day + index * 7), calendarType));
        }
        return result;
    }();
    var weekNumbers = dates.map(function(date) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekNumber"])(date, calendarType);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "react-calendar__month-view__weekNumbers",
        count: numberOfWeeks,
        direction: "column",
        onFocus: onMouseLeave,
        onMouseOver: onMouseLeave,
        style: {
            flexBasis: 'calc(100% * (1 / 8)',
            flexShrink: 0
        },
        children: weekNumbers.map(function(weekNumber, weekIndex) {
            var date = dates[weekIndex];
            if (!date) {
                throw new Error('date is not defined');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                date: date,
                onClickWeekNumber: onClickWeekNumber,
                weekNumber: weekNumber
            }, weekNumber);
        })
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonthView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView/Days.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Weekdays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView/Weekdays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumbers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView/WeekNumbers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/const.js [app-ssr] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
;
;
function getCalendarTypeFromLocale(locale) {
    if (locale) {
        for(var _i = 0, _a = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPE_LOCALES"]); _i < _a.length; _i++){
            var _b = _a[_i], calendarType = _b[0], locales = _b[1];
            if (locales.includes(locale)) {
                return calendarType;
            }
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$const$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_TYPES"].ISO_8601;
}
function MonthView(props) {
    var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var _a = props.calendarType, calendarType = _a === void 0 ? getCalendarTypeFromLocale(locale) : _a, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, childProps = __rest(props, [
        "calendarType",
        "formatShortWeekday",
        "formatWeekday",
        "onClickWeekNumber",
        "showWeekNumbers"
    ]);
    function renderWeekdays() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Weekdays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            calendarType: calendarType,
            formatShortWeekday: formatShortWeekday,
            formatWeekday: formatWeekday,
            locale: locale,
            onMouseLeave: onMouseLeave
        });
    }
    function renderWeekNumbers() {
        if (!showWeekNumbers) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$WeekNumbers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            activeStartDate: activeStartDate,
            calendarType: calendarType,
            onClickWeekNumber: onClickWeekNumber,
            onMouseLeave: onMouseLeave,
            showFixedNumberOfWeeks: showFixedNumberOfWeeks
        });
    }
    function renderDays() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2f$Days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({
            calendarType: calendarType
        }, childProps));
    }
    var className = 'react-calendar__month-view';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            style: {
                display: 'flex',
                alignItems: 'flex-end'
            },
            children: [
                renderWeekNumbers(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    style: {
                        flexGrow: 1,
                        width: '100%'
                    },
                    children: [
                        renderWeekdays(),
                        renderDays()
                    ]
                })
            ]
        })
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/Calendar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2f$Navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/Calendar/Navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/CenturyView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/DecadeView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/YearView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/dates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/shared/utils.js [app-ssr] (ecmascript)");
'use client';
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var baseClassName = 'react-calendar';
var allViews = [
    'century',
    'decade',
    'year',
    'month'
];
var allValueTypes = [
    'decade',
    'year',
    'month',
    'day'
];
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
function toDate(value) {
    if (value instanceof Date) {
        return value;
    }
    return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */ function getLimitedViews(minDetail, maxDetail) {
    return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */ function isViewAllowed(view, minDetail, maxDetail) {
    var views = getLimitedViews(minDetail, maxDetail);
    return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */ function getView(view, minDetail, maxDetail) {
    if (!view) {
        return maxDetail;
    }
    if (isViewAllowed(view, minDetail, maxDetail)) {
        return view;
    }
    return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */ function getValueType(view) {
    var index = allViews.indexOf(view);
    return allValueTypes[index];
}
function getValue(value, index) {
    var rawValue = Array.isArray(value) ? value[index] : value;
    if (!rawValue) {
        return null;
    }
    var valueDate = toDate(rawValue);
    if (Number.isNaN(valueDate.getTime())) {
        throw new Error("Invalid date: ".concat(value));
    }
    return valueDate;
}
function getDetailValue(_a, index) {
    var value = _a.value, minDate = _a.minDate, maxDate = _a.maxDate, maxDetail = _a.maxDetail;
    var valuePiece = getValue(value, index);
    if (!valuePiece) {
        return null;
    }
    var valueType = getValueType(maxDetail);
    var detailValueFrom = function() {
        switch(index){
            case 0:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(valueType, valuePiece);
            case 1:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnd"])(valueType, valuePiece);
            default:
                throw new Error("Invalid index value: ".concat(index));
        }
    }();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["between"])(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function(args) {
    return getDetailValue(args, 0);
};
var getDetailValueTo = function(args) {
    return getDetailValue(args, 1);
};
var getDetailValueArray = function(args) {
    return [
        getDetailValueFrom,
        getDetailValueTo
    ].map(function(fn) {
        return fn(args);
    });
};
function getActiveStartDate(_a) {
    var maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = getDetailValueFrom({
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail
    }) || new Date();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a) {
    var activeStartDate = _a.activeStartDate, defaultActiveStartDate = _a.defaultActiveStartDate, defaultValue = _a.defaultValue, defaultView = _a.defaultView, maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = activeStartDate || defaultActiveStartDate;
    if (valueFrom) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(rangeType, valueFrom);
    }
    return getActiveStartDate({
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        minDetail: minDetail,
        value: value || defaultValue,
        view: view || defaultView
    });
}
function getIsSingleValue(value) {
    return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Calendar(props, ref) {
    var activeStartDateProps = props.activeStartDate, allowPartialRange = props.allowPartialRange, calendarType = props.calendarType, className = props.className, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, formatDay = props.formatDay, formatLongDate = props.formatLongDate, formatMonth = props.formatMonth, formatMonthYear = props.formatMonthYear, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, formatYear = props.formatYear, _a = props.goToRangeStartOnSelect, goToRangeStartOnSelect = _a === void 0 ? true : _a, inputRef = props.inputRef, locale = props.locale, _b = props.maxDate, maxDate = _b === void 0 ? defaultMaxDate : _b, _c = props.maxDetail, maxDetail = _c === void 0 ? 'month' : _c, _d = props.minDate, minDate = _d === void 0 ? defaultMinDate : _d, _e = props.minDetail, minDetail = _e === void 0 ? 'century' : _e, navigationAriaLabel = props.navigationAriaLabel, navigationAriaLive = props.navigationAriaLive, navigationLabel = props.navigationLabel, next2AriaLabel = props.next2AriaLabel, next2Label = props.next2Label, nextAriaLabel = props.nextAriaLabel, nextLabel = props.nextLabel, onActiveStartDateChange = props.onActiveStartDateChange, onChangeProps = props.onChange, onClickDay = props.onClickDay, onClickDecade = props.onClickDecade, onClickMonth = props.onClickMonth, onClickWeekNumber = props.onClickWeekNumber, onClickYear = props.onClickYear, onDrillDown = props.onDrillDown, onDrillUp = props.onDrillUp, onViewChange = props.onViewChange, prev2AriaLabel = props.prev2AriaLabel, prev2Label = props.prev2Label, prevAriaLabel = props.prevAriaLabel, prevLabel = props.prevLabel, _f = props.returnValue, returnValue = _f === void 0 ? 'start' : _f, selectRange = props.selectRange, showDoubleView = props.showDoubleView, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, _g = props.showNavigation, showNavigation = _g === void 0 ? true : _g, showNeighboringCentury = props.showNeighboringCentury, showNeighboringDecade = props.showNeighboringDecade, _h = props.showNeighboringMonth, showNeighboringMonth = _h === void 0 ? true : _h, showWeekNumbers = props.showWeekNumbers, tileClassName = props.tileClassName, tileContent = props.tileContent, tileDisabled = props.tileDisabled, valueProps = props.value, viewProps = props.view;
    var _j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultActiveStartDate), activeStartDateState = _j[0], setActiveStartDateState = _j[1];
    var _k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), hoverState = _k[0], setHoverState = _k[1];
    var _l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Array.isArray(defaultValue) ? defaultValue.map(function(el) {
        return el !== null ? toDate(el) : null;
    }) : defaultValue !== null && defaultValue !== undefined ? toDate(defaultValue) : null), valueState = _l[0], setValueState = _l[1];
    var _m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultView), viewState = _m[0], setViewState = _m[1];
    var activeStartDate = activeStartDateProps || activeStartDateState || getInitialActiveStartDate({
        activeStartDate: activeStartDateProps,
        defaultActiveStartDate: defaultActiveStartDate,
        defaultValue: defaultValue,
        defaultView: defaultView,
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        minDetail: minDetail,
        value: valueProps,
        view: viewProps
    });
    var value = function() {
        var rawValue = function() {
            // In the middle of range selection, use value from state
            if (selectRange && getIsSingleValue(valueState)) {
                return valueState;
            }
            return valueProps !== undefined ? valueProps : valueState;
        }();
        if (!rawValue) {
            return null;
        }
        return Array.isArray(rawValue) ? rawValue.map(function(el) {
            return el !== null ? toDate(el) : null;
        }) : rawValue !== null ? toDate(rawValue) : null;
    }();
    var valueType = getValueType(maxDetail);
    var view = getView(viewProps || viewState, minDetail, maxDetail);
    var views = getLimitedViews(minDetail, maxDetail);
    var hover = selectRange ? hoverState : null;
    var drillDownAvailable = views.indexOf(view) < views.length - 1;
    var drillUpAvailable = views.indexOf(view) > 0;
    var getProcessedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(value) {
        var processFunction = function() {
            switch(returnValue){
                case 'start':
                    return getDetailValueFrom;
                case 'end':
                    return getDetailValueTo;
                case 'range':
                    return getDetailValueArray;
                default:
                    throw new Error('Invalid returnValue.');
            }
        }();
        return processFunction({
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            value: value
        });
    }, [
        maxDate,
        maxDetail,
        minDate,
        returnValue
    ]);
    var setActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(nextActiveStartDate, action) {
        setActiveStartDateState(nextActiveStartDate);
        var args = {
            action: action,
            activeStartDate: nextActiveStartDate,
            value: value,
            view: view
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
    }, [
        activeStartDate,
        onActiveStartDateChange,
        value,
        view
    ]);
    var onClickTile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(value, event) {
        var callback = function() {
            switch(view){
                case 'century':
                    return onClickDecade;
                case 'decade':
                    return onClickYear;
                case 'year':
                    return onClickMonth;
                case 'month':
                    return onClickDay;
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        }();
        if (callback) callback(value, event);
    }, [
        onClickDay,
        onClickDecade,
        onClickMonth,
        onClickYear,
        view
    ]);
    var drillDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(nextActiveStartDate, event) {
        if (!drillDownAvailable) {
            return;
        }
        onClickTile(nextActiveStartDate, event);
        var nextView = views[views.indexOf(view) + 1];
        if (!nextView) {
            throw new Error('Attempted to drill down from the lowest view.');
        }
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: 'drillDown',
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onViewChange && view !== nextView) {
            onViewChange(args);
        }
        if (onDrillDown) {
            onDrillDown(args);
        }
    }, [
        activeStartDate,
        drillDownAvailable,
        onActiveStartDateChange,
        onClickTile,
        onDrillDown,
        onViewChange,
        value,
        view,
        views
    ]);
    var drillUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        if (!drillUpAvailable) {
            return;
        }
        var nextView = views[views.indexOf(view) - 1];
        if (!nextView) {
            throw new Error('Attempted to drill up from the highest view.');
        }
        var nextActiveStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(nextView, activeStartDate);
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: 'drillUp',
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onViewChange && view !== nextView) {
            onViewChange(args);
        }
        if (onDrillUp) {
            onDrillUp(args);
        }
    }, [
        activeStartDate,
        drillUpAvailable,
        onActiveStartDateChange,
        onDrillUp,
        onViewChange,
        value,
        view,
        views
    ]);
    var onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(rawNextValue, event) {
        var previousValue = value;
        onClickTile(rawNextValue, event);
        var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
        var nextValue;
        if (selectRange) {
            // Range selection turned on
            if (isFirstValueInRange) {
                // Value has 0 or 2 elements - either way we're starting a new array
                // First value
                nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(valueType, rawNextValue);
            } else {
                if (!previousValue) {
                    throw new Error('previousValue is required');
                }
                if (Array.isArray(previousValue)) {
                    throw new Error('previousValue must not be an array');
                }
                // Second value
                nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueRange"])(valueType, previousValue, rawNextValue);
            }
        } else {
            // Range selection turned off
            nextValue = getProcessedValue(rawNextValue);
        }
        var nextActiveStartDate = // Range selection turned off
        !selectRange || // Range selection turned on, first value
        isFirstValueInRange || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
        goToRangeStartOnSelect ? getActiveStartDate({
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            minDetail: minDetail,
            value: nextValue,
            view: view
        }) : null;
        event.persist();
        setActiveStartDateState(nextActiveStartDate);
        setValueState(nextValue);
        var args = {
            action: 'onChange',
            activeStartDate: nextActiveStartDate,
            value: nextValue,
            view: view
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onChangeProps) {
            if (selectRange) {
                var isSingleValue = getIsSingleValue(nextValue);
                if (!isSingleValue) {
                    onChangeProps(nextValue || null, event);
                } else if (allowPartialRange) {
                    if (Array.isArray(nextValue)) {
                        throw new Error('value must not be an array');
                    }
                    onChangeProps([
                        nextValue || null,
                        null
                    ], event);
                }
            } else {
                onChangeProps(nextValue || null, event);
            }
        }
    }, [
        activeStartDate,
        allowPartialRange,
        getProcessedValue,
        goToRangeStartOnSelect,
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        onActiveStartDateChange,
        onChangeProps,
        onClickTile,
        selectRange,
        value,
        valueType,
        view
    ]);
    function onMouseOver(nextHover) {
        setHoverState(nextHover);
    }
    function onMouseLeave() {
        setHoverState(null);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, function() {
        return {
            activeStartDate: activeStartDate,
            drillDown: drillDown,
            drillUp: drillUp,
            onChange: onChange,
            setActiveStartDate: setActiveStartDate,
            value: value,
            view: view
        };
    }, [
        activeStartDate,
        drillDown,
        drillUp,
        onChange,
        setActiveStartDate,
        value,
        view
    ]);
    function renderContent(next) {
        var currentActiveStartDate = next ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBeginNext"])(view, activeStartDate) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBegin"])(view, activeStartDate);
        var onClick = drillDownAvailable ? drillDown : onChange;
        var commonProps = {
            activeStartDate: currentActiveStartDate,
            hover: hover,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            onClick: onClick,
            onMouseOver: selectRange ? onMouseOver : undefined,
            tileClassName: tileClassName,
            tileContent: tileContent,
            tileDisabled: tileDisabled,
            value: value,
            valueType: valueType
        };
        switch(view){
            case 'century':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({
                        formatYear: formatYear,
                        showNeighboringCentury: showNeighboringCentury
                    }, commonProps));
                }
            case 'decade':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({
                        formatYear: formatYear,
                        showNeighboringDecade: showNeighboringDecade
                    }, commonProps));
                }
            case 'year':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({
                        formatMonth: formatMonth,
                        formatMonthYear: formatMonthYear
                    }, commonProps));
                }
            case 'month':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __assign({
                        calendarType: calendarType,
                        formatDay: formatDay,
                        formatLongDate: formatLongDate,
                        formatShortWeekday: formatShortWeekday,
                        formatWeekday: formatWeekday,
                        onClickWeekNumber: onClickWeekNumber,
                        onMouseLeave: selectRange ? onMouseLeave : undefined,
                        showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== 'undefined' ? showFixedNumberOfWeeks : showDoubleView,
                        showNeighboringMonth: showNeighboringMonth,
                        showWeekNumbers: showWeekNumbers
                    }, commonProps));
                }
            default:
                throw new Error("Invalid view: ".concat(view, "."));
        }
    }
    function renderNavigation() {
        if (!showNavigation) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2f$Navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            activeStartDate: activeStartDate,
            drillUp: drillUp,
            formatMonthYear: formatMonthYear,
            formatYear: formatYear,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            navigationAriaLabel: navigationAriaLabel,
            navigationAriaLive: navigationAriaLive,
            navigationLabel: navigationLabel,
            next2AriaLabel: next2AriaLabel,
            next2Label: next2Label,
            nextAriaLabel: nextAriaLabel,
            nextLabel: nextLabel,
            prev2AriaLabel: prev2AriaLabel,
            prev2Label: prev2Label,
            prevAriaLabel: prevAriaLabel,
            prevLabel: prevLabel,
            setActiveStartDate: setActiveStartDate,
            showDoubleView: showDoubleView,
            view: view,
            views: views
        });
    }
    var valueArray = Array.isArray(value) ? value : [
        value
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className),
        ref: inputRef,
        children: [
            renderNavigation(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "".concat(baseClassName, "__viewContainer"),
                onBlur: selectRange ? onMouseLeave : undefined,
                onMouseLeave: selectRange ? onMouseLeave : undefined,
                children: [
                    renderContent(),
                    showDoubleView ? renderContent(true) : null
                ]
            })
        ]
    });
});
const __TURBOPACK__default__export__ = Calendar;
}),
"[project]/Documents/task-creator/node_modules/react-calendar/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/Calendar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$CenturyView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/CenturyView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$DecadeView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/DecadeView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$MonthView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/MonthView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2f$Navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/Calendar/Navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$YearView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/YearView.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$Calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/task-creator/node_modules/react-clock/dist/Hand.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
function Hand(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, name = _a.name, _c = _a.length, length = _c === void 0 ? 100 : _c, _d = _a.oppositeLength, oppositeLength = _d === void 0 ? 10 : _d, _e = _a.width, width = _e === void 0 ? 1 : _e;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-clock__hand react-clock__".concat(name, "-hand"),
        style: {
            transform: "rotate(".concat(angle, "deg)")
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
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
"[project]/Documents/task-creator/node_modules/react-clock/dist/Mark.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var Mark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function Mark(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, _c = _a.length, length = _c === void 0 ? 10 : _c, name = _a.name, _d = _a.width, width = _d === void 0 ? 1 : _d;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-clock__mark react-clock__".concat(name, "-mark"),
        style: {
            transform: "rotate(".concat(angle, "deg)")
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
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
"[project]/Documents/task-creator/node_modules/react-clock/dist/MarkNumber.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var MarkNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function MarkNumber(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, _c = _a.length, length = _c === void 0 ? 10 : _c, name = _a.name, number = _a.number;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-clock__mark react-clock__".concat(name, "-mark"),
        style: {
            transform: "rotate(".concat(angle, "deg)")
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
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
"[project]/Documents/task-creator/node_modules/react-clock/dist/shared/hourFormatter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatHour",
    ()=>formatHour
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-ssr] (ecmascript)");
;
function formatHour(locale, hour) {
    return hour.toLocaleString(locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])() || undefined);
}
}),
"[project]/Documents/task-creator/node_modules/react-clock/dist/shared/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/task-creator/node_modules/react-clock/dist/Clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Hand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/Hand.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/Mark.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$MarkNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/MarkNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$shared$2f$hourFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/shared/hourFormatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function Clock(_a) {
    var className = _a.className, _b = _a.formatHour, formatHour = _b === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$shared$2f$hourFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatHour"] : _b, _c = _a.hourHandLength, hourHandLength = _c === void 0 ? 50 : _c, hourHandOppositeLength = _a.hourHandOppositeLength, _d = _a.hourHandWidth, hourHandWidth = _d === void 0 ? 4 : _d, _e = _a.hourMarksLength, hourMarksLength = _e === void 0 ? 10 : _e, _f = _a.hourMarksWidth, hourMarksWidth = _f === void 0 ? 3 : _f, locale = _a.locale, _g = _a.minuteHandLength, minuteHandLength = _g === void 0 ? 70 : _g, minuteHandOppositeLength = _a.minuteHandOppositeLength, _h = _a.minuteHandWidth, minuteHandWidth = _h === void 0 ? 2 : _h, _j = _a.minuteMarksLength, minuteMarksLength = _j === void 0 ? 6 : _j, _k = _a.minuteMarksWidth, minuteMarksWidth = _k === void 0 ? 1 : _k, _l = _a.renderHourMarks, renderHourMarks = _l === void 0 ? true : _l, _m = _a.renderMinuteHand, renderMinuteHand = _m === void 0 ? true : _m, _o = _a.renderMinuteMarks, renderMinuteMarks = _o === void 0 ? true : _o, renderNumbers = _a.renderNumbers, _p = _a.renderSecondHand, renderSecondHand = _p === void 0 ? true : _p, _q = _a.secondHandLength, secondHandLength = _q === void 0 ? 90 : _q, secondHandOppositeLength = _a.secondHandOppositeLength, _r = _a.secondHandWidth, secondHandWidth = _r === void 0 ? 1 : _r, _s = _a.size, size = _s === void 0 ? 150 : _s, useMillisecondPrecision = _a.useMillisecondPrecision, value = _a.value;
    function renderMinuteMarksFn() {
        if (!renderMinuteMarks) {
            return null;
        }
        var minuteMarks = [];
        for(var i = 1; i <= 60; i += 1){
            var isHourMark = renderHourMarks && !(i % 5);
            if (!isHourMark) {
                minuteMarks.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            hourMarks.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            numbers.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$MarkNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                angle: i * 30,
                length: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMax"])(renderHourMarks && hourMarksLength, renderMinuteMarks && minuteMarksLength, 0),
                name: "number",
                number: formatHour(locale, i)
            }, "number_".concat(i)));
        }
        return numbers;
    }
    function renderFace() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: "react-clock__face",
            children: [
                renderMinuteMarksFn(),
                renderHourMarksFn(),
                renderNumbersFn()
            ]
        });
    }
    function renderHourHandFn() {
        var angle = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(value) * 30 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMinutes"])(value) / 2 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSeconds"])(value) / 120 + (useMillisecondPrecision ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMilliseconds"])(value) / 120000 : 0) : 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Hand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        var angle = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(value) * 360 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMinutes"])(value) * 6 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSeconds"])(value) / 10 + (useMillisecondPrecision ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMilliseconds"])(value) / 10000 : 0) : 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Hand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        var angle = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMinutes"])(value) * 360 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSeconds"])(value) * 6 + (useMillisecondPrecision ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMilliseconds"])(value) * 0.006 : 0) : 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Hand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            angle: angle,
            length: secondHandLength,
            name: "second",
            oppositeLength: secondHandOppositeLength,
            width: secondHandWidth
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("time", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('react-clock', className),
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
"[project]/Documents/task-creator/node_modules/react-clock/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/Clock.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$Clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/task-creator/node_modules/detect-element-overflow/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/task-creator/node_modules/warning/warning.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
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
"[project]/Documents/task-creator/node_modules/react-fit/dist/Fit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$detect$2d$element$2d$overflow$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/detect-element-overflow/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/warning/warning.js [app-ssr] (ecmascript)");
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
const isBrowser = ("TURBOPACK compile-time value", "undefined") !== 'undefined';
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
    const scrollContainerCollisions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$detect$2d$element$2d$overflow$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(parent, scrollContainer);
    const documentCollisions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$detect$2d$element$2d$overflow$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(parent, document.documentElement);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!minSize || size >= minSize, `<Fit />'s child will not fit anywhere with its current ${minSizeProperty} of ${minSize}px.`);
            const newSize = Math.max(size, minSize || 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, `<Fit />'s child needed to have its ${sizeProperty} decreased to ${newSize}px.`);
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
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const elementWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const elementHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const scrollContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const fit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
    }, [
        invertAxis,
        invertSecondaryAxis,
        mainAxis,
        spacing
    ]);
    const child = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fit();
        function onMutation() {
            fit();
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        fit
    ]);
    function assignRefs(domElement) {
        if (!domElement || !(domElement instanceof HTMLElement)) {
            return;
        }
        element.current = domElement;
        scrollContainer.current = findScrollContainer(domElement);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
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
"[project]/Documents/task-creator/node_modules/react-fit/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$fit$2f$dist$2f$Fit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-fit/dist/Fit.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$fit$2f$dist$2f$Fit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/task-creator/node_modules/update-input-width/dist/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/Input.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/update-input-width/dist/esm/index.js [app-ssr] (ecmascript)");
;
;
;
;
const isBrowser = ("TURBOPACK compile-time value", "undefined") !== 'undefined';
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
const isIEOrEdgeLegacy = isBrowser && /(MSIE|Trident\/|Edge\/)/.test(navigator.userAgent);
const isFirefox = isBrowser && /Firefox/.test(navigator.userAgent);
function onFocus(event) {
    const { target } = event;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        target.select();
    }
}
function updateInputWidthOnLoad(element) {
    if (document.readyState === 'complete') {
        return;
    }
    function onLoad() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(element);
    }
    window.addEventListener('load', onLoad);
}
function updateInputWidthOnFontLoad(element) {
    if (!document.fonts) {
        return;
    }
    const font = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontShorthand"])(element);
    if (!font) {
        return;
    }
    const isFontLoaded = document.fonts.check(font);
    if (isFontLoaded) {
        return;
    }
    function onLoadingDone() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(element);
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
    useIsomorphicLayoutEffect(()=>{
        if (!inputRef || !inputRef.current) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(inputRef.current);
        updateInputWidthOnLoad(inputRef.current);
        updateInputWidthOnFontLoad(inputRef.current);
    }, [
        inputRef,
        value
    ]);
    const hasLeadingZero = showLeadingZeros && value && Number(value) < 10 && (value === '0' || !value.toString().startsWith('0'));
    const maxLength = max ? max.toString().length : null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            hasLeadingZero ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: `${className}__leadingZero`,
                children: "0"
            }) : null,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                "aria-label": ariaLabel,
                autoComplete: "off",
                // biome-ignore lint/a11y/noAutofocus: This is up to developers' decision
                autoFocus: autoFocus,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(`${className}__input`, `${className}__${nameForClass || name}`, hasLeadingZero && `${className}__input--hasLeadingZero`),
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event.target);
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
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/DayInput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DayInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function DayInput({ maxDate, minDate, month, year, ...otherProps }) {
    const currentMonthMaxDays = (()=>{
        if (!month) {
            return 31;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDaysInMonth"])(new Date(Number(year), Number(month) - 1, 1));
    })();
    function isSameMonth(date) {
        return year === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(date).toString() && month === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthHuman"])(date).toString();
    }
    const maxDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMin"])(currentMonthMaxDays, maxDate && isSameMonth(maxDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDate"])(maxDate));
    const minDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMax"])(1, minDate && isSameMonth(minDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDate"])(minDate));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: maxDay,
        min: minDay,
        name: "day",
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/MonthInput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonthInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function MonthInput({ maxDate, minDate, year, ...otherProps }) {
    function isSameYear(date) {
        return date && year === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(date).toString();
    }
    const maxMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMin"])(12, maxDate && isSameYear(maxDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthHuman"])(maxDate));
    const minMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMax"])(1, minDate && isSameYear(minDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthHuman"])(minDate));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: maxMonth,
        min: minMonth,
        name: "month",
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/dateFormatter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatMonth",
    ()=>formatMonth,
    "formatShortMonth",
    ()=>formatShortMonth,
    "getFormatter",
    ()=>getFormatter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-ssr] (ecmascript)");
;
const formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        const localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
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
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/MonthSelect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonthSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
function MonthSelect({ ariaLabel, autoFocus, className, disabled, inputRef, locale, maxDate, minDate, onChange, onKeyDown, placeholder = '--', required, short, value, year }) {
    function isSameYear(date) {
        return date && year === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(date).toString();
    }
    const maxMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMin"])(12, maxDate && isSameYear(maxDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthHuman"])(maxDate));
    const minMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMax"])(1, minDate && isSameYear(minDate) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthHuman"])(minDate));
    const dates = [
        ...Array(12)
    ].map((_el, index)=>new Date(2019, index, 1));
    const name = 'month';
    const formatter = short ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatShortMonth"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMonth"];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("select", {
        "aria-label": ariaLabel,
        // biome-ignore lint/a11y/noAutofocus: This is up to developers' decision
        autoFocus: autoFocus,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(`${className}__input`, `${className}__${name}`),
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
            !value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("option", {
                value: "",
                children: placeholder
            }),
            dates.map((date)=>{
                const month = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthHuman"])(date);
                const disabled = month < minMonth || month > maxMonth;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("option", {
                    disabled: disabled,
                    value: month,
                    children: formatter(locale, date)
                }, month);
            })
        ]
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/YearInput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>YearInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function YearInput({ maxDate, minDate, placeholder = '----', valueType, ...otherProps }) {
    const maxYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMin"])(275760, maxDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(maxDate));
    const minYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMax"])(1, minDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(minDate));
    const yearStep = (()=>{
        if (valueType === 'century') {
            return 10;
        }
        return 1;
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: maxYear,
        min: minYear,
        name: "year",
        placeholder: placeholder,
        step: yearStep,
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/dates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/dateFormatter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFormatter",
    ()=>getFormatter,
    "getNumberFormatter",
    ()=>getNumberFormatter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-ssr] (ecmascript)");
;
const formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        const localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
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
        const localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
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
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAmPmLabels",
    ()=>getAmPmLabels,
    "safeMax",
    ()=>safeMax,
    "safeMin",
    ()=>safeMin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
;
const nines = [
    '9',
    '٩'
];
const ninesRegExp = new RegExp(`[${nines.join('')}]`);
const amPmFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFormatter"])({
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
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/AmPm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AmPm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/dates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
function AmPm({ ariaLabel, autoFocus, className, disabled, inputRef, locale, maxTime, minTime, onChange, onKeyDown, required, value }) {
    const amDisabled = minTime ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert24to12"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(minTime))[1] === 'pm' : false;
    const pmDisabled = maxTime ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert24to12"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(maxTime))[1] === 'am' : false;
    const name = 'amPm';
    const [amLabel, pmLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAmPmLabels"])(locale);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("select", {
        "aria-label": ariaLabel,
        // biome-ignore lint/a11y/noAutofocus: This is up to developers' decision
        autoFocus: autoFocus,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(`${className}__input`, `${className}__${name}`),
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
            !value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("option", {
                value: "",
                children: "--"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("option", {
                disabled: amDisabled,
                value: "am",
                children: amLabel
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("option", {
                disabled: pmDisabled,
                value: "pm",
                children: pmLabel
            })
        ]
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Input.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/update-input-width/dist/esm/index.js [app-ssr] (ecmascript)");
;
;
;
;
const isBrowser = ("TURBOPACK compile-time value", "undefined") !== 'undefined';
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
const isIEOrEdgeLegacy = isBrowser && /(MSIE|Trident\/|Edge\/)/.test(navigator.userAgent);
const isFirefox = isBrowser && /Firefox/.test(navigator.userAgent);
function onFocus(event) {
    const { target } = event;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        target.select();
    }
}
function updateInputWidthOnLoad(element) {
    if (document.readyState === 'complete') {
        return;
    }
    function onLoad() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(element);
    }
    window.addEventListener('load', onLoad);
}
function updateInputWidthOnFontLoad(element) {
    if (!document.fonts) {
        return;
    }
    const font = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontShorthand"])(element);
    if (!font) {
        return;
    }
    const isFontLoaded = document.fonts.check(font);
    if (isFontLoaded) {
        return;
    }
    function onLoadingDone() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(element);
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
    useIsomorphicLayoutEffect(()=>{
        if (!inputRef || !inputRef.current) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(inputRef.current);
        updateInputWidthOnLoad(inputRef.current);
        updateInputWidthOnFontLoad(inputRef.current);
    }, [
        inputRef,
        value
    ]);
    const hasLeadingZero = showLeadingZeros && value && Number(value) < 10 && (value === '0' || !value.toString().startsWith('0'));
    const maxLength = max ? max.toString().length : null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            hasLeadingZero ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: `${className}__leadingZero`,
                children: "0"
            }) : null,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                "aria-label": ariaLabel,
                autoComplete: "off",
                // biome-ignore lint/a11y/noAutofocus: This is up to developers' decision
                autoFocus: autoFocus,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(`${className}__input`, `${className}__${nameForClass || name}`, hasLeadingZero && `${className}__input--hasLeadingZero`),
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$update$2d$input$2d$width$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event.target);
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
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Hour12Input.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hour12Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/dates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
function Hour12Input({ amPm, maxTime, minTime, value, ...otherProps }) {
    const maxHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMin"])(12, maxTime && (()=>{
        const [maxHourResult, maxAmPm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert24to12"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(maxTime));
        if (maxAmPm !== amPm) {
            // pm is always after am, so we should ignore validation
            return null;
        }
        return maxHourResult;
    })());
    const minHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMax"])(1, minTime && (()=>{
        const [minHourResult, minAmPm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert24to12"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(minTime));
        if (// pm is always after am, so we should ignore validation
        minAmPm !== amPm || // If minHour is 12 am/pm, user should be able to enter 12, 1, ..., 11.
        minHourResult === 12) {
            return null;
        }
        return minHourResult;
    })());
    const value12 = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert24to12"])(value)[0].toString() : '';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: maxHour,
        min: minHour,
        name: "hour12",
        nameForClass: "hour",
        value: value12,
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Hour24Input.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hour24Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function Hour24Input({ maxTime, minTime, ...otherProps }) {
    const maxHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMin"])(23, maxTime && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(maxTime));
    const minHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMax"])(0, minTime && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(minTime));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: maxHour,
        min: minHour,
        name: "hour24",
        nameForClass: "hour",
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/MinuteInput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MinuteInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function MinuteInput({ hour, maxTime, minTime, showLeadingZeros = true, ...otherProps }) {
    function isSameHour(date) {
        return hour === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(date).toString();
    }
    const maxMinute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMin"])(59, maxTime && isSameHour(maxTime) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMinutes"])(maxTime));
    const minMinute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMax"])(0, minTime && isSameHour(minTime) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMinutes"])(minTime));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: maxMinute,
        min: minMinute,
        name: "minute",
        showLeadingZeros: showLeadingZeros,
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/SecondInput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SecondInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function SecondInput({ hour, maxTime, minTime, minute, showLeadingZeros = true, ...otherProps }) {
    function isSameMinute(date) {
        return hour === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(date).toString() && minute === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMinutes"])(date).toString();
    }
    const maxSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMin"])(59, maxTime && isSameMinute(maxTime) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSeconds"])(maxTime));
    const minSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMax"])(0, minTime && isSameMinute(minTime) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSeconds"])(minTime));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: maxSecond,
        min: minSecond,
        name: "second",
        showLeadingZeros: showLeadingZeros,
        ...otherProps
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimeInput/NativeInput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NativeInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
;
;
function NativeInput({ ariaLabel, disabled, maxDate, minDate, name, onChange, required, value, valueType }) {
    const nativeValueParser = (()=>{
        switch(valueType){
            case 'hour':
                return (receivedValue)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOLocalDate"])(receivedValue)}T${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(receivedValue)}:00`;
            case 'minute':
                return (receivedValue)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOLocalDate"])(receivedValue)}T${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHoursMinutes"])(receivedValue)}`;
            case 'second':
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOLocalDateTime"];
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
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
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/Divider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Divider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
function Divider({ children }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: "react-datetime-picker__inputGroup__divider",
        children: children
    });
}
}),
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/dateFormatter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "getFormatter",
    ()=>getFormatter,
    "getNumberFormatter",
    ()=>getNumberFormatter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/get-user-locale/dist/index.js [app-ssr] (ecmascript)");
;
const formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        const localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
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
        const localeWithDefault = locale || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$get$2d$user$2d$locale$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
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
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/dates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "between",
    ()=>between,
    "getAmPmLabels",
    ()=>getAmPmLabels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
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
const amPmFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFormatter"])({
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
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimeInput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DateTimeInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/@wojtekmaj/date-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$DayInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/DayInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$MonthInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/MonthInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$MonthSelect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/MonthSelect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$YearInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-date-picker/dist/DateInput/YearInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$AmPm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/AmPm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Hour12Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Hour12Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Hour24Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/Hour24Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$MinuteInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/MinuteInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$SecondInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-time-picker/dist/TimeInput/SecondInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimeInput$2f$NativeInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimeInput/NativeInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/Divider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/dateFormatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/dates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/shared/utils.js [app-ssr] (ecmascript)");
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
    return year === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(date).toString() && month === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthHuman"])(date).toString() && day === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDate"])(date).toString();
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["between"])(valuePiece, minDate, maxDate);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
const formatNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumberFormatter"])({
    useGrouping: false
});
function DateTimeInput({ amPmAriaLabel, autoFocus, className, dayAriaLabel, dayPlaceholder, disabled, format, hourAriaLabel, hourPlaceholder, isWidgetOpen: isWidgetOpenProps, locale, maxDate, maxDetail = 'minute', minDate, minuteAriaLabel, minutePlaceholder, monthAriaLabel, monthPlaceholder, name = 'datetime', nativeInputAriaLabel, onChange: onChangeProps, onInvalidChange, required, secondAriaLabel, secondPlaceholder, showLeadingZeros, value: valueProps, yearAriaLabel, yearPlaceholder }) {
    const [amPm, setAmPm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [day, setDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hour, setHour] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [minute, setMinute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [second, setSecond] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const amPmInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const yearInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const monthInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const monthSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dayInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hour12Input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hour24Input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const minuteInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const secondInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isWidgetOpen, setIsWidgetOpenOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isWidgetOpenProps);
    const lastPressedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsWidgetOpenOpen(isWidgetOpenProps);
    }, [
        isWidgetOpenProps
    ]);
    // biome-ignore lint/correctness/useExhaustiveDependencies: useEffect intentionally triggered on props change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const nextValue = getDetailValueFrom({
            value: valueProps,
            minDate,
            maxDate
        });
        if (nextValue) {
            setAmPm((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert24to12"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(nextValue))[1]);
            setYear((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYear"])(nextValue).toString());
            setMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthHuman"])(nextValue).toString());
            setDay((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDate"])(nextValue).toString());
            setHour((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHours"])(nextValue).toString());
            setMinute((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMinutes"])(nextValue).toString());
            setSecond((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSeconds"])(nextValue).toString());
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
    }, [
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFormatter"])(formatterOptions);
    })();
    const datePlaceholder = (()=>{
        const year = 2017;
        const monthIndex = 11;
        const day = 11;
        const date = new Date(year, monthIndex, day);
        const formattedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(locale, date);
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dateFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFormatter"])(formatterOptions)(locale, dateToFormat).match(/\d{1,}/);
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
        return formatTime(locale, date).replace(formatNumber(locale, hour12), 'h').replace(formatNumber(locale, hour24), 'H').replace(formatNumber(locale, minute), 'mm').replace(formatNumber(locale, second), 'ss').replace(new RegExp((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAmPmLabels"])(locale).join('|')), 'a');
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHoursMinutesSeconds"])(maxDate || defaultMaxDate);
    })();
    const minTime = (()=>{
        if (!minDate) {
            return undefined;
        }
        if (!isSameDate(minDate, year, month, day)) {
            return undefined;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f40$wojtekmaj$2f$date$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHoursMinutesSeconds"])(minDate || defaultMinDate);
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
            const hour = Number(values.hour24 || values.hour12 && values.amPm && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert12to24"])(values.hour12, values.amPm) || 0);
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
                setHour(value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$shared$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert12to24"])(value, amPm || 'am').toString() : '');
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$DayInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$MonthSelect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$MonthInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$DateInput$2f$YearInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Hour12Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$Hour24Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$MinuteInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$SecondInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$time$2d$picker$2f$dist$2f$TimeInput$2f$AmPm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimeInput$2f$NativeInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: className,
        onClick: onClick,
        children: [
            renderNativeInput(),
            renderCustomInputsInternal()
        ]
    }));
}
}),
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimePicker.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DateTimePicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$make$2d$event$2d$props$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/make-event-props/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-calendar/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-clock/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$fit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-fit/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimeInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimeInput.js [app-ssr] (ecmascript)");
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
const CalendarIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
    ...iconProps,
    "aria-hidden": "true",
    className: `${baseClassName}__calendar-button__icon ${baseClassName}__button__icon`,
    children: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("rect", {
            fill: "none",
            height: "15",
            width: "15",
            x: "2",
            y: "2"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
            x1: "6",
            x2: "6",
            y1: "0",
            y2: "4"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
            x1: "13",
            x2: "13",
            y1: "0",
            y2: "4"
        })
    ]
});
const ClearIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
    ...iconProps,
    "aria-hidden": "true",
    className: `${baseClassName}__clear-button__icon ${baseClassName}__button__icon`,
    children: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
            x1: "4",
            x2: "15",
            y1: "4",
            y2: "15"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("line", {
            x1: "15",
            x2: "4",
            y1: "4",
            y2: "15"
        })
    ]
});
function DateTimePicker(props) {
    const { amPmAriaLabel, autoFocus, calendarAriaLabel, calendarIcon = CalendarIcon, className, clearAriaLabel, clearIcon = ClearIcon, closeWidgets: shouldCloseWidgetsOnSelect = true, 'data-testid': dataTestid, dayAriaLabel, dayPlaceholder, disableCalendar, disableClock, disabled, format, hourAriaLabel, hourPlaceholder, id, isCalendarOpen: isCalendarOpenProps = null, isClockOpen: isClockOpenProps = null, locale, maxDate, maxDetail = 'minute', minDate, minuteAriaLabel, minutePlaceholder, monthAriaLabel, monthPlaceholder, name = 'datetime', nativeInputAriaLabel, onCalendarClose, onCalendarOpen, onChange: onChangeProps, onClockClose, onClockOpen, onFocus: onFocusProps, onInvalidChange, openWidgetsOnFocus = true, required, secondAriaLabel, secondPlaceholder, shouldCloseWidgets, shouldOpenWidgets, showLeadingZeros, value, yearAriaLabel, yearPlaceholder, ...otherProps } = props;
    const [isCalendarOpen, setIsCalendarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isCalendarOpenProps);
    const [isClockOpen, setIsClockOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isClockOpenProps);
    const wrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const calendarWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clockWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsCalendarOpen(isCalendarOpenProps);
    }, [
        isCalendarOpenProps
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClockOpen(isClockOpenProps);
    }, [
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
    const closeCalendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(({ reason })=>{
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
    }, [
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
    const closeClock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(({ reason })=>{
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
    }, [
        onClockClose,
        shouldCloseWidgets
    ]);
    const closeWidgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(({ reason })=>{
        closeCalendar({
            reason
        });
        closeClock({
            reason
        });
    }, [
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
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (event.key === 'Escape') {
            closeWidgets({
                reason: 'escape'
            });
        }
    }, [
        closeWidgets
    ]);
    function clear() {
        onChange(null);
    }
    function stopPropagation(event) {
        event.stopPropagation();
    }
    const onOutsideAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
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
    }, [
        closeWidgets
    ]);
    const handleOutsideActionListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((shouldListen = isCalendarOpen || isClockOpen)=>{
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
    }, [
        isCalendarOpen,
        isClockOpen,
        onOutsideAction,
        onKeyDown
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleOutsideActionListeners();
        return ()=>{
            handleOutsideActionListeners(false);
        };
    }, [
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: `${baseClassName}__wrapper`,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimeInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                clearIcon !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    "aria-label": clearAriaLabel,
                    className: `${baseClassName}__clear-button ${baseClassName}__button`,
                    disabled: disabled,
                    onClick: clear,
                    onFocus: stopPropagation,
                    type: "button",
                    children: typeof clearIcon === 'function' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(clearIcon) : clearIcon
                }),
                calendarIcon !== null && !disableCalendar && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    "aria-expanded": isCalendarOpen || false,
                    "aria-label": calendarAriaLabel,
                    className: `${baseClassName}__calendar-button ${baseClassName}__button`,
                    disabled: disabled,
                    onClick: toggleCalendar,
                    onFocus: stopPropagation,
                    type: "button",
                    children: typeof calendarIcon === 'function' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(calendarIcon) : calendarIcon
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
        const classNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, `${className}--${isCalendarOpen ? 'open' : 'closed'}`);
        const calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$calendar$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            onChange: (value)=>onDateChange(value),
            value: value,
            ...calendarProps
        });
        return portalContainer ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: calendarWrapper,
            className: classNames,
            children: calendar
        }), portalContainer) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$fit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
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
        const classNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, `${className}--${isClockOpen ? 'open' : 'closed'}`);
        const [valueFrom] = Array.isArray(value) ? value : [
            value
        ];
        const maxDetailIndex = allViews.indexOf(maxDetail);
        const clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$clock$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            locale: locale,
            renderMinuteHand: maxDetailIndex > 0,
            renderSecondHand: maxDetailIndex > 1,
            value: valueFrom,
            ...clockProps
        });
        return portalContainer ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: clockWrapper,
            className: classNames,
            children: clock
        }), portalContainer) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$fit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
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
    const eventProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$make$2d$event$2d$props$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(otherProps), // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [
        otherProps
    ]);
    return(// biome-ignore lint/a11y/noStaticElementInteractions: False positive caused by non interactive wrapper listening for bubbling events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(baseClassName, `${baseClassName}--${isCalendarOpen || isClockOpen ? 'open' : 'closed'}`, `${baseClassName}--${disabled ? 'disabled' : 'enabled'}`, className),
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
"[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimePicker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/task-creator/node_modules/react-datetime-picker/dist/DateTimePicker.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$task$2d$creator$2f$node_modules$2f$react$2d$datetime$2d$picker$2f$dist$2f$DateTimePicker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
];

//# sourceMappingURL=02e7e_37526c92._.js.map