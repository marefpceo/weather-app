/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/sunrise-bg.jpg */ "./src/assets/sunrise-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/search.svg */ "./src/assets/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --background-light: #d6a362;\n  --background-dark: #010101;\n  --header-bg-dark: #010101d2;\n  --header-bg-light: #d6a362d2;\n  --text-light: #d6a362;\n  --text-dark: #010101;\n  --search-bg: #f3f3f3;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: var(--background-light);\n  margin: 0;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  background-color: var(--header-bg-dark);\n  color: var(--text-light);\n  margin: 0;\n  height: 75px;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2.5rem;\n  padding: 0 25px;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 50px;\n}\n\nform {\n  display: flex;\n  padding: 2px;\n  background-color: var(--search-bg);\n  border: 1px solid currentColor;\n  border-radius: 5px;\n}\n\ninput {\n  border: none;\n  background: var(--search-bg);\n  width: 300px;\n  height: 30px;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton {\n  text-indent: -999px;\n  overflow: hidden;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  margin: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  background: var(--search-bg) url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\n  background-size: contain;\n  cursor: pointer;\n  opacity: 0.7;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  padding: 0 50px;\n  background-color: var(--background-light);\n  border: 2px solid var(--header-bg-dark);\n}\n\n#state-list div{\n  background-color: var(--search-bg);\n  width: 336px;\n  height: 30px;\n  border: 1px solid var(--header-bg-light);\n  border-radius: 4px;\n  text-align: center;\n  padding: 5px;\n  cursor: pointer;\n}\n\n#state-list div:hover {\n  background-color: var(--header-bg-dark);\n  color: var(--text-light);\n}\n\n.info {\n  display: block;\n  font-size: 1.5rem;\n  line-height: 30px;\n  background-color: var(--search-bg);\n  height: auto;\n  border-radius: 8px;\n  border: 1px solid var(--header-bg-dark);\n  margin-top: 50px;\n  padding: 15px;\n}\n\n#info-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  gap: 75px;\n}\n\n#info-body {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.2rem;\n}\n\n#weather-icon {\n  width: 125px;\n  height: 125px;\n}\n\n#current-temp :first-child{\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n\n#wind-div {\n  display: flex;\n  align-items: center;\n}\n\n#wind-div :last-child {\n  font-size: 1.5rem;\n}\n\n#wind-icon,\n#sunrise-icon,\n#sunset-icon {\n  width: 70px;\n  height: 70px;\n}\n\n#sun-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.sun {\n  display: flex;\n  font-size: 1rem;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,0BAA0B;EAC1B,2BAA2B;EAC3B,4BAA4B;EAC5B,qBAAqB;EACrB,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,yDAA4C;EAC5C,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,yCAAyC;EACzC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uCAAuC;EACvC,wBAAwB;EACxB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kCAAkC;EAClC,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,SAAS;EACT,6BAA6B;EAC7B,sBAAsB;EACtB,qFAAoE;EACpE,wBAAwB;EACxB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,eAAe;EACf,yCAAyC;EACzC,uCAAuC;AACzC;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,YAAY;EACZ,wCAAwC;EACxC,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;EACvC,wBAAwB;AAC1B;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,uCAAuC;EACvC,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;EAGE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;AACrB","sourcesContent":[":root {\n  --background-light: #d6a362;\n  --background-dark: #010101;\n  --header-bg-dark: #010101d2;\n  --header-bg-light: #d6a362d2;\n  --text-light: #d6a362;\n  --text-dark: #010101;\n  --search-bg: #f3f3f3;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  background-image: url(assets/sunrise-bg.jpg);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: var(--background-light);\n  margin: 0;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  background-color: var(--header-bg-dark);\n  color: var(--text-light);\n  margin: 0;\n  height: 75px;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2.5rem;\n  padding: 0 25px;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 50px;\n}\n\nform {\n  display: flex;\n  padding: 2px;\n  background-color: var(--search-bg);\n  border: 1px solid currentColor;\n  border-radius: 5px;\n}\n\ninput {\n  border: none;\n  background: var(--search-bg);\n  width: 300px;\n  height: 30px;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton {\n  text-indent: -999px;\n  overflow: hidden;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  margin: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  background: var(--search-bg) url(assets/search.svg) no-repeat center;\n  background-size: contain;\n  cursor: pointer;\n  opacity: 0.7;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  padding: 0 50px;\n  background-color: var(--background-light);\n  border: 2px solid var(--header-bg-dark);\n}\n\n#state-list div{\n  background-color: var(--search-bg);\n  width: 336px;\n  height: 30px;\n  border: 1px solid var(--header-bg-light);\n  border-radius: 4px;\n  text-align: center;\n  padding: 5px;\n  cursor: pointer;\n}\n\n#state-list div:hover {\n  background-color: var(--header-bg-dark);\n  color: var(--text-light);\n}\n\n.info {\n  display: block;\n  font-size: 1.5rem;\n  line-height: 30px;\n  background-color: var(--search-bg);\n  height: auto;\n  border-radius: 8px;\n  border: 1px solid var(--header-bg-dark);\n  margin-top: 50px;\n  padding: 15px;\n}\n\n#info-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  gap: 75px;\n}\n\n#info-body {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.2rem;\n}\n\n#weather-icon {\n  width: 125px;\n  height: 125px;\n}\n\n#current-temp :first-child{\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n\n#wind-div {\n  display: flex;\n  align-items: center;\n}\n\n#wind-div :last-child {\n  font-size: 1.5rem;\n}\n\n#wind-icon,\n#sunrise-icon,\n#sunset-icon {\n  width: 70px;\n  height: 70px;\n}\n\n#sun-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.sun {\n  display: flex;\n  font-size: 1rem;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**************************************************************!*\
  !*** ./src/assets/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./01d.svg": "./src/assets/01d.svg",
	"./01n.svg": "./src/assets/01n.svg",
	"./02d.svg": "./src/assets/02d.svg",
	"./02n.svg": "./src/assets/02n.svg",
	"./03d.svg": "./src/assets/03d.svg",
	"./03n.svg": "./src/assets/03n.svg",
	"./04d.svg": "./src/assets/04d.svg",
	"./04n.svg": "./src/assets/04n.svg",
	"./09d.svg": "./src/assets/09d.svg",
	"./09n.svg": "./src/assets/09n.svg",
	"./10d.svg": "./src/assets/10d.svg",
	"./10n.svg": "./src/assets/10n.svg",
	"./11d.svg": "./src/assets/11d.svg",
	"./11n.svg": "./src/assets/11n.svg",
	"./13d.svg": "./src/assets/13d.svg",
	"./13n.svg": "./src/assets/13n.svg",
	"./50d.svg": "./src/assets/50d.svg",
	"./50n.svg": "./src/assets/50n.svg",
	"./night-bg.jpg": "./src/assets/night-bg.jpg",
	"./search.svg": "./src/assets/search.svg",
	"./sunrise-bg.jpg": "./src/assets/sunrise-bg.jpg",
	"./sunrise.svg": "./src/assets/sunrise.svg",
	"./sunset.svg": "./src/assets/sunset.svg",
	"./wind.svg": "./src/assets/wind.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tempToCelsius": () => (/* binding */ tempToCelsius),
