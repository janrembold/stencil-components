'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4018198c.js');

const demoShadowOffCss = ":host{display:block}h2{color:var(--theme-h2-color, lime)}";

const DemoShadowOff = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("h2", null, "H2 - Shadow DOM off")));
  }
};
DemoShadowOff.style = demoShadowOffCss;

exports.demo_shadow_off = DemoShadowOff;
