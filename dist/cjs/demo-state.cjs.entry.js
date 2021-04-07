'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4018198c.js');

const demoStateCss = ":host{display:block}";

const DemoState = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.count = 0;
  }
  handleClick() {
    this.count++;
  }
  render() {
    return (index.h(index.Host, null, index.h("button", null, "Clicked me ", this.count, " times")));
  }
};
DemoState.style = demoStateCss;

exports.demo_state = DemoState;
