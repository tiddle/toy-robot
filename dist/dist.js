/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board/board.const.js":
/*!**********************************!*\
  !*** ./src/board/board.const.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// Assume only positive numbers\nvar BOARD_X = exports.BOARD_X = 5;\nvar BOARD_Y = exports.BOARD_Y = 5;\n\nvar NORTH = exports.NORTH = 'NORTH';\nvar EAST = exports.EAST = 'EAST';\nvar SOUTH = exports.SOUTH = 'SOUTH';\nvar WEST = exports.WEST = 'WEST';\n\n// Order is important\nvar DIRECTIONS = exports.DIRECTIONS = [NORTH, EAST, SOUTH, WEST];\n\n//# sourceURL=webpack:///./src/board/board.const.js?");

/***/ }),

/***/ "./src/board/board.js":
/*!****************************!*\
  !*** ./src/board/board.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.isOnBoard = isOnBoard;\nexports.isValidPosition = isValidPosition;\nexports.isValidDirection = isValidDirection;\nexports.place = place;\n\nvar _boardConst = __webpack_require__(/*! ./board.const.js */ \"./src/board/board.const.js\");\n\n/**\n * Check if robot is on the board\n *\n * @param {Object} robot\n */\nfunction isOnBoard(position) {\n\tif (position && position.length >= 2 && isValidPosition(position[0], position[1])) {\n\t\treturn true;\n\t}\n}\n\n/**\n * Check is position is valid\n *\n * @param {int} x\n * @param {int} y\n */\nfunction isValidPosition() {\n\tvar x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;\n\tvar y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;\n\n\tif (x > _boardConst.BOARD_X || x < 0) {\n\t\treturn false;\n\t}\n\n\tif (y > _boardConst.BOARD_Y || y < 0) {\n\t\treturn false;\n\t}\n\n\tif (typeof x !== 'number') {\n\t\treturn false;\n\t}\n\n\tif (typeof y !== 'number') {\n\t\treturn false;\n\t}\n\n\treturn true;\n}\n\n/**\n * Check if direction is valid\n *\n * @param {string} dir\n */\nfunction isValidDirection(dir) {\n\tif (_boardConst.DIRECTIONS.indexOf(dir) >= 0) {\n\t\treturn dir;\n\t}\n\n\treturn false;\n}\n\n/**\n * Place robot onto table\n *\n * @param {int} x\n * @param {int} y\n * @param {string} dir enum from DIRECTIONS\n */\nfunction place() {\n\tvar x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\tvar y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\tvar dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _boardConst.DIRECTIONS[0];\n\n\tif (isValidPosition(x, y) && isValidDirection(dir)) {\n\t\treturn [x, y, dir];\n\t}\n\n\treturn false;\n}\n\n//# sourceURL=webpack:///./src/board/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _parseCommands = __webpack_require__(/*! ./scenarios/parse-commands.js */ \"./src/scenarios/parse-commands.js\");\n\nvar _robot = __webpack_require__(/*! ./scenarios/robot-1.js */ \"./src/scenarios/robot-1.js\");\n\nvar _robot2 = __webpack_require__(/*! ./scenarios/robot-2.js */ \"./src/scenarios/robot-2.js\");\n\nvar _robot3 = __webpack_require__(/*! ./scenarios/robot-3.js */ \"./src/scenarios/robot-3.js\");\n\nvar _robot4 = __webpack_require__(/*! ./scenarios/robot-4.js */ \"./src/scenarios/robot-4.js\");\n\n_robot.actions.reduce(function (position, action) {\n  return (0, _parseCommands.parseCommands)(position, action);\n}, false);\n_robot2.actions.reduce(function (position, action) {\n  return (0, _parseCommands.parseCommands)(position, action);\n}, false);\n_robot3.actions.reduce(function (position, action) {\n  return (0, _parseCommands.parseCommands)(position, action);\n}, false);\n_robot4.actions.reduce(function (position, action) {\n  return (0, _parseCommands.parseCommands)(position, action);\n}, false);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/robot/robot.const.js":
/*!**********************************!*\
  !*** ./src/robot/robot.const.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar LEFT = exports.LEFT = 'left';\nvar RIGHT = exports.RIGHT = 'right';\n\n//# sourceURL=webpack:///./src/robot/robot.const.js?");

/***/ }),

