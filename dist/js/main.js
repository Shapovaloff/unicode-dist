/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/asideMobile.js":
/*!******************************************!*\
  !*** ./src/js/components/asideMobile.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return asideMobile; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

function asideMobile() {
  var blogContainer = document.querySelector('.page-content__side');
  var breakpoint = window.matchMedia('(min-width:1024px)');
  var mySwiper;

  function enableSwiper() {
    if (blogContainer) {
      mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](blogContainer, {
        direction: 'horizontal',
        spaceBetween: 8,
        grabCursor: true,
        slidesPerView: 'auto'
      });
    }
  }

  var breakpointChecker = function breakpointChecker() {
    if (breakpoint.matches === true) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }
    } else if (breakpoint.matches === false) {
      enableSwiper();
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

/***/ }),

/***/ "./src/js/components/charPopup.js":
/*!****************************************!*\
  !*** ./src/js/components/charPopup.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return characterPopup; });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);

 // TODO: move inside separate utils file

var UINode = document.querySelector('#js-char-popup-ui');
var touchScreen = ('ontouchstart' in document.documentElement);
var popupArea = document.querySelector('#js-char-popup-area');

function escapeHTML(unsafe) {
  return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function isCopiedSymbol(num) {
  return !(num < 32 || num === 127 || num >= 128 && num < 160 || num >= 55296 && num <= 57343 || num === 1564);
}

function prepareContent(reference) {
  var data = JSON.parse(reference.getAttribute('data-template'));

  if (data) {
    var symbolNum = data.html_code.match(/\d+/g);
    /* eslint-disable indent */

    var content = "<div id=\"js-char-popup-template\" class=\"char\">\n        <div class=\"char__content\">\n          <div class=\"char__header\">\n            ".concat(data.image ? "<img class=\"char__image\" src=\"".concat(data.image, "\" alt=\"").concat(data.symbol, "\">") : "<span class=\"vchar ".concat(data.css_class ? data.css_class : '', "\">").concat(data.symbol, "</span>"), "\n          </div>\n\n          <div class=\"desc\">\n            <a href=\"").concat(data.url, "\">").concat(data.title, "</a>\n          </div>\n\n          <div class=\"char__codes\">\n            <div class=\"char__code-names\">\n              <div class=\"char__unicode-num\">").concat(UINode.dataset.unicodeNumber, ":</div>\n              <div class=\"char__html-code\">").concat(UINode.dataset.htmlCode, ":</div>\n            </div>\n            <div class=\"char__code-values\">\n              <div class=\"unicode-num\"><span class=\"code\">").concat(escapeHTML(data.number), "</span></div>\n              <div class=\"html-code\"><span class=\"code\">").concat(escapeHTML(data.html_code), "</span></div>\n            </div>\n          </div>\n        </div>\n        \n        \n        ").concat(isCopiedSymbol(symbolNum) ? "<div class=\"char__copy\">\n            <input type=\"button\" class=\"b-copy-char-button b-copy-char-button--block symbol-copy\"\n              data-goal=\"copy_symbol\"\n              data-clipboard-text=\"".concat(data.symbol, "\"\n              data-symbol=\"").concat(data.symbol, "\"\n              value=\"").concat(UINode.dataset.buttonText, "\">\n          </div>") : '', "\n      </div>");
    /* eslint-enable indent */

    return content;
  }

  return false;
}

function characterPopup() {
  if (UINode && popupArea) {
    if (touchScreen) {
      popupArea.addEventListener('click', function (event) {
        if (event.target.classList.contains('js-char-popup-item') || event.target.parentNode.classList.contains('js-char-popup-item')) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    }

    if (window.innerWidth < 768) {
      var tippyInstance = Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(popupArea, {
        theme: 'light-border',
        interactive: true,
        arrow: false,
        allowHTML: true,
        trigger: 'manual',
        appendTo: function appendTo() {
          return document.body;
        },
        content: function content(reference) {
          return prepareContent(reference);
        }
      });
      var overlayFragment = document.createRange().createContextualFragment('<div class="js-char-popup-overlay" style="display: none;"></div>');
      document.body.appendChild(overlayFragment);
      var overlay = document.body.querySelector('.js-char-popup-overlay');

      var hideTippy = function hideTippy() {
        tippyInstance.hide();
        overlay.style.display = 'none';
      };

      overlay.addEventListener('click', hideTippy);

      var showTippy = function showTippy(reference) {
        tippyInstance.setContent(prepareContent(reference));
        overlay.style.display = 'block';
        tippyInstance.show();
      };

      popupArea.addEventListener('click', function (event) {
        if (event.target.classList.contains('js-char-popup-item')) {
          showTippy(event.target);
        } else if (event.target.parentNode.classList.contains('js-char-popup-item')) {
          showTippy(event.target.parentNode);
        }
      });
    } else {
      var openTooltip = function openTooltip() {
        console.log(2);
      };

      Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["delegate"])(popupArea, {
        theme: 'light-border',
        interactive: true,
        arrow: false,
        allowHTML: true,
        placement: 'right-start',
        target: '.js-char-popup-item',
        delay: [400, 200],
        duration: 200,
        appendTo: function appendTo() {
          return document.body;
        },
        content: function content(reference) {
          return prepareContent(reference);
        },
        onShown: function onShown() {
          var button = document.querySelector('.b-copy-char-button');
          var clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_1___default.a(button);

          var openTooltip = function openTooltip() {
            var symbol = button.dataset.clipboardText;
            var popup = document.querySelector('.set-v2-popup');
            var symbolCopy = popup.querySelector('.set-v2-popup-symbol');
            symbolCopy.textContent = symbol;
            popup.classList.add('set-v2-popup--active');
            setTimeout(function () {
              popup.classList.remove('set-v2-popup--active');
            }, 900);
          };

          if (button) {
            button.addEventListener('click', openTooltip);
          }
        },
        onHide: function onHide() {
          var button = document.querySelector('.b-copy-char-button');

          if (button) {
            button.removeEventListener('click', openTooltip);
          }
        }
      });
    }
  }
}

/***/ }),

