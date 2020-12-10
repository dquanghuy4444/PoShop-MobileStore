"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var BuyNow = function BuyNow(id, history) {
  var listId = window.sessionStorage.getItem('id');

  if (!listId) {
    window.sessionStorage.setItem('id', [id]);
  }

  if (history) {
    history.push('/cart');
  }
};

var _default = BuyNow;
exports["default"] = _default;