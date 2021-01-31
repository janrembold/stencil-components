'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5eb4963.js');

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}.foo-bar{color:red}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (index.h("div", null, "Hellooooo, ", index.h("span", { class: "foo-bar" }, "World"), "! I'm ", this.getText()));
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
