import { r as registerInstance, h, e as Host } from './index-7341b105.js';

const demoShadowOffCss = ":host{display:block}h2{color:var(--theme-h2-color, lime)}";

const DemoShadowOff = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("h2", null, "H2 - Shadow DOM off")));
  }
};
DemoShadowOff.style = demoShadowOffCss;

export { DemoShadowOff as demo_shadow_off };
