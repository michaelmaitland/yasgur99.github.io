(this["webpackJsonphover-site"] = this["webpackJsonphover-site"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".app {\n  background-color: #1d1f2f;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n}\n\n.switch-wrapper {\n  position: relative;\n  width: 75%;\n  min-height: 80vh;\n  margin-bottom: 128px;\n  /* height: 100%; */\n  display: flex;\n  flex: 1 1;\n}\n\n.switch-wrapper > div {\n  position: absolute;\n  display: flex;\n  flex: 1 1;\n  width: 100%;\n  height: 100%;\n}\n\n.phone {\n  /* height: \"20%\"; */\n  aspect-ratio: 9/19.5;\n  /* -webkit-backface-visibility: hidden; */\n  /* background-color: purple; */\n}\n\n.perspective {\n  perspective: 700px;\n  /* perspective-origin: center; */\n  /* transition: all 1s 1s; */\n}\n\n.postPreviewWarpper {\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.leftPhoneAnim {\n  /* opacity: 0.9; */\n  display: flex;\n  transform-style: preserve-3d;\n  transition-duration: 0.5s;\n  margin-top: -15%;\n  transform: rotateX(15deg) rotateY(-5deg) rotateZ(10deg);\n}\n\n.leftPhoneAnim:hover {\n  opacity: 1;\n  transform: rotateX(0deg) rotateY(-3deg) rotateZ(4deg) translateY(-24px);\n}\n\n.rightPhoneAnim {\n  /* opacity: 0.9; */\n  display: flex;\n  transform-style: preserve-3d;\n  transition-duration: 0.5s;\n  margin-top: 10%;\n  transform: rotateX(15deg) rotateY(5deg) rotateZ(-10deg);\n}\n\n.rightPhoneAnim:hover {\n  opacity: 1;\n  transform: rotateX(0deg) rotateY(3deg) rotateZ(-4deg) translateY(-24px);\n}\n\n.astroAnim {\n  /* opacity: 0.9; */\n  transition-duration: 0.5s;\n  transform: scale(1);\n}\n\n.astroAnim:hover {\n  transform: scale(1.05);\n}\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,SAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,yCAAyC;EACzC,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,yBAAiB;UAAjB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;EACzB,gBAAgB;EAChB,uDAAuD;AACzD;;AAEA;EACE,UAAU;EACV,uEAAuE;AACzE;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;EACzB,eAAe;EACf,uDAAuD;AACzD;;AAEA;EACE,UAAU;EACV,uEAAuE;AACzE;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":[".app {\n  background-color: #1d1f2f;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n}\n\n.switch-wrapper {\n  position: relative;\n  width: 75%;\n  min-height: 80vh;\n  margin-bottom: 128px;\n  /* height: 100%; */\n  display: flex;\n  flex: 1;\n}\n\n.switch-wrapper > div {\n  position: absolute;\n  display: flex;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n\n.phone {\n  /* height: \"20%\"; */\n  aspect-ratio: 9/19.5;\n  /* -webkit-backface-visibility: hidden; */\n  /* background-color: purple; */\n}\n\n.perspective {\n  perspective: 700px;\n  /* perspective-origin: center; */\n  /* transition: all 1s 1s; */\n}\n\n.postPreviewWarpper {\n  position: relative;\n  user-select: none;\n}\n\n.leftPhoneAnim {\n  /* opacity: 0.9; */\n  display: flex;\n  transform-style: preserve-3d;\n  transition-duration: 0.5s;\n  margin-top: -15%;\n  transform: rotateX(15deg) rotateY(-5deg) rotateZ(10deg);\n}\n\n.leftPhoneAnim:hover {\n  opacity: 1;\n  transform: rotateX(0deg) rotateY(-3deg) rotateZ(4deg) translateY(-24px);\n}\n\n.rightPhoneAnim {\n  /* opacity: 0.9; */\n  display: flex;\n  transform-style: preserve-3d;\n  transition-duration: 0.5s;\n  margin-top: 10%;\n  transform: rotateX(15deg) rotateY(5deg) rotateZ(-10deg);\n}\n\n.rightPhoneAnim:hover {\n  opacity: 1;\n  transform: rotateX(0deg) rotateY(3deg) rotateZ(-4deg) translateY(-24px);\n}\n\n.astroAnim {\n  /* opacity: 0.9; */\n  transition-duration: 0.5s;\n  transform: scale(1);\n}\n\n.astroAnim:hover {\n  transform: scale(1.05);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  /* font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif; */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;iBAEe;EACf,mCAAmC;EACnC,kCAAkC;AACpC","sourcesContent":["body {\n  margin: 0;\n  /* font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif; */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-transition */ "./node_modules/react-router-transition/lib/index.js");
/* harmony import */ var _components_view_navigation_TopNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/view/navigation/TopNavigation */ "./src/components/view/navigation/TopNavigation.tsx");
/* harmony import */ var _components_view_navigation_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/view/navigation/Footer */ "./src/components/view/navigation/Footer.tsx");
/* harmony import */ var _routes_home_Download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/home/Download */ "./src/routes/home/Download.tsx");
/* harmony import */ var _routes_features_Features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/features/Features */ "./src/routes/features/Features.tsx");
/* harmony import */ var _routes_about_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/about/About */ "./src/routes/about/About.tsx");
/* harmony import */ var _routes_support_Support__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/support/Support */ "./src/routes/support/Support.tsx");
/* harmony import */ var _routes_legal_Legal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/legal/Legal */ "./src/routes/legal/Legal.tsx");
/* harmony import */ var _routes_legal_TOS__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/legal/TOS */ "./src/routes/legal/TOS.tsx");
/* harmony import */ var _routes_legal_PrivacyPolicy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/legal/PrivacyPolicy */ "./src/routes/legal/PrivacyPolicy.tsx");
/* harmony import */ var _routes_legal_DataPolicy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/legal/DataPolicy */ "./src/routes/legal/DataPolicy.tsx");
/* harmony import */ var _routes_app_post_PostPreview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/app/post/PostPreview */ "./src/routes/app/post/PostPreview.tsx");
/* harmony import */ var _routes_home_NotFound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/home/NotFound */ "./src/routes/home/NotFound.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/App.tsx";


















