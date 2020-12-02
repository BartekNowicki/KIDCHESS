/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Loader.js":
/*!***********************!*\
  !*** ./src/Loader.js ***!
  \***********************/
/*! namespace exports */
/*! export ITEMSLOADED_EVENT_NAME [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loader\": function() { return /* binding */ loader; },\n/* harmony export */   \"ITEMSLOADED_EVENT_NAME\": function() { return /* binding */ ITEMSLOADED_EVENT_NAME; }\n/* harmony export */ });\n/* harmony import */ var _TheDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheDOM.js */ \"./src/TheDOM.js\");\n/* harmony import */ var _assets_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/1.jpg */ \"./src/assets/1.jpg\");\n/* harmony import */ var _assets_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/2.jpg */ \"./src/assets/2.jpg\");\n/* harmony import */ var _assets_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/3.jpg */ \"./src/assets/3.jpg\");\n/* harmony import */ var _assets_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/4.jpg */ \"./src/assets/4.jpg\");\n/* harmony import */ var _assets_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/5.jpg */ \"./src/assets/5.jpg\");\n\n\n\n\n\n\n\nclass Loader extends _TheDOM_js__WEBPACK_IMPORTED_MODULE_0__.TheDOM {\n  constructor() {\n    super(_TheDOM_js__WEBPACK_IMPORTED_MODULE_0__.DATA.LOADER_SELECTOR);\n    this.areAllItemsLoaded = false;\n    this.loadedItemsCounter = 0;\n    this.importedReferences = [_assets_1_jpg__WEBPACK_IMPORTED_MODULE_1__.default, _assets_2_jpg__WEBPACK_IMPORTED_MODULE_2__.default, _assets_3_jpg__WEBPACK_IMPORTED_MODULE_3__.default, _assets_4_jpg__WEBPACK_IMPORTED_MODULE_4__.default, _assets_5_jpg__WEBPACK_IMPORTED_MODULE_5__.default];\n    this.importElements = [];\n    this.initializeLoader();\n  }\n\n  resizeGameWindow() {\n    const {\n      innerWidth: width,\n      innerHeight: height\n    } = window;\n    const scale = Math.min(width / _TheDOM_js__WEBPACK_IMPORTED_MODULE_0__.DATA.CANVAS_BASE_WIDTH, height / _TheDOM_js__WEBPACK_IMPORTED_MODULE_0__.DATA.CANVAS_BASE_HEIGHT); // console.log(width, height, DATA.CANVAS_BASE_WIDTH, DATA.CANVAS_BASE_HEIGHT);\t\t\n\n    document.documentElement.style.setProperty(\"--scaleValue\", scale);\n    console.log('GAME WINDOW RESIZED AGAINST BASE 360 X 640 BY SCALE: ', scale);\n  }\n\n  bindWithElements() {// this.someElement = this.bindWithElement(selector);\t\t\n  }\n\n  loadImage(imageUrl) {\n    // console.log('trying to load: ', imageUrl);\n    const image = new Image();\n    image.src = imageUrl; // console.log('image source: : ', image.src);\n\n    image.addEventListener('load', event => this.itemLoaded(event), false);\n    return image;\n  }\n\n  finalItemLoaded() {\n    console.log('ALL ITEMS LOADED');\n    this.areAllItemsLoaded = true;\n    this.importElements.forEach(item => {\n      console.log(item);\n      this.toggleVisibility(item, 'invisible');\n    });\n    this.toggleVisibility(this.element, 'invisible'); // console.log(this.element);\n\n    window.dispatchEvent(new CustomEvent(ITEMSLOADED_EVENT_NAME));\n  }\n\n  itemLoaded(event) {\n    // console.log('loaded: ', event.target);\n    event.target.removeEventListener(event.type, this.itemLoaded, false);\n    this.loadedItemsCounter++; // this.element.innerHTML += this.loadedItemsCounter;\n    // event.target.classList.add('loadingTest');\n\n    event.target.setAttribute('class', 'loadingTest');\n    event.target.style.left = \"\".concat(this.loadedItemsCounter * 60, \"px\");\n    this.element.appendChild(event.target);\n    this.importElements.push(event.target);\n\n    if (this.loadedItemsCounter === this.importedReferences.length) {\n      this.finalItemLoaded();\n    }\n  }\n\n  consoleInitialInfo() {\n    console.log('loader constructor here');\n    console.log('loader element: ', this.element);\n    console.log('loader this: ', this);\n  }\n\n  initializeLoader() {\n    this.toggleVisibility(this.element, 'visible'); // this.bindWithElements();\n    // this.consoleInitialInfo();\n\n    this.resizeGameWindow();\n    window.addEventListener('resize', this.resizeGameWindow);\n\n    for (let i = 0; i < this.importedReferences.length; i++) {\n      this.loadImage(this.importedReferences[i]); //loadImage returns an image, use it if needed\n    }\n  }\n\n}\n\nconst loader = new Loader();\nconst ITEMSLOADED_EVENT_NAME = 'itemsLoaded';\n\n//# sourceURL=webpack://webpack-project/./src/Loader.js?");

