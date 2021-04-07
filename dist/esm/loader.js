import { B as BUILD, C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-7341b105.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (BUILD.cssVarShim && !(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-abbef754.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  globalScripts();
  return bootstrapLazy([["demo-container",[[1,"demo-container"]]],["demo-headline",[[1,"demo-headline",{"headline":[1]}]]],["demo-props",[[1,"demo-props",{"stringArray":[16],"simpleObject":[16]}]]],["demo-shadow-off",[[0,"demo-shadow-off"]]],["demo-state",[[1,"demo-state",{"count":[32]},[[2,"click","handleClick"]]]]],["jr-reader",[[1,"jr-reader",{"left":[32]}]]]], options);
  });
};

export { defineCustomElements };
