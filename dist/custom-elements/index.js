import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const hmgContainerCss = ":host{display:block;padding:20px;background-color:var(--theme-background-color, pink);border:1px solid red}";

const HmgContainer = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
  static get style() { return hmgContainerCss; }
};

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block;background-color:var(--theme-background-color)}.foo-bar{color:red}";

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
    return h(Host, null, "Hellooooo, ", h("span", { class: "foo-bar" }, "World"), "! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const HmgContainer$1 = /*@__PURE__*/proxyCustomElement(HmgContainer, [1,"hmg-container"]);
const MyComponent$1 = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      HmgContainer$1,
  MyComponent$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { HmgContainer$1 as HmgContainer, MyComponent$1 as MyComponent, defineCustomElements };
