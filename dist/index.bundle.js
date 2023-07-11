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
    position: relative;
    margin: 12px;
    border-radius: 8px;
    gap: 12px;
    height: 50px;
    overflow: hidden;
}

.todo-container:hover {
    height: 100%;
    overflow: visible;
}

.relevant-info-container {
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    height: 100%;
}

.description-container {
    background-color: #f6efed;
    padding: 8px 12px;
    border-radius: 8px;
    z-index: 2;
}

.todo-title, .todo-due-date {
    flex: 2;
}

.todo-priority {
    flex: 1;
}

.todo-priority {
    border: 2px solid black;
    border-radius: 4px;
}

.todo-priority.low {
    background-color: #20dbc0;

}
.todo-priority.medium {
    background-color: #ffc655;
}

.todo-priority.high {
    background-color: #e31746;
}

.todo-description::before {
    content: 'Description: ';
    font-weight: bold;
}

.todo-edit-btn, .todo-delete-btn {
    border: none;
    border-radius: 4px;
    padding: 4px;
}

.todo-edit-btn svg, .todo-delete-btn svg {
    fill: black;
}

.todo-edit-btn {
    background-color: yellow;
}
.todo-delete-btn {
    background-color: red;
}

#add-todo-form {
    display: grid;
    padding: 24px;
    border-radius: 8px;
    background-color: #96f48b;
    justify-items: center;
}

.add-todo-form-btns-container {
    display: flex;
    justify-self: normal;
}

.add-todo-form-btns-container > button {
    flex: 1;
    padding: 8px 16px;
}

#edit-todo-form {
    z-index: 2;
    top: 0;
    position: absolute;
    left: 0;
    right: 0;
    background-color: #fffa75;
    display: grid;
    justify-items: center;
    padding: 24px;
    border-radius: 8px;
}

