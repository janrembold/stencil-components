import { p as promiseResolve, b as bootstrapLazy } from './index-92baae72.js';

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["demo-container_4",[[1,"demo-container"],[1,"demo-headline",{"headline":[1]}],[1,"demo-props",{"stringArray":[16],"simpleObject":[16]}],[1,"demo-state",{"count":[32]},[[2,"click","handleClick"]]]]]], options);
  });
};

export { defineCustomElements };
