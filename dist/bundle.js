/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/heading.css":
/*!************************************!*\
  !*** ./src/components/heading.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./src/components/heading.css?");

/***/ }),

/***/ "./src/calc.js":
/*!*********************!*\
  !*** ./src/calc.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst soma = function(a, b){\r\n    console.log(a + b);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (soma);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/calc.js?");

/***/ }),

/***/ "./src/components/heading.js":
/*!***********************************!*\
  !*** ./src/components/heading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _heading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.css */ \"./src/components/heading.css\");\n/*css em js\r\ninserindo um texto pelo metodo  create no body do html atráves do index.js\r\n\r\n*/\r\n\r\n /* importação de css dentro do js pelo webpack.\r\n para isso ocorrer preciso criar dois loader's no webpack.config.js, são eles (loader's)\r\n\r\n'css-loader' - esse identifica os arquivos que são css. e;\r\n'style-loader' - que irá transformar os arquivos css em estilo de fato.\r\nMiniCssExtractPlugin.loader, // como iremos externo o css usar este comando. (se não for externo o css usar o de cima)\r\n\r\n\r\nobs1. esses pacotes são opcionais, então devem ser baixados quando utilizados.\r\n    npm install --save-dev style-loader css-loader\r\n\r\nobs2. não se pode esquecer de colocar a regra: test:/\\.css$/, aqui estou dizendo que se o arquivo terminar em css  irei usar o que está dentro dele.\r\n\r\n\r\n\r\n\r\n*/\r\nclass Heading {\r\n\r\n    create(text){ //recusrso es6+ que o js consegue interpretar.\r\n        const heading = document.createElement('h2');\r\n\r\n        heading.innerText = text;\r\n\r\n        heading.classList.add('main-title'); // aqui que irá importar o css\r\n\r\n        document.querySelector('body').appendChild(heading);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://webpack/./src/components/heading.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/heading */ \"./src/components/heading.js\");\n/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc */ \"./src/calc.js\");\n\r\n\r\n\r\nconsole.log(\"Testando o webpack 2 -  com o arquivo bundle.js ao invés do main.js(arquivo nativo do webpack)\");\r\n\r\n(0,_calc__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(9, 4);\r\n(0,_calc__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(32, 20);\r\n(0,_calc__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(9, 3);\r\n\r\n// aqui  está o Loaders.\r\n\r\nconst heading = new _components_heading__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nheading.create(\" Teste de título dinâmico em Webpack\");\r\n\r\nheading.create(\" Teste do hot realod do  devServer no webpack.config.json que não precisa toda hora buildar\");\n\n//# sourceURL=webpack://webpack/./src/index.js?");

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
/******/ 			// no module.id needed
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