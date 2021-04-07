import { r as registerInstance, h, e as Host } from './index-7341b105.js';

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

export { DemoProps as demo_props };
