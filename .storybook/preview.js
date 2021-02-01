import { defineCustomElements } from '../loader'
import {
  extractArgTypes,
  extractComponentDescription,
  setStencilDocJson,
} from '@pxtrn/storybook-addon-docs-stencil'
import docJson from '../.stencil/docs.json'
import '../src/global/global.css'

// fix component documentation
if (docJson) {
  setStencilDocJson(docJson)
}

// define web components
defineCustomElements()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  controls: { hideNoControlsWarning: true },
  docs: {
    extractArgTypes,
    extractComponentDescription,
  },
  themes: [
    { name: 'light (default)', color: '#fff', default: true },
    { name: 'dark', class: 'theme-dark', color: '#000' },
  ],
}
