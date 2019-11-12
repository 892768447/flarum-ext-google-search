module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! exports provided: GoogleSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleSearchPage", function() { return _src_forum__WEBPACK_IMPORTED_MODULE_0__["GoogleSearchPage"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/GoogleSearchList.js":
/*!**************************************************!*\
  !*** ./src/forum/components/GoogleSearchList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleSearchList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Placeholder */ "flarum/components/Placeholder");
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GoogleSearchListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GoogleSearchListItem */ "./src/forum/components/GoogleSearchListItem.js");







/**
 * The `GoogleSearchList` component displays a list of search result.
 *
 * ### Props
 *
 * - `params` A map of parameters used to construct a refined parameter object
 *   to send along in the API request to get google search results.
 */

var GoogleSearchList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GoogleSearchList, _Component);

  function GoogleSearchList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = GoogleSearchList.prototype;

  _proto.init = function init() {
    /**
     * Whether or not google search results are loading.
     *
     * @type {Boolean}
     */
    this.loading = true;
    /**
     * Whether or not there are more results that can be loaded.
     *
     * @type {Boolean}
     */

    this.moreResults = false;
    /**
     * the google search list.
     *
     * @type {Array}
     */

    this.googleresults = [];
    this.refresh();
  };

  _proto.view = function view() {
    var params = this.props.params;
    var loading;

    if (this.loading) {
      loading = flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a.component();
    } else if (this.moreResults) {
      loading = flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("core.forum.discussion_list.load_more_button"),
        className: "Button",
        onclick: this.loadMore.bind(this)
      });
    }

    if (this.googleresults.length === 0 && !this.loading) {
      var text = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("irony-google-search.forum.page.empty_text");
      return m("div", {
        className: "DiscussionList"
      }, flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        text: text
      }));
    }

    return m("div", {
      className: "DiscussionList" + (this.props.params.q ? " DiscussionList--searchResults" : "")
    }, m("ul", {
      className: "DiscussionList-discussions"
    }, this.googleresults.map(function (info) {
      return m("li", null, _GoogleSearchListItem__WEBPACK_IMPORTED_MODULE_6__["default"].component({
        info: info,
        params: params
      }));
    })), m("div", {
      className: "DiscussionList-loadMore"
    }, loading));
  }
  /**
   * Get the parameters that should be passed in the API request to get
   * google search results.
   *
   * @return {Object}
   * @api
   */
  ;

  _proto.requestParams = function requestParams() {
    return this.props.params;
  }
  /**
   * Clear and reload the google search list.
   *
   * @public
   */
  ;

  _proto.refresh = function refresh(clear) {
    var _this = this;

    if (clear === void 0) {
      clear = true;
    }

    if (clear) {
      this.loading = true;
      this.googleresults = [];
    }

    return this.loadResults().then(function (results) {
      _this.googleresults = [];

      _this.parseResults(results);
    }, function () {
      _this.loading = false;
      m.redraw();
    });
  }
  /**
   * Load a new page of google search results.
   * 请求api获取数据
   *
   * @param {Integer} offset The index to start the page at.
   * @return {Promise}
   */
  ;

  _proto.loadResults = function loadResults(offset) {
    var preloadedLists = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.preloadedApiDocument();

    if (preloadedLists) {
      return m.deferred().resolve(preloadedLists).promise;
    }

    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find("google/search", this.requestParams());
  }
  /**
   * Load the next page of google search results.
   *
   * @public
   */
  ;

  _proto.loadMore = function loadMore() {
    this.loading = true;
    this.loadResults(this.googleresults.length).then(this.parseResults.bind(this));
  }
  /**
   * Parse results and append them to the google search list.
   *
   * @param {Array} results
   * @return {Array}
   */
  ;

  _proto.parseResults = function parseResults(results) {
    console.log(results);
    [].push.apply(this.googleresults, results);
    this.loading = false;
    this.moreResults = false;
    m.lazyRedraw();
    console.log(this.googleresults);
    return results;
  }
  /**
   * Remove a google search from the list if it is present.
   *
   * @param {Array} list
   * @public
   */
  ;

  _proto.removeList = function removeList(list) {
    var index = this.googleresults.indexOf(list);

    if (index !== -1) {
      this.googleresults.splice(index, 1);
    }
  }
  /**
   * Add a google search to the top of the list.
   *
   * @param {Array} list
   * @public
   */
  ;

  _proto.addList = function addList(list) {
    this.googleresults.unshift(list);
  };

  return GoogleSearchList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/GoogleSearchListItem.js":
