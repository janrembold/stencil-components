import { r as registerInstance, h, e as Host } from './index-7aee9f45.js';

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

export { DemoHeadline as demo_headline };
