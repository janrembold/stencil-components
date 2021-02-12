'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5de7c5f9.js');

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["demo-container_4.cjs",[[1,"demo-container"],[1,"demo-headline",{"headline":[1]}],[1,"demo-props",{"stringArray":[16],"simpleObject":[16]}],[1,"demo-state",{"count":[32]},[[2,"click","handleClick"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
