import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const hmgContainerCss = ":root{padding:20px;background-color:var(--theme-background-color);border:1px solid red}.container{padding:30px;background-color:var(--theme-background-color);border:1px solid blue}";

const Container = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return h("div", { class: "container" }, h("slot", null));
  }
  static get style() { return hmgContainerCss; }
};

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}.foo-bar{color:red}";

const MyComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, ", h("span", { class: "foo-bar" }, "World"), "! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const HmgContainer = /*@__PURE__*/proxyCustomElement(Container, [1,"hmg-container"]);
const MyComponent$1 = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      HmgContainer,
  MyComponent$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { HmgContainer, MyComponent$1 as MyComponent, defineCustomElements };
