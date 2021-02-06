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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/menu-burger.js":
/*!**************************************!*\
  !*** ./src/assets/js/menu-burger.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burger = document.querySelector(\".burger\");\r\nconst adaptivMenu = document.querySelector(\".adaptiv-menu\");\r\nconst adaptivNav = document.querySelector(\".adaptiv-menu__nav\");\r\nconst menuActive = document.querySelector(\".adaptiv-menu--active\");\r\nconst links = document.querySelectorAll(\".adaptiv-menu__nav-link\");\r\nconst headerInner = document.querySelector(\".header__inner\");\r\nconst body = document.querySelector(\"body\");\r\n\r\nlet count = 0;\r\n\r\nfor( let link of links) {\r\n    link.addEventListener(\"click\", () => {\r\n        adaptivMenu.style.height = 0;\r\n        adaptivNav.classList.remove(\"adaptiv-menu__nav--active\");\r\n        burger.classList.remove(\"burger--active\");\r\n        headerInner.classList.remove(\"header__inner--gray\");\r\n        body.classList.remove(\"lock\");\r\n        count++;\r\n    })\r\n}\r\n\r\nburger.addEventListener(\"click\", () => {\r\n    height = adaptivMenu.scrollHeight;\r\n    count++;    \r\n    const even = count => !(count % 2);\r\n\r\n    if (even(count) == false) {\r\n        adaptivMenu.style.height = 100 + 'vh';\r\n        adaptivNav.classList.add(\"adaptiv-menu__nav--active\");\r\n        burger.classList.add(\"burger--active\");\r\n        headerInner.classList.add(\"header__inner--gray\");\r\n        body.classList.add(\"lock\");\r\n    }\r\n    else{\r\n        adaptivMenu.style.height = 0;\r\n        adaptivNav.classList.remove(\"adaptiv-menu__nav--active\");\r\n        burger.classList.remove(\"burger--active\");\r\n        headerInner.classList.remove(\"header__inner--gray\");\r\n        body.classList.remove(\"lock\");\r\n    }\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/menu-burger.js?");

/***/ }),

/***/ "./src/assets/js/portfolio-slider.js":
/*!*******************************************!*\
  !*** ./src/assets/js/portfolio-slider.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// portfolio slider\r\nconst portfolioSwiper = new Swiper('.portfolio__swiper-container', {\r\n  direction: 'horizontal',\r\n  slidesPerView: 1,\r\n  slidesPerColumn: 2,\r\n  slidesPerColumnFill: 'row',\r\n\r\n  breakpoints: {\r\n    700: {\r\n      slidesPerView: 2,\r\n      spaceBetween: 20,\r\n      slidesPerColumn: 1,\r\n    },\r\n    770: {\r\n      slidesPerView: 2,\r\n      spaceBetween: 20,\r\n      slidesPerColumn: 1,\r\n\r\n      navigation: {\r\n        nextEl: '.portfolio-swiper-button-next',\r\n        prevEl: '.portfolio-swiper-button-prev',\r\n      },\r\n    },\r\n\r\n    900: {\r\n      slidesPerView: 3,\r\n      spaceBetween: 20,\r\n      slidesPerColumn: 1,\r\n\r\n      navigation: {\r\n        nextEl: '.portfolio-swiper-button-next',\r\n        prevEl: '.portfolio-swiper-button-prev',\r\n      },\r\n    },\r\n    1000: {\r\n      slidesPerView: 3,\r\n      spaceBetween: 60,\r\n      slidesPerColumn: 1,\r\n\r\n      navigation: {\r\n        nextEl: '.portfolio-swiper-button-next',\r\n        prevEl: '.portfolio-swiper-button-prev',\r\n      },\r\n    },\r\n  },\r\n\r\n  pagination: {\r\n    el: '.portfolio-swiper-pagination',\r\n  },\r\n\r\n  navigation: {\r\n    nextEl: '.portfolio-swiper-button-next--adaptiv',\r\n    prevEl: '.portfolio-swiper-button-prev--adaptiv',\r\n  },\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/portfolio-slider.js?");

/***/ }),

