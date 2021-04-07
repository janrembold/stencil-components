'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4018198c.js');

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

exports.demo_props = DemoProps;