function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("div", {
      className: "app",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_view_navigation_TopNavigation__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(AnimatedApp, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_view_navigation_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_c = App;

function mapTransitionStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translate(0px, ${styles.translate}px)`
  };
}

function AnimatedApp() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("div", {
    style: styles.body,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_transition__WEBPACK_IMPORTED_MODULE_3__["AnimatedSwitch"], {
      atEnter: {
        opacity: 0,
        translate: -32
      },
      atLeave: {
        opacity: 0,
        translate: 32
      },
      atActive: {
        opacity: 1,
        translate: 0
      },
      mapStyles: mapTransitionStyles,
      className: "switch-wrapper",
      runOnMount: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/",
        component: _routes_home_Download__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/features",
        component: _routes_features_Features__WEBPACK_IMPORTED_MODULE_7__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/about",
        component: _routes_about_About__WEBPACK_IMPORTED_MODULE_8__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/support",
        component: _routes_support_Support__WEBPACK_IMPORTED_MODULE_9__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/legal",
        component: _routes_legal_Legal__WEBPACK_IMPORTED_MODULE_10__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/TOS",
        component: _routes_legal_TOS__WEBPACK_IMPORTED_MODULE_11__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/privacypolicy",
        component: _routes_legal_PrivacyPolicy__WEBPACK_IMPORTED_MODULE_12__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/datapolicy",
        component: _routes_legal_DataPolicy__WEBPACK_IMPORTED_MODULE_13__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: `/app/posts/:postId`,
        component: _routes_app_post_PostPreview__WEBPACK_IMPORTED_MODULE_14__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        component: _routes_home_NotFound__WEBPACK_IMPORTED_MODULE_15__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

_c2 = AnimatedApp;
const styles = {
  body: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    // height: "1vh",
    // height: "100%",
    marginTop: 128,
    marginBottom: 32
  },
  particles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "App");
__webpack_require__.$Refresh$.register(_c2, "AnimatedApp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/api/constants.ts":
/*!******************************!*\
  !*** ./src/api/constants.ts ***!
  \******************************/
/*! exports provided: API_URL, POST_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_API", function() { return POST_API; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// export const API_URL = 'https://devapi.mer.gg';
const API_URL = "https://api.mer.gg";
const POST_API = `${API_URL}/post`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/api/posts.ts":
/*!**************************!*\
  !*** ./src/api/posts.ts ***!
  \**************************/
/*! exports provided: getPostById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostById", function() { return getPostById; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/api/constants.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const getPostById = async (postId) => {
  const post = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`${_constants__WEBPACK_IMPORTED_MODULE_1__["POST_API"]}/public/${postId}`).then(res => res.data).catch(e => console.error(e));
  return post;
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/icons/ArrowBack.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/ArrowBack.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ArrowBack.541dfb49.svg");

/***/ }),

/***/ "./src/assets/icons/AstroFull.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/AstroFull.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/AstroFull.7317a742.svg");

/***/ }),

/***/ "./src/assets/icons/AstroHead.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/AstroHead.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/AstroHead.7ec26377.svg");

/***/ }),

/***/ "./src/assets/icons/DiscordSocial.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/DiscordSocial.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/DiscordSocial.47547456.svg");

/***/ }),

/***/ "./src/assets/icons/InstagramSocial.svg":
/*!**********************************************!*\
  !*** ./src/assets/icons/InstagramSocial.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/InstagramSocial.1fb1147b.svg");

/***/ }),

/***/ "./src/assets/icons/Paper.svg":
/*!************************************!*\
  !*** ./src/assets/icons/Paper.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Paper.bb7705a2.svg");

/***/ }),

/***/ "./src/assets/icons/ThickCommentGray.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/ThickCommentGray.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ThickCommentGray.c5d36a0b.svg");

/***/ }),

/***/ "./src/assets/icons/ThickGGUnfillGray.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/ThickGGUnfillGray.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ThickGGUnfillGray.db457a41.svg");

/***/ }),

/***/ "./src/assets/icons/ThickLikeGray.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/ThickLikeGray.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ThickLikeGray.b5f710cb.svg");

/***/ }),

/***/ "./src/assets/icons/ThickShareGray.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/ThickShareGray.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ThickShareGray.d0ea09c7.svg");

/***/ }),

/***/ "./src/assets/icons/TikTokSocial.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/TikTokSocial.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/TikTokSocial.8d81510a.svg");

/***/ }),

/***/ "./src/assets/icons/TwitchSocial.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/TwitchSocial.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/TwitchSocial.b281784a.svg");

/***/ }),

/***/ "./src/assets/icons/TwitterSocial.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/TwitterSocial.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/TwitterSocial.dfc849b8.svg");

/***/ }),

/***/ "./src/assets/icons/index.ts":
/*!***********************************!*\
  !*** ./src/assets/icons/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _DiscordSocial_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscordSocial.svg */ "./src/assets/icons/DiscordSocial.svg");
/* harmony import */ var _TwitterSocial_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwitterSocial.svg */ "./src/assets/icons/TwitterSocial.svg");
/* harmony import */ var _TwitchSocial_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwitchSocial.svg */ "./src/assets/icons/TwitchSocial.svg");
/* harmony import */ var _InstagramSocial_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InstagramSocial.svg */ "./src/assets/icons/InstagramSocial.svg");
/* harmony import */ var _TikTokSocial_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TikTokSocial.svg */ "./src/assets/icons/TikTokSocial.svg");
/* harmony import */ var _ArrowBack_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArrowBack.svg */ "./src/assets/icons/ArrowBack.svg");
/* harmony import */ var _ThickCommentGray_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThickCommentGray.svg */ "./src/assets/icons/ThickCommentGray.svg");
/* harmony import */ var _ThickGGUnfillGray_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThickGGUnfillGray.svg */ "./src/assets/icons/ThickGGUnfillGray.svg");
/* harmony import */ var _ThickLikeGray_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThickLikeGray.svg */ "./src/assets/icons/ThickLikeGray.svg");
/* harmony import */ var _ThickShareGray_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ThickShareGray.svg */ "./src/assets/icons/ThickShareGray.svg");
/* harmony import */ var _Paper_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Paper.svg */ "./src/assets/icons/Paper.svg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);












const icons = {
  DiscordSocial: _DiscordSocial_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  TwitterSocial: _TwitterSocial_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  TwitchSocial: _TwitchSocial_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  InstagramSocial: _InstagramSocial_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  TikTokSocial: _TikTokSocial_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  BackArrow: _ArrowBack_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  ThickShareGray: _ThickShareGray_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
  ThickCommentGray: _ThickCommentGray_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
  ThickGGUnfillGray: _ThickGGUnfillGray_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
  ThickLikeGray: _ThickLikeGray_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
  PaperFiller: _Paper_svg__WEBPACK_IMPORTED_MODULE_10__["default"]
};

const getIconByName = iconName => icons[iconName];

/* harmony default export */ __webpack_exports__["default"] = (getIconByName);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/images/LandingPhone.png":
/*!********************************************!*\
  !*** ./src/assets/images/LandingPhone.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/LandingPhone.ae640b8d.png");

/***/ }),

/***/ "./src/assets/images/SignUpPhone.png":
/*!*******************************************!*\
  !*** ./src/assets/images/SignUpPhone.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/SignUpPhone.66a89544.png");

/***/ }),

/***/ "./src/components/button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/button/Button.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Styles */ "./src/constants/Styles.ts");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general */ "./src/components/general/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/button/Button.tsx",
    _s = __webpack_require__.$Refresh$.signature();







const Button = ({
  containerStyles,
  isLoading,
  onClick,
  buttonText,
  disabled,
  outline,
  buttonStyles,
  buttonHoverStyles,
  buttonTextProps
}) => {
  _s();

  const [isHovering, setIsHovering] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isActive, setIsActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
    setIsActive(false);
  };

  const onMouseDown = () => {
    setIsActive(true);
  };

  const onMouseUp = () => {
    setIsActive(false);
  };

  const buttonStyle = Object.assign({}, styles.button, outline && styles.outline, isHovering && (outline ? styles.hoverOutline : styles.hover), isActive && (outline ? styles.activeOutline : styles.active), isLoading && styles.buttonLoading, disabled && styles.disabled, buttonStyles, isHovering && buttonHoverStyles);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    style: Object.assign({}, styles.container, containerStyles),
    children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: buttonStyle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onClick: onClick,
      style: buttonStyle,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        weight: "medium",
        ...buttonTextProps,
        children: buttonText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined);
};

_s(Button, "l6iG5IkR9I0LmiXSes3UhQ0cZ9g=");

_c = Button;
const styles = {
  container: {
    marginBottom: 8,
    marginTop: 8,
    width: "100%"
  },
  button: {
    height: 36,
    backgroundColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue,
    borderWidth: 0,
    borderStyle: "solid",
    borderRadius: 20,
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    paddingLeft: 32,
    paddingRight: 32,
    display: "flex",
    outline: "none",
    cursor: "pointer",
    ..._constants_Styles__WEBPACK_IMPORTED_MODULE_1__["FontStyle"].medium
  },
  buttonLoading: {
    paddingLeft: 0,
    paddingRight: 0,
    cursor: "default"
  },
  hover: {
    backgroundColor: `${_constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue}d8`
  },
  active: {
    backgroundColor: `${_constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue}88`
  },
  loading: {
    paddingTop: 2
  },
  disabled: {
    cursor: "default",
    backgroundColor: `${_constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue}68`
  },
  outline: {
    borderWidth: 2,
    borderColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].lightBlue,
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
    backgroundColor: "transparent"
  },
  hoverOutline: {
    borderColor: `${_constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].lightBlue}b8` // color: `${colors.white}b8`,

  },
  activeOutline: {
    borderColor: `${_constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].lightBlue}48`,
    color: `${_constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white}48`
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c;

__webpack_require__.$Refresh$.register(_c, "Button");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/button/index.ts":
/*!****************************************!*\
  !*** ./src/components/button/index.ts ***!
  \****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/components/button/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/general/Icon.tsx":
/*!*****************************************!*\
  !*** ./src/components/general/Icon.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/general/Icon.tsx";




const Icon = props => {
  const {
    icon
  } = props;
  const iconStyle = Object.assign({}, styles.icon, props.style);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
    style: iconStyle,
    src: Object(_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"])(icon)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, undefined);
};

_c = Icon;
const styles = {
  icon: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

var _c;

__webpack_require__.$Refresh$.register(_c, "Icon");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/general/Text.tsx":
/*!*****************************************!*\
  !*** ./src/components/general/Text.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Styles */ "./src/constants/Styles.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/general/Text.tsx";




const Text = props => {
  const {
    fontSize,
    color,
    weight,
    verticalPadding,
    horizontalPadding,
    letterSpacing,
    textWrap,
    lineHeight
  } = props;
  const textStyle = Object.assign({}, styles.text, fontSize && {
    fontSize: fontSize
  }, color && {
    color: color
  }, weight && { ..._constants_Styles__WEBPACK_IMPORTED_MODULE_1__["FontStyle"][weight]
  }, verticalPadding && { ...styles.verticalPadding
  }, horizontalPadding && { ...styles.horizontalPadding
  }, letterSpacing && {
    letterSpacing: letterSpacing
  }, textWrap && {
    whiteSpace: "wrap"
  }, lineHeight && {
    lineHeight: lineHeight
  }, props.style);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
    style: textStyle,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 10
  }, undefined);
};

_c = Text;
const styles = {
  text: {
    margin: 0,
    fontSize: 14,
    whiteSpace: "nowrap",
    // color: colors.white,
    ..._constants_Styles__WEBPACK_IMPORTED_MODULE_1__["FontStyle"].regular
  },
  verticalPadding: {
    paddingTop: 8,
    paddingBottom: 8
  },
  horizontalPadding: {
    paddingLeft: 8,
    paddingRight: 8
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

var _c;

__webpack_require__.$Refresh$.register(_c, "Text");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/general/TouchableDiv.tsx":
/*!*************************************************!*\
  !*** ./src/components/general/TouchableDiv.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/general/TouchableDiv.tsx",
    _s = __webpack_require__.$Refresh$.signature();




const TouchableDiv = props => {
  _s();

  const {
    onPress
  } = props;
  const [isHovering, setIsHovering] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isActive, setIsActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
    setIsActive(false);
  };

  const onMouseDown = () => {
    if (onPress) onPress();
    setIsActive(true);
  };

  const onMouseUp = () => {
    setIsActive(false);
  };

  const divStyle = Object.assign({}, styles.touchableDiv, isHovering ? styles.hover : null, isActive ? styles.active : null, props.style);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    style: divStyle,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, undefined);
};

_s(TouchableDiv, "l6iG5IkR9I0LmiXSes3UhQ0cZ9g=");

_c = TouchableDiv;
const styles = {
  touchableDiv: {
    cursor: "pointer"
  },
  hover: {
    opacity: 0.8
  },
  active: {
    opacity: 0.4
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TouchableDiv);

var _c;

__webpack_require__.$Refresh$.register(_c, "TouchableDiv");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/general/index.ts":
/*!*****************************************!*\
  !*** ./src/components/general/index.ts ***!
  \*****************************************/
/*! exports provided: Text, Button, Icon, TouchableDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ "./src/components/general/Text.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./src/components/general/Icon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TouchableDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TouchableDiv */ "./src/components/general/TouchableDiv.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TouchableDiv", function() { return _TouchableDiv__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./src/components/button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_3__["Button"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);







const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/EmptyFiller.tsx":
/*!*********************************************!*\
  !*** ./src/components/view/EmptyFiller.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general */ "./src/components/general/index.ts");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/EmptyFiller.tsx";



 //@ts-ignore
// import Video from "../../../public/HoverAd.mp4";



const EmptyFiller = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    style: styles.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      icon: "PaperFiller",
      style: styles.paper
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: styles.info,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontSize: 36,
        weight: "bold",
        color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
        children: props.error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontSize: 16,
        color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].gray2,
        style: styles.description,
        textWrap: true,
        children: props.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

_c = EmptyFiller;
const styles = {
  paper: {
    width: 48
  },
  container: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center" // flexDirection: "column",

  },
  info: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: 24,
    // alignItems: "center",
    flexDirection: "column"
  },
  description: {
    marginTop: 8
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EmptyFiller);

var _c;

__webpack_require__.$Refresh$.register(_c, "EmptyFiller");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/Phone.tsx":
/*!***************************************!*\
  !*** ./src/components/view/Phone.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/Phone.tsx";


 //@ts-ignore
// import Video from "../../../public/HoverAd.mp4";



const Phone = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    style: Object.assign({}, styles.outerContainer, props.containerStyles),
    className: props.animClassName,
    onMouseDown: props.onPress,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      style: styles.phoneContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: styles.phone,
        className: "phone",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          style: styles.phoneTop
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          style: styles.phoneScreen,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            style: styles.phoneDisplay,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
              src: props.image,
              style: styles.img
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            style: styles.notch,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              style: styles.notchSpace
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              style: styles.speaker
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              style: styles.camera
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

_c = Phone;
const styles = {
  phoneDisplay: {
    display: "flex"
  },
  phoneScreen: {
    backgroundColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_1__["default"].navy2,
    width: "100%",
    height: "100%",
    borderRadius: 24,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center"
  },
  notch: {
    width: "40%",
    backgroundColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_1__["default"].lightBlue,
    height: "4%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    position: "absolute",
    zIndex: 100
  },
  phoneTop: {
    position: "absolute",
    display: "flex",
    boxShadow: `inset 0px 0px 0px 10px #0CD3FF`,
    width: "100%",
    height: "100%",
    borderRadius: 32,
    zIndex: 100
  },
  outerContainer: {
    // backgroundColor: "purple",
    justifyContent: "center"
  },
  phone: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 32,
    marginLeft: 8
  },
  img: {
    width: "100%",
    maxWidth: "100%" // maxHeight: "100%",

  },
  notchSpace: {
    width: 6,
    height: 6,
    marginRight: 4
  },
  camera: {
    width: 6,
    height: 6,
    backgroundColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_1__["default"].navy2,
    borderRadius: 8,
    marginLeft: 4
  },
  speaker: {
    width: "25%",
    height: 4,
    borderRadius: 4,
    backgroundColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_1__["default"].navy2
  },
  phoneContainer: {
    width: "40%",
    minWidth: 192,
    transformStyle: "preserve-3d",
    // backgroundColor: "red",
    alignSelf: "center"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Phone);

