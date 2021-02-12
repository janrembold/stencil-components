import { Component, Host, h, Prop } from '@stencil/core';
export class DemoProps {
  constructor() {
    /**
     * An array of strings
     */
    this.stringArray = [];
  }
  render() {
    return (h(Host, null,
      h("h5", null, "List of strings"),
      h("p", null, this.simpleObject.foo || 'undefined'),
      this.simpleObject.bar && h("p", null, "Bar is true"),
      h("ul", null, this.stringArray.map(str => (h("li", null, str))))));
  }
  static get is() { return "demo-props"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["demo-props.css"]
  }; }
  static get styleUrls() { return {
    "$": ["demo-props.css"]
  }; }
  static get properties() { return {
    "stringArray": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "An array of strings"
      },
      "defaultValue": "[]"
    },
    "simpleObject": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "IDemoObject",
        "resolved": "IDemoObject",
        "references": {
          "IDemoObject": {
            "location": "local"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A simple IDemoObject object"
      }
    }
  }; }
}
