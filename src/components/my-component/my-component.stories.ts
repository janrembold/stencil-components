// import { MyComponent } from "./my-component";
// import { MyComponent } from "../../../dist/custom-elements";
import { html } from 'lit-html';
import readme from './readme.md';

export default {
  title: 'Example/Foo',
  component: 'my-component',
  parameters: {
    notes: { readme },
  }
};

const Template = ({first,middle,last}) => html`<my-component first="${first}" middle="${middle}" last="${last}"></my-component>`;

export const Demo = Template.bind({});
Demo.args = {
  first: 'Foo',
  middle: '',
  last: 'Bar',
};

export const StressTest = Template.bind({});
StressTest.args = {
  first: 'Hubertus',
  middle: 'Maximilian',
  last: 'Wolfeschlegelsteinhausenbergerdorff-Ottovordemgentschenfeldelein',
};
