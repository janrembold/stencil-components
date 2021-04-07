import { r as registerInstance, h, e as Host } from './index-7341b105.js';

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

export { DemoContainer as demo_container };
