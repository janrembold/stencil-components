'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4018198c.js');

const demoContainerCss = ":host{display:block;padding:20px;border:2px solid lightcoral}";

const DemoContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
DemoContainer.style = demoContainerCss;

exports.demo_container = DemoContainer;
