import { r as registerInstance, h, H as Host } from './index-73b2ea61.js';

const hmgContainerCss = ":host{display:block;padding:20px;background-color:var(--theme-background-color, pink);border:1px solid red}";

const HmgContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
HmgContainer.style = hmgContainerCss;

export { HmgContainer as hmg_container };
