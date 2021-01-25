'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-10fe2e0b.js');

const hmgContainerCss = ":root{padding:20px;background-color:var(--theme-background-color);border:1px solid red}.container{padding:30px;background-color:var(--theme-background-color);border:1px solid blue}";

const Container = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("div", { class: "container" }, index.h("slot", null));
  }
};
Container.style = hmgContainerCss;

exports.hmg_container = Container;