/***/ }),

/***/ "./src/TheDOM.js":
/*!***********************!*\
  !*** ./src/TheDOM.js ***!
  \***********************/
/*! namespace exports */
/*! export DATA [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TheDOM [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DATA\": function() { return /* binding */ DATA; },\n/* harmony export */   \"TheDOM\": function() { return /* binding */ TheDOM; }\n/* harmony export */ });\nconst DATA = {\n  HIDDEN_CLASS: \"hidden\",\n  LOADER_SELECTOR: \"[data-loader]\",\n  MAINMENU_SELECTOR: \"[data-mainWrap]\",\n  MAINWRAP_SELECTOR: \"[data-mainWrap]\",\n  //THESE DIMENTIONS ALSO SET IN SCSS MAINWRAP\n  CANVAS_BASE_WIDTH: 640,\n  CANVAS_BASE_HEIGHT: 360\n};\nclass TheDOM {\n  constructor(selector) {\n    if (typeof selector === 'undefined') return console.warn(\"undefined selector!\");\n    this.domSelectors = {\n      visibilityToggleTest: \".visibilityTest\"\n    };\n    this.element = this.bindWithElement(selector);\n    this.visibilityToggleTestElement = this.bindWithElement(this.domSelectors.visibilityToggleTest); //MUST BE IN THE CONSTRUCTOR AS INHERITORS WILL NOT PERFORM METHODS:\n\n    this.toggleVisibility(this.visibilityToggleTestElement, 'invisible');\n    this.initializeTheDOM(selector);\n  }\n\n  bindWithElement(domSelector) {\n    const element = document.querySelector(domSelector);\n\n    if (!element) {\n      throw new Error(\"ERROR: unable to bind with: \".concat(domSelector));\n    }\n\n    return element;\n  }\n\n  toggleVisibility(element, mode) {\n    mode === 'invisible' ? element.classList.add(DATA.HIDDEN_CLASS) : element.classList.remove(DATA.HIDDEN_CLASS);\n  }\n\n  initializeTheDOM(receivedDomSelector) {\n    //TESTS START\n    console.log('visibilityToggleTestElement :', this.visibilityToggleTestElement);\n    console.log('TheDOM constructor here, called by', this, 'received selector: ', receivedDomSelector);\n    console.log('binding the calling instance with:', this.element);\n    console.log('performing visibilityTest - this element should get display none: ', this.visibilityToggleTestElement); //TESTS END\n  }\n\n}\n\n//# sourceURL=webpack://webpack-project/./src/TheDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.js */ \"./src/Loader.js\");\n/* eslint-disable no-unused-vars */\n// git push -u origin main\n //IMPORTING AN EXPORTED INSTANCE, CONSTRUCTOR CALLED ON EXPORT:\n\n\n\n\nconst loadingCallback = () => {\n  console.log('EVENT NOTED: ', _Loader_js__WEBPACK_IMPORTED_MODULE_1__.ITEMSLOADED_EVENT_NAME);\n  unsetListener(_Loader_js__WEBPACK_IMPORTED_MODULE_1__.ITEMSLOADED_EVENT_NAME, loadingCallback); //LAUNCH NEW GAME    \n};\n\nconst setListener = (eventName, callback) => {\n  console.log('WAITING FOR EVENT CALLED: ', eventName);\n  window.addEventListener(eventName, callback);\n};\n\nconst unsetListener = (eventName, callback) => {\n  window.removeEventListener(eventName, callback);\n};\n\nsetListener(_Loader_js__WEBPACK_IMPORTED_MODULE_1__.ITEMSLOADED_EVENT_NAME, loadingCallback); //WHEN THE GAME ENDS MAKE SURE TO REMOVE:\n//window.removeEventListener('resize', loader.resizeGameWindow);\n// import { mainMenu } from './MainMenu.js';\n// import { game } from './Game.js';\n\nconsole.log('INDEX COMPLETED IMPORTS'); // let jestTestingVariable = 999;\n// const indexJestTestFunction = () => jestTestingVariable;\n// export default indexJestTestFunction;\n\n//# sourceURL=webpack://webpack-project/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss ***!
  \**********************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.*, module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\nhtml {\\n  font-size: 10px;\\n  color: #600201;\\n  user-select: none;\\n  --scaleValue: 1; }\\n\\nbody {\\n  height: 100vh;\\n  width: 100vw;\\n  position: relative;\\n  background-color: black; }\\n\\n.mainWrap {\\n  width: 640px;\\n  height: 360px;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform-origin: center;\\n  transform: translate(-50%, -50%) scale(var(--scaleValue));\\n  background-color: black;\\n  border: 10px solid #600201; }\\n\\n.hidden {\\n  display: none; }\\n\\n.visibilityTest {\\n  font-size: 3rem;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform-origin: center;\\n  transform: translate(-50%, -50%) scale(1); }\\n\\n.loader {\\n  width: 100%;\\n  height: 100%;\\n  font-size: 3rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.loadingTest {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 50px;\\n  height: 50px; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-project/./src/sass/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/1.jpg":
/*!**************************!*\
  !*** ./src/assets/1.jpg ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"65399383671af3270897610c9b4d7e66.jpg\");\n\n//# sourceURL=webpack://webpack-project/./src/assets/1.jpg?");

/***/ }),

/***/ "./src/assets/2.jpg":
/*!**************************!*\
  !*** ./src/assets/2.jpg ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"647a3d0333adeaefd79ae230bc1a63f9.jpg\");\n\n//# sourceURL=webpack://webpack-project/./src/assets/2.jpg?");

/***/ }),

/***/ "./src/assets/3.jpg":
/*!**************************!*\
  !*** ./src/assets/3.jpg ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"78e5d56221d3fa12bfdc521e465516b5.jpg\");\n\n//# sourceURL=webpack://webpack-project/./src/assets/3.jpg?");

/***/ }),

/***/ "./src/assets/4.jpg":
/*!**************************!*\
  !*** ./src/assets/4.jpg ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"64439284e287691190cb9d7c42237c6b.jpg\");\n\n//# sourceURL=webpack://webpack-project/./src/assets/4.jpg?");

/***/ }),

/***/ "./src/assets/5.jpg":
/*!**************************!*\
  !*** ./src/assets/5.jpg ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8527a2f93eea2fc7f4d9f9e8c75c128f.jpg\");\n\n//# sourceURL=webpack://webpack-project/./src/assets/5.jpg?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://webpack-project/./src/sass/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;