'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5de7c5f9.js');

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

const demoPropsCss = ":host{display:block}";

const DemoProps = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * An array of strings
     */
    this.stringArray = [];
  }
  render() {
    return (index.h(index.Host, null, index.h("h5", null, "List of strings"), index.h("p", null, this.simpleObject.foo || 'undefined'), this.simpleObject.bar && index.h("p", null, "Bar is true"), index.h("ul", null, this.stringArray.map(str => (index.h("li", null, str))))));
  }
};
DemoProps.style = demoPropsCss;

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

exports.demo_container = DemoContainer;
exports.demo_headline = DemoHeadline;
exports.demo_props = DemoProps;
exports.demo_state = DemoState;