var _c;

__webpack_require__.$Refresh$.register(_c, "Phone");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/PostPreview.tsx":
/*!*********************************************!*\
  !*** ./src/components/view/PostPreview.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general */ "./src/components/general/index.ts");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StyledPostCaption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledPostCaption */ "./src/components/view/StyledPostCaption.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/PostPreview.tsx";





 // @ts-ignore



const PostPreview = props => {
  const {
    user,
    game,
    caption,
    likeCount,
    gglikeCount,
    commentCount,
    originalMediaURL
  } = props.post;
  console.log(props.post);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    style: styles.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("video", {
      loop: true,
      autoPlay: true,
      muted: true,
      controls: true,
      style: styles.video,
      src: originalMediaURL
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: styles.postDataContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: styles.postDetailsContainer,
        children: [user.profile.profilePicUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
          src: user.profile.profilePicUrl,
          style: styles.profilePicture
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: styles.profilePicture
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: styles.postDetails,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
            fontSize: 22,
            weight: "medium",
            style: styles.username,
            children: user.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_StyledPostCaption__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: caption,
            usernames: (props.post.mentions || []).map(({
              user
            }) => user.username)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].gray2,
            weight: "medium",
            fontSize: 12,
            style: styles.gameText,
            children: ["Playing ", game.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: styles.postActionContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: styles.postActions,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            style: styles.postActionIconContainer,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
              icon: "ThickLikeGray",
              style: styles.likeIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              fontSize: 16,
              weight: "medium",
              color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
              style: styles.postActionNumber,
              children: likeCount
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            style: styles.postActionIconContainer,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
              icon: "ThickCommentGray",
              style: styles.commentIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              fontSize: 16,
              weight: "medium",
              color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
              style: styles.postActionNumber,
              children: commentCount
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["TouchableDiv"], {
            style: styles.postActionIconContainer,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
              icon: "ThickShareGray",
              style: styles.shareIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              weight: "medium",
              color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
              style: styles.postActionNumber,
              children: "Share"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
          style: styles.button,
          to: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            outline: true,
            buttonText: "View in App",
            containerStyles: styles.viewButton
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

_c = PostPreview;
const styles = {
  video: {
    width: "100%",
    borderWidth: 0,
    outline: "none",
    backgroundColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].navy3,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    userSelect: "none"
  },
  postDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 16,
    alignItems: "center"
  },
  postDetails: {
    display: "flex",
    flexDirection: "column"
  },
  postActionNumber: {
    paddingLeft: 8
  },
  postActionIconContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: 12
  },
  postActionContainer: {
    paddingRight: 24,
    paddingLeft: 24,
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  postActions: {
    display: "flex",
    flexDirection: "row"
  },
  viewButton: {
    flex: 0.2
  },
  postDataContainer: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    display: "flex",
    flexDirection: "column",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].navy1
  },
  likeIcon: {
    width: 26
  },
  commentIcon: {
    width: 24
  },
  ggIcon: {
    height: 25
  },
  shareIcon: {
    height: 21
  },
  gameText: {
    marginTop: 8
  },
  username: {
    marginBottom: 4
  },
  button: {
    textDecoration: "none"
  },
  profilePicture: {
    alignSelf: "center",
    justifySelf: "center",
    width: 56,
    height: 56,
    marginRight: 12,
    borderRadius: 100,
    backgroundColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].gray3,
    borderWidth: 0
  },
  container: {
    justifyContent: "center",
    flex: 0.6,
    flexDirection: "column",
    alignItems: "center",
    display: "flex"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PostPreview);

var _c;

__webpack_require__.$Refresh$.register(_c, "PostPreview");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/SocialBar.tsx":
/*!*******************************************!*\
  !*** ./src/components/view/SocialBar.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general */ "./src/components/general/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/SocialBar.tsx";




const SocialBar = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    style: Object.assign({}, styles.bar, props.containerStyles),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["TouchableDiv"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        href: "https://discord.com/invite/GhyE65K9ge",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          icon: "DiscordSocial",
          style: styles.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["TouchableDiv"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        href: "https://www.tiktok.com/@shareonhover",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          icon: "TikTokSocial",
          style: styles.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["TouchableDiv"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        href: "https://twitch.tv/shareonhover",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          icon: "TwitchSocial",
          style: styles.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["TouchableDiv"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        href: "https://twitter.com/shareonhover",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          icon: "TwitterSocial",
          style: styles.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["TouchableDiv"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        href: "https://www.instagram.com/shareonhover/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          icon: "InstagramSocial",
          style: styles.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

_c = SocialBar;
const styles = {
  bar: {
    display: "flex",
    justifyContent: "space-between",
    width: 200,
    // backgroundColor: "red",
    alignItems: "center"
  } //   icon: {
  //     marginRight: 8,
  //   },

};
/* harmony default export */ __webpack_exports__["default"] = (SocialBar);

var _c;

__webpack_require__.$Refresh$.register(_c, "SocialBar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/SplitView.tsx":
/*!*******************************************!*\
  !*** ./src/components/view/SplitView.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/SplitView.tsx";



const SplitView = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    style: styles.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: Object.assign({}, styles.halfContainer, {
        alignItems: props.leftAlign
      }),
      children: props.left
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: Object.assign({}, styles.halfContainer, {
        alignItems: props.rightAlign
      }),
      children: props.right
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

_c = SplitView;
const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  halfContainer: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SplitView);

var _c;

__webpack_require__.$Refresh$.register(_c, "SplitView");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/StyledPostCaption.tsx":
/*!***************************************************!*\
  !*** ./src/components/view/StyledPostCaption.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general */ "./src/components/general/index.ts");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/StyledPostCaption.tsx";





const StyledPostCaption = ({
  text,
  usernames
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
  children: text.split(" ").map((word, idx) => {
    const spanStyle = word.slice(0, 1) === "#" ? styles.hashtagText : usernames.includes(word.replace("@", "").replace(/\n/g, "")) ? styles.mentionText : {};
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
      style: spanStyle,
      children: [word, " "]
    }, `${word}-${idx}`, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined);
  })
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 3
}, undefined);

_c = StyledPostCaption;
const styles = {
  hashtagText: {
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].lightBlue
  },
  mentionText: {
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].lightBlue
  }
};
/* harmony default export */ __webpack_exports__["default"] = (StyledPostCaption);

var _c;

__webpack_require__.$Refresh$.register(_c, "StyledPostCaption");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/legal/DataPolicy.tsx":
/*!**************************************************!*\
  !*** ./src/components/view/legal/DataPolicy.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general */ "./src/components/general/index.ts");
/* harmony import */ var _LegalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LegalHeader */ "./src/components/view/legal/LegalHeader.tsx");
/* harmony import */ var _LegalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LegalStyles */ "./src/components/view/legal/LegalStyles.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/legal/DataPolicy.tsx";