/* harmony export */   "tempToFahrenheit": () => (/* binding */ tempToFahrenheit),
/* harmony export */   "timeConversion": () => (/* binding */ timeConversion)
/* harmony export */ });
const tempToFahrenheit = (temp) => {
  let fTemp;
  fTemp = Math.round((temp - 273.15) * (9/5) + 32);
  return fTemp;
}

const tempToCelsius = (temp) => {
  let cTemp;
  cTemp = Math.round(temp - 273.15);
  return cTemp;
}

const timeConversion = (epochTime) => {
  let utcTime = (epochTime * 1000);
  let time = new Date(utcTime).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'});
  return time;
}

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInputData": () => (/* binding */ getInputData),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _pagelayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagelayout */ "./src/pagelayout.js");


const apiKey = '8f640f8fcc7f3fdc5f949c5b28f1bf02';
const outputData = {};

// Uses OpenWeather geocoding API to return lat/ long coordinates for searched location
async function getGeoData(location) {
  const searchLocation = location;
  try {
    const locationData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchLocation}&limit=5&appid=${apiKey}`,
      {mode: 'cors'});
    const locationGeoData = await locationData.json();
    return locationGeoData;
  } catch (error) {
    Error(error);
  }
}

// Gets user city input to search
const getInputData = () => {
  const searchBtn = document.getElementById('search-btn');
  
  searchBtn.addEventListener('click', () => {
    let inputValue = document.getElementById('search');
    getWeatherData(inputValue.value);
    inputValue.value = '';
  });
}

// Gets current weather forecast for selected location
async function getWeatherData(searchInput) {
  try {
    const cityData = await getGeoData(searchInput);
    let lat, long, state;
    let stateList = [];
    if (cityData.length > 1) {
      for (let i = 0; i < cityData.length; i += 1) {
        stateList.push(cityData[i].state);
      }
      (0,_pagelayout__WEBPACK_IMPORTED_MODULE_0__.stateListModal)(stateList);

      console.log(stateList);
      let selection = 'Virginia'; // For testin purposes only. User will select state from list
      let index = cityData.findIndex(city => city.state === selection);
      lat = cityData[index].lat;
      long = cityData[index].lon;
      state = selection;
      console.log(cityData[index].state);
    } else {
      lat = cityData[0].lat;
      long = cityData[0].lon;
      state = cityData[0].state;
    }
    
    const responses = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`,
      {mode: 'cors'});
    const currentWeather = await responses.json();
    
    outputData.city = searchInput;
    outputData.state = state;
    outputData.currentTemps = currentWeather.main;
    outputData.description = currentWeather.weather[0].description;
    outputData.icon = currentWeather.weather[0].icon;
    outputData.wind = currentWeather.wind;
    outputData.sunrise = currentWeather.sys.sunrise;
    outputData.sunset = currentWeather.sys.sunset;
  
    (0,_pagelayout__WEBPACK_IMPORTED_MODULE_0__.clearInfo)();
    (0,_pagelayout__WEBPACK_IMPORTED_MODULE_0__.info)(outputData);

    console.log(cityData, currentWeather);
    console.log(outputData);
    
  } catch (error) {
    console.log(Error(error));
    alert('No data found for the city');
  }
}