/***/ "./src/js/components/collapsibleDropdownList.js":
/*!******************************************************!*\
  !*** ./src/js/components/collapsibleDropdownList.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collapsibleDropdownList; });
function calculateRightBound(item) {
  return item.offsetLeft + item.offsetWidth;
}

function moveItemIntoList(item, list) {
  list.insertBefore(item, list.firstElementChild);
}

function collapsibleDropdownList() {
  var headerMenuWrapper = document.querySelector('.js-dropdown-menu');
  var menuItems = Array.prototype.slice.call(headerMenuWrapper.querySelectorAll('.js-dropdown-menu-item'));
  var dropdownMenuButton = headerMenuWrapper.querySelector('.js-dropdown-menu-button');
  var outOfBoundsItems = [];

  for (var i = menuItems.length - 1; i >= 0; i--) {
    console.log(calculateRightBound(menuItems[i]));

    if (calculateRightBound(menuItems[i]) > headerMenuWrapper.offsetLeft + headerMenuWrapper.clientWidth) {
      console.log(headerMenuWrapper.clientWidth);
      console.log(i);
    } else {
      i = -1;
    }
  }

  if (outOfBoundsItems.length) {
    dropdownMenuButton.classList.add('js-enabled');
    var hiddenItemsList = dropdownMenuButton.querySelector('.js-dropdown-menu-list');
    outOfBoundsItems.forEach(function (item) {
      moveItemIntoList(item, hiddenItemsList);
    });
    var buttonRightBound = dropdownMenuButton.offsetLeft + dropdownMenuButton.offsetWidth;

    if (buttonRightBound > headerMenuWrapper.offsetLeft + headerMenuWrapper.clientWidth) {
      moveItemIntoList(dropdownMenuButton.previousElementSibling, hiddenItemsList);
    }

    headerMenuWrapper.classList.add('js-enabled');
  } else {
    dropdownMenuButton.remove();
  }

  dropdownMenuButton.classList.add('js-processed');
  headerMenuWrapper.classList.add('js-processed');
}

/***/ }),

/***/ "./src/js/components/language.js":
/*!***************************************!*\
  !*** ./src/js/components/language.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return languageToggle; });
function languageToggle() {
  var buttonLanguage = document.querySelector('.language-select__open-btn');
  var languageList = document.querySelector('.language-select__list');
  var buttonLanguageFlag = buttonLanguage.querySelector('.language-select__flag');
  var buttonLanguageArrow = buttonLanguage.querySelector('.language-select__arrow');

  var toggle = function toggle() {
    languageList.classList.toggle('language-select__list--active');
    buttonLanguage.classList.toggle('language-select__open-btn--active');

    if (languageList.style.maxHeight) {
      languageList.style.transition = 'max-height 0.2s';
      languageList.style.maxHeight = null;
    } else {
      languageList.style.transition = 'max-height 0.2s';
      languageList.style.maxHeight = languageList.scrollHeight + 'px';
    }
  };

  buttonLanguage.addEventListener('click', function () {
    toggle();
  });
  document.addEventListener('click', function (evt) {
    var targetClick = evt.target;
    var itsMenu = targetClick === languageList || languageList.contains(targetClick);
    var itsHamburger = targetClick === buttonLanguage;
    var itsFlag = targetClick === buttonLanguageFlag;
    var itsArrow = targetClick === buttonLanguageArrow;
    var menuIsActive = languageList.classList.contains('language-select__list--active');

    if (!itsMenu && !itsHamburger && menuIsActive && !itsFlag && !itsArrow) {
      toggle();
    }
  });
}

/***/ }),

