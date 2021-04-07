import { Component, Host, h } from '@stencil/core';
export class DemoShadowOff {
  render() {
    return (h(Host, null,
      h("h2", null, "H2 - Shadow DOM off")));
  }
  static get is() { return "demo-shadow-off"; }
  static get originalStyleUrls() { return {
    "$": ["demo-shadow-off.css"]
  }; }
  static get styleUrls() { return {
    "$": ["demo-shadow-off.css"]
  }; }
}
