'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5eb4963.js');

/*
 Stencil Client Patch Esm v2.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["hmg-container.cjs",[[1,"hmg-container"]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
