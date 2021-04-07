'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4018198c.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (index.BUILD.cssVarShim && !(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-55ff430e.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["demo-container.cjs",[[1,"demo-container"]]],["demo-headline.cjs",[[1,"demo-headline",{"headline":[1]}]]],["demo-props.cjs",[[1,"demo-props",{"stringArray":[16],"simpleObject":[16]}]]],["demo-shadow-off.cjs",[[0,"demo-shadow-off"]]],["demo-state.cjs",[[1,"demo-state",{"count":[32]},[[2,"click","handleClick"]]]]],["jr-reader.cjs",[[1,"jr-reader",{"left":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
