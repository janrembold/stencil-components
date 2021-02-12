import { Component, Host, h } from '@stencil/core';
export class DemoContainer {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "demo-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["demo-container.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["demo-container.css"]
  }; }
}
