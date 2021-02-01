import { Component, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils/utils';
/**
 * MyComponent Desc
 */
export class MyComponent {
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h(Host, null,
      "Hellooooo, ",
      h("span", { class: "foo-bar" }, "World"),
      "! I'm ",
      this.getText());
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get properties() { return {
    "first": {
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
        "text": "The first name"
      },
      "attribute": "first",
      "reflect": false
    },
    "middle": {
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
        "text": "The middle name"
      },
      "attribute": "middle",
      "reflect": false
    },
    "last": {
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
        "text": "The last name"
      },
      "attribute": "last",
      "reflect": false
    }
  }; }
}
