/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/book.less":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/book.less ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n  display: grid;\\n  grid-template-rows: minmax(50px, 75px) auto 100px;\\n  grid-template-columns: repeat(6, 1fr);\\n  height: 100%;\\n  width: 90%;\\n  margin: auto;\\n}\\n.headernav {\\n  grid-area: 1/1/2/7;\\n  background: #45ccf5;\\n  background: linear-gradient(to right, #ceecf5, #035efc, #45ccf5);\\n}\\n.footer {\\n  grid-area: 3/1/4/7;\\n}\\n.sidecontrols {\\n  grid-area: 2/1/3/3;\\n  margin: 5%;\\n  margin-left: 0;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: start;\\n  align-content: flex-start;\\n}\\n.bookList {\\n  grid-area: 2/3/3/7;\\n  margin: 2.5% 0;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n.eachBook {\\n  width: 250px;\\n  height: 360px;\\n  border-radius: 7px;\\n  margin: auto;\\n  margin-top: 10px;\\n  display: flex;\\n  flex-flow: column;\\n  flex-wrap: wrap;\\n  color: white;\\n  background-color: #035efc;\\n  opacity: 75%;\\n  align-content: space-around;\\n  justify-content: space-between;\\n}\\n.removeButton {\\n  color: gray;\\n  background: white;\\n  padding: 6px 12px;\\n  width: 90%;\\n  margin: 5% auto;\\n  border: none;\\n  border-radius: 5px;\\n  height: 25px;\\n  font-size: 1em;\\n  align-self: flex-end;\\n}\\n.readOnOffButton {\\n  color: gray;\\n  background: white;\\n  padding: 6px 12px;\\n  width: 90%;\\n  margin: 5% auto;\\n  border: none;\\n  border-radius: 5px;\\n  height: 25px;\\n  font-size: 1em;\\n  align-self: flex-end;\\n}\\n.addNewBook {\\n  color: white;\\n  background: #0077c5;\\n  padding: 6px 12px;\\n  width: 90%;\\n  margin: 5% auto;\\n  margin-bottom: 10%;\\n  border: none;\\n  border-radius: 5px;\\n  height: 75px;\\n  font-size: 1em;\\n}\\n.addNewBook:hover {\\n  background: #f5bc67;\\n}\\nbutton:hover {\\n  background: #f5bc67;\\n}\\n#addNewBookForm form {\\n  display: flex;\\n  flex-flow: row;\\n  flex-wrap: wrap;\\n  align-content: top;\\n}\\n#addNewBookForm {\\n  display: flex;\\n  flex-wrap: wrap;\\n  max-width: 100%;\\n}\\n#subBtn {\\n  color: white;\\n  background: #0077c5;\\n  padding: 6px 12px;\\n  width: 90%;\\n  margin: 5% auto;\\n  margin-bottom: 10%;\\n  border: none;\\n  border-radius: 5px;\\n  height: 50px;\\n  font-size: 0.8em;\\n}\\n#subBtn:hover {\\n  background: #f5bc67;\\n}\\n#subBtn:hover {\\n  background: #f5bc67;\\n}\\ninput[type=text] {\\n  max-width: 80%;\\n}\\ninput[type=number] {\\n  max-width: 35%;\\n}\\ninput[type=radio] {\\n  font-size: 1em;\\n}\\nlabel {\\n  font-size: 0.95em;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://librarybuild/./src/book.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://librarybuild/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/book.less":
/*!***********************!*\
  !*** ./src/book.less ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_book_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./book.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/book.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_book_less__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_book_less__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_book_less__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_book_less__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://librarybuild/./src/book.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://librarybuild/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://librarybuild/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://librarybuild/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://librarybuild/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://librarybuild/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://librarybuild/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/bookObjectProj.js":
/*!*******************************!*\
  !*** ./src/bookObjectProj.js ***!
  \*******************************/
