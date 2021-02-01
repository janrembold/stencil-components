import { r as registerInstance, h, H as Host } from './index-73b2ea61.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block;background-color:var(--theme-background-color);padding:20px}.foo-bar{color:red}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h(Host, null, "Hellooooo ", h("span", { class: "foo-bar" }, "World"), "! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
