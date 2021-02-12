import { Component, Host, h, Prop } from '@stencil/core';
export class DemoHeadline {
  render() {
    return (h(Host, null,
      h("h2", null, this.headline)));
  }
  static get is() { return "demo-headline"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["demo-headline.css"]
  }; }
  static get styleUrls() { return {
    "$": ["demo-headline.css"]
  }; }
  static get properties() { return {
    "headline": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The headline text"
      },
      "attribute": "headline",
      "reflect": false
    }
  }; }
}
