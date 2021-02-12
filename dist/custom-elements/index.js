import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const demoContainerCss = ":host{display:block;padding:20px;border:2px solid lightcoral}";

const DemoContainer = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return demoContainerCss; }
};

const demoHeadlineCss = ":host{display:block}h2{font-family:Stencil, Arial;color:var(--theme-h2-color)}";

const DemoHeadline = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("h2", null, this.headline)));
  }
  static get style() { return demoHeadlineCss; }
};

const demoPropsCss = ":host{display:block}";

const DemoProps = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    /**
     * An array of strings
     */
    this.stringArray = [];
  }
  render() {
    return (h(Host, null, h("h5", null, "List of strings"), h("p", null, this.simpleObject.foo || 'undefined'), this.simpleObject.bar && h("p", null, "Bar is true"), h("ul", null, this.stringArray.map(str => (h("li", null, str))))));
  }
  static get style() { return demoPropsCss; }
};

const demoStateCss = ":host{display:block}";

const DemoState = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.count = 0;
  }
  handleClick() {
    this.count++;
  }
  render() {
    return (h(Host, null, h("button", null, "Clicked me ", this.count, " times")));
  }
  static get style() { return demoStateCss; }
};

const DemoContainer$1 = /*@__PURE__*/proxyCustomElement(DemoContainer, [1,"demo-container"]);
const DemoHeadline$1 = /*@__PURE__*/proxyCustomElement(DemoHeadline, [1,"demo-headline",{"headline":[1]}]);
const DemoProps$1 = /*@__PURE__*/proxyCustomElement(DemoProps, [1,"demo-props",{"stringArray":[16],"simpleObject":[16]}]);
const DemoState$1 = /*@__PURE__*/proxyCustomElement(DemoState, [1,"demo-state",{"count":[32]},[[2,"click","handleClick"]]]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      DemoContainer$1,
  DemoHeadline$1,
  DemoProps$1,
  DemoState$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { DemoContainer$1 as DemoContainer, DemoHeadline$1 as DemoHeadline, DemoProps$1 as DemoProps, DemoState$1 as DemoState, defineCustomElements };
