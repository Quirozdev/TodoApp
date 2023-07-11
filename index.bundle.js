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

const getLatestTodoId = () => {
    return document.querySelectorAll('.todo-container').length;
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
    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }
}


class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.todos = [];
    }

    getTodo(todoId) {
        return this.todos[todoId];
    }

    getTodos() {
        return this.todos;
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
        // convert all json objects into the corresponding class objects, so they get their methods
        this.projects = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')).map((project, index) => {
            const newProject = new _classes__WEBPACK_IMPORTED_MODULE_0__.Project(index, project.name);
            newProject.todos = project.todos.map(todo => {
                return new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo(todo.id, todo.title, todo.description, todo.dueDate, todo.priority, todo.completed);
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

    updateTodo(todo, projectId) {
        this.projects[projectId].editTodo(todo.id, todo);
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

    changeTodoCompletionState(projectId, todoId) {
        this.obtainTodo(projectId, todoId).toggleCompletion();
        this.updateDatabase();
    }

    getAllCompletedTodosInEachProject() {
        return this.projects.filter(project => {
           const completedTodos = project.filter(todo => {
                return todo.completed;
            });
            // return only the projects which have completed todos
            return completedTodos.length !== 0;
        });
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

    const completedTodosBtn = document.getElementById('completed-todos-btn');
    completedTodosBtn.addEventListener('click', () => {
        const projectsWithCompletedTodos = _db__WEBPACK_IMPORTED_MODULE_5__["default"].getAllCompletedTodosInEachProject();
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




const editTodoEvent = (editTodoForm, todoId) => {
    editTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(todoId);
        const todoData = new FormData(editTodoForm);
        const newTodo = new _classes__WEBPACK_IMPORTED_MODULE_2__.ToDo(
            todoId,
            todoData.get('title'),
            todoData.get('description'),
            todoData.get('due-date'),
            todoData.get('priority'),
        );
        const projectId = document.querySelector('.selected').getAttribute('data-project-id');
        const todoEditedEvent = new CustomEvent('todoedited', {
            detail: {
                todo: newTodo,
                projectId: projectId
            }
        });
        document.dispatchEvent(todoEditedEvent);
    });
}

const createEditTodoForm = (todoId, todoEditBtn) => {
    const editTodoForm = document.createElement('form');
    editTodoForm.setAttribute('id', 'edit-todo-form');
    editTodoEvent(editTodoForm, todoId);

    const projectId = todoEditBtn.closest('.todos-container').getAttribute('data-project-id');
    const currentTodo = _db__WEBPACK_IMPORTED_MODULE_1__["default"].obtainTodo(projectId, todoId);

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

        document.addEventListener('todoedited', (e) => {
            _db__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(e.detail.todo, e.detail.projectId);
            _domHandler__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodos(e.detail.projectId);
        });

        document.addEventListener('tododeleted', (e) => {
            _db__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(e.detail.projectId, e.detail.todoId);
            _domHandler__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodos(e.detail.projectId);
        });

        document.addEventListener('todochecklistchanged', (e) => {
            _db__WEBPACK_IMPORTED_MODULE_0__["default"].changeTodoCompletionState(e.detail.projectId, e.detail.todoId);
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
/* harmony import */ var _editTodoFormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTodoFormComponent */ "./src/editTodoFormComponent.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");




const todoComponent = (todo, todoId) => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    todoContainer.setAttribute('data-todo-id', todoId);

    const todoCheckList = document.createElement('input');
    todoCheckList.setAttribute('type', 'checkbox');
    todoCheckList.classList.add('todo-check-list');
    if (todo.completed) {
        todoCheckList.checked = true;
    }
    todoCheckList.addEventListener('change', function(e) {
        const todoId = this.closest('.todo-container').getAttribute('data-todo-id');
        const projectId = this.closest('.todos-container').getAttribute('data-project-id');
        console.log(todoId, projectId);
        const todoCheckListEvent = new CustomEvent('todochecklistchanged', {
            detail: {
                projectId,
                todoId
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
        const editTodoForm = (0,_editTodoFormComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(todoId, this);
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
        const todoId = this.closest('.todo-container').getAttribute('data-todo-id');
        const todoDeletedEvent = new CustomEvent('tododeleted', {
            detail: {
                projectId,
                todoId
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxL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Ozs7Ozs7Ozs7Ozs7O0FDdEJHO0FBQ2M7QUFDckI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpREFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtFQUFrQjtBQUMvQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7O0FDM0c1QjtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQixFQUFFLGNBQWM7QUFDeEQsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3B1YmxpYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvcHVibGljL3N0eWxlLmNzcz83YzQzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9hZGRUb2RvRm9ybUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9jcmVhdGVQcm9qZWN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2NyZWF0ZVN2Zy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2RiLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvZG9tSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2VkaXRUb2RvRm9ybUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2V2ZW50c0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3Byb2plY3RCdG5Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy90b2RvQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tbWFpbi1jb2xvci0xOiAjMTcyNTQ0O1xyXG4gICAgLS1tYWluLWNvbG9yLTI6ICM0NDVhOTk7XHJcbn1cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5hcHAge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1MHB4LCAyMDBweCkgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICAgICAgXCJoZWFkZXIgIGhlYWRlciAgXCJcclxuICAgICAgICBcInNpZGViYXIgY29udGVudCBcIlxyXG4gICAgICAgIFwiZm9vdGVyICBmb290ZXIgIFwiO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcclxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTIpO1xyXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xyXG59XHJcblxyXG4uZmlsdGVycywgLnByb2plY3RzLWNvbnRhaW5lciwgLnByb2plY3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2lkZWJhci1idG4sIC5wcm9qZWN0LWJ0biwgI2FkZC10b2RvLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxufVxyXG5cclxuLnNpZGViYXItYnRuLCAjYWRkLXRvZG8tYnRuIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xyXG4gICAgZ2FwOiA2cHggOHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1idG46aG92ZXIsIC5wcm9qZWN0LWJ0bjpob3ZlciwgI2FkZC10b2RvLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkYWZmO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2ZGFmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yLTEpO1xyXG59XHJcblxyXG4ucHJvamVjdHMtY29udGFpbmVyLCAuZmlsdGVycyB7XHJcbiAgICBtYXJnaW46IDE2cHggMTJweDtcclxufVxyXG5cclxuLnByb2plY3QtbmFtZS1pbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUtaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogYmx1ZSBzb2xpZCAycHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4Yjk5ZmE7XHJcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcclxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xyXG59XHJcblxyXG4udG9kby1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRvZG8tY29udGFpbmVyOmhvdmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ucmVsZXZhbnQtaW5mby1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZWZlZDtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnRvZG8tdGl0bGUsIC50b2RvLWR1ZS1kYXRlIHtcclxuICAgIGZsZXg6IDI7XHJcbn1cclxuXHJcbi50b2RvLXByaW9yaXR5IHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50b2RvLXByaW9yaXR5IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4udG9kby1wcmlvcml0eS5sb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwZGJjMDtcclxuXHJcbn1cclxuLnRvZG8tcHJpb3JpdHkubWVkaXVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM2NTU7XHJcbn1cclxuXHJcbi50b2RvLXByaW9yaXR5LmhpZ2gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzMTc0NjtcclxufVxyXG5cclxuLnRvZG8tZGVzY3JpcHRpb246OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnRGVzY3JpcHRpb246ICc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRvZG8tZWRpdC1idG4sIC50b2RvLWRlbGV0ZS1idG4ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4udG9kby1lZGl0LWJ0biBzdmcsIC50b2RvLWRlbGV0ZS1idG4gc3ZnIHtcclxuICAgIGZpbGw6IGJsYWNrO1xyXG59XHJcblxyXG4udG9kby1lZGl0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuLnRvZG8tZGVsZXRlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiNhZGQtdG9kby1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk2ZjQ4YjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZC10b2RvLWZvcm0tYnRucy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktc2VsZjogbm9ybWFsO1xyXG59XHJcblxyXG4uYWRkLXRvZG8tZm9ybS1idG5zLWNvbnRhaW5lciA+IGJ1dHRvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbn1cclxuXHJcbiNlZGl0LXRvZG8tZm9ybSB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmE3NTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG46ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHVibGljL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsaUNBQWlDO0lBQ2pDOzs7MEJBR3NCO0FBQzFCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLW1haW4tY29sb3ItMTogIzE3MjU0NDtcXHJcXG4gICAgLS1tYWluLWNvbG9yLTI6ICM0NDVhOTk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMjAwcHgpIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgIFxcXCJoZWFkZXIgIGhlYWRlciAgXFxcIlxcclxcbiAgICAgICAgXFxcInNpZGViYXIgY29udGVudCBcXFwiXFxyXFxuICAgICAgICBcXFwiZm9vdGVyICBmb290ZXIgIFxcXCI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSk7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMik7XFxyXFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMsIC5wcm9qZWN0cy1jb250YWluZXIsIC5wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWJ0biwgLnByb2plY3QtYnRuLCAjYWRkLXRvZG8tYnRuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiA0cHggMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBtYXJnaW46IDRweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1idG4sICNhZGQtdG9kby1idG4ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgZ2FwOiA2cHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idG4ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItYnRuOmhvdmVyLCAucHJvamVjdC1idG46aG92ZXIsICNhZGQtdG9kby1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkYWZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkYWZmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGZpbGw6IHZhcigtLW1haW4tY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIsIC5maWx0ZXJzIHtcXHJcXG4gICAgbWFyZ2luOiAxNnB4IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lLWlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogYmx1ZSBzb2xpZCAycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiOTlmYTtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xKTtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXI6aG92ZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVsZXZhbnQtaW5mby1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZWZlZDtcXHJcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUsIC50b2RvLWR1ZS1kYXRlIHtcXHJcXG4gICAgZmxleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHkge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eSB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXByaW9yaXR5LmxvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGRiYzA7XFxyXFxuXFxyXFxufVxcclxcbi50b2RvLXByaW9yaXR5Lm1lZGl1bSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM2NTU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXByaW9yaXR5LmhpZ2gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMxNzQ2O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJ0Rlc2NyaXB0aW9uOiAnO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZWRpdC1idG4sIC50b2RvLWRlbGV0ZS1idG4ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1lZGl0LWJ0biBzdmcsIC50b2RvLWRlbGV0ZS1idG4gc3ZnIHtcXHJcXG4gICAgZmlsbDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWVkaXQtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4udG9kby1kZWxldGUtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRvZG8tZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk2ZjQ4YjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tZm9ybS1idG5zLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tZm9ybS1idG5zLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZWRpdC10b2RvLWZvcm0ge1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhNzU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMjRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG46ZGlzYWJsZWQge1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5cclxuY29uc3QgY3JlYXRlTGFiZWxBbmRJbnB1dCA9IChsYWJlbFRleHQsIGlucHV0VHlwZSwgaW5wdXRJZCwgaW5wdXROYW1lLCByZXF1aXJlZCkgPT4ge1xyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0SWQpO1xyXG5cclxuICAgIGxldCBpbnB1dDtcclxuICAgIGlmIChpbnB1dFR5cGUgIT09ICd0ZXh0YXJlYScpIHtcclxuICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgfVxyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0SWQpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcclxuICAgIGlmIChyZXF1aXJlZCkgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCBpbnB1dF07XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVByaW9yaXR5U2VsZWN0ID0gKGRlZmF1bHRPcHRpb24pID0+IHtcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcclxuXHJcbiAgICBjb25zdCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xyXG4gICAgbG93T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xyXG4gICAgbG93T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XHJcblxyXG4gICAgY29uc3QgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBtZWRpdW1PcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcclxuICAgIG1lZGl1bU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdtZWRpdW0nKTtcclxuICAgIG1lZGl1bU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xyXG5cclxuICAgIGNvbnN0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIGhpZ2hPcHRpb24udGV4dENvbnRlbnQgPSAnSGlnaCc7XHJcbiAgICBoaWdoT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcclxuICAgIGhpZ2hPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQobG93T3B0aW9uKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG1lZGl1bU9wdGlvbik7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKTtcclxuXHJcbiAgICBwcmlvcml0eVNlbGVjdC5xdWVyeVNlbGVjdG9yKGAuJHtkZWZhdWx0T3B0aW9uLnRvTG93ZXJDYXNlKCl9YCkuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcclxuXHJcbiAgICByZXR1cm4gcHJpb3JpdHlTZWxlY3Q7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUZvcm1CdXR0b24gPSAoYnV0dG9uVGV4dCwgYnV0dG9uSWQsIGJ1dHRvblR5cGUsIGV2ZW50cykgPT4ge1xyXG4gICAgY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZm9ybUJ0bi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XHJcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBidXR0b25JZCk7XHJcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsIGJ1dHRvblR5cGUpO1xyXG4gICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBldmVudEhhbmRsZXJdIG9mIE9iamVjdC5lbnRyaWVzKGV2ZW50cykpIHtcclxuICAgICAgICBmb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1CdG47XHJcbn1cclxuXHJcbmNvbnN0IGdldExhdGVzdFRvZG9JZCA9ICgpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1jb250YWluZXInKS5sZW5ndGg7XHJcbn1cclxuXHJcbmNvbnN0IGFkZFRvZG9FdmVudCA9IChhZGRUb2RvRm9ybSkgPT4ge1xyXG4gICAgYWRkVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdG9kb0RhdGEgPSBuZXcgRm9ybURhdGEoYWRkVG9kb0Zvcm0pO1xyXG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9EbyhcclxuICAgICAgICAgICAgZ2V0TGF0ZXN0VG9kb0lkKCksXHJcbiAgICAgICAgICAgIHRvZG9EYXRhLmdldCgndGl0bGUnKSxcclxuICAgICAgICAgICAgdG9kb0RhdGEuZ2V0KCdkZXNjcmlwdGlvbicpLFxyXG4gICAgICAgICAgICB0b2RvRGF0YS5nZXQoJ2R1ZS1kYXRlJyksXHJcbiAgICAgICAgICAgIHRvZG9EYXRhLmdldCgncHJpb3JpdHknKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIGdldCB0aGUgaWQvaW5kZXggb2YgdGhlIHByb2plY3QgaW4gd2hpY2ggdGhlIHRvZG8gaXMgZ29pbmcgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0NyZWF0ZWRFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9kb2NyZWF0ZWQnLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgdG9kbzogbmV3VG9kbyxcclxuICAgICAgICAgICAgICAgIHByb2plY3RJZDogcHJvamVjdElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHRvZG9DcmVhdGVkRXZlbnQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUFkZFRvZG9Gb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkVG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBhZGRUb2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10b2RvLWZvcm0nKTtcclxuICAgIGFkZFRvZG9FdmVudChhZGRUb2RvRm9ybSk7XHJcblxyXG4gICAgY29uc3QgWyB0b2RvVGl0bGVMYWJlbCwgdG9kb1RpdGxlSW5wdXQgXSA9IGNyZWF0ZUxhYmVsQW5kSW5wdXQoJ1RpdGxlJywgJ3RleHQnLCAndGl0bGUnLCAndGl0bGUnLCB0cnVlKTtcclxuICAgIGNvbnN0IFsgdG9kb0Rlc2NMYWJlbCwgdG9kb0Rlc2NJbnB1dCBdID0gY3JlYXRlTGFiZWxBbmRJbnB1dCgnRGVzY3JpcHRpb24nLCAndGV4dGFyZWEnLCAnZGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24nLCB0cnVlKTtcclxuICAgIGNvbnN0IFsgdG9kb0R1ZURhdGVMYWJlbCwgdG9kb0R1ZURhdGVJbnB1dCBdID0gY3JlYXRlTGFiZWxBbmRJbnB1dCgnRHVlIERhdGUnLCAnZGF0ZScsICdkdWUtZGF0ZScsICdkdWUtZGF0ZScsIHRydWUpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcclxuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gY3JlYXRlUHJpb3JpdHlTZWxlY3QoJ2xvdycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWZvcm0tYnRucy1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBhZGRCdG4gPSBjcmVhdGVGb3JtQnV0dG9uKCdBZGQnLCAnY3JlYXRlLXRvZG8nLCAnc3VibWl0Jywge30pO1xyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gY3JlYXRlRm9ybUJ1dHRvbignQ2FuY2VsJywgJ2NhbmNlbC1idG4nLCAnYnV0dG9uJywge1xyXG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kby1mb3JtJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kby1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVMYWJlbCk7XHJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVJbnB1dCk7XHJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzY0xhYmVsKTtcclxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EZXNjSW5wdXQpO1xyXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVMYWJlbCk7XHJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZUlucHV0KTtcclxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGFkZFRvZG9Gb3JtO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVMYWJlbEFuZElucHV0LCBjcmVhdGVQcmlvcml0eVNlbGVjdCwgY3JlYXRlRm9ybUJ1dHRvbiB9O1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRUb2RvRm9ybTsiLCJleHBvcnQgY2xhc3MgVG9EbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29tcGxldGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvZG8odG9kb0lkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3NbdG9kb0lkXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb2RvKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFRvZG8odG9kb0lkLCB1cGRhdGVkVG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3NbdG9kb0lkXSA9IHVwZGF0ZWRUb2RvO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRvZG8odG9kb0lkKSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UodG9kb0lkLCAxKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcblxyXG5jb25zdCBnZXRMYXRlc3RQcm9qZWN0SWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnRuJykubGVuZ3RoO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0SGFuZGxlciA9IChhZGRQcm9qZWN0QnRuKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgcHJvamVjdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtaW5wdXQnKTtcclxuXHJcbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xyXG4gICAgcHJvamVjdE5hbWVJbnB1dC5mb2N1cygpO1xyXG5cclxuICAgIHByb2plY3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENyZWF0ZWRFdmVudCA9IG5ldyBDdXN0b21FdmVudCgncHJvamVjdGNyZWF0ZWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IG5ldyBQcm9qZWN0KGdldExhdGVzdFByb2plY3RJZCgpLCBwcm9qZWN0TmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHByb2plY3RDcmVhdGVkRXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBmb2N1cyBmcm9tIHRoZSBpbnB1dCwgdHJpZ2dlcmluZyB0aGUgYmx1ciBldmVudFxyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9qZWN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0TmFtZUlucHV0KSB7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdE5hbWVJbnB1dDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3RIYW5kbGVyOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQoc3ZnT2JqKSB7XHJcbiAgICAvLyBmb3IgcmVmZXJlbmNlOiBodHRwczovL2Rldi50by90cWJpdC9ob3ctdG8tY3JlYXRlLXN2Zy1lbGVtZW50cy13aXRoLWphdmFzY3JpcHQtNG1tcFxyXG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcbiAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcclxuXHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBzdmdPYmoudmlld0JveCk7XHJcblxyXG4gICAgaWNvblBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBzdmdPYmoucGF0aC5kKTtcclxuXHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICAgIHJldHVybiBzdmc7XHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0LCBUb0RvIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5cclxuY2xhc3MgREIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gY29udmVydCBhbGwganNvbiBvYmplY3RzIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgY2xhc3Mgb2JqZWN0cywgc28gdGhleSBnZXQgdGhlaXIgbWV0aG9kc1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGInKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RiJykpLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGluZGV4LCBwcm9qZWN0Lm5hbWUpO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0LnRvZG9zID0gcHJvamVjdC50b2Rvcy5tYXAodG9kbyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRvRG8odG9kby5pZCwgdG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5LCB0b2RvLmNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcclxuICAgICAgICB9KSA6IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgb2J0YWluVG9kbyhwcm9qZWN0SWQsIHRvZG9JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3Byb2plY3RJZF0uZ2V0VG9kbyh0b2RvSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURhdGFiYXNlKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGJcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCAke3Byb2plY3QubmFtZX0gc2F2ZWQhYCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YWJhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUb2RvKHRvZG8sIHByb2plY3RJZCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdElkXS5lZGl0VG9kbyh0b2RvLmlkLCB0b2RvKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGFiYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVRvZG8odG9kbywgcHJvamVjdElkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0SWRdLmFkZFRvZG8odG9kbyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhYmFzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRvZG8ocHJvamVjdElkLCB0b2RvSWQpIHtcclxuICAgICAgICB0aGlzLmdldFByb2plY3QocHJvamVjdElkKS5kZWxldGVUb2RvKHRvZG9JZCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhYmFzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRvZG9Db21wbGV0aW9uU3RhdGUocHJvamVjdElkLCB0b2RvSWQpIHtcclxuICAgICAgICB0aGlzLm9idGFpblRvZG8ocHJvamVjdElkLCB0b2RvSWQpLnRvZ2dsZUNvbXBsZXRpb24oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGFiYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQ29tcGxldGVkVG9kb3NJbkVhY2hQcm9qZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRUb2RvcyA9IHByb2plY3QuZmlsdGVyKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZG8uY29tcGxldGVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIG9ubHkgdGhlIHByb2plY3RzIHdoaWNoIGhhdmUgY29tcGxldGVkIHRvZG9zXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZWRUb2Rvcy5sZW5ndGggIT09IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gbmV3IERCKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdEhhbmRsZXIgZnJvbSAnLi9jcmVhdGVQcm9qZWN0SGFuZGxlcic7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0QnRuQ29tcG9uZW50IGZyb20gJy4vcHJvamVjdEJ0bkNvbXBvbmVudCc7XHJcbmltcG9ydCBjcmVhdGVBZGRUb2RvRm9ybSBmcm9tICcuL2FkZFRvZG9Gb3JtQ29tcG9uZW50JztcclxuaW1wb3J0IGNyZWF0ZVN2Z0VsZW1lbnQgZnJvbSBcIi4vY3JlYXRlU3ZnXCI7XHJcbmltcG9ydCB0b2RvQ29tcG9uZW50IGZyb20gJy4vdG9kb0NvbXBvbmVudCc7XHJcbmltcG9ydCBkYiBmcm9tICcuL2RiJztcclxuXHJcbmNvbnN0IERPTUhhbmRsZXIgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xyXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0SGFuZGxlcih0aGlzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlZFRvZG9zQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXRlZC10b2Rvcy1idG4nKTtcclxuICAgIGNvbXBsZXRlZFRvZG9zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzV2l0aENvbXBsZXRlZFRvZG9zID0gZGIuZ2V0QWxsQ29tcGxldGVkVG9kb3NJbkVhY2hQcm9qZWN0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBnZW5lcmF0ZVRvZG9zQ29udGFpbmVyID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9zLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgcHJvamVjdC5pZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IHByb2plY3QuZ2V0VG9kb3MoKTtcclxuICAgICAgICBwcm9qZWN0VG9kb3MuZm9yRWFjaCgocHJvamVjdFRvZG8sIHRvZG9JbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gdG9kb0NvbXBvbmVudChwcm9qZWN0VG9kbywgdG9kb0luZGV4KTtcclxuICAgICAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2Rvc0NvbnRhaW5lcjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY3JlYXRlQWRkVG9kb0J0biA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYWRkVG9kb0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10b2RvLWJ0bicpO1xyXG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdG5TdmcgPSBjcmVhdGVTdmdFbGVtZW50KHtcclxuICAgICAgICAgICAgdmlld0JveDogJzAgMCAyNCAyNCcsXHJcbiAgICAgICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgICAgIGQ6ICdNMTMsOVYzLjVMMTguNSw5TTYsMkM0Ljg5LDIgNCwyLjg5IDQsNFYyMEEyLDIgMCAwLDAgNiwyMkgxOEEyLDIgMCAwLDAgMjAsMjBWOEwxNCwySDZaJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBhZGRUb2RvQnRuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBhZGRUb2RvQnRuVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgVG9kbyc7XHJcbiAgICBcclxuICAgICAgICBhZGRUb2RvQnRuLmFwcGVuZENoaWxkKGFkZFRvZG9CdG5TdmcpO1xyXG4gICAgICAgIGFkZFRvZG9CdG4uYXBwZW5kQ2hpbGQoYWRkVG9kb0J0blRleHQpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGFkZFRvZG9CdG47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlzcGxheVRvZG9zID0gKHByb2plY3RJZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkYi5nZXRQcm9qZWN0KHByb2plY3RJZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZ2VuZXJhdGVUb2Rvc0NvbnRhaW5lcihwcm9qZWN0LCBwcm9qZWN0SWQpO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRUb2RvQnRuID0gY3JlYXRlQWRkVG9kb0J0bigpO1xyXG4gICAgICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBjb25zdCBhZGRUb2RvRm9ybSA9IGNyZWF0ZUFkZFRvZG9Gb3JtKCk7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVG9kb0Zvcm0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBwcm9qZWN0VGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlRWxlbWVudCk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2Rvc0NvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcclxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnRuID0gY3JlYXRlUHJvamVjdEJ0bkNvbXBvbmVudChwcm9qZWN0Lm5hbWUsIGluZGV4KTtcclxuICAgICAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVRvZG9zIH07XHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRE9NSGFuZGxlcjsiLCJpbXBvcnQgeyBjcmVhdGVMYWJlbEFuZElucHV0LCBjcmVhdGVQcmlvcml0eVNlbGVjdCwgY3JlYXRlRm9ybUJ1dHRvbiB9IGZyb20gXCIuL2FkZFRvZG9Gb3JtQ29tcG9uZW50XCI7XHJcbmltcG9ydCBkYiBmcm9tIFwiLi9kYlwiO1xyXG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5cclxuY29uc3QgZWRpdFRvZG9FdmVudCA9IChlZGl0VG9kb0Zvcm0sIHRvZG9JZCkgPT4ge1xyXG4gICAgZWRpdFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9JZCk7XHJcbiAgICAgICAgY29uc3QgdG9kb0RhdGEgPSBuZXcgRm9ybURhdGEoZWRpdFRvZG9Gb3JtKTtcclxuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8oXHJcbiAgICAgICAgICAgIHRvZG9JZCxcclxuICAgICAgICAgICAgdG9kb0RhdGEuZ2V0KCd0aXRsZScpLFxyXG4gICAgICAgICAgICB0b2RvRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJyksXHJcbiAgICAgICAgICAgIHRvZG9EYXRhLmdldCgnZHVlLWRhdGUnKSxcclxuICAgICAgICAgICAgdG9kb0RhdGEuZ2V0KCdwcmlvcml0eScpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnKTtcclxuICAgICAgICBjb25zdCB0b2RvRWRpdGVkRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9lZGl0ZWQnLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgdG9kbzogbmV3VG9kbyxcclxuICAgICAgICAgICAgICAgIHByb2plY3RJZDogcHJvamVjdElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHRvZG9FZGl0ZWRFdmVudCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlRWRpdFRvZG9Gb3JtID0gKHRvZG9JZCwgdG9kb0VkaXRCdG4pID0+IHtcclxuICAgIGNvbnN0IGVkaXRUb2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGVkaXRUb2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtdG9kby1mb3JtJyk7XHJcbiAgICBlZGl0VG9kb0V2ZW50KGVkaXRUb2RvRm9ybSwgdG9kb0lkKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0SWQgPSB0b2RvRWRpdEJ0bi5jbG9zZXN0KCcudG9kb3MtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gZGIub2J0YWluVG9kbyhwcm9qZWN0SWQsIHRvZG9JZCk7XHJcblxyXG4gICAgY29uc3QgWyB0b2RvVGl0bGVMYWJlbCwgdG9kb1RpdGxlSW5wdXQgXSA9IGNyZWF0ZUxhYmVsQW5kSW5wdXQoJ1RpdGxlJywgJ3RleHQnLCAndGl0bGUnLCAndGl0bGUnLCB0cnVlKTtcclxuICAgIHRvZG9UaXRsZUlucHV0LnZhbHVlID0gY3VycmVudFRvZG8udGl0bGU7XHJcblxyXG4gICAgY29uc3QgWyB0b2RvRGVzY0xhYmVsLCB0b2RvRGVzY0lucHV0IF0gPSBjcmVhdGVMYWJlbEFuZElucHV0KCdEZXNjcmlwdGlvbicsICd0ZXh0YXJlYScsICdkZXNjcmlwdGlvbicsICdkZXNjcmlwdGlvbicsIHRydWUpO1xyXG4gICAgdG9kb0Rlc2NJbnB1dC52YWx1ZSA9IGN1cnJlbnRUb2RvLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0IFsgdG9kb0R1ZURhdGVMYWJlbCwgdG9kb0R1ZURhdGVJbnB1dCBdID0gY3JlYXRlTGFiZWxBbmRJbnB1dCgnRHVlIERhdGUnLCAnZGF0ZScsICdkdWUtZGF0ZScsICdkdWUtZGF0ZScsIHRydWUpO1xyXG4gICAgdG9kb0R1ZURhdGVJbnB1dC52YWx1ZSA9IGN1cnJlbnRUb2RvLmR1ZURhdGU7XHJcbiAgICBcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGNyZWF0ZVByaW9yaXR5U2VsZWN0KGN1cnJlbnRUb2RvLnByaW9yaXR5KTtcclxuICAgIFxyXG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvZG8tZm9ybS1idG5zLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVGb3JtQnV0dG9uKCdVcGRhdGUnLCAnZWRpdC10b2RvLWJ0bicsICdzdWJtaXQnLCB7fSk7XHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBjcmVhdGVGb3JtQnV0dG9uKCdDYW5jZWwnLCAnY2FuY2VsLWJ0bicsICdidXR0b24nLCB7XHJcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1mb3JtJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZWRpdFRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9UaXRsZUxhYmVsKTtcclxuICAgIGVkaXRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVJbnB1dCk7XHJcbiAgICBlZGl0VG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2NMYWJlbCk7XHJcbiAgICBlZGl0VG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2NJbnB1dCk7XHJcbiAgICBlZGl0VG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVMYWJlbCk7XHJcbiAgICBlZGl0VG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVJbnB1dCk7XHJcbiAgICBlZGl0VG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgICBlZGl0VG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuICAgIGVkaXRUb2RvRm9ybS5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gZWRpdFRvZG9Gb3JtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFZGl0VG9kb0Zvcm07IiwiaW1wb3J0IGRiIGZyb20gXCIuL2RiXCI7XHJcbmltcG9ydCBET01IYW5kbGVyIGZyb20gXCIuL2RvbUhhbmRsZXJcIjtcclxuXHJcbmNvbnN0IGV2ZW50c0hhbmRsZXIgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbGl6ZUN1c3RvbUV2ZW50cyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwcm9qZWN0Y3JlYXRlZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRiLnNhdmVQcm9qZWN0KGUuZGV0YWlsLnByb2plY3QpO1xyXG4gICAgICAgICAgICBET01IYW5kbGVyLmRpc3BsYXlQcm9qZWN0cyhkYi5nZXRBbGxQcm9qZWN0cygpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG9kb2NyZWF0ZWQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkYi5zYXZlVG9kbyhlLmRldGFpbC50b2RvLCBlLmRldGFpbC5wcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICBET01IYW5kbGVyLmRpc3BsYXlUb2RvcyhlLmRldGFpbC5wcm9qZWN0SWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b2RvZWRpdGVkJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZGIudXBkYXRlVG9kbyhlLmRldGFpbC50b2RvLCBlLmRldGFpbC5wcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICBET01IYW5kbGVyLmRpc3BsYXlUb2RvcyhlLmRldGFpbC5wcm9qZWN0SWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b2RvZGVsZXRlZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRiLmRlbGV0ZVRvZG8oZS5kZXRhaWwucHJvamVjdElkLCBlLmRldGFpbC50b2RvSWQpO1xyXG4gICAgICAgICAgICBET01IYW5kbGVyLmRpc3BsYXlUb2RvcyhlLmRldGFpbC5wcm9qZWN0SWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b2RvY2hlY2tsaXN0Y2hhbmdlZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRiLmNoYW5nZVRvZG9Db21wbGV0aW9uU3RhdGUoZS5kZXRhaWwucHJvamVjdElkLCBlLmRldGFpbC50b2RvSWQpO1xyXG4gICAgICAgICAgICBET01IYW5kbGVyLmRpc3BsYXlUb2RvcyhlLmRldGFpbC5wcm9qZWN0SWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7IGluaXRpYWxpemVDdXN0b21FdmVudHMgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50c0hhbmRsZXI7XHJcbiIsImltcG9ydCAnLi9wdWJsaWMvc3R5bGUuY3NzJztcclxuaW1wb3J0IGRiIGZyb20gJy4vZGInO1xyXG5pbXBvcnQgZXZlbnRzSGFuZGxlciBmcm9tICcuL2V2ZW50c0hhbmRsZXInO1xyXG5pbXBvcnQgRE9NSGFuZGxlciBmcm9tICcuL2RvbUhhbmRsZXInO1xyXG5cclxuZXZlbnRzSGFuZGxlci5pbml0aWFsaXplQ3VzdG9tRXZlbnRzKCk7XHJcblxyXG5ET01IYW5kbGVyLmRpc3BsYXlQcm9qZWN0cyhkYi5nZXRBbGxQcm9qZWN0cygpKTsiLCJpbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi9kb21IYW5kbGVyXCI7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0QnRuQ29tcG9uZW50ID0gKHByb2plY3ROYW1lLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpO1xyXG4gICAgcHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG4gICAgcHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pZCcsIGlkKTtcclxuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcclxuICAgICAgICBpZiAoY3VycmVudFNlbGVjdGVkUHJvamVjdCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIERPTUhhbmRsZXIuZGlzcGxheVRvZG9zKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RCdG47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0QnRuQ29tcG9uZW50OyIsImltcG9ydCBjcmVhdGVTdmdFbGVtZW50IGZyb20gXCIuL2NyZWF0ZVN2Z1wiO1xyXG5pbXBvcnQgY3JlYXRlRWRpdFRvZG9Gb3JtIGZyb20gXCIuL2VkaXRUb2RvRm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyB0aXRsZUNhc2UgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuY29uc3QgdG9kb0NvbXBvbmVudCA9ICh0b2RvLCB0b2RvSWQpID0+IHtcclxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcclxuICAgIHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taWQnLCB0b2RvSWQpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9DaGVja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdG9kb0NoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIHRvZG9DaGVja0xpc3QuY2xhc3NMaXN0LmFkZCgndG9kby1jaGVjay1saXN0Jyk7XHJcbiAgICBpZiAodG9kby5jb21wbGV0ZWQpIHtcclxuICAgICAgICB0b2RvQ2hlY2tMaXN0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdG9kb0NoZWNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0lkID0gdGhpcy5jbG9zZXN0KCcudG9kby1jb250YWluZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRoaXMuY2xvc2VzdCgnLnRvZG9zLWNvbnRhaW5lcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb0lkLCBwcm9qZWN0SWQpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9DaGVja0xpc3RFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9kb2NoZWNrbGlzdGNoYW5nZWQnLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdElkLFxyXG4gICAgICAgICAgICAgICAgdG9kb0lkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHRvZG9DaGVja0xpc3RFdmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG4gICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcclxuXHJcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0aXRsZUNhc2UodG9kby5wcmlvcml0eSk7XHJcbiAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpO1xyXG4gICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQodG9kby5wcmlvcml0eSk7XHJcblxyXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcclxuICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlLWRhdGUnKTtcclxuXHJcbiAgICBjb25zdCB0b2RvRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZWRpdFN2Z09iaiA9IHtcclxuICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgZDogXCJNNiAyQzQuOSAyIDQgMi45IDQgNFYyMEM0IDIxLjEgNC45IDIyIDYgMjJIMTBWMjAuMUwyMCAxMC4xVjhMMTQgMkg2TTEzIDMuNUwxOC41IDlIMTNWMy41TTIwLjEgMTNDMjAgMTMgMTkuOCAxMy4xIDE5LjcgMTMuMkwxOC43IDE0LjJMMjAuOCAxNi4zTDIxLjggMTUuM0MyMiAxNS4xIDIyIDE0LjcgMjEuOCAxNC41TDIwLjUgMTMuMkMyMC40IDEzLjEgMjAuMyAxMyAyMC4xIDEzTTE4LjEgMTQuOEwxMiAyMC45VjIzSDE0LjFMMjAuMiAxNi45TDE4LjEgMTQuOFpcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGVkaXRTdmcgPSBjcmVhdGVTdmdFbGVtZW50KGVkaXRTdmdPYmopO1xyXG4gICAgdG9kb0VkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdFN2Zyk7XHJcbiAgICB0b2RvRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtYnRuJyk7XHJcbiAgICB0b2RvRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb25zdCBhbHJlYWR5QUVkaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1mb3JtJyk7XHJcbiAgICAgICAgaWYgKGFscmVhZHlBRWRpdEZvcm0pIHtcclxuICAgICAgICAgICAgYWxyZWFkeUFFZGl0Rm9ybS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZWRpdFRvZG9Gb3JtID0gY3JlYXRlRWRpdFRvZG9Gb3JtKHRvZG9JZCwgdGhpcyk7XHJcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0VG9kb0Zvcm0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZGVsZXRlU3ZnT2JqID0ge1xyXG4gICAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkOiBcIk0xOSwzSDE2LjNINy43SDVBMiwyIDAgMCwwIDMsNVY3LjdWMTYuNFYxOUEyLDIgMCAwLDAgNSwyMUg3LjdIMTYuNEgxOUEyLDIgMCAwLDAgMjEsMTlWMTYuM1Y3LjdWNUEyLDIgMCAwLDAgMTksM00xNS42LDE3TDEyLDEzLjRMOC40LDE3TDcsMTUuNkwxMC42LDEyTDcsOC40TDguNCw3TDEyLDEwLjZMMTUuNiw3TDE3LDguNEwxMy40LDEyTDE3LDE1LjZMMTUuNiwxN1pcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGV0ZVN2ZyA9IGNyZWF0ZVN2Z0VsZW1lbnQoZGVsZXRlU3ZnT2JqKTtcclxuICAgIHRvZG9EZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlU3ZnKTtcclxuICAgIHRvZG9EZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1kZWxldGUtYnRuJyk7XHJcbiAgICB0b2RvRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRoaXMuY2xvc2VzdCgnLnRvZG9zLWNvbnRhaW5lcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0lkID0gdGhpcy5jbG9zZXN0KCcudG9kby1jb250YWluZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EZWxldGVkRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9kZWxldGVkJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RJZCxcclxuICAgICAgICAgICAgICAgIHRvZG9JZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0b2RvRGVsZXRlZEV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlbGV2YW50SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVsZXZhbnRJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlbGV2YW50LWluZm8tY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIHJlbGV2YW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ2hlY2tMaXN0KTtcclxuICAgIHJlbGV2YW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xyXG4gICAgcmVsZXZhbnRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XHJcbiAgICByZWxldmFudEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xyXG4gICAgcmVsZXZhbnRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FZGl0QnRuKTtcclxuICAgIHJlbGV2YW50SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnRuKTtcclxuXHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQocmVsZXZhbnRJbmZvQ29udGFpbmVyKTtcclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiB0b2RvQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0NvbXBvbmVudDsiLCJjb25zdCB0aXRsZUNhc2UgPSAod29yZHMpID0+IHtcclxuICAgIHJldHVybiB3b3Jkcy5zcGxpdCgnICcpLm1hcCh3b3JkID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7d29yZFswXS50b1VwcGVyQ2FzZSgpfSR7d29yZC5zbGljZSgxKX1gO1xyXG4gICAgfSkuam9pbignICcpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdGl0bGVDYXNlIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9