const TOSView = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    style: styles.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: styles.document,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_LegalHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Data Policy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Effective Date: November 14, 2019"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["Thank you for using Hover! We are excited to share in your passion for gaming.", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["To provide our service, we collect certain information about you. This Data Policy describes (i) how and why we collect your personal data, (ii) how we use your personal data and (iii) the choices you have about your personal data.", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "This Data Policy applies to the Hover Service as well as Skwads, LLC-provided applications, websites and related services, which we collectively refer to as the Service. This Data Policy is incorporated into our Terms of Use and may be updated from time to time by posting a new version on our Service. If we make any material changes, we will notify you by posting an advance notice in the Service. Your continued use of the Service after the effective date will be subject to the new Data Policy."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "CONTACT US"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If you have questions about data protection, or if you have any requests for resolving issues with your personal data, we encourage you to contact us through the Service so we can reply to you more quickly."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Name of the controller: Skwads, LLC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Address: 55 Water Street, Floor 32, New York NY 10041"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "email: legal@skwads.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "THE DATA WE COLLECT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["Data you provide us, including all content posted, uploaded, shared or otherwise transmitted through the Service.", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Content accessed through the Service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Contact information (such as name and email address)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "User name and password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Profile information (such as profile photo)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Your messages to the Service (such as chat logs and support tickets)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Other data you choose to give us (such as data to identify a lost account)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Data we collect automatically."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Your IP address and mobile device identifiers (such as your device ID, advertising ID, MAC address, IMEI)."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Data about your device, such as device name and operating system, browser type and language."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Data we collect with cookies and similar technologies (see more below)."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "General location data."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Precise geo-location data (GPS, with your consent)."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Data about your use of the Service, such as your interactions with the platform and other users inside the Service, and applications and programs used to interface with the Service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Data we collect from our partners."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Data we receive if you link a third-party tool or game with the Service (such as Facebook or Google)."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Demographic data (such as to determine the coarse location of your IP address)."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Data to fight fraud (such as click fraud in advertising)."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Data for advertising and analytics purposes, so we can provide you a better Service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "WHY WE COLLECT YOUR DATA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "To make the Service work."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "To perform the contract, we process data necessary to create accounts and allow you to use our Service"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Operate the Service"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Send you Service-related communications"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "To provide a great Service to our users, we collect and process necessary data to:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Develop and improve the Service and user experience"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Manage our relationship with you"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Provide social features as part of the Service"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Customize your Service experience"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Respond to your comments and questions and provide user support"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Provide you Skwads offers in the Service as well as in other websites and services, and by email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Send you related information, such as updates, security alerts, and support messages"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Enable you to communicate with other users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "To show personalized advertisements."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "To show you personalized advertisements in the Service as well as in other websites and services (including email) we process necessary data to:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Track the content you access in connection with the Service and your online behavior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Deliver, target and improve our advertising and the Service"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "For information on how to opt-out from personalized advertisements, see section 'Your rights and options' below."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "To keep the Service safe and fair."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Ensuring a level playing field in the Service is a top priority for us. For more information on our acceptable use policy, see the Terms of Use."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "In order to keep the Service and its social features safe and fair, to fight fraud and ensure acceptable use otherwise, we process necessary data to:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Analyze and monitor use of the Service and its social features"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Moderate chats either automatically or manually"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Take action against fraudulent or misbehaving users, including enforcing any of the Terms of Use"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "To analyze, profile, and segment."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "In all of the above cases and purposes, we may analyze, profile and segment all collected data."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Other uses with your consent."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "With your consent, we may process your data for additional purposes, such as using your GPS location to show you local events."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "WHO CAN SEE YOUR DATA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Apart from Skwads, your data can be accessed by others in the following situations:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Other Users. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Social interaction is the heart of our Service. Other users will be able to see your profile data, view images and videos you share and read the messages you have posted."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Partners working for Skwads. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Skwads may use partners to perform services for us. These partners will process your data only at and according to Skwads\xB4s instructions to provide the Service, such as hosting, virus protection, support, advertising, analytics and fraud prevention."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Other companies and public authorities."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "In order to combat fraud and illegal activity, we may exchange data with other companies and organizations and provide it to public authorities in response to lawful requests. We may also disclose your data based on your consent, to comply with the law or to protect the rights, property or safety of us, our users or others."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Advertising and Social Media partners."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "The Service includes features from our partners, such as social media interaction tools and advertising. A list of these partners is available at Skwads.com/partner-opt-out. These partners may access your data and operate under their own privacy policies. We encourage you to check their privacy policies to learn more about their data processing practices."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "INTERNATIONAL DATA TRANSFERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Our Service is global by nature and your data can therefore be transferred to anywhere in the world. Because different countries may have different data protection laws than your own country, we take steps to ensure adequate safeguards are in place to protect your data as explained in this Policy. Adequate safeguards that our partners may use include standard contractual clauses approved by EU Commission and the Privacy Shield certification in case of transfers to the USA."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "YOUR RIGHTS AND OPTIONS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Opt-out of marketing emails and other direct marketing."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You may opt-out of receiving promotional communications, such as marketing emails from us by following the instructions in such communications."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Opt-out of targeted advertising."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["You can opt-out of interest-based advertising on mobile applications by checking the privacy settings of your Android or iOS device and selecting \"limit ad tracking\" (Apple iOS) or \"opt-out of interest based ads\" (Android).", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "For personalized in-system offers opt-out, you can use the options provided in the application settings."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Access the personal data we hold about you."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If you request, we will provide you a copy of your personal data in an electronic format."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Your other rights."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You also have the right to correct your data, have your data deleted, object how we use or share your data, and restrict how we use or share your data. You can always withdraw your consent, for example by turning off GPS location sharing in your mobile device settings."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["We will respond to all requests within a reasonable timeframe.", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "COOKIES AND SIMILAR TECHNOLOGIES"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Like most online services, we and our partners use cookies and similar technologies to provide and personalize the Service, analyze use, target advertisements and prevent fraud. You can disable cookies in your browser settings, but some parts of the Service may then not function properly."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "HOW DO WE PROTECT YOUR DATA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Security Safeguards."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "In order to help ensure a secure and safe player experience, we are continuously developing and implementing administrative, technical and physical security measures to protect your data from unauthorized access or against loss, misuse or alteration."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Data retention."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We retain your data for as long as your account is active or as needed to provide you the Service. We will for example periodically de-identify unused accounts and we regularly review and de-identify unnecessary data. Note that if you ask us to remove your personal data, we will retain your data as necessary for our legitimate business interests, such as to comply with our legal obligations, resolve disputes, and enforce our agreements."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "AGE LIMITS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We do not knowingly collect or solicit personal data about or direct or target interest-based advertising to anyone under the age of 13 or knowingly allow such persons to use our Services. If you are under 13, please do not send any data about yourself to us, including your name, address, telephone number, or email address. No one under the age of 13 may provide any personal data. If we learn that we have collected personal data about a child under age 13, we will delete that data as quickly as possible. If you believe that we might have any data from or about a child under the age of 13, please contact us."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

_c = TOSView;
const styles = {
  container: {
    display: "flex",
    width: "100%",
    justifySelf: "center"
  },
  document: {
    display: "flex",
    justifySelf: "center",
    alignSelf: "center",
    flexDirection: "column",
    paddingBottom: 64
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TOSView);

var _c;

__webpack_require__.$Refresh$.register(_c, "TOSView");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/legal/LegalHeader.tsx":
/*!***************************************************!*\
  !*** ./src/components/view/legal/LegalHeader.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general */ "./src/components/general/index.ts");
/* harmony import */ var _LegalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LegalStyles */ "./src/components/view/legal/LegalStyles.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/legal/LegalHeader.tsx";






const LegalHeader = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    style: styles.header,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/legal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["TouchableDiv"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          icon: "BackArrow",
          style: {
            paddingRight: 24
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_2__["headerProps"],
      fontSize: 32,
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

_c = LegalHeader;
const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (LegalHeader);

var _c;

__webpack_require__.$Refresh$.register(_c, "LegalHeader");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/legal/LegalStyles.ts":
/*!**************************************************!*\
  !*** ./src/components/view/legal/LegalStyles.ts ***!
  \**************************************************/
/*! exports provided: headerProps, paragraphProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerProps", function() { return headerProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paragraphProps", function() { return paragraphProps; });
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/Colors */ "./src/constants/Colors.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const headerProps = {
  fontSize: 20,
  textWrap: true,
  color: _constants_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
  weight: "medium",
  style: {
    marginTop: 8,
    marginBottom: 8
  }
};
const paragraphProps = {
  // fontSize: 20,
  textWrap: true,
  color: _constants_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].gray1,
  style: {
    marginTop: 4
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/legal/PrivacyPolicy.tsx":
/*!*****************************************************!*\
  !*** ./src/components/view/legal/PrivacyPolicy.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general */ "./src/components/general/index.ts");
/* harmony import */ var _LegalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LegalHeader */ "./src/components/view/legal/LegalHeader.tsx");
/* harmony import */ var _LegalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LegalStyles */ "./src/components/view/legal/LegalStyles.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/legal/PrivacyPolicy.tsx";






const PrivacyPolicyView = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    style: styles.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: styles.document,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_LegalHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Privacy Policy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Effective date: April 29, 2019"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Welcome to Hover.gg (\u201CHover.gg,\u201D \u201Cwe,\u201D \u201Cus\u201D or \u201Cour\u201D)! Hover.gg provides a fast and fun way for you to share gaming victories through our content-sharing platform. We are concerned about your privacy and want you to be familiar with how we collect, use and share your information. Our Privacy Policy applies to all visitors, users, and others who access the mobile services, web site, and any software provided on or in connection with Hover.gg services (collectively, the \u201CService\u201D)."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "By using our Service you understand and agree that we are providing a platform for you to post content, including photos, comments and other materials (\u201CUser Content\u201D), to the Service and to share User Content publicly. This means that other Users may search for, see, use, or share any of your User Content that you make publicly available through the Service, consistent with the terms and conditions of this Privacy Policy and our Terms of Service (available at Hover.GG/TOS[a])."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "INFORMATION WE COLLECT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We collect the following types of information. By using the Service, you expressly consent to the processing of your Personal Information according to this Privacy Policy."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Information you provide us directly:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Your username, password and e-mail address when you register for a Hover.gg account."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Profile information that you provide for your user profile (e.g., first and last name, picture, phone number). This information allows us to help you or others be \u201Cfound\u201D on Hover.gg."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "User Content (e.g., photos, comments, and other materials) that you post to the Service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Communications between you and Hover.gg. For example, we may send you Service-related emails (e.g., account verification, changes/updates to features of the Service, technical and security notices). Note that you may not opt out of Service-related e-mails."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Finding your friends on Hover.gg:[b]"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If you choose, you can find friends or other users on Hover.gg accounts either through (i) your contacts list, (ii) third-party social media sites or (iii) through a search of names and usernames on Hover.gg."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If you choose to find your friends through your contacts list, then Hover.gg will access your contacts list to determine whether or not someone associated with your contact is using Hover.gg."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If you choose to find your friends through a third-party social media site, then you will be prompted to set up a link to the third-party service and you understand that any information that such service may provide to us will be governed by this Privacy Policy."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If you choose to find your friends through a search of names or usernames on Hover.gg then simply type a name to search and we will perform a search on our Service for you."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Note about \u201CInvite\u201D feature(s): If you choose to invite someone through the Service, you may select a person directly from the contacts list on your device and send a p or email from your personal account. You understand and agree that you are responsible for any charges that apply to communications sent from your device, and because this invitation is coming directly from your personal account, Hover.gg does not have access to or control this communication."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Cookies, device identifiers and similar technologies:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "When you visit the Service, we may use cookies and similar technologies like pixels, web beacons, and local storage to collect information about how you use Hover.gg and provide features to you."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "When you use a mobile device like a tablet or phone to access our Service, we may access, collect, monitor, store on your device, and/or remotely store one or more \u201Cdevice identifiers.\u201D Device identifiers are small data files or similar data structures stored on or associated with your mobile device, which uniquely identify your mobile device. A device identifier may be data stored in connection with the device hardware, data stored in connection with the device's operating system or other software, or data sent to the device by Hover.gg."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "A device identifier may deliver information to us or to a third party partner about how you browse and use the Service and may help us or others provide reports or personalized content and ads. Some features of the Service may not function properly if use or availability of device identifiers is impaired or disabled."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We may ask advertisers or other partners to serve ads or services to your devices, which may use cookies or similar technologies placed by us or the third party."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Log file and other analytics:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Log file information is automatically reported by your browser each time you make a request to access (i.e., visit) a web page or app. It can also be provided when the content of the webpage or app is downloaded to your browser or device."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "When you use our Service, our servers automatically record certain log file information, including your web request, Internet Protocol (\u201CIP\u201D) address, browser type, referring / exit pages and URLs, number of clicks and how you interact with links on the Service, domain names, landing pages, pages viewed, and other such information. We may also collect similar information from emails sent to our Users which then help us track which emails are opened and which links are clicked by recipients."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We may use third-party analytics tools to help us measure traffic and usage trends for the Service. These tools collect information sent by your device or our Service, including the web pages you visit, add-ons, and other information to assist us in improving the Service. This analytics information is aggregated with analytics information from other Users so that it cannot reasonably be used to identify any particular individual User."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "The information allows for more accurate reporting and improvement of the Service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Feedback:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If you provide feedback on any of our Services, we may use such feedback for any commercially reasonable purpose. Hover.gg will collect any information contained in such communication and will treat the Personal Information in such communication in accordance with this Privacy Policy."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Metadata:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Metadata is usually technical data that is associated with User Content. For example, Metadata can describe how, when and by whom a piece of User Content was collected and how that content is formatted."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Users can add or may have Metadata added to their User Content including a hashtag (e.g., to mark keywords when you post), geotag (e.g., to mark your location), comments or other data. This makes your User Content more searchable by others and more interactive. If you geotag your User Content then, your latitude and longitude will be stored with the content and searchable (e.g., through a location or map feature) if your content is made public by you in accordance with your privacy settings.[c]"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "HOW WE USE YOUR INFORMATION"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "In addition to some of the specific uses of information we describe in this Privacy Policy, we may use information that we receive to:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "help you efficiently access your information after you sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "remember information so you will not have to re-enter it during your visit or the next time you visit the Service;"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "provide personalized content and information to you and others, which could include online ads or other forms of marketing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "provide, improve, test, and monitor the effectiveness of our Service"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "develop and test new products and features"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "monitor metrics such as total number of visitors, traffic, and demographic patterns"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "diagnose or fix technology problems"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "automatically update the Hover.gg application on your device"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Hover.gg or other Users may run contests, special offers or other events or activities (\u201CEvents\u201D) on the Service. If you do not want to participate in an Event, do not use the particular Metadata (i.e. hashtag or geotag) associated with that Event."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "SHARING OF YOUR INFORMATION"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["We will not rent or sell your information to third parties outside Hover.gg (or the group of companies of which Hover.gg is a part) without your consent, except as noted in this Policy.", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Parties with whom we may share your information:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We may share User Content and your information with our affiliated companies (\u201CAffiliates\u201D). Affiliates will honor the choices you make about who can see your User Content."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We also may share your information as well as information from tools like cookies, log files, and device identifiers and location data, with third-party organizations that help us provide the Service to you, including advertising partners (\u201CService Providers\u201D). Our Service Providers will be given access to your information as is reasonably necessary to provide the Service under reasonable confidentiality terms."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We may remove parts of data that can identify you and share anonymized data with other parties. We may also combine your information with other information in a way that it is no longer associated with you and share that aggregated information."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Parties with whom you may choose to share your User Content:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Any information or content that you voluntarily disclose for posting to the Service, such as User Content, becomes available to the public, as controlled by any applicable privacy settings that you set. To change your privacy settings on the Service, please change your profile setting. Once you have shared User Content or made it public, that User Content may be re-shared by others.[d]"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Subject to your profile and privacy settings, any User Content that you make public is searchable by other Users."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If you remove information that you posted to the Service, copies may remain viewable in cached and archived pages of the Service, or if other Users have copied or saved that information."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "What happens in the event of a change of control:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If we sell or otherwise transfer part or the whole of Hover.gg or our assets to another organization (e.g., in the course of a transaction like a merger, acquisition, bankruptcy, dissolution, liquidation), your information such as name and email address, User Content and any other information collected through the Service may be among the items sold or transferred. You will continue to own your User Content. The buyer or transferee will have to honor the commitments we have made in this Privacy Policy."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Responding to legal requests and preventing harm:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We may access, preserve and share your information in response to a legal request (like a search warrant, court order or subpoena) if we have a good faith belief that the law requires us to do so. We may also access, preserve and share information when we have a good faith belief it is necessary to: detect, prevent and address fraud and other illegal activity; to protect ourselves, you or others, including as part of investigations; and to prevent death or imminent bodily harm. Information we receive about you may be accessed, processed and retained for an extended period of time when it is the subject of a legal request or obligation, governmental investigation, or investigations concerning possible violations of our terms or policies, or otherwise to prevent harm."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "HOW WE STORE YOUR INFORMATION"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Storage and Processing:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Your information collected through the Service may be stored and processed in the United States or any other country in which Hover.gg, its Affiliates or Service Providers maintain facilities."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Hover.gg, its Affiliates, or Service Providers may transfer information that we collect about you, including personal information across borders and from your country or jurisdiction to other countries or jurisdictions around the world. If you are located in the European Union or other regions with laws governing data collection and use that may differ from U.S. law, please note that we may transfer information, including personal information, to a country and jurisdiction that does not have the same data protection laws as your jurisdiction."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "By registering for and using the Service you consent to the transfer of information to the U.S. or to any other country in which Hover.gg, its Affiliates or Service Providers maintain facilities and the use and disclosure of information about you as described in this Privacy Policy."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We use commercially reasonable safeguards to help keep the information collected through the Service secure and take reasonable steps (such as requesting a unique password) to verify your identity before granting you access to your account. However, Hover.gg cannot ensure the security of any information you transmit to Hover.gg or guarantee that information on the Service may not be accessed, disclosed, altered, or destroyed."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You are responsible for maintaining the secrecy of your unique password and account information, and for controlling access to emails, ps or other communications between you and Hover.gg, at all times. Your privacy settings may also be affected by changes to the social media services you connect to Hover.gg. We are not responsible for the functionality, privacy, or security measures of any other organization."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "YOUR CHOICES ABOUT YOUR INFORMATION"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Your account information and profile/privacy settings:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Update your account at any time by logging in and changing your profile settings."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Unsubscribe from email communications from us by clicking on the provided \u201Cunsubscribe\u201D link. As noted above, you may not opt out of Service-related communications (e.g., account verification, purchase and billing confirmations and reminders, changes/updates to features of the Service, technical and security notices)."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "How long we keep your User Content:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Following termination or deactivation of your account, Hover.gg, its Affiliates, or its Service Providers may retain information (including your profile information) and User Content for a commercially reasonable time for backup, archival, and/or audit purposes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "CHILDREN'S PRIVACY"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Hover.gg does not knowingly collect or solicit any information from anyone under the age of 13 or knowingly allow such persons to register for the Service. The Service and its content are not directed at children under the age of 13. In the event that we learn that we have collected personal information from a child under age 13 without parental consent, we will delete that information as quickly as practicable. If you believe that we might have any information from or about a child under 13, please contact us at legal@skwads.com[e]."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "OTHER WEB SITES AND SERVICES"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We are not responsible for the practices employed by any websites or services linked to or from our Service, including the information or content contained within them. Please remember that when you use a link to go from our Service to another website or service, our Privacy Policy does not apply to those third-party websites or services. Your browsing and interaction on any third-party website or service, including those that have a link on our website, are subject to that third party's own rules and policies. In addition, you agree that we are not responsible and do not have control over any third-parties that you authorize to access your User Content. If you are using a third-party website or service and you allow them to access your User Content you do so at your own risk."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "HOW TO CONTACT US ABOUT A DECEASED USER"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "In the event of the death of a Hover.gg User, please contact us at legal@skwads.com. We will usually conduct our communication via email; should we require any other information, we will contact you at the email address you have provided in your request."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "HOW TO CONTACT US"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If you have any questions about this Privacy Policy, please contact us at legal@skwads.com."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "CHANGES TO OUR PRIVACY POLICY"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "This Privacy Policy is subject to occasional revision in accordance with our Terms of Service. Changes to this Privacy Policy may affect our use of Personal Information that you provided us prior to our notification to you of the changes. Your only recourse if you do not wish to permit changes in our use of your Personal Information, is to deactivate your account by sending us notice as soon as you become aware of such changes. Your continued use of the Service after any modification to this Privacy Policy will constitute your acceptance of such modification."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

_c = PrivacyPolicyView;
const styles = {
  container: {
    display: "flex",
    width: "100%",
    justifySelf: "center"
  },
  document: {
    display: "flex",
    justifySelf: "center",
    alignSelf: "center",
    flexDirection: "column",
    paddingBottom: 64
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PrivacyPolicyView);

var _c;

__webpack_require__.$Refresh$.register(_c, "PrivacyPolicyView");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/legal/TOS.tsx":
/*!*******************************************!*\
  !*** ./src/components/view/legal/TOS.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general */ "./src/components/general/index.ts");
/* harmony import */ var _LegalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LegalHeader */ "./src/components/view/legal/LegalHeader.tsx");
/* harmony import */ var _LegalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LegalStyles */ "./src/components/view/legal/LegalStyles.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/legal/TOS.tsx";






const TOSView = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    style: styles.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: styles.document,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_LegalHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Terms of Service"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Welcome to Hover! These Terms of Use govern your use of Hover and provide information about the Hover Service, outlined below. When you create an Hover account (\u201CAccount\u201D) or use Hover, you agree to these terms. Skwads, LLC, a Delaware limited liability company (\u201CSkwads,\u201D \u201Cwe\u201D or \u201Cus\u201D) is the creator of Hover, and these Terms of Use are an agreement between you and Skwads. BY INSTALLING, USING OR OTHERWISE ACCESSING THE SERVICE, YOU AGREE TO THESE TERMS OF USE. IF YOU DO NOT AGREE TO THESE TERMS, PLEASE DO NOT INSTALL, USE OR OTHERWISE ACCESS THE SERVICE. USE OF THE SERVICE IS VOID WHERE PROHIBITED."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "ARBITRATION NOTICE: YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. WE EXPLAIN SOME EXCEPTIONS AND HOW YOU CAN OPT OUT OF ARBITRATION BELOW."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "The Hover Service"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["We will provide you with the Hover Service. The Service includes all of the Hover products designed to help you create, find, join, and share in gaming experiences that matter to you, as well as find others who share your passion for gaming.", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Grant of a Limited License to Use the Service"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Subject to your agreement and continuing compliance with these Terms of Use, Skwads grants you a non-exclusive, non-transferable, non-sublicensable, revocable and limited license to access and use the Hover Service for your own non-commercial entertainment purposes. You agree not to use the Service for any other purpose."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "The Data Policy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Providing Hover requires collecting and using your information. The Data Policy explains how we collect, use, and share information. The Data Policy is part of this Agreement and you must agree to the Data Policy to use Hover."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Your Commitments"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "In return for the right to use the Service, we require you to make the below commitments to us."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Who Can Use Hover. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "By registering for an Account or otherwise using the Service, you represent that you are age 13 or older, and that you are not a convicted sex offender. If you are between the ages of 13 and 17, you represent that your legal guardian has reviewed and agreed to these Terms."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You will restrict use by minors, and you will deny access to children under the age of 13. You accept full responsibility for any unauthorized use of the Service by minors. You are responsible for any use of your credit card or other payment instrument (e.g. paypal) by minors."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You agree to use your Account only for non-commercial purposes; You may not use the Service to advertise, or solicit, or transmit any commercial advertisements, including chain letters, junk or spam e-mail or repetitive or misleading messages to anyone."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You may not use the Service if you have previously been removed by Skwads, or previously been banned from using any Skwads service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "License Limitations - How You Can't Use Hover. We wants to provide you with a safe and open platform for all users to come together and share their gaming passion. To maintain that environment, we have to enforce a few rules. Any use of the Service in violation of these License Limitations is strictly prohibited, can result in the immediate revocation of your limited license and may subject you to liability for violations of law. You agree that you will not, under any circumstances:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Engage in any act that Skwads deems to be in conflict with the spirit or intent of the Service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Modify or cause to be modified any files that are a part of the Service without Skwads\u2019 express written consent."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Disrupt, interfere with or otherwise adversely affect the normal flow of the Service or otherwise act in a manner that may negatively affect other users' experience when using the Service (including without limitation distribution of a virus or denial of service attacks upon the Service or users)."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["Attempt to buy, sell, or transfer any aspect of your account (including your username) or solicit, collect, or use login credentials of other users.", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Attempt to gain unauthorized access to the Service, Accounts registered to others or to the computers, Servers, or networks connected to the Service by any means other than the user interface provided by Skwads."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Post any information that is abusive, threatening, obscene, defamatory, libelous, or racially, sexually, religiously, or otherwise objectionable or offensive."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Post any information that contains nudity, excessive violence, or offensive subject matter or that contains a link to such content."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Attempt to harass, abuse, or harm another person or group."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Make available through the Service any material or information that infringes any copyright, trademark, patent, trade secret, right of privacy, right of publicity, or other right of any person (including without limitation rights in confidential information) or entity or impersonates any other person."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Reverse engineer, decompile, disassemble, decipher or otherwise attempt to derive the source code for any underlying software or other intellectual property used to provide the Service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Collect or post anyone's private information, including personally identifiable information (whether in text, image or video form), identification documents, or financial information through the Service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Skwads reserves the right to determine what conduct it considers to be in violation of the rules of use or otherwise outside the intent or spirit of these Terms of Use or the Service itself. Skwads reserves the right to take action as a result, which may include terminating your Account and prohibiting you from using the Service in whole or in part."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Content and Ownership Rights. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["By providing content through Hover, you make certain representations about the content of the transmission or submission.", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "\u201CContent\u201D means any communications, images, sounds, and all the material, data, and information that you upload or transmit through the Service, or that other users upload or transmit, including without limitation any chat text. By transmitting or submitting any Content while using the Service, you represent and warrant that such Content is (a) not confidential or misleading; (b) not in violation of any laws, and that you have permission from any third party whose personal information or intellectual property is comprised in the Content or who claims any rights in the Content; and (c) free of viruses, adware, spyware, worms or other malicious code. You also agree that any of your personal information within such Content will be subject to the Data Policy."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["We do not claim ownership of your Content, but you grant us a license to use it.When you share, post, or upload Content that is covered by intellectual property rights (like photos or videos) on or in connection with our Service, you hereby grant to us an irrevocable, non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to host, use, distribute, modify, run, copy, publicly perform or display, translate, and create derivative works of your Content (consistent with your privacy and application settings). You can end this license anytime by deleting your Content or Account. However, Content will continue to appear if you shared it with others and they have not deleted it.", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You grant us permission to use your username, profile picture, and information about your relationships and actions with accounts, ads, and sponsored content, without any compensation to you."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Skwads assumes no responsibility for the conduct of any user submitting any content, and assumes no responsibility for monitoring the Service for inappropriate content or conduct. We do not, and cannot, pre-screen or monitor all user content. Nor can we control what users do with content accessed through the Service. Your use of the Service is at your own risk. By using the Service, you may be exposed to user content that is offensive, indecent or otherwise not in line with your expectations. You bear all risks associated with the use of any user content available in connection with the Service. At our discretion, our representatives or technology may monitor and/or record your interaction with the Service or communications (including without limitation chat text) when you are using the Service. By entering into these Terms of Use, you hereby provide your irrevocable consent to such monitoring and recording. You acknowledge and agree that you have no expectation of privacy concerning the transmission of any user content, including without limitation chat text or voice communications. We have the right, but not the obligation, in our sole discretion to edit, refuse to post, or remove any Content."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You agree that we can download and install updates to the Service on your device, with or without notifying you. We may require that you accept updates to the Service and to applications you have installed on your device or computer."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Additional Rights We Retain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If you select a username or similar identifier for your account, we may change it if we believe it is appropriate or necessary (for example, if it uses obscene language or infringes someone's intellectual property or impersonates another user)."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "All rights, title and interest in and to the Service (including without limitation any concepts, artwork, audio-visual effects, methods of operation, documentation and the Hover clients and server software) are owned by Skwads. Skwads reserves all rights, including without limitation, all intellectual property rights or other proprietary rights, in connection with its Service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Notwithstanding anything to the contrary herein, you acknowledge and agree that you will have no ownership or other property interest in the Account, and you further acknowledge and agree that all rights in and to the Account (other than the content you provide) are and shall forever be owned by and inure to the benefit of Skwads.Without limiting any other remedies, Skwads may suspend, limit, modify, terminate or delete Accounts or access to the Service in whole or in part if you violate or Skwads suspects that your conduct has or may violate these Terms of Use or any applicable laws or create risk or legal liabilities for Skwads, and is under no obligation to compensate you for any loss that results (including without limitation the Account, any content associated with it and any purchased items). We also reserve the right to terminate any Account that is inactive for 180 days."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Skwads reserves the right to stop offering and/or supporting the Service or any portion of the Service at any time, at which point your license to use the Service or a part thereof will be automatically terminated. Skwads will not be required to provide refunds, benefits or other compensation to users in connection with such discontinued Service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Content Removal Terminating Your Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Content you delete may persist for a limited period of time in backup copies and will still be visible where others have shared it. This paragraph, and the section below called \"The Agreement and Disputes Under These Terms,\" will continue to apply even after your account is terminated or deleted."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "The Agreement and Disputes Under These Terms"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "The Agreement."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If any aspect of this agreement is unenforceable, the rest will remain in effect."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Any amendment or waiver to our agreement must be in writing and signed by us. If we fail or delay to enforce any aspect of this agreement, it will not be a waiver."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We reserve all rights not expressly granted to you."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Who Has Rights Under this Agreement."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "These Terms of Use, together with the Data Policy and any documents expressly incorporated by reference, is the entire agreement between you and Skwads concerning the Service, and replaces any other agreement in any form between you and us with respect to the Service."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "This agreement does not give rights to any third parties."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You cannot transfer your rights or obligations under this agreement without our consent."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Our rights and obligations can be assigned to others at any time, without consent. For example, this could occur if our ownership changes (as in a merger, acquisition, or sale of assets) or by law."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Our Liability Is Limited."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "The Service is provided \"as is\" and \u201Cas available\u201D with all faults, and we make no assurance it will be safe, secure or virus or error-free. TO THE EXTENT PERMITTED BY LAW, WE ALSO DISCLAIM ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND THOSE ARISING FROM COURSE OF DEALING OR USE OF TRADE."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["To the maximum extent allowed by law, our liability or responsibility for anything that happens on or in connection with the Service. Skwads is not responsible for your use of the Service or for any lost profits, revenues, information, or data, or consequential, special, indirect, exemplary, punitive, or incidental damages arising out of or related to the Service, even if we have been advised of the possibility of such damages. This includes when we delete your content, information, or account. To the extent allowed by law, our aggregate liability arising out of or relating to the Service or these Terms of Use will not exceed the greater of $100 or the amount you have paid us for the Service in the six months preceding the date your claim arises. Without limiting the foregoing, you will always have the remedy to stop using the Service.", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: ["Nothing in this section will limit our liability where not allowed by law, for example, for liability arising from our gross negligence.", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You agree to defend (at our request), indemnify and hold us harmless from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable attorney's fees and costs, arising out of or in any way connected with your use of the Service or breach of these Terms of Use. You agree to cooperate with us in the defense of any claim. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, and you will not in any event settle any claim without our prior written consent."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You acknowledge that the rights granted and obligations made under these Terms of Use are of a unique and irreplaceable nature, the loss of which will cause Skwads to suffer irreparable harm which cannot be replaced by monetary damages alone, such that Skwads shall be entitled to injunctive or other equitable relief (without the obligations of posting any bond or surety or proof of damages) in the event of any breach or anticipatory breach of these Terms by you."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You irrevocably waive all rights to seek injunctive or other equitable relief, or to enjoin or restrain the operation of the Service, exploitation of any advertising or other materials issued in connection therewith, or exploitation of the Service or any content or other material used or displayed through the Service and agree to limit your claims to claims for monetary damages (if any), limited by this Section."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "How We Will Handle Disputes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "If you have a dispute, we strongly encourage you to first contact us through customer support to seek resolution. If a dispute cannot be resolved through discussion, then except as provided below, to the maximum extent permitted by law, except for temporary, preliminary, or permanent injunctive relief any cause of action, legal claim, or dispute between you and us arising out of or related to these Terms Hover (\"claim(s)\") must be resolved by arbitration on an individual basis. Cass actions / arbitrations are not permitted as disclosed above. The American Arbitration Association will administer all arbitrations under its Consumer Arbitration Rules. Any arbitration will be held in New York, New York, USA. You and we expressly waive a trial by jury."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Notwithstanding, disputes related to intellectual property (like copyrights and trademarks), or efforts to interfere with the Service or engage with the Service in unauthorized ways (for example, automated ways). In addition, any claim for temporary, preliminary, or permanent injunctive relief will not be subject to the foregoing arbitration requirement."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "This arbitration provision is governed by the Federal Arbitration Act."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "For any claim that is not arbitrated, you agree that it will be resolved exclusively in the United States in the state or federal courts of the State of New York, in New York County. You also agree to submit to the personal jurisdiction of either of these courts for the purpose of litigating any such claim."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "The laws of the State of New York, to the extent not preempted by or inconsistent with federal law, will govern these Terms and any claim, without regard to conflict of law provisions."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "All requests for arbitration and other notices given by you or required from you under these Terms of Use or the Data Policy shall be in writing and addressed to: Skwads, LLC Attn: Legal, 55 Water Street, Floor 32, New York NY 10041. Any notices that you provide without compliance with this Section shall have no legal effect."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Feedback."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "You may communicate to us suggested modifications, design changes, or improvements to the Service. Skwads will have any and all rights and interests in any such feedback without the payment of any consideration, and will have no obligation to keep such feedback confidential."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["headerProps"],
        children: "Updates to the Service or These Terms"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "We reserve the right to change our Service and policies, including these Terms of Use and our Data Policy at any time by posting the amended terms on the Skwads website or the Service. Your continued use of the Service will be deemed acceptance of the revised terms. If at any time you do not want to agree to these or any updated Terms, your license and right to use the Service will immediately terminate, and you may delete your Account, here."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"],
        children: "Revised: November 14, 2019"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_1__["Text"], { ..._LegalStyles__WEBPACK_IMPORTED_MODULE_3__["paragraphProps"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

_c = TOSView;
const styles = {
  container: {
    display: "flex",
    width: "100%",
    justifySelf: "center"
  },
  document: {
    display: "flex",
    justifySelf: "center",
    alignSelf: "center",
    flexDirection: "column",
    paddingBottom: 64
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TOSView);

var _c;

__webpack_require__.$Refresh$.register(_c, "TOSView");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/navigation/Footer.tsx":
/*!***************************************************!*\
  !*** ./src/components/view/navigation/Footer.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/view/navigation/Navbar.tsx");
/* harmony import */ var _NavbarSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarSection */ "./src/components/view/navigation/NavbarSection.tsx");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general */ "./src/components/general/index.ts");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/navigation/Footer.tsx";







const Footer = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    containerStyles: {
      bottom: 0,
      left: 0
    },
    height: 32,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_NavbarSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      justify: "left"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_NavbarSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      justify: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        color: _constants_Colors__WEBPACK_IMPORTED_MODULE_4__["default"].gray3,
        weight: "medium",
        fontSize: 12,
        children: "@ 2021 Skwads LLC, All Rights Reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_NavbarSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      justify: "right"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

_c = Footer;
const styles = {};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

__webpack_require__.$Refresh$.register(_c, "Footer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/navigation/Navbar.tsx":
/*!***************************************************!*\
  !*** ./src/components/view/navigation/Navbar.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/navigation/Navbar.tsx";




const Navbar = props => {
  const navbarStyle = Object.assign({}, styles.navbar, props.containerStyles, props.height && {
    height: props.height
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: navbarStyle,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

_c = Navbar;
const styles = {
  navbar: {
    height: 96,
    backgroundColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_1__["default"].navy2,
    alignItems: "center",
    display: "flex",
    borderWidth: 0,
    borderBottomWidth: 0,
    position: "fixed",
    width: "100%",
    zIndex: 1000
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Navbar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/navigation/NavbarOption.tsx":
/*!*********************************************************!*\
  !*** ./src/components/view/navigation/NavbarOption.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/navigation/NavbarOption.tsx",
    _s = __webpack_require__.$Refresh$.signature();






const NavbarOption = props => {
  _s();

  const [isHovering, setIsHovering] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  const optionStyle = Object.assign({}, styles.navbarOption, props.containerStyles, props.noHover ? null : isHovering && styles.hover, location.pathname === props.redirectTo && styles.here);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: props.redirectTo || "/",
    style: styles.routerLink,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: props.onClick,
      style: optionStyle,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

_s(NavbarOption, "7zf7GaCPi4TvJR2AEteRXeXHbYY=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"]];
});

_c = NavbarOption;
const styles = {
  navbarOption: {
    cursor: "pointer",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    paddingLeft: 36,
    paddingRight: 36,
    height: "100%",
    display: "flex",
    alignItems: "center",
    transition: "linear",
    transitionDuration: "50ms",
    // display: "flex",
    // flexDirection: "column",
    // justifySelf: "center",
    // alignSelf: "center",
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].gray2
  },
  hover: {
    opacity: 0.8 // backgroundColor: `${colors.gray1}28`,

  },
  routerLink: {
    textDecoration: "none"
  },
  here: {
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white
  }
};
/* harmony default export */ __webpack_exports__["default"] = (NavbarOption);

var _c;

__webpack_require__.$Refresh$.register(_c, "NavbarOption");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/navigation/NavbarSection.tsx":
/*!**********************************************************!*\
  !*** ./src/components/view/navigation/NavbarSection.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/navigation/NavbarSection.tsx";



const NavbarOption = props => {
  const sectionStyle = Object.assign({}, styles.navbarSection, props.containerStyles, props.justify == "center" ? styles.navbarCenter : props.justify === "left" ? styles.navbarLeft : props.justify === "right" ? styles.navbarRight : null);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    style: sectionStyle,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 10
  }, undefined);
};

_c = NavbarOption;
const styles = {
  navbarSection: {
    display: "flex",
    width: "33.33%",
    paddingLeft: 48,
    paddingRight: 48,
    height: "100%"
  },
  navbarLeft: {
    justifyContent: "flex-start" // backgroundColor: "red",

  },
  navbarCenter: {
    justifyContent: "center" // backgroundColor: "blue",

  },
  navbarRight: {
    justifyContent: "flex-end" // backgroundColor: "green",

  }
};
/* harmony default export */ __webpack_exports__["default"] = (NavbarOption);

var _c;

__webpack_require__.$Refresh$.register(_c, "NavbarOption");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/view/navigation/TopNavigation.tsx":
/*!**********************************************************!*\
  !*** ./src/components/view/navigation/TopNavigation.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/view/navigation/Navbar.tsx");
/* harmony import */ var _NavbarOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarOption */ "./src/components/view/navigation/NavbarOption.tsx");
/* harmony import */ var _NavbarSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavbarSection */ "./src/components/view/navigation/NavbarSection.tsx");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general */ "./src/components/general/index.ts");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var _assets_icons_AstroHead_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../assets/icons/AstroHead.svg */ "./src/assets/icons/AstroHead.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/components/view/navigation/TopNavigation.tsx";






 // import { authLogout } from "../../../store/actions/AuthActions";
// import { useUserEmail } from "../../../store/selectors/UserSelectors";



const TopNavigation = ({}) => {
  // const history = useHistory();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: 128,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_NavbarSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      justify: "left",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "astroAnim",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_NavbarOption__WEBPACK_IMPORTED_MODULE_2__["default"], {
          noHover: true,
          redirectTo: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            style: styles.logoDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
              src: _assets_icons_AstroHead_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
              width: 56
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_4__["Text"], {
              weight: "bold",
              color: _constants_Colors__WEBPACK_IMPORTED_MODULE_5__["default"].white,
              fontSize: 32,
              style: styles.logoText,
              children: "Hover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_NavbarSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      justify: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_NavbarOption__WEBPACK_IMPORTED_MODULE_2__["default"], {
        redirectTo: "/features",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: styles.textContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_4__["Text"], {
            weight: "medium",
            fontSize: 16,
            children: "Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_NavbarOption__WEBPACK_IMPORTED_MODULE_2__["default"], {
        redirectTo: "/about",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: styles.textContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_4__["Text"], {
            weight: "medium",
            fontSize: 16,
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_NavbarOption__WEBPACK_IMPORTED_MODULE_2__["default"], {
        redirectTo: "/support",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: styles.textContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_4__["Text"], {
            weight: "medium",
            fontSize: 16,
            children: "Support"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_NavbarOption__WEBPACK_IMPORTED_MODULE_2__["default"], {
        redirectTo: "/legal",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: styles.textContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_4__["Text"], {
            weight: "medium",
            fontSize: 16,
            children: "Legal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_NavbarSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      justify: "right",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_NavbarOption__WEBPACK_IMPORTED_MODULE_2__["default"], {
        noHover: true,
        redirectTo: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_general__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          outline: true,
          buttonText: "Download Now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

_c = TopNavigation;
const styles = {
  userDropDown: {
    width: 16,
    paddingTop: 4,
    opacity: 0.5
  },
  logoText: {
    paddingLeft: 12
  },
  logoDiv: {
    marginTop: -8,
    display: "flex",
    alignItems: "center"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  indicator: {
    marginTop: 8,
    // padding: -40,
    width: 40,
    height: 3,
    backgroundColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_5__["default"].lightBlue
  },
  indicatorEmpty: {
    marginTop: 8,
    // padding: -40,
    width: 40,
    height: 3 // backgroundColor: colors.navy2,

  }
};
/* harmony default export */ __webpack_exports__["default"] = (TopNavigation);

var _c;

__webpack_require__.$Refresh$.register(_c, "TopNavigation");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/constants/Colors.ts":
/*!*********************************!*\
  !*** ./src/constants/Colors.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const colors = {
  navy1: "#26293B",
  // lightest navy
  navy2: "#1D1F2F",
  // navy
  navy3: "#181A28",
  // darkest navy
  gray1: "#CFD0E1",
  // lightest gray
  gray2: "#8C90A8",
  // gray
  gray3: "#323548",
  // darkest gray
  lightBlue: "#0CD3FF",
  blue: "#038EC9",
  green: "#48BF1E",
  yellow: "#FEC122",
  orange: "#FF8A1F",
  red: "#E63625",
  purple: "#6441A5",
  white: "#FFFFFF"
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/constants/Styles.ts":
/*!*********************************!*\
  !*** ./src/constants/Styles.ts ***!
  \*********************************/
/*! exports provided: FontStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontStyle", function() { return FontStyle; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

/*
  Font info:

  400 - Regular
  500 - Medium
  700 - Bold
*/
const FontStyle = {
  regular: {
    //@ts-ignore
    fontFamily: "ubuntu, sans-serif",
    //@ts-ignore
    fontWeight: 400,
    //@ts-ignore
    fontStyle: "normal"
  },
  medium: {
    //@ts-ignore
    fontFamily: "ubuntu, sans-serif",
    //@ts-ignore
    fontWeight: 500,
    //@ts-ignore
    fontStyle: "normal"
  },
  bold: {
    //@ts-ignore
    fontFamily: "ubuntu, sans-serif",
    //@ts-ignore
    fontWeight: 700,
    //@ts-ignore
    fontStyle: "normal"
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/index.tsx";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
/*#__PURE__*/
// <React.StrictMode>
Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined), // </React.StrictMode>,
document.getElementById("root")); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.ts":
/*!********************************!*\
  !*** ./src/reportWebVitals.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes/about/About.tsx":
/*!************************************!*\
  !*** ./src/routes/about/About.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general */ "./src/components/general/index.ts");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var _components_view_SplitView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/view/SplitView */ "./src/components/view/SplitView.tsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/routes/about/About.tsx";




 //@ts-ignore
// import Video from "../../../public/HoverAd.mp4";



const AboutRoute = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_view_SplitView__WEBPACK_IMPORTED_MODULE_3__["default"], {
    left: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: styles.supportTextContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
        weight: "medium",
        fontSize: 38,
        children: "About Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        textWrap: true,
        color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].gray2,
        fontSize: 18,
        weight: "regular",
        style: {
          marginTop: 16
        },
        children: "Hover is a platform designed for and by gamers. Our goal is to make creating, discovering and consuming gaming content as easy as possible."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

_c = AboutRoute;
const styles = {
  supportTextContainer: {
    marginTop: "30%",
    marginRight: 32
  },
  link: {
    textDecoration: "none",
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].lightBlue
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AboutRoute);

var _c;

__webpack_require__.$Refresh$.register(_c, "AboutRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes/app/post/PostPreview.tsx":
/*!*********************************************!*\
  !*** ./src/routes/app/post/PostPreview.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_view_PostPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/view/PostPreview */ "./src/components/view/PostPreview.tsx");
/* harmony import */ var _components_view_EmptyFiller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/view/EmptyFiller */ "./src/components/view/EmptyFiller.tsx");
/* harmony import */ var _api_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/posts */ "./src/api/posts.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/routes/app/post/PostPreview.tsx",
    _s = __webpack_require__.$Refresh$.signature();








const PostPreviewRoute = props => {
  _s();

  const {
    postId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  const [post, setPost] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [noPostFound, setNoPostFound] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_api_posts__WEBPACK_IMPORTED_MODULE_4__["getPostById"])(Number(postId)).then(post => {
      setPost(post);

      if (!post) {
        setNoPostFound(true); // console.log("ooo");
      }
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    style: styles.page,
    children: [noPostFound ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_view_EmptyFiller__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: "404",
      description: "Uh oh, we couldn't find the post you were looking for."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined) : null, post ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_view_PostPreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      post: post
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

_s(PostPreviewRoute, "rEt+qtgo1BN4OedueqLmKQlM8sc=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"]];
});

_c = PostPreviewRoute;
const styles = {
  page: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PostPreviewRoute);

var _c;

__webpack_require__.$Refresh$.register(_c, "PostPreviewRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes/features/Features.tsx":
/*!******************************************!*\
  !*** ./src/routes/features/Features.tsx ***!
  \******************************************/
/*! exports provided: FeatureWithIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureWithIcon", function() { return FeatureWithIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general */ "./src/components/general/index.ts");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var _components_view_Phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/view/Phone */ "./src/components/view/Phone.tsx");
/* harmony import */ var _assets_images_LandingPhone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/LandingPhone.png */ "./src/assets/images/LandingPhone.png");
/* harmony import */ var _assets_images_SignUpPhone_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/SignUpPhone.png */ "./src/assets/images/SignUpPhone.png");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/routes/features/Features.tsx";








const FeatureWithIcon = ({
  number,
  title,
  description
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
  style: styles.featureContainer,
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 18,
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].lightBlue,
    weight: "medium",
    style: {
      marginBottom: 8
    },
    children: ["00", number]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 36,
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
    weight: "bold",
    style: {
      marginBottom: 16
    },
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    textWrap: true,
    fontSize: 18,
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].gray2,
    lineHeight: 1.5,
    children: description
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 24,
  columnNumber: 3
}, undefined);
_c = FeatureWithIcon;

const FeaturesRoute = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    style: styles.page,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: styles.featureTextContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FeatureWithIcon, {
        number: 1,
        title: "Clip",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FeatureWithIcon, {
        number: 3,
        title: "Discover",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: styles.ad,
      className: "perspective",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/",
        style: styles.ad,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_view_Phone__WEBPACK_IMPORTED_MODULE_3__["default"], {
          animClassName: "leftPhoneAnim",
          image: _assets_images_LandingPhone_png__WEBPACK_IMPORTED_MODULE_4__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_view_Phone__WEBPACK_IMPORTED_MODULE_3__["default"], {
          animClassName: "rightPhoneAnim",
          image: _assets_images_SignUpPhone_png__WEBPACK_IMPORTED_MODULE_5__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: styles.featureTextContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FeatureWithIcon, {
        number: 2,
        title: "Create",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FeatureWithIcon, {
        number: 4,
        title: "Compete",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined);
};

_c2 = FeaturesRoute;
const styles = {
  page: {
    display: "flex",
    justifyContent: "center" // flexDirection: "column",

  },
  featureTextContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  ad: {
    flex: 2,
    height: "100%",
    display: "flex",
    justifyContent: "center"
  },
  featureContainer: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    marginBottom: 48
  },
  featureIcon: {
    width: "20%"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FeaturesRoute);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "FeatureWithIcon");
__webpack_require__.$Refresh$.register(_c2, "FeaturesRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes/home/Download.tsx":
/*!**************************************!*\
  !*** ./src/routes/home/Download.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general */ "./src/components/general/index.ts");
/* harmony import */ var _assets_icons_AstroFull_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/AstroFull.svg */ "./src/assets/icons/AstroFull.svg");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var _components_view_SocialBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/view/SocialBar */ "./src/components/view/SocialBar.tsx");
/* harmony import */ var _components_view_SplitView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/view/SplitView */ "./src/components/view/SplitView.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/routes/home/Download.tsx";








const DownloadRoute = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_view_SplitView__WEBPACK_IMPORTED_MODULE_5__["default"], {
    left: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: styles.downloadContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: styles.logoContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
          src: _assets_icons_AstroFull_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
          className: "astroAnim"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        color: _constants_Colors__WEBPACK_IMPORTED_MODULE_3__["default"].white,
        weight: "medium",
        fontSize: 38,
        children: "Download Now!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        color: _constants_Colors__WEBPACK_IMPORTED_MODULE_3__["default"].gray2,
        fontSize: 18,
        style: {
          marginTop: 16
        },
        children: "Hover is now avaliable for iOS and Android"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: styles.buttonContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
          style: styles.button,
          href: "https://apps.apple.com/us/app/hovergg/id1476613869",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            outline: true,
            buttonText: "Download for iOS",
            containerStyles: {
              marginRight: 8
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
          style: styles.button,
          href: "https://play.google.com/store/apps/details?id=com.mergg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            outline: true,
            buttonText: "Download for Android",
            containerStyles: {
              marginLeft: 8
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_view_SocialBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        containerStyles: {
          marginTop: 64
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined),
    right: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: styles.phoneContainer,
      className: "perspective"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

_c = DownloadRoute;
const styles = {
  logoContainer: {
    width: "40%",
    marginBottom: 16
  },
  downloadContainer: {
    alignSelf: "center",
    width: "100%" // backgroundColor: "yellow",

  },
  button: {
    textDecoration: "none"
  },
  phoneContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex"
  },
  particles: {
    position: "absolute",
    left: 0
  },
  buttonContainer: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DownloadRoute);

var _c;

__webpack_require__.$Refresh$.register(_c, "DownloadRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes/home/NotFound.tsx":
/*!**************************************!*\
  !*** ./src/routes/home/NotFound.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_view_EmptyFiller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/view/EmptyFiller */ "./src/components/view/EmptyFiller.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/routes/home/NotFound.tsx";




const NotFoundRoute = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    style: styles.page,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_view_EmptyFiller__WEBPACK_IMPORTED_MODULE_1__["default"], {
      error: "404",
      description: "We can't find the page you are looking for."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

_c = NotFoundRoute;
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (NotFoundRoute);

var _c;

__webpack_require__.$Refresh$.register(_c, "NotFoundRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes/legal/DataPolicy.tsx":
/*!*****************************************!*\
  !*** ./src/routes/legal/DataPolicy.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_view_legal_DataPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/view/legal/DataPolicy */ "./src/components/view/legal/DataPolicy.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/routes/legal/DataPolicy.tsx";




const DataPolicyRoute = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    style: styles.page,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: styles.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_view_legal_DataPolicy__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

_c = DataPolicyRoute;
const styles = {
  page: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "80%"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DataPolicyRoute);

var _c;

__webpack_require__.$Refresh$.register(_c, "DataPolicyRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes/legal/Legal.tsx":
/*!************************************!*\
  !*** ./src/routes/legal/Legal.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general */ "./src/components/general/index.ts");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_view_SplitView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/view/SplitView */ "./src/components/view/SplitView.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/routes/legal/Legal.tsx";







const LeaglRoute = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_view_SplitView__WEBPACK_IMPORTED_MODULE_4__["default"], {
    left: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: styles.legalTextContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
          weight: "medium",
          fontSize: 38,
          children: "Legal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          textWrap: true,
          color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].gray2,
          fontSize: 18,
          weight: "regular",
          style: {
            marginTop: 16
          },
          children: ["Want to voluntarily look over of Terms and Conditions, Privacy or Data policy? Well then this is the page for you! If you have any legal questions, feel free to contact us at -", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
            style: styles.link,
            href: "mailto:support@hover.gg",
            children: "support@hover.gg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: styles.buttonContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          to: "/tos",
          style: styles.routeLink,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            buttonStyles: {
              borderColor: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].gray2
            },
            buttonHoverStyles: {
              borderColor: `#${_constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].gray2}00`
            },
            outline: true,
            buttonText: "Terms of Service"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          to: "/datapolicy",
          style: styles.routeLink,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            outline: true,
            buttonText: "Data Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          to: "/privacypolicy",
          style: styles.routeLink,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            outline: true,
            buttonText: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

_c = LeaglRoute;
const styles = {
  buttonContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginTop: 32
  },
  legalTextContainer: {
    marginTop: "30%",
    marginRight: 32
  },
  routeLink: {
    textDecoration: "none",
    marginRight: 16
  },
  link: {
    textDecoration: "none",
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].lightBlue
  }
};
/* harmony default export */ __webpack_exports__["default"] = (LeaglRoute);

var _c;

__webpack_require__.$Refresh$.register(_c, "LeaglRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes/legal/PrivacyPolicy.tsx":
/*!********************************************!*\
  !*** ./src/routes/legal/PrivacyPolicy.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_view_legal_PrivacyPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/view/legal/PrivacyPolicy */ "./src/components/view/legal/PrivacyPolicy.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/routes/legal/PrivacyPolicy.tsx";




const PrivacyPolicyRoute = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    style: styles.page,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: styles.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_view_legal_PrivacyPolicy__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

_c = PrivacyPolicyRoute;
const styles = {
  page: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "80%"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PrivacyPolicyRoute);

var _c;

__webpack_require__.$Refresh$.register(_c, "PrivacyPolicyRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes/legal/TOS.tsx":
/*!**********************************!*\
  !*** ./src/routes/legal/TOS.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_view_legal_TOS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/view/legal/TOS */ "./src/components/view/legal/TOS.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/routes/legal/TOS.tsx";




const TOSRoute = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    style: styles.page,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: styles.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_view_legal_TOS__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

_c = TOSRoute;
const styles = {
  page: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "80%"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TOSRoute);

var _c;

__webpack_require__.$Refresh$.register(_c, "TOSRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes/support/Support.tsx":
/*!****************************************!*\
  !*** ./src/routes/support/Support.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general */ "./src/components/general/index.ts");
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Colors */ "./src/constants/Colors.ts");
/* harmony import */ var _components_view_SocialBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/view/SocialBar */ "./src/components/view/SocialBar.tsx");
/* harmony import */ var _components_view_SplitView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/view/SplitView */ "./src/components/view/SplitView.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/henryheffernan/Documents/Hover/newsite/hover-site/src/routes/support/Support.tsx";







const SupportRoute = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_view_SplitView__WEBPACK_IMPORTED_MODULE_4__["default"], {
    left: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: styles.supportTextContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].white,
        weight: "medium",
        fontSize: 38,
        children: "Support"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_general__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        textWrap: true,
        color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].gray2,
        fontSize: 18,
        weight: "regular",
        style: {
          marginTop: 16
        },
        children: ["If you are currently experiencing an issue with Hover, you can send us an email at -", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          style: styles.link,
          href: "mailto:support@hover.gg",
          children: "support@hover.gg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, undefined), ". If email is a bit too old school, feel free to join our discord and we can help you out there!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_view_SocialBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        containerStyles: {
          marginTop: 64
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

_c = SupportRoute;
const styles = {
  supportTextContainer: {
    marginTop: "30%",
    marginRight: 32
  },
  link: {
    textDecoration: "none",
    color: _constants_Colors__WEBPACK_IMPORTED_MODULE_2__["default"].lightBlue
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SupportRoute);

var _c;

__webpack_require__.$Refresh$.register(_c, "SupportRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/henryheffernan/Documents/Hover/newsite/hover-site/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/henryheffernan/Documents/Hover/newsite/hover-site/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/henryheffernan/Documents/Hover/newsite/hover-site/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/henryheffernan/Documents/Hover/newsite/hover-site/src/index.tsx */"./src/index.tsx");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map