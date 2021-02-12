import { r as registerInstance, h, H as Host } from './index-92baae72.js';

const demoContainerCss = ":host{display:block;padding:20px;border:2px solid lightcoral}";

const DemoContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
DemoContainer.style = demoContainerCss;

const demoHeadlineCss = ":host{display:block}h2{font-family:Stencil, Arial;color:var(--theme-h2-color)}";

const DemoHeadline = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("h2", null, this.headline)));
  }
};
DemoHeadline.style = demoHeadlineCss;

const demoPropsCss = ":host{display:block}";

const DemoProps = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * An array of strings
     */
    this.stringArray = [];
  }
  render() {
    return (h(Host, null, h("h5", null, "List of strings"), h("p", null, this.simpleObject.foo || 'undefined'), this.simpleObject.bar && h("p", null, "Bar is true"), h("ul", null, this.stringArray.map(str => (h("li", null, str))))));
  }
};
DemoProps.style = demoPropsCss;

const demoStateCss = ":host{display:block}";

const DemoState = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.count = 0;
  }
  handleClick() {
    this.count++;
  }
  render() {
    return (h(Host, null, h("button", null, "Clicked me ", this.count, " times")));
  }
};
DemoState.style = demoStateCss;

export { DemoContainer as demo_container, DemoHeadline as demo_headline, DemoProps as demo_props, DemoState as demo_state };