/***/ }),

/***/ "./src/pagelayout.js":
/*!***************************!*\
  !*** ./src/pagelayout.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearInfo": () => (/* binding */ clearInfo),
/* harmony export */   "info": () => (/* binding */ info),
/* harmony export */   "loadPage": () => (/* binding */ loadPage),
/* harmony export */   "stateListModal": () => (/* binding */ stateListModal)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");



const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key.replace('./', '')] = r(key)));
}

// eslint-disable-next-line no-undef
importAll(__webpack_require__("./src/assets sync \\.(png%7Cjpe?g%7Csvg)$"));

const content = document.getElementById('content');
const infoDiv = document.createElement('div');
const sectionDiv = document.createElement('section');

const header = () => {
  const headerDiv = document.createElement('header');
  const title = document.createElement('h1');

  title.innerText = 'The Weather App';
  headerDiv.appendChild(title);
  content.appendChild(headerDiv);
}

const info = (weatherObject) => {
  const infoHead = document.createElement('div');
  const infoBody = document.createElement('div');
  const cityDiv = document.createElement('div');
  const icon = document.createElement('img');
  const sunriseIcon = document.createElement('img');
  const sunsetIcon = document.createElement('img');
  const windIcon = document.createElement('img');
  const tempDiv = document.createElement('div');
  const sunDiv = document.createElement('div');
  const sunriseDiv = document.createElement('div');
  const sunsetDiv = document.createElement('div');
  const windDiv = document.createElement('div');

  infoDiv.className = 'info';
  infoHead.id = 'info-header';
  infoBody.id = 'info-body';
  cityDiv.id = 'city-name';
  icon.id = 'weather-icon';
  sunriseIcon.id = 'sunrise-icon';
  sunsetIcon.id = 'sunset-icon';
  sunriseDiv.className = 'sun';
  sunsetDiv.className = 'sun';
  windIcon.id = 'wind-icon';
  tempDiv.id = 'current-temp';
  sunDiv.id = 'sun-div';
  windDiv.id = 'wind-div';

  cityDiv.innerHTML = weatherObject.city + ', <br/>' + weatherObject.state;
  icon.src = cache[`${weatherObject.icon}.svg`];
  tempDiv.innerHTML = `<div>${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.tempToFahrenheit)(weatherObject.currentTemps.temp)}</div>`;
  tempDiv.innerHTML += `<div>${weatherObject.description}</div>`;

  sunriseIcon.src = cache[`sunrise.svg`];
  sunriseDiv.appendChild(sunriseIcon);
  sunriseDiv.innerHTML += `<div>${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.timeConversion)(weatherObject.sunrise)}</div>`;

  sunsetIcon.src = cache[`sunset.svg`];
  sunsetDiv.appendChild(sunsetIcon);
  sunsetDiv.innerHTML += `<div>${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.timeConversion)(weatherObject.sunset)}</div>`;

  windIcon.src = cache[`wind.svg`];
  windDiv.appendChild(windIcon);
  windDiv.innerHTML += `<div> ${Math.round(weatherObject.wind.speed)} mph</div>`;

  infoHead.appendChild(cityDiv);
  infoHead.appendChild(icon);
  infoHead.appendChild(tempDiv);

  sunDiv.appendChild(sunriseDiv);
  sunDiv.appendChild(sunsetDiv);

  infoBody.appendChild(sunDiv);
  infoBody.appendChild(windDiv);

  infoDiv.appendChild(infoHead);
  infoDiv.appendChild(infoBody);
  
  console.log(weatherObject);
  console.log(cache);
}

const section = () => {
  
  const form = document.createElement('form');
  const searchInput = document.createElement('input');
  const submitBtn = document.createElement('button');
  
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('name', 'search');
  searchInput.setAttribute('placeholder', 'Enter city');
  searchInput.setAttribute('id', 'search');
  
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('id', 'search-btn');

  form.appendChild(searchInput);
  form.appendChild(submitBtn);
  sectionDiv.appendChild(form);
  sectionDiv.appendChild(infoDiv);
  content.appendChild(sectionDiv);
}

const loadPage = () => {
  header();
  section();  
}

const clearInfo = () => {
  infoDiv.innerHTML = '';
}