/***/ "./src/robot/robot.js":
/*!****************************!*\
  !*** ./src/robot/robot.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.turn = turn;\nexports.move = move;\nexports.report = report;\nexports.left = left;\nexports.right = right;\n\nvar _robotConst = __webpack_require__(/*! ./robot.const.js */ \"./src/robot/robot.const.js\");\n\nvar _board = __webpack_require__(/*! ../board/board.js */ \"./src/board/board.js\");\n\nvar _boardConst = __webpack_require__(/*! ../board/board.const.js */ \"./src/board/board.const.js\");\n\n/**\n * Allows the robot to turn\n *\n * @param {array} positionArray\n * @param {string} dir enum either LEFT or RIGHT\n */\nfunction turn(positionArray) {\n\tvar dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _robotConst.LEFT;\n\n\tif (!(0, _board.isOnBoard)(positionArray)) {\n\t\treturn false;\n\t}\n\n\tvar newDir = positionArray[2];\n\tvar dirIndex = _boardConst.DIRECTIONS.indexOf(positionArray[2]);\n\n\tif (dir === _robotConst.LEFT) {\n\t\tif (dirIndex === 0) {\n\t\t\tnewDir = _boardConst.DIRECTIONS[_boardConst.DIRECTIONS.length - 1];\n\t\t} else {\n\t\t\tnewDir = _boardConst.DIRECTIONS[dirIndex - 1];\n\t\t}\n\t}\n\n\tif (dir === _robotConst.RIGHT) {\n\t\tif (dirIndex === _boardConst.DIRECTIONS.length - 1) {\n\t\t\tnewDir = _boardConst.DIRECTIONS[0];\n\t\t} else {\n\t\t\tnewDir = _boardConst.DIRECTIONS[dirIndex + 1];\n\t\t}\n\t}\n\n\treturn [positionArray[0], positionArray[1], newDir];\n}\n\n/**\n * Move robot if possible\n *\n * @param {array} positionArray\n */\nfunction move(positionArray) {\n\tif (!(0, _board.isOnBoard)(positionArray)) {\n\t\treturn false;\n\t}\n\n\tvar movement = void 0;\n\n\tif (positionArray[2] === _boardConst.NORTH) {\n\t\tmovement = [positionArray[0], positionArray[1] + 1, positionArray[2]];\n\t}\n\n\tif (positionArray[2] === _boardConst.EAST) {\n\t\tmovement = [positionArray[0] + 1, positionArray[1], positionArray[2]];\n\t}\n\n\tif (positionArray[2] === _boardConst.SOUTH) {\n\t\tmovement = [positionArray[0], positionArray[1] - 1, positionArray[2]];\n\t}\n\n\tif (positionArray[2] === _boardConst.WEST) {\n\t\tmovement = [positionArray[0] - 1, positionArray[1], positionArray[2]];\n\t}\n\n\tif ((0, _board.isValidPosition)(movement[0], movement[1])) {\n\t\treturn movement;\n\t}\n\n\treturn positionArray;\n}\n\n/**\n * Display position of robot\n *\n * @param {*} positionArray\n */\nfunction report(positionArray) {\n\tif (!(0, _board.isOnBoard)(positionArray)) {\n\t\treturn false;\n\t}\n\n\tconsole.log(positionArray);\n\treturn positionArray;\n}\n\n/**\n * Shortcut function for left turn\n *\n * @param {*} positionArray\n */\nfunction left(positionArray) {\n\treturn turn(positionArray);\n}\n\n/**\n * Shortcut function for right turn\n *\n * @param {*} positionArray\n */\nfunction right(positionArray) {\n\treturn turn(positionArray, _robotConst.RIGHT);\n}\n\n//# sourceURL=webpack:///./src/robot/robot.js?");

/***/ }),

/***/ "./src/scenarios/parse-commands.js":
/*!*****************************************!*\
  !*** ./src/scenarios/parse-commands.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.parseCommands = parseCommands;\n\nvar _board = __webpack_require__(/*! ../board/board.js */ \"./src/board/board.js\");\n\nfunction parseCommands(position, action) {\n\tif (typeof action === 'string') {\n\t\tif (action.indexOf('PLACE') >= 0) {\n\t\t\tvar coords = /PLACE (\\d),(\\d),([A-Z]+)/.exec(action);\n\t\t\treturn (0, _board.place)(parseInt(coords[1]), parseInt(coords[2]), coords[3]);\n\t\t}\n\n\t\treturn false;\n\t}\n\n\tif (typeof action === 'function') {\n\t\treturn action(position);\n\t}\n\n\treturn false;\n}\n\n//# sourceURL=webpack:///./src/scenarios/parse-commands.js?");

/***/ }),

/***/ "./src/scenarios/robot-1.js":
/*!**********************************!*\
  !*** ./src/scenarios/robot-1.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.actions = undefined;\n\nvar _boardConst = __webpack_require__(/*! ../board/board.const.js */ \"./src/board/board.const.js\");\n\nvar _robot = __webpack_require__(/*! ../robot/robot.js */ \"./src/robot/robot.js\");\n\nvar actions = exports.actions = ['PLACE 0,0,NORTH', _robot.move, _robot.report];\n\n//# sourceURL=webpack:///./src/scenarios/robot-1.js?");

/***/ }),

/***/ "./src/scenarios/robot-2.js":
/*!**********************************!*\
  !*** ./src/scenarios/robot-2.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.actions = undefined;\n\nvar _robot = __webpack_require__(/*! ../robot/robot.js */ \"./src/robot/robot.js\");\n\nvar actions = exports.actions = [_robot.left, _robot.right, _robot.move, 'PLACE 0,0,NORTH', _robot.left, _robot.report];\n\n//# sourceURL=webpack:///./src/scenarios/robot-2.js?");

/***/ }),

/***/ "./src/scenarios/robot-3.js":
/*!**********************************!*\
  !*** ./src/scenarios/robot-3.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.actions = undefined;\n\nvar _robot = __webpack_require__(/*! ../robot/robot.js */ \"./src/robot/robot.js\");\n\nvar actions = exports.actions = ['PLACE 1,2,EAST', _robot.move, _robot.move, _robot.left, _robot.move, _robot.report];\n\n//# sourceURL=webpack:///./src/scenarios/robot-3.js?");

/***/ }),

/***/ "./src/scenarios/robot-4.js":
/*!**********************************!*\
  !*** ./src/scenarios/robot-4.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.actions = undefined;\n\nvar _robot = __webpack_require__(/*! ../robot/robot.js */ \"./src/robot/robot.js\");\n\nvar actions = exports.actions = [_robot.move, 'INVALID TEXT', _robot.move, _robot.right, 'PLACE 0,0,NORTH', _robot.move, _robot.move, _robot.left, _robot.move, _robot.move, _robot.right, _robot.right, _robot.move, _robot.move, _robot.report];\n\n//# sourceURL=webpack:///./src/scenarios/robot-4.js?");

/***/ })

/******/ });