/***/ "./src/assets/js/quiz.js":
/*!*******************************!*\
  !*** ./src/assets/js/quiz.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const quiz = document.querySelector('.quiz-wrapper')\r\nconst quizOpenButtons = document.querySelectorAll('.quiz-open-btn')\r\nconst quizCloseButtons = document.querySelectorAll('.quiz-close-btn')\r\nconst quizButtonsNext = document.querySelectorAll('.quiz-next')\r\nconst quizButtonsPrev = document.querySelectorAll('.quiz-prev')\r\nconst quizSteps = document.querySelectorAll('.quiz-step')\r\nconst quizForms = document.querySelectorAll('.quiz-form')\r\nconst body = document.querySelector(\"body\");\r\n\r\nconst quizResultsObject = {}\r\nlet quizResults = ''\r\n\r\n// quiz opening \r\nfor (let quizOpenButton of quizOpenButtons) {\r\n  quizOpenButton.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    quiz.classList.add('quiz-wrapper--active')\r\n    body.classList.add('lock')\r\n  })\r\n}\r\n\r\n\r\n// quiz closing\r\nfor (let quizCloseButton of quizCloseButtons) {\r\n  quizCloseButton.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    quiz.classList.remove('quiz-wrapper--active')\r\n    body.classList.remove('lock')\r\n\r\n    for (let i = 0; i < quizSteps.length; i++) {\r\n      quizSteps[i].classList.remove('current-step')\r\n      quizSteps[i].classList.remove('prev-step')\r\n\r\n      if (quizSteps[i] == quizSteps[quizSteps.length - 1]) {\r\n        resultsForming()\r\n        console.log(quizResults)\r\n      }\r\n    }\r\n    quizSteps[0].classList.add('current-step')\r\n\r\n    \r\n  })\r\n}\r\n\r\n\r\n// quiz results\r\nfor (let quizForm of quizForms) {\r\n  quizForm.addEventListener('submit', (e) => {\r\n    e.preventDefault()\r\n\r\n    let formValueObject = Object.fromEntries(new FormData(e.target).entries())\r\n    let formQuestion = quizForm.querySelector('.form-title').innerHTML\r\n\r\n    quizResultsObject[`${formQuestion}`] = formValueObject[Object.keys(formValueObject)[0]]\r\n  })\r\n}\r\n\r\nlet resultsForming = function () {\r\n  for (let quizResultObject in quizResultsObject) {\r\n    quizResults += `${quizResultObject}: ${quizResultsObject[quizResultObject]}  |||  `\r\n  }\r\n}\r\n\r\n\r\n// quiz navigation\r\nfor (let i = 0; i < quizButtonsNext.length; i++) {\r\n  quizButtonsNext[i].addEventListener('click', () => {\r\n\r\n    quizSteps[i].classList.remove('current-step')\r\n    quizSteps[i].classList.add('prev-step')\r\n\r\n    if ( i < (quizButtonsNext.length - 1)) {\r\n      quizSteps[i + 1].classList.add('current-step')\r\n    }\r\n\r\n    if (quizSteps[i] == quizSteps[quizButtonsNext.length - 1]) {\r\n      resultsForming()\r\n      console.log(quizResults)\r\n    }\r\n  })\r\n}\r\n\r\nfor (let i = 1; i < quizButtonsPrev.length; i++) {\r\n  quizButtonsPrev[i].addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    quizSteps[i].classList.remove('current-step')\r\n    quizSteps[i - 1].classList.remove('prev-step')\r\n    quizSteps[i - 1].classList.add('current-step')\r\n\r\n    if (quizSteps[i] == quizSteps[quizButtonsPrev.length - 1]) {\r\n      quiz.classList.remove('quiz-wrapper--active')\r\n      body.classList.remove('lock')\r\n\r\n      for (let i = 0; i < quizSteps.length; i++) {\r\n        quizSteps[i].classList.remove('current-step')\r\n        quizSteps[i].classList.remove('prev-step')\r\n      }\r\n      quizSteps[0].classList.add('current-step')\r\n\r\n      resultsForming()\r\n      console.log(quizResults)\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/quiz.js?");

/***/ }),

/***/ "./src/assets/js/team-slider.js":
/*!**************************************!*\
  !*** ./src/assets/js/team-slider.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// team slider\r\nconst teamSwiper = new Swiper('.team__swiper-container', {\r\n  slidesPerView: 1,\r\n  slidesPerColumn: 2,\r\n  slidesPerColumnFill: 'row',\r\n  \r\n  breakpoints: {\r\n    700: {\r\n      slidesPerView: 2,\r\n      spaceBetween: 20,\r\n      slidesPerColumn: 1,\r\n    },\r\n    770: {\r\n      slidesPerView: 2,\r\n      spaceBetween: 20,\r\n      slidesPerColumn: 1,\r\n\r\n      navigation: {\r\n        nextEl: '.team-swiper-button-next',\r\n        prevEl: '.team-swiper-button-prev',\r\n      },\r\n    },\r\n  },\r\n\r\n  pagination: {\r\n    el: '.team-swiper-pagination',\r\n  },\r\n\r\n  navigation: {\r\n    nextEl: '.team-swiper-button-next--adaptiv',\r\n    prevEl: '.team-swiper-button-prev--adaptiv',\r\n  },\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/team-slider.js?");

/***/ }),

