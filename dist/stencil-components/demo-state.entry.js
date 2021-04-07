import { r as registerInstance, h, e as Host } from './index-7aee9f45.js';

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

export { DemoState as demo_state };