/***/ "./src/js/components/mobileMenu.js":
/*!*****************************************!*\
  !*** ./src/js/components/mobileMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return openMobileMenu; });
function openMobileMenu() {
  var breakpoint = window.matchMedia('(min-width:768px)');
  var button = document.querySelector('.page-header__menu-toggle');
  var menu = document.querySelector('.page-header__navigation');
  var buttonLanguage = document.querySelector('.menu-item-wrapper__link');
  var menuBackList = document.querySelector('.menu-back__list');
  var menuBtnLanguage = document.querySelector('.js-language-btn');
  var bodyPage = document.querySelector('body');
  var mainNavigation = document.querySelector('.main-navigation');

  var closeMenu = function closeMenu() {
    menu.style.transition = 'max-height 0.2s';
    menu.style.maxHeight = 0;
    bodyPage.style.overflowY = 'scroll';
    button.classList.remove('page-header__menu-toggle--active');
  };

  var openMenu = function openMenu() {
    menu.style.transition = 'max-height 0.2s';
    menu.style.maxHeight = 'calc(100vh - 100px)';
    bodyPage.style.overflowY = 'hidden';
    button.classList.add('page-header__menu-toggle--active');
  };

  var removeClassLang = function removeClassLang() {
    menuBackList.classList.remove('menu-back__list--active');
    mainNavigation.style.overflowY = 'scroll';
  };

  var openMenuLang = function openMenuLang() {
    menuBackList.style.transition = 'transform 0.2s';
    menuBackList.classList.add('menu-back__list--active');
    mainNavigation.style.overflowY = 'hidden';

    if (menuBackList.classList.contains('menu-back__list--active')) {
      menuBtnLanguage.addEventListener('click', removeClassLang);
    } else {
      menuBtnLanguage.removeEventListener('click', removeClassLang);
    }
  };

  var clickButton = function clickButton() {
    if (button.classList.contains('page-header__menu-toggle--active')) {
      closeMenu();
      buttonLanguage.removeEventListener('click', openMenuLang);
    } else {
      openMenu();
      buttonLanguage.addEventListener('click', openMenuLang);
    }
  };

  var breakpointChecker = function breakpointChecker() {
    if (breakpoint.matches === true) {
      button.removeEventListener('click', clickButton);
      bodyPage.style.overflowY = 'scroll';
      menu.style.maxHeight = menu.scrollHeight + 'px';
    } else if (breakpoint.matches === false) {
      button.addEventListener('click', clickButton);
      menu.style.maxHeight = 0;
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

/***/ }),

/***/ "./src/js/components/scrollMenu.js":
/*!*****************************************!*\
  !*** ./src/js/components/scrollMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollMenu; });
function scrollMenu() {
  var menuMobile = document.querySelector('.page-header__wrapper');
  var breakpoint = window.matchMedia('(min-width:768px)');
  var lastScrollTop = 0;

  var scrollFounc = function scrollFounc() {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st >= lastScrollTop) {
      menuMobile.style.transition = 'transform 0.2s';
      menuMobile.style.transform = 'translateY(-100%)';
    } else {
      menuMobile.style.transform = 'none';
    }

    lastScrollTop = st;
  };

  var breakpointChecker = function breakpointChecker() {
    if (breakpoint.matches === true) {
      window.removeEventListener('scroll', scrollFounc, false);
    } else if (breakpoint.matches === false) {
      window.addEventListener('scroll', scrollFounc, false);
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

/***/ }),

/***/ "./src/js/components/tooltipSearch.js":
/*!********************************************!*\
  !*** ./src/js/components/tooltipSearch.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tooltipSearch; });
function tooltipSearch() {
  var searchForm = document.querySelector('.search-field__form');
  var searchField = searchForm.querySelector('.search-field__input');
  var tooltip = document.querySelector('.search-tooltip');

  var changeField = function changeField() {
    searchField.addEventListener('input', function () {
      if (searchField.value.length >= 1) {
        tooltip.classList.add('search-tooltip--active');
        searchForm.style.borderBottomLeftRadius = '0px';
      } else {
        tooltip.classList.remove('search-tooltip--active');
        searchForm.style.borderBottomLeftRadius = '8px';
      }
    });
  };

  searchField.addEventListener('focus', changeField);
  searchField.addEventListener('blur', function () {
    tooltip.classList.remove('search-tooltip--active');
    searchForm.style.borderBottomLeftRadius = '8px';
  });
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_collapsibleDropdownList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/collapsibleDropdownList */ "./src/js/components/collapsibleDropdownList.js");
/* harmony import */ var _components_charPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/charPopup */ "./src/js/components/charPopup.js");
/* harmony import */ var _components_mobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobileMenu */ "./src/js/components/mobileMenu.js");
/* harmony import */ var _components_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/language */ "./src/js/components/language.js");
/* harmony import */ var _components_asideMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/asideMobile */ "./src/js/components/asideMobile.js");
/* harmony import */ var _components_scrollMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scrollMenu */ "./src/js/components/scrollMenu.js");
/* harmony import */ var _components_tooltipSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tooltipSearch */ "./src/js/components/tooltipSearch.js");
// Your JS Code goes here
// import likely from 'ilyabirman-likely';







document.addEventListener('DOMContentLoaded', function () {
  // likely.initiate();
  Object(_components_collapsibleDropdownList__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_components_charPopup__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_components_mobileMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_components_language__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_components_asideMobile__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_components_scrollMenu__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_components_tooltipSearch__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map