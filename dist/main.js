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

/***/ "./src/Functionality/api.js":
/*!**********************************!*\
  !*** ./src/Functionality/api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/Functionality/dom.js\");\n\n\nconst input = document.querySelector('.search-input');\n\ninput.addEventListener('search', findCityWeather)\n\nfunction findCityWeather() {\n    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=720db497deedc97541097097eaee6cfd`)\n    .then(response => response.json())\n    .then(data => {\n\n        // ADD A WAY TO PREVENT searching a non existing city\n        \n        console.log(data)\n\n        // IMPERIAL IS FARENHEIT AND METRIC IS CELSIUS\n        // FOR SWITCHING FROM CELSIUS TO FARENHEIT, TRY USING BUTTON TO CHANGE IT IN THE FETCH API\n\n        async function getAllInfo() {\n            try {\n                const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&exclude=minutely,alerts&appid=720db497deedc97541097097eaee6cfd`)\n                const allData = await response.json()\n                const day = document.querySelectorAll('.day')\n                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\n                const dayFinder = days[new Date(value.dt * 1000).getDay()];\n\n                document.querySelector('h3').innerText = input.value;\n                document.querySelector('.location-weather').innerText = allData.current.weather[0].main\n                document.querySelector('.location-temp').innerText = `${Math.round(allData.current.temp)}°F`\n                document.querySelector('.location-high').innerText = `H: ${Math.round(allData.daily[0].temp.max)}°F`\n                document.querySelector('.location-low').innerText = `L: ${Math.round(allData.daily[0].temp.min)}°F`\n\n                input.value = ''\n\n                allData.daily.forEach((value, index) => {\n\n                })\n\n                allData.daily.forEach((value, index) => {\n                    if (index > 0) {\n                        const dayForecast = new Date(value.dt * 1000).toLocaleDateString('en', {weekday: 'long'})\n                        \n\n                        console.log('Day test', dayForecast)\n\n                        for (let i = 0; i < day.length; i++) {\n                            const h5 = document.createElement('h5')\n\n                            h5.innerText = days[new Date(value.dt * 1000).getDay()]\n                            day[i].appendChild(h5)\n                            console.log('Test again', dayForecast)\n                            console.log('Name', days[new Date(value.dt * 1000).getDay()])\n                        }\n                    }\n                })\n\n                console.log(allData, allData.daily[0].dt, new Date(allData.daily[0].dt))\n            } catch (error) {\n                console.log(error)\n                return\n            }\n        }\n        getAllInfo()\n    })\n} \n\nwindow.addEventListener('load', () => {\n    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=720db497deedc97541097097eaee6cfd')\n    .then(response => response.json())\n    .then(loadedData => {\n        console.log(loadedData)\n        async function loadCityWeather() {\n            try {\n                const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${loadedData.coord.lat}&lon=${loadedData.coord.lon}&units=imperial&exclude=minutely,alerts&appid=720db497deedc97541097097eaee6cfd`)\n                const weatherData = await response.json()\n\n                console.log('Food')\n                document.querySelector('.location-temp').innerText = `${Math.round(weatherData.current.temp)}°F`\n                document.querySelector('.location-weather').innerText = weatherData.current.weather[0].main\n                document.querySelector('.location-high').innerText = `H: ${Math.round(weatherData.daily[0].temp.max)}°F`\n                document.querySelector('.location-low').innerText = `L: ${Math.round(weatherData.daily[0].temp.min)}°F`\n\n            } catch (error) {\n                console.log(error)\n            }\n        }\n        loadCityWeather()\n    })\n\n\n})\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findCityWeather);\n\n//# sourceURL=webpack://weatherapp/./src/Functionality/api.js?");

/***/ }),

/***/ "./src/Functionality/dom.js":
/*!**********************************!*\
  !*** ./src/Functionality/dom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDivs(weatherInfo, dayFinder) {\n    const div = document.createElement('div');\n    const h5 = document.createElement('h5');\n    const img = document.createElement('img');\n    const pHigh = document.createElement('p');\n    const pLow = document.createElement('p')\n\n    div.className = 'day'\n    img.className = 'imgs'\n    p.className = 'day-temp'\n\n    h5.innerText = dayFinder;\n    img.src = `http://openweathermap.org/img/wn/${weatherInfo.daily[1].weather.icon}@2x.png` // USE LOOP\n    pHigh.innerText = weatherInfo.daily[1].temp.max // USE LOOP\n    pLow.innerText = weatherInfo.daily[1].temp.min // USE LOOP\n\n    // USE [1] AND UP IN THE DAILY ARRAY \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDivs);\n\n//# sourceURL=webpack://weatherapp/./src/Functionality/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Functionality_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functionality/api */ \"./src/Functionality/api.js\");\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

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