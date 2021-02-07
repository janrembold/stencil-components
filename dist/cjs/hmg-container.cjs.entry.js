'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-de899a8a.js');

const hmgContainerCss = ":host{display:block;padding:20px;background-color:var(--theme-background-color, pink);border:1px solid red}";

const HmgContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h(index.Host, null, index.h("slot", null));
  }
};
HmgContainer.style = hmgContainerCss;

exports.hmg_container = HmgContainer;
