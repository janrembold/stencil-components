import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const globalScripts = () => {};

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

const demoShadowOffCss = ":host{display:block}h2{color:var(--theme-h2-color, lime)}";

const DemoShadowOff = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("h2", null, "H2 - Shadow DOM off")));
  }
  static get style() { return demoShadowOffCss; }
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

const jrReaderCss = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;justify-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid grey;max-width:900px}.move{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-wrap:nowrap;flex-wrap:nowrap;text-align:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.forward{display:block;-webkit-box-flex:0;-ms-flex:0 0 200px;flex:0 0 200px}.back{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px}.text{position:relative;-webkit-box-flex:2;-ms-flex-positive:2;flex-grow:2;font-size:30px;overflow:hidden;height:60px;border-left:1px solid grey;border-right:1px solid grey}.text>p{position:absolute;top:0;left:0;padding:10px;margin:0;width:100%;white-space:nowrap}";

const JrReader = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.left = 0;
  }
  logMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const foo = event.clientX < rect.left ? 0 : event.clientX - rect.left;
    const distanceInPercent = Math.round((foo / rect.width) * 100);
    console.log('onMouseMove', distanceInPercent);
  }
  render() {
    return (h(Host, null, h("div", { class: "move back" }, "<<"), h("div", { class: "text" }, h("p", { style: { translateX: `${this.left}%` } }, "Lesen bezeichnet im engeren Sinn das visuelle oder auch taktile Umsetzen von Schriftzeichen in Lautsprache: Buchstabenlaute, Sprechsilben, W\u00F6rter, S\u00E4tze und ganze Textabschnitte. Lesen wird auch beim Umgang mit nicht-linearen Texten, also z.B. Karten, technischen Zeichnungen, Fahrpl\u00E4nen, graphischen Darstellungen, Schaltpl\u00E4nen, Musiknoten und mathematischen Formeln gebraucht. Im weiteren Sinn versteht man darunter die Rekonstruktion der im Text kodierten Bedeutungsinhalte und den Aufbau einer mentalen Repr\u00E4sentation dieser Inhalte in einem sog. Situations- oder mentalen Modell. (s.a. Textinterpretation)")), h("div", { class: "move forward", onMouseMove: (event) => this.logMouseMove(event) }, ">>")));
  }
  static get style() { return jrReaderCss; }
};

globalScripts();
const DemoContainer$1 = /*@__PURE__*/proxyCustomElement(DemoContainer, [1,"demo-container"]);
const DemoHeadline$1 = /*@__PURE__*/proxyCustomElement(DemoHeadline, [1,"demo-headline",{"headline":[1]}]);
const DemoProps$1 = /*@__PURE__*/proxyCustomElement(DemoProps, [1,"demo-props",{"stringArray":[16],"simpleObject":[16]}]);
const DemoShadowOff$1 = /*@__PURE__*/proxyCustomElement(DemoShadowOff, [0,"demo-shadow-off"]);
const DemoState$1 = /*@__PURE__*/proxyCustomElement(DemoState, [1,"demo-state",{"count":[32]},[[2,"click","handleClick"]]]);
const JrReader$1 = /*@__PURE__*/proxyCustomElement(JrReader, [1,"jr-reader",{"left":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      DemoContainer$1,
  DemoHeadline$1,
  DemoProps$1,
  DemoShadowOff$1,
  DemoState$1,
  JrReader$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { DemoContainer$1 as DemoContainer, DemoHeadline$1 as DemoHeadline, DemoProps$1 as DemoProps, DemoShadowOff$1 as DemoShadowOff, DemoState$1 as DemoState, JrReader$1 as JrReader, defineCustomElements };
