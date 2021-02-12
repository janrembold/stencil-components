import { Component, Host, h, State, Listen } from '@stencil/core';
export class DemoState {
  constructor() {
    this.count = 0;
  }
  handleClick() {
    this.count++;
  }
  render() {
    return (h(Host, null,
      h("button", null,
        "Clicked me ",
        this.count,
        " times")));
  }
  static get is() { return "demo-state"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["demo-state.css"]
  }; }
  static get styleUrls() { return {
    "$": ["demo-state.css"]
  }; }
  static get states() { return {
    "count": {}
  }; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