/***/ "./src/assets/js/video-main.js":
/*!*************************************!*\
  !*** ./src/assets/js/video-main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// pop up\r\n\r\nlet firstScreenButton = document.querySelectorAll('.first-screen__button')\r\n\r\nif (firstScreenButton.length > 0){\r\n\r\n  let closeBtn = document.querySelector('.close-button')\r\n  let iframea = ''\r\n  const popUp = document.querySelector('.video-popup')\r\n\r\n  for (let video of firstScreenButton) {\r\n    video.addEventListener('click', () => {\r\n      popUp.classList.toggle('video-popup--active')\r\n  \r\n      let srcLink =  document.querySelector('.fisrt-screen-video__link').innerHTML;\r\n      iframea = createIframe()\r\n      \r\n      function createIframe() {\r\n        let iframe = document.createElement('iframe');\r\n    \r\n        iframe.setAttribute('allowfullscreen', '');\r\n        iframe.setAttribute('allow', 'autoplay');\r\n        iframe.setAttribute('src', srcLink + '?rel=0&showinfo=0&autoplay=1');\r\n        iframe.classList.add('video-frame');\r\n    \r\n        return iframe;\r\n      }\r\n  \r\n      document.querySelector('.video-popup__content').appendChild(iframea)\r\n    })\r\n  }\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    popUp.classList.remove('video-popup--active')\r\n    iframea.remove()\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/video-main.js?");

/***/ }),

/***/ "./src/assets/js/video-reviews.js":
/*!****************************************!*\
  !*** ./src/assets/js/video-reviews.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// pop up\r\n\r\nlet videos = document.querySelectorAll('.video-reviews__placeholder-wrapper')\r\n\r\nif (videos.length > 0){\r\n\r\n  let closeBtn = document.querySelector('.close-button')\r\n  let iframea = ''\r\n  const popUp = document.querySelector('.video-popup')\r\n\r\n  for (let video of videos) {\r\n    video.addEventListener('click', () => {\r\n      popUp.classList.toggle('video-popup--active')\r\n  \r\n      let srcLink =  video.querySelector('.video-link').innerHTML;\r\n      iframea = createIframe()\r\n      \r\n      function createIframe() {\r\n        let iframe = document.createElement('iframe');\r\n    \r\n        iframe.setAttribute('allowfullscreen', '');\r\n        iframe.setAttribute('allow', 'autoplay');\r\n        iframe.setAttribute('src', srcLink + '?rel=0&showinfo=0&autoplay=1');\r\n        iframe.classList.add('video-frame');\r\n    \r\n        return iframe;\r\n      }\r\n  \r\n      document.querySelector('.video-popup__content').appendChild(iframea)\r\n    })\r\n  }\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    popUp.classList.remove('video-popup--active')\r\n    iframea.remove()\r\n  })\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/video-reviews.js?");

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/menu-burger.js ./src/assets/js/portfolio-slider.js ./src/assets/js/quiz.js ./src/assets/js/team-slider.js ./src/assets/js/video-main.js ./src/assets/js/video-reviews.js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\kolganfinance\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\kolganfinance\\src\\assets\\js\\menu-burger.js */\"./src/assets/js/menu-burger.js\");\n__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\kolganfinance\\src\\assets\\js\\portfolio-slider.js */\"./src/assets/js/portfolio-slider.js\");\n__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\kolganfinance\\src\\assets\\js\\quiz.js */\"./src/assets/js/quiz.js\");\n__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\kolganfinance\\src\\assets\\js\\team-slider.js */\"./src/assets/js/team-slider.js\");\n__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\kolganfinance\\src\\assets\\js\\video-main.js */\"./src/assets/js/video-main.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\kolganfinance\\src\\assets\\js\\video-reviews.js */\"./src/assets/js/video-reviews.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/menu-burger.js_./src/assets/js/portfolio-slider.js_./src/assets/js/quiz.js_./src/assets/js/team-slider.js_./src/assets/js/video-main.js_./src/assets/js/video-reviews.js?");

/***/ })

/******/ });