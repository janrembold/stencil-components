// import { MyComponent } from "./my-component";
// import { MyComponent } from "../../../dist/custom-elements";
import { html } from 'lit-html';
import readme from './readme.md';
export default {
  title: 'Example/Foo',
  parameters: {
    notes: { readme },
  }
};
const Template = args => html `<my-component first="${args.first}" last="${args.last}"></my-component>`;
export const Demo = Template.bind({});
Demo.args = {
  first: 'Foo',
  last: 'Bar',
};