:disabled {
    opacity: 0.7;
}`, "",{"version":3,"sources":["webpack://./src/public/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C,iCAAiC;IACjC;;;0BAGsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,cAAc;IACd,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;;AAE7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,wBAAwB;AAC5B;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,OAAO;IACP,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,MAAM;IACN,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,yBAAyB;IACzB,aAAa;IACb,qBAAqB;IACrB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB","sourcesContent":[":root {\r\n    --main-color-1: #172544;\r\n    --main-color-2: #445a99;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.app {\r\n    display: grid;\r\n    grid-template-columns: minmax(150px, 200px) 1fr;\r\n    grid-template-rows: auto 1fr auto;\r\n    grid-template-areas: \r\n        \"header  header  \"\r\n        \"sidebar content \"\r\n        \"footer  footer  \";\r\n}\r\n\r\nheader {\r\n    background-color: var(--main-color-1);\r\n    grid-area: header;\r\n}\r\n\r\n.sidebar {\r\n    background-color: var(--main-color-2);\r\n    grid-area: sidebar;\r\n}\r\n\r\n.filters, .projects-container, .projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.sidebar-btn, .project-btn, #add-todo-btn {\r\n    cursor: pointer;\r\n    padding: 4px 0;\r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: 8px;\r\n    margin: 4px 0;\r\n}\r\n\r\n.sidebar-btn, #add-todo-btn {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr;\r\n    align-items: center;\r\n    justify-items: start;\r\n    gap: 6px 8px;\r\n}\r\n\r\n.project-btn {\r\n    text-align: left;\r\n    padding: 8px 16px;\r\n}\r\n\r\n.sidebar-btn:hover, .project-btn:hover, #add-todo-btn:hover {\r\n    background-color: #b6daff;\r\n}\r\n\r\n.selected {\r\n    background-color: #b6daff;\r\n    font-weight: bold;\r\n}\r\n\r\nsvg {\r\n    width: 25px;\r\n    fill: var(--main-color-1);\r\n}\r\n\r\n.projects-container, .filters {\r\n    margin: 16px 12px;\r\n}\r\n\r\n.project-name-input {\r\n    border-radius: 8px;\r\n    border: none;\r\n    padding: 4px;\r\n}\r\n\r\n.project-name-input:focus {\r\n    outline: blue solid 2px;\r\n}\r\n\r\n.content {\r\n    background-color: #8b99fa;\r\n    grid-area: content;\r\n}\r\n\r\n.footer {\r\n    background-color: var(--main-color-1);\r\n    grid-area: footer;\r\n}\r\n\r\n.todo-container {\r\n    position: relative;\r\n    margin: 12px;\r\n    border-radius: 8px;\r\n    gap: 12px;\r\n    height: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n.todo-container:hover {\r\n    height: 100%;\r\n    overflow: visible;\r\n}\r\n\r\n.relevant-info-container {\r\n    display: flex;\r\n    background-color: white;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 8px;\r\n    padding: 8px 12px;\r\n    border-radius: 8px;\r\n    height: 100%;\r\n}\r\n\r\n.description-container {\r\n    background-color: #f6efed;\r\n    padding: 8px 12px;\r\n    border-radius: 8px;\r\n    z-index: 2;\r\n}\r\n\r\n.todo-title, .todo-due-date {\r\n    flex: 2;\r\n}\r\n\r\n.todo-priority {\r\n    flex: 1;\r\n}\r\n\r\n.todo-priority {\r\n    border: 2px solid black;\r\n    border-radius: 4px;\r\n}\r\n\r\n.todo-priority.low {\r\n    background-color: #20dbc0;\r\n\r\n}\r\n.todo-priority.medium {\r\n    background-color: #ffc655;\r\n}\r\n\r\n.todo-priority.high {\r\n    background-color: #e31746;\r\n}\r\n\r\n.todo-description::before {\r\n    content: 'Description: ';\r\n    font-weight: bold;\r\n}\r\n\r\n.todo-edit-btn, .todo-delete-btn {\r\n    border: none;\r\n    border-radius: 4px;\r\n    padding: 4px;\r\n}\r\n\r\n.todo-edit-btn svg, .todo-delete-btn svg {\r\n    fill: black;\r\n}\r\n\r\n.todo-edit-btn {\r\n    background-color: yellow;\r\n}\r\n.todo-delete-btn {\r\n    background-color: red;\r\n}\r\n\r\n#add-todo-form {\r\n    display: grid;\r\n    padding: 24px;\r\n    border-radius: 8px;\r\n    background-color: #96f48b;\r\n    justify-items: center;\r\n}\r\n\r\n.add-todo-form-btns-container {\r\n    display: flex;\r\n    justify-self: normal;\r\n}\r\n\r\n.add-todo-form-btns-container > button {\r\n    flex: 1;\r\n    padding: 8px 16px;\r\n}\r\n\r\n#edit-todo-form {\r\n    z-index: 2;\r\n    top: 0;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #fffa75;\r\n    display: grid;\r\n    justify-items: center;\r\n    padding: 24px;\r\n    border-radius: 8px;\r\n}\r\n\r\n:disabled {\r\n    opacity: 0.7;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   createFormButton: () => (/* binding */ createFormButton),
/* harmony export */   createLabelAndInput: () => (/* binding */ createLabelAndInput),
/* harmony export */   createPrioritySelect: () => (/* binding */ createPrioritySelect),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


const createLabelAndInput = (labelText, inputType, inputId, inputName, required) => {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', inputId);

    let input;
    if (inputType !== 'textarea') {
        input = document.createElement('input');
        input.setAttribute('type', inputType);
    } else {
        input = document.createElement('textarea');
    }
    input.setAttribute('id', inputId);
    input.setAttribute('name', inputName);
    if (required) input.setAttribute('required', '');

    return [label, input];
}

const createPrioritySelect = (defaultOption) => {
    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('id', 'priority');
    prioritySelect.setAttribute('name', 'priority');

    const lowOption = document.createElement('option');
    lowOption.textContent = 'Low';
    lowOption.classList.add('low');
    lowOption.setAttribute('value', 'low');

    const mediumOption = document.createElement('option');
    mediumOption.textContent = 'Medium';
    mediumOption.classList.add('medium');
    mediumOption.setAttribute('value', 'medium');

    const highOption = document.createElement('option');
    highOption.textContent = 'High';
    highOption.classList.add('high');
    highOption.setAttribute('value', 'high');

    prioritySelect.appendChild(lowOption);
    prioritySelect.appendChild(mediumOption);
    prioritySelect.appendChild(highOption);

    prioritySelect.querySelector(`.${defaultOption.toLowerCase()}`).setAttribute('selected', '');

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

const addTodoEvent = (addTodoForm) => {
    // get the id/index of the project in which the todo is going to be created
    const projectId = document.querySelector('.selected').getAttribute('data-project-id');

    addTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(addTodoForm);
        const todoData = {
            title: formData.get('title'),
            description: formData.get('description'),
            dueDate: formData.get('due-date'),
            priority: formData.get('priority'),
            completed: false,
            projectId: projectId
        };
        
        const todoCreatedEvent = new CustomEvent('todocreated', {
            detail: {
                todoData: todoData
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
    const [ todoDescLabel, todoDescInput ] = createLabelAndInput('Description', 'textarea', 'description', 'description', true);
    const [ todoDueDateLabel, todoDueDateInput ] = createLabelAndInput('Due Date', 'date', 'due-date', 'due-date', true);
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.setAttribute('for', 'priority');
    const prioritySelect = createPrioritySelect('low');
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('add-todo-form-btns-container');

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
    addTodoForm.appendChild(priorityLabel);
    addTodoForm.appendChild(prioritySelect);
    buttonsContainer.appendChild(addBtn);
    buttonsContainer.appendChild(cancelBtn);
    addTodoForm.appendChild(buttonsContainer);

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

    constructor(id, title, description, dueDate, priority, completed, projectId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        this.projectId = projectId;
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }
}


class Project {
    static autoIncrementId = 0;

    constructor(name) {
        this.id = this.constructor.autoIncrementId++;

        this.name = name;
        this.todos = [];
    }

    getTodo(todoId) {
        return this.todos[todoId];
    }

    getTodos() {
        return this.todos;
    }

    getCompletedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    editTodo(todoId, updatedTodo) {
        this.todos[todoId] = updatedTodo;
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
                        project: new _classes__WEBPACK_IMPORTED_MODULE_0__.Project(projectName),
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
        // convert all json objects into the corresponding class objects, so they get their methods
        this.projects = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')).map((project) => {
            const newProject = new _classes__WEBPACK_IMPORTED_MODULE_0__.Project(project.name);
            newProject.todos = project.todos.map(todo => {
                return new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo(todo.id, todo.title, todo.description, todo.dueDate, todo.priority, todo.completed, newProject.id);
            });
            return newProject;
        }) : [];
    }

    getAllProjects() {
        return this.projects;
    }

    getProject(index) {
        return this.projects[index];
    }

    getIndexForNewTodo(projectId) {
        return this.getProject(projectId).getTodos().length;
    }

    obtainTodo(projectId, todoId) {
        return this.projects[projectId].getTodo(todoId);
    }

    updateDatabase() {
        localStorage.setItem("db", JSON.stringify(this.projects));
    }

    saveProject(project) {
        console.log(`Project ${project.name} saved!`);
        this.projects.push(project);
        this.updateDatabase();
    }

    updateTodo(todo) {
        this.projects[todo.projectId].editTodo(todo.id, todo);
        this.updateDatabase();
    }

    saveTodo(todo) {
        this.projects[todo.projectId].addTodo(todo);
        this.updateDatabase();
    }

    deleteTodo(projectId, todoId) {
        this.getProject(projectId).deleteTodo(todoId);
        this.updateDatabase();
    }

    changeTodoCompletionState(projectId, todoId) {
        this.obtainTodo(projectId, todoId).toggleCompletion();
        this.updateDatabase();
    }

    getAllCompletedTodosInEachProject() {
        const projectsCopy = [...this.getAllProjects()];
        return projectsCopy.reduce((completedTodosObj, currentProject) => {
            const completedTodos = currentProject.getCompletedTodos();
            if (completedTodos.length !== 0) {
                completedTodosObj[currentProject.id] = currentProject.getCompletedTodos();
            }
            return completedTodosObj;
        }, {});
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
/* harmony import */ var _todoComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoComponent */ "./src/todoComponent.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db */ "./src/db.js");





const DOMHandler = (() => {
    const content = document.querySelector('.content');

    const clearContent = () => {
        content.innerHTML = '';
    };

    const projectsContainer = document.querySelector('.projects');

    const addProjectBtn = document.getElementById('add-project-btn');
    addProjectBtn.addEventListener('click', function(e) {
        (0,_createProjectHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
    });

    const filterButtons = document.querySelectorAll('.sidebar-btn');
    filterButtons.forEach(filterButton => {
        filterButton.addEventListener('click', (e) => {
            const currentSelectedFilter = document.querySelector('.selected');
            if (currentSelectedFilter) {
                currentSelectedFilter.classList.remove('selected');
            }
            filterButton.classList.add('selected');
        });
    });

    const completedTodosBtn = document.getElementById('completed-todos-btn');
    completedTodosBtn.addEventListener('click', () => {
        DOMHandler.clearContent();
        const completedTodos = _db__WEBPACK_IMPORTED_MODULE_3__["default"].getAllCompletedTodosInEachProject();
        Object.keys(completedTodos).forEach(projectId => {
            displayTodos(completedTodos[projectId], projectId);
        });
    });

    const generateTodosContainer = (projectTodos, projectId) => {
        const todosContainer = document.createElement('div');
        todosContainer.classList.add('todos-container');
        todosContainer.setAttribute('data-project-id', projectId);

        projectTodos.forEach((projectTodo) => {
            const todoContainer = (0,_todoComponent__WEBPACK_IMPORTED_MODULE_2__["default"])(projectTodo);
            todosContainer.appendChild(todoContainer);
        });

        return todosContainer;
    };

    const insertAddTodoBtn = (addTodoBtn) => {
        content.appendChild(addTodoBtn);
    }

    const displayTodos = (todos, projectId) => {

        const project = _db__WEBPACK_IMPORTED_MODULE_3__["default"].getProject(projectId);

        const todosContainer = generateTodosContainer(todos, project.id);        

        const projectTitleElement = document.createElement('h2');
        projectTitleElement.textContent = project.name;
        
        content.appendChild(projectTitleElement);
        content.appendChild(todosContainer);
    }

    const displayProjects = (projects) => {
        projectsContainer.innerHTML = '';
        projects.forEach((project) => {
            const projectBtn = (0,_projectBtnComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
            projectsContainer.appendChild(projectBtn);
        });
    };

    return { displayProjects, displayTodos, clearContent, insertAddTodoBtn };
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMHandler);

/***/ }),

/***/ "./src/editTodoFormComponent.js":
/*!**************************************!*\
  !*** ./src/editTodoFormComponent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addTodoFormComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodoFormComponent */ "./src/addTodoFormComponent.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "./src/db.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/classes.js");




const editTodoEvent = (editTodoForm) => {
    editTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectId = editTodoForm.closest('.todos-container').getAttribute('data-project-id');
        const todoId = editTodoForm.closest('.todo-container').getAttribute('data-todo-id');

        const formData = new FormData(editTodoForm);
        const todoData = {
            id: todoId,
            title: formData.get('title'),
            description: formData.get('description'),
            dueDate: formData.get('due-date'),
            priority: formData.get('priority'),
            completed: false,
            projectId: projectId
        };

        const todoEditedEvent = new CustomEvent('todoedited', {
            detail: {
                todoData: todoData
            }
        });
        document.dispatchEvent(todoEditedEvent);
    });
}

const createEditTodoForm = (todo) => {
    const editTodoForm = document.createElement('form');
    editTodoForm.setAttribute('id', 'edit-todo-form');
    editTodoEvent(editTodoForm);

    console.log(todo.projectId, todo.id);
    const currentTodo = _db__WEBPACK_IMPORTED_MODULE_1__["default"].obtainTodo(todo.projectId, todo.id);

    const [ todoTitleLabel, todoTitleInput ] = (0,_addTodoFormComponent__WEBPACK_IMPORTED_MODULE_0__.createLabelAndInput)('Title', 'text', 'title', 'title', true);
    todoTitleInput.value = currentTodo.title;

    const [ todoDescLabel, todoDescInput ] = (0,_addTodoFormComponent__WEBPACK_IMPORTED_MODULE_0__.createLabelAndInput)('Description', 'textarea', 'description', 'description', true);
    todoDescInput.value = currentTodo.description;

    const [ todoDueDateLabel, todoDueDateInput ] = (0,_addTodoFormComponent__WEBPACK_IMPORTED_MODULE_0__.createLabelAndInput)('Due Date', 'date', 'due-date', 'due-date', true);
    todoDueDateInput.value = currentTodo.dueDate;
    
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.setAttribute('for', 'priority');
    const prioritySelect = (0,_addTodoFormComponent__WEBPACK_IMPORTED_MODULE_0__.createPrioritySelect)(currentTodo.priority);
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('edit-todo-form-btns-container');

    const editBtn = (0,_addTodoFormComponent__WEBPACK_IMPORTED_MODULE_0__.createFormButton)('Update', 'edit-todo-btn', 'submit', {});
    const cancelBtn = (0,_addTodoFormComponent__WEBPACK_IMPORTED_MODULE_0__.createFormButton)('Cancel', 'cancel-btn', 'button', {
        click: function(e) {
            document.getElementById('edit-todo-form').remove();
        }
    });

    editTodoForm.appendChild(todoTitleLabel);
    editTodoForm.appendChild(todoTitleInput);
    editTodoForm.appendChild(todoDescLabel);
    editTodoForm.appendChild(todoDescInput);
    editTodoForm.appendChild(todoDueDateLabel);
    editTodoForm.appendChild(todoDueDateInput);
    editTodoForm.appendChild(priorityLabel);
    editTodoForm.appendChild(prioritySelect);
    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(cancelBtn);
    editTodoForm.appendChild(buttonsContainer);

    return editTodoForm;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEditTodoForm);

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
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "./src/db.js");
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domHandler */ "./src/domHandler.js");




const eventsHandler = (() => {
    const initializeCustomEvents = () => {
        document.addEventListener('projectcreated', (e) => {
            _db__WEBPACK_IMPORTED_MODULE_1__["default"].saveProject(e.detail.project);
            _domHandler__WEBPACK_IMPORTED_MODULE_2__["default"].displayProjects(_db__WEBPACK_IMPORTED_MODULE_1__["default"].getAllProjects());
        });

        document.addEventListener('todocreated', (e) => {
            const todoData = e.detail.todoData;
            const todoId = _db__WEBPACK_IMPORTED_MODULE_1__["default"].getIndexForNewTodo(todoData.projectId);
            const newTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo(
                todoId,
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority,
                todoData.completed,
                todoData.projectId
            );
            _db__WEBPACK_IMPORTED_MODULE_1__["default"].saveTodo(newTodo);

            // to refresh/update all the content
            const selectedOptionBtn = document.querySelector('.selected');
            selectedOptionBtn.click();
        });

        document.addEventListener('todoedited', (e) => {
            const todoData = e.detail.todoData;
            const updatedTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo(
                todoData.id,
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority,
                todoData.completed,
                todoData.projectId
            );
            console.log(updatedTodo);
            _db__WEBPACK_IMPORTED_MODULE_1__["default"].updateTodo(updatedTodo);
            
            const selectedOptionBtn = document.querySelector('.selected');
            selectedOptionBtn.click();
        });

        document.addEventListener('tododeleted', (e) => {
            _db__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo(e.detail.projectId, e.detail.todoId);

            const selectedOptionBtn = document.querySelector('.selected');
            selectedOptionBtn.click();
        });

        document.addEventListener('todochecklistchanged', (e) => {
            _db__WEBPACK_IMPORTED_MODULE_1__["default"].changeTodoCompletionState(e.detail.projectId, e.detail.todoId);

            const selectedOptionBtn = document.querySelector('.selected');
            selectedOptionBtn.click();
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
/* harmony export */   createAddTodoBtn: () => (/* binding */ createAddTodoBtn),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ "./src/domHandler.js");
/* harmony import */ var _addTodoFormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodoFormComponent */ "./src/addTodoFormComponent.js");
/* harmony import */ var _createSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createSvg */ "./src/createSvg.js");





const createAddTodoBtn = () => {
    const content = document.querySelector('.content');
    const addTodoBtn = document.createElement('button');
    addTodoBtn.setAttribute('id', 'add-todo-btn');
    const addTodoBtnSvg = (0,_createSvg__WEBPACK_IMPORTED_MODULE_2__["default"])({
        viewBox: '0 0 24 24',
        path: {
            d: 'M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z'
        }
    });

    const addTodoBtnText = document.createElement('span');
    addTodoBtnText.textContent = 'Add Todo';

    addTodoBtn.addEventListener('click', function(e) {
        this.style.display = 'none'
        const addTodoForm = (0,_addTodoFormComponent__WEBPACK_IMPORTED_MODULE_1__["default"])();
        content.appendChild(addTodoForm);
    });

    addTodoBtn.appendChild(addTodoBtnSvg);
    addTodoBtn.appendChild(addTodoBtnText);

    return addTodoBtn;
}

const createProjectBtnComponent = (project) => {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.textContent = project.name;
    projectBtn.setAttribute('data-project-id', project.id);
    projectBtn.addEventListener('click', (e) => {
        const currentSelectedProject = document.querySelector('.selected');
        if (currentSelectedProject) {
            currentSelectedProject.classList.remove('selected');
        }
        projectBtn.classList.add('selected');
    });

    projectBtn.addEventListener('click', function(e) {
        const addTodoBtn = createAddTodoBtn();
        _domHandler__WEBPACK_IMPORTED_MODULE_0__["default"].clearContent();
        _domHandler__WEBPACK_IMPORTED_MODULE_0__["default"].displayTodos(project.getTodos(), project.id);
        _domHandler__WEBPACK_IMPORTED_MODULE_0__["default"].insertAddTodoBtn(addTodoBtn);
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
/* harmony import */ var _editTodoFormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTodoFormComponent */ "./src/editTodoFormComponent.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");




const todoComponent = (todo) => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    todoContainer.setAttribute('data-todo-id', todo.id);

    const todoCheckList = document.createElement('input');
    todoCheckList.setAttribute('type', 'checkbox');
    todoCheckList.classList.add('todo-check-list');
    if (todo.completed) {
        todoCheckList.checked = true;
    }

    todoCheckList.addEventListener('change', function(e) {
        const todoCheckListEvent = new CustomEvent('todochecklistchanged', {
            detail: {
                projectId: todo.projectId,
                todoId: todo.id
            }
        });
        document.dispatchEvent(todoCheckListEvent);
    });

    const todoTitle = document.createElement('p');
    todoTitle.textContent = todo.title;
    todoTitle.classList.add('todo-title');

    const todoPriority = document.createElement('p');
    todoPriority.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.titleCase)(todo.priority);
    todoPriority.classList.add('todo-priority');
    todoPriority.classList.add(todo.priority);

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
    todoEditBtn.addEventListener('click', function(e) {
        const alreadyAEditForm = document.getElementById('edit-todo-form');
        if (alreadyAEditForm) {
            alreadyAEditForm.remove();
        }
        const editTodoForm = (0,_editTodoFormComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(todo);
        todoContainer.appendChild(editTodoForm);
    });

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
        const todoDeletedEvent = new CustomEvent('tododeleted', {
            detail: {
                projectId,
                todoId: todo.id
            }
        });
        document.dispatchEvent(todoDeletedEvent);
    });

    const relevantInfoContainer = document.createElement('div');
    relevantInfoContainer.classList.add('relevant-info-container');

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');

    relevantInfoContainer.appendChild(todoCheckList);
    relevantInfoContainer.appendChild(todoTitle);
    relevantInfoContainer.appendChild(todoPriority);
    relevantInfoContainer.appendChild(todoDueDate);
    relevantInfoContainer.appendChild(todoEditBtn);
    relevantInfoContainer.appendChild(todoDeleteBtn);

    descriptionContainer.appendChild(todoDescription);

    todoContainer.appendChild(relevantInfoContainer);
    todoContainer.appendChild(descriptionContainer);

    return todoContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoComponent);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   titleCase: () => (/* binding */ titleCase)
/* harmony export */ });
const titleCase = (words) => {
    return words.split(' ').map(word => {
        return `${word[0].toUpperCase()}${word.slice(1)}`;
    }).join(' ');
};



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsaUNBQWlDLGdDQUFnQyxnQ0FBZ0MsS0FBSyxXQUFXLGtCQUFrQixtQkFBbUIsK0JBQStCLEtBQUssY0FBYyxzQkFBc0Isd0RBQXdELDBDQUEwQyw4SEFBOEgsS0FBSyxnQkFBZ0IsOENBQThDLDBCQUEwQixLQUFLLGtCQUFrQiw4Q0FBOEMsMkJBQTJCLEtBQUssa0RBQWtELHNCQUFzQiwrQkFBK0IsS0FBSyxtREFBbUQsd0JBQXdCLHVCQUF1QixzQ0FBc0MscUJBQXFCLDJCQUEyQixzQkFBc0IsS0FBSyxxQ0FBcUMsc0JBQXNCLHdDQUF3Qyw0QkFBNEIsNkJBQTZCLHFCQUFxQixLQUFLLHNCQUFzQix5QkFBeUIsMEJBQTBCLEtBQUsscUVBQXFFLGtDQUFrQyxLQUFLLG1CQUFtQixrQ0FBa0MsMEJBQTBCLEtBQUssYUFBYSxvQkFBb0Isa0NBQWtDLEtBQUssdUNBQXVDLDBCQUEwQixLQUFLLDZCQUE2QiwyQkFBMkIscUJBQXFCLHFCQUFxQixLQUFLLG1DQUFtQyxnQ0FBZ0MsS0FBSyxrQkFBa0Isa0NBQWtDLDJCQUEyQixLQUFLLGlCQUFpQiw4Q0FBOEMsMEJBQTBCLEtBQUsseUJBQXlCLDJCQUEyQixxQkFBcUIsMkJBQTJCLGtCQUFrQixxQkFBcUIseUJBQXlCLEtBQUssK0JBQStCLHFCQUFxQiwwQkFBMEIsS0FBSyxrQ0FBa0Msc0JBQXNCLGdDQUFnQyw0QkFBNEIsdUNBQXVDLGlCQUFpQiwwQkFBMEIsMkJBQTJCLHFCQUFxQixLQUFLLGdDQUFnQyxrQ0FBa0MsMEJBQTBCLDJCQUEyQixtQkFBbUIsS0FBSyxxQ0FBcUMsZ0JBQWdCLEtBQUssd0JBQXdCLGdCQUFnQixLQUFLLHdCQUF3QixnQ0FBZ0MsMkJBQTJCLEtBQUssNEJBQTRCLGtDQUFrQyxTQUFTLDJCQUEyQixrQ0FBa0MsS0FBSyw2QkFBNkIsa0NBQWtDLEtBQUssbUNBQW1DLGlDQUFpQywwQkFBMEIsS0FBSywwQ0FBMEMscUJBQXFCLDJCQUEyQixxQkFBcUIsS0FBSyxrREFBa0Qsb0JBQW9CLEtBQUssd0JBQXdCLGlDQUFpQyxLQUFLLHNCQUFzQiw4QkFBOEIsS0FBSyx3QkFBd0Isc0JBQXNCLHNCQUFzQiwyQkFBMkIsa0NBQWtDLDhCQUE4QixLQUFLLHVDQUF1QyxzQkFBc0IsNkJBQTZCLEtBQUssZ0RBQWdELGdCQUFnQiwwQkFBMEIsS0FBSyx5QkFBeUIsbUJBQW1CLGVBQWUsMkJBQTJCLGdCQUFnQixpQkFBaUIsa0NBQWtDLHNCQUFzQiw4QkFBOEIsc0JBQXNCLDJCQUEyQixLQUFLLG1CQUFtQixxQkFBcUIsS0FBSyxtQkFBbUI7QUFDampMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDdk4xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1RTtBQUN2RSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztBQzlIekI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ3hHNUI7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0IsRUFBRSxjQUFjO0FBQ3hELEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9wdWJsaWMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3B1YmxpYy9zdHlsZS5jc3M/N2M0MyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvYWRkVG9kb0Zvcm1Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvY3JlYXRlUHJvamVjdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9jcmVhdGVTdmcuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9kYi5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2RvbUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9lZGl0VG9kb0Zvcm1Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9ldmVudHNIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9wcm9qZWN0QnRuQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLW1haW4tY29sb3ItMTogIzE3MjU0NDtcclxuICAgIC0tbWFpbi1jb2xvci0yOiAjNDQ1YTk5O1xyXG59XHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYXBwIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMjAwcHgpIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgICAgIFwiaGVhZGVyICBoZWFkZXIgIFwiXHJcbiAgICAgICAgXCJzaWRlYmFyIGNvbnRlbnQgXCJcclxuICAgICAgICBcImZvb3RlciAgZm9vdGVyICBcIjtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XHJcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0yKTtcclxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcclxufVxyXG5cclxuLmZpbHRlcnMsIC5wcm9qZWN0cy1jb250YWluZXIsIC5wcm9qZWN0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNpZGViYXItYnRuLCAucHJvamVjdC1idG4sICNhZGQtdG9kby1idG4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWJ0biwgI2FkZC10b2RvLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcclxuICAgIGdhcDogNnB4IDhweDtcclxufVxyXG5cclxuLnByb2plY3QtYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxufVxyXG5cclxuLnNpZGViYXItYnRuOmhvdmVyLCAucHJvamVjdC1idG46aG92ZXIsICNhZGQtdG9kby1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2ZGFmZjtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmRhZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgZmlsbDogdmFyKC0tbWFpbi1jb2xvci0xKTtcclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lciwgLmZpbHRlcnMge1xyXG4gICAgbWFyZ2luOiAxNnB4IDEycHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lLWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IGJsdWUgc29saWQgMnB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI5OWZhO1xyXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XHJcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcclxufVxyXG5cclxuLnRvZG8tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50b2RvLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLnJlbGV2YW50LWluZm8tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmVmZWQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi50b2RvLXRpdGxlLCAudG9kby1kdWUtZGF0ZSB7XHJcbiAgICBmbGV4OiAyO1xyXG59XHJcblxyXG4udG9kby1wcmlvcml0eSB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4udG9kby1wcmlvcml0eSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnRvZG8tcHJpb3JpdHkubG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGRiYzA7XHJcblxyXG59XHJcbi50b2RvLXByaW9yaXR5Lm1lZGl1bSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNjU1O1xyXG59XHJcblxyXG4udG9kby1wcmlvcml0eS5oaWdoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzE3NDY7XHJcbn1cclxuXHJcbi50b2RvLWRlc2NyaXB0aW9uOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ0Rlc2NyaXB0aW9uOiAnO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50b2RvLWVkaXQtYnRuLCAudG9kby1kZWxldGUtYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnRvZG8tZWRpdC1idG4gc3ZnLCAudG9kby1kZWxldGUtYnRuIHN2ZyB7XHJcbiAgICBmaWxsOiBibGFjaztcclxufVxyXG5cclxuLnRvZG8tZWRpdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbi50b2RvLWRlbGV0ZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4jYWRkLXRvZG8tZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NmY0OGI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtdG9kby1mb3JtLWJ0bnMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IG5vcm1hbDtcclxufVxyXG5cclxuLmFkZC10b2RvLWZvcm0tYnRucy1jb250YWluZXIgPiBidXR0b24ge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG59XHJcblxyXG4jZWRpdC10b2RvLWZvcm0ge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhNzU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3B1YmxpYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLGlDQUFpQztJQUNqQzs7OzBCQUdzQjtBQUMxQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7O0FBRTdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1tYWluLWNvbG9yLTE6ICMxNzI1NDQ7XFxyXFxuICAgIC0tbWFpbi1jb2xvci0yOiAjNDQ1YTk5O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTUwcHgsIDIwMHB4KSAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgICBcXFwiaGVhZGVyICBoZWFkZXIgIFxcXCJcXHJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGNvbnRlbnQgXFxcIlxcclxcbiAgICAgICAgXFxcImZvb3RlciAgZm9vdGVyICBcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xcclxcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLCAucHJvamVjdHMtY29udGFpbmVyLCAucHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1idG4sIC5wcm9qZWN0LWJ0biwgI2FkZC10b2RvLWJ0biB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNHB4IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgbWFyZ2luOiA0cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItYnRuLCAjYWRkLXRvZG8tYnRuIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxyXFxuICAgIGdhcDogNnB4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnRuIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWJ0bjpob3ZlciwgLnByb2plY3QtYnRuOmhvdmVyLCAjYWRkLXRvZG8tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2ZGFmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2ZGFmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbnN2ZyB7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyLCAuZmlsdGVycyB7XFxyXFxuICAgIG1hcmdpbjogMTZweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lLWlucHV0IHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZS1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IGJsdWUgc29saWQgMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4Yjk5ZmE7XFxyXFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxyXFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogMTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbGV2YW50LWluZm8tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmVmZWQ7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLCAudG9kby1kdWUtZGF0ZSB7XFxyXFxuICAgIGZsZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXByaW9yaXR5IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHkge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eS5sb3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBkYmMwO1xcclxcblxcclxcbn1cXHJcXG4udG9kby1wcmlvcml0eS5tZWRpdW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNjU1O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eS5oaWdoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzMTc0NjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGVzY3JpcHRpb246OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICdEZXNjcmlwdGlvbjogJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWVkaXQtYnRuLCAudG9kby1kZWxldGUtYnRuIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZWRpdC1idG4gc3ZnLCAudG9kby1kZWxldGUtYnRuIHN2ZyB7XFxyXFxuICAgIGZpbGw6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1lZGl0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuLnRvZG8tZGVsZXRlLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10b2RvLWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NmY0OGI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10b2RvLWZvcm0tYnRucy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10b2RvLWZvcm0tYnRucy1jb250YWluZXIgPiBidXR0b24ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXQtdG9kby1mb3JtIHtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYTc1O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuOmRpc2FibGVkIHtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUxhYmVsQW5kSW5wdXQgPSAobGFiZWxUZXh0LCBpbnB1dFR5cGUsIGlucHV0SWQsIGlucHV0TmFtZSwgcmVxdWlyZWQpID0+IHtcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dElkKTtcclxuXHJcbiAgICBsZXQgaW5wdXQ7XHJcbiAgICBpZiAoaW5wdXRUeXBlICE9PSAndGV4dGFyZWEnKSB7XHJcbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0VHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIH1cclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dElkKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XHJcbiAgICBpZiAocmVxdWlyZWQpIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgaW5wdXRdO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVQcmlvcml0eVNlbGVjdCA9IChkZWZhdWx0T3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XHJcblxyXG4gICAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcclxuICAgIGxvd09wdGlvbi5jbGFzc0xpc3QuYWRkKCdsb3cnKTtcclxuICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xyXG5cclxuICAgIGNvbnN0IG1lZGl1bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgbWVkaXVtT3B0aW9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XHJcbiAgICBtZWRpdW1PcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVkaXVtJyk7XHJcbiAgICBtZWRpdW1PcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcclxuXHJcbiAgICBjb25zdCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xyXG4gICAgaGlnaE9wdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XHJcbiAgICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbik7XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7ZGVmYXVsdE9wdGlvbi50b0xvd2VyQ2FzZSgpfWApLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XHJcblxyXG4gICAgcmV0dXJuIHByaW9yaXR5U2VsZWN0O1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVGb3JtQnV0dG9uID0gKGJ1dHRvblRleHQsIGJ1dHRvbklkLCBidXR0b25UeXBlLCBldmVudHMpID0+IHtcclxuICAgIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGZvcm1CdG4udGV4dENvbnRlbnQgPSBidXR0b25UZXh0O1xyXG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYnV0dG9uSWQpO1xyXG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBidXR0b25UeXBlKTtcclxuICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZXZlbnRIYW5kbGVyXSBvZiBPYmplY3QuZW50cmllcyhldmVudHMpKSB7XHJcbiAgICAgICAgZm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtQnRuO1xyXG59XHJcblxyXG5jb25zdCBhZGRUb2RvRXZlbnQgPSAoYWRkVG9kb0Zvcm0pID0+IHtcclxuICAgIC8vIGdldCB0aGUgaWQvaW5kZXggb2YgdGhlIHByb2plY3QgaW4gd2hpY2ggdGhlIHRvZG8gaXMgZ29pbmcgdG8gYmUgY3JlYXRlZFxyXG4gICAgY29uc3QgcHJvamVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnKTtcclxuXHJcbiAgICBhZGRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShhZGRUb2RvRm9ybSk7XHJcbiAgICAgICAgY29uc3QgdG9kb0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJyksXHJcbiAgICAgICAgICAgIGR1ZURhdGU6IGZvcm1EYXRhLmdldCgnZHVlLWRhdGUnKSxcclxuICAgICAgICAgICAgcHJpb3JpdHk6IGZvcm1EYXRhLmdldCgncHJpb3JpdHknKSxcclxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvamVjdElkOiBwcm9qZWN0SWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRvZG9DcmVhdGVkRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9jcmVhdGVkJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIHRvZG9EYXRhOiB0b2RvRGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0b2RvQ3JlYXRlZEV2ZW50KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVBZGRUb2RvRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgYWRkVG9kb0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdG9kby1mb3JtJyk7XHJcbiAgICBhZGRUb2RvRXZlbnQoYWRkVG9kb0Zvcm0pO1xyXG5cclxuICAgIGNvbnN0IFsgdG9kb1RpdGxlTGFiZWwsIHRvZG9UaXRsZUlucHV0IF0gPSBjcmVhdGVMYWJlbEFuZElucHV0KCdUaXRsZScsICd0ZXh0JywgJ3RpdGxlJywgJ3RpdGxlJywgdHJ1ZSk7XHJcbiAgICBjb25zdCBbIHRvZG9EZXNjTGFiZWwsIHRvZG9EZXNjSW5wdXQgXSA9IGNyZWF0ZUxhYmVsQW5kSW5wdXQoJ0Rlc2NyaXB0aW9uJywgJ3RleHRhcmVhJywgJ2Rlc2NyaXB0aW9uJywgJ2Rlc2NyaXB0aW9uJywgdHJ1ZSk7XHJcbiAgICBjb25zdCBbIHRvZG9EdWVEYXRlTGFiZWwsIHRvZG9EdWVEYXRlSW5wdXQgXSA9IGNyZWF0ZUxhYmVsQW5kSW5wdXQoJ0R1ZSBEYXRlJywgJ2RhdGUnLCAnZHVlLWRhdGUnLCAnZHVlLWRhdGUnLCB0cnVlKTtcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGNyZWF0ZVByaW9yaXR5U2VsZWN0KCdsb3cnKTtcclxuICAgIFxyXG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1mb3JtLWJ0bnMtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgYWRkQnRuID0gY3JlYXRlRm9ybUJ1dHRvbignQWRkJywgJ2NyZWF0ZS10b2RvJywgJ3N1Ym1pdCcsIHt9KTtcclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGNyZWF0ZUZvcm1CdXR0b24oJ0NhbmNlbCcsICdjYW5jZWwtYnRuJywgJ2J1dHRvbicsIHtcclxuICAgICAgICBjbGljazogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8tZm9ybScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8tYnRuJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlTGFiZWwpO1xyXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlSW5wdXQpO1xyXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2NMYWJlbCk7XHJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzY0lucHV0KTtcclxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlTGFiZWwpO1xyXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVJbnB1dCk7XHJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBhZGRUb2RvRm9ybTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTGFiZWxBbmRJbnB1dCwgY3JlYXRlUHJpb3JpdHlTZWxlY3QsIGNyZWF0ZUZvcm1CdXR0b24gfTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkVG9kb0Zvcm07IiwiZXhwb3J0IGNsYXNzIFRvRG8ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQsIHByb2plY3RJZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbXBsZXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBzdGF0aWMgYXV0b0luY3JlbWVudElkID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY29uc3RydWN0b3IuYXV0b0luY3JlbWVudElkKys7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvZG8odG9kb0lkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3NbdG9kb0lkXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wbGV0ZWRUb2RvcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmNvbXBsZXRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9kbyh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUb2RvKHRvZG9JZCwgdXBkYXRlZFRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9zW3RvZG9JZF0gPSB1cGRhdGVkVG9kbztcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUb2RvKHRvZG9JZCkge1xyXG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKHRvZG9JZCwgMSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdEhhbmRsZXIgPSAoYWRkUHJvamVjdEJ0bikgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHByb2plY3ROYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lLWlucHV0Jyk7XHJcblxyXG4gICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgYWRkUHJvamVjdEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KTtcclxuICAgIHByb2plY3ROYW1lSW5wdXQuZm9jdXMoKTtcclxuXHJcbiAgICBwcm9qZWN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDcmVhdGVkRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3Byb2plY3RjcmVhdGVkJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHByb2plY3RDcmVhdGVkRXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBmb2N1cyBmcm9tIHRoZSBpbnB1dCwgdHJpZ2dlcmluZyB0aGUgYmx1ciBldmVudFxyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9qZWN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0TmFtZUlucHV0KSB7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdE5hbWVJbnB1dDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3RIYW5kbGVyOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQoc3ZnT2JqKSB7XHJcbiAgICAvLyBmb3IgcmVmZXJlbmNlOiBodHRwczovL2Rldi50by90cWJpdC9ob3ctdG8tY3JlYXRlLXN2Zy1lbGVtZW50cy13aXRoLWphdmFzY3JpcHQtNG1tcFxyXG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcbiAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcclxuXHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBzdmdPYmoudmlld0JveCk7XHJcblxyXG4gICAgaWNvblBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBzdmdPYmoucGF0aC5kKTtcclxuXHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICAgIHJldHVybiBzdmc7XHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0LCBUb0RvIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5cclxuY2xhc3MgREIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gY29udmVydCBhbGwganNvbiBvYmplY3RzIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgY2xhc3Mgb2JqZWN0cywgc28gdGhleSBnZXQgdGhlaXIgbWV0aG9kc1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGInKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RiJykpLm1hcCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdC5uYW1lKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdC50b2RvcyA9IHByb2plY3QudG9kb3MubWFwKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUb0RvKHRvZG8uaWQsIHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlRGF0ZSwgdG9kby5wcmlvcml0eSwgdG9kby5jb21wbGV0ZWQsIG5ld1Byb2plY3QuaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbiAgICAgICAgfSkgOiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxQcm9qZWN0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0KGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluZGV4Rm9yTmV3VG9kbyhwcm9qZWN0SWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9qZWN0KHByb2plY3RJZCkuZ2V0VG9kb3MoKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgb2J0YWluVG9kbyhwcm9qZWN0SWQsIHRvZG9JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3Byb2plY3RJZF0uZ2V0VG9kbyh0b2RvSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURhdGFiYXNlKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGJcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCAke3Byb2plY3QubmFtZX0gc2F2ZWQhYCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YWJhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUb2RvKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzW3RvZG8ucHJvamVjdElkXS5lZGl0VG9kbyh0b2RvLmlkLCB0b2RvKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGFiYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVRvZG8odG9kbykge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHNbdG9kby5wcm9qZWN0SWRdLmFkZFRvZG8odG9kbyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhYmFzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRvZG8ocHJvamVjdElkLCB0b2RvSWQpIHtcclxuICAgICAgICB0aGlzLmdldFByb2plY3QocHJvamVjdElkKS5kZWxldGVUb2RvKHRvZG9JZCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhYmFzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRvZG9Db21wbGV0aW9uU3RhdGUocHJvamVjdElkLCB0b2RvSWQpIHtcclxuICAgICAgICB0aGlzLm9idGFpblRvZG8ocHJvamVjdElkLCB0b2RvSWQpLnRvZ2dsZUNvbXBsZXRpb24oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGFiYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQ29tcGxldGVkVG9kb3NJbkVhY2hQcm9qZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzQ29weSA9IFsuLi50aGlzLmdldEFsbFByb2plY3RzKCldO1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0c0NvcHkucmVkdWNlKChjb21wbGV0ZWRUb2Rvc09iaiwgY3VycmVudFByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkVG9kb3MgPSBjdXJyZW50UHJvamVjdC5nZXRDb21wbGV0ZWRUb2RvcygpO1xyXG4gICAgICAgICAgICBpZiAoY29tcGxldGVkVG9kb3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRUb2Rvc09ialtjdXJyZW50UHJvamVjdC5pZF0gPSBjdXJyZW50UHJvamVjdC5nZXRDb21wbGV0ZWRUb2RvcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZWRUb2Rvc09iajtcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gbmV3IERCKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdEhhbmRsZXIgZnJvbSAnLi9jcmVhdGVQcm9qZWN0SGFuZGxlcic7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0QnRuQ29tcG9uZW50IGZyb20gJy4vcHJvamVjdEJ0bkNvbXBvbmVudCc7XHJcbmltcG9ydCB0b2RvQ29tcG9uZW50IGZyb20gJy4vdG9kb0NvbXBvbmVudCc7XHJcbmltcG9ydCBkYiBmcm9tICcuL2RiJztcclxuXHJcbmNvbnN0IERPTUhhbmRsZXIgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idG4nKTtcclxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdEhhbmRsZXIodGhpcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItYnRuJyk7XHJcbiAgICBmaWx0ZXJCdXR0b25zLmZvckVhY2goZmlsdGVyQnV0dG9uID0+IHtcclxuICAgICAgICBmaWx0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0ZWRGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZEZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkRmlsdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlsdGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWRUb2Rvc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZWQtdG9kb3MtYnRuJyk7XHJcbiAgICBjb21wbGV0ZWRUb2Rvc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBET01IYW5kbGVyLmNsZWFyQ29udGVudCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFRvZG9zID0gZGIuZ2V0QWxsQ29tcGxldGVkVG9kb3NJbkVhY2hQcm9qZWN0KCk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoY29tcGxldGVkVG9kb3MpLmZvckVhY2gocHJvamVjdElkID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheVRvZG9zKGNvbXBsZXRlZFRvZG9zW3Byb2plY3RJZF0sIHByb2plY3RJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZW5lcmF0ZVRvZG9zQ29udGFpbmVyID0gKHByb2plY3RUb2RvcywgcHJvamVjdElkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2Rvcy1jb250YWluZXInKTtcclxuICAgICAgICB0b2Rvc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pZCcsIHByb2plY3RJZCk7XHJcblxyXG4gICAgICAgIHByb2plY3RUb2Rvcy5mb3JFYWNoKChwcm9qZWN0VG9kbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gdG9kb0NvbXBvbmVudChwcm9qZWN0VG9kbyk7XHJcbiAgICAgICAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9kb3NDb250YWluZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluc2VydEFkZFRvZG9CdG4gPSAoYWRkVG9kb0J0bikgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlzcGxheVRvZG9zID0gKHRvZG9zLCBwcm9qZWN0SWQpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRiLmdldFByb2plY3QocHJvamVjdElkKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBnZW5lcmF0ZVRvZG9zQ29udGFpbmVyKHRvZG9zLCBwcm9qZWN0LmlkKTsgICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBwcm9qZWN0VGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlRWxlbWVudCk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2Rvc0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlzcGxheVByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnRuID0gY3JlYXRlUHJvamVjdEJ0bkNvbXBvbmVudChwcm9qZWN0KTtcclxuICAgICAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVRvZG9zLCBjbGVhckNvbnRlbnQsIGluc2VydEFkZFRvZG9CdG4gfTtcclxufSkoKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBET01IYW5kbGVyOyIsImltcG9ydCB7IGNyZWF0ZUxhYmVsQW5kSW5wdXQsIGNyZWF0ZVByaW9yaXR5U2VsZWN0LCBjcmVhdGVGb3JtQnV0dG9uIH0gZnJvbSBcIi4vYWRkVG9kb0Zvcm1Db21wb25lbnRcIjtcclxuaW1wb3J0IGRiIGZyb20gXCIuL2RiXCI7XHJcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcblxyXG5jb25zdCBlZGl0VG9kb0V2ZW50ID0gKGVkaXRUb2RvRm9ybSkgPT4ge1xyXG4gICAgZWRpdFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGVkaXRUb2RvRm9ybS5jbG9zZXN0KCcudG9kb3MtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnKTtcclxuICAgICAgICBjb25zdCB0b2RvSWQgPSBlZGl0VG9kb0Zvcm0uY2xvc2VzdCgnLnRvZG8tY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taWQnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZWRpdFRvZG9Gb3JtKTtcclxuICAgICAgICBjb25zdCB0b2RvRGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IHRvZG9JZCxcclxuICAgICAgICAgICAgdGl0bGU6IGZvcm1EYXRhLmdldCgndGl0bGUnKSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSxcclxuICAgICAgICAgICAgZHVlRGF0ZTogZm9ybURhdGEuZ2V0KCdkdWUtZGF0ZScpLFxyXG4gICAgICAgICAgICBwcmlvcml0eTogZm9ybURhdGEuZ2V0KCdwcmlvcml0eScpLFxyXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3RJZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9FZGl0ZWRFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9kb2VkaXRlZCcsIHtcclxuICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICB0b2RvRGF0YTogdG9kb0RhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQodG9kb0VkaXRlZEV2ZW50KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVFZGl0VG9kb0Zvcm0gPSAodG9kbykgPT4ge1xyXG4gICAgY29uc3QgZWRpdFRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZWRpdFRvZG9Gb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC10b2RvLWZvcm0nKTtcclxuICAgIGVkaXRUb2RvRXZlbnQoZWRpdFRvZG9Gb3JtKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0b2RvLnByb2plY3RJZCwgdG9kby5pZCk7XHJcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IGRiLm9idGFpblRvZG8odG9kby5wcm9qZWN0SWQsIHRvZG8uaWQpO1xyXG5cclxuICAgIGNvbnN0IFsgdG9kb1RpdGxlTGFiZWwsIHRvZG9UaXRsZUlucHV0IF0gPSBjcmVhdGVMYWJlbEFuZElucHV0KCdUaXRsZScsICd0ZXh0JywgJ3RpdGxlJywgJ3RpdGxlJywgdHJ1ZSk7XHJcbiAgICB0b2RvVGl0bGVJbnB1dC52YWx1ZSA9IGN1cnJlbnRUb2RvLnRpdGxlO1xyXG5cclxuICAgIGNvbnN0IFsgdG9kb0Rlc2NMYWJlbCwgdG9kb0Rlc2NJbnB1dCBdID0gY3JlYXRlTGFiZWxBbmRJbnB1dCgnRGVzY3JpcHRpb24nLCAndGV4dGFyZWEnLCAnZGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24nLCB0cnVlKTtcclxuICAgIHRvZG9EZXNjSW5wdXQudmFsdWUgPSBjdXJyZW50VG9kby5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBbIHRvZG9EdWVEYXRlTGFiZWwsIHRvZG9EdWVEYXRlSW5wdXQgXSA9IGNyZWF0ZUxhYmVsQW5kSW5wdXQoJ0R1ZSBEYXRlJywgJ2RhdGUnLCAnZHVlLWRhdGUnLCAnZHVlLWRhdGUnLCB0cnVlKTtcclxuICAgIHRvZG9EdWVEYXRlSW5wdXQudmFsdWUgPSBjdXJyZW50VG9kby5kdWVEYXRlO1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBjcmVhdGVQcmlvcml0eVNlbGVjdChjdXJyZW50VG9kby5wcmlvcml0eSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdC10b2RvLWZvcm0tYnRucy1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBlZGl0QnRuID0gY3JlYXRlRm9ybUJ1dHRvbignVXBkYXRlJywgJ2VkaXQtdG9kby1idG4nLCAnc3VibWl0Jywge30pO1xyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gY3JlYXRlRm9ybUJ1dHRvbignQ2FuY2VsJywgJ2NhbmNlbC1idG4nLCAnYnV0dG9uJywge1xyXG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRvZG8tZm9ybScpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGVkaXRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVMYWJlbCk7XHJcbiAgICBlZGl0VG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlSW5wdXQpO1xyXG4gICAgZWRpdFRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EZXNjTGFiZWwpO1xyXG4gICAgZWRpdFRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EZXNjSW5wdXQpO1xyXG4gICAgZWRpdFRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlTGFiZWwpO1xyXG4gICAgZWRpdFRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlSW5wdXQpO1xyXG4gICAgZWRpdFRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgZWRpdFRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbiAgICBlZGl0VG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGVkaXRUb2RvRm9ybTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWRpdFRvZG9Gb3JtOyIsImltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcbmltcG9ydCBkYiBmcm9tIFwiLi9kYlwiO1xyXG5pbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi9kb21IYW5kbGVyXCI7XHJcblxyXG5jb25zdCBldmVudHNIYW5kbGVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxpemVDdXN0b21FdmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncHJvamVjdGNyZWF0ZWQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkYi5zYXZlUHJvamVjdChlLmRldGFpbC5wcm9qZWN0KTtcclxuICAgICAgICAgICAgRE9NSGFuZGxlci5kaXNwbGF5UHJvamVjdHMoZGIuZ2V0QWxsUHJvamVjdHMoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZG9jcmVhdGVkJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kb0RhdGEgPSBlLmRldGFpbC50b2RvRGF0YTtcclxuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gZGIuZ2V0SW5kZXhGb3JOZXdUb2RvKHRvZG9EYXRhLnByb2plY3RJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9EbyhcclxuICAgICAgICAgICAgICAgIHRvZG9JZCxcclxuICAgICAgICAgICAgICAgIHRvZG9EYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgdG9kb0RhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICB0b2RvRGF0YS5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgdG9kb0RhdGEucHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgICB0b2RvRGF0YS5jb21wbGV0ZWQsXHJcbiAgICAgICAgICAgICAgICB0b2RvRGF0YS5wcm9qZWN0SWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZGIuc2F2ZVRvZG8obmV3VG9kbyk7XHJcblxyXG4gICAgICAgICAgICAvLyB0byByZWZyZXNoL3VwZGF0ZSBhbGwgdGhlIGNvbnRlbnRcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25CdG4uY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG9kb2VkaXRlZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhID0gZS5kZXRhaWwudG9kb0RhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvID0gbmV3IFRvRG8oXHJcbiAgICAgICAgICAgICAgICB0b2RvRGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIHRvZG9EYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgdG9kb0RhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICB0b2RvRGF0YS5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgdG9kb0RhdGEucHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgICB0b2RvRGF0YS5jb21wbGV0ZWQsXHJcbiAgICAgICAgICAgICAgICB0b2RvRGF0YS5wcm9qZWN0SWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlZFRvZG8pO1xyXG4gICAgICAgICAgICBkYi51cGRhdGVUb2RvKHVwZGF0ZWRUb2RvKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uQnRuLmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZG9kZWxldGVkJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZGIuZGVsZXRlVG9kbyhlLmRldGFpbC5wcm9qZWN0SWQsIGUuZGV0YWlsLnRvZG9JZCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbkJ0bi5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b2RvY2hlY2tsaXN0Y2hhbmdlZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRiLmNoYW5nZVRvZG9Db21wbGV0aW9uU3RhdGUoZS5kZXRhaWwucHJvamVjdElkLCBlLmRldGFpbC50b2RvSWQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25CdG4uY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4geyBpbml0aWFsaXplQ3VzdG9tRXZlbnRzIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudHNIYW5kbGVyO1xyXG4iLCJpbXBvcnQgJy4vcHVibGljL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBkYiBmcm9tICcuL2RiJztcclxuaW1wb3J0IGV2ZW50c0hhbmRsZXIgZnJvbSAnLi9ldmVudHNIYW5kbGVyJztcclxuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSAnLi9kb21IYW5kbGVyJztcclxuXHJcbmV2ZW50c0hhbmRsZXIuaW5pdGlhbGl6ZUN1c3RvbUV2ZW50cygpO1xyXG5cclxuRE9NSGFuZGxlci5kaXNwbGF5UHJvamVjdHMoZGIuZ2V0QWxsUHJvamVjdHMoKSk7IiwiaW1wb3J0IERPTUhhbmRsZXIgZnJvbSBcIi4vZG9tSGFuZGxlclwiO1xyXG5pbXBvcnQgY3JlYXRlQWRkVG9kb0Zvcm0gZnJvbSAnLi9hZGRUb2RvRm9ybUNvbXBvbmVudCc7XHJcbmltcG9ydCBjcmVhdGVTdmdFbGVtZW50IGZyb20gXCIuL2NyZWF0ZVN2Z1wiO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZUFkZFRvZG9CdG4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZFRvZG9CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdG9kby1idG4nKTtcclxuICAgIGNvbnN0IGFkZFRvZG9CdG5TdmcgPSBjcmVhdGVTdmdFbGVtZW50KHtcclxuICAgICAgICB2aWV3Qm94OiAnMCAwIDI0IDI0JyxcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIGQ6ICdNMTMsOVYzLjVMMTguNSw5TTYsMkM0Ljg5LDIgNCwyLjg5IDQsNFYyMEEyLDIgMCAwLDAgNiwyMkgxOEEyLDIgMCAwLDAgMjAsMjBWOEwxNCwySDZaJ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFkZFRvZG9CdG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgYWRkVG9kb0J0blRleHQudGV4dENvbnRlbnQgPSAnQWRkIFRvZG8nO1xyXG5cclxuICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgY29uc3QgYWRkVG9kb0Zvcm0gPSBjcmVhdGVBZGRUb2RvRm9ybSgpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVG9kb0Zvcm0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkVG9kb0J0bi5hcHBlbmRDaGlsZChhZGRUb2RvQnRuU3ZnKTtcclxuICAgIGFkZFRvZG9CdG4uYXBwZW5kQ2hpbGQoYWRkVG9kb0J0blRleHQpO1xyXG5cclxuICAgIHJldHVybiBhZGRUb2RvQnRuO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0QnRuQ29tcG9uZW50ID0gKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcclxuICAgIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgcHJvamVjdC5pZCk7XHJcbiAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZFByb2plY3QpIHtcclxuICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBjcmVhdGVBZGRUb2RvQnRuKCk7XHJcbiAgICAgICAgRE9NSGFuZGxlci5jbGVhckNvbnRlbnQoKTtcclxuICAgICAgICBET01IYW5kbGVyLmRpc3BsYXlUb2Rvcyhwcm9qZWN0LmdldFRvZG9zKCksIHByb2plY3QuaWQpO1xyXG4gICAgICAgIERPTUhhbmRsZXIuaW5zZXJ0QWRkVG9kb0J0bihhZGRUb2RvQnRuKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0QnRuO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlQWRkVG9kb0J0biB9O1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0QnRuQ29tcG9uZW50OyIsImltcG9ydCBjcmVhdGVTdmdFbGVtZW50IGZyb20gXCIuL2NyZWF0ZVN2Z1wiO1xyXG5pbXBvcnQgY3JlYXRlRWRpdFRvZG9Gb3JtIGZyb20gXCIuL2VkaXRUb2RvRm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyB0aXRsZUNhc2UgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuY29uc3QgdG9kb0NvbXBvbmVudCA9ICh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XHJcbiAgICB0b2RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJywgdG9kby5pZCk7XHJcblxyXG4gICAgY29uc3QgdG9kb0NoZWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0b2RvQ2hlY2tMaXN0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgdG9kb0NoZWNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNoZWNrLWxpc3QnKTtcclxuICAgIGlmICh0b2RvLmNvbXBsZXRlZCkge1xyXG4gICAgICAgIHRvZG9DaGVja0xpc3QuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9kb0NoZWNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0NoZWNrTGlzdEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2RvY2hlY2tsaXN0Y2hhbmdlZCcsIHtcclxuICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRvZG8ucHJvamVjdElkLFxyXG4gICAgICAgICAgICAgICAgdG9kb0lkOiB0b2RvLmlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHRvZG9DaGVja0xpc3RFdmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG4gICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcclxuXHJcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0aXRsZUNhc2UodG9kby5wcmlvcml0eSk7XHJcbiAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpO1xyXG4gICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQodG9kby5wcmlvcml0eSk7XHJcblxyXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcclxuICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlLWRhdGUnKTtcclxuXHJcbiAgICBjb25zdCB0b2RvRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZWRpdFN2Z09iaiA9IHtcclxuICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgZDogXCJNNiAyQzQuOSAyIDQgMi45IDQgNFYyMEM0IDIxLjEgNC45IDIyIDYgMjJIMTBWMjAuMUwyMCAxMC4xVjhMMTQgMkg2TTEzIDMuNUwxOC41IDlIMTNWMy41TTIwLjEgMTNDMjAgMTMgMTkuOCAxMy4xIDE5LjcgMTMuMkwxOC43IDE0LjJMMjAuOCAxNi4zTDIxLjggMTUuM0MyMiAxNS4xIDIyIDE0LjcgMjEuOCAxNC41TDIwLjUgMTMuMkMyMC40IDEzLjEgMjAuMyAxMyAyMC4xIDEzTTE4LjEgMTQuOEwxMiAyMC45VjIzSDE0LjFMMjAuMiAxNi45TDE4LjEgMTQuOFpcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGVkaXRTdmcgPSBjcmVhdGVTdmdFbGVtZW50KGVkaXRTdmdPYmopO1xyXG4gICAgdG9kb0VkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdFN2Zyk7XHJcbiAgICB0b2RvRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtYnRuJyk7XHJcbiAgICB0b2RvRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb25zdCBhbHJlYWR5QUVkaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1mb3JtJyk7XHJcbiAgICAgICAgaWYgKGFscmVhZHlBRWRpdEZvcm0pIHtcclxuICAgICAgICAgICAgYWxyZWFkeUFFZGl0Rm9ybS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZWRpdFRvZG9Gb3JtID0gY3JlYXRlRWRpdFRvZG9Gb3JtKHRvZG8pO1xyXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFRvZG9Gb3JtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRlbGV0ZVN2Z09iaiA9IHtcclxuICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgZDogXCJNMTksM0gxNi4zSDcuN0g1QTIsMiAwIDAsMCAzLDVWNy43VjE2LjRWMTlBMiwyIDAgMCwwIDUsMjFINy43SDE2LjRIMTlBMiwyIDAgMCwwIDIxLDE5VjE2LjNWNy43VjVBMiwyIDAgMCwwIDE5LDNNMTUuNiwxN0wxMiwxMy40TDguNCwxN0w3LDE1LjZMMTAuNiwxMkw3LDguNEw4LjQsN0wxMiwxMC42TDE1LjYsN0wxNyw4LjRMMTMuNCwxMkwxNywxNS42TDE1LjYsMTdaXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWxldGVTdmcgPSBjcmVhdGVTdmdFbGVtZW50KGRlbGV0ZVN2Z09iaik7XHJcbiAgICB0b2RvRGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZVN2Zyk7XHJcbiAgICB0b2RvRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVsZXRlLWJ0bicpO1xyXG4gICAgdG9kb0RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSB0aGlzLmNsb3Nlc3QoJy50b2Rvcy1jb250YWluZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pZCcpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EZWxldGVkRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9kZWxldGVkJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RJZCxcclxuICAgICAgICAgICAgICAgIHRvZG9JZDogdG9kby5pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0b2RvRGVsZXRlZEV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlbGV2YW50SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVsZXZhbnRJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlbGV2YW50LWluZm8tY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIHJlbGV2YW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ2hlY2tMaXN0KTtcclxuICAgIHJlbGV2YW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xyXG4gICAgcmVsZXZhbnRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XHJcbiAgICByZWxldmFudEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xyXG4gICAgcmVsZXZhbnRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FZGl0QnRuKTtcclxuICAgIHJlbGV2YW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnRuKTtcclxuXHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQocmVsZXZhbnRJbmZvQ29udGFpbmVyKTtcclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiB0b2RvQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0NvbXBvbmVudDsiLCJjb25zdCB0aXRsZUNhc2UgPSAod29yZHMpID0+IHtcclxuICAgIHJldHVybiB3b3Jkcy5zcGxpdCgnICcpLm1hcCh3b3JkID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7d29yZFswXS50b1VwcGVyQ2FzZSgpfSR7d29yZC5zbGljZSgxKX1gO1xyXG4gICAgfSkuam9pbignICcpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdGl0bGVDYXNlIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9