/*!******************************************************!*\
  !*** ./src/forum/components/GoogleSearchListItem.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleSearchListItem; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);



var GoogleSearchListItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GoogleSearchListItem, _Component);

  function GoogleSearchListItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = GoogleSearchListItem.prototype;

  _proto.view = function view() {
    var info = this.props.info;
    return m("div", {
      className: "DiscussionListItem"
    }, m("a", {
      href: info.url,
      className: "GoogleSearchListItem-main",
      target: "_blank"
    }, m("h3", {
      className: "GoogleSearchListItem-title"
    }, info.title), m("ul", {
      className: "GoogleSearchListItem-info"
    }, m("li", {
      className: "item-excerpt"
    }, m("span", null, info.content)))));
  };

  return GoogleSearchListItem;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/GoogleSearchPage.js":
/*!**************************************************!*\
  !*** ./src/forum/components/GoogleSearchPage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleSearchPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/DiscussionComposer */ "flarum/components/DiscussionComposer");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/components/SelectDropdown */ "flarum/components/SelectDropdown");
/* harmony import */ var flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _GoogleSearchList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GoogleSearchList */ "./src/forum/components/GoogleSearchList.js");













/**
 * The `IndexPage` component displays the index page, including the welcome
 * hero, the sidebar, and the discussion list.
 */

var GoogleSearchPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GoogleSearchPage, _Page);

  function GoogleSearchPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = GoogleSearchPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    var params = this.params();

    if (!flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.cache.googleSearchList) {
      flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.cache.googleSearchList = new _GoogleSearchList__WEBPACK_IMPORTED_MODULE_12__["default"]({
        params: params
      });
    }

    this.bodyClass = "App--index";
  };

  _proto.onunload = function onunload() {
    // Save the scroll position so we can restore it when we return to the
    // result list.
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.cache.scrollTop = $(window).scrollTop();
  };

  _proto.view = function view() {
    return m("div", {
      className: "IndexPage"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default()(this.sidebarItems().toArray()))), m("div", {
      className: "IndexPage-results sideNavOffset"
    }, m("div", {
      className: "IndexPage-toolbar"
    }, m("ul", {
      className: "IndexPage-toolbar-view"
    }), m("ul", {
      className: "IndexPage-toolbar-action"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default()(this.actionItems().toArray()))), flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.cache.googleSearchList.render()))));
  };

  _proto.config = function config(isInitialized, context) {
    _Page.prototype.config.apply(this, arguments);

    if (isInitialized) return;
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(context, "onunload", function () {
      return $("#app").css("min-height", "");
    });
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.setTitle("");
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.setTitleCount(0); // Work out the difference between the height of this hero and that of the
    // previous hero. Maintain the same scroll position relative to the bottom
    // of the hero so that the sidebar doesn't jump around.

    var oldHeroHeight = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.cache.heroHeight;
    var heroHeight = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.cache.heroHeight = this.$(".Hero").outerHeight() || 0;
    var scrollTop = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.cache.scrollTop;
    $("#app").css("min-height", $(window).height() + heroHeight); // Scroll to the remembered position. We do this after a short delay so that
    // it happens after the browser has done its own "back button" scrolling,
    // which isn't right. https://github.com/flarum/core/issues/835

    var scroll = function scroll() {
      return $(window).scrollTop(scrollTop - oldHeroHeight + heroHeight);
    };

    scroll();
    setTimeout(scroll, 1);
  }
  /**
   * Build an item list for the sidebar of the index page. By default this is a
   * "New Discussion" button, and then a DropdownSelect component containing a
   * list of navigation items.
   *
   * @return {ItemList}
   */
  ;

  _proto.sidebarItems = function sidebarItems() {
    var items = flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.sidebarItems();
    items.replace("nav", flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_11___default.a.component({
      children: this.navItems(this).toArray(),
      buttonClassName: "Button",
      className: "App-titleControl"
    }));
    return items;
  }
  /**
   * Build an item list for the navigation in the sidebar of the index page. By
   * default this is just the 'All Discussions' link.
   *
   * @return {ItemList}
   */
  ;

  _proto.navItems = function navItems() {
    var items = flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.navItems();
    var params = this.stickyParams();
    items.add("irony-google-search", flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_10___default.a.component({
      href: flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route("irony_google_search", params),
      children: flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("irony-google-search.forum.page.nav"),
      icon: "fab fa-google"
    }), 85);
    return items;
  }
  /**
   * Build an item list for the part of the toolbar which is about taking action
   * on the results. By default this is just a "mark all as read" button.
   *
   * @return {ItemList}
   */
  ;

  _proto.actionItems = function actionItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a(); // 刷新按钮

    items.add("refresh", flarum_components_Button__WEBPACK_IMPORTED_MODULE_9___default.a.component({
      title: flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("core.forum.index.refresh_tooltip"),
      icon: "fas fa-sync",
      className: "Button Button--icon",
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.cache.googleSearchList.refresh();
      }
    }));
    return items;
  }
  /**
   * Return the current search query, if any. This is implemented to activate
   * the search box in the header.
   *
   * @see Search
   * @return {String}
   */
  ;

  _proto.searching = function searching() {
    return this.params().q;
  }
  /**
   * Redirect to the index page without a search filter. This is called when the
   * 'x' is clicked in the search box in the header.
   *
   * @see Search
   */
  ;

  _proto.clearSearch = function clearSearch() {
    var params = this.params();
    delete params.q;
    m.route(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route(this.props.routeName, params));
  }
  /**
   * Get URL parameters that stick between filter changes.
   *
   * @return {Object}
   */
  ;

  _proto.stickyParams = function stickyParams() {
    return {
      q: m.route.param("q")
    };
  }
  /**
   * Get parameters to pass to the GoogleSearchList component.
   *
   * @return {Object}
   */
  ;

  _proto.params = function params() {
    return this.stickyParams();
  }
  /**
   * Log the user in and then open the composer for a new discussion.
   *
   * @return {Promise}
   */
  ;

  _proto.newDiscussion = function newDiscussion() {
    var deferred = m.deferred();

    if (flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.session.user) {
      this.composeNewDiscussion(deferred);
    } else {
      flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.modal.show(new flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_8___default.a({
        onlogin: this.composeNewDiscussion.bind(this, deferred)
      }));
    }

    return deferred.promise;
  }
  /**
   * Initialize the composer for a new discussion.
   *
   * @param {Deferred} deferred
   * @return {Promise}
   */
  ;

  _proto.composeNewDiscussion = function composeNewDiscussion(deferred) {
    var component = new flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_7___default.a({
      user: flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.session.user
    });
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.composer.load(component);
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.composer.show();
    deferred.resolve(component);
    return deferred.promise;
  };

  return GoogleSearchPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! exports provided: GoogleSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_DiscussionsSearchSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/DiscussionsSearchSource */ "flarum/components/DiscussionsSearchSource");
