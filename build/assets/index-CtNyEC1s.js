function bm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Om(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Fm = { exports: {} },
  Ua = {},
  Vm = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gs = Symbol.for("react.element"),
  D1 = Symbol.for("react.portal"),
  A1 = Symbol.for("react.fragment"),
  L1 = Symbol.for("react.strict_mode"),
  I1 = Symbol.for("react.profiler"),
  M1 = Symbol.for("react.provider"),
  b1 = Symbol.for("react.context"),
  O1 = Symbol.for("react.forward_ref"),
  F1 = Symbol.for("react.suspense"),
  V1 = Symbol.for("react.memo"),
  B1 = Symbol.for("react.lazy"),
  Nf = Symbol.iterator;
function U1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nf && e[Nf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Bm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Um = Object.assign,
  zm = {};
function Ni(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zm),
    (this.updater = n || Bm);
}
Ni.prototype.isReactComponent = {};
Ni.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ni.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $m() {}
$m.prototype = Ni.prototype;
function bc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zm),
    (this.updater = n || Bm);
}
var Oc = (bc.prototype = new $m());
Oc.constructor = bc;
Um(Oc, Ni.prototype);
Oc.isPureReactComponent = !0;
var jf = Array.isArray,
  Wm = Object.prototype.hasOwnProperty,
  Fc = { current: null },
  Hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gm(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Wm.call(t, r) && !Hm.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Gs,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Fc.current,
  };
}
function z1(e, t) {
  return {
    $$typeof: Gs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Vc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gs;
}
function $1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Rf = /\/+/g;
function Sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? $1("" + e.key)
    : t.toString(36);
}
function Fo(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gs:
          case D1:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Sl(o, 0) : r),
      jf(i)
        ? ((n = ""),
          e != null && (n = e.replace(Rf, "$&/") + "/"),
          Fo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Vc(i) &&
            (i = z1(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Rf, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), jf(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + Sl(s, a);
      o += Fo(s, t, n, l, i);
    }
  else if (((l = U1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + Sl(s, a++)), (o += Fo(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function po(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Fo(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function W1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var st = { current: null },
  Vo = { transition: null },
  H1 = {
    ReactCurrentDispatcher: st,
    ReactCurrentBatchConfig: Vo,
    ReactCurrentOwner: Fc,
  };
function Km() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: po,
  forEach: function (e, t, n) {
    po(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      po(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      po(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Vc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = Ni;
X.Fragment = A1;
X.Profiler = I1;
X.PureComponent = bc;
X.StrictMode = L1;
X.Suspense = F1;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H1;
X.act = Km;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Um({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Fc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Wm.call(t, l) &&
        !Hm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Gs, type: e.type, key: i, ref: s, props: r, _owner: o };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: b1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: M1, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = Gm;
X.createFactory = function (e) {
  var t = Gm.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: O1, render: e };
};
X.isValidElement = Vc;
X.lazy = function (e) {
  return { $$typeof: B1, _payload: { _status: -1, _result: e }, _init: W1 };
};
X.memo = function (e, t) {
  return { $$typeof: V1, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Vo.transition;
  Vo.transition = {};
  try {
    e();
  } finally {
    Vo.transition = t;
  }
};
X.unstable_act = Km;
X.useCallback = function (e, t) {
  return st.current.useCallback(e, t);
};
X.useContext = function (e) {
  return st.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return st.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return st.current.useEffect(e, t);
};
X.useId = function () {
  return st.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return st.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return st.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return st.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return st.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return st.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return st.current.useRef(e);
};
X.useState = function (e) {
  return st.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return st.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return st.current.useTransition();
};
X.version = "18.3.1";
Vm.exports = X;
var C = Vm.exports;
const dn = Om(C),
  G1 = bm({ __proto__: null, default: dn }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var K1 = C,
  Y1 = Symbol.for("react.element"),
  X1 = Symbol.for("react.fragment"),
  Q1 = Object.prototype.hasOwnProperty,
  J1 = K1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Z1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ym(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Q1.call(t, r) && !Z1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Y1,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: J1.current,
  };
}
Ua.Fragment = X1;
Ua.jsx = Ym;
Ua.jsxs = Ym;
Fm.exports = Ua;
var c = Fm.exports,
  _u = {},
  Xm = { exports: {} },
  _t = {},
  Qm = { exports: {} },
  Jm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, $) {
    var W = M.length;
    M.push($);
    e: for (; 0 < W; ) {
      var J = (W - 1) >>> 1,
        he = M[J];
      if (0 < i(he, $)) (M[J] = $), (M[W] = he), (W = J);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var $ = M[0],
      W = M.pop();
    if (W !== $) {
      M[0] = W;
      e: for (var J = 0, he = M.length, $t = he >>> 1; J < $t; ) {
        var Be = 2 * (J + 1) - 1,
          Dt = M[Be],
          qe = Be + 1,
          Fr = M[qe];
        if (0 > i(Dt, W))
          qe < he && 0 > i(Fr, Dt)
            ? ((M[J] = Fr), (M[qe] = W), (J = qe))
            : ((M[J] = Dt), (M[Be] = W), (J = Be));
        else if (qe < he && 0 > i(Fr, W)) (M[J] = Fr), (M[qe] = W), (J = qe);
        else break e;
      }
    }
    return $;
  }
  function i(M, $) {
    var W = M.sortIndex - $.sortIndex;
    return W !== 0 ? W : M.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    f = 1,
    d = null,
    h = 3,
    v = !1,
    y = !1,
    x = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(M) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= M)
        r(u), ($.sortIndex = $.expirationTime), t(l, $);
      else break;
      $ = n(u);
    }
  }
  function E(M) {
    if (((x = !1), g(M), !y))
      if (n(l) !== null) (y = !0), be(k);
      else {
        var $ = n(u);
        $ !== null && se(E, $.startTime - M);
      }
  }
  function k(M, $) {
    (y = !1), x && ((x = !1), m(N), (N = -1)), (v = !0);
    var W = h;
    try {
      for (
        g($), d = n(l);
        d !== null && (!(d.expirationTime > $) || (M && !H()));

      ) {
        var J = d.callback;
        if (typeof J == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var he = J(d.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof he == "function" ? (d.callback = he) : d === n(l) && r(l),
            g($);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var $t = !0;
      else {
        var Be = n(u);
        Be !== null && se(E, Be.startTime - $), ($t = !1);
      }
      return $t;
    } finally {
      (d = null), (h = W), (v = !1);
    }
  }
  var w = !1,
    D = null,
    N = -1,
    A = 5,
    L = -1;
  function H() {
    return !(e.unstable_now() - L < A);
  }
  function ae() {
    if (D !== null) {
      var M = e.unstable_now();
      L = M;
      var $ = !0;
      try {
        $ = D(!0, M);
      } finally {
        $ ? je() : ((w = !1), (D = null));
      }
    } else w = !1;
  }
  var je;
  if (typeof p == "function")
    je = function () {
      p(ae);
    };
  else if (typeof MessageChannel < "u") {
    var ee = new MessageChannel(),
      ce = ee.port2;
    (ee.port1.onmessage = ae),
      (je = function () {
        ce.postMessage(null);
      });
  } else
    je = function () {
      P(ae, 0);
    };
  function be(M) {
    (D = M), w || ((w = !0), je());
  }
  function se(M, $) {
    N = P(function () {
      M(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), be(k));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = h;
      }
      var W = h;
      h = $;
      try {
        return M();
      } finally {
        h = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, $) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var W = h;
      h = M;
      try {
        return $();
      } finally {
        h = W;
      }
    }),
    (e.unstable_scheduleCallback = function (M, $, W) {
      var J = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? J + W : J))
          : (W = J),
        M)
      ) {
        case 1:
          var he = -1;
          break;
        case 2:
          he = 250;
          break;
        case 5:
          he = 1073741823;
          break;
        case 4:
          he = 1e4;
          break;
        default:
          he = 5e3;
      }
      return (
        (he = W + he),
        (M = {
          id: f++,
          callback: $,
          priorityLevel: M,
          startTime: W,
          expirationTime: he,
          sortIndex: -1,
        }),
        W > J
          ? ((M.sortIndex = W),
            t(u, M),
            n(l) === null &&
              M === n(u) &&
              (x ? (m(N), (N = -1)) : (x = !0), se(E, W - J)))
          : ((M.sortIndex = he), t(l, M), y || v || ((y = !0), be(k))),
        M
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (M) {
      var $ = h;
      return function () {
        var W = h;
        h = $;
        try {
          return M.apply(this, arguments);
        } finally {
          h = W;
        }
      };
    });
})(Jm);
Qm.exports = Jm;
var q1 = Qm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ex = C,
  xt = q1;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zm = new Set(),
  xs = {};
function Mr(e, t) {
  yi(e, t), yi(e + "Capture", t);
}
function yi(e, t) {
  for (xs[e] = t, e = 0; e < t.length; e++) Zm.add(t[e]);
}
var gn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Su = Object.prototype.hasOwnProperty,
  tx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Df = {},
  Af = {};
function nx(e) {
  return Su.call(Af, e)
    ? !0
    : Su.call(Df, e)
    ? !1
    : tx.test(e)
    ? (Af[e] = !0)
    : ((Df[e] = !0), !1);
}
function rx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ix(e, t, n, r) {
  if (t === null || typeof t > "u" || rx(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ot(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var He = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    He[e] = new ot(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  He[t] = new ot(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  He[e] = new ot(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  He[e] = new ot(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    He[e] = new ot(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  He[e] = new ot(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  He[e] = new ot(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  He[e] = new ot(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  He[e] = new ot(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bc = /[\-:]([a-z])/g;
function Uc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bc, Uc);
    He[t] = new ot(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bc, Uc);
    He[t] = new ot(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bc, Uc);
  He[t] = new ot(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  He[e] = new ot(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
He.xlinkHref = new ot(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  He[e] = new ot(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zc(e, t, n, r) {
  var i = He.hasOwnProperty(t) ? He[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ix(t, n, i, r) && (n = null),
    r || i === null
      ? nx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _n = ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mo = Symbol.for("react.element"),
  Gr = Symbol.for("react.portal"),
  Kr = Symbol.for("react.fragment"),
  $c = Symbol.for("react.strict_mode"),
  Eu = Symbol.for("react.profiler"),
  qm = Symbol.for("react.provider"),
  eg = Symbol.for("react.context"),
  Wc = Symbol.for("react.forward_ref"),
  Pu = Symbol.for("react.suspense"),
  Tu = Symbol.for("react.suspense_list"),
  Hc = Symbol.for("react.memo"),
  Ln = Symbol.for("react.lazy"),
  tg = Symbol.for("react.offscreen"),
  Lf = Symbol.iterator;
function bi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lf && e[Lf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ee = Object.assign,
  El;
function Qi(e) {
  if (El === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      El = (t && t[1]) || "";
    }
  return (
    `
` +
    El +
    e
  );
}
var Pl = !1;
function Tl(e, t) {
  if (!e || Pl) return "";
  Pl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Pl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Qi(e) : "";
}
function sx(e) {
  switch (e.tag) {
    case 5:
      return Qi(e.type);
    case 16:
      return Qi("Lazy");
    case 13:
      return Qi("Suspense");
    case 19:
      return Qi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Tl(e.type, !1)), e;
    case 11:
      return (e = Tl(e.type.render, !1)), e;
    case 1:
      return (e = Tl(e.type, !0)), e;
    default:
      return "";
  }
}
function Cu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kr:
      return "Fragment";
    case Gr:
      return "Portal";
    case Eu:
      return "Profiler";
    case $c:
      return "StrictMode";
    case Pu:
      return "Suspense";
    case Tu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case eg:
        return (e.displayName || "Context") + ".Consumer";
      case qm:
        return (e._context.displayName || "Context") + ".Provider";
      case Wc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Hc:
        return (
          (t = e.displayName || null), t !== null ? t : Cu(e.type) || "Memo"
        );
      case Ln:
        (t = e._payload), (e = e._init);
        try {
          return Cu(e(t));
        } catch {}
    }
  return null;
}
function ox(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Cu(t);
    case 8:
      return t === $c ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ng(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ax(e) {
  var t = ng(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function go(e) {
  e._valueTracker || (e._valueTracker = ax(e));
}
function rg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ng(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ra(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ku(e, t) {
  var n = t.checked;
  return Ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function If(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ig(e, t) {
  (t = t.checked), t != null && zc(e, "checked", t, !1);
}
function Nu(e, t) {
  ig(e, t);
  var n = Zn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ju(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ju(e, t.type, Zn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Mf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ju(e, t, n) {
  (t !== "number" || ra(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ji = Array.isArray;
function ui(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ru(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return Ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Ji(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Zn(n) };
}
function sg(e, t) {
  var n = Zn(t.value),
    r = Zn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Of(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function og(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Du(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? og(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vo,
  ag = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vo = vo || document.createElement("div"),
          vo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ws(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var rs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  lx = ["Webkit", "ms", "Moz", "O"];
Object.keys(rs).forEach(function (e) {
  lx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (rs[t] = rs[e]);
  });
});
function lg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (rs.hasOwnProperty(e) && rs[e])
    ? ("" + t).trim()
    : t + "px";
}
function ug(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = lg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var ux = Ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Au(e, t) {
  if (t) {
    if (ux[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Lu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Iu = null;
function Gc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Mu = null,
  ci = null,
  di = null;
function Ff(e) {
  if ((e = Xs(e))) {
    if (typeof Mu != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Ga(t)), Mu(e.stateNode, e.type, t));
  }
}
function cg(e) {
  ci ? (di ? di.push(e) : (di = [e])) : (ci = e);
}
function dg() {
  if (ci) {
    var e = ci,
      t = di;
    if (((di = ci = null), Ff(e), t)) for (e = 0; e < t.length; e++) Ff(t[e]);
  }
}
function fg(e, t) {
  return e(t);
}
function hg() {}
var Cl = !1;
function pg(e, t, n) {
  if (Cl) return e(t, n);
  Cl = !0;
  try {
    return fg(e, t, n);
  } finally {
    (Cl = !1), (ci !== null || di !== null) && (hg(), dg());
  }
}
function _s(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ga(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var bu = !1;
if (gn)
  try {
    var Oi = {};
    Object.defineProperty(Oi, "passive", {
      get: function () {
        bu = !0;
      },
    }),
      window.addEventListener("test", Oi, Oi),
      window.removeEventListener("test", Oi, Oi);
  } catch {
    bu = !1;
  }
function cx(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var is = !1,
  ia = null,
  sa = !1,
  Ou = null,
  dx = {
    onError: function (e) {
      (is = !0), (ia = e);
    },
  };
function fx(e, t, n, r, i, s, o, a, l) {
  (is = !1), (ia = null), cx.apply(dx, arguments);
}
function hx(e, t, n, r, i, s, o, a, l) {
  if ((fx.apply(this, arguments), is)) {
    if (is) {
      var u = ia;
      (is = !1), (ia = null);
    } else throw Error(R(198));
    sa || ((sa = !0), (Ou = u));
  }
}
function br(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function mg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Vf(e) {
  if (br(e) !== e) throw Error(R(188));
}
function px(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = br(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Vf(i), e;
        if (s === r) return Vf(i), t;
        s = s.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function gg(e) {
  return (e = px(e)), e !== null ? vg(e) : null;
}
function vg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yg = xt.unstable_scheduleCallback,
  Bf = xt.unstable_cancelCallback,
  mx = xt.unstable_shouldYield,
  gx = xt.unstable_requestPaint,
  Ne = xt.unstable_now,
  vx = xt.unstable_getCurrentPriorityLevel,
  Kc = xt.unstable_ImmediatePriority,
  xg = xt.unstable_UserBlockingPriority,
  oa = xt.unstable_NormalPriority,
  yx = xt.unstable_LowPriority,
  wg = xt.unstable_IdlePriority,
  za = null,
  Qt = null;
function xx(e) {
  if (Qt && typeof Qt.onCommitFiberRoot == "function")
    try {
      Qt.onCommitFiberRoot(za, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Vt = Math.clz32 ? Math.clz32 : Sx,
  wx = Math.log,
  _x = Math.LN2;
function Sx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wx(e) / _x) | 0)) | 0;
}
var yo = 64,
  xo = 4194304;
function Zi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function aa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Zi(a)) : ((s &= o), s !== 0 && (r = Zi(s)));
  } else (o = n & ~i), o !== 0 ? (r = Zi(o)) : s !== 0 && (r = Zi(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Vt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ex(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Px(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Vt(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = Ex(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function Fu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _g() {
  var e = yo;
  return (yo <<= 1), !(yo & 4194240) && (yo = 64), e;
}
function kl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ks(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Vt(t)),
    (e[t] = n);
}
function Tx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Vt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Yc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Vt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ie = 0;
function Sg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Eg,
  Xc,
  Pg,
  Tg,
  Cg,
  Vu = !1,
  wo = [],
  Un = null,
  zn = null,
  $n = null,
  Ss = new Map(),
  Es = new Map(),
  bn = [],
  Cx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Uf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Un = null;
      break;
    case "dragenter":
    case "dragleave":
      zn = null;
      break;
    case "mouseover":
    case "mouseout":
      $n = null;
      break;
    case "pointerover":
    case "pointerout":
      Ss.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Es.delete(t.pointerId);
  }
}
function Fi(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Xs(t)), t !== null && Xc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function kx(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Un = Fi(Un, e, t, n, r, i)), !0;
    case "dragenter":
      return (zn = Fi(zn, e, t, n, r, i)), !0;
    case "mouseover":
      return ($n = Fi($n, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Ss.set(s, Fi(Ss.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Es.set(s, Fi(Es.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function kg(e) {
  var t = xr(e.target);
  if (t !== null) {
    var n = br(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = mg(n)), t !== null)) {
          (e.blockedOn = t),
            Cg(e.priority, function () {
              Pg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Bo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Iu = r), n.target.dispatchEvent(r), (Iu = null);
    } else return (t = Xs(n)), t !== null && Xc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function zf(e, t, n) {
  Bo(e) && n.delete(t);
}
function Nx() {
  (Vu = !1),
    Un !== null && Bo(Un) && (Un = null),
    zn !== null && Bo(zn) && (zn = null),
    $n !== null && Bo($n) && ($n = null),
    Ss.forEach(zf),
    Es.forEach(zf);
}
function Vi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Vu ||
      ((Vu = !0),
      xt.unstable_scheduleCallback(xt.unstable_NormalPriority, Nx)));
}
function Ps(e) {
  function t(i) {
    return Vi(i, e);
  }
  if (0 < wo.length) {
    Vi(wo[0], e);
    for (var n = 1; n < wo.length; n++) {
      var r = wo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Un !== null && Vi(Un, e),
      zn !== null && Vi(zn, e),
      $n !== null && Vi($n, e),
      Ss.forEach(t),
      Es.forEach(t),
      n = 0;
    n < bn.length;
    n++
  )
    (r = bn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bn.length && ((n = bn[0]), n.blockedOn === null); )
    kg(n), n.blockedOn === null && bn.shift();
}
var fi = _n.ReactCurrentBatchConfig,
  la = !0;
function jx(e, t, n, r) {
  var i = ie,
    s = fi.transition;
  fi.transition = null;
  try {
    (ie = 1), Qc(e, t, n, r);
  } finally {
    (ie = i), (fi.transition = s);
  }
}
function Rx(e, t, n, r) {
  var i = ie,
    s = fi.transition;
  fi.transition = null;
  try {
    (ie = 4), Qc(e, t, n, r);
  } finally {
    (ie = i), (fi.transition = s);
  }
}
function Qc(e, t, n, r) {
  if (la) {
    var i = Bu(e, t, n, r);
    if (i === null) Ol(e, t, r, ua, n), Uf(e, r);
    else if (kx(i, e, t, n, r)) r.stopPropagation();
    else if ((Uf(e, r), t & 4 && -1 < Cx.indexOf(e))) {
      for (; i !== null; ) {
        var s = Xs(i);
        if (
          (s !== null && Eg(s),
          (s = Bu(e, t, n, r)),
          s === null && Ol(e, t, r, ua, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Ol(e, t, r, null, n);
  }
}
var ua = null;
function Bu(e, t, n, r) {
  if (((ua = null), (e = Gc(r)), (e = xr(e)), e !== null))
    if (((t = br(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = mg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ua = e), null;
}
function Ng(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (vx()) {
        case Kc:
          return 1;
        case xg:
          return 4;
        case oa:
        case yx:
          return 16;
        case wg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Fn = null,
  Jc = null,
  Uo = null;
function jg() {
  if (Uo) return Uo;
  var e,
    t = Jc,
    n = t.length,
    r,
    i = "value" in Fn ? Fn.value : Fn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Uo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function zo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _o() {
  return !0;
}
function $f() {
  return !1;
}
function St(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? _o
        : $f),
      (this.isPropagationStopped = $f),
      this
    );
  }
  return (
    Ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = _o));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = _o));
      },
      persist: function () {},
      isPersistent: _o,
    }),
    t
  );
}
var ji = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zc = St(ji),
  Ys = Ee({}, ji, { view: 0, detail: 0 }),
  Dx = St(Ys),
  Nl,
  jl,
  Bi,
  $a = Ee({}, Ys, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: qc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Bi &&
            (Bi && e.type === "mousemove"
              ? ((Nl = e.screenX - Bi.screenX), (jl = e.screenY - Bi.screenY))
              : (jl = Nl = 0),
            (Bi = e)),
          Nl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : jl;
    },
  }),
  Wf = St($a),
  Ax = Ee({}, $a, { dataTransfer: 0 }),
  Lx = St(Ax),
  Ix = Ee({}, Ys, { relatedTarget: 0 }),
  Rl = St(Ix),
  Mx = Ee({}, ji, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bx = St(Mx),
  Ox = Ee({}, ji, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Fx = St(Ox),
  Vx = Ee({}, ji, { data: 0 }),
  Hf = St(Vx),
  Bx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ux = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  zx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function $x(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zx[e]) ? !!t[e] : !1;
}
function qc() {
  return $x;
}
var Wx = Ee({}, Ys, {
    key: function (e) {
      if (e.key) {
        var t = Bx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ux[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qc,
    charCode: function (e) {
      return e.type === "keypress" ? zo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Hx = St(Wx),
  Gx = Ee({}, $a, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gf = St(Gx),
  Kx = Ee({}, Ys, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qc,
  }),
  Yx = St(Kx),
  Xx = Ee({}, ji, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qx = St(Xx),
  Jx = Ee({}, $a, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zx = St(Jx),
  qx = [9, 13, 27, 32],
  ed = gn && "CompositionEvent" in window,
  ss = null;
gn && "documentMode" in document && (ss = document.documentMode);
var ew = gn && "TextEvent" in window && !ss,
  Rg = gn && (!ed || (ss && 8 < ss && 11 >= ss)),
  Kf = " ",
  Yf = !1;
function Dg(e, t) {
  switch (e) {
    case "keyup":
      return qx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ag(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yr = !1;
function tw(e, t) {
  switch (e) {
    case "compositionend":
      return Ag(t);
    case "keypress":
      return t.which !== 32 ? null : ((Yf = !0), Kf);
    case "textInput":
      return (e = t.data), e === Kf && Yf ? null : e;
    default:
      return null;
  }
}
function nw(e, t) {
  if (Yr)
    return e === "compositionend" || (!ed && Dg(e, t))
      ? ((e = jg()), (Uo = Jc = Fn = null), (Yr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Xf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rw[e.type] : t === "textarea";
}
function Lg(e, t, n, r) {
  cg(r),
    (t = ca(t, "onChange")),
    0 < t.length &&
      ((n = new Zc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var os = null,
  Ts = null;
function iw(e) {
  Wg(e, 0);
}
function Wa(e) {
  var t = Jr(e);
  if (rg(t)) return e;
}
function sw(e, t) {
  if (e === "change") return t;
}
var Ig = !1;
if (gn) {
  var Dl;
  if (gn) {
    var Al = "oninput" in document;
    if (!Al) {
      var Qf = document.createElement("div");
      Qf.setAttribute("oninput", "return;"),
        (Al = typeof Qf.oninput == "function");
    }
    Dl = Al;
  } else Dl = !1;
  Ig = Dl && (!document.documentMode || 9 < document.documentMode);
}
function Jf() {
  os && (os.detachEvent("onpropertychange", Mg), (Ts = os = null));
}
function Mg(e) {
  if (e.propertyName === "value" && Wa(Ts)) {
    var t = [];
    Lg(t, Ts, e, Gc(e)), pg(iw, t);
  }
}
function ow(e, t, n) {
  e === "focusin"
    ? (Jf(), (os = t), (Ts = n), os.attachEvent("onpropertychange", Mg))
    : e === "focusout" && Jf();
}
function aw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Wa(Ts);
}
function lw(e, t) {
  if (e === "click") return Wa(t);
}
function uw(e, t) {
  if (e === "input" || e === "change") return Wa(t);
}
function cw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ut = typeof Object.is == "function" ? Object.is : cw;
function Cs(e, t) {
  if (Ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Su.call(t, i) || !Ut(e[i], t[i])) return !1;
  }
  return !0;
}
function Zf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qf(e, t) {
  var n = Zf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Zf(n);
  }
}
function bg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Og() {
  for (var e = window, t = ra(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ra(e.document);
  }
  return t;
}
function td(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function dw(e) {
  var t = Og(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    bg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && td(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = qf(n, s));
        var o = qf(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fw = gn && "documentMode" in document && 11 >= document.documentMode,
  Xr = null,
  Uu = null,
  as = null,
  zu = !1;
function eh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zu ||
    Xr == null ||
    Xr !== ra(r) ||
    ((r = Xr),
    "selectionStart" in r && td(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (as && Cs(as, r)) ||
      ((as = r),
      (r = ca(Uu, "onSelect")),
      0 < r.length &&
        ((t = new Zc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xr))));
}
function So(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Qr = {
    animationend: So("Animation", "AnimationEnd"),
    animationiteration: So("Animation", "AnimationIteration"),
    animationstart: So("Animation", "AnimationStart"),
    transitionend: So("Transition", "TransitionEnd"),
  },
  Ll = {},
  Fg = {};
gn &&
  ((Fg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qr.animationend.animation,
    delete Qr.animationiteration.animation,
    delete Qr.animationstart.animation),
  "TransitionEvent" in window || delete Qr.transitionend.transition);
function Ha(e) {
  if (Ll[e]) return Ll[e];
  if (!Qr[e]) return e;
  var t = Qr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fg) return (Ll[e] = t[n]);
  return e;
}
var Vg = Ha("animationend"),
  Bg = Ha("animationiteration"),
  Ug = Ha("animationstart"),
  zg = Ha("transitionend"),
  $g = new Map(),
  th =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function or(e, t) {
  $g.set(e, t), Mr(t, [e]);
}
for (var Il = 0; Il < th.length; Il++) {
  var Ml = th[Il],
    hw = Ml.toLowerCase(),
    pw = Ml[0].toUpperCase() + Ml.slice(1);
  or(hw, "on" + pw);
}
or(Vg, "onAnimationEnd");
or(Bg, "onAnimationIteration");
or(Ug, "onAnimationStart");
or("dblclick", "onDoubleClick");
or("focusin", "onFocus");
or("focusout", "onBlur");
or(zg, "onTransitionEnd");
yi("onMouseEnter", ["mouseout", "mouseover"]);
yi("onMouseLeave", ["mouseout", "mouseover"]);
yi("onPointerEnter", ["pointerout", "pointerover"]);
yi("onPointerLeave", ["pointerout", "pointerover"]);
Mr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var qi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  mw = new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));
function nh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), hx(r, t, void 0, e), (e.currentTarget = null);
}
function Wg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          nh(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          nh(i, a, u), (s = l);
        }
    }
  }
  if (sa) throw ((e = Ou), (sa = !1), (Ou = null), e);
}
function pe(e, t) {
  var n = t[Ku];
  n === void 0 && (n = t[Ku] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Hg(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), Hg(n, e, r, t);
}
var Eo = "_reactListening" + Math.random().toString(36).slice(2);
function ks(e) {
  if (!e[Eo]) {
    (e[Eo] = !0),
      Zm.forEach(function (n) {
        n !== "selectionchange" && (mw.has(n) || bl(n, !1, e), bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Eo] || ((t[Eo] = !0), bl("selectionchange", !1, t));
  }
}
function Hg(e, t, n, r) {
  switch (Ng(t)) {
    case 1:
      var i = jx;
      break;
    case 4:
      i = Rx;
      break;
    default:
      i = Qc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !bu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ol(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = xr(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  pg(function () {
    var u = s,
      f = Gc(n),
      d = [];
    e: {
      var h = $g.get(e);
      if (h !== void 0) {
        var v = Zc,
          y = e;
        switch (e) {
          case "keypress":
            if (zo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Hx;
            break;
          case "focusin":
            (y = "focus"), (v = Rl);
            break;
          case "focusout":
            (y = "blur"), (v = Rl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Rl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Wf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Lx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Yx;
            break;
          case Vg:
          case Bg:
          case Ug:
            v = bx;
            break;
          case zg:
            v = Qx;
            break;
          case "scroll":
            v = Dx;
            break;
          case "wheel":
            v = Zx;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Fx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Gf;
        }
        var x = (t & 4) !== 0,
          P = !x && e === "scroll",
          m = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var E = g.stateNode;
          if (
            (g.tag === 5 &&
              E !== null &&
              ((g = E),
              m !== null && ((E = _s(p, m)), E != null && x.push(Ns(p, E, g)))),
            P)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((h = new v(h, y, null, n, f)), d.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Iu &&
            (y = n.relatedTarget || n.fromElement) &&
            (xr(y) || y[vn]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? xr(y) : null),
              y !== null &&
                ((P = br(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((x = Wf),
            (E = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Gf),
              (E = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (P = v == null ? h : Jr(v)),
            (g = y == null ? h : Jr(y)),
            (h = new x(E, p + "leave", v, n, f)),
            (h.target = P),
            (h.relatedTarget = g),
            (E = null),
            xr(f) === u &&
              ((x = new x(m, p + "enter", y, n, f)),
              (x.target = g),
              (x.relatedTarget = P),
              (E = x)),
            (P = E),
            v && y)
          )
            t: {
              for (x = v, m = y, p = 0, g = x; g; g = $r(g)) p++;
              for (g = 0, E = m; E; E = $r(E)) g++;
              for (; 0 < p - g; ) (x = $r(x)), p--;
              for (; 0 < g - p; ) (m = $r(m)), g--;
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = $r(x)), (m = $r(m));
              }
              x = null;
            }
          else x = null;
          v !== null && rh(d, h, v, x, !1),
            y !== null && P !== null && rh(d, P, y, x, !0);
        }
      }
      e: {
        if (
          ((h = u ? Jr(u) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var k = sw;
        else if (Xf(h))
          if (Ig) k = uw;
          else {
            k = aw;
            var w = ow;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = lw);
        if (k && (k = k(e, u))) {
          Lg(d, k, n, f);
          break e;
        }
        w && w(e, h, u),
          e === "focusout" &&
            (w = h._wrapperState) &&
            w.controlled &&
            h.type === "number" &&
            ju(h, "number", h.value);
      }
      switch (((w = u ? Jr(u) : window), e)) {
        case "focusin":
          (Xf(w) || w.contentEditable === "true") &&
            ((Xr = w), (Uu = u), (as = null));
          break;
        case "focusout":
          as = Uu = Xr = null;
          break;
        case "mousedown":
          zu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zu = !1), eh(d, n, f);
          break;
        case "selectionchange":
          if (fw) break;
        case "keydown":
        case "keyup":
          eh(d, n, f);
      }
      var D;
      if (ed)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Yr
          ? Dg(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Rg &&
          n.locale !== "ko" &&
          (Yr || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Yr && (D = jg())
            : ((Fn = f),
              (Jc = "value" in Fn ? Fn.value : Fn.textContent),
              (Yr = !0))),
        (w = ca(u, N)),
        0 < w.length &&
          ((N = new Hf(N, e, null, n, f)),
          d.push({ event: N, listeners: w }),
          D ? (N.data = D) : ((D = Ag(n)), D !== null && (N.data = D)))),
        (D = ew ? tw(e, n) : nw(e, n)) &&
          ((u = ca(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Hf("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = D)));
    }
    Wg(d, t);
  });
}
function Ns(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ca(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = _s(e, n)),
      s != null && r.unshift(Ns(e, s, i)),
      (s = _s(e, t)),
      s != null && r.push(Ns(e, s, i))),
      (e = e.return);
  }
  return r;
}
function $r(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function rh(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = _s(n, s)), l != null && o.unshift(Ns(n, l, a)))
        : i || ((l = _s(n, s)), l != null && o.push(Ns(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var gw = /\r\n?/g,
  vw = /\u0000|\uFFFD/g;
function ih(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gw,
      `
`
    )
    .replace(vw, "");
}
function Po(e, t, n) {
  if (((t = ih(t)), ih(e) !== t && n)) throw Error(R(425));
}
function da() {}
var $u = null,
  Wu = null;
function Hu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Gu = typeof setTimeout == "function" ? setTimeout : void 0,
  yw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  sh = typeof Promise == "function" ? Promise : void 0,
  xw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof sh < "u"
      ? function (e) {
          return sh.resolve(null).then(e).catch(ww);
        }
      : Gu;
function ww(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ps(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ps(t);
}
function Wn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function oh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ri = Math.random().toString(36).slice(2),
  Xt = "__reactFiber$" + Ri,
  js = "__reactProps$" + Ri,
  vn = "__reactContainer$" + Ri,
  Ku = "__reactEvents$" + Ri,
  _w = "__reactListeners$" + Ri,
  Sw = "__reactHandles$" + Ri;
function xr(e) {
  var t = e[Xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vn] || n[Xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = oh(e); e !== null; ) {
          if ((n = e[Xt])) return n;
          e = oh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Xs(e) {
  return (
    (e = e[Xt] || e[vn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Ga(e) {
  return e[js] || null;
}
var Yu = [],
  Zr = -1;
function ar(e) {
  return { current: e };
}
function me(e) {
  0 > Zr || ((e.current = Yu[Zr]), (Yu[Zr] = null), Zr--);
}
function fe(e, t) {
  Zr++, (Yu[Zr] = e.current), (e.current = t);
}
var qn = {},
  Ze = ar(qn),
  ct = ar(!1),
  jr = qn;
function xi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function dt(e) {
  return (e = e.childContextTypes), e != null;
}
function fa() {
  me(ct), me(Ze);
}
function ah(e, t, n) {
  if (Ze.current !== qn) throw Error(R(168));
  fe(Ze, t), fe(ct, n);
}
function Gg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(R(108, ox(e) || "Unknown", i));
  return Ee({}, n, r);
}
function ha(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qn),
    (jr = Ze.current),
    fe(Ze, e),
    fe(ct, ct.current),
    !0
  );
}
function lh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Gg(e, t, jr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      me(ct),
      me(Ze),
      fe(Ze, e))
    : me(ct),
    fe(ct, n);
}
var an = null,
  Ka = !1,
  Vl = !1;
function Kg(e) {
  an === null ? (an = [e]) : an.push(e);
}
function Ew(e) {
  (Ka = !0), Kg(e);
}
function lr() {
  if (!Vl && an !== null) {
    Vl = !0;
    var e = 0,
      t = ie;
    try {
      var n = an;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (an = null), (Ka = !1);
    } catch (i) {
      throw (an !== null && (an = an.slice(e + 1)), yg(Kc, lr), i);
    } finally {
      (ie = t), (Vl = !1);
    }
  }
  return null;
}
var qr = [],
  ei = 0,
  pa = null,
  ma = 0,
  Tt = [],
  Ct = 0,
  Rr = null,
  ln = 1,
  un = "";
function pr(e, t) {
  (qr[ei++] = ma), (qr[ei++] = pa), (pa = e), (ma = t);
}
function Yg(e, t, n) {
  (Tt[Ct++] = ln), (Tt[Ct++] = un), (Tt[Ct++] = Rr), (Rr = e);
  var r = ln;
  e = un;
  var i = 32 - Vt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Vt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ln = (1 << (32 - Vt(t) + i)) | (n << i) | r),
      (un = s + e);
  } else (ln = (1 << s) | (n << i) | r), (un = e);
}
function nd(e) {
  e.return !== null && (pr(e, 1), Yg(e, 1, 0));
}
function rd(e) {
  for (; e === pa; )
    (pa = qr[--ei]), (qr[ei] = null), (ma = qr[--ei]), (qr[ei] = null);
  for (; e === Rr; )
    (Rr = Tt[--Ct]),
      (Tt[Ct] = null),
      (un = Tt[--Ct]),
      (Tt[Ct] = null),
      (ln = Tt[--Ct]),
      (Tt[Ct] = null);
}
var yt = null,
  vt = null,
  ye = !1,
  Ft = null;
function Xg(e, t) {
  var n = kt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function uh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (yt = e), (vt = Wn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (yt = e), (vt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rr !== null ? { id: ln, overflow: un } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = kt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (yt = e),
            (vt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Xu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qu(e) {
  if (ye) {
    var t = vt;
    if (t) {
      var n = t;
      if (!uh(e, t)) {
        if (Xu(e)) throw Error(R(418));
        t = Wn(n.nextSibling);
        var r = yt;
        t && uh(e, t)
          ? Xg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ye = !1), (yt = e));
      }
    } else {
      if (Xu(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ye = !1), (yt = e);
    }
  }
}
function ch(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  yt = e;
}
function To(e) {
  if (e !== yt) return !1;
  if (!ye) return ch(e), (ye = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hu(e.type, e.memoizedProps))),
    t && (t = vt))
  ) {
    if (Xu(e)) throw (Qg(), Error(R(418)));
    for (; t; ) Xg(e, t), (t = Wn(t.nextSibling));
  }
  if ((ch(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              vt = Wn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      vt = null;
    }
  } else vt = yt ? Wn(e.stateNode.nextSibling) : null;
  return !0;
}
function Qg() {
  for (var e = vt; e; ) e = Wn(e.nextSibling);
}
function wi() {
  (vt = yt = null), (ye = !1);
}
function id(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
var Pw = _n.ReactCurrentBatchConfig;
function Ui(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Co(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function dh(e) {
  var t = e._init;
  return t(e._payload);
}
function Jg(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = Yn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, g, E) {
    return p === null || p.tag !== 6
      ? ((p = Gl(g, m.mode, E)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function l(m, p, g, E) {
    var k = g.type;
    return k === Kr
      ? f(m, p, g.props.children, E, g.key)
      : p !== null &&
        (p.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Ln &&
            dh(k) === p.type))
      ? ((E = i(p, g.props)), (E.ref = Ui(m, p, g)), (E.return = m), E)
      : ((E = Xo(g.type, g.key, g.props, null, m.mode, E)),
        (E.ref = Ui(m, p, g)),
        (E.return = m),
        E);
  }
  function u(m, p, g, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Kl(g, m.mode, E)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function f(m, p, g, E, k) {
    return p === null || p.tag !== 7
      ? ((p = kr(g, m.mode, E, k)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function d(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Gl("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case mo:
          return (
            (g = Xo(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = Ui(m, null, p)),
            (g.return = m),
            g
          );
        case Gr:
          return (p = Kl(p, m.mode, g)), (p.return = m), p;
        case Ln:
          var E = p._init;
          return d(m, E(p._payload), g);
      }
      if (Ji(p) || bi(p))
        return (p = kr(p, m.mode, g, null)), (p.return = m), p;
      Co(m, p);
    }
    return null;
  }
  function h(m, p, g, E) {
    var k = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : a(m, p, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case mo:
          return g.key === k ? l(m, p, g, E) : null;
        case Gr:
          return g.key === k ? u(m, p, g, E) : null;
        case Ln:
          return (k = g._init), h(m, p, k(g._payload), E);
      }
      if (Ji(g) || bi(g)) return k !== null ? null : f(m, p, g, E, null);
      Co(m, g);
    }
    return null;
  }
  function v(m, p, g, E, k) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (m = m.get(g) || null), a(p, m, "" + E, k);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case mo:
          return (m = m.get(E.key === null ? g : E.key) || null), l(p, m, E, k);
        case Gr:
          return (m = m.get(E.key === null ? g : E.key) || null), u(p, m, E, k);
        case Ln:
          var w = E._init;
          return v(m, p, g, w(E._payload), k);
      }
      if (Ji(E) || bi(E)) return (m = m.get(g) || null), f(p, m, E, k, null);
      Co(p, E);
    }
    return null;
  }
  function y(m, p, g, E) {
    for (
      var k = null, w = null, D = p, N = (p = 0), A = null;
      D !== null && N < g.length;
      N++
    ) {
      D.index > N ? ((A = D), (D = null)) : (A = D.sibling);
      var L = h(m, D, g[N], E);
      if (L === null) {
        D === null && (D = A);
        break;
      }
      e && D && L.alternate === null && t(m, D),
        (p = s(L, p, N)),
        w === null ? (k = L) : (w.sibling = L),
        (w = L),
        (D = A);
    }
    if (N === g.length) return n(m, D), ye && pr(m, N), k;
    if (D === null) {
      for (; N < g.length; N++)
        (D = d(m, g[N], E)),
          D !== null &&
            ((p = s(D, p, N)), w === null ? (k = D) : (w.sibling = D), (w = D));
      return ye && pr(m, N), k;
    }
    for (D = r(m, D); N < g.length; N++)
      (A = v(D, m, N, g[N], E)),
        A !== null &&
          (e && A.alternate !== null && D.delete(A.key === null ? N : A.key),
          (p = s(A, p, N)),
          w === null ? (k = A) : (w.sibling = A),
          (w = A));
    return (
      e &&
        D.forEach(function (H) {
          return t(m, H);
        }),
      ye && pr(m, N),
      k
    );
  }
  function x(m, p, g, E) {
    var k = bi(g);
    if (typeof k != "function") throw Error(R(150));
    if (((g = k.call(g)), g == null)) throw Error(R(151));
    for (
      var w = (k = null), D = p, N = (p = 0), A = null, L = g.next();
      D !== null && !L.done;
      N++, L = g.next()
    ) {
      D.index > N ? ((A = D), (D = null)) : (A = D.sibling);
      var H = h(m, D, L.value, E);
      if (H === null) {
        D === null && (D = A);
        break;
      }
      e && D && H.alternate === null && t(m, D),
        (p = s(H, p, N)),
        w === null ? (k = H) : (w.sibling = H),
        (w = H),
        (D = A);
    }
    if (L.done) return n(m, D), ye && pr(m, N), k;
    if (D === null) {
      for (; !L.done; N++, L = g.next())
        (L = d(m, L.value, E)),
          L !== null &&
            ((p = s(L, p, N)), w === null ? (k = L) : (w.sibling = L), (w = L));
      return ye && pr(m, N), k;
    }
    for (D = r(m, D); !L.done; N++, L = g.next())
      (L = v(D, m, N, L.value, E)),
        L !== null &&
          (e && L.alternate !== null && D.delete(L.key === null ? N : L.key),
          (p = s(L, p, N)),
          w === null ? (k = L) : (w.sibling = L),
          (w = L));
    return (
      e &&
        D.forEach(function (ae) {
          return t(m, ae);
        }),
      ye && pr(m, N),
      k
    );
  }
  function P(m, p, g, E) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Kr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case mo:
          e: {
            for (var k = g.key, w = p; w !== null; ) {
              if (w.key === k) {
                if (((k = g.type), k === Kr)) {
                  if (w.tag === 7) {
                    n(m, w.sibling),
                      (p = i(w, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  w.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Ln &&
                    dh(k) === w.type)
                ) {
                  n(m, w.sibling),
                    (p = i(w, g.props)),
                    (p.ref = Ui(m, w, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, w);
                break;
              } else t(m, w);
              w = w.sibling;
            }
            g.type === Kr
              ? ((p = kr(g.props.children, m.mode, E, g.key)),
                (p.return = m),
                (m = p))
              : ((E = Xo(g.type, g.key, g.props, null, m.mode, E)),
                (E.ref = Ui(m, p, g)),
                (E.return = m),
                (m = E));
          }
          return o(m);
        case Gr:
          e: {
            for (w = g.key; p !== null; ) {
              if (p.key === w)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Kl(g, m.mode, E)), (p.return = m), (m = p);
          }
          return o(m);
        case Ln:
          return (w = g._init), P(m, p, w(g._payload), E);
      }
      if (Ji(g)) return y(m, p, g, E);
      if (bi(g)) return x(m, p, g, E);
      Co(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = Gl(g, m.mode, E)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return P;
}
var _i = Jg(!0),
  Zg = Jg(!1),
  ga = ar(null),
  va = null,
  ti = null,
  sd = null;
function od() {
  sd = ti = va = null;
}
function ad(e) {
  var t = ga.current;
  me(ga), (e._currentValue = t);
}
function Ju(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function hi(e, t) {
  (va = e),
    (sd = ti = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ut = !0), (e.firstContext = null));
}
function jt(e) {
  var t = e._currentValue;
  if (sd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ti === null)) {
      if (va === null) throw Error(R(308));
      (ti = e), (va.dependencies = { lanes: 0, firstContext: e });
    } else ti = ti.next = e;
  return t;
}
var wr = null;
function ld(e) {
  wr === null ? (wr = [e]) : wr.push(e);
}
function qg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ld(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    yn(e, r)
  );
}
function yn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var In = !1;
function ud(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ev(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function fn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Hn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      yn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ld(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    yn(e, n)
  );
}
function $o(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yc(e, n);
  }
}
function fh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ya(e, t, n, r) {
  var i = e.updateQueue;
  In = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== o &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (f = u = l = null), (a = s);
    do {
      var h = a.lane,
        v = a.eventTime;
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            x = a;
          switch (((h = t), (v = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                d = y.call(v, d, h);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (h = typeof y == "function" ? y.call(v, d, h) : y),
                h == null)
              )
                break e;
              d = Ee({}, d, h);
              break e;
            case 2:
              In = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = v), (l = d)) : (f = f.next = v),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Ar |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function hh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var Qs = {},
  Jt = ar(Qs),
  Rs = ar(Qs),
  Ds = ar(Qs);
function _r(e) {
  if (e === Qs) throw Error(R(174));
  return e;
}
function cd(e, t) {
  switch ((fe(Ds, t), fe(Rs, e), fe(Jt, Qs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Du(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Du(t, e));
  }
  me(Jt), fe(Jt, t);
}
function Si() {
  me(Jt), me(Rs), me(Ds);
}
function tv(e) {
  _r(Ds.current);
  var t = _r(Jt.current),
    n = Du(t, e.type);
  t !== n && (fe(Rs, e), fe(Jt, n));
}
function dd(e) {
  Rs.current === e && (me(Jt), me(Rs));
}
var we = ar(0);
function xa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Bl = [];
function fd() {
  for (var e = 0; e < Bl.length; e++)
    Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var Wo = _n.ReactCurrentDispatcher,
  Ul = _n.ReactCurrentBatchConfig,
  Dr = 0,
  Se = null,
  Ie = null,
  Fe = null,
  wa = !1,
  ls = !1,
  As = 0,
  Tw = 0;
function Ge() {
  throw Error(R(321));
}
function hd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ut(e[n], t[n])) return !1;
  return !0;
}
function pd(e, t, n, r, i, s) {
  if (
    ((Dr = s),
    (Se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wo.current = e === null || e.memoizedState === null ? jw : Rw),
    (e = n(r, i)),
    ls)
  ) {
    s = 0;
    do {
      if (((ls = !1), (As = 0), 25 <= s)) throw Error(R(301));
      (s += 1),
        (Fe = Ie = null),
        (t.updateQueue = null),
        (Wo.current = Dw),
        (e = n(r, i));
    } while (ls);
  }
  if (
    ((Wo.current = _a),
    (t = Ie !== null && Ie.next !== null),
    (Dr = 0),
    (Fe = Ie = Se = null),
    (wa = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function md() {
  var e = As !== 0;
  return (As = 0), e;
}
function Yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Fe === null ? (Se.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
}
function Rt() {
  if (Ie === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = Fe === null ? Se.memoizedState : Fe.next;
  if (t !== null) (Fe = t), (Ie = e);
  else {
    if (e === null) throw Error(R(310));
    (Ie = e),
      (e = {
        memoizedState: Ie.memoizedState,
        baseState: Ie.baseState,
        baseQueue: Ie.baseQueue,
        queue: Ie.queue,
        next: null,
      }),
      Fe === null ? (Se.memoizedState = Fe = e) : (Fe = Fe.next = e);
  }
  return Fe;
}
function Ls(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zl(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Ie,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var f = u.lane;
      if ((Dr & f) === f)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (Se.lanes |= f),
          (Ar |= f);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      Ut(r, t.memoizedState) || (ut = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (Se.lanes |= s), (Ar |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $l(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Ut(s, t.memoizedState) || (ut = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function nv() {}
function rv(e, t) {
  var n = Se,
    r = Rt(),
    i = t(),
    s = !Ut(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (ut = !0)),
    (r = r.queue),
    gd(ov.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Is(9, sv.bind(null, n, r, i, t), void 0, null),
      Ve === null)
    )
      throw Error(R(349));
    Dr & 30 || iv(n, t, i);
  }
  return i;
}
function iv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function sv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), av(t) && lv(e);
}
function ov(e, t, n) {
  return n(function () {
    av(t) && lv(e);
  });
}
function av(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ut(e, n);
  } catch {
    return !0;
  }
}
function lv(e) {
  var t = yn(e, 1);
  t !== null && Bt(t, e, 1, -1);
}
function ph(e) {
  var t = Yt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ls,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Nw.bind(null, Se, e)),
    [t.memoizedState, e]
  );
}
function Is(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function uv() {
  return Rt().memoizedState;
}
function Ho(e, t, n, r) {
  var i = Yt();
  (Se.flags |= e),
    (i.memoizedState = Is(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ya(e, t, n, r) {
  var i = Rt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Ie !== null) {
    var o = Ie.memoizedState;
    if (((s = o.destroy), r !== null && hd(r, o.deps))) {
      i.memoizedState = Is(t, n, s, r);
      return;
    }
  }
  (Se.flags |= e), (i.memoizedState = Is(1 | t, n, s, r));
}
function mh(e, t) {
  return Ho(8390656, 8, e, t);
}
function gd(e, t) {
  return Ya(2048, 8, e, t);
}
function cv(e, t) {
  return Ya(4, 2, e, t);
}
function dv(e, t) {
  return Ya(4, 4, e, t);
}
function fv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function hv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ya(4, 4, fv.bind(null, t, e), n)
  );
}
function vd() {}
function pv(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function mv(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gv(e, t, n) {
  return Dr & 21
    ? (Ut(n, t) || ((n = _g()), (Se.lanes |= n), (Ar |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n));
}
function Cw(e, t) {
  var n = ie;
  (ie = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (ie = n), (Ul.transition = r);
  }
}
function vv() {
  return Rt().memoizedState;
}
function kw(e, t, n) {
  var r = Kn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    yv(e))
  )
    xv(t, n);
  else if (((n = qg(e, t, n, r)), n !== null)) {
    var i = it();
    Bt(n, e, r, i), wv(n, t, r);
  }
}
function Nw(e, t, n) {
  var r = Kn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yv(e)) xv(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ut(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), ld(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = qg(e, t, i, r)),
      n !== null && ((i = it()), Bt(n, e, r, i), wv(n, t, r));
  }
}
function yv(e) {
  var t = e.alternate;
  return e === Se || (t !== null && t === Se);
}
function xv(e, t) {
  ls = wa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function wv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yc(e, n);
  }
}
var _a = {
    readContext: jt,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useInsertionEffect: Ge,
    useLayoutEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useMutableSource: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    unstable_isNewReconciler: !1,
  },
  jw = {
    readContext: jt,
    useCallback: function (e, t) {
      return (Yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: jt,
    useEffect: mh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ho(4194308, 4, fv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Yt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = kw.bind(null, Se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ph,
    useDebugValue: vd,
    useDeferredValue: function (e) {
      return (Yt().memoizedState = e);
    },
    useTransition: function () {
      var e = ph(!1),
        t = e[0];
      return (e = Cw.bind(null, e[1])), (Yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Se,
        i = Yt();
      if (ye) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Ve === null)) throw Error(R(349));
        Dr & 30 || iv(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        mh(ov.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Is(9, sv.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Yt(),
        t = Ve.identifierPrefix;
      if (ye) {
        var n = un,
          r = ln;
        (n = (r & ~(1 << (32 - Vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = As++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Tw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Rw = {
    readContext: jt,
    useCallback: pv,
    useContext: jt,
    useEffect: gd,
    useImperativeHandle: hv,
    useInsertionEffect: cv,
    useLayoutEffect: dv,
    useMemo: mv,
    useReducer: zl,
    useRef: uv,
    useState: function () {
      return zl(Ls);
    },
    useDebugValue: vd,
    useDeferredValue: function (e) {
      var t = Rt();
      return gv(t, Ie.memoizedState, e);
    },
    useTransition: function () {
      var e = zl(Ls)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: nv,
    useSyncExternalStore: rv,
    useId: vv,
    unstable_isNewReconciler: !1,
  },
  Dw = {
    readContext: jt,
    useCallback: pv,
    useContext: jt,
    useEffect: gd,
    useImperativeHandle: hv,
    useInsertionEffect: cv,
    useLayoutEffect: dv,
    useMemo: mv,
    useReducer: $l,
    useRef: uv,
    useState: function () {
      return $l(Ls);
    },
    useDebugValue: vd,
    useDeferredValue: function (e) {
      var t = Rt();
      return Ie === null ? (t.memoizedState = e) : gv(t, Ie.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Ls)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: nv,
    useSyncExternalStore: rv,
    useId: vv,
    unstable_isNewReconciler: !1,
  };
function Mt(e, t) {
  if (e && e.defaultProps) {
    (t = Ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? br(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = it(),
      i = Kn(e),
      s = fn(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Hn(e, s, i)),
      t !== null && (Bt(t, e, i, r), $o(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = it(),
      i = Kn(e),
      s = fn(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Hn(e, s, i)),
      t !== null && (Bt(t, e, i, r), $o(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = it(),
      r = Kn(e),
      i = fn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Hn(e, i, r)),
      t !== null && (Bt(t, e, r, n), $o(t, e, r));
  },
};
function gh(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Cs(n, r) || !Cs(i, s)
      : !0
  );
}
function _v(e, t, n) {
  var r = !1,
    i = qn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = jt(s))
      : ((i = dt(t) ? jr : Ze.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? xi(e, i) : qn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function vh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xa.enqueueReplaceState(t, t.state, null);
}
function qu(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ud(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = jt(s))
    : ((s = dt(t) ? jr : Ze.current), (i.context = xi(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Zu(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Xa.enqueueReplaceState(i, i.state, null),
      ya(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ei(e, t) {
  try {
    var n = "",
      r = t;
    do (n += sx(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ec(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Aw = typeof WeakMap == "function" ? WeakMap : Map;
function Sv(e, t, n) {
  (n = fn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ea || ((Ea = !0), (cc = r)), ec(e, t);
    }),
    n
  );
}
function Ev(e, t, n) {
  (n = fn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ec(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        ec(e, t),
          typeof r != "function" &&
            (Gn === null ? (Gn = new Set([this])) : Gn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function yh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Aw();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Gw.bind(null, e, t, n)), t.then(e, e));
}
function xh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wh(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = fn(-1, 1)), (t.tag = 2), Hn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Lw = _n.ReactCurrentOwner,
  ut = !1;
function rt(e, t, n, r) {
  t.child = e === null ? Zg(t, null, n, r) : _i(t, e.child, n, r);
}
function _h(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    hi(t, i),
    (r = pd(e, t, n, r, s, i)),
    (n = md()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        xn(e, t, i))
      : (ye && n && nd(t), (t.flags |= 1), rt(e, t, r, i), t.child)
  );
}
function Sh(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Td(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Pv(e, t, s, r, i))
      : ((e = Xo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Cs), n(o, r) && e.ref === t.ref)
    )
      return xn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Yn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Pv(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Cs(s, r) && e.ref === t.ref)
      if (((ut = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (ut = !0);
      else return (t.lanes = e.lanes), xn(e, t, i);
  }
  return tc(e, t, n, r, i);
}
function Tv(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(ri, mt),
        (mt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          fe(ri, mt),
          (mt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        fe(ri, mt),
        (mt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      fe(ri, mt),
      (mt |= r);
  return rt(e, t, i, n), t.child;
}
function Cv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function tc(e, t, n, r, i) {
  var s = dt(n) ? jr : Ze.current;
  return (
    (s = xi(t, s)),
    hi(t, i),
    (n = pd(e, t, n, r, s, i)),
    (r = md()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        xn(e, t, i))
      : (ye && r && nd(t), (t.flags |= 1), rt(e, t, n, i), t.child)
  );
}
function Eh(e, t, n, r, i) {
  if (dt(n)) {
    var s = !0;
    ha(t);
  } else s = !1;
  if ((hi(t, i), t.stateNode === null))
    Go(e, t), _v(t, n, r), qu(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = jt(u))
      : ((u = dt(n) ? jr : Ze.current), (u = xi(t, u)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && vh(t, o, r, u)),
      (In = !1);
    var h = t.memoizedState;
    (o.state = h),
      ya(t, r, o, i),
      (l = t.memoizedState),
      a !== r || h !== l || ct.current || In
        ? (typeof f == "function" && (Zu(t, n, f, r), (l = t.memoizedState)),
          (a = In || gh(t, n, a, r, h, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ev(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Mt(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = jt(l))
        : ((l = dt(n) ? jr : Ze.current), (l = xi(t, l)));
    var v = n.getDerivedStateFromProps;
    (f =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || h !== l) && vh(t, o, r, l)),
      (In = !1),
      (h = t.memoizedState),
      (o.state = h),
      ya(t, r, o, i);
    var y = t.memoizedState;
    a !== d || h !== y || ct.current || In
      ? (typeof v == "function" && (Zu(t, n, v, r), (y = t.memoizedState)),
        (u = In || gh(t, n, u, r, h, y, l) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return nc(e, t, n, r, s, i);
}
function nc(e, t, n, r, i, s) {
  Cv(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && lh(t, n, !1), xn(e, t, s);
  (r = t.stateNode), (Lw.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = _i(t, e.child, null, s)), (t.child = _i(t, null, a, s)))
      : rt(e, t, a, s),
    (t.memoizedState = r.state),
    i && lh(t, n, !0),
    t.child
  );
}
function kv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ah(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ah(e, t.context, !1),
    cd(e, t.containerInfo);
}
function Ph(e, t, n, r, i) {
  return wi(), id(i), (t.flags |= 256), rt(e, t, n, r), t.child;
}
var rc = { dehydrated: null, treeContext: null, retryLane: 0 };
function ic(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nv(e, t, n) {
  var r = t.pendingProps,
    i = we.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    fe(we, i & 1),
    e === null)
  )
    return (
      Qu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Za(o, r, 0, null)),
              (e = kr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = ic(n)),
              (t.memoizedState = rc),
              e)
            : yd(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Iw(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Yn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Yn(a, s)) : ((s = kr(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ic(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = rc),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Yn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function yd(e, t) {
  return (
    (t = Za({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ko(e, t, n, r) {
  return (
    r !== null && id(r),
    _i(t, e.child, null, n),
    (e = yd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Iw(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wl(Error(R(422)))), ko(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Za({ mode: "visible", children: r.children }, i, 0, null)),
        (s = kr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && _i(t, e.child, null, o),
        (t.child.memoizedState = ic(o)),
        (t.memoizedState = rc),
        s);
  if (!(t.mode & 1)) return ko(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(R(419))), (r = Wl(s, r, void 0)), ko(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), ut || a)) {
    if (((r = Ve), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), yn(e, i), Bt(r, e, i, -1));
    }
    return Pd(), (r = Wl(Error(R(421)))), ko(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Kw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (vt = Wn(i.nextSibling)),
      (yt = t),
      (ye = !0),
      (Ft = null),
      e !== null &&
        ((Tt[Ct++] = ln),
        (Tt[Ct++] = un),
        (Tt[Ct++] = Rr),
        (ln = e.id),
        (un = e.overflow),
        (Rr = t)),
      (t = yd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Th(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ju(e.return, t, n);
}
function Hl(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function jv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((rt(e, t, r.children, n), (r = we.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Th(e, n, t);
        else if (e.tag === 19) Th(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((fe(we, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && xa(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Hl(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && xa(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Hl(t, !0, n, null, s);
        break;
      case "together":
        Hl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Go(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ar |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Yn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Yn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Mw(e, t, n) {
  switch (t.tag) {
    case 3:
      kv(t), wi();
      break;
    case 5:
      tv(t);
      break;
    case 1:
      dt(t.type) && ha(t);
      break;
    case 4:
      cd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      fe(ga, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (fe(we, we.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Nv(e, t, n)
          : (fe(we, we.current & 1),
            (e = xn(e, t, n)),
            e !== null ? e.sibling : null);
      fe(we, we.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return jv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        fe(we, we.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Tv(e, t, n);
  }
  return xn(e, t, n);
}
var Rv, sc, Dv, Av;
Rv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
sc = function () {};
Dv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), _r(Jt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = ku(e, i)), (r = ku(e, r)), (s = []);
        break;
      case "select":
        (i = Ee({}, i, { value: void 0 })),
          (r = Ee({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Ru(e, i)), (r = Ru(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = da);
    }
    Au(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (xs.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (xs.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && pe("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Av = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zi(e, t) {
  if (!ye)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bw(e, t, n) {
  var r = t.pendingProps;
  switch ((rd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ke(t), null;
    case 1:
      return dt(t.type) && fa(), Ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Si(),
        me(ct),
        me(Ze),
        fd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (To(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ft !== null && (hc(Ft), (Ft = null)))),
        sc(e, t),
        Ke(t),
        null
      );
    case 5:
      dd(t);
      var i = _r(Ds.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Dv(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Ke(t), null;
        }
        if (((e = _r(Jt.current)), To(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Xt] = t), (r[js] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              pe("cancel", r), pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < qi.length; i++) pe(qi[i], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe("error", r), pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              If(r, s), pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                pe("invalid", r);
              break;
            case "textarea":
              bf(r, s), pe("invalid", r);
          }
          Au(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Po(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Po(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : xs.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  pe("scroll", r);
            }
          switch (n) {
            case "input":
              go(r), Mf(r, s, !0);
              break;
            case "textarea":
              go(r), Of(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = da);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = og(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Xt] = t),
            (e[js] = r),
            Rv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Lu(n, r)), n)) {
              case "dialog":
                pe("cancel", e), pe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < qi.length; i++) pe(qi[i], e);
                i = r;
                break;
              case "source":
                pe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                pe("error", e), pe("load", e), (i = r);
                break;
              case "details":
                pe("toggle", e), (i = r);
                break;
              case "input":
                If(e, r), (i = ku(e, r)), pe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ee({}, r, { value: void 0 })),
                  pe("invalid", e);
                break;
              case "textarea":
                bf(e, r), (i = Ru(e, r)), pe("invalid", e);
                break;
              default:
                i = r;
            }
            Au(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? ug(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && ag(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ws(e, l)
                    : typeof l == "number" && ws(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (xs.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && pe("scroll", e)
                      : l != null && zc(e, s, l, o));
              }
            switch (n) {
              case "input":
                go(e), Mf(e, r, !1);
                break;
              case "textarea":
                go(e), Of(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? ui(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      ui(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = da);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ke(t), null;
    case 6:
      if (e && t.stateNode != null) Av(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = _r(Ds.current)), _r(Jt.current), To(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xt] = t),
            (s = r.nodeValue !== n) && ((e = yt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Po(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Po(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Xt] = t),
            (t.stateNode = r);
      }
      return Ke(t), null;
    case 13:
      if (
        (me(we),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ye && vt !== null && t.mode & 1 && !(t.flags & 128))
          Qg(), wi(), (t.flags |= 98560), (s = !1);
        else if (((s = To(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(R(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(R(317));
            s[Xt] = t;
          } else
            wi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ke(t), (s = !1);
        } else Ft !== null && (hc(Ft), (Ft = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || we.current & 1 ? Me === 0 && (Me = 3) : Pd())),
          t.updateQueue !== null && (t.flags |= 4),
          Ke(t),
          null);
    case 4:
      return (
        Si(), sc(e, t), e === null && ks(t.stateNode.containerInfo), Ke(t), null
      );
    case 10:
      return ad(t.type._context), Ke(t), null;
    case 17:
      return dt(t.type) && fa(), Ke(t), null;
    case 19:
      if ((me(we), (s = t.memoizedState), s === null)) return Ke(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) zi(s, !1);
        else {
          if (Me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = xa(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    zi(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return fe(we, (we.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ne() > Pi &&
            ((t.flags |= 128), (r = !0), zi(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xa(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zi(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ye)
            )
              return Ke(t), null;
          } else
            2 * Ne() - s.renderingStartTime > Pi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zi(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ne()),
          (t.sibling = null),
          (n = we.current),
          fe(we, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ke(t), null);
    case 22:
    case 23:
      return (
        Ed(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? mt & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Ow(e, t) {
  switch ((rd(t), t.tag)) {
    case 1:
      return (
        dt(t.type) && fa(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Si(),
        me(ct),
        me(Ze),
        fd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return dd(t), null;
    case 13:
      if (
        (me(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        wi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return me(we), null;
    case 4:
      return Si(), null;
    case 10:
      return ad(t.type._context), null;
    case 22:
    case 23:
      return Ed(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var No = !1,
  Xe = !1,
  Fw = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function ni(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ce(e, t, r);
      }
    else n.current = null;
}
function oc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var Ch = !1;
function Vw(e, t) {
  if ((($u = la), (e = Og()), td(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            f = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (h = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === i && (a = o),
                h === s && ++f === r && (l = o),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = v;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wu = { focusedElem: e, selectionRange: n }, la = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    P = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Mt(t.type, x),
                      P
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (E) {
          Ce(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (y = Ch), (Ch = !1), y;
}
function us(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && oc(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Qa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ac(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Lv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Lv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xt], delete t[js], delete t[Ku], delete t[_w], delete t[Sw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Iv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Iv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function lc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = da));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lc(e, t, n), e = e.sibling; e !== null; ) lc(e, t, n), (e = e.sibling);
}
function uc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (uc(e, t, n), e = e.sibling; e !== null; ) uc(e, t, n), (e = e.sibling);
}
var ze = null,
  bt = !1;
function kn(e, t, n) {
  for (n = n.child; n !== null; ) Mv(e, t, n), (n = n.sibling);
}
function Mv(e, t, n) {
  if (Qt && typeof Qt.onCommitFiberUnmount == "function")
    try {
      Qt.onCommitFiberUnmount(za, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Xe || ni(n, t);
    case 6:
      var r = ze,
        i = bt;
      (ze = null),
        kn(e, t, n),
        (ze = r),
        (bt = i),
        ze !== null &&
          (bt
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null &&
        (bt
          ? ((e = ze),
            (n = n.stateNode),
            e.nodeType === 8
              ? Fl(e.parentNode, n)
              : e.nodeType === 1 && Fl(e, n),
            Ps(e))
          : Fl(ze, n.stateNode));
      break;
    case 4:
      (r = ze),
        (i = bt),
        (ze = n.stateNode.containerInfo),
        (bt = !0),
        kn(e, t, n),
        (ze = r),
        (bt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && oc(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      kn(e, t, n);
      break;
    case 1:
      if (
        !Xe &&
        (ni(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ce(n, t, a);
        }
      kn(e, t, n);
      break;
    case 21:
      kn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Xe = (r = Xe) || n.memoizedState !== null), kn(e, t, n), (Xe = r))
        : kn(e, t, n);
      break;
    default:
      kn(e, t, n);
  }
}
function Nh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Fw()),
      t.forEach(function (r) {
        var i = Yw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function At(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ze = a.stateNode), (bt = !1);
              break e;
            case 3:
              (ze = a.stateNode.containerInfo), (bt = !0);
              break e;
            case 4:
              (ze = a.stateNode.containerInfo), (bt = !0);
              break e;
          }
          a = a.return;
        }
        if (ze === null) throw Error(R(160));
        Mv(s, o, i), (ze = null), (bt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Ce(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bv(t, e), (t = t.sibling);
}
function bv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((At(t, e), Ht(e), r & 4)) {
        try {
          us(3, e, e.return), Qa(3, e);
        } catch (x) {
          Ce(e, e.return, x);
        }
        try {
          us(5, e, e.return);
        } catch (x) {
          Ce(e, e.return, x);
        }
      }
      break;
    case 1:
      At(t, e), Ht(e), r & 512 && n !== null && ni(n, n.return);
      break;
    case 5:
      if (
        (At(t, e),
        Ht(e),
        r & 512 && n !== null && ni(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ws(i, "");
        } catch (x) {
          Ce(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && ig(i, s),
              Lu(a, o);
            var u = Lu(a, s);
            for (o = 0; o < l.length; o += 2) {
              var f = l[o],
                d = l[o + 1];
              f === "style"
                ? ug(i, d)
                : f === "dangerouslySetInnerHTML"
                ? ag(i, d)
                : f === "children"
                ? ws(i, d)
                : zc(i, f, d, u);
            }
            switch (a) {
              case "input":
                Nu(i, s);
                break;
              case "textarea":
                sg(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? ui(i, !!s.multiple, v, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ui(i, !!s.multiple, s.defaultValue, !0)
                      : ui(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[js] = s;
          } catch (x) {
            Ce(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((At(t, e), Ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          Ce(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (At(t, e), Ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ps(t.containerInfo);
        } catch (x) {
          Ce(e, e.return, x);
        }
      break;
    case 4:
      At(t, e), Ht(e);
      break;
    case 13:
      At(t, e),
        Ht(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (_d = Ne())),
        r & 4 && Nh(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Xe = (u = Xe) || f), At(t, e), (Xe = u)) : At(t, e),
        Ht(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (O = e, f = e.child; f !== null; ) {
            for (d = O = f; O !== null; ) {
              switch (((h = O), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  us(4, h, h.return);
                  break;
                case 1:
                  ni(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (x) {
                      Ce(r, n, x);
                    }
                  }
                  break;
                case 5:
                  ni(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Rh(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (O = v)) : Rh(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = lg("display", o)));
              } catch (x) {
                Ce(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (x) {
                Ce(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      At(t, e), Ht(e), r & 4 && Nh(e);
      break;
    case 21:
      break;
    default:
      At(t, e), Ht(e);
  }
}
function Ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Iv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ws(i, ""), (r.flags &= -33));
          var s = kh(e);
          uc(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = kh(e);
          lc(e, a, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      Ce(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bw(e, t, n) {
  (O = e), Ov(e);
}
function Ov(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || No;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Xe;
        a = No;
        var u = Xe;
        if (((No = o), (Xe = l) && !u))
          for (O = i; O !== null; )
            (o = O),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Dh(i)
                : l !== null
                ? ((l.return = o), (O = l))
                : Dh(i);
        for (; s !== null; ) (O = s), Ov(s), (s = s.sibling);
        (O = i), (No = a), (Xe = u);
      }
      jh(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (O = s)) : jh(e);
  }
}
function jh(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xe || Qa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Xe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && hh(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                hh(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && Ps(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Xe || (t.flags & 512 && ac(t));
      } catch (h) {
        Ce(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Rh(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Dh(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qa(4, t);
          } catch (l) {
            Ce(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ce(t, i, l);
            }
          }
          var s = t.return;
          try {
            ac(t);
          } catch (l) {
            Ce(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ac(t);
          } catch (l) {
            Ce(t, o, l);
          }
      }
    } catch (l) {
      Ce(t, t.return, l);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (O = a);
      break;
    }
    O = t.return;
  }
}
var Uw = Math.ceil,
  Sa = _n.ReactCurrentDispatcher,
  xd = _n.ReactCurrentOwner,
  Nt = _n.ReactCurrentBatchConfig,
  Q = 0,
  Ve = null,
  Le = null,
  We = 0,
  mt = 0,
  ri = ar(0),
  Me = 0,
  Ms = null,
  Ar = 0,
  Ja = 0,
  wd = 0,
  cs = null,
  lt = null,
  _d = 0,
  Pi = 1 / 0,
  on = null,
  Ea = !1,
  cc = null,
  Gn = null,
  jo = !1,
  Vn = null,
  Pa = 0,
  ds = 0,
  dc = null,
  Ko = -1,
  Yo = 0;
function it() {
  return Q & 6 ? Ne() : Ko !== -1 ? Ko : (Ko = Ne());
}
function Kn(e) {
  return e.mode & 1
    ? Q & 2 && We !== 0
      ? We & -We
      : Pw.transition !== null
      ? (Yo === 0 && (Yo = _g()), Yo)
      : ((e = ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ng(e.type))),
        e)
    : 1;
}
function Bt(e, t, n, r) {
  if (50 < ds) throw ((ds = 0), (dc = null), Error(R(185)));
  Ks(e, n, r),
    (!(Q & 2) || e !== Ve) &&
      (e === Ve && (!(Q & 2) && (Ja |= n), Me === 4 && On(e, We)),
      ft(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((Pi = Ne() + 500), Ka && lr()));
}
function ft(e, t) {
  var n = e.callbackNode;
  Px(e, t);
  var r = aa(e, e === Ve ? We : 0);
  if (r === 0)
    n !== null && Bf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Bf(n), t === 1))
      e.tag === 0 ? Ew(Ah.bind(null, e)) : Kg(Ah.bind(null, e)),
        xw(function () {
          !(Q & 6) && lr();
        }),
        (n = null);
    else {
      switch (Sg(r)) {
        case 1:
          n = Kc;
          break;
        case 4:
          n = xg;
          break;
        case 16:
          n = oa;
          break;
        case 536870912:
          n = wg;
          break;
        default:
          n = oa;
      }
      n = Hv(n, Fv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Fv(e, t) {
  if (((Ko = -1), (Yo = 0), Q & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (pi() && e.callbackNode !== n) return null;
  var r = aa(e, e === Ve ? We : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ta(e, r);
  else {
    t = r;
    var i = Q;
    Q |= 2;
    var s = Bv();
    (Ve !== e || We !== t) && ((on = null), (Pi = Ne() + 500), Cr(e, t));
    do
      try {
        Ww();
        break;
      } catch (a) {
        Vv(e, a);
      }
    while (!0);
    od(),
      (Sa.current = s),
      (Q = i),
      Le !== null ? (t = 0) : ((Ve = null), (We = 0), (t = Me));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Fu(e)), i !== 0 && ((r = i), (t = fc(e, i)))), t === 1)
    )
      throw ((n = Ms), Cr(e, 0), On(e, r), ft(e, Ne()), n);
    if (t === 6) On(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !zw(i) &&
          ((t = Ta(e, r)),
          t === 2 && ((s = Fu(e)), s !== 0 && ((r = s), (t = fc(e, s)))),
          t === 1))
      )
        throw ((n = Ms), Cr(e, 0), On(e, r), ft(e, Ne()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          mr(e, lt, on);
          break;
        case 3:
          if (
            (On(e, r), (r & 130023424) === r && ((t = _d + 500 - Ne()), 10 < t))
          ) {
            if (aa(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              it(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Gu(mr.bind(null, e, lt, on), t);
            break;
          }
          mr(e, lt, on);
          break;
        case 4:
          if ((On(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Vt(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Uw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Gu(mr.bind(null, e, lt, on), r);
            break;
          }
          mr(e, lt, on);
          break;
        case 5:
          mr(e, lt, on);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return ft(e, Ne()), e.callbackNode === n ? Fv.bind(null, e) : null;
}
function fc(e, t) {
  var n = cs;
  return (
    e.current.memoizedState.isDehydrated && (Cr(e, t).flags |= 256),
    (e = Ta(e, t)),
    e !== 2 && ((t = lt), (lt = n), t !== null && hc(t)),
    e
  );
}
function hc(e) {
  lt === null ? (lt = e) : lt.push.apply(lt, e);
}
function zw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ut(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function On(e, t) {
  for (
    t &= ~wd,
      t &= ~Ja,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ah(e) {
  if (Q & 6) throw Error(R(327));
  pi();
  var t = aa(e, 0);
  if (!(t & 1)) return ft(e, Ne()), null;
  var n = Ta(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fu(e);
    r !== 0 && ((t = r), (n = fc(e, r)));
  }
  if (n === 1) throw ((n = Ms), Cr(e, 0), On(e, t), ft(e, Ne()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mr(e, lt, on),
    ft(e, Ne()),
    null
  );
}
function Sd(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((Pi = Ne() + 500), Ka && lr());
  }
}
function Lr(e) {
  Vn !== null && Vn.tag === 0 && !(Q & 6) && pi();
  var t = Q;
  Q |= 1;
  var n = Nt.transition,
    r = ie;
  try {
    if (((Nt.transition = null), (ie = 1), e)) return e();
  } finally {
    (ie = r), (Nt.transition = n), (Q = t), !(Q & 6) && lr();
  }
}
function Ed() {
  (mt = ri.current), me(ri);
}
function Cr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yw(n)), Le !== null))
    for (n = Le.return; n !== null; ) {
      var r = n;
      switch ((rd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && fa();
          break;
        case 3:
          Si(), me(ct), me(Ze), fd();
          break;
        case 5:
          dd(r);
          break;
        case 4:
          Si();
          break;
        case 13:
          me(we);
          break;
        case 19:
          me(we);
          break;
        case 10:
          ad(r.type._context);
          break;
        case 22:
        case 23:
          Ed();
      }
      n = n.return;
    }
  if (
    ((Ve = e),
    (Le = e = Yn(e.current, null)),
    (We = mt = t),
    (Me = 0),
    (Ms = null),
    (wd = Ja = Ar = 0),
    (lt = cs = null),
    wr !== null)
  ) {
    for (t = 0; t < wr.length; t++)
      if (((n = wr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    wr = null;
  }
  return e;
}
function Vv(e, t) {
  do {
    var n = Le;
    try {
      if ((od(), (Wo.current = _a), wa)) {
        for (var r = Se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        wa = !1;
      }
      if (
        ((Dr = 0),
        (Fe = Ie = Se = null),
        (ls = !1),
        (As = 0),
        (xd.current = null),
        n === null || n.return === null)
      ) {
        (Me = 1), (Ms = t), (Le = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = We),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            f = a,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var v = xh(o);
          if (v !== null) {
            (v.flags &= -257),
              wh(v, o, a, s, t),
              v.mode & 1 && yh(s, u, t),
              (t = v),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              yh(s, u, t), Pd();
              break e;
            }
            l = Error(R(426));
          }
        } else if (ye && a.mode & 1) {
          var P = xh(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              wh(P, o, a, s, t),
              id(Ei(l, a));
            break e;
          }
        }
        (s = l = Ei(l, a)),
          Me !== 4 && (Me = 2),
          cs === null ? (cs = [s]) : cs.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = Sv(s, l, t);
              fh(s, m);
              break e;
            case 1:
              a = l;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Gn === null || !Gn.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var E = Ev(s, a, t);
                fh(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      zv(n);
    } catch (k) {
      (t = k), Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Bv() {
  var e = Sa.current;
  return (Sa.current = _a), e === null ? _a : e;
}
function Pd() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    Ve === null || (!(Ar & 268435455) && !(Ja & 268435455)) || On(Ve, We);
}
function Ta(e, t) {
  var n = Q;
  Q |= 2;
  var r = Bv();
  (Ve !== e || We !== t) && ((on = null), Cr(e, t));
  do
    try {
      $w();
      break;
    } catch (i) {
      Vv(e, i);
    }
  while (!0);
  if ((od(), (Q = n), (Sa.current = r), Le !== null)) throw Error(R(261));
  return (Ve = null), (We = 0), Me;
}
function $w() {
  for (; Le !== null; ) Uv(Le);
}
function Ww() {
  for (; Le !== null && !mx(); ) Uv(Le);
}
function Uv(e) {
  var t = Wv(e.alternate, e, mt);
  (e.memoizedProps = e.pendingProps),
    t === null ? zv(e) : (Le = t),
    (xd.current = null);
}
function zv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ow(n, t)), n !== null)) {
        (n.flags &= 32767), (Le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Me = 6), (Le = null);
        return;
      }
    } else if (((n = bw(n, t, mt)), n !== null)) {
      Le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Me === 0 && (Me = 5);
}
function mr(e, t, n) {
  var r = ie,
    i = Nt.transition;
  try {
    (Nt.transition = null), (ie = 1), Hw(e, t, n, r);
  } finally {
    (Nt.transition = i), (ie = r);
  }
  return null;
}
function Hw(e, t, n, r) {
  do pi();
  while (Vn !== null);
  if (Q & 6) throw Error(R(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Tx(e, s),
    e === Ve && ((Le = Ve = null), (We = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jo ||
      ((jo = !0),
      Hv(oa, function () {
        return pi(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Nt.transition), (Nt.transition = null);
    var o = ie;
    ie = 1;
    var a = Q;
    (Q |= 4),
      (xd.current = null),
      Vw(e, n),
      bv(n, e),
      dw(Wu),
      (la = !!$u),
      (Wu = $u = null),
      (e.current = n),
      Bw(n),
      gx(),
      (Q = a),
      (ie = o),
      (Nt.transition = s);
  } else e.current = n;
  if (
    (jo && ((jo = !1), (Vn = e), (Pa = i)),
    (s = e.pendingLanes),
    s === 0 && (Gn = null),
    xx(n.stateNode),
    ft(e, Ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ea) throw ((Ea = !1), (e = cc), (cc = null), e);
  return (
    Pa & 1 && e.tag !== 0 && pi(),
    (s = e.pendingLanes),
    s & 1 ? (e === dc ? ds++ : ((ds = 0), (dc = e))) : (ds = 0),
    lr(),
    null
  );
}
function pi() {
  if (Vn !== null) {
    var e = Sg(Pa),
      t = Nt.transition,
      n = ie;
    try {
      if (((Nt.transition = null), (ie = 16 > e ? 16 : e), Vn === null))
        var r = !1;
      else {
        if (((e = Vn), (Vn = null), (Pa = 0), Q & 6)) throw Error(R(331));
        var i = Q;
        for (Q |= 4, O = e.current; O !== null; ) {
          var s = O,
            o = s.child;
          if (O.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (O = u; O !== null; ) {
                  var f = O;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      us(8, f, s);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (O = d);
                  else
                    for (; O !== null; ) {
                      f = O;
                      var h = f.sibling,
                        v = f.return;
                      if ((Lv(f), f === u)) {
                        O = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (O = h);
                        break;
                      }
                      O = v;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var P = x.sibling;
                    (x.sibling = null), (x = P);
                  } while (x !== null);
                }
              }
              O = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (O = o);
          else
            e: for (; O !== null; ) {
              if (((s = O), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    us(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (O = m);
                break e;
              }
              O = s.return;
            }
        }
        var p = e.current;
        for (O = p; O !== null; ) {
          o = O;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (O = g);
          else
            e: for (o = p; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qa(9, a);
                  }
                } catch (k) {
                  Ce(a, a.return, k);
                }
              if (a === o) {
                O = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (O = E);
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((Q = i), lr(), Qt && typeof Qt.onPostCommitFiberRoot == "function")
        )
          try {
            Qt.onPostCommitFiberRoot(za, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ie = n), (Nt.transition = t);
    }
  }
  return !1;
}
function Lh(e, t, n) {
  (t = Ei(n, t)),
    (t = Sv(e, t, 1)),
    (e = Hn(e, t, 1)),
    (t = it()),
    e !== null && (Ks(e, 1, t), ft(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) Lh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Gn === null || !Gn.has(r)))
        ) {
          (e = Ei(n, e)),
            (e = Ev(t, e, 1)),
            (t = Hn(t, e, 1)),
            (e = it()),
            t !== null && (Ks(t, 1, e), ft(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Gw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = it()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ve === e &&
      (We & n) === n &&
      (Me === 4 || (Me === 3 && (We & 130023424) === We && 500 > Ne() - _d)
        ? Cr(e, 0)
        : (wd |= n)),
    ft(e, t);
}
function $v(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xo), (xo <<= 1), !(xo & 130023424) && (xo = 4194304))
      : (t = 1));
  var n = it();
  (e = yn(e, t)), e !== null && (Ks(e, t, n), ft(e, n));
}
function Kw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), $v(e, n);
}
function Yw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), $v(e, n);
}
var Wv;
Wv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ct.current) ut = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ut = !1), Mw(e, t, n);
      ut = !!(e.flags & 131072);
    }
  else (ut = !1), ye && t.flags & 1048576 && Yg(t, ma, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Go(e, t), (e = t.pendingProps);
      var i = xi(t, Ze.current);
      hi(t, n), (i = pd(null, t, r, e, i, n));
      var s = md();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            dt(r) ? ((s = !0), ha(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ud(t),
            (i.updater = Xa),
            (t.stateNode = i),
            (i._reactInternals = t),
            qu(t, r, e, n),
            (t = nc(null, t, r, !0, s, n)))
          : ((t.tag = 0), ye && s && nd(t), rt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Go(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Qw(r)),
          (e = Mt(r, e)),
          i)
        ) {
          case 0:
            t = tc(null, t, r, e, n);
            break e;
          case 1:
            t = Eh(null, t, r, e, n);
            break e;
          case 11:
            t = _h(null, t, r, e, n);
            break e;
          case 14:
            t = Sh(null, t, r, Mt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        tc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        Eh(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((kv(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          ev(e, t),
          ya(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Ei(Error(R(423)), t)), (t = Ph(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Ei(Error(R(424)), t)), (t = Ph(e, t, r, n, i));
            break e;
          } else
            for (
              vt = Wn(t.stateNode.containerInfo.firstChild),
                yt = t,
                ye = !0,
                Ft = null,
                n = Zg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wi(), r === i)) {
            t = xn(e, t, n);
            break e;
          }
          rt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        tv(t),
        e === null && Qu(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Hu(r, i) ? (o = null) : s !== null && Hu(r, s) && (t.flags |= 32),
        Cv(e, t),
        rt(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Qu(t), null;
    case 13:
      return Nv(e, t, n);
    case 4:
      return (
        cd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = _i(t, null, r, n)) : rt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        _h(e, t, r, i, n)
      );
    case 7:
      return rt(e, t, t.pendingProps, n), t.child;
    case 8:
      return rt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return rt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          fe(ga, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Ut(s.value, o)) {
            if (s.children === i.children && !ct.current) {
              t = xn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = fn(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (l.next = l)
                          : ((l.next = f.next), (f.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Ju(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(R(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Ju(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        rt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        hi(t, n),
        (i = jt(i)),
        (r = r(i)),
        (t.flags |= 1),
        rt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Mt(r, t.pendingProps)),
        (i = Mt(r.type, i)),
        Sh(e, t, r, i, n)
      );
    case 15:
      return Pv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        Go(e, t),
        (t.tag = 1),
        dt(r) ? ((e = !0), ha(t)) : (e = !1),
        hi(t, n),
        _v(t, r, i),
        qu(t, r, i, n),
        nc(null, t, r, !0, e, n)
      );
    case 19:
      return jv(e, t, n);
    case 22:
      return Tv(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Hv(e, t) {
  return yg(e, t);
}
function Xw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function kt(e, t, n, r) {
  return new Xw(e, t, n, r);
}
function Td(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Qw(e) {
  if (typeof e == "function") return Td(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Wc)) return 11;
    if (e === Hc) return 14;
  }
  return 2;
}
function Yn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = kt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Xo(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Td(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Kr:
        return kr(n.children, i, s, t);
      case $c:
        (o = 8), (i |= 8);
        break;
      case Eu:
        return (
          (e = kt(12, n, t, i | 2)), (e.elementType = Eu), (e.lanes = s), e
        );
      case Pu:
        return (e = kt(13, n, t, i)), (e.elementType = Pu), (e.lanes = s), e;
      case Tu:
        return (e = kt(19, n, t, i)), (e.elementType = Tu), (e.lanes = s), e;
      case tg:
        return Za(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qm:
              o = 10;
              break e;
            case eg:
              o = 9;
              break e;
            case Wc:
              o = 11;
              break e;
            case Hc:
              o = 14;
              break e;
            case Ln:
              (o = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = kt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function kr(e, t, n, r) {
  return (e = kt(7, e, r, t)), (e.lanes = n), e;
}
function Za(e, t, n, r) {
  return (
    (e = kt(22, e, r, t)),
    (e.elementType = tg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gl(e, t, n) {
  return (e = kt(6, e, null, t)), (e.lanes = n), e;
}
function Kl(e, t, n) {
  return (
    (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Jw(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = kl(0)),
    (this.expirationTimes = kl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = kl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Cd(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new Jw(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = kt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ud(s),
    e
  );
}
function Zw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Gv(e) {
  if (!e) return qn;
  e = e._reactInternals;
  e: {
    if (br(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (dt(n)) return Gg(e, n, t);
  }
  return t;
}
function Kv(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Cd(n, r, !0, e, i, s, o, a, l)),
    (e.context = Gv(null)),
    (n = e.current),
    (r = it()),
    (i = Kn(n)),
    (s = fn(r, i)),
    (s.callback = t ?? null),
    Hn(n, s, i),
    (e.current.lanes = i),
    Ks(e, i, r),
    ft(e, r),
    e
  );
}
function qa(e, t, n, r) {
  var i = t.current,
    s = it(),
    o = Kn(i);
  return (
    (n = Gv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = fn(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Hn(i, t, o)),
    e !== null && (Bt(e, i, o, s), $o(e, i, o)),
    o
  );
}
function Ca(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ih(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function kd(e, t) {
  Ih(e, t), (e = e.alternate) && Ih(e, t);
}
function qw() {
  return null;
}
var Yv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nd(e) {
  this._internalRoot = e;
}
el.prototype.render = Nd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  qa(e, t, null, null);
};
el.prototype.unmount = Nd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lr(function () {
      qa(null, e, null, null);
    }),
      (t[vn] = null);
  }
};
function el(e) {
  this._internalRoot = e;
}
el.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bn.length && t !== 0 && t < bn[n].priority; n++);
    bn.splice(n, 0, e), n === 0 && kg(e);
  }
};
function jd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function tl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mh() {}
function e_(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Ca(o);
        s.call(u);
      };
    }
    var o = Kv(t, r, e, 0, null, !1, !1, "", Mh);
    return (
      (e._reactRootContainer = o),
      (e[vn] = o.current),
      ks(e.nodeType === 8 ? e.parentNode : e),
      Lr(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ca(l);
      a.call(u);
    };
  }
  var l = Cd(e, 0, !1, null, null, !1, !1, "", Mh);
  return (
    (e._reactRootContainer = l),
    (e[vn] = l.current),
    ks(e.nodeType === 8 ? e.parentNode : e),
    Lr(function () {
      qa(t, l, n, r);
    }),
    l
  );
}
function nl(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Ca(o);
        a.call(l);
      };
    }
    qa(t, o, e, i);
  } else o = e_(n, t, e, i, r);
  return Ca(o);
}
Eg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zi(t.pendingLanes);
        n !== 0 &&
          (Yc(t, n | 1), ft(t, Ne()), !(Q & 6) && ((Pi = Ne() + 500), lr()));
      }
      break;
    case 13:
      Lr(function () {
        var r = yn(e, 1);
        if (r !== null) {
          var i = it();
          Bt(r, e, 1, i);
        }
      }),
        kd(e, 1);
  }
};
Xc = function (e) {
  if (e.tag === 13) {
    var t = yn(e, 134217728);
    if (t !== null) {
      var n = it();
      Bt(t, e, 134217728, n);
    }
    kd(e, 134217728);
  }
};
Pg = function (e) {
  if (e.tag === 13) {
    var t = Kn(e),
      n = yn(e, t);
    if (n !== null) {
      var r = it();
      Bt(n, e, t, r);
    }
    kd(e, t);
  }
};
Tg = function () {
  return ie;
};
Cg = function (e, t) {
  var n = ie;
  try {
    return (ie = e), t();
  } finally {
    ie = n;
  }
};
Mu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Nu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ga(r);
            if (!i) throw Error(R(90));
            rg(r), Nu(r, i);
          }
        }
      }
      break;
    case "textarea":
      sg(e, n);
      break;
    case "select":
      (t = n.value), t != null && ui(e, !!n.multiple, t, !1);
  }
};
fg = Sd;
hg = Lr;
var t_ = { usingClientEntryPoint: !1, Events: [Xs, Jr, Ga, cg, dg, Sd] },
  $i = {
    findFiberByHostInstance: xr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  n_ = {
    bundleType: $i.bundleType,
    version: $i.version,
    rendererPackageName: $i.rendererPackageName,
    rendererConfig: $i.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _n.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = gg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $i.findFiberByHostInstance || qw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ro.isDisabled && Ro.supportsFiber)
    try {
      (za = Ro.inject(n_)), (Qt = Ro);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t_;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jd(t)) throw Error(R(200));
  return Zw(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!jd(e)) throw Error(R(299));
  var n = !1,
    r = "",
    i = Yv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Cd(e, 1, !1, null, null, n, !1, r, i)),
    (e[vn] = t.current),
    ks(e.nodeType === 8 ? e.parentNode : e),
    new Nd(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = gg(t)), (e = e === null ? null : e.stateNode), e;
};
_t.flushSync = function (e) {
  return Lr(e);
};
_t.hydrate = function (e, t, n) {
  if (!tl(t)) throw Error(R(200));
  return nl(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!jd(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Yv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Kv(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[vn] = t.current),
    ks(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new el(t);
};
_t.render = function (e, t, n) {
  if (!tl(t)) throw Error(R(200));
  return nl(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!tl(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Lr(function () {
        nl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vn] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = Sd;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!tl(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return nl(e, t, n, !1, r);
};
_t.version = "18.3.1-next-f1338f8080-20240426";
function Xv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv);
    } catch (e) {
      console.error(e);
    }
}
Xv(), (Xm.exports = _t);
var Rd = Xm.exports;
const r_ = Om(Rd),
  i_ = bm({ __proto__: null, default: r_ }, [Rd]);
var bh = Rd;
(_u.createRoot = bh.createRoot), (_u.hydrateRoot = bh.hydrateRoot);
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ve() {
  return (
    (ve = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ve.apply(this, arguments)
  );
}
var De;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(De || (De = {}));
const Oh = "popstate";
function s_(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return bs(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : er(i);
  }
  return a_(t, n, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ti(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function o_() {
  return Math.random().toString(36).substr(2, 8);
}
function Fh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function bs(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ve(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ur(t) : t,
      { state: n, key: (t && t.key) || r || o_() }
    )
  );
}
function er(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ur(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function a_(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = De.Pop,
    l = null,
    u = f();
  u == null && ((u = 0), o.replaceState(ve({}, o.state, { idx: u }), ""));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = De.Pop;
    let P = f(),
      m = P == null ? null : P - u;
    (u = P), l && l({ action: a, location: x.location, delta: m });
  }
  function h(P, m) {
    a = De.Push;
    let p = bs(x.location, P, m);
    u = f() + 1;
    let g = Fh(p, u),
      E = x.createHref(p);
    try {
      o.pushState(g, "", E);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      i.location.assign(E);
    }
    s && l && l({ action: a, location: x.location, delta: 1 });
  }
  function v(P, m) {
    a = De.Replace;
    let p = bs(x.location, P, m);
    u = f();
    let g = Fh(p, u),
      E = x.createHref(p);
    o.replaceState(g, "", E),
      s && l && l({ action: a, location: x.location, delta: 0 });
  }
  function y(P) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof P == "string" ? P : er(P);
    return (
      (p = p.replace(/ $/, "%20")),
      K(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(P) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Oh, d),
        (l = P),
        () => {
          i.removeEventListener(Oh, d), (l = null);
        }
      );
    },
    createHref(P) {
      return t(i, P);
    },
    createURL: y,
    encodeLocation(P) {
      let m = y(P);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: v,
    go(P) {
      return o.go(P);
    },
  };
  return x;
}
var de;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(de || (de = {}));
const l_ = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function u_(e) {
  return e.index === !0;
}
function Os(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, s) => {
      let o = [...n, String(s)],
        a = typeof i.id == "string" ? i.id : o.join("-");
      if (
        (K(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        K(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        u_(i))
      ) {
        let l = ve({}, i, t(i), { id: a });
        return (r[a] = l), l;
      } else {
        let l = ve({}, i, t(i), { id: a, children: void 0 });
        return (
          (r[a] = l), i.children && (l.children = Os(i.children, t, o, r)), l
        );
      }
    })
  );
}
function yr(e, t, n) {
  return n === void 0 && (n = "/"), Qo(e, t, n, !1);
}
function Qo(e, t, n, r) {
  let i = typeof t == "string" ? ur(t) : t,
    s = zt(i.pathname || "/", n);
  if (s == null) return null;
  let o = Qv(e);
  d_(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let u = S_(s);
    a = w_(o[l], u, r);
  }
  return a;
}
function c_(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Qv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (K(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Zt([r, l.relativePath]),
      f = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (K(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Qv(s.children, t, f, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: y_(u, s.index), routesMeta: f });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of Jv(s.path)) i(s, o, l);
    }),
    t
  );
}
function Jv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Jv(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function d_(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : x_(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const f_ = /^:[\w-]+$/,
  h_ = 3,
  p_ = 2,
  m_ = 1,
  g_ = 10,
  v_ = -2,
  Vh = (e) => e === "*";
function y_(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Vh) && (r += v_),
    t && (r += p_),
    n
      .filter((i) => !Vh(i))
      .reduce((i, s) => i + (f_.test(s) ? h_ : s === "" ? m_ : g_), r)
  );
}
function x_(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function w_(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      f = s === "/" ? t : t.slice(s.length) || "/",
      d = ka(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        f
      ),
      h = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = ka(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          f
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      o.push({
        params: i,
        pathname: Zt([s, d.pathname]),
        pathnameBase: T_(Zt([s, d.pathnameBase])),
        route: h,
      }),
      d.pathnameBase !== "/" && (s = Zt([s, d.pathnameBase]));
  }
  return o;
}
function ka(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = __(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, f, d) => {
      let { paramName: h, isOptional: v } = f;
      if (h === "*") {
        let x = a[d] || "";
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[d];
      return (
        v && !y ? (u[h] = void 0) : (u[h] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function __(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ti(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function S_(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Ti(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function zt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function E_(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? ur(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : P_(n, t)) : t,
    search: C_(r),
    hash: k_(i),
  };
}
function P_(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Yl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Zv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Dd(e, t) {
  let n = Zv(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ad(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = ur(e))
    : ((i = ve({}, e)),
      K(
        !i.pathname || !i.pathname.includes("?"),
        Yl("?", "pathname", "search", i)
      ),
      K(
        !i.pathname || !i.pathname.includes("#"),
        Yl("#", "pathname", "hash", i)
      ),
      K(!i.search || !i.search.includes("#"), Yl("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      i.pathname = h.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = E_(i, a),
    u = o && o !== "/" && o.endsWith("/"),
    f = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"), l;
}
const Zt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  T_ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  C_ = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  k_ = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  Sn = function (t, n) {
    n === void 0 && (n = 302);
    let r = n;
    typeof r == "number"
      ? (r = { status: r })
      : typeof r.status > "u" && (r.status = 302);
    let i = new Headers(r.headers);
    return i.set("Location", t), new Response(null, ve({}, r, { headers: i }));
  };
class Ld {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function rl(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const qv = ["post", "put", "patch", "delete"],
  N_ = new Set(qv),
  j_ = ["get", ...qv],
  R_ = new Set(j_),
  D_ = new Set([301, 302, 303, 307, 308]),
  A_ = new Set([307, 308]),
  Xl = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  L_ = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Wi = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Id = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  I_ = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  ey = "remix-router-transitions";
function M_(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  K(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let _ = e.detectErrorBoundary;
    i = (S) => ({ hasErrorBoundary: _(S) });
  } else i = I_;
  let s = {},
    o = Os(e.routes, i, void 0, s),
    a,
    l = e.basename || "/",
    u = e.unstable_dataStrategy || B_,
    f = e.unstable_patchRoutesOnMiss,
    d = ve(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    h = null,
    v = new Set(),
    y = null,
    x = null,
    P = null,
    m = e.hydrationData != null,
    p = yr(o, e.history.location, l),
    g = null;
  if (p == null && !f) {
    let _ = nt(404, { pathname: e.history.location.pathname }),
      { matches: S, route: T } = Xh(o);
    (p = S), (g = { [T.id]: _ });
  }
  p &&
    f &&
    !e.hydrationData &&
    _l(p, o, e.history.location.pathname).active &&
    (p = null);
  let E;
  if (!p) (E = !1), (p = []);
  else if (p.some((_) => _.route.lazy)) E = !1;
  else if (!p.some((_) => _.route.loader)) E = !0;
  else if (d.v7_partialHydration) {
    let _ = e.hydrationData ? e.hydrationData.loaderData : null,
      S = e.hydrationData ? e.hydrationData.errors : null,
      T = (j) =>
        j.route.loader
          ? typeof j.route.loader == "function" && j.route.loader.hydrate === !0
            ? !1
            : (_ && _[j.route.id] !== void 0) || (S && S[j.route.id] !== void 0)
          : !0;
    if (S) {
      let j = p.findIndex((b) => S[b.route.id] !== void 0);
      E = p.slice(0, j + 1).every(T);
    } else E = p.every(T);
  } else E = e.hydrationData != null;
  let k,
    w = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: p,
      initialized: E,
      navigation: Xl,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || g,
      fetchers: new Map(),
      blockers: new Map(),
    },
    D = De.Pop,
    N = !1,
    A,
    L = !1,
    H = new Map(),
    ae = null,
    je = !1,
    ee = !1,
    ce = [],
    be = [],
    se = new Map(),
    M = 0,
    $ = -1,
    W = new Map(),
    J = new Set(),
    he = new Map(),
    $t = new Map(),
    Be = new Set(),
    Dt = new Map(),
    qe = new Map(),
    Fr = new Map(),
    vl = !1;
  function p1() {
    if (
      ((h = e.history.listen((_) => {
        let { action: S, location: T, delta: j } = _;
        if (vl) {
          vl = !1;
          return;
        }
        Ti(
          qe.size === 0 || j != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let b = Pf({
          currentLocation: w.location,
          nextLocation: T,
          historyAction: S,
        });
        if (b && j != null) {
          (vl = !0),
            e.history.go(j * -1),
            ao(b, {
              state: "blocked",
              location: T,
              proceed() {
                ao(b, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: T,
                }),
                  e.history.go(j);
              },
              reset() {
                let F = new Map(w.blockers);
                F.set(b, Wi), et({ blockers: F });
              },
            });
          return;
        }
        return fr(S, T);
      })),
      n)
    ) {
      q_(t, H);
      let _ = () => eS(t, H);
      t.addEventListener("pagehide", _),
        (ae = () => t.removeEventListener("pagehide", _));
    }
    return w.initialized || fr(De.Pop, w.location, { initialHydration: !0 }), k;
  }
  function m1() {
    h && h(),
      ae && ae(),
      v.clear(),
      A && A.abort(),
      w.fetchers.forEach((_, S) => oo(S)),
      w.blockers.forEach((_, S) => Ef(S));
  }
  function g1(_) {
    return v.add(_), () => v.delete(_);
  }
  function et(_, S) {
    S === void 0 && (S = {}), (w = ve({}, w, _));
    let T = [],
      j = [];
    d.v7_fetcherPersist &&
      w.fetchers.forEach((b, F) => {
        b.state === "idle" && (Be.has(F) ? j.push(F) : T.push(F));
      }),
      [...v].forEach((b) =>
        b(w, {
          deletedFetchers: j,
          unstable_viewTransitionOpts: S.viewTransitionOpts,
          unstable_flushSync: S.flushSync === !0,
        })
      ),
      d.v7_fetcherPersist &&
        (T.forEach((b) => w.fetchers.delete(b)), j.forEach((b) => oo(b)));
  }
  function Vr(_, S, T) {
    var j, b;
    let { flushSync: F } = T === void 0 ? {} : T,
      z =
        w.actionData != null &&
        w.navigation.formMethod != null &&
        Ot(w.navigation.formMethod) &&
        w.navigation.state === "loading" &&
        ((j = _.state) == null ? void 0 : j._isRedirect) !== !0,
      I;
    S.actionData
      ? Object.keys(S.actionData).length > 0
        ? (I = S.actionData)
        : (I = null)
      : z
      ? (I = w.actionData)
      : (I = null);
    let G = S.loaderData
        ? Kh(w.loaderData, S.loaderData, S.matches || [], S.errors)
        : w.loaderData,
      V = w.blockers;
    V.size > 0 && ((V = new Map(V)), V.forEach((te, le) => V.set(le, Wi)));
    let B =
      N === !0 ||
      (w.navigation.formMethod != null &&
        Ot(w.navigation.formMethod) &&
        ((b = _.state) == null ? void 0 : b._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      je ||
        D === De.Pop ||
        (D === De.Push
          ? e.history.push(_, _.state)
          : D === De.Replace && e.history.replace(_, _.state));
    let oe;
    if (D === De.Pop) {
      let te = H.get(w.location.pathname);
      te && te.has(_.pathname)
        ? (oe = { currentLocation: w.location, nextLocation: _ })
        : H.has(_.pathname) &&
          (oe = { currentLocation: _, nextLocation: w.location });
    } else if (L) {
      let te = H.get(w.location.pathname);
      te
        ? te.add(_.pathname)
        : ((te = new Set([_.pathname])), H.set(w.location.pathname, te)),
        (oe = { currentLocation: w.location, nextLocation: _ });
    }
    et(
      ve({}, S, {
        actionData: I,
        loaderData: G,
        historyAction: D,
        location: _,
        initialized: !0,
        navigation: Xl,
        revalidation: "idle",
        restoreScrollPosition: Cf(_, S.matches || w.matches),
        preventScrollReset: B,
        blockers: V,
      }),
      { viewTransitionOpts: oe, flushSync: F === !0 }
    ),
      (D = De.Pop),
      (N = !1),
      (L = !1),
      (je = !1),
      (ee = !1),
      (ce = []),
      (be = []);
  }
  async function gf(_, S) {
    if (typeof _ == "number") {
      e.history.go(_);
      return;
    }
    let T = pc(
        w.location,
        w.matches,
        l,
        d.v7_prependBasename,
        _,
        d.v7_relativeSplatPath,
        S == null ? void 0 : S.fromRouteId,
        S == null ? void 0 : S.relative
      ),
      {
        path: j,
        submission: b,
        error: F,
      } = Bh(d.v7_normalizeFormMethod, !1, T, S),
      z = w.location,
      I = bs(w.location, j, S && S.state);
    I = ve({}, I, e.history.encodeLocation(I));
    let G = S && S.replace != null ? S.replace : void 0,
      V = De.Push;
    G === !0
      ? (V = De.Replace)
      : G === !1 ||
        (b != null &&
          Ot(b.formMethod) &&
          b.formAction === w.location.pathname + w.location.search &&
          (V = De.Replace));
    let B =
        S && "preventScrollReset" in S ? S.preventScrollReset === !0 : void 0,
      oe = (S && S.unstable_flushSync) === !0,
      te = Pf({ currentLocation: z, nextLocation: I, historyAction: V });
    if (te) {
      ao(te, {
        state: "blocked",
        location: I,
        proceed() {
          ao(te, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: I,
          }),
            gf(_, S);
        },
        reset() {
          let le = new Map(w.blockers);
          le.set(te, Wi), et({ blockers: le });
        },
      });
      return;
    }
    return await fr(V, I, {
      submission: b,
      pendingError: F,
      preventScrollReset: B,
      replace: S && S.replace,
      enableViewTransition: S && S.unstable_viewTransition,
      flushSync: oe,
    });
  }
  function v1() {
    if (
      (yl(),
      et({ revalidation: "loading" }),
      w.navigation.state !== "submitting")
    ) {
      if (w.navigation.state === "idle") {
        fr(w.historyAction, w.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      fr(D || w.historyAction, w.navigation.location, {
        overrideNavigation: w.navigation,
      });
    }
  }
  async function fr(_, S, T) {
    A && A.abort(),
      (A = null),
      (D = _),
      (je = (T && T.startUninterruptedRevalidation) === !0),
      k1(w.location, w.matches),
      (N = (T && T.preventScrollReset) === !0),
      (L = (T && T.enableViewTransition) === !0);
    let j = a || o,
      b = T && T.overrideNavigation,
      F = yr(j, S, l),
      z = (T && T.flushSync) === !0,
      I = _l(F, j, S.pathname);
    if ((I.active && I.matches && (F = I.matches), !F)) {
      let { error: q, notFoundMatches: Ue, route: Re } = xl(S.pathname);
      Vr(
        S,
        { matches: Ue, loaderData: {}, errors: { [Re.id]: q } },
        { flushSync: z }
      );
      return;
    }
    if (
      w.initialized &&
      !ee &&
      G_(w.location, S) &&
      !(T && T.submission && Ot(T.submission.formMethod))
    ) {
      Vr(S, { matches: F }, { flushSync: z });
      return;
    }
    A = new AbortController();
    let G = Wr(e.history, S, A.signal, T && T.submission),
      V;
    if (T && T.pendingError)
      V = [ii(F).route.id, { type: de.error, error: T.pendingError }];
    else if (T && T.submission && Ot(T.submission.formMethod)) {
      let q = await y1(G, S, T.submission, F, I.active, {
        replace: T.replace,
        flushSync: z,
      });
      if (q.shortCircuited) return;
      if (q.pendingActionResult) {
        let [Ue, Re] = q.pendingActionResult;
        if (gt(Re) && rl(Re.error) && Re.error.status === 404) {
          (A = null),
            Vr(S, {
              matches: q.matches,
              loaderData: {},
              errors: { [Ue]: Re.error },
            });
          return;
        }
      }
      (F = q.matches || F),
        (V = q.pendingActionResult),
        (b = Ql(S, T.submission)),
        (z = !1),
        (I.active = !1),
        (G = Wr(e.history, G.url, G.signal));
    }
    let {
      shortCircuited: B,
      matches: oe,
      loaderData: te,
      errors: le,
    } = await x1(
      G,
      S,
      F,
      I.active,
      b,
      T && T.submission,
      T && T.fetcherSubmission,
      T && T.replace,
      T && T.initialHydration === !0,
      z,
      V
    );
    B ||
      ((A = null),
      Vr(S, ve({ matches: oe || F }, Yh(V), { loaderData: te, errors: le })));
  }
  async function y1(_, S, T, j, b, F) {
    F === void 0 && (F = {}), yl();
    let z = J_(S, T);
    if ((et({ navigation: z }, { flushSync: F.flushSync === !0 }), b)) {
      let V = await uo(j, S.pathname, _.signal);
      if (V.type === "aborted") return { shortCircuited: !0 };
      if (V.type === "error") {
        let { boundaryId: B, error: oe } = lo(S.pathname, V);
        return {
          matches: V.partialMatches,
          pendingActionResult: [B, { type: de.error, error: oe }],
        };
      } else if (V.matches) j = V.matches;
      else {
        let { notFoundMatches: B, error: oe, route: te } = xl(S.pathname);
        return {
          matches: B,
          pendingActionResult: [te.id, { type: de.error, error: oe }],
        };
      }
    }
    let I,
      G = es(j, S);
    if (!G.route.action && !G.route.lazy)
      I = {
        type: de.error,
        error: nt(405, {
          method: _.method,
          pathname: S.pathname,
          routeId: G.route.id,
        }),
      };
    else if (((I = (await Ii("action", _, [G], j))[0]), _.signal.aborted))
      return { shortCircuited: !0 };
    if (Er(I)) {
      let V;
      return (
        F && F.replace != null
          ? (V = F.replace)
          : (V =
              Wh(I.response.headers.get("Location"), new URL(_.url), l) ===
              w.location.pathname + w.location.search),
        await Li(_, I, { submission: T, replace: V }),
        { shortCircuited: !0 }
      );
    }
    if (Sr(I)) throw nt(400, { type: "defer-action" });
    if (gt(I)) {
      let V = ii(j, G.route.id);
      return (
        (F && F.replace) !== !0 && (D = De.Push),
        { matches: j, pendingActionResult: [V.route.id, I] }
      );
    }
    return { matches: j, pendingActionResult: [G.route.id, I] };
  }
  async function x1(_, S, T, j, b, F, z, I, G, V, B) {
    let oe = b || Ql(S, F),
      te = F || z || Zh(oe),
      le = !je && (!d.v7_partialHydration || !G);
    if (j) {
      if (le) {
        let Pe = vf(B);
        et(ve({ navigation: oe }, Pe !== void 0 ? { actionData: Pe } : {}), {
          flushSync: V,
        });
      }
      let Y = await uo(T, S.pathname, _.signal);
      if (Y.type === "aborted") return { shortCircuited: !0 };
      if (Y.type === "error") {
        let { boundaryId: Pe, error: ht } = lo(S.pathname, Y);
        return {
          matches: Y.partialMatches,
          loaderData: {},
          errors: { [Pe]: ht },
        };
      } else if (Y.matches) T = Y.matches;
      else {
        let { error: Pe, notFoundMatches: ht, route: ge } = xl(S.pathname);
        return { matches: ht, loaderData: {}, errors: { [ge.id]: Pe } };
      }
    }
    let q = a || o,
      [Ue, Re] = Uh(
        e.history,
        w,
        T,
        te,
        S,
        d.v7_partialHydration && G === !0,
        d.v7_skipActionErrorRevalidation,
        ee,
        ce,
        be,
        Be,
        he,
        J,
        q,
        l,
        B
      );
    if (
      (wl(
        (Y) =>
          !(T && T.some((Pe) => Pe.route.id === Y)) ||
          (Ue && Ue.some((Pe) => Pe.route.id === Y))
      ),
      ($ = ++M),
      Ue.length === 0 && Re.length === 0)
    ) {
      let Y = _f();
      return (
        Vr(
          S,
          ve(
            {
              matches: T,
              loaderData: {},
              errors: B && gt(B[1]) ? { [B[0]]: B[1].error } : null,
            },
            Yh(B),
            Y ? { fetchers: new Map(w.fetchers) } : {}
          ),
          { flushSync: V }
        ),
        { shortCircuited: !0 }
      );
    }
    if (le) {
      let Y = {};
      if (!j) {
        Y.navigation = oe;
        let Pe = vf(B);
        Pe !== void 0 && (Y.actionData = Pe);
      }
      Re.length > 0 && (Y.fetchers = w1(Re)), et(Y, { flushSync: V });
    }
    Re.forEach((Y) => {
      se.has(Y.key) && Tn(Y.key), Y.controller && se.set(Y.key, Y.controller);
    });
    let Mi = () => Re.forEach((Y) => Tn(Y.key));
    A && A.signal.addEventListener("abort", Mi);
    let { loaderResults: Cn, fetcherResults: Br } = await yf(
      w.matches,
      T,
      Ue,
      Re,
      _
    );
    if (_.signal.aborted) return { shortCircuited: !0 };
    A && A.signal.removeEventListener("abort", Mi),
      Re.forEach((Y) => se.delete(Y.key));
    let Ur = Qh([...Cn, ...Br]);
    if (Ur) {
      if (Ur.idx >= Ue.length) {
        let Y = Re[Ur.idx - Ue.length].key;
        J.add(Y);
      }
      return await Li(_, Ur.result, { replace: I }), { shortCircuited: !0 };
    }
    let { loaderData: zr, errors: Wt } = Gh(w, T, Ue, Cn, B, Re, Br, Dt);
    Dt.forEach((Y, Pe) => {
      Y.subscribe((ht) => {
        (ht || Y.done) && Dt.delete(Pe);
      });
    }),
      d.v7_partialHydration &&
        G &&
        w.errors &&
        Object.entries(w.errors)
          .filter((Y) => {
            let [Pe] = Y;
            return !Ue.some((ht) => ht.route.id === Pe);
          })
          .forEach((Y) => {
            let [Pe, ht] = Y;
            Wt = Object.assign(Wt || {}, { [Pe]: ht });
          });
    let co = _f(),
      fo = Sf($),
      ho = co || fo || Re.length > 0;
    return ve(
      { matches: T, loaderData: zr, errors: Wt },
      ho ? { fetchers: new Map(w.fetchers) } : {}
    );
  }
  function vf(_) {
    if (_ && !gt(_[1])) return { [_[0]]: _[1].data };
    if (w.actionData)
      return Object.keys(w.actionData).length === 0 ? null : w.actionData;
  }
  function w1(_) {
    return (
      _.forEach((S) => {
        let T = w.fetchers.get(S.key),
          j = Hi(void 0, T ? T.data : void 0);
        w.fetchers.set(S.key, j);
      }),
      new Map(w.fetchers)
    );
  }
  function _1(_, S, T, j) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    se.has(_) && Tn(_);
    let b = (j && j.unstable_flushSync) === !0,
      F = a || o,
      z = pc(
        w.location,
        w.matches,
        l,
        d.v7_prependBasename,
        T,
        d.v7_relativeSplatPath,
        S,
        j == null ? void 0 : j.relative
      ),
      I = yr(F, z, l),
      G = _l(I, F, z);
    if ((G.active && G.matches && (I = G.matches), !I)) {
      nn(_, S, nt(404, { pathname: z }), { flushSync: b });
      return;
    }
    let {
      path: V,
      submission: B,
      error: oe,
    } = Bh(d.v7_normalizeFormMethod, !0, z, j);
    if (oe) {
      nn(_, S, oe, { flushSync: b });
      return;
    }
    let te = es(I, V);
    if (((N = (j && j.preventScrollReset) === !0), B && Ot(B.formMethod))) {
      S1(_, S, V, te, I, G.active, b, B);
      return;
    }
    he.set(_, { routeId: S, path: V }), E1(_, S, V, te, I, G.active, b, B);
  }
  async function S1(_, S, T, j, b, F, z, I) {
    yl(), he.delete(_);
    function G(ge) {
      if (!ge.route.action && !ge.route.lazy) {
        let rn = nt(405, { method: I.formMethod, pathname: T, routeId: S });
        return nn(_, S, rn, { flushSync: z }), !0;
      }
      return !1;
    }
    if (!F && G(j)) return;
    let V = w.fetchers.get(_);
    Pn(_, Z_(I, V), { flushSync: z });
    let B = new AbortController(),
      oe = Wr(e.history, T, B.signal, I);
    if (F) {
      let ge = await uo(b, T, oe.signal);
      if (ge.type === "aborted") return;
      if (ge.type === "error") {
        let { error: rn } = lo(T, ge);
        nn(_, S, rn, { flushSync: z });
        return;
      } else if (ge.matches) {
        if (((b = ge.matches), (j = es(b, T)), G(j))) return;
      } else {
        nn(_, S, nt(404, { pathname: T }), { flushSync: z });
        return;
      }
    }
    se.set(_, B);
    let te = M,
      q = (await Ii("action", oe, [j], b))[0];
    if (oe.signal.aborted) {
      se.get(_) === B && se.delete(_);
      return;
    }
    if (d.v7_fetcherPersist && Be.has(_)) {
      if (Er(q) || gt(q)) {
        Pn(_, Dn(void 0));
        return;
      }
    } else {
      if (Er(q))
        if ((se.delete(_), $ > te)) {
          Pn(_, Dn(void 0));
          return;
        } else
          return J.add(_), Pn(_, Hi(I)), Li(oe, q, { fetcherSubmission: I });
      if (gt(q)) {
        nn(_, S, q.error);
        return;
      }
    }
    if (Sr(q)) throw nt(400, { type: "defer-action" });
    let Ue = w.navigation.location || w.location,
      Re = Wr(e.history, Ue, B.signal),
      Mi = a || o,
      Cn =
        w.navigation.state !== "idle"
          ? yr(Mi, w.navigation.location, l)
          : w.matches;
    K(Cn, "Didn't find any matches after fetcher action");
    let Br = ++M;
    W.set(_, Br);
    let Ur = Hi(I, q.data);
    w.fetchers.set(_, Ur);
    let [zr, Wt] = Uh(
      e.history,
      w,
      Cn,
      I,
      Ue,
      !1,
      d.v7_skipActionErrorRevalidation,
      ee,
      ce,
      be,
      Be,
      he,
      J,
      Mi,
      l,
      [j.route.id, q]
    );
    Wt.filter((ge) => ge.key !== _).forEach((ge) => {
      let rn = ge.key,
        kf = w.fetchers.get(rn),
        R1 = Hi(void 0, kf ? kf.data : void 0);
      w.fetchers.set(rn, R1),
        se.has(rn) && Tn(rn),
        ge.controller && se.set(rn, ge.controller);
    }),
      et({ fetchers: new Map(w.fetchers) });
    let co = () => Wt.forEach((ge) => Tn(ge.key));
    B.signal.addEventListener("abort", co);
    let { loaderResults: fo, fetcherResults: ho } = await yf(
      w.matches,
      Cn,
      zr,
      Wt,
      Re
    );
    if (B.signal.aborted) return;
    B.signal.removeEventListener("abort", co),
      W.delete(_),
      se.delete(_),
      Wt.forEach((ge) => se.delete(ge.key));
    let Y = Qh([...fo, ...ho]);
    if (Y) {
      if (Y.idx >= zr.length) {
        let ge = Wt[Y.idx - zr.length].key;
        J.add(ge);
      }
      return Li(Re, Y.result);
    }
    let { loaderData: Pe, errors: ht } = Gh(
      w,
      w.matches,
      zr,
      fo,
      void 0,
      Wt,
      ho,
      Dt
    );
    if (w.fetchers.has(_)) {
      let ge = Dn(q.data);
      w.fetchers.set(_, ge);
    }
    Sf(Br),
      w.navigation.state === "loading" && Br > $
        ? (K(D, "Expected pending action"),
          A && A.abort(),
          Vr(w.navigation.location, {
            matches: Cn,
            loaderData: Pe,
            errors: ht,
            fetchers: new Map(w.fetchers),
          }))
        : (et({
            errors: ht,
            loaderData: Kh(w.loaderData, Pe, Cn, ht),
            fetchers: new Map(w.fetchers),
          }),
          (ee = !1));
  }
  async function E1(_, S, T, j, b, F, z, I) {
    let G = w.fetchers.get(_);
    Pn(_, Hi(I, G ? G.data : void 0), { flushSync: z });
    let V = new AbortController(),
      B = Wr(e.history, T, V.signal);
    if (F) {
      let q = await uo(b, T, B.signal);
      if (q.type === "aborted") return;
      if (q.type === "error") {
        let { error: Ue } = lo(T, q);
        nn(_, S, Ue, { flushSync: z });
        return;
      } else if (q.matches) (b = q.matches), (j = es(b, T));
      else {
        nn(_, S, nt(404, { pathname: T }), { flushSync: z });
        return;
      }
    }
    se.set(_, V);
    let oe = M,
      le = (await Ii("loader", B, [j], b))[0];
    if (
      (Sr(le) && (le = (await sy(le, B.signal, !0)) || le),
      se.get(_) === V && se.delete(_),
      !B.signal.aborted)
    ) {
      if (Be.has(_)) {
        Pn(_, Dn(void 0));
        return;
      }
      if (Er(le))
        if ($ > oe) {
          Pn(_, Dn(void 0));
          return;
        } else {
          J.add(_), await Li(B, le);
          return;
        }
      if (gt(le)) {
        nn(_, S, le.error);
        return;
      }
      K(!Sr(le), "Unhandled fetcher deferred data"), Pn(_, Dn(le.data));
    }
  }
  async function Li(_, S, T) {
    let {
      submission: j,
      fetcherSubmission: b,
      replace: F,
    } = T === void 0 ? {} : T;
    S.response.headers.has("X-Remix-Revalidate") && (ee = !0);
    let z = S.response.headers.get("Location");
    K(z, "Expected a Location header on the redirect Response"),
      (z = Wh(z, new URL(_.url), l));
    let I = bs(w.location, z, { _isRedirect: !0 });
    if (n) {
      let le = !1;
      if (S.response.headers.has("X-Remix-Reload-Document")) le = !0;
      else if (Id.test(z)) {
        const q = e.history.createURL(z);
        le = q.origin !== t.location.origin || zt(q.pathname, l) == null;
      }
      if (le) {
        F ? t.location.replace(z) : t.location.assign(z);
        return;
      }
    }
    A = null;
    let G = F === !0 ? De.Replace : De.Push,
      { formMethod: V, formAction: B, formEncType: oe } = w.navigation;
    !j && !b && V && B && oe && (j = Zh(w.navigation));
    let te = j || b;
    if (A_.has(S.response.status) && te && Ot(te.formMethod))
      await fr(G, I, {
        submission: ve({}, te, { formAction: z }),
        preventScrollReset: N,
      });
    else {
      let le = Ql(I, j);
      await fr(G, I, {
        overrideNavigation: le,
        fetcherSubmission: b,
        preventScrollReset: N,
      });
    }
  }
  async function Ii(_, S, T, j) {
    try {
      let b = await U_(u, _, S, T, j, s, i);
      return await Promise.all(
        b.map((F, z) => {
          if (Y_(F)) {
            let I = F.result;
            return {
              type: de.redirect,
              response: W_(I, S, T[z].route.id, j, l, d.v7_relativeSplatPath),
            };
          }
          return $_(F);
        })
      );
    } catch (b) {
      return T.map(() => ({ type: de.error, error: b }));
    }
  }
  async function yf(_, S, T, j, b) {
    let [F, ...z] = await Promise.all([
      T.length ? Ii("loader", b, T, S) : [],
      ...j.map((I) => {
        if (I.matches && I.match && I.controller) {
          let G = Wr(e.history, I.path, I.controller.signal);
          return Ii("loader", G, [I.match], I.matches).then((V) => V[0]);
        } else
          return Promise.resolve({
            type: de.error,
            error: nt(404, { pathname: I.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Jh(
          _,
          T,
          F,
          F.map(() => b.signal),
          !1,
          w.loaderData
        ),
        Jh(
          _,
          j.map((I) => I.match),
          z,
          j.map((I) => (I.controller ? I.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: F, fetcherResults: z }
    );
  }
  function yl() {
    (ee = !0),
      ce.push(...wl()),
      he.forEach((_, S) => {
        se.has(S) && (be.push(S), Tn(S));
      });
  }
  function Pn(_, S, T) {
    T === void 0 && (T = {}),
      w.fetchers.set(_, S),
      et(
        { fetchers: new Map(w.fetchers) },
        { flushSync: (T && T.flushSync) === !0 }
      );
  }
  function nn(_, S, T, j) {
    j === void 0 && (j = {});
    let b = ii(w.matches, S);
    oo(_),
      et(
        { errors: { [b.route.id]: T }, fetchers: new Map(w.fetchers) },
        { flushSync: (j && j.flushSync) === !0 }
      );
  }
  function xf(_) {
    return (
      d.v7_fetcherPersist &&
        ($t.set(_, ($t.get(_) || 0) + 1), Be.has(_) && Be.delete(_)),
      w.fetchers.get(_) || L_
    );
  }
  function oo(_) {
    let S = w.fetchers.get(_);
    se.has(_) && !(S && S.state === "loading" && W.has(_)) && Tn(_),
      he.delete(_),
      W.delete(_),
      J.delete(_),
      Be.delete(_),
      w.fetchers.delete(_);
  }
  function P1(_) {
    if (d.v7_fetcherPersist) {
      let S = ($t.get(_) || 0) - 1;
      S <= 0 ? ($t.delete(_), Be.add(_)) : $t.set(_, S);
    } else oo(_);
    et({ fetchers: new Map(w.fetchers) });
  }
  function Tn(_) {
    let S = se.get(_);
    K(S, "Expected fetch controller: " + _), S.abort(), se.delete(_);
  }
  function wf(_) {
    for (let S of _) {
      let T = xf(S),
        j = Dn(T.data);
      w.fetchers.set(S, j);
    }
  }
  function _f() {
    let _ = [],
      S = !1;
    for (let T of J) {
      let j = w.fetchers.get(T);
      K(j, "Expected fetcher: " + T),
        j.state === "loading" && (J.delete(T), _.push(T), (S = !0));
    }
    return wf(_), S;
  }
  function Sf(_) {
    let S = [];
    for (let [T, j] of W)
      if (j < _) {
        let b = w.fetchers.get(T);
        K(b, "Expected fetcher: " + T),
          b.state === "loading" && (Tn(T), W.delete(T), S.push(T));
      }
    return wf(S), S.length > 0;
  }
  function T1(_, S) {
    let T = w.blockers.get(_) || Wi;
    return qe.get(_) !== S && qe.set(_, S), T;
  }
  function Ef(_) {
    w.blockers.delete(_), qe.delete(_);
  }
  function ao(_, S) {
    let T = w.blockers.get(_) || Wi;
    K(
      (T.state === "unblocked" && S.state === "blocked") ||
        (T.state === "blocked" && S.state === "blocked") ||
        (T.state === "blocked" && S.state === "proceeding") ||
        (T.state === "blocked" && S.state === "unblocked") ||
        (T.state === "proceeding" && S.state === "unblocked"),
      "Invalid blocker state transition: " + T.state + " -> " + S.state
    );
    let j = new Map(w.blockers);
    j.set(_, S), et({ blockers: j });
  }
  function Pf(_) {
    let { currentLocation: S, nextLocation: T, historyAction: j } = _;
    if (qe.size === 0) return;
    qe.size > 1 && Ti(!1, "A router only supports one blocker at a time");
    let b = Array.from(qe.entries()),
      [F, z] = b[b.length - 1],
      I = w.blockers.get(F);
    if (
      !(I && I.state === "proceeding") &&
      z({ currentLocation: S, nextLocation: T, historyAction: j })
    )
      return F;
  }
  function xl(_) {
    let S = nt(404, { pathname: _ }),
      T = a || o,
      { matches: j, route: b } = Xh(T);
    return wl(), { notFoundMatches: j, route: b, error: S };
  }
  function lo(_, S) {
    return {
      boundaryId: ii(S.partialMatches).route.id,
      error: nt(400, {
        type: "route-discovery",
        pathname: _,
        message:
          S.error != null && "message" in S.error ? S.error : String(S.error),
      }),
    };
  }
  function wl(_) {
    let S = [];
    return (
      Dt.forEach((T, j) => {
        (!_ || _(j)) && (T.cancel(), S.push(j), Dt.delete(j));
      }),
      S
    );
  }
  function C1(_, S, T) {
    if (((y = _), (P = S), (x = T || null), !m && w.navigation === Xl)) {
      m = !0;
      let j = Cf(w.location, w.matches);
      j != null && et({ restoreScrollPosition: j });
    }
    return () => {
      (y = null), (P = null), (x = null);
    };
  }
  function Tf(_, S) {
    return (
      (x &&
        x(
          _,
          S.map((j) => c_(j, w.loaderData))
        )) ||
      _.key
    );
  }
  function k1(_, S) {
    if (y && P) {
      let T = Tf(_, S);
      y[T] = P();
    }
  }
  function Cf(_, S) {
    if (y) {
      let T = Tf(_, S),
        j = y[T];
      if (typeof j == "number") return j;
    }
    return null;
  }
  function _l(_, S, T) {
    if (f)
      if (_) {
        let j = _[_.length - 1].route;
        if (j.path && (j.path === "*" || j.path.endsWith("/*")))
          return { active: !0, matches: Qo(S, T, l, !0) };
      } else return { active: !0, matches: Qo(S, T, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function uo(_, S, T) {
    let j = _,
      b = j.length > 0 ? j[j.length - 1].route : null;
    for (;;) {
      let F = a == null,
        z = a || o;
      try {
        await V_(f, S, j, z, s, i, Fr, T);
      } catch (B) {
        return { type: "error", error: B, partialMatches: j };
      } finally {
        F && (o = [...o]);
      }
      if (T.aborted) return { type: "aborted" };
      let I = yr(z, S, l),
        G = !1;
      if (I) {
        let B = I[I.length - 1].route;
        if (B.index) return { type: "success", matches: I };
        if (B.path && B.path.length > 0)
          if (B.path === "*") G = !0;
          else return { type: "success", matches: I };
      }
      let V = Qo(z, S, l, !0);
      if (
        !V ||
        j.map((B) => B.route.id).join("-") ===
          V.map((B) => B.route.id).join("-")
      )
        return { type: "success", matches: G ? I : null };
      if (((j = V), (b = j[j.length - 1].route), b.path === "*"))
        return { type: "success", matches: j };
    }
  }
  function N1(_) {
    (s = {}), (a = Os(_, i, void 0, s));
  }
  function j1(_, S) {
    let T = a == null;
    ny(_, S, a || o, s, i), T && ((o = [...o]), et({}));
  }
  return (
    (k = {
      get basename() {
        return l;
      },
      get future() {
        return d;
      },
      get state() {
        return w;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: p1,
      subscribe: g1,
      enableScrollRestoration: C1,
      navigate: gf,
      fetch: _1,
      revalidate: v1,
      createHref: (_) => e.history.createHref(_),
      encodeLocation: (_) => e.history.encodeLocation(_),
      getFetcher: xf,
      deleteFetcher: P1,
      dispose: m1,
      getBlocker: T1,
      deleteBlocker: Ef,
      patchRoutes: j1,
      _internalFetchControllers: se,
      _internalActiveDeferreds: Dt,
      _internalSetRoutes: N1,
    }),
    k
  );
}
function b_(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function pc(e, t, n, r, i, s, o, a) {
  let l, u;
  if (o) {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === o)) {
        u = d;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let f = Ad(i || ".", Dd(l, s), zt(e.pathname, n) || e.pathname, a === "path");
  return (
    i == null && ((f.search = e.search), (f.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      u &&
      u.route.index &&
      !Md(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (f.pathname = f.pathname === "/" ? n : Zt([n, f.pathname])),
    er(f)
  );
}
function Bh(e, t, n, r) {
  if (!r || !b_(r)) return { path: n };
  if (r.formMethod && !Q_(r.formMethod))
    return { path: n, error: nt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: nt(400, { type: "invalid-body" }) }),
    s = r.formMethod || "get",
    o = e ? s.toUpperCase() : s.toLowerCase(),
    a = ry(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Ot(o)) return i();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((v, y) => {
              let [x, P] = y;
              return (
                "" +
                v +
                x +
                "=" +
                P +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Ot(o)) return i();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  K(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let l, u;
  if (r.formData) (l = mc(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = mc(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = Hh(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = Hh(l));
    } catch {
      return i();
    }
  let f = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Ot(f.formMethod)) return { path: n, submission: f };
  let d = ur(n);
  return (
    t && d.search && Md(d.search) && l.append("index", ""),
    (d.search = "?" + l),
    { path: er(d), submission: f }
  );
}
function O_(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Uh(e, t, n, r, i, s, o, a, l, u, f, d, h, v, y, x) {
  let P = x ? (gt(x[1]) ? x[1].error : x[1].data) : void 0,
    m = e.createURL(t.location),
    p = e.createURL(i),
    g = x && gt(x[1]) ? x[0] : void 0,
    E = g ? O_(n, g) : n,
    k = x ? x[1].statusCode : void 0,
    w = o && k && k >= 400,
    D = E.filter((A, L) => {
      let { route: H } = A;
      if (H.lazy) return !0;
      if (H.loader == null) return !1;
      if (s)
        return typeof H.loader != "function" || H.loader.hydrate
          ? !0
          : t.loaderData[H.id] === void 0 &&
              (!t.errors || t.errors[H.id] === void 0);
      if (
        F_(t.loaderData, t.matches[L], A) ||
        l.some((ee) => ee === A.route.id)
      )
        return !0;
      let ae = t.matches[L],
        je = A;
      return zh(
        A,
        ve(
          {
            currentUrl: m,
            currentParams: ae.params,
            nextUrl: p,
            nextParams: je.params,
          },
          r,
          {
            actionResult: P,
            actionStatus: k,
            defaultShouldRevalidate: w
              ? !1
              : a ||
                m.pathname + m.search === p.pathname + p.search ||
                m.search !== p.search ||
                ty(ae, je),
          }
        )
      );
    }),
    N = [];
  return (
    d.forEach((A, L) => {
      if (s || !n.some((ce) => ce.route.id === A.routeId) || f.has(L)) return;
      let H = yr(v, A.path, y);
      if (!H) {
        N.push({
          key: L,
          routeId: A.routeId,
          path: A.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ae = t.fetchers.get(L),
        je = es(H, A.path),
        ee = !1;
      h.has(L)
        ? (ee = !1)
        : u.includes(L)
        ? (ee = !0)
        : ae && ae.state !== "idle" && ae.data === void 0
        ? (ee = a)
        : (ee = zh(
            je,
            ve(
              {
                currentUrl: m,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: p,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: P,
                actionStatus: k,
                defaultShouldRevalidate: w ? !1 : a,
              }
            )
          )),
        ee &&
          N.push({
            key: L,
            routeId: A.routeId,
            path: A.path,
            matches: H,
            match: je,
            controller: new AbortController(),
          });
    }),
    [D, N]
  );
}
function F_(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function ty(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function zh(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function V_(e, t, n, r, i, s, o, a) {
  let l = [t, ...n.map((u) => u.route.id)].join("-");
  try {
    let u = o.get(l);
    u ||
      ((u = e({
        path: t,
        matches: n,
        patch: (f, d) => {
          a.aborted || ny(f, d, r, i, s);
        },
      })),
      o.set(l, u)),
      u && K_(u) && (await u);
  } finally {
    o.delete(l);
  }
}
function ny(e, t, n, r, i) {
  if (e) {
    var s;
    let o = r[e];
    K(o, "No route found to patch children into: routeId = " + e);
    let a = Os(
      t,
      i,
      [
        e,
        "patch",
        String(((s = o.children) == null ? void 0 : s.length) || "0"),
      ],
      r
    );
    o.children ? o.children.push(...a) : (o.children = a);
  } else {
    let o = Os(t, i, ["patch", String(n.length || "0")], r);
    n.push(...o);
  }
}
async function $h(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  K(i, "No route found in manifest");
  let s = {};
  for (let o in r) {
    let l = i[o] !== void 0 && o !== "hasErrorBoundary";
    Ti(
      !l,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !l && !l_.has(o) && (s[o] = r[o]);
  }
  Object.assign(i, s), Object.assign(i, ve({}, t(i), { lazy: void 0 }));
}
function B_(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function U_(e, t, n, r, i, s, o, a) {
  let l = r.reduce((d, h) => d.add(h.route.id), new Set()),
    u = new Set(),
    f = await e({
      matches: i.map((d) => {
        let h = l.has(d.route.id);
        return ve({}, d, {
          shouldLoad: h,
          resolve: (y) => (
            u.add(d.route.id),
            h
              ? z_(t, n, d, s, o, y, a)
              : Promise.resolve({ type: de.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: i[0].params,
      context: a,
    });
  return (
    i.forEach((d) =>
      K(
        u.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    f.filter((d, h) => l.has(i[h].route.id))
  );
}
async function z_(e, t, n, r, i, s, o) {
  let a,
    l,
    u = (f) => {
      let d,
        h = new Promise((x, P) => (d = P));
      (l = () => d()), t.signal.addEventListener("abort", l);
      let v = (x) =>
          typeof f != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : f(
                { request: t, params: n.params, context: o },
                ...(x !== void 0 ? [x] : [])
              ),
        y;
      return (
        s
          ? (y = s((x) => v(x)))
          : (y = (async () => {
              try {
                return { type: "data", result: await v() };
              } catch (x) {
                return { type: "error", result: x };
              }
            })()),
        Promise.race([y, h])
      );
    };
  try {
    let f = n.route[e];
    if (n.route.lazy)
      if (f) {
        let d,
          [h] = await Promise.all([
            u(f).catch((v) => {
              d = v;
            }),
            $h(n.route, i, r),
          ]);
        if (d !== void 0) throw d;
        a = h;
      } else if ((await $h(n.route, i, r), (f = n.route[e]), f)) a = await u(f);
      else if (e === "action") {
        let d = new URL(t.url),
          h = d.pathname + d.search;
        throw nt(405, { method: t.method, pathname: h, routeId: n.route.id });
      } else return { type: de.data, result: void 0 };
    else if (f) a = await u(f);
    else {
      let d = new URL(t.url),
        h = d.pathname + d.search;
      throw nt(404, { pathname: h });
    }
    K(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (f) {
    return { type: de.error, result: f };
  } finally {
    l && t.signal.removeEventListener("abort", l);
  }
  return a;
}
async function $_(e) {
  let { result: t, type: n, status: r } = e;
  if (iy(t)) {
    let o;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (o = null)
          : (o = await t.json())
        : (o = await t.text());
    } catch (a) {
      return { type: de.error, error: a };
    }
    return n === de.error
      ? {
          type: de.error,
          error: new Ld(t.status, t.statusText, o),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: de.data, data: o, statusCode: t.status, headers: t.headers };
  }
  if (n === de.error)
    return { type: de.error, error: t, statusCode: rl(t) ? t.status : r };
  if (X_(t)) {
    var i, s;
    return {
      type: de.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((s = t.init) == null ? void 0 : s.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: de.data, data: t, statusCode: r };
}
function W_(e, t, n, r, i, s) {
  let o = e.headers.get("Location");
  if (
    (K(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Id.test(o))
  ) {
    let a = r.slice(0, r.findIndex((l) => l.route.id === n) + 1);
    (o = pc(new URL(t.url), a, i, !0, o, s)), e.headers.set("Location", o);
  }
  return e;
}
function Wh(e, t, n) {
  if (Id.test(e)) {
    let r = e,
      i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      s = zt(i.pathname, n) != null;
    if (i.origin === t.origin && s) return i.pathname + i.search + i.hash;
  }
  return e;
}
function Wr(e, t, n, r) {
  let i = e.createURL(ry(t)).toString(),
    s = { signal: n };
  if (r && Ot(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (s.method = o.toUpperCase()),
      a === "application/json"
        ? ((s.headers = new Headers({ "Content-Type": a })),
          (s.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (s.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (s.body = mc(r.formData))
        : (s.body = r.formData);
  }
  return new Request(i, s);
}
function mc(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Hh(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function H_(e, t, n, r, i, s) {
  let o = {},
    a = null,
    l,
    u = !1,
    f = {},
    d = r && gt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((h, v) => {
      let y = t[v].route.id;
      if (
        (K(!Er(h), "Cannot handle redirect results in processLoaderData"),
        gt(h))
      ) {
        let x = h.error;
        d !== void 0 && ((x = d), (d = void 0)), (a = a || {});
        {
          let P = ii(e, y);
          a[P.route.id] == null && (a[P.route.id] = x);
        }
        (o[y] = void 0),
          u || ((u = !0), (l = rl(h.error) ? h.error.status : 500)),
          h.headers && (f[y] = h.headers);
      } else
        Sr(h)
          ? (i.set(y, h.deferredData),
            (o[y] = h.deferredData.data),
            h.statusCode != null &&
              h.statusCode !== 200 &&
              !u &&
              (l = h.statusCode),
            h.headers && (f[y] = h.headers))
          : ((o[y] = h.data),
            h.statusCode && h.statusCode !== 200 && !u && (l = h.statusCode),
            h.headers && (f[y] = h.headers));
    }),
    d !== void 0 && r && ((a = { [r[0]]: d }), (o[r[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: l || 200, loaderHeaders: f }
  );
}
function Gh(e, t, n, r, i, s, o, a) {
  let { loaderData: l, errors: u } = H_(t, n, r, i, a);
  for (let f = 0; f < s.length; f++) {
    let { key: d, match: h, controller: v } = s[f];
    K(
      o !== void 0 && o[f] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = o[f];
    if (!(v && v.signal.aborted))
      if (gt(y)) {
        let x = ii(e.matches, h == null ? void 0 : h.route.id);
        (u && u[x.route.id]) || (u = ve({}, u, { [x.route.id]: y.error })),
          e.fetchers.delete(d);
      } else if (Er(y)) K(!1, "Unhandled fetcher revalidation redirect");
      else if (Sr(y)) K(!1, "Unhandled fetcher deferred data");
      else {
        let x = Dn(y.data);
        e.fetchers.set(d, x);
      }
  }
  return { loaderData: l, errors: u };
}
function Kh(e, t, n, r) {
  let i = ve({}, t);
  for (let s of n) {
    let o = s.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (i[o] = t[o])
        : e[o] !== void 0 && s.route.loader && (i[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function Yh(e) {
  return e
    ? gt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function ii(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Xh(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function nt(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: s,
      message: o,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        s === "route-discovery"
          ? (l =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnMiss()` ' +
              (`function threw the following error:
` +
                o))
          : i && n && r
          ? (l =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : s === "defer-action"
          ? (l = "defer() is not supported in actions")
          : s === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        i && n && r
          ? (l =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Ld(e || 500, a, new Error(l), !0)
  );
}
function Qh(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Er(n)) return { result: n, idx: t };
  }
}
function ry(e) {
  let t = typeof e == "string" ? ur(e) : e;
  return er(ve({}, t, { hash: "" }));
}
function G_(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function K_(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function Y_(e) {
  return iy(e.result) && D_.has(e.result.status);
}
function Sr(e) {
  return e.type === de.deferred;
}
function gt(e) {
  return e.type === de.error;
}
function Er(e) {
  return (e && e.type) === de.redirect;
}
function X_(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function iy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Q_(e) {
  return R_.has(e.toLowerCase());
}
function Ot(e) {
  return N_.has(e.toLowerCase());
}
async function Jh(e, t, n, r, i, s) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      l = t[o];
    if (!l) continue;
    let u = e.find((d) => d.route.id === l.route.id),
      f = u != null && !ty(u, l) && (s && s[l.route.id]) !== void 0;
    if (Sr(a) && (i || f)) {
      let d = r[o];
      K(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await sy(a, d, i).then((h) => {
          h && (n[o] = h || n[o]);
        });
    }
  }
}
async function sy(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: de.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: de.error, error: i };
      }
    return { type: de.data, data: e.deferredData.data };
  }
}
function Md(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function es(e, t) {
  let n = typeof t == "string" ? ur(t).search : t.search;
  if (e[e.length - 1].route.index && Md(n || "")) return e[e.length - 1];
  let r = Zv(e);
  return r[r.length - 1];
}
function Zh(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: s,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Ql(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function J_(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Hi(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Z_(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Dn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function q_(e, t) {
  try {
    let n = e.sessionStorage.getItem(ey);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, s] of Object.entries(r || {}))
        s && Array.isArray(s) && t.set(i, new Set(s || []));
    }
  } catch {}
}
function eS(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(ey, JSON.stringify(n));
    } catch (r) {
      Ti(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Na() {
  return (
    (Na = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Na.apply(this, arguments)
  );
}
const Js = C.createContext(null),
  bd = C.createContext(null),
  tn = C.createContext(null),
  Od = C.createContext(null),
  En = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  oy = C.createContext(null);
function tS(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Zs() || K(!1);
  let { basename: r, navigator: i } = C.useContext(tn),
    { hash: s, pathname: o, search: a } = qs(e, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : Zt([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function Zs() {
  return C.useContext(Od) != null;
}
function Di() {
  return Zs() || K(!1), C.useContext(Od).location;
}
function ay(e) {
  C.useContext(tn).static || C.useLayoutEffect(e);
}
function nS() {
  let { isDataRoute: e } = C.useContext(En);
  return e ? gS() : rS();
}
function rS() {
  Zs() || K(!1);
  let e = C.useContext(Js),
    { basename: t, future: n, navigator: r } = C.useContext(tn),
    { matches: i } = C.useContext(En),
    { pathname: s } = Di(),
    o = JSON.stringify(Dd(i, n.v7_relativeSplatPath)),
    a = C.useRef(!1);
  return (
    ay(() => {
      a.current = !0;
    }),
    C.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = Ad(u, JSON.parse(o), s, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Zt([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, o, s, e]
    )
  );
}
const iS = C.createContext(null);
function sS(e) {
  let t = C.useContext(En).outlet;
  return t && C.createElement(iS.Provider, { value: e }, t);
}
function qs(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = C.useContext(tn),
    { matches: i } = C.useContext(En),
    { pathname: s } = Di(),
    o = JSON.stringify(Dd(i, r.v7_relativeSplatPath));
  return C.useMemo(() => Ad(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function oS(e, t, n, r) {
  Zs() || K(!1);
  let { navigator: i } = C.useContext(tn),
    { matches: s } = C.useContext(En),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Di(),
    f;
  f = u;
  let d = f.pathname || "/",
    h = d;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    h = "/" + d.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let v = yr(e, { pathname: h });
  return dS(
    v &&
      v.map((x) =>
        Object.assign({}, x, {
          params: Object.assign({}, a, x.params),
          pathname: Zt([
            l,
            i.encodeLocation
              ? i.encodeLocation(x.pathname).pathname
              : x.pathname,
          ]),
          pathnameBase:
            x.pathnameBase === "/"
              ? l
              : Zt([
                  l,
                  i.encodeLocation
                    ? i.encodeLocation(x.pathnameBase).pathname
                    : x.pathnameBase,
                ]),
        })
      ),
    s,
    n,
    r
  );
}
function aS() {
  let e = mS(),
    t = rl(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    null
  );
}
const lS = C.createElement(aS, null);
class uS extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          En.Provider,
          { value: this.props.routeContext },
          C.createElement(oy.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function cS(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(Js);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(En.Provider, { value: t }, r)
  );
}
function dS(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let f = o.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    f >= 0 || K(!1), (o = o.slice(0, Math.min(o.length, f + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < o.length; f++) {
      let d = o[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
        d.route.id)
      ) {
        let { loaderData: h, errors: v } = n,
          y =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!v || v[d.route.id] === void 0);
        if (d.route.lazy || y) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((f, d, h) => {
    let v,
      y = !1,
      x = null,
      P = null;
    n &&
      ((v = a && d.route.id ? a[d.route.id] : void 0),
      (x = d.route.errorElement || lS),
      l &&
        (u < 0 && h === 0
          ? ((y = !0), (P = null))
          : u === h &&
            ((y = !0), (P = d.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, h + 1)),
      p = () => {
        let g;
        return (
          v
            ? (g = x)
            : y
            ? (g = P)
            : d.route.Component
            ? (g = C.createElement(d.route.Component, null))
            : d.route.element
            ? (g = d.route.element)
            : (g = f),
          C.createElement(cS, {
            match: d,
            routeContext: { outlet: f, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? C.createElement(uS, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: v,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var ly = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(ly || {}),
  tr = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(tr || {});
function fS(e) {
  let t = C.useContext(Js);
  return t || K(!1), t;
}
function Fd(e) {
  let t = C.useContext(bd);
  return t || K(!1), t;
}
function hS(e) {
  let t = C.useContext(En);
  return t || K(!1), t;
}
function il(e) {
  let t = hS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || K(!1), n.route.id;
}
function pS() {
  return il(tr.UseRouteId);
}
function uy() {
  let e = Fd(tr.UseLoaderData),
    t = il(tr.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
    );
    return;
  }
  return e.loaderData[t];
}
function cy(e) {
  return Fd(tr.UseRouteLoaderData).loaderData[e];
}
function mS() {
  var e;
  let t = C.useContext(oy),
    n = Fd(tr.UseRouteError),
    r = il(tr.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function gS() {
  let { router: e } = fS(ly.UseNavigateStable),
    t = il(tr.UseNavigateStable),
    n = C.useRef(!1);
  return (
    ay(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Na({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function vS(e) {
  return sS(e.context);
}
function yS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = De.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  Zs() && K(!1);
  let l = t.replace(/^\/*/, "/"),
    u = C.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: Na({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o]
    );
  typeof r == "string" && (r = ur(r));
  let {
      pathname: f = "/",
      search: d = "",
      hash: h = "",
      state: v = null,
      key: y = "default",
    } = r,
    x = C.useMemo(() => {
      let P = zt(f, l);
      return P == null
        ? null
        : {
            location: { pathname: P, search: d, hash: h, state: v, key: y },
            navigationType: i,
          };
    }, [l, f, d, h, v, y, i]);
  return x == null
    ? null
    : C.createElement(
        tn.Provider,
        { value: u },
        C.createElement(Od.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
function xS(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: C.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nr.apply(this, arguments)
  );
}
function Vd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
const Jo = "get",
  Jl = "application/x-www-form-urlencoded";
function sl(e) {
  return e != null && typeof e.tagName == "string";
}
function wS(e) {
  return sl(e) && e.tagName.toLowerCase() === "button";
}
function _S(e) {
  return sl(e) && e.tagName.toLowerCase() === "form";
}
function SS(e) {
  return sl(e) && e.tagName.toLowerCase() === "input";
}
function ES(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function PS(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ES(e);
}
let Do = null;
function TS() {
  if (Do === null)
    try {
      new FormData(document.createElement("form"), 0), (Do = !1);
    } catch {
      Do = !0;
    }
  return Do;
}
const CS = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Zl(e) {
  return e != null && !CS.has(e) ? null : e;
}
function kS(e, t) {
  let n, r, i, s, o;
  if (_S(e)) {
    let a = e.getAttribute("action");
    (r = a ? zt(a, t) : null),
      (n = e.getAttribute("method") || Jo),
      (i = Zl(e.getAttribute("enctype")) || Jl),
      (s = new FormData(e));
  } else if (wS(e) || (SS(e) && (e.type === "submit" || e.type === "image"))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || a.getAttribute("action");
    if (
      ((r = l ? zt(l, t) : null),
      (n = e.getAttribute("formmethod") || a.getAttribute("method") || Jo),
      (i =
        Zl(e.getAttribute("formenctype")) ||
        Zl(a.getAttribute("enctype")) ||
        Jl),
      (s = new FormData(a, e)),
      !TS())
    ) {
      let { name: u, type: f, value: d } = e;
      if (f === "image") {
        let h = u ? u + "." : "";
        s.append(h + "x", "0"), s.append(h + "y", "0");
      } else u && s.append(u, d);
    }
  } else {
    if (sl(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = Jo), (r = null), (i = Jl), (o = e);
  }
  return (
    s && i === "text/plain" && ((o = s), (s = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: s, body: o }
  );
}
const NS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  jS = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  RS = [
    "fetcherKey",
    "navigate",
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "relative",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  DS = "6";
try {
  window.__reactRouterVersion = DS;
} catch {}
function AS(e, t) {
  return M_({
    basename: void 0,
    future: nr({}, void 0, { v7_prependBasename: !0 }),
    history: s_({ window: void 0 }),
    hydrationData: LS(),
    routes: e,
    mapRouteProperties: xS,
    unstable_dataStrategy: void 0,
    unstable_patchRoutesOnMiss: void 0,
    window: void 0,
  }).initialize();
}
function LS() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = nr({}, t, { errors: IS(t.errors) })), t;
}
function IS(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Ld(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let s = window[i.__subType];
        if (typeof s == "function")
          try {
            let o = new s(i.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let s = new Error(i.message);
        (s.stack = ""), (n[r] = s);
      }
    } else n[r] = i;
  return n;
}
const dy = C.createContext({ isTransitioning: !1 }),
  MS = C.createContext(new Map()),
  bS = "startTransition",
  qh = G1[bS],
  OS = "flushSync",
  ep = i_[OS];
function FS(e) {
  qh ? qh(e) : e();
}
function Gi(e) {
  ep ? ep(e) : e();
}
class VS {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function BS(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, s] = C.useState(n.state),
    [o, a] = C.useState(),
    [l, u] = C.useState({ isTransitioning: !1 }),
    [f, d] = C.useState(),
    [h, v] = C.useState(),
    [y, x] = C.useState(),
    P = C.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    p = C.useCallback(
      (N) => {
        m ? FS(N) : N();
      },
      [m]
    ),
    g = C.useCallback(
      (N, A) => {
        let {
          deletedFetchers: L,
          unstable_flushSync: H,
          unstable_viewTransitionOpts: ae,
        } = A;
        L.forEach((ee) => P.current.delete(ee)),
          N.fetchers.forEach((ee, ce) => {
            ee.data !== void 0 && P.current.set(ce, ee.data);
          });
        let je =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!ae || je) {
          H ? Gi(() => s(N)) : p(() => s(N));
          return;
        }
        if (H) {
          Gi(() => {
            h && (f && f.resolve(), h.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: ae.currentLocation,
                nextLocation: ae.nextLocation,
              });
          });
          let ee = n.window.document.startViewTransition(() => {
            Gi(() => s(N));
          });
          ee.finished.finally(() => {
            Gi(() => {
              d(void 0), v(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            Gi(() => v(ee));
          return;
        }
        h
          ? (f && f.resolve(),
            h.skipTransition(),
            x({
              state: N,
              currentLocation: ae.currentLocation,
              nextLocation: ae.nextLocation,
            }))
          : (a(N),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: ae.currentLocation,
              nextLocation: ae.nextLocation,
            }));
      },
      [n.window, h, f, P, p]
    );
  C.useLayoutEffect(() => n.subscribe(g), [n, g]),
    C.useEffect(() => {
      l.isTransitioning && !l.flushSync && d(new VS());
    }, [l]),
    C.useEffect(() => {
      if (f && o && n.window) {
        let N = o,
          A = f.promise,
          L = n.window.document.startViewTransition(async () => {
            p(() => s(N)), await A;
          });
        L.finished.finally(() => {
          d(void 0), v(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          v(L);
      }
    }, [p, o, f, n.window]),
    C.useEffect(() => {
      f && o && i.location.key === o.location.key && f.resolve();
    }, [f, h, i.location, o]),
    C.useEffect(() => {
      !l.isTransitioning &&
        y &&
        (a(y.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        x(void 0));
    }, [l.isTransitioning, y]),
    C.useEffect(() => {}, []);
  let E = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (N) => n.navigate(N),
        push: (N, A, L) =>
          n.navigate(N, {
            state: A,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset,
          }),
        replace: (N, A, L) =>
          n.navigate(N, {
            replace: !0,
            state: A,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset,
          }),
      }),
      [n]
    ),
    k = n.basename || "/",
    w = C.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: k }),
      [n, E, k]
    ),
    D = C.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      Js.Provider,
      { value: w },
      C.createElement(
        bd.Provider,
        { value: i },
        C.createElement(
          MS.Provider,
          { value: P.current },
          C.createElement(
            dy.Provider,
            { value: l },
            C.createElement(
              yS,
              {
                basename: k,
                location: i.location,
                navigationType: i.historyAction,
                navigator: E,
                future: D,
              },
              i.initialized || n.future.v7_partialHydration
                ? C.createElement(US, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const US = C.memo(zS);
function zS(e) {
  let { routes: t, future: n, state: r } = e;
  return oS(t, void 0, r, n);
}
const $S =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  WS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ne = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      h = Vd(t, NS),
      { basename: v } = C.useContext(tn),
      y,
      x = !1;
    if (typeof u == "string" && WS.test(u) && ((y = u), $S))
      try {
        let g = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          k = zt(E.pathname, v);
        E.origin === g.origin && k != null
          ? (u = k + E.search + E.hash)
          : (x = !0);
      } catch {}
    let P = tS(u, { relative: i }),
      m = HS(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: f,
        relative: i,
        unstable_viewTransition: d,
      });
    function p(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return C.createElement(
      "a",
      nr({}, h, { href: y || P, onClick: x || s ? r : p, ref: n, target: l })
    );
  }),
  mi = C.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: o = !1,
        style: a,
        to: l,
        unstable_viewTransition: u,
        children: f,
      } = t,
      d = Vd(t, jS),
      h = qs(l, { relative: d.relative }),
      v = Di(),
      y = C.useContext(bd),
      { navigator: x, basename: P } = C.useContext(tn),
      m = y != null && JS(h) && u === !0,
      p = x.encodeLocation ? x.encodeLocation(h).pathname : h.pathname,
      g = v.pathname,
      E =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    i ||
      ((g = g.toLowerCase()),
      (E = E ? E.toLowerCase() : null),
      (p = p.toLowerCase())),
      E && P && (E = zt(E, P) || E);
    const k = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let w = g === p || (!o && g.startsWith(p) && g.charAt(k) === "/"),
      D =
        E != null &&
        (E === p || (!o && E.startsWith(p) && E.charAt(p.length) === "/")),
      N = { isActive: w, isPending: D, isTransitioning: m },
      A = w ? r : void 0,
      L;
    typeof s == "function"
      ? (L = s(N))
      : (L = [
          s,
          w ? "active" : null,
          D ? "pending" : null,
          m ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let H = typeof a == "function" ? a(N) : a;
    return C.createElement(
      ne,
      nr({}, d, {
        "aria-current": A,
        className: L,
        ref: n,
        style: H,
        to: l,
        unstable_viewTransition: u,
      }),
      typeof f == "function" ? f(N) : f
    );
  }),
  ol = C.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: i,
        replace: s,
        state: o,
        method: a = Jo,
        action: l,
        onSubmit: u,
        relative: f,
        preventScrollReset: d,
        unstable_viewTransition: h,
      } = e,
      v = Vd(e, RS),
      y = XS(),
      x = QS(l, { relative: f }),
      P = a.toLowerCase() === "get" ? "get" : "post",
      m = (p) => {
        if ((u && u(p), p.defaultPrevented)) return;
        p.preventDefault();
        let g = p.nativeEvent.submitter,
          E = (g == null ? void 0 : g.getAttribute("formmethod")) || a;
        y(g || p.currentTarget, {
          fetcherKey: n,
          method: E,
          navigate: r,
          replace: s,
          state: o,
          relative: f,
          preventScrollReset: d,
          unstable_viewTransition: h,
        });
      };
    return C.createElement(
      "form",
      nr({ ref: t, method: P, action: x, onSubmit: i ? u : m }, v)
    );
  });
var ja;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ja || (ja = {}));
var tp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(tp || (tp = {}));
function fy(e) {
  let t = C.useContext(Js);
  return t || K(!1), t;
}
function HS(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = nS(),
    u = Di(),
    f = qs(e, { relative: o });
  return C.useCallback(
    (d) => {
      if (PS(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : er(u) === er(f);
        l(e, {
          replace: h,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, f, r, i, n, e, s, o, a]
  );
}
function GS() {
  if (typeof document > "u")
    throw new Error(
      "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
    );
}
let KS = 0,
  YS = () => "__" + String(++KS) + "__";
function XS() {
  let { router: e } = fy(ja.UseSubmit),
    { basename: t } = C.useContext(tn),
    n = pS();
  return C.useCallback(
    function (r, i) {
      i === void 0 && (i = {}), GS();
      let { action: s, method: o, encType: a, formData: l, body: u } = kS(r, t);
      if (i.navigate === !1) {
        let f = i.fetcherKey || YS();
        e.fetch(f, n, i.action || s, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: u,
          formMethod: i.method || o,
          formEncType: i.encType || a,
          unstable_flushSync: i.unstable_flushSync,
        });
      } else
        e.navigate(i.action || s, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: u,
          formMethod: i.method || o,
          formEncType: i.encType || a,
          replace: i.replace,
          state: i.state,
          fromRouteId: n,
          unstable_flushSync: i.unstable_flushSync,
          unstable_viewTransition: i.unstable_viewTransition,
        });
    },
    [e, t, n]
  );
}
function QS(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = C.useContext(tn),
    i = C.useContext(En);
  i || K(!1);
  let [s] = i.matches.slice(-1),
    o = nr({}, qs(e || ".", { relative: n })),
    a = Di();
  if (e == null) {
    o.search = a.search;
    let l = new URLSearchParams(o.search);
    l.has("index") &&
      l.get("index") === "" &&
      (l.delete("index"), (o.search = l.toString() ? "?" + l.toString() : ""));
  }
  return (
    (!e || e === ".") &&
      s.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (o.pathname = o.pathname === "/" ? r : Zt([r, o.pathname])),
    er(o)
  );
}
function JS(e, t) {
  t === void 0 && (t = {});
  let n = C.useContext(dy);
  n == null && K(!1);
  let { basename: r } = fy(ja.useViewTransitionState),
    i = qs(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let s = zt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = zt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ka(i.pathname, o) != null || ka(i.pathname, s) != null;
}
const ZS = "_logoImg_1uvkx_1",
  qS = "_mainAuth_1uvkx_6",
  eE = "_popup_1uvkx_14",
  tE = "_barPattern_1uvkx_18",
  nE = "_red_1uvkx_28",
  rE = "_indigo_1uvkx_31",
  iE = "_blue_1uvkx_34",
  sE = "_green_1uvkx_37",
  oE = "_orange_1uvkx_40",
  aE = "_loginForm_1uvkx_43",
  lE = "_formText_1uvkx_54",
  uE = "_inpFields_1uvkx_59",
  cE = "_formOption_1uvkx_81",
  dE = "_formCheckbox_1uvkx_99",
  fE = "_inpCheckbox_1uvkx_107",
  hE = "_formButton_1uvkx_112",
  pE = "_icon_1uvkx_124",
  mE = "_registerLink_1uvkx_1",
  gE = "_forgotLink_1uvkx_1",
  vE = "_formText3_1uvkx_138",
  Te = {
    logoImg: ZS,
    mainAuth: qS,
    popup: eE,
    barPattern: tE,
    red: nE,
    indigo: rE,
    blue: iE,
    green: sE,
    orange: oE,
    loginForm: aE,
    formText: lE,
    inpFields: uE,
    formOption: cE,
    formCheckbox: dE,
    inpCheckbox: fE,
    formButton: hE,
    icon: pE,
    registerLink: mE,
    forgotLink: gE,
    formText3: vE,
  };
var hy = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  np = dn.createContext && dn.createContext(hy),
  yE = ["attr", "size", "title"];
function xE(e, t) {
  if (e == null) return {};
  var n = wE(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function wE(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ra() {
  return (
    (Ra = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ra.apply(this, arguments)
  );
}
function rp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rp(Object(n), !0).forEach(function (r) {
          _E(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : rp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function _E(e, t, n) {
  return (
    (t = SE(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function SE(e) {
  var t = EE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function EE(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function py(e) {
  return (
    e &&
    e.map((t, n) =>
      dn.createElement(t.tag, Da({ key: n }, t.attr), py(t.child))
    )
  );
}
function at(e) {
  return (t) =>
    dn.createElement(PE, Ra({ attr: Da({}, e.attr) }, t), py(e.child));
}
function PE(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = xE(e, yE),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      dn.createElement(
        "svg",
        Ra(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: l,
            style: Da(Da({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && dn.createElement("title", null, s),
        e.children
      )
    );
  };
  return np !== void 0
    ? dn.createElement(np.Consumer, null, (n) => t(n))
    : t(hy);
}
function TE(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M376 192h-24v-46.7c0-52.7-42-96.5-94.7-97.3-53.4-.7-97.3 42.8-97.3 96v48h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8zM324 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48v48z",
        },
        child: [],
      },
    ],
  })(e);
}
function CE(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z",
        },
        child: [],
      },
    ],
  })(e);
}
const my = "/assets/oh_logo-tFKh2K_M.jpg",
  gy = C.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  al = C.createContext({}),
  Bd = C.createContext(null),
  Ud = typeof document < "u",
  kE = Ud ? C.useLayoutEffect : C.useEffect,
  vy = C.createContext({ strict: !1 }),
  ll = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  NE = "framerAppearId",
  yy = "data-" + ll(NE),
  jE = { skipAnimations: !1, useManualTiming: !1 };
function RE(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    s.has(u) && (l.schedule(u), e()), u(o);
  }
  const l = {
    schedule: (u, f = !1, d = !1) => {
      const v = d && r ? t : n;
      return f && s.add(u), v.has(u) || v.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const Ao = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  DE = 40;
function xy(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Ao.reduce((m, p) => ((m[p] = RE(s)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: f,
      render: d,
      postRender: h,
    } = o,
    v = () => {
      const m = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, DE), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        f.process(i),
        d.process(i),
        h.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(v));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(v);
    };
  return {
    schedule: Ao.reduce((m, p) => {
      const g = o[p];
      return (m[p] = (E, k = !1, w = !1) => (n || y(), g.schedule(E, k, w))), m;
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < Ao.length; p++) o[Ao[p]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const { schedule: zd, cancel: rA } = xy(queueMicrotask, !1);
function si(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const wy = C.createContext({});
let ip = !1;
function AE(e, t, n, r, i) {
  const { visualElement: s } = C.useContext(al),
    o = C.useContext(vy),
    a = C.useContext(Bd),
    l = C.useContext(gy).reducedMotion,
    u = C.useRef();
  (r = r || o.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const f = u.current,
    d = C.useContext(wy);
  f &&
    !f.projection &&
    i &&
    (f.type === "html" || f.type === "svg") &&
    IE(u.current, n, i, d),
    C.useInsertionEffect(() => {
      f && f.update(n, a);
    });
  const h = C.useRef(!!(n[yy] && !window.HandoffComplete));
  return (
    kE(() => {
      f &&
        (f.updateFeatures(),
        zd.render(f.render),
        h.current && f.animationState && f.animationState.animateChanges());
    }),
    C.useEffect(() => {
      f &&
        (!h.current && f.animationState && f.animationState.animateChanges(),
        h.current && ((h.current = !1), ip || ((ip = !0), queueMicrotask(LE))));
    }),
    f
  );
}
function LE() {
  window.HandoffComplete = !0;
}
function IE(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : _y(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && si(a)),
      visualElement: e,
      scheduleRender: () => e.scheduleRender(),
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function _y(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : _y(e.parent);
}
function ME(e, t, n) {
  return C.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : si(n) && (n.current = r));
    },
    [t]
  );
}
function Fs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Vs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const $d = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Wd = ["initial", ...$d];
function ul(e) {
  return Vs(e.animate) || Wd.some((t) => Fs(e[t]));
}
function Sy(e) {
  return !!(ul(e) || e.variants);
}
function bE(e, t) {
  if (ul(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Fs(n) ? n : void 0,
      animate: Fs(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function OE(e) {
  const { initial: t, animate: n } = bE(e, C.useContext(al));
  return C.useMemo(() => ({ initial: t, animate: n }), [sp(t), sp(n)]);
}
function sp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const op = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ci = {};
for (const e in op) Ci[e] = { isEnabled: (t) => op[e].some((n) => !!t[n]) };
function FE(e) {
  for (const t in e) Ci[t] = { ...Ci[t], ...e[t] };
}
const Ey = C.createContext({}),
  VE = Symbol.for("motionComponentSymbol"),
  Je = (e) => e;
let gc = Je;
function BE({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && FE(e);
  function s(a, l) {
    let u;
    const f = { ...C.useContext(gy), ...a, layoutId: UE(a) },
      { isStatic: d } = f,
      h = OE(a),
      v = r(a, d);
    if (!d && Ud) {
      zE();
      const y = $E(f);
      (u = y.MeasureLayout),
        (h.visualElement = AE(i, v, f, t, y.ProjectionNode));
    }
    return c.jsxs(al.Provider, {
      value: h,
      children: [
        u && h.visualElement
          ? c.jsx(u, { visualElement: h.visualElement, ...f })
          : null,
        n(i, a, ME(v, h.visualElement, l), v, d, h.visualElement),
      ],
    });
  }
  const o = C.forwardRef(s);
  return (o[VE] = i), o;
}
function UE({ layoutId: e }) {
  const t = C.useContext(Ey).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function zE(e, t) {
  C.useContext(vy).strict;
}
function $E(e) {
  const { drag: t, layout: n } = Ci;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function WE(e) {
  function t(r, i = {}) {
    return BE(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const HE = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Hd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(HE.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const Aa = {};
function GE(e) {
  Object.assign(Aa, e);
}
const eo = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  cr = new Set(eo);
function Py(e, { layout: t, layoutId: n }) {
  return (
    cr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Aa[e] || e === "opacity"))
  );
}
const Qe = (e) => !!(e && e.getVelocity),
  KE = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  YE = eo.length;
function XE(e, t, n) {
  let r = "";
  for (let i = 0; i < YE; i++) {
    const s = eo[i];
    if (e[s] !== void 0) {
      const o = KE[s] || s;
      r += `${o}(${e[s]}) `;
    }
  }
  return (r = r.trim()), n ? (r = n(e, t ? "" : r)) : t && (r = "none"), r;
}
const Ty = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Cy = Ty("--"),
  QE = Ty("var(--"),
  Gd = (e) => (QE(e) ? JE.test(e.split("/*")[0].trim()) : !1),
  JE =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ZE = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  rr = (e, t, n) => (n > t ? t : n < e ? e : n),
  Ai = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  fs = { ...Ai, transform: (e) => rr(0, 1, e) },
  Lo = { ...Ai, default: 1 },
  hs = (e) => Math.round(e * 1e5) / 1e5,
  Kd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  qE =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  eP =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function to(e) {
  return typeof e == "string";
}
function tP(e) {
  return e == null;
}
const no = (e) => ({
    test: (t) => to(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  An = no("deg"),
  qt = no("%"),
  U = no("px"),
  nP = no("vh"),
  rP = no("vw"),
  ap = {
    ...qt,
    parse: (e) => qt.parse(e) / 100,
    transform: (e) => qt.transform(e * 100),
  },
  lp = { ...Ai, transform: Math.round },
  ky = {
    borderWidth: U,
    borderTopWidth: U,
    borderRightWidth: U,
    borderBottomWidth: U,
    borderLeftWidth: U,
    borderRadius: U,
    radius: U,
    borderTopLeftRadius: U,
    borderTopRightRadius: U,
    borderBottomRightRadius: U,
    borderBottomLeftRadius: U,
    width: U,
    maxWidth: U,
    height: U,
    maxHeight: U,
    size: U,
    top: U,
    right: U,
    bottom: U,
    left: U,
    padding: U,
    paddingTop: U,
    paddingRight: U,
    paddingBottom: U,
    paddingLeft: U,
    margin: U,
    marginTop: U,
    marginRight: U,
    marginBottom: U,
    marginLeft: U,
    rotate: An,
    rotateX: An,
    rotateY: An,
    rotateZ: An,
    scale: Lo,
    scaleX: Lo,
    scaleY: Lo,
    scaleZ: Lo,
    skew: An,
    skewX: An,
    skewY: An,
    distance: U,
    translateX: U,
    translateY: U,
    translateZ: U,
    x: U,
    y: U,
    z: U,
    perspective: U,
    transformPerspective: U,
    opacity: fs,
    originX: ap,
    originY: ap,
    originZ: U,
    zIndex: lp,
    backgroundPositionX: U,
    backgroundPositionY: U,
    fillOpacity: fs,
    strokeOpacity: fs,
    numOctaves: lp,
  };
function Yd(e, t, n) {
  const { style: r, vars: i, transform: s, transformOrigin: o } = e;
  let a = !1,
    l = !1,
    u = !0;
  for (const f in t) {
    const d = t[f];
    if (Cy(f)) {
      i[f] = d;
      continue;
    }
    const h = ky[f],
      v = ZE(d, h);
    if (cr.has(f)) {
      if (((a = !0), (s[f] = v), !u)) continue;
      d !== (h.default || 0) && (u = !1);
    } else f.startsWith("origin") ? ((l = !0), (o[f] = v)) : (r[f] = v);
  }
  if (
    (t.transform ||
      (a || n
        ? (r.transform = XE(e.transform, u, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: h = 0 } = o;
    r.transformOrigin = `${f} ${d} ${h}`;
  }
}
const Xd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Ny(e, t, n) {
  for (const r in t) !Qe(t[r]) && !Py(r, n) && (e[r] = t[r]);
}
function iP({ transformTemplate: e }, t) {
  return C.useMemo(() => {
    const n = Xd();
    return Yd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function sP(e, t) {
  const n = e.style || {},
    r = {};
  return Ny(r, n, e), Object.assign(r, iP(e, t)), r;
}
function oP(e, t) {
  const n = {},
    r = sP(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const aP = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function La(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    aP.has(e)
  );
}
let jy = (e) => !La(e);
function lP(e) {
  e && (jy = (t) => (t.startsWith("on") ? !La(t) : e(t)));
}
try {
  lP(require("@emotion/is-prop-valid").default);
} catch {}
function uP(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((jy(i) ||
        (n === !0 && La(i)) ||
        (!t && !La(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function up(e, t, n) {
  return typeof e == "string" ? e : U.transform(t + n * e);
}
function cP(e, t, n) {
  const r = up(t, e.x, e.width),
    i = up(n, e.y, e.height);
  return `${r} ${i}`;
}
const dP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  fP = { offset: "strokeDashoffset", array: "strokeDasharray" };
function hP(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? dP : fP;
  e[s.offset] = U.transform(-r);
  const o = U.transform(t),
    a = U.transform(n);
  e[s.array] = `${o} ${a}`;
}
function Qd(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  f,
  d
) {
  if ((Yd(e, u, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: v, dimensions: y } = e;
  h.transform && (y && (v.transform = h.transform), delete h.transform),
    y &&
      (i !== void 0 || s !== void 0 || v.transform) &&
      (v.transformOrigin = cP(
        y,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && hP(h, o, a, l, !1);
}
const Ry = () => ({ ...Xd(), attrs: {} }),
  Jd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function pP(e, t, n, r) {
  const i = C.useMemo(() => {
    const s = Ry();
    return (
      Qd(s, t, Jd(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    Ny(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function mP(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (Hd(n) ? pP : oP)(r, s, o, n),
      u = uP(r, typeof n == "string", e),
      f = n !== C.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = r,
      h = C.useMemo(() => (Qe(d) ? d.get() : d), [d]);
    return C.createElement(n, { ...f, children: h });
  };
}
function Dy(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Ay = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Ly(e, t, n, r) {
  Dy(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Ay.has(i) ? i : ll(i), t.attrs[i]);
}
function Zd(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (Qe(i[o]) ||
      (t.style && Qe(t.style[o])) ||
      Py(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return (
    n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), s
  );
}
function Iy(e, t, n) {
  const r = Zd(e, t, n);
  for (const i in e)
    if (Qe(e[i]) || Qe(t[i])) {
      const s =
        eo.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function cp(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function qd(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = cp(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = cp(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function gP(e) {
  const t = C.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const vc = (e) => Array.isArray(e),
  vP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  yP = (e) => (vc(e) ? e[e.length - 1] || 0 : e);
function Zo(e) {
  const t = Qe(e) ? e.get() : e;
  return vP(t) ? t.toValue() : t;
}
const My = new Set(["opacity", "clipPath", "filter", "transform"]);
function by(e) {
  if (cr.has(e)) return "transform";
  if (My.has(e)) return ll(e);
}
function cl(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function dl(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function xP(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  i,
  s,
  o,
  a
) {
  const l = { latestValues: _P(i, s, o, a ? !1 : e, t), renderState: n() };
  return r && (l.mount = (u) => r(i, u, l)), l;
}
const Oy = (e) => (t, n) => {
  const r = C.useContext(al),
    i = C.useContext(Bd),
    s = () => xP(e, t, r, i, n);
  return n ? s() : gP(s);
};
function wP(e, t) {
  const n = by(t);
  n && cl(e, n);
}
function dp(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    const s = qd(e, r[i]);
    if (s) {
      const { transitionEnd: o, transition: a, ...l } = s;
      n(l, o);
    }
  }
}
function _P(e, t, n, r, i) {
  var s;
  const o = {},
    a = [],
    l =
      r &&
      ((s = e.style) === null || s === void 0 ? void 0 : s.willChange) ===
        void 0,
    u = i(e, {});
  for (const P in u) o[P] = Zo(u[P]);
  let { initial: f, animate: d } = e;
  const h = ul(e),
    v = Sy(e);
  t &&
    v &&
    !h &&
    e.inherit !== !1 &&
    (f === void 0 && (f = t.initial), d === void 0 && (d = t.animate));
  let y = n ? n.initial === !1 : !1;
  y = y || f === !1;
  const x = y ? d : f;
  return (
    x &&
      typeof x != "boolean" &&
      !Vs(x) &&
      dp(e, x, (P, m) => {
        for (const p in P) {
          let g = P[p];
          if (Array.isArray(g)) {
            const E = y ? g.length - 1 : 0;
            g = g[E];
          }
          g !== null && (o[p] = g);
        }
        for (const p in m) o[p] = m[p];
      }),
    l &&
      (d &&
        f !== !1 &&
        !Vs(d) &&
        dp(e, d, (P) => {
          for (const m in P) wP(a, m);
        }),
      a.length && (o.willChange = a.join(","))),
    o
  );
}
const {
    schedule: re,
    cancel: wn,
    state: $e,
    steps: ql,
  } = xy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Je, !0),
  SP = {
    useVisualState: Oy({
      scrapeMotionValuesFromProps: Iy,
      createRenderState: Ry,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        re.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          re.render(() => {
            Qd(n, r, Jd(t.tagName), e.transformTemplate), Ly(t, n);
          });
      },
    }),
  },
  EP = {
    useVisualState: Oy({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: Zd,
      createRenderState: Xd,
    }),
  };
function PP(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Hd(e) ? SP : EP),
    preloadedFeatures: n,
    useRender: mP(t),
    createVisualElement: r,
    Component: e,
  };
}
function cn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Fy = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function fl(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const TP = (e) => (t) => Fy(t) && e(t, fl(t));
function hn(e, t, n, r) {
  return cn(e, t, TP(n), r);
}
const CP = (e, t) => (n) => t(e(n)),
  pn = (...e) => e.reduce(CP);
function Vy(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const fp = Vy("dragHorizontal"),
  hp = Vy("dragVertical");
function By(e) {
  let t = !1;
  if (e === "y") t = hp();
  else if (e === "x") t = fp();
  else {
    const n = fp(),
      r = hp();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Uy() {
  const e = By(!0);
  return e ? (e(), !1) : !0;
}
class dr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function pp(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (s, o) => {
      if (s.pointerType === "touch" || Uy()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && re.postRender(() => l(s, o));
    };
  return hn(e.current, n, i, { passive: !e.getProps()[r] });
}
class kP extends dr {
  mount() {
    this.unmount = pn(pp(this.node, !0), pp(this.node, !1));
  }
  unmount() {}
}
class NP extends dr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = pn(
      cn(this.node.current, "focus", () => this.onFocus()),
      cn(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const zy = (e, t) => (t ? (e === t ? !0 : zy(e, t.parentElement)) : !1);
function eu(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, fl(n));
}
class jP extends dr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Je),
      (this.removeEndListeners = Je),
      (this.removeAccessibleListeners = Je),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = hn(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: f,
                  globalTapTarget: d,
                } = this.node.getProps(),
                h = !d && !zy(this.node.current, a.target) ? f : u;
              h && re.update(() => h(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = hn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = pn(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                eu("up", (l, u) => {
                  const { onTap: f } = this.node.getProps();
                  f && re.postRender(() => f(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = cn(this.node.current, "keyup", o)),
              eu("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = cn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && eu("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = cn(this.node.current, "blur", r);
        this.removeAccessibleListeners = pn(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && re.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Uy()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && re.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = hn(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = cn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const yc = new WeakMap(),
  tu = new WeakMap(),
  RP = (e) => {
    const t = yc.get(e.target);
    t && t(e);
  },
  DP = (e) => {
    e.forEach(RP);
  };
function AP({ root: e, ...t }) {
  const n = e || document;
  tu.has(n) || tu.set(n, {});
  const r = tu.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(DP, { root: e, ...t })), r[i];
}
function LP(e, t, n) {
  const r = AP(t);
  return (
    yc.set(e, n),
    r.observe(e),
    () => {
      yc.delete(e), r.unobserve(e);
    }
  );
}
const IP = { some: 0, all: 1 };
class MP extends dr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : IP[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: f, onViewportLeave: d } = this.node.getProps(),
          h = u ? f : d;
        h && h(l);
      };
    return LP(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(bP(t, n)) && this.startObserver();
  }
  unmount() {}
}
function bP({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const OP = {
  inView: { Feature: MP },
  tap: { Feature: jP },
  focus: { Feature: NP },
  hover: { Feature: kP },
};
function $y(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function hl(e, t, n) {
  const r = e.getProps();
  return qd(r, t, n !== void 0 ? n : r.custom, e);
}
const Xn = (e) => e * 1e3,
  mn = (e) => e / 1e3,
  FP = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  VP = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  BP = { type: "keyframes", duration: 0.8 },
  UP = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  zP = (e, { keyframes: t }) =>
    t.length > 2
      ? BP
      : cr.has(e)
      ? e.startsWith("scale")
        ? VP(t[1])
        : FP
      : UP;
function $P({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...f
}) {
  return !!Object.keys(f).length;
}
function ef(e, t) {
  return e[t] || e.default || e;
}
const WP = (e) => e !== null;
function pl(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(WP),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
let qo;
function HP() {
  qo = void 0;
}
const Qn = {
    now: () => (
      qo === void 0 &&
        Qn.set(
          $e.isProcessing || jE.useManualTiming
            ? $e.timestamp
            : performance.now()
        ),
      qo
    ),
    set: (e) => {
      (qo = e), queueMicrotask(HP);
    },
  },
  Wy = (e) => /^0[^.\s]+$/u.test(e);
function GP(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Wy(e)
    : !0;
}
const Hy = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  KP = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function YP(e) {
  const t = KP.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Gy(e, t, n = 1) {
  const [r, i] = YP(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Hy(o) ? parseFloat(o) : o;
  }
  return Gd(i) ? Gy(i, t, n + 1) : i;
}
const XP = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  mp = (e) => e === Ai || e === U,
  gp = (e, t) => parseFloat(e.split(", ")[t]),
  vp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return gp(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? gp(s[1], e) : 0;
      }
    },
  QP = new Set(["x", "y", "z"]),
  JP = eo.filter((e) => !QP.has(e));
function ZP(e) {
  const t = [];
  return (
    JP.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ki = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: vp(4, 13),
  y: vp(5, 14),
};
ki.translateX = ki.x;
ki.translateY = ki.y;
const Ky = (e) => (t) => t.test(e),
  qP = { test: (e) => e === "auto", parse: (e) => e },
  Yy = [Ai, U, qt, An, rP, nP, qP],
  yp = (e) => Yy.find(Ky(e)),
  Nr = new Set();
let xc = !1,
  wc = !1;
function Xy() {
  if (wc) {
    const e = Array.from(Nr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = ZP(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (wc = !1), (xc = !1), Nr.forEach((e) => e.complete()), Nr.clear();
}
function Qy() {
  Nr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (wc = !0);
  });
}
function eT() {
  Qy(), Xy();
}
class tf {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Nr.add(this),
          xc || ((xc = !0), re.read(Qy), re.resolveKeyframes(Xy)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Nr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Nr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const nf = (e, t) => (n) =>
    !!(
      (to(n) && eP.test(n) && n.startsWith(e)) ||
      (t && !tP(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Jy = (e, t, n) => (r) => {
    if (!to(r)) return r;
    const [i, s, o, a] = r.match(Kd);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  tT = (e) => rr(0, 255, e),
  nu = { ...Ai, transform: (e) => Math.round(tT(e)) },
  Pr = {
    test: nf("rgb", "red"),
    parse: Jy("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      nu.transform(e) +
      ", " +
      nu.transform(t) +
      ", " +
      nu.transform(n) +
      ", " +
      hs(fs.transform(r)) +
      ")",
  };
function nT(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const _c = { test: nf("#"), parse: nT, transform: Pr.transform },
  oi = {
    test: nf("hsl", "hue"),
    parse: Jy("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      qt.transform(hs(t)) +
      ", " +
      qt.transform(hs(n)) +
      ", " +
      hs(fs.transform(r)) +
      ")",
  },
  Ye = {
    test: (e) => Pr.test(e) || _c.test(e) || oi.test(e),
    parse: (e) =>
      Pr.test(e) ? Pr.parse(e) : oi.test(e) ? oi.parse(e) : _c.parse(e),
    transform: (e) =>
      to(e) ? e : e.hasOwnProperty("red") ? Pr.transform(e) : oi.transform(e),
  };
function rT(e) {
  var t, n;
  return (
    isNaN(e) &&
    to(e) &&
    (((t = e.match(Kd)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(qE)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Zy = "number",
  qy = "color",
  iT = "var",
  sT = "var(",
  xp = "${}",
  oT =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Bs(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      oT,
      (l) => (
        Ye.test(l)
          ? (r.color.push(s), i.push(qy), n.push(Ye.parse(l)))
          : l.startsWith(sT)
          ? (r.var.push(s), i.push(iT), n.push(l))
          : (r.number.push(s), i.push(Zy), n.push(parseFloat(l))),
        ++s,
        xp
      )
    )
    .split(xp);
  return { values: n, split: a, indexes: r, types: i };
}
function e0(e) {
  return Bs(e).values;
}
function t0(e) {
  const { split: t, types: n } = Bs(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === Zy
          ? (s += hs(i[o]))
          : a === qy
          ? (s += Ye.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const aT = (e) => (typeof e == "number" ? 0 : e);
function lT(e) {
  const t = e0(e);
  return t0(e)(t.map(aT));
}
const ir = {
    test: rT,
    parse: e0,
    createTransformer: t0,
    getAnimatableNone: lT,
  },
  uT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function cT(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Kd) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = uT.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const dT = /\b([a-z-]*)\(.*?\)/gu,
  Sc = {
    ...ir,
    getAnimatableNone: (e) => {
      const t = e.match(dT);
      return t ? t.map(cT).join(" ") : e;
    },
  },
  fT = {
    ...ky,
    color: Ye,
    backgroundColor: Ye,
    outlineColor: Ye,
    fill: Ye,
    stroke: Ye,
    borderColor: Ye,
    borderTopColor: Ye,
    borderRightColor: Ye,
    borderBottomColor: Ye,
    borderLeftColor: Ye,
    filter: Sc,
    WebkitFilter: Sc,
  },
  rf = (e) => fT[e];
function n0(e, t) {
  let n = rf(e);
  return (
    n !== Sc && (n = ir), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const hT = new Set(["auto", "none", "0"]);
function pT(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !hT.has(s) && Bs(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = n0(n, i);
}
class r0 extends tf {
  constructor(t, n, r, i) {
    super(t, n, r, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Gd(u))) {
        const f = Gy(u, n.current);
        f !== void 0 && (t[l] = f),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !XP.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = yp(i),
      a = yp(s);
    if (o !== a)
      if (mp(o) && mp(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) GP(t[i]) && r.push(i);
    r.length && pT(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ki[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = ki[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function i0(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const wp = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (ir.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function mT(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function gT(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = wp(i, t),
    a = wp(s, t);
  return !o || !a ? !1 : mT(e) || (n === "spring" && r);
}
class s0 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && eT(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !gT(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        l == null || l(pl(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const f = this.initPlayback(t, n);
    f !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...f }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function o0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const vT = 5;
function a0(e, t, n) {
  const r = Math.max(t - vT, 0);
  return o0(n - e(r), t - r);
}
const iu = 0.001,
  yT = 0.01,
  xT = 10,
  wT = 0.05,
  _T = 1;
function ST({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    s,
    o = 1 - t;
  (o = rr(wT, _T, o)),
    (e = rr(yT, xT, mn(e))),
    o < 1
      ? ((i = (u) => {
          const f = u * o,
            d = f * e,
            h = f - n,
            v = Ec(u, o),
            y = Math.exp(-d);
          return iu - (h / v) * y;
        }),
        (s = (u) => {
          const d = u * o * e,
            h = d * n + n,
            v = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            x = Ec(Math.pow(u, 2), o);
          return ((-i(u) + iu > 0 ? -1 : 1) * ((h - v) * y)) / x;
        }))
      : ((i = (u) => {
          const f = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -iu + f * d;
        }),
        (s = (u) => {
          const f = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return f * d;
        }));
  const a = 5 / e,
    l = PT(i, s, a);
  if (((e = Xn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const ET = 12;
function PT(e, t, n) {
  let r = n;
  for (let i = 1; i < ET; i++) r = r - e(r) / t(r);
  return r;
}
function Ec(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const TT = ["duration", "bounce"],
  CT = ["stiffness", "damping", "mass"];
function _p(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function kT(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!_p(e, CT) && _p(e, TT)) {
    const n = ST(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function l0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: f,
      velocity: d,
      isResolvedFromDuration: h,
    } = kT({ ...r, velocity: -mn(r.velocity || 0) }),
    v = d || 0,
    y = l / (2 * Math.sqrt(a * u)),
    x = s - i,
    P = mn(Math.sqrt(a / u)),
    m = Math.abs(x) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let p;
  if (y < 1) {
    const g = Ec(P, y);
    p = (E) => {
      const k = Math.exp(-y * P * E);
      return (
        s - k * (((v + y * P * x) / g) * Math.sin(g * E) + x * Math.cos(g * E))
      );
    };
  } else if (y === 1) p = (g) => s - Math.exp(-P * g) * (x + (v + P * x) * g);
  else {
    const g = P * Math.sqrt(y * y - 1);
    p = (E) => {
      const k = Math.exp(-y * P * E),
        w = Math.min(g * E, 300);
      return (
        s - (k * ((v + y * P * x) * Math.sinh(w) + g * x * Math.cosh(w))) / g
      );
    };
  }
  return {
    calculatedDuration: (h && f) || null,
    next: (g) => {
      const E = p(g);
      if (h) o.done = g >= f;
      else {
        let k = v;
        g !== 0 && (y < 1 ? (k = a0(p, g, E)) : (k = 0));
        const w = Math.abs(k) <= n,
          D = Math.abs(s - E) <= t;
        o.done = w && D;
      }
      return (o.value = o.done ? s : E), o;
    },
  };
}
function Sp({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: f,
}) {
  const d = e[0],
    h = { done: !1, value: d },
    v = (N) => (a !== void 0 && N < a) || (l !== void 0 && N > l),
    y = (N) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - N) < Math.abs(l - N)
        ? a
        : l;
  let x = n * t;
  const P = d + x,
    m = o === void 0 ? P : o(P);
  m !== P && (x = m - d);
  const p = (N) => -x * Math.exp(-N / r),
    g = (N) => m + p(N),
    E = (N) => {
      const A = p(N),
        L = g(N);
      (h.done = Math.abs(A) <= u), (h.value = h.done ? m : L);
    };
  let k, w;
  const D = (N) => {
    v(h.value) &&
      ((k = N),
      (w = l0({
        keyframes: [h.value, y(h.value)],
        velocity: a0(g, N, h.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: f,
      })));
  };
  return (
    D(0),
    {
      calculatedDuration: null,
      next: (N) => {
        let A = !1;
        return (
          !w && k === void 0 && ((A = !0), E(N), D(N)),
          k !== void 0 && N >= k ? w.next(N - k) : (!A && E(N), h)
        );
      },
    }
  );
}
const u0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  NT = 1e-7,
  jT = 12;
function RT(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = u0(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > NT && ++a < jT);
  return o;
}
function ro(e, t, n, r) {
  if (e === t && n === r) return Je;
  const i = (s) => RT(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : u0(i(s), t, r));
}
const DT = ro(0.42, 0, 1, 1),
  AT = ro(0, 0, 0.58, 1),
  c0 = ro(0.42, 0, 0.58, 1),
  LT = (e) => Array.isArray(e) && typeof e[0] != "number",
  d0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  f0 = (e) => (t) => 1 - e(1 - t),
  sf = (e) => 1 - Math.sin(Math.acos(e)),
  h0 = f0(sf),
  IT = d0(sf),
  p0 = ro(0.33, 1.53, 0.69, 0.99),
  of = f0(p0),
  MT = d0(of),
  bT = (e) =>
    (e *= 2) < 1 ? 0.5 * of(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Ep = {
    linear: Je,
    easeIn: DT,
    easeInOut: c0,
    easeOut: AT,
    circIn: sf,
    circInOut: IT,
    circOut: h0,
    backIn: of,
    backInOut: MT,
    backOut: p0,
    anticipate: bT,
  },
  Pp = (e) => {
    if (Array.isArray(e)) {
      gc(e.length === 4);
      const [t, n, r, i] = e;
      return ro(t, n, r, i);
    } else if (typeof e == "string") return gc(Ep[e] !== void 0), Ep[e];
    return e;
  },
  Us = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  _e = (e, t, n) => e + (t - e) * n;
function su(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function OT({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = su(l, a, e + 1 / 3)), (s = su(l, a, e)), (o = su(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ia(e, t) {
  return (n) => (n > 0 ? t : e);
}
const ou = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  FT = [_c, Pr, oi],
  VT = (e) => FT.find((t) => t.test(e));
function Tp(e) {
  const t = VT(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === oi && (n = OT(n)), n;
}
const Cp = (e, t) => {
    const n = Tp(e),
      r = Tp(t);
    if (!n || !r) return Ia(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = ou(n.red, r.red, s)),
      (i.green = ou(n.green, r.green, s)),
      (i.blue = ou(n.blue, r.blue, s)),
      (i.alpha = _e(n.alpha, r.alpha, s)),
      Pr.transform(i)
    );
  },
  Pc = new Set(["none", "hidden"]);
function BT(e, t) {
  return Pc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function UT(e, t) {
  return (n) => _e(e, t, n);
}
function af(e) {
  return typeof e == "number"
    ? UT
    : typeof e == "string"
    ? Gd(e)
      ? Ia
      : Ye.test(e)
      ? Cp
      : WT
    : Array.isArray(e)
    ? m0
    : typeof e == "object"
    ? Ye.test(e)
      ? Cp
      : zT
    : Ia;
}
function m0(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => af(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function zT(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = af(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function $T(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = l), i[o]++;
  }
  return r;
}
const WT = (e, t) => {
  const n = ir.createTransformer(t),
    r = Bs(e),
    i = Bs(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Pc.has(e) && !i.values.length) || (Pc.has(t) && !r.values.length)
      ? BT(e, t)
      : pn(m0($T(r, i), i.values), n)
    : Ia(e, t);
};
function g0(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? _e(e, t, n)
    : af(e)(e, t);
}
function HT(e, t, n) {
  const r = [],
    i = n || g0,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Je : t;
      a = pn(l, a);
    }
    r.push(a);
  }
  return r;
}
function GT(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((gc(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = HT(t, r, i),
    a = o.length,
    l = (u) => {
      let f = 0;
      if (a > 1) for (; f < e.length - 2 && !(u < e[f + 1]); f++);
      const d = Us(e[f], e[f + 1], u);
      return o[f](d);
    };
  return n ? (u) => l(rr(e[0], e[s - 1], u)) : l;
}
function KT(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Us(0, t, r);
    e.push(_e(n, 1, i));
  }
}
function YT(e) {
  const t = [0];
  return KT(t, e.length - 1), t;
}
function XT(e, t) {
  return e.map((n) => n * t);
}
function QT(e, t) {
  return e.map(() => t || c0).splice(0, e.length - 1);
}
function Ma({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = LT(r) ? r.map(Pp) : Pp(r),
    s = { done: !1, value: t[0] },
    o = XT(n && n.length === t.length ? n : YT(t), e),
    a = GT(o, t, { ease: Array.isArray(i) ? i : QT(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const kp = 2e4;
function JT(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < kp; ) (t += n), (r = e.next(t));
  return t >= kp ? 1 / 0 : t;
}
const ZT = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => re.update(t, !0),
      stop: () => wn(t),
      now: () => ($e.isProcessing ? $e.timestamp : Qn.now()),
    };
  },
  qT = { decay: Sp, inertia: Sp, tween: Ma, keyframes: Ma, spring: l0 },
  eC = (e) => e / 100;
class lf extends s0 {
  constructor({ KeyframeResolver: t = tf, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: r, motionValue: i, keyframes: s } = this.options,
      o = (a, l) => this.onKeyframesResolved(a, l);
    r && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(s, o, r, i))
      : (this.resolver = new t(s, o, r, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = qT[n] || Ma;
    let l, u;
    a !== Ma &&
      typeof t[0] != "number" &&
      ((l = pn(eC, g0(t[0], t[1]))), (t = [0, 100]));
    const f = a({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      f.calculatedDuration === null && (f.calculatedDuration = JT(f));
    const { calculatedDuration: d } = f,
      h = d + i,
      v = h * (r + 1) - i;
    return {
      generator: f,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: h,
      totalDuration: v,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: N } = this.options;
      return { done: !0, value: N[N.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: f,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: h,
      repeat: v,
      repeatType: y,
      repeatDelay: x,
      onUpdate: P,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - f / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > f;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = f);
    let g = this.currentTime,
      E = s;
    if (v) {
      const N = Math.min(this.currentTime, f) / d;
      let A = Math.floor(N),
        L = N % 1;
      !L && N >= 1 && (L = 1),
        L === 1 && A--,
        (A = Math.min(A, v + 1)),
        !!(A % 2) &&
          (y === "reverse"
            ? ((L = 1 - L), x && (L -= x / d))
            : y === "mirror" && (E = o)),
        (g = rr(0, 1, L) * d);
    }
    const k = p ? { done: !1, value: l[0] } : E.next(g);
    a && (k.value = a(k.value));
    let { done: w } = k;
    !p &&
      u !== null &&
      (w = this.speed >= 0 ? this.currentTime >= f : this.currentTime <= 0);
    const D =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && w));
    return (
      D && i !== void 0 && (k.value = pl(l, this.options, i)),
      P && P(k.value),
      D && this.finish(),
      k
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? mn(t.calculatedDuration) : 0;
  }
  get time() {
    return mn(this.currentTime);
  }
  set time(t) {
    (t = Xn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = mn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = ZT, onPlay: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const v0 = (e) => Array.isArray(e) && typeof e[0] == "number";
function y0(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in uf) ||
    v0(e) ||
    (Array.isArray(e) && e.every(y0))
  );
}
const ts = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  uf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ts([0, 0.65, 0.55, 1]),
    circOut: ts([0.55, 0, 1, 0.45]),
    backIn: ts([0.31, 0.01, 0.66, -0.59]),
    backOut: ts([0.33, 1.53, 0.69, 0.99]),
  };
function tC(e) {
  return x0(e) || uf.easeOut;
}
function x0(e) {
  if (e) return v0(e) ? ts(e) : Array.isArray(e) ? e.map(tC) : uf[e];
}
function nC(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const f = x0(a);
  return (
    Array.isArray(f) && (u.easing = f),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(f) ? "linear" : f,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const rC = i0(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ba = 10,
  iC = 2e4;
function sC(e) {
  return e.type === "spring" || !y0(e.ease);
}
function oC(e, t) {
  const n = new lf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < iC; ) (r = n.sample(s)), i.push(r.value), (s += ba);
  return { times: void 0, keyframes: i, duration: s - ba, ease: "linear" };
}
class Np extends s0 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: i } = this.options;
    (this.resolver = new r0(i, (s, o) => this.onKeyframesResolved(s, o), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (sC(this.options)) {
      const { onComplete: d, onUpdate: h, motionValue: v, ...y } = this.options,
        x = oC(t, y);
      (t = x.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = x.duration),
        (s = x.times),
        (o = x.ease),
        (a = "keyframes");
    }
    const f = nC(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (f.startTime = Qn.now()),
      this.pendingTimeline
        ? ((f.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(pl(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: s, type: a, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return mn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return mn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Xn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Je;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return Je;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const { motionValue: u, onUpdate: f, onComplete: d, ...h } = this.options,
        v = new lf({
          ...h,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        y = Xn(this.time);
      u.setWithVelocity(v.sample(y - ba).value, v.sample(y).value, ba);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    return (
      rC() &&
      r &&
      My.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
function aC(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      o = (i === null ? 0 : i.value) / 100;
    n !== o && e(o), (n = o);
  };
  return re.update(r, !0), () => wn(r);
}
const lC = i0(() => window.ScrollTimeline !== void 0);
class uC {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (lC() && r.attachTimeline) r.attachTimeline(t);
      else
        return (
          r.pause(),
          aC((i) => {
            r.time = r.duration * i;
          }, t)
        );
    });
    return () => {
      n.forEach((r, i) => {
        r && r(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const cf =
  (e, t, n, r = {}, i, s, o) =>
  (a) => {
    const l = ef(r, e) || {},
      u = l.delay || r.delay || 0;
    let { elapsed: f = 0 } = r;
    f = f - Xn(u);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...l,
      delay: -f,
      onUpdate: (v) => {
        t.set(v), l.onUpdate && l.onUpdate(v);
      },
      onComplete: () => {
        a(), l.onComplete && l.onComplete(), o && o();
      },
      onStop: o,
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    $P(l) || (d = { ...d, ...zP(e, d) }),
      d.duration && (d.duration = Xn(d.duration)),
      d.repeatDelay && (d.repeatDelay = Xn(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from);
    let h = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (h = !0)),
      h && !s && t.get() !== void 0)
    ) {
      const v = pl(d.keyframes, l);
      if (v !== void 0)
        return (
          re.update(() => {
            d.onUpdate(v), d.onComplete();
          }),
          new uC([])
        );
    }
    return !s && Np.supports(d) ? new Np(d) : new lf(d);
  };
class df {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return cl(this.subscriptions, t), () => dl(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const jp = 30,
  cC = (e) => !isNaN(parseFloat(e));
class w0 {
  constructor(t, n = {}) {
    (this.version = "11.3.6"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = Qn.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Qn.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = cC(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new df());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            re.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Qn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > jp
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, jp);
    return o0(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function zs(e, t) {
  return new w0(e, t);
}
function dC(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zs(n));
}
function fC(e, t) {
  const n = hl(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = yP(s[o]);
    dC(e, o, a);
  }
}
function _0(e) {
  return e.getProps()[yy];
}
class hC extends w0 {
  constructor() {
    super(...arguments), (this.output = []), (this.counts = new Map());
  }
  add(t) {
    const n = by(t);
    if (!n) return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let i = !1;
    return () => {
      if (i) return;
      i = !0;
      const s = this.counts.get(n) - 1;
      this.counts.set(n, s), s === 0 && (dl(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
function pC(e) {
  return !!(Qe(e) && e.add);
}
function Tc(e, t) {
  var n;
  if (!e.applyWillChange) return;
  let r = e.getValue("willChange");
  if (
    (!r &&
      !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
      ((r = new hC("auto")), e.addValue("willChange", r)),
    pC(r))
  )
    return r.add(t);
}
function mC({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function S0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const u = [],
    f = i && e.animationState && e.animationState.getState()[i];
  for (const d in l) {
    const h = e.getValue(
        d,
        (s = e.latestValues[d]) !== null && s !== void 0 ? s : null
      ),
      v = l[d];
    if (v === void 0 || (f && mC(f, d))) continue;
    const y = { delay: n, elapsed: 0, ...ef(o || {}, d) };
    let x = !1;
    if (window.HandoffAppearAnimations) {
      const m = _0(e);
      if (m) {
        const p = window.HandoffAppearAnimations(m, d, h, re);
        p !== null && ((y.elapsed = p), (x = !0));
      }
    }
    h.start(
      cf(
        d,
        h,
        v,
        e.shouldReduceMotion && cr.has(d) ? { type: !1 } : y,
        e,
        x,
        Tc(e, d)
      )
    );
    const P = h.animation;
    P && u.push(P);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        re.update(() => {
          a && fC(e, a);
        });
      }),
    u
  );
}
function Cc(e, t, n = {}) {
  var r;
  const i = hl(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(S0(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: f = 0,
              staggerChildren: d,
              staggerDirection: h,
            } = s;
            return gC(e, t, f + u, d, h, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, f] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => f());
  } else return Promise.all([o(), a(n.delay)]);
}
function gC(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(vC)
      .forEach((u, f) => {
        u.notify("AnimationStart", t),
          o.push(
            Cc(u, t, { ...s, delay: n + l(f) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function vC(e, t) {
  return e.sortNodePosition(t);
}
function yC(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Cc(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Cc(e, t, n);
  else {
    const i = typeof t == "function" ? hl(e, t, n.custom) : t;
    r = Promise.all(S0(e, i, n));
  }
  return r.then(() => {
    re.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const xC = [...$d].reverse(),
  wC = $d.length;
function _C(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => yC(e, n, r)));
}
function SC(e) {
  let t = _C(e),
    n = Rp(),
    r = !0;
  const i = (l) => (u, f) => {
    var d;
    const h = hl(
      e,
      f,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (h) {
      const { transition: v, transitionEnd: y, ...x } = h;
      u = { ...u, ...x, ...y };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const u = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      h = new Set();
    let v = {},
      y = 1 / 0;
    for (let P = 0; P < wC; P++) {
      const m = xC[P],
        p = n[m],
        g = u[m] !== void 0 ? u[m] : f[m],
        E = Fs(g),
        k = m === l ? p.isActive : null;
      k === !1 && (y = P);
      let w = g === f[m] && g !== u[m] && E;
      if (
        (w && r && e.manuallyAnimateOnMount && (w = !1),
        (p.protectedKeys = { ...v }),
        (!p.isActive && k === null) ||
          (!g && !p.prevProp) ||
          Vs(g) ||
          typeof g == "boolean")
      )
        continue;
      let N =
          EC(p.prevProp, g) ||
          (m === l && p.isActive && !w && E) ||
          (P > y && E),
        A = !1;
      const L = Array.isArray(g) ? g : [g];
      let H = L.reduce(i(m), {});
      k === !1 && (H = {});
      const { prevResolvedValues: ae = {} } = p,
        je = { ...ae, ...H },
        ee = (ce) => {
          (N = !0),
            h.has(ce) && ((A = !0), h.delete(ce)),
            (p.needsAnimating[ce] = !0);
          const be = e.getValue(ce);
          be && (be.liveStyle = !1);
        };
      for (const ce in je) {
        const be = H[ce],
          se = ae[ce];
        if (v.hasOwnProperty(ce)) continue;
        let M = !1;
        vc(be) && vc(se) ? (M = !$y(be, se)) : (M = be !== se),
          M
            ? be != null
              ? ee(ce)
              : h.add(ce)
            : be !== void 0 && h.has(ce)
            ? ee(ce)
            : (p.protectedKeys[ce] = !0);
      }
      (p.prevProp = g),
        (p.prevResolvedValues = H),
        p.isActive && (v = { ...v, ...H }),
        r && e.blockInitialAnimation && (N = !1),
        N &&
          (!w || A) &&
          d.push(...L.map((ce) => ({ animation: ce, options: { type: m } })));
    }
    if (h.size) {
      const P = {};
      h.forEach((m) => {
        const p = e.getBaseTarget(m),
          g = e.getValue(m);
        g && (g.liveStyle = !0), (P[m] = p ?? null);
      }),
        d.push({ animation: P });
    }
    let x = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((h) => {
        var v;
        return (v = h.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = o(l);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = Rp()), (r = !0);
    },
  };
}
function EC(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !$y(t, e) : !1;
}
function hr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Rp() {
  return {
    animate: hr(!0),
    whileInView: hr(),
    whileHover: hr(),
    whileTap: hr(),
    whileDrag: hr(),
    whileFocus: hr(),
    exit: hr(),
  };
}
class PC extends dr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = SC(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Vs(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let TC = 0;
class CC extends dr {
  constructor() {
    super(...arguments), (this.id = TC++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const kC = { animation: { Feature: PC }, exit: { Feature: CC } },
  Dp = (e, t) => Math.abs(e - t);
function NC(e, t) {
  const n = Dp(e.x, t.x),
    r = Dp(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class E0 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = lu(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          v = NC(d.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !v) return;
        const { point: y } = d,
          { timestamp: x } = $e;
        this.history.push({ ...y, timestamp: x });
        const { onStart: P, onMove: m } = this.handlers;
        h ||
          (P && P(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, h) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = au(h, this.transformPagePoint)),
          re.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, h) => {
        this.end();
        const { onEnd: v, onSessionEnd: y, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const P = lu(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : au(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(d, P), y && y(d, P);
      }),
      !Fy(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = fl(t),
      a = au(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = $e;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: f } = n;
    f && f(t, lu(a, this.history)),
      (this.removeListeners = pn(
        hn(this.contextWindow, "pointermove", this.handlePointerMove),
        hn(this.contextWindow, "pointerup", this.handlePointerUp),
        hn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), wn(this.updatePoint);
  }
}
function au(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ap(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function lu({ point: e }, t) {
  return {
    point: e,
    delta: Ap(e, P0(t)),
    offset: Ap(e, jC(t)),
    velocity: RC(t, 0.1),
  };
}
function jC(e) {
  return e[0];
}
function P0(e) {
  return e[e.length - 1];
}
function RC(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = P0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Xn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = mn(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const T0 = 1e-4,
  DC = 1 - T0,
  AC = 1 + T0,
  C0 = 0.01,
  LC = 0 - C0,
  IC = 0 + C0;
function wt(e) {
  return e.max - e.min;
}
function MC(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Lp(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = _e(t.min, t.max, e.origin)),
    (e.scale = wt(n) / wt(t)),
    (e.translate = _e(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= DC && e.scale <= AC) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= LC && e.translate <= IC) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function ps(e, t, n, r) {
  Lp(e.x, t.x, n.x, r ? r.originX : void 0),
    Lp(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ip(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + wt(t));
}
function bC(e, t, n) {
  Ip(e.x, t.x, n.x), Ip(e.y, t.y, n.y);
}
function Mp(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + wt(t));
}
function ms(e, t, n) {
  Mp(e.x, t.x, n.x), Mp(e.y, t.y, n.y);
}
function OC(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? _e(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? _e(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function bp(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function FC(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: bp(e.x, n, i), y: bp(e.y, t, r) };
}
function Op(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function VC(e, t) {
  return { x: Op(e.x, t.x), y: Op(e.y, t.y) };
}
function BC(e, t) {
  let n = 0.5;
  const r = wt(e),
    i = wt(t);
  return (
    i > r
      ? (n = Us(t.min, t.max - r, e.min))
      : r > i && (n = Us(e.min, e.max - i, t.min)),
    rr(0, 1, n)
  );
}
function UC(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const kc = 0.35;
function zC(e = kc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = kc),
    { x: Fp(e, "left", "right"), y: Fp(e, "top", "bottom") }
  );
}
function Fp(e, t, n) {
  return { min: Vp(e, t), max: Vp(e, n) };
}
function Vp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Bp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ai = () => ({ x: Bp(), y: Bp() }),
  Up = () => ({ min: 0, max: 0 }),
  ke = () => ({ x: Up(), y: Up() });
function Pt(e) {
  return [e("x"), e("y")];
}
function k0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function $C({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function WC(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function uu(e) {
  return e === void 0 || e === 1;
}
function Nc({ scale: e, scaleX: t, scaleY: n }) {
  return !uu(e) || !uu(t) || !uu(n);
}
function gr(e) {
  return (
    Nc(e) ||
    N0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function N0(e) {
  return zp(e.x) || zp(e.y);
}
function zp(e) {
  return e && e !== "0%";
}
function Oa(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function $p(e, t, n, r, i) {
  return i !== void 0 && (e = Oa(e, i, r)), Oa(e, n, r) + t;
}
function jc(e, t = 0, n = 1, r, i) {
  (e.min = $p(e.min, t, n, r, i)), (e.max = $p(e.max, t, n, r, i));
}
function j0(e, { x: t, y: n }) {
  jc(e.x, t.translate, t.scale, t.originPoint),
    jc(e.y, n.translate, n.scale, n.originPoint);
}
function HC(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        li(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), j0(e, o)),
      r && gr(s.latestValues) && li(e, s.latestValues));
  }
  (t.x = Wp(t.x)), (t.y = Wp(t.y));
}
function Wp(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Mn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Hp(e, t, n, r, i = 0.5) {
  const s = _e(e.min, e.max, i);
  jc(e, t, n, s, r);
}
function li(e, t) {
  Hp(e.x, t.x, t.scaleX, t.scale, t.originX),
    Hp(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function R0(e, t) {
  return k0(WC(e.getBoundingClientRect(), t));
}
function GC(e, t, n) {
  const r = R0(e, n),
    { scroll: i } = t;
  return i && (Mn(r.x, i.offset.x), Mn(r.y, i.offset.y)), r;
}
const D0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  KC = new WeakMap();
class YC {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ke()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (f) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(fl(f, "page").point);
      },
      s = (f, d) => {
        var h;
        const { drag: v, dragPropagation: y, onDragStart: x } = this.getProps();
        if (
          v &&
          !y &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = By(v)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Pt((m) => {
            let p = this.getAxisMotionValue(m).get() || 0;
            if (qt.test(p)) {
              const { projection: g } = this.visualElement;
              if (g && g.layout) {
                const E = g.layout.layoutBox[m];
                E && (p = wt(E) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[m] = p;
          }),
          x && re.postRender(() => x(f, d)),
          (h = this.removeWillChange) === null || h === void 0 || h.call(this),
          (this.removeWillChange = Tc(this.visualElement, "transform"));
        const { animationState: P } = this.visualElement;
        P && P.setActive("whileDrag", !0);
      },
      o = (f, d) => {
        const {
          dragPropagation: h,
          dragDirectionLock: v,
          onDirectionLock: y,
          onDrag: x,
        } = this.getProps();
        if (!h && !this.openGlobalLock) return;
        const { offset: P } = d;
        if (v && this.currentDirection === null) {
          (this.currentDirection = XC(P)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, P),
          this.updateAxis("y", d.point, P),
          this.visualElement.render(),
          x && x(f, d);
      },
      a = (f, d) => this.stop(f, d),
      l = () =>
        Pt((f) => {
          var d;
          return (
            this.getAnimationState(f) === "paused" &&
            ((d = this.getAxisMotionValue(f).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new E0(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: D0(this.visualElement),
      }
    );
  }
  stop(t, n) {
    var r;
    (r = this.removeWillChange) === null || r === void 0 || r.call(this);
    const i = this.isDragging;
    if ((this.cancel(), !i)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && re.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Io(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = OC(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && si(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = FC(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = zC(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Pt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = UC(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !si(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = GC(r, i.root, this.visualElement.getTransformPagePoint());
    let o = VC(i.layout.layoutBox, s);
    if (n) {
      const a = n($C(o));
      (this.hasMutatedConstraints = !!a), a && (o = k0(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Pt((f) => {
        if (!Io(f, n, this.currentDirection)) return;
        let d = (l && l[f]) || {};
        o && (d = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          v = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[f] : 0,
            bounceStiffness: h,
            bounceDamping: v,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(f, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(
      cf(t, r, 0, n, this.visualElement, !1, Tc(this.visualElement, t))
    );
  }
  stopAnimation() {
    Pt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Pt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Pt((n) => {
      const { drag: r } = this.getProps();
      if (!Io(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - _e(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!si(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Pt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = BC({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Pt((o) => {
        if (!Io(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(_e(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    KC.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = hn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: f = !0 } = this.getProps();
        u && f && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        si(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      re.read(r);
    const o = cn(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Pt((f) => {
              const d = this.getAxisMotionValue(f);
              d &&
                ((this.originPoint[f] += l[f].translate),
                d.set(d.get() + l[f].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = kc,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Io(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function XC(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class QC extends dr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Je),
      (this.removeListeners = Je),
      (this.controls = new YC(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Je);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Gp = (e) => (t, n) => {
  e && re.postRender(() => e(t, n));
};
class JC extends dr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Je);
  }
  onPointerDown(t) {
    this.session = new E0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: D0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Gp(t),
      onStart: Gp(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && re.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = hn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function ZC() {
  const e = C.useContext(Bd);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = C.useId();
  return C.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const ea = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Kp(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ki = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (U.test(e)) e = parseFloat(e);
        else return e;
      const n = Kp(e, t.target.x),
        r = Kp(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  qC = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = ir.parse(e);
      if (i.length > 5) return r;
      const s = ir.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = _e(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class e2 extends C.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    GE(t2),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ea.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              re.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      zd.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function A0(e) {
  const [t, n] = ZC(),
    r = C.useContext(Ey);
  return c.jsx(e2, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: C.useContext(wy),
    isPresent: t,
    safeToRemove: n,
  });
}
const t2 = {
    borderRadius: {
      ...Ki,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Ki,
    borderTopRightRadius: Ki,
    borderBottomLeftRadius: Ki,
    borderBottomRightRadius: Ki,
    boxShadow: qC,
  },
  L0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  n2 = L0.length,
  Yp = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Xp = (e) => typeof e == "number" || U.test(e);
function r2(e, t, n, r, i, s) {
  i
    ? ((e.opacity = _e(0, n.opacity !== void 0 ? n.opacity : 1, i2(r))),
      (e.opacityExit = _e(t.opacity !== void 0 ? t.opacity : 1, 0, s2(r))))
    : s &&
      (e.opacity = _e(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < n2; o++) {
    const a = `border${L0[o]}Radius`;
    let l = Qp(t, a),
      u = Qp(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Xp(l) === Xp(u)
        ? ((e[a] = Math.max(_e(Yp(l), Yp(u), r), 0)),
          (qt.test(u) || qt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = _e(t.rotate || 0, n.rotate || 0, r));
}
function Qp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const i2 = I0(0, 0.5, h0),
  s2 = I0(0.5, 0.95, Je);
function I0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Us(e, t, r)));
}
function Jp(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Et(e, t) {
  Jp(e.x, t.x), Jp(e.y, t.y);
}
function Zp(e, t, n, r, i) {
  return (
    (e -= t), (e = Oa(e, 1 / n, r)), i !== void 0 && (e = Oa(e, 1 / i, r)), e
  );
}
function o2(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (qt.test(t) &&
      ((t = parseFloat(t)), (t = _e(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = _e(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = Zp(e.min, t, n, a, i)),
    (e.max = Zp(e.max, t, n, a, i));
}
function qp(e, t, [n, r, i], s, o) {
  o2(e, t[n], t[r], t[i], t.scale, s, o);
}
const a2 = ["x", "scaleX", "originX"],
  l2 = ["y", "scaleY", "originY"];
function em(e, t, n, r) {
  qp(e.x, t, a2, n ? n.x : void 0, r ? r.x : void 0),
    qp(e.y, t, l2, n ? n.y : void 0, r ? r.y : void 0);
}
function tm(e) {
  return e.translate === 0 && e.scale === 1;
}
function M0(e) {
  return tm(e.x) && tm(e.y);
}
function u2(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function b0(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function nm(e) {
  return wt(e.x) / wt(e.y);
}
class c2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    cl(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (dl(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function rm(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: f,
      rotateX: d,
      rotateY: h,
      skewX: v,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      f && (r += `rotate(${f}deg) `),
      d && (r += `rotateX(${d}deg) `),
      h && (r += `rotateY(${h}deg) `),
      v && (r += `skewX(${v}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const d2 = (e, t) => e.depth - t.depth;
class f2 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    cl(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    dl(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(d2),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function h2(e, t) {
  const n = Qn.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (wn(r), e(s - t));
    };
  return re.read(r, !0), () => wn(r);
}
function p2(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function m2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function g2(e, t, n) {
  const r = Qe(e) ? e : zs(e);
  return r.start(cf("", r, t, n)), r.animation;
}
const cu = ["", "X", "Y", "Z"],
  v2 = { visibility: "hidden" },
  im = 1e3;
let y2 = 0;
const vr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function du(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function O0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  const { visualElement: t } = e.options;
  return t
    ? _0(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
      ? O0(e.parent)
      : !1
    : !1;
}
function F0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = y2++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (vr.totalNodes =
              vr.resolvedTargetDeltas =
              vr.recalculatedProjection =
                0),
            this.nodes.forEach(_2),
            this.nodes.forEach(C2),
            this.nodes.forEach(k2),
            this.nodes.forEach(S2),
            p2(vr);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new f2());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new df()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = m2(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: f } = this.options;
      if (
        (f && !f.current && f.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = h2(h, 250)),
            ea.hasAnimatedSinceResize &&
              ((ea.hasAnimatedSinceResize = !1), this.nodes.forEach(om));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          f &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: v,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || f.getDefaultTransition() || A2,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: m } =
                  f.getProps(),
                p = !this.targetLayout || !b0(this.targetLayout, y) || v,
                g = !h && v;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (h && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const E = { ...ef(x, "layout"), onPlay: P, onComplete: m };
                (f.shouldReduceMotion || this.options.layoutRoot) &&
                  ((E.delay = 0), (E.type = !1)),
                  this.startAnimation(E);
              } else
                h || om(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        wn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(N2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.HandoffCancelAllAnimations &&
          O0(this) &&
          window.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let f = 0; f < this.path.length; f++) {
        const d = this.path[f];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(sm);
        return;
      }
      this.isUpdating || this.nodes.forEach(P2),
        (this.isUpdating = !1),
        this.nodes.forEach(T2),
        this.nodes.forEach(x2),
        this.nodes.forEach(w2),
        this.clearAllSnapshots();
      const a = Qn.now();
      ($e.delta = rr(0, 1e3 / 60, a - $e.timestamp)),
        ($e.timestamp = a),
        ($e.isProcessing = !0),
        ql.update.process($e),
        ql.preRender.process($e),
        ql.render.process($e),
        ($e.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), zd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(E2), this.sharedNodes.forEach(j2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        re.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      re.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ke()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === o &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !M0(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        f = u !== this.prevTransformTemplateValue;
      o &&
        (a || gr(this.latestValues) || f) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        L2(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o) return ke();
      const a = o.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Mn(a.x, l.offset.x), Mn(a.y, l.offset.y)), a;
    }
    removeElementScroll(o) {
      const a = ke();
      Et(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: f, options: d } = u;
        if (u !== this.root && f && d.layoutScroll) {
          if (f.isRoot) {
            Et(a, o);
            const { scroll: h } = this.root;
            h && (Mn(a.x, -h.offset.x), Mn(a.y, -h.offset.y));
          }
          Mn(a.x, f.offset.x), Mn(a.y, f.offset.y);
        }
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = ke();
      Et(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        !a &&
          f.options.layoutScroll &&
          f.scroll &&
          f !== f.root &&
          li(l, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
          gr(f.latestValues) && li(l, f.latestValues);
      }
      return gr(this.latestValues) && li(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = ke();
      Et(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !gr(u.latestValues)) continue;
        Nc(u.latestValues) && u.updateSnapshot();
        const f = ke(),
          d = u.measurePageBox();
        Et(f, d),
          em(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, f);
      }
      return gr(this.latestValues) && em(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== $e.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (
          ((this.resolvedRelativeTargetAt = $e.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1
            ? ((this.relativeParent = v),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ke()),
              (this.relativeTargetOrigin = ke()),
              ms(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                v.layout.layoutBox
              ),
              Et(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ke()), (this.targetWithTransforms = ke())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                bC(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Et(this.target, this.layout.layoutBox),
                j0(this.target, this.targetDelta))
              : Et(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v &&
            !!v.resumingFrom == !!this.resumingFrom &&
            !v.options.layoutScroll &&
            v.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = v),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ke()),
                (this.relativeTargetOrigin = ke()),
                ms(this.relativeTargetOrigin, this.target, v.target),
                Et(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          vr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Nc(this.parent.latestValues) ||
          N0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === $e.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(f || d))
      )
        return;
      Et(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        v = this.treeScale.y;
      HC(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ke()));
      const { target: y } = a;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = ai()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = ai()),
        (this.projectionDeltaWithTransform = ai()));
      const x = this.projectionTransform;
      ps(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = rm(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== x ||
          this.treeScale.x !== h ||
          this.treeScale.y !== v) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        vr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        f = { ...this.latestValues },
        d = ai();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = ke(),
        v = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        x = v !== y,
        P = this.getStack(),
        m = !P || P.members.length <= 1,
        p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(D2));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (E) => {
        const k = E / 1e3;
        am(d.x, o.x, k),
          am(d.y, o.y, k),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ms(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            R2(this.relativeTarget, this.relativeTargetOrigin, h, k),
            g && u2(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ke()),
            Et(g, this.relativeTarget)),
          x &&
            ((this.animationValues = f), r2(f, u, this.latestValues, k, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (wn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = re.update(() => {
          (ea.hasAnimatedSinceResize = !0),
            (this.currentAnimation = g2(0, im, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(im),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: f,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          V0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ke();
          const d = wt(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const h = wt(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + h);
        }
        Et(a, l),
          li(a, f),
          ps(this.projectionDeltaWithTransform, this.layoutCorrected, a, f);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new c2()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && du("z", o, u, this.animationValues);
      for (let f = 0; f < cu.length; f++)
        du(`rotate${cu[f]}`, o, u, this.animationValues),
          du(`skew${cu[f]}`, o, u, this.animationValues);
      o.render();
      for (const f in u)
        o.setStaticValue(f, u[f]),
          this.animationValues && (this.animationValues[f] = u[f]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return v2;
      const u = { visibility: "" },
        f = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Zo(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = f ? f(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = Zo(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !gr(this.latestValues) &&
            ((x.transform = f ? f({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const h = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = rm(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        f && (u.transform = f(h, u.transform));
      const { x: v, y } = this.projectionDelta;
      (u.transformOrigin = `${v.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (u.opacity =
              d === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const x in Aa) {
        if (h[x] === void 0) continue;
        const { correct: P, applyTo: m } = Aa[x],
          p = u.transform === "none" ? h[x] : P(h[x], d);
        if (m) {
          const g = m.length;
          for (let E = 0; E < g; E++) u[m[E]] = p;
        } else u[x] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Zo(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(sm),
        this.root.sharedNodes.clear();
    }
  };
}
function x2(e) {
  e.updateLayout();
}
function w2(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? Pt((d) => {
          const h = o ? n.measuredBox[d] : n.layoutBox[d],
            v = wt(h);
          (h.min = r[d].min), (h.max = h.min + v);
        })
      : V0(s, n.layoutBox, r) &&
        Pt((d) => {
          const h = o ? n.measuredBox[d] : n.layoutBox[d],
            v = wt(r[d]);
          (h.max = h.min + v),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + v));
        });
    const a = ai();
    ps(a, r, n.layoutBox);
    const l = ai();
    o ? ps(l, e.applyTransform(i, !0), n.measuredBox) : ps(l, r, n.layoutBox);
    const u = !M0(a);
    let f = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: v } = d;
        if (h && v) {
          const y = ke();
          ms(y, n.layoutBox, h.layoutBox);
          const x = ke();
          ms(x, r, v.layoutBox),
            b0(y, x) || (f = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: f,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function _2(e) {
  vr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function S2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function E2(e) {
  e.clearSnapshot();
}
function sm(e) {
  e.clearMeasurements();
}
function P2(e) {
  e.isLayoutDirty = !1;
}
function T2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function om(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function C2(e) {
  e.resolveTargetDelta();
}
function k2(e) {
  e.calcProjection();
}
function N2(e) {
  e.resetSkewAndRotation();
}
function j2(e) {
  e.removeLeadSnapshot();
}
function am(e, t, n) {
  (e.translate = _e(t.translate, 0, n)),
    (e.scale = _e(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function lm(e, t, n, r) {
  (e.min = _e(t.min, n.min, r)), (e.max = _e(t.max, n.max, r));
}
function R2(e, t, n, r) {
  lm(e.x, t.x, n.x, r), lm(e.y, t.y, n.y, r);
}
function D2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const A2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  um = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  cm = um("applewebkit/") && !um("chrome/") ? Math.round : Je;
function dm(e) {
  (e.min = cm(e.min)), (e.max = cm(e.max));
}
function L2(e) {
  dm(e.x), dm(e.y);
}
function V0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !MC(nm(t), nm(n), 0.2))
  );
}
const I2 = F0({
    attachResizeListener: (e, t) => cn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  fu = { current: void 0 },
  B0 = F0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!fu.current) {
        const e = new I2({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (fu.current = e);
      }
      return fu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  M2 = {
    pan: { Feature: JC },
    drag: { Feature: QC, ProjectionNode: B0, MeasureLayout: A0 },
  },
  Rc = { current: null },
  U0 = { current: !1 };
function b2() {
  if (((U0.current = !0), !!Ud))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Rc.current = e.matches);
      e.addListener(t), t();
    } else Rc.current = !1;
}
function O2(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (Qe(i)) e.addValue(r, i);
    else if (Qe(s)) e.addValue(r, zs(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, zs(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const fm = new WeakMap(),
  F2 = [...Yy, Ye, ir],
  V2 = (e) => F2.find(Ky(e)),
  hm = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  B2 = Wd.length;
class U2 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.applyWillChange = !1),
      (this.resolveKeyframes = (h, v, y, x) =>
        new this.KeyframeResolver(h, v, y, x, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = tf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => re.render(this.render, !1, !0));
    const { latestValues: l, renderState: u } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = ul(n)),
      (this.isVariantNode = Sy(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in d) {
      const v = d[h];
      l[h] !== void 0 && Qe(v) && v.set(l[h], !1);
    }
  }
  mount(t) {
    (this.current = t),
      fm.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      U0.current || b2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Rc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    fm.delete(this.current),
      this.projection && this.projection.unmount(),
      wn(this.notifyUpdate),
      wn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = cr.has(t),
      i = n.on("change", (o) => {
        (this.latestValues[t] = o),
          this.props.onUpdate && re.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ci) {
      const n = Ci[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ke();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < hm.length; r++) {
      const i = hm[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = O2(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < B2; r++) {
      const i = Wd[r],
        s = this.props[i];
      (Fs(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = zs(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Hy(i) || Wy(i))
          ? (i = parseFloat(i))
          : !V2(i) && ir.test(n) && (i = n0(t, n)),
        this.setBaseTarget(t, Qe(i) ? i.get() : i)),
      Qe(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = qd(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Qe(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new df()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class z0 extends U2 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = r0);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function z2(e) {
  return window.getComputedStyle(e);
}
class $2 extends z0 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.applyWillChange = !0);
  }
  readValueFromInstance(t, n) {
    if (cr.has(n)) {
      const r = rf(n);
      return (r && r.default) || 0;
    } else {
      const r = z2(t),
        i = (Cy(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return R0(t, n);
  }
  build(t, n, r) {
    Yd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Zd(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Qe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Dy(t, n, r, i);
  }
}
class W2 extends z0 {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (cr.has(n)) {
      const r = rf(n);
      return (r && r.default) || 0;
    }
    return (n = Ay.has(n) ? n : ll(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ke();
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Iy(t, n, r);
  }
  build(t, n, r) {
    Qd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Ly(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Jd(t.tagName)), super.mount(t);
  }
}
const H2 = (e, t) =>
    Hd(e) ? new W2(t) : new $2(t, { allowProjection: e !== C.Fragment }),
  G2 = { layout: { ProjectionNode: B0, MeasureLayout: A0 } },
  K2 = { ...kC, ...OP, ...M2, ...G2 },
  Y2 = WE((e, t) => PP(e, t, K2, H2)),
  sr = "http://192:168.1.2:8080/OH";
function X2() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs("div", {
        className: Te.barPattern,
        children: [
          c.jsx("span", { className: Te.red }),
          c.jsx("span", { className: Te.indigo }),
          c.jsx("span", { className: Te.blue }),
          c.jsx("span", { className: Te.green }),
          c.jsx("span", { className: Te.orange }),
        ],
      }),
      c.jsx("div", {
        className: Te.mainAuth,
        children: c.jsxs(Y2.div, {
          className: Te.popup,
          initial: { scale: 0.3, opacity: 0.1 },
          animate: { scale: 1, opacity: 1 },
          transition: { type: "spring", duration: 0.7, bounce: 0.6 },
          children: [
            c.jsx("div", {
              children: c.jsx("img", {
                src: my,
                alt: "logo",
                className: Te.logoImg,
              }),
            }),
            c.jsx("div", {
              children: c.jsxs(ol, {
                method: "post",
                className: Te.loginForm,
                children: [
                  c.jsx("h1", {
                    className: Te.formText,
                    children: "Login to your account",
                  }),
                  c.jsx("div", {
                    children: c.jsx("input", {
                      type: "text",
                      name: "username",
                      className: Te.inpFields,
                      placeholder: "user@domain.com",
                    }),
                  }),
                  c.jsx("div", {
                    className: Te.formPassword,
                    children: c.jsx("input", {
                      type: "password",
                      name: "password",
                      className: Te.inpFields,
                      placeholder: "password",
                    }),
                  }),
                  c.jsx("div", {
                    children: c.jsxs("select", {
                      name: "role",
                      className: Te.formOption,
                      children: [
                        c.jsx("option", { children: "Login as hospital" }),
                        c.jsx("option", { children: "Login as Receptionsist" }),
                      ],
                    }),
                  }),
                  c.jsxs("div", {
                    className: Te.formCheckbox,
                    children: [
                      " ",
                      c.jsx("input", {
                        type: "checkbox",
                        name: "rememberMe",
                        className: Te.inpCheckbox,
                      }),
                      "Remember me",
                    ],
                  }),
                  c.jsx("button", {
                    className: Te.formButton,
                    children: "LOGIN",
                  }),
                  c.jsxs("p", {
                    children: [
                      c.jsx(TE, { className: Te.icon }),
                      c.jsx(ne, {
                        to: "",
                        id: Te.forgotLink,
                        children: " Forgot password",
                      }),
                    ],
                  }),
                  c.jsxs("p", {
                    className: Te.formText3,
                    children: [
                      "Don't have an account?",
                      c.jsx(ne, {
                        to: "",
                        id: Te.registerLink,
                        children: " Register",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
async function Q2({ request: e }) {
  const t = await e.formData(),
    n = { username: t.get("username"), password: t.get("password") };
  console.log("Data to send"), console.log(n), console.log("url :", sr);
  try {
    const r = await fetch(`${sr}/Authentication/authenticate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n),
    });
    r.ok && console.log("response is ok !"), console.log(r);
    const i = await r.text();
    return (
      localStorage.setItem("token", i),
      i ? Sn("/dashboard") : (console.log(i), i)
    );
  } catch (r) {
    return console.log(r), r;
  }
}
const J2 = "_mainNavWrapper_1ohkx_1",
  Z2 = "_firstPartition_1ohkx_6",
  q2 = "_secondPartition_1ohkx_7",
  ek = "_fix_1ohkx_11",
  tk = "_topLeftNav_1ohkx_26",
  nk = "_topRightNav_1ohkx_27",
  rk = "_topLeftImg_1ohkx_37",
  ik = "_rotateImage_1ohkx_1",
  sk = "_bottomRightNav_1ohkx_63",
  Nn = {
    mainNavWrapper: J2,
    firstPartition: Z2,
    secondPartition: q2,
    fix: ek,
    topLeftNav: tk,
    topRightNav: nk,
    topLeftImg: rk,
    rotateImage: ik,
    bottomRightNav: sk,
  },
  ok = "_buttonWrapper_1j50x_1",
  ak = "_buttonIcon_1j50x_11",
  lk = "_icon_1j50x_23",
  uk = "_logoutButton_1j50x_26",
  Hr = { buttonWrapper: ok, buttonIcon: ak, icon: lk, logoutButton: uk };
function ck(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Mail" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z",
            },
            child: [],
          },
        ],
      },
    ],
  })(e);
}
function dk(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 1c3.681 0 7 2.565 7 6v4.539c0 .642.189 1.269.545 1.803l2.2 3.298A1.517 1.517 0 0 1 20.482 19H15.5a3.5 3.5 0 1 1-7 0H3.519a1.518 1.518 0 0 1-1.265-2.359l2.2-3.299A3.25 3.25 0 0 0 5 11.539V7c0-3.435 3.318-6 7-6ZM6.5 7v4.539a4.75 4.75 0 0 1-.797 2.635l-2.2 3.298-.003.01.001.007.004.006.006.004.007.001h16.964l.007-.001.006-.004.004-.006.001-.006a.017.017 0 0 0-.003-.01l-2.199-3.299a4.753 4.753 0 0 1-.798-2.635V7c0-2.364-2.383-4.5-5.5-4.5S6.5 4.636 6.5 7ZM14 19h-4a2 2 0 1 0 4 0Z",
        },
        child: [],
      },
    ],
  })(e);
}
function pm(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V8.5h-4a2 2 0 0 1-2-2v-4Zm10 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5Z",
        },
        child: [],
      },
    ],
  })(e);
}
function fk(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeWidth: "2",
          d: "M12 1L12 9M6.99426725 4.51938959C6.50550683 4.84709741 6.05064133 5.22143661 5.63603897 5.63603897 4.00735931 7.26471863 3 9.51471863 3 12 3 16.9705627 7.02943725 21 12 21 16.9705627 21 21 16.9705627 21 12 21 9.51471863 19.9926407 7.26471863 18.363961 5.63603897 17.9493587 5.22143661 17.4944932 4.84709741 17.0057327 4.51938959",
        },
        child: [],
      },
    ],
  })(e);
}
function hk() {
  function e() {
    return localStorage.removeItem("token"), Sn();
  }
  return c.jsxs("div", {
    className: Hr.buttonWrapper,
    children: [
      c.jsx("button", { className: Hr.buttonIcon, children: c.jsx(ck, {}) }),
      c.jsx("button", { className: Hr.buttonIcon, children: c.jsx(dk, {}) }),
      c.jsx("div", { style: { flexGrow: 1 } }),
      c.jsx("button", { className: Hr.buttonIcon, children: c.jsx(CE, {}) }),
      c.jsx("button", {
        className: Hr.buttonIcon,
        onClick: e,
        children: c.jsx(ne, {
          to: "/",
          className: Hr.logoutButton,
          children: c.jsx(fk, {}),
        }),
      }),
    ],
  });
}
function pk(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [{ tag: "path", attr: { d: "M12 14L8 10H16L12 14Z" }, child: [] }],
  })(e);
}
function mk(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z",
        },
        child: [],
      },
    ],
  })(e);
}
const gk = "_topSideBar_1sg66_1",
  vk = "_userImg_1sg66_6",
  yk = "_userName_1sg66_12",
  xk = "_dropdown_1sg66_22",
  wk = "_bottomSideBar_1sg66_28",
  Yi = {
    topSideBar: gk,
    userImg: vk,
    userName: yk,
    dropdown: xk,
    bottomSideBar: wk,
  },
  _k = "/assets/user-BIJ7Dx-k.png";
function Sk(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M19 7h-1V2H6v5H5a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v3h12v-3h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3zM8 4h8v3H8V4zm0 16v-4h8v4H8zm11-8h-4v-2h4v2z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ek(e) {
  return at({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
        },
        child: [],
      },
    ],
  })(e);
}
function Pk(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeMiterlimit: "10",
          strokeWidth: "32",
          d: "M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z",
        },
        child: [],
      },
    ],
  })(e);
}
const Tk = "_mainDiv_1kg02_1",
  Ck = "_section_1kg02_6",
  kk = "_sideBarIcon_1kg02_19",
  Nk = "_active_1kg02_44",
  jk = "_activeNav_1kg02_48",
  Rk = "_activeIcon_1kg02_52",
  Dk = "_textColor_1kg02_56",
  Ak = "_bgColor_1kg02_60",
  Lk = "_list_1kg02_70",
  Ik = "_horizontalRow_1kg02_70",
  xe = {
    mainDiv: Tk,
    section: Ck,
    sideBarIcon: kk,
    active: Nk,
    activeNav: jk,
    activeIcon: Rk,
    textColor: Dk,
    bgColor: Ak,
    list: Lk,
    horizontalRow: Ik,
  },
  Mk = "_horizontalRow_1m5sb_1",
  bk = "_unorderdLists_1m5sb_12",
  Ok = "_links_1m5sb_18",
  Fk = "_list_1m5sb_22",
  Vk = "_activeLink_1m5sb_36",
  pt = {
    horizontalRow: Mk,
    unorderdLists: bk,
    links: Ok,
    list: Fk,
    activeLink: Vk,
  };
function mm({ text1: e, text2: t, isClick: n, link1: r, link2: i, link3: s }) {
  return c.jsx(c.Fragment, {
    children: c.jsxs("ul", {
      className: pt.unorderdLists,
      type: "none",
      style: { display: n ? "block" : "none", transitionDuration: "1s" },
      children: [
        c.jsxs("li", {
          className: pt.list,
          children: [
            c.jsx("hr", { className: pt.horizontalRow }),
            c.jsx(mi, {
              to: r,
              className: ({ isActive: o }) => (o ? pt.activeLink : pt.links),
              end: !0,
              children: e,
            }),
          ],
        }),
        c.jsxs("li", {
          className: pt.list,
          children: [
            c.jsx("hr", { className: pt.horizontalRow }),
            c.jsx(mi, {
              to: i,
              className: ({ isActive: o }) => (o ? pt.activeLink : pt.links),
              children: t,
            }),
          ],
        }),
        c.jsxs("li", {
          className: pt.list,
          children: [
            c.jsx("hr", { className: pt.horizontalRow }),
            c.jsx(mi, {
              to: s,
              className: ({ isActive: o }) => (o ? pt.activeLink : pt.links),
              children: s,
            }),
          ],
        }),
      ],
    }),
  });
}
function Bk() {
  const [e, t] = C.useState(!0),
    [n, r] = C.useState(!1);
  function i() {
    r((o) => !o), t((o) => !o);
  }
  function s() {
    t((o) => !o), r((o) => !o);
  }
  return c.jsxs("div", {
    className: xe.mainDiv,
    children: [
      c.jsxs("div", {
        to: "/dashboard",
        className: xe.section,
        children: [
          c.jsx("div", {
            className: xe.personIcon,
            children: c.jsx(Pk, { className: e ? xe.bgColor : xe.sideBarIcon }),
          }),
          c.jsx("div", {
            onClick: s,
            className: e ? xe.textColor : void 0,
            children: "Patient",
          }),
          c.jsx(mm, {
            text1: "Patient Dashboard",
            text2: "Add Patient",
            isClick: e,
            link1: "/dashboard",
            link2: "/dashboard/add-patient",
            link3: "OPD",
          }),
        ],
      }),
      c.jsxs("div", {
        to: "/dashboard/medicine",
        className: xe.section,
        children: [
          c.jsx("div", {
            className: xe.medicineIcon,
            children: c.jsx(Ek, { className: n ? xe.bgColor : xe.sideBarIcon }),
          }),
          c.jsx("div", {
            onClick: i,
            className: n ? xe.textColor : void 0,
            children: "Medicine",
          }),
          c.jsx(mm, {
            text1: "Medicine Dashboard",
            text2: "Add Medicine",
            isClick: n,
            link1: "medicine",
            link2: "add-medicine",
            link3: "OPD",
          }),
        ],
      }),
      c.jsxs(mi, {
        to: "ipd-register",
        className: ({ isActive: o }) =>
          o ? `${xe.section} ${xe.activeNav}` : xe.section,
        end: !0,
        children: [
          c.jsx("div", { children: c.jsx(pm, { className: xe.sideBarIcon }) }),
          c.jsx("div", { children: "IPD Register" }),
        ],
      }),
      c.jsxs(mi, {
        to: "/dashboard/payment-register",
        className: ({ isActive: o }) =>
          o ? `${xe.section} ${xe.activeNav}` : xe.section,
        end: !0,
        children: [
          c.jsx("div", { children: c.jsx(pm, { className: xe.sideBarIcon }) }),
          c.jsx("div", { children: "Paymnent Register" }),
        ],
      }),
      c.jsxs(mi, {
        to: "/dashboard/reprint",
        className: ({ isActive: o }) =>
          o ? `${xe.section} ${xe.activeNav}` : xe.section,
        end: !0,
        children: [
          c.jsx("div", { children: c.jsx(Sk, { className: xe.sideBarIcon }) }),
          c.jsx("div", { children: "Reprint" }),
        ],
      }),
    ],
  });
}
function Uk() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs("div", {
        className: Yi.topSideBar,
        children: [
          c.jsx("div", {
            children: c.jsx("img", { src: _k, className: Yi.userImg }),
          }),
          c.jsxs("div", {
            className: Yi.userName,
            children: [
              c.jsx("span", { children: "Welcom," }),
              c.jsx("span", {
                children: c.jsxs("b", {
                  children: [
                    "Anil Yadav ",
                    c.jsx(pk, { className: Yi.dropdown }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: Yi.bottomSideBar,
        children: [c.jsx("span", { children: "Main" }), c.jsx(Bk, {})],
      }),
    ],
  });
}
function zk() {
  return c.jsx(c.Fragment, {
    children: c.jsxs("div", {
      className: Nn.mainNavWrapper,
      children: [
        c.jsxs("div", {
          className: Nn.firstPartition,
          children: [
            c.jsx("div", {
              className: Nn.topLeftNav,
              children: c.jsx("img", { src: my, className: Nn.topLeftImg }),
            }),
            c.jsx("div", {
              className: Nn.bottomLeftNav,
              children: c.jsx(Uk, {}),
            }),
          ],
        }),
        c.jsxs("div", {
          className: Nn.secondPartition,
          children: [
            c.jsx("div", {
              className: Nn.topRightNav,
              children: c.jsx(hk, {}),
            }),
            c.jsx("div", {
              className: Nn.bottomRightNav,
              children: c.jsx(vS, {}),
            }),
          ],
        }),
      ],
    }),
  });
}
async function $k({ request: e }) {
  const t = localStorage.getItem("token");
  if (t)
    try {
      const n = new URL(e.url),
        r = Object.fromEntries(n.searchParams.entries());
      console.log(r);
      let i = `${sr}/Patient/loadAllPatient`,
        s = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${t}`,
          },
        };
      console.log(t),
        r.patId &&
          ((i = `${sr}/Patient/loadPatient`),
          (s = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${t}`,
            },
            body: JSON.stringify(r),
          }));
      const o = await fetch(i, s);
      return console.log(o), await o.json();
    } catch (n) {
      return console.log(n), n;
    }
  else return Sn("/");
}
function $0(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z",
        },
        child: [],
      },
    ],
  })(e);
}
function gm(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",
        },
        child: [],
      },
    ],
  })(e);
}
function Wk(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M480 674V192c0-18 14-32 32-32s32 14 32 32v482h-64zm0 63h64v60h-64v-60zM0 512C0 229 229 0 512 0s512 229 512 512-229 512-512 512S0 795 0 512zm961 0c0-247-202-448-449-448S64 265 64 512s201 448 448 448 449-201 449-448z",
        },
        child: [],
      },
    ],
  })(e);
}
const Hk = "_patientDetail_11hu1_1",
  Gk = "_patientTable_11hu1_5",
  Kk = "_editIcon_11hu1_52",
  Yk = "_paymentIcon_11hu1_57",
  Mo = { patientDetail: Hk, patientTable: Gk, editIcon: Kk, paymentIcon: Yk },
  Xk = "_formWrapper_1sfw5_1",
  Qk = "_topWrapper_1sfw5_8",
  Jk = "_patientText_1sfw5_12",
  Zk = "_roundedButton_1sfw5_17",
  qk = "_hospitalName_1sfw5_35",
  eN = "_formSection_1sfw5_45",
  tN = "_inputField_1sfw5_58",
  nN = "_searchButton_1sfw5_73",
  rN = "_resetButton_1sfw5_76",
  Gt = {
    formWrapper: Xk,
    topWrapper: Qk,
    patientText: Jk,
    roundedButton: Zk,
    hospitalName: qk,
    formSection: eN,
    inputField: tN,
    searchButton: nN,
    resetButton: rN,
  };
function iN() {
  return c.jsxs("div", {
    className: Gt.formWrapper,
    children: [
      c.jsxs("div", {
        className: Gt.topWrapper,
        children: [
          c.jsx("div", { className: Gt.patientText, children: "Patients" }),
          c.jsx("div", { style: { flexGrow: 2 } }),
          c.jsx("div", {
            children: c.jsx(ne, {
              to: "add-patient",
              children: c.jsx("button", {
                className: Gt.roundedButton,
                children: "New Patient",
              }),
            }),
          }),
        ],
      }),
      c.jsxs("div", {
        className: Gt.hospitalName,
        children: [
          c.jsx(ne, { to: "/dashboard", children: "Shri Krishna Hospital  " }),
          "/  Patient Dashboard",
        ],
      }),
      c.jsxs("form", {
        className: Gt.formSection,
        children: [
          c.jsx("div", {
            className: Gt.patientEntry,
            children: c.jsx("input", {
              name: "patId",
              type: "text",
              placeholder: "Enter Code to search patient",
              className: Gt.inputField,
              required: !0,
            }),
          }),
          c.jsx("div", {
            children: c.jsx("button", {
              className: Gt.searchButton,
              type: "submit",
              children: "Search",
            }),
          }),
          c.jsx("div", {
            children: c.jsx(ne, {
              to: "/dashboard",
              children: c.jsx("button", {
                type: "button",
                className: Gt.resetButton,
                children: "Reset All",
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function sN() {
  const e = cy("patientData");
  return c.jsxs("div", {
    className: Mo.patientDetail,
    children: [
      c.jsx("div", { children: c.jsx(iN, {}) }),
      c.jsxs("div", {
        className: Mo.patientTable,
        children: [
          "     ",
          c.jsx("span", {
            style: { color: "orange" },
            children: "Patient List",
          }),
          c.jsxs("table", {
            children: [
              c.jsx("thead", {
                children: c.jsxs("tr", {
                  children: [
                    c.jsx("td", { children: "Sr No." }),
                    c.jsx("td", { children: "Code" }),
                    c.jsx("td", { children: "Patient Detail" }),
                    c.jsxs("td", {
                      children: [
                        "Privious Payment",
                        c.jsx("br", {}),
                        " Detail",
                      ],
                    }),
                    c.jsx("td", { children: "Admit" }),
                    c.jsx("td", { children: "OPD" }),
                    c.jsx("td", { children: "Payment" }),
                    c.jsx("td", { children: "Consent" }),
                    c.jsx("td", { children: "Edit" }),
                  ],
                }),
              }),
              c.jsx("tbody", {
                children:
                  e.length > 0
                    ? e.map((t, n) =>
                        c.jsxs(
                          "tr",
                          {
                            children: [
                              c.jsx("td", { children: [n + 1] }),
                              c.jsx("td", { children: t.tokenId }),
                              c.jsxs("td", {
                                children: [
                                  t.name,
                                  " | ",
                                  t.age,
                                  " Yrs | ",
                                  t.gender,
                                  c.jsx("br", {}),
                                  "Adderss: ",
                                  t.address,
                                  " ",
                                  c.jsx("br", {}),
                                  "Telephone: ",
                                  t.telephone,
                                ],
                              }),
                              c.jsx("td", {
                                children: t.prevPaymentDetail
                                  ? c.jsxs("span", {
                                      children: [
                                        `Rs.${t.prevPaymentDetail}`,
                                        c.jsx(Wk, {
                                          className: Mo.paymentIcon,
                                        }),
                                      ],
                                    })
                                  : "NIL",
                              }),
                              c.jsx("td", {
                                children: c.jsx(ne, {
                                  to: "/dashboard/admit",
                                  children: c.jsx("button", {
                                    children: "Admit",
                                  }),
                                }),
                              }),
                              c.jsx("td", {
                                children: c.jsx(ne, {
                                  to: "/dashboard/opd",
                                  children: c.jsx("button", {
                                    children: "ODP",
                                  }),
                                }),
                              }),
                              c.jsx("td", {
                                children: c.jsx(ne, {
                                  to: "/dashboard/make-payment",
                                  children: c.jsx("button", {
                                    children: "Payment",
                                  }),
                                }),
                              }),
                              c.jsx("td", {
                                children: c.jsx(ne, {
                                  to: "/dashboard/consent",
                                  children: c.jsx("button", {
                                    children: "Consent",
                                  }),
                                }),
                              }),
                              c.jsx("td", {
                                children: c.jsx("span", {
                                  children: c.jsx(ne, {
                                    to: `/dashboard/edit-patient?patId=${t.tokenId}`,
                                    children: c.jsx($0, {
                                      className: Mo.editIcon,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          },
                          t.tokenId
                        )
                      )
                    : c.jsx("tr", {
                        children: c.jsx("th", {
                          style: {
                            borderTopWidth: "2rem",
                            backgroundColor: "#22252a",
                          },
                          colSpan: 9,
                          children: "No Records!",
                        }),
                      }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const oN = "_mainWrapper_drtvl_1",
  aN = "_patientText_drtvl_8",
  lN = "_hospitalName_drtvl_12",
  uN = "_firstGrid_drtvl_19",
  cN = "_thirdGrid_drtvl_25",
  dN = "_secondGrid_drtvl_26",
  fN = "_fourthGrid_drtvl_28",
  hN = "_fifthGrid_drtvl_100",
  pN = "_sixthGrid_drtvl_111",
  Ae = {
    mainWrapper: oN,
    patientText: aN,
    hospitalName: lN,
    firstGrid: uN,
    thirdGrid: cN,
    secondGrid: dN,
    fourthGrid: fN,
    fifthGrid: hN,
    sixthGrid: pN,
  };
function mN() {
  return c.jsxs("div", {
    className: Ae.mainWrapper,
    children: [
      c.jsx("div", {
        children: c.jsx("div", {
          className: Ae.patientText,
          children: "Add Patient",
        }),
      }),
      c.jsxs("div", {
        className: Ae.hospitalName,
        children: [
          c.jsx(ne, { to: "/dashboard", children: "Shri Krishna Hospital  " }),
          "/  Add Patient",
        ],
      }),
      c.jsxs(ol, {
        method: "post",
        children: [
          c.jsxs("div", {
            className: Ae.firstGrid,
            children: [
              c.jsx("input", {
                type: "text",
                name: "firstName",
                placeholder: "First Name*",
              }),
              c.jsx("input", {
                type: "text",
                name: "secondName",
                nameplaceholder: "Last Name*",
              }),
            ],
          }),
          c.jsxs("div", {
            className: Ae.secondGrid,
            children: [
              c.jsx("input", {
                type: "number",
                name: "age",
                placeholder: "Age*",
                className: Ae.firstGridInp,
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("input", {
                    type: "radio",
                    name: "gender",
                    id: "male",
                    value: "male",
                  }),
                  c.jsx("label", { htmlFor: "male", children: " Male " }),
                  c.jsx("input", {
                    type: "radio",
                    name: "gender",
                    id: "female",
                    value: "female",
                  }),
                  c.jsx("label", { htmlFor: "female", children: " Female " }),
                ],
              }),
              c.jsx("input", {
                type: "text",
                name: "address",
                placeholder: "Address*",
              }),
            ],
          }),
          c.jsxs("div", {
            className: Ae.thirdGrid,
            children: [
              c.jsx("input", {
                type: "text",
                name: "city",
                placeholder: "City",
              }),
              c.jsx("input", {
                type: "number",
                name: "telephone",
                placeholder: "Telephone",
                minLength: "10",
              }),
              c.jsx("input", {
                type: "text",
                name: "nextkin",
                placeholder: "Nextkin",
              }),
              c.jsxs("select", {
                name: "bloodGroup",
                children: [
                  c.jsx("option", { children: "A+" }),
                  c.jsx("option", { children: "A-" }),
                  c.jsx("option", { children: "B+" }),
                  c.jsx("option", { children: "B-" }),
                  c.jsx("option", { children: "o+" }),
                  c.jsx("option", { children: "o-" }),
                  c.jsx("option", { children: "AB+" }),
                  c.jsx("option", { children: "AB-" }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: Ae.fourthGrid,
            children: [
              c.jsx("input", {
                type: "text",
                name: "fatherName",
                placeholder: "Father Name",
              }),
              c.jsx("input", {
                type: "text",
                name: "motherName",
                placeholder: "Mother Name",
              }),
              c.jsx("input", {
                type: "text",
                name: "taxNumID",
                placeholder: "Tax Number ID",
              }),
            ],
          }),
          c.jsxs("div", {
            className: Ae.fifthGrid,
            children: [
              c.jsx("div", { children: "Note" }),
              c.jsx("div", {
                children: c.jsx("textarea", { name: "patNote" }),
              }),
            ],
          }),
          c.jsxs("div", {
            className: Ae.sixthGrid,
            children: [
              c.jsx(ne, {
                to: "..",
                children: c.jsx("button", {
                  type: "button",
                  children: "Cancel",
                }),
              }),
              c.jsx("button", { type: "submit", children: "Submit" }),
            ],
          }),
        ],
      }),
    ],
  });
}
async function gN({ request: e }) {
  localStorage.getItem("token");
  const t = await e.formData(),
    n = {
      firstName: t.get("firstName"),
      lastName: t.get("secondName"),
      age: t.get("age"),
      patSex: t.get("gender"),
      address: t.get("address"),
      city: t.get("city"),
      telephone: t.get("telephone"),
      nextKin: t.get("nextkin"),
      bloodType: t.get("bloodGroup"),
      fatherName: t.get("fatherName"),
      motherName: t.get("motherName"),
      taxCode: t.get("taxNumID"),
      patNote: t.get("patNote"),
      timeStamp: new Date().toISOString(),
    };
  console.log(n);
  try {
    const r = await fetch(`${sr}/Patient/registerPatient`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n),
    });
    return console.log(r), Sn("/dashboard");
  } catch (r) {
    console.log(r);
  }
  return console.log(n), n;
}
const vN = "_mainWrapper_s78sq_1",
  yN = "_topWrapper_s78sq_5",
  xN = "_patientText_s78sq_9",
  wN = "_roundedButton_s78sq_14",
  _N = "_hospitalName_s78sq_32",
  Xi = {
    mainWrapper: vN,
    topWrapper: yN,
    patientText: xN,
    roundedButton: wN,
    hospitalName: _N,
  };
function SN() {
  const e = uy();
  return (
    console.log(e),
    c.jsxs("div", {
      className: Xi.mainWrapper,
      children: [
        c.jsxs("div", {
          className: Xi.topWrapper,
          children: [
            c.jsx("div", { className: Xi.patientText, children: "Medicine" }),
            c.jsx("div", { style: { flexGrow: 2 } }),
            c.jsx("div", {
              children: c.jsx(ne, {
                to: "/dashboard/add-medicine",
                children: c.jsx("button", {
                  className: Xi.roundedButton,
                  children: "Add Medicine",
                }),
              }),
            }),
          ],
        }),
        c.jsxs("div", {
          className: Xi.hospitalName,
          children: [
            c.jsx(ne, {
              to: "/dashboard",
              children: "Shri Krishna Hospital  ",
            }),
            "/  Medicine",
          ],
        }),
        c.jsx("br", {}),
        " ",
        c.jsx("span", {
          style: { color: "orange" },
          children: "Medicine List",
        }),
        c.jsxs("table", {
          children: [
            c.jsx("thead", {
              children: c.jsxs("tr", {
                children: [
                  c.jsx("td", { children: "SR No." }),
                  c.jsx("td", { children: "Code" }),
                  c.jsx("td", { children: "Category" }),
                  c.jsx("td", { children: "Short Desc" }),
                  c.jsx("td", { children: "Long Desc" }),
                  c.jsx("td", { children: "Disp. Order" }),
                  c.jsx("td", { children: "Side" }),
                  c.jsx("td", { children: "Action" }),
                ],
              }),
            }),
            c.jsx("tbody", {
              children: e.map((t) =>
                c.jsxs(
                  "tr",
                  {
                    children: [
                      c.jsx("td", { children: t.medId }),
                      c.jsx("td", { children: t.medCode }),
                      c.jsx("td", { children: t.medCat }),
                      c.jsx("td", { children: t.shortDesc }),
                      c.jsx("td", { children: t.longDesc }),
                      c.jsx("td", { children: t.disOrder }),
                      c.jsx("td", { children: t.medSide }),
                      c.jsxs("td", {
                        children: [
                          c.jsx($0, { style: { color: "#007bff" } }),
                          "   ",
                          c.jsx(mk, { style: { color: "red" } }),
                        ],
                      }),
                    ],
                  },
                  t.medId
                )
              ),
            }),
          ],
        }),
      ],
    })
  );
}
async function EN() {
  const e = localStorage.getItem("token");
  if ((console.log(e), e))
    try {
      const t = await fetch(`${sr}/Medicine/loadAllMedicines`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${e}`,
        },
      });
      console.log("data Fetched");
      const n = t.json();
      return console.log(n), n;
    } catch (t) {
      return console.log(t), t;
    }
  else return Sn("/");
}
const PN = "_mainWrapper_a66qa_1",
  TN = "_topWrapper_a66qa_4",
  CN = "_patientText_a66qa_8",
  kN = "_hospitalName_a66qa_14",
  NN = "_firstGrid_a66qa_24",
  jN = "_secondGrid_a66qa_49",
  RN = "_thirdGrid_a66qa_67",
  DN = "_thirdGridElem_a66qa_85",
  AN = "_sixthGrid_a66qa_99",
  jn = {
    mainWrapper: PN,
    topWrapper: TN,
    patientText: CN,
    hospitalName: kN,
    firstGrid: NN,
    secondGrid: jN,
    thirdGrid: RN,
    thirdGridElem: DN,
    sixthGrid: AN,
  };
function LN() {
  return c.jsxs("div", {
    className: jn.mainWrapper,
    children: [
      c.jsx("div", {
        children: c.jsx("div", {
          className: jn.patientText,
          children: "Add Medicine",
        }),
      }),
      c.jsxs("div", {
        className: jn.hospitalName,
        children: [
          c.jsx(ne, { to: "/dashboard", children: "Shri Krishna Hospital  " }),
          " / ",
          c.jsx(ne, { to: "/dashboard/medicine", children: " Medicines" }),
          "  /   Add Medicine",
        ],
      }),
      c.jsxs(ol, {
        method: "post",
        children: [
          c.jsxs("div", {
            method: "post",
            className: jn.firstGrid,
            children: [
              c.jsxs("select", {
                name: "medicineCode",
                children: [
                  c.jsx("option", { children: "Select Medicine Code" }),
                  c.jsx("option", { children: "O123" }),
                  c.jsx("option", { children: "AB234" }),
                  c.jsx("option", { children: "ABC345" }),
                ],
              }),
              c.jsxs("select", {
                id: "second",
                name: "medicineCatagory",
                children: [
                  c.jsx("option", { children: "Select Medicine Catagory" }),
                  c.jsx("option", { children: "NJ" }),
                  c.jsx("option", { children: "OL" }),
                  c.jsx("option", { children: "SR" }),
                  c.jsx("option", { children: "TB" }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: jn.secondGrid,
            children: [
              c.jsx("input", {
                type: "text",
                name: "medicineShortDesc",
                placeholder: "Medicine Short Desc.",
              }),
              c.jsx("input", {
                type: "text",
                id: "sec",
                name: "displayOrder",
                placeholder: "Medicine Display Order",
              }),
            ],
          }),
          c.jsxs("div", {
            className: jn.thirdGrid,
            children: [
              c.jsx("div", {
                children: c.jsx("input", {
                  type: "text",
                  name: "medicineLongDesc",
                  placeholder: "Medicine Long Desc.",
                }),
              }),
              c.jsxs("div", {
                className: jn.thirdGridElem,
                children: [
                  c.jsx("p", { children: "Medicine Display Side:" }),
                  "  ",
                  c.jsxs("div", {
                    children: [
                      c.jsx("input", {
                        type: "radio",
                        name: "direction",
                        value: "right",
                      }),
                      " ",
                      "Right  ",
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("input", {
                        type: "radio",
                        name: "direction",
                        value: "left",
                      }),
                      "Left  ",
                    ],
                  }),
                ],
              }),
              c.jsx("br", {}),
            ],
          }),
          c.jsxs("div", {
            className: jn.sixthGrid,
            children: [
              c.jsx(ne, {
                to: "..",
                children: c.jsx("button", {
                  type: "button",
                  children: "Cancel",
                }),
              }),
              c.jsx("button", { type: "submit", children: "Add Medicine" }),
            ],
          }),
        ],
      }),
    ],
  });
}
async function IN({ request: e }) {
  const t = await e.formData(),
    n = {
      disOrder: t.get("displayOrder"),
      longDesc: t.get("medicineLongDesc"),
      medCat: t.get("medicineCatagory"),
      medCode: t.get("medicineCode"),
      medSide: t.get("direction"),
      shortDesc: t.get("medicineShortDesc"),
    };
  return (
    console.log(n),
    (
      await fetch(`${sr}/Medicine/addMedicine`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(n),
      })
    ).json(),
    Sn("/dashboard/medicine")
  );
}
const MN = "_topWrapper_ty57i_1",
  bN = "_patientText_ty57i_7",
  ON = "_hospitalName_ty57i_13",
  FN = "_paragraph_ty57i_24",
  bo = { topWrapper: MN, patientText: bN, hospitalName: ON, paragraph: FN };
function VN() {
  return c.jsxs("div", {
    children: [
      c.jsxs("div", {
        className: bo.topWrapper,
        children: [
          c.jsx("div", { className: bo.patientText, children: "IPD Register" }),
          c.jsx("div", { style: { flexGrow: 2 } }),
        ],
      }),
      c.jsxs("div", {
        className: bo.hospitalName,
        children: [
          c.jsx(ne, { to: "/dashboard", children: "Shri Krishna Hospital  " }),
          "/  IPD Register",
        ],
      }),
      c.jsx("p", {
        className: bo.paragraph,
        children: "Nothing found to display",
      }),
    ],
  });
}
const BN = "_topWrapper_1kcvq_1",
  UN = "_patientText_1kcvq_7",
  zN = "_hospitalName_1kcvq_11",
  $N = "_roundedButton_1kcvq_22",
  WN = "_firstGrid_1kcvq_40",
  HN = "_firstGridElem_1kcvq_48",
  GN = "_inputs_1kcvq_76",
  KN = "_secondGrid_1kcvq_79",
  YN = "_thirdGrid_1kcvq_88",
  XN = "_icon_1kcvq_105",
  tt = {
    topWrapper: BN,
    patientText: UN,
    hospitalName: zN,
    roundedButton: $N,
    firstGrid: WN,
    firstGridElem: HN,
    inputs: GN,
    secondGrid: KN,
    thirdGrid: YN,
    icon: XN,
  };
function QN() {
  const e = uy();
  return (
    console.log(e),
    c.jsxs("div", {
      children: [
        c.jsxs("div", {
          className: tt.topWrapper,
          children: [
            c.jsx("div", {
              className: tt.patientText,
              children: "Payment Register",
            }),
            c.jsx("div", { style: { flexGrow: 2 } }),
            c.jsx("div", {
              children: c.jsxs("button", {
                className: tt.roundedButton,
                children: [c.jsx(gm, {}), "  Consolidate Print"],
              }),
            }),
          ],
        }),
        c.jsxs("div", {
          className: tt.hospitalName,
          children: [
            c.jsx(ne, {
              to: "/dashboard",
              children: "Shri Krishna Hospital  ",
            }),
            "/  Payment Register",
          ],
        }),
        c.jsxs("div", {
          className: tt.firstGrid,
          children: [
            c.jsxs("div", {
              className: tt.firstGridElem,
              children: [
                c.jsx("div", { children: "From" }),
                c.jsx("div", {
                  className: tt.inputs,
                  children: c.jsx("input", {
                    type: "date",
                    placeholder: "date",
                  }),
                }),
              ],
            }),
            c.jsxs("div", {
              className: tt.firstGridElem,
              children: [
                c.jsx("div", { children: "To" }),
                c.jsx("div", {
                  className: tt.inputs,
                  children: c.jsx("input", {
                    type: "date",
                    placeholder: "date",
                  }),
                }),
              ],
            }),
            c.jsxs("div", {
              className: tt.firstGridElem,
              children: [
                c.jsx("div", { children: "On Account Of" }),
                c.jsx("div", {
                  className: tt.inputs,
                  children: c.jsxs("select", {
                    children: [
                      c.jsx("option", { children: "Select Treatment Type" }),
                      c.jsx("option", { children: "OPD" }),
                      c.jsx("option", { children: "X-Ray" }),
                      c.jsx("option", { children: "Psysiotherapy" }),
                      c.jsx("option", { children: "Minor" }),
                      c.jsx("option", { children: "Emergency" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        c.jsx("div", {
          className: tt.secondGrid,
          children: c.jsx("button", {
            className: tt.roundedButton,
            children: "Submit",
          }),
        }),
        c.jsxs("div", {
          className: tt.thirdGrid,
          children: [
            c.jsx("p", { children: "Payment Record" }),
            c.jsxs("table", {
              children: [
                c.jsx("thead", {
                  children: c.jsxs("tr", {
                    children: [
                      c.jsx("td", { children: "Date" }),
                      c.jsx("td", { children: "Token no." }),
                      c.jsx("td", { children: "Patient Detail" }),
                      c.jsx("td", { children: "Type" }),
                      c.jsx("td", { children: "Amount" }),
                      c.jsx("td", { children: "Print" }),
                    ],
                  }),
                }),
                c.jsx("tbody", {
                  children: e.map((t) =>
                    c.jsxs(
                      "tr",
                      {
                        children: [
                          c.jsx("td", { children: t.date }),
                          c.jsx("td", { children: t.tokenNo }),
                          c.jsxs("td", {
                            children: [
                              t.patientName,
                              " | ",
                              t.age,
                              " Yrs | ",
                              t.gender,
                              c.jsx("br", {}),
                              "Adderss: ",
                              t.address,
                              " ",
                              c.jsx("br", {}),
                              "Telephone: ",
                              t.telephone,
                            ],
                          }),
                          c.jsx("td", { children: t.type }),
                          c.jsx("td", { children: t.amount }),
                          c.jsx("td", {
                            children: c.jsx(gm, { className: tt.icon }),
                          }),
                        ],
                      },
                      t.tokenNo
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
async function JN() {
  const e = localStorage.getItem("token");
  if ((console.log(e), e))
    try {
      console.log("Fetching patient data ......");
      const n = await (
        await fetch("http://localhost:3002/HMS/getPaymentDetail")
      ).json();
      return console.log(n), n;
    } catch (t) {
      return console.log(t), t;
    }
  else return Sn("/");
}
const ZN = "_topWrapper_63pgg_1",
  qN = "_patientText_63pgg_7",
  ej = "_hospitalName_63pgg_11",
  tj = "_firstGrid_63pgg_23",
  nj = "_firstGridElem_63pgg_30",
  rj = "_submitButton_63pgg_54",
  Lt = {
    topWrapper: ZN,
    patientText: qN,
    hospitalName: ej,
    firstGrid: tj,
    firstGridElem: nj,
    submitButton: rj,
  };
function ij() {
  return c.jsxs("div", {
    className: Lt.mainWrapper,
    children: [
      c.jsxs("div", {
        className: Lt.topWrapper,
        children: [
          c.jsx("div", {
            className: Lt.patientText,
            children: "Reprint Discharge",
          }),
          c.jsx("div", { style: { flexGrow: 2 } }),
        ],
      }),
      c.jsxs("div", {
        className: Lt.hospitalName,
        children: [
          c.jsx(ne, { to: "/dashboard", children: "Shri Krishna Hospital  " }),
          "/  Reprint Discharge",
        ],
      }),
      c.jsxs("div", {
        className: Lt.firstGrid,
        children: [
          c.jsxs("div", {
            className: Lt.firstGridElem,
            children: [
              c.jsx("div", { children: "From" }),
              c.jsx("div", { children: c.jsx("input", { type: "date" }) }),
            ],
          }),
          c.jsxs("div", {
            className: Lt.firstGridElem,
            children: [
              c.jsx("div", { children: "To" }),
              c.jsx("div", { children: c.jsx("input", { type: "date" }) }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: Lt.firstGrid,
        children: [
          c.jsxs("div", {
            className: Lt.firstGridElem,
            children: [
              c.jsx("div", { children: "On Account Of" }),
              c.jsx("div", {
                children: c.jsxs("select", {
                  type: "date",
                  children: [
                    c.jsx("option", { children: "Select Treatment Type" }),
                    c.jsx("option", { children: "OPD" }),
                    c.jsx("option", { children: "X-RAY" }),
                    c.jsx("option", { children: "Psysiotherapy" }),
                    c.jsx("option", { children: "Minor" }),
                    c.jsx("option", { children: "Emergency" }),
                  ],
                }),
              }),
            ],
          }),
          c.jsxs("div", {
            className: Lt.firstGridElem,
            children: [
              c.jsx("div", { children: "Operation" }),
              c.jsx("div", {
                children: c.jsxs("select", {
                  type: "date",
                  children: [
                    c.jsx("option", { children: "SELECT" }),
                    c.jsx("option", { children: "DELETE" }),
                    c.jsx("option", { children: "EDIT" }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      c.jsx("div", {
        children: c.jsx("button", {
          className: Lt.submitButton,
          children: "Submit",
        }),
      }),
    ],
  });
}
var vm = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const W0 = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  sj = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = e[n++],
          o = e[n++],
          a = e[n++],
          l =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (l >> 10))),
          (t[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const s = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return t.join("");
  },
  H0 = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const s = e[i],
          o = i + 1 < e.length,
          a = o ? e[i + 1] : 0,
          l = i + 2 < e.length,
          u = l ? e[i + 2] : 0,
          f = s >> 2,
          d = ((s & 3) << 4) | (a >> 4);
        let h = ((a & 15) << 2) | (u >> 6),
          v = u & 63;
        l || ((v = 64), o || (h = 64)), r.push(n[f], n[d], n[h], n[v]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(W0(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : sj(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const s = n[e.charAt(i++)],
          a = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const u = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const d = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, s == null || a == null || u == null || d == null))
          throw new oj();
        const h = (s << 2) | (a >> 4);
        if ((r.push(h), u !== 64)) {
          const v = ((a << 4) & 240) | (u >> 2);
          if ((r.push(v), d !== 64)) {
            const y = ((u << 6) & 192) | d;
            r.push(y);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class oj extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const aj = function (e) {
    const t = W0(e);
    return H0.encodeByteArray(t, !0);
  },
  G0 = function (e) {
    return aj(e).replace(/\./g, "");
  },
  K0 = function (e) {
    try {
      return H0.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lj() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uj = () => lj().__FIREBASE_DEFAULTS__,
  cj = () => {
    if (typeof process > "u" || typeof vm > "u") return;
    const e = vm.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  dj = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && K0(e[1]);
    return t && JSON.parse(t);
  },
  fj = () => {
    try {
      return uj() || cj() || dj();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  hj = (e) => {
    var t;
    return (t = fj()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function en() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function pj() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())
  );
}
function mj() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function gj() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function vj() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function yj() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          t(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xj = "FirebaseError";
class Or extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = xj),
      Object.setPrototypeOf(this, Or.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, io.prototype.create);
  }
}
class io {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      s = this.errors[t],
      o = s ? wj(s, r) : "Error",
      a = `${this.serviceName}: ${o} (${i}).`;
    return new Or(i, a, r);
  }
}
function wj(e, t) {
  return e.replace(_j, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const _j = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Y0(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((i) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function Sj(e, t) {
  const n = new Ej(e, t);
  return n.subscribe.bind(n);
}
class Ej {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let i;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    Pj(t, ["next", "error", "complete"])
      ? (i = t)
      : (i = { next: t, error: n, complete: r }),
      i.next === void 0 && (i.next = hu),
      i.error === void 0 && (i.error = hu),
      i.complete === void 0 && (i.complete = hu);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function Pj(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function hu() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ml(e) {
  return e && e._delegate ? e._delegate : e;
}
class $s {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ue;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(ue || (ue = {}));
const Tj = {
    debug: ue.DEBUG,
    verbose: ue.VERBOSE,
    info: ue.INFO,
    warn: ue.WARN,
    error: ue.ERROR,
    silent: ue.SILENT,
  },
  Cj = ue.INFO,
  kj = {
    [ue.DEBUG]: "log",
    [ue.VERBOSE]: "log",
    [ue.INFO]: "info",
    [ue.WARN]: "warn",
    [ue.ERROR]: "error",
  },
  Nj = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = kj[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class X0 {
  constructor(t) {
    (this.name = t),
      (this._logLevel = Cj),
      (this._logHandler = Nj),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in ue))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? Tj[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, ue.DEBUG, ...t),
      this._logHandler(this, ue.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, ue.VERBOSE, ...t),
      this._logHandler(this, ue.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, ue.INFO, ...t),
      this._logHandler(this, ue.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, ue.WARN, ...t),
      this._logHandler(this, ue.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, ue.ERROR, ...t),
      this._logHandler(this, ue.ERROR, ...t);
  }
}
const jj = (e, t) => t.some((n) => e instanceof n);
let ym, xm;
function Rj() {
  return (
    ym ||
    (ym = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function Dj() {
  return (
    xm ||
    (xm = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Q0 = new WeakMap(),
  Dc = new WeakMap(),
  J0 = new WeakMap(),
  pu = new WeakMap(),
  ff = new WeakMap();
function Aj(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("success", s), e.removeEventListener("error", o);
      },
      s = () => {
        n(Jn(e.result)), i();
      },
      o = () => {
        r(e.error), i();
      };
    e.addEventListener("success", s), e.addEventListener("error", o);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && Q0.set(n, e);
      })
      .catch(() => {}),
    ff.set(t, e),
    t
  );
}
function Lj(e) {
  if (Dc.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("complete", s),
          e.removeEventListener("error", o),
          e.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
    e.addEventListener("complete", s),
      e.addEventListener("error", o),
      e.addEventListener("abort", o);
  });
  Dc.set(e, t);
}
let Ac = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return Dc.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || J0.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Jn(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function Ij(e) {
  Ac = e(Ac);
}
function Mj(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(mu(this), t, ...n);
        return J0.set(r, t.sort ? t.sort() : [t]), Jn(r);
      }
    : Dj().includes(e)
    ? function (...t) {
        return e.apply(mu(this), t), Jn(Q0.get(this));
      }
    : function (...t) {
        return Jn(e.apply(mu(this), t));
      };
}
function bj(e) {
  return typeof e == "function"
    ? Mj(e)
    : (e instanceof IDBTransaction && Lj(e),
      jj(e, Rj()) ? new Proxy(e, Ac) : e);
}
function Jn(e) {
  if (e instanceof IDBRequest) return Aj(e);
  if (pu.has(e)) return pu.get(e);
  const t = bj(e);
  return t !== e && (pu.set(e, t), ff.set(t, e)), t;
}
const mu = (e) => ff.get(e);
function Oj(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(e, t),
    a = Jn(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (l) => {
        r(Jn(o.result), l.oldVersion, l.newVersion, Jn(o.transaction), l);
      }),
    n && o.addEventListener("blocked", (l) => n(l.oldVersion, l.newVersion, l)),
    a
      .then((l) => {
        s && l.addEventListener("close", () => s()),
          i &&
            l.addEventListener("versionchange", (u) =>
              i(u.oldVersion, u.newVersion, u)
            );
      })
      .catch(() => {}),
    a
  );
}
const Fj = ["get", "getKey", "getAll", "getAllKeys", "count"],
  Vj = ["put", "add", "delete", "clear"],
  gu = new Map();
function wm(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (gu.get(t)) return gu.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    i = Vj.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || Fj.includes(n))
  )
    return;
  const s = async function (o, ...a) {
    const l = this.transaction(o, i ? "readwrite" : "readonly");
    let u = l.store;
    return (
      r && (u = u.index(a.shift())),
      (await Promise.all([u[n](...a), i && l.done]))[0]
    );
  };
  return gu.set(t, s), s;
}
Ij((e) => ({
  ...e,
  get: (t, n, r) => wm(t, n) || e.get(t, n, r),
  has: (t, n) => !!wm(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bj {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (Uj(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function Uj(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Lc = "@firebase/app",
  _m = "0.10.8";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ir = new X0("@firebase/app"),
  zj = "@firebase/app-compat",
  $j = "@firebase/analytics-compat",
  Wj = "@firebase/analytics",
  Hj = "@firebase/app-check-compat",
  Gj = "@firebase/app-check",
  Kj = "@firebase/auth",
  Yj = "@firebase/auth-compat",
  Xj = "@firebase/database",
  Qj = "@firebase/database-compat",
  Jj = "@firebase/functions",
  Zj = "@firebase/functions-compat",
  qj = "@firebase/installations",
  eR = "@firebase/installations-compat",
  tR = "@firebase/messaging",
  nR = "@firebase/messaging-compat",
  rR = "@firebase/performance",
  iR = "@firebase/performance-compat",
  sR = "@firebase/remote-config",
  oR = "@firebase/remote-config-compat",
  aR = "@firebase/storage",
  lR = "@firebase/storage-compat",
  uR = "@firebase/firestore",
  cR = "@firebase/vertexai-preview",
  dR = "@firebase/firestore-compat",
  fR = "firebase",
  hR = "10.12.5",
  pR = {
    [Lc]: "fire-core",
    [zj]: "fire-core-compat",
    [Wj]: "fire-analytics",
    [$j]: "fire-analytics-compat",
    [Gj]: "fire-app-check",
    [Hj]: "fire-app-check-compat",
    [Kj]: "fire-auth",
    [Yj]: "fire-auth-compat",
    [Xj]: "fire-rtdb",
    [Qj]: "fire-rtdb-compat",
    [Jj]: "fire-fn",
    [Zj]: "fire-fn-compat",
    [qj]: "fire-iid",
    [eR]: "fire-iid-compat",
    [tR]: "fire-fcm",
    [nR]: "fire-fcm-compat",
    [rR]: "fire-perf",
    [iR]: "fire-perf-compat",
    [sR]: "fire-rc",
    [oR]: "fire-rc-compat",
    [aR]: "fire-gcs",
    [lR]: "fire-gcs-compat",
    [uR]: "fire-fst",
    [dR]: "fire-fst-compat",
    [cR]: "fire-vertex",
    "fire-js": "fire-js",
    [fR]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mR = new Map(),
  gR = new Map(),
  Sm = new Map();
function Em(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Ir.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function Ws(e) {
  const t = e.name;
  if (Sm.has(t))
    return (
      Ir.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Sm.set(t, e);
  for (const n of mR.values()) Em(n, e);
  for (const n of gR.values()) Em(n, e);
  return !0;
}
function ns(e) {
  return e.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vR = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  hf = new io("app", "Firebase", vR);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const pf = hR;
function gs(e, t, n) {
  var r;
  let i = (r = pR[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = t.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${t}":`];
    s &&
      a.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && a.push("and"),
      o &&
        a.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Ir.warn(a.join(" "));
    return;
  }
  Ws(new $s(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yR = "firebase-heartbeat-database",
  xR = 1,
  Hs = "firebase-heartbeat-store";
let vu = null;
function Z0() {
  return (
    vu ||
      (vu = Oj(yR, xR, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Hs);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw hf.create("idb-open", { originalErrorMessage: e.message });
      })),
    vu
  );
}
async function wR(e) {
  try {
    const n = (await Z0()).transaction(Hs),
      r = await n.objectStore(Hs).get(q0(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof Or) Ir.warn(t.message);
    else {
      const n = hf.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Ir.warn(n.message);
    }
  }
}
async function Pm(e, t) {
  try {
    const r = (await Z0()).transaction(Hs, "readwrite");
    await r.objectStore(Hs).put(t, q0(e)), await r.done;
  } catch (n) {
    if (n instanceof Or) Ir.warn(n.message);
    else {
      const r = hf.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Ir.warn(r.message);
    }
  }
}
function q0(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _R = 1024,
  SR = 30 * 24 * 60 * 60 * 1e3;
class ER {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new TR(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    const i = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      s = Tm();
    if (
      !(
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((o) => {
            const a = new Date(o.date).valueOf();
            return Date.now() - a <= SR;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var t;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const n = Tm(),
      { heartbeatsToSend: r, unsentEntries: i } = PR(
        this._heartbeatsCache.heartbeats
      ),
      s = G0(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      s
    );
  }
}
function Tm() {
  return new Date().toISOString().substring(0, 10);
}
function PR(e, t = _R) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), Cm(n) > t)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), Cm(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class TR {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return vj()
      ? yj()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await wR(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Pm(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Pm(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function Cm(e) {
  return G0(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function CR(e) {
  Ws(new $s("platform-logger", (t) => new Bj(t), "PRIVATE")),
    Ws(new $s("heartbeat", (t) => new ER(t), "PRIVATE")),
    gs(Lc, _m, e),
    gs(Lc, _m, "esm2017"),
    gs("fire-js", "");
}
CR("");
function e1(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function t1() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const kR = t1,
  n1 = new io("auth", "Firebase", t1());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fa = new X0("@firebase/auth");
function NR(e, ...t) {
  Fa.logLevel <= ue.WARN && Fa.warn(`Auth (${pf}): ${e}`, ...t);
}
function ta(e, ...t) {
  Fa.logLevel <= ue.ERROR && Fa.error(`Auth (${pf}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function km(e, ...t) {
  throw mf(e, ...t);
}
function r1(e, ...t) {
  return mf(e, ...t);
}
function i1(e, t, n) {
  const r = Object.assign(Object.assign({}, kR()), { [t]: n });
  return new io("auth", "Firebase", r).create(t, { appName: e.name });
}
function na(e) {
  return i1(
    e,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function mf(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return n1.create(e, ...t);
}
function Z(e, t, ...n) {
  if (!e) throw mf(t, ...n);
}
function vs(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (ta(t), new Error(t));
}
function Va(e, t) {
  e || vs(t);
}
function jR() {
  return Nm() === "http:" || Nm() === "https:";
}
function Nm() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function RR() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (jR() || mj() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function DR() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class so {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      Va(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = pj() || gj());
  }
  get() {
    return RR()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function AR(e, t) {
  Va(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s1 {
  static initialize(t, n, r) {
    (this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    vs(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    vs(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    vs(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const LR = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const IR = new so(3e4, 6e4);
function o1(e, t) {
  return e.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
    : t;
}
async function gl(e, t, n, r, i = {}) {
  return a1(e, i, async () => {
    let s = {},
      o = {};
    r && (t === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
    const a = Y0(Object.assign({ key: e.config.apiKey }, o)).slice(1),
      l = await e._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/json"),
      e.languageCode && (l["X-Firebase-Locale"] = e.languageCode),
      s1.fetch()(
        l1(e, e.config.apiHost, n, a),
        Object.assign(
          { method: t, headers: l, referrerPolicy: "no-referrer" },
          s
        )
      )
    );
  });
}
async function a1(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, LR), t);
  try {
    const i = new MR(e),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw Oo(e, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o)) return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message,
        [l, u] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Oo(e, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS") throw Oo(e, "email-already-in-use", o);
      if (l === "USER_DISABLED") throw Oo(e, "user-disabled", o);
      const f = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (u) throw i1(e, f, u);
      km(e, f);
    }
  } catch (i) {
    if (i instanceof Or) throw i;
    km(e, "network-request-failed", { message: String(i) });
  }
}
function l1(e, t, n, r) {
  const i = `${t}${n}?${r}`;
  return e.config.emulator ? AR(e.config, i) : `${e.config.apiScheme}://${i}`;
}
class MR {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(r1(this.auth, "network-request-failed")),
          IR.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Oo(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = r1(e, t, r);
  return (i.customData._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function bR(e, t) {
  return gl(e, "POST", "/v1/accounts:delete", t);
}
async function u1(e, t) {
  return gl(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ys(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function OR(e, t = !1) {
  const n = ml(e),
    r = await n.getIdToken(t),
    i = c1(r);
  Z(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: ys(yu(i.auth_time)),
    issuedAtTime: ys(yu(i.iat)),
    expirationTime: ys(yu(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function yu(e) {
  return Number(e) * 1e3;
}
function c1(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return ta("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = K0(n);
    return i
      ? JSON.parse(i)
      : (ta("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      ta(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function jm(e) {
  const t = c1(e);
  return (
    Z(t, "internal-error"),
    Z(typeof t.exp < "u", "internal-error"),
    Z(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ic(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof Or &&
        FR(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r)
    );
  }
}
function FR({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class VR {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mc {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = ys(this.lastLoginAt)),
      (this.creationTime = ys(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ba(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    i = await Ic(e, u1(n, { idToken: r }));
  Z(i == null ? void 0 : i.users.length, n, "internal-error");
  const s = i.users[0];
  e._notifyReloadListener(s);
  const o =
      !((t = s.providerUserInfo) === null || t === void 0) && t.length
        ? d1(s.providerUserInfo)
        : [],
    a = UR(e.providerData, o),
    l = e.isAnonymous,
    u = !(e.email && s.passwordHash) && !(a != null && a.length),
    f = l ? u : !1,
    d = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: a,
      metadata: new Mc(s.createdAt, s.lastLoginAt),
      isAnonymous: f,
    };
  Object.assign(e, d);
}
async function BR(e) {
  const t = ml(e);
  await Ba(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function UR(e, t) {
  return [
    ...e.filter((r) => !t.some((i) => i.providerId === r.providerId)),
    ...t,
  ];
}
function d1(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = e1(t, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function zR(e, t) {
  const n = await a1(e, {}, async () => {
    const r = Y0({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: i, apiKey: s } = e.config,
      o = l1(e, i, "/v1/token", `key=${s}`),
      a = await e._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/x-www-form-urlencoded"),
      s1.fetch()(o, { method: "POST", headers: a, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function $R(e, t) {
  return gl(e, "POST", "/v2/accounts:revokeToken", o1(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gi {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    Z(t.idToken, "internal-error"),
      Z(typeof t.idToken < "u", "internal-error"),
      Z(typeof t.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : jm(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  updateFromIdToken(t) {
    Z(t.length !== 0, "internal-error");
    const n = jm(t);
    this.updateTokensAndExpiration(t, null, n);
  }
  async getToken(t, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (Z(this.refreshToken, t, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(t, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await zR(t, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new gi();
    return (
      r &&
        (Z(typeof r == "string", "internal-error", { appName: t }),
        (o.refreshToken = r)),
      i &&
        (Z(typeof i == "string", "internal-error", { appName: t }),
        (o.accessToken = i)),
      s &&
        (Z(typeof s == "number", "internal-error", { appName: t }),
        (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new gi(), this.toJSON());
  }
  _performRefresh() {
    return vs("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Rn(e, t) {
  Z(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class Bn {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: i } = t,
      s = e1(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new VR(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new Mc(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await Ic(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      Z(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return OR(this, t);
  }
  reload() {
    return BR(this);
  }
  _assign(t) {
    this !== t &&
      (Z(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new Bn(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    Z(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await Ba(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (ns(this.auth.app)) return Promise.reject(na(this.auth));
    const t = await this.getIdToken();
    return (
      await Ic(this, bR(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, n) {
    var r, i, s, o, a, l, u, f;
    const d = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      h = (i = n.email) !== null && i !== void 0 ? i : void 0,
      v = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      y = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      x = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
      P = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
      m = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      p = (f = n.lastLoginAt) !== null && f !== void 0 ? f : void 0,
      {
        uid: g,
        emailVerified: E,
        isAnonymous: k,
        providerData: w,
        stsTokenManager: D,
      } = n;
    Z(g && D, t, "internal-error");
    const N = gi.fromJSON(this.name, D);
    Z(typeof g == "string", t, "internal-error"),
      Rn(d, t.name),
      Rn(h, t.name),
      Z(typeof E == "boolean", t, "internal-error"),
      Z(typeof k == "boolean", t, "internal-error"),
      Rn(v, t.name),
      Rn(y, t.name),
      Rn(x, t.name),
      Rn(P, t.name),
      Rn(m, t.name),
      Rn(p, t.name);
    const A = new Bn({
      uid: g,
      auth: t,
      email: h,
      emailVerified: E,
      displayName: d,
      isAnonymous: k,
      photoURL: y,
      phoneNumber: v,
      tenantId: x,
      stsTokenManager: N,
      createdAt: m,
      lastLoginAt: p,
    });
    return (
      w &&
        Array.isArray(w) &&
        (A.providerData = w.map((L) => Object.assign({}, L))),
      P && (A._redirectEventId = P),
      A
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const i = new gi();
    i.updateFromServerResponse(n);
    const s = new Bn({
      uid: n.localId,
      auth: t,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await Ba(s), s;
  }
  static async _fromGetAccountInfoResponse(t, n, r) {
    const i = n.users[0];
    Z(i.localId !== void 0, "internal-error");
    const s = i.providerUserInfo !== void 0 ? d1(i.providerUserInfo) : [],
      o = !(i.email && i.passwordHash) && !(s != null && s.length),
      a = new gi();
    a.updateFromIdToken(r);
    const l = new Bn({
        uid: i.localId,
        auth: t,
        stsTokenManager: a,
        isAnonymous: o,
      }),
      u = {
        uid: i.localId,
        displayName: i.displayName || null,
        photoURL: i.photoUrl || null,
        email: i.email || null,
        emailVerified: i.emailVerified || !1,
        phoneNumber: i.phoneNumber || null,
        tenantId: i.tenantId || null,
        providerData: s,
        metadata: new Mc(i.createdAt, i.lastLoginAt),
        isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length),
      };
    return Object.assign(l, u), l;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rm = new Map();
function Tr(e) {
  Va(e instanceof Function, "Expected a class definition");
  let t = Rm.get(e);
  return t
    ? (Va(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), Rm.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class f1 {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
f1.type = "NONE";
const Dm = f1;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xu(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class vi {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = xu(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = xu("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? Bn._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = "authUser") {
    if (!n.length) return new vi(Tr(Dm), t, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let s = i[0] || Tr(Dm);
    const o = xu(r, t.config.apiKey, t.name);
    let a = null;
    for (const u of n)
      try {
        const f = await u._get(o);
        if (f) {
          const d = Bn._fromJSON(t, f);
          u !== s && (a = d), (s = u);
          break;
        }
      } catch {}
    const l = i.filter((u) => u._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length
      ? new vi(s, t, r)
      : ((s = l[0]),
        a && (await s._set(o, a.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== s)
              try {
                await u._remove(o);
              } catch {}
          })
        ),
        new vi(s, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Am(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (KR(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (WR(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (XR(t)) return "Blackberry";
  if (QR(t)) return "Webos";
  if (HR(t)) return "Safari";
  if ((t.includes("chrome/") || GR(t)) && !t.includes("edge/")) return "Chrome";
  if (YR(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function WR(e = en()) {
  return /firefox\//i.test(e);
}
function HR(e = en()) {
  const t = e.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function GR(e = en()) {
  return /crios\//i.test(e);
}
function KR(e = en()) {
  return /iemobile/i.test(e);
}
function YR(e = en()) {
  return /android/i.test(e);
}
function XR(e = en()) {
  return /blackberry/i.test(e);
}
function QR(e = en()) {
  return /webos/i.test(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function h1(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = Am(en());
      break;
    case "Worker":
      n = `${Am(en())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${pf}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class JR {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (s) =>
      new Promise((o, a) => {
        try {
          const l = t(s);
          o(l);
        } catch (l) {
          a(l);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ZR(e, t = {}) {
  return gl(e, "GET", "/v2/passwordPolicy", o1(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qR = 6;
class eD {
  constructor(t) {
    var n, r, i, s;
    const o = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = o.minPasswordLength) !== null && n !== void 0 ? n : qR),
      o.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
      o.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          o.containsLowercaseCharacter),
      o.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          o.containsUppercaseCharacter),
      o.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          o.containsNumericCharacter),
      o.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          o.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = t.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join("")) !== null && i !== void 0
          ? i
          : ""),
      (this.forceUpgradeOnSignin =
        (s = t.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var n, r, i, s, o, a;
    const l = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, l),
      this.validatePasswordCharacterOptions(t, l),
      l.isValid &&
        (l.isValid =
          (n = l.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      l.isValid &&
        (l.isValid =
          (r = l.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      l.isValid &&
        (l.isValid =
          (i = l.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      l.isValid &&
        (l.isValid =
          (s = l.containsUppercaseLetter) !== null && s !== void 0 ? s : !0),
      l.isValid &&
        (l.isValid =
          (o = l.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
      l.isValid &&
        (l.isValid =
          (a = l.containsNonAlphanumericCharacter) !== null && a !== void 0
            ? a
            : !0),
      l
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r),
      i && (n.meetsMaxPasswordLength = t.length <= i);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < t.length; i++)
      (r = t.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = s));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tD {
  constructor(t, n, r, i) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Lm(this)),
      (this.idTokenSubscription = new Lm(this)),
      (this.beforeStateQueue = new JR(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = n1),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = Tr(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await vi.create(this, t)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUserFromIdToken(t) {
    try {
      const n = await u1(this, { idToken: t }),
        r = await Bn._fromGetAccountInfoResponse(this, n, t);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        n
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    if (ns(this.app)) {
      const o = this.app.settings.authIdToken;
      return o
        ? new Promise((a) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(o).then(a, a)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        a = i == null ? void 0 : i._redirectEventId,
        l = await this.tryRedirectSignIn(t);
      (!o || o === a) && l != null && l.user && ((i = l.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      Z(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await Ba(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = DR();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (ns(this.app)) return Promise.reject(na(this));
    const n = t ? ml(t) : null;
    return (
      n &&
        Z(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && Z(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return ns(this.app)
      ? Promise.reject(na(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return ns(this.app)
      ? Promise.reject(na(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(Tr(t));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await ZR(this),
      n = new eD(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new io("auth", "Firebase", t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  authStateReady() {
    return new Promise((t, n) => {
      if (this.currentUser) t();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), t();
        }, n);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: t,
          idToken: n,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await $R(this, r);
    }
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && Tr(t)) || this._popupRedirectResolver;
      Z(n, this, "argument-error"),
        (this.redirectPersistenceManager = await vi.create(
          this,
          [Tr(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == "function" ? n : n.next.bind(n);
    let o = !1;
    const a = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (Z(a, this, "internal-error"),
      a.then(() => {
        o || s(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const l = t.addObserver(n, r, i);
      return () => {
        (o = !0), l();
      };
    } else {
      const l = t.addObserver(n);
      return () => {
        (o = !0), l();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      Z(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = h1(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const i = await this._getAppCheckToken();
    return i && (n["X-Firebase-AppCheck"] = i), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null &&
        n.error &&
        NR(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function nD(e) {
  return ml(e);
}
class Lm {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = Sj((n) => (this.observer = n)));
  }
  get next() {
    return (
      Z(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
function rD(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(Tr);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(
      r,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
new so(3e4, 6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ new so(2e3, 1e4);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ new so(3e4, 6e4);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ new so(5e3, 15e3);
var Im = "@firebase/auth",
  Mm = "1.7.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iD {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    Z(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sD(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function oD(e) {
  Ws(
    new $s(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          i = t.getProvider("heartbeat"),
          s = t.getProvider("app-check-internal"),
          { apiKey: o, authDomain: a } = r.options;
        Z(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
        const l = {
            apiKey: o,
            authDomain: a,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: h1(e),
          },
          u = new tD(r, i, s, l);
        return rD(u, n), u;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    Ws(
      new $s(
        "auth-internal",
        (t) => {
          const n = nD(t.getProvider("auth").getImmediate());
          return ((r) => new iD(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    gs(Im, Mm, sD(e)),
    gs(Im, Mm, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const aD = 5 * 60;
hj("authIdTokenMaxAge");
oD("Browser");
const lD = "_wrapper_1sibh_1",
  uD = "_wrapper_child_1sibh_11",
  cD = "_wrapper_child_1_1sibh_25",
  wu = { wrapper: lD, wrapper_child: uD, wrapper_child_1: cD };
function dD() {
  return c.jsxs("div", {
    className: wu.wrapper,
    children: [
      c.jsx("div", {
        className: wu.wrapper_child,
        children: c.jsxs("div", {
          className: wu.wrapper_child_1,
          children: [
            c.jsx("p", { children: "Payment" }),
            c.jsxs("div", {
              children: [
                c.jsx(ne, { children: "Shree Krinshna Hosptital" }),
                "  / Payment",
              ],
            }),
          ],
        }),
      }),
      c.jsx("div", {}),
    ],
  });
}
const fD = "_mainWrapper_1iysi_1",
  hD = "_topWrapper_1iysi_5",
  pD = "_patientText_1iysi_9",
  mD = "_hospitalName_1iysi_14",
  gD = "_firstGrid_1iysi_24",
  vD = "_firstGridElem1_1iysi_28",
  yD = "_firstGridElem2_1iysi_29",
  xD = "_secondGrid_1iysi_51",
  wD = "_secondGridElem1_1iysi_56",
  _D = "_firstPart_1iysi_61",
  SD = "_secondPart_1iysi_64",
  ED = "_secondGridElem2_1iysi_71",
  PD = "_thirdGrid_1iysi_108",
  TD = "_fourthGrid_1iysi_127",
  CD = "_fourthGridElem1_1iysi_135",
  kD = "_fourthGridElem2_1iysi_136",
  ND = "_fifthGrid_1iysi_147",
  jD = "_sixthGrid_1iysi_161",
  Oe = {
    mainWrapper: fD,
    topWrapper: hD,
    patientText: pD,
    hospitalName: mD,
    firstGrid: gD,
    firstGridElem1: vD,
    firstGridElem2: yD,
    secondGrid: xD,
    secondGridElem1: wD,
    firstPart: _D,
    secondPart: SD,
    secondGridElem2: ED,
    thirdGrid: PD,
    fourthGrid: TD,
    fourthGridElem1: CD,
    fourthGridElem2: kD,
    fifthGrid: ND,
    sixthGrid: jD,
  };
function RD() {
  return c.jsxs("div", {
    className: Oe.mainWrapper,
    children: [
      c.jsxs("div", {
        className: Oe.topWrapper,
        children: [
          c.jsx("div", {
            className: Oe.patientText,
            children: "Admit Patient",
          }),
          c.jsx("div", { style: { flexGrow: 2 } }),
        ],
      }),
      c.jsxs("div", {
        className: Oe.hospitalName,
        children: [
          c.jsx(ne, { to: "/dashboard", children: "Shri Krishna Hospital  " }),
          "/  Admit Patient",
        ],
      }),
      c.jsxs("div", {
        className: Oe.firstGrid,
        children: [
          c.jsx("div", {
            className: Oe.firstGridElem1,
            children: c.jsx("input", {
              type: "text",
              defaultValue: "Patient Name: Deepak Sharma",
            }),
          }),
          c.jsxs("div", {
            className: Oe.firstGridElem2,
            children: [
              c.jsx("input", { type: "text", defaultValue: "ID No. 47" }),
              c.jsx("input", {
                type: "text",
                defaultValue: "Father Name: Tarun Sharma",
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: Oe.secondGrid,
        children: [
          c.jsxs("div", {
            className: Oe.secondGridElem1,
            children: [
              c.jsx("div", {
                className: Oe.firstPart,
                children: c.jsx("input", {
                  type: "text",
                  defaultValue: "Age: 32",
                }),
              }),
              c.jsxs("div", {
                className: Oe.secondPart,
                children: [
                  c.jsx("span", { children: "Sex :" }),
                  c.jsx("div", {
                    children: c.jsx("input", {
                      type: "radio",
                      value: "male",
                      name: "gender",
                    }),
                  }),
                  c.jsx("p", { children: "Male" }),
                  c.jsx("div", {
                    children: c.jsx("input", {
                      type: "radio",
                      value: "female",
                      name: "gender",
                    }),
                  }),
                  c.jsx("p", { children: "Female" }),
                ],
              }),
            ],
          }),
          c.jsx("div", {
            className: Oe.secondGridElem2,
            children: c.jsx("input", {
              type: "text",
              defaultValue: "Address: Dwarka, New Delhi",
            }),
          }),
        ],
      }),
      c.jsxs("div", {
        className: Oe.thirdGrid,
        children: [
          c.jsx("input", {
            type: "text",
            defaultValue: "Dr. Incharge: Anil Yadav",
          }),
          c.jsx("input", { type: "text", defaultValue: "DOA: 19 Jan 2020" }),
          c.jsx("input", { type: "text", placeholder: "Brought By" }),
          c.jsx("input", { type: "text", defaultValue: "Date: 19 Jan 2020" }),
        ],
      }),
      c.jsxs("div", {
        className: Oe.fourthGrid,
        children: [
          c.jsxs("div", {
            className: Oe.fourthGridElem1,
            children: [
              c.jsx("p", {
                children: c.jsx("b", { children: "Diagnosis Provisional" }),
              }),
              c.jsx("input", { type: "text" }),
            ],
          }),
          c.jsxs("div", {
            className: Oe.fourthGridElem2,
            children: [
              c.jsx("p", {
                children: c.jsx("b", { children: "CLINICAL NOTES" }),
              }),
              c.jsx("input", { type: "text" }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: Oe.fifthGrid,
        children: [
          c.jsx("p", { children: c.jsx("b", { children: "TREATMENT" }) }),
          c.jsx("div", { children: c.jsx("input", { type: "text" }) }),
        ],
      }),
      c.jsxs("div", {
        className: Oe.sixthGrid,
        children: [
          c.jsx(ne, {
            to: "..",
            children: c.jsx("button", { type: "button", children: "Cancel" }),
          }),
          c.jsx("button", { type: "submit", children: "Add Medicine" }),
        ],
      }),
    ],
  });
}
function DD() {
  return c.jsx("h1", { children: "Consent" });
}
function AD(e) {
  return at({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z",
        },
        child: [],
      },
    ],
  })(e);
}
const LD = "_wrapper_1rxho_1",
  ID = "_wrapper_child_1rxho_9",
  MD = "_wrapper_child_1_1rxho_16",
  bD = "_wrapper_child_2_1rxho_29",
  OD = "_wrapper_child_input_1rxho_49",
  FD = "_sameInp_1rxho_57",
  VD = "_diffInp_1rxho_72",
  It = {
    wrapper: LD,
    wrapper_child: ID,
    wrapper_child_1: MD,
    wrapper_child_2: bD,
    wrapper_child_input: OD,
    sameInp: FD,
    diffInp: VD,
  };
function BD() {
  return c.jsxs("div", {
    className: It.wrapper,
    children: [
      c.jsxs("div", {
        className: It.wrapper_child,
        children: [
          c.jsxs("div", {
            className: It.wrapper_child_1,
            children: [
              c.jsx("p", { children: "OPD" }),
              c.jsxs("div", {
                children: [
                  c.jsx(ne, { children: "Shree Krinshna Hosptital" }),
                  "  / OPD",
                ],
              }),
            ],
          }),
          c.jsx("div", {
            className: It.wrapper_child_2,
            children: c.jsxs("div", {
              children: [
                c.jsx("p", { children: "Ravi Yadav | 32 Yrs | Male" }),
                c.jsxs("div", {
                  children: [
                    "Previous Notes",
                    c.jsx(AD, { style: { color: "#007bff" } }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      c.jsxs("div", {
        className: It.wrapper_child,
        children: [
          c.jsxs("div", {
            className: It.wrapper_child_input,
            children: [
              c.jsx("p", { children: "OPD No." }),
              c.jsx("div", {
                children: c.jsx("input", {
                  type: "text",
                  className: It.diffInp,
                  placeholder: "Enter OPD no.",
                }),
              }),
            ],
          }),
          c.jsxs("div", {
            className: It.wrapper_child_input,
            children: [
              c.jsx("p", { children: "Attendance" }),
              c.jsx("div", {
                children: c.jsx("input", {
                  type: "text",
                  value: "20-Jan-2020",
                  className: It.sameInp,
                }),
              }),
            ],
          }),
          c.jsxs("div", {
            className: It.wrapper_child_input,
            children: [
              c.jsx("p", { children: "Last Visit Date" }),
              c.jsx("div", {
                children: c.jsx("input", {
                  type: "text",
                  value: "20-Jan-2020",
                  className: It.sameInp,
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const UD = "_opdWrapper_xnkna_1",
  zD = "_opdMainWrapper_xnkna_6",
  $D = "_secondWrapper_xnkna_12",
  WD = "_firstWrapper_xnkna_39",
  HD = "_thirdWrapper_xnkna_40",
  GD = "_inputFirst_xnkna_71",
  KD = "_inputSame_xnkna_79",
  YD = "_inputFlex_xnkna_87",
  XD = "_buttonSection_xnkna_92",
  Kt = {
    opdWrapper: UD,
    opdMainWrapper: zD,
    secondWrapper: $D,
    firstWrapper: WD,
    thirdWrapper: HD,
    inputFirst: GD,
    inputSame: KD,
    inputFlex: YD,
    buttonSection: XD,
  },
  QD = [
    "Inj. TT",
    "Inj. Voveran",
    "Inj. Contramal",
    "X-Ray",
    "Check X-Ray",
    "ASD",
    "Stitching",
    "CLW Repaired",
    "Splintage",
    "WD & WT",
    "K wire",
    "POP Slab",
    "ASD",
    "Stitching",
    "Splintage",
    "CLW Repaired",
    "WD & WT",
    "K wire",
    "POP Slab",
  ],
  JD = [
    "Hard bed/ no pillow",
    "Q.C. Exercises",
    "Sponge under heel",
    "Zopel DSR",
    "Meftal Forte",
    "Zacy",
    "Prosulide AS",
    "Dol SP",
    "Enbidase-AP",
    "Refzil-O",
    "Cifran",
    "Rapicef CV",
    "Cefakind-CV",
    "Cefuroxime",
    "Cefadroxyl",
    "Farobact",
    "Linezolid",
    "Lizokef",
    "Accotac-PS",
  ];
function ZD() {
  return c.jsxs("div", {
    className: Kt.opdWrapper,
    children: [
      c.jsx(BD, {}),
      c.jsxs("div", {
        className: Kt.opdMainWrapper,
        children: [
          c.jsxs("div", {
            className: Kt.firstWrapper,
            children: [
              c.jsx("p", { children: "Notes" }),
              c.jsx("div", {
                children: c.jsx("ul", {
                  children: QD.map((e) =>
                    c.jsxs(
                      "li",
                      {
                        children: [
                          c.jsx("input", { type: "checkbox" }),
                          " ",
                          e,
                        ],
                      },
                      e
                    )
                  ),
                }),
              }),
            ],
          }),
          c.jsxs("div", {
            className: Kt.secondWrapper,
            children: [
              c.jsx("p", { children: "Diagnosis" }),
              c.jsxs("div", {
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsxs("div", {
                        children: [
                          c.jsx("input", { type: "checkbox" }),
                          " M  ",
                          c.jsx("input", { type: "checkbox" }),
                          " A  ",
                          c.jsx("input", { type: "checkbox" }),
                          " E  ",
                        ],
                      }),
                      c.jsx("div", {
                        children: c.jsxs("select", {
                          children: [
                            c.jsx("option", { children: "Day" }),
                            c.jsx("option", { children: "1" }),
                            c.jsx("option", { children: "2" }),
                            c.jsx("option", { children: "3" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: Kt.inputFlex,
                    children: [
                      c.jsx("div", {
                        children: c.jsx("input", {
                          type: "text",
                          placeholder: "Diagnosis",
                          className: Kt.inputFirst,
                        }),
                      }),
                      c.jsx("div", {
                        children: c.jsx("input", {
                          type: "text",
                          placeholder: "Notes",
                          className: Kt.inputSame,
                        }),
                      }),
                      c.jsx("div", {
                        children: c.jsx("input", {
                          type: "text",
                          placeholder: "Treatment",
                          className: Kt.inputSame,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: Kt.thirdWrapper,
            children: [
              c.jsx("p", { children: "Treatment" }),
              c.jsx("div", {
                children: c.jsx("ul", {
                  children: JD.map((e) =>
                    c.jsxs(
                      "li",
                      {
                        children: [
                          c.jsx("input", { type: "checkbox" }),
                          " ",
                          e,
                        ],
                      },
                      e
                    )
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: Kt.buttonSection,
        children: [
          c.jsx("p", {
            children: c.jsx(ne, {
              to: "..",
              children: c.jsx("button", { children: "Cancel" }),
            }),
          }),
          c.jsx("p", {
            children: c.jsx("button", {
              style: { backgroundColor: "#2ea5c9" },
              children: "Show Notes",
            }),
          }),
          c.jsx("p", {
            children: c.jsx("button", {
              style: { backgroundColor: "#2ea5c9" },
              children: "Enter Note",
            }),
          }),
          c.jsx("p", {
            children: c.jsx("button", {
              style: { backgroundColor: "#007bff" },
              children: "Ok",
            }),
          }),
        ],
      }),
    ],
  });
}
function qD() {
  const e = cy("patientData");
  return c.jsxs("div", {
    className: Ae.mainWrapper,
    children: [
      c.jsx("div", {
        children: c.jsx("div", {
          className: Ae.patientText,
          children: "Edit Patient",
        }),
      }),
      c.jsxs("div", {
        className: Ae.hospitalName,
        children: [
          c.jsx(ne, { to: "/dashboard", children: "Shri Krishna Hospital  " }),
          "/  Edit Patient",
        ],
      }),
      c.jsxs(ol, {
        method: "post",
        children: [
          c.jsxs("div", {
            className: Ae.firstGrid,
            children: [
              c.jsx("input", {
                type: "text",
                name: "firstName",
                placeholder: "First Name*",
                defaultValue: e.fname,
                required: !0,
              }),
              c.jsx("input", {
                type: "text",
                name: "secondName",
                nameplaceholder: "Last Name*",
                defaultValue: e.lname,
                required: !0,
              }),
            ],
          }),
          c.jsxs("div", {
            className: Ae.secondGrid,
            children: [
              c.jsx("input", {
                type: "number",
                name: "age",
                defaultValue: e.age,
                className: Ae.firstGridInp,
                required: !0,
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("input", {
                    type: "radio",
                    name: "gender",
                    id: "male",
                    value: "male",
                  }),
                  c.jsx("label", { htmlFor: "male", children: " Male " }),
                  c.jsx("input", {
                    type: "radio",
                    name: "gender",
                    id: "female",
                    value: "female",
                  }),
                  c.jsx("label", { htmlFor: "female", children: " Female " }),
                ],
              }),
              c.jsx("input", {
                type: "text",
                name: "address",
                defaultValue: e.address,
                required: !0,
              }),
            ],
          }),
          c.jsxs("div", {
            className: Ae.thirdGrid,
            children: [
              c.jsx("input", {
                type: "text",
                name: "city",
                placeholder: "City",
              }),
              c.jsx("input", {
                type: "number",
                name: "telephone",
                placeholder: "Telephone",
                minLength: "10",
              }),
              c.jsx("input", {
                type: "text",
                name: "nextkin",
                placeholder: "Nextkin",
              }),
              c.jsxs("select", {
                name: "bloodGroup",
                children: [
                  c.jsx("option", { children: "A+" }),
                  c.jsx("option", { children: "A-" }),
                  c.jsx("option", { children: "B+" }),
                  c.jsx("option", { children: "B-" }),
                  c.jsx("option", { children: "o+" }),
                  c.jsx("option", { children: "o-" }),
                  c.jsx("option", { children: "AB+" }),
                  c.jsx("option", { children: "AB-" }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: Ae.fourthGrid,
            children: [
              c.jsx("input", {
                type: "text",
                name: "fatherName",
                placeholder: "Father Name",
              }),
              c.jsx("input", {
                type: "text",
                name: "motherName",
                placeholder: "Mother Name",
              }),
              c.jsx("input", {
                type: "text",
                name: "taxNumID",
                placeholder: "Tax Number ID",
              }),
            ],
          }),
          c.jsxs("div", {
            className: Ae.fifthGrid,
            children: [
              c.jsx("div", { children: "Note" }),
              c.jsx("div", {
                children: c.jsx("textarea", { name: "patNote" }),
              }),
            ],
          }),
          c.jsxs("div", {
            className: Ae.sixthGrid,
            children: [
              c.jsx(ne, {
                to: "/dashboard",
                children: c.jsx("button", {
                  type: "button",
                  children: "Cancel",
                }),
              }),
              c.jsx("button", { type: "submit", children: "Submit" }),
            ],
          }),
        ],
      }),
    ],
  });
}
async function eA({ request: e }) {
  const t = await e.formData(),
    n = {
      firstName: t.get("firstName"),
      lastName: t.get("secondName"),
      age: t.get("age"),
      patSex: t.get("gender"),
      address: t.get("address"),
      city: t.get("city"),
      telephone: t.get("telephone"),
      nextKin: t.get("nextkin"),
      bloodType: t.get("bloodGroup"),
      fatherName: t.get("fatherName"),
      motherName: t.get("motherName"),
      taxCode: t.get("taxNumID"),
      patNote: t.get("patNote"),
      timeStamp: new Date().toISOString(),
    };
  console.log(n);
  try {
    const r = await fetch(`${sr}/Patient/registerPatient`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n),
    });
    return console.log(r), Sn("/dashboard");
  } catch (r) {
    console.log(r);
  }
}
async function sn() {
  return localStorage.getItem("token") ? null : Sn("/");
}
const tA = AS([
  { path: "", element: c.jsx(X2, {}), action: Q2 },
  {
    path: "dashboard",
    element: c.jsx(zk, {}),
    id: "patientData",
    loader: $k,
    children: [
      { path: "", element: c.jsx(sN, {}) },
      {
        path: "/dashboard/add-patient",
        element: c.jsx(mN, {}),
        action: gN,
        loader: sn,
      },
      {
        path: "/dashboard/edit-patient",
        element: c.jsx(qD, {}),
        action: eA,
        loader: sn,
      },
      { path: "medicine", element: c.jsx(SN, {}), loader: EN },
      {
        path: "/dashboard/add-medicine",
        element: c.jsx(LN, {}),
        action: IN,
        loader: sn,
      },
      { path: "ipd-register", element: c.jsx(VN, {}), loader: sn },
      { path: "payment-register", element: c.jsx(QN, {}), loader: JN },
      { path: "reprint", element: c.jsx(ij, {}), loader: sn },
      { path: "admit", element: c.jsx(RD, {}), loader: sn },
      { path: "OPD", element: c.jsx(ZD, {}), loader: sn },
      { path: "make-payment", element: c.jsx(dD, {}), loader: sn },
      { path: "consent", element: c.jsx(DD, {}), loader: sn },
    ],
  },
]);
function nA() {
  return c.jsx(BS, { router: tA });
}
_u.createRoot(document.getElementById("root")).render(
  c.jsx(dn.StrictMode, { children: c.jsx(nA, {}) })
);
