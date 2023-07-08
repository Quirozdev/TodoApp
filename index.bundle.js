"use strict";
(self["webpackChunktodoapp"] = self["webpackChunktodoapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-color-1: #172544;
    --main-color-2: #445a99;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    display: grid;
    grid-template-columns: minmax(150px, 200px) 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "header  header  "
        "sidebar content "
        "footer  footer  ";
}

header {
    background-color: var(--main-color-1);
    grid-area: header;
}

.sidebar {
    background-color: var(--main-color-2);
    grid-area: sidebar;
}

.filters, .projects-container, .projects {
    display: flex;
    flex-direction: column;
}

.sidebar-btn, .project-btn, #add-todo-btn {
    cursor: pointer;
    padding: 4px 0;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    margin: 4px 0;
}

.sidebar-btn, #add-todo-btn {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-items: start;
    gap: 6px 8px;
}

.project-btn {
    text-align: left;
    padding: 8px 16px;
}

.sidebar-btn:hover, .project-btn:hover, #add-todo-btn:hover {
    background-color: #b6daff;
}

.selected {
    background-color: #b6daff;
    font-weight: bold;
}

svg {
    width: 25px;
    fill: var(--main-color-1);
}

.projects-container, .filters {
    margin: 16px 12px;
}

.project-name-input {
    border-radius: 8px;
    border: none;
    padding: 4px;
}

.project-name-input:focus {
    outline: blue solid 2px;
}

.content {
    background-color: #8b99fa;
    grid-area: content;
}

.footer {
    background-color: var(--main-color-1);
    grid-area: footer;
}


.todo-container {
    display: flex;
}

