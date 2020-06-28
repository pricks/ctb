"use weex:vue";
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
/******/ ([
/* 0 */
/*!**********************************************************************************************!*\
  !*** /Users/fengyafei/yafei/projects/vue/ctb_uni/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/detail/detail.nvue?mpType=page */ 8);\n\n        \n        \n        \n        _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/detail/detail'\n        _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxRQUFvQztBQUNwQyxRQUE4QjtBQUM5QixRQUFnRTtBQUNoRSxRQUFRLDZFQUFHO0FBQ1gsUUFBUSw2RUFBRztBQUNYLFFBQVEsNkVBQUc7QUFDWCxnQkFBZ0IsNkVBQUciLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2RldGFpbC9kZXRhaWwubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvZGV0YWlsL2RldGFpbCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 2);function _createSuper(Derived) {return function () {var Super = _getPrototypeOf(Derived),result;if (_isNativeReflectConstruct()) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;
var DIFF_TIME = 60 * 1000 * 60 * 24;

var statConfig = __webpack_require__(/*! uni-stat-config */ 3).default || __webpack_require__(/*! uni-stat-config */ 3);
var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var Report_Data_Time = 'Report_Data_Time';
var Report_Status = 'Report_Status';
var isReportData = function isReportData() {
  return new Promise(function (resolve, reject) {
    var start_time = '';
    var end_time = new Date().getTime();
    var diff_time = DIFF_TIME;
    var report_status = 1;
    try {
      start_time = uni.getStorageSync(Report_Data_Time);
      report_status = uni.getStorageSync(Report_Status);
    } catch (e) {
      start_time = '';
      report_status = 1;
    }

    if (report_status === '') {
      requestData(function (_ref)

      {var enable = _ref.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
        if (enable === 1) {
          resolve();
        }
      });
      return;
    }

    if (report_status === 1) {
      resolve();
    }

    if (!start_time) {
      uni.setStorageSync(Report_Data_Time, end_time);
      start_time = end_time;
    }

    if (end_time - start_time > diff_time) {
      requestData(function (_ref2)

      {var enable = _ref2.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
      });
    }

  });
};

var requestData = function requestData(done) {
  var formData = {
    usv: STAT_VERSION,
    conf: JSON.stringify({
      ak: statConfig.appid }) };


  uni.request({
    url: STAT_URL,
    method: 'GET',
    data: formData,
    success: function success(res) {var

      data =
      res.data;
      if (data.ret === 0) {
        typeof done === 'function' && done({
          enable: data.enable });

      }
    },
    fail: function fail(e) {
      var report_status_code = 1;
      try {
        report_status_code = uni.getStorageSync(Report_Status);
      } catch (e) {
        report_status_code = 1;
      }
      if (report_status_code === '') {
        report_status_code = 1;
      }
      if (report_status_code === 1) {
        typeof done === 'function' && done({
          enable: res.enable });

      }
      // console.error('统计请求错误');
    } });

};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig$1 = __webpack_require__(/*! uni-stat-config */ 3).default || __webpack_require__(/*! uni-stat-config */ 3);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig$1.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "getIsReportData", value: function getIsReportData()

    {
      return isReportData();
    } }, { key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref3$key = _ref3.key,key = _ref3$key === void 0 ? '' : _ref3$key,_ref3$value = _ref3.value,value = _ref3$value === void 0 ? "" : _ref3$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig$1.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      this.getIsReportData().then(function () {
        uni.request({
          url: STAT_URL,
          method: 'POST',
          // header: {
          //   'content-type': 'application/json' // 默认值
          // },
          data: optionsData,
          success: function success() {
            // if (process.env.NODE_ENV === 'development') {
            //   console.log('stat request success');
            // }
          },
          fail: function fail(e) {
            if (++_this5._retry < 3) {
              setTimeout(function () {
                _this5._sendRequest(optionsData);
              }, 1000);
            }
          } });

      });
    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      this.getIsReportData().then(function () {
        var image = new Image();
        var options = getSgin(GetEncodeURIComponentOptions(data)).options;
        image.src = STAT_H5_URL + '?' + options;
      });
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-27920200618001","_inBundle":false,"_integrity":"sha512-8xzT9YOpxECxNMyDzwCzV3yUrsErTQlECtFp6lRScNoOxZ1XGVcUD7CwXil8WBJ6TaP9WfpZndMhxOixcBXYXA==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-27920200618001.tgz","_shasum":"55ed45fa98c529a38a49dce3f11b3fdf198488bc","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"909d2a9616971f0488d727d0a906828ed24856c2","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-27920200618001"};

/***/ }),
/* 3 */
/*!******************************************************************************!*\
  !*** /Users/fengyafei/yafei/projects/vue/ctb_uni/pages.json?{"type":"stat"} ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":""});

/***/ }),
/* 4 */
/*!*******************************************************************************!*\
  !*** /Users/fengyafei/yafei/projects/vue/ctb_uni/pages.json?{"type":"style"} ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 5 */
/*!*******************************************************************************!*\
  !*** /Users/fengyafei/yafei/projects/vue/ctb_uni/main.js?{"type":"appStyle"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************************************************************************!*\
  !*** /Users/fengyafei/yafei/projects/vue/ctb_uni/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 7);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/fengyafei/yafei/projects/vue/ctb_uni/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 8 */
