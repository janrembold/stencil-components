'use strict';

const index = require('./index-5de7c5f9.js');

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-components.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["demo-container_4.cjs",[[1,"demo-container"],[1,"demo-headline",{"headline":[1]}],[1,"demo-props",{"stringArray":[16],"simpleObject":[16]}],[1,"demo-state",{"count":[32]},[[2,"click","handleClick"]]]]]], options);
});
