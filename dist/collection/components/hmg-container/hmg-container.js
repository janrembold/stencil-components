import { Component, h, Host } from '@stencil/core';
export class HmgContainer {
  render() {
    return h(Host, null,
      h("slot", null));
  }
  static get is() { return "hmg-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hmg-container.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["hmg-container.css"]
  }; }
}