/* harmony import */ var flarum_components_DiscussionsSearchSource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionsSearchSource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_GoogleSearchPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/GoogleSearchPage */ "./src/forum/components/GoogleSearchPage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleSearchPage", function() { return _components_GoogleSearchPage__WEBPACK_IMPORTED_MODULE_5__["default"]; });






 // Allow other extensions to extend the page


flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('irony-google-search', function (app) {
  // 扩展路由到指定页面
  app.routes.irony_google_search = {
    path: '/google',
    component: _components_GoogleSearchPage__WEBPACK_IMPORTED_MODULE_5__["default"].component()
  }; // 增加搜索框扩展显示

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionsSearchSource__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'view', function (view, query) {
    if (!view) {
      return;
    }

    query = query.toLowerCase();
    view.splice(2, 0, m("li", {
      className: "Dropdown-header"
    }, app.translator.trans('irony-google-search.forum.search.search_heading')), m("li", null, flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'fas fa-search',
      children: app.translator.trans('irony-google-search.forum.search.all_search_button', {
        query: query
      }),
      href: app.route('irony_google_search', {
        q: query
      })
    })));
  }); // 增加左侧导航显示

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'navItems', function (items) {
    items.add('irony-google-search', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      href: app.route('irony_google_search'),
      children: app.translator.trans('irony-google-search.forum.page.nav'),
      icon: 'fab fa-google'
    }), 85);
  });
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/DiscussionComposer":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionComposer']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionComposer'];

/***/ }),

/***/ "flarum/components/DiscussionsSearchSource":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionsSearchSource']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionsSearchSource'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/LogInModal":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LogInModal']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LogInModal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Placeholder":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/Placeholder']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Placeholder'];

/***/ }),

/***/ "flarum/components/SelectDropdown":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/SelectDropdown']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SelectDropdown'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map