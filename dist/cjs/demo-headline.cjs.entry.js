'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4018198c.js');

const demoHeadlineCss = ":host{display:block}h2{font-family:Stencil, Arial;color:var(--theme-h2-color)}";

const DemoHeadline = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("h2", null, this.headline)));
  }
};
DemoHeadline.style = demoHeadlineCss;

exports.demo_headline = DemoHeadline;
