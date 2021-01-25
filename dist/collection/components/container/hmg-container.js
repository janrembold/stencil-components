import { Component, h } from '@stencil/core';
export class Container {
  render() {
    return h("div", { class: "container" },
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
