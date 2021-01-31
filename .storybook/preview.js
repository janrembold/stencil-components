import { defineCustomElements } from '../loader';
import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../.stencil/docs.json';

if (docJson) {
  console.log(docJson);
  setStencilDocJson(docJson);
}
defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { hideNoControlsWarning: true },
};
