import { r as registerInstance, h } from './index-19f88212.js';

const hmgContainerCss = ":root{padding:20px;background-color:var(--theme-background-color);border:1px solid red}.container{padding:30px;background-color:var(--theme-background-color);border:1px solid blue}";

const Container = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", { class: "container" }, h("slot", null));
  }
};
Container.style = hmgContainerCss;

export { Container as hmg_container };