.todo-title, .todo-due-date {
    flex: 1;
}`, "",{"version":3,"sources":["webpack://./src/public/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C,iCAAiC;IACjC;;;0BAGsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,cAAc;IACd,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,iBAAiB;AACrB;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,OAAO;AACX","sourcesContent":[":root {\r\n    --main-color-1: #172544;\r\n    --main-color-2: #445a99;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.app {\r\n    display: grid;\r\n    grid-template-columns: minmax(150px, 200px) 1fr;\r\n    grid-template-rows: auto 1fr auto;\r\n    grid-template-areas: \r\n        \"header  header  \"\r\n        \"sidebar content \"\r\n        \"footer  footer  \";\r\n}\r\n\r\nheader {\r\n    background-color: var(--main-color-1);\r\n    grid-area: header;\r\n}\r\n\r\n.sidebar {\r\n    background-color: var(--main-color-2);\r\n    grid-area: sidebar;\r\n}\r\n\r\n.filters, .projects-container, .projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.sidebar-btn, .project-btn, #add-todo-btn {\r\n    cursor: pointer;\r\n    padding: 4px 0;\r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: 8px;\r\n    margin: 4px 0;\r\n}\r\n\r\n.sidebar-btn, #add-todo-btn {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr;\r\n    align-items: center;\r\n    justify-items: start;\r\n    gap: 6px 8px;\r\n}\r\n\r\n.project-btn {\r\n    text-align: left;\r\n    padding: 8px 16px;\r\n}\r\n\r\n.sidebar-btn:hover, .project-btn:hover, #add-todo-btn:hover {\r\n    background-color: #b6daff;\r\n}\r\n\r\n.selected {\r\n    background-color: #b6daff;\r\n    font-weight: bold;\r\n}\r\n\r\nsvg {\r\n    width: 25px;\r\n    fill: var(--main-color-1);\r\n}\r\n\r\n.projects-container, .filters {\r\n    margin: 16px 12px;\r\n}\r\n\r\n.project-name-input {\r\n    border-radius: 8px;\r\n    border: none;\r\n    padding: 4px;\r\n}\r\n\r\n.project-name-input:focus {\r\n    outline: blue solid 2px;\r\n}\r\n\r\n.content {\r\n    background-color: #8b99fa;\r\n    grid-area: content;\r\n}\r\n\r\n.footer {\r\n    background-color: var(--main-color-1);\r\n    grid-area: footer;\r\n}\r\n\r\n\r\n.todo-container {\r\n    display: flex;\r\n}\r\n\r\n.todo-title, .todo-due-date {\r\n    flex: 1;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/public/style.css":
/*!******************************!*\
  !*** ./src/public/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/style.css");

      
      
      
      
      
      
      
      
      

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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/addTodoFormComponent.js":
/*!*************************************!*\
  !*** ./src/addTodoFormComponent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


const createLabelAndInput = (labelText, inputType, inputId, inputName, required) => {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', inputId);

    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    input.setAttribute('id', inputId);
    input.setAttribute('name', inputName);
    if (required) input.setAttribute('required', '');

    return [label, input];
}

const createPrioritySelect = () => {
    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('id', 'priority');
    prioritySelect.setAttribute('name', 'priority');

    const lowOption = document.createElement('option');
    lowOption.textContent = 'Low';
    lowOption.setAttribute('value', 'low');

    const mediumOption = document.createElement('option');
    mediumOption.textContent = 'Medium';
    mediumOption.setAttribute('value', 'medium');

    const highOption = document.createElement('option');
    highOption.textContent = 'High';
    lowOption.setAttribute('value', 'high');

    prioritySelect.appendChild(lowOption);
    prioritySelect.appendChild(mediumOption);
    prioritySelect.appendChild(highOption);

    return prioritySelect;
}

const createFormButton = (buttonText, buttonId, buttonType, events) => {
    const formBtn = document.createElement('button');
    formBtn.textContent = buttonText;
    formBtn.setAttribute('id', buttonId);
    formBtn.setAttribute('type', buttonType);
    for (const [eventName, eventHandler] of Object.entries(events)) {
        formBtn.addEventListener(eventName, eventHandler);
    }
    return formBtn;
}

const getLatestTodoId = () => {
    return document.querySelectorAll('.todo-container');
}

const addTodoEvent = (addTodoForm) => {
    addTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoData = new FormData(addTodoForm);
        const newTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo(
            getLatestTodoId(),
            todoData.get('title'),
            todoData.get('description'),
            todoData.get('due-date'),
            todoData.get('priority'),
        );
        // get the id/index of the project in which the todo is going to be created
        const projectId = document.querySelector('.selected').getAttribute('data-project-id');
        const todoCreatedEvent = new CustomEvent('todocreated', {
            detail: {
                todo: newTodo,
                projectId: projectId
            }
        });
        document.dispatchEvent(todoCreatedEvent);
    });
}

const createAddTodoForm = () => {
    const addTodoForm = document.createElement('form');
    addTodoForm.setAttribute('id', 'add-todo-form');
    addTodoEvent(addTodoForm);

    const [ todoTitleLabel, todoTitleInput ] = createLabelAndInput('Title', 'text', 'title', 'title', true);
    const [ todoDescLabel, todoDescInput ] = createLabelAndInput('Description', 'text', 'description', 'description', true);
    const [ todoDueDateLabel, todoDueDateInput ] = createLabelAndInput('Due Date', 'date', 'due-date', 'due-date', true);
    const prioritySelect = createPrioritySelect();
    const addBtn = createFormButton('Add', 'create-todo', 'submit', {});
    const cancelBtn = createFormButton('Cancel', 'cancel-btn', 'button', {
        click: function(e) {
            document.getElementById('add-todo-form').remove();
            document.getElementById('add-todo-btn').style.display = 'block';
        }
    });

    addTodoForm.appendChild(todoTitleLabel);
    addTodoForm.appendChild(todoTitleInput);
    addTodoForm.appendChild(todoDescLabel);
    addTodoForm.appendChild(todoDescInput);
    addTodoForm.appendChild(todoDueDateLabel);
    addTodoForm.appendChild(todoDueDateInput);
    addTodoForm.appendChild(prioritySelect);
    addTodoForm.appendChild(addBtn);
    addTodoForm.appendChild(cancelBtn);

    return addTodoForm;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAddTodoForm);

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ToDo: () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = false;
    }

    toggleCompletion() {
        this.checkList = !this.checkList;
    }
}


class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.todos = [];
    }

    getTodos() {
        return this.todos;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodo(todoId) {
        this.todos.splice(todoId, 1);
    }
}

/***/ }),

/***/ "./src/createProjectHandler.js":
/*!*************************************!*\
  !*** ./src/createProjectHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


const getLatestProjectId = () => {
    return document.querySelectorAll('.project-btn').length;
}

const createProjectHandler = (addProjectBtn) => {
    const projectsContainer = document.querySelector('.projects');

    const projectNameInput = document.createElement('input');
    projectNameInput.classList.add('project-name-input');

    projectNameInput.value = '';
    addProjectBtn.disabled = true;
    projectsContainer.appendChild(projectNameInput);
    projectNameInput.focus();

    projectNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const projectName = projectNameInput.value.trim();
            if (projectName) {
                const projectCreatedEvent = new CustomEvent('projectcreated', {
                    detail: {
                        project: new _classes__WEBPACK_IMPORTED_MODULE_0__.Project(getLatestProjectId(), projectName),
                    }
                });
                document.dispatchEvent(projectCreatedEvent);
            }
            // remove focus from the input, triggering the blur event
            projectNameInput.blur();
        }
    });

    projectNameInput.addEventListener('blur', (e) => {
        if (projectNameInput) {
            projectNameInput.remove();
            addProjectBtn.disabled = false;
        }
    });

    return projectNameInput;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectHandler);

/***/ }),

/***/ "./src/createSvg.js":
/*!**************************!*\
  !*** ./src/createSvg.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSvgElement)
/* harmony export */ });
function createSvgElement(svgObj) {
    // for reference: https://dev.to/tqbit/how-to-create-svg-elements-with-javascript-4mmp
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svg.setAttribute("viewBox", svgObj.viewBox);

    iconPath.setAttribute("d", svgObj.path.d);

    svg.appendChild(iconPath);

    return svg;
}

/***/ }),

/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


class DB {
    constructor() {
        this.projects = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')).map((project, index) => {
            const newProject = new _classes__WEBPACK_IMPORTED_MODULE_0__.Project(index, project.name);
            newProject.todos = project.todos;
            return newProject;
        }) : [];
    }

    getAllProjects() {
        return this.projects;
    }

    getProject(index) {
        return this.projects[index];
    }

    updateDatabase() {
        localStorage.setItem("db", JSON.stringify(this.projects));
    }

    saveProject(project) {
        console.log(`Project ${project.name} saved!`);
        this.projects.push(project);
        this.updateDatabase();
    }

    saveTodo(todo, projectId) {
        this.projects[projectId].addTodo(todo);
        this.updateDatabase();
    }

    deleteTodo(projectId, todoId) {
        this.getProject(projectId).deleteTodo(todoId);
        this.updateDatabase();
    }
}

const db = new DB();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);

/***/ }),

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createProjectHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjectHandler */ "./src/createProjectHandler.js");
/* harmony import */ var _projectBtnComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectBtnComponent */ "./src/projectBtnComponent.js");
/* harmony import */ var _addTodoFormComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTodoFormComponent */ "./src/addTodoFormComponent.js");
/* harmony import */ var _createSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSvg */ "./src/createSvg.js");
/* harmony import */ var _todoComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoComponent */ "./src/todoComponent.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./db */ "./src/db.js");







const DOMHandler = (() => {
    const projectsContainer = document.querySelector('.projects');
    const addProjectBtn = document.getElementById('add-project-btn');
    

    addProjectBtn.addEventListener('click', function(e) {
        (0,_createProjectHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
    });

    

    const generateTodosContainer = (project) => {
        const todosContainer = document.createElement('div');
        todosContainer.classList.add('todos-container');
        todosContainer.setAttribute('data-project-id', project.id);

        const projectTodos = project.getTodos();
        projectTodos.forEach((projectTodo, todoIndex) => {
            const todoContainer = (0,_todoComponent__WEBPACK_IMPORTED_MODULE_4__["default"])(projectTodo, todoIndex);
            todosContainer.appendChild(todoContainer);
        });

        return todosContainer;
    };

    const createAddTodoBtn = () => {
        const addTodoBtn = document.createElement('button');
        addTodoBtn.setAttribute('id', 'add-todo-btn');
        const addTodoBtnSvg = (0,_createSvg__WEBPACK_IMPORTED_MODULE_3__["default"])({
            viewBox: '0 0 24 24',
            path: {
                d: 'M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z'
            }
        });
    
        const addTodoBtnText = document.createElement('span');
        addTodoBtnText.textContent = 'Add Todo';
    
        addTodoBtn.appendChild(addTodoBtnSvg);
        addTodoBtn.appendChild(addTodoBtnText);
    
        return addTodoBtn;
    }

    const displayTodos = (projectId) => {
        const content = document.querySelector('.content');
        content.innerHTML = '';

        const project = _db__WEBPACK_IMPORTED_MODULE_5__["default"].getProject(projectId);

        const todosContainer = generateTodosContainer(project, projectId);

        const addTodoBtn = createAddTodoBtn();
        addTodoBtn.addEventListener('click', function(e) {
            this.style.display = 'none'
            const addTodoForm = (0,_addTodoFormComponent__WEBPACK_IMPORTED_MODULE_2__["default"])();
            content.appendChild(addTodoForm);
        });

        const projectTitleElement = document.createElement('h2');
        projectTitleElement.textContent = project.name;
        
        content.appendChild(projectTitleElement);
        content.appendChild(todosContainer);
        content.appendChild(addTodoBtn);
    }

    const displayProjects = (projects) => {
        projectsContainer.innerHTML = '';
        projects.forEach((project, index) => {
            const projectBtn = (0,_projectBtnComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(project.name, index);
            projectsContainer.appendChild(projectBtn);
        });
    };

    return { displayProjects, displayTodos };
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMHandler);

/***/ }),

/***/ "./src/eventsHandler.js":
/*!******************************!*\
  !*** ./src/eventsHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./src/db.js");
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHandler */ "./src/domHandler.js");



const eventsHandler = (() => {
    const initializeCustomEvents = () => {
        document.addEventListener('projectcreated', (e) => {
            _db__WEBPACK_IMPORTED_MODULE_0__["default"].saveProject(e.detail.project);
            _domHandler__WEBPACK_IMPORTED_MODULE_1__["default"].displayProjects(_db__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects());
        });

        document.addEventListener('todocreated', (e) => {
            _db__WEBPACK_IMPORTED_MODULE_0__["default"].saveTodo(e.detail.todo, e.detail.projectId);
            _domHandler__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodos(e.detail.projectId);
        });

        document.addEventListener('tododeleted', (e) => {
            _db__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(e.detail.projectId, e.detail.todoId);
            _domHandler__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodos(e.detail.projectId);
        });
    };
    return { initializeCustomEvents };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventsHandler);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style.css */ "./src/public/style.css");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "./src/db.js");
/* harmony import */ var _eventsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventsHandler */ "./src/eventsHandler.js");
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domHandler */ "./src/domHandler.js");





_eventsHandler__WEBPACK_IMPORTED_MODULE_2__["default"].initializeCustomEvents();

_domHandler__WEBPACK_IMPORTED_MODULE_3__["default"].displayProjects(_db__WEBPACK_IMPORTED_MODULE_1__["default"].getAllProjects());

/***/ }),

/***/ "./src/projectBtnComponent.js":
/*!************************************!*\
  !*** ./src/projectBtnComponent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ "./src/domHandler.js");


const createProjectBtnComponent = (projectName, id) => {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.textContent = projectName;
    projectBtn.setAttribute('data-project-id', id);
    projectBtn.addEventListener('click', (e) => {
        const currentSelectedProject = document.querySelector('.selected');
        if (currentSelectedProject) {
            currentSelectedProject.classList.remove('selected');
        }
        e.target.classList.add('selected');
    });

    projectBtn.addEventListener('click', function(e) {
        _domHandler__WEBPACK_IMPORTED_MODULE_0__["default"].displayTodos(e.target.getAttribute('data-project-id'));
    });

    return projectBtn;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectBtnComponent);

/***/ }),

/***/ "./src/todoComponent.js":
/*!******************************!*\
  !*** ./src/todoComponent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createSvg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSvg */ "./src/createSvg.js");


const todoComponent = (todo, todoId) => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    todoContainer.setAttribute('data-todo-id', todoId);


    const todoTitle = document.createElement('p');
    todoTitle.textContent = todo.title;
    todoTitle.classList.add('todo-title');

    const todoDescription = document.createElement('p');
    todoDescription.textContent = todo.description;
    todoDescription.classList.add('todo-description');

    const todoDueDate = document.createElement('p');
    todoDueDate.textContent = todo.dueDate;
    todoDueDate.classList.add('todo-due-date');

    const todoEditBtn = document.createElement('button');
    const editSvgObj = {
        viewBox: "0 0 24 24",
        path: {
            d: "M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20.1L20 10.1V8L14 2H6M13 3.5L18.5 9H13V3.5M20.1 13C20 13 19.8 13.1 19.7 13.2L18.7 14.2L20.8 16.3L21.8 15.3C22 15.1 22 14.7 21.8 14.5L20.5 13.2C20.4 13.1 20.3 13 20.1 13M18.1 14.8L12 20.9V23H14.1L20.2 16.9L18.1 14.8Z"
        }
    }
    const editSvg = (0,_createSvg__WEBPACK_IMPORTED_MODULE_0__["default"])(editSvgObj);
    todoEditBtn.appendChild(editSvg);
    todoEditBtn.classList.add('todo-edit-btn');

    const todoDeleteBtn = document.createElement('button');
    const deleteSvgObj = {
        viewBox: "0 0 24 24",
        path: {
            d: "M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z"
        }
    }
    const deleteSvg = (0,_createSvg__WEBPACK_IMPORTED_MODULE_0__["default"])(deleteSvgObj);
    todoDeleteBtn.appendChild(deleteSvg);
    todoDeleteBtn.classList.add('todo-delete-btn');
    todoDeleteBtn.addEventListener('click', function(e) {
        const projectId = this.closest('.todos-container').getAttribute('data-project-id');
        const todoId = this.closest('.todo-container').getAttribute('data-todo-id');
        const todoDeletedEvent = new CustomEvent('tododeleted', {
            detail: {
                projectId,
                todoId
            }
        });
        document.dispatchEvent(todoDeletedEvent);
    });


    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDueDate);
    todoContainer.appendChild(todoEditBtn);
    todoContainer.appendChild(todoDeleteBtn);

    return todoContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoComponent);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMENBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxtREFBVTtBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx5QkFBeUI7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9wdWJsaWMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3B1YmxpYy9zdHlsZS5jc3M/N2M0MyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvYWRkVG9kb0Zvcm1Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvY3JlYXRlUHJvamVjdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9jcmVhdGVTdmcuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9kYi5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2RvbUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9ldmVudHNIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9wcm9qZWN0QnRuQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdG9kb0NvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1tYWluLWNvbG9yLTE6ICMxNzI1NDQ7XHJcbiAgICAtLW1haW4tY29sb3ItMjogIzQ0NWE5OTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmFwcCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTUwcHgsIDIwMHB4KSAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICBcImhlYWRlciAgaGVhZGVyICBcIlxyXG4gICAgICAgIFwic2lkZWJhciBjb250ZW50IFwiXHJcbiAgICAgICAgXCJmb290ZXIgIGZvb3RlciAgXCI7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xyXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMik7XHJcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XHJcbn1cclxuXHJcbi5maWx0ZXJzLCAucHJvamVjdHMtY29udGFpbmVyLCAucHJvamVjdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zaWRlYmFyLWJ0biwgLnByb2plY3QtYnRuLCAjYWRkLXRvZG8tYnRuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG59XHJcblxyXG4uc2lkZWJhci1idG4sICNhZGQtdG9kby1idG4ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbiAgICBnYXA6IDZweCA4cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWJ0bjpob3ZlciwgLnByb2plY3QtYnRuOmhvdmVyLCAjYWRkLXRvZG8tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmRhZmY7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkYWZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGZpbGw6IHZhcigtLW1haW4tY29sb3ItMSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXIsIC5maWx0ZXJzIHtcclxuICAgIG1hcmdpbjogMTZweCAxMnB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lLWlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnByb2plY3QtbmFtZS1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBibHVlIHNvbGlkIDJweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiOTlmYTtcclxuICAgIGdyaWQtYXJlYTogY29udGVudDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xyXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XHJcbn1cclxuXHJcblxyXG4udG9kby1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRvZG8tdGl0bGUsIC50b2RvLWR1ZS1kYXRlIHtcclxuICAgIGZsZXg6IDE7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wdWJsaWMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtDQUErQztJQUMvQyxpQ0FBaUM7SUFDakM7OzswQkFHc0I7QUFDMUI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLW1haW4tY29sb3ItMTogIzE3MjU0NDtcXHJcXG4gICAgLS1tYWluLWNvbG9yLTI6ICM0NDVhOTk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMjAwcHgpIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgIFxcXCJoZWFkZXIgIGhlYWRlciAgXFxcIlxcclxcbiAgICAgICAgXFxcInNpZGViYXIgY29udGVudCBcXFwiXFxyXFxuICAgICAgICBcXFwiZm9vdGVyICBmb290ZXIgIFxcXCI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMik7XFxyXFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMsIC5wcm9qZWN0cy1jb250YWluZXIsIC5wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWJ0biwgLnByb2plY3QtYnRuLCAjYWRkLXRvZG8tYnRuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiA0cHggMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBtYXJnaW46IDRweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1idG4sICNhZGQtdG9kby1idG4ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgZ2FwOiA2cHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idG4ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItYnRuOmhvdmVyLCAucHJvamVjdC1idG46aG92ZXIsICNhZGQtdG9kby1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkYWZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkYWZmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGZpbGw6IHZhcigtLW1haW4tY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIsIC5maWx0ZXJzIHtcXHJcXG4gICAgbWFyZ2luOiAxNnB4IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lLWlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogYmx1ZSBzb2xpZCAycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiOTlmYTtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLCAudG9kby1kdWUtZGF0ZSB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5cclxuY29uc3QgY3JlYXRlTGFiZWxBbmRJbnB1dCA9IChsYWJlbFRleHQsIGlucHV0VHlwZSwgaW5wdXRJZCwgaW5wdXROYW1lLCByZXF1aXJlZCkgPT4ge1xyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0SWQpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0VHlwZSk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5wdXRJZCk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBpbnB1dE5hbWUpO1xyXG4gICAgaWYgKHJlcXVpcmVkKSBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIGlucHV0XTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlUHJpb3JpdHlTZWxlY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XHJcblxyXG4gICAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcclxuICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xyXG5cclxuICAgIGNvbnN0IG1lZGl1bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgbWVkaXVtT3B0aW9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XHJcbiAgICBtZWRpdW1PcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcclxuXHJcbiAgICBjb25zdCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xyXG4gICAgbG93T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIHByaW9yaXR5U2VsZWN0O1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVGb3JtQnV0dG9uID0gKGJ1dHRvblRleHQsIGJ1dHRvbklkLCBidXR0b25UeXBlLCBldmVudHMpID0+IHtcclxuICAgIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGZvcm1CdG4udGV4dENvbnRlbnQgPSBidXR0b25UZXh0O1xyXG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYnV0dG9uSWQpO1xyXG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBidXR0b25UeXBlKTtcclxuICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZXZlbnRIYW5kbGVyXSBvZiBPYmplY3QuZW50cmllcyhldmVudHMpKSB7XHJcbiAgICAgICAgZm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtQnRuO1xyXG59XHJcblxyXG5jb25zdCBnZXRMYXRlc3RUb2RvSWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tY29udGFpbmVyJyk7XHJcbn1cclxuXHJcbmNvbnN0IGFkZFRvZG9FdmVudCA9IChhZGRUb2RvRm9ybSkgPT4ge1xyXG4gICAgYWRkVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdG9kb0RhdGEgPSBuZXcgRm9ybURhdGEoYWRkVG9kb0Zvcm0pO1xyXG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9EbyhcclxuICAgICAgICAgICAgZ2V0TGF0ZXN0VG9kb0lkKCksXHJcbiAgICAgICAgICAgIHRvZG9EYXRhLmdldCgndGl0bGUnKSxcclxuICAgICAgICAgICAgdG9kb0RhdGEuZ2V0KCdkZXNjcmlwdGlvbicpLFxyXG4gICAgICAgICAgICB0b2RvRGF0YS5nZXQoJ2R1ZS1kYXRlJyksXHJcbiAgICAgICAgICAgIHRvZG9EYXRhLmdldCgncHJpb3JpdHknKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIGdldCB0aGUgaWQvaW5kZXggb2YgdGhlIHByb2plY3QgaW4gd2hpY2ggdGhlIHRvZG8gaXMgZ29pbmcgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0NyZWF0ZWRFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9kb2NyZWF0ZWQnLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgdG9kbzogbmV3VG9kbyxcclxuICAgICAgICAgICAgICAgIHByb2plY3RJZDogcHJvamVjdElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHRvZG9DcmVhdGVkRXZlbnQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUFkZFRvZG9Gb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkVG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBhZGRUb2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10b2RvLWZvcm0nKTtcclxuICAgIGFkZFRvZG9FdmVudChhZGRUb2RvRm9ybSk7XHJcblxyXG4gICAgY29uc3QgWyB0b2RvVGl0bGVMYWJlbCwgdG9kb1RpdGxlSW5wdXQgXSA9IGNyZWF0ZUxhYmVsQW5kSW5wdXQoJ1RpdGxlJywgJ3RleHQnLCAndGl0bGUnLCAndGl0bGUnLCB0cnVlKTtcclxuICAgIGNvbnN0IFsgdG9kb0Rlc2NMYWJlbCwgdG9kb0Rlc2NJbnB1dCBdID0gY3JlYXRlTGFiZWxBbmRJbnB1dCgnRGVzY3JpcHRpb24nLCAndGV4dCcsICdkZXNjcmlwdGlvbicsICdkZXNjcmlwdGlvbicsIHRydWUpO1xyXG4gICAgY29uc3QgWyB0b2RvRHVlRGF0ZUxhYmVsLCB0b2RvRHVlRGF0ZUlucHV0IF0gPSBjcmVhdGVMYWJlbEFuZElucHV0KCdEdWUgRGF0ZScsICdkYXRlJywgJ2R1ZS1kYXRlJywgJ2R1ZS1kYXRlJywgdHJ1ZSk7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGNyZWF0ZVByaW9yaXR5U2VsZWN0KCk7XHJcbiAgICBjb25zdCBhZGRCdG4gPSBjcmVhdGVGb3JtQnV0dG9uKCdBZGQnLCAnY3JlYXRlLXRvZG8nLCAnc3VibWl0Jywge30pO1xyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gY3JlYXRlRm9ybUJ1dHRvbignQ2FuY2VsJywgJ2NhbmNlbC1idG4nLCAnYnV0dG9uJywge1xyXG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kby1mb3JtJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kby1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVMYWJlbCk7XHJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVJbnB1dCk7XHJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzY0xhYmVsKTtcclxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EZXNjSW5wdXQpO1xyXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVMYWJlbCk7XHJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZUlucHV0KTtcclxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcclxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZEJ0bik7XHJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG5cclxuICAgIHJldHVybiBhZGRUb2RvRm9ybTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkVG9kb0Zvcm07IiwiZXhwb3J0IGNsYXNzIFRvRG8ge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbXBsZXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0xpc3QgPSAhdGhpcy5jaGVja0xpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb2RvKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVG9kbyh0b2RvSWQpIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnNwbGljZSh0b2RvSWQsIDEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmNvbnN0IGdldExhdGVzdFByb2plY3RJZCA9ICgpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idG4nKS5sZW5ndGg7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RIYW5kbGVyID0gKGFkZFByb2plY3RCdG4pID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZS1pbnB1dCcpO1xyXG5cclxuICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJztcclxuICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XHJcbiAgICBwcm9qZWN0TmFtZUlucHV0LmZvY3VzKCk7XHJcblxyXG4gICAgcHJvamVjdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q3JlYXRlZEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdwcm9qZWN0Y3JlYXRlZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdDogbmV3IFByb2plY3QoZ2V0TGF0ZXN0UHJvamVjdElkKCksIHByb2plY3ROYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQocHJvamVjdENyZWF0ZWRFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGZvY3VzIGZyb20gdGhlIGlucHV0LCB0cmlnZ2VyaW5nIHRoZSBibHVyIGV2ZW50XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3ROYW1lSW5wdXQpIHtcclxuICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0TmFtZUlucHV0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdEhhbmRsZXI7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudChzdmdPYmopIHtcclxuICAgIC8vIGZvciByZWZlcmVuY2U6IGh0dHBzOi8vZGV2LnRvL3RxYml0L2hvdy10by1jcmVhdGUtc3ZnLWVsZW1lbnRzLXdpdGgtamF2YXNjcmlwdC00bW1wXHJcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuICAgIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xyXG5cclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIHN2Z09iai52aWV3Qm94KTtcclxuXHJcbiAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIHN2Z09iai5wYXRoLmQpO1xyXG5cclxuICAgIHN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gICAgcmV0dXJuIHN2ZztcclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcblxyXG5jbGFzcyBEQiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RiJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYicpKS5tYXAoKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChpbmRleCwgcHJvamVjdC5uYW1lKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdC50b2RvcyA9IHByb2plY3QudG9kb3M7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xyXG4gICAgICAgIH0pIDogW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEYXRhYmFzZSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRiXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFByb2plY3QgJHtwcm9qZWN0Lm5hbWV9IHNhdmVkIWApO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGFiYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVRvZG8odG9kbywgcHJvamVjdElkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0SWRdLmFkZFRvZG8odG9kbyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhYmFzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRvZG8ocHJvamVjdElkLCB0b2RvSWQpIHtcclxuICAgICAgICB0aGlzLmdldFByb2plY3QocHJvamVjdElkKS5kZWxldGVUb2RvKHRvZG9JZCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhYmFzZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkYiA9IG5ldyBEQigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGI7IiwiaW1wb3J0IGNyZWF0ZVByb2plY3RIYW5kbGVyIGZyb20gJy4vY3JlYXRlUHJvamVjdEhhbmRsZXInO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdEJ0bkNvbXBvbmVudCBmcm9tICcuL3Byb2plY3RCdG5Db21wb25lbnQnO1xyXG5pbXBvcnQgY3JlYXRlQWRkVG9kb0Zvcm0gZnJvbSAnLi9hZGRUb2RvRm9ybUNvbXBvbmVudCc7XHJcbmltcG9ydCBjcmVhdGVTdmdFbGVtZW50IGZyb20gXCIuL2NyZWF0ZVN2Z1wiO1xyXG5pbXBvcnQgdG9kb0NvbXBvbmVudCBmcm9tICcuL3RvZG9Db21wb25lbnQnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi9kYic7XHJcblxyXG5jb25zdCBET01IYW5kbGVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xyXG4gICAgXHJcblxyXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0SGFuZGxlcih0aGlzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGdlbmVyYXRlVG9kb3NDb250YWluZXIgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb3MtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdG9kb3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnLCBwcm9qZWN0LmlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gcHJvamVjdC5nZXRUb2RvcygpO1xyXG4gICAgICAgIHByb2plY3RUb2Rvcy5mb3JFYWNoKChwcm9qZWN0VG9kbywgdG9kb0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSB0b2RvQ29tcG9uZW50KHByb2plY3RUb2RvLCB0b2RvSW5kZXgpO1xyXG4gICAgICAgICAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvZG9zQ29udGFpbmVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVBZGRUb2RvQnRuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBhZGRUb2RvQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRvZG8tYnRuJyk7XHJcbiAgICAgICAgY29uc3QgYWRkVG9kb0J0blN2ZyA9IGNyZWF0ZVN2Z0VsZW1lbnQoe1xyXG4gICAgICAgICAgICB2aWV3Qm94OiAnMCAwIDI0IDI0JyxcclxuICAgICAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICAgICAgZDogJ00xMyw5VjMuNUwxOC41LDlNNiwyQzQuODksMiA0LDIuODkgNCw0VjIwQTIsMiAwIDAsMCA2LDIySDE4QTIsMiAwIDAsMCAyMCwyMFY4TDE0LDJINlonXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGFkZFRvZG9CdG5UZXh0LnRleHRDb250ZW50ID0gJ0FkZCBUb2RvJztcclxuICAgIFxyXG4gICAgICAgIGFkZFRvZG9CdG4uYXBwZW5kQ2hpbGQoYWRkVG9kb0J0blN2Zyk7XHJcbiAgICAgICAgYWRkVG9kb0J0bi5hcHBlbmRDaGlsZChhZGRUb2RvQnRuVGV4dCk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gYWRkVG9kb0J0bjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXNwbGF5VG9kb3MgPSAocHJvamVjdElkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRiLmdldFByb2plY3QocHJvamVjdElkKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBnZW5lcmF0ZVRvZG9zQ29udGFpbmVyKHByb2plY3QsIHByb2plY3RJZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBjcmVhdGVBZGRUb2RvQnRuKCk7XHJcbiAgICAgICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIGNvbnN0IGFkZFRvZG9Gb3JtID0gY3JlYXRlQWRkVG9kb0Zvcm0oKTtcclxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUb2RvRm9ybSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHByb2plY3RUaXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVFbGVtZW50KTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9zQ29udGFpbmVyKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRvZG9CdG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdG4gPSBjcmVhdGVQcm9qZWN0QnRuQ29tcG9uZW50KHByb2plY3QubmFtZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QnRuKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgZGlzcGxheVByb2plY3RzLCBkaXNwbGF5VG9kb3MgfTtcclxufSkoKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBET01IYW5kbGVyOyIsImltcG9ydCBkYiBmcm9tIFwiLi9kYlwiO1xyXG5pbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi9kb21IYW5kbGVyXCI7XHJcblxyXG5jb25zdCBldmVudHNIYW5kbGVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxpemVDdXN0b21FdmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncHJvamVjdGNyZWF0ZWQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkYi5zYXZlUHJvamVjdChlLmRldGFpbC5wcm9qZWN0KTtcclxuICAgICAgICAgICAgRE9NSGFuZGxlci5kaXNwbGF5UHJvamVjdHMoZGIuZ2V0QWxsUHJvamVjdHMoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZG9jcmVhdGVkJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZGIuc2F2ZVRvZG8oZS5kZXRhaWwudG9kbywgZS5kZXRhaWwucHJvamVjdElkKTtcclxuICAgICAgICAgICAgRE9NSGFuZGxlci5kaXNwbGF5VG9kb3MoZS5kZXRhaWwucHJvamVjdElkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG9kb2RlbGV0ZWQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkYi5kZWxldGVUb2RvKGUuZGV0YWlsLnByb2plY3RJZCwgZS5kZXRhaWwudG9kb0lkKTtcclxuICAgICAgICAgICAgRE9NSGFuZGxlci5kaXNwbGF5VG9kb3MoZS5kZXRhaWwucHJvamVjdElkKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4geyBpbml0aWFsaXplQ3VzdG9tRXZlbnRzIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudHNIYW5kbGVyO1xyXG4iLCJpbXBvcnQgJy4vcHVibGljL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBkYiBmcm9tICcuL2RiJztcclxuaW1wb3J0IGV2ZW50c0hhbmRsZXIgZnJvbSAnLi9ldmVudHNIYW5kbGVyJztcclxuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSAnLi9kb21IYW5kbGVyJztcclxuXHJcbmV2ZW50c0hhbmRsZXIuaW5pdGlhbGl6ZUN1c3RvbUV2ZW50cygpO1xyXG5cclxuRE9NSGFuZGxlci5kaXNwbGF5UHJvamVjdHMoZGIuZ2V0QWxsUHJvamVjdHMoKSk7IiwiaW1wb3J0IERPTUhhbmRsZXIgZnJvbSBcIi4vZG9tSGFuZGxlclwiO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdEJ0bkNvbXBvbmVudCA9IChwcm9qZWN0TmFtZSwgaWQpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcclxuICAgIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuICAgIHByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnLCBpZCk7XHJcbiAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZFByb2plY3QpIHtcclxuICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBET01IYW5kbGVyLmRpc3BsYXlUb2RvcyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pZCcpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0QnRuO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdEJ0bkNvbXBvbmVudDsiLCJpbXBvcnQgY3JlYXRlU3ZnRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVTdmdcIjtcclxuXHJcbmNvbnN0IHRvZG9Db21wb25lbnQgPSAodG9kbywgdG9kb0lkKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XHJcbiAgICB0b2RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJywgdG9kb0lkKTtcclxuXHJcblxyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcclxuICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XHJcblxyXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcclxuICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlLWRhdGUnKTtcclxuXHJcbiAgICBjb25zdCB0b2RvRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZWRpdFN2Z09iaiA9IHtcclxuICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgZDogXCJNNiAyQzQuOSAyIDQgMi45IDQgNFYyMEM0IDIxLjEgNC45IDIyIDYgMjJIMTBWMjAuMUwyMCAxMC4xVjhMMTQgMkg2TTEzIDMuNUwxOC41IDlIMTNWMy41TTIwLjEgMTNDMjAgMTMgMTkuOCAxMy4xIDE5LjcgMTMuMkwxOC43IDE0LjJMMjAuOCAxNi4zTDIxLjggMTUuM0MyMiAxNS4xIDIyIDE0LjcgMjEuOCAxNC41TDIwLjUgMTMuMkMyMC40IDEzLjEgMjAuMyAxMyAyMC4xIDEzTTE4LjEgMTQuOEwxMiAyMC45VjIzSDE0LjFMMjAuMiAxNi45TDE4LjEgMTQuOFpcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGVkaXRTdmcgPSBjcmVhdGVTdmdFbGVtZW50KGVkaXRTdmdPYmopO1xyXG4gICAgdG9kb0VkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdFN2Zyk7XHJcbiAgICB0b2RvRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtYnRuJyk7XHJcblxyXG4gICAgY29uc3QgdG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZGVsZXRlU3ZnT2JqID0ge1xyXG4gICAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkOiBcIk0xOSwzSDE2LjNINy43SDVBMiwyIDAgMCwwIDMsNVY3LjdWMTYuNFYxOUEyLDIgMCAwLDAgNSwyMUg3LjdIMTYuNEgxOUEyLDIgMCAwLDAgMjEsMTlWMTYuM1Y3LjdWNUEyLDIgMCAwLDAgMTksM00xNS42LDE3TDEyLDEzLjRMOC40LDE3TDcsMTUuNkwxMC42LDEyTDcsOC40TDguNCw3TDEyLDEwLjZMMTUuNiw3TDE3LDguNEwxMy40LDEyTDE3LDE1LjZMMTUuNiwxN1pcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGV0ZVN2ZyA9IGNyZWF0ZVN2Z0VsZW1lbnQoZGVsZXRlU3ZnT2JqKTtcclxuICAgIHRvZG9EZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlU3ZnKTtcclxuICAgIHRvZG9EZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1kZWxldGUtYnRuJyk7XHJcbiAgICB0b2RvRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRoaXMuY2xvc2VzdCgnLnRvZG9zLWNvbnRhaW5lcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0lkID0gdGhpcy5jbG9zZXN0KCcudG9kby1jb250YWluZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EZWxldGVkRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9kZWxldGVkJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RJZCxcclxuICAgICAgICAgICAgICAgIHRvZG9JZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0b2RvRGVsZXRlZEV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XHJcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0VkaXRCdG4pO1xyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnRuKTtcclxuXHJcbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9Db21wb25lbnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9