/***/ (() => {

eval("const dispButton = document.querySelector('.addNewBook');\nconst showBtn = document.querySelector('button');\nconst bookSubmissionButton = document.getElementById('subBtn');\nconst hobbit = new book (\"The Hobbit\", \"J.R.R Tolkien\", 295, \"False\");\nconst hp1 = new book (\"Harry Potter and the socerer's stone\", \"J.K. Rowling\", 300, \"True\");\nconst theGreatDivorce = new book (\"The Great Divorce\", \"C.S. Lewis\", 195, \"True\");\nlet myLibrary = [hobbit, hp1, theGreatDivorce];\nlet formDisplay = document.getElementById(\"addNewBookForm\");\nformDisplay.style.display = \"none\";\nbookSubmissionButton.addEventListener('click', () => {addBookToLibrary();  expandCollapseForm ()});\n\ndispButton.addEventListener('click', () => {expandCollapseForm()}\n);\n\ndisplayBooks();\n\n\nfunction book(title, author, pages, read) {\n    this.title = title\n    this.author = author\n    this.pages = pages\n    this.read = read\n    this.bookInfo = function () {\n        return title + \" by \" + author + \", \" + pages + \" pages, \" + \"I have read this book \" + read; \n    }\n    this.readToggle = function () {\n        if (read === \"True\") {\n            read = \"False\";\n        } else {\n            read = \"True\";\n        }\n    }\n}\n\nfunction expandCollapseForm () {\n    \n    if (formDisplay.style.display === \"none\") {\n        formDisplay.style.display = \"block\";\n    } else {\n        formDisplay.style.display = \"none\";\n    }\n}\n\nfunction addBookToLibrary () { \n   // preventDefault();\n    const newBookTitle = document.getElementById(\"bookTitle\").value;\n    const newBookAuthor = document.getElementById(\"bookAuthor\").value;\n    const newBookPages = document.getElementById(\"pageNumber\").value;\n    const newBookRead = checkReadValue (); \n     //alert(newBookTitle + newBookAuthor + newBookPages + newBookRead);\n    const newBook = new book(newBookTitle, newBookAuthor, newBookPages, newBookRead);\n    myLibrary.push(newBook);\n    clearList();\n    displayBooks();\n    function checkReadValue () {\n        \n            const check = document.getElementsByName(\"read\");\n            for (let i = 0; i < check.length; i++) {\n                if (check[i].checked) {\n                    return check[i].value;\n                }\n            }\n        \n    }\n}\n\nfunction displayBooks() {\n    clearList();\n    // I am making this loop to display all the contents of the array holding the objects that contain the Book data\nfor (let i = 0; i < myLibrary.length; i++) {\n    const bookList = document.querySelector(\".bookList\");\n    const eachBook = document.createElement(\"div\");\n    const eachBookInfo = document.createElement('h3')\n    const removeButton = document.createElement(\"button\")\n    const readOnOff = document.createElement(\"button\")\n    const brk = document.createElement(\"br\");\n    eachBook.setAttribute('class', \"eachBook\");\n    eachBook.setAttribute('id', myLibrary[i].title + i);\n    eachBookInfo.innerText = myLibrary[i].bookInfo(); \n    bookList.appendChild(eachBook);\n    eachBook.appendChild(eachBookInfo);\n    eachBook.appendChild(removeButton);\n    eachBook.appendChild(brk);\n    eachBook.appendChild(readOnOff);\n    removeButton.setAttribute(\"class\", \"removeButton\");\n    removeButton.setAttribute('id',  i);\n    removeButton.dataset.rIndexNum = i; \n    removeButton.addEventListener('click', (e) => {removeABook(e)} \n    );\n    readOnOff.setAttribute(\"class\", \"readOnOffButton\");\n    readOnOff.setAttribute(\"id\", i);\n    readOnOff.dataset.inNum = i;\n    readOnOff.addEventListener('click',(e) => {\n        let dataNum = e.target.getAttribute(\"id\");\n        myLibrary[dataNum].readToggle();\n        clearList();\n        displayBooks();\n    });\n        \n        \n        //alert(dataNum);\n/*\n        myLibrary.forEach ()\n       for (let i = 0; i < myLibrary.length; i++){\n           if (dataNum == i) {\n               let pos = i;\n               myLibrary.splice(i, 1);\n               //alert(dataNum);\n           }\n       }\n        \n        */\n    \n    \n    \n    removeButton.innerHTML = \"Remove Book\";\n    readOnOff.innerHTML = \"Read: Yes/No\";\n}\n}\n\nfunction clearList () {\n    const bookList = document.querySelector(\".bookList\");\n    while (bookList.firstChild) {\n        bookList.removeChild(bookList.firstChild);\n    }\n}\n\nfunction removeABook (e) {\n    let dataNum = e.target.getAttribute(\"id\");\n    //alert(dataNum);\n    //alert(myLibrary);\n        myLibrary.splice(dataNum,1);\n        clearList();\n        displayBooks();\n}\n\n\n/*\nfunction displayBooks() {\n    // I am making this loop to display all the contents of the array holding the objects that contain the Book data\nfor (let i = 0; i < myLibrary.length; i++) {\n    const container = document.querySelector(\".container\");\n    const eachBook = document.createElement(\"div\");\n    container.appendChild(eachBook);\n    eachBook.setAttribute('class', \"eachBook\");\n    eachBook.setAttribute('id', myLibrary[i].title);\n    eachBook.innerHTML = myLibrary[i].bookInfo(); \n    \n}\n}\n\n\n() => {\n    for (let i = 0; i < myLibrary.length; i++) {\n        const container = document.querySelector(\".container\");\n        const eachBook = document.createElement(\"div\");\n        container.appendChild(eachBook);\n        eachBook.setAttribute('class', \"eachBook\");\n        eachBook.setAttribute('id', myLibrary[i].title);\n        eachBook.innerHTML = myLibrary[i].bookInfo(); \n        \n    }\n\n}\n\nhobbit, hp1, theGreatDivorce\nthis.removeBook = function () {\n        for (let i = 0; i < myLibrary.length; i++) {\n            const arrayComp = myLibrary[i].title + i; \n            for (let j = 0; j > myLibrary.length; j++) {\n                if (this.title + j === arrayComp) {\n                    myLibrary.splice(pos, i);\n                } else {\n                    return;\n                }\n            }\n        }\n    }\n\n\n\n    function readToggle (e) {\n    let dataNum = e.target.getAttribute(\"id\");\n    \n    myLibrary[dataNum].readtoggle\n    //clearList();\n    //displayBooks();\n}\n*/\n\n//# sourceURL=webpack://librarybuild/./src/bookObjectProj.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bookObjectProj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookObjectProj.js */ \"./src/bookObjectProj.js\");\n/* harmony import */ var _bookObjectProj_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bookObjectProj_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _book_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book.less */ \"./src/book.less\");\n\n\n\n//# sourceURL=webpack://librarybuild/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;