/*!****************************************************************************************!*\
  !*** /Users/fengyafei/yafei/projects/vue/ctb_uni/pages/detail/detail.nvue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.nvue?vue&type=template&id=64638088&mpType=page */ 9);\n/* harmony import */ var _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.nvue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 15).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 15).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"0625bc7a\",\n  false,\n  _detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail/detail.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDc0U7QUFDTDtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1FQUEyRDtBQUMvRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUVBQTJEO0FBQ3BIOztBQUVBOztBQUVBO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDYzODA4OCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGV0YWlsLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGV0YWlsLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vZGV0YWlsLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjA2MjViYzdhXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2RldGFpbC9kZXRhaWwubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**********************************************************************************************************************!*\
  !*** /Users/fengyafei/yafei/projects/vue/ctb_uni/pages/detail/detail.nvue?vue&type=template&id=64638088&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./detail.nvue?vue&type=template&id=64638088&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/fengyafei/yafei/projects/vue/ctb_uni/pages/detail/detail.nvue?vue&type=template&id=64638088&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", [
        _c(
          "view",
          { staticClass: ["banner"], attrs: { autoFocus: true } },
          [
            _c("u-image", {
              staticClass: ["banner-img"],
              attrs: { src: _vm.banner.image_url }
            }),
            _c("view", { staticClass: ["title-area"] }, [
              _c("u-text", { staticClass: ["title-text"] }, [
                _vm._v(_vm._s(_vm.banner.title))
              ])
            ])
          ],
          1
        ),
        _c("view", { staticClass: ["article-meta"] }, [
          _c(
            "u-text",
            { staticClass: ["article-meta-text", "article-author"] },
            [_vm._v(_vm._s(_vm.banner.source))]
          ),
          _c("u-text", { staticClass: ["article-meta-text", "article-text"] }, [
            _vm._v("发表于")
          ]),
          _c("u-text", { staticClass: ["article-meta-text", "article-time"] }, [
            _vm._v(_vm._s(_vm.banner.datetime))
          ])
        ]),
        _c(
          "view",
          { staticClass: ["article-content"] },
          [
            _c("rich-text", {
              staticStyle: { fontSize: "14px" },
              attrs: { nodes: _vm.content }
            })
          ],
          1
        ),
        _c("view", { staticClass: ["comment-wrap"] })
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!****************************************************************************************************************!*\
  !*** /Users/fengyafei/yafei/projects/vue/ctb_uni/pages/detail/detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./detail.nvue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlrQixDQUFnQixra0JBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGV0YWlsLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/fengyafei/yafei/projects/vue/ctb_uni/pages/detail/detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _htmlParser = _interopRequireDefault(__webpack_require__(/*! @/common/html-parser */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar FAIL_CONTENT = '<p>获取信息失败1</p>';function parseImgs(nodes) {nodes.forEach(function (node) {if (node.name === 'img' && node.attrs && node.attrs['data-img-size-val']) {var sizes = node.attrs['data-img-size-val'].split(',');var width = uni.upx2px(720 * 0.9);var height = parseInt(width * (sizes[1] / sizes[0]));node.attrs.style = \"width:\".concat(width, \";height:\").concat(height, \";\");}if (Array.isArray(node.children)) {parseImgs(node.children);}});return nodes;\n}var _default =\n\n{\n  data: function data() {\n    return {\n      banner: {},\n      content: [] };\n\n  },\n  onShareAppMessage: function onShareAppMessage() {\n    return {\n      title: this.banner.title,\n      path: '/pages/detail/detail?query=' + JSON.stringify(this.banner) };\n\n  },\n  onLoad: function onLoad(event) {\n    // 目前在某些平台参数会被主动 decode，暂时这样处理。\n    try {\n      this.banner = JSON.parse(decodeURIComponent(event.query));\n    } catch (error) {\n      this.banner = JSON.parse(event.query);\n    }\n\n    uni.setNavigationBarTitle({\n      title: this.banner.title });\n\n\n    this.getDetail();\n  },\n  methods: {\n    getDetail: function getDetail() {var _this = this;\n      uni.request({\n        url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.banner.post_id,\n        success: function success(result) {\n          var content = FAIL_CONTENT;\n          if (result.statusCode == 200) {\n            content = result.data.content;\n          }\n          var nodes = (0, _htmlParser.default)(content);\n\n          parseImgs(nodes);\n\n          _this.content = nodes;\n        } });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsL2RldGFpbC5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSw4Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxvQ0FFQSwyQkFDQSwrQkFDQSxJQUNBLHVCQUNBLFVBREEsSUFFQSwrQkFIQSxFQUlBLENBQ0EsdURBQ0Esa0NBQ0EscURBQ0EsMEVBQ0EsQ0FDQSxtQ0FDQSx5QkFDQSxDQUNBLENBZEEsRUFlQTtBQUNBLEM7O0FBRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGlCQUZBOztBQUlBLEdBTkE7QUFPQSxtQkFQQSwrQkFPQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSx1RUFGQTs7QUFJQSxHQVpBO0FBYUEsUUFiQSxrQkFhQSxLQWJBLEVBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUZBLENBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBREE7OztBQUlBO0FBQ0EsR0ExQkE7QUEyQkE7QUFDQSxhQURBLHVCQUNBO0FBQ0E7QUFDQSxpRkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBWkE7O0FBY0EsS0FoQkEsRUEzQkEsRSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXc+XG5cdFx0PHZpZXcgY2xhc3M9XCJiYW5uZXJcIiBhdXRvLWZvY3VzPlxuXHRcdFx0PGltYWdlIGNsYXNzPVwiYmFubmVyLWltZ1wiIDpzcmM9XCJiYW5uZXIuaW1hZ2VfdXJsXCI+PC9pbWFnZT5cblx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGUtYXJlYVwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlLXRleHRcIj57e2Jhbm5lci50aXRsZX19PC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cImFydGljbGUtbWV0YVwiPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJhcnRpY2xlLW1ldGEtdGV4dCBhcnRpY2xlLWF1dGhvclwiPnt7YmFubmVyLnNvdXJjZX19PC90ZXh0PlxuXHRcdFx0PHRleHQgY2xhc3M9XCJhcnRpY2xlLW1ldGEtdGV4dCBhcnRpY2xlLXRleHRcIj7lj5Hooajkuo48L3RleHQ+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cImFydGljbGUtbWV0YS10ZXh0IGFydGljbGUtdGltZVwiPnt7YmFubmVyLmRhdGV0aW1lfX08L3RleHQ+XG5cdFx0PC92aWV3PlxuXHRcdDx2aWV3IGNsYXNzPVwiYXJ0aWNsZS1jb250ZW50XCI+XG5cdFx0XHQ8cmljaC10ZXh0IDpub2Rlcz1cImNvbnRlbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDtcIj48L3JpY2gtdGV4dD5cblx0XHQ8L3ZpZXc+XG5cdFx0PHZpZXcgY2xhc3M9XCJjb21tZW50LXdyYXBcIj48L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBodG1sUGFyc2VyIGZyb20gJ0AvY29tbW9uL2h0bWwtcGFyc2VyJ1xuXG5cdGNvbnN0IEZBSUxfQ09OVEVOVCA9ICc8cD7ojrflj5bkv6Hmga/lpLHotKUxPC9wPic7XG5cblx0ZnVuY3Rpb24gcGFyc2VJbWdzKG5vZGVzKSB7XG5cdFx0bm9kZXMuZm9yRWFjaChub2RlID0+IHtcblx0XHRcdGlmIChcblx0XHRcdFx0bm9kZS5uYW1lID09PSAnaW1nJyAmJlxuXHRcdFx0XHRub2RlLmF0dHJzICYmXG5cdFx0XHRcdG5vZGUuYXR0cnNbJ2RhdGEtaW1nLXNpemUtdmFsJ11cblx0XHRcdCkge1xuXHRcdFx0XHRjb25zdCBzaXplcyA9IG5vZGUuYXR0cnNbJ2RhdGEtaW1nLXNpemUtdmFsJ10uc3BsaXQoJywnKVxuXHRcdFx0XHRjb25zdCB3aWR0aCA9IHVuaS51cHgycHgoNzIwICogMC45KVxuXHRcdFx0XHRjb25zdCBoZWlnaHQgPSBwYXJzZUludCh3aWR0aCAqIChzaXplc1sxXSAvIHNpemVzWzBdKSlcblx0XHRcdFx0bm9kZS5hdHRycy5zdHlsZSA9IGB3aWR0aDoke3dpZHRofTtoZWlnaHQ6JHtoZWlnaHR9O2Bcblx0XHRcdH1cblx0XHRcdGlmIChBcnJheS5pc0FycmF5KG5vZGUuY2hpbGRyZW4pKSB7XG5cdFx0XHRcdHBhcnNlSW1ncyhub2RlLmNoaWxkcmVuKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIG5vZGVzXG5cdH1cblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGJhbm5lcjoge30sXG5cdFx0XHRcdGNvbnRlbnQ6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblNoYXJlQXBwTWVzc2FnZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHRpdGxlOiB0aGlzLmJhbm5lci50aXRsZSxcblx0XHRcdFx0cGF0aDogJy9wYWdlcy9kZXRhaWwvZGV0YWlsP3F1ZXJ5PScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmJhbm5lcilcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uTG9hZChldmVudCkge1xuXHRcdFx0Ly8g55uu5YmN5Zyo5p+Q5Lqb5bmz5Y+w5Y+C5pWw5Lya6KKr5Li75YqoIGRlY29kZe+8jOaaguaXtui/meagt+WkhOeQhuOAglxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5iYW5uZXIgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChldmVudC5xdWVyeSkpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dGhpcy5iYW5uZXIgPSBKU09OLnBhcnNlKGV2ZW50LnF1ZXJ5KTtcblx0XHRcdH1cblxuXHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG5cdFx0XHRcdHRpdGxlOiB0aGlzLmJhbm5lci50aXRsZVxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZ2V0RGV0YWlsKCk7XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRnZXREZXRhaWwoKSB7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHR1cmw6ICdodHRwczovL3VuaWRlbW8uZGNsb3VkLm5ldC5jbi9hcGkvbmV3cy8zNmtyLycgKyB0aGlzLmJhbm5lci5wb3N0X2lkLFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcblx0XHRcdFx0XHRcdGxldCBjb250ZW50ID0gRkFJTF9DT05URU5UXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LnN0YXR1c0NvZGUgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSByZXN1bHQuZGF0YS5jb250ZW50XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zdCBub2RlcyA9IGh0bWxQYXJzZXIoY29udGVudCk7XG5cdFx0XHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxuXHRcdFx0XHRcdFx0cGFyc2VJbWdzKG5vZGVzKVxuXHRcdFx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBub2Rlc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXG5cdHBhZ2Uge1xuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdH1cblxuXHQvKiAjZW5kaWYgKi9cblxuXHQuYmFubmVyIHtcblx0XHRoZWlnaHQ6IDM2MHVweDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2NjYztcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdH1cblxuXHQuYmFubmVyLWltZyB7XG5cdFx0ZmxleDogMTtcblx0fVxuXG5cdC50aXRsZS1hcmVhIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMzB1cHg7XG5cdFx0cmlnaHQ6IDMwdXB4O1xuXHRcdGJvdHRvbTogMzB1cHg7XG5cdFx0ei1pbmRleDogMTE7XG5cdH1cblxuXHQudGl0bGUtdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAzMnVweDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdGxpbmUtaGVpZ2h0OiA0MnVweDtcblx0XHRsaW5lczogMjtcblx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHR9XG5cblx0LmFydGljbGUtbWV0YSB7XG5cdFx0cGFkZGluZzogMjB1cHggMzB1cHg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0fVxuXG5cdC5hcnRpY2xlLW1ldGEtdGV4dCB7XG5cdFx0Y29sb3I6IGdyYXk7XG5cdH1cblxuXHQuYXJ0aWNsZS10ZXh0IHtcblx0XHRmb250LXNpemU6IDI2dXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA1MHVweDtcblx0XHRtYXJnaW46IDAgMjB1cHg7XG5cdH1cblxuXHQuYXJ0aWNsZS1hdXRob3Ige1xuXHRcdGZvbnQtc2l6ZTogMzB1cHg7XG5cdH1cblxuXHQuYXJ0aWNsZS10aW1lIHtcblx0XHRmb250LXNpemU6IDMwdXB4O1xuXHR9XG5cblx0LmFydGljbGUtY29udGVudCB7XG5cdFx0Zm9udC1zaXplOiAzMHVweDtcblx0XHRwYWRkaW5nOiAwIDMwdXB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDMwdXB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*************************************************************************!*\
  !*** /Users/fengyafei/yafei/projects/vue/ctb_uni/common/html-parser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; /*\n                                                                                                      * HTML5 Parser By Sam Blowes\n                                                                                                      *\n                                                                                                      * Designed for HTML5 documents\n                                                                                                      *\n                                                                                                      * Original code by John Resig (ejohn.org)\n                                                                                                      * http://ejohn.org/blog/pure-javascript-html-parser/\n                                                                                                      * Original code by Erik Arvidsson, Mozilla Public License\n                                                                                                      * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js\n                                                                                                      *\n                                                                                                      * ----------------------------------------------------------------------------\n                                                                                                      * License\n                                                                                                      * ----------------------------------------------------------------------------\n                                                                                                      *\n                                                                                                      * This code is triple licensed using Apache Software License 2.0,\n                                                                                                      * Mozilla Public License or GNU Public License\n                                                                                                      *\n                                                                                                      * ////////////////////////////////////////////////////////////////////////////\n                                                                                                      *\n                                                                                                      * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not\n                                                                                                      * use this file except in compliance with the License.  You may obtain a copy\n                                                                                                      * of the License at http://www.apache.org/licenses/LICENSE-2.0\n                                                                                                      *\n                                                                                                      * ////////////////////////////////////////////////////////////////////////////\n                                                                                                      *\n                                                                                                      * The contents of this file are subject to the Mozilla Public License\n                                                                                                      * Version 1.1 (the \"License\"); you may not use this file except in\n                                                                                                      * compliance with the License. You may obtain a copy of the License at\n                                                                                                      * http://www.mozilla.org/MPL/\n                                                                                                      *\n                                                                                                      * Software distributed under the License is distributed on an \"AS IS\"\n                                                                                                      * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the\n                                                                                                      * License for the specific language governing rights and limitations\n                                                                                                      * under the License.\n                                                                                                      *\n                                                                                                      * The Original Code is Simple HTML Parser.\n                                                                                                      *\n                                                                                                      * The Initial Developer of the Original Code is Erik Arvidsson.\n                                                                                                      * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights\n                                                                                                      * Reserved.\n                                                                                                      *\n                                                                                                      * ////////////////////////////////////////////////////////////////////////////\n                                                                                                      *\n                                                                                                      * This program is free software; you can redistribute it and/or\n                                                                                                      * modify it under the terms of the GNU General Public License\n                                                                                                      * as published by the Free Software Foundation; either version 2\n                                                                                                      * of the License, or (at your option) any later version.\n                                                                                                      *\n                                                                                                      * This program is distributed in the hope that it will be useful,\n                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of\n                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n                                                                                                      * GNU General Public License for more details.\n                                                                                                      *\n                                                                                                      * You should have received a copy of the GNU General Public License\n                                                                                                      * along with this program; if not, write to the Free Software\n                                                                                                      * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n                                                                                                      *\n                                                                                                      * ----------------------------------------------------------------------------\n                                                                                                      * Usage\n                                                                                                      * ----------------------------------------------------------------------------\n                                                                                                      *\n                                                                                                      * // Use like so:\n                                                                                                      * HTMLParser(htmlString, {\n                                                                                                      *     start: function(tag, attrs, unary) {},\n                                                                                                      *     end: function(tag) {},\n                                                                                                      *     chars: function(text) {},\n                                                                                                      *     comment: function(text) {}\n                                                                                                      * });\n                                                                                                      *\n                                                                                                      * // or to get an XML string:\n                                                                                                      * HTMLtoXML(htmlString);\n                                                                                                      *\n                                                                                                      * // or to get an XML DOM Document\n                                                                                                      * HTMLtoDOM(htmlString);\n                                                                                                      *\n                                                                                                      * // or to inject into an existing document/DOM node\n                                                                                                      * HTMLtoDOM(htmlString, document);\n                                                                                                      * HTMLtoDOM(htmlString, document.body);\n                                                                                                      *\n                                                                                                      */\n// Regular Expressions for parsing tags and attributes\nvar startTag = /^<([-A-Za-z0-9_]+)((?:\\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\\s*=\\s*(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>\\s]+))?)*)\\s*(\\/?)>/;\nvar endTag = /^<\\/([-A-Za-z0-9_]+)[^>]*>/;\nvar attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\\s*=\\s*(?:(?:\"((?:\\\\.|[^\"])*)\")|(?:'((?:\\\\.|[^'])*)')|([^>\\s]+)))?/g; // Empty Elements - HTML 5\n\nvar empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr'); // Block Elements - HTML 5\n// fixed by xxx 将 ins 标签从块级名单中移除\n\nvar block = makeMap('a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'); // Inline Elements - HTML 5\n\nvar inline = makeMap('abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'); // Elements that you can, intentionally, leave open\n// (and which close themselves)\n\nvar closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr'); // Attributes that have their values filled in disabled=\"disabled\"\n\nvar fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected'); // Special Elements (can contain anything)\n\nvar special = makeMap('script,style');\nfunction HTMLParser(html, handler) {\n  var index;\n  var chars;\n  var match;\n  var stack = [];\n  var last = html;\n\n  stack.last = function () {\n    return this[this.length - 1];\n  };\n\n  while (html) {\n    chars = true; // Make sure we're not in a script or style element\n\n    if (!stack.last() || !special[stack.last()]) {\n      // Comment\n      if (html.indexOf('<!--') == 0) {\n        index = html.indexOf('-->');\n\n        if (index >= 0) {\n          if (handler.comment) {\n            handler.comment(html.substring(4, index));\n          }\n\n          html = html.substring(index + 3);\n          chars = false;\n        } // end tag\n\n      } else if (html.indexOf('</') == 0) {\n        match = html.match(endTag);\n\n        if (match) {\n          html = html.substring(match[0].length);\n          match[0].replace(endTag, parseEndTag);\n          chars = false;\n        } // start tag\n\n      } else if (html.indexOf('<') == 0) {\n        match = html.match(startTag);\n\n        if (match) {\n          html = html.substring(match[0].length);\n          match[0].replace(startTag, parseStartTag);\n          chars = false;\n        }\n      }\n\n      if (chars) {\n        index = html.indexOf('<');\n        var text = index < 0 ? html : html.substring(0, index);\n        html = index < 0 ? '' : html.substring(index);\n\n        if (handler.chars) {\n          handler.chars(text);\n        }\n      }\n    } else {\n      html = html.replace(new RegExp('([\\\\s\\\\S]*?)<\\/' + stack.last() + '[^>]*>'), function (all, text) {\n        text = text.replace(/<!--([\\s\\S]*?)-->|<!\\[CDATA\\[([\\s\\S]*?)]]>/g, '$1$2');\n\n        if (handler.chars) {\n          handler.chars(text);\n        }\n\n        return '';\n      });\n      parseEndTag('', stack.last());\n    }\n\n    if (html == last) {\n      throw 'Parse Error: ' + html;\n    }\n\n    last = html;\n  } // Clean up any remaining tags\n\n\n  parseEndTag();\n\n  function parseStartTag(tag, tagName, rest, unary) {\n    tagName = tagName.toLowerCase();\n\n    if (block[tagName]) {\n      while (stack.last() && inline[stack.last()]) {\n        parseEndTag('', stack.last());\n      }\n    }\n\n    if (closeSelf[tagName] && stack.last() == tagName) {\n      parseEndTag('', tagName);\n    }\n\n    unary = empty[tagName] || !!unary;\n\n    if (!unary) {\n      stack.push(tagName);\n    }\n\n    if (handler.start) {\n      var attrs = [];\n      rest.replace(attr, function (match, name) {\n        var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : '';\n        attrs.push({\n          name: name,\n          value: value,\n          escaped: value.replace(/(^|[^\\\\])\"/g, '$1\\\\\\\"') // \"\n        });\n\n      });\n\n      if (handler.start) {\n        handler.start(tagName, attrs, unary);\n      }\n    }\n  }\n\n  function parseEndTag(tag, tagName) {\n    // If no tag name is provided, clean shop\n    if (!tagName) {\n      var pos = 0;\n    } // Find the closest opened tag of the same type\n    else {\n        for (var pos = stack.length - 1; pos >= 0; pos--) {\n          if (stack[pos] == tagName) {\n            break;\n          }\n        }\n      }\n\n    if (pos >= 0) {\n      // Close all the open elements, up the stack\n      for (var i = stack.length - 1; i >= pos; i--) {\n        if (handler.end) {\n          handler.end(stack[i]);\n        }\n      } // Remove the open elements from the stack\n\n\n      stack.length = pos;\n    }\n  }\n}\n\nfunction makeMap(str) {\n  var obj = {};\n  var items = str.split(',');\n\n  for (var i = 0; i < items.length; i++) {\n    obj[items[i]] = true;\n  }\n\n  return obj;\n}\n\nfunction removeDOCTYPE(html) {\n  return html.replace(/<\\?xml.*\\?>\\n/, '').replace(/<!doctype.*>\\n/, '').replace(/<!DOCTYPE.*>\\n/, '');\n}\n\nfunction parseAttrs(attrs) {\n  return attrs.reduce(function (pre, attr) {\n    var value = attr.value;\n    var name = attr.name;\n\n    if (pre[name]) {\n      pre[name] = pre[name] + \" \" + value;\n    } else {\n      pre[name] = value;\n    }\n\n    return pre;\n  }, {});\n}\n\nfunction parseHtml(html) {\n  html = removeDOCTYPE(html);\n  var stacks = [];\n  var results = {\n    node: 'root',\n    children: [] };\n\n  HTMLParser(html, {\n    start: function start(tag, attrs, unary) {\n      var node = {\n        name: tag };\n\n\n      if (attrs.length !== 0) {\n        node.attrs = parseAttrs(attrs);\n      }\n\n      if (unary) {\n        var parent = stacks[0] || results;\n\n        if (!parent.children) {\n          parent.children = [];\n        }\n\n        parent.children.push(node);\n      } else {\n        stacks.unshift(node);\n      }\n    },\n    end: function end(tag) {\n      var node = stacks.shift();\n      if (node.name !== tag) __f__(\"error\", 'invalid state: mismatch end tag', \" at common/html-parser.js:303\");\n\n      if (stacks.length === 0) {\n        results.children.push(node);\n      } else {\n        var parent = stacks[0];\n\n        if (!parent.children) {\n          parent.children = [];\n        }\n\n        parent.children.push(node);\n      }\n    },\n    chars: function chars(text) {\n      var node = {\n        type: 'text',\n        text: text };\n\n\n      if (stacks.length === 0) {\n        results.children.push(node);\n      } else {\n        var parent = stacks[0];\n\n        if (!parent.children) {\n          parent.children = [];\n        }\n\n        parent.children.push(node);\n      }\n    },\n    comment: function comment(text) {\n      var node = {\n        node: 'comment',\n        text: text };\n\n      var parent = stacks[0];\n\n      if (!parent.children) {\n        parent.children = [];\n      }\n\n      parent.children.push(node);\n    } });\n\n  return results.children;\n}var _default =\n\nparseHtml;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2h0bWwtcGFyc2VyLmpzIl0sIm5hbWVzIjpbInN0YXJ0VGFnIiwiZW5kVGFnIiwiYXR0ciIsImVtcHR5IiwibWFrZU1hcCIsImJsb2NrIiwiaW5saW5lIiwiY2xvc2VTZWxmIiwiZmlsbEF0dHJzIiwic3BlY2lhbCIsIkhUTUxQYXJzZXIiLCJodG1sIiwiaGFuZGxlciIsImluZGV4IiwiY2hhcnMiLCJtYXRjaCIsInN0YWNrIiwibGFzdCIsImxlbmd0aCIsImluZGV4T2YiLCJjb21tZW50Iiwic3Vic3RyaW5nIiwicmVwbGFjZSIsInBhcnNlRW5kVGFnIiwicGFyc2VTdGFydFRhZyIsInRleHQiLCJSZWdFeHAiLCJhbGwiLCJ0YWciLCJ0YWdOYW1lIiwicmVzdCIsInVuYXJ5IiwidG9Mb3dlckNhc2UiLCJwdXNoIiwic3RhcnQiLCJhdHRycyIsIm5hbWUiLCJ2YWx1ZSIsImFyZ3VtZW50cyIsImVzY2FwZWQiLCJwb3MiLCJpIiwiZW5kIiwic3RyIiwib2JqIiwiaXRlbXMiLCJzcGxpdCIsInJlbW92ZURPQ1RZUEUiLCJwYXJzZUF0dHJzIiwicmVkdWNlIiwicHJlIiwicGFyc2VIdG1sIiwic3RhY2tzIiwicmVzdWx0cyIsIm5vZGUiLCJjaGlsZHJlbiIsInBhcmVudCIsInVuc2hpZnQiLCJzaGlmdCIsInR5cGUiXSwibWFwcGluZ3MiOiJxSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRkE7QUFDQSxJQUFJQSxRQUFRLEdBQUcsZ0hBQWY7QUFDQSxJQUFJQyxNQUFNLEdBQUcsNEJBQWI7QUFDQSxJQUFJQyxJQUFJLEdBQUcsb0dBQVgsQyxDQUFpSDs7QUFFakgsSUFBSUMsS0FBSyxHQUFHQyxPQUFPLENBQUMsb0dBQUQsQ0FBbkIsQyxDQUEySDtBQUMzSDs7QUFFQSxJQUFJQyxLQUFLLEdBQUdELE9BQU8sQ0FBQywy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QUMxQixVQUFJNkIsSUFBSSxHQUFHO0FBQ1RLLFlBQUksRUFBRSxNQURHO0FBRVRsQyxZQUFJLEVBQUVBLElBRkcsRUFBWDs7O0FBS0EsVUFBSTJCLE1BQU0sQ0FBQ2xDLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkJtQyxlQUFPLENBQUNFLFFBQVIsQ0FBaUJ0QixJQUFqQixDQUFzQnFCLElBQXRCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSUUsTUFBTSxHQUFHSixNQUFNLENBQUMsQ0FBRCxDQUFuQjs7QUFFQSxZQUFJLENBQUNJLE1BQU0sQ0FBQ0QsUUFBWixFQUFzQjtBQUNwQkMsZ0JBQU0sQ0FBQ0QsUUFBUCxHQUFrQixFQUFsQjtBQUNEOztBQUVEQyxjQUFNLENBQUNELFFBQVAsQ0FBZ0J0QixJQUFoQixDQUFxQnFCLElBQXJCO0FBQ0Q7QUFDRixLQXZEYztBQXdEZmxDLFdBQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCSyxJQUFqQixFQUF1QjtBQUM5QixVQUFJNkIsSUFBSSxHQUFHO0FBQ1RBLFlBQUksRUFBRSxTQURHO0FBRVQ3QixZQUFJLEVBQUVBLElBRkcsRUFBWDs7QUFJQSxVQUFJK0IsTUFBTSxHQUFHSixNQUFNLENBQUMsQ0FBRCxDQUFuQjs7QUFFQSxVQUFJLENBQUNJLE1BQU0sQ0FBQ0QsUUFBWixFQUFzQjtBQUNwQkMsY0FBTSxDQUFDRCxRQUFQLEdBQWtCLEVBQWxCO0FBQ0Q7O0FBRURDLFlBQU0sQ0FBQ0QsUUFBUCxDQUFnQnRCLElBQWhCLENBQXFCcUIsSUFBckI7QUFDRCxLQXBFYyxFQUFQLENBQVY7O0FBc0VBLFNBQU9ELE9BQU8sQ0FBQ0UsUUFBZjtBQUNELEM7O0FBRWNKLFMiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogSFRNTDUgUGFyc2VyIEJ5IFNhbSBCbG93ZXNcbiAqXG4gKiBEZXNpZ25lZCBmb3IgSFRNTDUgZG9jdW1lbnRzXG4gKlxuICogT3JpZ2luYWwgY29kZSBieSBKb2huIFJlc2lnIChlam9obi5vcmcpXG4gKiBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvcHVyZS1qYXZhc2NyaXB0LWh0bWwtcGFyc2VyL1xuICogT3JpZ2luYWwgY29kZSBieSBFcmlrIEFydmlkc3NvbiwgTW96aWxsYSBQdWJsaWMgTGljZW5zZVxuICogaHR0cDovL2VyaWsuZWFlLm5ldC9zaW1wbGVodG1scGFyc2VyL3NpbXBsZWh0bWxwYXJzZXIuanNcbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBMaWNlbnNlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogVGhpcyBjb2RlIGlzIHRyaXBsZSBsaWNlbnNlZCB1c2luZyBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjAsXG4gKiBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlIG9yIEdOVSBQdWJsaWMgTGljZW5zZVxuICpcbiAqIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdFxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gKlxuICogVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgc3ViamVjdCB0byB0aGUgTW96aWxsYSBQdWJsaWMgTGljZW5zZVxuICogVmVyc2lvbiAxLjEgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluXG4gKiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICogaHR0cDovL3d3dy5tb3ppbGxhLm9yZy9NUEwvXG4gKlxuICogU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiXG4gKiBiYXNpcywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZVxuICogTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiBUaGUgT3JpZ2luYWwgQ29kZSBpcyBTaW1wbGUgSFRNTCBQYXJzZXIuXG4gKlxuICogVGhlIEluaXRpYWwgRGV2ZWxvcGVyIG9mIHRoZSBPcmlnaW5hbCBDb2RlIGlzIEVyaWsgQXJ2aWRzc29uLlxuICogUG9ydGlvbnMgY3JlYXRlZCBieSBFcmlrIEFydmlkc3Nzb24gYXJlIENvcHlyaWdodCAoQykgMjAwNC4gQWxsIFJpZ2h0c1xuICogUmVzZXJ2ZWQuXG4gKlxuICogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMlxuICogb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW07IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmVcbiAqIEZvdW5kYXRpb24sIEluYy4sIDUxIEZyYW5rbGluIFN0cmVldCwgRmlmdGggRmxvb3IsIEJvc3RvbiwgTUEgIDAyMTEwLTEzMDEsIFVTQS5cbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBVc2FnZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIC8vIFVzZSBsaWtlIHNvOlxuICogSFRNTFBhcnNlcihodG1sU3RyaW5nLCB7XG4gKiAgICAgc3RhcnQ6IGZ1bmN0aW9uKHRhZywgYXR0cnMsIHVuYXJ5KSB7fSxcbiAqICAgICBlbmQ6IGZ1bmN0aW9uKHRhZykge30sXG4gKiAgICAgY2hhcnM6IGZ1bmN0aW9uKHRleHQpIHt9LFxuICogICAgIGNvbW1lbnQ6IGZ1bmN0aW9uKHRleHQpIHt9XG4gKiB9KTtcbiAqXG4gKiAvLyBvciB0byBnZXQgYW4gWE1MIHN0cmluZzpcbiAqIEhUTUx0b1hNTChodG1sU3RyaW5nKTtcbiAqXG4gKiAvLyBvciB0byBnZXQgYW4gWE1MIERPTSBEb2N1bWVudFxuICogSFRNTHRvRE9NKGh0bWxTdHJpbmcpO1xuICpcbiAqIC8vIG9yIHRvIGluamVjdCBpbnRvIGFuIGV4aXN0aW5nIGRvY3VtZW50L0RPTSBub2RlXG4gKiBIVE1MdG9ET00oaHRtbFN0cmluZywgZG9jdW1lbnQpO1xuICogSFRNTHRvRE9NKGh0bWxTdHJpbmcsIGRvY3VtZW50LmJvZHkpO1xuICpcbiAqL1xuLy8gUmVndWxhciBFeHByZXNzaW9ucyBmb3IgcGFyc2luZyB0YWdzIGFuZCBhdHRyaWJ1dGVzXG52YXIgc3RhcnRUYWcgPSAvXjwoWy1BLVphLXowLTlfXSspKCg/OlxccytbYS16QS1aXzpdWy1hLXpBLVowLTlfOi5dKig/Olxccyo9XFxzKig/Oig/OlwiW15cIl0qXCIpfCg/OidbXiddKicpfFtePlxcc10rKSk/KSopXFxzKihcXC8/KT4vO1xudmFyIGVuZFRhZyA9IC9ePFxcLyhbLUEtWmEtejAtOV9dKylbXj5dKj4vO1xudmFyIGF0dHIgPSAvKFthLXpBLVpfOl1bLWEtekEtWjAtOV86Ll0qKSg/Olxccyo9XFxzKig/Oig/OlwiKCg/OlxcXFwufFteXCJdKSopXCIpfCg/OicoKD86XFxcXC58W14nXSkqKScpfChbXj5cXHNdKykpKT8vZzsgLy8gRW1wdHkgRWxlbWVudHMgLSBIVE1MIDVcblxudmFyIGVtcHR5ID0gbWFrZU1hcCgnYXJlYSxiYXNlLGJhc2Vmb250LGJyLGNvbCxmcmFtZSxocixpbWcsaW5wdXQsbGluayxtZXRhLHBhcmFtLGVtYmVkLGNvbW1hbmQsa2V5Z2VuLHNvdXJjZSx0cmFjayx3YnInKTsgLy8gQmxvY2sgRWxlbWVudHMgLSBIVE1MIDVcbi8vIGZpeGVkIGJ5IHh4eCDlsIYgaW5zIOagh+etvuS7juWdl+e6p+WQjeWNleS4reenu+mZpFxuXG52YXIgYmxvY2sgPSBtYWtlTWFwKCdhLGFkZHJlc3MsYXJ0aWNsZSxhcHBsZXQsYXNpZGUsYXVkaW8sYmxvY2txdW90ZSxidXR0b24sY2FudmFzLGNlbnRlcixkZCxkZWwsZGlyLGRpdixkbCxkdCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxmcmFtZXNldCxoMSxoMixoMyxoNCxoNSxoNixoZWFkZXIsaGdyb3VwLGhyLGlmcmFtZSxpc2luZGV4LGxpLG1hcCxtZW51LG5vZnJhbWVzLG5vc2NyaXB0LG9iamVjdCxvbCxvdXRwdXQscCxwcmUsc2VjdGlvbixzY3JpcHQsdGFibGUsdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdHIsdWwsdmlkZW8nKTsgLy8gSW5saW5lIEVsZW1lbnRzIC0gSFRNTCA1XG5cbnZhciBpbmxpbmUgPSBtYWtlTWFwKCdhYmJyLGFjcm9ueW0sYXBwbGV0LGIsYmFzZWZvbnQsYmRvLGJpZyxicixidXR0b24sY2l0ZSxjb2RlLGRlbCxkZm4sZW0sZm9udCxpLGlmcmFtZSxpbWcsaW5wdXQsaW5zLGtiZCxsYWJlbCxtYXAsb2JqZWN0LHEscyxzYW1wLHNjcmlwdCxzZWxlY3Qsc21hbGwsc3BhbixzdHJpa2Usc3Ryb25nLHN1YixzdXAsdGV4dGFyZWEsdHQsdSx2YXInKTsgLy8gRWxlbWVudHMgdGhhdCB5b3UgY2FuLCBpbnRlbnRpb25hbGx5LCBsZWF2ZSBvcGVuXG4vLyAoYW5kIHdoaWNoIGNsb3NlIHRoZW1zZWx2ZXMpXG5cbnZhciBjbG9zZVNlbGYgPSBtYWtlTWFwKCdjb2xncm91cCxkZCxkdCxsaSxvcHRpb25zLHAsdGQsdGZvb3QsdGgsdGhlYWQsdHInKTsgLy8gQXR0cmlidXRlcyB0aGF0IGhhdmUgdGhlaXIgdmFsdWVzIGZpbGxlZCBpbiBkaXNhYmxlZD1cImRpc2FibGVkXCJcblxudmFyIGZpbGxBdHRycyA9IG1ha2VNYXAoJ2NoZWNrZWQsY29tcGFjdCxkZWNsYXJlLGRlZmVyLGRpc2FibGVkLGlzbWFwLG11bHRpcGxlLG5vaHJlZixub3Jlc2l6ZSxub3NoYWRlLG5vd3JhcCxyZWFkb25seSxzZWxlY3RlZCcpOyAvLyBTcGVjaWFsIEVsZW1lbnRzIChjYW4gY29udGFpbiBhbnl0aGluZylcblxudmFyIHNwZWNpYWwgPSBtYWtlTWFwKCdzY3JpcHQsc3R5bGUnKTtcbmZ1bmN0aW9uIEhUTUxQYXJzZXIoaHRtbCwgaGFuZGxlcikge1xuICB2YXIgaW5kZXg7XG4gIHZhciBjaGFycztcbiAgdmFyIG1hdGNoO1xuICB2YXIgc3RhY2sgPSBbXTtcbiAgdmFyIGxhc3QgPSBodG1sO1xuXG4gIHN0YWNrLmxhc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgfTtcblxuICB3aGlsZSAoaHRtbCkge1xuICAgIGNoYXJzID0gdHJ1ZTsgLy8gTWFrZSBzdXJlIHdlJ3JlIG5vdCBpbiBhIHNjcmlwdCBvciBzdHlsZSBlbGVtZW50XG5cbiAgICBpZiAoIXN0YWNrLmxhc3QoKSB8fCAhc3BlY2lhbFtzdGFjay5sYXN0KCldKSB7XG4gICAgICAvLyBDb21tZW50XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8IS0tJykgPT0gMCkge1xuICAgICAgICBpbmRleCA9IGh0bWwuaW5kZXhPZignLS0+Jyk7XG5cbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBpZiAoaGFuZGxlci5jb21tZW50KSB7XG4gICAgICAgICAgICBoYW5kbGVyLmNvbW1lbnQoaHRtbC5zdWJzdHJpbmcoNCwgaW5kZXgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBodG1sID0gaHRtbC5zdWJzdHJpbmcoaW5kZXggKyAzKTtcbiAgICAgICAgICBjaGFycyA9IGZhbHNlO1xuICAgICAgICB9IC8vIGVuZCB0YWdcblxuICAgICAgfSBlbHNlIGlmIChodG1sLmluZGV4T2YoJzwvJykgPT0gMCkge1xuICAgICAgICBtYXRjaCA9IGh0bWwubWF0Y2goZW5kVGFnKTtcblxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICBodG1sID0gaHRtbC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgICBtYXRjaFswXS5yZXBsYWNlKGVuZFRhZywgcGFyc2VFbmRUYWcpO1xuICAgICAgICAgIGNoYXJzID0gZmFsc2U7XG4gICAgICAgIH0gLy8gc3RhcnQgdGFnXG5cbiAgICAgIH0gZWxzZSBpZiAoaHRtbC5pbmRleE9mKCc8JykgPT0gMCkge1xuICAgICAgICBtYXRjaCA9IGh0bWwubWF0Y2goc3RhcnRUYWcpO1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIGh0bWwgPSBodG1sLnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgIG1hdGNoWzBdLnJlcGxhY2Uoc3RhcnRUYWcsIHBhcnNlU3RhcnRUYWcpO1xuICAgICAgICAgIGNoYXJzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJzKSB7XG4gICAgICAgIGluZGV4ID0gaHRtbC5pbmRleE9mKCc8Jyk7XG4gICAgICAgIHZhciB0ZXh0ID0gaW5kZXggPCAwID8gaHRtbCA6IGh0bWwuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgaHRtbCA9IGluZGV4IDwgMCA/ICcnIDogaHRtbC5zdWJzdHJpbmcoaW5kZXgpO1xuXG4gICAgICAgIGlmIChoYW5kbGVyLmNoYXJzKSB7XG4gICAgICAgICAgaGFuZGxlci5jaGFycyh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gaHRtbC5yZXBsYWNlKG5ldyBSZWdFeHAoJyhbXFxcXHNcXFxcU10qPyk8XFwvJyArIHN0YWNrLmxhc3QoKSArICdbXj5dKj4nKSwgZnVuY3Rpb24gKGFsbCwgdGV4dCkge1xuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88IS0tKFtcXHNcXFNdKj8pLS0+fDwhXFxbQ0RBVEFcXFsoW1xcc1xcU10qPyldXT4vZywgJyQxJDInKTtcblxuICAgICAgICBpZiAoaGFuZGxlci5jaGFycykge1xuICAgICAgICAgIGhhbmRsZXIuY2hhcnModGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KTtcbiAgICAgIHBhcnNlRW5kVGFnKCcnLCBzdGFjay5sYXN0KCkpO1xuICAgIH1cblxuICAgIGlmIChodG1sID09IGxhc3QpIHtcbiAgICAgIHRocm93ICdQYXJzZSBFcnJvcjogJyArIGh0bWw7XG4gICAgfVxuXG4gICAgbGFzdCA9IGh0bWw7XG4gIH0gLy8gQ2xlYW4gdXAgYW55IHJlbWFpbmluZyB0YWdzXG5cblxuICBwYXJzZUVuZFRhZygpO1xuXG4gIGZ1bmN0aW9uIHBhcnNlU3RhcnRUYWcodGFnLCB0YWdOYW1lLCByZXN0LCB1bmFyeSkge1xuICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAoYmxvY2tbdGFnTmFtZV0pIHtcbiAgICAgIHdoaWxlIChzdGFjay5sYXN0KCkgJiYgaW5saW5lW3N0YWNrLmxhc3QoKV0pIHtcbiAgICAgICAgcGFyc2VFbmRUYWcoJycsIHN0YWNrLmxhc3QoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlU2VsZlt0YWdOYW1lXSAmJiBzdGFjay5sYXN0KCkgPT0gdGFnTmFtZSkge1xuICAgICAgcGFyc2VFbmRUYWcoJycsIHRhZ05hbWUpO1xuICAgIH1cblxuICAgIHVuYXJ5ID0gZW1wdHlbdGFnTmFtZV0gfHwgISF1bmFyeTtcblxuICAgIGlmICghdW5hcnkpIHtcbiAgICAgIHN0YWNrLnB1c2godGFnTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGhhbmRsZXIuc3RhcnQpIHtcbiAgICAgIHZhciBhdHRycyA9IFtdO1xuICAgICAgcmVzdC5yZXBsYWNlKGF0dHIsIGZ1bmN0aW9uIChtYXRjaCwgbmFtZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiBhcmd1bWVudHNbM10gPyBhcmd1bWVudHNbM10gOiBhcmd1bWVudHNbNF0gPyBhcmd1bWVudHNbNF0gOiBmaWxsQXR0cnNbbmFtZV0gPyBuYW1lIDogJyc7XG4gICAgICAgIGF0dHJzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGVzY2FwZWQ6IHZhbHVlLnJlcGxhY2UoLyhefFteXFxcXF0pXCIvZywgJyQxXFxcXFxcXCInKSAvLyBcIlxuXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYW5kbGVyLnN0YXJ0KSB7XG4gICAgICAgIGhhbmRsZXIuc3RhcnQodGFnTmFtZSwgYXR0cnMsIHVuYXJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUVuZFRhZyh0YWcsIHRhZ05hbWUpIHtcbiAgICAvLyBJZiBubyB0YWcgbmFtZSBpcyBwcm92aWRlZCwgY2xlYW4gc2hvcFxuICAgIGlmICghdGFnTmFtZSkge1xuICAgICAgdmFyIHBvcyA9IDA7XG4gICAgfSAvLyBGaW5kIHRoZSBjbG9zZXN0IG9wZW5lZCB0YWcgb2YgdGhlIHNhbWUgdHlwZVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBwb3MgPSBzdGFjay5sZW5ndGggLSAxOyBwb3MgPj0gMDsgcG9zLS0pIHtcbiAgICAgICAgICBpZiAoc3RhY2tbcG9zXSA9PSB0YWdOYW1lKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGlmIChwb3MgPj0gMCkge1xuICAgICAgLy8gQ2xvc2UgYWxsIHRoZSBvcGVuIGVsZW1lbnRzLCB1cCB0aGUgc3RhY2tcbiAgICAgIGZvciAodmFyIGkgPSBzdGFjay5sZW5ndGggLSAxOyBpID49IHBvczsgaS0tKSB7XG4gICAgICAgIGlmIChoYW5kbGVyLmVuZCkge1xuICAgICAgICAgIGhhbmRsZXIuZW5kKHN0YWNrW2ldKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBSZW1vdmUgdGhlIG9wZW4gZWxlbWVudHMgZnJvbSB0aGUgc3RhY2tcblxuXG4gICAgICBzdGFjay5sZW5ndGggPSBwb3M7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VNYXAoc3RyKSB7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIGl0ZW1zID0gc3RyLnNwbGl0KCcsJyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIG9ialtpdGVtc1tpXV0gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRE9DVFlQRShodG1sKSB7XG4gIHJldHVybiBodG1sLnJlcGxhY2UoLzxcXD94bWwuKlxcPz5cXG4vLCAnJykucmVwbGFjZSgvPCFkb2N0eXBlLio+XFxuLywgJycpLnJlcGxhY2UoLzwhRE9DVFlQRS4qPlxcbi8sICcnKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VBdHRycyhhdHRycykge1xuICByZXR1cm4gYXR0cnMucmVkdWNlKGZ1bmN0aW9uIChwcmUsIGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgIHZhciBuYW1lID0gYXR0ci5uYW1lO1xuXG4gICAgaWYgKHByZVtuYW1lXSkge1xuXHRcdFx0cHJlW25hbWVdID0gcHJlW25hbWVdICsgXCIgXCIgKyB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuXHRcdFx0cHJlW25hbWVdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZTtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBwYXJzZUh0bWwoaHRtbCkge1xuICBodG1sID0gcmVtb3ZlRE9DVFlQRShodG1sKTtcbiAgdmFyIHN0YWNrcyA9IFtdO1xuICB2YXIgcmVzdWx0cyA9IHtcbiAgICBub2RlOiAncm9vdCcsXG4gICAgY2hpbGRyZW46IFtdXG4gIH07XG4gIEhUTUxQYXJzZXIoaHRtbCwge1xuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCh0YWcsIGF0dHJzLCB1bmFyeSkge1xuICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgIG5hbWU6IHRhZ1xuICAgICAgfTtcblxuICAgICAgaWYgKGF0dHJzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBub2RlLmF0dHJzID0gcGFyc2VBdHRycyhhdHRycyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmFyeSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gc3RhY2tzWzBdIHx8IHJlc3VsdHM7XG5cbiAgICAgICAgaWYgKCFwYXJlbnQuY2hpbGRyZW4pIHtcbiAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2tzLnVuc2hpZnQobm9kZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmQ6IGZ1bmN0aW9uIGVuZCh0YWcpIHtcbiAgICAgIHZhciBub2RlID0gc3RhY2tzLnNoaWZ0KCk7XG4gICAgICBpZiAobm9kZS5uYW1lICE9PSB0YWcpIGNvbnNvbGUuZXJyb3IoJ2ludmFsaWQgc3RhdGU6IG1pc21hdGNoIGVuZCB0YWcnKTtcblxuICAgICAgaWYgKHN0YWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVzdWx0cy5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHN0YWNrc1swXTtcblxuICAgICAgICBpZiAoIXBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGFyczogZnVuY3Rpb24gY2hhcnModGV4dCkge1xuICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgdGV4dDogdGV4dFxuICAgICAgfTtcblxuICAgICAgaWYgKHN0YWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVzdWx0cy5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHN0YWNrc1swXTtcblxuICAgICAgICBpZiAoIXBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21tZW50OiBmdW5jdGlvbiBjb21tZW50KHRleHQpIHtcbiAgICAgIHZhciBub2RlID0ge1xuICAgICAgICBub2RlOiAnY29tbWVudCcsXG4gICAgICAgIHRleHQ6IHRleHRcbiAgICAgIH07XG4gICAgICB2YXIgcGFyZW50ID0gc3RhY2tzWzBdO1xuXG4gICAgICBpZiAoIXBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSBbXTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdHMuY2hpbGRyZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlSHRtbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 15 */
/*!************************************************************************************************************************!*\
  !*** /Users/fengyafei/yafei/projects/vue/ctb_uni/pages/detail/detail.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 16);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/fengyafei/yafei/projects/vue/ctb_uni/pages/detail/detail.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "banner": {
    "height": "360upx",
    "position": "relative",
    "backgroundColor": "#cccccc",
    "flexDirection": "row",
    "overflow": "hidden"
  },
  "banner-img": {
    "flex": 1
  },
  "title-area": {
    "position": "absolute",
    "left": "30upx",
    "right": "30upx",
    "bottom": "30upx",
    "zIndex": 11
  },
  "title-text": {
    "fontSize": "32upx",
    "fontWeight": "400",
    "lineHeight": "42upx",
    "lines": 2,
    "color": "#ffffff",
    "overflow": "hidden"
  },
  "article-meta": {
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": "20upx",
    "paddingLeft": "30upx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "article-meta-text": {
    "color": "#808080"
  },
  "article-text": {
    "fontSize": "26upx",
    "lineHeight": "50upx",
    "marginTop": 0,
    "marginRight": "20upx",
    "marginBottom": 0,
    "marginLeft": "20upx"
  },
  "article-author": {
    "fontSize": "30upx"
  },
  "article-time": {
    "fontSize": "30upx"
  },
  "article-content": {
    "fontSize": "30upx",
    "paddingTop": 0,
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx",
    "marginBottom": "30upx",
    "overflow": "hidden"
  }
}

/***/ }),
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);