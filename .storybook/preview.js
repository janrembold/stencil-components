import { defineCustomElements } from '../loader';
import { extractArgTypes, extractComponentDescription, setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../.stencil/docs.json';
import '../src/global/global.css';

if (docJson) {
  console.log(docJson);
  setStencilDocJson(docJson);
}
defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { hideNoControlsWarning: true },
  docs: {
    extractArgTypes,
    extractComponentDescription,
  },
};