const stateListModal = (arrayList) => {
  const stateList = document.createElement('div');
  // let selection;

  stateList.id = 'state-list';
  infoDiv.style.display = 'none';

  for (let i = 0; i < arrayList.length; i += 1) {
    const state = document.createElement('div');
    state.id = arrayList[i];
    state.innerHTML = arrayList[i];
    stateList.appendChild(state);
  }
  sectionDiv.appendChild(stateList);

  // stateList.addEventListener('click', (e) => {
  //   selection = e.target.id;
  //   console.log(selection);
  // });
  // return selection;
}

/***/ }),

/***/ "./src/assets/01d.svg":
/*!****************************!*\
  !*** ./src/assets/01d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/01d.svg";

/***/ }),

/***/ "./src/assets/01n.svg":
/*!****************************!*\
  !*** ./src/assets/01n.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/01n.svg";

/***/ }),

/***/ "./src/assets/02d.svg":
/*!****************************!*\
  !*** ./src/assets/02d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/02d.svg";

/***/ }),

/***/ "./src/assets/02n.svg":
/*!****************************!*\
  !*** ./src/assets/02n.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/02n.svg";

/***/ }),

/***/ "./src/assets/03d.svg":
/*!****************************!*\
  !*** ./src/assets/03d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/03d.svg";

/***/ }),

/***/ "./src/assets/03n.svg":
/*!****************************!*\
  !*** ./src/assets/03n.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/03n.svg";

/***/ }),

/***/ "./src/assets/04d.svg":
/*!****************************!*\
  !*** ./src/assets/04d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/04d.svg";

/***/ }),

/***/ "./src/assets/04n.svg":
/*!****************************!*\
  !*** ./src/assets/04n.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/04n.svg";

/***/ }),

/***/ "./src/assets/09d.svg":
/*!****************************!*\
  !*** ./src/assets/09d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/09d.svg";

/***/ }),

/***/ "./src/assets/09n.svg":
/*!****************************!*\
  !*** ./src/assets/09n.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/09n.svg";

/***/ }),

/***/ "./src/assets/10d.svg":
/*!****************************!*\
  !*** ./src/assets/10d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/10d.svg";

/***/ }),

/***/ "./src/assets/10n.svg":
/*!****************************!*\
  !*** ./src/assets/10n.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/10n.svg";

/***/ }),

/***/ "./src/assets/11d.svg":
/*!****************************!*\
  !*** ./src/assets/11d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/11d.svg";

/***/ }),

/***/ "./src/assets/11n.svg":
/*!****************************!*\
  !*** ./src/assets/11n.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/11n.svg";

/***/ }),

/***/ "./src/assets/13d.svg":
/*!****************************!*\
  !*** ./src/assets/13d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/13d.svg";

/***/ }),

/***/ "./src/assets/13n.svg":
/*!****************************!*\
  !*** ./src/assets/13n.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/13n.svg";

/***/ }),

/***/ "./src/assets/50d.svg":
/*!****************************!*\
  !*** ./src/assets/50d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/50d.svg";

/***/ }),

/***/ "./src/assets/50n.svg":
/*!****************************!*\
  !*** ./src/assets/50n.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/50n.svg";

/***/ }),

/***/ "./src/assets/night-bg.jpg":
/*!*********************************!*\
  !*** ./src/assets/night-bg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/night-bg.jpg";

/***/ }),

/***/ "./src/assets/search.svg":
/*!*******************************!*\
  !*** ./src/assets/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/search.svg";

/***/ }),

/***/ "./src/assets/sunrise-bg.jpg":
/*!***********************************!*\
  !*** ./src/assets/sunrise-bg.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/sunrise-bg.jpg";

/***/ }),

/***/ "./src/assets/sunrise.svg":
/*!********************************!*\
  !*** ./src/assets/sunrise.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/sunrise.svg";

/***/ }),

/***/ "./src/assets/sunset.svg":
/*!*******************************!*\
  !*** ./src/assets/sunset.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/sunset.svg";

/***/ }),

/***/ "./src/assets/wind.svg":
/*!*****************************!*\
  !*** ./src/assets/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/wind.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _pagelayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagelayout */ "./src/pagelayout.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_pagelayout__WEBPACK_IMPORTED_MODULE_1__.loadPage)();
(0,_logic__WEBPACK_IMPORTED_MODULE_0__.getInputData)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ0M7QUFDbkI7OztBQUdyQixxREFBUTtBQUNSLG9EQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcGFnZWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL3N1bnJpc2UtYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiYXNzZXRzL3NlYXJjaC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZDZhMzYyO1xcbiAgLS1iYWNrZ3JvdW5kLWRhcms6ICMwMTAxMDE7XFxuICAtLWhlYWRlci1iZy1kYXJrOiAjMDEwMTAxZDI7XFxuICAtLWhlYWRlci1iZy1saWdodDogI2Q2YTM2MmQyO1xcbiAgLS10ZXh0LWxpZ2h0OiAjZDZhMzYyO1xcbiAgLS10ZXh0LWRhcms6ICMwMTAxMDE7XFxuICAtLXNlYXJjaC1iZzogI2YzZjNmMztcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogNzVweDtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBwYWRkaW5nOiAwIDI1cHg7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iZyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlYXJjaC1iZyk7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB0ZXh0LWluZGVudDogLTk5OXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlYXJjaC1iZykgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgcGFkZGluZzogMCA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oZWFkZXItYmctZGFyayk7XFxufVxcblxcbiNzdGF0ZS1saXN0IGRpdntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iZyk7XFxuICB3aWR0aDogMzM2cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItYmctbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc3RhdGUtbGlzdCBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWRhcmspO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYmcpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWJnLWRhcmspO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbiNpbmZvLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgZ2FwOiA3NXB4O1xcbn1cXG5cXG4jaW5mby1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI3dlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogMTI1cHg7XFxuICBoZWlnaHQ6IDEyNXB4O1xcbn1cXG5cXG4jY3VycmVudC10ZW1wIDpmaXJzdC1jaGlsZHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiN3aW5kLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3dpbmQtZGl2IDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jd2luZC1pY29uLFxcbiNzdW5yaXNlLWljb24sXFxuI3N1bnNldC1pY29uIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4jc3VuLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseURBQTRDO0VBQzVDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHlDQUF5QztFQUN6QyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHFGQUFvRTtFQUNwRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHlDQUF5QztFQUN6Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZDZhMzYyO1xcbiAgLS1iYWNrZ3JvdW5kLWRhcms6ICMwMTAxMDE7XFxuICAtLWhlYWRlci1iZy1kYXJrOiAjMDEwMTAxZDI7XFxuICAtLWhlYWRlci1iZy1saWdodDogI2Q2YTM2MmQyO1xcbiAgLS10ZXh0LWxpZ2h0OiAjZDZhMzYyO1xcbiAgLS10ZXh0LWRhcms6ICMwMTAxMDE7XFxuICAtLXNlYXJjaC1iZzogI2YzZjNmMztcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9zdW5yaXNlLWJnLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctZGFyayk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgcGFkZGluZzogMCAyNXB4O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYmcpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWFyY2gtYmcpO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgdGV4dC1pbmRlbnQ6IC05OTlweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWFyY2gtYmcpIHVybChhc3NldHMvc2VhcmNoLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGVhZGVyLWJnLWRhcmspO1xcbn1cXG5cXG4jc3RhdGUtbGlzdCBkaXZ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYmcpO1xcbiAgd2lkdGg6IDMzNnB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWJnLWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3N0YXRlLWxpc3QgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG59XFxuXFxuLmluZm8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWJnKTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1iZy1kYXJrKTtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4jaW5mby1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIGdhcDogNzVweDtcXG59XFxuXFxuI2luZm8tYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiN3ZWF0aGVyLWljb24ge1xcbiAgd2lkdGg6IDEyNXB4O1xcbiAgaGVpZ2h0OiAxMjVweDtcXG59XFxuXFxuI2N1cnJlbnQtdGVtcCA6Zmlyc3QtY2hpbGR7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jd2luZC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN3aW5kLWRpdiA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI3dpbmQtaWNvbixcXG4jc3VucmlzZS1pY29uLFxcbiNzdW5zZXQtaWNvbiB7XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuI3N1bi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuLzAxZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvMDFkLnN2Z1wiLFxuXHRcIi4vMDFuLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy8wMW4uc3ZnXCIsXG5cdFwiLi8wMmQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzLzAyZC5zdmdcIixcblx0XCIuLzAybi5zdmdcIjogXCIuL3NyYy9hc3NldHMvMDJuLnN2Z1wiLFxuXHRcIi4vMDNkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy8wM2Quc3ZnXCIsXG5cdFwiLi8wM24uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzLzAzbi5zdmdcIixcblx0XCIuLzA0ZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvMDRkLnN2Z1wiLFxuXHRcIi4vMDRuLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy8wNG4uc3ZnXCIsXG5cdFwiLi8wOWQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzLzA5ZC5zdmdcIixcblx0XCIuLzA5bi5zdmdcIjogXCIuL3NyYy9hc3NldHMvMDluLnN2Z1wiLFxuXHRcIi4vMTBkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy8xMGQuc3ZnXCIsXG5cdFwiLi8xMG4uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzLzEwbi5zdmdcIixcblx0XCIuLzExZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvMTFkLnN2Z1wiLFxuXHRcIi4vMTFuLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy8xMW4uc3ZnXCIsXG5cdFwiLi8xM2Quc3ZnXCI6IFwiLi9zcmMvYXNzZXRzLzEzZC5zdmdcIixcblx0XCIuLzEzbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvMTNuLnN2Z1wiLFxuXHRcIi4vNTBkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy81MGQuc3ZnXCIsXG5cdFwiLi81MG4uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzLzUwbi5zdmdcIixcblx0XCIuL25pZ2h0LWJnLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9uaWdodC1iZy5qcGdcIixcblx0XCIuL3NlYXJjaC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc2VhcmNoLnN2Z1wiLFxuXHRcIi4vc3VucmlzZS1iZy5qcGdcIjogXCIuL3NyYy9hc3NldHMvc3VucmlzZS1iZy5qcGdcIixcblx0XCIuL3N1bnJpc2Uuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N1bnJpc2Uuc3ZnXCIsXG5cdFwiLi9zdW5zZXQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N1bnNldC5zdmdcIixcblx0XCIuL3dpbmQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3dpbmQuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJleHBvcnQgY29uc3QgdGVtcFRvRmFocmVuaGVpdCA9ICh0ZW1wKSA9PiB7XG4gIGxldCBmVGVtcDtcbiAgZlRlbXAgPSBNYXRoLnJvdW5kKCh0ZW1wIC0gMjczLjE1KSAqICg5LzUpICsgMzIpO1xuICByZXR1cm4gZlRlbXA7XG59XG5cbmV4cG9ydCBjb25zdCB0ZW1wVG9DZWxzaXVzID0gKHRlbXApID0+IHtcbiAgbGV0IGNUZW1wO1xuICBjVGVtcCA9IE1hdGgucm91bmQodGVtcCAtIDI3My4xNSk7XG4gIHJldHVybiBjVGVtcDtcbn1cblxuZXhwb3J0IGNvbnN0IHRpbWVDb252ZXJzaW9uID0gKGVwb2NoVGltZSkgPT4ge1xuICBsZXQgdXRjVGltZSA9IChlcG9jaFRpbWUgKiAxMDAwKTtcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSh1dGNUaW1lKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7aG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0J30pO1xuICByZXR1cm4gdGltZTtcbn0iLCJpbXBvcnQgeyBjbGVhckluZm8sIGluZm8sIHN0YXRlTGlzdE1vZGFsIH0gZnJvbSAnLi9wYWdlbGF5b3V0JztcblxuY29uc3QgYXBpS2V5ID0gJzhmNjQwZjhmY2M3ZjNmZGM1Zjk0OWM1YjI4ZjFiZjAyJztcbmNvbnN0IG91dHB1dERhdGEgPSB7fTtcblxuLy8gVXNlcyBPcGVuV2VhdGhlciBnZW9jb2RpbmcgQVBJIHRvIHJldHVybiBsYXQvIGxvbmcgY29vcmRpbmF0ZXMgZm9yIHNlYXJjaGVkIGxvY2F0aW9uXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9EYXRhKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHNlYXJjaExvY2F0aW9uID0gbG9jYXRpb247XG4gIHRyeSB7XG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtzZWFyY2hMb2NhdGlvbn0mbGltaXQ9NSZhcHBpZD0ke2FwaUtleX1gLFxuICAgICAge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IGxvY2F0aW9uR2VvRGF0YSA9IGF3YWl0IGxvY2F0aW9uRGF0YS5qc29uKCk7XG4gICAgcmV0dXJuIGxvY2F0aW9uR2VvRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBFcnJvcihlcnJvcik7XG4gIH1cbn1cblxuLy8gR2V0cyB1c2VyIGNpdHkgaW5wdXQgdG8gc2VhcmNoXG5leHBvcnQgY29uc3QgZ2V0SW5wdXREYXRhID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ0bicpO1xuICBcbiAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBpbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuICAgIGdldFdlYXRoZXJEYXRhKGlucHV0VmFsdWUudmFsdWUpO1xuICAgIGlucHV0VmFsdWUudmFsdWUgPSAnJztcbiAgfSk7XG59XG5cbi8vIEdldHMgY3VycmVudCB3ZWF0aGVyIGZvcmVjYXN0IGZvciBzZWxlY3RlZCBsb2NhdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKHNlYXJjaElucHV0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBnZXRHZW9EYXRhKHNlYXJjaElucHV0KTtcbiAgICBsZXQgbGF0LCBsb25nLCBzdGF0ZTtcbiAgICBsZXQgc3RhdGVMaXN0ID0gW107XG4gICAgaWYgKGNpdHlEYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2l0eURhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RhdGVMaXN0LnB1c2goY2l0eURhdGFbaV0uc3RhdGUpO1xuICAgICAgfVxuICAgICAgc3RhdGVMaXN0TW9kYWwoc3RhdGVMaXN0KTtcblxuICAgICAgY29uc29sZS5sb2coc3RhdGVMaXN0KTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSAnVmlyZ2luaWEnOyAvLyBGb3IgdGVzdGluIHB1cnBvc2VzIG9ubHkuIFVzZXIgd2lsbCBzZWxlY3Qgc3RhdGUgZnJvbSBsaXN0XG4gICAgICBsZXQgaW5kZXggPSBjaXR5RGF0YS5maW5kSW5kZXgoY2l0eSA9PiBjaXR5LnN0YXRlID09PSBzZWxlY3Rpb24pO1xuICAgICAgbGF0ID0gY2l0eURhdGFbaW5kZXhdLmxhdDtcbiAgICAgIGxvbmcgPSBjaXR5RGF0YVtpbmRleF0ubG9uO1xuICAgICAgc3RhdGUgPSBzZWxlY3Rpb247XG4gICAgICBjb25zb2xlLmxvZyhjaXR5RGF0YVtpbmRleF0uc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXQgPSBjaXR5RGF0YVswXS5sYXQ7XG4gICAgICBsb25nID0gY2l0eURhdGFbMF0ubG9uO1xuICAgICAgc3RhdGUgPSBjaXR5RGF0YVswXS5zdGF0ZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9uZ30mYXBwaWQ9JHthcGlLZXl9YCxcbiAgICAgIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlcy5qc29uKCk7XG4gICAgXG4gICAgb3V0cHV0RGF0YS5jaXR5ID0gc2VhcmNoSW5wdXQ7XG4gICAgb3V0cHV0RGF0YS5zdGF0ZSA9IHN0YXRlO1xuICAgIG91dHB1dERhdGEuY3VycmVudFRlbXBzID0gY3VycmVudFdlYXRoZXIubWFpbjtcbiAgICBvdXRwdXREYXRhLmRlc2NyaXB0aW9uID0gY3VycmVudFdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBvdXRwdXREYXRhLmljb24gPSBjdXJyZW50V2VhdGhlci53ZWF0aGVyWzBdLmljb247XG4gICAgb3V0cHV0RGF0YS53aW5kID0gY3VycmVudFdlYXRoZXIud2luZDtcbiAgICBvdXRwdXREYXRhLnN1bnJpc2UgPSBjdXJyZW50V2VhdGhlci5zeXMuc3VucmlzZTtcbiAgICBvdXRwdXREYXRhLnN1bnNldCA9IGN1cnJlbnRXZWF0aGVyLnN5cy5zdW5zZXQ7XG4gIFxuICAgIGNsZWFySW5mbygpO1xuICAgIGluZm8ob3V0cHV0RGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhjaXR5RGF0YSwgY3VycmVudFdlYXRoZXIpO1xuICAgIGNvbnNvbGUubG9nKG91dHB1dERhdGEpO1xuICAgIFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKEVycm9yKGVycm9yKSk7XG4gICAgYWxlcnQoJ05vIGRhdGEgZm91bmQgZm9yIHRoZSBjaXR5Jyk7XG4gIH1cbn0iLCJpbXBvcnQgeyB0aW1lQ29udmVyc2lvbiB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyB0ZW1wVG9GYWhyZW5oZWl0IH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY29uc3QgY2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiAoY2FjaGVba2V5LnJlcGxhY2UoJy4vJywgJycpXSA9IHIoa2V5KSkpO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHNlY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICB0aXRsZS5pbm5lclRleHQgPSAnVGhlIFdlYXRoZXIgQXBwJztcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xufVxuXG5leHBvcnQgY29uc3QgaW5mbyA9ICh3ZWF0aGVyT2JqZWN0KSA9PiB7XG4gIGNvbnN0IGluZm9IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGluZm9Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBzdW5yaXNlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBzdW5zZXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHdpbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc3VuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHN1bnJpc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc3Vuc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBpbmZvRGl2LmNsYXNzTmFtZSA9ICdpbmZvJztcbiAgaW5mb0hlYWQuaWQgPSAnaW5mby1oZWFkZXInO1xuICBpbmZvQm9keS5pZCA9ICdpbmZvLWJvZHknO1xuICBjaXR5RGl2LmlkID0gJ2NpdHktbmFtZSc7XG4gIGljb24uaWQgPSAnd2VhdGhlci1pY29uJztcbiAgc3VucmlzZUljb24uaWQgPSAnc3VucmlzZS1pY29uJztcbiAgc3Vuc2V0SWNvbi5pZCA9ICdzdW5zZXQtaWNvbic7XG4gIHN1bnJpc2VEaXYuY2xhc3NOYW1lID0gJ3N1bic7XG4gIHN1bnNldERpdi5jbGFzc05hbWUgPSAnc3VuJztcbiAgd2luZEljb24uaWQgPSAnd2luZC1pY29uJztcbiAgdGVtcERpdi5pZCA9ICdjdXJyZW50LXRlbXAnO1xuICBzdW5EaXYuaWQgPSAnc3VuLWRpdic7XG4gIHdpbmREaXYuaWQgPSAnd2luZC1kaXYnO1xuXG4gIGNpdHlEaXYuaW5uZXJIVE1MID0gd2VhdGhlck9iamVjdC5jaXR5ICsgJywgPGJyLz4nICsgd2VhdGhlck9iamVjdC5zdGF0ZTtcbiAgaWNvbi5zcmMgPSBjYWNoZVtgJHt3ZWF0aGVyT2JqZWN0Lmljb259LnN2Z2BdO1xuICB0ZW1wRGl2LmlubmVySFRNTCA9IGA8ZGl2PiR7dGVtcFRvRmFocmVuaGVpdCh3ZWF0aGVyT2JqZWN0LmN1cnJlbnRUZW1wcy50ZW1wKX08L2Rpdj5gO1xuICB0ZW1wRGl2LmlubmVySFRNTCArPSBgPGRpdj4ke3dlYXRoZXJPYmplY3QuZGVzY3JpcHRpb259PC9kaXY+YDtcblxuICBzdW5yaXNlSWNvbi5zcmMgPSBjYWNoZVtgc3VucmlzZS5zdmdgXTtcbiAgc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlSWNvbik7XG4gIHN1bnJpc2VEaXYuaW5uZXJIVE1MICs9IGA8ZGl2PiR7dGltZUNvbnZlcnNpb24od2VhdGhlck9iamVjdC5zdW5yaXNlKX08L2Rpdj5gO1xuXG4gIHN1bnNldEljb24uc3JjID0gY2FjaGVbYHN1bnNldC5zdmdgXTtcbiAgc3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnNldEljb24pO1xuICBzdW5zZXREaXYuaW5uZXJIVE1MICs9IGA8ZGl2PiR7dGltZUNvbnZlcnNpb24od2VhdGhlck9iamVjdC5zdW5zZXQpfTwvZGl2PmA7XG5cbiAgd2luZEljb24uc3JjID0gY2FjaGVbYHdpbmQuc3ZnYF07XG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZEljb24pO1xuICB3aW5kRGl2LmlubmVySFRNTCArPSBgPGRpdj4gJHtNYXRoLnJvdW5kKHdlYXRoZXJPYmplY3Qud2luZC5zcGVlZCl9IG1waDwvZGl2PmA7XG5cbiAgaW5mb0hlYWQuYXBwZW5kQ2hpbGQoY2l0eURpdik7XG4gIGluZm9IZWFkLmFwcGVuZENoaWxkKGljb24pO1xuICBpbmZvSGVhZC5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcblxuICBzdW5EaXYuYXBwZW5kQ2hpbGQoc3VucmlzZURpdik7XG4gIHN1bkRpdi5hcHBlbmRDaGlsZChzdW5zZXREaXYpO1xuXG4gIGluZm9Cb2R5LmFwcGVuZENoaWxkKHN1bkRpdik7XG4gIGluZm9Cb2R5LmFwcGVuZENoaWxkKHdpbmREaXYpO1xuXG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoaW5mb0hlYWQpO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKGluZm9Cb2R5KTtcbiAgXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3QpO1xuICBjb25zb2xlLmxvZyhjYWNoZSk7XG59XG5cbmNvbnN0IHNlY3Rpb24gPSAoKSA9PiB7XG4gIFxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3NlYXJjaCcpO1xuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGNpdHknKTtcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2gnKTtcbiAgXG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlYXJjaC1idG4nKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICBzZWN0aW9uRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICBzZWN0aW9uRGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb25EaXYpO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gIGhlYWRlcigpO1xuICBzZWN0aW9uKCk7ICBcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5mbyA9ICgpID0+IHtcbiAgaW5mb0Rpdi5pbm5lckhUTUwgPSAnJztcbn1cblxuZXhwb3J0IGNvbnN0IHN0YXRlTGlzdE1vZGFsID0gKGFycmF5TGlzdCkgPT4ge1xuICBjb25zdCBzdGF0ZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gbGV0IHNlbGVjdGlvbjtcblxuICBzdGF0ZUxpc3QuaWQgPSAnc3RhdGUtbGlzdCc7XG4gIGluZm9EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5TGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhdGUuaWQgPSBhcnJheUxpc3RbaV07XG4gICAgc3RhdGUuaW5uZXJIVE1MID0gYXJyYXlMaXN0W2ldO1xuICAgIHN0YXRlTGlzdC5hcHBlbmRDaGlsZChzdGF0ZSk7XG4gIH1cbiAgc2VjdGlvbkRpdi5hcHBlbmRDaGlsZChzdGF0ZUxpc3QpO1xuXG4gIC8vIHN0YXRlTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgc2VsZWN0aW9uID0gZS50YXJnZXQuaWQ7XG4gIC8vICAgY29uc29sZS5sb2coc2VsZWN0aW9uKTtcbiAgLy8gfSk7XG4gIC8vIHJldHVybiBzZWxlY3Rpb247XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBnZXRJbnB1dERhdGEgfSBmcm9tICcuL2xvZ2ljJztcbmltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSAnLi9wYWdlbGF5b3V0JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmxvYWRQYWdlKCk7XG5nZXRJbnB1dERhdGEoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=